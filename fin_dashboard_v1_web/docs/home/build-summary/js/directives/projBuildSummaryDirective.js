angular.module('fin_dashboard_web').directive('projBuildSummary',
		projBuildSummary);

projBuildSummary.$inject = [ 'DIRECTIVE_RESTRICTIONS' ];

function projBuildSummary(DIRECTIVE_RESTRICTIONS) {
	var dirProjBuildSummary = {};

	dirProjBuildSummary.restrict = DIRECTIVE_RESTRICTIONS.res_element;
	dirProjBuildSummary.templateUrl = 'docs/home/build-summary/proj-build-summary.html';
	dirProjBuildSummary.controller = 'projBuildSummaryController';
	dirProjBuildSummary.controllerAs = 'projBuildSummaryController';

	return dirProjBuildSummary;
}