"use strict";
class CalculadoraBasica {
    constructor() {
        this.memory = "";
    }
    evaluate(newExpression) {
        try {
            if ( newExpression != "" )
                return eval(newExpression);
            return "";
        } catch (err) {
            document.getElementById("expression").value = "Syntax ERROR";
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
                // sin Number() interpretaría this.memory como un string
                this.memory = Number(this.memory) + eval(x); 
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