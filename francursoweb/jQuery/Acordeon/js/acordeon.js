$(document).ready(function(){
  $('.item').on('click',function(){
      $(this).next('div').slideToggle(100);

      $('.links').not($(this).next()).slideUp('fast');
  });
})
