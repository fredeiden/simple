jQuery(document).ready(function ($) {

  // add active trail for player_links menu
  var path = $(location).attr('pathname');

  $(".view-menu").find("li > a").each(function() {
    var href = $(this).attr("href");
    if (href.toLowerCase() == path.toLowerCase()) {
      $(this).addClass("is-active");
      $(this).parent("li").addClass("menu-item--active-trail");
    }
  });

});
