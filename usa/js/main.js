(function($){

  'use strict';

  function initGeneral () {
    $('.particles-bg').particleground({
      // dotColor: '#d9ff00',
      dotColor: '#FF7776',
      particleRadius: 5,
      lineColor: '#FF7776',
    });

  }

  $('.hover').hover(function(){
    $(this).addClass('flip');
  },function(){
    $(this).removeClass('flip');
  });

  function initCustom () {
    // Your custom code here.
  }

  function init () {
    initGeneral();
  }

  init();

})(jQuery)

