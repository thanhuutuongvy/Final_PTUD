
    var swiper = new Swiper(".trangchu-slider", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop:true,
    });

    var swiper = new Swiper(".danhgia-slider", {
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: {
          delay: 7500,
          disableOnInteraction: false
        },
        loop:true,
        breakpoints: {
            0: {
                slidesPerView:1,
            },
            640: {
                slidesPerView:2,
            },
            768: {
                slidesPerView:2,
            },
            1024: {
                slidesPerView:3,
            },
        }
      });