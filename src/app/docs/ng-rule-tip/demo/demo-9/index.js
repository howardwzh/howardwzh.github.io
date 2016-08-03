export class Demo9Controller {
	constructor($scope) {
		'ngInject';

		$scope.globalObj = {
			blurShow: {}
		};
		$scope.formData = {
			userNameA: '',
			userNameB: ''
		};
		$scope.presetObj = {
			name: {
				id: 'name',
				ruleTip: {
					rule: [/^.{1,}$/, /^[a-zA-Z]+$/],
					tip: ['Required!', 'Must be letters!']
				}
			}
		};
	}
}