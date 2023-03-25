def save_to_file(file_name, jobs):
    file = open(f"{file_name}.csv", "w") #파일 만드는 함수(f"파일 생성하는 모드", "파일여는 방법 w는 읽기전용")
    file.write("Position,Company,Location,URL\n") #파일연 후 첫번째 줄 글 쓰기.

    for job in jobs:
        file.write(f"{job['position']},{job['company']}, {job['location']}, {job['link']}\n")
    # f"쌍따옴표를 사용하고 있기에 안에내용은 ''로 진행 "
    file.close()