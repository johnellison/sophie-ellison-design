/* jshint devel:true */

(function() {
  'use strict';

  (function($){
    $(document).foundation();

    var photos = ['detailed', 'concept', 'context', 'design', 'keynote', 'perspective'];

    function zoomPhoto(name) {
      $('.zoom[data-zoom="' + name + '"]').zoom({
        url: 'images/downing-community-' + name + '@3x.jpg'
      });
    }

    for (var i = 0; i < photos.length; i++) {
      zoomPhoto(photos[i]);
    }

    $('.l-project-slider').slick({
      dots: true,
      arrows: true,
      infinite: true,
      slidesToShow: 3
    });

  }(jQuery));

}());