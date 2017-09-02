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

	return dirLineChart;
}

function barChart() {
	var dirBarChart = {};

	dirBarChart.restrict = 'E';
	dirBarChart.template = '<div>bar_chart_template_test</div>';
	dirBarChart.controller = barChartController;
	dirBarChart.controllerAs = 'vm';

	return dirBarChart;
}

function doughnutChart() {
}

function radarChart() {
}

function pieChart() {
}

function polarAreaChart() {
}

function horizontalBarChart() {
}

function bubbleChart() {
}

function dynamicChart() {
}