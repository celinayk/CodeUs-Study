const quotes = [
    {
        quote: "가뭄 끝에 단비 온다",
        author: "오랫동안 기다렸던 일이 마침내 이루어짐을 비유적으로 이르는 말",
    },
    {
        quote: "새벽바람 사초롱",
        author: "매우 사랑스럽고 소중한 것을 비유적으로 이르는 말",
    },
    {
        quote: "손바닥도 마주쳐야 소리가 난다",
        author: "무슨 일이든 혼자만 잘해서 되는 일 없다.",
    },
    {
        quote: "천리길도 한 걸음부터",
        author: "시작이 중요하며 큰 일이라도 차근차근 이루어나가는 것이라는 뜻",
    },
    {
        quote: "칼로 두부모를 자르듯 하다",
        author: "무슨 일을 하는 데 있어 맺고 끊는 것이 명확한 경우를 비유적으로 이르는 말.",
    },
    {
        quote: "코 아니 흘리고 유복하다",
        author: "고생하지 아니하고 이익을 얻는다는 말",
    },
    {
        quote: "콩 심은 데 콩 나고 팥 심은 데 팥 난다",
        author: "모든 일은 근본에 따라 거기에 걸맞은 결과가 나타나는 것임을 비유적으로 이르는 말",
    },
    {
        quote: "토끼 죽으니 여우 슬퍼한다",
        author: "동류의 괴로움과 슬픔을 같이 괴로워하고 슬퍼함을 비유적으로 이르는 말",
    },
    {
        quote: "하늘을 보아야 별을 따지",
        author: "어떤 성과를 거두려면 그에 상당한 노력과 준비가 있어야 한다는 말",
    },
    {
        quote: "느린 소도 성낼 적이 있다 ",
        author: "착한 사람이 화내면 무섭다는 말",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

//todaysQuote.style.color = "blue";

function dd() {
    const colorr = [
        "blue",
        "red",
        "green",
        "yellow",
        "pink"
    ];

    let num = Math.floor(Math.random() * colorr.length);
    document.getElementById("quote").style.color = colorr[num];
}
dd();