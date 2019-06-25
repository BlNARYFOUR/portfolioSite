"use strict";

document.addEventListener("DOMContentLoaded", init);

function init(e) {
    setYearOfSkill(2015);
}

function setYearOfSkill(beginYear) {
    let date = new Date();

    document.getElementById("skill-years").innerText = (date.getFullYear() - beginYear).toString();
}