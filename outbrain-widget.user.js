// ==UserScript==
// @name         Outbrain-widgetAdblock Script by Saeed
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
    const obr = {};
    const methods = [
        'callClick', 'callLoadMore', 'callRecs', 'callUserZapping',
        'callWhatIs', 'cancelRecommendation', 'cancelRecs', 'closeCard',
        'closeModal', 'closeTbx', 'errorInjectionHandler', 'getCountOfRecs',
        'getStat', 'imageError', 'manualVideoClicked', 'onOdbReturn',
        'onVideoClick', 'pagerLoad', 'recClicked', 'refreshSpecificWidget',
        'refreshWidget', 'reloadWidget', 'researchWidget', 'returnedError',
        'returnedHtmlData', 'returnedIrdData', 'returnedJsonData', 'scrollLoad',
        'showDescription', 'showRecInIframe', 'userZappingMessage', 'zappingFormAction'
    ];
    obr.extern = {
        video: {
            getVideoRecs: noopfn,
            videoClicked: noopfn
        }
    };
    methods.forEach(function(a) {
        obr.extern[a] = noopfn;
    });
    window.OBR = window.OBR || obr;
})();
