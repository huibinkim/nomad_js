from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from requests import get
from bs4 import BeautifulSoup

options = Options()
options.add_argument("--no-sandbox")
options.add_argument("--disable-dev-shm-usage")

browser = webdriver.Chrome(options=options)
browser.get(
  "https://kr.indeed.com/jobs?q=python&l=&from=searchOnHP&vjk=cc26588019a45caa"
)
soup = BeautifulSoup(browser.page_source, "html.parser")
job_list = soup.find("ul", class_="jobsearch-ResultsList")
jobs = job_list.find_all("li", recursive=False)
print(len(jobs))
print(jobs)
print("//////////")
print("//////////")