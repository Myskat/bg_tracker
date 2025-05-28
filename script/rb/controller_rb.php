<?php
set_time_limit(0);
require 'query_rb.php';
require 'model_rb.php';
require 'on_off_status.php';
$url = 'https://game3.betgamestv.eu/s/web/v1/game/results/zenitbet_demo?game_id=10&page=1&timezone=0 ';

// Общая логика анализа. В параметрах ссылка и значение статуса выполнения
function ParsLogic($url, $startBreaker)
{

    /**************************Конект Бот************************************* */

    require 'rezults_to_bot.php';

    /************************** /Конект Бот************************************* */

    // Счётчик итераций
    $t = 0;
    do {
        
        // Плюсуем счётчик
        $t++;
        // Инициируем пустой массив для исходов
        $newIshod = [];
        // Обращение к файлу со статусом выполнениия
        require 'on_off_status.php';
        // Если стоит 'off'
        if ($startBreaker == 'off') {
            // Глушим цикл
            break;
        }

        #region ############# Переменные по исходам #############

        // Актуальное кол- во синих проигрышей
        $BLoss = null;
        // Актуальное кол- во красных проигрышей
        $RLoss = null;
        // Актуальное кол- во проигрышей ничьей
        $RavLoss = null;
        // Актуальное кол- во проигрышей Чётной красной
        $red_Chet_Loss = null;
        // Актуальное кол- во проигрышей Нечётной красной
        $red_Nechet_Loss = null;
        // Актуальное кол- во проигрышей Чётной синей
        $blue_Chet_Loss = null;
        // Актуальное кол- во проигрышей Нечётной синей
        $blue_Nechet_Loss = null;
        // Актуальное кол- во проигрышей Чётной суммы
        $summ_Chet_Loss = null;
        // Актуальное кол- во проигрышей Нечётной суммы
        $summ_Nechet_Loss = null;
        // Актуальное количество проигрышей больше 3,5 у красной 
        $red_More_35_Loss = null;
        // Актуальное количество проигрышей меньше 3,5 у красной
        $red_Less_35_Loss = null;
        // Актуальное количество проигрышей больше 3,5 у синей
        $blue_More_35_Loss = null;
        // Актуальное количество проигрышей меньше 3,5 у синей
        $blue_Less_35_Loss = null;
        // Актуальное количество проигрышей больше 4,5 у красной 
        $summ_More_45_Loss = null;
        // Актуальное количество проигрышей меньше 4,5 у красной
        $summ_Less_45_Loss = null;
        // Актуальное количество проигрышей больше 5.5 у красной 
        $summ_More_55_Loss = null;
        // Актуальное количество проигрышей меньше 5.5 у красной
        $summ_Less_55_Loss = null;
        // Актуальное количество проигрышей больше 6.5 у красной 
        $summ_More_65_Loss = null;
        // Актуальное количество проигрышей меньше 6.5 у красной
        $summ_Less_65_Loss = null;
        // Актуальное количество проигрышей больше 7.5 у красной 
        $summ_More_75_Loss = null;
        // Актуальное количество проигрышей меньше 7.5 у красной
        $summ_Less_75_Loss = null;
        // Актуальное количество проигрышей больше 8.5 у красной 
        $summ_More_85_Loss = null;
        // Актуальное количество проигрышей меньше 8.5 у красной
        $summ_Less_85_Loss = null;
        // Актуальное количество проигрышей больше 9.5 у красной 
        $summ_More_95_Loss = null;
        // Актуальное количество проигрышей меньше 9.5 у красной
        $summ_Less_95_Loss = null;
        // Актуальное количество невыпадений 1 на красной кости
        $r1_Loss = null;
        // Актуальное количество невыпадений 2 на красной кости
        $r2_Loss = null;
        // Актуальное количество невыпадений 3 на красной кости
        $r3_Loss = null;
        // Актуальное количество невыпадений 4 на красной кости
        $r4_Loss = null;
        // Актуальное количество невыпадений 5 на красной кости
        $r5_Loss = null;
        // Актуальное количество невыпадений 6 на красной кости
        $r6_Loss = null;
        // Актуальное количество невыпадений 1 на синей кости
        $b1_Loss = null;
        // Актуальное количество невыпадений 2 на синей кости
        $b2_Loss = null;
        // Актуальное количество невыпадений 3 на синей кости
        $b3_Loss = null;
        // Актуальное количество невыпадений 4 на синей кости
        $b4_Loss = null;
        // Актуальное количество невыпадений 5 на синей кости
        $b5_Loss = null;
        // Актуальное количество невыпадений 6 на синей кости
        $b6_Loss = null;
        // Актуальное количество выигрышей у красного кубика
        $RWin = null;
        // Актуальное количество выигрышей у синего  кубика
        $BWin = null;
        // Актуальное количество выигрышей у ничьей
        $RavWin = null;
        // Актуальное количество выигрышей у красного чётного
        // $RChetWin = null; 
        // // Актуальное количество выигрышей у красного нечётного
        // $RNechetWin = null;


        #endregion Переменные по исходам


        // Обращаемся к файлу с результатами(каждую итерацию к обновлённому)
        require 'data_rb.php';
        // Получаем новейшее время исхода из data_rb.php
        $oldIshodTime = $ishodObj[9]->time;

        // Цикл запуска всего процесса и вывода результатов
        do {
            // Обращение к файлу со статусом выполнениия
            require 'on_off_status.php';
            // Если стоит 'off'
            if ($startBreaker == 'off') {
                // Глушим цикл
                break;
            }
            // Запускаем функцию получения исходов
            $newIshod = ishodFinder($url, $oldIshodTime);
            print_r($newIshod);
            // Если у нас False
            if ($newIshod == 'False') {
                // Прерываем цикл, выходим в основной цикл
                break;
            }
            // Обращаемся к файлу с результатами(каждую итерацию к обновлённому)
            require 'data_rb.php';
            // Получаем новейшее крайнее время
            $newIshodTime = $ishodObj[9]->time;
        } while ($oldIshodTime == $newIshodTime); // Цикл крутится, пока новейшее время не обновиться 
        // Обращение к файлу со статусом выполнениия
        require 'on_off_status.php';
        // Если стоит 'off'
        if ($startBreaker == 'off') {
            // Глушим цикл
            break;
        }
        // Если у нас False
        if ($newIshod == 'False') {
            // Прерываем текущую итерацию цикла, и переходим к следующей. Там новый запрос и тд
            print_r('<br>' . ':' . $t . ':' . '<br>' . '<br>');
            continue;
        }
        // Получаем разницу между предновейшим исходом и текущим запросом
        $timeLag = time() - $oldIshodTime;

        // Вложенное будет выполнени, если в файле со статусом выполнениия стоит 'on'
        if ($startBreaker == 'on') {

            // Если таймлаг маленький(идёт непрерываемая серия парсинга)
            if ($timeLag < 120) {

                // Берём json из файла с анализом
                $ishodArray = file_get_contents('datastok_rb.php');
                // Преобразуем json в объект
                $ishodArray = json_decode($ishodArray);

                print_r('<br>' . ':' . $timeLag . ':' . '<br>' . '<br>');

                #region ################ Присвоение данных ##############

                // Забираем актуальную стату по синим проигрышам
                $BLoss = $ishodArray[9]->BLoss;
                // Забираем актуальную стату по красным проигрышам
                $RLoss = $ishodArray[9]->RLoss;
                // Забираем актуальную стату по проигрышам ничьей
                $RavLoss = $ishodArray[9]->RavLoss;
                // Забираем актуальную стату по проигрышам Чётной красной
                $red_Chet_Loss = $ishodArray[9]->red_Chet_Loss;
                // Забираем актуальную стату по проигрышам Нечётной красной
                $red_Nechet_Loss = $ishodArray[9]->red_Nechet_Loss;
                // Забираем актуальную стату по проигрышам Чётной синей
                $blue_Chet_Loss = $ishodArray[9]->blue_Chet_Loss;
                // Забираем актуальную стату по проигрышам Нечётной синей
                $blue_Nechet_Loss = $ishodArray[9]->blue_Nechet_Loss;
                // Забираем актуальную стату по проигрышам Чётной суммы
                $summ_Chet_Loss = $ishodArray[9]->summ_Chet_Loss;
                // Забираем актуальную стату по проигрышам Нечётной суммы
                $summ_Nechet_Loss = $ishodArray[9]->summ_Nechet_Loss;
                // Забираем актуальную стату проигрышей больше 3,5 у красной
                $red_More_35_Loss = $ishodArray[9]->red_More_35_Loss;
                // Забираем актуальную стату проигрышей меньше 3,5 у красной
                $red_Less_35_Loss = $ishodArray[9]->red_Less_35_Loss;
                // Забираем актуальную стату проигрышей больше 3,5 у синей
                $blue_More_35_Loss = $ishodArray[9]->blue_More_35_Loss;
                // Забираем актуальную стату проигрышей меньше 3,5 у синей
                $blue_Less_35_Loss = $ishodArray[9]->blue_Less_35_Loss;
                // Забираем актуальную стату проигрышей больше 4,5 у красной
                $summ_More_45_Loss = $ishodArray[9]->summ_More_45_Loss;
                // Забираем актуальную стату проигрышей меньше 4,5 у красной
                $summ_Less_45_Loss = $ishodArray[9]->summ_Less_45_Loss;
                // Забираем актуальную стату проигрышей больше 5.5 у красной
                $summ_More_55_Loss = $ishodArray[9]->summ_More_55_Loss;
                // Забираем актуальную стату проигрышей меньше 5.5 у красной
                $summ_Less_55_Loss = $ishodArray[9]->summ_Less_55_Loss;
                // Забираем актуальную стату проигрышей больше 6.5 у красной
                $summ_More_65_Loss = $ishodArray[9]->summ_More_65_Loss;
                // Забираем актуальную стату проигрышей меньше 6.5 у красной
                $summ_Less_65_Loss = $ishodArray[9]->summ_Less_65_Loss;
                // Забираем актуальную стату проигрышей больше 7.5 у красной
                $summ_More_75_Loss = $ishodArray[9]->summ_More_75_Loss;
                // Забираем актуальную стату проигрышей меньше 7.5 у красной
                $summ_Less_75_Loss = $ishodArray[9]->summ_Less_75_Loss;
                // Забираем актуальную стату проигрышей больше 8.5 у красной
                $summ_More_85_Loss = $ishodArray[9]->summ_More_85_Loss;
                // Забираем актуальную стату проигрышей меньше 8.5 у красной
                $summ_Less_85_Loss = $ishodArray[9]->summ_Less_85_Loss;
                // Забираем актуальную стату проигрышей больше 9.5 у красной
                $summ_More_95_Loss = $ishodArray[9]->summ_More_95_Loss;
                // Забираем актуальную стату проигрышей меньше 9.5 у красной
                $summ_Less_95_Loss = $ishodArray[9]->summ_Less_95_Loss;
                // Забираем актуальную стату проигрышей 1 на красной кости
                $r1_Loss = $ishodArray[9]->r1_Loss;
                // Забираем актуальную стату проигрышей 2 на красной кости
                $r2_Loss = $ishodArray[9]->r2_Loss;
                // Забираем актуальную стату проигрышей 3 на красной кости
                $r3_Loss = $ishodArray[9]->r3_Loss;
                // Забираем актуальную стату проигрышей 4 на красной кости
                $r4_Loss = $ishodArray[9]->r4_Loss;
                // Забираем актуальную стату проигрышей 5 на красной кости
                $r5_Loss = $ishodArray[9]->r5_Loss;
                // Забираем актуальную стату проигрышей 6 на красной кости
                $r6_Loss = $ishodArray[9]->r6_Loss;
                // Забираем актуальную стату проигрышей 1 на синей кости
                $b1_Loss = $ishodArray[9]->b1_Loss;
                // Забираем актуальную стату проигрышей 2 на синей кости
                $b2_Loss = $ishodArray[9]->b2_Loss;
                // Забираем актуальную стату проигрышей 3 на синей кости
                $b3_Loss = $ishodArray[9]->b3_Loss;
                // Забираем актуальную стату проигрышей 4 на синей кости
                $b4_Loss = $ishodArray[9]->b4_Loss;
                // Забираем актуальную стату проигрышей 5 на синей кости
                $b5_Loss = $ishodArray[9]->b5_Loss;
                // Забираем актуальную стату проигрышей 6 на синей кости
                $b6_Loss = $ishodArray[9]->b6_Loss;
                // Забираем актуальную стату выигрышей у красного кубика
                $RWin = $ishodArray[9]->RWin;
                // Забираем актуальную стату выигрышей у синего  кубика  $RavWin
                $BWin = $ishodArray[9]->BWin;
                // Забираем актуальную стату выигрышей у ничьей
                $RavWin = $ishodArray[9]->RavWin;
                // Забираем актуальную стату выигрышей у красного чётного
                // $RChetWin = $ishodArray[9]->RChetWin;
                // // Забираем актуальную стату выигрышей у красного нечётного
                // $RNechetWin = $ishodArray[9]->RNechetWin;

                #endregion ################ Присвоение данных ##############

                print_r('<br>' . $RLoss . ':' . $BLoss . ':' . $RavLoss . '<br>' . '<br>');
            }

            // /*--------------------      Блок выгрузки анализа в файл      -------------------------------*/

            // Масив под результаты анализа исходов
            $winArray = [];
            // Запускаем фунуцию запроса и обработки исходов
            $winArray = fullAnaliz($winArray, $newIshod, $timeLag, $RLoss, $BLoss, $RavLoss, $red_Chet_Loss, $red_Nechet_Loss, $blue_Chet_Loss, $blue_Nechet_Loss, $summ_Chet_Loss, $summ_Nechet_Loss, $red_More_35_Loss, $red_Less_35_Loss, $blue_More_35_Loss, $blue_Less_35_Loss, $summ_More_45_Loss, $summ_Less_45_Loss, $summ_More_55_Loss, $summ_Less_55_Loss, $summ_More_65_Loss, $summ_Less_65_Loss, $summ_More_75_Loss, $summ_Less_75_Loss, $summ_More_85_Loss, $summ_Less_85_Loss, $summ_More_95_Loss, $summ_Less_95_Loss, $r1_Loss, $r2_Loss, $r3_Loss, $r4_Loss, $r5_Loss, $r6_Loss, $b1_Loss, $b2_Loss, $b3_Loss, $b4_Loss, $b5_Loss, $b6_Loss, $RWin, $BWin, $RavWin /* , $RChetWin, $RNechetWin */);

            // Если пришла одна строчка(идёт непрерываемая последовательность парсинга)
            if (count($winArray) == 1) {
                // Сносим первую строку
                array_splice($ishodArray, -10, 1);
                // Добавляем новейший исход(полученную строку) в конец массива
                array_push($ishodArray, $winArray[0]);
                // $ishodArray[9] = $winArray[0];

                // Смотрим результат
                print_r($ishodArray);

                // Кидаем его в файл целиком
                file_put_contents('datastok_rb.php', json_encode($ishodArray), true);

                // /********************* Апдейт поста Ботом **************************** */

                // Запрос к rezults_to_bot.php
                // file_get_contents("https://bgtracker.ru/script/rb/rezults_to_bot.php");
                // result_to_bot($ishodArray);
                // result_to_bot($ishodArray);
                require 'rezults_to_bot.php';
                // /********************* /Апдейт поста Ботом **************************** */
            }

            // Если пришёл большой массив(то есть требуется переписать все строки анализа)
            if (count($winArray) > 8) {

                // Кидаем его в файл целиком
                file_put_contents('datastok_rb.php', json_encode($winArray), true);
                // /********************* Апдейт поста Ботом **************************** */

                // Запрос к rezults_to_bot.php  require 'get_datastok.php';
                // file_get_contents("https://bgtracker.ru/script/rb/rezults_to_bot.php");
                // result_to_bot($ishodArray);
                // result_to_bot($ishodArray);
                require 'rezults_to_bot.php';
                // /********************* /Апдейт поста Ботом **************************** */

            }
        }
        /* =============================== */
        // Плюсуем счётчик
        // $t++;
        // sleep(60);

    } while ($startBreaker == 'on'); /* while ($t < 1000000);  */ // Цикл крутится, пока   
    print_r($oldIshodTime . '<br>' . $newIshodTime . '<br>' . $timeLag);
    // /*--------------------      / Блок выгрузки анализа в файл      -------------------------------*/
}
// Текушая функция
ParsLogic($url, $startBreaker);
