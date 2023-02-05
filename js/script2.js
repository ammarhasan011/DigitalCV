//Colored bar when scroll down.
const header = document.querySelector("header");

document.addEventListener("scroll", function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add("solid");
  } else {
    header.classList.remove("solid");
  }
});

// color on my markt text
document.addEventListener("mouseup", function () {
  var selectedText = window.getSelection().toString();
  if (selectedText.length > 0) {
    var allSpans = document.getElementsByTagName("span");
    for (var i = 0; i < allSpans.length; i++) {
      allSpans[i].style.backgroundColor = "";
    }
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);
    var newNode = document.createElement("span");
    newNode.style.backgroundColor = getRandomColor();
    range.surroundContents(newNode);
  }
});

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
