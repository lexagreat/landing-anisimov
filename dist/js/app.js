(function isWebP() {
   function testWebP(callback) {
      let webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src =
         "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }
   testWebP(function (support) {
      if (support == true) {
         document.querySelector("html").classList.add("webp");
      } else {
         document.querySelector("html").classList.add("no-webp");
      }
   });
})();
const body = document.body;
const maskOptions = {
   mask: "+{7} (000) 000-00-00",
   // lazy: false,  // make placeholder always visible
   // placeholderChar: '0'     // defaults to '_'
};
if (document.querySelectorAll("[data-phone]").length) {
   document.querySelectorAll("[data-phone]").forEach((item) => {
      const mask = IMask(item, maskOptions);
   });
}

document.addEventListener("DOMContentLoaded", () => {
   headerWork();
});

function headerWork() {
   const burger = document.querySelector(".header__burger");
   const menu = document.querySelector(".header__menu");
   burger.addEventListener("click", () => {
      menu.classList.toggle("active");
      burger.classList.toggle("active");
      body.classList.toggle("lock");
   });
}
const lenis = new Lenis({
   duration: 2,
   smooth: true,
   direction: "vertical",
   // lerp: 0.05,
});
window.lenis = lenis;

//get scroll value
lenis.on("scroll", (e) => {
   // console.log(e);
});

function raf(time) {
   lenis.raf(time);
   requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
