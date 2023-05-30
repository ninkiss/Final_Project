// корзина

let priceBuy = document.getElementById("priceBuy");
let valueProducts = document.getElementById("valueProducts");
let btnInBuyBasket = document.querySelectorAll(".btn__flex-item");
for(let elem of btnInBuyBasket){
   elem.onclick = () => {
    valueProducts.textContent = Number(valueProducts.textContent) + 1;
    priceBuy.textContent = parseFloat(priceBuy.textContent) + parseFloat(elem.previousElementSibling.textContent);
    // console.log(parseFloat(elem.previousElementSibling.textContent));
   }
}


document.addEventListener('DOMContentLoaded', () => {
   // инициализация слайдера
   new ItcSimpleSlider('.itcss', {
     loop: true,
     autoplay: false,
     interval: 5000,
     swipe: true,
   });
 });

document.addEventListener('DOMContentLoaded', () => {
   // инициализация слайдера
   const slider = new ItcSimpleSlider('.itcss');
   // назначим обработчик при нажатии на кнопку .btn-prev
   document.querySelector('.btn-prev').onclick = () => {
     // перейдём к предыдущему слайду
     slider.prev();
   }
   // назначим обработчик при нажатии на кнопку .btn-next
   document.querySelector('.btn-next').onclick = () => {
     // перейдём к следующему слайду
     slider.next();
   }
 });