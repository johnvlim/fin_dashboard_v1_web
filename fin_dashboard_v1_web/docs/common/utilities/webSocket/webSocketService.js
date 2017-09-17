angular.module('fin_dashboard_web').factory('webSocketService',
		webSocketService);

webSocketService.$inject = [ '$websocket', 'WS_CONFIG' ];

function webSocketService($websocket, WS_CONFIG) {
	var webSocketServiceObj = {
		wsData : undefined,
		wsObj : undefined,
		getWsData : getWsData,
		getWsObj : getWsObj,
		setWsData : setWsData,
		setWsObj : setWsObj,
		confWebSocket : confWebSocket
	};

	function getWsData() {
		return webSocketServiceObj.wsData;
	}

	function getWsObj() {
		return webSocketServiceObj.wsObj;
	}

	function setWsData(wsData) {
		webSocketServiceObj.wsData = wsData;
	}

	function setWsObj(wsObj) {
		webSocketServiceObj.wsObj = wsObj;
	}

	function confWebSocket(onMessageCallback) {
		var wsUrl = 'ws://' + WS_CONFIG.host + ':' + WS_CONFIG.port
				+ '/jenkins';
		webSocketServiceObj.wsObj = $websocket(wsUrl);

		webSocketServiceObj.wsObj.onMessage(onMessageCallback);
	}

	return webSocketServiceObj;
}