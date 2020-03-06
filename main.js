$('nav a, #home, #contact').on('click', function () {
    const section = "[data-section=" + $(this).attr('id') + "]";
    $('body, html').animate({
        scrollTop: $(section).offset().top - $('.menu').height()
    })
})