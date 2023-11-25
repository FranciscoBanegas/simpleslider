let currentIndex = 0;
// selecion los elementos dentro del slider y obtengo la cantidad total
const totalSlides = document.querySelectorAll('.slide').length;
console.log(totalSlides);
function updateSlider() {
  // selecionamos los elementos dentro del slider
  const slider = document.querySelector('.slider');
  // transformamos el slider en una transicion
  slider.style.transform = `translateX(${-currentIndex * 100}%)`;
}

document.querySelector('.content-btn').addEventListener('click', (e) => {
  const next = document.querySelector('.next-btn');
  const prev = document.querySelector('.prev-btn');
  console.log(e.target);
  if(next && e.target === next){
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  }else if(prev && e.target === prev){
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
  } 
})