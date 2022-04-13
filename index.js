var numberOfDrumButtons = document.querySelectorAll(".drum");

for (var i = 0; i < numberOfDrumButtons.length; i++) {
  numberOfDrumButtons[i].addEventListener("click", function() {
    var buttonInnerHTML=this.innerHTML;
    playsound(buttonInnerHTML);
    buttonanimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown",function(event){
  var eventKey=event.key;
  playsound(eventKey);
  buttonanimation(eventKey);
});

function playsound(exp){
  switch (exp) {
    case "f":
        var baya = new Audio('sounds/baya.wav');
        baya.play();
        break;
    case "j":
        var dayan = new Audio('sounds/dayan.wav');
        dayan.play();
        break;
    default: console.log(exp);
  }
}

function buttonanimation(currentkey){
  var activebutton=document.querySelector("."+currentkey);
  activebutton.classList.add("pressed");

  setTimeout(function () {
    activebutton.classList.remove("pressed");
  }, 100);
}
