angular.module('fin_dashboard_web').directive('lineChart', lineChart)
		.directive('barChart', barChart).directive('doughnutChart',
				doughnutChart).directive('radarChart', radarChart).directive(
				'pieChart', pieChart).directive('polarAreaChart',
				polarAreaChart).directive('horizontalBarChart',
				horizontalBarChart).directive('bubbleChart', bubbleChart);

lineChart.$inject = [ 'DIRECTIVE_RESTRICTIONS' ];

barChart.$inject = [ 'DIRECTIVE_RESTRICTIONS' ];

doughnutChart.$inject = [ 'DIRECTIVE_RESTRICTIONS' ];

radarChart.$inject = [ 'DIRECTIVE_RESTRICTIONS' ];

pieChart.$inject = [ 'DIRECTIVE_RESTRICTIONS' ];

polarAreaChart.$inject = [ 'DIRECTIVE_RESTRICTIONS' ];

horizontalBarChart.$inject = [ 'DIRECTIVE_RESTRICTIONS' ];

bubbleChart.$inject = [ 'DIRECTIVE_RESTRICTIONS' ];

function lineChart(DIRECTIVE_RESTRICTIONS) {
	var dirLineChart = {};

	dirLineChart.restrict = DIRECTIVE_RESTRICTIONS.res_element;
	dirLineChart.templateUrl = 'docs/common/charts/line-chart.html';
	dirLineChart.controller = lineChartController;
	dirLineChart.controllerAs = 'lineChartController';

	return dirLineChart;
}

function barChart(DIRECTIVE_RESTRICTIONS) {
	var dirBarChart = {};

	dirBarChart.restrict = DIRECTIVE_RESTRICTIONS.res_element;
	dirBarChart.templateUrl = 'docs/common/charts/bar-chart.html';
	dirBarChart.controller = barChartController;
	dirBarChart.controllerAs = 'barChartController';

	return dirBarChart;
}

function doughnutChart(DIRECTIVE_RESTRICTIONS) {
	var dirDoughnutChart = {};

	dirDoughnutChart.restrict = DIRECTIVE_RESTRICTIONS.res_element;
	dirDoughnutChart.templateUrl = 'docs/common/charts/doughnut-chart.html';
	dirDoughnutChart.controller = doughnutChartController;
	dirDoughnutChart.controllerAs = 'doughnutChartController';

	return dirDoughnutChart;
}

function radarChart(DIRECTIVE_RESTRICTIONS) {
	var dirRadarChart = {};

	dirRadarChart.restrict = DIRECTIVE_RESTRICTIONS.res_element;
	dirRadarChart.templateUrl = 'docs/common/charts/radar-chart.html';
	dirRadarChart.controller = radarChartController;
	dirRadarChart.controllerAs = 'radarChartController';

	return dirRadarChart;
}

function pieChart(DIRECTIVE_RESTRICTIONS) {
	var dirPieChart = {};

	dirPieChart.restrict = DIRECTIVE_RESTRICTIONS.res_element;
	dirPieChart.templateUrl = 'docs/common/charts/pie-chart.html';
	dirPieChart.controller = pieChartController;
	dirPieChart.controllerAs = 'pieChartController';

	return dirPieChart;
}

function polarAreaChart(DIRECTIVE_RESTRICTIONS) {
	var dirPolarAreaChart = {};

	dirPolarAreaChart.restrict = DIRECTIVE_RESTRICTIONS.res_element;
	dirPolarAreaChart.templateUrl = 'docs/common/charts/polar-area-chart.html';
	dirPolarAreaChart.controller = polarAreaChartController;
	dirPolarAreaChart.controllerAs = 'polarAreaChartController';

	return dirPolarAreaChart;
}

function horizontalBarChart(DIRECTIVE_RESTRICTIONS) {
	var dirHorizontalBarChart = {};

	dirHorizontalBarChart.restrict = DIRECTIVE_RESTRICTIONS.res_element;
	dirHorizontalBarChart.templateUrl = 'docs/common/charts/horizontal-bar-chart.html';
	dirHorizontalBarChart.controller = horizontalBarChartController;
	dirHorizontalBarChart.controllerAs = 'horizontalBarChartController';

	return dirHorizontalBarChart;
}

function bubbleChart(DIRECTIVE_RESTRICTIONS) {
	var dirBubbleChart = {};

	dirBubbleChart.restrict = DIRECTIVE_RESTRICTIONS.res_element;
	dirBubbleChart.templateUrl = 'docs/common/charts/bubble-chart.html';
	dirBubbleChart.controller = bubbleChartController;
	dirBubbleChart.controllerAs = 'bubbleChartController';

	return dirBubbleChart;
}