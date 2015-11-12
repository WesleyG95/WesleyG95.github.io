var showChampions = function(){
	var searchField = $('#search').val();
	var myExp = new RegExp(searchField, 'i');
	
	$.getJSON('http://ddragon.leagueoflegends.com/cdn/5.22.1/data/en_US/champion.json', function(results){
		var output = '<ul class="searchresult">';
		
		$.each(results.data, function(key, val) {
			if(val.name.search(myExp) != -1)
			{
				output +='<li>';
				output +='<h2>' + val.name + '</h2>';
				output +='<img src="http://ddragon.leagueoflegends.com/cdn/5.22.1/img/champion/' + val.image.full + '"></img>';
				output +='<p>' + val.title + '</p>';
				output +='<p>' + val.blurb + '</p>';
				output +='</li>';
			}
		});
		
		output += '</ul>';
		$('#update').html(output);
		
	});
};

$(document).ready(function() {
	$('#search').keyup(showChampions);
	showChampions();
});