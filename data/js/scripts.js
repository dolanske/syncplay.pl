
jQuery(document).ready(function ($) {
    $(window).on("scroll", function () {
        var st = $(window).scrollTop();
        if (st > 600) {
            $("header").show();
        } else {
            $("header").fadeOut(150);
        }
    });
});
