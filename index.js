const buttonElement = document.getElementById("calculate");
const loanInput = document.getElementById("loan");
const interestInput = document.getElementById("interest");
const termInput = document.getElementById("term");
const mortgageSpan = document.getElementById("mortgage");

function calculateTotal() {
    const loanValue = loanInput.value;
    const interestValue = ((interestInput.value / 100) / 12);
    const termValue = (termInput.value * 12);
    const mortgageValue = (loanValue * interestValue ) + (loanValue/termValue);
    mortgageSpan.innerText = mortgageValue.toFixed(2);
}

buttonElement.addEventListener("click", calculateTotal)