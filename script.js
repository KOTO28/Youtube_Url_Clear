chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == "Action") {
		clear();
	}
});

function clear() {
	data_0 = location.href//<https://www.youtube.com/watch?v=Mmw1oRpkMHE&lc=UgzKtaL1wXStXSDNyZZ4AaABAg>
	data_1 = data_0.split('/');
	data_2 = data_1[3].split('&');
	url = data_1[0]+"//"+data_1[2]+"/"+data_2[0]
	//alert(data_0+"\n"+url);
	location.href = url;
}