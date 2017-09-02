angular
.module('fin_dashboard_web')
.directive(
		'line-chart', 
		lineChart
		)
.directive(
		'bar-chart', 
		barChart
		)
.directive(
		'doughnut-chart', 
		doughnutChart
		)
.directive(
		'radar-chart', 
		radarChart
		)
.directive(
		'pie-chart', 
		pieChart
		)
.directive(
		'polar-area-chart', 
		polarAreaChart
		)
.directive(
		'horizontal-bar-chart', 
		horizontalBarChart
		)
.directive(
		'bubble-chart', 
		bubbleChart
		)
.directive(
		'dynamic-chart', 
		dynamicChart
		);

function lineChart(
		){	
	var dirLineChart = {};
	dirLineChart.restrict = 'E';
}

function barChart(
		){
}

function doughnutChart(
		){	
}

function radarChart(
		){
}

function pieChart(
		){
}

function polarAreaChart(
		){
}

function horizontalBarChart(
		){
}

function bubbleChart(
		){
}

function dynamicChart(
		){
}