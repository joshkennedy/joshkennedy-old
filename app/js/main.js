$(document).ready(function() {

  // Let's keep these handsome fellows the same size as our browser window
  $(window).resize(function() {
    var w = $(window).height();
    $('footer').height(w);
    $('.callout h2').css({ 'margin-top' : w/4 + "px" });
  });
  $(window).trigger('resize');

  // Remove Markdown's annoying <p> tags around images
   $("p:has(img)").contents().unwrap();

});
