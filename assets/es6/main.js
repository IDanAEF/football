import scrolling from "./blocks/scrolling";
import mask from "./blocks/mask";
import slider from "./blocks/slider";
import forms from "./blocks/forms";
import other from "./blocks/other";

'use strict';

window.addEventListener('DOMContentLoaded', () => {
    scrolling();
    mask('input[type="tel"]');
    slider();
    forms();
    other();
});