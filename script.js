// Exemple de taux de change pour le franc congolais
const exchangeRate = 0.000415;
// Exemple de taux de change pour le dollars
const exchangeRateD = 2400;

const amountInput = document.getElementById('amount');
const sourceCurrencySelect = document.getElementById('sourceCurrency');
const resultElement = document.getElementById('result');
//Function pour calculer le franc
function updateConversionResult() {
  const amount = parseFloat(amountInput.value);
  const convertedAmount = amount * exchangeRate;
  resultElement.innerHTML = convertedAmount.toFixed(2);
}
//Function pour calculer le Dollars
function updateConversionResultD() {
  const amountD = parseFloat(amountInput.value);
  const convertedAmount = amountD * exchangeRateD;
  resultElement.innerHTML = convertedAmount.toFixed(2);
}
//Appel des événements
amountInput.addEventListener('input', updateConversionResult);
sourceCurrencySelect.addEventListener('change', updateConversionResult);
// Met à jour le résultat initial
updateConversionResult(); 
