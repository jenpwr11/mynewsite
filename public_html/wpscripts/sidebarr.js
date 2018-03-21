var showscroller	= "yes"		//  SHOW A SIDEBAR IMAGE
var scrollspacing	= "10"		// NUDGE SIDEBAR DOWN
var bordercolor		= "9291AA"	// SCROLLER AND IMAGE BORDER COLOR
document.write('<img src="picts/spacer.gif" height="'+scrollspacing+'" width="10"><br>')
if (navigator.userAgent.indexOf('Safari') != -1)     
{document.write('<br>')}
else {
if (showscroller == "yes") {
document.write('<TABLE cellpadding="0" cellspacing="0" border="1" bordercolor="#'+bordercolor+'" style="border-collapse:collapse"><tr><td>')
Tscroll_init (0)
document.write('</td></tr></table>')
document.write('<br><br>')}}