// ==UserScript==
// @name        duckduckgoRedir
// @namespace   Violentmonkey Scripts
// @match       https://duckduckgo.com/*
// @grant       none
// @version     1.0
// @author      -
// @description 4/4/2021, 11:49:40 PM
// ==/UserScript==
window.location.href = 'https://www.google.com/search?q='+window.location.href.split('=')[1].split('&')[0]
