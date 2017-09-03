angular.module('fin_dashboard_web').directive('lineChart', lineChart)
		.directive('bar-chart', barChart).directive('doughnut-chart',
				doughnutChart).directive('radar-chart', radarChart).directive(
				'pie-chart', pieChart).directive('polar-area-chart',
				polarAreaChart).directive('horizontal-bar-chart',
				horizontalBarChart).directive('bubble-chart', bubbleChart)
		.directive('dynamic-chart', dynamicChart);

function lineChart() {
	var dirLineChart = {};

	dirLineChart.restrict = 'E';
	dirLineChart.template = '<div>line_chart_template_test</div>';
	dirLineChart.controller = lineChartController;
	dirLineChart.controllerAs = 'vm';
	dirLineChart.link = function(scope, element, attrs) {
	}

	return dirLineChart;
}

function barChart() {
	var dirBarChart = {};

	dirBarChart.restrict = 'E';
	dirBarChart.template = '<div>bar_chart_template_test</div>';
	dirBarChart.controller = barChartController;
	dirBarChart.controllerAs = 'vm';
	dirBarChart.link = function(scope, element, attrs) {
	}

	return dirBarChart;
}

function doughnutChart() {
	var dirDoughnutChart = {};

	dirDoughnutChart.restrict = 'E';
	dirDoughnutChart.template = '<div>doughnut_chart_template_test</div>';
	dirDoughnutChart.controller = doughnutChartController;
	dirDoughnutChart.controllerAs = 'vm';
	dirDoughnutChart.link = function(scope, element, attrs) {
	}

	return dirDoughnutChart;
}

function radarChart() {
	var dirRadarChart = {};

	dirRadarChart.restrict = 'E';
	dirRadarChart.template = '<div>radar_chart_template_test</div>';
	dirRadarChart.controller = radarChartController;
	dirRadarChart.controllerAs = 'vm';
	dirRadarChart.link = function(scope, element, attrs) {
	}

	return dirRadarChart;
}

function pieChart() {
	var dirPieChart = {};

	dirPieChart.restrict = 'E';
	dirPieChart.template = '<div>pie_chart_template_test</div>';
	dirPieChart.controller = pieChartController;
	dirPieChart.controllerAs = 'vm';
	dirPieChart.link = function(scope, element, attrs) {
	}

	return dirPieChart;
}

function polarAreaChart() {
	var dirPolarAreaChart = {};

	dirPolarAreaChart.restrict = 'E';
	dirPolarAreaChart.template = '<div>polar_area_chart_template_test</div>';
	dirPolarAreaChart.controller = polarAreaChartController;
	dirPolarAreaChart.controllerAs = 'vm';
	dirPolarAreaChart.link = function(scope, element, attrs) {
	}

	return dirPolarAreaChart;
}

function horizontalBarChart() {
	var dirHorizontalBarChart = {};

	dirHorizontalBarChart.restrict = 'E';
	dirHorizontalBarChart.template = '<div>horizontal_bar_chart_template_test</div>';
	dirHorizontalBarChart.controller = horizontalBarChartController;
	dirHorizontalBarChart.controllerAs = 'vm';
	dirHorizontalBarChart.link = function(scope, element, attrs) {
	}

	return dirHorizontalBarChart;
}

function bubbleChart() {
	var dirBubbleChart = {};

	dirBubbleChart.restrict = 'E';
	dirBubbleChart.template = '<div>bubble_chart_template_test</div>';
	dirBubbleChart.controller = bubbleChartController;
	dirBubbleChart.controllerAs = 'vm';
	dirBubbleChart.link = function(scope, element, attrs) {
	}

	return dirBubbleChart;
}

function dynamicChart() {
	var dirDynamicChart = {};

	dirDynamicChart.restrict = 'E';
	dirDynamicChart.template = '<div>dynamic_chart_template_test</div>';
	dirDynamicChart.controller = dynamicChartController;
	dirDynamicChart.controllerAs = 'vm';
	dirDynamicChart.link = function(scope, element, attrs) {
	}

	return dirDynamicChart;
}