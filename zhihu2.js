// ==UserScript==
// @name         ZhihuCE
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  Ce editor for zhihu
// @author       YaliKiWi
// @match        *://*.zhihu.com/*
// @grant        none
// ==/UserScript==

//Headline_Editor
(function () {
    'use strict';
    var self = document.getElementById('Sticky is-fixed');
	var parent = self.parentElment;
	var removed = parent.removeChild(self);
})();

//这个东西目前有锅...
