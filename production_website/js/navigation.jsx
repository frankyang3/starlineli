const nav = document.getElementsByClassName("nav_bar_container");
const url = window.location.href;
const url_to_className = {"/": "home_link",
                        "/about-us":"about_link",
                        "/products":"product_link",
                        "/contact-us":"contact_link"}
/*This function changes the property of the nav_bar_container 
between 'none' and 'block'*/
function drop_down_menu(){
    if (nav[0].style.display === "block"){
        nav[0].style.display = "none";
    } else {
        nav[0].style.display = "block";
    }
}

function current_page(){
    var trim_url = url.slice(22);
    var elem_list = document.getElementsByClassName(url_to_className[trim_url]);
    if (elem_list.length != 1){
        console.log(elem_list);
        console.error("Cannot find current page");
    }else{
        elem_list[0].setAttribute("id", "current_page");
    }
}

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

