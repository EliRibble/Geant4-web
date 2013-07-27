/**
 * @author Christian Lambert
 */
'use strict';

/* Controllers */

function InputCtrl($scope) {
	var numLayers = 1;
  $scope.layers = [
  	{"layerNum": "1"}
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
  	numLayers++;
  	layers.append({"layerNum" : toString(numLayers)});
  	return numLayers;
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