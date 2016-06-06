(function() {
	'use strict';

	angular
		.module('app.profile')
		.controller('profileController', profileController);

	profileController.$inject = ['$scope','profileService'];

	function profileController(profileService) {
		$scope.show = show;
		$scope.showProfile = showProfile;

		function show() {
			return 'hello';
		}

		function showProfile() {

		}

	}


})();