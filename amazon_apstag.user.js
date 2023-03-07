// ==UserScript==
// @name         kdkskd_Adblock
// @version      748282
// @description  adblocker dhjsjs
// @author       Saeed Akbar
// @grant       GM_getValue
// @run-at      document-start
// @match       * 
// @include     *
// @grant          none

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
