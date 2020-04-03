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
    addAPerson("Guanghua Tan, Ph.D.", "Research Fellow"   , "image/people/guanghua_tan.png");
    addAPerson("Ying Li, M.D."      , "Research Fellow"   , "image/people/ying_li.png");
    addAPerson("Jinghui Lu, M.D."   , "Research Fellow"   , "image/people/jinghui_lu.png");
    addAPerson("Tianyu Liu, Ph.D."  , "Research Fellow"   , "image/people/tianyu_liu.jpg");
    addAPerson("Qijun Shen, M.D."   , "Research Fellow"   , "image/people/qijun_shen.jpg");
    addAPerson("Guibo Luo, Ph.D."   , "Research Fellow"   , "image/people/guibo_luo.png");
    addAPerson("Enhao Liu, B.S."    , "Research Fellow"   , "image/people/enhao_liu.png");

    let myDiv = document.querySelector("#current-members-div");
    let placeHolderDiv = document.createElement("div");
    placeHolderDiv.classList.add("fix-ugly-float");
    myDiv.appendChild(placeHolderDiv);
});

} // end scope