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
	$('#add').onClick(function() {
		numLayers++;
		$('table').append('<col /><td> Layer {{numLayers}} <label>Pick a material</label><select><option ng-repeat="material in materials | orderBy:orderProp" value="{{material.value}}">{{material.name}}</option></select></td><td>Thickness:<input type="text" ng-model="{number}" required ng-change="{}"/><select><option value="cm">cm</option><option value="km">km</option><option value="m">m</option><option value="mm">mm</option></select></td>');
		return numLayers;
		// add a new layer without reloading the site
	});
	$('#remove').onClick(function() {
		numLayers--;
		$('table')
	});
});
