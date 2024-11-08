let score = 0;
let isClicked = false;
let scale = 1; // Начальный масштаб

function incrementScore() {
    console.log("Клик зарегистрирован!"); // Логируем клик
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

// Добавляем обработчики событий touchstart и touchend для предотвращения выделения
const peacockElement = document.getElementById("peacock");

peacockElement.addEventListener('touchstart', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение
    incrementScore(); // Вызываем функцию клика
});

peacockElement.addEventListener('touchend', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение
});

peacockElement.addEventListener('touchmove', function(event) {
    event.preventDefault(); // Предотвращаем выделение при перемещении
});

// Также предотвращаем контекстное меню при нажатии
peacockElement.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Отключаем контекстное меню
});
