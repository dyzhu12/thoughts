(function() {
	'use strict';
	var titleContainer = document.getElementById('title-editable');
	var contentContainer = document.getElementById('content-editable');

	var thoughtTitle = localStorage.getItem('thoughtTitle');
	var thoughtContent = localStorage.getItem('thoughtContent');

	titleContainer.insertAdjacentHTML('beforeend', thoughtTitle);
	contentContainer.insertAdjacentHTML('beforeend', thoughtContent);

	var placeholderTitle = thoughtTitle === '' ? 'Title' : '';
	var placeholderContent = thoughtContent === '' ? 'Type your text here' : '';


	var titleEditor = new MediumEditor('#title-editable', {
		placeholder: {
			text: placeholderTitle,
			hideOnClick: false
		}
	});
	var contentEditor = new MediumEditor('#content-editable', {
		buttonLabels: 'fontawesome',
		placeholder: {
			text: placeholderContent,
			hideOnClick: false
		},
		toolbar: {
			buttons: [
				'bold',
				'italic',
				'underline',
				'subscript',
				'superscript',
				'anchor',
				'quote',
				'orderedList',
				'unorderedList',
				'justifyLeft',
				'justifyCenter',
				'justifyRight',
				'justifyFull',
				'h1',
				'h2'
			]
		}
	});
})();