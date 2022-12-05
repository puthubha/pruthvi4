


var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randomImage1 = "dice" + randomNumber1 + ".png" ;

document.querySelectorAll("img")[0].setAttribute("src" , randomImage1);



var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomImage2 = "dice" + randomNumber2 + ".png" ;

document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if(randomNumber1 > randomNumber2){

  document.querySelector("h1").innerHTML= " 🥳 Player 1 wine!" ;

} else if(randomNumber2 > randomNumber1){

  document.querySelector("h1").innerHTML = " player 2 wine! 🥳" ;

} else{

  document.querySelector("h1").innerHTML = " Draw !" ;

}
