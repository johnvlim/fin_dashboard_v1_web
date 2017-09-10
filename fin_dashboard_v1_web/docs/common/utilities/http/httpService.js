angular.module('fin_dashboard_web').factory('httpService', httpService);

httpService.$inject = [ '$http', '$q' ];

function httpService($http, $q) {
	var httpServiceObj = {
		httpUrl : undefined,
		httpMethod : undefined,
		getHttpUrl : getHttpUrl,
		getHttpMethod : getHttpMethod,
		setHttpUrl : setHttpUrl,
		setHttpMethod : setHttpMethod,
		doGETRequest : doGETRequest
	}

	function getHttpUrl() {
		return httpServiceObj.httpUrl;
	}

	function getHttpMethod() {
		return httpServiceObj.httpMethod;
	}

	function setHttpUrl(httpUrl) {
		httpServiceObj.httpUrl = httpUrl;
	}

	function setHttpMethod(httpMethod) {
		httpServiceObj.httpMethod = httpMethod;
	}

	function doGETRequest(doGETSuccessCallback, doGETFailedCallback) {
		var deferred = $q.defer();
		var httpConfig = {
			url : httpServiceObj.httpUrl,
			method : httpServiceObj.httpMethod
		}
		
		$http(httpConfig)
		.then(doGETSuccessCallback)
		.catch(doGETFailedCallback);
		
		return deferred.promise;
	}

	return httpServiceObj;
}