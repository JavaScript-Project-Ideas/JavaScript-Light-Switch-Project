// Main Logic Here

function changeImage() {
  var image = document.getElementById('#light');
  if (image.src.match("bulbon")) {
    image.src = "pic_bulboff.gif";
  } else {
    image.src = "pic_bulbon.gif";
  }
}



document.getElementById('light').innerHTML = '<img src="../img/lightOff.gif">';