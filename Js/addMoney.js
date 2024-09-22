document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Money Add Now");

    const addMoney = document.getElementById("input-add-money").value;
    const addMoneyNumber = parseFloat(addMoney);
    const pinNumber = document.getElementById("pin-number").value;
    console.log(addMoney, pinNumber);

    if (pinNumber === "0987") {
      const balance = document.getElementById("account-balance").innerText;
      const balanceNumber = parseFloat(balance);

      const newBalance = balanceNumber + addMoneyNumber;

      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Don't your add money");
    }
  });
