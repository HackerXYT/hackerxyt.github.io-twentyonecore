if (localStorage.identity === "banneduser" && localStorage.banned === "true") {
	document.getElementById("allhtml").style.visibility = "hidden";
	alert("banned")
	window.location.href = "/contact/"
} else {
	const video = document.getElementById("video");
	const videoo = document.getElementById("video2");
	const video3 = document.getElementById("video3");
	const video4 = document.getElementById("video4");
	const video5 = document.getElementById("video5");
	const player = document.getElementById("my_video_1");
	console.log("Using Latest Version!")

	window.onload = function() {
		document.addEventListener("contextmenu", function(e) {
			e.preventDefault();
		}, false);
		document.addEventListener("keydown", function(e) {
			//document.onkeydown = function(e) {
			// "I" key
			if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
				disabledEvent(e);
				window.location.href = "/banned.html";
			}
			// "J" key
			if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
				disabledEvent(e);
				window.location.href = "/banned.html";
			}
			// "S" key + macOS
			if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
				disabledEvent(e);
				window.location.href = "/banned.html";
			}
			// "U" key
			if (e.ctrlKey && e.keyCode == 85) {
				disabledEvent(e);
				window.location.href = "/banned.html";
			}
			// "F12" key
			if (event.keyCode == 123) {
				disabledEvent(e);
				window.location.href = "/banned.html";
			}
		}, false);
		function disabledEvent(e) {
			if (e.stopPropagation) {
				e.stopPropagation();
			} else if (window.event) {
				window.event.cancelBubble = true;
			}
			e.preventDefault();
			return false;
		}
	};

	$(function() {
		$(".sidebar-link").click(function() {
			$(".sidebar-link").removeClass("is-active");
			$(this).addClass("is-active");
		});
	});

	$(window)
		.resize(function() {
			if ($(window).width() > 1090) {
				$(".sidebar").removeClass("collapse");
			} else {
				$(".sidebar").addClass("collapse");
			}
		})
		.resize();

	const allVideos = document.querySelectorAll(".video");

	allVideos.forEach((v) => {
		v.addEventListener("mouseover", () => {
			const video = v.querySelector("video");
			video.play();
		});
		v.addEventListener("mouseleave", () => {
			const video = v.querySelector("video");
			video.pause();
		});
	});

	$(function() {
		$(".logo, .logo-expand, .discover").on("click", function(e) {
			$(".main-container").removeClass("show");
			$(".main-container").scrollTop(0);
		});
		$(".trending, .video").on("click", function(e) {
			$(".main-container").addClass("show");
			$(".main-container").scrollTop(0);
			$(".sidebar-link").removeClass("is-active");
			$(".trending").addClass("is-active");
		});

		$(".video").click(function() {
			var source = $(this).find("source").attr("src");
			var title = $(this).find(".video-name").text();
			var person = $(this).find(".video-by").text();
			var img = $(this).find(".author-img").attr("src");
			$(".video-stream video").stop();
			$(".video-stream source").attr("src", source);
			$(".video-stream video").load();
			$(".video-p-title").text(title);
			$(".video-p-name").text(person);
			$(".video-detail .author-img").attr("src", img);
		});
	});


	const today = new Date();
	const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

	const num = ["12", "21", "35", "7", "26", "13", "74", "5"]

	const count = {
		Server: `${num[Math.floor(Math.random() * num.length)]}`,
		Identity: 'user',
		Version: '3.1'
	};

	window.addEventListener("load", function() {
		console.log('%cHackerX Site', `
  background: black;
  border: 3px solid magenta;
  color: magenta;
  font-size: 50px;
  margin: 40px;
  padding: 20px;
`);
		console.log("%cYou Are Accessing Private Data Of HackerX's Servers! \nYou Will Be Banned Soon!", 'color: red; font-size: 30px;');
		console.log("Time Connected: " + time)
		console.log("Welcome Back user!")
		setTimeout(() => { console.log("%c Default Settings Have Been Loaded! ", 'background: #222; color: #bada55'); }, 300);
		setTimeout(() => { console.log("%c Connected To Database! ", 'background: #222; color: #00FF00'); }, 400);
		setTimeout(() => { console.log("%cUser Info Is Not Being Stored!", 'background: #222; color: #AE00FF'); }, 500);
		setTimeout(() => { console.dirxml(count); }, 500);
		setTimeout(() => {
			console.group('%cOnline Servers', 'font-size: 20px; color: green;');
			console.log("12");
			console.log('21');
			console.log('35');
			console.log('7');
			console.log('26');
			console.log('13');
			console.log('74');
			console.log('5');
			console.groupEnd();
		}, 2000);
		window.localStorage.setItem('developer', 'false');
	});


	video.addEventListener("click", (e) => {
		setTimeout(() => { console.log("Requesting File From Server.."); }, 500);
		setTimeout(() => { console.log("Ready"); }, 1000);
		setTimeout(() => { console.log(" "); }, 1600);
	})

	videoo.addEventListener("click", (e) => {
		setTimeout(() => { console.log("Requesting File From Server.."); }, 500);
		setTimeout(() => { console.log("Ready"); }, 1000);
		setTimeout(() => { console.log(" "); }, 1600);
	})

	video3.addEventListener("click", (e) => {
		setTimeout(() => { console.log("Requesting File From Server.."); }, 500);
		setTimeout(() => { console.log("Ready"); }, 1000);
		setTimeout(() => { console.log(" "); }, 1600);
	})

	video4.addEventListener("click", (e) => {
		setTimeout(() => { console.log("Requesting File From Server.."); }, 500);
		setTimeout(() => { console.log("Ready"); }, 1000);
		setTimeout(() => { console.log(" "); }, 1600);
	})

	video5.addEventListener("click", (e) => {
		setTimeout(() => { console.log("Requesting File From Server.."); }, 500);
		setTimeout(() => { console.log("Ready"); }, 1000);
		setTimeout(() => { console.log(" "); }, 1600);
	})

	player.addEventListener("click", (e) => {
		setTimeout(() => { console.log("Media Player Interaction"); }, 500);
	})

	$(window).load(function() {
		$(".trigger_popup_fricc").click(function() {
			$('.hover_bkgr_fricc').show();
		});
		$('.popupCloseButton').click(function() {
			$('.hover_bkgr_fricc').hide();
		});
	});
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const likes = urlParams.get('likes')

function logintoacc() {
	window.location.href = "https://twentyonecore.com/newlogin/?twentyonecorelogin=xsite"
}
var profilepicture = sessionStorage.getItem("pfp");
document.getElementById("pfp").src = profilepicture;

var sstorage = sessionStorage.getItem("logged_in")
if (sstorage == "true") {
	document.getElementById("loginmsg").style.display = "none";
	document.getElementById("logoutmsg").style.display = "block";
} else {
	console.log("Log")
}

function clearacc() {
	sessionStorage.clear()
	localStorage.clear()
	window.location.href = "/"
}

var userin = sessionStorage.getItem("identity")

if (userin === "21" || userin === "Dritsas" || userin === "dritsas" || userin === "Kyriakos") {
	document.getElementById("lan21").style.display = "flex";
}

function video0() {
	console.log("Clicked video0")
	document.getElementById("subscribers").innerHTML = "1K subscribers"
	document.getElementById("description").innerHTML = 
	"thanks for watching..<br>Asteris0 is a BOT<br>==================================<br>το instagram μου: https://bit.ly/381siTE<br>Subscribe: https://bit.ly/2W96xMm<br>Road To 100 Subs<br>&nbsp;<br>IOAM21: https://bit.ly/3qKcFsq<br>==========================<br>Giorgikas: https://bit.ly/3gOiLne"
}

function video1() {
	window.history.replaceState(null, null, "?video=1");
	console.log("Clicked video1")
	document.getElementById("description").innerHTML = 
	"thanks for watching.<br>εφαγα unban! so ετοιμαστείτε για νέα videos!<br>#shorts<br>==================================<br>Special Thanks To: 𝑉𝐼𝑇𝐴𝐿#1310<br>==================================<br>το instagram μου: https://bit.ly/381siTE<br>Subscribe: https://bit.ly/2W96xMm<br>Road To 1000 Subs<br>&nbsp;<br>IOAM21: https://bit.ly/3qKcFsq<br>========================== <br>Giorgikas: https://bit.ly/3gOiLne<br>"
	document.getElementById("subscribers").innerHTML = "1K subscribers"
}

function video2() {
	window.history.replaceState(null, null, "?video=2");
	console.log("Clicked video2")
	document.getElementById("description").innerHTML = 
	"my instagram:https://www.instagram.com/_pozarlis_/<br>my discord server:https://discord.gg/3d6ys5r3Yu<br>hackerx instagram:https://www.instagram.com/papostol_<br>hackerx channel:https://www.youtube.com/hackerxyt<br>&nbsp;<br>"
	document.getElementById("subscribers").innerHTML = "601 subscribers"
}

function video3() {
	window.history.replaceState(null, null, "?video=3");
	document.getElementById("subscribers").innerHTML = "1K subscribers"
	console.log("Clicked video3")
	document.getElementById("description").innerHTML = `thanks for watching.<br>Πείτε μου στα comments αν θελετε part 2!<br>btw το βίντεο είναι 4K :)<br>==================================<br>Για να μπορέσετε να ενεργοποιήσετε αυτά τα discord hacks θα χρειαστεί να κάνετε join στο Discord Server μου γιατί εκεί πέρα υπάρχει όλο το code που θα τα ενεργοποιήσει.<br>&nbsp;<br>Εάν χρειάζεστε βοήθεια μπορείτε να κάνετε ερωτήσεις στο discord και θα προσπαθήσω να σας απαντήσω το συντομότερο δυνατό<br>Anyways αυτά για σήμερα και μην ξεχάσετε να κάνετε:<br>╔═╦╗╔╦╗╔═╦═╦╦╦╦╗╔═╗<br>║╚╣║║║╚╣╚╣╔╣╔╣║╚╣═╣ <br>╠╗║╚╝║║╠╗║╚╣║║║║║═╣<br>╚═╩══╩═╩═╩═╩╝╚╩═╩═╝<br>==================================<br>🚨ΠΡΩΤΟΥ ΚΑΝΕΤΕ JOIN!🚨
ΠΛΕΟΝ ΤΟ DISCORD ΔΕΝ ΘΑ ΣΑΣ ΑΦΗΣΕΙ ΝΑ ΑΝΟΙΞΕΤΕ ΤΟ CONSOLE ΑΠΟ ΤΗΝ ΕΦΑΡΜΟΓΗ ΣΤΟΝ ΥΠΟΛΟΓΙΣΤΗ, ΓΙ ΑΥΤΟ ΘΑ ΠΡΕΠΕΙ ΝΑ ΣΥΝΔΕΘΕΙΤΕ ΜΕ ΤΟ ΛΟΓΑΡΙΑΣΜΟ ΣΑΣ ΑΠΟ ΤΟΝ BROWSER (https://discord.com/app)<br>==================================<br>discord server link: https://discord.gg/E9WfmCxS6W<br>discord server link 2 (shorten): https://www.twentyonecore.evoxs.xyz/mrg-hackerx-xyz/discord<br>⬆️Τα links δεν ληγουν ποτε⬆️<br>Discord Username: HackerX#2123<br>το Instagram μου: https://www.twentyonecore.evoxs.xyz/mrg-hackerx-xyz/instagram<br>Subscribe: https://bit.ly/2W96xMm<br>Road To 1000 Subs<br>==================================<br>Founder:<br>Pixel: https://bit.ly/3hFRTq9<br>==================================<br>&nbsp;<br>0:00 Intro<br>0:18 Πως να ξεκινισετε<br>0:29 Custom Banner<br>0:38 Πως ανοιγετε το console + check description<br>1:40 Fake Message<br>1:53 Friend Nicknames<br>2:33 All Profile Badges<br>3:22 Credits - Outro<br>&nbsp;<br>Το βιντεο αυτο δεν θα ηταν δυνατο χωρις την βοηθεια των:<br>@Giorgikas Vlogs και @IOAM21<br>`
	}

function video4() {
	window.history.replaceState(null, null, "?video=4");
	document.getElementById("subscribers").innerHTML = "1K subscribers"
	console.log("Clicked video4")
	document.getElementById("description").innerHTML = 
	"Welcome to HackerX Site V3.<br>Thanks for stopping by."
}

function video5() {
	window.history.replaceState(null, null, "?video=5");
	document.getElementById("subscribers").innerHTML = "1K subscribers"
	console.log("Clicked video4")
	document.getElementById("description").innerHTML = 
	`<span style="color: red">The Current Video Is Unavailable. Please try again later.</span><br>&nbsp;<br>&nbsp;<br>-&nbsp;<i>HackerX Site Team</i>`
}

function like() {
	document.getElementById("like").classList.remove('no');
	document.getElementById("like").classList.add('green');
	console.log("Clicked like")
	//document.getElementById("like").classList.toggle('like', 'green');
	//document.getElementById("like").innerHTML('Liked');
	//document.getElementById("like").classList.toggle('like no');
	document.getElementById("like").innerHTML('LikeD');
}

document.getElementById('like').addEventListener('click', function handleClick() {
	var status = document.getElementById("like").classList
	if(status.value === "like no activated") {
  		document.getElementById('like').innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.85 2.5c.63 0 1.26.09 1.86.29 3.69 1.2 5.02 5.25 3.91 8.79a12.728 12.728 0 01-3.01 4.81 38.456 38.456 0 01-6.33 4.96l-.25.15-.26-.16a38.093 38.093 0 01-6.37-4.96 12.933 12.933 0 01-3.01-4.8c-1.13-3.54.2-7.59 3.93-8.81.29-.1.59-.17.89-.21h.12c.28-.04.56-.06.84-.06h.11c.63.02 1.24.13 1.83.33h.06c.04.02.07.04.09.06.22.07.43.15.63.26l.38.17c.092.05.195.125.284.19.056.04.107.077.146.1l.05.03c.085.05.175.102.25.16a6.263 6.263 0 013.85-1.3zm2.66 7.2c.41-.01.76-.34.79-.76v-.12a3.3 3.3 0 00-2.11-3.16.8.8 0 00-1.01.5c-.14.42.08.88.5 1.03.64.24 1.07.87 1.07 1.57v.03a.86.86 0 00.19.62c.14.17.35.27.57.29z" /></svg>Liked`;
  		document.getElementById("like").classList.remove('no');
		document.getElementById("like").classList.add('red');
	} else {
		document.getElementById('like').innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.85 2.5c.63 0 1.26.09 1.86.29 3.69 1.2 5.02 5.25 3.91 8.79a12.728 12.728 0 01-3.01 4.81 38.456 38.456 0 01-6.33 4.96l-.25.15-.26-.16a38.093 38.093 0 01-6.37-4.96 12.933 12.933 0 01-3.01-4.8c-1.13-3.54.2-7.59 3.93-8.81.29-.1.59-.17.89-.21h.12c.28-.04.56-.06.84-.06h.11c.63.02 1.24.13 1.83.33h.06c.04.02.07.04.09.06.22.07.43.15.63.26l.38.17c.092.05.195.125.284.19.056.04.107.077.146.1l.05.03c.085.05.175.102.25.16a6.263 6.263 0 013.85-1.3zm2.66 7.2c.41-.01.76-.34.79-.76v-.12a3.3 3.3 0 00-2.11-3.16.8.8 0 00-1.01.5c-.14.42.08.88.5 1.03.64.24 1.07.87 1.07 1.57v.03a.86.86 0 00.19.62c.14.17.35.27.57.29z" /></svg>Like`;
  		document.getElementById("like").classList.remove('red');
		document.getElementById("like").classList.add('no');
	}
});

function parametersreset() {
	const url = new URL(window.location.href);
	//url.searchParams.set('param1', 'val1');
	url.searchParams.delete('video');
	window.history.replaceState(null, null, url); // or pushState
}