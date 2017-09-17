angular.module('fin_dashboard_web').directive('projBuildSummary',
		projBuildSummary);

projBuildSummary.$inject = [ 'DIRECTIVE_RESTRICTIONS' ];

function projBuildSummary(DIRECTIVE_RESTRICTIONS) {
	var dirProjBuildSummary = {};

	dirProjBuildSummary.controller = 'projBuildSummaryController';
	dirProjBuildSummary.controllerAs = 'projBuildSummaryController';
	dirProjBuildSummary.link = function(scope, elem, attr) {
	}
	dirProjBuildSummary.restrict = DIRECTIVE_RESTRICTIONS.res_element;
	dirProjBuildSummary.templateUrl = 'docs/home/build-summary/proj-build-summary.html';

	return dirProjBuildSummary;
}