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
// @version      1.0.6
// ==/UserScript==

// Select the node that will be observed for mutations
const targetNode = document,
// Options for the observer (which mutations to observe)
  config = { attributes: true, childList: true, subtree: true },
// Callback function to execute when mutations are observed
  callback = (mutationList, observer) => {
    for (const mutation of mutationList)
      if(mutation.target)
        changeYouTube(mutation.target?.querySelectorAll(`iframe`));
  },
// Create an observer instance linked to the callback function
  observer = new MutationObserver(callback),
  changeYouTube = (iframes) =>
  {
    if (iframes)
      for (let i = 0; i < iframes.length; i++)
      {
        if(iframes[i]?.src?.includes?.("www.youtube.com"))
          iframes[i].src = iframes[i].src.replace("www.youtube.com", "www.youtube-nocookie.com");

        if (iframes[i]?.getAttribute?.(`data-lazy-src`)?.includes?.("www.youtube.com"))
          iframes[i].setAttribute(`data-lazy-src`, iframes[i].getAttribute(`data-lazy-src`).replace("www.youtube.com", "www.youtube-nocookie.com"));

        if (iframes[i]?.getAttribute?.(`data-src`)?.includes?.("www.youtube.com"))
          iframes[i].setAttribute(`data-src`, iframes[i].getAttribute(`data-src`).replace("www.youtube.com", "www.youtube-nocookie.com"));

      }
  };

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
