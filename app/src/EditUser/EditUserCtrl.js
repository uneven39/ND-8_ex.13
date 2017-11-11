'use strict';

userApp.controller('EditUserCtrl', function ($scope, $routeParams, UsersService) {
  $scope.currentUser = {};
  $scope.currentUserId = $routeParams['userId'];
	$scope.userLoaded = false;

	UsersService.getUser($scope.currentUserId).then(function (response) {
		$scope.currentUser = response.data;
		$scope.userLoaded = true;
	});

  $scope.updateUser = function (currentUser) {
    $scope.updateSuccess = false;

    UsersService.updateUser($scope.currentUserId, currentUser).then(function (response) {
      $scope.currentUser = response.data;
      $scope.updateSuccess = true;
    })
  }
});
