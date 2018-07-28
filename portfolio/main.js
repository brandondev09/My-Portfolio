$(document).ready(function() {
  //==================== Scrolling ====================//
  //Options
  var scrollSpeed = 750;
  var scrollPad = 65;
  var bodySelector = $("html, body");
  var windowSelector = $(window);
  var menuLinks = $(".nav-link");
  //Hide Menu On Click
  var menu = jQuery(".navbar-collapse");
  menu.removeClass("show");

  menuLinks.click(function(e) {
    e.preventDefault();
    var target = $(this).attr("href");
    scrollTo(target);
  });

  function scrollTo(target) {
    bodySelector.animate(
      {
        scrollTop: $(target).offset().top - scrollPad
      },
      scrollSpeed
    );
  }
  //End Document.ready
});
