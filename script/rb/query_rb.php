<?php
set_time_limit(0);
/*   Новь ==========================================*/


// $url = 'https://betgames9.betgames.tv/s/web/v1/game/results/testpartner?game_id=10&page=1&timezone=0';
// $url = 'https://olimp.betgamestv.eu/web/v1/games/recent_results/olimp/10';
// echo $url;
// Запрос к серверу БК
// $file = file_get_contents($url,false,null,11);
// $file = file_get_contents($url);

// $data = json_decode($file, true);
// $y = 15;
// do {
//     if ($file{ $y} == @'[') {
//         // $file = file_get_contents($url, false, null, $y);
//         // Запрос к серверу БК
//         $file = substr_replace(file_get_contents($url, false, null, $y), '', -1, 1);
//         break;
//     }
//     $y++;
// } while (isset($file{$y})); // Цикл крутится, пока
// echo '<pre>';
// print_r($file);
// echo '</pre>';

// substr_replace($time, '', 10, 3);
/*   Новь ==========================================*/




/*--------------------      Запрос и обработка ответа от сервера       -------------------------------*/

// Функция получения исходов
function ishodQuery($url, $oldIshodTime)
{
    /*--------------------      Чек ответа от БК     -------------------------------*/

    // Запрос к серверу БК
    $file = file_get_contents($url);

/* =========================================================== */
    $y = 15;
    do {
        if ($file[$y] == @'[') {
            // $file = file_get_contents($url, false, null, $y);
            // Запрос к серверу БК
            $file = substr_replace(file_get_contents($url, false, null, $y), '', -1, 1);
            break;
        }
        $y++;
    } while (isset($file{$y})); // Цикл крутится, пока

/* ============================================================= */

    // Преобразуем json в массив
    $data = json_decode($file);
    // Если получили не массив
    if (!is_array($data)) {
        // Прерываем выполнение и передаём False на выход
        return 'False';
    }

    // !!!!!!!!!!!!!!! Придумать ещё случаи для проверки!!!!!!!!!!!!!!!!
    /*--------------------      /Чек ответа от БК       -------------------------------*/

    // Массив для сбора строк исходов
    $dataArray = [];
    // Цикл для наполнения массива нужными данными
    for ($i = 0; $i <count($data)-20; $i++) {
        // Кладём Красный резыльтат
        $dataArray[$i]['red'] = $data[$i]->results[0]->number;
        // Кладём Синий резыльтат
        $dataArray[$i]['blue'] = $data[$i]->results[1]->number;
        // Забираем время
        $time = $data[$i]->time;
        // Удаляем из времени последние 3 ноля
        $time = substr_replace($time, '', 10, 3);
        // Кладём обрезанное время
        $dataArray[$i]['time'] = $time;
    }
    // Переворачиваем массив с полученными данными
    $dataArray = array_reverse($dataArray);
    // Получаем время новейшего исхода 
    $newIshodTime = $dataArray[9]['time'];
    // Если новейшее время больше предновейшего
    if ($newIshodTime > $oldIshodTime) {
        // Преобразуем массив с исходами в json объект
        $jsonData = json_encode($dataArray);
        // Кладём json в файл
        file_put_contents('data_rb.php', '<?php' . PHP_EOL . ' $ishod = ' . "'" . $jsonData . "'" . ';' . PHP_EOL . ' $ishodObj = json_decode($ishod)' . ';', true);
        return  $dataArray;
        // Если не больше, то 
    } else {
        // Возвращаем '' в качестве не успешного выполнения 
        return '';
    }
}

// Функция ожидания новейшего исхода
function ishodFinder($url, $oldIshodTime/* , $timeLag */)
{
    // Цикл в котором посылаем периодически запросы, и дожидаемся новейшего исхода
    do {
        // Получаем разницу между предновейшим исходом и текущим запросом
        $timeLag = time() - $oldIshodTime;

        // Если разница меньше определённого значения
        if ($timeLag < 20) {
            // Устанавливаем паузу
            $pause = 10;
            // Если разница меньше определённого значения
        } elseif ($timeLag < 30) {
            // Устанавливаем паузу
            $pause = 5;
            // Если разница больше/меньше определённого значения
        } elseif ($timeLag < 45 && $timeLag > 30) {
            // Устанавливаем паузу
            $pause = 1;
            // Если разница больше определённого значения
        } elseif ($timeLag > 45) {
            // Устанавливаем паузу
            $pause = 1;
        }
        // Выполняется указанная пауза
        sleep($pause);
        // Получаем результат запроса
        $newIshod = ishodQuery($url, $oldIshodTime);
    } while ($newIshod === ''); // Цикл крутится, пока получаем пустую строку
    // print_r($newIshod);
    // Отдаём массив дальше
    return  $newIshod;
}

/*--------------------    /  Запрос и обработка ответа от сервера       -------------------------------*/