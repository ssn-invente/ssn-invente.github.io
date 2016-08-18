$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#nt").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });

  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});


 $(function () {
        $("#collapsable-nav").focusout(function (e) {
            if ($(this).find(e.relatedTarget).length == 0) {
                // Focus is now outside of your div. Do something here.
                // e.Target will give you the last element within the
                // div to lose focus if you need it for processing.
                var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    
            }
          }
    })
   });

document.getElementById("workshop").onclick = function () {
	location.href = "../workshops/index.html";
}


/*
$(function () {
$('#collapsable-nav')
   .on('shown.bs.collapse', function () {
     $('#navbarToggle').addClass('active')
   })
   .on('hidden.bs.collapse', function () {
     $('#navbarToggle').removeClass('active')
   });
});4
*/