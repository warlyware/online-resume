//#############
//#  /app.js  #
//#############


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
    .state('paper2', {
		url: '/paper2',
		controller: 'PaperCtrl',
		templateUrl: 'views/paper2.html'
	})
    .state('paper3', {
		url: '/paper3',
		controller: 'PaperCtrl',
		templateUrl: 'views/paper3.html'
	});
 //    .state('drafts', {
	// 	url: '/draft/:whichdraft',
	// 	controller: 'DraftCtrl',
	// 	templateUrl: 'views/paper1.html'
	// })	
 //    .state('paper1.drafts', {
	// 	url: '/drafts',
	// 	controller: 'DraftCtrl',
	// 	templateUrl: 'views/paper1.drafts.html'
	// });

}]);