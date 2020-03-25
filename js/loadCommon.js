"use strict";

{ // start scope

$(document).ready(() => {
    $('#common-content').load('./common.html', () => { // callback for load()

        // get url query string
        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get('pageName');

        // get element a
        let myAList = document.querySelectorAll("#left-nav ul li a");

        // reset
        for(let idx = 0; idx < myAList.length; ++idx)
        {
            myAList[idx].classList.remove("manualActive");
        }

        // if the query string matches element a, add "manualActive" to a's class list
        for(let idx = 0; idx < myAList.length; ++idx)
        {
            if(myAList[idx].id === myParam)
            {
                myAList[idx].classList.add("manualActive");
                break;
            }
        }
    });
});

} // end scope