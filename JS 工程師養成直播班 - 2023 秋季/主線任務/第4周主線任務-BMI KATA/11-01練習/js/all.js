// 第一階段：請寫 printBmi 函式，並印出對應狀態

// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重」
// printBmi(178, 90)>> 印出 console.log 文字為「您的體重輕度肥胖」
// printBmi(178, 110)>> 印出 console.log 文字為「您的體重中度肥胖」
// printBmi(178, 130)>> 印出 console.log 文字為「您的體重重度肥胖」
// printBmi("身高","體重")>> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」


// 第二階段：請程式碼裡加入此變數，並嘗試運用此變數裡的資訊。

// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
// printBmi(178, 90)>> 印出 console.log 文字為「您的體重輕度肥胖，健康指數為黃色」
// printBmi(178, 110)>> 印出 console.log 文字為「您的體重中度肥胖，健康指數為黑色」
// printBmi(178, 130)>> 印出 console.log 文字為「您的體重重度肥胖，健康指數為綠色」
// printBmi("身高","體重")>> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」


// 第三階段：儲存每筆計算資料，多一個變數為 bmiHistoryData，並賦予空陣列來儲存計算物件資料，若數值輸入錯誤，則不儲存。

// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
// showHistoryData() >> 印出 console.log 文字為「您總共計算 3 次 BMI 紀錄，最後一次 BMI 指數為 26.83，體重過重！健康指數為澄色！」

const bmiStatesData = {
    "overThin": {
        "state": "過輕",
        "color": "藍色"
    },
    "normal": {
        "state": "正常",
        "color": "紅色"
    },
    "overWeight": {
        "state": "過重",
        "color": "澄色"
    },
    "mildFat": {
        "state": "輕度肥胖",
        "color": "黃色"
    },
    "moderateFat": {
        "state": "中度肥胖",
        "color": "黑色"
    },
    "severeFat": {
        "state": "重度肥胖",
        "color": "綠色"
    },
}

let bmiHistoryData = [];

function printBmi(height,weight){
    let bmi = Number((weight / (height/100)**2).toFixed(2));
    let status = "";
    if(isNaN(bmi)){
        console.log("您的數值輸入錯誤，請重新輸入")
    }else if(bmi < 18.5){
        status = "overThin";
    }else if(bmi >= 18.5 && bmi < 24){
        status = "normal";
    }else if(bmi >= 24 && bmi < 27){
        status = "overWeight";
    }else if(bmi >= 27 && bmi < 30){
        status = "mildFat";
    }else if(bmi >= 30 && bmi < 35){
        status = "moderateFat";
    }else if(bmi >= 35){
        status = "severeFat";
    }

    if(status !== ""){
        console.log(`您的體重${bmiStatesData[status].state}，健康指數為${bmiStatesData[status].color}`);
        bmiHistoryData.push({
            bmi,
            status,
            state: bmiStatesData[status].state,
            color: bmiStatesData[status].color,
        })
    }
}

function showHistoryData(){
    const dataLength = bmiHistoryData.length;
    const lastData = bmiHistoryData[dataLength-1]
    console.log(`您總共計算 ${dataLength} 次 BMI 紀錄，最後一次 BMI 指數為 ${lastData.bmi}，體重${lastData.state}！健康指數為${lastData.color}！`)
}

printBmi(178, 20);
printBmi(178, 70);
printBmi(178, 85);
// printBmi(178, 90);
// printBmi(178, 110);
// printBmi(178, 130);
// printBmi("身高","體重");
showHistoryData();

//花費時間: 8分54秒