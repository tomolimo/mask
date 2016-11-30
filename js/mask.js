$(document).ready(function () {

    $(document).on("keydown", function (e) {
        // prevents backspace when not in textarea nor input
        // and such will prevent browser to navigate to previous HTML page
        if (e.which === 8 && !$(e.target).is("input[type=text], textarea")) {
            e.preventDefault();
        }

        // prevents enter key when not in textarea
        // and such will prevent unwanted submits
        if (e.which === 13 && !$(e.target).is("input[type=submit], input[name=globalsearch], input[name^=criteria], input[name^=metacriteria], textarea")) {
            e.preventDefault();
        }
    });

    function displayOverlay() {
        
        $("<div class='ui-widget-overlay ui-front'></div>").appendTo("body");

        var timer = window.setInterval(function () {
            var count = $('.ui-widget-overlay.ui-front').length;
            if (count == 2) {
                $($('.ui-widget-overlay.ui-front')[1]).remove();
                window.clearInterval(timer);
            } 

        }, 10);
    }



    function removeOverlay() {
        $('.ui-widget-overlay.ui-front').remove();
    }

    $(document).on('click', 'input[type=submit], a[href*=reset\\=reset], input[name=is_deleted]', displayOverlay);

});
