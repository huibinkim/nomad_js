const images = [
    "bg_01.jpeg", "bg_02.png", "bg_03.jpeg", "bg_04.jpeg"
];
const todayImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${todayImg}`;
bgImg.classList.add("bg");
document.body.appendChild(bgImg);
//append() 맨뒤에 추가
//prepand() 맨앞에 추가