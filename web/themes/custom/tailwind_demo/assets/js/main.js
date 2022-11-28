(function ($, Drupal, drupalSettings, once) {
    Drupal.behaviors.drupalBookOwlCarousel = {
      attach: function (context, settings) {
  
        $(".search-section .search-icon").click(function () {
          var displays = $("#search-block-form").css("visibility");
          if (displays == 'hidden') {
            $("#search-block-form").css("visibility", "visible");
            $(".search-icon").addClass("fa-light fa-xmark");
            $(".search-icon").removeClass("fa fa-search");
          } else {
            $("#search-block-form").css("visibility", "hidden");
            $(".search-icon").addClass("fa fa-search");
            $(".search-icon").removeClass("fa-light fa-xmark");
          }
  
        });
  
      }
    };
  })(jQuery, Drupal, drupalSettings, once);