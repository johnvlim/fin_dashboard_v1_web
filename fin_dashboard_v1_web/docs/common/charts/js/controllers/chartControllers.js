angular.module('fin_dashboard_web').controller('barChartController',
		barChartController).controller('bubbleChartController',
		bubbleChartController).controller('doughnutChartController',
		doughnutChartController).controller('horizontalBarChartController',
		horizontalBarChartController).controller('lineChartController',
		lineChartController).controller('pieChartController',
		pieChartController).controller('polarAreaChartController',
		polarAreaChartController).controller('radarChartController',
		radarChartController);

barChartController.$inject = [];

bubbleChartController.$inject = [];

doughnutChartController.$inject = [];

horizontalBarChartController.$inject = [];

lineChartController.$inject = [ '$scope' ];

pieChartController.$inject = [];

polarAreaChartController.$inject = [];

radarChartController.$inject = [];

function barChartController() {
	var vm = this;

	vm.resizableDimensions = {
		height : 300,
		width : 300
	};

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

function bubbleChartController() {
	var vm = this;

	vm.resizableDimensions = {
		height : 300,
		width : 300
	};

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

function doughnutChartController() {
	var vm = this;

	vm.resizableDimensions = {
		height : 300,
		width : 300
	};

	/*
	 * test (begin) src: http://jtblin.github.io/angular-chart.js/
	 */
	vm.chartData = [ 300, 500, 100 ];
	vm.chartLabels = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
	/*
	 * test (end)
	 */
}

function horizontalBarChartController() {
	var vm = this;

	vm.resizableDimensions = {
		height : 300,
		width : 300
	};

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

	vm.resizableDimensions = {
		height : 300,
		width : 300
	};

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

function pieChartController() {
	var vm = this;

	vm.resizableDimensions = {
		height : 300,
		width : 300
	};

	/*
	 * test (begin) src: http://jtblin.github.io/angular-chart.js/
	 */
	vm.chartData = [ 300, 500, 100 ];
	vm.chartLabels = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
	/*
	 * test (end)
	 */
}

function polarAreaChartController() {
	var vm = this;

	vm.resizableDimensions = {
		height : 300,
		width : 300
	};

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

function radarChartController() {
	var vm = this;

	vm.resizableDimensions = {
		height : 300,
		width : 300
	};

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