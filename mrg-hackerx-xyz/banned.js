$.getJSON('https://ipapi.co/json/', function(data) {
	const identity = JSON.stringify(data, null, 2)
	const identifier = JSON.parse(identity)
	const ip = identifier.ip
	window.localStorage.setItem('storageip', ip);
	var OSName = "Unknown OS";
	if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
	if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS/IOS";
	if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
	if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";

	var request = new XMLHttpRequest();
	request.open("POST", "https://discord.com/api/webhooks/941090997360820284/J8iOWzLOlTr2GmxuZXLyKROamRtVJwq8tE1SSXyKIXxyywHtqQIPEFCnM6nHhZM9Wq8h");

	request.setRequestHeader('Content-type', 'application/json');

	var params = {
		username: "A User Has Been IP Banned!",
		avatar_url: "",
		content: "User On: **" + "OSName" + "** and IP: **" + ip + `** Has Been IP Banned`
		// Username and content are required to be set, avatar_url isn't. Insert a direct link to an image to use the avatar_url. 
	}

	request.send(JSON.stringify(params));
})
var timeleft = 5;
var downloadTimer = setInterval(function() {
	timeleft--;
	document.getElementById("countdowntimer").textContent = timeleft;
	if (timeleft <= 0)
		clearInterval(downloadTimer);
}, 1000);



window.localStorage.clear();
window.localStorage.setItem('identity', 'banneduser');
window.localStorage.setItem('banned', 'true');
var storageip = localStorage.getItem(storageip)
console.log(storageip)
console.log("%cYou've Accessed Private Data Of HackerX's Servers! \nYou are now Banned From HackerX Site!", 'color: red; font-size: 30px;');
setTimeout(() => { console.log("%cClearing localStorage ", 'background: #222; color: #bada55'); }, 300);
setTimeout(() => { console.log("%c Disconnected From Database! ", 'background: #222; color: #FF0001'); }, 400);
setTimeout(() => {
	console.group(`%cInfo Sent: ${storageip}`, 'font-size: 20px; color: cyan;');
	console.groupEnd();
}, 2000);
console.log('%cBanned', `
  background: black;
  border: 3px solid red;
  color: red;
  font-size: 50px;
  margin: 40px;
  padding: 20px;
`);