export class GlobalSetService {
  constructor($rootScope) {
    'ngInject';

    this.$rootScope = $rootScope;
  }

  initGloabl() {
    let _global = {},
      getNowTitle = this.$rootScope.$on('$stateChangeSuccess', function(event, current) {
        _global.current = current.title;
      });

    this.global = _global;

    this.$rootScope.$on('$destroy', getNowTitle);
  }

  getGlobal() {
    return this.global;
  }
}