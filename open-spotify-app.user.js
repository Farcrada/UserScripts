// ==UserScript==
// @name         Open Spotify app
// @namespace    https://github.com/Farcrada
// @homepage     https://github.com/Farcrada/Convert-to-Nocookie
// @updateURL    https://github.com/Farcrada/Convert-to-Nocookie/raw/master/convert-to-nocookie.user.js
// @description  This userscript redirects open.spotify.com links to the desktop app
// @author       Farcrada
// @include      http://open.spotify.com/*
// @include      https://open.spotify.com/*
// @run-at       document-start
// @version      1.0.0
// ==/UserScript==

(function() {
  'use strict';
  var data=document.URL.match(/[\/\&](track|playlist|album|artist|show|episode)\/([^\&\#\/\?]+)/i);
  console.log("This is a "+data[1]+" with id:"+data[2]+"\nAttempting to redirect");
  window.location.replace('spotify:'+data[1]+':'+data[2]);
  close();
})();
