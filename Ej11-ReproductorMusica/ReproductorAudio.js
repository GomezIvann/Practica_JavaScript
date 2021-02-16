"use strict";
class ReproductorAudio {
    actualizarBarraProgreso() {
        var archivoAudio = document.getElementById("archivoAudio");
        // tiempo actual de reproduccion
        var tiempoActual = Math.round(archivoAudio.currentTime);
        // actualizamos la barra de progreso (el canvas)
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");
            // primero limpiamos el canvas
            ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
            ctx.fillStyle = "rgb(160,21,21)";
            var anchoBarra = (tiempoActual / archivoAudio.duration) * (canvas.clientWidth);
            if (anchoBarra > 0)
                ctx.fillRect(0, 0, anchoBarra, canvas.clientHeight);
        }
        // si el audio finaliza la reproduccion, cambiamos el boton a play
        if (archivoAudio.ended) {
            var btn = document.getElementById("reproducir");
            btn.innerHTML = "▶";
        }
    }
    reproducir() {
        try {
            // usamos el mismo boton para reproducir y para parar el audio
            // (dependiendo del estado)
            var archivoAudio = document.getElementById("archivoAudio");
            var btn = document.getElementById("reproducir");
            if (archivoAudio.paused) {
                archivoAudio.play();
                btn.innerHTML = "❚❚";
            } else {
                archivoAudio.pause();
            }
        } catch (e) { 
            // play y pause son funciones que suelen fallar (ajenas a nuestro programa)
            console.error(e);
        }
    }
    avanzar() {
        var archivoAudio = document.getElementById("archivoAudio");
        archivoAudio.currentTime += 10.0;
    }
    retroceder() {
        var archivoAudio = document.getElementById("archivoAudio");
        archivoAudio.currentTime -= 10.0;
    }
    reiniciar(){
        var archivoAudio = document.getElementById("archivoAudio");
        archivoAudio.currentTime = 0;
    }
    /**
     * Añadimos los eventos:
     *  1) actualizar barra
     *  2) click en el canvas, actualiza la reproduccion del audio al instante donde pulsa
     * La barra de progreso del audio está en constante actualización
     */
    iniciarEventos() {
        var canvas = document.getElementById("canvas");
        var archivoAudio = document.getElementById("archivoAudio");

        // evento de update currentTime
        // saber mas timeupdate: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/timeupdate_event
        archivoAudio.addEventListener("timeupdate", reproductor.actualizarBarraProgreso, true);

        // evento de tipo click en la barra de progreso, esta avanza o retrocede en funcion de donde 
        // pulso el usuario
        canvas.addEventListener("click", function (e) {
            var canvas = document.getElementById("canvas");
            var archivoAudio = document.getElementById("archivoAudio");
            // obtén el ultimo evento de window (si no esta definido aun)
            if (!e)
                e = window.event;
                
            // calcular el tiempo actual de reproduccion en funcion del click
            // e.offsetX pos. click usuario
            archivoAudio.currentTime = archivoAudio.duration * (e.offsetX / canvas.clientWidth);
        }, true);
    }
}
var reproductor = new ReproductorAudio();
// Un evento de tipo DOMContentLoaded es disparado uando el documento HTML ha sido completamente cargado y parseado
// saber mas DOMContentLoaded: https://developer.mozilla.org/es/docs/Web/Events/DOMContentLoaded
window.addEventListener("DOMContentLoaded", reproductor.iniciarEventos, false);
