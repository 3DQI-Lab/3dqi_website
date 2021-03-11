"use strict";

{ // start scope

// shall be called by each html page

$(document).ready(() => {
    $('#common-content').load('./common.html', () => { // callback for load()

        // window.location.search is the url query string
        // e.g.: "?pageName=a-home"
        const urlParams = new URLSearchParams(window.location.search);
        // returns the first value associated with the given search parameter "pageName".
        // e.g.: myParam = "a-home"
        const myParam = urlParams.get('pageName');

        // get element a
        let myAList = document.querySelectorAll("#left-nav ul li a");

        // if the query string matches element a, add "manualActive" to a's class list
        for(let idx = 0; idx < myAList.length; ++idx)
        {
            if(myAList[idx].id === myParam)
            {
                if(!myAList[idx].classList.contains("manualActive"))
                {
                    myAList[idx].classList.add("manualActive");
                }
                break;
            }
        }
    });
});

} // end scope