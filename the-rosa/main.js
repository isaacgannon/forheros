//Select element function


const SelectElement = function (element){
  return document.querySelector(element);
};

let menuToggler = SelectElement('.menu-toggle');
let body = SelectElement('body');

menuToggler.addEventListener('click',function (){
  body.classList.toggle('open');
})
