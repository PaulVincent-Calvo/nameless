function addToCart() {
    let messageBox = document.getElementById("message-box");
    messageBox.style.display = "block";

    setTimeout(function() {
        messageBox.style.display = "none";
    }, 3000);
}