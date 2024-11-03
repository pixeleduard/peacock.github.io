const peacock = document.querySelector('.peacock');
const scoreDisplay = document.getElementById('score');
let score = 0;
let clickCount = 0;
let scaleTimeout;

peacock.addEventListener('click', () => {
    clickCount++;
    score++;
    scoreDisplay.textContent = `Очки: ${score}`;

    // Увеличение павлина
    peacock.style.transform = `scale(${1 + clickCount * 0.05})`; // Увеличиваем масштаб

    // Сбрасываем увеличение после определенного времени
    clearTimeout(scaleTimeout);
    scaleTimeout = setTimeout(() => {
        peacock.style.transform = 'scale(1)'; // Возвращаем обратно
        clickCount = 0; // Сбрасываем счетчик кликов
    }, 300);
});

// Добавляем обработчик события для предотвращения выделения текста
peacock.addEventListener('touchstart', (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение
});
