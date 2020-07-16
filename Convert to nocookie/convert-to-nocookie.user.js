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
// @version      1.0.5
// ==/UserScript==

window.addEventListener('load', function()
{
	var iframes = document.querySelectorAll('iframe');

	for (var i = 0; i < iframes.length; i++)
	{
		console.debug("checking: (" + i + ")");
		console.debug(iframes[i]);
		
		iframes[i].src = iframes[i].src.replace('www.youtube.com', 'www.youtube-nocookie.com');
		
		if (iframes[i].getAttribute("data-lazy-src"))
		{
			iframes[i].src = iframes[i].getAttribute("data-lazy-src").replace('www.youtube.com', 'www.youtube-nocookie.com');
		}
	}
}, false);
