(function() {
    'use strict';

    angular.module('scrumboard', ['ngRoute'])
        .controller('ScrumboardController', ['$scope', '$http', '$location', 'Login', ScrumboardController]);

    function ScrumboardController($scope, $http, $location, Login) {
        
        Login.redirectIfNotLoggedIn();

        $scope.add = function(list, title) {
            var card = {
                list : list.id,
                title : title
            };

            $http.post('scrumboard/cards/', card)
                .then(function(response) {
                    list.cards.push(response.data);                
                }, function() {
                    alert('Could not create card');
                });
        }

        $scope.data = [];
        $http.get('/scrumboard/lists/')
            .then(function(response) {
                $scope.data = response.data;
            });

        $scope.logout = function() {
            Login.logout();
        }

        $scope.sortBy = 'story_points';
        $scope.reverse = true;
        $scope.showFilters = false;
    }

})();