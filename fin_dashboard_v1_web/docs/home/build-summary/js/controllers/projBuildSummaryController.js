angular.module('fin_dashboard_web').controller('projBuildSummaryController',
		projBuildSummaryController);

projBuildSummaryController.$inject = [ 'API_JENKINS', 'FIREBASE_CONFIG', 'BROADCAST_MESSAGES', 'HTTP_REQUEST_METHOD',
		'$firebaseObject', '$q', '$scope', 'httpService' ];

function projBuildSummaryController(API_JENKINS, FIREBASE_CONFIG, BROADCAST_MESSAGES, HTTP_REQUEST_METHOD,
		$firebaseObject, $q, $scope, httpService) {
	var vm = this;
	vm.isCurrentBuildSuccess = null;
	vm.isCollapse = false;
	vm.jenkinsJob = {};
	vm.jenkinsJobBuilds = {};
	vm.jenkinsJobPermalinks = {};
	vm.jenkinsJobTestReport_pieChartData = null;
	vm.jenkinsJobTestReport_pieChartLabels = null;
	vm.buildHistoryPaginateControl_boundaryLinks = true;
	vm.buildHistoryPaginateControl_directionLinks = true;
	vm.buildHistoryPaginateControl_maxSize = 5;
	vm.numItemsPerPage = 10;
	vm.bootstrapViewModel = bootstrapViewModel;
	vm.downloadConsoleOutput = downloadConsoleOutput;
	vm.downloadJenkinsJobBuildInfo = downloadJenkinsJobBuildInfo;
	vm.fetchFromFirebase = fetchFromFirebase;
	vm.toDatetime = toDatetime;

	vm.jenkinsJob = $scope.i;
	vm.panelHeadingId = 'div#' + vm.jenkinsJob.name + '_heading';
	vm.projBuildSummaryCollapseId = vm.jenkinsJob.name;
	vm.projBuildSummaryCollapseIdTarget = '#' + vm.jenkinsJob.name;

	function bootstrapViewModel() {
		var deferred = $q.defer();
		var httpUrl = API_JENKINS.base + '/job/' + vm.jenkinsJob.name + '/api/json';
		httpService.setHttpUrl(httpUrl);
		httpService.setHttpMethod(HTTP_REQUEST_METHOD.methodGet);
		httpService.doGETRequest(doGETSuccessCallback_jenkinsJobUrl.bind(deferred),
				doGETFailedCallback_jenkinsJobUrl.bind(deferred));

		$(vm.panelHeadingId).LoadingOverlay('show');

		return deferred.promise;
	}

	function downloadConsoleOutput(jenkinsJobBuild) {
		var console_output = jenkinsJobBuild.console_output;
		var elem = document.createElement('a');
		var filename = jenkinsJobBuild.number+'_consoleOutput.txt';

		elem.setAttribute('href', 'data:text/plain;charset=utf-8,'+encodeURIComponent(console_output));
		elem.setAttribute('download', filename);
		elem.style.display = 'none';

		document.body.appendChild(elem);
		elem.click();
		document.body.removeChild(elem);
	}

	function downloadJenkinsJobBuildInfo() {
		var httpUrl = [];
		angular.forEach(vm.jenkinsJobBuilds, function(jenkinsJobBuild) {
			httpUrl.push(jenkinsJobBuild.url + '/api/json');
		});
		httpService.setHttpUrl(httpUrl);
		httpService.setHttpMethod(HTTP_REQUEST_METHOD.methodGet);
		httpService.doGETAllRequest()
		.then(doGETSuccessCallback_jenkinsJobBuildUrl)
		.catch(doGETFailedCallback_jenkinsJobBuildUrl);

		$(vm.panelHeadingId).LoadingOverlay('show');
	}

	function fetchFromFirebase() {
		var firebaseReference = firebase.database().ref();
		var firebaseData = $firebaseObject(firebaseReference)
		.then(function(data) {
			console.log('projBuildSummaryController->fetchFromFirebase->success');
		})
		.catch(function(e) {
			console.log('projBuildSummaryController->fetchFromFirebase->fail');
		});
	}

	function toDatetime(timeInMilliseconds) {
		return new Date(timeInMilliseconds).toLocaleString();
	}

	function doGETSuccessCallback_jenkinsJobUrl(data) {
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

		if(!(data.data.lastSuccessfulBuild)) {
			data.data.lastSuccessfulBuild = {};
			data.data.lastSuccessfulBuild.number = -1;
		}
		if(!(data.data.lastCompletedBuild)) {
			data.data.lastCompletedBuild = {};
			data.data.lastCompletedBuild.number = -1;
		}
		if(!(data.data.lastStableBuild)) {
			data.data.lastStableBuild = {};
			data.data.lastStableBuild.number = -1;
		}

		if (data.data.lastSuccessfulBuild.number == data.data.lastCompletedBuild.number && data.data.lastSuccessfulBuild.number == data.data.lastStableBuild.number) {
			vm.isCurrentBuildSuccess = true;
		} else {
			vm.isCurrentBuildSuccess = false;
		}

		$(vm.panelHeadingId).LoadingOverlay('hide');

		this.resolve();
	}

	function doGETFailedCallback_jenkinsJobUrl(e) {
		$(vm.panelHeadingId).LoadingOverlay('hide');

		this.reject(e);
	}

	function doGETSuccessCallback_jenkinsJobBuildUrl(data) {
		appendJenkinsJobBuild(data);

		var httpUrl = [];
		angular.forEach(data, function(datum) {
			httpUrl.push(datum.data.url + '/consoleText');
		});
		httpService.setHttpUrl(httpUrl);
		httpService.setHttpMethod(HTTP_REQUEST_METHOD.methodGet);
		httpService.doGETAllRequest()
		.then(doGETSuccessCallback_jenkinsJobBuildConsoleOutputUrl)
		.catch(doGETFailedCallback_jenkinsJobBuildConsoleOutputUrl);
	}

	function doGETFailedCallback_jenkinsJobBuildUrl(e) {
		$(vm.panelHeadingId).LoadingOverlay('hide');
	}

	function doGETSuccessCallback_jenkinsJobBuildConsoleOutputUrl(data) {
		appendJenkinsJobBuildConsoleOutput(data);

		var httpUrl = [];
		angular.forEach(vm.jenkinsJobBuilds, function(jenkinsJobBuild) {
			httpUrl.push(jenkinsJobBuild.url + '/testReport/api/json');
		});
		httpService.setHttpUrl(httpUrl);
		httpService.setHttpMethod(HTTP_REQUEST_METHOD.methodGet);
		httpService.doGETAllRequest()
		.then(doGETSuccessCallback_jenkinsJobBuildTestReportUrl)
		.catch(doGETFailedCallback_jenkinsJobBuildTestReportUrl);
	}

	function doGETFailedCallback_jenkinsJobBuildConsoleOutputUrl(e) {
		$(vm.panelHeadingId).LoadingOverlay('hide');
	}

	function doGETSuccessCallback_jenkinsJobBuildTestReportUrl(data) {
		appendJenkinsJobBuildTestReport(data);
		generateChart();
		vm.fetchFromFirebase();

		$(vm.panelHeadingId).LoadingOverlay('hide');
	}

	function doGETFailedCallback_jenkinsJobBuildTestReportUrl() {
		$(vm.panelHeadingId).LoadingOverlay('hide');
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

				if(jenkinsJobBuild.number == datumConfigUrlSplit[idx_jobBuildNumber]) {
					jenkinsJobBuild.console_output = datum.data;
				}
			});
		});
	}

	function appendJenkinsJobBuildTestReport(data) {
		angular.forEach(vm.jenkinsJobBuilds, function(jenkinsJobBuild) {
			angular.forEach(data, function(datum) {
				var datumConfigUrl = datum.config.url;
				var datumConfigUrlSplit = datumConfigUrl.split('/');
				var idx_jobBuildNumber = datumConfigUrlSplit.length-5;

				if(jenkinsJobBuild.number == datumConfigUrlSplit[idx_jobBuildNumber]) {
					jenkinsJobBuild.test_report = datum.data;
					jenkinsJobBuild.results = datum.data.childReports[0].result;
				}
			});
		});
	}

	function generateChart() {
		var jenkinsJobBuildLatest = vm.jenkinsJobBuilds[0];
		var testCount = {
				pass: jenkinsJobBuildLatest.test_report.totalCount - jenkinsJobBuildLatest.test_report.failCount,
				fail: jenkinsJobBuildLatest.test_report.failCount,
				skip: jenkinsJobBuildLatest.test_report.skipCount
		};
		var testCountKeys = Object.keys(testCount);
		var testCountValues = Object.values(testCount);
		var jenkinsJobTestReport_pieChartLabels = [];
		var jenkinsJobTestReport_pieChartData = [];

		angular.forEach(testCountKeys, function(testCountKey) {
			jenkinsJobTestReport_pieChartLabels.push(testCountKey);
		});
		angular.forEach(testCountValues, function(testCountValue) {
			jenkinsJobTestReport_pieChartData.push(testCountValue);
		});

		vm.jenkinsJobTestReport_pieChartLabels = jenkinsJobTestReport_pieChartLabels;
		vm.jenkinsJobTestReport_pieChartData = jenkinsJobTestReport_pieChartData;
	}

	$scope.$on(BROADCAST_MESSAGES.doJenkinsBuild, function() {
		vm.bootstrapViewModel()
		.then(function() {
			downloadJenkinsJobBuildInfo();
		})
		.catch(function(e) {
			console.log('projBuildSummaryController->bootstrapViewModel->failed');
		});
	});

	vm.bootstrapViewModel()
	.then(function() {
		console.log('projBuildSummaryController->bootstrapViewModel->success');
	})
	.catch(function(e) {
		console.log('projBuildSummaryController->bootstrapViewModel->fail');
	});
}