angular.module(
		'fin_dashboard_web',
		[ 'angularResizable', 'angularUtils.directives.dirPagination',
				'chart.js', 'ngWebSocket', 'ui.bootstrap', 'ui.router' ])
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
	}).state('settings', {
		url : '/settings',
		views : {
			'main' : {
				templateUrl : 'docs/settings/settings.html',
				controller : 'settingsController',
				controllerAs : 'settingsController'
			}
		}
	}).state('about', {
		url : '/about',
		views : {
			'main' : {
				templateUrl : 'docs/about/about.html'
			}
		}
	});

	$urlRouterProvider.otherwise('/home');
}

function doRunConfig(BROADCAST_MESSAGES, $rootScope, webSocketService) {
	webSocketService.confWebSocket(onMessageCallback);

	function onMessageCallback() {
		$rootScope.$broadcast(BROADCAST_MESSAGES.doJenkinsBuild);
	}
}
