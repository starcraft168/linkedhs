(function() {
	'use strict';

	angular
		.module('app')
		.controller('profileController', profileController);

	profileController.$inject = ['$scope','profileService'];

	function profileController($scope, profileService) {
		$scope.show = show;
		$scope.showProfile = showProfile;




		function show() {
			return 'hello';
		}

		function showProfile() {

		}

	}


})();