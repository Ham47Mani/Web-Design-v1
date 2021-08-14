/* 
 * Template Name      : Template 1
 * Template Version   : V 1.0.0
 * Template Url       : ...
 * Language           : HTML5, CSS3, jQuery 
 * Contact Me : Skaype   :- Boudraa.Hamani
 *				Facebook :- Ham mani
 *				Email    :- Ham47mani@gmail.com
 */

/*global $, window*/
$(function () {
    "use strict";
    
    /* ======================== Start Cash Varriable ======================== */
    var navOffset = $("nav").offset().top;
    /* ======================== End Cash Varriable ======================== */
    
    //--> Change The Scroll Top Of Page On Click In Icons
    $("header i").click(function () {
        $("html, body").animate({
            scrollTop: $("nav").offset().top
        }, 500);
    });
    
    //--> Fixed Navbar On Scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() >= navOffset) {
            $("nav").addClass("fixedMenu");
        } else {
            $("nav").removeClass("fixedMenu");
        }
    });
    
    //--> Toggle The Navbar
    $("nav i.fa").click(function () {
        $(this).toggleClass("fa-bars fa-close");
        $(this).next(".list").slideToggle(500);
    });
    
    //--> Make Smoth Scroll When Click On Element In Navbar
    $("nav ul li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $("html, body").animate({
            scrollTop: $("." + $(this).data("link")).offset().top
        }, 500);
        $("nav .list").slideUp(500);
        $("nav i.fa").toggleClass("fa-bars fa-close");
    });
    
    //--> Input Effects 1
    $(".input-effect1 input").focus(function () {
        $(this).prev("label").animate({
            top: "-30px",
            left: "-10px"
        }, 400);
    }).blur(function () {
        if ($(this).val() === "") {
            $(this).prev("label").animate({
                top: "0",
                left: "10px"
            }, 400);
        }
    });
    
    //--> Input Effects 1
    $(".input-effect2 input").focus(function () {
        $(this).prev("label").css("background-color", "#252F31").animate({
            top: "-12px",
            zIndex: 3,
            padding: "0 2px"
        }, 400);
    }).blur(function () {
        if ($(this).val() === "") {
            $(this).prev("label").css("background-color", "transparent").animate({
                top: "10px",
                zIndex: 1,
                padding: "0"
            }, 400);
        }
    });
});