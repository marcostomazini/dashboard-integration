'use strict';

angular.module('sonar').run(['Menus',
	function(Menus) {
        Menus.addMenuItem('sidebar', 'Sonar', 'sonar', null, '/sonar', true, null, 2, 'icon-graph');
	}
]);