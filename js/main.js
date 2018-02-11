$(document).ready(function() {
  console.log('JS loaded!');

  $(".mobile-link").click(function() {
    $(".df-nav").toggleClass("nav-open");
  });

  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });
});
