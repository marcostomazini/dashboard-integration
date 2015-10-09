'use strict';

// Setting up route
angular.module('sonar').config(['$stateProvider',
	function($stateProvider) {
		$stateProvider.
		state('app.sonar', {
			url: '/sonar',
			title: 'Sonar',
			templateUrl: 'modules/sonar/views/sonar.client.view.html'
		});
	}
]);