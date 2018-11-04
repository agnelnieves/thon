(function($){

  'use strict';

  function initGeneral () {
    $('.particles-bg').particleground({
      // dotColor: '#d9ff00',
      dotColor: '#293000',
      particleRadius: 5,
      lineColor: '#212121',
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

