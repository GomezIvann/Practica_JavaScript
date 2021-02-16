"use strict";
class MapaDinamicoGoogle {
    initMap() {
        var mieres = {lat: 43.249638, lng: -5.777774};
        var mapaMieres = new google.maps.Map(document.getElementById('mapa'),{zoom: 8,center: mieres});
        var marcador = new google.maps.Marker({position: mieres,map: mapaMieres});
    }
}
var mapaDinamicoGoogle = new MapaDinamicoGoogle();