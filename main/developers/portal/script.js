const formlog = document.getElementById("login-form");
const BtnLog = document.getElementById("login-form-submit");
const ErrorMessage = document.getElementById("login-error-msg");

BtnLog.addEventListener("click", (e) => {
    e.preventDefault();
    const username = formlog.username.value;
    const password = formlog.password.value;

    if (username === `admin` && password === `hackerx`) {
        window.location.href = 'http://direct.twentyonecore.evoxs.xyz/mrg-hackerx-xyz:8080'; //one level up
    } else {
        console.log("Err")
    }
		if (username === `twentyone` && password === `2121`) {
        //alert("You have successfully logged in.");
        window.location.href = './home/'; //one level up
    } else {
        console.log("Err")
    }
    if (username === `Byrus` && password === `dscbot`) {
        //alert("You have successfully logged in.");
        window.location.href = './discordbot/'; //one level up
    } else {
        console.log("Err")
    }
})

window.addEventListener("load", function(){ 
    window.localStorage.clear();
    window.localStorage.setItem('identity', 'user');
    window.localStorage.setItem('developer', 'logged_out');
 })