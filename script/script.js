$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('.menu a').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
      console.log('click');

        $('.menu a').each(function () {
          $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
          'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
        });
    });
});

  // When scrolling on the page the title on the area you are on will show
  // when you enter and disappear when you leave the area. 
function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.menu a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <=scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('.menu a').removeClass("active");
      currLink.addClass("active");
    }
    else {
      currLink.removeClass("active");
    }
  });
}
