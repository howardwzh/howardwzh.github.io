export class Demo1Controller {
	constructor($scope) {
		'ngInject';

		$scope.formData = {
			userName:''
		};
		$scope.globalObj = {};
		$scope.presetObj = {
			name: {
				id: 'name',
				ruleTip: {
					rule: [/^.{1,}$/, /^[a-zA-Z]+$/],
					tip: ['Required!', 'Must be letters!']
				},
				optional: true
			}
		};
	}
}