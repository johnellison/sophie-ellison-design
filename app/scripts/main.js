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

    function zoomProjectPhotos(data, projectId) {
      var project = data.projects[projectId];
      var photos = project.photos;

      for (var i = 0; i < photos.length; i++) {
        zoomPhoto(photos[i].name);
      }
    }

    $.getJSON( 'data/projects.json', function(data) {
      zoomProjectPhotos(data, 0);
    });   

  }(jQuery));

}());