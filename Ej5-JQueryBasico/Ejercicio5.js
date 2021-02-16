"use strict";
class Titulo {
    constructor () {
        this.numero = 1;
    }
    mostrar(){
        $("#tituloOcultable").show();
    }
    ocultar(){
        $("#tituloOcultable").hide();
    }
    modificar() {     
        $("#tituloModificable").text($("#campoTitulo").val());
    }
    añadir() {
        var nuevo = $("<h3 id="+this.numero+"></h3>").text("Título "+this.numero+" creado");
        this.numero++;
        $("#añadirTitulo").before(nuevo);
    }
    borrar(numero) {
        $("#"+$("#tituloABorrar").val()).remove();
    }
    mostrarInformacion(){
        $("*", document.body).each(function() {
            var etiquetaPadre = $(this).parent().get(0).tagName;
            $(this).prepend(document.createTextNode( "Etiqueta padre : <"  + etiquetaPadre + "> elemento : <" + $(this).get(0).tagName +"> valor: "));
        });
    }
}
class Operacion {
    calcular() {
        var resultado = 0;
        $("table tr td").each(function() {
            var celda = $.trim($(this).text());
            resultado += parseInt(celda);
        });
        $("#resultado").val(resultado);
    }
}
var operacion = new Operacion();
var titulo = new Titulo();