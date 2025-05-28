$("document").ready(function () {

    // Строка под значение статуса выполнения
    let Switch = '';
    // Находим кнопку отправки данных
    let startButton = document.getElementById("start");
    // Берём текст кнопки из ЛокСтор
    startButton.innerHTML = localStorage.getItem('TracStartButtonText');
    // Если значение не указано
    if (localStorage.getItem('TracStartButtonText') == null) {
        // Присваиваем значение по умолчанию
        startButton.innerHTML = "Start";
    }
    // Если значение "Stop", это значит что фронт должен продолжать работу
    if (startButton.innerHTML == "Stop") {
        // Красим кнопку в красный
        startButton.style.backgroundColor = "#ffd4d5";
    }
    // Слушаем события кнопки
    startButton.addEventListener('click', StartTrecker);

    // Функция запуска трекера
    function StartTrecker() {
        // Если на кнопке надпись "Start"
        if (startButton.innerHTML == "Start") {
            // Присваиваем соответствующий статус
            Switch = 'on';
            // Отправляем статус в файл
            startBreaker(Switch);
            // Делаем запрос к скрипту трекера(так он запускается)
            GetController();
            // Красим кнопку в красный
            startButton.style.backgroundColor = "#ffd4d5";
            // Меняем текст кнопки 
            startButton.innerHTML = "Stop";
            // Кладём текст в ЛокСтор
            localStorage.setItem('TracStartButtonText', startButton.innerHTML)


        }
        else {// Если на кнопке надпись "Stop"
            // Присваиваем соответствующий статус
            Switch = 'off';
            // Отправляем статус в файл
            startBreaker(Switch);
            // Красим кнопку в зелёный
            startButton.style.backgroundColor = "#ddfcdd";
            // Пишем на кнопке "Start"
            startButton.innerHTML = "Start";
            // Кладём текст в ЛокСтор
            localStorage.setItem('TracStartButtonText', startButton.innerHTML)
        }
    }
    // Функция передачи статуса в файл
    function startBreaker(Switch) {
        $.ajax({
            // Ссылка на файл
            url: 'script/rb/start_stop.php',
            // Тип запроса
            type: 'POST',
            // Тело запроса в формате ключ: значение
            data: { Switch: Switch },
            // Действие в случае успеха. Произвольное
            success: function (data) {
                // Кинули сообщение в лог
                console.log(Switch);
            }
        });

    }
    // Функция Гет запроса к скрипту трекера
    function GetController() {
        // Инициируем запрос
        const request = new XMLHttpRequest();
        // Прописываем текст запроса
        request.open('GET', ' http://demotracker.ru/script/rb/controller_rb.php ');
        // Отправляем запрос
        request.send();

    }


    // function GetishodObj() {
    //     $.get("http://demotracker.ru/script/rb/controller_rb.php", function (data) {
    //         console.log(JSON.parse(data));
    //     });
    // }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /*--------------------      Функция демонстрации времени     -------------------------------*/

    // Функция демонстрации  крайнего указанное ремя из ЛокСтор
    function TimeInTable() {
        // Находим ячейку для вставки времени
        let timeRow = document.getElementById('Td_Time_shah');
        // Берём крайнее указанное время из ЛокСтор
        let Time = localStorage.getItem('time');
        // Заносим время в соответствующую ячейку
        timeRow.innerHTML = Time;
    }

    // Функция демонстрации времени
    function TimeListener() {

        // Находим ячейку для вставки времени
        let timeRow = document.getElementById('Td_Time_shah');
        // Берём cчётчик секунд timeLagCount, он показывает секунды с последнего успешного запроса
        let timeLagCount = localStorage.getItem('timeLagCount');
        // Проверяем флаг zaprosActiv в localStorage
        zaprosActiv = localStorage.getItem('zaprosActiv');
        // Если счётчик timeLagCount приближается к критическому значению, и флаг zaprosActiv > 0, то надо делать запросы нового времени
        if (timeLagCount >= 35 || zaprosActiv > 0) {
            // Берём свежее время. Это timestamp текущего события
            let newTime = localStorage.getItem('time');
            // Заносим время в соответствующую ячейку
            timeRow.innerHTML = newTime;
        }
    }

    // Функция демонстрации  крайнего указанное ремя из ЛокСтор
    TimeInTable();
    // Функция запроса результата времени по счётчику
    setTimeout(function request() {
        // Запуск
        TimeListener();
        setTimeout(request, 1000);
    }, 1000);

    /*--------------------      / Функция демонстрации времени       -------------------------------*/


});