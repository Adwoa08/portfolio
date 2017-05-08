var app = angular.module("myPortfolio", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "components/home/home.html",
            controller: "homeCtrl"
        })
        .when("/projects", {
            templateUrl: "components/projects/projects.html",
            controller: "projectsCtrl"
        })
        .when("/skills", {
            templateUrl: "components/skills/skills.html",
            controller: "skillsCtrl"
        })
        .otherwise({
            redirectTo: "/home"
        })
}]);
