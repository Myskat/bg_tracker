//======================================               Основной функционал по представлению анализа исходов в таблице     	  ====================================================//
$("document").ready(function () {
    // Массив с актуальными присутствующими на странице данными
    let OnPageTime = [];
    // Массив под актуальные текущие данные time
    let goodResultsTime = [];
    // Получаем элемент на странице('tbody')
    let Tbody_rb = document.getElementById('rb');
    let Tbody_nums = document.getElementById('nums');
    let Td_rbr_shah = document.getElementById('rbr_shah');
    let Td_rav_shah = document.getElementById('rav_shah');
    let Td_cn_shah_r = document.getElementById('r_cn_shah');
    let Td_cn_shah_b = document.getElementById('b_cn_shah');
    let Td_cn_shah_s = document.getElementById('s_cn_shah');
    let Td_ml35_shah_r = document.getElementById('ml35_red_shah');
    let Td_ml35_shah_b = document.getElementById('ml35_blue_shah');
    let Td_ml45_shah_s = document.getElementById('ml45_summ_shah');
    let Td_ml55_shah_s = document.getElementById('ml55_summ_shah');
    let Td_ml65_shah_s = document.getElementById('ml65_summ_shah');
    let Td_ml75_shah_s = document.getElementById('ml75_summ_shah');
    let Td_ml85_shah_s = document.getElementById('ml85_summ_shah');
    let Td_ml95_shah_s = document.getElementById('ml95_summ_shah');
    let Td_Time_shah = document.getElementById('Td_Time_shah');

    // Запускаем функцию вывода результатов анализа. чтобы сразу выдать текущие данные  cn_shah
    // r_b_Query();
    // queryInterval();
    // Функция вывода результатов анализа
    async function r_b_Query() {

        // #region Запрос в json формате

        /*--------------------     Запрос в json формате     -------------------------------*/

        // Путь к файлу с результатами на 'datastok_rb'
        let url = 'script/rb/datastok_rb.php';
        // Запрос к файлу, аналог Ajax
        let response = await fetch(url);
        // Забираем ответ на запрос в json формате
        let results = await response.json();
        // Взяли строку с настройками из ЛокСтор. Передадим её в функцию представления таблицы "tablePresent()"
        let locStorStr = localStorage.getItem('Settings');

        // Смотрим на результаты запроса в json формате
        // console.log(results);
        // console.log(results[2].time);

        /*--------------------      / Запрос в json формате      -------------------------------*/

        // #endregion / Запрос в json формате 

        /* ------------- Собираем time всех json записей в массив ----------------------- */

        // Очищаем массив под актуальные текущие данные time
        goodResultsTime = [];
        // Цикл перебора записей, выборки id из них и перекладывания их в массив
        for (c = 0; c < results.length; c++) {
            // Выборка id из записей и перекладывание их в массив
            goodResultsTime.push(results[c].Time);
        }
        // console.log(goodResultsTime);

        /* ------------- / Собираем time всех json записей в массив ----------------------- */

        /*--------------------      Удаление неактуальных записей со страницы      -------------------------------*/

        // Собрали коллекцию элементов записей
        let delElems_rb = document.getElementsByClassName('results_rb');
        // Собрали коллекцию элементов записей
        let delElems_nums = document.getElementsByClassName('results_nums');
        // // Собрали коллекцию элементов записей
        let delElems_shah = document.getElementsByClassName('wrap_Shah');
        // Переложили её в массив
        let oldElemsArr_rb = Array.from(delElems_rb);
        // Переложили её в массив
        let oldElemsArr_nums = Array.from(delElems_nums);
        // // Переложили её в массив
        let oldElemsArr_shah = Array.from(delElems_shah);
        // Смотрим на массив
        // console.log(oldElemsArr.length);
        // setTimeout(function () {
        // Цикл перебора массива, и удаления неактуальных записей
        oldElemsArr_rb.forEach(function (elem, i, oldElemsArr_rb) {
            // Берём id текущего поста. Это timestamp текущего события
            let elemTime = elem.getAttributeNode('id').textContent;

            // Если этого id нет в массиве актуальных id goodResultsTime, который мы собрали выше из results
            if (goodResultsTime.indexOf(Number(elemTime)) == -1) {
                // Находим этот элемент на странице. Он не актуален
                let delElem = document.getElementById(elemTime);
                // Удаляем этот элемент
                delElem.remove();
            }
            else { // Если id на странице присутствует
                // Добавляем его в массив с актуальными данными
                OnPageTime[i] = elemTime;
            }

        });
        // Цикл перебора массива, и удаления неактуальных записей
        oldElemsArr_nums.forEach(function (elem, i, oldElemsArr_nums) {
            // Берём id текущего поста. Это timestamp текущего события
            let elemTime = elem.getAttributeNode('id').textContent;
            // Если этого id нет в массиве актуальных id goodResultsTime, который мы собрали выше из results
            if (goodResultsTime.indexOf(Number(elemTime)) == -1) {
                // Находим этот элемент на странице. Он не актуален
                let delElem_nums = document.getElementById(elemTime);
                // Удаляем этот элемент
                delElem_nums.remove();
                // Смотрим на текущие элементы
                // console.log(goodResultsTime[i]+'  '+ elemTime);
                // removeElem = 'True'
            }
        });

        // Цикл перебора массива, и удаления неактуальных записей
        oldElemsArr_shah.forEach(function (elem, i, oldElemsArr_shah) {
            // Берём id текущего поста. Это timestamp текущего события
            let elemTime = elem.getAttributeNode('id').textContent;
            // Если этого id нет в массиве актуальных id goodResultsTime, который мы собрали выше из results
            if (goodResultsTime.indexOf(Number(elemTime)) == -1) {
                // Находим этот элемент на странице. Он не актуален
                let delElem_shah = document.getElementById(elemTime);
                // Удаляем этот элемент
                delElem_shah.remove();
                // Смотрим на текущие элементы
                // console.log(goodResultsTime[i]+'  '+ elemTime);
                // removeElem = 'True'
            }
        });


        /*--------------------      /Удаление неактуальных записей со страницы      -------------------------------*/

        /*--------------------      Публикуем актуальные данные в табличку     -------------------------------*/

        // *****************************!!!!!!!!!!!!!!!!!!!!!****************************
        // *****************************!!!!!!!!!!!!!!!!!!!!!**************************** Надо организовать проверку на изменения массива, чтобы не делать лишнего представления таблиц
        // *****************************!!!!!!!!!!!!!!!!!!!!!****************************
        // *****************************!!!!!!!!!!!!!!!!!!!!!****************************

        // setTimeout(function () {
        tablePresent(locStorStr, results, OnPageTime, Tbody_rb, Tbody_nums, Td_rbr_shah, Td_rav_shah, Td_cn_shah_r, Td_cn_shah_b, Td_cn_shah_s, Td_ml35_shah_r, Td_ml35_shah_b, Td_ml45_shah_s, Td_ml55_shah_s, Td_ml65_shah_s, Td_ml75_shah_s, Td_ml85_shah_s, Td_ml95_shah_s, Td_Time_shah);
        // 
        // }, 0);
        /*--------------------      / Публикуем актуальные данные в табличку      -------------------------------*/

        // console.trace();
        // console.log(eventTime);
        return results[4].Time;

    }

    // Функция получения id текущего поста. Это timestamp текущего события
    function elemFinder(id) {
        // Собрали коллекцию элементов записей
        Elem_rb = document.getElementsByClassName('results_rb');
        // Переложили её в массив
        Arr_rb = Array.from(Elem_rb);
        // Берём id текущего поста. Это timestamp текущего события
        ElemId_rb = Arr_rb[id].getAttributeNode('id').textContent;
        // Забираем id элемента
        return ElemId_rb;
    }

    // Функция слушания и обновления таблицы
    function TableListener() {

        // Берём cчётчик секунд timeLagCount, он показывает секунды с последнего успешного запроса
        let timeLagCount = localStorage.getItem('timeLagCount');
        // Проверяем флаг zaprosActiv в localStorage
        zaprosActiv = localStorage.getItem('zaprosActiv');
        // Берём актуальный старый id
        let oldElemId = localStorage.getItem('oldElemId');
        // Плюсуем cчётчикe секунд timeLagCount 1
        timeLagCount++;
        // Кладём плюсанутый счётчик в localStorage
        localStorage.setItem('timeLagCount', timeLagCount);
        // Если счётчик timeLagCount приближается к критическому значению, и флаг zaprosActiv > 0, то надо делать запросы нового исхода
        if (timeLagCount >= 25 || zaprosActiv > 0) {
            // Делаем запрорс на новый результат
            // setTimeout(function () {
            r_b_Query();
            // }, 100);
            // Берём id текущего поста. Это timestamp текущего события
            let newElemId = elemFinder(0);
            // Кидаем в консоль 'запрос'
            console.log('запрос');

            // Если новый id не равен старый id
            if (newElemId != oldElemId) {

                // Обнуляем счётчик timeLagCount, потому что у нас пришёл новый id
                timeLagCount = 0;
                // Кидаем счётчик timeLagCount в localStorage
                localStorage.setItem('timeLagCount', timeLagCount);
                // Кидаем в консоль старый и новый id
                console.log('new ' + newElemId + '  ' + 'old ' + oldElemId);
                if (zaprosActiv > 0) {
                    // Убавляем флаг(-1), сводим к 0
                    zaprosActiv -= 1;
                }
                // Обновляем старый элемент
                newOldElem(zaprosActiv);
            }
        }

        // return timeLagCount;

    }
    // Обновляем старый элемент
    function newOldElem(zaprosActiv) {
        // Функция получения "старого" id, который будет "удалён" новым
        setTimeout(function () {
            // Кидаем флаг(1) zaprosActiv в localStorage
            localStorage.setItem('zaprosActiv', zaprosActiv);
            // Получаем текущий старый id
            let oldElemId = elemFinder(0);
            setTimeout(function () {
                // Кидаем oldElemId в localStorage
                localStorage.setItem('oldElemId', oldElemId);
            }, 100);
            // Смоттрим на него в консоли
            // console.log(oldElemId + '   oldElem');
        }, 100);
    }

    /*--------------------      Внешняя логика запросов      -------------------------------*/

    // Функция непрерывной работы фронтэнда. Запрос раз в секунду
    function TrackerWork() {
        // Устанавливаем флаг, что надо добиться нового результата
        let zaprosActiv = 2;
        // Обновление старого крайнего элемента на странице
        setTimeout(function () {
            // Обновляем старый элемент
            newOldElem(zaprosActiv);
        }, 100);

        //////////////////
        // Функция запроса результата по счётчику
        // setInterval(function () {
        //     // Запуск
        //     TableListener();
        // }, 1000);
        /////////////////////

        // Функция запроса результата по счётчику
        setTimeout(function request() {
            // Смотрим на значение активности фронтэнда в ЛокСтор
            let FrontrWork = localStorage.getItem('FrontStartButtonText');
            // Если там 'Запуск', это значит, что необходимо тормознуть скрипт
            if (FrontrWork == 'Start') { return; }
            // Запуск
            TableListener();
            setTimeout(request, 700);
        }, 700);


    }
    // Делаем запрос на получение текущих данных целиком(5 позиций)
    r_b_Query();

    /*--------------------      / Внешняя логика запросов      -------------------------------*/

    /*--------------------     Кнопка Start/Stop    -------------------------------*/

    // Находим кнопку запуска фронта
    let startButton = document.getElementById("start");
    // Берём текст кнопки из ЛокСтор
    startButton.innerHTML = localStorage.getItem('FrontStartButtonText');
    // Если значение не указано в ЛокСтор
    if (localStorage.getItem('FrontStartButtonText') == null) {
        // Присваиваем значение по умолчанию
        startButton.innerHTML = "Start";
    }
    // Если значение "Stop", это значит что фронт должен продолжать работу
    if (startButton.innerHTML == "Stop") {
        // Запускаем функцию работы непрерывной фронта
        TrackerWork();
        // Красим кнопку в красный
        startButton.style.backgroundColor = "#ffd4d5";
    }
    // Функция запуска фронта
    function StartTreckerFront() {
        // Если на кнопке надпись "Start"
        if (startButton.innerHTML == "Start") {
            // Меняем текст кнопки 
            startButton.innerHTML = "Stop";
            // Красим кнопку в красный
            startButton.style.backgroundColor = "#ffd4d5";
            // Кладём текст в ЛокСтор
            localStorage.setItem('FrontStartButtonText', startButton.innerHTML)
            // Запускаем функцию работы непрерывной фронта
            TrackerWork();

        }
        else {// Если на кнопке надпись "Stop"
            // Меняем текст кнопки на "Start"
            startButton.innerHTML = "Start";
            // Красим кнопку в зелёный
            startButton.style.backgroundColor = "#ddfcdd";
            // Кладём текст в ЛокСтор
            localStorage.setItem('FrontStartButtonText', startButton.innerHTML)
            // Делаем запрос на получение текущих данных целиком(5 позиций)
            // r_b_Query();
        }

    }

    // Слушаем события кнопки
    startButton.addEventListener('click', StartTreckerFront);

    /*--------------------      /  Кнопка Start/Stop       -------------------------------*/
});
// TrackerWork()
//======================================               /  Основной функционал по представлению анализа исходов в таблице     	  ====================================================//