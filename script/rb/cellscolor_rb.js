// $("document").ready(function () {
function tablePresent(locStorStr, results, OnPageTime, Tbody_rb, Tbody_nums, Td_rbr_shah, Td_rav_shah, Td_cn_shah_r, Td_cn_shah_b, Td_cn_shah_s, Td_ml35_shah_r, Td_ml35_shah_b, Td_ml45_shah_s, Td_ml55_shah_s, Td_ml65_shah_s, Td_ml75_shah_s, Td_ml85_shah_s, Td_ml95_shah_s) {

    // Преобразуем строку настроек locStorStr в JSON объект
    let locStorSetJson = JSON.parse(locStorStr);
    // setTimeout(function () {
    // console.log(locStorSetJson.r4_loss);
    // }, 100);
    // setTimeout(function () {
    // Количество проигрышей. Cобытия
    let rbLosnum = locStorSetJson.rb_loss;
    let ravnoLosnum = locStorSetJson.ravno_loss;
    let cn_redLosnum = locStorSetJson.cn_red_loss;
    let cn_blueLosnum = locStorSetJson.cn_blue_loss;
    let cn_summLosnum = locStorSetJson.cn_summ_loss;
    let ml35_redLosnum = locStorSetJson.ml_35_red_loss;
    let ml35_blueLosnum = locStorSetJson.ml_35_blue_loss;
    let ml45_summ_more_Losnum = locStorSetJson.more_45_summ_loss;
    let ml45_summ_less_Losnum = locStorSetJson.less_45_summ_loss;
    let ml55_summ_more_Losnum = locStorSetJson.more_55_summ_loss;
    let ml55_summ_less_Losnum = locStorSetJson.less_55_summ_loss;
    let ml65_summ_more_Losnum = locStorSetJson.more_65_summ_loss;
    let ml65_summ_less_Losnum = locStorSetJson.less_65_summ_loss;
    let ml75_summ_more_Losnum = locStorSetJson.more_75_summ_loss;
    let ml75_summ_less_Losnum = locStorSetJson.less_75_summ_loss;
    let ml85_summ_more_Losnum = locStorSetJson.more_85_summ_loss;
    let ml85_summ_less_Losnum = locStorSetJson.less_85_summ_loss;
    let ml95_summ_more_Losnum = locStorSetJson.more_95_summ_loss;
    let ml95_summ_less_Losnum = locStorSetJson.less_95_summ_loss;

    // let r_shah_Winnum = 3;
    // let b_shah_Winnum = 3;
    let rb_shah_Winnum = locStorSetJson.rb_shah_Win;
    let rav_shah_Lossnum = locStorSetJson.rav_shah_Loss;
    let cn_r_shah_Winnum = locStorSetJson.cn_r_shah_Win;
    let cn_b_shah_Winnum = locStorSetJson.cn_b_shah_Win;
    let cn_summ_shah_Winnum = locStorSetJson.cn_summ_shah_Win;
    let ml35_red_shah_Winnum = locStorSetJson.ml35_shah_redWin;
    let ml35_blue_shah_Winnum = locStorSetJson.ml35_shah_blueWin;
    let ml45_shah_summ_more_Winnum = locStorSetJson.ml45_summ_shah_more_Win;
    let ml45_shah_summ_less_Winnum = locStorSetJson.ml45_summ_shah_less_Win;
    let ml55_shah_summ_more_Winnum = locStorSetJson.ml55_summ_shah_more_Win;
    let ml55_shah_summ_less_Winnum = locStorSetJson.ml55_summ_shah_less_Win;
    let ml65_shah_summ_more_Winnum = locStorSetJson.ml65_summ_shah_more_Win;
    let ml65_shah_summ_less_Winnum = locStorSetJson.ml65_summ_shah_less_Win;
    let ml75_shah_summ_more_Winnum = locStorSetJson.ml75_summ_shah_more_Win;
    let ml75_shah_summ_less_Winnum = locStorSetJson.ml75_summ_shah_less_Win;
    let ml85_shah_summ_more_Winnum = locStorSetJson.ml85_summ_shah_more_Win;
    let ml85_shah_summ_less_Winnum = locStorSetJson.ml85_summ_shah_less_Win;
    let ml95_shah_summ_more_Winnum = locStorSetJson.ml95_summ_shah_more_Win;
    let ml95_shah_summ_less_Winnum = locStorSetJson.ml95_summ_shah_less_Win;

    // Количество проигрышей. Числа
    let r1_Lossnum = locStorSetJson.r1_loss;
    let r2_Lossnum = locStorSetJson.r2_loss;
    let r3_Lossnum = locStorSetJson.r3_loss;
    let r4_Lossnum = locStorSetJson.r4_loss;
    let r5_Lossnum = locStorSetJson.r5_loss;
    let r6_Lossnum = locStorSetJson.r6_loss;
    let b1_Lossnum = locStorSetJson.b1_loss;
    let b2_Lossnum = locStorSetJson.b2_loss;
    let b3_Lossnum = locStorSetJson.b3_loss;
    let b4_Lossnum = locStorSetJson.b4_loss;
    let b5_Lossnum = locStorSetJson.b5_loss;
    let b6_Lossnum = locStorSetJson.b6_loss;

    let r1_WinLoss = '';
    let r2_WinLoss = '';
    let r3_WinLoss = '';
    let r4_WinLoss = '';
    let r5_WinLoss = '';
    let r6_WinLoss = '';
    let b1_WinLoss = '';
    let b2_WinLoss = '';
    let b3_WinLoss = '';
    let b4_WinLoss = '';
    let b5_WinLoss = '';
    let b6_WinLoss = '';

    // Шахматка
    let rbr_shahResult = '';
    let rav_shahResult = '';
    let cn_red_shahResult = '';
    let cn_blue_shahResult = '';
    let cn_summ_shahResult = '';
    let ml35_red_shahResult = '';
    let ml35_blue_shahResult = '';
    let ml45_summ_shahResult = '';
    let ml55_summ_shahResult = '';
    let ml65_summ_shahResult = '';
    let ml75_summ_shahResult = '';
    let ml85_summ_shahResult = '';
    let ml95_summ_shahResult = '';
    // }, 100);
    // Цикл, в котором публикуем актуальные записи
    for (a = 0; a < results.length; a++) {

        // Берём запись из json массива под индексом 'a'
        let result = results[a];
        // Получаем время события
        var eventTime = new Date(Number(result.Time + '000')).toLocaleTimeString();
        // Кидаем time записи в хранилище браузера. Пока в качестве эксперимента
        localStorage.setItem('time', eventTime);
        // console.log(eventTime);
        // цвет ячейки "Red / Blue"
        let color_rb = "nonSignal";
        // Цвет ячейки "Ravno"
        let color_ravno = "nonSignal";
        // Цвет ячейки "%2 Red"
        let color_cn_red = "nonSignal";
        // Цвет ячейки "%2 Blue"
        let color_cn_blue = "nonSignal";
        // Цвет ячейки "%2 Summ"
        let color_cn_summ = "nonSignal";
        // Цвет ячейки "Red >< 3.5"
        let color_ml35_red = "nonSignal";
        // Цвет ячейки "Blue >< 3.5"
        let color_ml35_blue = "nonSignal";
        // Цвет ячейки "Summ >< 4.5"
        let color_ml45_summ = "nonSignal";
        // Цвет ячейки "Summ >< 5.5"
        let color_ml55_summ = "nonSignal";
        // Цвет ячейки "Summ >< 6.5"
        let color_ml65_summ = "nonSignal";
        // Цвет ячейки "Summ >< 7.5"
        let color_ml75_summ = "nonSignal";
        // Цвет ячейки "Summ >< 8.5"
        let color_ml85_summ = "nonSignal";
        // Цвет ячейки "Summ >< 9.5"
        let color_ml95_summ = "nonSignal";
        // Цвет ячейки "Red 1"
        let color_r1_num = "nonSignal";
        // Цвет ячейки "Red 2"
        let color_r2_num = "nonSignal";
        // Цвет ячейки "Red 3"
        let color_r3_num = "nonSignal";
        // Цвет ячейки "Red 4"
        let color_r4_num = "nonSignal";
        // Цвет ячейки "Red 5"
        let color_r5_num = "nonSignal";
        // Цвет ячейки "Red 6"
        let color_r6_num = "nonSignal";
        // Цвет ячейки "Blue 1"
        let color_b1_num = "nonSignal";
        // Цвет ячейки "Blue 2"
        let color_b2_num = "nonSignal";
        // Цвет ячейки "Blue 3"
        let color_b3_num = "nonSignal";
        // Цвет ячейки "Blue 4"
        let color_b4_num = "nonSignal";
        // Цвет ячейки "Blue 5"
        let color_b5_num = "nonSignal";
        // Цвет ячейки "Blue 6"
        let color_b6_num = "nonSignal";
        // Цвет при выигрыше красной кости
        let color_r_win = "nonSignal";
        // Цвет при выигрыше синей кости
        let color_b_win = "nonSignal";


        //======================================               Обработка результатов / Раскраска     	  ====================================================//
        // setTimeout(function () {
        // console.log(locStorSetJson.r2_loss);
        // }, 100);
        /*--------------------      Red / Blue     -------------------------------*/
        if (result.BLoss == rbLosnum - 2 && result.RLoss < result.BLoss || result.RLoss == rbLosnum - 2 && result.BLoss < result.RLoss) { color_rb = "greenSignal"; }
        if (result.BLoss == rbLosnum - 1 && result.RLoss < result.BLoss || result.RLoss == rbLosnum - 1 && result.BLoss < result.RLoss) { color_rb = "yellowSignal"; }
        if (result.BLoss == rbLosnum && result.RLoss < result.BLoss || result.RLoss == rbLosnum && result.BLoss < result.RLoss) { color_rb = "pinkSignal"; }
        if (result.BLoss > rbLosnum && result.RLoss < result.BLoss || result.RLoss > rbLosnum && result.BLoss < result.RLoss) { color_rb = "pinkSignal"; }
        /*--------------------      / Red / Blue      -------------------------------*/
        /*--------------------      Ravno     -------------------------------*/
        if (result.RavLoss == ravnoLosnum - 2) { color_ravno = "greenSignal"; }
        if (result.RavLoss == ravnoLosnum - 1) { color_ravno = "yellowSignal"; }
        if (result.RavLoss == ravnoLosnum) { color_ravno = "pinkSignal"; }
        if (result.RavLoss > ravnoLosnum) { color_ravno = "pinkSignal"; }
        /*--------------------      / Ravno      -------------------------------*/
        /*--------------------      %2 Red     -------------------------------*/
        if (result.red_Chet_Loss == cn_redLosnum - 2 && result.red_Nechet_Loss < result.red_Chet_Loss || result.red_Nechet_Loss == cn_redLosnum - 2 && result.red_Chet_Loss < result.red_Nechet_Loss) { color_cn_red = "greenSignal"; }
        if (result.red_Chet_Loss == cn_redLosnum - 1 && result.red_Nechet_Loss < result.red_Chet_Loss || result.red_Nechet_Loss == cn_redLosnum - 1 && result.red_Chet_Loss < result.red_Nechet_Loss) { color_cn_red = "yellowSignal"; }
        if (result.red_Chet_Loss == cn_redLosnum && result.red_Nechet_Loss < result.red_Chet_Loss || result.red_Nechet_Loss == cn_redLosnum && result.red_Chet_Loss < result.red_Nechet_Loss) { color_cn_red = "pinkSignal"; }
        if (result.red_Chet_Loss > cn_redLosnum && result.red_Nechet_Loss < result.red_Chet_Loss || result.red_Nechet_Loss > cn_redLosnum && result.red_Chet_Loss < result.red_Nechet_Loss) { color_cn_red = "pinkSignal"; }
        /*--------------------      / %2 Red      -------------------------------*/
        /*--------------------      %2 Blue     -------------------------------*/
        if (result.blue_Chet_Loss == cn_blueLosnum - 2 && result.blue_Nechet_Loss < result.blue_Chet_Loss || result.blue_Nechet_Loss == cn_blueLosnum - 2 && result.blue_Chet_Loss < result.blue_Nechet_Loss) { color_cn_blue = "greenSignal"; }
        if (result.blue_Chet_Loss == cn_blueLosnum - 1 && result.blue_Nechet_Loss < result.blue_Chet_Loss || result.blue_Nechet_Loss == cn_blueLosnum - 1 && result.blue_Chet_Loss < result.blue_Nechet_Loss) { color_cn_blue = "yellowSignal"; }
        if (result.blue_Chet_Loss == cn_blueLosnum && result.blue_Nechet_Loss < result.blue_Chet_Loss || result.blue_Nechet_Loss == cn_blueLosnum && result.blue_Chet_Loss < result.blue_Nechet_Loss) { color_cn_blue = "pinkSignal"; }
        if (result.blue_Chet_Loss > cn_blueLosnum && result.blue_Nechet_Loss < result.blue_Chet_Loss || result.blue_Nechet_Loss > cn_blueLosnum && result.blue_Chet_Loss < result.blue_Nechet_Loss) { color_cn_blue = "pinkSignal"; }
        /*--------------------      / %2 Blue      -------------------------------*/
        /*--------------------      %2 Summ     -------------------------------*/
        if (result.summ_Chet_Loss == cn_summLosnum - 2 && result.summ_Nechet_Loss < result.summ_Chet_Loss || result.summ_Nechet_Loss == cn_summLosnum - 2 && result.summ_Chet_Loss < result.summ_Nechet_Loss) { color_cn_summ = "greenSignal"; }
        if (result.summ_Chet_Loss == cn_summLosnum - 1 && result.summ_Nechet_Loss < result.summ_Chet_Loss || result.summ_Nechet_Loss == cn_summLosnum - 1 && result.summ_Chet_Loss < result.summ_Nechet_Loss) { color_cn_summ = "yellowSignal"; }
        if (result.summ_Chet_Loss == cn_summLosnum && result.summ_Nechet_Loss < result.summ_Chet_Loss || result.summ_Nechet_Loss == cn_summLosnum && result.summ_Chet_Loss < result.summ_Nechet_Loss) { color_cn_summ = "pinkSignal"; }
        if (result.summ_Chet_Loss > cn_summLosnum && result.summ_Nechet_Loss < result.summ_Chet_Loss || result.summ_Nechet_Loss > cn_summLosnum && result.summ_Chet_Loss < result.summ_Nechet_Loss) { color_cn_summ = "pinkSignal"; }
        /*--------------------      / %2 Summ      -------------------------------*/
        /*--------------------      Red >< 3.5     -------------------------------*/
        if (result.red_More_35_Loss == ml35_redLosnum - 2 && result.red_Less_35_Loss < result.red_More_35_Loss || result.red_Less_35_Loss == ml35_redLosnum - 2 && result.red_More_35_Loss < result.red_Less_35_Loss) { color_ml35_red = "greenSignal"; }
        if (result.red_More_35_Loss == ml35_redLosnum - 1 && result.red_Less_35_Loss < result.red_More_35_Loss || result.red_Less_35_Loss == ml35_redLosnum - 1 && result.red_More_35_Loss < result.red_Less_35_Loss) { color_ml35_red = "yellowSignal"; }
        if (result.red_More_35_Loss == ml35_redLosnum && result.red_Less_35_Loss < result.red_More_35_Loss || result.red_Less_35_Loss == ml35_redLosnum && result.red_More_35_Loss < result.red_Less_35_Loss) { color_ml35_red = "pinkSignal"; }
        if (result.red_More_35_Loss > ml35_redLosnum && result.red_Less_35_Loss < result.red_More_35_Loss || result.red_Less_35_Loss > ml35_redLosnum && result.red_More_35_Loss < result.red_Less_35_Loss) { color_ml35_red = "pinkSignal"; }
        /*--------------------      / Red >< 3.5      -------------------------------*/
        /*--------------------      Blue >< 3.5     -------------------------------*/
        if (result.blue_More_35_Loss == ml35_blueLosnum - 2 && result.blue_Less_35_Loss < result.blue_More_35_Loss || result.blue_Less_35_Loss == ml35_blueLosnum - 2 && result.blue_More_35_Loss < result.blue_Less_35_Loss) { color_ml35_blue = "greenSignal"; }
        if (result.blue_More_35_Loss == ml35_blueLosnum - 1 && result.blue_Less_35_Loss < result.blue_More_35_Loss || result.blue_Less_35_Loss == ml35_blueLosnum - 1 && result.blue_More_35_Loss < result.blue_Less_35_Loss) { color_ml35_blue = "yellowSignal"; }
        if (result.blue_More_35_Loss == ml35_blueLosnum && result.blue_Less_35_Loss < result.blue_More_35_Loss || result.blue_Less_35_Loss == ml35_blueLosnum && result.blue_More_35_Loss < result.blue_Less_35_Loss) { color_ml35_blue = "pinkSignal"; }
        if (result.blue_More_35_Loss > ml35_blueLosnum && result.blue_Less_35_Loss < result.blue_More_35_Loss || result.blue_Less_35_Loss > ml35_blueLosnum && result.blue_More_35_Loss < result.blue_Less_35_Loss) { color_ml35_blue = "pinkSignal"; }
        /*--------------------      / Blue >< 3.5      -------------------------------*/
        /*--------------------      Summ >< 4.5    -------------------------------*/
        if (result.summ_More_45_Loss == ml45_summ_more_Losnum - 2 && result.summ_Less_45_Loss < result.summ_More_45_Loss) { color_ml45_summ = "blueSignal"; }
        if (result.summ_Less_45_Loss == ml45_summ_less_Losnum - 2 && result.summ_More_45_Loss < result.summ_Less_45_Loss) { color_ml45_summ = "greenSignal"; }
        if (result.summ_More_45_Loss == ml45_summ_more_Losnum - 1 && result.summ_Less_45_Loss < result.summ_More_45_Loss) { color_ml45_summ = "purpleSignal"; }
        if (result.summ_Less_45_Loss == ml45_summ_less_Losnum - 1 && result.summ_More_45_Loss < result.summ_Less_45_Loss) { color_ml45_summ = "yellowSignal"; }
        if (result.summ_More_45_Loss == ml45_summ_more_Losnum && result.summ_Less_45_Loss < result.summ_More_45_Loss) { color_ml45_summ = "violetSignal"; }
        if (result.summ_Less_45_Loss == ml45_summ_less_Losnum && result.summ_More_45_Loss < result.summ_Less_45_Loss) { color_ml45_summ = "pinkSignal"; }
        if (result.summ_More_45_Loss > ml45_summ_more_Losnum && result.summ_Less_45_Loss < result.summ_More_45_Loss) { color_ml45_summ = "violetSignal"; }
        if (result.summ_Less_45_Loss > ml45_summ_less_Losnum && result.summ_More_45_Loss < result.summ_Less_45_Loss) { color_ml45_summ = "pinkSignal"; }
        /*--------------------      / Summ >< 4.5     -------------------------------*/
        /*--------------------      Summ >< 5.5    -------------------------------*/
        if (result.summ_More_55_Loss == ml55_summ_more_Losnum - 2 && result.summ_Less_55_Loss < result.summ_More_55_Loss) { color_ml55_summ = "blueSignal"; }
        if (result.summ_Less_55_Loss == ml55_summ_less_Losnum - 2 && result.summ_More_55_Loss < result.summ_Less_55_Loss) { color_ml55_summ = "greenSignal"; }
        if (result.summ_More_55_Loss == ml55_summ_more_Losnum - 1 && result.summ_Less_55_Loss < result.summ_More_55_Loss) { color_ml55_summ = "purpleSignal"; }
        if (result.summ_Less_55_Loss == ml55_summ_less_Losnum - 1 && result.summ_More_55_Loss < result.summ_Less_55_Loss) { color_ml55_summ = "yellowSignal"; }
        if (result.summ_More_55_Loss == ml55_summ_more_Losnum && result.summ_Less_55_Loss < result.summ_More_55_Loss) { color_ml55_summ = "violetSignal"; }
        if (result.summ_Less_55_Loss == ml55_summ_less_Losnum && result.summ_More_55_Loss < result.summ_Less_55_Loss) { color_ml55_summ = "pinkSignal"; }
        if (result.summ_More_55_Loss > ml55_summ_more_Losnum && result.summ_Less_55_Loss < result.summ_More_55_Loss) { color_ml55_summ = "violetSignal"; }
        if (result.summ_Less_55_Loss > ml55_summ_less_Losnum && result.summ_More_55_Loss < result.summ_Less_55_Loss) { color_ml55_summ = "pinkSignal"; }
        /*--------------------      / Summ >< 5.5     -------------------------------*/
        /*--------------------      Summ >< 6.5    -------------------------------*/
        if (result.summ_More_65_Loss == ml65_summ_more_Losnum - 2 && result.summ_Less_65_Loss < result.summ_More_65_Loss) { color_ml65_summ = "blueSignal"; }
        if (result.summ_Less_65_Loss == ml65_summ_less_Losnum - 2 && result.summ_More_65_Loss < result.summ_Less_65_Loss) { color_ml65_summ = "greenSignal"; }
        if (result.summ_More_65_Loss == ml65_summ_more_Losnum - 1 && result.summ_Less_65_Loss < result.summ_More_65_Loss) { color_ml65_summ = "purpleSignal"; }
        if (result.summ_Less_65_Loss == ml65_summ_less_Losnum - 1 && result.summ_More_65_Loss < result.summ_Less_65_Loss) { color_ml65_summ = "yellowSignal"; }
        if (result.summ_More_65_Loss == ml65_summ_more_Losnum && result.summ_Less_65_Loss < result.summ_More_65_Loss) { color_ml65_summ = "violetSignal"; }
        if (result.summ_Less_65_Loss == ml65_summ_less_Losnum && result.summ_More_65_Loss < result.summ_Less_65_Loss) { color_ml65_summ = "pinkSignal"; }
        if (result.summ_More_65_Loss > ml65_summ_more_Losnum && result.summ_Less_65_Loss < result.summ_More_65_Loss) { color_ml65_summ = "violetSignal"; }
        if (result.summ_Less_65_Loss > ml65_summ_less_Losnum && result.summ_More_65_Loss < result.summ_Less_65_Loss) { color_ml65_summ = "pinkSignal"; }
        /*--------------------      / Summ >< 6.5     -------------------------------*/
        /*--------------------      Summ >< 7.5    -------------------------------*/
        if (result.summ_More_75_Loss == ml75_summ_more_Losnum - 2 && result.summ_Less_75_Loss < result.summ_More_75_Loss) { color_ml75_summ = "greenSignal"; }
        if (result.summ_Less_75_Loss == ml75_summ_less_Losnum - 2 && result.summ_More_75_Loss < result.summ_Less_75_Loss) { color_ml75_summ = "blueSignal"; }
        if (result.summ_More_75_Loss == ml75_summ_more_Losnum - 1 && result.summ_Less_75_Loss < result.summ_More_75_Loss) { color_ml75_summ = "yellowSignal"; }
        if (result.summ_Less_75_Loss == ml75_summ_less_Losnum - 1 && result.summ_More_75_Loss < result.summ_Less_75_Loss) { color_ml75_summ = "purpleSignal"; }
        if (result.summ_More_75_Loss == ml75_summ_more_Losnum && result.summ_Less_75_Loss < result.summ_More_75_Loss) { color_ml75_summ = "pinkSignal"; }
        if (result.summ_Less_75_Loss == ml75_summ_less_Losnum && result.summ_More_75_Loss < result.summ_Less_75_Loss) { color_ml75_summ = "violetSignal"; }
        if (result.summ_More_75_Loss > ml75_summ_more_Losnum && result.summ_Less_75_Loss < result.summ_More_75_Loss) { color_ml75_summ = "pinkSignal"; }
        if (result.summ_Less_75_Loss > ml75_summ_less_Losnum && result.summ_More_75_Loss < result.summ_Less_75_Loss) { color_ml75_summ = "violetSignal"; }
        /*--------------------      / Summ >< 7.5     -------------------------------*/
        /*--------------------      Summ >< 8.5    -------------------------------*/
        if (result.summ_More_85_Loss == ml85_summ_more_Losnum - 2 && result.summ_Less_85_Loss < result.summ_More_85_Loss) { color_ml85_summ = "greenSignal"; }
        if (result.summ_Less_85_Loss == ml85_summ_less_Losnum - 2 && result.summ_More_85_Loss < result.summ_Less_85_Loss) { color_ml85_summ = "blueSignal"; }
        if (result.summ_More_85_Loss == ml85_summ_more_Losnum - 1 && result.summ_Less_85_Loss < result.summ_More_85_Loss) { color_ml85_summ = "yellowSignal"; }
        if (result.summ_Less_85_Loss == ml85_summ_less_Losnum - 1 && result.summ_More_85_Loss < result.summ_Less_85_Loss) { color_ml85_summ = "purpleSignal"; }
        if (result.summ_More_85_Loss == ml85_summ_more_Losnum && result.summ_Less_85_Loss < result.summ_More_85_Loss) { color_ml85_summ = "pinkSignal"; }
        if (result.summ_Less_85_Loss == ml85_summ_less_Losnum && result.summ_More_85_Loss < result.summ_Less_85_Loss) { color_ml85_summ = "violetSignal"; }
        if (result.summ_More_85_Loss > ml85_summ_more_Losnum && result.summ_Less_85_Loss < result.summ_More_85_Loss) { color_ml85_summ = "pinkSignal"; }
        if (result.summ_Less_85_Loss > ml85_summ_less_Losnum && result.summ_More_85_Loss < result.summ_Less_85_Loss) { color_ml85_summ = "violetSignal"; }
        /*--------------------      / Summ >< 8.5     -------------------------------*/
        /*--------------------      Summ >< 9.5    -------------------------------*/
        if (result.summ_More_95_Loss == ml95_summ_more_Losnum - 2 && result.summ_Less_95_Loss < result.summ_More_95_Loss) { color_ml95_summ = "greenSignal"; }
        if (result.summ_Less_95_Loss == ml95_summ_less_Losnum - 2 && result.summ_More_95_Loss < result.summ_Less_95_Loss) { color_ml95_summ = "blueSignal"; }
        if (result.summ_More_95_Loss == ml95_summ_more_Losnum - 1 && result.summ_Less_95_Loss < result.summ_More_95_Loss) { color_ml95_summ = "yellowSignal"; }
        if (result.summ_Less_95_Loss == ml95_summ_less_Losnum - 1 && result.summ_More_95_Loss < result.summ_Less_95_Loss) { color_ml95_summ = "purpleSignal"; }
        if (result.summ_More_95_Loss == ml95_summ_more_Losnum && result.summ_Less_95_Loss < result.summ_More_95_Loss) { color_ml95_summ = "pinkSignal"; }
        if (result.summ_Less_95_Loss == ml95_summ_less_Losnum && result.summ_More_95_Loss < result.summ_Less_95_Loss) { color_ml95_summ = "violetSignal"; }
        if (result.summ_More_95_Loss > ml95_summ_more_Losnum && result.summ_Less_95_Loss < result.summ_More_95_Loss) { color_ml95_summ = "pinkSignal"; }
        if (result.summ_Less_95_Loss > ml95_summ_less_Losnum && result.summ_More_95_Loss < result.summ_Less_95_Loss) { color_ml95_summ = "violetSignal"; }
        /*--------------------      / Summ >< 9.5     -------------------------------*/
        /*--------------------      Red_1     -------------------------------*/
        if (result.r1_Loss == 0) { r1_WinLoss = '<span class=\"redBoldSpan\">WIN</span>'; } else { r1_WinLoss = '<span class=\"redSpan\">LOSS</span>'; } // <span class=\"redBoldSpan\">  </span>  <span class=\"redSpan\">  </span> 
        if (result.r1_Loss == r1_Lossnum - 2) { color_r1_num = "greenSignal"; WinLoss = '<span class=\"redSpan\">LOSS</span>'; }
        if (result.r1_Loss == r1_Lossnum - 1) { color_r1_num = "yellowSignal"; WinLoss = '<span class=\"redSpan\">LOSS</span>'; }
        if (result.r1_Loss == r1_Lossnum) { color_r1_num = "pinkSignal"; WinLoss = '<span class=\"redSpan\">LOSS</span>'; }
        if (result.r1_Loss > r1_Lossnum) { color_r1_num = "pinkSignal"; WinLoss = '<span class=\"redSpan\">LOSS</span>'; }
        /*--------------------      / Red_1      -------------------------------*/
        /*--------------------      Red_2     -------------------------------*/
        if (result.r2_Loss == 0) { r2_WinLoss = '<span class=\"redBoldSpan\">WIN</span>'; } else { r2_WinLoss = '<span class=\"redSpan\">LOSS</span>'; }
        if (result.r2_Loss == r2_Lossnum - 2) { color_r2_num = "greenSignal"; WinLoss = '<span class=\"redSpan\">LOSS</span>'; }
        if (result.r2_Loss == r2_Lossnum - 1) { color_r2_num = "yellowSignal"; WinLoss = '<span class=\"redSpan\">LOSS</span>'; }
        if (result.r2_Loss == r2_Lossnum) { color_r2_num = "pinkSignal"; WinLoss = '<span class=\"redSpan\">LOSS</span>'; }
        if (result.r2_Loss > r2_Lossnum) { color_r2_num = "pinkSignal"; WinLoss = '<span class=\"redSpan\">LOSS</span>'; }
        /*--------------------      / Red_2      -------------------------------*/
        /*--------------------      Red_3     -------------------------------*/
        if (result.r3_Loss == 0) { r3_WinLoss = '<span class=\"redBoldSpan\">WIN</span>'; } else { r3_WinLoss = '<span class=\"redSpan\">LOSS</span>'; }
        if (result.r3_Loss == r3_Lossnum - 2) { color_r3_num = "greenSignal"; WinLoss = '<span class=\"redSpan\">LOSS</span>'; }
        if (result.r3_Loss == r3_Lossnum - 1) { color_r3_num = "yellowSignal"; WinLoss = '<span class=\"redSpan\">LOSS</span>'; }
        if (result.r3_Loss == r3_Lossnum) { color_r3_num = "pinkSignal"; WinLoss = '<span class=\"redSpan\">LOSS</span>'; }
        if (result.r3_Loss > r3_Lossnum) { color_r3_num = "pinkSignal"; WinLoss = '<span class=\"redSpan\">LOSS</span>'; }
        /*--------------------      / Red_3      -------------------------------*/
        /*--------------------      Red_4     -------------------------------*/
        if (result.r4_Loss == 0) { r4_WinLoss = '<span class=\"redBoldSpan\">WIN</span>'; } else { r4_WinLoss = '<span class=\"redSpan\">LOSS</span>'; }
        if (result.r4_Loss == r4_Lossnum - 2) { color_r4_num = "greenSignal"; WinLoss = '<span class=\"redSpan\">LOSS</span>'; }
        if (result.r4_Loss == r4_Lossnum - 1) { color_r4_num = "yellowSignal"; WinLoss = '<span class=\"redSpan\">LOSS</span>'; }
        if (result.r4_Loss == r4_Lossnum) { color_r4_num = "pinkSignal"; WinLoss = '<span class=\"redSpan\">LOSS</span>'; }
        if (result.r4_Loss > r4_Lossnum) { color_r4_num = "pinkSignal"; WinLoss = '<span class=\"redSpan\">LOSS</span>'; }
        /*--------------------      / Red_4      -------------------------------*/
        /*--------------------      Red_5     -------------------------------*/
        if (result.r5_Loss == 0) { r5_WinLoss = '<span class=\"redBoldSpan\">WIN</span>'; } else { r5_WinLoss = '<span class=\"redSpan\">LOSS</span>'; }
        if (result.r5_Loss == r5_Lossnum - 2) { color_r5_num = "greenSignal"; WinLoss = '<span class=\"redSpan\">LOSS</span>'; }
        if (result.r5_Loss == r5_Lossnum - 1) { color_r5_num = "yellowSignal"; WinLoss = '<span class=\"redSpan\">LOSS</span>'; }
        if (result.r5_Loss == r5_Lossnum) { color_r5_num = "pinkSignal"; WinLoss = '<span class=\"redSpan\">LOSS</span>'; }
        if (result.r5_Loss > r5_Lossnum) { color_r5_num = "pinkSignal"; WinLoss = '<span class=\"redSpan\">LOSS</span>'; }
        /*--------------------      / Red_5      -------------------------------*/
        /*--------------------      Red_6     -------------------------------*/
        if (result.r6_Loss == 0) { r6_WinLoss = '<span class=\"redBoldSpan\">WIN</span>'; } else { r6_WinLoss = '<span class=\"redSpan\">LOSS</span>'; }
        if (result.r6_Loss == r6_Lossnum - 2) { color_r6_num = "greenSignal"; WinLoss = '<span class=\"redSpan\">LOSS</span>'; }
        if (result.r6_Loss == r6_Lossnum - 1) { color_r6_num = "yellowSignal"; WinLoss = '<span class=\"redSpan\">LOSS</span>'; }
        if (result.r6_Loss == r6_Lossnum) { color_r6_num = "pinkSignal"; WinLoss = '<span class=\"redSpan\">LOSS</span>'; }
        if (result.r6_Loss > r6_Lossnum) { color_r6_num = "pinkSignal"; WinLoss = '<span class=\"redSpan\">LOSS</span>'; }
        /*--------------------      / Red_6      -------------------------------*/
        /*--------------------      Blue_1     -------------------------------*/
        if (result.b1_Loss == 0) { b1_WinLoss = '<span class=\"blueBoldSpan\">WIN</span>'; } else { b1_WinLoss = '<span class=\"blueSpan\">LOSS</span>'; }
        if (result.b1_Loss == b1_Lossnum - 2) { color_b1_num = "greenSignal"; WinLoss = '<span class=\"blueSpan\">LOSS</span>'; }
        if (result.b1_Loss == b1_Lossnum - 1) { color_b1_num = "yellowSignal"; WinLoss = '<span class=\"blueSpan\">LOSS</span>'; }
        if (result.b1_Loss == b1_Lossnum) { color_b1_num = "pinkSignal"; WinLoss = '<span class=\"blueSpan\">LOSS</span>'; }
        if (result.b1_Loss > b1_Lossnum) { color_b1_num = "pinkSignal"; WinLoss = '<span class=\"blueSpan\">LOSS</span>'; }
        /*--------------------      / Blue_1      -------------------------------*/
        /*--------------------      Blue_2     -------------------------------*/
        if (result.b2_Loss == 0) { b2_WinLoss = '<span class=\"blueBoldSpan\">WIN</span>'; } else { b2_WinLoss = '<span class=\"blueSpan\">LOSS</span>'; }
        if (result.b2_Loss == b2_Lossnum - 2) { color_b2_num = "greenSignal"; WinLoss = '<span class=\"blueSpan\">LOSS</span>'; }
        if (result.b2_Loss == b2_Lossnum - 1) { color_b2_num = "yellowSignal"; WinLoss = '<span class=\"blueSpan\">LOSS</span>'; }
        if (result.b2_Loss == b2_Lossnum) { color_b2_num = "pinkSignal"; WinLoss = '<span class=\"blueSpan\">LOSS</span>'; }
        if (result.b2_Loss > b2_Lossnum) { color_b2_num = "pinkSignal"; WinLoss = '<span class=\"blueSpan\">LOSS</span>'; }
        /*--------------------      / Blue_2      -------------------------------*/
        /*--------------------      Blue_3     -------------------------------*/
        if (result.b3_Loss == 0) { b3_WinLoss = '<span class=\"blueBoldSpan\">WIN</span>'; } else { b3_WinLoss = '<span class=\"blueSpan\">LOSS</span>'; }
        if (result.b3_Loss == b3_Lossnum - 2) { color_b3_num = "greenSignal"; WinLoss = '<span class=\"blueSpan\">LOSS</span>'; }
        if (result.b3_Loss == b3_Lossnum - 1) { color_b3_num = "yellowSignal"; WinLoss = '<span class=\"blueSpan\">LOSS</span>'; }
        if (result.b3_Loss == b3_Lossnum) { color_b3_num = "pinkSignal"; WinLoss = '<span class=\"blueSpan\">LOSS</span>'; }
        if (result.b3_Loss > b3_Lossnum) { color_b3_num = "pinkSignal"; WinLoss = '<span class=\"blueSpan\">LOSS</span>'; }
        /*--------------------      / Blue_3      -------------------------------*/
        /*--------------------      Blue_4     -------------------------------*/
        if (result.b4_Loss == 0) { b4_WinLoss = '<span class=\"blueBoldSpan\">WIN</span>'; } else { b4_WinLoss = '<span class=\"blueSpan\">LOSS</span>'; }
        if (result.b4_Loss == b4_Lossnum - 2) { color_b4_num = "greenSignal"; WinLoss = '<span class=\"blueSpan\">LOSS</span>'; }
        if (result.b4_Loss == b4_Lossnum - 1) { color_b4_num = "yellowSignal"; WinLoss = '<span class=\"blueSpan\">LOSS</span>'; }
        if (result.b4_Loss == b4_Lossnum) { color_b4_num = "pinkSignal"; WinLoss = '<span class=\"blueSpan\">LOSS</span>'; }
        if (result.b4_Loss > b4_Lossnum) { color_b4_num = "pinkSignal"; WinLoss = '<span class=\"blueSpan\">LOSS</span>'; }
        /*--------------------      / Blue_4      -------------------------------*/
        /*--------------------      Blue_5     -------------------------------*/
        if (result.b5_Loss == 0) { b5_WinLoss = '<span class=\"blueBoldSpan\">WIN</span>'; } else { b5_WinLoss = '<span class=\"blueSpan\">LOSS</span>'; }
        if (result.b5_Loss == b5_Lossnum - 2) { color_b5_num = "greenSignal"; WinLoss = '<span class=\"blueSpan\">LOSS</span>'; }
        if (result.b5_Loss == b5_Lossnum - 1) { color_b5_num = "yellowSignal"; WinLoss = '<span class=\"blueSpan\">LOSS</span>'; }
        if (result.b5_Loss == b5_Lossnum) { color_b5_num = "pinkSignal"; WinLoss = '<span class=\"blueSpan\">LOSS</span>'; }
        if (result.b5_Loss > b5_Lossnum) { color_b5_num = "pinkSignal"; WinLoss = '<span class=\"blueSpan\">LOSS</span>'; }
        /*--------------------      / Blue_5      -------------------------------*/
        /*--------------------      Blue_6     -------------------------------*/
        if (result.b6_Loss == 0) { b6_WinLoss = '<span class=\"blueBoldSpan\">WIN</span>'; } else { b6_WinLoss = '<span class=\"blueSpan\">LOSS</span>'; }
        if (result.b6_Loss == b6_Lossnum - 2) { color_b6_num = "greenSignal"; WinLoss = '<span class=\"blueSpan\">LOSS</span>'; }
        if (result.b6_Loss == b6_Lossnum - 1) { color_b6_num = "yellowSignal"; WinLoss = '<span class=\"blueSpan\">LOSS</span>'; }
        if (result.b6_Loss == b6_Lossnum) { color_b6_num = "pinkSignal"; WinLoss = '<span class=\"blueSpan\">LOSS</span>'; }
        if (result.b6_Loss > b6_Lossnum) { color_b6_num = "pinkSignal"; WinLoss = '<span class=\"blueSpan\">LOSS</span>'; }
        /*--------------------      / Blue_6      -------------------------------*/



        /*--------------------      rbr_shah    -------------------------------*/
        ///// // if (result.BLoss > 0) { rbr_shahResult = "<div class='wrap_Shah_r_left'><span>" + result.RWin + "</span> </div>"; }
        //// // if (result.RLoss > 0) { rbr_shahResult = "<div class='wrap_Shah_b_right'><span>" + result.BWin + "</span> </div>"; }
        ///// // if (result.RavLoss == 0) { rbr_shahResult = "<div class='wrap_Shah_r_left' style='float:left;'><span>" + result.RWin + "</span> </div>" + "<div class='wrap_Shah_b_right'><span>" + result.BWin + "</span> </div>"; }

        if (result.Red > result.Blue) { rbr_shahResult = "<div class='wrap_Shah_r_left'><span>" + result.RWin + "</span> </div>"; }
        if (result.Blue > result.Red) { rbr_shahResult = "<div class='wrap_Shah_b_right'><span>" + result.BWin + "</span> </div>"; }
        // if (result.Red == result.Blue) { rbr_shahResult = "<div class='wrap_Shah_r_left' style='float:left;'><span>" + result.RWin + "</span> </div>" + "<div class='wrap_Shah_b_right'><span>" + result.BWin + "</span> </div>"; }

        if (result.Red > result.Blue && result.RWin == rb_shah_Winnum - 2) { rbr_shahResult = "<div class='wrap_Shah_r_left wrap_Shah_greenSignal'><span>" + result.RWin + "</span> </div>"; }
        if (result.Blue > result.Red && result.BWin == rb_shah_Winnum - 2) { rbr_shahResult = "<div class='wrap_Shah_b_right wrap_Shah_greenSignal'><span>" + result.BWin + "</span> </div>"; }
        if (result.Red > result.Blue && result.RWin == rb_shah_Winnum - 1) { rbr_shahResult = "<div class='wrap_Shah_r_left wrap_Shah_yellowSignal'><span>" + result.RWin + "</span> </div>"; }
        if (result.Blue > result.Red && result.BWin == rb_shah_Winnum - 1) { rbr_shahResult = "<div class='wrap_Shah_b_right wrap_Shah_yellowSignal'><span>" + result.BWin + "</span> </div>"; }
        if (result.Red > result.Blue && result.RWin == rb_shah_Winnum) { rbr_shahResult = "<div class='wrap_Shah_r_left wrap_Shah_pinkSignal'><span>" + result.RWin + "</span> </div>"; }
        if (result.Blue > result.Red && result.BWin == rb_shah_Winnum) { rbr_shahResult = "<div class='wrap_Shah_b_right wrap_Shah_pinkSignal'><span>" + result.BWin + "</span> </div>"; }
        if (result.Red > result.Blue && result.RWin > rb_shah_Winnum) { rbr_shahResult = "<div class='wrap_Shah_r_left wrap_Shah_pinkSignal'><span>" + result.RWin + "</span> </div>"; }
        if (result.Blue > result.Red && result.BWin > rb_shah_Winnum) { rbr_shahResult = "<div class='wrap_Shah_b_right wrap_Shah_pinkSignal'><span>" + result.BWin + "</span> </div>"; }
        if (result.Red == result.Blue) { rbr_shahResult = "<div class='wrap_Shah_r_left' style='float:left;'><span>" + result.RWin + "</span> </div>" + "<div class='wrap_Shah_b_right' ><span>" + result.BWin + "</span> </div>"; }
        /*--------------------      / rbr_shah     -------------------------------*/
        /*--------------------      rav_shah    -------------------------------*/
        if (result.BLoss > 0) { rav_shahResult = "<div class='wrap_Shah_r_left'><span>" + result.RavLoss + "</span> </div>"; }
        if (result.RLoss > 0) { rav_shahResult = "<div class='wrap_Shah_b_right'><span>" + result.RavLoss + "</span> </div>"; }
        if (result.RavLoss == 0) { rav_shahResult = "<div class='wrap_Shah_rav'><span>" + result.RavWin + "</span></div>"; }

        if (result.RavLoss == rav_shah_Lossnum - 2 && result.Red > result.Blue) { rav_shahResult = "<div class='wrap_Shah_r_left  wrap_Shah_greenSignal'><span>" + result.RavLoss + "</span> </div>"; }
        if (result.RavLoss == rav_shah_Lossnum - 2 && result.Red < result.Blue) { rav_shahResult = "<div class='wrap_Shah_b_right  wrap_Shah_greenSignal'><span>" + result.RavLoss + "</span> </div>"; }
        if (result.RavLoss == rav_shah_Lossnum - 1 && result.Red > result.Blue) { rav_shahResult = "<div class='wrap_Shah_r_left  wrap_Shah_yellowSignal'><span>" + result.RavLoss + "</span> </div>"; }
        if (result.RavLoss == rav_shah_Lossnum - 1 && result.Red < result.Blue) { rav_shahResult = "<div class='wrap_Shah_b_right  wrap_Shah_yellowSignal'><span>" + result.RavLoss + "</span> </div>"; }
        if (result.RavLoss == rav_shah_Lossnum && result.Red > result.Blue) { rav_shahResult = "<div class='wrap_Shah_r_left  wrap_Shah_pinkSignal'><span>" + result.RavLoss + "</span> </div>"; }
        if (result.RavLoss == rav_shah_Lossnum && result.Red < result.Blue) { rav_shahResult = "<div class='wrap_Shah_b_right  wrap_Shah_pinkSignal'><span>" + result.RavLoss + "</span> </div>"; }
        if (result.RavLoss > rav_shah_Lossnum && result.Red > result.Blue) { rav_shahResult = "<div class='wrap_Shah_r_left  wrap_Shah_pinkSignal'><span>" + result.RavLoss + "</span> </div>"; }
        if (result.RavLoss > rav_shah_Lossnum && result.Red < result.Blue) { rav_shahResult = "<div class='wrap_Shah_b_right  wrap_Shah_pinkSignal'><span>" + result.RavLoss + "</span> </div>"; }
        /*--------------------      / rav_shah     -------------------------------*/

        /*--------------------      cn_red_shah      -------------------------------*/
        if (result.ChetNechet_red_win == 'Nechet') { cn_red_shahResult = "<div class='wrap_Shah_r_right'><span>N " + result.red_Chet_Loss + "</span>"; }
        if (result.ChetNechet_red_win == 'Chet') { cn_red_shahResult = "<div class='wrap_Shah_r_left'><span>C " + result.red_Nechet_Loss + "</span>"; }

        if (result.red_Chet_Loss == cn_r_shah_Winnum - 2 && result.ChetNechet_red_win == 'Nechet') { cn_red_shahResult = "<div class='wrap_Shah_r_right wrap_Shah_greenSignal'><span>N " + result.red_Chet_Loss + "</span>"; }
        if (result.red_Nechet_Loss == cn_r_shah_Winnum - 2 && result.ChetNechet_red_win == 'Chet') { cn_red_shahResult = "<div class='wrap_Shah_r_left wrap_Shah_greenSignal'><span>C " + result.red_Nechet_Loss + "</span>"; }
        if (result.red_Chet_Loss == cn_r_shah_Winnum - 1 && result.ChetNechet_red_win == 'Nechet') { cn_red_shahResult = "<div class='wrap_Shah_r_right wrap_Shah_yellowSignal'><span>N " + result.red_Chet_Loss + "</span>"; }
        if (result.red_Nechet_Loss == cn_r_shah_Winnum - 1 && result.ChetNechet_red_win == 'Chet') { cn_red_shahResult = "<div class='wrap_Shah_r_left wrap_Shah_yellowSignal'><span>C " + result.red_Nechet_Loss + "</span>"; }
        if (result.red_Chet_Loss == cn_r_shah_Winnum && result.ChetNechet_red_win == 'Nechet') { cn_red_shahResult = "<div class='wrap_Shah_r_right wrap_Shah_pinkSignal'><span>N " + result.red_Chet_Loss + "</span>"; }
        if (result.red_Nechet_Loss == cn_r_shah_Winnum && result.ChetNechet_red_win == 'Chet') { cn_red_shahResult = "<div class='wrap_Shah_r_left wrap_Shah_pinkSignal'><span>C " + result.red_Nechet_Loss + "</span>"; }
        if (result.red_Chet_Loss > cn_r_shah_Winnum && result.ChetNechet_red_win == 'Nechet') { cn_red_shahResult = "<div class='wrap_Shah_r_right wrap_Shah_pinkSignal'><span>N " + result.red_Chet_Loss + "</span>"; }
        if (result.red_Nechet_Loss > cn_r_shah_Winnum && result.ChetNechet_red_win == 'Chet') { cn_red_shahResult = "<div class='wrap_Shah_r_left wrap_Shah_pinkSignal'><span>C " + result.red_Nechet_Loss + "</span>"; }


        /*--------------------      / cn_red_shah      -------------------------------*/
        /*--------------------      cn_blue_shah      -------------------------------*/
        if (result.ChetNechet_blue_win == 'Nechet') { cn_blue_shahResult = "<div class='wrap_Shah_b_right'><span>N " + result.blue_Chet_Loss + "</span>"; }
        if (result.ChetNechet_blue_win == 'Chet') { cn_blue_shahResult = "<div class='wrap_Shah_b_left'><span>C " + result.blue_Nechet_Loss + "</span>"; }

        if (result.blue_Chet_Loss == cn_b_shah_Winnum - 2 && result.ChetNechet_blue_win == 'Nechet') { cn_blue_shahResult = "<div class='wrap_Shah_b_right wrap_Shah_greenSignal'><span>N " + result.blue_Chet_Loss + "</span>"; }
        if (result.blue_Nechet_Loss == cn_b_shah_Winnum - 2 && result.ChetNechet_blue_win == 'Chet') { cn_blue_shahResult = "<div class='wrap_Shah_b_left wrap_Shah_greenSignal'><span>C " + result.blue_Nechet_Loss + "</span>"; }
        if (result.blue_Chet_Loss == cn_b_shah_Winnum - 1 && result.ChetNechet_blue_win == 'Nechet') { cn_blue_shahResult = "<div class='wrap_Shah_b_right wrap_Shah_yellowSignal'><span>N " + result.blue_Chet_Loss + "</span>"; }
        if (result.blue_Nechet_Loss == cn_b_shah_Winnum - 1 && result.ChetNechet_blue_win == 'Chet') { cn_blue_shahResult = "<div class='wrap_Shah_b_left wrap_Shah_yellowSignal'><span>C " + result.blue_Nechet_Loss + "</span>"; }
        if (result.blue_Chet_Loss == cn_b_shah_Winnum && result.ChetNechet_blue_win == 'Nechet') { cn_blue_shahResult = "<div class='wrap_Shah_b_right wrap_Shah_pinkSignal'><span>N " + result.blue_Chet_Loss + "</span>"; }
        if (result.blue_Nechet_Loss == cn_b_shah_Winnum && result.ChetNechet_blue_win == 'Chet') { cn_blue_shahResult = "<div class='wrap_Shah_b_left wrap_Shah_pinkSignal'><span>C " + result.blue_Nechet_Loss + "</span>"; }
        if (result.blue_Chet_Loss > cn_b_shah_Winnum && result.ChetNechet_blue_win == 'Nechet') { cn_blue_shahResult = "<div class='wrap_Shah_b_right wrap_Shah_pinkSignal'><span>N " + result.blue_Chet_Loss + "</span>"; }
        if (result.blue_Nechet_Loss > cn_b_shah_Winnum && result.ChetNechet_blue_win == 'Chet') { cn_blue_shahResult = "<div class='wrap_Shah_b_left wrap_Shah_pinkSignal'><span>C " + result.blue_Nechet_Loss + "</span>"; }

        /*--------------------      /cn_blue_shah      -------------------------------*/
        /*--------------------      cn_summ_shah      -------------------------------*/
        if (result.ChetNechet_summ_win == 'Nechet') { cn_summ_shahResult = "<div class='wrap_Shah_rav_right'><span>N " + result.summ_Chet_Loss + "</span>"; }
        if (result.ChetNechet_summ_win == 'Chet') { cn_summ_shahResult = "<div class='wrap_Shah_rav_left'><span>C " + result.summ_Nechet_Loss + "</span>"; }

        if (result.summ_Chet_Loss == cn_summ_shah_Winnum - 2 && result.ChetNechet_summ_win == 'Nechet') { cn_summ_shahResult = "<div class='wrap_Shah_rav_right wrap_Shah_greenSignal'><span>N " + result.summ_Chet_Loss + "</span>"; }
        if (result.summ_Nechet_Loss == cn_summ_shah_Winnum - 2 && result.ChetNechet_summ_win == 'Chet') { cn_summ_shahResult = "<div class='wrap_Shah_rav_left wrap_Shah_greenSignal'><span>C " + result.summ_Nechet_Loss + "</span>"; }
        if (result.summ_Chet_Loss == cn_summ_shah_Winnum - 1 && result.ChetNechet_summ_win == 'Nechet') { cn_summ_shahResult = "<div class='wrap_Shah_rav_right wrap_Shah_yellowSignal'><span>N " + result.summ_Chet_Loss + "</span>"; }
        if (result.summ_Nechet_Loss == cn_summ_shah_Winnum - 1 && result.ChetNechet_summ_win == 'Chet') { cn_summ_shahResult = "<div class='wrap_Shah_rav_left wrap_Shah_yellowSignal'><span>C " + result.summ_Nechet_Loss + "</span>"; }
        if (result.summ_Chet_Loss == cn_summ_shah_Winnum && result.ChetNechet_summ_win == 'Nechet') { cn_summ_shahResult = "<div class='wrap_Shah_rav_right wrap_Shah_pinkSignal'><span>N " + result.summ_Chet_Loss + "</span>"; }
        if (result.summ_Nechet_Loss == cn_summ_shah_Winnum && result.ChetNechet_summ_win == 'Chet') { cn_summ_shahResult = "<div class='wrap_Shah_rav_left wrap_Shah_pinkSignal'><span>C " + result.summ_Nechet_Loss + "</span>"; }
        if (result.summ_Chet_Loss > cn_summ_shah_Winnum && result.ChetNechet_summ_win == 'Nechet') { cn_summ_shahResult = "<div class='wrap_Shah_rav_right wrap_Shah_pinkSignal'><span>N " + result.summ_Chet_Loss + "</span>"; }
        if (result.summ_Nechet_Loss > cn_summ_shah_Winnum && result.ChetNechet_summ_win == 'Chet') { cn_summ_shahResult = "<div class='wrap_Shah_rav_left wrap_Shah_pinkSignal'><span>C " + result.summ_Nechet_Loss + "</span>"; }

        /*--------------------      /cn_summ_shah      -------------------------------*/

        /*--------------------      Red >< 3.5 shah  -------------------------------*/
        if (result.red_MoreLess_35_win == '❯') { ml35_red_shahResult = "<div class='wrap_Shah_r_left'><span> ❯ " + result.red_Less_35_Loss + "</span>"; }
        if (result.red_MoreLess_35_win == '❮') { ml35_red_shahResult = "<div class='wrap_Shah_r_right'><span> ❮ " + result.red_More_35_Loss + "</span>"; }

        if (result.red_Less_35_Loss == ml35_red_shah_Winnum - 2 && result.red_MoreLess_35_win == '❯') { ml35_red_shahResult = "<div class='wrap_Shah_r_left wrap_Shah_greenSignal'><span> ❯ " + result.red_Less_35_Loss + "</span>"; }
        if (result.red_More_35_Loss == ml35_red_shah_Winnum - 2 && result.red_MoreLess_35_win == '❮') { ml35_red_shahResult = "<div class='wrap_Shah_r_right wrap_Shah_greenSignal'><span> ❮ " + result.red_More_35_Loss + "</span>"; }
        if (result.red_Less_35_Loss == ml35_red_shah_Winnum - 1 && result.red_MoreLess_35_win == '❯') { ml35_red_shahResult = "<div class='wrap_Shah_r_left wrap_Shah_yellowSignal'><span> ❯ " + result.red_Less_35_Loss + "</span>"; }
        if (result.red_More_35_Loss == ml35_red_shah_Winnum - 1 && result.red_MoreLess_35_win == '❮') { ml35_red_shahResult = "<div class='wrap_Shah_r_right wrap_Shah_yellowSignal'><span> ❮ " + result.red_More_35_Loss + "</span>"; }
        if (result.red_Less_35_Loss == ml35_red_shah_Winnum && result.red_MoreLess_35_win == '❯') { ml35_red_shahResult = "<div class='wrap_Shah_r_left wrap_Shah_pinkSignal'><span> ❯ " + result.red_Less_35_Loss + "</span>"; }
        if (result.red_More_35_Loss == ml35_red_shah_Winnum && result.red_MoreLess_35_win == '❮') { ml35_red_shahResult = "<div class='wrap_Shah_r_right wrap_Shah_pinkSignal'><span> ❮ " + result.red_More_35_Loss + "</span>"; }
        if (result.red_Less_35_Loss > ml35_red_shah_Winnum && result.red_MoreLess_35_win == '❯') { ml35_red_shahResult = "<div class='wrap_Shah_r_left wrap_Shah_pinkSignal'><span> ❯ " + result.red_Less_35_Loss + "</span>"; }
        if (result.red_More_35_Loss > ml35_red_shah_Winnum && result.red_MoreLess_35_win == '❮') { ml35_red_shahResult = "<div class='wrap_Shah_r_right wrap_Shah_pinkSignal'><span> ❮ " + result.red_More_35_Loss + "</span>"; }



        /*--------------------      / Red >< 3.5 shah      -------------------------------*/
        /*--------------------      Blue >< 3.5 shah  -------------------------------*/
        if (result.blue_MoreLess_35_win == '❯') { ml35_blue_shahResult = "<div class='wrap_Shah_b_left'><span> ❯ " + result.blue_Less_35_Loss + "</span>"; }
        if (result.blue_MoreLess_35_win == '❮') { ml35_blue_shahResult = "<div class='wrap_Shah_b_right'><span> ❮ " + result.blue_More_35_Loss + "</span>"; }

        if (result.blue_Less_35_Loss == ml35_blue_shah_Winnum - 2 && result.blue_MoreLess_35_win == '❯') { ml35_blue_shahResult = "<div class='wrap_Shah_b_left wrap_Shah_greenSignal'><span> ❯ " + result.blue_Less_35_Loss + "</span>"; }
        if (result.blue_More_35_Loss == ml35_blue_shah_Winnum - 2 && result.blue_MoreLess_35_win == '❮') { ml35_blue_shahResult = "<div class='wrap_Shah_b_right wrap_Shah_greenSignal'><span> ❮ " + result.blue_More_35_Loss + "</span>"; }
        if (result.blue_Less_35_Loss == ml35_blue_shah_Winnum - 1 && result.blue_MoreLess_35_win == '❯') { ml35_blue_shahResult = "<div class='wrap_Shah_b_left wrap_Shah_yellowSignal'><span> ❯ " + result.blue_Less_35_Loss + "</span>"; }
        if (result.blue_More_35_Loss == ml35_blue_shah_Winnum - 1 && result.blue_MoreLess_35_win == '❮') { ml35_blue_shahResult = "<div class='wrap_Shah_b_right wrap_Shah_yellowSignal'><span> ❮ " + result.blue_More_35_Loss + "</span>"; }
        if (result.blue_Less_35_Loss == ml35_blue_shah_Winnum && result.blue_MoreLess_35_win == '❯') { ml35_blue_shahResult = "<div class='wrap_Shah_b_left wrap_Shah_pinkSignal'><span> ❯ " + result.blue_Less_35_Loss + "</span>"; }
        if (result.blue_More_35_Loss == ml35_blue_shah_Winnum && result.blue_MoreLess_35_win == '❮') { ml35_blue_shahResult = "<div class='wrap_Shah_b_right wrap_Shah_pinkSignal'><span> ❮ " + result.blue_More_35_Loss + "</span>"; }
        if (result.blue_Less_35_Loss > ml35_blue_shah_Winnum && result.blue_MoreLess_35_win == '❯') { ml35_blue_shahResult = "<div class='wrap_Shah_b_left wrap_Shah_pinkSignal'><span> ❯ " + result.blue_Less_35_Loss + "</span>"; }
        if (result.blue_More_35_Loss > ml35_blue_shah_Winnum && result.blue_MoreLess_35_win == '❮') { ml35_blue_shahResult = "<div class='wrap_Shah_b_right wrap_Shah_pinkSignal'><span> ❮ " + result.blue_More_35_Loss + "</span>"; }



        /*--------------------      / Blue >< 3.5 shah      -------------------------------*/
        /*--------------------      Summ >< 4.5 shah  -------------------------------*/
        if (result.summ_MoreLess_45_win == '❯') { ml45_summ_shahResult = "<div class='wrap_Shah_rav_left'><span> ❯ " + result.summ_Less_45_Loss + "</span>"; }
        if (result.summ_MoreLess_45_win == '❮') { ml45_summ_shahResult = "<div class='wrap_Shah_rav_right'><span> ❮ " + result.summ_More_45_Loss + "</span>"; }

        if (result.summ_Less_45_Loss == ml45_shah_summ_less_Winnum - 2 && result.summ_MoreLess_45_win == '❯') { ml45_summ_shahResult = "<div class='wrap_Shah_rav_left td-greenSignal'><span> ❯ " + result.summ_Less_45_Loss + "</span>"; }
        if (result.summ_Less_45_Loss == ml45_shah_summ_less_Winnum - 1 && result.summ_MoreLess_45_win == '❯') { ml45_summ_shahResult = "<div class='wrap_Shah_rav_left td-yellowSignal'><span> ❯ " + result.summ_Less_45_Loss + "</span>"; }
        if (result.summ_Less_45_Loss == ml45_shah_summ_less_Winnum && result.summ_MoreLess_45_win == '❯') { ml45_summ_shahResult = "<div class='wrap_Shah_rav_left td-pinkSignal'><span> ❯ " + result.summ_Less_45_Loss + "</span>"; }
        if (result.summ_Less_45_Loss > ml45_shah_summ_less_Winnum && result.summ_MoreLess_45_win == '❯') { ml45_summ_shahResult = "<div class='wrap_Shah_rav_left td-pinkSignal'><span> ❯ " + result.summ_Less_45_Loss + "</span>"; }

        // Сигналы для редких серий
        if (result.summ_More_45_Loss == ml45_shah_summ_more_Winnum - 2 && result.summ_MoreLess_45_win == '❮') { ml45_summ_shahResult = "<div class='wrap_Shah_rav_right td-blueSignal'><span> ❮ " + result.summ_More_45_Loss + "</span>"; }
        if (result.summ_More_45_Loss == ml45_shah_summ_more_Winnum - 1 && result.summ_MoreLess_45_win == '❮') { ml45_summ_shahResult = "<div class='wrap_Shah_rav_right td-purpleSignal'><span> ❮ " + result.summ_More_45_Loss + "</span>"; }
        if (result.summ_More_45_Loss == ml45_shah_summ_more_Winnum && result.summ_MoreLess_45_win == '❮') { ml45_summ_shahResult = "<div class='wrap_Shah_rav_right td-violetSignal'><span> ❮ " + result.summ_More_45_Loss + "</span>"; }
        if (result.summ_More_45_Loss > ml45_shah_summ_more_Winnum && result.summ_MoreLess_45_win == '❮') { ml45_summ_shahResult = "<div class='wrap_Shah_rav_right td-violetSignal'><span> ❮ " + result.summ_More_45_Loss + "</span>"; }

        /*--------------------      / Summ >< 4.5 shah      -------------------------------*/
        /*--------------------      Summ >< 5.5 shah  -------------------------------*/
        // if (result.summ_MoreLess_55_win == '❯') { ml55_summ_shahResult = "<div class='wrap_Shah_rav_left'><span> ❯ " + result.summ_Less_55_Loss + "</span>"; }
        // if (result.summ_MoreLess_55_win == '❮') { ml55_summ_shahResult = "<div class='wrap_Shah_rav_right'><span> ❮ " + result.summ_More_55_Loss + "</span>"; }

        if (result.summ_MoreLess_55_win == '❯') { ml55_summ_shahResult = "<div class='wrap_Shah_rav_left'><span> ❯ " + result.summ_Less_55_Loss + "</span>"; }
        if (result.summ_MoreLess_55_win == '❮') { ml55_summ_shahResult = "<div class='wrap_Shah_rav_right'><span> ❮ " + result.summ_More_55_Loss + "</span>"; }

        if (result.summ_Less_55_Loss == ml55_shah_summ_less_Winnum - 2 && result.summ_MoreLess_55_win == '❯') { ml55_summ_shahResult = "<div class='wrap_Shah_rav_left td-greenSignal'><span> ❯ " + result.summ_Less_55_Loss + "</span>"; }
        if (result.summ_Less_55_Loss == ml55_shah_summ_less_Winnum - 1 && result.summ_MoreLess_55_win == '❯') { ml55_summ_shahResult = "<div class='wrap_Shah_rav_left td-yellowSignal'><span> ❯ " + result.summ_Less_55_Loss + "</span>"; }
        if (result.summ_Less_55_Loss == ml55_shah_summ_less_Winnum && result.summ_MoreLess_55_win == '❯') { ml55_summ_shahResult = "<div class='wrap_Shah_rav_left td-pinkSignal'><span> ❯ " + result.summ_Less_55_Loss + "</span>"; }
        if (result.summ_Less_55_Loss > ml55_shah_summ_less_Winnum && result.summ_MoreLess_55_win == '❯') { ml55_summ_shahResult = "<div class='wrap_Shah_rav_left td-pinkSignal'><span> ❯ " + result.summ_Less_55_Loss + "</span>"; }

        // Сигналы для редких серий
        if (result.summ_More_55_Loss == ml55_shah_summ_more_Winnum - 2 && result.summ_MoreLess_55_win == '❮') { ml55_summ_shahResult = "<div class='wrap_Shah_rav_right td-blueSignal'><span> ❮ " + result.summ_More_55_Loss + "</span>"; }
        if (result.summ_More_55_Loss == ml55_shah_summ_more_Winnum - 1 && result.summ_MoreLess_55_win == '❮') { ml55_summ_shahResult = "<div class='wrap_Shah_rav_right td-purpleSignal'><span> ❮ " + result.summ_More_55_Loss + "</span>"; }
        if (result.summ_More_55_Loss == ml55_shah_summ_more_Winnum && result.summ_MoreLess_55_win == '❮') { ml55_summ_shahResult = "<div class='wrap_Shah_rav_right td-violetSignal'><span> ❮ " + result.summ_More_55_Loss + "</span>"; }
        if (result.summ_More_55_Loss > ml55_shah_summ_more_Winnum && result.summ_MoreLess_55_win == '❮') { ml55_summ_shahResult = "<div class='wrap_Shah_rav_right td-violetSignal'><span> ❮ " + result.summ_More_55_Loss + "</span>"; }

        /*--------------------      / Summ >< 5.5 shah      -------------------------------*/
        /*--------------------      Summ >< 6.5 shah  -------------------------------*/
        // if (result.summ_MoreLess_65_win == '❯') { ml65_summ_shahResult = "<div class='wrap_Shah_rav_left'><span> ❯ " + result.summ_Less_65_Loss + "</span>"; }
        // if (result.summ_MoreLess_65_win == '❮') { ml65_summ_shahResult = "<div class='wrap_Shah_rav_right'><span> ❮ " + result.summ_More_65_Loss + "</span>"; }

        if (result.summ_MoreLess_65_win == '❯') { ml65_summ_shahResult = "<div class='wrap_Shah_rav_left'><span> ❯ " + result.summ_Less_65_Loss + "</span>"; }
        if (result.summ_MoreLess_65_win == '❮') { ml65_summ_shahResult = "<div class='wrap_Shah_rav_right'><span> ❮ " + result.summ_More_65_Loss + "</span>"; }

        if (result.summ_Less_65_Loss == ml65_shah_summ_less_Winnum - 2 && result.summ_MoreLess_65_win == '❯') { ml65_summ_shahResult = "<div class='wrap_Shah_rav_left td-greenSignal'><span> ❯ " + result.summ_Less_65_Loss + "</span>"; }
        if (result.summ_Less_65_Loss == ml65_shah_summ_less_Winnum - 1 && result.summ_MoreLess_65_win == '❯') { ml65_summ_shahResult = "<div class='wrap_Shah_rav_left td-yellowSignal'><span> ❯ " + result.summ_Less_65_Loss + "</span>"; }
        if (result.summ_Less_65_Loss == ml65_shah_summ_less_Winnum && result.summ_MoreLess_65_win == '❯') { ml65_summ_shahResult = "<div class='wrap_Shah_rav_left td-pinkSignal'><span> ❯ " + result.summ_Less_65_Loss + "</span>"; }
        if (result.summ_Less_65_Loss > ml65_shah_summ_less_Winnum && result.summ_MoreLess_65_win == '❯') { ml65_summ_shahResult = "<div class='wrap_Shah_rav_left td-pinkSignal'><span> ❯ " + result.summ_Less_65_Loss + "</span>"; }

        // Сигналы для редких серий
        if (result.summ_More_65_Loss == ml65_shah_summ_more_Winnum - 2 && result.summ_MoreLess_65_win == '❮') { ml65_summ_shahResult = "<div class='wrap_Shah_rav_right td-blueSignal'><span> ❮ " + result.summ_More_65_Loss + "</span>"; }
        if (result.summ_More_65_Loss == ml65_shah_summ_more_Winnum - 1 && result.summ_MoreLess_65_win == '❮') { ml65_summ_shahResult = "<div class='wrap_Shah_rav_right td-purpleSignal'><span> ❮ " + result.summ_More_65_Loss + "</span>"; }
        if (result.summ_More_65_Loss == ml65_shah_summ_more_Winnum && result.summ_MoreLess_65_win == '❮') { ml65_summ_shahResult = "<div class='wrap_Shah_rav_right td-violetSignal'><span> ❮ " + result.summ_More_65_Loss + "</span>"; }
        if (result.summ_More_65_Loss > ml65_shah_summ_more_Winnum && result.summ_MoreLess_65_win == '❮') { ml65_summ_shahResult = "<div class='wrap_Shah_rav_right td-violetSignal'><span> ❮ " + result.summ_More_65_Loss + "</span>"; }

        /*--------------------      / Summ >< 6.5 shah      -------------------------------*/
        /*--------------------      Summ >< 7.5 shah  -------------------------------*/
        // if (result.summ_MoreLess_75_win == '❯') { ml75_summ_shahResult = "<div class='wrap_Shah_rav_left'><span> ❯ " + result.summ_Less_75_Loss + "</span>"; }
        // if (result.summ_MoreLess_75_win == '❮') { ml75_summ_shahResult = "<div class='wrap_Shah_rav_right'><span> ❮ " + result.summ_More_75_Loss + "</span>"; }

        if (result.summ_MoreLess_75_win == '❯') { ml75_summ_shahResult = "<div class='wrap_Shah_rav_left'><span> ❯ " + result.summ_Less_75_Loss + "</span>"; }
        if (result.summ_MoreLess_75_win == '❮') { ml75_summ_shahResult = "<div class='wrap_Shah_rav_right'><span> ❮ " + result.summ_More_75_Loss + "</span>"; }
        // Сигналы для редких серий
        if (result.summ_Less_75_Loss == ml75_shah_summ_less_Winnum - 2 && result.summ_MoreLess_75_win == '❯') { ml75_summ_shahResult = "<div class='wrap_Shah_rav_left td-blueSignal'><span> ❯ " + result.summ_Less_75_Loss + "</span>"; }
        if (result.summ_Less_75_Loss == ml75_shah_summ_less_Winnum - 1 && result.summ_MoreLess_75_win == '❯') { ml75_summ_shahResult = "<div class='wrap_Shah_rav_left td-purpleSignal'><span> ❯ " + result.summ_Less_75_Loss + "</span>"; }
        if (result.summ_Less_75_Loss == ml75_shah_summ_less_Winnum && result.summ_MoreLess_75_win == '❯') { ml75_summ_shahResult = "<div class='wrap_Shah_rav_left td-violetSignal'><span> ❯ " + result.summ_Less_75_Loss + "</span>"; }
        if (result.summ_Less_75_Loss > ml75_shah_summ_less_Winnum && result.summ_MoreLess_75_win == '❯') { ml75_summ_shahResult = "<div class='wrap_Shah_rav_left td-violetSignal'><span> ❯ " + result.summ_Less_75_Loss + "</span>"; }

        if (result.summ_More_75_Loss == ml75_shah_summ_more_Winnum - 2 && result.summ_MoreLess_75_win == '❮') { ml75_summ_shahResult = "<div class='wrap_Shah_rav_right td-greenSignal'><span> ❮ " + result.summ_More_75_Loss + "</span>"; }
        if (result.summ_More_75_Loss == ml75_shah_summ_more_Winnum - 1 && result.summ_MoreLess_75_win == '❮') { ml75_summ_shahResult = "<div class='wrap_Shah_rav_right td-yellowSignal'><span> ❮ " + result.summ_More_75_Loss + "</span>"; }
        if (result.summ_More_75_Loss == ml75_shah_summ_more_Winnum && result.summ_MoreLess_75_win == '❮') { ml75_summ_shahResult = "<div class='wrap_Shah_rav_right td-pinkSignal'><span> ❮ " + result.summ_More_75_Loss + "</span>"; }
        if (result.summ_More_75_Loss > ml75_shah_summ_more_Winnum && result.summ_MoreLess_75_win == '❮') { ml75_summ_shahResult = "<div class='wrap_Shah_rav_right td-pinkSignal'><span> ❮ " + result.summ_More_75_Loss + "</span>"; }


        /*--------------------      / Summ >< 7.5 shah      -------------------------------*/
        /*--------------------      Summ >< 8.5 shah  -------------------------------*/
        // if (result.summ_MoreLess_85_win == '❯') { ml85_summ_shahResult = "<div class='wrap_Shah_rav_left'><span> ❯ " + result.summ_Less_85_Loss + "</span>"; }
        // if (result.summ_MoreLess_85_win == '❮') { ml85_summ_shahResult = "<div class='wrap_Shah_rav_right'><span> ❮ " + result.summ_More_85_Loss + "</span>"; }

        if (result.summ_MoreLess_85_win == '❯') { ml85_summ_shahResult = "<div class='wrap_Shah_rav_left'><span> ❯ " + result.summ_Less_85_Loss + "</span>"; }
        if (result.summ_MoreLess_85_win == '❮') { ml85_summ_shahResult = "<div class='wrap_Shah_rav_right'><span> ❮ " + result.summ_More_85_Loss + "</span>"; }
        // Сигналы для редких серий
        if (result.summ_Less_85_Loss == ml85_shah_summ_less_Winnum - 2 && result.summ_MoreLess_85_win == '❯') { ml85_summ_shahResult = "<div class='wrap_Shah_rav_left td-blueSignal'><span> ❯ " + result.summ_Less_85_Loss + "</span>"; }
        if (result.summ_Less_85_Loss == ml85_shah_summ_less_Winnum - 1 && result.summ_MoreLess_85_win == '❯') { ml85_summ_shahResult = "<div class='wrap_Shah_rav_left td-purpleSignal'><span> ❯ " + result.summ_Less_85_Loss + "</span>"; }
        if (result.summ_Less_85_Loss == ml85_shah_summ_less_Winnum && result.summ_MoreLess_85_win == '❯') { ml85_summ_shahResult = "<div class='wrap_Shah_rav_left td-violetSignal'><span> ❯ " + result.summ_Less_85_Loss + "</span>"; }
        if (result.summ_Less_85_Loss > ml85_shah_summ_less_Winnum && result.summ_MoreLess_85_win == '❯') { ml85_summ_shahResult = "<div class='wrap_Shah_rav_left td-violetSignal'><span> ❯ " + result.summ_Less_85_Loss + "</span>"; }

        if (result.summ_More_85_Loss == ml85_shah_summ_more_Winnum - 2 && result.summ_MoreLess_85_win == '❮') { ml85_summ_shahResult = "<div class='wrap_Shah_rav_right td-greenSignal'><span> ❮ " + result.summ_More_85_Loss + "</span>"; }
        if (result.summ_More_85_Loss == ml85_shah_summ_more_Winnum - 1 && result.summ_MoreLess_85_win == '❮') { ml85_summ_shahResult = "<div class='wrap_Shah_rav_right td-yellowSignal'><span> ❮ " + result.summ_More_85_Loss + "</span>"; }
        if (result.summ_More_85_Loss == ml85_shah_summ_more_Winnum && result.summ_MoreLess_85_win == '❮') { ml85_summ_shahResult = "<div class='wrap_Shah_rav_right td-pinkSignal'><span> ❮ " + result.summ_More_85_Loss + "</span>"; }
        if (result.summ_More_85_Loss > ml85_shah_summ_more_Winnum && result.summ_MoreLess_85_win == '❮') { ml85_summ_shahResult = "<div class='wrap_Shah_rav_right td-pinkSignal'><span> ❮ " + result.summ_More_85_Loss + "</span>"; }
        /*--------------------      / Summ >< 8.5 shah      -------------------------------*/
        /*--------------------      Summ >< 9.5 shah  -------------------------------*/
        // if (result.summ_MoreLess_95_win == '❯') { ml95_summ_shahResult = "<div class='wrap_Shah_rav_left'><span> ❯ " + result.summ_Less_95_Loss + "</span>"; }
        // if (result.summ_MoreLess_95_win == '❮') { ml95_summ_shahResult = "<div class='wrap_Shah_rav_right'><span> ❮ " + result.summ_More_95_Loss + "</span>"; }

        if (result.summ_MoreLess_95_win == '❯') { ml95_summ_shahResult = "<div class='wrap_Shah_rav_left'><span> ❯ " + result.summ_Less_95_Loss + "</span>"; }
        if (result.summ_MoreLess_95_win == '❮') { ml95_summ_shahResult = "<div class='wrap_Shah_rav_right'><span> ❮ " + result.summ_More_95_Loss + "</span>"; }
        // Сигналы для редких серий
        if (result.summ_Less_95_Loss == ml95_shah_summ_less_Winnum - 2 && result.summ_MoreLess_95_win == '❯') { ml95_summ_shahResult = "<div class='wrap_Shah_rav_left td-blueSignal'><span> ❯ " + result.summ_Less_95_Loss + "</span>"; }
        if (result.summ_Less_95_Loss == ml95_shah_summ_less_Winnum - 1 && result.summ_MoreLess_95_win == '❯') { ml95_summ_shahResult = "<div class='wrap_Shah_rav_left td-purpleSignal'><span> ❯ " + result.summ_Less_95_Loss + "</span>"; }
        if (result.summ_Less_95_Loss == ml95_shah_summ_less_Winnum && result.summ_MoreLess_95_win == '❯') { ml95_summ_shahResult = "<div class='wrap_Shah_rav_left td-violetSignal'><span> ❯ " + result.summ_Less_95_Loss + "</span>"; }
        if (result.summ_Less_95_Loss > ml95_shah_summ_less_Winnum && result.summ_MoreLess_95_win == '❯') { ml95_summ_shahResult = "<div class='wrap_Shah_rav_left td-violetSignal'><span> ❯ " + result.summ_Less_95_Loss + "</span>"; }

        if (result.summ_More_95_Loss == ml95_shah_summ_more_Winnum - 2 && result.summ_MoreLess_95_win == '❮') { ml95_summ_shahResult = "<div class='wrap_Shah_rav_right td-greenSignal'><span> ❮ " + result.summ_More_95_Loss + "</span>"; }
        if (result.summ_More_95_Loss == ml95_shah_summ_more_Winnum - 1 && result.summ_MoreLess_95_win == '❮') { ml95_summ_shahResult = "<div class='wrap_Shah_rav_right td-yellowSignal'><span> ❮ " + result.summ_More_95_Loss + "</span>"; }
        if (result.summ_More_95_Loss == ml95_shah_summ_more_Winnum && result.summ_MoreLess_95_win == '❮') { ml95_summ_shahResult = "<div class='wrap_Shah_rav_right td-pinkSignal'><span> ❮ " + result.summ_More_95_Loss + "</span>"; }
        if (result.summ_More_95_Loss > ml95_shah_summ_more_Winnum && result.summ_MoreLess_95_win == '❮') { ml95_summ_shahResult = "<div class='wrap_Shah_rav_right td-pinkSignal'><span> ❮ " + result.summ_More_95_Loss + "</span>"; }
        /*--------------------      / Summ >< 9.5 shah      -------------------------------*/
        // setTimeout(function () {
        //     console.log(locStorSetJson.r2_loss);


        //======================================               / Обработка результатов / Раскраска       	  ====================================================//

        //======================================               Вывод таблицы на странице    	  ====================================================//

        // Смотрим что взяли
        // console.log(result);
        //Если 'Time' записи нет в списке опубликованных, то публикуем запись
        if (OnPageTime.indexOf(result.Time) == -1) {
            //     // // Кидаем time записи в хранилище браузера. Пока в качестве эксперимента
            // localStorage.setItem('time', result.Time);
            // Выводим пост с данными из анализа текущего исхода на странице.
            Tbody_rb.innerHTML += "<tr class='results_rb' id='" + result.Time + "'>" +
                "<td class=\"td-" + color_rb + "\">" + result.Red + ":" + result.Blue + " " + result.r_b_r_win + "</br>R_<span class=\"smallFontSpan\">L</span>" + " - " + "<span class=\"redBoldSpan\">" + result.RLoss + "</span>" + " | B_<span class=\"smallFontSpan\">L</span>" + " - " + "<span class=\"blueBoldSpan\">" + result.BLoss + "</span></td>" +
                "<td class=\"td-" + color_ravno + "\">" + result.Red + ":" + result.Blue + " " + result.r_b_r_win + "</br>Rav_<span class=\"smallFontSpan\">L</span>" + " - " + "<span class=\"violetBoldSpan\">" + result.RavLoss + "</span ></td > " +
                "<td class=\"td-" + color_cn_red + "\">" + result.Red + "<span class=\"redSpan\">" + " " + result.ChetNechet_red_win + "</span>" + "</br>" + " C_<span class=\"smallFontSpan\">L</span> - " + "<span class=\"redBoldSpan\">" + result.red_Chet_Loss + "</span>" + " | N_<span class=\"smallFontSpan\">L</span> - " + "<span class=\"redBoldSpan\">" + result.red_Nechet_Loss + "</span>" + "</td>" +
                "<td class=\"td-" + color_cn_blue + "\">" + result.Blue + "<span class=\"blueSpan\">" + " " + result.ChetNechet_blue_win + "</span>" + "</br>" + " C_<span class=\"smallFontSpan\">L</span> - " + "<span class=\"blueBoldSpan\">" + result.blue_Chet_Loss + "</span>" + " | N_<span class=\"smallFontSpan\">L</span> - " + "<span class=\"blueBoldSpan\">" + result.blue_Nechet_Loss + "</span>" + "</td>" +
                "<td class=\"td-" + color_cn_summ + "\">" + result.RedBlue_Summ + "<span class=\"violetSpan\">" + " " + result.ChetNechet_summ_win + "</span>" + "</br> C_<span class=\"smallFontSpan\">L</span> - " + "<span class=\"violetBoldSpan\">" + result.summ_Chet_Loss + "</span>" + " | N_<span class=\"smallFontSpan\">L</span> - " + "<span class=\"violetBoldSpan\">" + result.summ_Nechet_Loss + "</span>" + "</td>" +
                "<td class=\"td-" + color_ml35_red + "\">" + result.Red + " " + "<span class=\"redBoldSpan\">" + result.red_MoreLess_35_win + "</span>" + " 3.5" + "</br>" + " ❯ " + "<span class=\"smallFontSpan\">L</span>  - " + "<span class=\"redBoldSpan\">" + result.red_More_35_Loss + "</span>" + " |" + " ❮ " + "<span class=\"smallFontSpan\">L</span> - " + "<span class=\"redBoldSpan\">" + result.red_Less_35_Loss + "</span>" + "</td>" +
                "<td class=\"td-" + color_ml35_blue + "\">" + result.Blue + " " + "<span class=\"blueBoldSpan\">" + result.blue_MoreLess_35_win + "</span>" + " 3.5" + "</br>" + " ❯ " + "<span class=\"smallFontSpan\">L</span>  - " + "<span class=\"blueBoldSpan\">" + result.blue_More_35_Loss + "</span>" + " |" + " ❮ " + "<span class=\"smallFontSpan\">L</span> - " + "<span class=\"blueBoldSpan\">" + result.blue_Less_35_Loss + "</span>" + "</td>" +
                "<td class=\"td-" + color_ml45_summ + "\">" + result.RedBlue_Summ + " " + "<span class=\"violetBoldSpan\">" + result.summ_MoreLess_45_win + "</span>" + " 4.5" + "</br>" + " ❯ " + " <span class=\"smallFontSpan\">L</span>  - " + "<span class=\"violetBoldSpan\">" + result.summ_More_45_Loss + "</span>" + " |" + " ❮ " + "<span class=\"smallFontSpan\">L</span>  - " + "<span class=\"violetBoldSpan\">" + result.summ_Less_45_Loss + "</span>" + "</td>" +
                "<td class=\"td-" + color_ml55_summ + "\">" + result.RedBlue_Summ + " " + "<span class=\"violetBoldSpan\">" + result.summ_MoreLess_55_win + "</span>" + " 5.5" + "</br>" + " ❯ " + " <span class=\"smallFontSpan\">L</span>  - " + "<span class=\"violetBoldSpan\">" + result.summ_More_55_Loss + "</span>" + " |" + " ❮ " + "<span class=\"smallFontSpan\">L</span>  - " + "<span class=\"violetBoldSpan\">" + result.summ_Less_55_Loss + "</span>" + "</td>" +
                "<td class=\"td-" + color_ml65_summ + "\">" + result.RedBlue_Summ + " " + "<span class=\"violetBoldSpan\">" + result.summ_MoreLess_65_win + "</span>" + " 6.5" + "</br>" + " ❯ " + " <span class=\"smallFontSpan\">L</span>  - " + "<span class=\"violetBoldSpan\">" + result.summ_More_65_Loss + "</span>" + " |" + " ❮ " + "<span class=\"smallFontSpan\">L</span>  - " + "<span class=\"violetBoldSpan\">" + result.summ_Less_65_Loss + "</span>" + "</td>" +
                "<td class=\"td-" + color_ml75_summ + "\">" + result.RedBlue_Summ + " " + "<span class=\"violetBoldSpan\">" + result.summ_MoreLess_75_win + "</span>" + " 7.5" + "</br>" + " ❯ " + " <span class=\"smallFontSpan\">L</span>  - " + "<span class=\"violetBoldSpan\">" + result.summ_More_75_Loss + "</span>" + " |" + " ❮ " + "<span class=\"smallFontSpan\">L</span>  - " + "<span class=\"violetBoldSpan\">" + result.summ_Less_75_Loss + "</span>" + "</td>" +
                "<td class=\"td-" + color_ml85_summ + "\">" + result.RedBlue_Summ + " " + "<span class=\"violetBoldSpan\">" + result.summ_MoreLess_85_win + "</span>" + " 8.5" + "</br>" + " ❯ " + " <span class=\"smallFontSpan\">L</span>  - " + "<span class=\"violetBoldSpan\">" + result.summ_More_85_Loss + "</span>" + " |" + " ❮ " + "<span class=\"smallFontSpan\">L</span>  - " + "<span class=\"violetBoldSpan\">" + result.summ_Less_85_Loss + "</span>" + "</td>" +
                "<td class=\"td-" + color_ml95_summ + "\">" + result.RedBlue_Summ + " " + "<span class=\"violetBoldSpan\">" + result.summ_MoreLess_95_win + "</span>" + " 9.5" + "</br>" + " ❯ " + " <span class=\"smallFontSpan\">L</span>  - " + "<span class=\"violetBoldSpan\">" + result.summ_More_95_Loss + "</span>" + " |" + " ❮ " + "<span class=\"smallFontSpan\">L</span>  - " + "<span class=\"violetBoldSpan\">" + result.summ_Less_95_Loss + "</span>" + "</td>" +
                "<td class=\" time_row \">" + eventTime + "</td>" +
                "</tr>"
            // Выводим пост с данными из анализа текущего исхода на странице.
            Tbody_nums.innerHTML += "<tr class='results_nums' id='" + result.Time + "'>" +
                "<td class=\"td-" + color_r1_num + "\">" + r1_WinLoss + " | " + " num - " + result.Red + "</br>" + "Loss - " + result.r1_Loss + "</td>" +
                "<td class=\"td-" + color_r2_num + "\">" + r2_WinLoss + " | " + " num - " + result.Red + "</br>" + "Loss - " + result.r2_Loss + "</td>" +
                "<td class=\"td-" + color_r3_num + "\">" + r3_WinLoss + " | " + " num - " + result.Red + "</br>" + "Loss - " + result.r3_Loss + "</td>" +
                "<td class=\"td-" + color_r4_num + "\">" + r4_WinLoss + " | " + " num - " + result.Red + "</br>" + "Loss - " + result.r4_Loss + "</td>" +
                "<td class=\"td-" + color_r5_num + "\">" + r5_WinLoss + " | " + " num - " + result.Red + "</br>" + "Loss - " + result.r5_Loss + "</td>" +
                "<td class=\"td-" + color_r6_num + "\">" + r6_WinLoss + " | " + " num - " + result.Red + "</br>" + "Loss - " + result.r6_Loss + "</td>" +
                "<td class=\"td-" + color_b1_num + "\">" + b1_WinLoss + " | " + " num - " + result.Blue + "</br>" + "Loss - " + result.b1_Loss + "</td>" +
                "<td class=\"td-" + color_b2_num + "\">" + b2_WinLoss + " | " + " num - " + result.Blue + "</br>" + "Loss - " + result.b2_Loss + "</td>" +
                "<td class=\"td-" + color_b3_num + "\">" + b3_WinLoss + " | " + " num - " + result.Blue + "</br>" + "Loss - " + result.b3_Loss + "</td>" +
                "<td class=\"td-" + color_b4_num + "\">" + b4_WinLoss + " | " + " num - " + result.Blue + "</br>" + "Loss - " + result.b4_Loss + "</td>" +
                "<td class=\"td-" + color_b5_num + "\">" + b5_WinLoss + " | " + " num - " + result.Blue + "</br>" + "Loss - " + result.b5_Loss + "</td>" +
                "<td class=\"td-" + color_b6_num + "\">" + b6_WinLoss + " | " + " num - " + result.Blue + "</br>" + "Loss - " + result.b6_Loss + "</td>" +
                "<td class=\" time_row \">" + eventTime + "</td>" +
                "</tr>"
            Td_rbr_shah.innerHTML += "<div class='wrap_Shah' id=" + result.Time + "'>" + rbr_shahResult + "</div>";
            Td_rav_shah.innerHTML += "<div class='wrap_Shah' id=" + result.Time + "'>" + rav_shahResult + "</div>";
            Td_cn_shah_r.innerHTML += "<div class='wrap_Shah' id=" + result.Time + "'>" + cn_red_shahResult + "</div>";
            Td_cn_shah_b.innerHTML += "<div class='wrap_Shah' id=" + result.Time + "'>" + cn_blue_shahResult + "</div>";
            Td_cn_shah_s.innerHTML += "<div class='wrap_Shah' id=" + result.Time + "'>" + cn_summ_shahResult + "</div>";
            Td_ml35_shah_r.innerHTML += "<div class='wrap_Shah' id=" + result.Time + "'>" + ml35_red_shahResult + "</div>";
            Td_ml35_shah_b.innerHTML += "<div class='wrap_Shah' id=" + result.Time + "'>" + ml35_blue_shahResult + "</div>";
            Td_ml45_shah_s.innerHTML += "<div class='wrap_Shah' id=" + result.Time + "'>" + ml45_summ_shahResult + "</div>";
            Td_ml55_shah_s.innerHTML += "<div class='wrap_Shah' id=" + result.Time + "'>" + ml55_summ_shahResult + "</div>";
            Td_ml65_shah_s.innerHTML += "<div class='wrap_Shah' id=" + result.Time + "'>" + ml65_summ_shahResult + "</div>";
            Td_ml75_shah_s.innerHTML += "<div class='wrap_Shah' id=" + result.Time + "'>" + ml75_summ_shahResult + "</div>";
            Td_ml85_shah_s.innerHTML += "<div class='wrap_Shah' id=" + result.Time + "'>" + ml85_summ_shahResult + "</div>";
            Td_ml95_shah_s.innerHTML += "<div class='wrap_Shah' id=" + result.Time + "'>" + ml95_summ_shahResult + "</div>";
            Td_Time_shah.innerHTML += "<div class='wrap_Shah'id=" + result.Time + ">" + eventTime + "</div>";


        }
        // }, 100);
        //======================================               / Вывод таблицы на странице       	  ====================================================//
    }
// return eventTime;
}
// });