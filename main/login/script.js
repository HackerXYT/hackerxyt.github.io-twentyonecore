const formlog = document.getElementById("login-form");
const BtnLog = document.getElementById("login-form-submit");
const ErrorMessage = document.getElementById("login-error-msg");
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const rndInt = randomIntFromInterval(1, 74)

BtnLog.addEventListener("click", (e) => {
    e.preventDefault();
    const username = formlog.username.value;
		sessionStorage.identity = username;
	console.log(`/main/?user+` + username)

		if (username === `admin`|| username === `ahmad`|| username === `katsatos`) {
				document.getElementById("msg").style.color = "red";
        document.getElementById("msg").innerHTML = "Forbidden"
    } else {
        console.log("Nope")
			  document.getElementById("msg").innerHTML = "Switching Accounts.."
				window.location.href = `/main/?user-` + username + `&server-` + rndInt;
    }
})
function myFunction() {
  window.location.href = "/main/cytronsite"
}
window.addEventListener("load", function(){ 
    window.localStorage.clear();
    window.localStorage.setItem('developer', 'logged_out');
 })
