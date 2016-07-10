export class DocsController {
	constructor($location, $anchorScroll) {
		'ngInject';

		this.$location = $location;
		this.$anchorScroll = $anchorScroll;
	}

	scrollTo(id) {
		this.$location.hash(id);
		this.$anchorScroll();
	}
}