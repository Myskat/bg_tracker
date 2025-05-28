//======================================               Отправка данных настроек в БД и ЛокСтор     	  ====================================================//
$("document").ready(function () {
    /*--------------------      Находим все необходимые элементы для работы     -------------------------------*/
    // // Кнопка отправки данных
    let sendButton = document.getElementById("send");
    // Слушаем события кнопки
    sendButton.addEventListener('click', sendSettings);
    // Собираем коллекцию из полей формы настроек
    let inputCollection = document.getElementsByTagName("input");

    /*--------------------      / Находим все необходимые элементы для работы     -------------------------------*/

    // Функция демонстрации дефолтного содержимого полей
    function defaultSettings() {
        // Значение метки о присутствии настроек в ЛокСтор
        let setOn = localStorage.getItem('setOn');
        // Если настроек нет, то устанавливаем настройки по умолчанию
        if (setOn == null) {

            //////////////////////////////////////Проверка данных в БД//////////////////////////////////////////////////////

            let NikName = 'Степн';
            $.ajax({
                // Ссылка на скрипт запроса к БД
                url: 'script/rb/select.php',
                // Тип запроса
                type: 'POST',
                // Тело запроса в формате ключ: значение
                data: { nikName: NikName },
                // Действие в случае успеха. Произвольное
                success: function (data) {

                    if (data == 'noName') {
                        // Кладём значения настроек в ЛокСтор
                        localStorage.setItem('Settings', '{ "rb_loss": "8", "ravno_loss": "15", "cn_red_loss": "10", "cn_blue_loss": "10", "cn_summ_loss": "10", "ml_35_red_loss": "7", "ml_35_blue_loss": "7" , "more_45_summ_loss": "4" , "less_45_summ_loss": "15", "more_55_summ_loss": "5" , "less_55_summ_loss": "13", "more_65_summ_loss": "7" , "less_65_summ_loss": "10" , "more_75_summ_loss": "10" , "less_75_summ_loss": "7", "more_85_summ_loss": "13" , "less_85_summ_loss": "5", "more_95_summ_loss": "15" , "less_95_summ_loss": "4", "r1_loss": "15", "r2_loss": "15", "r3_loss": "15", "r4_loss": "15", "r5_loss": "15", "r6_loss": "15", "b1_loss": "15", "b2_loss": "15", "b3_loss": "15", "b4_loss": "15", "b5_loss": "15", "b6_loss": "15", "rb_shah_Win":"8", "rav_shah_Loss":"15","cn_r_shah_Win":"10","cn_b_shah_Win":"10","cn_summ_shah_Win":"10","ml35_shah_redWin":"7","ml35_shah_blueWin":"7","ml45_summ_shah_more_Win":"4","ml45_summ_shah_less_Win":"15","ml55_summ_shah_more_Win":"5","ml55_summ_shah_less_Win":"13","ml65_summ_shah_more_Win":"7","ml65_summ_shah_less_Win":"10","ml75_summ_shah_more_Win":"10","ml75_summ_shah_less_Win":"7","ml85_summ_shah_more_Win":"13","ml85_summ_shah_less_Win":"5","ml95_summ_shah_more_Win":"15","ml95_summ_shah_less_Win":"4"}');
                        localStorage.setItem('NikName', 'НикПоУмолчанию');
                    } else {
                        // Кинули сообщение в лог
                        // console.log(data);
                        localStorage.setItem('Settings', data);
                        localStorage.setItem('NikName', NikName);
                        // return data;
                    }
                }

            });
            // setTimeout(() => {
            //     let allsettings = localStorage.getItem('Settings');
            //     console.log(allsettings);
            // }, 100);

            //////////////////////////////////////////// /Проверка данных в БД////////////////////////////////////////////////

        }

        setTimeout(() => {
            // Взяли строку с настройками из ЛокСтор
            let locStorStr = localStorage.getItem('Settings');
            // Взяли строку с ником из ЛокСтор
            let locStorNik = localStorage.getItem('NikName');

            // преобразуем её в JSON формат
            let locStorJson = JSON.parse(locStorStr);
            /*--------------------      Раскладываем все значения по соответствующим полям формы     -------------------------------*/
            let y = 1;
            for (var key in locStorJson) {
                // console.log(locStorJson[key]);
                inputCollection.item(y).value = locStorJson[key];
                y++
            }
            // Заполнили поле ника
            inputCollection.item(51).value = locStorNik;
        }, 100);
        /*--------------------      / Раскладываем все значения по соответствующим полям формы      -------------------------------*/

    }
    // Запускаем функцию
    defaultSettings();

    // Функция отправки настроек в БД и ЛокСтор
    function sendSettings() {
        // let inputsvalues = [];

        // Если на кнопке надпись "Redact"
        if (sendButton.innerHTML == "Redact") {

            // Открываем поля для редактирования
            for (i = 0; i < inputCollection.length; i++) {
                // Отменяем у всех полей свойство disabled
                inputCollection.item(i).disabled = false;
            }
            // Пишем на ней "Save"
            sendButton.innerHTML = "Save";
        }
        else {// Если на кнопке надпись "Save"

            // Закрываем поля для редактирования
            for (i = 0; i < inputCollection.length; i++) {
                // Присвоили всем полям свойство disabled
                inputCollection.item(i).disabled = true;
                // Делаем исключение для кнопки открытия настроек checkbox
                if (inputCollection.item(i).getAttribute('id') == 'checkbox') { inputCollection.item(i).disabled = false; }
            }
            // Пишем на кнопке "Redact"
            sendButton.innerHTML = "Redact";

            // Собираем строку с пользовательскими настройками. Форматируем под JSON
            let locStorSetStr = '{ "rb_loss": ' + '"' + inputCollection.item(1).value
                + '"' + ', "ravno_loss": ' + '"' + inputCollection.item(2).value
                + '"' + ', "cn_red_loss": ' + '"' + inputCollection.item(3).value
                + '"' + ', "cn_blue_loss": ' + '"' + inputCollection.item(4).value
                + '"' + ', "cn_summ_loss": ' + '"' + inputCollection.item(5).value
                + '"' + ', "ml_35_red_loss": ' + '"' + inputCollection.item(6).value
                + '"' + ', "ml_35_blue_loss": ' + '"' + inputCollection.item(7).value
                + '"' + ', "more_45_summ_loss": ' + '"' + inputCollection.item(8).value
                + '"' + ', "less_45_summ_loss": ' + '"' + inputCollection.item(9).value
                + '"' + ', "more_55_summ_loss": ' + '"' + inputCollection.item(10).value
                + '"' + ', "less_55_summ_loss": ' + '"' + inputCollection.item(11).value
                + '"' + ', "more_65_summ_loss": ' + '"' + inputCollection.item(12).value
                + '"' + ', "less_65_summ_loss": ' + '"' + inputCollection.item(13).value
                + '"' + ', "more_75_summ_loss": ' + '"' + inputCollection.item(14).value
                + '"' + ', "less_75_summ_loss": ' + '"' + inputCollection.item(15).value
                + '"' + ', "more_85_summ_loss": ' + '"' + inputCollection.item(16).value
                + '"' + ', "less_85_summ_loss": ' + '"' + inputCollection.item(17).value
                + '"' + ', "more_95_summ_loss": ' + '"' + inputCollection.item(18).value
                + '"' + ', "less_95_summ_loss": ' + '"' + inputCollection.item(19).value
                + '"' + ', "r1_loss": ' + '"' + inputCollection.item(20).value
                + '"' + ', "r2_loss": ' + '"' + inputCollection.item(21).value
                + '"' + ', "r3_loss": ' + '"' + inputCollection.item(22).value
                + '"' + ', "r4_loss": ' + '"' + inputCollection.item(23).value
                + '"' + ', "r5_loss": ' + '"' + inputCollection.item(24).value
                + '"' + ', "r6_loss": ' + '"' + inputCollection.item(25).value
                + '"' + ', "b1_loss": ' + '"' + inputCollection.item(26).value
                + '"' + ', "b2_loss": ' + '"' + inputCollection.item(27).value
                + '"' + ', "b3_loss": ' + '"' + inputCollection.item(28).value
                + '"' + ', "b4_loss": ' + '"' + inputCollection.item(29).value
                + '"' + ', "b5_loss": ' + '"' + inputCollection.item(30).value
                + '"' + ', "b6_loss": ' + '"' + inputCollection.item(31).value
                + '"' + ', "rb_shah_Win": ' + '"' + inputCollection.item(32).value
                + '"' + ', "rav_shah_Loss": ' + '"' + inputCollection.item(33).value
                + '"' + ', "cn_r_shah_Win": ' + '"' + inputCollection.item(34).value
                + '"' + ', "cn_b_shah_Win": ' + '"' + inputCollection.item(35).value
                + '"' + ', "cn_summ_shah_Win": ' + '"' + inputCollection.item(36).value
                + '"' + ', "ml35_shah_redWin": ' + '"' + inputCollection.item(37).value
                + '"' + ', "ml35_shah_blueWin": ' + '"' + inputCollection.item(38).value
                + '"' + ', "ml45_summ_shah_more_Win": ' + '"' + inputCollection.item(39).value
                + '"' + ', "ml45_summ_shah_less_Win": ' + '"' + inputCollection.item(40).value
                + '"' + ', "ml55_summ_shah_more_Win": ' + '"' + inputCollection.item(41).value
                + '"' + ', "ml55_summ_shah_less_Win": ' + '"' + inputCollection.item(42).value
                + '"' + ', "ml65_summ_shah_more_Win": ' + '"' + inputCollection.item(43).value
                + '"' + ', "ml65_summ_shah_less_Win": ' + '"' + inputCollection.item(44).value
                + '"' + ', "ml75_summ_shah_more_Win": ' + '"' + inputCollection.item(45).value
                + '"' + ', "ml75_summ_shah_less_Win": ' + '"' + inputCollection.item(46).value
                + '"' + ', "ml85_summ_shah_more_Win": ' + '"' + inputCollection.item(47).value
                + '"' + ', "ml85_summ_shah_less_Win": ' + '"' + inputCollection.item(48).value
                + '"' + ', "ml95_summ_shah_more_Win": ' + '"' + inputCollection.item(49).value
                + '"' + ', "ml95_summ_shah_less_Win": ' + '"' + inputCollection.item(50).value
                + '"' + '}';
            let NikName = inputCollection.item(51).value;
            console.log(NikName);
            // Кладём обновлённые пользователем настройки в ЛокСтор
            localStorage.setItem('Settings', locStorSetStr);

            localStorage.setItem('NikName', NikName);
            // Ставим метку  что данные присутствуют ЛокСтор
            localStorage.setItem('setOn', '1');
            // Запрос к файлу с данными. Это надо для актуализации визуального представления таблицы на странице
            setTimeout(function () {
                r_b_Query();
            }, 100);
            /*--------------------      Аякс запрос на передачу данных из формы в БД     -------------------------------*/
            $.ajax({
                // Ссылка на скрипт запроса к БД
                url: 'script/rb/insert.php',
                // Тип запроса
                type: 'POST',
                // Тело запроса в формате ключ: значение
                data: { all_settings: locStorSetStr, nikName: NikName },
                // Действие в случае успеха. Произвольное
                success: function (data) {
                    // Кинули сообщение в лог
                    console.log('Успех!');
                }
            });
            /*--------------------      / Аякс запрос на передачу данных из формы в БД     -------------------------------*/

        }
    }
});

//======================================               / Отправка данных настроек в БД и ЛокСтор      	  ====================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////