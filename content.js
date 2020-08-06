
let vidElems = document.getElementsByTagName("video");
let vidElem = vidElems.length == 0 ? null : vidElems[0];

function sendUpdate() {
	chrome.runtime.sendMessage({"message": "updateRate", "rate": vidElem.playbackRate});
}

// content.js
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.message === "slow") {
			if (vidElem !== null) {
				if (vidElem.playbackRate > 0.4) {
					vidElem.playbackRate -= 0.25;
					sendUpdate();
				}
			}
		}
		if (request.message === "fast") {
			if (vidElem !== null) {
				vidElem.playbackRate += 0.25;
				sendUpdate();
			}
		}
		if (request.message === "update") {
			sendUpdate();
		}
	}
);
