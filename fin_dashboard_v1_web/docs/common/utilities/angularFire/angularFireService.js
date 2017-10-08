angular.module('fin_dashboard_web').factory('angularFireService',
		angularFireService);

angularFireService.$inject = [ '$firebaseAuth' ];

function angularFireService($firebaseAuth) {
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
	}

	function authenticateUser() {
	}

	return angularFireServiceObj;
}