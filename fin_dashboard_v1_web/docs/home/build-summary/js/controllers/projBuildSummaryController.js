angular.module('fin_dashboard_web').controller('projBuildSummaryController',
		projBuildSummaryController);

projBuildSummaryController.$inject = [ '$scope' ];

function projBuildSummaryController($scope) {
	var vm = this;

	vm.jenkinsJob = $scope.i;
}