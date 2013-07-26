/**
 * @author Christian Lambert
 */

$(document).ready(function() {
	var numLayers = 3;
	if(numLayers > 3) {
		$('#remove').remove();
	} else if (numLayers >= 30) {
		$('#new layer').remove();
	}
	$('#new layer').onClick(function() {
		// add a new layer without reloading the site
	});
	$('#remove').onClick(function() {
		
	});
});
