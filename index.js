const header = document.querySelector(".header");
const logo = document.querySelector(".logo");
const search = document.querySelector(".search");
const globe = document.getElementById("globe-svg");
const profile = document.querySelector(".profile");
const topSearchText = document.querySelector(".top-search-text");
const topSearch = document.querySelector(".top-search");


const headerHeight = header.getBoundingClientRect().height;

window.addEventListener('scroll', () => {
    let scrollHeight = window.pageYOffset;
    if (scrollHeight > headerHeight) {
        header.classList.add("not-transparent");
        logo.classList.add("brand-color");
        search.classList.add("show-search");
        globe.classList.remove("svg-white");
        profile.classList.add("background-transparent");
        topSearchText.classList.add("remove");
        //  topSearch.classList.add("search-animation");
    } else {
        header.classList.remove("not-transparent");
        logo.classList.remove("brand-color");
        search.classList.remove("show-search");
        globe.classList.add("svg-white");
        profile.classList.remove("background-transparent");
        topSearchText.classList.remove("remove");
    }

});