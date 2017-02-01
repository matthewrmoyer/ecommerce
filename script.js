$(document).ready(function(){

carousel = (function(){
  carousel = document.querySelector('.carousel')
  var next = carousel.querySelector('.next');
  var prev = carousel.querySelector('.prev');
  var items = carousel.querySelectorAll('.items li');
  var list = carousel.querySelector('.items')
  var display = carousel.querySelector('.display')
  var amount = items.length;
  var displayed = items[0];
  var counter = 0;
  function scroll(direction){
    counter = counter + direction
    if (direction === -1 &&
        counter < 0) {
      counter = amount - 1;
    }
    if (direction === 1 &&
        !items[counter]) {
      counter = 0;
    }
    list.removeChild(displayed)
    displayed = items[counter];
    list.appendChild(displayed)
  }



  next.addEventListener('click', function(e){
    scroll(1);
    clearInterval(inter);
    inter = setInterval(function(){
      scroll(1);
    }, 2000)
  })
  prev.addEventListener('click', function(e){
    scroll(-1); clearInterval(inter)
    inter = setInterval(function(){
      scroll(1);
    }, 2000)
  })
  var inter = setInterval(function(){
    scroll(1);
  }, 2000)
  scroll(1);
  scroll(1);
  scroll(1);
})();
});