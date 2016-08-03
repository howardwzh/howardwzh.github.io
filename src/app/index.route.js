export function routerConfig($stateProvider, $urlRouterProvider) {
	'ngInject';

	$stateProvider
		.state('main', {
			url: '/',
			templateUrl: 'app/main/main.html',
			controller: 'MainController',
			controllerAs: 'main'
		})
		.state('main.home', {
			url: 'home',
			templateUrl: 'app/home/home.html',
			controller: 'HomeController',
			controllerAs: 'home',
			title:'home'
		})
		.state('main.about', {
			url: 'about',
			templateUrl: 'app/about/about.html',
			controller: 'AboutController',
			controllerAs: 'about',
			title:'about'
		})
		.state('main.contact', {
			url: 'contact',
			templateUrl: 'app/contact/contact.html',
			controller: 'ContactController',
			controllerAs: 'contact',
			title:'contact'
		})


		.state('docs', {
			url: '/docs/',
			templateUrl: 'app/docs/docs.html',
			controller: 'DocsController',
			controllerAs: 'docs'
		})
		.state('docs.ngrt', {
			url: 'ngrt',
			templateUrl: 'app/docs/ng-rule-tip/ngrt.html',
			controller: 'NgrtController',
			controllerAs: 'ngrt',
			title:'ngrt'
		})
		.state('docs.angular-style', {
			url: 'angular-style',
			templateUrl: 'app/docs/angular-style/angular-style.html',
			title:'angular-style'
		});

	$urlRouterProvider.otherwise('/home');
}