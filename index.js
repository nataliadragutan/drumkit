// Detecting Button Press

var selectButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i< selectButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;
        //console.log(buttonInnerHTML);
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

//Detecting Keyboard Press

document.addEventListener('keydown', function(event){
    //console.log(event);
    //console.log(event.key);
    makeSound(event.key);
    buttonAnimation(event.key);w
})

function makeSound(key){
    switch(key){
        case "w":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play(); 
            break;
        case "a":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "d":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "k":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "l":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        default:
    }
}
function buttonAnimation(currentKey){
    var activeKey = document.querySelector("." + currentKey);
    activeKey.classList.add("pressed");
    setTimeout(function(){
        activeKey.classList.remove("pressed");
    }, 100);
}