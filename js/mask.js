$(document).ready(function () {
  $(document).on("keydown", function (e) {
    // prevents backspace when not in textarea nor input
    // and such will prevent browser to navigate to previous HTML page
    if (
      e.which === 8 &&
      !$(e.target).is(
        "input:text, textarea, input[type=password], input[type=search]"
      )
    ) {
      e.preventDefault();
    }

    // prevents enter key when not in textarea
    // and such will prevent unwanted submits
    if (
      e.which === 13 &&
      !$(e.target).is(
        "input[type=submit], input[name=globalsearch], input[name^=criteria], input[name^=metacriteria], textarea"
      )
    ) {
      e.preventDefault();
    }
  });

  function displayOverlay(e) {
    console.log(e.target.parentElement);

    // don't use displayOverlay when submit input open new tab or update parent ( example: pdf generation )
    if (
      !(
        ($(this).is("input[type=submit]") ||
          $(this).is("button[type=submit]")) &&
        $(this).parents("form").length > 0 &&
        ($(this).parents("form").first().attr("target") == "_blank" ||
          $(this).parents("form").first().attr("target") == "_parent")
      ) &&
      !e.target.parentElement.classList.contains(
        "leaflet-control-geocoder-form"
      ) &&
      e.target.parentElement.name != "export"
    ) {
      $(
        "<div id='plugin_mask_overlay' class='ui-widget-overlay ui-front'></div>"
      ).appendTo("body");
      var count = $(".ui-widget-overlay.ui-front").length;
      while (count > 1) {
        $($(".ui-widget-overlay.ui-front")[count - 1]).removeClass(
          "ui-widget-overlay"
        );
        count = $(".ui-widget-overlay.ui-front").length;
      }
      /*var timer = window.setInterval(function () {
               var count = $('.ui-widget-overlay.ui-front').length;
               console.log(count);
               while(count > 1) {
                   $($('.ui-widget-overlay.ui-front')[count-1]).remove();
                   count = $('.ui-widget-overlay.ui-front').length;
               }
               window.clearInterval(timer);
           }, 10);*/
    }
  }

  function removeOverlay() {
    $("#plugin_mask_overlay").remove();
  }

  var myObserver = new MutationObserver(mutationHandler);
  var obsConfig = {
    childList: true,
    characterData: false,
    attributes: false,
    subtree: true,
  };

  $("body").each(function () {
    myObserver.observe(this, obsConfig);
  });

  //Called when an element is an to the dom
  function mutationHandler(mutationRecords) {
    //.glpi_modal add an overlay. We can remove the div #plugin_mask_overlay
    //if ($(".ui-widget-overlay.ui-front.glpi_modal").length > 0) {
    //    removeOverlay();
    //}

    //if an other plugin has already add an overlay, we can remove the div #plugin_mask_overlay
    if ($(".ui-widget-overlay.ui-front").length > 1) {
      removeOverlay();
    }
  }
  $(document).on(
    "click",
    "button[type=submit], input[type=submit], a[href*=reset\\=reset], input[name=is_deleted]",
    displayOverlay
  );
});
