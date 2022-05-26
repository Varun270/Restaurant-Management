// to change header color on scroll
window.onscroll = function(){changeNavColor()}


//function to change background color of navigation bar
function changeNavColor() {
    if (window.scrollY > 100) {
        document.querySelector("#navBar").classList.add("navColorChange");
        //  document.querySelector("#navBar").classList.add("navbar-dark");
    }
    if (window.scrollY < 100) {
        document.querySelector("#navBar").classList.remove("navColorChange");
        //  document.querySelector("#navBar").classList.remove("navbar-dark");
    }
}