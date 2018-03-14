$(document).ready(function () {
  $('.nav-toogle-btn').on('click', function (e) {
    e.preventDefault();
    let menu = $(this).prev();
    menu.toggleClass('active');
    menu.slideToggle();

    if(menu.hasClass('active')) {
      $(this).html('<i class="fa fa-times" aria-hidden="true"></i>');
    } else {
      $(this).html('<i class="fa fa-bars" aria-hidden="true"></i>');
    }
  })
});