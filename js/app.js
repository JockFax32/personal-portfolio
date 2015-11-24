// Create app
var myApp = angular.module('myApp', ['ui.router'])
// Configure app
myApp.config(function($stateProvider){
    $stateProvider
        .state('home', {
            url:'/',
            templateUrl: 'templates/home.html',
            controller: 'HomeController',
        }).state('projects',{
            url:'/projects',
            templateUrl:'templates/projects.html',
            controller: 'ProjectController',
        }).state('about',{
            url:'/about',
            templateUrl:'templates/about.html',
            controller:'AboutController'
        }).state('resume',{
            url:'/resume',
            templateUrl:'templates/resume.html',
            controller:'ResumeController',
        }).state('contact',{
            url:'/contact',
            templateUrl:'templates/contact.html',
            controller:'ContactController'
        })
})
.controller('HomeController',function($scope, $http){
    $http.get('data/json/home.json').success(function(response){
        $scope.data = response;
    })
})
.controller('ProjectController', function($scope,$http, $location, $anchorScroll){
    $http.get('data/json/projects.json').success(function(response){
        $scope.data=response;
        $scope.scrollTo = function(id){
            $location.hash(id);
            $anchorScroll();
        }       
    })    
})
.controller('ResumeController', function($scope,$http){
    $http.get('data/json/resume.json').success(function(response){
        $scope.data=response;
    })
})

// https://shancarter.github.io/mr-data-converter/