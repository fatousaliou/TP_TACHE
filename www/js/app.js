function ajouttache(){
	if (tache.value.trim() != '') {

		let listItem = document.createElement('li');

		listItem.appendChild(document.createTextNode(tache.value));
		listache.appendChild(listItem)

		$(listItem).on('swiperight', function () 
		{
			//$(this).toggleClass('tache-fait');
			if (listItem.className.indexOf(' tache-fait ')== -1) {

				listItem.className +=' tache-fait ';
		    }
		    else{
		    	listItem.className= listItem.className.replace(' tache-fait', '');
		    }
		});

		$(listItem).on('swipeleft', function () 
		{
			let deleteDirectly = true;

			if (listItem.className.indexOf('tache-fait') == -1) {
			
				deleteDirectly = confirm('Tache non terminé. Voulez-vous supprimer?');
			}
			if (deleteDirectly) {
				$(listItem).hide('slow', function(){
					listItem.remove();
				});
			}

		});
		
		tache.value = '';
		tache.focus();
		$(listache).listview('refresh');
	}
}