const keypressed = document.querySelector("#kpressed");
const keycode = document.querySelector("#kcode");

document.addEventListener("keypress", event => {
    let key = event.code;
    keypressed.innerHTML = key;
});

document.addEventListener("keypress", event => {
    let keyc = event.which;
    keycode.innerHTML = keyc;
});

