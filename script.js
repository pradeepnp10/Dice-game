var randNum = Math.floor(Math.random()*6) + 1;

var randDice = "dice" + randNum + ".png";

var randImagesource = "images/" + randDice;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randImagesource);

var randnum2 = Math.floor(Math.random()*6)+1;
var randImagesource2 = "images/dice" + randnum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randImagesource2);

if(randNum > randnum2){
    document.querySelector("h1").innerHTML="Player 1 WINS";
}
else if (randnum2 > randNum){
    document.querySelector("h1").innerHTML = "Player 2 WINS ";
}
else{
    document.querySelector("h1").innerHTML = "DRAW !";

}











