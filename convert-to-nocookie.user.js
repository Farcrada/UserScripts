// ==UserScript==
// @name         Convert to nocookie
// @namespace    https://github.com/Farcrada
// @homepage     https://github.com/Farcrada/Convert-to-Nocookie
// @description  Makes external YouTube links work with anti-trackers
// @author       Farcrada
// @include      http://*/*
// @include      https://*/*
// @run-at       document-end
// @version      1.0.0
// ==/UserScript==

(function(){
  
    for (var i = document.getElementsByTagName('iframe').length - 1; i >= 0; i--) {
        if (document.getElementsByTagName('iframe')[i].getAttribute('src').includes('www.youtube.com'))
        {
            console.debug("iframe found and changed: " + document.getElementsByTagName('iframe')[i].getAttribute('src'));
            document.getElementsByTagName('iframe')[i].setAttribute('src', document.getElementsByTagName('iframe')[i].getAttribute('src').replace('www.youtube.com', 'www.youtube-nocookie.com'));
            break;
        }
    }

}) ();
