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

    function blockBrowser() {
        // will show an overlay to prevent double-click on buttons
        // and such will prevent double form POST
        $.blockUI({
            message: null
            , fadeIn: 500
            , overlayCSS: { opacity: 0.3, backgroundColor: '#aaaaaa' }            
        });

        //        $(window).on('unload', function () { setTimeout($.unblockUI, 1000); });
        $(window).on('unload', $.unblockUI );
    }

    $(document).on('click', 'input[type=submit], a[class!=ui-tabs-anchor][id!=menu_all_button][id!=global_entity_select][href!=\\#], input[name=is_deleted]', blockBrowser);

});
