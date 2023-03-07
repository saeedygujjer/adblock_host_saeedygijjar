// ==UserScript==
// @name         kdkskd_Adblock Script by Saeed
// @namespace    http://lkubuntu.wordpress.com/
// @version      1.1
// @description  adblocker
// @author       Saeed Akbar
// @grant       GM_getValue
// @run-at      document-start
// @match       * 
// @include     *

(function() {
    'use strict';
    const w = window;
    const noopfn = function() {
        ; // jshint ignore:line
    }.bind();
    const apstag = {
        fetchBids: function(a, b) {
            if ( b instanceof Function ) {
                b([]);
            }
        },
        init: noopfn,
        setDisplayBids: noopfn,
        targetingKeys: noopfn,
    };
    w.apstag = apstag;
})();
