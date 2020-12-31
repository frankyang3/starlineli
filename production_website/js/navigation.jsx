/*const used for the function drop_down_menu*/
const nav = document.getElementsByClassName("nav_bar_container");

/*const used for the function current_page*/
const url = window.location.href;
const url_to_className = {"/": "home_link",
                        "/about-us":"about_link",
                        "/products":"product_link",
                        "/contact-us":"contact_link"}

/*This function loads an html file into the current file, 
specified at a given class name. If a filename is not given, the 
function will try to find the file with the name classname.html 
instead*/
function includeHTML(classname, filename = classname) {
    $(function(){
        $("." + classname).load(filename + ".html"); 
    })
}
//BUG what happens when there are multiple tags with the same classname


//TODO create a function that detects the screen size and changes the nav bar accordingly

(function () {
    var menuDisplay = false;
    toggleMenu = function() {
        var menu = document.getElementById("nav_bar_container");
        if (menu.style.display == "none") {
            menu.style.display = "flex";
        } else {
            menu.style.display = "none";
        }
    }
})();
