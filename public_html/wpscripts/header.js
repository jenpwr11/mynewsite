
var flashcolor		= "191d7b"	// FLASH BACKGROUND COLOR
var color		= "191d7b"	// HEADER BACKGROUND COLOR
var flashheight		= "45"		// HEIGHT OF THE FLASH (IN PIXELS) (and adjust the menu.js)
var flashwidth		= "600"		// WIDTH OF THE FLASH (IN PIXELS) (and adjust the menu.js)


var stripes	 	= "yes"		// SHOW STRIPE UNDER THE FLASH (and adjust the menu.js)


document.write('<TABLE cellpadding="0" cellspacing="0" border="0" width="100%" BGCOLOR="#'+color+'"><tr><td ALIGN="LEFT">');
document.write('<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" WIDTH="'+flashwidth+'" HEIGHT="'+flashheight+'" id="logo" ALIGN="">');
document.write('<PARAM NAME=movie VALUE="logo.swf">');
document.write('<PARAM NAME=quality VALUE=high> <PARAM NAME=bgcolor VALUE=#'+flashcolor+'>');
document.write('<EMBED src="logo.swf" quality=high bgcolor=#'+flashcolor+'  WIDTH="'+flashwidth+'" HEIGHT="'+flashheight+'" NAME="logo" ALIGN="" TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer">');
document.write('</EMBED>');
document.write('</OBJECT><br>');
document.write('</td></tr></table>');

   if (stripes == "yes") {
document.write('<span class="printhide">');
document.write('<img src="/picts/stretchbar.jpg" width="100%" height="15"><br>');
document.write('</span>');
}
