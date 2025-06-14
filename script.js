
let balance = 1000;

function showQR() {
    document.getElementById('qrSection').style.display = 'block';
}

function sendCoin() {
    const amount = prompt("Enter amount to send:");
    if (amount && parseInt(amount) > 0 && parseInt(amount) <= balance) {
        balance -= parseInt(amount);
        document.getElementById("balance").innerText = balance;
        alert("Sent " + amount + " PO Coins!");
    } else {
        alert("Invalid amount!");
    }
}
