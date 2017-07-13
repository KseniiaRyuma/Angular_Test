(function() {
	'use strict';

	var app = angular.module('app');

	app.controller('ApplicationController', ApplicationController);

	ApplicationController.$inject = ['RevenuePerformances', '$http'];

	function ApplicationController(RevenuePerformances, $http) {
		var vm = this;
		vm.revenuePerformances = [];

		RevenuePerformances.get('data.json').then(function(response) {
			vm.revenuePerformances = response.revenue_performances;
		});
	}

	app.directive('progressbar', function() {
		return {
			restrict: 'E',
			scope: {
				target: '@',
				actual: '@',
				remain: '@'
			},
			template: function(elem, attr) {
				return '<div class="slider">' + 
						'<i></i>' +
					'</div><span><u></u><p></p></span>';
			},
			link: function ($scope, $element) {
				var target = parseFloat($scope.target),
					actual = parseFloat($scope.actual),
					i = angular.element($element.find('i')),
					p = angular.element($element.find('p')),
					span = angular.element($element.find('span'));
				i.css('width', (100 / target * actual) + '%');
				p.text($scope.remain);
				span.css('left', (100 / target * (target - actual)) + '%');
				span.css('margin-left', (0 - (span[0].scrollWidth / 2)) + 'px')
			}
		};
	});
})();