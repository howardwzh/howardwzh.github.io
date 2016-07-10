export class Demo4Controller {
	constructor($scope) {
		'ngInject';

		$scope.formData = {};
		$scope.globalObj = {};
		$scope.presetObj = {
			nameA: {
				id: 'nameA',
				ruleTip: {
					rule: [/^.{1,}$/, /^[a-zA-Z]+$/],
					tip: ['Required!', 'Must be letters!']
				}
			},
			nameB: {
				id: 'nameB',
				items: {
					linkKey: 'userNameA'
				},
				ruleTip: {
					rule: [/^.{1,}$/, /^[a-zA-Z]+$/, fn],
					tip: ['Required!', 'Must be letters!', 'Must be equal to the above!']
				}
			}
		};

		function fn(value, param) {
			return value === param.userNameA;
		}
	}
}