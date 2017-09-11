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
		httpService.doGETRequest(doGETSuccessCallback_jenkinsProjBuildUrl,
				doGETFailedCallback_jenkinsProjBuildUrl);

		$(DOM_PROJ_BUILD_SUMMARY_ROOT_CONTAINER_ID).LoadingOverlay('show');
	}

	function doGETSuccessCallback_jenkinsProjBuildUrl(data) {
		$(DOM_PROJ_BUILD_SUMMARY_ROOT_CONTAINER_ID).LoadingOverlay('hide');

		vm.jenkinsJob = $scope.i;
		vm.jenkinsJobBuilds = data.data.builds;
		vm.jenkinsJobBuildsHistory = {
			lastBuild : data.data.lastBuild,
			lastCompletedBuild : data.data.lastCompletedBuild,
			lastFailedBuild : data.data.lastFailedBuild,
			lastStableBuild : data.data.lastStableBuild,
			lastSuccessfulBuild : data.data.lastSuccessfulBuild,
			lastUnstableBuild : data.data.lastUnstableBuild,
			lastUnsuccessfulBuild : data.data.lastUnsuccessfulBuild
		};
	}

	function doGETFailedCallback_jenkinsProjBuildUrl(e) {
		$(DOM_PROJ_BUILD_SUMMARY_ROOT_CONTAINER_ID).LoadingOverlay('hide');
	}

	vm.bootstrapViewModel();
}