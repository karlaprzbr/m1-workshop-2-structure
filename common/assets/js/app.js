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
    $('html, body').stop().animate({
        scrollTop: 0
    }, 100, 'swing');
    e.preventDefault();
});



// Dark Mode



// darkSwitch.addEventListener('click', function () {
//     console.log('yes')
//     if (darkSwitch) {
//         initTheme();
//         darkSwitch.addEventListener("change", function () {
//           resetTheme();
//         });
//         console.log('bonjour')
//       }
// })




// 