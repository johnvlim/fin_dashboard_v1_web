angular.module(
		'fin_dashboard_web',
		[ 'angularResizable', 'angularUtils.directives.dirPagination',
				'chart.js', 'firebase', 'ngWebSocket', 'ui.bootstrap',
				'ui.router' ]).config(doFirebaseConfig).config(doRouteConfig)
		.run(doFirebaseSignIn).run(doRunConfig);

function doFirebaseConfig(FIREBASE_CONFIG) {
	var firebaseConfig = {
		apiKey : FIREBASE_CONFIG.apiKey,
		authDomain : FIREBASE_CONFIG.authDomain,
		databaseURL : FIREBASE_CONFIG.databaseURL,
		storageBucket : FIREBASE_CONFIG.storageBucket,
		messagingSenderId : FIREBASE_CONFIG.messagingSenderId
	}
	firebase.initializeApp(firebaseConfig);
}

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

function doFirebaseSignIn(angularFireService) {
	angularFireService.setUser('johnvictor.lim@misys.com');
	angularFireService.setPassword('johnvictor.lim');
	angularFireService.authenticateUser()
	.then(doFirebaseJobSuccessCallback_authenticateUser)
	.catch(doFirebaseJobFailedCallback_authenticateUser);
}

function doRunConfig(BROADCAST_MESSAGES, $rootScope, webSocketService) {
	webSocketService.confWebSocket(onMessageCallback);

	function onMessageCallback() {
		$rootScope.$broadcast(BROADCAST_MESSAGES.doJenkinsBuild);
	}
}

function doFirebaseJobSuccessCallback_authenticateUser(user) {
	console.log('app->doFirebaseJobSuccessCallback_authenticateUser->success');
}

function doFirebaseJobFailedCallback_authenticateUser(e) {
	console.log('app->doFirebaseJobSuccessCallback_authenticateUser->fail');

	angularFireService.registerUser()
	.then(doFirebaseJobSuccessCallback_registerUser)
	.catch(doFirebaseJobFailedCallback_registerUser);
}

function doFirebaseJobSuccessCallback_registerUser(user) {
	console.log('app->doFirebaseJobSuccessCallback_registerUser->success');
}

function doFirebaseJobFailedCallback_registerUser(e) {
	console.log('app->doFirebaseJobSuccessCallback_registerUser->fail');
}