function myFunction() {
    var nav = document.getElementById("nav_items");
    if (nav.className === "nav_menu_items") {
        nav.className += " responsive";
    } else {
        nav.className = "nav_menu_items";
    }
}