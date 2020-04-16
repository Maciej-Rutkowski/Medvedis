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
$(document).ready(function () {
  $("p, span").each(function () {
    var text = $(this).html();
    var letters = ["a", "i", "o", "u", "w", "z", "A", "I", "O", "U", "W", "Z"];
    var arrayLength = letters.length;
    for (var i = 0; i < arrayLength; i++) {
      var textSplit = text.split(" " + letters[i] + " ");
      var text = textSplit.join(" " + letters[i] + "&nbsp;");
    }
    $(this).empty();
    $(this).html(text);
  });
});
