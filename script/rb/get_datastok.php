<?php

#endregion ################ Присвоение данных ##############

set_time_limit(0);

$ishodArray = file_get_contents('datastok_rb.php');
// Преобразуем json в объект
$ishodArray = json_decode($ishodArray);

// Актуальное значение красной кости
$Red = end($ishodArray)->Red;
// Актуальное значение синей кости
$Blue = end($ishodArray)->Blue;
// Цвет победитель  
$r_b_r_WinColor = end($ishodArray)->r_b_r_win;
// Забираем актуальную стату выигрышей у красного кубика
$RWin = end($ishodArray)->RWin;
// Забираем актуальную стату выигрышей у синего  кубика  $RavWin
$BWin = end($ishodArray)->BWin;
// Забираем актуальную стату выигрышей у ничьей
$RavWin = end($ishodArray)->RavWin;
// Забираем актуальную стату по синим проигрышам
$BLoss = end($ishodArray)->BLoss;
// Забираем актуальную стату по красным проигрышам
$RLoss = end($ishodArray)->RLoss;
// Забираем актуальную стату по проигрышам ничьей
$RavLoss = end($ishodArray)->RavLoss;
// ЧётНечёт красный победитель
$ChetNechet_red_win = end($ishodArray)->ChetNechet_red_win;
// ЧётНечёт синий победитель
$ChetNechet_blue_win = end($ishodArray)->ChetNechet_blue_win;
// Забираем актуальную стату по проигрышам Чётной красной
$red_Chet_Loss = end($ishodArray)->red_Chet_Loss;
// Забираем актуальную стату по проигрышам Нечётной красной
$red_Nechet_Loss = end($ishodArray)->red_Nechet_Loss;
// Забираем актуальную стату по проигрышам Чётной синей
$blue_Chet_Loss = end($ishodArray)->blue_Chet_Loss;
// Забираем актуальную стату по проигрышам Нечётной синей
$blue_Nechet_Loss = end($ishodArray)->blue_Nechet_Loss;
// Cумма красной и синей кости
$RedBlue_Summ = end($ishodArray)->RedBlue_Summ;
// ЧётНечётСумма победитель
$ChetNechet_summ_win = end($ishodArray)->ChetNechet_summ_win;
// Забираем актуальную стату по проигрышам Чётной суммы
$summ_Chet_Loss = end($ishodArray)->summ_Chet_Loss;
// Забираем актуальную стату по проигрышам Нечётной суммы
$summ_Nechet_Loss = end($ishodArray)->summ_Nechet_Loss;
// <> 3.5 победитель у красной
$red_MoreLess_35_win = end($ishodArray)->red_MoreLess_35_win;
// <> 3.5 победитель у синей
$blue_MoreLess_35_win = end($ishodArray)->blue_MoreLess_35_win;
// Забираем актуальную стату проигрышей больше 3,5 у красной
$red_More_35_Loss = end($ishodArray)->red_More_35_Loss;
// Забираем актуальную стату проигрышей меньше 3,5 у красной
$red_Less_35_Loss = end($ishodArray)->red_Less_35_Loss;
// Забираем актуальную стату проигрышей больше 3,5 у синей
$blue_More_35_Loss = end($ishodArray)->blue_More_35_Loss;
// Забираем актуальную стату проигрышей меньше 3,5 у синей
$blue_Less_35_Loss = end($ishodArray)->blue_Less_35_Loss;
// <> 4.5 победитель у суммы костей
$summ_MoreLess_45_win = end($ishodArray)->summ_MoreLess_45_win;
// Забираем актуальную стату проигрышей больше 4,5 у красной
$summ_More_45_Loss = end($ishodArray)->summ_More_45_Loss;
// Забираем актуальную стату проигрышей меньше 4,5 у красной
$summ_Less_45_Loss = end($ishodArray)->summ_Less_45_Loss;
// <> 5.5 победитель у суммы костей
$summ_MoreLess_55_win = end($ishodArray)->summ_MoreLess_55_win;
// Забираем актуальную стату проигрышей больше 5.5 у красной
$summ_More_55_Loss = end($ishodArray)->summ_More_55_Loss;
// Забираем актуальную стату проигрышей меньше 5.5 у красной
$summ_Less_55_Loss = end($ishodArray)->summ_Less_55_Loss;
// <> 6.5 победитель у суммы костей
$summ_MoreLess_65_win = end($ishodArray)->summ_MoreLess_65_win;
// Забираем актуальную стату проигрышей больше 6.5 у красной
$summ_More_65_Loss = end($ishodArray)->summ_More_65_Loss;
// Забираем актуальную стату проигрышей меньше 6.5 у красной
$summ_Less_65_Loss = end($ishodArray)->summ_Less_65_Loss;
// <> 7.5 победитель у суммы костей
$summ_MoreLess_75_win = end($ishodArray)->summ_MoreLess_75_win;
// Забираем актуальную стату проигрышей больше 7.5 у красной
$summ_More_75_Loss = end($ishodArray)->summ_More_75_Loss;
// Забираем актуальную стату проигрышей меньше 7.5 у красной
$summ_Less_75_Loss = end($ishodArray)->summ_Less_75_Loss;
// <> 8.5 победитель у суммы костей
$summ_MoreLess_85_win = end($ishodArray)->summ_MoreLess_85_win;
// Забираем актуальную стату проигрышей больше 8.5 у красной
$summ_More_85_Loss = end($ishodArray)->summ_More_85_Loss;
// Забираем актуальную стату проигрышей меньше 8.5 у красной
$summ_Less_85_Loss = end($ishodArray)->summ_Less_85_Loss;
// <> 9.5 победитель у суммы костей
$summ_MoreLess_95_win = end($ishodArray)->summ_MoreLess_95_win;
// Забираем актуальную стату проигрышей больше 9.5 у красной
$summ_More_95_Loss = end($ishodArray)->summ_More_95_Loss;
// Забираем актуальную стату проигрышей меньше 9.5 у красной
$summ_Less_95_Loss = end($ishodArray)->summ_Less_95_Loss;
// Забираем актуальную стату проигрышей 1 на красной кости
$r1_Loss = end($ishodArray)->r1_Loss;
// Забираем актуальную стату проигрышей 2 на красной кости
$r2_Loss = end($ishodArray)->r2_Loss;
// Забираем актуальную стату проигрышей 3 на красной кости
$r3_Loss = end($ishodArray)->r3_Loss;
// Забираем актуальную стату проигрышей 4 на красной кости
$r4_Loss = end($ishodArray)->r4_Loss;
// Забираем актуальную стату проигрышей 5 на красной кости
$r5_Loss = end($ishodArray)->r5_Loss;
// Забираем актуальную стату проигрышей 6 на красной кости
$r6_Loss = end($ishodArray)->r6_Loss;
// Забираем актуальную стату проигрышей 1 на синей кости
$b1_Loss = end($ishodArray)->b1_Loss;
// Забираем актуальную стату проигрышей 2 на синей кости
$b2_Loss = end($ishodArray)->b2_Loss;
// Забираем актуальную стату проигрышей 3 на синей кости
$b3_Loss = end($ishodArray)->b3_Loss;
// Забираем актуальную стату проигрышей 4 на синей кости
$b4_Loss = end($ishodArray)->b4_Loss;
// Забираем актуальную стату проигрышей 5 на синей кости
$b5_Loss = end($ishodArray)->b5_Loss;
// Забираем актуальную стату проигрышей 6 на синей кости
$b6_Loss = end($ishodArray)->b6_Loss;
// Актуально время
$Time = end($ishodArray)->Time;

#endregion ################ Присвоение данных ##############