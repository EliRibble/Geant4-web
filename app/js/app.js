'use strict';


// Declare app level module which depends on filters, and services
angular.module('remsim', ['remsim.filters', 'remsim.services', 'remsim.directives', 'remsim.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
