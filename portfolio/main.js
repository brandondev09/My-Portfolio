//Smooth Scroll to top of page
$(document).ready(function(){
$('#top').click(function () {
  $('body,html').animate({
      scrollTop: 0
  }, 600);
  return false;
});
});