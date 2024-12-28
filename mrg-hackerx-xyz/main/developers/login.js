const formlog = document.getElementById("login-form");
const BtnUp = document.getElementById("signup-form-submit");
const ErrorMessage = document.getElementById("login-error-msg");
console.log("[ERR] This server does not allow external files, which means that some credentials are exposed to the public")
function readTextFile(file, callback) {
	var rawFile = new XMLHttpRequest();
	rawFile.overrideMimeType("application/json");
	rawFile.open("GET", file, true);
	rawFile.onreadystatechange = function() {
		if (rawFile.readyState === 4 && rawFile.status == "200") {
			callback(rawFile.responseText);
		}
	}
	rawFile.send(null);
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get('loggedin')
if (product === null) {
	console.log("no")
	// variable is undefined or null
} else {
	console.log("yes")
	document.getElementById("msg").innerHTML = "<a>Welcome Back, <b>" + product + "</a></b>!"
	sessionStorage.identity = "Developer-" + product;
	window.localStorage.setItem('developer', 'logged_in');
	window.location.href = './home/'; //one level up					
}
