angular.module('fin_dashboard_web').factory('httpService', httpService);

httpService.$inject = [ 'HTTP_REQUEST_HEADER', '$http' ];

function httpService(HTTP_REQUEST_HEADER, $http) {
	var httpServiceObj = {
		httpUrl : undefined,
		httpMethod : undefined,
		httpHeader: undefined,
		getHttpUrl : getHttpUrl,
		getHttpMethod : getHttpMethod,
		getHttpHeader: getHttpHeader,
		setHttpUrl : setHttpUrl,
		setHttpMethod : setHttpMethod,
		setHttpHeader: setHttpHeader,
		doGETRequest : doGETRequest
	}

	$http.defaults.headers.common.Authorization = HTTP_REQUEST_HEADER.Authorization;
	
	function getHttpUrl() {
		return httpServiceObj.httpUrl;
	}

	function getHttpMethod() {
		return httpServiceObj.httpMethod;
	}
	
	function getHttpHeader(){
		return httpServiceObj.httpHeader;
	}

	function setHttpUrl(httpUrl) {
		httpServiceObj.httpUrl = httpUrl;
	}

	function setHttpMethod(httpMethod) {
		httpServiceObj.httpMethod = httpMethod;
	}
	
	function setHttpHeader(httpHeader){
		httpServiceObj.httpHeader = httpHeader;
	}

	function doGETRequest(doGETSuccessCallback, doGETFailedCallback) {
		var httpConfig = {
			url : httpServiceObj.httpUrl,
			method : httpServiceObj.httpMethod
		}
		
		$http(httpConfig)
		.then(doGETSuccessCallback)
		.catch(doGETFailedCallback);
	}

	return httpServiceObj;
}