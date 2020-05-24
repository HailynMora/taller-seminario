$( document ).ready(function(){
    $(".dropdown-trigger").dropdown();
    $('.tap-target').tapTarget();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });
    $('.chips').chips();
    $('.collapsible').collapsible();
    $('input.autocomplete').autocomplete({
        data: {
          "Apple": null,
          "Microsoft": null,
          "Google": 'https://placehold.it/250x250'
        },
      });

});