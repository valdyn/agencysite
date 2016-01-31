/*
Theme Name: ARD
Description: Architecture Template
Author: Rafava
Version: 1.1
*/

/* ==================================================================
 
 * Table of Contents:
 *
 * 1.0 - Add #first on load
 * 2.0 - Loader (Mobile)
 * 3.0 - Menu features
 * 4.0 - Build or destroy multiscroll
 * 5.0 - Detect mobile
 * 6.0 - Multiscroll
 * 7.0 - Resize
 * 8.0 - Reverse sections (Mobile)
 * 9.0 - Section image background
 * 10.0- Fade in-out projects sections
 * 11.0- Bigtext
 * 12.0- Homeheight owl-carousel
 * 13.0- Design owl-carousel
 * 14.0- Scroll down-up
 * 15.0- Team lightbox
 * 16.0- Design lightbox
 * 17.0- Map lightbox
 * 18.0- Google map
 * 19.0- Contact form

================================================================== */

$(window).load(function() {
    "use strict";

    //ADD #FIRST ON LOAD
    if ($(window).width() > 991) {if(window.location.hash) {} else {window.location.hash = "first";}}
  
    //LOADER (MOBILE)
    if ($(window).width() <= 991) {
        $(".loader-frame").fadeOut();
        $(".loader-background").delay(200).animate({width:'0%'},600,'swing').fadeOut();
    }

});

$(document).ready(function() {
    "use strict";

    //MENU FEATURES
    function homeheightmenu() {
        $(".home-link").css({
            "margin-top": -1 * $(".home-link").height() / 2 + "px"
        });
        $(".home-height").css({
            height: $(window).outerHeight(true)
        });
    }
    homeheightmenu();
    
    //DESTROY (MOBILE),BUILD (DESKTOP) MULTISCROLL
    function buildordestroy() {
        if ($(window).width() <= 991) {
            $('#main-container').multiscroll.destroy();
        }else{
            $('#main-container').multiscroll.build();
        }
    }

    //DETECT MOBILE (SCROLL IOS FIX)
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    if(isMobile.any()) {
    } else{
    //MULTISCROLL
    $('#main-container').multiscroll({
        sectionsColor: ['white','white','white','white','white','white'],
        anchors: ['first','second','third','fourth','fifth','sixth'],
        easing:'easeInOutCubic',
        menu:'.menu-left',
        scrollingSpeed: 1000,
        afterLoad: function(anchorLink, index) {
            $(".loader-frame").fadeOut();
            if (index == 1){
                $(".loader-background").animate({width:'40%'},600,'swing').fadeOut();
                $('.updown-navigation').fadeOut(450);
                $('.menu-left').fadeOut(450);
            } else{
                $(".loader-background").animate({width:'100%'},600,'swing').fadeOut();
                $('.updown-navigation').fadeIn(450);
                $('.menu-left').fadeIn(450);
            }
            sectionimage(anchorLink, index);
            naviclose(anchorLink, index);
        }
    });
    //RESIZE
    $(window).resize(function(){
       buildordestroy();
       reverseSection(); 
       homeheightmenu();
       $(".active .vegas-slide-inner").css("animation","0");
    });
    }
    
    //FADE OUT CLOSE WHEN CHANGE SECTION
    function naviclose(anchorLink, index) {
        if ($(window).width() >= 991) {
            if (index == 4){
                $('.section-projects .navigation').fadeIn('slow');
            } else{
                $('.section-projects .navigation').fadeOut('slow');
            }
        } 
    }
    
    //REVERSE SECTIONS (MOBILE)
    function reverseSection() {
        if ($(window).width() <= 991) {
            $("#right2").insertAfter("#right1");
            $("#right3").insertAfter("#right2");
            $("#right4").insertAfter("#right3");
            $("#right5").insertAfter("#right4");
            $("#right6").insertAfter("#right5");
        } else {
            $("#right2").insertBefore("#right1");
            $("#right3").insertBefore("#right2");
            $("#right4").insertBefore("#right3");
            $("#right5").insertBefore("#right4");
            $("#right6").insertBefore("#right5");
        }
    }
    reverseSection();  

    //SECTION IMAGE BACKGROUND
    function sectionimage(anchorLink, index){
        //ABOUT
        if (index == 2){
            $("#left2").vegas({
                slides: [
                { src:  "./img/lutz2.jpg"  },
                ],
                delay: 7000,
                cover:false,
                align:'right',
                timer:false,
                animation: [ 'kenburns' ]
            });
            $("#right2").vegas({
                slides: [
                { src: "./img/alex.jpg" },
                ],
                delay: 7000,
                cover:false,
                align:'left',
                timer:false,
                animation: [ 'kenburns' ]
            });
        }
        //DESIGN aka Profil
        if (index == 3){
            $("#left3").vegas({
                slides: [
                { src: "./img/profil.jpg" },
                ],
                delay: 7000,
                cover:false,
                align:'right',
                timer:false,
                animation: [ 'kenburns' ]
            });
            $("#right3").vegas({
                slides: [
                { src: "./img/background-right.jpg" },
                ],
                delay: 7000,
                cover:false,
                align:'left',
                timer:false,
                animation: [ 'kenburns' ]
            });
        }
        //PROJECTS
        if (index == 4){
            $("#left4").vegas({
                slides: [
                  { src: "./img/kahlifa1.jpg" },//MAIN BACKGROUND
                  { src: "./img/ABH/Industrie/audi1.jpg" },//PROJECT 1
                  { src: "./img/ABH/Hotels/meridien1.jpg" },//PROJECT 2
                  { src: "./img/ABH/Buero/br1.png" }, //PROJECT 3
                  { src: "./img/ABH/einkaufszentren/karstadt1.jpg" }, //PROJECT 4

                ],
                delay: 7000,
                cover: false,
                autoplay:false,
                align:'right',
                timer:false,
                animation: [ 'kenburns' ]
            });
            $("#right4").vegas({
                slides: [
                { src: "./img/kahlifa2.jpg" },//MAIN BACKGROUND
                { src: "./img/ABH/Industrie/audi2.jpg" },//PROJECT 1
                { src: "./img/ABH/Hotels/meridien3.jpg" },//PROJECT 2
                { src: "./img/ABH/Buero/br2.png" }, //PROJECT 3
                { src: "./img/ABH/einkaufszentren/karstadt2.jpg" }, //PROJECT 4
                ],
                delay: 7000,
                cover:false,
                autoplay:false,
                align:'left',
                timer:false,
                animation: [ 'kenburns' ]
            });
        }
        //SERVICES
        if (index == 5){
            $("#left5").vegas({
                slides: [
                  { src: "./img/services.jpg" },
                ],
                delay: 7000,
                cover:false,
                align:'right',
                timer:false,
                animation: [ 'kenburns' ]
            });
            $("#right5").vegas({
                slides: [
                { src: "./img/services2.jpg" },
                ],
                delay: 7000,
                cover:false,
                align:'left',
                timer:false,
                animation: [ 'kenburns' ]
            });
        }
        //CONTACT
        if (index == 6){
            $("#left6").vegas({
                slides: [
                  { src: "./img/message2.jpg" },
                ],
                delay: 7000,
                cover:false,
                align:'right',
                timer:false,
                animation: [ 'kenburns' ]
            });
            $("#right6").vegas({
                slides: [
                { src: "./img/message.png" },
                ],
                delay: 7000,
                cover:false,
                align:'left',
                timer:false,
                animation: [ 'kenburns' ]
            });
        }
    }

    //FADE IN-OUT PROJECTS SECTIONS
    $('.projects-link-1').on("click", function(e) {
        if (nodoubleclick) return;
        nodoubleclick = true;
        e.preventDefault();
        $('.section-one').fadeOut( 650, function(){
            $('.section-two').addClass('active-section');
            $('.section-two').hide().fadeIn(850);
            if ($(window).width() >= 991) {
            $('#left4').vegas('options', 'transition', 'slideLeft2').vegas('jump',1);//PROJECT 1
            $('#right4').vegas('options', 'transition', 'slideRight2').vegas('jump',1);//PROJECT 1
            }
        });
    });
    $('.projects-link-2').on("click", function(e) {
        if (nodoubleclick) return;
        nodoubleclick = true;
        e.preventDefault();
        $('.section-one').fadeOut( 650, function(){
            $('.section-three').addClass('active-section');
            $('.section-three').hide().fadeIn(850);
            if ($(window).width() >= 991) {
            $('#left4').vegas('options', 'transition', 'slideLeft2').vegas('jump',2);//PROJECT 2
            $('#right4').vegas('options', 'transition', 'slideRight2').vegas('jump',2);//PROJECT 2
            }
        });
    });
    $('.projects-link-3').on("click", function(e) {
        if (nodoubleclick) return;
        nodoubleclick = true;
        e.preventDefault();
        $('.section-one').fadeOut( 650, function(){
            $('.section-four').addClass('active-section');
            $('.section-four').hide().fadeIn(850);
            if ($(window).width() >= 991) {
            $('#left4').vegas('options', 'transition', 'slideLeft2').vegas('jump',3);//PROJECT 3
            $('#right4').vegas('options', 'transition', 'slideRight2').vegas('jump',3);//PROJECT 3
            }
        });
    });
    $('.close-projects').on("click", function(e) {
        nodoubleclick = false;
        e.preventDefault();
        $('.active-section').fadeOut( 650, function(){
            $(this).removeClass('active-section');
            $('.section-one').hide().fadeIn(850);
            if ($(window).width() >= 991) {
            $('#left4').vegas('options', 'transition', 'slideLeft2').vegas('jump',0);//MAIN BACKGROUND
            $('#right4').vegas('options', 'transition', 'slideRight2').vegas('jump',0);//MAIN BACKGROUND
            }
        });
        $('.projects-link-4').on("click", function(e) {
        if (nodoubleclick) return;
        nodoubleclick = true;
        e.preventDefault();
        $('.section-one').fadeOut( 650, function(){
            $('.section-five').addClass('active-section');
            $('.section-five').hide().fadeIn(850);
            if ($(window).width() >= 991) {
            $('#left4').vegas('options', 'transition', 'slideLeft2').vegas('jump',4);//PROJECT 4
            $('#right4').vegas('options', 'transition', 'slideRight2').vegas('jump',4);//PROJECT 4
            }
        });
    });
    });var nodoubleclick = false;

    //BIGTEXT
    $('.home-name').bigtext({
        maxfontsize: 115
    });
    $('.home-sub-a').bigtext({
        maxfontsize: 85
    });
    
    //HOMEHEIGHT OWL-CAROUSEL
    var homeheight = $("#home-carousel");
    homeheight.owlCarousel({
        navigation: false,
        slideSpeed: 500,
        items: 3,
        pagination: false,
        autoHeight: true,
        itemsDesktop : [1200,2]
    });
    $(".home-navigation ul .next").on("click", function() {
        homeheight.trigger("owl.next");
    });
    $(".home-navigation ul .prev").on("click", function() {
        homeheight.trigger("owl.prev");
    });
    
    //DESIGN OWL-CAROUSEL
    var design = $("#design-carousel");
    design.owlCarousel({
        navigation: false,
        slideSpeed: 500,
        items: 3,
        pagination: false,
        itemsDesktop : [1200,3]
    });
    $(".navigation ul .next").on("click", function() {
        design.trigger("owl.next");
    });
    $(".navigation ul .prev").on("click", function() {
        design.trigger("owl.prev");
    });

    //SERVICES OWL-CAROUSEL
    var services = $("#services-carousel");
    services.owlCarousel({
        navigation: false,
        slideSpeed: 500,
        items: 3,
        pagination: false,
        itemsDesktop : [1400,2]
    });
    $(".navigation ul .next").on("click", function() {
        services.trigger("owl.next");
    });
    $(".navigation ul .prev").on("click", function() {
        services.trigger("owl.prev");
    });
   
    //SCROLL DOWN-UP
    $(".updown-navigation ul .up").on("click", function() {
        $('#main-container').multiscroll.moveSectionUp();
    });
    $(".updown-navigation ul .down").on("click", function() {
        $('#main-container').multiscroll.moveSectionDown();
    });

    //TEAM LIGHTBOX
    $('.about-popup-link').magnificPopup({
        type: 'inline',
        mainClass: 'mfp-fade',
        removalDelay: 400
    });
   
    //DESIGN IMAGES LIGHTBOX
    $('.design-popup-link').magnificPopup({
        type:'image',
        mainClass: 'mfp-fade',
        removalDelay: 400
    });
    
    //GOOGLE MAP LIGHTBOX
    $('.map-popup-link').magnificPopup({
        type: 'inline',
        mainClass: 'mfp-fade',
        removalDelay: 400,
        callbacks: {
        open: function () {
            initializeGoogleMap();
        },
        close: function () {
        }
        }
    });

    //GOOGLE MAP
    function initializeGoogleMap() {
        var styles = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#ff0000"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"lightness":"100"}]},{"featureType":"landscape.man_made","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"lightness":"100"}]},{"featureType":"landscape.natural","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"lightness":"100"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"visibility":"off"},{"lightness":"23"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#EBD9A0"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#EBD9A0"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#cccccc"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]}];
        var styledMap = new google.maps.StyledMapType(styles,
        {name:"Styled Map"});
        var myLatlng = new google.maps.LatLng(48.1543623,11.622552);
        var myOptions = {
        center: myLatlng,
        zoom: 14,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        disableDefaultUI: true
        };
        var map = new google.maps.Map(document.getElementById("map_div"), myOptions);
        var marker = new google.maps.Marker({
        position: myLatlng
        });
        google.maps.event.addListener(marker,"click", function () {
        infowindow.open(map, marker);
        });
        marker.setMap(map);
        map.mapTypes.set("2", styledMap);
        map.setMapTypeId("2");
    }
    initializeGoogleMap();   

    //CONTACT FORM
    $("input,textarea").jqBootstrapValidation({
        
        preventSubmit: true,
        submitError: function($form, event, errors) {
        },
        submitSuccess: function($form, event) {
        event.preventDefault(); 
        var name = $("input#name").val();  
        var email = $("input#email").val(); 
        var message = $("textarea#message").val();
        var firstName = name; 
        if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
        }        
        $.ajax({
                url: "./js/mailer.php",
                type: "POST",
                data: {name: name, email: email, message: message},
                cache: false,
                success: function() {  
                // Success message
                $('#success').html("<div class='alert alert-success'>");
                $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append( "</button>");
                $('#success > .alert-success').append("Your message has been sent. ");
                $('#success > .alert-success').append('</div>');
                //clear all fields
                $('#contactForm').trigger("reset");
                },
                error: function() {      
                // Fail message
                $('#success').html("<div class='alert alert-danger'>");
                $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append( "</button>");
                $('#success > .alert-danger').append("Sorry "+firstName+" it seems that my mail server is not responding");
                $('#success > .alert-danger').append('</div>');
                //clear all fields
                $('#contactForm').trigger("reset");
                },
                })
                },
                filter: function() {
                return $(this).is(":visible");
                },
                });
        $("a[data-toggle=\"tab\"]").on("click", function(e) {
                e.preventDefault();
                $(this).tab("show");
        });
        $('#name').on("focus", function() {
        $('#success').html('');
    
    });

});