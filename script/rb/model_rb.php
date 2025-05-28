<?php
set_time_limit(0);

// Функция наполнения массива исходов   
function winArray($winArray, $i, $Red, $Blue, $r_b_r_WinColor, $RLoss, $BLoss, $RavLoss, $ChetNechet_red_win, $red_Chet_Loss, $red_Nechet_Loss, $blue_Chet_Loss, $blue_Nechet_Loss, $ChetNechet_blue_win, $RedBlue_Summ, $summ_Chet_Loss, $summ_Nechet_Loss, $ChetNechet_summ_win, $red_More_35_Loss, $red_Less_35_Loss, $red_MoreLess_35_win, $blue_More_35_Loss, $blue_Less_35_Loss, $blue_MoreLess_35_win, $summ_More_45_Loss, $summ_Less_45_Loss, $summ_MoreLess_45_win, $summ_More_55_Loss, $summ_Less_55_Loss, $summ_MoreLess_55_win, $summ_More_65_Loss, $summ_Less_65_Loss, $summ_MoreLess_65_win, $summ_More_75_Loss, $summ_Less_75_Loss, $summ_MoreLess_75_win, $summ_More_85_Loss, $summ_Less_85_Loss, $summ_MoreLess_85_win, $summ_More_95_Loss, $summ_Less_95_Loss, $summ_MoreLess_95_win, $r1_Loss, $r2_Loss, $r3_Loss, $r4_Loss, $r5_Loss, $r6_Loss, $b1_Loss, $b2_Loss, $b3_Loss, $b4_Loss, $b5_Loss, $b6_Loss, $RWin, $BWin,  $RavWin,/* $RNechetWin, $RChetWin, */ $Time)
{
    // Актуальное значение красной кости
    $winArray[$i]['Red'] = $Red;
    // Актуальное значение синей кости
    $winArray[$i]['Blue'] = $Blue;
    // Цвет победитель   
    $winArray[$i]['r_b_r_win'] = $r_b_r_WinColor;
    // Количество проигрышей красной кости
    $winArray[$i]['RLoss'] = $RLoss;
    // Количество проигрышей синей кости
    $winArray[$i]['BLoss'] = $BLoss;
    // Количество проигрышей ничьей
    $winArray[$i]['RavLoss'] = $RavLoss;
    // Количество проигрышей Чётной красной
    $winArray[$i]['red_Chet_Loss'] = $red_Chet_Loss;
    // Количество проигрышей Нечётной красной
    $winArray[$i]['red_Nechet_Loss'] = $red_Nechet_Loss;
    // ЧётНечёт красный победитель
    $winArray[$i]['ChetNechet_red_win'] = $ChetNechet_red_win;
    // Количество проигрышей Чётной синей
    $winArray[$i]['blue_Chet_Loss'] = $blue_Chet_Loss;
    // Количество проигрышей Нечётной синей
    $winArray[$i]['blue_Nechet_Loss'] = $blue_Nechet_Loss;
    // ЧётНечёт синий победитель
    $winArray[$i]['ChetNechet_blue_win'] = $ChetNechet_blue_win;
    // Cумма красной и синей кости
    $winArray[$i]['RedBlue_Summ'] = $RedBlue_Summ;
    // Количество проигрышей Чётной суммы
    $winArray[$i]['summ_Chet_Loss'] = $summ_Chet_Loss;
    // Количество проигрышей Нечётной суммы
    $winArray[$i]['summ_Nechet_Loss'] = $summ_Nechet_Loss;
    // ЧётНечётСумма победитель
    $winArray[$i]['ChetNechet_summ_win'] = $ChetNechet_summ_win;
    // Количество проигрышей больше 3.5 у красной
    $winArray[$i]['red_More_35_Loss'] = $red_More_35_Loss;
    // Количество проигрышей меньше 3.5 у красной
    $winArray[$i]['red_Less_35_Loss'] = $red_Less_35_Loss;
    // <> 3.5 победитель у красной
    $winArray[$i]['red_MoreLess_35_win'] = $red_MoreLess_35_win;
    // Количество проигрышей больше 3.5 у синей
    $winArray[$i]['blue_More_35_Loss'] = $blue_More_35_Loss;
    // Количество проигрышей меньше 3.5 у синей
    $winArray[$i]['blue_Less_35_Loss'] = $blue_Less_35_Loss;
    // <> 3.5 победитель у синей
    $winArray[$i]['blue_MoreLess_35_win'] = $blue_MoreLess_35_win;
    // Количество проигрышей больше 4.5 у суммы костей
    $winArray[$i]['summ_More_45_Loss'] = $summ_More_45_Loss;
    // Количество проигрышей меньше 4.5 у суммы костей
    $winArray[$i]['summ_Less_45_Loss'] = $summ_Less_45_Loss;
    // <> 4.5 победитель у суммы костей
    $winArray[$i]['summ_MoreLess_45_win'] = $summ_MoreLess_45_win;
    // Количество проигрышей больше 5.5 у суммы костей
    $winArray[$i]['summ_More_55_Loss'] = $summ_More_55_Loss;
    // Количество проигрышей меньше 5.5 у суммы костей
    $winArray[$i]['summ_Less_55_Loss'] = $summ_Less_55_Loss;
    // <> 5.5 победитель у суммы костей
    $winArray[$i]['summ_MoreLess_55_win'] = $summ_MoreLess_55_win;
    // Количество проигрышей больше 6.5 у суммы костей
    $winArray[$i]['summ_More_65_Loss'] = $summ_More_65_Loss;
    // Количество проигрышей меньше 6.5 у суммы костей
    $winArray[$i]['summ_Less_65_Loss'] = $summ_Less_65_Loss;
    // <> 6.5 победитель у суммы костей
    $winArray[$i]['summ_MoreLess_65_win'] = $summ_MoreLess_65_win;
    // Количество проигрышей больше 7.5 у суммы костей
    $winArray[$i]['summ_More_75_Loss'] = $summ_More_75_Loss;
    // Количество проигрышей меньше 7.5 у суммы костей
    $winArray[$i]['summ_Less_75_Loss'] = $summ_Less_75_Loss;
    // <> 7.5 победитель у суммы костей
    $winArray[$i]['summ_MoreLess_75_win'] = $summ_MoreLess_75_win;
    // Количество проигрышей больше 8.5 у суммы костей
    $winArray[$i]['summ_More_85_Loss'] = $summ_More_85_Loss;
    // Количество проигрышей меньше 8.5 у суммы костей
    $winArray[$i]['summ_Less_85_Loss'] = $summ_Less_85_Loss;
    // <> 8.5 победитель у суммы костей
    $winArray[$i]['summ_MoreLess_85_win'] = $summ_MoreLess_85_win;
    // Количество проигрышей больше 9.5 у суммы костей
    $winArray[$i]['summ_More_95_Loss'] = $summ_More_95_Loss;
    // Количество проигрышей меньше 9.5 у суммы костей
    $winArray[$i]['summ_Less_95_Loss'] = $summ_Less_95_Loss;
    // <> 9.5 победитель у суммы костей
    $winArray[$i]['summ_MoreLess_95_win'] = $summ_MoreLess_95_win;
    // Количиство невыпадений 1 на красной кости
    $winArray[$i]['r1_Loss'] = $r1_Loss;
    // Количиство невыпадений 2 на красной кости
    $winArray[$i]['r2_Loss'] = $r2_Loss;
    // Количиство невыпадений 3 на красной кости
    $winArray[$i]['r3_Loss'] = $r3_Loss;
    // Количиство невыпадений 4 на красной кости
    $winArray[$i]['r4_Loss'] = $r4_Loss;
    // Количиство невыпадений 5 на красной кости
    $winArray[$i]['r5_Loss'] = $r5_Loss;
    // Количиство невыпадений 6 на красной кости
    $winArray[$i]['r6_Loss'] = $r6_Loss;
    // Количиство невыпадений 1 на синей кости
    $winArray[$i]['b1_Loss'] = $b1_Loss;
    // Количиство невыпадений 2 на синей кости
    $winArray[$i]['b2_Loss'] = $b2_Loss;
    // Количиство невыпадений 3 на синей кости
    $winArray[$i]['b3_Loss'] = $b3_Loss;
    // Количиство невыпадений 4 на синей кости
    $winArray[$i]['b4_Loss'] = $b4_Loss;
    // Количиство невыпадений 5 на синей кости
    $winArray[$i]['b5_Loss'] = $b5_Loss;
    // Количиство невыпадений 6 на синей кости
    $winArray[$i]['b6_Loss'] = $b6_Loss;
    // Количиство выигрышей у красного кубика
    $winArray[$i]['RWin'] = $RWin;
    // Количиство выигрышей у синего кубика
    $winArray[$i]['BWin'] = $BWin;
    // Количиство выигрышей у ничьей
    $winArray[$i]['RavWin'] = $RavWin;
    // Количиство выигрышей у красного чётного
    // $winArray[$i]['RChetWin'] = $RChetWin;
    // // Количиство выигрышей у красного нечётного
    // $winArray[$i]['RNechetWin'] = $RNechetWin;


    // Актуальное время
    $winArray[$i]['Time'] = $Time;

    // Результат на вывод
    print_r('Результат: ' . $r_b_r_WinColor . '<br>');
    // Отдаём массив результатов     
    return $winArray;
}

// Функция анализа на '> < ='
function fullAnaliz($winArray, $newIshod, $timeLag, $RLoss, $BLoss, $RavLoss, $red_Chet_Loss, $red_Nechet_Loss, $blue_Chet_Loss, $blue_Nechet_Loss, $summ_Chet_Loss, $summ_Nechet_Loss, $red_More_35_Loss, $red_Less_35_Loss, $blue_More_35_Loss, $blue_Less_35_Loss, $summ_More_45_Loss, $summ_Less_45_Loss, $summ_More_55_Loss, $summ_Less_55_Loss, $summ_More_65_Loss, $summ_Less_65_Loss, $summ_More_75_Loss, $summ_Less_75_Loss, $summ_More_85_Loss, $summ_Less_85_Loss, $summ_More_95_Loss, $summ_Less_95_Loss, $r1_Loss, $r2_Loss, $r3_Loss, $r4_Loss, $r5_Loss, $r6_Loss, $b1_Loss, $b2_Loss, $b3_Loss, $b4_Loss, $b5_Loss, $b6_Loss, $RWin, $BWin, $RavWin/*, $RChetWin, $RNechetWin */)
{
    // Смотрим
    print_r('<br> Таймлаг: ' . $timeLag . '<br>' . '<br>');
    // Цвет победитель
    $r_b_r_WinColor = '';
    // Если timeLag меньше 120 сек. 
    if ($timeLag <= 120) {
        // Сносим все строк кроме первой
        array_splice($newIshod, 0, 9);
    }
    // Результат на вывод
    print_r('Время: ' . $newIshod[0]['time'] . '<br>');
    // Цикл перебора 5 предысходов
    for ($i = 0; $i < count($newIshod); $i++) {

        // Получаем актуальное время события 
        $Time = $newIshod[$i]['time'];
        // Получаем актуальное значение красной кости
        $Red = $newIshod[$i]['red'];
        // Получаем актуальное значение синей кости
        $Blue = $newIshod[$i]['blue'];
        // Получаем актуальное значение суммы красной и синей кости
        $RedBlue_Summ = $Red + $Blue;

        // Если больше красная кость
        if ($Red > $Blue) {

            // Добавляем проигрыш синему кубика
            $BLoss += 1;
            // Обнуляем проигрыши красного кубика
            $RLoss = 0;
            // Отмечаем прирост проигрышей ничьей
            $RavLoss += 1;
            // Цвет победитель
            $r_b_r_WinColor = "<span class='redSpan'>Red</span>"; //font-weight:
            // Отмечаем прирост выигрышей у красного кубика
            $RWin += 1;
            // Обнуляем выигрыши синего кубика
            $BWin = 0;
            // Обнуляем выигрыши по ничьей
            $RavWin = 0;
        }
        // Если кости равны
        if ($Red == $Blue) {

            // Добавляем проигрыш синему кубика
            $BLoss += 1;
            // Добавляем проигрыш красному кубику
            $RLoss += 1;
            // Обнуляем проигрыши ничьей6
            $RavLoss = 0;
            // Цвет победитель
            $r_b_r_WinColor = "<span class='violetSpan'>Ravno</span>";
            // Обнуляем выигрыши синего кубика
            $BWin = 0;
            // // Обнуляем выигрыши красного кубика
            $RWin = 0;
            // Плюсуем выигрыши по ничьей
            $RavWin += 1;
        }
        // Если больше синяя кость
        if ($Red < $Blue) {
            // Обнуляем проигрыши у синего кубика
            $BLoss = 0;
            // Добавляем проигрыш красному кубику
            $RLoss += 1;
            // Отмечаем прирост проигрышей ничьей
            $RavLoss += 1;
            // Цвет победитель
            $r_b_r_WinColor = "<span class='blueSpan'>Blue</span>";
            // Отмечаем прирост выигрышей у синего  кубика
            $BWin += 1;
            // Обнуляем выигрыши красного кубика
            $RWin = 0;
            // Обнуляем выигрыши по ничьей
            $RavWin = 0;
        }
        // Если получили чётное значение красной кости
        if ($Red == "1" || $Red == "3" || $Red == "5") {
            // Увеличиваем счётчик чётных проигрыщей на 1  
            $red_Chet_Loss += 1;
            // Обнуляем нечётные проигрыщи
            $red_Nechet_Loss = 0;
            // Указываем победителя
            $ChetNechet_red_win = 'Nechet';

            // Увеличиваем победы нечётной
            // $RNechetWin += 1;
            // // Обнуляем победы чётной
            // $RChetWin = 0;
        }
        // Если получили чётное значение красной кости
        if ($Red == "2" || $Red == "4" || $Red == "6") {
            // Обнуляем чётные проигрыщи
            $red_Chet_Loss = 0;
            // Увеличиваем счётчик нечётных проигрыщей на 1
            $red_Nechet_Loss += 1;
            // Указываем победителя
            $ChetNechet_red_win = 'Chet';
            // Увеличиваем победы чётной
            // $RNechetWin = 0;
            // // Обнуляем победы чётной
            // $RChetWin += 1;
        }
        // Если получили чётное значение синей кости
        if ($Blue == "1" || $Blue == "3" || $Blue == "5") {
            // Увеличиваем счётчик чётных проигрыщей на 1  
            $blue_Chet_Loss += 1;
            // Обнуляем нечётные проигрыщи
            $blue_Nechet_Loss = 0;
            // Указываем победителя
            $ChetNechet_blue_win = 'Nechet';
        }
        // Если получили чётное значение синей кости
        if ($Blue == "2" || $Blue == "4" || $Blue == "6") {
            // Обнуляем чётные проигрыщи
            $blue_Chet_Loss = 0;
            // Увеличиваем счётчик нечётных проигрыщей на 1
            $blue_Nechet_Loss += 1;
            // Указываем победителя
            $ChetNechet_blue_win = 'Chet';
        }

        // Если получили чётное значение суммы красной и синей кости
        if ($RedBlue_Summ % 2 == 0) {
            // Увеличиваем счётчик ytчётных проигрыщей на 1  
            $summ_Nechet_Loss += 1;
            // Обнуляем нечётные проигрыщи
            $summ_Chet_Loss = 0;
            // Указываем победителя
            $ChetNechet_summ_win = 'Chet';
        }
        // Если получили нечётное значение суммы красной и синей кости
        if ($RedBlue_Summ % 2 != 0) {
            // Обнуляем чётные проигрыщи
            $summ_Nechet_Loss = 0;
            // Увеличиваем счётчик нечётных проигрыщей на 1
            $summ_Chet_Loss += 1;
            // Указываем победителя
            $ChetNechet_summ_win = 'Nechet';
        }

        // Если значение красной кости больше 3.5
        if ($Red > 3.5) {
            // Увеличиваем счётчик "меньше" проигрыщей на 1  
            $red_Less_35_Loss += 1;
            // Обнуляем счётчик "больше" проигрыщи
            $red_More_35_Loss = 0;
            // Указываем победителя
            $red_MoreLess_35_win = '❯'; // '❯'
        }
        // Если значение красной кости меньше 3.5
        if ($Red < 3.5) {
            // Обнуляем счётчик "меньше" проигрыщи
            $red_Less_35_Loss = 0;
            // Увеличиваем счётчик "больше" проигрыщей на 1  
            $red_More_35_Loss += 1;
            // Указываем победителя
            $red_MoreLess_35_win = '❮'; // '❮'
        }

        // Если значение синей кости больше 3.5
        if ($Blue > 3.5) {
            // Увеличиваем счётчик "меньше" проигрыщей на 1  
            $blue_Less_35_Loss += 1;
            // Обнуляем счётчик "больше" проигрыщи
            $blue_More_35_Loss = 0;
            // Указываем победителя
            $blue_MoreLess_35_win = '❯';
        }
        // Если значение синей кости меньше 3.5
        if ($Blue < 3.5) {
            // Обнуляем счётчик "меньше" проигрыщи
            $blue_Less_35_Loss = 0;
            // Увеличиваем счётчик "больше" проигрыщей на 1  
            $blue_More_35_Loss += 1;
            // Указываем победителя
            $blue_MoreLess_35_win = '❮';
        }

        // Если значение суммы костей больше 4.5
        if ($RedBlue_Summ > 4.5) {
            // Увеличиваем счётчик "меньше" проигрыщей на 1  
            $summ_Less_45_Loss += 1;
            // Обнуляем счётчик "больше" проигрыщи
            $summ_More_45_Loss = 0;
            // Указываем победителя
            $summ_MoreLess_45_win = '❯';
        }
        // Если значение суммы костей меньше 4.5
        if ($RedBlue_Summ < 4.5) {
            // Обнуляем счётчик "меньше" проигрыщи
            $summ_Less_45_Loss = 0;
            // Увеличиваем счётчик "больше" проигрыщей на 1  
            $summ_More_45_Loss += 1;
            // Указываем победителя
            $summ_MoreLess_45_win = '❮';
        }
        // Если значение суммы костей больше 5.5
        if ($RedBlue_Summ > 5.5) {
            // Увеличиваем счётчик "меньше" проигрыщей на 1  
            $summ_Less_55_Loss += 1;
            // Обнуляем счётчик "больше" проигрыщи
            $summ_More_55_Loss = 0;
            // Указываем победителя
            $summ_MoreLess_55_win = '❯';
        }
        // Если значение суммы костей меньше 5.5
        if ($RedBlue_Summ < 5.5) {
            // Обнуляем счётчик "меньше" проигрыщи
            $summ_Less_55_Loss = 0;
            // Увеличиваем счётчик "больше" проигрыщей на 1  
            $summ_More_55_Loss += 1;
            // Указываем победителя
            $summ_MoreLess_55_win = '❮';
        }
        // Если значение суммы костей больше 6.5
        if ($RedBlue_Summ > 6.5) {
            // Увеличиваем счётчик "меньше" проигрыщей на 1  
            $summ_Less_65_Loss += 1;
            // Обнуляем счётчик "больше" проигрыщи
            $summ_More_65_Loss = 0;
            // Указываем победителя
            $summ_MoreLess_65_win = '❯';
        }
        // Если значение суммы костей меньше 6.5
        if ($RedBlue_Summ < 6.5) {
            // Обнуляем счётчик "меньше" проигрыщи
            $summ_Less_65_Loss = 0;
            // Увеличиваем счётчик "больше" проигрыщей на 1  
            $summ_More_65_Loss += 1;
            // Указываем победителя
            $summ_MoreLess_65_win = '❮';
        }
        // Если значение суммы костей больше 7.5
        if ($RedBlue_Summ > 7.5) {
            // Увеличиваем счётчик "меньше" проигрыщей на 1  
            $summ_Less_75_Loss += 1;
            // Обнуляем счётчик "больше" проигрыщи
            $summ_More_75_Loss = 0;
            // Указываем победителя
            $summ_MoreLess_75_win = '❯';
        }
        // Если значение суммы костей меньше 7.5
        if ($RedBlue_Summ < 7.5) {
            // Обнуляем счётчик "меньше" проигрыщи
            $summ_Less_75_Loss = 0;
            // Увеличиваем счётчик "больше" проигрыщей на 1  
            $summ_More_75_Loss += 1;
            // Указываем победителя
            $summ_MoreLess_75_win = '❮';
        }
        // Если значение суммы костей больше 8.5
        if ($RedBlue_Summ > 8.5) {
            // Увеличиваем счётчик "меньше" проигрыщей на 1  
            $summ_Less_85_Loss += 1;
            // Обнуляем счётчик "больше" проигрыщи
            $summ_More_85_Loss = 0;
            // Указываем победителя
            $summ_MoreLess_85_win = '❯';
        }
        // Если значение суммы костей меньше 8.5
        if ($RedBlue_Summ < 8.5) {
            // Обнуляем счётчик "меньше" проигрыщи
            $summ_Less_85_Loss = 0;
            // Увеличиваем счётчик "больше" проигрыщей на 1  
            $summ_More_85_Loss += 1;
            // Указываем победителя
            $summ_MoreLess_85_win = '❮';
        }
        // Если значение суммы костей больше 9.5
        if ($RedBlue_Summ > 9.5) {
            // Увеличиваем счётчик "меньше" проигрыщей на 1  
            $summ_Less_95_Loss += 1;
            // Обнуляем счётчик "больше" проигрыщи
            $summ_More_95_Loss = 0;
            // Указываем победителя
            $summ_MoreLess_95_win = '❯';
        }
        // Если значение суммы костей меньше 9.5
        if ($RedBlue_Summ < 9.5) {
            // Обнуляем счётчик "меньше" проигрыщи
            $summ_Less_95_Loss = 0;
            // Увеличиваем счётчик "больше" проигрыщей на 1  
            $summ_More_95_Loss += 1;
            // Указываем победителя
            $summ_MoreLess_95_win = '❮';
        }


        // Если значение красной кости равно 1
        if ($Red == "1") {
            // Обнуляем проигрыщи Red_1
            $r1_Loss = 0;
        } else {
            // Добавляем проигрыш в счётчике
            $r1_Loss += 1;
        }
        // Если значение красной кости равно 2
        if ($Red == "2") {
            // Обнуляем проигрыщи Red_2
            $r2_Loss = 0;
        } else {
            // Добавляем проигрыш в счётчике
            $r2_Loss += 1;
        }
        // Если значение красной кости равно 3
        if ($Red == "3") {
            // Обнуляем проигрыщи Red_3
            $r3_Loss = 0;
        } else {
            // Добавляем проигрыш в счётчике
            $r3_Loss += 1;
        }
        // Если значение красной кости равно 4
        if ($Red == "4") {
            // Обнуляем проигрыщи Red_4
            $r4_Loss = 0;
        } else {
            // Добавляем проигрыш в счётчике
            $r4_Loss += 1;
        }
        // Если значение красной кости равно 5
        if ($Red == "5") {
            // Обнуляем проигрыщи Red_5
            $r5_Loss = 0;
        } else {
            // Добавляем проигрыш в счётчике
            $r5_Loss += 1;
        }
        // Если значение красной кости равно 6
        if ($Red == "6") {
            // Обнуляем проигрыщи Red_6
            $r6_Loss = 0;
        } else {
            // Добавляем проигрыш в счётчике
            $r6_Loss += 1;
        }
        // Если значение синей кости равно 1
        if ($Blue == "1") {
            // Обнуляем проигрыщи Blue_1
            $b1_Loss = 0;
        } else {
            // Добавляем проигрыш в счётчике
            $b1_Loss += 1;
        }
        // Если значение синей кости равно 2
        if ($Blue == "2") {
            // Обнуляем проигрыщи Blue_2
            $b2_Loss = 0;
        } else {
            // Добавляем проигрыш в счётчике
            $b2_Loss += 1;
        }
        // Если значение синей кости равно 3
        if ($Blue == "3") {
            // Обнуляем проигрыщи Blue_3
            $b3_Loss = 0;
        } else {
            // Добавляем проигрыш в счётчике
            $b3_Loss += 1;
        }
        // Если значение синей кости равно 4
        if ($Blue == "4") {
            // Обнуляем проигрыщи Blue_4
            $b4_Loss = 0;
        } else {
            // Добавляем проигрыш в счётчике
            $b4_Loss += 1;
        }
        // Если значение синей кости равно 5
        if ($Blue == "5") {
            // Обнуляем проигрыщи Blue_5
            $b5_Loss = 0;
        } else {
            // Добавляем проигрыш в счётчике
            $b5_Loss += 1;
        }
        // Если значение синей кости равно 6
        if ($Blue == "6") {
            // Обнуляем проигрыщи Blue_6
            $b6_Loss = 0;
        } else {
            // Добавляем проигрыш в счётчике
            $b6_Loss += 1;
        }

        // Наполняем массив исходов  
        $winArray = winArray($winArray, $i, $Red, $Blue, $r_b_r_WinColor, $RLoss, $BLoss, $RavLoss, $ChetNechet_red_win, $red_Chet_Loss, $red_Nechet_Loss, $blue_Chet_Loss, $blue_Nechet_Loss, $ChetNechet_blue_win, $RedBlue_Summ, $summ_Chet_Loss, $summ_Nechet_Loss, $ChetNechet_summ_win, $red_More_35_Loss, $red_Less_35_Loss, $red_MoreLess_35_win,  $blue_More_35_Loss, $blue_Less_35_Loss, $blue_MoreLess_35_win, $summ_More_45_Loss, $summ_Less_45_Loss, $summ_MoreLess_45_win, $summ_More_55_Loss, $summ_Less_55_Loss, $summ_MoreLess_55_win, $summ_More_65_Loss, $summ_Less_65_Loss, $summ_MoreLess_65_win, $summ_More_75_Loss, $summ_Less_75_Loss, $summ_MoreLess_75_win, $summ_More_85_Loss, $summ_Less_85_Loss, $summ_MoreLess_85_win, $summ_More_95_Loss, $summ_Less_95_Loss, $summ_MoreLess_95_win, $r1_Loss, $r2_Loss, $r3_Loss, $r4_Loss, $r5_Loss, $r6_Loss, $b1_Loss, $b2_Loss, $b3_Loss, $b4_Loss, $b5_Loss, $b6_Loss, $RWin, $BWin, $RavWin, /* $RChetWin, $RNechetWin, */ $Time);
    }
    return $winArray;
}
