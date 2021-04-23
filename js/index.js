$(document).ready(function() {
  $('#backToTop').on('click', function(event) {
    $('html, body').animate({scrollTop: $('#top').offset().top}, 500)
  })
})