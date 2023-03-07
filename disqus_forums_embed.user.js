// ==UserScript==
// @name          discus forms embed Adblock Script by Saeed
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
    const ee = document.getElementsByTagName('script');
    let i = ee.length, src;
    while ( i-- ) {
        src = ee[i].src || '';
        if ( src === '' ) {
            continue;
        }
        if ( src.lastIndexOf('disqus.com/embed.js') === (src.length - 19) ) {
            return;
        }
    }
    const e = document.createElement('script');
    e.async = true;
    e.src = '//' + window.disqus_shortname + '.disqus.com/embed.js';
    document.body.appendChild(e);
})();
