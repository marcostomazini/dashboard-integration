'use strict';

// Setting up route
angular.module('builds').config(['$stateProvider',
	function($stateProvider) {
		// Articles state routing
		$stateProvider.
		state('app.builds', {
			url: '/builds',
			title: 'List Builds',
			templateUrl: 'modules/builds/views/list-builds.client.view.html'
		});
	}
]);