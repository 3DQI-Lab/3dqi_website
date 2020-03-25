"use strict";

function initMap() {
    let myLocation = {lat: 42.362192, lng: -71.061766};

    let myMap = new google.maps.Map(document.getElementById('my-map'), {
      center: myLocation,
      zoom: 17
    });

    let myMarker = new google.maps.Marker({
        position: myLocation,
        title:"25 New Chardon St #400C, Boston, MA 02114"
    });

    myMarker.setMap(myMap);

    console.log(myMap);
}

{ // start scope
} // end scope