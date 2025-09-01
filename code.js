let a = document.getElementById("billAmount");
let b = document.getElementById("percentageTip");
let c = document.getElementById("errorMessage");
let errorMessage = "Please Enter a Valid Input.";

function calculateButton() {
    if (a.value === "") {
        c.textContent = errorMessage;
    } else if (b.value === "") {
        c.textContent = errorMessage;
    } else {
        c.textContent = "";
        let a1 = parseInt(a.value);
        let b1 = parseInt(b.value);
        let C = (b1 / 100) * a1;
        let d = a1 + C;
        document.getElementById("tipAmount").value = C;
        document.getElementById("totalAmount").value = d;
    }
}