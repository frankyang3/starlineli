function drop_down_menu(){
    var nav = document.getElementsByClassName("nav_bar_container");

    if (nav[0].style.display === "block"){
        nav[0].style.display = "none";
    } else {
        nav[0].style.display = "block";
    }
}
//TODO add a function that includes a html file in another html file