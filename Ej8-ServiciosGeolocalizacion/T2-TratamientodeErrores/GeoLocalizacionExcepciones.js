"use strict";
class GeoLocalizacion {
    constructor (){
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this), this.verErrores.bind(this));
    }
    getPosicion(posicion){
        this.mensaje = "Se ha realizado correctamente la petición de geolocalización.";
        this.longitud         = posicion.coords.longitude; 
        this.latitud          = posicion.coords.latitude;  
        this.precision        = posicion.coords.accuracy;
        this.altitud          = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo            = posicion.coords.heading;
        this.velocidad        = posicion.coords.speed;       
    }
    verErrores(error){
        switch(error.code) {
        case error.PERMISSION_DENIED:
            this.mensaje = "El usuario no permite la petición de geolocalización."
            break;
        case error.POSITION_UNAVAILABLE:
            this.mensaje = "Información de geolocalización no disponible."
            break;
        case error.TIMEOUT:
            this.mensaje = "La petición de geolocalización ha caducado."
            break;
        case error.UNKNOWN_ERROR:
            this.mensaje = "Se ha producido un error desconocido."
            break;
        }
    }
    getLongitud(){
        return this.longitud;
    }
    getLatitud(){
        return this.latitud;
    }
    getAltitud(){
        return this.altitud;
    }
    verTodo(dondeVerlo){
        $("#datos").show();
        document.getElementById("0").innerHTML += this.mensaje;
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