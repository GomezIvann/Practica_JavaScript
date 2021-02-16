"use strict";
class Meteo {
    constructor(){
        this.apikey = "9b58df566c80dac8e49b385dac921e81";
        this.ciudades = ["Madrid", "Sevilla", "Gijón", "Barcelona", "Bilbao", "Valencia"];
        this.codigoPais = "ES";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.url = "";
        this.correcto = "¡Todo correcto! JSON recibido de <a href='http://openweathermap.org'>OpenWeatherMap</a>";
    }
    cargarDatos() {
        for (var i = 0; i < this.ciudades.length; i++) {
            this.cambiarUrl(this.ciudades[i]);
            this.cargarDatosCiudad();
        }
    }
    cambiarUrl(ciudad) {
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;
    }
    cargarDatosCiudad() {
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(datos) {
                    var stringDatos = "<h3>" + datos.name + "</h3>";
                        stringDatos += "<ul><li>País: " + datos.sys.country + "</li>";
                        stringDatos += "<li>Latitud: " + datos.coord.lat + " grados</li>";
                        stringDatos += "<li>Longitud: " + datos.coord.lon + " grados</li>";
                        stringDatos += "<li>Temperatura: " + datos.main.temp + " grados Celsius</li>";
                        stringDatos += "<li>Temperatura máxima: " + datos.main.temp_max + " grados Celsius</li>";
                        stringDatos += "<li>Temperatura mínima: " + datos.main.temp_min + " grados Celsius</li>";
                        stringDatos += "<li>Presión: " + datos.main.pressure + " milibares</li>";
                        stringDatos += "<li>Humedad: " + datos.main.humidity + " %</li>";
                        stringDatos += "<li>Amanece a las: " + new Date(datos.sys.sunrise *1000).toLocaleTimeString() + "</li>";
                        stringDatos += "<li>Oscurece a las: " + new Date(datos.sys.sunset *1000).toLocaleTimeString() + "</li>";
                        stringDatos += "<li>Dirección del viento: " + datos.wind.deg + " grados</li>";
                        stringDatos += "<li>Velocidad del viento: " + datos.wind.speed + " metros/segundo</li>";
                        stringDatos += "<li>Hora de la medida: " + new Date(datos.dt *1000).toLocaleTimeString() + "</li>";
                        stringDatos += "<li>Fecha de la medida: " + new Date(datos.dt *1000).toLocaleDateString() + "</li>";
                        stringDatos += "<li>Descripción: " + datos.weather[0].description + "</li>";
                        stringDatos += "<li>Visibilidad: " + datos.visibility + " metros</li>";
                        stringDatos += "<li>Nubosidad: " + datos.clouds.all + " %</li></ul>";
                        stringDatos += "<img src=http://openweathermap.org/img/w/" + datos.weather[0].icon + ".png />"
                    
                    $("p").append(stringDatos);
                },
            error: function(){
                    $("h3").html("¡Tenemos problemas! No se pudo obtener el JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>");
                    $("h2").remove();
                    $("p").remove();
                }
        });
    }
    crearElemento(tipoElemento, texto, insertarAntesDe){
        var elemento = document.createElement(tipoElemento); 
        elemento.innerHTML = texto;
        $(insertarAntesDe).before(elemento);
    }
    verDatosMeteorologicos(){
        this.crearElemento("h2","Información de las ciudades","footer");
        this.crearElemento("p","","footer");
        this.cargarDatos();
        $("input").attr("type","hidden"); // Ocultamos el boton
    }
}
var meteo = new Meteo();
