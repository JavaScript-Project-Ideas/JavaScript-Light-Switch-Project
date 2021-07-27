// Main Logic Here
let lightOff = document.getElementById('lightoff');
let lightOn = document.getElementById('lighton');


lightOff.addEventListener('click', function (e) {
    document.getElementById('lightswitch').src = "../img/lightOff.gif"
});

lightOn.addEventListener('click', function (e) {
    document.getElementById('lightswitch').src = "../img/lightOn.gif"
});