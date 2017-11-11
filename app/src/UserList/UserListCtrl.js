'use strict';

userApp.controller('UserListCtrl', function ($scope, $q, UsersService, PostsService) {
  // UsersService.getUsers().then(function (response) {
  //   $scope.users = response.data
  // });
	//
  // PostsService.getPosts().then(function (response) {
  //   $scope.posts = response.data
  // });

  // Дополнительное задание
  $q.all({
    users: UsersService.getUsers(),
    posts: PostsService.getPosts()
  }).then(function(responses) {
		$scope.users = responses.users.data;
		$scope.posts = responses.posts.data;
  })

});
