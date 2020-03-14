$('#exampleModal').on('show.bs.modal', function (event) {
	var button = $(event.relatedTarget) // Button that triggered the modal
	var modal = $(this)
	var newSrc = button.attr('src');
	
	modal.find('img').attr('src', newSrc);
})
