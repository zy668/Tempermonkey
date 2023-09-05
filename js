// ==UserScript==
// @name         哔哩哔哩番剧搜索
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.bilibili.com/bangumi/play/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  let element = document.querySelector(
    "#__next > div > div > div.plp-l.sticky > div > div.mediainfo_mediaInfo__Cpow4 > div > a.mediainfo_mediaTitle__lu7u_"
  );
  let titleValue = element.getAttribute("title");
  let but = document.createElement("button");
  but.innerText = "一键搜索";
  but.style.cursor = "pointer";
  but.style.position = "absolute";
  but.style.left = "0px";
  but.style.top = "70px";
  but.addEventListener("click", function () {
    //"http://www.mxdm9.com/search/-------------.html?wd="+encodeURIComponent(titleValue)
    let url =
      "http://www.mxdm9.com/search/-------------.html?wd=" +
      encodeURIComponent(titleValue);
    window.location.href = url;
  });
  document.body.appendChild(but);
})();
