const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);

const product = urlParams.get('lan21')
console.log(product);
if (product === "authtoken10394") {
	window.location.href = "/userinterface2022.html"
}