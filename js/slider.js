
window.onload = function(){
    slideOne();
    slideTwo();
    slideThree();
    slideFour();
}

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");

let sliderThree = document.getElementById("slider-3");
let sliderFour = document.getElementById("slider-4");

let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");

let displayValThree= document.getElementById("range3");
let displayValFour = document.getElementById("range4");

let minGap = 0;

let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

let sliderTrackTwo = document.querySelector(".slider-track-two");
let sliderMaxValueTwo = document.getElementById("slider-3").max;

function slideOne(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    
    fillColor();
}
function slideTwo(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor();
}
function fillColor(){
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #E5E5ED ${percent1}% , #99CC66  ${percent1}% , #99CC66  ${percent2}%, #E5E5ED ${percent2}%)`;
}

function slideThree(){
    if(parseInt(sliderFour.value) - parseInt(sliderThree.value) <= minGap){
        sliderThree.value = parseInt(sliderFour.value) - minGap;
    }
    displayValThree.textContent = sliderThree.value;
    fillColorTwo();
}

function slideFour(){
    if(parseInt(sliderFour.value) - parseInt(sliderThree.value) <= minGap){
        sliderFour.value = parseInt(sliderThree.value) - minGap;
    }
    displayValFour.textContent = sliderFour.value;
    fillColorTwo();
}

function fillColorTwo(){
    percent3 = (sliderThree.value / sliderMaxValueTwo) * 100;
    percent4 = (sliderFour.value / sliderMaxValueTwo) * 100;
    sliderTrackTwo.style.background = `linear-gradient(to right, #E5E5ED ${percent3}% , #99CC66  ${percent3}% , #99CC66  ${percent4}%, #E5E5ED ${percent4}%)`;
}




