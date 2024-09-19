// add money to the account

// step-1: add an event handler to the add money button inside the form
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    // prevent page reload after form submit
    event.preventDefault();

    // step-2: get money to be added to the account
    const inputAddMoney = document.getElementById("input-add-money").value;
    console.log(inputAddMoney);

    //get the pin number provided
    const pinNumber = document.getElementById("pin-number").value;
    console.log(pinNumber);
  });
