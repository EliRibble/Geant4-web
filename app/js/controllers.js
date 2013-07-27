/**
 * @author Christian Lambert
 */
'use strict';

/* Controllers */

function InputCtrl($scope) {
	$scope.layers = [
  	1
  ];	
  $scope.materials = [
    {"name": " None",
    "value": "none"
     },
    {"name": "Aluminum",
    "value": "Aluminium"
     },
    {"name": "Lead",
    "value": "matPb"
     },
    {"name": "Water",
    "value": "matH2O"
     },
    {"name": "Kevlar",
    "value": "kevlar"
     }
    
  ];
  $scope.addLayer = function() {
  	var numLayers = this.layers.length
  	numLayers += 1;
  	this.layers.push(numLayers);
  	)
  }

  $scope.orderProp = 'name';
}
/*  function LayerCtrl($scope) {
	$scope.layer = 3;
	$scope.numLayers = [1,2,3];
	
	if ($('#new layer').onClick() == true && layer <= 29) {
		layer++;
		if (layer > numLayers.length()) {
			numLayers.push(layer);
			
		}
	}
}
*/