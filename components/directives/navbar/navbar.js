var app = angular.module("myPortfolio");

app.directive("navbar", function () {
    return {
        templateUrl: "components/directives/navbar/navbar.html"
    }
});


 

    function toggleNavPanel(x) {
        var panel = document.getElementById(x);
        var navarrow = document.getElementById("navarrow");
        var maxH = '100px';
        if (panel.style.height === maxH) {
            panel.style.height = "0px";
        } else {
            panel.style.height = maxH;
        }

    }
