
const buttonSelect = document.getElementById("button1");
var width1 = 0;
var height1 = 0;

function smth () {
    console.log(height1);
    console.log(width1);
    buttonSelect.style.setProperty('left', `${width1}px`); // 'margin-left', mértékegység vw volt
    buttonSelect.style.setProperty('top', `${height1}px`); // 'margin-top', mértékegység vh volt
    buttonSelect.style.setProperty('transform', 'none'); // itt már nem kell korrekció, nem volt itt semmi
}

function calculate1() {
    const maxWidth = window.innerWidth-150; // kép szélességével korrigál, nem volt itt semmi előtte
    const maxHeight = window.innerHeight-150; // kép magasságával korrigál, nem volt itt semmi előtte
    width1 = Math.floor(Math.random() * maxWidth); // maxWidth helyett egy korrigációs szám volt
    height1 = Math.floor(Math.random() * maxHeight); // maxHeight helyett egy korrigációs szám volt
    return smth();
}

buttonSelect.addEventListener("mouseover", calculate1);