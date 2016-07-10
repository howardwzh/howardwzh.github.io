export function DocsNavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    replace:true,
    templateUrl: 'app/components/docsNavbar/docsNavbar.html',
    controller: DocsNavbarController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class DocsNavbarController {
  constructor (GlobalSetService) {
    'ngInject';
    this.global = GlobalSetService.getGlobal();
  }
}
