"use strict";
class Calculadora extends CalculadoraBasica {
    constructor(){
        super();
    }
    deleteMemory() {
        this.memory = "";
    }
    storeInMemory() {
        var n = this.evaluate();
        var pantalla = document.getElementById("expression").value;
        if ( (n != "" || n == "0") && pantalla != "Syntax ERROR" ) {
            this.memory = n;
            document.getElementById("expression").value = "";
        }
    }
    delete() {
        var newLength = document.getElementById("expression").value.length-1;
        var newExpression = document.getElementById("expression").value.slice(0, newLength);
        document.getElementById("expression").value = newExpression;
    }
    minus() {
        var n = this.evaluate();
        var pantalla = document.getElementById("expression").value;
        if ( (n != "" || n == "0") &&  pantalla != "Syntax ERROR" ){
            document.getElementById("expression").value = "-"+n;
            document.getElementById("expression").value = this.evaluate();
        }
    }
    squareRoot() {
        var n = this.evaluate();
        var pantalla = document.getElementById("expression").value;
        if ( (n != "" || n == "0") && pantalla != "Syntax ERROR" ) {
            if ( n < 0 )
                document.getElementById("expression").value = "Math ERROR";
            else
                document.getElementById("expression").value = Math.sqrt(n);
        }
    }
    logarithm() {
        var n = this.evaluate();
        var pantalla = document.getElementById("expression").value;
        if ( (n != "" || n == "0") && pantalla != "Syntax ERROR" ) {
            if ( n <= 0 )
                document.getElementById("expression").value = "Math ERROR";
            else
                document.getElementById("expression").value = Math.log(n);
        }
    }
    factorial() {
        var n = this.evaluate();
        var pantalla = document.getElementById("expression").value;
        if ( (n != "" || n == "0") && pantalla != "Syntax ERROR" ) {
            if ( n < 0 )
                document.getElementById("expression").value = "Math ERROR";
            else
                document.getElementById("expression").value = this.factorialR(n);
        }
    }
    factorialR(n) {
        if ( n == 0 ) 
            return 1;
        if ( n > 1 )
            return n*this.factorialR(n-1);
        else
            return n;
    }
    square() {
        var n = this.evaluate();
        var pantalla = document.getElementById("expression").value;
        if ( (n != "" || n == "0") && pantalla != "Syntax ERROR" )
            document.getElementById("expression").value = Math.pow(n, 2);
    }
    sine() {
        var n = this.evaluate();
        var pantalla = document.getElementById("expression").value;
        if ( (n != "" || n == "0") && pantalla != "Syntax ERROR" )
            document.getElementById("expression").value = Math.sin(n);
    }
    cosine() {
        var n = this.evaluate();
        var pantalla = document.getElementById("expression").value;
        if ( (n != "" || n == "0") && pantalla != "Syntax ERROR" )
            document.getElementById("expression").value = Math.cos(n);
    }
    tangent() {
        var n = this.evaluate();
        var pantalla = document.getElementById("expression").value;
        if ( (n != "" || n == "0") && pantalla != "Syntax ERROR" ) 
            document.getElementById("expression").value = Math.tan(n);
    }
    power10() {
        var n = this.evaluate();
        var pantalla = document.getElementById("expression").value;
        if ( (n != "" || n == "0") && pantalla != "Syntax ERROR" )
            document.getElementById("expression").value = Math.pow(10, n);
    }
    exponent10() {
        var n = this.evaluate();
        var pantalla = document.getElementById("expression").value;
        if ( (n != "" || n == "0") && pantalla != "Syntax ERROR" )
            document.getElementById("expression").value = n+"e0";
    }
    trunc() {
        var n = this.evaluate();
        var pantalla = document.getElementById("expression").value;
        if ( (n != "" || n == "0") && pantalla != "Syntax ERROR" )
            document.getElementById("expression").value = Math.trunc(n);
    }
    equal() {
        var n = this.evaluate();
        var pantalla = document.getElementById("expression").value;
        // si no hubo ningun error al evaluar y la pantalla no esta vacía...
        // sin n == "0" si al evaluar da 0 o el usuario escribe solo 0 no entraría porque 0 == "" es true
        if ( (n != "" || n == "0") && pantalla != "Syntax ERROR" ) 
            document.getElementById("expression").value = n;
    }
    evaluate() {
        var newExpression = document.getElementById("expression").value;
        // expresion regular: /cadena/g -> todas las apariciones en el string de cadena
        newExpression = newExpression.replace(/÷/g,"/");
        newExpression = newExpression.replace(/x/g,"*");
        newExpression = newExpression.replace(/--/g,"+");
        newExpression = newExpression.replace(/π/g,Math.PI);
        newExpression = newExpression.replace(/mod/g,"%");
        return super.evaluate(newExpression);
    }
}
var calculadora = new Calculadora();