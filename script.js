const mensajes = {
    inicio: [
        "Sistema iniciado. Escaneando señales... Se detecta una presencia especial en el canal prioritario.",
        "Monitoreo activado. La calidad de la señal es excepcionalmente clara.",
        "Conexión establecida. Preparado para recibir e interpretar datos."
    ],
    frecuencia: [
        "Frecuencia analizada. Se observa un patrón interesante cada vez que esta persona está cerca.",
        "Ritmo detectado: variable, pero siempre más acelerado en su presencia.",
        "La frecuencia responde de forma notable ante ciertas señales externas."
    ],
    saturacion: [
        "Saturación emocional elevada. Niveles de interés por encima del promedio habitual.",
        "Oxigenación óptima. El sistema registra una respuesta positiva ante esta interacción.",
        "Valores de saturación estables y altos. Buena recepción de la señal."
    ],
    senal: [
        "Transmitiendo en frecuencia prioritaria... Mensaje codificado con destino: Maryerli Christina.",
        "Señal enviada correctamente. Esperando confirmación de recepción.",
        "Modulación completada. La transmisión contiene datos de alta importancia personal."
    ],
    destino: [
        "Calculando posibles destinos... Prioridad detectada: lugares nuevos, preferiblemente en compañía.",
        "Coordenadas sugeridas: cualquier lugar del mapa, siempre que la compañía sea la adecuada.",
        "Análisis de viaje: se recomienda compartir rutas, paisajes y momentos."
    ],
    final: [
        "Maryerli Christina,\n\nComo ingeniero en telecomunicaciones puedo decirte que hay señales que simplemente destacan sobre el resto.\n\nEsta transmisión fue creada con la intención de que sepas que alguien valora mucho tu presencia.\n\nEspero que este pequeño sistema te haya sacado al menos una sonrisa.\n\nCon cariño,\nMichael Alejandro",
        "Maryerli Christina,\n\nA veces las mejores conexiones no necesitan muchos decibelios, solo la persona correcta al otro lado.\n\nGracias por tomarte el tiempo de interactuar con este monitor.\n\nQue tengas un excelente día.\n\nMichael Alejandro"
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
