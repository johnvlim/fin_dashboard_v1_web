angular.module('fin_dashboard_web').controller('topController', topController);

topController.$inject = [];

function topController() {
	const
	DOM_TOPROOTCONTAINER_NAVBAR_NAVBARCOLLAPSE_NAVBARNAV_LI_A = '#topRootContainer>div.navbar>div.navbar-collapse>ul.navbar-nav>li>a';
	const
	DOM_TOPROOTCONTAINER_NAVBAR_NAVBARCOLLAPSE_NAVBARNAV = '#topRootContainer>div.navbar>div.navbar-collapse>ul.navbar-nav';
	const
	DOM_CLASS_ACTIVE = '.active';
	const
	CLASS_ACTIVE = 'active';

	var vm = this;
	vm.bootstrapViewEvents = bootstrapViewEvents;

	function bootstrapViewEvents() {
		$(DOM_TOPROOTCONTAINER_NAVBAR_NAVBARCOLLAPSE_NAVBARNAV_LI_A).on(
				'click',
				function() {
					$(DOM_TOPROOTCONTAINER_NAVBAR_NAVBARCOLLAPSE_NAVBARNAV)
							.find(DOM_CLASS_ACTIVE).removeClass(CLASS_ACTIVE);
					$(this).parent().addClass(CLASS_ACTIVE);
				});
	}
}