// ==UserScript==
// @name         Count Codurance Staff
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Adds a count to our people page!
// @author       You
// @match        https://codurance.com/about-us/our-people/
// @updateURL    https://github.com/chriseyre2000/tampermonkey-scripts/blob/master/count-codurance.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $('h1').text( 'Our People (' + $('div.g-max-width-800').length + ')'  );
})();
