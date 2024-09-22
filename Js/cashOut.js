document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("cash out amount");

    const cashOut = document.getElementById("input-cash-out").value;
    const cashOutNumber = parseFloat(cashOut);
    const cashOutPin = document.getElementById("cash-out-pin").value;
    console.log(cashOut, cashOutPin);

    //this is wrong way to verify pin number
    if (cashOutPin === "0987") {
      const balance = document.getElementById("account-balance").innerText;
      const balanceNumber = parseFloat(balance);

      const totalAmount = balanceNumber - cashOutNumber;

      document.getElementById("account-balance").innerText = totalAmount;
    } else {
      alert("you pin number is incorrect");
    }
  });
