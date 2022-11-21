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