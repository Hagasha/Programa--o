const myCheckBox = document.getElementById('myCheckBox');
const visaBtn = document.getElementById('visaBtn');
const masterCardBtn = document.getElementById('masterCardBtn');
const payPalBtn = document.getElementById('payPalBtn');
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');

mySubmit.onclick = function() {
  if(myCheckBox.checked) {
    subResult.textContent =`Your are subscribed!`;
  }
  else {
    subResult.textContent =`Your are not subscribed!`;
  }
  if(visaBtn.checked) {
    paymentResult.textContent =`You selected Visa!`;
  }
  else if(masterCardBtn.checked) {
    paymentResult.textContent =`You selected MasterCard!`;
  }
  else if(payPalBtn.checked) {
    paymentResult.textContent =`You selected PayPal!`;
  }
  else {
    paymentResult.textContent =`You did not select any payment method!`;
  }
}