/* jshint devel:true */

(function() {
  'use strict';

  (function($){
    $(document).foundation();

    $("[data-event='contact-link']").on('click', function(){
      ga('send', {
        'hitType' : 'event',
        'eventCategory' : 'Contact',
        'eventAction' : 'sent',
        'eventLabel' : 'sophie@sophie-ellison.com',
        'eventValue' : 250
      });
    });

    $("[data-event='download-cv']").on('click', function(){
      ga('send', {
        'hitType' : 'event',
        'eventCategory' : 'Download',
        'eventAction' : 'sent',
        'eventLabel' : 'Download CV',
        'eventValue' : 50
      });
    });

    $("[data-event='download-downing-pdf']").on('click', function(){
      ga('send', {
        'hitType' : 'event',
        'eventCategory' : 'Download',
        'eventAction' : 'sent',
        'eventLabel' : 'Download downing-community.pdf',
        'eventValue' : 50
      });
    });

    $("[data-event='view-inspiration-pdf']").on('click', function(){
      ga('send', {
        'hitType' : 'event',
        'eventCategory' : 'Download',
        'eventAction' : 'sent',
        'eventLabel' : 'Inspiration (.pdf)',
        'eventValue' : 50
      });
    });


  }(jQuery));

}());