angular.module(
		'fin_dashboard_web',
		[ 'ui.bootstrap', 'ui.router', 'chart.js', 'angularResizable',
				'ngWebSocket', 'angularUtils.directives.dirPagination' ])
		.config(doRouteConfig).run(doRunConfig);

function doRouteConfig($stateProvider, $urlRouterProvider) {
	$stateProvider.state('home', {
		url : '/home',
		views : {
			'main' : {
				templateUrl : 'docs/home/home.html',
				controller : 'homeController',
				controllerAs : 'homeController'
			},
			'build-summary@home' : {
				templateUrl : 'docs/home/build-summary/build-summary.html',
				controller : 'buildSummaryController',
				controllerAs : 'buildSummaryController'
			}
		}
	});

	$urlRouterProvider.otherwise('/home');
}

function doRunConfig(BROADCAST_MESSAGES, $rootScope, webSocketService) {
	webSocketService.confWebSocket(onMessageCallback);
}

function onMessageCallback(BROADCAST_MESSAGES, $rootScope) {
}
