# a = 2
# b = 3
# c = a + b
# print(c)
# # 파이썬은 코드를 위에서 아래로 읽느다.
# my_age = 88
# # snake기법으로 변수지정 camel기법도 가능은 함.
# my_name = "huibin"
# print(my_name)

# is_live = True
# print(is_live)
# print(my_name , "is", my_age)

# function 에 대해
# 함수 만들때
# def say_hello(e, user_age):  #def 함수명(): 공백이 있어야 이 함수 안에 있다는것을 알수있음.
#   print("hello", e, "how r u", user_age)  #e : parameter
#   print(user_age)

# say_hello("nic", 12)  #함수 호출 #nic, ddnic : argument
# function에 몇개의 argument를 줄수있는가? parameter을 준만큼
# 함수란 몇번이고 재사용이 가능한 코드
# parameter 함수안으로 데이터를 보내 함수의 결과를 바꿀 수 있게 하는것

# def tax_calculator(money):
#   print(money * 0.35)

# def say_hello(user_call = "anonymous"): #user_call = ""값은 기본값을 주는 것.
#   print("hello", user_call)

# say_hello("no")
# say_hello()

# 과제
# def plus(a = 7, b = 2):
#   print(a + b)

# def minus(a = 3, b = 7):
#   print(a - b)

# def double(a = 3, b = 2):
#   print(a * b)

# def power_Of(a = 1, b = 8):
#   print(a**b)

# def divide( a= 8, b=2):
#   print(a/b)

# plus(2, 3)
# minus()
# double(3, 5)
# power_Of(2, 4)
# divide()

# def tax_calc(money):
#   # print(money * 0.35) console에 나타내기만함
#   return money * 0.35

# def pay_tax(tax):
#   print("tank you", tax)

# pay_tax(tax_calc(144449444))
# 2.8
# my_name = "nico"
# my_age = 20
# my_color = "red"
# 위의 변수를 바로 print하기위해서는 f를 앞에 붙이고 {}가 필요.
# return은 값을 가지고 그걸 함수 바깥으로 준다.그리고 파이썬은 그값을 잡아 코드에 대입시켜준다.그리고 return을 쓰면 바로 함수 끝 return이후의 코드는 파이썬이 작동하지 않는다.
# print(f"hello {my_name} here, ")

# def make_juice(fruit):
#   return f"{fruit}+🏖"
#   print("sfsfs")

# def add_ice(juice):
#   return f"{juice}+🥇"

# def add_sugar(iced_juice):
#   return f"{iced_juice}+🍍"

# juice = make_juice("🍔")
# cold = add_ice(juice)
# perfect = add_sugar(cold)
# print(perfect)

# 3.0 if, else, elif(else if같은거)
# password_correct = False
# if password_correct:
#   print("HEre is yours")
# else:
#   print("no")
# winner = 8

# if winner > 10:
#   print("winner win")
# elif winner < 10:
#   print("winner lose")
# else:
#   print("winner 10")

# input함수 : 사용자에게 질문, type함수, int() : 정수로 만듬 - built-in function
# age = int(input("How old r u"))
# if age < 18:
#   print("no")
# elif 18 <= age and age < 35:
#   print("mid")
# elif age == 60 or age == 70:
#   print("birth")
# else :
#   print("yes")
#3.4
"""
from random import randint

user_choice = int(input("choose num"))
pc_choice = randint(1, 50) #i imported this

if user_choice == pc_choice:
  print("you won")
elif user_choice > pc_choice:
  print("lower", pc_choice)
elif user_choice < pc_choice:
  print("higher")
  
#3.5 while 내가 스탑하기 전까지 계속 동작, if와 비슷 벗 멈추지 않는다.
# 조건이 false가 될때까지 동작함.
distance = 0
while distance < 20:
  print("im running", distance, "km")
  distance = distance + 1

from random import randint

print("welcome")
pc_choice = randint(1, 50) #i imported this

playing = True

while playing:
  user_choice = int(input("choose num(1-50)"))
  if user_choice == pc_choice:
    print("you won")
    playing = False
  elif user_choice > pc_choice:
    print("lower", pc_choice)
  elif user_choice < pc_choice:
    print("higher")

"""
# 4.0 method
# python의 데이터 구조 (3가지)
# data structure(자료구조): 데이터를 구조화하고 싶을 때 사용
# 1. list 2. tuple 3. dictionary
# method : 데이터 뒤에 결합/연결된 function >> name.count(), upper()
# name = "lora"
# print(name.endswith("o")), reverse, clear()
# list
# days_of_week = ["Mon", "Tue", "Wed", "Thu", "Fri", [1,2,3], True]

# print(days_of_week[5])
# 2. tuple : 불변성을 가진다. 즉, 튜플을 변경하지 못한다.
# days = ("Mon", "Tue", "Wed")
# print(days[-1])
# 3. dictionary
# 사전하면 단어와 정의가 있다. key-value로 보면 됨. key(단어) value(정의)
# player = {
#   'name': 'nico',
#   'age' : 12,
#   'alive' : True,
#   'food': ["🥐", "🍊"],
#   'friend': {
#     "name" : "lynn",
#     "food" : ["dd"]
#   }

# }
# player['xp'] = 23333
# player['food'] = "🍊"
# print(player['friend']['food'])
# print(player.get('food'))
#4.4 loop
'''
from requests import get

websites = [
  "google.com", "https://httpstat.us/502", "https://httpstat.us/404",
  "https://httpstat.us/300", "https://httpstat.us/200",
  "https://httpstat.us/101"
]
#https://httpstat.us/xxx is service for generating HTTP codes

results = {}

#for(loop)
for website in websites:
  if not website.startswith("https://"):
    website = f"https://{website}"
  response = get(website)
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
print(results)

#pypi 사이트는 파이썬의 다양한 모듈을 사람들이 만들어 놓은 곳이다. 원하는 기능을 찾아서 사용가능하다.
#4.6 requests : 내가 사이트로 이동할 때 request 된다.
# 내 브라우저는 google 서버에 request를 보내고 google서버는 나한테 웹사이트를 보내준다.
# get : function이다. 이동한 후 website를 가져오는 것.
# get은 response를 return해준다.
# response는 웹사이트의 응답이다.
# 인터넷은 HTTP protocol에 기반한다. 그래서 컴터들이 서로 소통하는 방식은 http request이다.
# 따라서 인터넷이 잘 작동되는지 확인하기 위해 http 상태 코드를 확인함.
# response 200은 확인해보면 잘 작동한다는 뜻
# 100은 continue를 의미, 200성공적, 300 redirection cash, 400은 잘 안됬을때 , 500 error
'''

#5.1 웹스크래핑 : 너가 쓴 코드가 웹사이트에 들어가서 데이터를 추출해내는 것.
# beautifulsoup을 통해 html의 언어를 파이썬으로 가져올 수 있다.
#beautifulsoup는 모든 것을 파이썬의 데이터 구조로 우리가 쓸 수 있는 entity를 가져온다.
'''
#class_= "jobs" >>keyword argument은 자리에 신경쓰지 않고 argument의 이름에 신경쓰겠다는 것이다.
#
def say_hello(name, age):
  print(f"Hello {name} {age}")

say_hello("nico", 12) #자리의 순서가 중요한 표현법
say_hello(age = 12, name = "nico") #자리보다 네임이 중요한 표현법

#
python에서 object의 list를 가지고 있고 list의 길이를 안다면 변수를 일일이 저장하지 않아도 한번에 지정이 가능하다. array나 list
ex) list_of_num = [1, 2, 3]
    first, second, third = list_of_num  
'''


# recursive = False => 바로 아래만 찾아줌
# mosaic zone까지 바로 포함되는 문제점있음
#jobs = job_list.find_all('li', recursive=False)
# None 은 아무것도 없을 때
#5.17 .replace("," , " ") >>> 콤마를 스페이스로 대체한다.

# from extractors.indeed import extract_indeed_jobs
# from extractors.wwr import extract_wwr_jobs
# from file import save_to_file

# keyword = input("What do you want to search?")
# indeed = extract_indeed_jobs(keyword)
# wwr = extract_wwr_jobs(keyword)
# jobs = indeed + wwr

# save_to_file(keyword, jobs)

# 6.0 flask 는 웹사이트를 만들고, 사용자 입력을 처리하고, 파일을 전달하고, html파일을 user에게 보여줌
from flask import Flask, render_template, request, redirect, send_file
from extractors.indeed import extract_indeed_jobs
from extractors.wwr import extract_wwr_jobs
from file import save_to_file
#request : 브라우저가 웹사이트에 가서 콘텐츠를 요청하는 것이다.

#user에 응답
app = Flask(__name__)

@app.route("/")  #decorator
def home():
  return render_template("home.html", name="huibin") 
  #html에 변수주기
  #name = "huibin"이라는 request가 도착하면 Flask는 변수를 가지고 html 템플릿 안에 있는 변수를 request한 값으로 대체하여 user에게 전달된다.
  #위의 상황을 rendering이라 한다.
db = {}

@app.route("/search")
def search():
  keyword = request.args.get("keyword")
  if keyword == "":
    return redirect("/")
  if keyword in db:
    jobs = db[keyword]
  else:
    indeed = extract_indeed_jobs(keyword)
    wwr = extract_wwr_jobs(keyword)
    jobs = indeed + wwr
    db[keyword] = jobs
  return render_template("search.html", keyword=keyword, jobs=jobs)

#파일로 export하기 위해 만든 함수.
@app.route("/export") #url 설정
def export():
  keyword = request.args.get("keyword") #키워드 가져오기
  if keyword == "": #키워드 안찾고 search버튼 누를경우 리다이렉트
    return redirect("/")
  if keyword == None: #키워드가 없을 경우 리다이렉트
    return redirect("/")
  if keyword not in db: #우리의 데이터베이스에 없을경우에 그 키워드를 search하는 페이지로 이동
    return redirect(f"/search?keyword={keyword}")
  save_to_file(keyword, db[keyword])
  return send_file(f"{keyword}.csv", as_attachment=True) #파일의이름, as_attachment=True는 다운로드 실행

app.run("127.0.0.1")