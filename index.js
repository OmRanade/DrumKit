let numOfButtons = document.querySelectorAll(".drum").length;

for(let i = 0 ; i <numOfButtons ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        // this.classList.add("change-color");
        let buttonClicked = this.textContent;
        animateTextColorMouse(this);
        playSound(buttonClicked);
        animateButton(buttonClicked);
    });
}

function playSound(keyPressed){
    switch(keyPressed){
        case "w":
            let audio1 = new Audio('sounds/tom-1.mp3');
            audio1.play();
            break;
        case "a":
            let audio2 = new Audio('sounds/tom-2.mp3');
            audio2.play();
            break;
        case "s":
            let audio3 = new Audio('sounds/tom-3.mp3');
            audio3.play();
            break;
        case "d":
            let audio4 = new Audio('sounds/tom-4.mp3');
            audio4.play();
            break;
        case "j":
            let audio5 = new Audio('sounds/snare.mp3');
            audio5.play();
            break;
        case "k":
            let audio6 = new Audio('sounds/crash.mp3');
            audio6.play();
            break;
        case "l":
            let audio7 = new Audio('sounds/kick-bass.mp3');
            audio7.play();
            break;
        default:
            console.log("No sound detected!");
    }
}

function animateTextColorMouse(KeyPressed){
    let key = KeyPressed.textContent;
    document.querySelector("." + key).classList.add("change-color");
    setTimeout(() => {
        document.querySelector("." + key).classList.remove("change-color");
    }, 100);
}

function animateTextColorKeyboard(keyPressed){
    document.querySelector("." + keyPressed).classList.add("change-color");
    setTimeout(() => {
        document.querySelector("." + keyPressed).classList.remove("change-color");
    }, 100);
}
document.addEventListener("keypress", function(event){
    animateTextColorKeyboard(event.key);
    playSound(event.key);
    animateButton(event.key);
});

function animateButton(buttonClicked){
    let button = document.querySelector("." + buttonClicked);
    button.classList.add("pressed");
    setTimeout(() => {
        button.classList.remove("pressed");
    }, 100);
}