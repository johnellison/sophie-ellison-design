/* jshint devel:true */

(function() {
  'use strict';

  (function($){
    $(document).foundation();

    $('#detailed').zoom({url: 'images/downing-community-detailed@3x.jpg'});
    $('#concept').zoom({url: 'images/downing-community-concept@3x.jpg'});
    $('#context').zoom({url: 'images/downing-community-context@3x.jpg'});
    $('#design').zoom({url: 'images/downing-community-design@3x.jpg'});
    $('#keynote').zoom({url: 'images/downing-community-keynote@3x.jpg'});



    $('.l-project-slider').slick({
      dots: true,
      arrows: true,
      infinite: true,
      slidesToShow: 3
    });

  }(jQuery));

}());