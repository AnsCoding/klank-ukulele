//Vælger P elementet fra html dokumentet
let element = document.querySelector("#info > p");

//Lytter efter om musen er over P elementet
element.addEventListener('mouseenter', () =>{
  //Afspiller den valgte lyd
  document.querySelector('#audio').play();
});

//Lytter efter om musen er over P elementet
element.addEventListener('mouseleave', () =>{
  //Pauser den valgte lyd
  document.querySelector('#audio').pause();
});