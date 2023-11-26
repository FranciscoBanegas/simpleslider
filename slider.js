// indice actual
let currentIndex = 0;
//contador cantidad de elementos
const totalSlides = document.querySelectorAll('.slide').length;

document.querySelector('.content-btn').addEventListener('click', (e) => {
// selecionamos los elementos 
  const next = document.querySelector('.next-btn');
  const prev = document.querySelector('.prev-btn');
  const slider = document.querySelector('.slider'); 
  /*
  Cremos una condicion para saber cual elemento se presiono
  ejemplo el usuario precione el boton next o prev
  */
  if(next && e.target === next){
   /*
    Currentindex es cero y se ira 
    Sumando en uno en uno y cuando el residuo llegue a 0 empezara de nuevo 
    ejemplo: 0 + 1 = 1, 1 + 1 = 2, 2 + 1 = 3 % 3 = 0
    */
    currentIndex = (currentIndex + 1) % totalSlides;
    }else if(prev && e.target === prev){
    //ejemplo: 3 - 1 = 2, 2 - 1 = 1, 1 - 1 = 0 % 3 = 0
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  } 
  //Añadimos la propieda transform y los desplazamos a la derecha de 100%
  slider.style.transform = `translateX(${-currentIndex * 100}%)`;
})