// to change header color on scroll
window.onscroll = (e) => {
    if (window.scrollY > 150) {
        document.querySelector("#navBar").classList.add("navColorChange");
        //  document.querySelector("#navBar").classList.add("navbar-dark");
    }
    if (window.scrollY < 150) {
        document.querySelector("#navBar").classList.remove("navColorChange");
        //  document.querySelector("#navBar").classList.remove("navbar-dark");
    }
};