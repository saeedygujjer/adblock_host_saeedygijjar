// ==UserScript==
// @name         discusAdblock Script by Saeed
// @namespace    saeed
// @version      17382.1
// @description  adblockerjs
// @author       Saeed Akbar
// @match        * 
// @include      *
// @grant        GM_getValue
// @grant        none

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
