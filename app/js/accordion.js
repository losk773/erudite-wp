$(document).ready(function(){
  let firstItem = $('.panels .panel').first();
  firstItem.addClass('active');
  firstItem.find('.panel-body').show();
  
  $('.panel .panel-title').click(function() {
    let targetElem = $(this),
        status = targetElem.closest('.panel').hasClass('active');

    if(!status) {
      $('.panels .panel').removeClass('active');
      $('.panels .panel-body').slideUp('fast');
      targetElem.closest('.panel').addClass('active');
      targetElem.closest('.panel').find('.panel-body').slideDown('fast');
    }
  });
  
});