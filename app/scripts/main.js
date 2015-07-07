/* jshint devel:true */

(function() {
  'use strict';

  (function($){
    $(document).foundation();

    function zoomPhoto(name) {
      $('.zoom[data-zoom="' + name + '"]').zoom({
        url: 'images/downing-community-' + name + '@3x.jpg'
      });
    }

    $.getJSON( 'data/photos.json', function(data) {
      for (var i = 0; i < data.photos.length; i++) {
        zoomPhoto(data.photos[i]);
      }
    });   

    $('.l-project-slider').slick({
      dots: true,
      arrows: true,
      infinite: true,
      slidesToShow: 3
    });

  }(jQuery));

}());