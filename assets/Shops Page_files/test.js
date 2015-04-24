var app = angular.module('myApp', ['ui.router']);


//------- CONFIG FOR STATES -------
app.config(function($stateProvider){
	$stateProvider.state('index', {
		url: '',
		controller: 'TestCtrl',
		templateUrl:'base.html'
	})
	.state('park', {
		url: '/park',
		templateUrl: 'basePark.html', 
		controller: 'ParkCtrl'
	})
	.state('park.description', {
		url: '',
		views: {
			"description": {
				templateUrl: '../templates/shopDesc.html'
			}
		}
	})
	.state('shop', {
		url: '/shop',
		templateUrl: 'baseShop.html', 
		controller: 'ShopCtrl'
	})
	.state('shop.desc', {
		url: '',
		views: {
			"description": {
				templateUrl: '../templates/shopDesc.html'
			}
		}
	})
	.state('shop.info', {
		url: '',
		views: {
			"info": {
				templateUrl: '../templates/shopQuickInfo.html'
			}
		}
	})
	.state('search', {
		url: '/search',
		templateUrl:'baseSearch.html'
	});
});
//------- ALL THE DIRECTIVES -------

app.directive('navigation', function(){
	return{
		// restrict so directive can be used as an element or an attr. E does not work in IE 8, but neither does angular
		restrict: 'AE', 
		//what is the directive content
		templateUrl: '../templates/nav.html'
	};
});

app.directive('social', function(){
	return{
		restrict: 'AE',
		templateUrl:'../templates/social.html'
	};
});

app.directive('shopQuickInfo', function(){
	return{
		restrict: 'AE',
		templateUrl:'../templates/shopQuickInfo.html'
	};
});

app.directive('shopDesc', function(){
	return{
		restrict: 'AE',
		templateUrl:'../templates/shopDesc.html'
	};
});

app.directive('shopProvisions', function(){
	return{
		restrict: 'AE',
		templateUrl:'../templates/shopProvisions.html'
	};
});

app.directive('reviews', function(){
	return{
		restrict: 'AE',
		templateUrl:'../templates/reviews.html'
	};
});

// MUSIC MAKES YOU LOSE CONTROLLERS --
app.controller('TestCtrl', function($scope, myfactory, $q){
	myfactory.getArt().then(function(data){
		$scope.myfactory = data.artObjects;
		console.log($scope.myfactory);
	});
});

app.controller('mainCtrl', function($scope){
	$scope.stuffs = ['an', 'array', 'of', 'stuff'];
});

app.controller('ParkCtrl', function($scope, $stateParams, $state){
	$state.go('park.description');
});

app.controller('ShopCtrl', function($scope, $stateParams, $state){
	$state.go('shop.desc')
	$state.go('shop.info')
})

//------- THAT FACTORY THOUGH -------
app.factory('myfactory', function($http, $q){
	var apiKey = 'eO58IERD';
	var apiUrl = 'https://www.rijksmuseum.nl/api/en/collection/';
	var key = '?key=' + apiKey;

	return{
		getArt: function(){
			var def = $q.defer();

			$http.get(apiUrl + key)
				.success(def.resolve)
				.error(def.reject);

			return def.promise;
		}
	};
});
