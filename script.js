// ==UserScript==
// @name         linovelib测试脚本
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the linovelib!
// @author       LittleJake
// @match        https://*.linovelib.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=linovelib.com
// @grant        none
// @run-at       document-start
// ==/UserScript==


(function() {
    'use strict';
    document.ce = document.createElement;
    document.createElement = function (e){
        if(e == 'script') return document.ce("noscript");
        return document.ce(e);
    };
})();
