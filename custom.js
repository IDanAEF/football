"use strict"

window.addEventListener('DOMContentLoaded', () => {
    try {
        const aboutTabs = document.querySelectorAll('.home__about-tabs span'),
              aboutCont = document.querySelector('.home__about-tabs');

        aboutTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                aboutCont.scroll(tab.getBoundingClientRect().x, 0);
            });
        });
    } catch (e) {
        console.log(e.stack);
    }
});