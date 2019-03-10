var map;
var serviceMemes;
var LocationsMemes;

var LatMidpointMemes = '43.4643';
var LongMidpointMemes = '80.5204';
var RadiusMemes = '1000';

function FindPlaces() {

var originMemes = new google.maps.LatLng(LatMidpointMemes, LongMidpointMemes);

map = new google.maps.Map(document.getElementById('map'), {
      center: originMemes,
    });


serviceMemes = new google.maps.places.PlacesService(map);

	var request = {
		location: originMemes,
		radius: RadiusMemes,
		RankBy: 'google.maps.places.RankBy.DISTANCE',
	}

serviceMemes.nearbySearch(request, callback);


}

function callback(results, status) {
	if (status == google.maps.places.PlacesServiceStatus.OK) {
		for (var i = 0; i < results.length; i++) {
			LocationsMemes.push(results[i]);
		}
	}
}
