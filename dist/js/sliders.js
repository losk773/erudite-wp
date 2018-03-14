$(document).ready(function () {
  $('#homeslider').owlCarousel({
    loop: true,
    items: 1,
    nav: true,
    dots: true,
    navSpeed: 1500,
    autoplay: true,
    autoplaySpeed: 1500,
    autoTimeout: 3000,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
  });
  $('#courses-slider').owlCarousel({
    loop: false,
    dots: true,
    margin: 30,
    autoplay: true,
    autoplaySpeed: 1500,
    autoTimeout: 2000,
    responsive : {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      991: {
        items: 4
      },
      1920: {
        items: 4
      }
    }
  });
  $('#events-slider').owlCarousel({
    loop: false,
    dots: true,
    margin: 30,
    autoplay: true,
    autoplaySpeed: 1500,
    autoTimeout: 3000,
    responsive : {
      0: {
        items: 1
      },
      480: {
        items: 1
      },
      600: {
        items: 2
      },
      768: {
        items: 2
      },
      991: {
        items: 3
      },
      1920: {
        items: 3
      }
    }
  });
  $('#brand-slider').owlCarousel({
    loop: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,
    autoTimeout: 2000,
    responsive : {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      991: {
        items: 4
      },
      1920: {
        items: 5
      }
    }
  });
});