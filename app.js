const keypressed = document.querySelector("#kpressed");
const keycode = document.querySelector("#kcode");
const eventkey = document.querySelector("#eventkey")

document.addEventListener("keypress", event => {
    let key = event.code;
    keypressed.innerHTML = key;
});

document.addEventListener("keypress", event => {
    let keyc = event.which;
    keycode.innerHTML = keyc;
    
});

document.addEventListener("keypress", event => {
    let eventK  = event.key;
    eventkey.innerHTML = eventK;
});
