/* jshint devel:true */

(function() {
  'use strict';

  (function($){
    $(document).foundation();

    $('span.zoom').zoom({url: 'images/downing-community-detailed-zoom.jpg'});

    $('.l-project-slider').slick({
      dots: true,
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      adaptiveHeight: true
    });

  }(jQuery));

}());