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
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
    
            infoWindow.setPosition(pos);
            infoWindow.setContent('Tu ubicación.');
            infoWindow.open(mapaGeoposicionado);
            mapaGeoposicionado.setCenter(pos);
            }, function() {
                handleLocationError(true, infoWindow, mapaGeoposicionado.getCenter());
            });
        } 
        else {
            handleLocationError(false, infoWindow, mapaGeoposicionado.getCenter());
        }
    }
    handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                                'Error: Ha fallado la geolocalización.' :
                                'Error: Su navegador no soporta geolocalización.');
        infoWindow.open(mapaGeoposicionado);
    }
}
var mapaDinamicoGoogle = new MapaDinamicoGoogle();