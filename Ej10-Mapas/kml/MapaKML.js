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
class MapaKML {
    constructor(){
        this.htmlDom = new HtmlDOMEdit();
    }
    leerKml(){        
        var kml = document.getElementById("cargarKML").files[0];

        // Creamos el mapa en el arbol dom del html
        this.htmlDom.nuevoMapa();

        var mapaKml = new google.maps.Map(document.getElementById("mapa"));
		mapaKml.setCenter({ lat: 40.4167, lng: -3.70325 });
		mapaKml.setZoom(4);
        mapaKml.setMapTypeId(google.maps.MapTypeId.HYBRID);
            
        var myParser = new geoXML3.parser({map: mapaKml});

        // Solo si es un archivo .kml
        if (kml.name.endsWith(".kml")) {
            var lector = new FileReader();
            lector.readAsText(kml);
            lector.onload = function (evento) {
				myParser.parseKmlString(lector.result);       
            }
        }
    }
}
var mapaKML = new MapaKML();