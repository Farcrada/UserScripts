// ==UserScript==
// @name         Convert to nocookie
// @namespace    https://github.com/Farcrada/UserScripts
// @homepage     https://github.com/Farcrada/UserScripts/tree/master/Convert%20to%20nocookie
// @updateURL    https://github.com/Farcrada/UserScripts/raw/master/Convert%20to%20nocookie/convert-to-nocookie.user.js
// @description  Makes external YouTube links work with anti-trackers
// @author       Farcrada
// @include      http://*/*
// @include      https://*/*
// @run-at       document-end
// @version      1.0.4
// ==/UserScript==

window.addEventListener('load', function()
{
  if (document.getElementsByTagName('iframe'))
  {
    //This needs to be re-filled because of webpages loading either slow or incomplete on the first "get"
    var doc = document.getElementsByTagName('iframe');
    for (var i = doc.length - 1; i >= 0; i--)
    {
      if (document.getElementsByTagName('iframe')[i].getAttribute('src'))
      {
        console.debug("checking:" + document.getElementsByTagName('iframe')[i].getAttribute('src'));
        
        if (document.getElementsByTagName('iframe')[i].getAttribute('src').includes('www.youtube.com'))
        {
          document.getElementsByTagName('iframe')[i].setAttribute('src', document.getElementsByTagName('iframe')[i].getAttribute('src').replace('www.youtube.com', 'www.youtube-nocookie.com'));
          
          if (document.getElementsByTagName('iframe')[i].getAttribute('data-src'))
          {
            document.getElementsByTagName('iframe')[i].setAttribute('data-src', document.getElementsByTagName('iframe')[i].getAttribute('data-src').replace('www.youtube.com', 'www.youtube-nocookie.com'));
          }
          
          console.debug("iframe found and changed: " + document.getElementsByTagName('iframe')[i].getAttribute('src'));
        }
      }
      doc = document.getElementsByTagName('iframe');
    }
  }
}, false);
