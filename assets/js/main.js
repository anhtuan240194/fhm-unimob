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
      console.log(changeScroll)
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
    loop: true,
    vertical: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 40,
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
        spaceBetween: 40,
      },
    },
  }) || false;
  



