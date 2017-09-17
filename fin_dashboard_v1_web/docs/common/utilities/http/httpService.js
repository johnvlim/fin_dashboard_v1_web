angular.module('fin_dashboard_web').factory('httpService', httpService);

httpService.$inject = [ 'HTTP_REQUEST_HEADER', '$http', '$q' ];

function httpService(HTTP_REQUEST_HEADER, $http, $q) {
	var httpServiceObj = {
		httpHeader: undefined,
		httpMethod : undefined,
		httpUrl : undefined,
		getHttpHeader: getHttpHeader,
		getHttpMethod : getHttpMethod,
		getHttpUrl : getHttpUrl,
		setHttpHeader: setHttpHeader,
		setHttpMethod : setHttpMethod,
		setHttpUrl : setHttpUrl,
		doGETAllRequest: doGETAllRequest,
		doGETRequest : doGETRequest
	}

	$http.defaults.headers.common.Authorization = HTTP_REQUEST_HEADER.Authorization;

	function getHttpHeader() {
		return httpServiceObj.httpHeader;
	}

	function getHttpMethod() {
		return httpServiceObj.httpMethod;
	}

	function getHttpUrl() {
		return httpServiceObj.httpUrl;
	}

	function setHttpHeader(httpHeader) {
		httpServiceObj.httpHeader = httpHeader;
	}

	function setHttpMethod(httpMethod) {
		httpServiceObj.httpMethod = httpMethod;
	}

	function setHttpUrl(httpUrl) {
		httpServiceObj.httpUrl = httpUrl;
	}

	function doGETAllRequest() {
		var qPromises = [];
		var httpConfig = {
			method : httpServiceObj.httpMethod
		}

		angular.forEach(httpServiceObj.httpUrl, function(httpUrl) {
				httpConfig.url = httpUrl;

				qPromises.push($http(httpConfig));
			}
		);

		return $q.all(qPromises);
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