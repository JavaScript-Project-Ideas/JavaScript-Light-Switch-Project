// Main Logic Here
let lightOff = document.getElementById('lightOff')
let lightOn = document.getElementById('lightOn')

lightOff.addEventListener('click', function (e) {
    document.getElementById('lightswitch').src = "./img/lightOff.gif"
})
lightOn.addEventListener('click', function (e) {
    document.getElementById('lightswitch').src = "./img/lightOn.gif"
})