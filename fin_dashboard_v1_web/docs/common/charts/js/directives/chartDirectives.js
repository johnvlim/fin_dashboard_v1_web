angular.module('fin_dashboard_web').directive('barChart', barChart).directive(
		'bubbleChart', bubbleChart).directive('doughnutChart', doughnutChart)
		.directive('horizontalBarChart', horizontalBarChart).directive(
				'lineChart', lineChart).directive('pieChart', pieChart)
		.directive('polarAreaChart', polarAreaChart).directive('radarChart',
				radarChart);

barChart.$inject = [ 'DIRECTIVE_RESTRICTIONS' ];

bubbleChart.$inject = [ 'DIRECTIVE_RESTRICTIONS' ];

doughnutChart.$inject = [ 'DIRECTIVE_RESTRICTIONS' ];

horizontalBarChart.$inject = [ 'DIRECTIVE_RESTRICTIONS' ];

lineChart.$inject = [ 'DIRECTIVE_RESTRICTIONS' ];

pieChart.$inject = [ 'DIRECTIVE_RESTRICTIONS' ];

polarAreaChart.$inject = [ 'DIRECTIVE_RESTRICTIONS' ];

radarChart.$inject = [ 'DIRECTIVE_RESTRICTIONS' ];

function barChart(DIRECTIVE_RESTRICTIONS) {
	var dirBarChart = {};

	dirBarChart.controller = barChartController;
	dirBarChart.controllerAs = 'barChartController';
	dirBarChart.link = function(scope, elem, attrs) {
	}
	dirBarChart.restrict = DIRECTIVE_RESTRICTIONS.res_element;
	dirBarChart.templateUrl = 'docs/common/charts/bar-chart.html';

	return dirBarChart;
}

function bubbleChart(DIRECTIVE_RESTRICTIONS) {
	var dirBubbleChart = {};

	dirBubbleChart.controller = bubbleChartController;
	dirBubbleChart.controllerAs = 'bubbleChartController';
	dirBubbleChart.link = function(scope, elem, attrs) {
	}
	dirBubbleChart.restrict = DIRECTIVE_RESTRICTIONS.res_element;
	dirBubbleChart.templateUrl = 'docs/common/charts/bubble-chart.html';

	return dirBubbleChart;
}

function doughnutChart(DIRECTIVE_RESTRICTIONS) {
	var dirDoughnutChart = {};

	dirDoughnutChart.controller = doughnutChartController;
	dirDoughnutChart.controllerAs = 'doughnutChartController';
	dirDoughnutChart.link = function(scope, elem, attrs) {
	}
	dirDoughnutChart.restrict = DIRECTIVE_RESTRICTIONS.res_element;
	dirDoughnutChart.templateUrl = 'docs/common/charts/doughnut-chart.html';

	return dirDoughnutChart;
}

function horizontalBarChart(DIRECTIVE_RESTRICTIONS) {
	var dirHorizontalBarChart = {};

	dirHorizontalBarChart.controller = horizontalBarChartController;
	dirHorizontalBarChart.controllerAs = 'horizontalBarChartController';
	dirHorizontalBarChart.link = function(scope, elem, attrs) {
	}
	dirHorizontalBarChart.restrict = DIRECTIVE_RESTRICTIONS.res_element;
	dirHorizontalBarChart.templateUrl = 'docs/common/charts/horizontal-bar-chart.html';

	return dirHorizontalBarChart;
}

function lineChart(DIRECTIVE_RESTRICTIONS) {
	var dirLineChart = {};

	dirLineChart.controller = lineChartController;
	dirLineChart.controllerAs = 'lineChartController';
	dirLineChart.link = function(scope, elem, attrs) {
	}
	dirLineChart.restrict = DIRECTIVE_RESTRICTIONS.res_element;
	dirLineChart.templateUrl = 'docs/common/charts/line-chart.html';

	return dirLineChart;
}

function pieChart(DIRECTIVE_RESTRICTIONS) {
	var dirPieChart = {};

	dirPieChart.controller = pieChartController;
	dirPieChart.controllerAs = 'pieChartController';
	dirPieChart.link = function(scope, elem, attrs) {
	}
	dirPieChart.restrict = DIRECTIVE_RESTRICTIONS.res_element;
	dirPieChart.templateUrl = 'docs/common/charts/pie-chart.html';

	return dirPieChart;
}

function polarAreaChart(DIRECTIVE_RESTRICTIONS) {
	var dirPolarAreaChart = {};

	dirPolarAreaChart.controller = polarAreaChartController;
	dirPolarAreaChart.controllerAs = 'polarAreaChartController';
	dirPolarAreaChart.link = function(scope, elem, attrs) {
	}
	dirPolarAreaChart.restrict = DIRECTIVE_RESTRICTIONS.res_element;
	dirPolarAreaChart.templateUrl = 'docs/common/charts/polar-area-chart.html';

	return dirPolarAreaChart;
}

function radarChart(DIRECTIVE_RESTRICTIONS) {
	var dirRadarChart = {};

	dirRadarChart.controller = radarChartController;
	dirRadarChart.controllerAs = 'radarChartController';
	dirRadarChart.link = function(scope, elem, attrs) {
	}
	dirRadarChart.restrict = DIRECTIVE_RESTRICTIONS.res_element;
	dirRadarChart.templateUrl = 'docs/common/charts/radar-chart.html';

	return dirRadarChart;
}