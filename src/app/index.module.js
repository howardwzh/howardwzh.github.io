/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { HomeController } from './home/home.controller';
import { AboutController } from './about/about.controller';
import { ContactController } from './contact/contact.controller';
import { DocsController } from './docs/docs.controller';
import { EptController } from './docs/error-pro-tip/ept.controller';
import { GithubContributorService } from './components/githubContributor/githubContributor.service';
import { WebDevTecService } from './components/webDevTec/webDevTec.service';
import { GlobalSetService } from './components/global-set/global-set.service';
import { NavbarDirective } from './components/navbar/navbar.directive';
import { DocsNavbarDirective } from './components/docsNavbar/docsNavbar.directive';
import { MalarkeyDirective } from './components/malarkey/malarkey.directive';
import { showCode } from './components/showCode/showCode.directive';
import { makePreCode } from './components/makePreCode/makePreCode.directive';

import { Demo0Controller } from './docs/error-pro-tip/demo/demo-0/index';
import { Demo1Controller } from './docs/error-pro-tip/demo/demo-1/index';
import { Demo2Controller } from './docs/error-pro-tip/demo/demo-2/index';
import { Demo3Controller } from './docs/error-pro-tip/demo/demo-3/index';
import { Demo4Controller } from './docs/error-pro-tip/demo/demo-4/index';
import { Demo5Controller } from './docs/error-pro-tip/demo/demo-5/index';
import { Demo6Controller } from './docs/error-pro-tip/demo/demo-6/index';
import { Demo7Controller } from './docs/error-pro-tip/demo/demo-7/index';
import { Demo8Controller } from './docs/error-pro-tip/demo/demo-8/index';
import { Demo9Controller } from './docs/error-pro-tip/demo/demo-9/index';

angular.module('website', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr', 'ngClipboard', 'ngErrorProTip'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .service('GlobalSetService', GlobalSetService)
  .controller('MainController', MainController)
  .controller('HomeController', HomeController)
  .controller('AboutController', AboutController)
  .controller('ContactController', ContactController)
  .controller('DocsController', DocsController)
  .controller('EptController', EptController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeDocsNavbar', DocsNavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective)
  .directive('showCode', showCode)
  .directive('makePreCode', makePreCode)

  .controller('Demo0Controller', Demo0Controller)
  .controller('Demo1Controller', Demo1Controller)
  .controller('Demo2Controller', Demo2Controller)
  .controller('Demo3Controller', Demo3Controller)
  .controller('Demo4Controller', Demo4Controller)
  .controller('Demo5Controller', Demo5Controller)
  .controller('Demo6Controller', Demo6Controller)
  .controller('Demo7Controller', Demo7Controller)
  .controller('Demo8Controller', Demo8Controller)
  .controller('Demo9Controller', Demo9Controller)
  ;
