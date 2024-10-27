const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Palabras clave y respuestas
const responses = {
    "hola": "¡Hola! ¿En qué puedo ayudarte?",
    "ok gracias": "¡Aquí estaré para ayudarte en todo momento!",
    "cambio de turno": `
        <strong>Requisitos:</strong>
        <ul>
            <li>Copia de DNI.</li>
            <li>Copia de boleta de notas del último semestre.</li>
        </ul>
        <strong>Procedimiento:</strong>
        <ol>
            <li>Identifica en nuestra tabla del TUPA el trámite que deseas realizar y verifica el costo asociado.</li>
            <li>Realiza el pago en el Banco de la Nación – N° CTA. CTE. 00000-288926 – IESTP “Antenor Orrego Espinoza”.</li>
            <li>Acércate a la oficina de tesorería con el voucher original y las copias requeridas.</li>
            <li>Presenta un F.U.T. debidamente llenado al área de secretaria académica.</li>
        </ol>
        <strong>NOTA:</strong> No cancelar hasta que la solicitud esté aprobada.
    `,
    "carta de presentación": `
        <strong>Requisitos:</strong>
        <ul>
            <li>Copia de DNI.</li>
        </ul>
        <strong>Procedimiento:</strong>
        <ol>
            <li>Identifica el trámite en el TUPA y verifica el costo.</li>
            <li>Realiza el pago en el Banco de la Nación.</li>
            <li>Acércate a tesorería con los documentos necesarios.</li>
            <li>Presenta un F.U.T. debidamente llenado con los requisitos.</li>
        </ol>
        <strong>El FUT debe incluir:</strong>
        <ul>
            <li>Nombre de la empresa o institución.</li>
            <li>Nombre de la máxima autoridad y cargo.</li>
        </ul>
    `,
    "certificado modular": `
        <strong>Requisitos:</strong>
        <ul>
            <li>Copia de DNI.</li>
            <li>Copia de boleta de notas.</li>
            <li>Presentar carpeta de prácticas.</li>
            <li>02 fotos tamaño pasaporte en fondo blanco.</li>
        </ul>
        <strong>Procedimiento:</strong>
        <ol>
            <li>Identifica el trámite en el TUPA y verifica el costo.</li>
            <li>Realiza el pago en el Banco de la Nación.</li>
            <li>Acércate a tesorería con los documentos necesarios.</li>
            <li>Presenta un F.U.T. debidamente llenado.</li>
        </ol>
    `,
    "constancia de egresado": `
        <strong>Requisitos:</strong>
        <ul>
            <li>Copia de DNI.</li>
            <li>Récord de notas del I al VI semestre.</li>
            <li>Presentar carpeta de prácticas.</li>
        </ul>
        <strong>Procedimiento:</strong>
        <ol>
            <li>Identifica el trámite en el TUPA y verifica el costo.</li>
            <li>Realiza el pago en el Banco de la Nación.</li>
            <li>Acércate a tesorería con los documentos necesarios.</li>
            <li>Presenta un F.U.T. debidamente llenado.</li>
        </ol>
    `,
    "constancia de estudios": `
        <strong>Requisitos:</strong>
        <ul>
            <li>Copia de DNI.</li>
        </ul>
        <strong>Procedimiento:</strong>
        <ol>
            <li>Identifica el trámite en el TUPA y verifica el costo.</li>
            <li>Realiza el pago en el Banco de la Nación.</li>
            <li>Acércate a tesorería con los documentos necesarios.</li>
            <li>Presenta un F.U.T. debidamente llenado.</li>
        </ol>
    `,
    // Respuestas cortas
    "convalidación": "Para la convalidación de materias, debes presentar la documentación correspondiente a la oficina de registro.",
    "duplicado de boleta de notas": "Puedes solicitar un duplicado de tu boleta de notas en la oficina de administración académica.",
    "duplicado de constancia de matrícula": "El duplicado de constancia de matrícula se solicita en la oficina de matrícula.",
    "evaluación extraordinaria": "Para más información sobre la evaluación extraordinaria, consulta con tu coordinador académico.",
    "justificación de inasistencias": "Para justificar inasistencias, presenta la documentación pertinente a la oficina de registro.",
    "justificación de tardanzas": "La justificación de tardanzas se realiza a través de un formulario disponible en el portal académico.",
    "licencia de estudios": "Puedes solicitar una licencia de estudios en la oficina de administración académica.",
    "matrícula por repitencia de unidad didáctica": "La matrícula por repitencia se gestiona en la oficina de registro académico.",
    "récord de notas": "El récord de notas está disponible en el portal académico.",
    "rectificación de nombres y apellidos": "Para la rectificación de nombres y apellidos, presenta la documentación requerida en la oficina de registro.",
    "reingreso": "Para solicitar el reingreso, sigue el procedimiento indicado en la página web del instituto.",
    "reserva de matrícula": "La reserva de matrícula se realiza a través de la plataforma en línea del instituto.",
    "traslado externo": "Para el traslado externo, presenta tu solicitud en la oficina de admisión.",
    "traslado interno": "El traslado interno se gestiona en la oficina de administración académica.",
    "default": "Lo siento, no entiendo tu pregunta. Intenta reformularla."
};

// Función para manejar el envío del mensaje
function sendMessage() {
    const userMessage = userInput.value.trim();
    if (validateInput(userMessage)) {
        appendMessage(`Tú: ${userMessage}`, 'user');
        const botResponse = getResponse(userMessage.toLowerCase());
        appendMessage(`Bot: ${botResponse}`, 'bot');
        userInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight; // Desplazarse hacia abajo
    }
}

// Función para validar la entrada del usuario
function validateInput(input) {
    return input.length > 0;
}

// Función para agregar mensajes al chat
function appendMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = message;  // Permitir HTML
    messageDiv.classList.add(type);
    chatBox.appendChild(messageDiv);
}

// Función para obtener la respuesta del bot
function getResponse(userMessage) {
    return responses[userMessage] || responses['default'];
}

// Evento para el botón de enviar
sendBtn.addEventListener('click', sendMessage);

// Evento para enviar el mensaje al presionar Enter
userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});