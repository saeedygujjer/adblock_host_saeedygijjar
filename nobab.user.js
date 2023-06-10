// ==UserScript==
// @name         nobab Script by Saeed nobab
// @namespace    *
// @version      1.111
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
// ==UserScript==
(function() {
    'use strict';
    const signatures = [
        [ 'blockadblock' ],
        [ 'babasbm' ],
        [ /getItem\('babn'\)/ ],
        [
            'getElementById',
            'String.fromCharCode',
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
            'charAt',
            'DOMContentLoaded',
            'AdBlock',
            'addEventListener',
            'doScroll',
            'fromCharCode',
            '<<2|r>>4',
            'sessionStorage',
            'clientWidth',
            'localStorage',
            'Math',
            'random'
        ],
    ];
    const check = function(s) {
        for ( let i = 0; i < signatures.length; i++ ) {
            const tokens = signatures[i];
            let match = 0;
            for ( let j = 0; j < tokens.length; j++ ) {
                const token = tokens[j];
                const pos = token instanceof RegExp
                    ? s.search(token)
                    : s.indexOf(token);
                if ( pos !== -1 ) { match += 1; }
            }
            if ( (match / tokens.length) >= 0.8 ) { return true; }
        }
        return false;
    };
    window.eval = new Proxy(window.eval, {              // jshint ignore: line
        apply: function(target, thisArg, args) {
            const a = args[0];
            if ( typeof a !== 'string' || !check(a) ) {
                return target.apply(thisArg, args);
            }
            if ( document.body ) {
                document.body.style.removeProperty('visibility');
            }
            let el = document.getElementById('babasbmsgx');
            if ( el ) {
                el.parentNode.removeChild(el);
            }
        }
    });
    window.setTimeout = new Proxy(window.setTimeout, {
        apply: function(target, thisArg, args) {
            const a = args[0];
            if (
                typeof a !== 'string' ||
                /\.bab_elementid.$/.test(a) === false
            ) {
                return target.apply(thisArg, args);
            }
        }
    });
})();
