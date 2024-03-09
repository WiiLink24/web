function getQueryObj() {
	var obj = {};
	var query = window.location.search.substring(1);
	var pair, parts = query.split("&");
	var i, n = parts.length;
	for (i=0; i<n; i++) {
		pair = parts[i].split("=");
		obj[pair[0]] = pair[1] || "1";
	}
	return obj;
}
function getBadgeParams(){
	return {
		appname:	"My Avatar Editor",
		appurl:		"http://" + window.location.hostname + "/downloads/MyAvatarEditor.air",
		airversion:	1.5,
		imageurl:	"/images/badge_preview.jpg"
	}
}
