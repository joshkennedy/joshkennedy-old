$(document).ready(function() {

  // Let's keep these handsome fellows the same size as our browser window
  $(window).resize(function() {
    var w = $(window).height();
    $('footer').height(w);
    $('.callout h2').css({ 'margin-top' : w/4 + "px" });
  });
  $(window).trigger('resize');

  // Make those headlines behave!
  $(".home-header h1").fitText(0.7, {
    minFontSize: '20px',
    maxFontSize: '90px'
  });
  $("footer h2").fitText(1.5, {
    minFontSize: '24px',
    maxFontSize: '50px'
  });

  // Remove Markdown's annoying <p> tags around images
   $("p:has(img)").contents().unwrap();

});
