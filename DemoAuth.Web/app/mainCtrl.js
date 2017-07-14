DemoAuthApp.controller("mainCtrl",
    function ($scope, userAccount, currentUser) {
        var onError = function (response) {
            $scope.message = response.statusText + "\r\n";
            if (response.data.modelState) {
                for (var key in response.data.modelState) {
                    $scope.message += response.data.modelState[key] + "\r\n";
                }
            }
            if (response.data.exceptionMessage) {
                $scope.message += response.data.exceptionMessage;
            }
        };

        $scope.isLoggedIn = function () {
            return currentUser.getProfile().isLoggedIn
        };
        $scope.message = "";
        $scope.userData = {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        };

        $scope.registerUser = function () {
            $scope.userData.confirmPassword = $scope.userData.password;

            userAccount.registerUser($scope.userData)
                .then(function (response) {
                    $scope.message = "...Registration successfull";
                    $scope.login();
                }, onError);
        };

        $scope.login = function () {
            $scope.userData.username = $scope.userData.email;

            userAccount.loginUser($scope.userData)
                .then(function (response) {
                    $scope.message = "";
                    currentUser.setProfile($scope.userData.username, response.data.access_token);
                }, onError);
        };
    });