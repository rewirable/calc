const allButtons = document.querySelectorAll("button");
const display = document.getElementById("display");

let firstNumberUp = true;
let symbolUp = false
const numberOne = [];
const numberTwo = [];
let symbol = null;

let displayNumbers = `` 

allButtons.forEach(btn => {
    btn.addEventListener("click", function () {
        if(firstNumberUp)
            switch (btn.id) {
                case "one":
                    displayNumbers = displayNumbers + "1"
                    display.innerHTML = `${displayNumbers}`
                    numberOne.push(1);
                    break;
                case "two":
                    displayNumbers = displayNumbers + "2"
                    display.innerHTML = `${displayNumbers}`

                    numberOne.push(2);
                    break;
                case "three":
                    displayNumbers = displayNumbers + "3"
                    display.innerHTML = `${displayNumbers}`

                    numberOne.push(3);
                    break;
                case "four":
                    displayNumbers = displayNumbers + "4"
                    display.innerHTML = `${displayNumbers}`

                    numberOne.push(4);
                    break;
                case "five":
                    displayNumbers = displayNumbers + "5"
                    display.innerHTML = `${displayNumbers}`

                    numberOne.push(5);
                    break;
                case "six":
                    displayNumbers = displayNumbers + "6"
                    display.innerHTML = `${displayNumbers}`

                    numberOne.push(6);
                    break;
                case "seven":
                    displayNumbers = displayNumbers + "7"
                    display.innerHTML = `${displayNumbers}`

                    numberOne.push(7);
                    break;
                case "eight":
                    displayNumbers = displayNumbers + "8"
                    display.innerHTML = `${displayNumbers}`
                    numberOne.push(8);
                    break;
                case "nine":
                    displayNumbers = displayNumbers + "9"
                    display.innerHTML = `${displayNumbers}`

                    numberOne.push(9);
                    break;
                case "plus":
                    displayNumbers = ""
                    display.innerHTML = `+${displayNumbers}`

                    symbol = "+";
                    symbolUp = true;
                    firstNumberUp = false;
                    break;
                case "minus":
                    displayNumbers = ""
                    display.innerHTML = `-${displayNumbers}`

                    symbol = "-";
                    symbolUp = true;
                    firstNumberUp = false;
                    break;
                case "times":
                    displayNumbers = ""
                    display.innerHTML = `*${displayNumbers}`

                    symbol = "*";
                    symbolUp = true;
                    firstNumberUp = false;
                    break;
                case "divide":
                    displayNumbers = ""
                    display.innerHTML = `/${displayNumbers}`

                    symbol = "/";
                    symbolUp = true;
                    firstNumberUp = false;
                    break;
                case "zero":
                    if(numberOne.length > 0){
                        displayNumbers = displayNumbers + "0"
                        display.innerHTML = `${displayNumbers}`

                        numberOne.push(0);
                        break
                    }
                    display.innerHTML = `first number cant be zero`
                    console.log("first number cant be zero");
                    break;
                case "ac":
                    displayNumbers = ""
                    display.innerHTML = `${displayNumbers}`
                    numberOne.length = 0
                    numberTwo.length = 0
                    symbol = null
                    break;
                case "results":
                    displayNumbers = ""
                    display.innerHTML = `${displayNumbers}`
                    numberOne.length = 0
        } else if(symbolUp){
            switch (btn.id) {
                case "one":
                    displayNumbers = displayNumbers + "1"
                    display.innerHTML = `${displayNumbers}`

                    numberTwo.push(1);
                    break;
                case "two":
                    displayNumbers = displayNumbers + "2"
                    display.innerHTML = `${displayNumbers}`
                    numberTwo.push(2);
                    break;
                case "three":
                    displayNumbers = displayNumbers + "3"
                    display.innerHTML = `${displayNumbers}`
                    numberTwo.push(3);
                    break;
                case "four":
                    displayNumbers = displayNumbers + "4"
                    display.innerHTML = `${displayNumbers}`
                    numberTwo.push(4);
                    break;
                case "five":
                    displayNumbers = displayNumbers + "5"
                    display.innerHTML = `${displayNumbers}`
                    numberTwo.push(5);
                    break;
                case "six":
                    displayNumbers = displayNumbers + "6"
                    display.innerHTML = `${displayNumbers}`
                    numberTwo.push(6);
                    break;
                case "seven":
                    displayNumbers = displayNumbers + "7"
                    display.innerHTML = `${displayNumbers}`
                    numberTwo.push(7);
                    break;
                case "eight":
                    displayNumbers = displayNumbers + "8"
                    display.innerHTML = `${displayNumbers}`
                    numberTwo.push(8);
                    break;
                case "nine":
                    displayNumbers = displayNumbers + "9"
                    display.innerHTML = `${displayNumbers}`
                    numberTwo.push(9);
                    break;
                case "results":
                    displayNumbers = ""
                    const stringOne = numberOne.join("")
                    const stringTwo = numberTwo.join("")
                    const resultNumberOne = Number(stringOne)
                    const resultNumberTwo = Number(stringTwo)
                    let result = null
                    switch(symbol){
                        case "+":
                            result = resultNumberOne + resultNumberTwo;
                            break;
                        case "-":
                            result = resultNumberOne - resultNumberTwo;
                            break;
                        case "*":
                            result = resultNumberOne * resultNumberTwo;
                            break;
                        case "/":
                            result = resultNumberOne / resultNumberTwo;
                            break
                    }
                    display.innerHTML = `${result}`
                    symbol = null
                    numberOne.length = 0
                    numberTwo.length = 0
                    symbolUp = false
                    firstNumberUp = true
                    break;
                case "ac":
                    numberOne.length = 0
                    numberTwo.length = 0
                    symbol = null
            }}
    });
});