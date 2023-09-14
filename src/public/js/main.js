//starting the aos animations
AOS.init({
  easing: "ease-out-back",
  duration: 1100,
});

//starting carousel
document.addEventListener("DOMContentLoaded", () => {
  const myCarousel = document.getElementById("carousel");
  const carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000, 
    wrap: true,
  });
});
