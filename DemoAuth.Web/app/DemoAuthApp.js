var DemoAuthApp = angular.module("DemoAuthApp", ["ngRoute"]);

DemoAuthApp.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "../app/home.html",
        })
        .when("/state", {
            templateUrl: "../app/state.html",
            controller: "stateCtrl"
        })
        .otherwise({ redirectTo: "/home" });
});