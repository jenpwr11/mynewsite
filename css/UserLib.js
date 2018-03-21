$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework("UserLib", "UserLib");

        //This will prevent activating multiple versions of this framework being loaded
        f.type = "UserLib";
        f.allow_single_type = true;
        f.user_lib = true

        var comp_comp1 = new PgComponentType('comp1', 'Comp 1 / p');
        comp_comp1.code = '<p class="text-center" style="color:rgb(255,255,255);font-size:16px;margin-bottom:0px;background-color:#092caa;"><strong>Jen Pressure Washing</strong> is a Owner Operated Company serving Northampton, Amherst and all of Western Mass since 1989 </p>';
        comp_comp1.parent_selector = null;
        f.addComponentType(comp_comp1);
        
        var comp_comp2 = new PgComponentType('comp2', 'Comp 2 / h1');
        comp_comp2.code = '<h1 style="color:rgb(255,255,255);text-align:center;margin-top:-4px;background-color:#092caa;">Welcome </h1>';
        comp_comp2.parent_selector = null;
        f.addComponentType(comp_comp2);
        
        var comp_comp3 = new PgComponentType('comp3', 'Comp 3 / Navbar');
        comp_comp3.code = '<nav class="navbar navbar-default navigation-clean" style="background-color:rgb(9,44,170);padding-bottom:22px;" data-pg-collapsed>\
    <div class="container">\
        <div class="navbar-header">\
            <a class="navbar-brand" href="#" style="color:rgb(255,255,255);font-size:27px;">Jen Pressure Washing</a>\
            <button class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-1">\
                <span class="sr-only">Toggle navigation</span>\
                <span class="icon-bar"></span>\
                <span class="icon-bar"></span>\
                <span class="icon-bar"></span>\
            </button>\
        </div>\
        <div class="collapse navbar-collapse" id="navcol-1">\
            <ul class="nav navbar-nav navbar-right">\
                <li class="active" role="presentation">\
                    <a href="#" style="color:rgb(255,255,255);">Home </a>\
                </li>\
                <li role="presentation">\
                    <a href="#" style="color:rgb(255,255,255);">House Washing</a>\
                </li>\
                <li role="presentation">\
                    <a href="#" style="color:rgb(255,255,255);">Roof Cleaning</a>\
                </li>\
                <li class="dropdown">\
                    <a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="#" style="color:rgb(255,255,255);">Dropdown <span class="caret"></span></a>\
                    <ul class="dropdown-menu" role="menu">\
                        <li role="presentation">\
                            <a href="#">First Item</a>\
                        </li>\
                        <li role="presentation">\
                            <a href="#">Second Item</a>\
                        </li>\
                        <li role="presentation">\
                            <a href="#">Third Item</a>\
                        </li>\
                    </ul>\
                </li>\
            </ul>\
        </div>\
    </div>\
</nav>';
        comp_comp3.parent_selector = null;
        f.addComponentType(comp_comp3);
        
        var comp_comp4 = new PgComponentType('comp4', 'Comp 4 / Div');
        comp_comp4.code = '<strong>Jen Pressure Washing</strong>';
        comp_comp4.parent_selector = null;
        f.addComponentType(comp_comp4);
        
        var comp_comp5 = new PgComponentType('comp5', 'Comp 5 / Navbar');
        comp_comp5.code = '<nav class="navbar navbar-default navigation-clean" style="background-color:rgb(9,44,170);padding-bottom:22px;" data-pg-collapsed>\
    <div class="container">\
        <div class="navbar-header">\
            <a class="navbar-brand" href="#" style="color:rgb(255,255,255);font-size:27px;">Jen Pressure Washing</a>\
            <button class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-1">\
                <span class="sr-only">Toggle navigation</span>\
                <span class="icon-bar"></span>\
                <span class="icon-bar"></span>\
                <span class="icon-bar"></span>\
            </button>\
        </div>\
        <div class="collapse navbar-collapse" id="navcol-1">\
            <ul class="nav navbar-nav navbar-right">\
                <li class="active" role="presentation">\
                    <a href="#" style="color:rgb(255,255,255);">Home </a>\
                </li>\
                <li role="presentation">\
                    <a href="#" style="color:rgb(255,255,255);">House Washing</a>\
                </li>\
                <li role="presentation">\
                    <a href="#" style="color:rgb(255,255,255);">Roof Cleaning</a>\
                </li>\
                <li class="dropdown">\
                    <a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="#" style="color:rgb(255,255,255);">Dropdown <span class="caret"></span></a>\
                    <ul class="dropdown-menu" role="menu">\
                        <li role="presentation">\
                            <a href="#">First Item</a>\
                        </li>\
                        <li role="presentation">\
                            <a href="#">Second Item</a>\
                        </li>\
                        <li role="presentation">\
                            <a href="#">Third Item</a>\
                        </li>\
                    </ul>\
                </li>\
            </ul>\
        </div>\
    </div>\
</nav>';
        comp_comp5.parent_selector = null;
        f.addComponentType(comp_comp5);
        
        var comp_comp6 = new PgComponentType('comp6', 'Comp 6 / Div');
        comp_comp6.code = '<div class="collapse navbar-collapse" id="navcol-1">\
    <ul class="nav navbar-nav navbar-right">\
        <li class="active" role="presentation">\
            <a href="#" style="color:rgb(255,255,255);">Home </a>\
        </li>\
        <li role="presentation">\
            <a href="#" style="color:rgb(255,255,255);">House Washing</a>\
        </li>\
        <li role="presentation">\
            <a href="#" style="color:rgb(255,255,255);">Roof Cleaning</a>\
        </li>\
        <li class="dropdown">\
            <a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="#" style="color:rgb(255,255,255);">Dropdown <span class="caret"></span></a>\
            <ul class="dropdown-menu" role="menu">\
                <li role="presentation">\
                    <a href="#">First Item</a>\
                </li>\
                <li role="presentation">\
                    <a href="#">Second Item</a>\
                </li>\
                <li role="presentation">\
                    <a href="#">Third Item</a>\
                </li>\
            </ul>\
        </li>\
    </ul>\
</div>';
        comp_comp6.parent_selector = null;
        f.addComponentType(comp_comp6);
        
        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);
            
        var section = new PgFrameworkLibSection("UserLib_lib", "Components");
        //Pass components in array
        section.setComponentTypes([comp_comp1, comp_comp2, comp_comp3, comp_comp4, comp_comp5, comp_comp6]);

        f.addLibSection(section);
   });
});