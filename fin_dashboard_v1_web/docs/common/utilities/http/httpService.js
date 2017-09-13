angular.module('fin_dashboard_web').factory('httpService', httpService);

httpService.$inject = [ 'HTTP_REQUEST_HEADER', '$http', '$q' ];

function httpService(HTTP_REQUEST_HEADER, $http, $q) {
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
		doGETRequest : doGETRequest,
		doGETAllRequest: doGETAllRequest
	}

	$http.defaults.headers.common.Authorization = HTTP_REQUEST_HEADER.Authorization;

	function getHttpUrl() {
		return httpServiceObj.httpUrl;
	}

	function getHttpMethod() {
		return httpServiceObj.httpMethod;
	}

	function getHttpHeader() {
		return httpServiceObj.httpHeader;
	}

	function setHttpUrl(httpUrl) {
		httpServiceObj.httpUrl = httpUrl;
	}

	function setHttpMethod(httpMethod) {
		httpServiceObj.httpMethod = httpMethod;
	}

	function setHttpHeader(httpHeader) {
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

	return httpServiceObj;
}