"use strict";
class ConversorMonedas {
    constructor(){
        this.endpoint = "live";
        this.apikey = "eaac1a0705a0d25e6c44fe5a6791da56";
        this.url = "http://www.apilayer.net/api/"+this.endpoint+"?access_key="+this.apikey+"&currencies=AUD,CHF,GBP,JPY,PLN";
        this.conversiones = this.conversion();
        this.euroToUsd = 1.10;
    }
    /**
     * La API nos da la conversion de USD a cualquier otra moneda 
     * (no la hay directa de EURO a la divisa que fuere ya que es de pago)
     */
    conversion() {
        var cambioDivisas = new Array();
        $.ajax({
            dataType: "jsonp",
            url: this.url,
            success: function(datos) {
                    cambioDivisas[0] = datos.quotes.USDAUD;
                    cambioDivisas[1] = datos.quotes.USDCHF;
                    cambioDivisas[2] = datos.quotes.USDGBP;
                    cambioDivisas[3] = datos.quotes.USDJPY;
                    cambioDivisas[4] = datos.quotes.USDPLN;
                },
            error: function(){
                    $("#resultado").val("ERROR EN LA CONVERSIÓN.");
                }
        });
        return cambioDivisas;
    }
    convertTo(currency) {
        var valorIntroducido = $("#cantidadEntrada").val();
        if ( !isNaN(valorIntroducido) ) {
            var result = this.conversiones[currency] * parseFloat(valorIntroducido) * this.euroToUsd; // 1 euro = 1,10 usd
            $("#resultado").val(result.toFixed(2));
        }
        else
            $("#resultado").val("Entrada no válida.");
    }
}
var conversor = new ConversorMonedas();
