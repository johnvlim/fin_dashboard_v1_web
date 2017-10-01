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
	vm.bootstrapChart = bootstrapChart;
	vm.resizableDimensions = {
		height : 300,
		width : 300
	};

	function bootstrapChart() {
	}

	/*
	 * test (begin) src: http://jtblin.github.io/angular-chart.js/
	 */
	vm.chartData = [ [ 65, 59, 80, 81, 56, 55, 40 ],
			[ 28, 48, 40, 19, 86, 27, 90 ] ];
	vm.chartLabels = [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ];
	vm.chartSeries = [ 'Series A', 'Series B' ];
	/*
	 * test (end)
	 */
}

function bubbleChartController($scope) {
	var vm = this;
	vm.bootstrapChart = bootstrapChart;
	vm.resizableDimensions = {
		height : 300,
		width : 300
	};

	function bootstrapChart() {
	}

	/*
	 * test (begin) src: http://jtblin.github.io/angular-chart.js/
	 */
	vm.chartData = [ [ {
		x : 40,
		y : 10,
		r : 20
	} ], [ {
		x : 10,
		y : 40,
		r : 50
	} ] ];
	vm.chartSeries = [ 'Series A', 'Series B' ];
	/*
	 * test (end)
	 */
}

function doughnutChartController($scope) {
	var vm = this;
	vm.bootstrapChart = bootstrapChart;
	vm.resizableDimensions = {
		height : 300,
		width : 300
	};

	function bootstrapChart() {
	}

	/*
	 * test (begin) src: http://jtblin.github.io/angular-chart.js/
	 */
	vm.chartData = [ 300, 500, 100 ];
	vm.chartLabels = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
	/*
	 * test (end)
	 */
}

function horizontalBarChartController($scope) {
	var vm = this;
	vm.bootstrapChart = bootstrapChart;
	vm.resizableDimensions = {
		height : 300,
		width : 300
	};

	function bootstrapChart() {
	}

	/*
	 * test (begin) src: http://jtblin.github.io/angular-chart.js/
	 */
	vm.chartData = [ [ 65, 59, 80, 81, 56, 55, 40 ],
			[ 28, 48, 40, 19, 86, 27, 90 ] ];
	vm.chartLabels = [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ];
	vm.chartSeries = [ 'Series A', 'Series B' ];
	/*
	 * test (end)
	 */
}

function lineChartController($scope) {
	var vm = this;
	vm.bootstrapChart = bootstrapChart;
	vm.resizableDimensions = {
		height : 300,
		width : 300
	};

	function bootstrapChart() {
	}

	/*
	 * test (begin) src: http://jtblin.github.io/angular-chart.js/
	 */
	vm.chartData = [ [ 65, 59, 80, 81, 56, 55, 40 ],
			[ 28, 48, 40, 19, 86, 27, 90 ] ];
	vm.chartLabels = [ 'January', 'February', 'March', 'April', 'May', 'June',
			'July' ];
	vm.chartOptions = {
		scales : {
			yAxes : [ {
				id : 'y-axis-1',
				type : 'linear',
				display : true,
				position : 'left'
			}, {
				id : 'y-axis-2',
				type : 'linear',
				display : true,
				position : 'left'
			} ]
		}
	};
	/*
	 * test (end)
	 */
}

function pieChartController($scope) {
	var vm = this;
	vm.bootstrapChart = bootstrapChart;
	vm.resizableDimensions = {
		height : 300,
		width : 300
	};
	if (!(null == $scope.$parent.projBuildSummaryController)) {
		vm.chartData = $scope.projBuildSummaryController.jenkinsJobTestReport_pieChartData;
		vm.chartLabels = $scope.projBuildSummaryController.jenkinsJobTestReport_pieChartLabels;
	}

	function bootstrapChart() {
	}

	/*
	 * test (begin) src: http://jtblin.github.io/angular-chart.js/
	 */
	/*
	 * vm.chartData = [ 300, 500, 100 ]; vm.chartLabels = [ 'Download Sales',
	 * 'In-Store Sales', 'Mail-Order Sales' ];
	 */
	/*
	 * test (end)
	 */
}

function polarAreaChartController($scope) {
	var vm = this;
	vm.bootstrapChart = bootstrapChart;
	vm.resizableDimensions = {
		height : 300,
		width : 300
	};

	function bootstrapChart() {
	}

	/*
	 * test (begin) src: http://jtblin.github.io/angular-chart.js/
	 */
	vm.chartData = [ 300, 500, 100, 40, 120 ];
	vm.chartLabels = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales',
			'Tele Sales', 'Corporate Sales' ];
	/*
	 * test (end)
	 */
}

function radarChartController($scope) {
	var vm = this;
	vm.bootstrapChart = bootstrapChart;
	vm.resizableDimensions = {
		height : 300,
		width : 300
	};

	function bootstrapChart() {
	}

	/*
	 * test (begin) src: http://jtblin.github.io/angular-chart.js/
	 */
	vm.chartData = [ [ 65, 59, 90, 81, 56, 55, 40 ],
			[ 28, 48, 40, 19, 96, 27, 100 ] ];
	vm.chartLabels = [ 'Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding',
			'Cycling', 'Running' ];
	/*
	 * test (end)
	 */
}