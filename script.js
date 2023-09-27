var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}
document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});

function makeSound(key) {
 
    switch (key) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a":
         var tom2 = new Audio("sounds/tom-2.mp3");
         tom2.play();
         break; 
      case "s":
         var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "d":
         var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      case "j":
         var kickbass = new Audio("sounds/kick-bass.mp3");
        kickbass.play();
        break;
      case "k":
         var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
      case "l":
         var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      
    }
    //what to when click detected
  }

//KeyboardListener

  function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey); // Class name is used with .w,.a,.j

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

  }


//craeting a new object
// var bel1 = {
//   name: "tim",
//   age: 19,
//   hasW: true,
//   lang: ["french", "english"]
// }
// function BellBoy(name,age,hasW,lang){
//   this.name=name;
//   this.age=age;
//   this.hasW=hasW;
//   this.lang=lang;
// }
// var b1 = new BellBoy("tim", 19, true, ["frech", "y"]);