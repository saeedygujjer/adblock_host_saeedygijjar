// ==UserScript==
// @name         amazon_ad Adblock Script by Saeed
// @namespace    http://google.com/
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
    if ( amznads ) {
        return;
    }
    var w = window;
    var noopfn = function() {
        ;
    }.bind();
    var amznads = {
        appendScriptTag: noopfn,
        appendTargetingToAdServerUrl: noopfn,
        appendTargetingToQueryString: noopfn,
        clearTargetingFromGPTAsync: noopfn,
        doAllTasks: noopfn,
        doGetAdsAsync: noopfn,
        doTask: noopfn,
        detectIframeAndGetURL: noopfn,
        getAds: noopfn,
        getAdsAsync: noopfn,
        getAdForSlot: noopfn,
        getAdsCallback: noopfn,
        getDisplayAds: noopfn,
        getDisplayAdsAsync: noopfn,
        getDisplayAdsCallback: noopfn,
        getKeys: noopfn,
        getReferrerURL: noopfn,
        getScriptSource: noopfn,
        getTargeting: noopfn,
        getTokens: noopfn,
        getValidMilliseconds: noopfn,
        getVideoAds: noopfn,
        getVideoAdsAsync: noopfn,
        getVideoAdsCallback: noopfn,
        handleCallBack: noopfn,
        hasAds: noopfn,
        renderAd: noopfn,
        saveAds: noopfn,
        setTargeting: noopfn,
        setTargetingForGPTAsync: noopfn,
        setTargetingForGPTSync: noopfn,
        tryGetAdsAsync: noopfn,
        updateAds: noopfn
    };
    w.amznads = amznads;
    w.amzn_ads = w.amzn_ads || noopfn;
    w.aax_write = w.aax_write || noopfn;
    w.aax_render_ad = w.aax_render_ad || noopfn;
})();
