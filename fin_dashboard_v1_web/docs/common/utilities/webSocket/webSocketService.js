angular.module('fin_dashboard_web').factory('webSocketService',
		webSocketService);

webSocketService.$inject = [ '$websocket', 'WS_CONFIG' ];

function webSocketService($websocket, WS_CONFIG) {
	var webSocketServiceObj = {
		wsObj : undefined,
		wsData : undefined,
		getWsObj : getWsObj,
		getWsData : getWsData,
		setWsObj : setWsObj,
		setWsData : setWsData,
		confWebSocket : confWebSocket
	};

	function getWsObj() {
		return webSocketServiceObj.wsObj;
	}

	function getWsData() {
		return webSocketServiceObj.wsData;
	}

	function setWsObj(wsObj) {
		webSocketServiceObj.wsObj = wsObj;
	}

	function setWsData(wsData) {
		webSocketServiceObj.wsData = wsData;
	}

	function confWebSocket() {
		var wsUrl = 'ws://' + WS_CONFIG.host + ':' + WS_CONFIG.port
				+ '/jenkins';
		webSocketServiceObj.wsObj = $websocket(wsUrl);

		webSocketServiceObj.wsObj.onMessage(function(msg) {
		});
	}

	return webSocketServiceObj;
}