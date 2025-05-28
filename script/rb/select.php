<?php
// Подключение конфига
require '../config.php';
// Получение данных из поля формы 'nik_name'
$nikName = $_POST['nikName'];

/* Проверка на наличие такова никНэйма */
// Строка запроса
$sql = "SELECT EXISTS (SELECT * FROM `settjson` WHERE nikName = '{$nikName}')";
// Подготовка к запросу
$query = $pdo->prepare($sql);
// Выплнение запроса
$query->execute();
// Анализ ответа. Получаем числовой вариант true/false(1/0)
$nikExists = $query->fetchColumn();

// Если он уже есть($nikExists == 1), отдаём существующие настройки
if ($nikExists == 1) {
    // Запрос на извлечение настроек
    $sql = "SELECT `all_settings` FROM `settjson`  WHERE nikName = '{$nikName}'";
    // Забираем ответ на запрос
    $query = $pdo->query($sql);
    // Цикл перебора ответа от БД как объекта
    while ($row = $query->fetch(PDO::FETCH_OBJ)) {
        $new[] = $row;
    }
    // Передаём строку с настройками 
    echo $new[0]->all_settings;
}
// Если нет, отдаём метку noName
else {
    echo "noName";
}
