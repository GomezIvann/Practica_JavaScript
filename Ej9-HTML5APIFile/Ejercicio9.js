"use strict";
class LectorFicheros {
    constructor (){
        this.section = null;
    }
    soportaApiFile() {
        var pTexto = "";
        var soporta = false;

        if (window.File && window.FileReader && window.FileList && window.Blob){
            soporta = true;
            pTexto="- Este navegador soporta API File.";
        }
        else 
            pTexto="- Este navegador no soporta API File."
                    +" El programa no puede funcionar correctamente.";

        document.getElementById("soporteAPIFile").innerHTML=pTexto;
        return soporta;
    }
    leerArchivos(){
        if (this.soportaApiFile()) {
            var archivos = document.getElementById("cargarArchivos").files;
            var pesoArchivos = 0;
            var n = 0;

            if (this.section != null)
                this.section.remove();
            this.section = this.crearElemento("section","",document.getElementById("footer"));
            this.section.setAttribute("id","section");

            for (var i = 0; i < archivos.length; i++) {
                this.crearHijoElemento("h3","Archivo "+(i+1), this.section); 
                this.propiedadesArchivo(archivos[i]);
                pesoArchivos += archivos[i].size;
                this.mostrarContenido(archivos[i]);
            }
            document.getElementById("seleccionados").innerHTML = archivos.length;
            document.getElementById("size").innerHTML = pesoArchivos/1000 + " KB (" + pesoArchivos+" bytes)";
        }
    }
    /**
     * Solo archivos de texto y json
     */
    mostrarContenido(archivo){
        var tipoTexto = /text.*/;
        var json = /application.json/;
        
        if (archivo.type.match(tipoTexto) || archivo.type.match(json)) {
            var lector = new FileReader();
            this.crearHijoElemento("p", "Contenido del archivo:", this.section);
            
            lector.onload = function (evento) {
                // si la lectura es correcta vuelca el contenido del archivo en la propiedad .result
                var content = document.createElement("pre");
                content.innerHTML = lector.result;
                document.getElementById("section").appendChild(content);
            }
            lector.readAsText(archivo);
        }
        else
            this.crearHijoElemento("p","No es un archivo legible, no se muestra el contenido.", this.section);
    }
	propiedadesArchivo(archivo) {
        this.crearHijoElemento("p", "Propiedades del archivo:", this.section);
        var ul = this.crearHijoElemento("ul","", this.section);
		this.crearHijoElemento("li","Nombre: " + archivo.name, ul);
		this.crearHijoElemento("li","Tamaño: " + archivo.size/1000 + " KB (" + archivo.size +" bytes)", ul);
		this.crearHijoElemento("li","Tipo: " + archivo.type, ul); 
        this.crearHijoElemento("li","Ultima modificación: " + archivo.lastModifiedDate, ul);
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
var lector = new LectorFicheros();