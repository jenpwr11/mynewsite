// MENU VER 2.01 IE 8.0, 7.0 COMPATIBLE


StartMenu()
MFL		= 240; 					// MENU DISTANCE FROM EDGE
MFT		= 67; 					// MENU DISTANCE FROM TOP
ALIGN		= "right"				// MENU LEFT OR RIGHT
TMH		= 22;					// TOP MENU HEIGHT
TMFS		= "8";					// TOP MENU FONT SIZE
TMFW		= "bold";				// TOP MENU FONT WEIGHT bold/normal
TMFF		= " arial, verdana, helvetica, sans";	// TOP MENU FONT FACE
TMC		= "ffffff";				// TOP MENU OFF FONT COLOR
TMBC		= "06098c";				// TOP MENU OFF BACKGROUND COLOR
TMBI		= "http://www.midwestprowash.com/picts/menu.gif";			// TOP MENU OFF BACKGROUND IMAGE
TMHC		= "ffffff";				// TOP MENU HOVER TEXT COLOR
TMHBC		= "141454";				// TOP MENU HOVER BACKGROUND COLOR
TMHBI		= "http://www.midwestprowash.com/picts/menuon.gif";			// TOP MENU HOVER BACKGROUND IMAGE
MO		= TMH-2;				// Y MENU OVERLAP CHANGE NUMBER VALUE
SUBshift	= 0;					// SHIFT SUBMENU RIGHT
// START SUBMENU OPTIONS - you will find more options in the corporatestyle.css
SMH		= 22;					// SUB MENU HEIGHT
SMFS		= "8";					// SUB MENU FONT SIZE
SMFW		= "bold";				// SUB MENU FONT WEIGHT bold/normal
SMFF		= "arial, verdana, helvetica, sans";	// SUB MENU FONT FACE
SMC		= "ffffff";				// SUB MENU OFF FONT COLOR
SMBC		= "162e88";				// SUB MENU OFF BACKGROUND COLOR
SMHC		= "ffffff";				// SUB MENU HOVER TEXT COLOR
SMHBC		= "0375c6";				// SUB MENU HOVER BACKGROUND COLOR
SubMenu()

Top_Width[0]=95; Sub_Menu_Width[0]=120;
m[0]='Company Info';n[0]='http://www.midwestprowash.com/';st[0]="";s[0]=""
+l+"http://www.midwestprowash.com/"+r+" Homepage "+c
+l+"http://www.midwestprowash.com/about_us.html"+r+" About Us "+c
+l+"http://www.midwestprowash.com/customer_testimonials.html"+r+" Testimonials "+c
+l+"http://www.midwestprowash.com/power_washer_referrals.html"+r+" Referral Program "+c

Top_Width[1]=80; Sub_Menu_Width[1]=150;
m[1]='Services';n[1]='http://www.midwestprowash.com/power_washing_contractor.html';st[1]="";s[1]=""
+l+"http://www.midwestprowash.com/power_washing_contractor.html"+r+" Power Washing Services "+c
+l+"http://www.midwestprowash.com/deck_cleaning.html"+r+" Deck Cleaning "+c
+l+"http://www.midwestprowash.com/indiana_power_washer.html"+r+" Indiana Service Area "+c
+l+"http://www.midwestprowash.com/power_washing_estimate.html"+r+" Request Free Estimate "+c
+l+"http://www.midwestprowash.com/power_washer_report.html"+r+" Free Pro Wash Report "+c
+l+"http://www.midwestprowash.com/roof_algae_report.html"+r+" Free Roofing Report "+c

Top_Width[2]=105; Sub_Menu_Width[2]=130;
m[2]='Before &amp; After';n[2]='http://www.midwestprowash.com/pressure_washing_houses.html';st[2]="";s[2]=""
+l+"http://www.midwestprowash.com/pressure_washing_roofs.html"+r+" Shingle Roofs "+c
+l+"http://www.midwestprowash.com/pressure_washing_decks.html"+r+" Wood Decks "+c
+l+"http://www.midwestprowash.com/pressure_washing_concrete.html"+r+" Concrete "+c
+l+"http://www.midwestprowash.com/pressure_washing_houses.html"+r+" Whole Houses "+c

Top_Width[3]=125;Sub_Menu_Width[3]=150;
m[3]='Professional Tips';n[3]='http://www.midwestprowash.com/power_washer_report.html';st[3]="";s[3]=""
+l+"http://www.midwestprowash.com/power_washer_report.html"+r+" Free Pro Wash Report "+c
+l+"http://www.midwestprowash.com/roof_algae_report.html"+r+" Free Roofing Report "+c
+l+"http://www.midwestprowash.com/power_washing_ripoffs.html"+r+" Avoiding Rip-Offs "+c
+l+"http://www.midwestprowash.com/power_washing_misconceptions.html"+r+" Costly Misconception "+c
+l+"http://www.midwestprowash.com/power_washer.html"+r+" Choosing Contractors "+c
+l+"http://www.midwestprowash.com/power_washer_investment.html"+r+" Investment Protection "+c
+l+"http://www.midwestprowash.com/exterior_cleaning.html"+r+" Guaranteed Clean "+c
+l+"http://www.midwestprowash.com/pressure_washing_guide/"+r+" Pressure Washing Guide "+c
+l+"http://www.midwestprowash.com/articles-news/"+r+" Articles and News "+c

Top_Width[4]=110;Sub_Menu_Width[4]=140;
m[4]='Help & Support';n[4]='http://www.midwestprowash.com/contact_power_washer.html';st[4]="";s[4]=""
+l+"http://www.midwestprowash.com/contact_power_washer.html"+r+" Contact Us "+c
+l+"http://www.midwestprowash.com/power_washing_estimate.html"+r+" Request Free Estimate "+c
+l+"http://www.midwestprowash.com/sitemap1.html"+r+" Sitemap "+c

ADJ[0]=MFL;
ADJ[1]=(Top_Width[0])+MFL;
ADJ[2]=(Top_Width[0]+Top_Width[1])+MFL;
ADJ[3]=(Top_Width[0]+Top_Width[1]+Top_Width[2])+MFL;
ADJ[4]=(Top_Width[0]+Top_Width[1]+Top_Width[2]+Top_Width[3])+MFL;


// ----------------------------------------------------------------
// YOU DO NOT NEED TO EDIT BELOW THIS LINE 2008 Allwebco Design
// ----------------------------------------------------------------


MENU=m.length

for (i=0; i < MENU; i++){


// START WRITING TOP LEVEL MENUS


document.write("<div style='position:absolute;"+ALIGN+":"+ADJ[i]+";top:"+MFT+";width:"+Top_Width[i]+"' onmouseover='o["+i+"].ShowMenu()' onmouseout='o["+i+"].HideMenu()'>")



document.write("<a class='menu_TOP' style='height:"+TMH+"; color:#"+TMC+"; background-image: url("+TMBI+"); background-color:#"+TMBC+"; font-size:"+TMFS+"pt; font-weight:"+TMFW+"; font-family: "+TMFF+"; "+spn+"' onmouseover=\"this.style.backgroundColor='#"+TMHBC+"';this.style.color='"+TMHC+"';this.style.backgroundImage='URL("+TMHBI+")'\"  onmouseout=\"this.style.backgroundColor='#"+TMBC+"';this.style.color='"+TMC+"';this.style.backgroundImage='URL("+TMBI+")'\" href='"+n[i]+"'>"+m[i]+"</a></div>")



}


for (i=0; i < MENU; i++){

// START WRITING SUB MENUS


document.write("<div id='SUB"+i+"' class='menu_DIV' style='position: absolute; "+ALIGN+":"+(ADJ[i]+SUBshift)+";top:"+(MFT+MO)+";width:"+Sub_Menu_Width[i]+";background-color:#"+SMBC+";' onmouseover='o["+i+"].ShowMenu()' onmouseout='o["+i+"].HideMenu()'>"+s[i]+"</div>")


}



function StartMenu()
{

var D6=window,Y7=document;
function DETECT()
{
this.ver=navigator.appVersion;
this.agent=navigator.userAgent;
this.dom=Y7.getElementById?1:0;
this.opera5=this.agent.indexOf("Opera 5")>-1;
this.ie4=(Y7.all && !this.dom && !this.opera5)?1:0;
this.ie5=(this.ver.indexOf("MSIE 5")>-1 && this.dom && !this.opera5)?1:0;
this.ie6=(this.ver.indexOf("MSIE 6")>-1 && this.dom && !this.opera5)?1:0;
this.ie7=(this.ver.indexOf("MSIE 7")>-1 && this.dom && !this.opera5)?1:0;
this.ie8=(this.ver.indexOf("MSIE 8")>-1 && this.dom && !this.opera5)?1:0;
this.ie=this.ie4||this.ie5||this.ie6||this.ie7||this.ie8;
this.mac=this.agent.indexOf("Mac")>-1;
this.ns6=(this.dom && parseInt(this.ver)>=5)?1:0;
this.ns4=(Y7.layers && !this.dom)?1:0;
this.BWD=(this.ie6||this.ie5||this.ie4||this.ns4||this.ns6||this.opera5);
return this
}
BWD=new DETECT();z=0;b=0;
spn="";
if(BWD.opera5||BWD.ns6)
{
b=2
};
if(BWD.ie)
{
spn=" width: 100%"
}else{
z=6
}

} 


function SubMenu()
{

document.write("<TABLE cellpadding='0' cellspacing='0' border='0' width='100%' BGCOLOR='#'+TMBC+''><tr><td>");
document.write("<img src='picts/spacer.gif' width='100%' height='"+TMH+"'><br>");
document.write("</td></tr></table>");

document.write("<div width='100%' style='height:"+TMH+";position:absolute;top:"+MFT+";width:100%;background-image: url("+TMBI+"); background-color:#"+TMBC+";z-level:-2'></div>")


l="<a class='menu_SUB' style='height:"+SMH+"; color:#"+SMC+"; background-color:#"+SMBC+"; font-size:"+SMFS+"pt; font-weight:"+SMFW+"; font-family: "+SMFF+";"+spn+"' onmouseover=\"this.style.backgroundColor='#"+SMHBC+"';this.style.color='"+SMHC+"'\"  onmouseout=\"this.style.backgroundColor='#"+SMBC+"';this.style.color='"+SMC+"'\" href='";

r="'>";
c="</a>";


m=new Array();n=new Array();s=new Array();Sub_Menu_Width=new Array();su=new Array();st=new Array();Top_Width=new Array();ADJ=new Array()

}


function lib_obj(obj,nest){nest=(!nest) ? "":'document.'+nest+'.';this.evnt=BWD.dom? document.getElementById(obj):BWD.ie4?document.all[obj]:BWD.ns4?eval(nest+"document.layers." +obj):0;this.css=BWD.dom||BWD.ie4?this.evnt.style:this.evnt;this.ref=BWD.dom||BWD.ie4?document:this.css.document;this.x=parseInt(this.css.top)||this.css.pixeltop||this.evnt.offsettop||0;this.y=parseInt(this.css.left)||this.css.pixelleft||this.evnt.offsetleft||0;return this}
function lib_doc_size(){this.x=0;this.x2=BWD.ie && document.body.offsetWidth-20||innerWidth||0;this.y=0;this.y2=BWD.ie && document.body.offsetHeight-5||innerHeight||0;this.x50=this.x2/2;this.y50=this.y2/2;return this;}
lib_obj.prototype.ShowMenu = function(){this.css.visibility="visible"}
lib_obj.prototype.HideMenu = function(){this.css.visibility="hidden"}
function libinit(){page=new lib_doc_size();o=new Array();for (i=0; i < MENU; i++){o[i]=new lib_obj('SUB'+i);o[i].HideMenu()}}
libinit()


// END MENU CODE -->
