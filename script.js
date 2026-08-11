const mensajes = {
    inicio: [
        "Sistema iniciado. Escaneando señales... Se detecta una presencia que no pasa desapercibida.",
        "Monitoreo activado. La calidad de la señal es especialmente clara cuando se trata de ti.",
        "Conexión establecida. Hay algo en esta frecuencia que captura toda mi atención."
    ],
    frecuencia: [
        "Frecuencia analizada. Mi ritmo cambia cada vez que estás cerca... y no es coincidencia.",
        "Se detecta un aumento claro en la frecuencia cada vez que pienso en ti.",
        "El corazón responde de forma distinta cuando la señal eres tú."
    ],
    saturacion: [
        "Saturación emocional muy elevada. Los niveles suben de forma notable en tu presencia.",
        "Oxigenación óptima. El sistema registra una respuesta intensa y positiva hacia ti.",
        "Valores altos y estables. Esta señal tiene un efecto bastante fuerte."
    ],
    senal: [
        "Transmitiendo en frecuencia prioritaria... Destino: Maryerli Christina.\nMensaje enviado con especial cuidado.",
        "Señal codificada y enviada. Contiene todo lo que no siempre sé cómo decirte en persona.",
        "Modulación completada. Esta transmisión es solo para ti."
    ],
    destino: [
        "Calculando destinos posibles... Prioridad máxima: cualquier lugar, siempre que sea contigo.",
        "Coordenadas detectadas: me da igual el destino, lo importante es compartir el viaje.",
        "Análisis de viaje: se recomienda recorrer el mundo... pero a tu lado."
    ],
    final: [
        "Maryerli Christina,\n\nHay señales que uno reconoce de inmediato, aunque no sepan explicarlas del todo.\n\nEsta página la hice pensando en ti. Quería que vieras un poco de lo que hago, y al mismo tiempo decirte que me gustas, que disfruto hablar contigo y que me encantaría seguir compartiendo momentos... y algún viaje juntos.\n\nEspero que te haya sacado una sonrisa.\n\nCon mucho cariño,\nMichael Alejandro",
        
        "Maryerli Christina,\n\nComo ingeniero puedo medir muchas cosas, pero hay una señal que no necesita instrumentos para notarse.\n\nGracias por existir y por el tiempo que compartimos. Me gustaría que este pequeño monitor te demuestre que hay alguien que te presta verdadera atención.\n\nOjalá algún día recorramos lugares nuevos juntos.\n\nMichael Alejandro"
    ]
};

function obtenerMensajeAleatorio(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
}

function mostrarMensaje(texto) {
    const msg = document.getElementById("message");
    msg.style.opacity = 0;
    setTimeout(() => {
        msg.innerText = texto;
        msg.style.opacity = 1;
    }, 250);
}

function activarOnda() {
    document.getElementById("waveform").classList.add("active");
}

function iniciarMonitoreo() {
    activarOnda();
    document.getElementById("hr").innerText = "82";
    document.getElementById("spo2").innerText = "98";
    document.getElementById("signal").innerText = "14";
    mostrarMensaje(obtenerMensajeAleatorio(mensajes.inicio));
}

function medirFrecuencia() {
    activarOnda();
    document.getElementById("hr").innerText = Math.floor(Math.random() * 20) + 95;
    mostrarMensaje(obtenerMensajeAleatorio(mensajes.frecuencia));
}

function medirSaturacion() {
    document.getElementById("spo2").innerText = Math.floor(Math.random() * 3) + 97;
    mostrarMensaje(obtenerMensajeAleatorio(mensajes.saturacion));
}

function transmitirSenal() {
    document.getElementById("signal").innerText = Math.floor(Math.random() * 10) + 18;
    mostrarMensaje(obtenerMensajeAleatorio(mensajes.senal));
}

function calcularDistancia() {
    mostrarMensaje(obtenerMensajeAleatorio(mensajes.destino));
}

function mensajeFinal() {
    document.getElementById("hr").innerText = "∞";
    document.getElementById("spo2").innerText = "100";
    document.getElementById("signal").innerText = "MAX";
    mostrarMensaje(obtenerMensajeAleatorio(mensajes.final));
}

function enviarReaccion() {
    const texto = document.getElementById("reaccion").value.trim();
    const respuesta = document.getElementById("respuestaReaccion");

    if (texto === "") {
        respuesta.innerText = "Escribe algo primero.";
        respuesta.style.color = "#ff6b6b";
        return;
    }

    navigator.clipboard.writeText(texto).then(() => {
        respuesta.innerText = "✅ Texto copiado. Ahora pégaselo a Michael por WhatsApp o chat.";
        respuesta.style.color = "#00ff9d";
    }).catch(() => {
        respuesta.innerText = "Copia el texto manualmente y envíaselo a Michael.";
        respuesta.style.color = "#ffcc00";
    });
}
