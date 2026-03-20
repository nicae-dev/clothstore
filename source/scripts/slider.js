
// import Swiper bundle with all modules installed
// import Swiper from 'swiper/bundle';

// import styles bundle
// import 'swiper/swiper-bundle.min.css';

// init Swiper:
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
    nextEl: '.swiper__button--rifht',
    prevEl: '.swiper__button--left',
  },
});
// console.log('slider.js');
// console.log(swiperNew);
