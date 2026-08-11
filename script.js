const messages = {
    inicio: "Sistema iniciado. Detectando señales biométricas de Maryerli Christina... Conexión emocional establecida con éxito.",
    
    frecuencia: "Frecuencia cardíaca analizada. Se detecta un ritmo irregular cada vez que pienso en ti. Mi corazón transmite a 128 lpm cuando estás cerca... y no piensa bajar.",
    
    saturacion: "Saturación emocional: 98%. Niveles de dopamina y oxitocina extremadamente elevados. Diagnóstico: Estoy profundamente enamorado de ti, Maryerli.",
    
    senal: "Transmitiendo señal de amor en frecuencia prioritaria...\n\nMensaje recibido: 'Desde el primer día supe que quería recorrer el mundo contigo'. Señal modulada con cariño y amplificada por completo.",
    
    destino: "Calculando próximo destino conjunto...\n\nCoordenadas detectadas: Cualquier lugar del mundo está bien... siempre y cuando sea a tu lado. Prioridad máxima: Viajar juntos.",
    
    final: "Maryerli Christina,\n\nNo soy médico, pero como ingeniero en telecomunicaciones puedo asegurarte algo: la señal que generas en mí es la más fuerte, clara y hermosa que he recibido en mi vida.\n\nQuiero ser el hombre que viaje contigo, que te apoye en tus noches de estudio y turnos, y que construya una vida a tu lado.\n\nEsta transmisión no tiene fecha de caducidad.\n\nCon todo mi corazón,\nMichael Alejandro"
};

function mostrarMensaje(texto) {
    const msg = document.getElementById("message");
    msg.style.opacity = 0;
    
    setTimeout(() => {
        msg.innerText = texto;
        msg.style.opacity = 1;
    }, 300);
}

function activarOnda() {
    document.getElementById("waveform").classList.add("active");
}

function iniciarMonitoreo() {
    activarOnda();
    document.getElementById("hr").innerText = "86";
    document.getElementById("spo2").innerText = "99";
    document.getElementById("signal").innerText = "12";
    mostrarMensaje(messages.inicio);
}

function medirFrecuencia() {
    activarOnda();
    document.getElementById("hr").innerText = "128";
    mostrarMensaje(messages.frecuencia);
}

function medirSaturacion() {
    document.getElementById("spo2").innerText = "98";
    mostrarMensaje(messages.saturacion);
}

function transmitirSenal() {
    document.getElementById("signal").innerText = "24";
    mostrarMensaje(messages.senal);
}

function calcularDistancia() {
    mostrarMensaje(messages.destino);
}

function mensajeFinal() {
    document.getElementById("hr").innerText = "∞";
    document.getElementById("spo2").innerText = "100";
    document.getElementById("signal").innerText = "MAX";
    mostrarMensaje(messages.final);
}