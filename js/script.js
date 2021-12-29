// For Navigation Toggling
function toggleNav() {
    var nav = document.getElementById("responsive-nav");
    if (nav.className === "navbar") {
        nav.className += " responsive";
    } else {
        nav.className = "navbar";
    }
}

// Fixed Navigation when scrolled
$(document).ready(function () {
    var waypoint = new Waypoint({
        element: $('.scroll-start-point'),
        handler: function (direction) {
            if (direction === 'down') {
                $('nav').addClass('fixed-nav');
            } else {
                $('nav').removeClass('fixed-nav');
            }
        },
        offset: 60
    });
});

// Card Animation Effect
$('.card-effect').waypoint(function (direction) {
    $('.card-effect').addClass('animated fadeInUp');
}, {
        offset: '100%'
    });

// Back To Top
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 320 || document.documentElement.scrollTop > 320) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}

// Contact Form Validation
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactMessage = document.getElementById("contact-message");
function validateForm() {
    if (contactName.value.trim() == "") {
        document.getElementById("invalid-name").style.visibility = "visible";
        return false;
    }
    else if (contactMessage.value.trim() == "") {
        document.getElementById("invalid-message").style.visibility = "visible";
        return false;
    }

    else {
        document.getElementById("success-message").style.visibility = "visible";
        return true;
    }
}



// When the user clicks on the button, scroll to the top of the document
function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}