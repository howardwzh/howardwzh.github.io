export function runBlock ($log, GlobalSetService) {
  'ngInject';
  $log.debug('runBlock end');
  GlobalSetService.initGloabl();
}
