const numberInput = document.getElementById("number");
const selectCurrency = document.getElementById("currencies");

async function loadInitial() {
  const response = await fetch('./sample-data.json');

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  Object.keys(data.fxRates).forEach((curency) => selectCurrency.add(new Option(curency, curency)))

}

function initialize(){
  loadInitial();
}

function convertCurrency(amount, from, to){
  
}

function authorizePayment(checkoutData){
  
}

function getTransactions(){
  
}


loadInitial()