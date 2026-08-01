const allButtons = document.querySelectorAll("button");
const results = document.getElementById("display");

let firstNumberUp = true;
let secondNumberUp = false;

const numberOne = [];
const numberTwo = [];
let whateverr = null;

if (firstNumberUp) {
    let whatever = false;
    if (!whatever) {
        allButtons.forEach(btn => {
            btn.addEventListener("click", function () {
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
                        whateverr = "+";
                        whatever = true;
                        firstNumberUp = false;
                        break;
                    case "minus":
                        whateverr = "-";
                        whatever = true;
                        firstNumberUp = false;
                        break;
                    case "times":
                        whateverr = "*";
                        whatever = true;
                        firstNumberUp = false;
                        break;
                    case "divide":
                        whateverr = "/";
                        whatever = true;
                        firstNumberUp = false;
                        break;
                    case "zero":
                        console.log("first number cant be zero");
                        break;
                    default:
                        console.log("no");
                        break;
                }
            });
        });
    } else {
        allButtons.forEach(btn2 => {
            btn2.addEventListener("click", function () {
                switch (btn2.id) {
                    case "one":
                        numberTwo.push(1);
                        console.log("one, 2nd phase");
                        console.log(numberTwo);
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
                    default:
                        console.log("no");
                        break;
                }
            });
        });
    }
}

