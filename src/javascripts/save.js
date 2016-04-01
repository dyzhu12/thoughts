(function() {
	'use strict';
	var saveButton = document.getElementById('save-button');
	saveButton.addEventListener('click', function(event) {
		var titleContainer = document.getElementById('title-editable');
		var contentContainer = document.getElementById('content-editable');

		localStorage.setItem('thoughtTitle', titleContainer.innerHTML);
		localStorage.setItem('thoughtContent', contentContainer.innerHTML);

		console.log(localStorage.getItem('thoughtTitle'));
	});
})();