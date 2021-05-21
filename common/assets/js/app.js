(function ($) {
    "use strict"; // Start of use strict
    
    //Basket functions

    // $("#edit_form").validate();

    function add_to_basket(rid) {
        $.ajax({
            url: 'add_to_basket.php',
            data: "rid=" + rid + "&act=add",
            type: 'post',
            success: function (result) {
                $('#b_' + rid + '_add').hide();
                $('#b_' + rid + '_rem').show();
            }
        });
    }

    function rem_from_basket(rid) {
        $.ajax({
            url: 'add_to_basket.php',
            data: "rid=" + rid + "&act=rem",
            type: 'post',
            success: function (result) {
                $('#b_' + rid + '_rem').hide();
                $('#b_' + rid + '_add').show();
            }
        });
    }

    // function clear_elt(element_id) {
    //     $('#' + element_id).val('');
    // }
    // $(function () {
    //     $(".dp").datepicker({
    //         dateFormat: "dd/mm/yy",
    //     });
    // });

    // Scroll to top button appear
    $(document).on('scroll', function () {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    // Smooth scrolling using jQuery easing
    $(document).on('click', 'a.scroll-to-top', function (e) {
        $('html, body').stop().animate({scrollTop:0}, 500, 'swing');
        e.preventDefault();
    });
})(jQuery); // End of use strict






// Dark Mode

var darkSwitch = document.getElementById("darkSwitch");
window.addEventListener("load", function () {
  if (darkSwitch) {
    initTheme();
    darkSwitch.addEventListener("change", function () {
      resetTheme();
    });
  }
});

function initTheme() {
  var darkThemeSelected =
    localStorage.getItem("darkSwitch") !== null &&
    localStorage.getItem("darkSwitch") === "dark";
  darkSwitch.checked = darkThemeSelected;
  darkThemeSelected
    ? document.body.setAttribute("data-theme", "dark")
    : document.body.removeAttribute("data-theme");
}

function resetTheme() {
  if (darkSwitch.checked) {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("darkSwitch", "dark");
  } else {
    document.body.removeAttribute("data-theme");
    localStorage.removeItem("darkSwitch");
  }
}

console.log('coucou')
