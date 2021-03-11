"use strict";

{ // start scope

function addAPerson(name, title, imgSrc) {
    let parentDiv = document.querySelector("#current-members-div");

    let myDiv = document.createElement("div");
    parentDiv.appendChild(myDiv);

    let img = document.createElement("img");
    img.src = imgSrc;
    img.height = "200";
    img.classList.add("member-img");
    myDiv.appendChild(img);

    let para = document.createElement("p");
    para.innerHTML = "<strong>" + name + "</strong>";
    myDiv.appendChild(para);

    para = document.createElement("p");
    para.textContent = title;
    myDiv.appendChild(para);

    let placeHolderDiv = document.createElement("div");
    placeHolderDiv.classList.add("fix-ugly-float");
    myDiv.appendChild(placeHolderDiv);
}

window.addEventListener("load", () => {
    addAPerson("Yin Wu, Ph.D."      , "Research Scientist", "image/people/yin_wu.png");
    addAPerson("Tianyu Liu, Ph.D."  , "Research Scientist"   , "image/people/tianyu_liu.jpg");
    addAPerson("Guibo Luo, Ph.D."   , "Research Fellow"   , "image/people/guibo_luo.png");
    addAPerson("Bin Li, Ph.D."   , "Research Scientist"   , "image/people/default_avatar.png");

    let myDiv = document.querySelector("#current-members-div");
    let placeHolderDiv = document.createElement("div");
    placeHolderDiv.classList.add("fix-ugly-float");
    myDiv.appendChild(placeHolderDiv);
});

} // end scope