const audio= document.getElementById('menu');

const buttonPlay=document.getElementById('lets_go_button');
buttonPlay.addEventListerner('click', function(){
  audio.play();
});
