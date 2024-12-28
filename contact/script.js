const name = document.getElementById("name");
const email = document.getElementById("email");
const text = document.getElementById("text");

//var inputs = Array.from(document.querySelectorAll("input"));
//inputs.forEach(input => {
//	window.setInterval(function() {
//		if (input.value == "") {
//			input.classList.remove("hasvalue");
//		} else {
//			input.classList.add("hasvalue");
//		}
//	}, 10);
//});

	function sendMessage() {
        const webhookURL = "https://discord.com/api/webhooks/983062471961104455/vfen7sW92SZ1YW_MzaESSeIRD5QTAPZYYpPo-9OS-4zB4S490G7ekP4-nO1wO1rqpK2X"
        const request = new XMLHttpRequest();
        request.open("POST", webhookURL);
        request.setRequestHeader('Content-type', 'application/json');
        const params = {
            username: "My Webhook Name",
            avatar_url: "",
            content: "The message to send"
        }
        request.send(JSON.stringify(params));
    }