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
	$.getJSON( "https://swapi.co/api/people/", function( data ) {
		jQuery.each(data.results, function()
		{
			$('#listeperso').append('<button type="button" class="btn btn-link" data-toggle="modal" data-target="#'+$id+'">'+this.name+'</button> </br>');
			$('#descriptionperso').append('<div class="modal fade" id="'+$id+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"> <div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">'+this.name+'</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><p>'+this.birth_year+'</p><p>'+this.birth_year+'</p><p>'+this.eye_color+'</p><p>'+this.gender+'</p><p>'+this.hair_color+'</p><p>'+this.height+'</p><p>'+this.mass+'</p><p>'+this.skin_color+'</p></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button></div> </div></div></div>');
			$id++;
		});
	});

 

});

