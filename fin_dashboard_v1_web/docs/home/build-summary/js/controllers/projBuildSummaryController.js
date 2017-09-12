angular.module('fin_dashboard_web').controller('projBuildSummaryController',
		projBuildSummaryController);

projBuildSummaryController.$inject = [ 'API_JENKINS', 'HTTP_REQUEST_METHOD',
		'$scope', 'httpService' ];

function projBuildSummaryController(API_JENKINS, HTTP_REQUEST_METHOD, $scope,
		httpService) {
	const
	DOM_PROJ_BUILD_SUMMARY_ROOT_CONTAINER_ID = 'div#projBuildSummaryRootContainer';

	var vm = this;
	vm.jenkinsJob = {};
	vm.jenkinsJobBuilds = {};
	vm.jenkinsJobBuildsHistory = {};
	vm.bootstrapViewModel = bootstrapViewModel;
	vm.isCurrentBuildSuccess = null;

	function bootstrapViewModel() {
		var httpUrl = API_JENKINS.base + '/job/' + $scope.i.name + '/api/json'
		httpService.setHttpUrl(httpUrl);
		httpService.setHttpMethod(HTTP_REQUEST_METHOD.methodGet);
		httpService.doGETRequest(doGETSuccessCallback_jenkinsProjBuildsUrl,
				doGETFailedCallback_jenkinsProjBuildsUrl);

		$(DOM_PROJ_BUILD_SUMMARY_ROOT_CONTAINER_ID).LoadingOverlay('show');
	}

	function doGETSuccessCallback_jenkinsProjBuildsUrl(data) {
		$(DOM_PROJ_BUILD_SUMMARY_ROOT_CONTAINER_ID).LoadingOverlay('hide');

		vm.jenkinsJob = $scope.i;
		vm.jenkinsJobBuilds = data.data.builds;
		vm.jenkinsJobBuildsHistory = {
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
	}

	function doGETFailedCallback_jenkinsProjBuildsUrl(e) {
		$(DOM_PROJ_BUILD_SUMMARY_ROOT_CONTAINER_ID).LoadingOverlay('hide');
	}

	vm.bootstrapViewModel();
}