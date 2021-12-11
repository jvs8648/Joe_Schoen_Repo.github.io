//Canon/Noncanon choice - Code will take user to the page of the section they click on
document.getElementById("Canon_Button").onclick=function (){
  music.play("menu_sound.wav");
  location.href="canon_light_dark.html";
};

document.getElementById("Noncanon_Button").onclick=function (){
    music.play("menu_sound.wav");
    location.href="legends_light_dark.html";
};
