// ==UserScript==
// @name         stewbeef's keybinds
// @namespace    https://www.github.com/mpstewart
// @version      0.1
// @description  Keybinds for melvor idle
// @author       stewbeef
// @match        *melvoridle.com
// @run-at       document-idle
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    // function alias map; in case function names change
    goToPage    = changePage
    var curPage = currentPage


    const BANKPAGE = 2;

    var cachePage;

    document.addEventListener('keypress', function(e) {
        switch(e.code) {
            case 'Backquote':
                toggleBankTab();
                break;
        }
    });

    function toggleBankTab() {
        if (curPage == BANKPAGE) {
            var nextPage = cachePage != 2 ? cachePage : BANKPAGE;
            goToPage(nextPage);
        }

        else {
            cachePage = curPage;
            goToPage(BANKPAGE);
        }
    }

    console.log("keybinds initialized...");
})();
