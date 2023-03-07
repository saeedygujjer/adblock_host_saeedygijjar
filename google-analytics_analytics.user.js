// ==UserScript==
// @name         google_Adblock Script by Saeed
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
    // https://developers.google.com/analytics/devguides/collection/analyticsjs/
    const noopfn = function() {
    };
    const noopnullfn = function() {
        return null;
    };
    //
    const Tracker = function() {
    };
    const p = Tracker.prototype;
    p.get = noopfn;
    p.set = noopfn;
    p.send = noopfn;
    //
    const w = window;
    const gaName = w.GoogleAnalyticsObject || 'ga';
    const gaQueue = w[gaName];
    // https://github.com/uBlockOrigin/uAssets/pull/4115
    const ga = function() {
        const len = arguments.length;
        if ( len === 0 ) { return; }
        const args = Array.from(arguments);
        let fn;
        let a = args[len-1];
        if ( a instanceof Object && a.hitCallback instanceof Function ) {
            fn = a.hitCallback;
        } else if ( a instanceof Function ) {
            fn = ( ) => { a(ga.create()); };
        } else {
            const pos = args.indexOf('hitCallback');
            if ( pos !== -1 && args[pos+1] instanceof Function ) {
                fn = args[pos+1];
            }
        }
        if ( fn instanceof Function === false ) { return; }
        try {
            fn();
        } catch (ex) {
        }
    };
    ga.create = function() {
        return new Tracker();
    };
    ga.getByName = noopnullfn;
    ga.getAll = function() {
        return [];
    };
    ga.remove = noopfn;
    // https://github.com/uBlockOrigin/uAssets/issues/2107
    ga.loaded = true;
    w[gaName] = ga;
    // https://github.com/gorhill/uBlock/issues/3075
    const dl = w.dataLayer;
    if ( dl instanceof Object && dl.hide instanceof Object && typeof dl.hide.end === 'function' ) {
        dl.hide.end();
    }
    // empty ga queue
    if ( gaQueue instanceof Function && Array.isArray(gaQueue.q) ) {
        for ( const entry of gaQueue.q ) {
            ga(...entry);
        }
    }
})();
