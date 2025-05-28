<?php
// Подключение конфига
require '../config.php';
/* Получение данных из поля формы */

// Строка с настройками
$Switch = $_POST['Switch'];

/* Проверка на наличие такова никНэйма */

// Строка запроса с проверкой наличия Ника в БД
// $sql = "SELECT EXISTS (SELECT * FROM `settjson` WHERE nikName = '{$nikName}')";
// // Подготовка к запросу
// $query = $pdo->prepare($sql);
// // Выплнение запроса
// $query->execute();
// // Анализ ответа. Получаем числовой вариант true/false(1/0)
// $nikExists = $query->fetchColumn();

// Если он уже есть($nikExists == 1), переписываем строку
// if ($Switch == 'on') {

/* Обновление */
// Строка запроса на переписывание строки данными в БД
// $sql = "UPDATE settjson SET all_settings=:all_settings, nikName=:nikName  WHERE nikName = :nikName";
// // Подготовка к запросу
// $query = $pdo->prepare($sql);
// // Выплнение запроса. Переписывание строки данными в БД
// $query->execute(['all_settings' => $all_settings, 'nikName' => $nikName]);

// Кладём json в файл
file_put_contents('on_off_status.php', '<?php' . PHP_EOL . ' $startBreaker = ' . "'" . $Switch . "'" . ';', true);



// }
// Если нет, добавляем новую строку
// else {
//     file_put_contents('data_rb.php', $Switch, true);
//     // Передача данных в формате json
//     // $sql = 'INSERT INTO settjson(all_settings, nikName) VALUES(:all_settings, :nikName)';
//     // // Подготовка к запросу
//     // $query = $pdo->prepare($sql);
//     // // Выплнение запроса.
//     // $query->execute(['all_settings' => $all_settings, 'nikName' => $nikName]);
// }


// file_put_contents('data_rb.php', '<?php' . PHP_EOL . ' $ishod = ' . "'" . $jsonData . "'" . ';' . PHP_EOL . ' $ishodObj = json_decode($ishod)' . ';', true);
