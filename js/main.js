$(function () {
  function navbar() {
    checkHeaderStatus();
    window.scroll(function () {
      checkHeaderStatus();
    });

    function checkHeaderStatus() {
      $(window).on("activate.bs.scrollspy", function () {
        let hash = $(".main-nav").find("a.active").attr("href");
        if (hash !== "#top-header") {
          $("header nav").addClass("inbody");
        } else {
          $("header nav").removeClass("inbody");
        }
      });
    }
  }
  navbar();

  // hide collapse nav on click
  $(".navbar-nav > li > a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $(document).on("click", "a.js-scroll-trigger", function (e) {
    var anchor = $(this);
    $("html,body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top - 50,
        },
        1200,
        "easeOutQuad"
      );
    e.preventDefault();
  });

  // wow reveal when the user scrolls
  wow = new WOW({
    boxClass: "wow", // default
    animateClass: "animated", // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
  });
  wow.init();

  lightGallery(document.getElementById("lightgallery"));

  // About
  $("#accordion .heading").click(function () {
    // Toggle the icon
    $(this)
      .find(".svg-inline--fa")
      .toggleClass("fa-chevron-down fa-chevron-up");
  });

  //media query for contact
  const mq = window.matchMedia("(max-width: 576px)");
  function widthMach(mq) {
    if (mq.matches) {
      $("#con-image").addClass("img-fluid");
    } else {
      $("#con-image").removeClass("img-fluid");
    }
  }
  widthMach(mq);
  mq.addListener(widthMach);

  // scroll to top
  var btn = $("#scroll-top");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show-it");
    } else {
      btn.removeClass("show-it");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
});
