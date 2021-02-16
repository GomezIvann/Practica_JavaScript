"use strict";
class DragAndDrop {
    constructor() {
        this.htmlEdit = new DOMEdit();
    }
    /**
     * Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, 
     * es decir, puede ser llamado de nuevo.
     */
    allowDrop(ev) {
        ev.preventDefault();
    }
    handleDrop(ev) {
        // Evita la propagación adicional del evento actual en las fases de captura y bubbling.
        ev.stopPropagation();
        ev.preventDefault();

        var archivo = ev.dataTransfer.files[0];
        this.htmlEdit.eliminarElemento("soltarArchivo");
    
        this.leerArchivo(archivo);
        this.referenciarAudioArchivo(archivo);
    }
	leerArchivo(archivo) {
        var propiedades = "Nombre: " + archivo.name
        + " (" + archivo.size/1000 + " KB)";
        this.htmlEdit.crearHijoElemento("li",propiedades, document.getElementById("audioContenedor"));
    }
    referenciarAudioArchivo(archivo) {
        var tipoAudio = /audio.*/;

        // si es un archivo de audio...
        if (archivo.type.match(tipoAudio)) {
            var audio=document.getElementById("archivoAudio");
            audio.src=archivo.name;

            // habilitamos los controles
            this.htmlEdit.habilitarElemento("reproducir");
            this.htmlEdit.habilitarElemento("reiniciar");
            this.htmlEdit.habilitarElemento("retroceder");
            this.htmlEdit.habilitarElemento("avanzar");
        }
    }
}  
var dad = new DragAndDrop();