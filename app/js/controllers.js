/**
 * @author Christian Lambert
 */
'use strict';

/* Controllers */

function MaterialCtrl($scope) {
  $scope.materials = [
    {"name": "None",
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
