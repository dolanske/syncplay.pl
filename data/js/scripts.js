
jQuery(document).ready(function ($) {

    $(".menu-open").on("click", function(e){
        e.preventDefault();

        $(this).next().find("ul").slideToggle(300);
    });
});
