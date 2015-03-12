(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var myApp = angular.module('myApp', ['ui.router', 'angular-parallax']);

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

	// For any unmatched url, redirect to...
	$urlRouterProvider.otherwise('/bio');

	// States
	$stateProvider
    .state('bio', {
		url: '/bio',
		controller: 'BioCtrl',
		templateUrl: 'views/bio.html'
	})
    .state('paper1', {
		url: '/paper1',
		controller: 'PaperCtrl',
		templateUrl: 'views/paper1.html'
	})
    .state('drafts', {
		url: '/draft/:whichdraft',
		controller: 'DraftCtrl',
		templateUrl: 'views/paper1.html'
	})	
 //    .state('paper1.drafts', {
	// 	url: '/drafts',
	// 	controller: 'DraftCtrl',
	// 	templateUrl: 'views/paper1.drafts.html'
	// });

}]);
console.log("Thanks for looking under the hood!  Please visit my GitHub page if you want to see more: https://github.com/warlyware");
myApp.controller('BioCtrl', ['$scope', '$rootScope', '$state', '$stateParams', function($scope, $rootScope, $state, $stateParams) {

}]);
myApp.controller('DraftCtrl', ['$scope', '$rootScope', '$state', '$stateParams', function($scope, $rootScope, $state, $stateParams) {
	$scope.chosenDraft = $stateParams.whichdraft;
	$scope.drafts = ["Draft 1", "Draft 2"];
	console.log(chosenDraft);
}]);
myApp.controller('PaperCtrl', ['$scope', '$rootScope', '$state', '$stateParams', function($scope, $rootScope, $state, $stateParams) {

}]);
myApp.controller('ParallaxCtrl', ['$scope', '$rootScope', '$state', '$stateParams', function($scope, $rootScope, $state, $stateParams) {

}]);
'use strict';

angular.module('angular-parallax', [
]).directive('parallax', ['$window', function($window) {
  return {
    restrict: 'A',
    scope: {
      parallaxRatio: '@',
      parallaxVerticalOffset: '@',
      parallaxHorizontalOffset: '@',
    },
    link: function($scope, elem, $attrs) {
      var setPosition = function () {
        // horizontal positioning
        elem.css('left', $scope.parallaxHorizontalOffset + "px");

        var calcValY = $window.pageYOffset * ($scope.parallaxRatio ? $scope.parallaxRatio : 1.1 );
        if (calcValY <= $window.innerHeight) {
          var topVal = (calcValY < $scope.parallaxVerticalOffset ? $scope.parallaxVerticalOffset : calcValY);
          elem.css('top', topVal + "px");
        }
      };

      setPosition();

      angular.element($window).bind("scroll", setPosition);
      angular.element($window).bind("touchmove", setPosition);
    }  // link function
  };
}]).directive('parallaxBackground', ['$window', function($window) {
  return {
    restrict: 'A',
    transclude: true,
    template: '<div ng-transclude></div>',
    scope: {
      parallaxRatio: '@',
    },
    link: function($scope, elem, attrs) {
      var setPosition = function () {
        var calcValY = (elem.prop('offsetTop') - $window.pageYOffset) * ($scope.parallaxRatio ? $scope.parallaxRatio : 1.1 );
        // horizontal positioning
        elem.css('background-position', "50% " + calcValY + "px");
      };

      // set our initial position - fixes webkit background render bug
      angular.element($window).bind('load', function(e) {
        setPosition();
        $scope.$apply();
      });

      angular.element($window).bind("scroll", setPosition);
      angular.element($window).bind("touchmove", setPosition);
    }  // link function
  };
}]);
},{}]},{},[1])