'use strict';

// Configuring the Articles module
angular.module('builds').run(['Menus',
	function(Menus) {
        Menus.addMenuItem('sidebar', 'Builds', 'builds', null, '/builds', true, null, 1, 'icon-settings');
	}
]);