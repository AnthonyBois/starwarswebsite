/*$(".img-fluid").hover(function(){
	console.log($(this).attr("alt"));
});*/


$( document ).ready(function() {
	$.getJSON( "https://swapi.co/api/people/", function( data ) {
		jQuery.each(data.results, function()
		{
			console.log(this.name);
			$('#listeperso').append("<p>"+this.name+"</p>");
		});
	})

 

});

