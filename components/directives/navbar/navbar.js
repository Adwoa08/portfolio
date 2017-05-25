var app = angular.module("myPortfolio");

app.directive("navbar", function () {
    return {
        templateUrl: "components/directives/navbar/navbar.html"
    }
    
    
    
    
});


window.addEventListener("scroll", Scroll);
    
    function Scroll(){
        var top = document.getElementById("header");
        var page = window.pageYOffset;
        if(page > 200){
            top.style.background = "#B0C9C3";
            top.style.opacity = "1";
        }else {
            top.style.background = "#B0C9C3";
            top.style.opacity = "1";
        }
    }
    


//    function toggleNavPanel(x) {
//        var panel = document.getElementById(x);
//        var navarrow = document.getElementById("navarrow");
//        var maxH = '100px';
//        if (panel.style.height === maxH) {
//            panel.style.height = "0px";
//        } else {
//            panel.style.height = maxH;
//        }
//
//    }
