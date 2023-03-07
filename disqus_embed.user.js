6// ==UserScript==
// @name         discusAdblock Script by Saeed
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
    const p = document.getElementById(window.disqus_container_id || 'disqus_thread');
    if ( p === null ) { return; }
    const b = document.createElement('button');
    b.textContent = 'Disqus blocked by uBlock Origin: click to unblock';
    b.type = 'button';
    p.appendChild(b);
    const loadDisqus = function(ev) {
        b.removeEventListener('click', loadDisqus);
        p.removeChild(b);
        const script = document.createElement('script');
        script.async = true;
        const t = Date.now().toString();
        script.src = '//' + window.disqus_shortname + '.disqus.com/embed.js?_=1457540' + t.slice(-6);
        document.body.appendChild(script);
        ev.preventDefault();
        ev.stopPropagation();
    };
    b.addEventListener('click', loadDisqus);
})();
