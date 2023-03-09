
const quotes = [
    {
        quote: "삶이 있는 한 희망은 있다.",
        author: "키케로",
    },
    {
        quote: "산다는것 그것은 치열한 전투이다.",
        author: "로망로랑",
    },
    {
        quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
        author: "사무엘존슨",
    },
    {
        quote: "언제나 현재에 집중할수 있다면 행복할것이다.",
        author: "파울로 코엘료",
    },
    {
        quote: "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해!",
        author: "찰리 채플린",
    },
    {
        quote: "신은 용기있는자를 결코 버리지 않는다.",
        author: "켄러",
    },
    {
        quote: "피할수 없으면 즐겨라.",
        author: "로버트 엘리엇",
    },
    {
        quote: "먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에 ",
        author: "엘사 맥스웰",
    },
    {
        quote: "먼저핀꽃은 먼저진다 남보다 먼저 공을 세우려고 조급히 서둘것이 아니다.",
        author: "채근담",
    },
    {
        quote: "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다 . 더많이 실험할수록 더나아진다.",
        author: "랄프 왈도 에머슨",
    },
    {
        quote: "한번의 실패와 영원한 실패를 혼동하지 마라",
        author: "F.스콧 핏제랄드",
    },
    {
        quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.",
        author: "앙드레 말로",
    },
    {
        quote: "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다",
        author: "단테",
    },
    {
        quote: "자신감 있는 표정을 지으면 자신감이 생긴다.",
        author: "찰스다윈",
    },
    {
        quote: "네 믿음은 네 생각이 된다 . 네 생각은 네 말이 된다. 네말은 네 행동이 된다 네행동은 네 습관이된다 . 네 습관은 네 가치가 된다 . 네 가치는 네 운명이 된다.",
        author: "간디",
    },
    {
        quote: "절대 포기하지 말라. 당신이 되고 싶은 무언가가 있다면, 그에 대해 자부심을 가져라. 당신 자신에게 기회를 주어라. 스스로가 형편없다고 생각하지 말라. 그래봐야 아무 것도 얻을 것이 없다. 목표를 높이 세워라.인생은 그렇게 살아야 한다.",
        author: "마이크 맥라렌",
    },
    {
        quote: "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다.",
        author: "괴테",
    },
    {
        quote: "화려한 일을 추구하지 말라. 중요한 것은 스스로의 재능이며, 자신의 행동에 쏟아 붓는 사랑의 정도이다.",
        author: "머더 테레사",
    },
    {
        quote: "흔히 사람들은 기회를 기다리고 있지만 기회는 기다리는 사람에게 잡히지 않는 법이다. 우리는 기회를 기다리는 사람이 되기 전에 기회를 얻을 수 있는 실력을 갖춰야 한다. 일에 더 열중하는 사람이 되어야한다.",
        author: "안창호",
    },
    {
        quote: "나이가 60이다 70이다 하는 것으로 그 사람이 늙었다 젊었다 할 수 없다. 늙고 젊은 것은 그 사람의 신념이 늙었느냐 젊었느냐 하는데 있다.",
        author: "맥아더",
    },
    {
        quote: "물러나서 조용하게 구하면 배울 수 있는 스승은 많다. 사람은 가는 곳마다 보는 것마다 모두 스승으로서 배울 것이 많은 법이다. ",
        author: "맹자",
    },
    {
        quote: "돈이란 바닷물과도 같다. 그것은 마시면 마실수록 목이 말라진다. ",
        author: "쇼펜하우어",
    },


]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const TodayQuote = quotes[Math.floor(Math.random() * quotes.length)]; //인용구의 length
// console.log(TodayQuote);
quote.innerText = TodayQuote.quote;
author.innerText = TodayQuote.author;
// Math.ceil() 올림, Math.round() 반올림, Math.floor() 버림, 
// Math.random(); 0~1까지의 숫자를 랜덤으로 나타낸다.

