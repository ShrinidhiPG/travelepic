iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

icons = {
  parking: {
    icon: iconBase + 'parking_lot_maps.png',
	name: "parking"
  },
  library: {
    icon: iconBase + 'library_maps.png',
	name: "library"
  },
  museum: {
    icon: iconBase + 'museum_maps.png',
	name: "museum"
  },
  police: {
    icon: iconBase + 'police_maps.png',
	name: "police"
  },
  hindu_temple: {
    icon: iconBase + 'hindu_temple_maps.png',
	name: "hindu_temple"
  },
  lodging: {
	icon: iconBase + 'lodging_maps.png',
	name: "lodging"
  },
  shopping: {
	icon: iconBase + 'shopping_maps.png',
	name: "shopping"
  }
};

function searchPetrolBunks()
{
	var latlng = new google.maps.LatLng(pos.lat,pos.lng);

	var request = {
		location: latlng,
		radius: '1000',
		types: ["parking","library","museum","police","hindu_temple","lodging","shopping"]
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
	var iList=false; 
	var size = 0, key;
    for (key in icons) {
        if (icons.hasOwnProperty(key)) size++;
    }
	for(key in icons){
		if(place.types[0]==icons[key].name){
			iList=true;
			break;
		}
	}
	if(iList)
	var marker = new google.maps.Marker({
      map: map,
	  icon: icons[place.types[0]].icon,
      position: place.geometry.location
    });
}
