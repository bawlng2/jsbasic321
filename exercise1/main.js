const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const sumTxt = document.getElementById("sum");
const difTxt = document.getElementById("dif");
const proTxt = document.getElementById("pro");
const quoTxt = document.getElementById("quo");
let sum = 0;
let dif = 0;
let pro = 0;
let quo = 0;

function calculate() {
    if(!(num1Txt.value === "" || num2Txt.value === "")) {
        
        sum = parseInt(num1Txt.value) + parseInt(num2Txt.value);
        dif = parseInt(num1Txt.value) - parseInt(num2Txt.value);
        pro = parseInt(num1Txt.value) * parseInt(num2Txt.value);
        quo = parseInt(num1Txt.value) / parseInt(num2Txt.value);
        sumTxt.innerHTML = sum;
        difTxt.innerHTML = dif;
        proTxt.innerHTML = pro;
        quoTxt.innerHTML = quo;
    }
}

function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = ""
    resultTxt.innerHTML = "";
    sum = 0;

}

