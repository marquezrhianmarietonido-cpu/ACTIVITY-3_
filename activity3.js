function changeFont() {

    let paragraph = document.getElementById("paragraph");

    if (paragraph.style.fontFamily == "Georgia") {
        paragraph.style.fontFamily = "Arial";
    } else {
        paragraph.style.fontFamily = "Georgia";
    }
}

function changeSize() {

    let paragraph = document.getElementById("paragraph");

    if (paragraph.style.fontSize == "25px") {
        paragraph.style.fontSize = "17px";
    } else {
        paragraph.style.fontSize = "25px";
    }
}
r
function changeColor() {

    let paragraph = document.getElementById("paragraph");

    if (paragraph.style.color == "rgb(217, 93, 138)") {
        paragraph.style.color = "#54333f";
    } else {
        paragraph.style.color = "#d95d8a";
    }
}

function mouseOver() {

    document.getElementById("paragraph").style.backgroundColor = "#ffd1df";
}

function mouseOut() {

    document.getElementById("paragraph").style.backgroundColor = "#fff0f5";
}
