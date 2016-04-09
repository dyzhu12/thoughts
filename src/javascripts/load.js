(function() {
	'use strict';
	var titleContainer = document.getElementById('title-editable');
	var contentContainer = document.getElementById('content-editable');

	var thoughtTitle = localStorage.getItem('thoughtTitle');
	var thoughtContent = localStorage.getItem('thoughtContent');

	var elementFilter = [
		'<p>',
		'</p>',
		'<br>',
		'<h1>',
		'</h1>',
		'<h2>',
		'</h2>',
		'<h3>',
		'</h3>',
		'<h4>',
		'</h4>',
		'<h5>',
		'</h5>',
		'<h6>',
		'</h6>'
	];

	elementFilter.forEach(function(element) {
		thoughtTitle = thoughtTitle.replace(element, '');
		thoughtContent = thoughtContent.replace(element, '');
	});

	if (thoughtTitle !== '') {
		titleContainer.insertAdjacentHTML('beforeend', thoughtTitle);
	}

	if (thoughtContent !== '') {
		contentContainer.insertAdjacentHTML('beforeend', thoughtContent);
	}

	var placeholderTitle = thoughtTitle === '' ? 'Title' : '';
	var placeholderContent = thoughtContent === '' ? 'Content' : '';

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
				'orderedlist',
				'unorderedlist',
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