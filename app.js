$(function() {

	/*************
	 * Scroll to *
	 *************/

	$('a[href*="#"]').click(function(e) {
		e.preventDefault();
		var $target = $($(this).attr('href'));
		var scrollTop = $target.offset().top;
		$('html, body').animate({'scrollTop': scrollTop}, 1000);
	});

	/*************
	 *   Email   *
	 *************/

	// Get the modal
	var modal = document.getElementById('modal');

	// Get the button that opens the modal
	var btn = document.getElementById("modalBtn");

	// Get the <span> element that closes the modal
	//var span = document.getElementsByClassName("close")[0];

	// When the user clicks on the button, open the modal 
	btn.onclick = function() {
	    modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	//span.onclick = function() {
	//    modal.style.display = "none";
	//}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
    	if (event.target == modal) {
    	    modal.style.display = "none";
    	}
	}
	
});

function codeAddress() {
	// $("h1").animate({ 
 //        'opacity': '1'
 //    },2000, function() {
 //    	$(".hidden").animate({ 
 //        'opacity': '1'
 //    },2000);
 //    });
}
window.onload = codeAddress;