<?php
// Подключение конфига
require '../config.php';
/* Получение данных из поля формы */

// Строка с настройками
$all_settings = $_POST['all_settings'];
// НикНэйм юзера
$nikName = $_POST['nikName'];

/* Проверка на наличие такова никНэйма */

// Строка запроса с проверкой наличия Ника в БД
$sql = "SELECT EXISTS (SELECT * FROM `settjson` WHERE nikName = '{$nikName}')";
// Подготовка к запросу
$query = $pdo->prepare($sql);
// Выплнение запроса
$query->execute();
// Анализ ответа. Получаем числовой вариант true/false(1/0)
$nikExists = $query->fetchColumn();

// Если он уже есть($nikExists == 1), переписываем строку
if ($nikExists == 1) {

    /* Обновление */
    // Строка запроса на переписывание строки данными в БД
    $sql = "UPDATE settjson SET all_settings=:all_settings, nikName=:nikName  WHERE nikName = :nikName";
    // Подготовка к запросу
    $query = $pdo->prepare($sql);
    // Выплнение запроса. Переписывание строки данными в БД
    $query->execute(['all_settings' => $all_settings, 'nikName' => $nikName]);
}
// Если нет, добавляем новую строку
else {

    // Передача данных в формате json
    $sql = 'INSERT INTO settjson(all_settings, nikName) VALUES(:all_settings, :nikName)';
    // Подготовка к запросу
    $query = $pdo->prepare($sql);
    // Выплнение запроса.
    $query->execute(['all_settings' => $all_settings, 'nikName' => $nikName]);
}
