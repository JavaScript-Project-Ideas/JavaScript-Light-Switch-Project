// implementation of turnOnOff function -->
function turnOnOff() 
// taking image in image variable
var image = document.getElementById('Image');

//Match the image name
//whether it is ONbulb or OFFbulb
//change image to OFFbulb.jpg if
//it match with ONbulb otherwise
//change it to ONbulb.jpg -->
if (image.src.match("ONbulb")){
    image.src = "https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg";
else
    image.src = "https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg",
}




// SEcond 
const light = document.querySelector('#bulb');

light.addEventListener('click', function(e){

    e.target.classList.toggle('bulb-on');

})


// Main Logic Here
function lightSwitch() {
    var image = document.getElementById('light');
    if (image.src.match("bulbon")) {
      image.src = "../img/lightOff.gif";
    } else {
      image.src = "../img/lightOn.gif";
    }
  }