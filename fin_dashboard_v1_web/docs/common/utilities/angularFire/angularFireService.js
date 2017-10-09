angular.module('fin_dashboard_web').factory('angularFireService',
		angularFireService);

angularFireService.$inject = [ 'FIREBASE_CONFIG', '$firebaseAuth' ];

function angularFireService(FIREBASE_CONFIG, $firebaseAuth) {
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
							} else {
								console
										.log('angularFireService->registerUser->fail');
							}
						});
	}

	function authenticateUser() {
		var firebaseRef = new Firebase(FIREBASE_CONFIG.databaseURL);
		var firebaseAuth = $firebaseAuth(firebaseRef);

		firebaseAuth.$login('password', {
			email : angularFireServiceObj.user,
			password : angularFireServiceObj.password
		}).then(function(user) {
		})
		.catch(function(e) {
		});
	}

	return angularFireServiceObj;
}