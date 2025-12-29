// Fecha de inicio del Cyber Monday: 3 de noviembre 2025, 00:00 hora de Argentina (UTC-3)
const cyberMondayDate = new Date("2026-11-03T00:00:00-03:00").getTime();

const countdownElement = document.getElementById('countdown');

function startCountdown(endDate) {
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = endDate - now;

        if (distance <= 0) {
            clearInterval(interval);
            countdownElement.innerHTML = "¡La oferta ha comenzado!";
        } else {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Formateo con ceros delante
            const hoursStr = hours.toString().padStart(2, '0');
            const minutesStr = minutes.toString().padStart(2, '0');
            const secondsStr = seconds.toString().padStart(2, '0');

            countdownElement.innerHTML = `${days}d ${hoursStr}h ${minutesStr}m ${secondsStr}s`;
        }

    }, 1000);
}

startCountdown(cyberMondayDate);


// Mostrar/Ocultar Respuestas en la Sección FAQ
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.arrow');

        answer.classList.toggle('visible');
        icon.classList.toggle('rotated');
    });
});
