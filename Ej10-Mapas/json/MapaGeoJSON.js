"use strict";
class HtmlDOMEdit {
    constructor() {
        this.section=null;
    }
    nuevoMapa(){
        if (this.section != null)
            this.section.remove();

        this.section = this.crearElemento("section","",document.getElementById("footer"));
        this.crearHijoElemento("h2","Mapa dinámico de tu archivo", this.section); 
        var div = this.crearHijoElemento("div","Mapa", this.section); 
        div.setAttribute("id","mapa");
    }
    crearElemento(etiqueta, contenido, antesDe){
        var e = document.createElement(etiqueta);
        e.innerHTML = contenido;
        document.body.insertBefore(e, antesDe);
        return e;
    }
    crearHijoElemento(etiqueta, contenido, padre){
        var h = document.createElement(etiqueta);
        h.innerHTML = contenido;
        padre.appendChild(h);
        return h;
    }
}
class MapaGeoJSON {
    constructor(){
        this.htmlDom = new HtmlDOMEdit();
    }
    leerGeoJSON(){        
        var geojson = document.getElementById("cargarGeoJSON").files[0];
        // Creamos el mapa en el arbol dom del html
        this.htmlDom.nuevoMapa();

        var mapa = new google.maps.Map(document.getElementById("mapa"));
		mapa.setCenter({ lat: 40.4167, lng: -3.70325 });
		mapa.setZoom(4);
		mapa.setMapTypeId(google.maps.MapTypeId.HYBRID);

        // Solo si es un archivo .GeoJSON
        if (geojson.name.endsWith(".geojson")) {
            var lector = new FileReader();
            lector.readAsText(geojson);
            lector.onload = function (evento) {
				var json = JSON.parse(lector.result);
				mapa.data.addGeoJson(json);
            }
        }
    }
}
var mapaGeoJSON = new MapaGeoJSON();