const btn = document.querySelector("#calculate");
const billInput = document.querySelector("#bill");
const tipInput = document.querySelector("#tip");
const totalSpan = document.querySelector("#total");

function calculateTotal(){
    const billValue = parseFloat(billInput.value);
    const tipValue = parseFloat(tipInput.value);
    const totalValue = billValue * (1 + tipValue / 100);
    totalSpan.innerText = totalValue.toFixed(2);
}

btn.addEventListener("click", calculateTotal);
