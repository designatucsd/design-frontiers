$(document).ready(function() {
  console.log('JS loaded!');

  $(".mobile-link").click(function() {
    $(".df-nav").toggleClass("nav-open");
  });
});
