//Survol de l'image
$(".img-fluid").hover(function(){
	console.log($(this).attr("alt"));
});


$( document ).ready(function() {

	//Afficher name console
	$.getJSON( "https://swapi.co/api/people/1/?format=json", function( data ) {
		console.log(this.name);
	});

	//Afficher name h2
	$.getJSON( "https://swapi.co/api/people/1/?format=json", function( data ) {
		$('#titre2').append("<h2>"+this.name+"</h2>");
	});

	//liste des
	$id=1;

	for (i = 1; i<10; i++)
	{
		$.getJSON( "https://swapi.co/api/people/?page="+i, function( data ) {
			jQuery.each(data.results, function()
			{
				$('#listeperso').append('<div class="col-md-4"><button type="button" class="btn btn-link" data-toggle="modal" data-target="#'+$id+'">'+this.name+'</button> </br></div>');
				$('#descriptionperso').append('<div class="modal fade" id="'+$id+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"> <div class="modal-dialog" role="document"><div class="modal-content"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><div class="modal-body"><p><h3 class="modal-title" id="exampleModalLabel">'+this.name+'</h3></p><p>Anniversaire : '+this.birth_year+'</p><p>Année de naissance : '+this.birth_year+'</p><p>Couleur des yeux : '+this.eye_color+'</p><p>Genre : '+this.gender+'</p><p>Couleur de cheveux : '+this.hair_color+'</p><p>Taille : '+this.height+'</p><p>Poid : '+this.mass+'</p><p>Couleur de peau : '+this.skin_color+'</p></div></div></div></div>');
				$id++;
			});
		});
	}
});

