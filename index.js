// player 1

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImageSource = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomImageSource);


// player 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src" , randomImageSource2);



// if any players win and draw!

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "player1 is win!🚩";
} else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "player2 is win!🚩";
} else{
    document.querySelector("h1").innerHTML = "Draw!";
}
