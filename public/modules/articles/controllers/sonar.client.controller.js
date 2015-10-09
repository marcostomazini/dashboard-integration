'use strict';

angular.module('sonar').controller('SonarController', ['$scope', '$stateParams', '$location', 'Authentication', 'Sonar',
	function($scope, $stateParams, $location, Authentication, Sonar) {
		$scope.authentication = Authentication;
	}
]);