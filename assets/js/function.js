// page loader
var loader = 0;
$(window).on("load", function(){
  setTimeout(function(){
    $("body").css('overflow-y','unset');
    if(loader==0){
      $('.pageloader').fadeOut('slow');
      loader=1;
    }
  },1000);
});
  // veno box

  $(document).ready(function(){
    $('.venobox').venobox({
        framewidth: 'auto',
    }); 
  });

  /* ===============================  countUp  =============================== */

  $('.number').countUp({
      delay: 10,
      time: 500
  });
  

//slick
$('.client-logos ul').slick({
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.homePg .service-list').slick({
  dots: false,
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.newsletter .test-slider').slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


//Match title height
function MatchHeight() {
    $('.matchheight')
      .matchHeight({})
    ;
  }
  
  //Functions that run when all HTML is loaded
  $(document).ready(function() {
    MatchHeight(); 
  });

// sidebar
var burgerTop = document.getElementsByClassName("top");
var burgerBot = document.getElementsByClassName("bottom");
var burgerMid = document.getElementsByClassName("middle");
var burgerSidebar = document.getElementsByClassName("sidebar");
var sideText = document.getElementsByClassName("sidetext");
var burgerWhole = document.querySelectorAll(".top, .bottom, .middle");

var tl = new TimelineMax({
  paused: true,
  reversed: true
});
tl.timeScale(1);
tl
  .to(burgerTop, 0.7, {
    y: 11,
    yoyo: true,
    ease: Power1.easeInOut
  })
  .to(burgerBot, 0.7, {
    y: -11,
    yoyo: true,
    ease: Power1.easeInOut
  }, '-=0.7')
  .to(burgerTop, 1, {
    rotation: 585
  })
  .to(burgerMid, 1, {
    rotation: 585
  }, '-=1')
  .to(burgerBot, 1, {
    rotation: 675
  }, '-=1')
  .to(burgerWhole, 0.1, {
    css: {
      borderColor: "#fff"
    },
    ease: Power1.easeOut
  }, '-=1')
  .to(burgerSidebar, 1, {
    x: 880,
    ease: Power2.easeOut
  }, '-=1')
  .staggerFrom(sideText, 0.5, {
    opacity: 0,
    y: 25,
    ease: Power1.easeOut
  }, 0.1, "-=0.7")
  .to(sideText, 0.2, {
    css: {
      color: "#fff"
    }
  });

function haminate() {
  tl.reversed() ? tl.play() : tl.reverse();
  $(".burger-click-region").toggleClass("active");
  window.setTimeout(function () {
    $("body").toggleClass("menu-open");
    window.setTimeout(function () {
      if($("body").hasClass("menu-open")){
        $(".backdrop").addClass("rotate");
      }else{
        $(".backdrop").removeClass("rotate");
      }
    }, 50);
    $(".sidebar").toggleClass("openside");
    $(".logoside").toggleClass("fadeInUp");
    $(".backdrop").fadeToggle({
      width: 'toggle'
    }, 550);
  }, 800);
}

    /* ===============================  Wow Animation  =============================== */

    wow = new WOW({
      animateClass: 'animated',
      offset: 100
    });
    wow.init();
    
    /* ===============================  SPLITTING TEXT  =============================== */
    
    Splitting();
    
    /* ===============================  Isotope Filter  =============================== */

    $(window).on('load',function(){
      window.setTimeout(function () {
        $("#portfolio-flters li:nth-child(1)").trigger('click');
      }, 1000);
    });	

    $(document).ready(function() {
  

      if (window.location.href.match('/services/' || '/cases/')) {
          var portfolioIsotope = $('.portfolio-container').isotope({
             itemSelector: '.portfolio-item',
             
          });
          $('#portfolio-flters li').on('click', function() {
            $("#portfolio-flters li").removeClass('filter-active');
            $(this).addClass('filter-active');
  
            portfolioIsotope.isotope({
              filter: $(this).data('filter')
              
            });
            
          });
      } else{
        var portfolioIsotope = $('.portfolio-container').isotope({
             itemSelector: '.portfolio-item',
             filter: '.filter-all'
        });
        $('#portfolio-flters li').on('click', function() {
            $("#portfolio-flters li").removeClass('filter-active');
            $(this).addClass('filter-active');
  
            portfolioIsotope.isotope({
              filter: $(this).data('filter')
              
            });
            
        });
  
      }

      if ($('#portfolio-flters li').hasClass('all')) {   
          
          ShuffleBlocks();
        }
        function ShuffleBlocks()
        {
          $('.portfolio-container').isotope('shuffle');
        }
      
  });

  // portfolio tan
$("#pills-app-tab").click(function() {
  window.setTimeout(function () {
    $('.wow.mobile-portfolio-list').addClass("animated");
  }, 700);
});

// bottom year
$(function () {
  "use strict";
  var e = new Date().getFullYear();
  $("#year").html(e);
});

 // intel Tel Input
        let ip;
        let ip_value;
        $("#phone, #phone-country").intlTelInput({

            // allowDropdown: false,
            // autoHideDialCode: false,
            // autoPlaceholder: "off",
            // dropdownContainer: "body",
            // excludeCountries: ["us"],
            // formatOnDisplay: false,
            geoIpLookup: function (callback) {
                $.get('https://ipinfo.io/', function () {}, "jsonp").always(function (resp) {
                    var countryCode = (resp && resp.country) ? resp.country : "";
                    callback(countryCode);
                    ip = resp.ip;


                });
            },
            initialCountry: "auto",
            nationalMode: true,
            separateDialCode: true,
            // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
            // placeholderNumberType: "MOBILE",
            // preferredCountries: ['cn', 'jp'],
            // utilsScript: "<?php echo $basesurl;?>js/utils.js"
        });

        setTimeout(function () {

            $('input[name="pc"]').val($('.selected-dial-code').text());
            $('input[name="cip"]').val(ip);
            $('input[name="ctry"]').val($('.country-list .country.active .country-name').text());

        }, 3000);


        setTimeout(function () {
            $(".frstn").addClass("active");
        }, 3000);
        setTimeout(function () {
            $(".frstn").removeClass("active");
        }, 6000);


        setTimeout(function () {
            $(".scndn").addClass("active");
        }, 11000);
        setTimeout(function () {
            $(".scndn").removeClass("active");
        }, 14000);


        setTimeout(function () {
            $(".thrdn").addClass("active");
        }, 18000);
        setTimeout(function () {
            $(".thrdn").removeClass("active");
        }, 21000);

        setTimeout(function () {
            $(".frthn").addClass("active");
        }, 25000);
        setTimeout(function () {
            $(".frthn").removeClass("active");
        }, 28000);

        setTimeout(function () {
            $(".ffthn").addClass("active");
        }, 31000);
        setTimeout(function () {
            $(".ffthn").removeClass("active");
        }, 35000);

        setTimeout(function () {
            $(".sxxthn").addClass("active");
        }, 37000);
        setTimeout(function () {
            $(".sxxthn").removeClass("active");
        }, 40000);

        setTimeout(function () {
            $(".svnthn").addClass("active");
        }, 44000);
        setTimeout(function () {
            $(".svnthn").removeClass("active");
        }, 47000);

        setTimeout(function () {
            $(".eghtn").addClass("active");
        }, 49000);
        setTimeout(function () {
            $(".eghtn").removeClass("active");
        }, 52000);

        setTimeout(function () {
            $(".nnethn").addClass("active");
        }, 56000);
        setTimeout(function () {
            $(".nnethn").removeClass("active");
        }, 59000);

        setTimeout(function () {
            $(".tnthn").addClass("active");
        }, 62000);
        setTimeout(function () {
            $(".tnthn").removeClass("active");
        }, 65000);

        setTimeout(function () {
            $(".elvnth").addClass("active");
        }, 68000);
        setTimeout(function () {
            $(".elvnth").removeClass("active");
        }, 71000);

        setTimeout(function () {
            $(".twlthn").addClass("active");
        }, 74000);
        setTimeout(function () {
            $(".twlthn").removeClass("active");
        }, 77000);

        setTimeout(function () {
            $(".thrtn").addClass("active");
        }, 80000);
        setTimeout(function () {
            $(".thrtn").removeClass("active");
        }, 83000);

        setTimeout(function () {
            $(".fftn").addClass("active");
        }, 86000);
        setTimeout(function () {
            $(".fftn").removeClass("active");
        }, 89000);

        setTimeout(function () {
            $(".fftn").addClass("active");
        }, 92000);
        setTimeout(function () {
            $(".fftn").removeClass("active");
        }, 95000);

        setTimeout(function () {
            $(".ssxtn").addClass("active");
        }, 96000);
        setTimeout(function () {
            $(".ssxtn").removeClass("active");
        }, 99000);


        $('body').delegate('.country', 'click', function () {
            $('input[name="pc"]').val($(this).find('.dial-code').text());

            var oldString2 = $('.selected-flag').attr('title').toUpperCase();
            var newString12 = oldString2.split(':', 1)[0];
            $('input[name="ctry"]').val(newString12);
            var t = $(this).closest(".flag-container").find(".country.active").attr("data-country-code");
            $('input[name="iso"]').val(t);
        });

    