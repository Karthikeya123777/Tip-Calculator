function calculateButton() {
  let a = document.getElementById("billAmount");
  let b = document.getElementById("percentageTip");
  let c = document.getElementById("errorMessage");

  let errorMessage = "Please Enter a Valid Input.";

  if (a.value === "") {
    c.textContent = errorMessage;
  } else if (b.value === "") {
    c.textContent = errorMessage;
  } else {
    c.textContent = "";
    let a1 = parseFloat(a.value);
    let b1 = parseFloat(b.value);

    let tip = (b1 / 100) * a1;
    let total = a1 + tip;

    document.getElementById("tipAmount").value = tip.toFixed(2);
    document.getElementById("totalAmount").value = total.toFixed(2);
  }
}
