$(function() {
  
  // Lightbox fadeIn
  $('#how_it_works').click(function() {
    $('#lightbox').fadeIn();
    // Autoplay
    // $('#video')[0].src += "&autoplay=1";
    // $('#video_container').html('<iframe id="video" width="853" height="480" src="http://www.youtube.com/v/frfUORPk2O0?rel=0&enablejsapi=1&playerapiid=ytplayer" frameborder="0" allowfullscreen></iframe>');
    $('#video_container').html('<iframe src="//player.vimeo.com/video/98034185" width="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
  });

  // Lightbox fadeOut
  $('#lightbox').click(function() {
    $(this).fadeOut();
    $('#video_container').html('');
  });

  // Laptop screenshot cycle
  $('#screenshots').cycle({ 
    fx: 'fade', 
    timeout:  3000 
  });

  // Responsive iFrame
  $('#video_container').fitVids();

  $('#inputForm').submit(function (e) {
    e.preventDefault();
    
    if ( $('#email').val().length > 0 ) {
      $.getJSON(
      this.action + "?callback=?",
      $(this).serialize(),
      function (data) {
          if (data.Status === 400) {

          } else {
            $('#submit').attr('value', '').addClass('success');
            $('#email').val('Thanks for signing up!').attr('disabled', 'disabled');
          }
      });      
    }
  });

  $(document).on('click', 'input.submit', function(e){
    e.preventDefault();
  });



});