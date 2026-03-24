//console: npm install swiper
// import Swiper JS
// import Swiper from 'swiper';
// import Swiper styles
// import 'swiper/css';
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiperNew = new Swiper('.new__slider', {
  direction: 'horizontal',
  slidesPerView: 2,
  loop: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: true,
  //   pauseOnMouseEnter: true,
  // },
  // Navigation arrows
  navigation: {
    // nextEl: '.swiper-button-prev',
    // prevEl: '.swiper-button-next',
    nextEl: '.swiper__button--left',
    prevEl: '.swiper__button--right',
  },
});
// console.log('slider.js');
console.log(swiperNew);
