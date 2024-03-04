// ACCESSIBLE ELEMENTS

let elemnt1 = document.getElementById("change")
let elemnt2 = document.getElementById("temp-input")
let elemnt3 = document.getElementById("convert-C")
let elemnt4 = document.getElementById("convert-F")
let elemnt5 = document.getElementById("output")

// GLOBAL VARIABLES

let input;
let formula;
let output;
let checked;

// functions 

function view(){

    input = elemnt2.value

    if (elemnt3.checked){
        formula = input * 9 / 5 + 32;
        formula = formula.toFixed(2)

        elemnt1.textContent = `C`
        elemnt5.textContent = formula + ` F`;
    } else if (elemnt4.checked){
        formula = (input - 32) * (5 / 9)
        formula = formula.toFixed(2)

        elemnt1.textContent = `F`
        elemnt5.textContent = formula + ` C`;
    }

}

function reset(){
    elemnt5.textContent = `.`;
}