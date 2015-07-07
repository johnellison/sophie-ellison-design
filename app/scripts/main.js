/* jshint devel:true */

(function() {
  'use strict';

  (function($){
    $(document).foundation();

    var photos = ['detailed', 'concept', 'context', 'design', 'keynote', 'perspective'];

    // for (var i = 0; i < photos.length; i++) {
    //   var output = $('.zoom').data('zoom', photos[i]).zoom({ 
    //     url: 'images/downing-community-' + photos[i] + '@3x.jpg'
    //     });      
    // }     

    $('.l-project-slider').slick({
      dots: true,
      arrows: true,
      infinite: true,
      slidesToShow: 3
    });

  }(jQuery));

}());