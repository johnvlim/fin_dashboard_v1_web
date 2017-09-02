angular
.module('fin_dashboard_web')
.controller(
		'testChartController', 
		testChartController
		);

testChartController.$inject = [
	'$scope'
	];

function testChartController(
		$scope
		){
	var vm = this;
	vm.chartLabel = [	//source: http://jtblin.github.io/angular-chart.js/
		'Download Sales', 
		'In-Store Sales', 
		'Mail-Order'
	];
	vm.chartData = [	//source: http://jtblin.github.io/angular-chart.js/
		300, 
		500, 
		100
	];
}