timeclock.controller('users', function users($scope, usersApi) {
    $scope.newUser = '';

    getUsers();
    $scope.mytime = new Date();
    function getUsers() {
        $scope.newUser = '';
        usersApi.get(1).then(function(response) {
            $scope.activeUsers = response.data;
           // console.log(response.data);
        }, function(err) {
            alert("something bad happened.");
        });
        usersApi.get(0).then(function(response) {
            $scope.inactiveUsers = response.data;
        });
    }

    $scope.addUser = function() {
        usersApi.add($scope.newUser).then(function () {
            getUsers();
        });
    };

    $scope.updateUser = function(user) {
        usersApi.update(user.id).then(function() {
            getUsers();
        });
    };

});