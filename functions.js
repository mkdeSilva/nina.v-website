
function openNav() {
  document.getElementById("side-bar").style.width = "250px";
  // document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("side-bar").style.width = "0px";
  // document.getElementById("main").style.marginLeft = "0px";
}

// Scroll to sections
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
        closeNav();
      });
    } // End if
  });
});

$(window).scroll(function() {

  var scrollDist = $(this).scrollTop();

  $('#border').css({
    'transform': 'translate(0px, ' + scrollDist / 1.5 + '%)'
  });
});