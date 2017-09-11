angular.module('fin_dashboard_web').controller('buildSummaryController',
		buildSummaryController);

buildSummaryController.$inject = [ 'API_JENKINS', 'HTTP_REQUEST_METHOD',
		'httpService' ];

function buildSummaryController(API_JENKINS, HTTP_REQUEST_METHOD, httpService) {
	const
	DOM_BUILD_SUMMARY_ROOT_CONTAINER_ID = 'div#buildSummaryRootContainer';

	var vm = this;
	vm.jenkinsBaseUrlData = {};
	vm.bootstrapViewModel = bootstrapViewModel;

	function bootstrapViewModel() {
		httpService.setHttpUrl(API_JENKINS.base);
		httpService.setHttpMethod(HTTP_REQUEST_METHOD.methodGet);
		httpService.doGETRequest(doGETSuccessCallback_jenkinsBaseUrl,
				doGETFailedCallback_jenkinsBaseUrl);

		$(DOM_BUILD_SUMMARY_ROOT_CONTAINER_ID).LoadingOverlay('show');
	}

	function doGETSuccessCallback_jenkinsBaseUrl(data) {
		$(DOM_BUILD_SUMMARY_ROOT_CONTAINER_ID).LoadingOverlay('hide');

		vm.jenkinsBaseUrlData = data;
	}

	function doGETFailedCallback_jenkinsBaseUrl(e) {
		$(DOM_BUILD_SUMMARY_ROOT_CONTAINER_ID).LoadingOverlay('hide');
	}

	vm.bootstrapViewModel();
}