
var getTimeout = function(){var e=setTimeout,b={};setTimeout=function(a,c){var d=e(a,c);b[d]=[Date.now(),c];return d};return function(a){return(a=b[a])?Math.max(a[1]-Date.now()+a[0],0):NaN}}();


function sanitisePercentage(i){
  return Math.min(100,Math.max(0,i));
}

// Slider
var percentTime;
var tick;
var progressBar = document.querySelector('.swiper-hero-progress');

var mySwiper = new Swiper('.visual', {
  effect: 'fade',
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  watchOverflow: true,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  roundLengths: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  on: {
    slideChange: function() {
          var swiper = this;
      var defaultSlideDelay = swiper.params.autoplay.delay;
      var currentIndex = swiper.realIndex + 1;
      var currentSlide = swiper.slides[currentIndex];
      var currentSlideDelay = currentSlide.getAttribute('data-swiper-autoplay') || defaultSlideDelay;
      
      updateSwiperProgressBar(progressBar, currentSlideDelay);
    }
  }
});

function updateSwiperProgressBar(bar, slideDelay) {

  function startProgressBar() {
    resetProgressBar();
    tick = setInterval(progress, 50);
  }

  function progress() {

    var timeLeft = getTimeout(mySwiper.autoplay.timeout);

    if ( mySwiper.autoplay.running && !mySwiper.autoplay.paused ) {
      percentTime = sanitisePercentage(100 - Math.round(timeLeft / slideDelay * 100));
      bar.style.width = percentTime + '%';

      if (percentTime > 100) {
        resetProgressBar();
      }
    }

    if ( mySwiper.autoplay.paused ) {
      percentTime = 0;
      bar.style.width = 0;
    }

  }

  function resetProgressBar() {
    percentTime = 0;
    bar.style.width = 0;
    clearInterval(tick);
  }

  startProgressBar();

} 






