<!-- Begin VIEWER OPTIONS CODE

// CHANGE ANY OF THESE VARIABLES FOR THE IMAGE VIEWER

//  use only lowercase on options



var viewer 		= "same"	// OPTIONS: | new | popup | same | New browser or a popup
var width 		= "800"		// WIDTH OF THE POPUP
var height 		= "625"		// HEIGHT OF THE POPUP
var scrollbars		= "yes"		// SHOW SCROLLBARS IN POPUP - yes OR no
var menu		= "no"		// SHOW MENU IN POPUP - yes OR no
var tool		= "no"		// SHOW TOOLBAR IN POPUP - yes OR no

// START IMAGE VIEW CODE

function ViewImage(data) {
   if (viewer == "popup") {
    windowHandle = window.open('image-viewer.htm' + '?' + data,'windowName',',scrollbars='+scrollbars+',resizable=yes,toolbar='+tool+',menubar='+menu+',width='+width+',height='+height+'');

}
else if (viewer == "new") {
    windowHandle = window.open('image-viewer.htm' + '?' + data,'windowName');
}
else if (viewer == "same") {
    window.location = ('image-viewer.htm' + '?' + data);
}
}

// END IMAGE VIEW CODE






// End -->