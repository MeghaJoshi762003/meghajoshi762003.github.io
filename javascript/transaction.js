document.getElementById("click").onclick = function() {sendMoney()};
function sendMoney()
{
    var senderName = document.getElementById("senderName").value;
    var receiverName = document.getElementById("receiverName").value;
    var Amount= parseInt(document.getElementById("Amount").value);
    var balance=parseInt(document.getElementById(senderName).innerText);
    var balance_receiver=parseInt(document.getElementById(receiverName).innerText);
    if(balance < Amount)
    {
    alert("Insufficient Balance");
    }
    else{
        document.getElementById(senderName).innerText= balance-Amount;
        document.getElementById(receiverName).innerText=balance_receiver+Amount;
        alert("Transaction Successful");
        const element = document.getElementById("transaction");
        element.innerHTML += "<tr><td>"+senderName+"</td><td>"+receiverName+"</td><td>"+Amount+"</td></tr>";
    }

}