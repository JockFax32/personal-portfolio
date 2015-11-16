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
            url:'/content',
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

// 
.controller('HomeController',function($scope){
    
})

// 
.controller('AboutController', function($scope){
    
})


.controller('ContentController', function($scope){
    
})

