function alternarCSS() {
    var cssFile = document.getElementById("cssFile");
    var currentCSS = cssFile.getAttribute("href");
    var newCSS = currentCSS === "style.css" ? "style1.css" : "style.css";
    cssFile.setAttribute("href", newCSS);
}

document.getElementById("btnColor").addEventListener("click", alternarCSS);