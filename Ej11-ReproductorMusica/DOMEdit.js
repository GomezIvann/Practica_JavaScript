"use strict";
class DOMEdit {
    constructor() {
        this.section=null;
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
    eliminarElemento(id){
        document.getElementById(id).remove();
    }
    habilitarElemento(id){
        document.getElementById(id).disabled=false;
    }
}