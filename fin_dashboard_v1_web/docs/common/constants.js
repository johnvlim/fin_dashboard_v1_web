angular.module('fin_dashboard_web').constant('API_JENKINS', {
	base : 'http://localhost:8081/jenkins'
})

.constant('BROADCAST_MESSAGES', {
	doJenkinsBuild : 'doJenkinsBuild'
})

.constant('DIRECTIVE_RESTRICTIONS', {
	res_attribute : 'A',
	res_class : 'C',
	res_element : 'E'
})

.constant('FIREBASE_CONFIG', {
	apiKey : 'AIzaSyDNKTU9VZ5oq5VkYfahPiAv_0sD0vOq0xU',
	authDomain : 'fin-dashboard-web.firebaseapp.com',
	databaseURL : 'https://fin-dashboard-web.firebaseio.com',
	projectId : 'fin-dashboard-web',
	storageBucket : 'fin-dashboard-web.appspot.com',
	messagingSenderId : '346797039064'
})

.constant('HTTP_REQUEST_HEADER', {
	Authorization : 'Basic NWRjNjA3YmU0ZTg2NGEyODk2NWUyNmQyOGNjOWY1MDk='
})

.constant('HTTP_REQUEST_METHOD', {
	methodGet : 'GET',
	methodPost : 'POST',
	methodPut : 'PUT',
	methodDelete : 'DELETE'
})

.constant('WS_CONFIG', {
	host : 'localhost',
	port : '8083'
});