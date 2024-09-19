var randomNumber1 = Math.floor(Math.random() * 6) +1;

var randomiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) +1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = " Player 1 Wins,refresh to play";
}
else if ( randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins,refresh to play";
}
else {
    document.querySelector("h1").innerHTML = "Draw,refresh to play";
}
function refreshPage() {
    location.reload();
}
    
}
