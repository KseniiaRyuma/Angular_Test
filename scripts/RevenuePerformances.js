(function(){
	'use strict';
	angular.module('app').factory('RevenuePerformances', RevenuePerformances);

	function RevenuePerformances($http, $q){
		return {
			get: function(params) {
				return $q(function(resolve, reject) {
					$http.get(params).success(function(data) {
						resolve(data);
					});
				});
			}
		};
	}
})();