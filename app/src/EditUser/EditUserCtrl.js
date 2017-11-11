'use strict';

userApp.controller('EditUserCtrl', function ($scope, UsersService) {
  $scope.currentUser = {};

  $scope.editUser = function (user) {
    // $scope.creationSuccess = false
		//
    // UsersService.createUser(myUser).then(function (response) {
    //   $scope.newUser = {}
		//
    //   $scope.newUserId = response.data.id
    //   $scope.creationSuccess = true
    // })
  }
});
