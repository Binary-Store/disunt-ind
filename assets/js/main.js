/***************************************************
==================== JS INDEX ======================
****************************************************
// Data js
// Search Bar Js
// Sticky js
// Mobile Menu Js
// Hamburger Menu Js
// Nice Select
// Type Js
// Fun Fact Js
// Video Js
// Rating Js
// Service Slider Js
// Portfolio Slider Js
// Brand Slider Js
// Thumb Slider 2 Js
// Hero Js
// Team Slider Js
// Project Slider Js
// Blog Slider Js
// Skillbar Js
// Popup Js
// Clone function Js
// Vertical effect Js
// Grid Js

****************************************************/

(function ($) {
   "use strict";

   // Data js
   $("[data-bg-image]").each(function () {
      var $this = $(this),
         $image = $this.data("bg-image");
      $this.css("background-image", "url(" + $image + ")");
   });

   // Sticky js
   $(window).scroll(function () {
      var Width = $(document).width();
      if ($("body").scrollTop() > 250 || $("html").scrollTop() > 250) {
         $(".header-sticky").addClass("sticky");
      } else {
         $(".header-sticky").removeClass("sticky");
      }
   });

   // Mobile Menu Js
   $(".main-mobile-menu").meanmenu({
      meanMenuContainer: ".mobile_menu",
      meanScreenWidth: "991",
      meanExpand: ['<i class="fa-light fa-angle-right"></i>'],
   });
   $(".menu-bar").on("click", function () {
      $(".menu-bar").addClass("menu-bar-toggeled text-dark");
   });

   // Hamburger Menu Js
   $(".menu-bar").on("click", function () {
      $(".hamburger-area").addClass("opened");
      $(".body-overlay").addClass("opened");
   });
   $(".hamburger_close_btn").on("click", function () {
      $(".hamburger-area").removeClass("opened");
      $(".body-overlay").removeClass("opened");
      $(".menu-bar").removeClass("menu-bar-toggeled");
   });
   $(".body-overlay").on("click", function () {
      $(".hamburger-area").removeClass("opened");
      $(".body-overlay").removeClass("opened");
      $(".offset_canvas").removeClass("show");
      $(".menu-bar").removeClass("menu-bar-toggeled");
   });



   // Type Js
   if ($(".type-text .text").length > 0) {
      var typed = new Typed(".type-text .text", {
         strings: ["Services", "Factory", "Expert"],
         loop: true,
         typeSpeed: 100,
         startDelay: 0,
         backSpeed: 60,
         backDelay: 2000,
         showCursor: false,
         cursorChar: "",
         autoInsertCss: false,
      });
   }

   // Fun Fact Js
   if ($(".odometer").length > 0) {
      $(".odometer").waypoint(
         function () {
            var odo = $(".odometer");
            odo.each(function () {
               var countNumber = $(this).attr("data-count");
               $(this).html(countNumber);
            });
         },
         {
            offset: "80%",
            triggerOnce: true,
         }
      );
   }


   // Rating Js
   if ($(".fill-ratings span").length > 0) {
      var star_rating_width = $(".fill-ratings span").width();
      $(".star-ratings").width(star_rating_width);
   }


   // Thumb Slider 2 Js
   if ($(".testimonial-auother-slider").length > 0) {
      var testimonial_auothers = new Swiper(".testimonial-auother-slider", {
         spaceBetween: 0,
         slidesPerView: 1,
         allowTouchMove: false,
      });
   }

   if ($(".thumb-content-slider").length > 0) {
      var testimonial = new Swiper(".thumb-content-slider", {
         spaceBetween: 0,
         slidesPerView: 1,
         navigation: {
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
         },
         thumbs: {
            swiper: testimonial_auothers,
         },
         loop: false,
      });
   }






   // Blog Slider Js
   if ($(".tj-blog-wrapper-slider").length > 0) {
      var blog = new Swiper(".tj-blog-wrapper-slider", {
         slidesPerView: 1,
         spaceBetween: 24,
         loop: true,
         autoplay: {
            delay: 9000,
         },
         navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
         },
      });
   }



   // Grid Js
   $(".grid").imagesLoaded(function () {
      var $grid = $(".grid").isotope({
         itemSelector: ".grid-item",
         percentPosition: true,
         masonry: {
            columnWidth: ".grid-item",
         },
      });
   });

   // Popup Js
   if ($(".popup-gallery").length > 0) {
      $(document).ready(function () {
         $(".popup-gallery").magnificPopup({
            delegate: "a",
            type: "image",
            removalDelay: 300,
            mainClass: "mfp-fade",
            gallery: {
               enabled: true,
            },
         });
      });
   }

   // Clone function Js
   $.fn.duplicate = function (count, cloneEvents, callback) {
      var stack = [],
         el;
      while (count--) {
         el = this.clone(cloneEvents);
         callback && callback.call(el);
         stack.push(el.get()[0]);
      }
      return this.pushStack(stack);
   };

   // Vertical effect Js
   $("<div class='vertical-effect'></div>").duplicate(7).appendTo(".vertical-lines-wrapper");
})(jQuery);
