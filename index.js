const allButtons = document.querySelectorAll("button");
const display = document.getElementById("display");

let firstNumberUp = true;
let secondNumberUp = false
let symbolUp = false
const numberOne = [];
const numberTwo = [];
let symbol = null;


allButtons.forEach(btn => {
    btn.addEventListener("click", function () {
        if(firstNumberUp)
            switch (btn.id) {
                case "one":
                    numberOne.push(1);
                    break;
                case "two":
                    numberOne.push(2);
                    break;
                case "three":
                    numberOne.push(3);
                    break;
                case "four":
                    numberOne.push(4);
                    break;
                case "five":
                    numberOne.push(5);
                    break;
                case "six":
                    numberOne.push(6);
                    break;
                case "seven":
                    numberOne.push(7);
                    break;
                case "eight":
                    numberOne.push(8);
                    break;
                case "nine":
                    numberOne.push(9);
                    break;
                case "plus":
                    symbol = "+";
                    symbolUp = true;
                    firstNumberUp = false;
                    break;
                case "minus":
                    symbol = "-";
                    symbolUp = true;
                    firstNumberUp = false;
                    break;
                case "times":
                    symbol = "*";
                    symbolUp = true;
                    firstNumberUp = false;
                    break;
                case "divide":
                    symbol = "/";
                    symbolUp = true;
                    firstNumberUp = false;
                    break;
                case "zero":
                    if(numberOne.length > 0){
                        numberOne.push(0);
                        break
                    }
                    console.log("first number cant be zero");
                    break;
                case "ac":
                    numberOne.length = 0
                    numberTwo.length = 0
                    symbol = null
                    break;
                case "results":
                    numberOne.length = 0
        } else if(symbol){
            switch (btn.id) {
                case "one":
                    numberTwo.push(1);
                    break;
                case "two":
                    numberTwo.push(2);
                    break;
                case "three":
                    numberTwo.push(3);
                    break;
                case "four":
                    numberTwo.push(4);
                    break;
                case "five":
                    numberTwo.push(5);
                    break;
                case "six":
                    numberTwo.push(6);
                    break;
                case "seven":
                    numberTwo.push(7);
                    break;
                case "eight":
                    numberTwo.push(8);
                    break;
                case "nine":
                    numberTwo.push(9);
                    break;
                case "results":
                    // logic
                    break
                case "ac":
                    numberOne.length = 0
                    numberTwo.length = 0
                    symbol = null
            }}
    });
});