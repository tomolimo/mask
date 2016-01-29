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


    $("<div id='mask_overlay'></div>").css({
        "position": "fixed",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "background-color": "rgba(170,170,170,.3)",
        "z-index": 10000,
        "cursor": "wait",
        "display": "none"
    }).appendTo("body");

    function displayOverlay() {
        $("#mask_overlay").show();
    }

    function removeOverlay() {
        $("#mask_overlay").hide();
    }

    $(document).on('click', 'input[type=submit], a[href*=reset\\=reset], input[name=is_deleted]', displayOverlay);

});
