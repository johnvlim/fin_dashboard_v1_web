angular.module('fin_dashboard_web').controller('barChartController',
		barChartController).controller('bubbleChartController',
		bubbleChartController).controller('doughnutChartController',
		doughnutChartController).controller('horizontalBarChartController',
		horizontalBarChartController).controller('lineChartController',
		lineChartController).controller('pieChartController',
		pieChartController).controller('polarAreaChartController',
		polarAreaChartController).controller('radarChartController',
		radarChartController);

barChartController.$inject = [ '$scope' ];

bubbleChartController.$inject = [ '$scope' ];

doughnutChartController.$inject = [ '$scope' ];

horizontalBarChartController.$inject = [ '$scope' ];

lineChartController.$inject = [ '$scope' ];

pieChartController.$inject = [ '$scope' ];

polarAreaChartController.$inject = [ '$scope' ];

radarChartController.$inject = [ '$scope' ];

function barChartController($scope) {
	var vm = this;
	vm.resizableDimensions = {
		height : 300,
		width : 300
	};
	vm.bootstrapChart = bootstrapChart;

	function bootstrapChart() {
	}
}

function bubbleChartController($scope) {
	var vm = this;
	vm.resizableDimensions = {
		height : 300,
		width : 300
	};
	vm.bootstrapChart = bootstrapChart;

	function bootstrapChart() {
	}
}

function doughnutChartController($scope) {
	var vm = this;
	if (!(null == $scope.$parent.projBuildSummaryController)) {
		vm.chartColors = [ '#3232ff', 'ff3232', '#32ff32' ];
		vm.chartData = $scope.projBuildSummaryController.jenkinsJobTestReport_pieChartData;
		vm.chartLabels = $scope.projBuildSummaryController.jenkinsJobTestReport_pieChartLabels;
	}
	vm.chartOptions = {
		maintainAspectRatio : true,
		responsive : true
	}
	vm.resizableDimensions = {
		height : 300,
		width : 300
	};
	vm.bootstrapChart = bootstrapChart;

	function bootstrapChart() {
	}
}

function horizontalBarChartController($scope) {
	var vm = this;
	vm.resizableDimensions = {
		height : 300,
		width : 300
	};
	vm.bootstrapChart = bootstrapChart;

	function bootstrapChart() {
	}
}

function lineChartController($scope) {
	var vm = this;
	vm.resizableDimensions = {
		height : 300,
		width : 300
	};
	vm.bootstrapChart = bootstrapChart;

	function bootstrapChart() {
	}
}

function pieChartController($scope) {
	var vm = this;
	if (!(null == $scope.$parent.projBuildSummaryController)) {
		vm.chartColors = [ '#3232ff', 'ff3232', '#32ff32' ];
		vm.chartData = $scope.projBuildSummaryController.jenkinsJobTestReport_pieChartData;
		vm.chartLabels = $scope.projBuildSummaryController.jenkinsJobTestReport_pieChartLabels;
	}
	vm.chartOptions = {
		maintainAspectRatio : true,
		responsive : true
	}
	vm.resizableDimensions = {
		height : 300,
		width : 300
	};
	vm.bootstrapChart = bootstrapChart;

	function bootstrapChart() {
	}
}

function polarAreaChartController($scope) {
	var vm = this;
	vm.resizableDimensions = {
		height : 300,
		width : 300
	};
	vm.bootstrapChart = bootstrapChart;

	function bootstrapChart() {
	}
}

function radarChartController($scope) {
	var vm = this;
	vm.resizableDimensions = {
		height : 300,
		width : 300
	};
	vm.bootstrapChart = bootstrapChart;

	function bootstrapChart() {
	}
}