var map;
var serviceMemes;
var LocationsMemes;

var LatMidpointMemes = 43.4643;
var LongMidpointMemes = -80.5204;


function FindPlaces() {


map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: LatMidpointMemes, lng: LongMidpointMemes},
    });


serviceMemes = new google.maps.places.PlacesService(map);

	var request = {
		location: {lat: LatMidpointMemes, lng: LongMidpointMemes},
		type: ['accounting', 'airport', 'amusement_park', 'aquarium', 'art_gallery', 'atm', 'bakery', 'bank', 'bar', 'beauty_salon', 'bicycle_store', 'book_store', 'bowling_alley', 'bus_station', 'cafe', 'campground', 'car_dealer', 'car_rental', 'car_repair', 'car_wash', 'casino', 'cemetery', 'church', 'city_hall', 'clothing_store', 'convenience_store', 'courthouse', 'dentist', 'department_store', 'doctor', 'electrician', 'electronics_store', 'embassy', 'fire_station', 'florist', 'funeral_home', 'furniture_store', 'gas_station', 'gym', 'hair_care', 'hardware_store', 'hindu_temple', 'home_goods_store', 'hospital', 'insurance_agency', 'jewelry_store', 'laundry', 'lawyer', 'library', 'liquor_store', 'local_government_office', 'locksmith', 'lodging', 'meal_delivery', 'meal_takeaway', 'mosque', 'movie_rental', 'movie_theater', 'moving_company', 'museum', 'night_club', 'painter', 'park', 'parking', 'pet_store', 'pharmacy', 'physiotherapist', 'plumber', 'police', 'post_office', 'real_estate_agency', 'restaurant', 'roofing_contractor', 'rv_park', 'school', 'shoe_store', 'shopping_mall', 'spa', 'stadium', 'storage', 'store', 'subway_station', 'supermarket', 'synagogue', 'taxi_stand', 'train_station', 'transit_station', 'travel_agency', 'veterinary_care', 'zoo'],
		rankBy: google.maps.places.RankBy.DISTANCE
	}

serviceMemes.nearbySearch(request, callback);


}

function callback(results, status) {
	if (status == google.maps.places.PlacesServiceStatus.OK) {
			LocationsMemes.push(results);
	}
}
