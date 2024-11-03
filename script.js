let score = 0;
let isClicked = false;
let scale = 1; // Начальный масштаб

function incrementScore() {
    score++;
    document.getElementById("score").innerText = `Очки: ${score}`;

    // Увеличиваем масштаб при каждом клике
    scale += 0.2; // Увеличение размера
    document.getElementById("peacock").style.transform = `scale(${scale})`;
    
    // Если кликнули, сбрасываем таймер
    if (!isClicked) {
        isClicked = true;
        // Сбрасываем масштаб через 0.3 секунды
        setTimeout(() => {
            scale = 1; // Возвращаем к исходному размеру
            document.getElementById("peacock").style.transform = `scale(${scale})`;
            isClicked = false;
        }, 300); // Задержка перед возвращением
    }
}
