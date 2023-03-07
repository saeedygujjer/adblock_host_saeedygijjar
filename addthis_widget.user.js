// ==UserScript==
// @name         addthis Adblock Script by Saeed
// @namespace    *
// @version      1.1
// @description  adblocker
// @author       Saeed Akbar
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_registerMenuCommand
// @run-at      document-start
// @grant       GM.getResourceUrl
// @grant       GM_getResourceURL
// @grant       GM_addStyle
// @grant       GM.xmlHttpRequest
// @grant       GM_xmlhttpRequest
// @grant       GM.openInTab
// @grant       GM_openInTab
// @grant       GM_registerMenuCommand
// @match       * 
// @include     *

(function() {
    'use strict';
    const noopfn = function() {
    };
    window.addthis = {
        addEventListener: noopfn,
        button: noopfn,
        init: noopfn,
        layers: noopfn,
        ready: noopfn,
        sharecounters: {
            getShareCounts: noopfn
        },
        toolbox: noopfn,
        update: noopfn
    };
})();
