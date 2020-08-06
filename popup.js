
let speedDial = document.getElementById("speed");
let btnSlow = document.getElementById("btnSlow");
let btnFast = document.getElementById("btnFast");

chrome.tabs.query({active: true, currentWindow: true}, tabs => chrome.tabs.sendMessage(tabs[0].id, {"message": "update"}));

btnSlow.onclick = function(element) {
	chrome.tabs.query({active: true, currentWindow: true}, tabs => chrome.tabs.sendMessage(tabs[0].id, {"message": "slow"}));
}

btnFast.onclick = function(element) {
	chrome.tabs.query({active: true, currentWindow: true}, tabs => chrome.tabs.sendMessage(tabs[0].id, {"message": "fast"}));
}

// content.js
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.message === "updateRate") {
			speedDial.innerHTML = request.rate;
		}
	}
);
