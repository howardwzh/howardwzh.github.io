export function MalarkeyDirective(malarkey) {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
      extraValues: '='
    },
    template: '&nbsp;',
    link: linkFunc,
    controller: MalarkeyController,
    controllerAs: 'vm'
  };

  return directive;

  function linkFunc(scope, el) {
    let typist = malarkey(el[0], {
      typeSpeed: 40,
      deleteSpeed: 40,
      pauseDelay: 800,
      loop: true,
      postfix: ' '
    });

    const baseTech = ['Yeoman', 'Gulp', 'Angular', 'Bootstrap', 'Kamar'];
    let technologies = scope.extraValues ? baseTech.concat(scope.extraValues) : baseTech;

    el.addClass('acme-malarkey');

    angular.forEach(technologies, (value) => {
      typist.type(value).pause().delete();
    });
  }
}

class MalarkeyController {
  constructor() {
    'ngInject';
  }
}