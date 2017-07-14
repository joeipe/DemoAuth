DemoAuthApp.factory("userAccount", function ($http) {
    var registerUser = function (userData) {
        return $http.post("/api/Account/Register", userData);
    };

    var loginUser = function (userData) {
        return $http({
            url: "/TOKEN",
            method: "POST",
            data: $.param({ grant_type: 'password', username: userData.username, password: userData.password }),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });
    };

    return {
        registerUser: registerUser,
        loginUser: loginUser
    };
});