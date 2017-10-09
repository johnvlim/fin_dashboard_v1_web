angular.module('fin_dashboard_web').factory('angularFireService',
		angularFireService);

angularFireService.$inject = [ 'FIREBASE_CONFIG', '$firebaseAuth', '$q' ];

function angularFireService(FIREBASE_CONFIG, $firebaseAuth, $q) {
	var angularFireServiceObj = {
		user : undefined,
		password : undefined,
		getUser : getUser,
		setUser : setUser,
		getPassword : getPassword,
		setPassword : setPassword,
		registerUser : registerUser,
		authenticateUser : authenticateUser
	}

	function getUser() {
		return angularFireServiceObj.user;
	}

	function getPassword() {
		return angularFireServiceObj.password;
	}

	function setUser(user) {
		angularFireServiceObj.user = user;
	}

	function setPassword(password) {
		angularFireServiceObj.password = password;
	}

	function registerUser() {
		var deferred = $q.defer();
		var firebaseRef = firebase.database().ref();
		var firebaseAuth = $firebaseAuth();

		firebaseAuth
				.$createUserWithEmailAndPassword(
						angularFireServiceObj.user,
						angularFireServiceObj.password,
						function(e, user) {
							if (!e) {
								console
										.log('angularFireService->registerUser->success');

								deferred.resolve(user);
							} else {
								console
										.log('angularFireService->registerUser->fail');

								deferred.reject(e);
							}
						});

		return deferred.promise;
	}

	function authenticateUser() {
		var deferred = $q.defer();
		var firebaseRef = firebase.database().ref();
		var firebaseAuth = $firebaseAuth();

		firebaseAuth.$signInWithEmailAndPassword(
				angularFireServiceObj.user,
				angularFireServiceObj.password
		)
		.then(function(user) {
			console.log('angularFireService->authenticateUser->success');

			deferred.resolve(user);
		})
		.catch(function(e) {
			console.log('angularFireService->authenticateUser->fail');

			deferred.reject(e);
		});

		return deferred.promise;
	}

	return angularFireServiceObj;
}