"use strict";
class Calculadora {
    constructor() {
        this.memory = "";
    }
    evaluate() {
        var x = document.getElementById("expression").value;
        if ( x != "" ) {
            try { 
                document.getElementById("expression").value = eval(x);
            }
            catch(err) {
                document.getElementById("expression").value = "Syntax ERROR";
            }
        }
    }
    write(exp) {
        if (document.getElementById("expression").value == "Syntax ERROR") 
            document.getElementById("expression").value = "";
        
        document.getElementById("expression").value += exp;
    }
    deleteAll() {
        document.getElementById("expression").value = "";
    }
    sumMemory() {
        var x = document.getElementById("expression").value;
        if ( x != "" ) {
            try {
                this.memory = Number(this.memory) + eval(x); 
                // sin Number() interpretaría this.memory como un string
                document.getElementById("expression").value = "";
            }
            catch(err) {
                 document.getElementById("expression").value = "Syntax ERROR";
            }
        }
    }
    subMemory() {
        var x = document.getElementById("expression").value;
        if ( x != "" ) {
            try {
                this.memory -= eval(x);
                document.getElementById("expression").value = "";
            }
            catch(err) {
                 document.getElementById("expression").value = "Syntax ERROR";
            }
        }
    }
    showMemory() {
        document.getElementById("expression").value += this.memory;
    }
}
var calculadora = new Calculadora();