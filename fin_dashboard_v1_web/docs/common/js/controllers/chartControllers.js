angular.module('fin_dashboard_web').controller('lineChartController',
		lineChartController).controller('barChartController',
		barChartController).controller('doughnutChartController',
		doughnutChartController).controller('radarChartController',
		radarChartController).controller('pieChartController',
		pieChartController).controller('polarAreaChartController',
		polarAreaChartController).controller('horizontalBarChartController',
		horizontalBarChartController).controller('bubbleChartController',
		bubbleChartController).controller('dynamicChartController',
		dynamicChartController)

lineChartController.$inject = [ '$scope' ];

barChartController.$inject = [];

doughnutChartController.$inject = [];

radarChartController.$inject = [];

pieChartController.$inject = [];

polarAreaChartController.$inject = [];

horizontalBarChartController.$inject = [];

bubbleChartController.$inject = [];

dynamicChartController.$inject = [];

function lineChartController($scope) {
	var vm = this;

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

function barChartController() {
	var vm = this;

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

function doughnutChartController() {
}

function radarChartController() {
}

function pieChartController() {
}

function polarAreaChartController() {
}

function horizontalBarChartController() {
}

function bubbleChartController() {
}

function dynamicChartController() {
}