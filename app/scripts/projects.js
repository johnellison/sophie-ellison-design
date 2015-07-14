function zoomProjectPhotos(data, projectId) {
    var project = data.projects[projectId];
    var photos = project.photos;
    console.log('project: ' + project + 'photos: ' + photos);
    for (var i = 0; i < photos.length; i++) {
      var photo = photos[i];

      $('.zoom[data-zoom="' + photo.name + '"]').zoom({
        url: 'images/' + project.name + '-' + photo.name + '@3x.jpg'
      });
    }
  }