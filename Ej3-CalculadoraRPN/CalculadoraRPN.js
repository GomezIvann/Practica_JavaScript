"use strict";
class Pila { 
    constructor (){ 
        this.pila = new Array();
    }
    apilar(valor){
        this.pila.push(valor);
    }
    desapilar(){
        return this.pila.pop();
    }
    tamaño(){
        return this.pila.length;
    }
}
class CalculadoraRPN {
    constructor() {
        this.pila = new Pila();
    }
    write(exp) {
        document.getElementById("expresion").value += exp;
    }
    numeroPi() {
        document.getElementById("expresion").value += Math.PI;
    }
    delete() {
        document.getElementById("expresion").value = "";
    }
    enter() {
        var x = parseFloat(document.getElementById("expresion").value);
        document.getElementById("expresion").value = "";
        this.pila.apilar(x);
    }
    deleteAll() {
        this.pila = new Pila();
        this.delete();
    }
    /**
     * OPERACIONES DE DOS NUMEROS: 
     *      - expresion pantalla + numero apilado
     *      - dos numeros apilados si no hay nada en pantalla
     */
    sumar() {
        var exp = document.getElementById("expresion").value;
        if ( this.pila.tamaño() >= 1 && exp != "" ) { 
            var x = this.pila.desapilar();  
            x += parseFloat(exp);
            document.getElementById("expresion").value = x;
            this.pila.apilar(x);
        }
        else if ( this.pila.tamaño() >= 2 ) {
            var x = this.pila.desapilar();  
            x += this.pila.desapilar();
            document.getElementById("expresion").value = x;
            this.pila.apilar(x);
        }
    }
    restar() {
        var exp = document.getElementById("expresion").value;
        if ( this.pila.tamaño() >= 1 && exp != "" ) {
            var x = this.pila.desapilar();  
            var y = parseFloat(exp);
            document.getElementById("expresion").value = x-y;
            this.pila.apilar(x-y);
        }
        else if ( this.pila.tamaño() >= 2 ) {
            var x = this.pila.desapilar();  
            var y = this.pila.desapilar();
            document.getElementById("expresion").value = y-x;
            this.pila.apilar(y-x);
        }
    }
    multiplicar() {
        var exp = document.getElementById("expresion").value;
        if ( this.pila.tamaño() >= 1 && exp != "" ) {
            var x = this.pila.desapilar();  
            x *= parseFloat(exp);
            document.getElementById("expresion").value = x;
            this.pila.apilar(x);
        }
        else if ( this.pila.tamaño() >= 2 ) {
            var x = this.pila.desapilar();  
            x *= this.pila.desapilar();
            document.getElementById("expresion").value = x;
            this.pila.apilar(x);
        }
    }
    dividir() {
        var exp = document.getElementById("expresion").value;
        if ( this.pila.tamaño() >= 1 && exp != "" ) {
            var x = this.pila.desapilar();  
            var y = parseFloat(exp);
            document.getElementById("expresion").value = x/y;
            this.pila.apilar(x/y);
        }
        else if ( this.pila.tamaño() >= 2 ) {
            var x = this.pila.desapilar();  
            var y = this.pila.desapilar();
            document.getElementById("expresion").value = y/x;
            this.pila.apilar(y/x);
        }
    }
    exponenteN() {
        var exp = document.getElementById("expresion").value;
        if ( this.pila.tamaño() >= 1 && exp != "" ) {
            var x = this.pila.desapilar();  
            var y = parseFloat(exp);
            document.getElementById("expresion").value = x**y;
            this.pila.apilar(x**y);
        }
        else if ( this.pila.tamaño() >= 2 ) {
            var x = this.pila.desapilar();  
            var y = this.pila.desapilar();
            document.getElementById("expresion").value = y**x;
            this.pila.apilar(y**x);
        }
    }
    exponente10() {
        var exp = document.getElementById("expresion").value;
        if ( this.pila.tamaño() >= 1 && exp != "" ) {
            var x = this.pila.desapilar();  
            var y = parseFloat(exp);
            document.getElementById("expresion").value = x*(10**y);
            this.pila.apilar(x*(10**y));
        }
        else if ( this.pila.tamaño() >= 2 ) {
            var x = this.pila.desapilar();  
            var y = this.pila.desapilar();
            document.getElementById("expresion").value = y*(10**x);
            this.pila.apilar(y*(10**x));
        }
    }
    modulo() {
        var exp = document.getElementById("expresion").value;
        if ( this.pila.tamaño() >= 1 && exp != "" ) {
            var x = this.pila.desapilar();  
            var y = parseFloat(exp);
            document.getElementById("expresion").value = x%y;
            this.pila.apilar(x%y);
        }
        else if ( this.pila.tamaño() >= 2 ) {
            var x = this.pila.desapilar();  
            var y = this.pila.desapilar();
            document.getElementById("expresion").value = y%x;
            this.pila.apilar(y%x);
        }
    }
    /**
     * OPERACIONES DE UN NUMEROS: 
     *      - expresion pantalla
     *      - numero apilado
     */
    negar() {
        var exp = document.getElementById("expresion").value;
        if ( exp != "" && exp != 0 ) {
            exp = "-"+exp;
            exp = exp.replace("--","");
            document.getElementById("expresion").value = exp;
            this.pila.apilar(parseFloat(document.getElementById("expresion").value));
        }
        else if ( this.pila.tamaño() >= 1 && exp == "" ) {
            var x = 0-this.pila.desapilar();
            document.getElementById("expresion").value = x;
            this.pila.apilar(x);
        }   
    }
    factorial() {
        var exp = document.getElementById("expresion").value;
        if ( exp != "" ) {
            var n = parseFloat(exp);
            if ( n < 0 )
                document.getElementById("expresion").value = "Math ERROR";
            else {
                document.getElementById("expresion").value = this.factorialRec(n);
                this.pila.apilar(this.factorialRec(n));
            }
        }
        else if ( this.pila.tamaño() >= 1 && exp == "" ) {
            var x = this.pila.desapilar();
            if ( n < 0 )
                document.getElementById("expresion").value = "Math ERROR";
            else {
                document.getElementById("expresion").value = this.factorialRec(x);
                this.pila.apilar(x);
            }
        } 
    }
    factorialRec(n) {
        if ( n == 0 ) 
            return 1;
        if ( n > 1 )
            return n*this.factorialRec(n-1);
        else
            return n;
    }
    raiz() {
        var exp = document.getElementById("expresion").value;
        if ( exp != "" ) {
            var n = parseFloat(exp);
            if ( n < 0 )
                document.getElementById("expresion").value = "Math ERROR";
            else {
                document.getElementById("expresion").value = Math.sqrt(n);
                this.pila.apilar(Math.sqrt(n));
            }
        }
        else if ( this.pila.tamaño() >= 1 && exp == "" ) {
            var x = this.pila.desapilar();
            if ( x < 0 )
                document.getElementById("expresion").value = "Math ERROR";
            else {
                document.getElementById("expresion").value = Math.sqrt(x);
                this.pila.apilar(Math.sqrt(x));
            }
        }  
    }
    cuadrado() {
        var exp = document.getElementById("expresion").value;
        if ( exp != "" ) {
            var n = parseFloat(exp);
            document.getElementById("expresion").value = Math.pow(n,2);
            this.pila.apilar(Math.pow(n,2));
        }
        else if ( this.pila.tamaño() >= 1 && exp == "" ) {
            var x = Math.pow(this.pila.desapilar(),2);
            document.getElementById("expresion").value = x;
            this.pila.apilar(x);
        } 
    }
    potencia10() {
        var exp = document.getElementById("expresion").value;
        if ( exp != "" ) {
            var n = parseFloat(exp);
            document.getElementById("expresion").value = Math.pow(10,n);
            this.pila.apilar(Math.pow(10,n));
        }
        else if ( this.pila.tamaño() >= 1 && exp == "" ) {
            var x = Math.pow(10, this.pila.desapilar());
            document.getElementById("expresion").value = x;
            this.pila.apilar(x);
        }
    }
    logaritmo() {
        var exp = document.getElementById("expresion").value;
        if ( exp != "" ) {
            var n = parseFloat(exp);
            if ( n <= 0 )
                document.getElementById("expresion").value = "Math ERROR";
            else {
                document.getElementById("expresion").value = Math.log(n);
                this.pila.apilar(Math.log(n));
            }
        }
        else if ( this.pila.tamaño() >= 1 && exp == "" ) {
            var x = this.pila.desapilar();
            if ( x <= 0 )
                document.getElementById("expresion").value = "Math ERROR";
            else {
                document.getElementById("expresion").value = Math.log(x);
                this.pila.apilar(Math.log(x));
            }
        }
    }
    seno() {
        var exp = document.getElementById("expresion").value;
        if ( exp != "" ) {
            var n = parseFloat(exp);
            document.getElementById("expresion").value = Math.sin(n);
            this.pila.apilar(Math.sin(n));
        }
        else if ( this.pila.tamaño() >= 1 && exp == "" ) {
            var x = Math.sin(this.pila.desapilar());
            document.getElementById("expresion").value = x;
            this.pila.apilar(x);
        } 
    }
    coseno() {
        var exp = document.getElementById("expresion").value;
        if ( exp != "" ) {
            var n = parseFloat(exp);
            document.getElementById("expresion").value = Math.cos(n);
            this.pila.apilar(Math.cos(n));
        }
        else if ( this.pila.tamaño() >= 1 && exp == "" ) {
            var x = Math.cos(this.pila.desapilar());
            document.getElementById("expresion").value = x;
            this.pila.apilar(x);
        }
    }
    tangente() {
        var exp = document.getElementById("expresion").value;
        if ( exp != "" ) {
            var n = parseFloat(exp);
            document.getElementById("expresion").value = Math.tan(n);
            this.pila.apilar(Math.tan(n));
        }
        else if ( this.pila.tamaño() >= 1 && exp == "" ) {
            var x = Math.tan(this.pila.desapilar());
            document.getElementById("expresion").value = x;
            this.pila.apilar(x);
        }
    }
}
var calculadora = new CalculadoraRPN();