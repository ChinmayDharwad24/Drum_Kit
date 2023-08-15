/* the event listner when added to a particular element or to complete document then once 
   the event occurs this will call a event handling function (callback function) that is 
   called by the object that experiences the event */


for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum ")[i].addEventListener("click", clickEvent);
}

document.addEventListener("keydown", keyEvent);

function clickEvent() {
  //   if (this === document.querySelectorAll(".drum ")[0]) {
  //     var path = "./sounds/crash.mp3";
  //   } else if (this === document.querySelectorAll(".drum ")[1]) {
  //     var path = "./sounds/kick-bass.mp3";
  //   } else if (this === document.querySelectorAll(".drum ")[2]) {
  //     var path = "./sounds/snare.mp3";
  //   } else if (this === document.querySelectorAll(".drum ")[3]) {
  //     var path = "./sounds/tom-1.mp3";
  //   } else if (this === document.querySelectorAll(".drum ")[4]) {
  //     var path = "./sounds/tom-2.mp3";
  //   } else if (this === document.querySelectorAll(".drum ")[5]) {
  //     var path = "./sounds/tom-3.mp3";
  //   } else if (this === document.querySelectorAll(".drum ")[6]) {
  //     var path = "./sounds/tom-4.mp3";
  //   }

  /* 'this' is an element object and 'e' is an event object.
      Ex: <button></button> generates an element object that can be used
          keyboard click, mouse click ... generate event objects when a particular event occurs on it
    */

  var buttonInnerHTML = this.innerHTML;
  buttonAnimation(buttonInnerHTML);
  playAudio(buttonInnerHTML);
}

function keyEvent(e) {
  var key = e.key;
  buttonAnimation(key);
  playAudio(key);
}

function playAudio(keyOrButton) {
  switch (keyOrButton) {
    case "w":
      var path = "./sounds/crash.mp3";
      break;
    case "a":
      var path = "./sounds/kick-bass.mp3";
      break;
    case "s":
      var path = "./sounds/snare.mp3";
      break;
    case "d":
      var path = "./sounds/tom-1.mp3";
      break;
    case "j":
      var path = "./sounds/tom-2.mp3";
      break;
    case "k":
      var path = "./sounds/tom-3.mp3";
      break;
    case "l":
      var path = "./sounds/tom-4.mp3";
      break;

    default:
      break;
  }
  var audio = new Audio(path);
  audio.play();
}

var pressGetback = (activeKey) => {
    activeKey.classList.remove("pressed");
}

function buttonAnimation(currentKey){
    var activeKey = document.querySelector("."+currentKey);
    activeKey.classList.add("pressed");

    setTimeout(pressGetback, 1000, activeKey);
  
}