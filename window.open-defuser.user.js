// ==UserScript==
// @name         window_open_defuser_Adblock Script by Saeed
// @namespace    *
// @version      1.1
// @description  adblocker
// @author      Saeed Akbar
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
    let arg1 = '{{1}}';
    if ( arg1 === '{{1}}' ) { arg1 = ''; }
    let arg2 = '{{2}}';
    if ( arg2 === '{{2}}' ) { arg2 = ''; }
    let arg3 = '{{3}}';
    if ( arg3 === '{{3}}' ) { arg3 = ''; }
    const log = /\blog\b/.test(arg3)
        ? console.log.bind(console)
        : ( ) => { };
    const newSyntax = /^[01]?$/.test(arg1) === false;
    let pattern = '';
    let targetResult = true;
    let autoRemoveAfter = -1;
    if ( newSyntax ) {
        pattern = arg1;
        if ( pattern.startsWith('!') ) {
            targetResult = false;
            pattern = pattern.slice(1);
        }
        autoRemoveAfter = parseInt(arg2);
        if ( isNaN(autoRemoveAfter) ) {
            autoRemoveAfter = -1;
        } 
    } else {
        pattern = arg2;
        if ( arg1 === '0' ) {
            targetResult = false;
        }
    }
    if ( pattern === '' ) {
        pattern = '.?';
    } else if ( /^\/.+\/$/.test(pattern) ) {
        pattern = pattern.slice(1,-1);
    } else {
        pattern = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    const rePattern = new RegExp(pattern);
    const createDecoy = function(tag, urlProp, url) {
        const decoy = document.createElement(tag);
        decoy[urlProp] = url;
        decoy.style.setProperty('height','1px', 'important');
        decoy.style.setProperty('position','fixed', 'important');
        decoy.style.setProperty('top','-1px', 'important');
        decoy.style.setProperty('width','1px', 'important');
        document.body.appendChild(decoy);
        setTimeout(( ) => decoy.remove(), autoRemoveAfter * 1000);
        return decoy;
    };
    window.open = new Proxy(window.open, {
        apply: function(target, thisArg, args) {
            log('window.open:', ...args);
            const url = args[0];
            if ( rePattern.test(url) !== targetResult ) {
                return target.apply(thisArg, args);
            }
            if ( autoRemoveAfter < 0 ) { return null; }
            const decoy = /\bobj\b/.test(arg3)
                ? createDecoy('object', 'data', url)
                : createDecoy('iframe', 'src', url);
            let popup = decoy.contentWindow;
            if ( typeof popup === 'object' && popup !== null ) {
                Object.defineProperty(popup, 'closed', { value: false });
            } else {
                const noopFunc = (function(){}).bind(self);
                popup = new Proxy(self, {
                    get: function(target, prop) {
                        if ( prop === 'closed' ) { return false; }
                        const r = Reflect.get(...arguments);
                        if ( typeof r === 'function' ) { return noopFunc; }
                        return target[prop];
                    },
                    set: function() {
                        return Reflect.set(...arguments);
                    },
                });
            }
            if ( /\blog\b/.test(arg3) ) {
                popup = new Proxy(popup, {
                    get: function(target, prop) {
                        log('window.open / get', prop, '===', target[prop]);
                        return Reflect.get(...arguments);
                    },
                    set: function(target, prop, value) {
                        log('window.open / set', prop, '=', value);
                        return Reflect.set(...arguments);
                    },
                });
            }
            return popup;
        }
    });
})();
