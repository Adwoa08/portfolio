var app = angular.module("myPortfolio", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "components/home/home.html",
            controller: "homeCtrl"
        })
        .when("/about", {
            templateUrl: "components/about/about.html",
            controller: "aboutCtrl"
        })
        .when("/portfolio", {
            templateUrl: "components/portfolio/portfolio.html",
            controller: "portfolioCtrl"
        })
        .otherwise({
            redirectTo: "/"
        })
}]);

