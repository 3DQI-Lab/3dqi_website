"use strict";

{ // start scope

function addAPerson(name, title, imgSrc, parentDiv) {
    let myDiv = document.createElement("div");
    myDiv.classList.add("people-instance");
    parentDiv.appendChild(myDiv);

    let divImg = document.createElement("div");
    divImg.classList.add("people-photo");
    let img = document.createElement("img");
    img.src = imgSrc;
    img.height = "200";
    img.classList.add("member-img");
    divImg.appendChild(img);

    let divBio = document.createElement("div");
    divBio.classList.add("people-bio");
    let para = document.createElement("p");
    para.innerHTML = "<strong>" + name + "</strong>";
    divBio.appendChild(para);

    para = document.createElement("p");
    para.textContent = title;
    divBio.appendChild(para);

    myDiv.appendChild(divImg);
    myDiv.appendChild(divBio);
}

window.addEventListener("load", () => {
    {
        let parentDiv = document.querySelector("#current-members-div");
        addAPerson("Yin Wu, Ph.D."      , "Research Scientist"   ,    "image/people/yin_wu.png"     , parentDiv);
        addAPerson("Tianyu Liu, Ph.D."  , "Research Scientist"   , "image/people/tianyu_liu.jpg"    , parentDiv);
        addAPerson("Guibo Luo, Ph.D."   , "Research Fellow"      , "image/people/guibo_luo.png"     , parentDiv);
        addAPerson("Bin Li, Ph.D."      , "Research Scientist"   , "image/people/default_avatar.png", parentDiv);
    }

    {
        let parentDiv = document.querySelector("#current-interns-div");
        addAPerson("Enhao Liu"      , ""   , "image/people/enhao_liu.jpg"     , parentDiv);
        addAPerson("Tim Tsai"       , ""   , "image/people/default_avatar.png", parentDiv);
        addAPerson("Richard Xiao"   , ""   , "image/people/default_avatar.png", parentDiv);
        addAPerson("Arthur Lee"     , ""   , "image/people/default_avatar.png", parentDiv);
        addAPerson("Milo Loyall"    , ""   , "image/people/default_avatar.png", parentDiv);
    }
});

} // end scope