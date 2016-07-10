export function showCode() {
  'ngInject';

  let directive = {
    restrict: 'AE',
    scope: {
      showCode: '@'
    },
    link: function(scope, el) {
      scope.getContentUrl = () => {
        return scope.showCode + '.html';
      };

      scope.getTextToCopy = (preClass) => {
        return angular.element(el).find(preClass).text();
      };
    },
    template: '<ng-include src="getContentUrl()"/>'
  };

  return directive;
}