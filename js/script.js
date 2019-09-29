$(document).ready(function () {
    $(window).scroll(function () {
        var scrolltop = $(window).scrollTop();
        if (scrolltop >= 200) {
            $(".scrolltop").addClass("show")
            $(".navbar-default").addClass("bg")
        }
        else {
            $(".scrolltop").removeClass("show")
            $(".navbar-default").removeClass("bg")
        }
    })
    $(".scrolltop").on("click", function () {
        $("html,body").animate({
            scrollTop: 0
        })
    })
});
