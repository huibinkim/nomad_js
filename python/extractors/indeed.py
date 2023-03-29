from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from requests import get
from bs4 import BeautifulSoup

#셀리니움에서 크롬페이지 request?하는 것인듯
options = Options()
options.add_argument("--no-sandbox")
options.add_argument("--disable-dev-shm-usage")
browser = webdriver.Chrome(options=options)

def get_page_count(keyword):
    base_url = "https://kr.indeed.com/jobs?q="#스크래핑할 웹사이트의 기본인데 아래와 다른게 여긴 페이지수를 위한 거라 간단쓰
    browser.get(f"{base_url}{keyword}")
    soup = BeautifulSoup(browser.page_source, "html.parser")
    
    pagination = soup.find('nav', class_="ecydgvn0") #페이지네이션을 html에서 찾아옴.
    pages = pagination.find_all('div', class_="ecydgvn1") #페이지들 
    if not pages: #페이지 div를 못찾은 경우(한페이지인경우)
        return 1
    count = len(pages) #페이지의 수를 카운트라 변수넣기
    if count >= 5: #페이지 수가 5이상일때
        return 5
    else: #페이지수가 1이상 5미만일땐 그냥 페이지수
        return count
    #아래의 함수는 한페이지만 스크랩 가능 따라서 여러페이지 스크랩을 할 수있는 함수가 필요하다.
def extract_indeed_jobs(keyword):
    pages = get_page_count(keyword) #위에서 페이지 수 함수통해 페이지 수 도출
    print("found", pages, "pages") #몇페이지인지 보여줌.
    results = []
    for page in range(pages): #아래의 스크래핑을 페이지의 페이지 수만큼 돌린다.
        base_url = "https://kr.indeed.com/jobs" #스크래핑할 웹사이트의 기본
        all_url = f"{base_url}?q={keyword}&start={page*10}"
        print("request", all_url)
        browser.get(all_url) #브라우저에서 웹사이트 get
        soup = BeautifulSoup(browser.page_source, "html.parser") #브라우저의 웹사이트 페이지 소스를 html로 가져옴.
        
        job_list = soup.find("ul", class_="jobsearch-ResultsList") #가져온 html에서 class가 있는 ul 가져옴.
        jobs = job_list.find_all("li", recursive=False) #recursive를 쓰는 이유는 ul의 바로 아래에 있는것만 검색 하려고
        # print(len(jobs))
        for job in jobs: #li 하나씩
            zone = job.find("div", class_="mosaic-zone") #필요없는 div 
            if zone == None: #zone이 없다면
                anchor = job.select_one("h2 a") #h2의 a 한개.
                title = anchor['aria-label'] #그 a의 aria-label
                link = anchor['href']
                company = job.find("span", class_="companyName")
                location = job.find("div", class_="companyLocation")
                job_data = {
                    'link': f"https://kr.indeed.com{link}",
                    'company': company.string.replace(","," "), #간혹 span의 companyName에 콤마로 혼란스러울수있다. replace를 써서 빈칸으로 교체
                    'location': location.string.replace(","," "),
                    'position': title.replace(","," ")
                }
                results.append(job_data) #result list안에 넣어주기

        for result in results:
            print(result, "\n////////\n") #결과 하나하나씩 보여주기
    return results
            

    #range 순서객체를 return해주는 함수
# jobs = extract_indeed_jobs("python")
# print(len(jobs))
    