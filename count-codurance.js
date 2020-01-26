// ==UserScript==
// @name         Count Codurance Staff
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       @chriseyre2000
// @match        https://codurance.com/about-us/our-people/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $('div.u-heading-v2-3--bottom h2').text( 'The Team (' + $('div.g-max-width-800').length + ')'  );
})();
