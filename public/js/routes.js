angular.module("routes",["ngRoute"])
    .config(["$routeProvider",function($routeProvider){
        $routeProvider.when("/",{
            templateUrl:"/tpl/index.html",
            controller:"index"
        })
    }])