$(function() {

    let header = $("#header");
    let intro = $("#intro")
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");

    $(window).on("scroll load resize", function(){

        scrollPos = $(this).scrollTop();

        if(scrollPos > introH) {
            header.addClass("fixed");

        } else {
            header.removeClass("fixed");

        }
    });

    $("[data-scroll]").on("click", function(Event) {
    Event.preventDefault();

    let elementID = $(this).data('scroll');
    let elementOffset = $(elementID).offset().top;

    nav.removeClass("show");

    console.log(elementOffset);

    $("html, body").animate({
     scrollTop: elementOffset -70
    }, 1000);

    });


 


});