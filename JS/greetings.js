const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value; //유저의 이름을 변수로 저장
   // console.log(USERNAME_KEY);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}


const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    //유저 이름이 아무것도 없으니까 입력할 수 있는 창을 뜨게함
    loginForm.addEventListener("submit",onLoginSubmit);
}
else {
    //show the greeting, 유저 이름이 저장되어 있을 때
    paintGreeting(saveUsername);
}

function paintGreeting(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);  
}