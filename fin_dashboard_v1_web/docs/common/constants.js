angular
		.module('fin_dashboard_web')
		.constant('API_JENKINS', {
			base : 'http://localhost:8080/jenkins'
		})

		.constant('BROADCAST_MESSAGES', {
			doJenkinsBuild : 'doJenkinsBuild'
		})

		.constant('DIRECTIVE_RESTRICTIONS', {
			res_attribute : 'A',
			res_class : 'C',
			res_element : 'E'
		})

		.constant(
				'HTTP_REQUEST_HEADER',
				{
					Authorization : 'Basic YWRtaW46OWRiYjhmMTE0YWVjNDMzNDkyMmQzYmFkNzdhZjhiMjQ='
				})

		.constant('HTTP_REQUEST_METHOD', {
			methodGet : 'GET',
			methodPost : 'POST',
			methodPut : 'PUT',
			methodDelete : 'DELETE'
		})

		.constant('WS_CONFIG', {
			host : 'localhost',
			port : '8081'
		});