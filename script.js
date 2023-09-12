chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == "Action") {
		clear();
	}
});

function clear() {
	var data_0 = location.href;
	var data_1 = data_0.split('watch?v=');
	var data_2 = null;
	var url = null;
	if (data_1[1] != undefined){
		// console.log("This is video.")
		data_1 = data_0.split('/');
		data_2 = data_1[3].split('&');
		url = data_1[0]+"//"+data_1[2]+"/"+data_2[0];
	}else{
		// console.log("This is community.")
		data_1 = data_0.split('/community?lc=');
		if (data_1[1] != undefined){
			data_2 = data_1[1].split('lb=');
			url = data_1[0]+"/community?lb="+data_2[1];
		}else{
			// console.log("This is else.")
			url = location.href;
		}
	}
	//console.log("url:"+url);
	location.href = url;
}