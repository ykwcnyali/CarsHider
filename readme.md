### 本工具为机房开车隐藏页头工具
0. 原理
	基于tampermonkey的js脚本
	暴力修改
1. 准备内容
	Tampermonkey[chrome下载地址](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=zh-CN)
2. 脚本下载
	[用于知乎](https://greasyfork.org/zh-CN/scripts/387105-zhihuhe)
	[用于QQ空间](https://greasyfork.org/zh-CN/scripts/387117-qzonehe)
3. 打开[知乎](zhihu.com) [QQ空间](i.qq.com)即可，需等待一段时间
	等待时间$<5min$
4. 欢迎反馈bug&提供改进
5. 方法二
	在Tampermonkey中添加如下脚本代码
	**Zhihu**
	```
// ==UserScript==
// @name         ZhihuHE
// @namespace    http://tampermonkey.net/
// @version      0.1.5
// @description  Headline editor for zhihu
// @author       YaliKiWi
// @match        *://*.zhihu.com/*
// @grant        none
// ==/UserScript==

//Headline_Editor
(function () {
    'use strict';
    document.title='首页_洛谷||计算机科学教育新生态';
    document.querySelector("link[rel='shortcut icon']").href = "https://cdn.luogu.org/images/favicon3.ico";
    document.querySelector("link[rel*='icon']").href = "https://cdn.luogu.org/images/favicon3.ico";
})();
	```
	**Qzone**
	```
// ==UserScript==
// @name         QzoneHE
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  Headline editor for qzone
// @author       YaliKiWi
// @match        *://*.qq.com/*
// @match        *://*.weibo.com/*
// @grant        none
// ==/UserScript==

//Headline_Editor
(function () {
    'use strict';
    document.title='Codeforces 97E Leaders - CSDN';
    document.querySelector("link[rel='shortcut icon']").href = "https://csdnimg.cn/public/favicon.ico";
    document.querySelector("link[rel*='icon']").href = "https://csdnimg.cn/public/favicon.ico";
})();
	```
