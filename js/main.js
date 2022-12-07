$(document).on('pageload', function(){
	$('.parallax').parallax();
	$('.dropdown-button').dropdown();
  $('.collapsible').collapsible();
  $(".owl-carousel").owlCarousel();
	
  $('.modal-trigger').leanModal({
    dismissible: true,
    opacity: .5,
    complete: function() { 
      $(document).trigger('modalclose');
    }
  });

  if (!navigator.getUserMedia) {
    $('.code-scan').hide();
  }
});
