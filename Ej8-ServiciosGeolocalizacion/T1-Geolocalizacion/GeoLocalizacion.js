"use strict";
class GeoLocalizacion {
    constructor () {
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this));
    }
    getPosicion(posicion){
        this.longitud         = posicion.coords.longitude; 
        this.latitud          = posicion.coords.latitude;  
        this.precision        = posicion.coords.accuracy;
        this.altitud          = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo            = posicion.coords.heading;
        this.velocidad        = posicion.coords.speed;       
    }
    getLongitud() {
        return this.longitud;
    }
    getLatitud() {
        return this.latitud;
    }
    getAltitud() {
        return this.altitud;
    }
    verTodo() {
        $("#datos").show();
        document.getElementById("1").innerHTML += this.longitud +" grados";
        document.getElementById("2").innerHTML += this.latitud +" grados";
        document.getElementById("3").innerHTML += this.precision +" metros";
        document.getElementById("4").innerHTML += this.altitude +" metros";
        document.getElementById("5").innerHTML += this.precisionAltitud +" metros";
        document.getElementById("6").innerHTML += this.rumbo +" grados";
        document.getElementById("7").innerHTML += this.velocidad +" metros/segundo";
    }
}
var miPosicion = new GeoLocalizacion();