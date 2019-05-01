jQuery(document).ready(function($) {
    // Header dropdown
    $(".menu-open").on("click", function(e) {
        e.preventDefault();
        $(this).next().slideToggle(300);
        $(this).toggleClass("active");
    });

    // Anchor
    $(".tp").click(function(e) {
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

    // Clipboard copy
    // $(".footer-servers > li").on("click", function(e){
    //     var id = $(this).attr('id');
	// 	var el = document.getElementById(id);
	// 	var range = document.createRange();
	// 	range.selectNodeContents(el);
	// 	var sel = window.getSelection();
	// 	sel.removeAllRanges();
	// 	sel.addRange(range);
	// 	document.execCommand('copy');
	// 	return false;
    // });
});
