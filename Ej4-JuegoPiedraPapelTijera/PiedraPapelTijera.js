"use strict";
class Modelo {
    constructor() {
        this.puntuacion = 0;
        this.jugada = "";
        this.ganador = false;
    }
    gana(){
        this.puntuacion++;
        if (this.puntuacion == 5)
            this.ganador = true;
    }
    pierde(){
        if (this.puntuacion > 0)
            this.puntuacion--;
    }
    getEleccion(){
        return this.jugada;
    }
    eleccion(){}
    getPuntuacion(){}
}
class Jugador extends Modelo {
    constructor() {
        super();
    }
    eleccion(){
        return this.jugada;
    }
    getPuntuacion(){
        return "Jugador: "+ this.puntuacion +" puntos";
    }
}
class Computadora extends Modelo {
    constructor() {
        super();
    }
    eleccion() {
        var random = Math.random();
        if (random < 0.34)
            this.jugada = "piedra";
        else if (random <= 0.67)
            this.jugada = "papel";
        else
            this.jugada = "tijera";
        return this.jugada;
    }
    getPuntuacion(){
        return "Computadora: "+ this.puntuacion +" puntos";
    }
}
class Juego {
    constructor() {
        this.jugador = new Jugador();
        this.computadora = new Computadora();
    }
    comparar() {
        var eJugador = this.jugador.eleccion();
        var eComputadora = this.computadora.eleccion();
        var resultado = "";

        if (eJugador == eComputadora)
            resultado = "¡Empate!";
        else if (eJugador == "piedra") {
            if (eComputadora == "tijera") {
                this.jugador.gana();
                this.computadora.pierde();
                resultado = "Piedra gana";

            } else {
                this.jugador.pierde();
                this.computadora.gana();
                resultado = "Papel gana";
            }
        }
        else if (eJugador == "papel") {
            if (eComputadora == "piedra") {
                this.jugador.gana();
                this.computadora.pierde();
                resultado = "Papel gana";

            } else {
                this.jugador.pierde();
                this.computadora.gana();
                resultado = "Tijera gana";
            }
        }
        else if (eJugador == "tijera") {
            if (eComputadora == "piedra") {
                this.jugador.pierde();
                this.computadora.gana();
                resultado = "Piedra gana";

            } else {
                this.jugador.gana();
                this.computadora.pierde();
                resultado = "Tijera gana";
            }
        }

        return resultado;
    }
    resultado() {
        document.getElementById("resultado").value = this.comparar();
        document.getElementById("imgJugador").src= "multimedia/"+this.jugador.getEleccion()+".png";
        document.getElementById("imgComputadora").src= "multimedia/"+this.computadora.getEleccion()+".png";
        document.getElementById("jugador").innerHTML = this.jugador.getPuntuacion();
        document.getElementById("computadora").innerHTML = this.computadora.getPuntuacion();

        // Comprobar si hay un ganador (primero en llegar a 5)
        if (this.jugador.ganador){
            document.getElementById("resultado").value += ", ¡has ganado!";
            this.reiniciarJuego();
        }
        else if (this.computadora.ganador){
            document.getElementById("resultado").value += ", has perdido...";
            this.reiniciarJuego();
        }
    }
    reiniciarJuego() {
        this.jugador = new Jugador();
        this.computadora = new Computadora();
    }
    pulsa(eleccion){
        this.jugador.jugada = eleccion;
        this.resultado();
    }
}
var juego = new Juego();