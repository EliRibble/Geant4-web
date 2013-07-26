/**
 * @author Christian Lambert
 */
'use strict';

/* Controllers */

function MaterialCtrl($scope) {
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
     },
    
  ];

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