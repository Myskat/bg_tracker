<?php 
// Подключение конфига
require '../config.php';
$id = $_GET['id'];
// Строка запроса на добавление данных в таблицу
$sql = 'DELETE FROM `news` WHERE `id`= ?';
// Подготовка запроса к выполнению
$query = $pdo->prepare($sql);
// Выполнение
$query-> execute([$id]);
// Редирект на страницу с формой
header('Location: /newspage.html');
?>


