"use strict";
class MapaDinamicoGoogle {
    initMap() {  
        var centro = {lat: 43.3672702, lng: -5.8502461};
        var mapaGeoposicionado = new google.maps.Map(document.getElementById('mapa'),{
            zoom: 8,
            center:centro,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var infoWindow = new google.maps.InfoWindow;
        var pos = {
            lat: Number(document.getElementById("lat").value),
            lng: Number(document.getElementById("lng").value)
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Ubicación encontrada.');
        infoWindow.open(mapaGeoposicionado);
        mapaGeoposicionado.setCenter(pos);
    }
}
var mapaDinamicoGoogle = new MapaDinamicoGoogle();