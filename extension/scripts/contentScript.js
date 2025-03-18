
document.body.style.backgroundColor = "black";
document.body.style.color = "red";

const pageContent = document.getElementById("pageContent");
if (pageContent) {
    pageContent.style.filter = "invert(100%)";
}

const body = document.getElementsByTagName("body")[0];
if (body) {
    body.style.background = "black";
}

const html = document.getElementsByTagName("html")[0];
if (html) {
    html.style.background = "black";
}
