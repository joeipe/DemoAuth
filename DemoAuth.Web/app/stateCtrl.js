DemoAuthApp.controller("stateCtrl",
    function ($scope, $http, currentUser) {
        $scope.message = "States"

        //$http.get("api/States")
        //    .then(function (resp) {
        //        $scope.states = resp.data;
        //    });

        $http({
            method: 'GET',
            url: 'api/States',
            headers: {
                'Authorization': 'Bearer ' + currentUser.getProfile().token
            },
        }).then(function (resp) {
            $scope.states = resp.data;
        });
    });