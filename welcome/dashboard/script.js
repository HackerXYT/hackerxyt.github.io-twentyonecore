const username = localStorage.getItem('User');
document.getElementById("msg").style.color = "green";
document.getElementById("msg").innerHTML = "Welcome, " + username
