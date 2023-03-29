player = {
  'name': 'nico',
  'age' : 12,
  'alive' : True,
  'food': ["🥐", "🍊"],
  'friend': {
    "name" : "lynn",
    "food" : ["dd"]
  }
}
print(player.get('food'))

##############################################
from requests import get

websites = [
  "google.com", "https://httpstat.us/502", "https://httpstat.us/404",
  "https://httpstat.us/300", "https://httpstat.us/200",
  "https://httpstat.us/101"
]

results = {}

#for(loop)
for website in websites: #웹사이트 리스트 안의 내용들 하나씩
  if not website.startswith("https://"): #하나씩 만약 http://로 시작안하는 친구들은
    website = f"https://{website}" #붙여줘라.
  response = get(website) #response는 하나씩 가져온다.
  code_check = response.status_code #response만 프린트하면 string도 함께 나온다. 그래서 상태코드만 불러낼 수 잇다.

  if code_check == 200:
    # print(f"{website} is ok")
    results[website] = "good"
  elif code_check < 200:
    results[website] = "continue"
  elif code_check > 200 and code_check < 300:
    results[website] = "ok"
  elif 300 <= code_check < 400:
    results[website] = "redirect"
  elif 400 <= code_check < 500:
    results[website] = "not good"
  elif code_check > 500:
    results[website] = "too bad"
print(results) #리스트에 있었던 웹사이트들을 dictionary로 