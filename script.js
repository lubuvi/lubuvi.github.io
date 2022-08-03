$(document).ready(function () {
    $('.accordion-collapse').on('shown.bs.collapse', function (e) {
      let $panel = $(this).closest('.accordion-item');
      $('html,body').animate({
        scrollTop: $panel.offset().top
      }, 500);
    });
  });


  