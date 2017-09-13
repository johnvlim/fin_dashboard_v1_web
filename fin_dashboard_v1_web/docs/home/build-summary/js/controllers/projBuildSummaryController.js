angular.module('fin_dashboard_web').controller('projBuildSummaryController',
		projBuildSummaryController);

projBuildSummaryController.$inject = [ 'API_JENKINS', 'HTTP_REQUEST_METHOD', 'BROADCAST_MESSAGES', 
		'$scope', 'httpService' ];

function projBuildSummaryController(API_JENKINS, HTTP_REQUEST_METHOD, BROADCAST_MESSAGES, $scope,
		httpService) {
	const
	DOM_PROJ_BUILD_SUMMARY_ROOT_CONTAINER_ID = 'div#projBuildSummaryRootContainer';

	var vm = this;
	vm.jenkinsJob = {};
	vm.jenkinsJobBuilds = {};
	vm.jenkinsJobPermalinks = {};
	vm.bootstrapViewModel = bootstrapViewModel;
	vm.isCurrentBuildSuccess = null;

	function bootstrapViewModel() {
		var httpUrl = API_JENKINS.base + '/job/' + $scope.i.name + '/api/json'
		httpService.setHttpUrl(httpUrl);
		httpService.setHttpMethod(HTTP_REQUEST_METHOD.methodGet);
		httpService.doGETRequest(doGETSuccessCallback_jenkinsJobUrl,
				doGETFailedCallback_jenkinsJobUrl);

		$(DOM_PROJ_BUILD_SUMMARY_ROOT_CONTAINER_ID).LoadingOverlay('show');
	}

	function doGETSuccessCallback_jenkinsJobUrl(data) {
		vm.jenkinsJob = $scope.i;
		vm.jenkinsJobBuilds = data.data.builds;
		vm.jenkinsJobPermalinks = {
			'[Build] -- "last"' : data.data.lastBuild,
			'[Build] -- "last_completed"' : data.data.lastCompletedBuild,
			'[Build] -- "last_failed"' : data.data.lastFailedBuild,
			'[Build] -- "last_stable"' : data.data.lastStableBuild,
			'[Build] -- "last_successful"' : data.data.lastSuccessfulBuild,
			'[Build] -- "last_unstable"' : data.data.lastUnstableBuild,
			'[Build] -- "last_unsuccessful"' : data.data.lastUnsuccessfulBuild
		};

		if (data.data.lastSuccessfulBuild.number == data.data.lastCompletedBuild.number) {
			vm.isCurrentBuildSuccess = true;
		} else {
			vm.isCurrentBuildSuccess = false;
		}

		var httpUrl = [];
		angular.forEach(vm.jenkinsJobBuilds, function(jenkinsJobBuild) {
			httpUrl.push(jenkinsJobBuild.url + '/api/json');
		});
		httpService.setHttpUrl(httpUrl);
		httpService.doGETAllRequest()
		.then(doGETSuccessCallback_jenkinsJobBuildUrl)
		.catch(doGETFailedCallback_jenkinsJobBuildUrl);
	}

	function doGETFailedCallback_jenkinsJobUrl(e) {
		$(DOM_PROJ_BUILD_SUMMARY_ROOT_CONTAINER_ID).LoadingOverlay('hide');
	}

	function doGETSuccessCallback_jenkinsJobBuildUrl(data) {
		appendJenkinsJobBuild(data);

		var httpUrl = [];
		angular.forEach(data, function(datum) {
			httpUrl.push(datum.data.url + '/consoleText');
		});
		httpService.setHttpUrl(httpUrl);
		httpService.doGETAllRequest()
		.then(doGETSuccessCallback_jenkinsJobBuildConsoleOutputUrl)
		.catch(doGETFailedCallback_jenkinsJobBuildConsoleOutputUrl);
	}

	function doGETFailedCallback_jenkinsJobBuildUrl(e) {
		$(DOM_PROJ_BUILD_SUMMARY_ROOT_CONTAINER_ID).LoadingOverlay('hide');
	}

	function doGETSuccessCallback_jenkinsJobBuildConsoleOutputUrl(data) {
		appendJenkinsJobBuildConsoleOutput(data);

		$(DOM_PROJ_BUILD_SUMMARY_ROOT_CONTAINER_ID).LoadingOverlay('hide');
	}

	function doGETFailedCallback_jenkinsJobBuildConsoleOutputUrl(e) {
		$(DOM_PROJ_BUILD_SUMMARY_ROOT_CONTAINER_ID).LoadingOverlay('hide');
	}

	function appendJenkinsJobBuild(data) {
		angular.forEach(vm.jenkinsJobBuilds, function(jenkinsJobBuild) {
			angular.forEach(data, function(datum) {
				if(jenkinsJobBuild.number == datum.data.number) {
					jenkinsJobBuild.build = datum.data;
				}
			});
		});
	}

	function appendJenkinsJobBuildConsoleOutput(data) {
		angular.forEach(vm.jenkinsJobBuilds, function(jenkinsJobBuild) {
			angular.forEach(data, function(datum) {
				var datumConfigUrl = datum.config.url;
				var datumConfigUrlSplit = datumConfigUrl.split('/');
				var idx_jobBuildNumber = datumConfigUrlSplit.length-3;

				if(jenkinsJobBuild.number == datumConfigUrlSplit[idx_jobBuildNumber]){
					jenkinsJobBuild.console_output = datum;
				}
			});
		});
	}

	$scope.$on(BROADCAST_MESSAGES.doJenkinsBuild, function() {
		alert('received broadcasted messages');
	});

	vm.bootstrapViewModel();
}