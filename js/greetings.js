const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";



function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
}
  
getClock();
setInterval(getClock,1000);

function paintGreetings(username) {
    const wholeGreetings = ["Good morning", "Good Afternoon", "Good Evening", "Goodnight"];
    let greetingIndex = null;

    if (getClock.hours < 12 && getClock.hours >= 4) {
        greetingIndex = wholeGreetings[0];
    } else if (getClock.hours < 6 && getClock.hours >= 12) {
        greetingIndex = wholeGreetings[1];
    } else if (getClock.hours < 11 && getClock.hours >= 6) {
        greetingIndex = wholeGreetings[2];
    } else {
        greetingIndex = wholeGreetings[3];
    }
    // alert(greetingIndex);

    greeting.innerText = `${greetingIndex}, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}