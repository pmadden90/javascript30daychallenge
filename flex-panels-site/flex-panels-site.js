function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: {
            lat: 53.906163042,
            lng: -8.817830062,
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 53.9061, lng: -8.8178}, // Knock Airport
        { lat: 53.5417, lng: -9.2835}, // Cong - Quiet Man set here
        { lat: 52.9715, lng: -9.4309}, // Cliffs of Moher
        { lat: 54.3050, lng: -9.4569}, // Ceide Fields
        { lat: 54.3050, lng: -9.4569}, // The Burren
        { lat: 54.3400, lng: -8.3682}, // Glencar Waterfalls
        { lat: 53.7599, lng: -9.6598}, // Croagh Patrick
        { lat: 53.5616, lng: -9.8893}, // Kylemore Abbey
        { lat: 53.9854, lng: -8.2344}, // Lough Key Forest Park
        { lat: 53.5384, lng: -9.8875}, // Connemara National Park
        { lat: 53.8000, lng: -9.5467}, // Westport House
        { lat: 53.2598, lng: -9.0741}, // Galway Aquariam
        { lat: 54.3667, lng: -8.4744} // Benbulbin
        //{ lat:, lng: -}, // Surfing Beach 1
        //{ lat:, lng: -}, // Surfing Beach 2
        //{ lat:, lng: -}, // Surfing Beach 3
        //{ lat:, lng: -}, // Surfing Beach 4
    ];
    //Map Icons
    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var icons = {
        airport: {
            icon: iconBase + '/assets/media/icons/map_symbol_airport_02.png'
        },
        historical: {
            icon: iconBase + 'library_maps.png'
        },
        cultural: {
            icon: iconBase + 'info-i_maps.png'
        },
        scenic: {
            icon: iconBase + 'scenic_maps.png'
        }
    };

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

    // Map Legend
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('legend'));

    var legend = document.getElementById('legend');
    for (var style in styles) {
        var name = style.name;
        var icon = style.icon;
        var div = document.createElement('div');
        div.innerHTML = '<img src="' + icon + '"> ' + name;
        legend.appendChild(div);
    }
}