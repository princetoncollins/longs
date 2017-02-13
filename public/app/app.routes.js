angular.module('longs')
  .config(($stateProvider, $urlRouterProvider) => {

  	    $urlRouterProvider.otherwise('/');

  	    $stateProvider

  	    	.state('/', {
  	    		url: '/',
  	    		templateUrl: 'app/home/home.html',
  	    		controller: 'MainController'
  	    	})

  });