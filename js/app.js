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

.controller('HomeController',function()){
    $http.get('data/json/home.json').success(function(response){

    })    
}

.controller('ProjectController', function($scope){
    
})


.controller('AboutController', function($scope){
    
})

.controller('ResumeController', function($scope){
    
})
.controller('ContactController', function($scope){
    
})
