from requests import get
from bs4 import BeautifulSoup

#함수로 재사용하게끔 만들었다.
def extract_wwr_jobs(keyword):

  base_url = "https://weworkremotely.com/remote-jobs/search?utf8=%E2%9C%93&term="

  response = get(f"{base_url}{keyword}")
  if response.status_code != 200:
    print("cant request website")
  else:
    # print(response.text) 웹사이트를 구성하고 있는 코드
    results = []
    soup = BeautifulSoup(response.text, "html.parser")
    jobs = soup.find_all('section', class_="jobs")
    # print(len(jobs))
    for job_section in jobs:
      job_posts = job_section.find_all('li')
      job_posts.pop(-1)  #마지막 순서를 제거
      #pop은 list가 가진 method이고 해당숫자의 list를 제거
      for post in job_posts:
        anchors = post.find_all('a')
        anchor = anchors[1]  #a가 2개 있는데 우리가 필요한 친구 지정
        link = anchor['href']
        company, kind, region = anchor.find_all('span', class_="company")
        title = anchor.find('span', class_="title")
        #find_all은 찾은 모든 것들의 list를 주고, find는 결과값만 준다.
        job_data = {
          'company': company.string,
          'region': region.string,
          'position': kind.string,
          'title': title.string,
          'link': f"https://weworkremotely.com{link}"
        }
        results.append(job_data)
    # for result in results:
    #   print(result)
    #   print("////////")
    return results
