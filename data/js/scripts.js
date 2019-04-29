
jQuery(document).ready(function ($) {
    // Header dropdown
    $(".menu-open").on("click", function(e){
        e.preventDefault();
        $(this).next().slideToggle(300);
    });

    // Anchor
    $(".tp").click(function (e) {
        e.preventDefault();
        var anchor = $(this).attr("href");
        $('html,body').animate({
            scrollTop: $(anchor).offset().top
        }, 'slow');
    });

    var anchor = window.location.hash;
    if (anchor != "") {
        if ($(anchor).length > 0) {
            $('html,body').animate({
                scrollTop: $(anchor).offset().top
            }, 'slow');
        }
    }
});
