$('nav a, #home, #contact').on('click', function () {
    const section = "[data-section=" + $(this).attr('id') + "]";
    $('body, html').animate({
        scrollTop: $(section).offset().top - $('.menu').height()
    })
})
// $(document).ready(function() {
//     $('a[href*=\\#]').on('click', function(e){
//         e.preventDefault();
//         $('html, body').animate({
//             scrollTop : $(this.hash).offset().top
//         }, 500);
//     });
// });
// $(document).ready(function () {
//     if (window.location.hash) {
//         var hash = window.location.hash;
//         $('html, body').animate({
//             scrollTop: $(hash).offset().top
//         }, 500);
//     };
// });