angular.module('fin_dashboard_web').directive('lineChart', lineChart)
		.directive('barChart', barChart).directive('doughnutChart',
				doughnutChart).directive('radarChart', radarChart).directive(
				'pieChart', pieChart).directive('polarAreaChart',
				polarAreaChart).directive('horizontalBarChart',
				horizontalBarChart).directive('bubbleChart', bubbleChart)
		.directive('dynamicChart', dynamicChart);

lineChart.$inject = [ 'DIRECTIVE_RESTRICTIONS', 'VIEW_MODEL' ];

barChart.$inject = [ 'DIRECTIVE_RESTRICTIONS', 'VIEW_MODEL' ];

doughnutChart.$inject = [ 'DIRECTIVE_RESTRICTIONS', 'VIEW_MODEL' ];

radarChart.$inject = [ 'DIRECTIVE_RESTRICTIONS', 'VIEW_MODEL' ];

pieChart.$inject = [ 'DIRECTIVE_RESTRICTIONS', 'VIEW_MODEL' ];

polarAreaChart.$inject = [ 'DIRECTIVE_RESTRICTIONS', 'VIEW_MODEL' ];

horizontalBarChart.$inject = [ 'DIRECTIVE_RESTRICTIONS', 'VIEW_MODEL' ];

bubbleChart.$inject = [ 'DIRECTIVE_RESTRICTIONS', 'VIEW_MODEL' ];

dynamicChart.$inject = [ 'DIRECTIVE_RESTRICTIONS', 'VIEW_MODEL' ];

function lineChart(DIRECTIVE_RESTRICTIONS, VIEW_MODEL) {
	var dirLineChart = {};

	dirLineChart.restrict = DIRECTIVE_RESTRICTIONS.res_element;
	dirLineChart.templateUrl = 'docs/common/charts/line-chart.html';
	dirLineChart.controller = lineChartController;
	dirLineChart.controllerAs = 'lineChartController';

	return dirLineChart;
}

function barChart(DIRECTIVE_RESTRICTIONS, VIEW_MODEL) {
	var dirBarChart = {};

	dirBarChart.restrict = DIRECTIVE_RESTRICTIONS.res_element;
	dirBarChart.templateUrl = 'docs/common/charts/bar-chart.html';
	dirBarChart.controller = barChartController;
	dirBarChart.controllerAs = 'barChartController';

	return dirBarChart;
}

function doughnutChart(DIRECTIVE_RESTRICTIONS, VIEW_MODEL) {
	var dirDoughnutChart = {};

	dirDoughnutChart.restrict = DIRECTIVE_RESTRICTIONS.res_element;
	dirDoughnutChart.template = '<div>doughnut_chart_template_test</div>';
	dirDoughnutChart.controller = doughnutChartController;
	dirDoughnutChart.controllerAs = VIEW_MODEL;
	dirDoughnutChart.link = function(scope, element, attrs) {
	}

	return dirDoughnutChart;
}

function radarChart(DIRECTIVE_RESTRICTIONS, VIEW_MODEL) {
	var dirRadarChart = {};

	dirRadarChart.restrict = DIRECTIVE_RESTRICTIONS.res_element;
	dirRadarChart.template = '<div>radar_chart_template_test</div>';
	dirRadarChart.controller = radarChartController;
	dirRadarChart.controllerAs = VIEW_MODEL;
	dirRadarChart.link = function(scope, element, attrs) {
	}

	return dirRadarChart;
}

function pieChart(DIRECTIVE_RESTRICTIONS, VIEW_MODEL) {
	var dirPieChart = {};

	dirPieChart.restrict = DIRECTIVE_RESTRICTIONS.res_element;
	dirPieChart.template = '<div>pie_chart_template_test</div>';
	dirPieChart.controller = pieChartController;
	dirPieChart.controllerAs = VIEW_MODEL;
	dirPieChart.link = function(scope, element, attrs) {
	}

	return dirPieChart;
}

function polarAreaChart(DIRECTIVE_RESTRICTIONS, VIEW_MODEL) {
	var dirPolarAreaChart = {};

	dirPolarAreaChart.restrict = DIRECTIVE_RESTRICTIONS.res_element;
	dirPolarAreaChart.template = '<div>polar_area_chart_template_test</div>';
	dirPolarAreaChart.controller = polarAreaChartController;
	dirPolarAreaChart.controllerAs = VIEW_MODEL;
	dirPolarAreaChart.link = function(scope, element, attrs) {
	}

	return dirPolarAreaChart;
}

function horizontalBarChart(DIRECTIVE_RESTRICTIONS, VIEW_MODEL) {
	var dirHorizontalBarChart = {};

	dirHorizontalBarChart.restrict = DIRECTIVE_RESTRICTIONS.res_element;
	dirHorizontalBarChart.template = '<div>horizontal_bar_chart_template_test</div>';
	dirHorizontalBarChart.controller = horizontalBarChartController;
	dirHorizontalBarChart.controllerAs = VIEW_MODEL;
	dirHorizontalBarChart.link = function(scope, element, attrs) {
	}

	return dirHorizontalBarChart;
}

function bubbleChart(DIRECTIVE_RESTRICTIONS, VIEW_MODEL) {
	var dirBubbleChart = {};

	dirBubbleChart.restrict = DIRECTIVE_RESTRICTIONS.res_element;
	dirBubbleChart.template = '<div>bubble_chart_template_test</div>';
	dirBubbleChart.controller = bubbleChartController;
	dirBubbleChart.controllerAs = VIEW_MODEL;
	dirBubbleChart.link = function(scope, element, attrs) {
	}

	return dirBubbleChart;
}

function dynamicChart(DIRECTIVE_RESTRICTIONS, VIEW_MODEL) {
	var dirDynamicChart = {};

	dirDynamicChart.restrict = DIRECTIVE_RESTRICTIONS.res_element;
	dirDynamicChart.template = '<div>dynamic_chart_template_test</div>';
	dirDynamicChart.controller = dynamicChartController;
	dirDynamicChart.controllerAs = VIEW_MODEL;
	dirDynamicChart.link = function(scope, element, attrs) {
	}

	return dirDynamicChart;
}