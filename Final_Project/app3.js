//Canon/Noncanon choice - Code will take user to the page of the section they click on
var audio=document.getElementById("menu")

document.getElementById("Canon_Button").onclick=function (){
  menu.play();
  location.href="canon_light_dark.html";
};

document.getElementById("Noncanon_Button").onclick=function (){
    menu.play();
    location.href="legends_light_dark.html";
};
