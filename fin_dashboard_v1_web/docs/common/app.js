angular.module(
		'fin_dashboard_web',
		[ 'ui.bootstrap', 'ui.router', 'chart.js', 'angularResizable',
				'ngWebSocket' ]).config(doRouteConfig);

function doRouteConfig($stateProvider, $urlRouterProvider) {
	$stateProvider.state('home', {
		url : '/home',
		views : {
			'main' : {
				templateUrl : 'docs/home/home.html',
				controller : 'homeController',
				controllerAs : 'homeController'
			}
		}
	});

	$urlRouterProvider.otherwise('/home');
}