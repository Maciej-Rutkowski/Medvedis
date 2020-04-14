$("nav a, #home, #contact").on("click", function () {
  const section = "[data-section=" + $(this).attr("id") + "]";
  $("body, html").animate({
    scrollTop: $(section).offset().top - $(".menu").height(),
  });
});

$(document).ready(function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const section = "[data-section=" + urlParams.get("id") + "]";
  $("html,body").animate({
    scrollTop: $(section).offset().top - $(".menu").height(),
  });
});
