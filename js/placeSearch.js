function searchPetrolBunks()
{
	var latlng = new google.maps.LatLng(pos.lat,pos.lng);

	var request = {
		location: latlng,
		radius: '5000',
		types: ['parking']
	};

	service = new google.maps.places.PlacesService(map);
	service.nearbySearch(request, placeMarkers);
}

function placeMarkers(results,status)
{
	if (status == google.maps.places.PlacesServiceStatus.OK) {
	    for (var i = 0; i < results.length; i++) {
	      var place = results[i];
	      console.log(results[i]);
	      createMarkers(place);
	    }
	}
	else
		alert(status)
}

function createMarkers(place){
	var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
        var icons = {
          parking: {
            icon: iconBase + 'parking_lot_maps.png',
          }
        };
		
	var marker = new google.maps.Marker({
      map: map,
	  icon: icons[place.types[0]].icon,
      position: place.geometry.location
    });
}
