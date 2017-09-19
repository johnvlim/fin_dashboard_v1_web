angular
		.module('fin_dashboard_web')
		.constant('DIRECTIVE_RESTRICTIONS', {
			res_attribute : 'A',
			res_class : 'C',
			res_element : 'E'
		})

		.constant('WS_CONFIG', {
			host : 'localhost',
			port : '8081'
		})

		.constant('API_JENKINS', {
			base : 'http://man-d1q7zw02:8080/jenkins'
		})

		.constant('HTTP_REQUEST_METHOD', {
			methodGet : 'GET',
			methodPost : 'POST',
			methodPut : 'PUT',
			methodDelete : 'DELETE'
		})

		.constant(
				'HTTP_REQUEST_HEADER',
				{
					Authorization : 'Basic YWRtaW46OWRiYjhmMTE0YWVjNDMzNDkyMmQzYmFkNzdhZjhiMjQ='
				})

		.constant('BROADCAST_MESSAGES', {
			doJenkinsBuild : 'doJenkinsBuild'
		});