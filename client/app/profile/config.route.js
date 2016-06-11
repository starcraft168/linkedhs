(function() {
	'use strict';

	angular
		.module('app')
		.config(configFunction)

	configFunction.$inject = ['$routeProvider'];

	function configFunction($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'app/profile/profile.html',
			controller: 'profileController',
		});
	}

})();