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

    //step-3: verify pin Number
    // wrong way to validate pin number
    if (pinNumber === "0987") {
      console.log("Adding money to your account");

      // step-4: get the current balance
      const balance = document.getElementById("account-balance").innerText;
      console.log(balance);

      // step-5: add inputAddMoney with balance
      const addMoneyNumber = parseFloat(inputAddMoney);
      const balanceNumber = parseFloat(balance);
      const newBalance = addMoneyNumber + balanceNumber;
      console.log(newBalance);

      // step -6: update the balance in the UI/DOM
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Failed to add money! Please try again.");
    }
  });
