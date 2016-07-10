export class Demo3Controller {
	constructor($scope) {
		'ngInject';

		$scope.formData = {
			userName: ''
		};
		$scope.globalObj = {};
		$scope.presetObj = {
			name: {
				id: 'name',
				ruleTip: {
					rule: [/^.{1,}$/, /^[a-zA-Z]+$/, fn],
					tip: ['Required!', 'Must be letters!', 'Must be "hello"!']
				}
			}
		};

		function fn(value) {
			return value === 'hello';
		}
	}
}