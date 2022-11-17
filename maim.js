let random1 = Math.floor(Math.random()*6) + 1;

let dicel = document.querySelector(".img1");

let select1 = "/images" + "/dice" + random1 + ".png";

dicel.setAttribute("src", select1);

let random2 = Math.floor(Math.random()*6) + 1;

let dice2 = document.querySelector(".img2");

let select2 = "/images" + "/dice" + random2 + ".png";

dice2.setAttribute("src", select2);

if (random1 > random2) {
  document.querySelector("h1").textContent = "player 1 Won The Match";
} else if (random1 < random2) {
  document.querySelector("h1").textContent = "player 2 Won The Match";
}else{
    document.querySelector("h1").textContent= "Match Draw";
}
/////////========
// /Player 1 
// var random1 = Math.floor(Math.random()*6)+1;
// var dice1= document.querySelector('.img1');
// var select1 = "/images" + "/dice" + random1 + ".png";

// dice1.setAttribute("src",select1);
// var random2 = Math.floor(Math.random()*6)+1;

// var dice2= document.querySelector('.img2');


// var select2 = "/images" + "/dice" + random2 + ".png";


// dice2.setAttribute("src",select2);



// if(random1>random2){
//     document.querySelector('h1').textContent = "Player 1 Won The Match";

// }

// else if(random1 < random2)
// {
//     document.querySelector('h1').textContent = "Player 2 Won The Match"
// }

// else{
//     document.querySelector('h1').textContent = "Match Draw";
// }