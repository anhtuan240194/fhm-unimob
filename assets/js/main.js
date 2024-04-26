  //Animation About home
  const aboutHome = document.querySelector('.about-home')
  if(aboutHome && window.innerWidth > 992) {
    const aboutHomeScrollTop = Math.round(aboutHome.getBoundingClientRect().top)
    const unimob = document.querySelector('.about-unimob')
    const game = document.querySelector('.about-game')
    const widthContainer = window.innerWidth

    window.addEventListener('scroll', () => {

      const currentScroll = Math.round( window.scrollY)
      const changeScroll =  (currentScroll - aboutHomeScrollTop + 300)/widthContainer*100
      if(changeScroll > 100) {
        unimob.style.right = '100%'
        game.style.left = '100%'
        return
      }

      if (changeScroll < 0) {
        unimob.style.right = '0%'
        game.style.left = '0%'
        return
      }

      unimob.style.right = changeScroll + '%'
      game.style.left = changeScroll + '%'

    })

  }

  //Swiper Home slider
  const homeSlider = new Swiper(".slider .swiper", {
    loop: true,
    vertical: 'horizontal',
    slidesPerView: 1,
    watchOverflow: true,
    slideToClickedSlide: true,
    speed: 1200,
    autoplay: true,
    navigation: {
      nextEl: '.slider .swiper-button-next',
      prevEl: '.slider .swiper-button-prev',
    },
  }) || false;

  //Swiper Home blog
  const homeBlog = new Swiper(".home-blogs .swiper", {
    vertical: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 30,
    watchOverflow: true,
    speed: 1200,
    autoplay: true,
    slideToClickedSlide: true,
    breakpoints: {
      200: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      377: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  }) || false;

  const productImagesThumb = new Swiper('.thumb-images .swiper', {
    direction: 'vertical',
    slidesPerView: 3,
    spaceBetween: 15,
    speed: 1000,
    freeMode: false,
    loop: true,
    watchOverflow: true,
    watchSlidesProgress: true,
    breakpoints: {
        200: {
            direction: 'horizontal',
            slidesPerView: 4,
        },
        396: {
          direction: 'horizontal',
          slidesPerView: 5,
        },
        578: {
            direction: 'vertical',
        },
    },
    navigation: {
        prevEl: '.thumb-images .swiper-button-prev',
    },
  }) || false;

  const productImagesLarge = new Swiper('.large-images .swiper', {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 10,
      speed: 1000,
      touch: false,
      mousewheel: false,
      thumbs: {
          swiper: productImagesThumb,
      },
  }) || false;

  //Call Light Gallery Product Detail
  document.addEventListener('DOMContentLoaded', () => {
    const largeImages = document.querySelector('.large-images .swiper-wrapper')
    if(largeImages){
      const lightGalleryProject = lightGallery(largeImages, {
        animateThumb: true,
        allowMediaOverlap: true,
        toggleThumb: true,
        download: false,
        speed: 500,
        slideShowAutoplay: true,
        plugins: [lgThumbnail, lgFullscreen],
        fullScreen: true,
        showZoomInOutIcons: false,
        actualSize: true,
      });
    }
  })

  //Swiper Related Products
  const relatedProducts = new Swiper(".related-products .swiper", {
    vertical: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 29,
    watchOverflow: true,
    speed: 1200,
    autoplay: true,
    slideToClickedSlide: true,
    breakpoints: {
      200: {
        slidesPerView: 1,
      },
      377: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 28,
      },
    },
    navigation: {
        nextEl: '.related-products .swiper-button-next',
        prevEl: '.related-products .swiper-button-prev',
    },
  }) || false;
  
  //Blog related
  const relatedBlog = new Swiper(".blog-related .swiper", {
    speed: 1000,
    slidesPerView: 3,
    spaceBetween: 30,
    watchOverflow: true,
    breakpoints: {
      200: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      377: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: ".blog-related .swiper-button-next",
      prevEl: ".blog-related .swiper-button-prev",
    },
  }) || false;

  //Call Light Gallery Our Office
  document.addEventListener('DOMContentLoaded', () => {
    const ourOfficeImgs = document.querySelector('.our-office .our-office-images')
    if(ourOfficeImgs){
      const lightGalleryProject = lightGallery(ourOfficeImgs, {
        animateThumb: true,
        allowMediaOverlap: true,
        toggleThumb: true,
        download: false,
        speed: 500,
        slideShowAutoplay: true,
        plugins: [lgThumbnail, lgFullscreen],
        fullScreen: true,
        showZoomInOutIcons: false,
        actualSize: true,
      });
    }
  })

  //Event swap text input type file
  const inputTypeFile = document.querySelector('input[type="file"]');
  if(inputTypeFile){
    const text = inputTypeFile.nextElementSibling
    inputTypeFile.addEventListener('change', () => {
      text.textContent = inputTypeFile.value.split('\\').pop() || '-Choose Portfolio-';
    })
  }