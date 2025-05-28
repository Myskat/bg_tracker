<?php
// ConnektFile
require '../sub_to_bot/connect_data.php';
// Файль с данными по структуре сообщений.
require '../sub_to_bot/message_params.php';
// Запуск на отработку файла со сбором актуальных исходов
require 'get_datastok.php';

// установка часового пояса по умолчанию.
date_default_timezone_set('Asia/Novosibirsk');
$chat_id = '-1001865597736';
$message = date("H:i:s");
$message_id = '45';
$nums_message_id = '47';
// \xF0\x9F\x94\xB5👎 - 0B

// ============= Получение актуального цвета победителя

// Контрольное значение 
$findRed = 'Red';
$findBlue = 'Blue';
$findRavno = 'Ravno';

// Символы
$RedColor = "🔴";
$BlueColor = "🔵";
$RavnoColor = "🔴🔵";
$Summa = "∑";
$RavnoZnak = "═";
$ChetZnak = "%₂";
$NechetZnak = "!%₂";
// $redLossCross = "⭕🟥";
$LossMarker = "  ❕";
$Win = "✔";
// 🧿🔘🟦🔴🔵🟥⭕⚪

// Проверка контрольного значения
$WinRedColor = strpos($r_b_r_WinColor, $findRed);
$WinBlueColor = strpos($r_b_r_WinColor, $findBlue);
$WinRavnoColor = strpos($r_b_r_WinColor, $findRavno);
// Если не получили контрольное значение
if ($WinRedColor == true) {
    // $r_b_r_WinColor = 'Red';
    $r_b_r_WinColor = $RedColor;
}
if ($WinBlueColor == true) {
    // $r_b_r_WinColor = 'Blue';
    $r_b_r_WinColor = $BlueColor;
}
if ($WinRavnoColor == true) {
    $r_b_r_WinColor = $RavnoColor;
}

// ChetNechet_Conver
$ChetNechet_red_win = ($ChetNechet_red_win == "Nechet") ? "!%₂" : "%₂";
$ChetNechet_blue_win = ($ChetNechet_blue_win == "Nechet") ? "!%₂" : "%₂";
$ChetNechet_summ_win = ($ChetNechet_summ_win == "Nechet") ? "!%₂" : "%₂";

// ============= Получение актуального цвета победителя

// Заголовок таблицы LossTrascer
$inline_button1 = array("text" => "LossTracker", "callback_data" => '#');
// Red/Blue
$inline_button2 = array("text" => $RedColor . " vs " . $BlueColor, "callback_data" => '#');
$inline_button3 = array("text" => $Red . " : " . $Blue . " " . $r_b_r_WinColor, "callback_data" => '#');
$inline_button4 = array("text" => $RedColor . $LossMarker . $RLoss, "callback_data" => '#');
$inline_button5 = array("text" => $BlueColor . $LossMarker . $BLoss, "callback_data" => '#');
// Ravno
$inline_button6 = array("text" => $RedColor . " ?= " . $BlueColor /*" ═ "*/, "callback_data" => '#');
$inline_button7 = array("text" => $Red . " : " . $Blue . " " . $r_b_r_WinColor, "callback_data" => '#');
$inline_button8 = array("text" => $LossMarker . $RavLoss, "callback_data" => '#');
// %2 Red
$inline_button9 = array("text" => "?%₂  " . $RedColor, "callback_data" => '#');
$inline_button10 = array("text" => $ChetNechet_red_win . "   " . $Red, "callback_data" => '#');
$inline_button11 = array("text" => $ChetZnak . $LossMarker . $red_Chet_Loss, "callback_data" => '#');
$inline_button12 = array("text" => $NechetZnak . $LossMarker . $red_Nechet_Loss, "callback_data" => '#');
// %2 Blue
$inline_button13 = array("text" => "?%₂  " . $BlueColor, "callback_data" => '#');
$inline_button14 = array("text" => $ChetNechet_blue_win . "   " . $Blue, "callback_data" => '#');
$inline_button15 = array("text" => $ChetZnak . $LossMarker . $blue_Chet_Loss, "callback_data" => '#');
$inline_button16 = array("text" => $NechetZnak . $LossMarker . $blue_Nechet_Loss, "callback_data" => '#');
// %2 Summ
$inline_button17 = array("text" => "?%₂  " . $Summa, "callback_data" => '#');
$inline_button18 = array("text" => $ChetNechet_summ_win . "   " . $RedBlue_Summ, "callback_data" => '#');
$inline_button19 = array("text" => $ChetZnak . $LossMarker . $summ_Chet_Loss, "callback_data" => '#');
$inline_button20 = array("text" => $NechetZnak . $LossMarker . $summ_Nechet_Loss, "callback_data" => '#');
// Red >< 3.5
$inline_button21 = array("text" => "?❯  3.5  " . $RedColor, "callback_data" => '#');
$inline_button22 = array("text" => $Red . "  " . $red_MoreLess_35_win . "  3.5", "callback_data" => '#');
$inline_button23 = array("text" => "❯ " . $LossMarker . $red_More_35_Loss, "callback_data" => '#');
$inline_button24 = array("text" => "❮ " . $LossMarker . $red_Less_35_Loss, "callback_data" => '#');
// Blue >< 3.5
$inline_button25 = array("text" => "?❯  3.5  " . $BlueColor, "callback_data" => '#');
$inline_button26 = array("text" => $Blue . "  " . $blue_MoreLess_35_win . "  3.5", "callback_data" => '#');
$inline_button27 = array("text" => "❯ " . $LossMarker . $blue_More_35_Loss, "callback_data" => '#');
$inline_button28 = array("text" => "❮ " . $LossMarker . $blue_Less_35_Loss, "callback_data" => '#');
// Summ >< 4.5
$inline_button29 = array("text" => "?❯  4.5  " . $Summa, "callback_data" => '#');
$inline_button30 = array("text" => $RedBlue_Summ . "  " . $summ_MoreLess_45_win . "  4.5", "callback_data" => '#');
$inline_button31 = array("text" => "❯ " . $LossMarker . $summ_More_45_Loss, "callback_data" => '#');
$inline_button32 = array("text" => "❮ " . $LossMarker . $summ_Less_45_Loss, "callback_data" => '#');
// Summ >< 5.5
$inline_button33 = array("text" => "?❯  5.5  " . $Summa, "callback_data" => '#');
$inline_button34 = array("text" => $RedBlue_Summ . "  " . $summ_MoreLess_55_win . "  5.5", "callback_data" => '#');
$inline_button35 = array("text" => "❯ " . $LossMarker . $summ_More_55_Loss, "callback_data" => '#');
$inline_button36 = array("text" => "❮ " . $LossMarker . $summ_Less_55_Loss, "callback_data" => '#');
// Summ >< 6.5
$inline_button37 = array("text" => "?❯  6.5  " . $Summa, "callback_data" => '#');
$inline_button38 = array("text" => $RedBlue_Summ . "  " . $summ_MoreLess_65_win . "  6.5", "callback_data" => '#');
$inline_button39 = array("text" => "❯ " . $LossMarker . $summ_More_65_Loss, "callback_data" => '#');
$inline_button40 = array("text" => "❮ " . $LossMarker . $summ_Less_65_Loss, "callback_data" => '#');
// Summ >< 7.5
$inline_button41 = array("text" => "?❯  7.5  " . $Summa, "callback_data" => '#');
$inline_button42 = array("text" => $RedBlue_Summ . "  " . $summ_MoreLess_75_win . "  7.5", "callback_data" => '#');
$inline_button43 = array("text" => "❯ " . $LossMarker . $summ_More_75_Loss, "callback_data" => '#');
$inline_button44 = array("text" => "❮ " . $LossMarker . $summ_Less_75_Loss, "callback_data" => '#');
// Summ >< 8.5
$inline_button45 = array("text" => "?❯  8.5  " . $Summa, "callback_data" => '#');
$inline_button46 = array("text" => $RedBlue_Summ . "  " . $summ_MoreLess_85_win . "  8.5", "callback_data" => '#');
$inline_button47 = array("text" => "❯ " . $LossMarker . $summ_More_85_Loss, "callback_data" => '#');
$inline_button48 = array("text" => "❮ " . $LossMarker . $summ_Less_85_Loss, "callback_data" => '#');
// Summ >< 9.5
$inline_button49 = array("text" => "?❯  9.5  " . $Summa, "callback_data" => '#');
$inline_button50 = array("text" => $RedBlue_Summ . "  " . $summ_MoreLess_95_win . "  9.5", "callback_data" => '#');
$inline_button51 = array("text" => "❯ " . $LossMarker . $summ_More_95_Loss, "callback_data" => '#');
$inline_button52 = array("text" => "❮ " . $LossMarker . $summ_Less_95_Loss, "callback_data" => '#');


// Массив представления таблицы
$inline_keyboard = [
    // Заголовок таблицы
    [$inline_button1],
    // Red/Blue
    [$inline_button2, $inline_button3, $inline_button4, $inline_button5],
    // Ravno
    [$inline_button6, $inline_button7, $inline_button8],
    // %2 Red
    [$inline_button9, $inline_button10, $inline_button11, $inline_button12],
    // %2 Blue
    [$inline_button13, $inline_button14, $inline_button15, $inline_button16],
    // %2 Summ
    [$inline_button17, $inline_button18, $inline_button19, $inline_button20],
    // Red >< 3.5
    [$inline_button21, $inline_button22, $inline_button23, $inline_button24],
    // Blue >< 3.5
    [$inline_button25, $inline_button26, $inline_button27, $inline_button28],
    // Summ >< 4.5
    [$inline_button29, $inline_button30, $inline_button31, $inline_button32],
    // Summ >< 5.5
    [$inline_button33, $inline_button34, $inline_button35, $inline_button36],
    // Summ >< 6.5
    [$inline_button37, $inline_button38, $inline_button39, $inline_button40],
    // Summ >< 7.5
    [$inline_button41, $inline_button42, $inline_button43, $inline_button44],
    // Summ >< 8.5
    [$inline_button45, $inline_button46, $inline_button47, $inline_button48],
    // Summ >< 9.5
    [$inline_button49, $inline_button50, $inline_button51, $inline_button52]
];

$keyboard = array("inline_keyboard" => $inline_keyboard);
// Параметры публикации поста по LossTracker
$params = [
    // Id чата
    'chat_id' => $chat_id,
    // Текст сообщения
    'text' => $message,
    'message_id' => $message_id,
    // Представление клавиатуры
    'reply_markup' => json_encode($keyboard)
];

// ===================Представление таблицы Nums.LossTracker

// // Символы
// $One = "‧";
// $Two = "⁚";
// $Three = "⁝";
// $Four = "⁚ ⁚";
// $Five = "⁙";
// $Six = "⁝⁝";
// $NumLossMarker = "❕";⚪✖️ 🔘 🔥⭕☒🔘▫️◽🇯🇵➖〇
// $NumWinMarker = "✅";❌
$NumLossMarker = " - ";
$NumLossMarker_summ = "❕";
$NumWinMarker = "✅";


// Заголовок таблицы Nums.LossTrascer
$inline_button53 = array("text" => "Nums. LossTracker", "callback_data" => '#');

// Параллельная таблица
// Red 1
$r1_win_loss = ($Red == "1") ? $NumWinMarker : $NumLossMarker;
$inline_button54 = array("text" => "1 " . $r1_win_loss, "callback_data" => '#');
$inline_button57 = array("text" => $NumLossMarker_summ . $r1_Loss, "callback_data" => '#');

// Параллельная таблица
// Red 2
$r2_win_loss = ($Red == "2") ? $NumWinMarker : $NumLossMarker;
$inline_button58 = array("text" => "2 " . $r2_win_loss, "callback_data" => '#');
$inline_button61 = array("text" => $NumLossMarker_summ . $r2_Loss, "callback_data" => '#');

// Параллельная таблица
// Red 3
$r3_win_loss = ($Red == "3") ? $NumWinMarker : $NumLossMarker;
$inline_button62 = array("text" => "3 " . $r3_win_loss, "callback_data" => '#');
$inline_button65 = array("text" => $NumLossMarker_summ . $r3_Loss, "callback_data" => '#');

// Параллельная таблица
// Red 4
$r4_win_loss = ($Red == "4") ? $NumWinMarker : $NumLossMarker;
$inline_button66 = array("text" => "4 " . $r4_win_loss, "callback_data" => '#');
$inline_button69 = array("text" => $NumLossMarker_summ . $r4_Loss, "callback_data" => '#');

// Параллельная таблица
// Red 5
$r5_win_loss = ($Red == "5") ? $NumWinMarker : $NumLossMarker;
$inline_button70 = array("text" => "5 " . $r5_win_loss, "callback_data" => '#');
$inline_button73 = array("text" => $NumLossMarker_summ . $r5_Loss, "callback_data" => '#');

// Параллельная таблица
// Red 6
$r6_win_loss = ($Red == "6") ? $NumWinMarker : $NumLossMarker;
$inline_button74 = array("text" => "6 " . $r6_win_loss, "callback_data" => '#');
$inline_button77 = array("text" => $NumLossMarker_summ . $r6_Loss, "callback_data" => '#');

// Blue 1
$b1_win_loss = ($Blue == "1") ? $NumWinMarker : $NumLossMarker;


$inline_button80 = array("text" => "1 " . $b1_win_loss, "callback_data" => '#');
$inline_button81 = array("text" => $NumLossMarker_summ . $b1_Loss, "callback_data" => '#');

// Параллельная таблица
// Blue 2
$b2_win_loss = ($Blue == "2") ? $NumWinMarker : $NumLossMarker;
$inline_button82 = array("text" => "2 " . $b2_win_loss, "callback_data" => '#');
$inline_button85 = array("text" => $NumLossMarker_summ . $b2_Loss, "callback_data" => '#');

// Параллельная таблица
// Blue 3
$b3_win_loss = ($Blue == "3") ? $NumWinMarker : $NumLossMarker;
$inline_button86 = array("text" => "3 " . $b3_win_loss, "callback_data" => '#');
$inline_button89 = array("text" => $NumLossMarker_summ . $b3_Loss, "callback_data" => '#');

// Параллельная таблица
// Blue 4
$b4_win_loss = ($Blue == "4") ? $NumWinMarker : $NumLossMarker;
$inline_button90 = array("text" => "4 " . $b4_win_loss, "callback_data" => '#');
$inline_button93 = array("text" => $NumLossMarker_summ . $b4_Loss, "callback_data" => '#');

// Параллельная таблица
// Blue 5
$b5_win_loss = ($Blue == "5") ? $NumWinMarker : $NumLossMarker;
$inline_button94 = array("text" => "5 " . $b5_win_loss, "callback_data" => '#');
$inline_button97 = array("text" => $NumLossMarker_summ . $b5_Loss, "callback_data" => '#');

// Параллельная таблица
// Blue 6
$b6_win_loss = ($Blue == "6") ? $NumWinMarker : $NumLossMarker;
$inline_button98 = array("text" => "6 " . $b6_win_loss, "callback_data" => '#');
$inline_button101 = array("text" => $NumLossMarker_summ . $b6_Loss, "callback_data" => '#');

// Значение. Красная кость
$inline_button102 = array("text" => $RedColor . " " . $Red, "callback_data" => '#');
// Значение. Синяя кость
$inline_button103 = array("text" => $BlueColor . " " . $Blue, "callback_data" => '#');
// Сумма проигрышей. Красный
$inline_button104 = array("text" => $NumLossMarker_summ . " " . $Summa, "callback_data" => '#');
// Сумма проигрышей. Синий
$inline_button105 = array("text" => $NumLossMarker_summ . " " . $Summa, "callback_data" => '#');


// Массив представления таблицы Nums.LossTracker
$nums_inline_keyboard = [
    // Заголовок таблицы
    [$inline_button53],
    // Значение. Красная/Синяя кость
    [$inline_button102, $inline_button104, $inline_button103, $inline_button105],

    // Параллельная таблица
    [$inline_button54, $inline_button57, $inline_button80, $inline_button81],
    [$inline_button58, $inline_button61, $inline_button82, $inline_button85],
    [$inline_button62, $inline_button65, $inline_button86, $inline_button89],
    [$inline_button66, $inline_button69, $inline_button90, $inline_button93],
    [$inline_button70, $inline_button73, $inline_button94, $inline_button97],
    [$inline_button74, $inline_button77, $inline_button98, $inline_button101],

];
//Представление клавиатуры
$nums_keyboard = array("inline_keyboard" => $nums_inline_keyboard);
// Параметры публикации поста по Nums.LossTracker
$nums_params = [
    // Id чата
    'chat_id' => $chat_id,
    // Текст сообщения
    'text' => $message,
    'message_id' => $nums_message_id,
    // Представление клавиатуры
    'reply_markup' => json_encode($nums_keyboard)
];
// ===================Представление таблицы Nums.LossTracker
// Апдэйт постов
updateMessage($token, 'editMessageText', $nums_params);

updateMessage($token, 'editMessageText', $params);