angular.module('fin_dashboard_web',
		[ 'ui.bootstrap', 'ui.router', 'chart.js', 'angularResizable' ])
		.config(doRouteConfig);

function doRouteConfig($stateProvider, $urlRouterProvider) {
	$stateProvider.state('home', {
		url : '/home',
		views : {

		}
	});

	$urlRouterProvider.otherwise('/home');
}