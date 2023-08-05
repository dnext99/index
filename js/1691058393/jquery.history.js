"object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(e){return e<10?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var a,r,n,o,i,s=gap,u=t[e];switch(u&&"object"==typeof u&&"function"==typeof u.toJSON&&(u=u.toJSON(e)),"function"==typeof rep&&(u=rep.call(t,e,u)),typeof u){case"string":return quote(u);case"number":return isFinite(u)?String(u):"null";case"boolean":case"null":return String(u);case"object":if(!u)return"null";if(gap+=indent,i=[],"[object Array]"===Object.prototype.toString.apply(u)){for(o=u.length,a=0;a<o;a+=1)i[a]=str(a,u)||"null";return n=0===i.length?"[]":gap?"[\n"+gap+i.join(",\n"+gap)+"\n"+s+"]":"["+i.join(",")+"]",gap=s,n}if(rep&&"object"==typeof rep)for(o=rep.length,a=0;a<o;a+=1)"string"==typeof rep[a]&&(r=rep[a],(n=str(r,u))&&i.push(quote(r)+(gap?": ":":")+n));else for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(n=str(r,u))&&i.push(quote(r)+(gap?": ":":")+n);return n=0===i.length?"{}":gap?"{\n"+gap+i.join(",\n"+gap)+"\n"+s+"}":"{"+i.join(",")+"}",gap=s,n}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(e,t,a){var r;if(gap="",indent="","number"==typeof a)for(r=0;r<a;r+=1)indent+=" ";else"string"==typeof a&&(indent=a);if(rep=t,!t||"function"==typeof t||"object"==typeof t&&"number"==typeof t.length)return str("",{"":e});throw new Error("JSON.stringify")}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(e,t){var a,r,n=e[t];if(n&&"object"==typeof n)for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(void 0!==(r=walk(n,a))?n[a]=r:delete n[a]);return reviver.call(e,t,n)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),function(e,t){"use strict";var a=e.History=e.History||{},r=e.jQuery;if(void 0!==a.Adapter)throw new Error("History.js Adapter has already been loaded...");a.Adapter={bind:function(e,t,a){r(e).bind(t,a)},trigger:function(e,t,a){r(e).trigger(t,a)},extractEventData:function(e,t,a){return t&&t.originalEvent&&t.originalEvent[e]||a&&a[e]||void 0},onDomLoad:function(e){r(e)}},void 0!==a.init&&a.init()}(window),function(e,t){"use strict";var a=e.document,r=e.setTimeout||r,n=e.clearTimeout||n,o=e.setInterval||o,i=e.History=e.History||{};if(void 0!==i.initHtml4)throw new Error("History.js HTML4 Support has already been loaded...");i.initHtml4=function(){if(void 0!==i.initHtml4.initialized)return!1;i.initHtml4.initialized=!0,i.enabled=!0,i.savedHashes=[],i.isLastHash=function(e){return e===i.getHashByIndex()},i.isHashEqual=function(e,t){return e=encodeURIComponent(e).replace(/%25/g,"%"),t=encodeURIComponent(t).replace(/%25/g,"%"),e===t},i.saveHash=function(e){return!i.isLastHash(e)&&(i.savedHashes.push(e),!0)},i.getHashByIndex=function(e){return void 0===e?i.savedHashes[i.savedHashes.length-1]:e<0?i.savedHashes[i.savedHashes.length+e]:i.savedHashes[e]},i.discardedHashes={},i.discardedStates={},i.discardState=function(e,t,a){var r,n=i.getHashByState(e);return r={discardedState:e,backState:a,forwardState:t},i.discardedStates[n]=r,!0},i.discardHash=function(e,t,a){var r={discardedHash:e,backState:a,forwardState:t};return i.discardedHashes[e]=r,!0},i.discardedState=function(e){var t=i.getHashByState(e);return i.discardedStates[t]||!1},i.discardedHash=function(e){return i.discardedHashes[e]||!1},i.recycleState=function(e){var t=i.getHashByState(e);return i.discardedState(e)&&delete i.discardedStates[t],!0},i.emulated.hashChange&&(i.hashChangeInit=function(){i.checkerFunction=null;var t,r,n,s,u="",l=Boolean(i.getHash());return i.isInternetExplorer()?(t="historyjs-iframe",(r=a.createElement("iframe")).setAttribute("id",t),r.setAttribute("src","#"),r.style.display="none",a.body.appendChild(r),r.contentWindow.document.open(),r.contentWindow.document.close(),n="",s=!1,i.checkerFunction=function(){if(s)return!1;s=!0;var t=i.getHash(),a=i.getHash(r.contentWindow.document);return t!==u?(u=t,a!==t&&(n=a=t,r.contentWindow.document.open(),r.contentWindow.document.close(),r.contentWindow.document.location.hash=i.escapeHash(t)),i.Adapter.trigger(e,"hashchange")):a!==n&&(n=a,l&&""===a?i.back():i.setHash(a,!1)),s=!1,!0}):i.checkerFunction=function(){var t=i.getHash()||"";return t!==u&&(u=t,i.Adapter.trigger(e,"hashchange")),!0},i.intervalList.push(o(i.checkerFunction,i.options.hashChangeInterval)),!0},i.Adapter.onDomLoad(i.hashChangeInit)),i.emulated.pushState&&(i.onHashChange=function(t){var a,r=t&&t.newURL||i.getLocationHref(),n=i.getHashByUrl(r),o=null;return i.isLastHash(n)?(i.busy(!1),!1):(i.doubleCheckComplete(),i.saveHash(n),n&&i.isTraditionalAnchor(n)?(i.Adapter.trigger(e,"anchorchange"),i.busy(!1),!1):(o=i.extractState(i.getFullUrl(n||i.getLocationHref()),!0),i.isLastSavedState(o)?(i.busy(!1),!1):(i.getHashByState(o),(a=i.discardedState(o))?(i.getHashByIndex(-2)===i.getHashByState(a.forwardState)?i.back(!1):i.forward(!1),!1):(i.pushState(o.data,o.title,encodeURI(o.url),!1),!0))))},i.Adapter.bind(e,"hashchange",i.onHashChange),i.pushState=function(t,a,r,n){if(r=encodeURI(r).replace(/%25/g,"%"),i.getHashByUrl(r))throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");if(!1!==n&&i.busy())return i.pushQueue({scope:i,callback:i.pushState,args:arguments,queue:n}),!1;i.busy(!0);var o=i.createStateObject(t,a,r),s=i.getHashByState(o),u=i.getState(!1),l=i.getHashByState(u),c=i.getHash(),d=i.expectedStateId==o.id;return i.storeState(o),i.expectedStateId=o.id,i.recycleState(o),i.setTitle(o),s===l?(i.busy(!1),!1):(i.saveState(o),d||i.Adapter.trigger(e,"statechange"),!i.isHashEqual(s,c)&&!i.isHashEqual(s,i.getShortUrl(i.getLocationHref()))&&i.setHash(s,!1),i.busy(!1),!0)},i.replaceState=function(t,a,r,n){if(r=encodeURI(r).replace(/%25/g,"%"),i.getHashByUrl(r))throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");if(!1!==n&&i.busy())return i.pushQueue({scope:i,callback:i.replaceState,args:arguments,queue:n}),!1;i.busy(!0);var o=i.createStateObject(t,a,r),s=i.getHashByState(o),u=i.getState(!1),l=i.getHashByState(u),c=i.getStateByIndex(-2);return i.discardState(u,o,c),s===l?(i.storeState(o),i.expectedStateId=o.id,i.recycleState(o),i.setTitle(o),i.saveState(o),i.Adapter.trigger(e,"statechange"),i.busy(!1)):i.pushState(o.data,o.title,o.url,!1),!0}),i.emulated.pushState&&i.getHash()&&!i.emulated.hashChange&&i.Adapter.onDomLoad(function(){i.Adapter.trigger(e,"hashchange")})},void 0!==i.init&&i.init()}(window),function(e,t){"use strict";var a=e.console||t,r=e.document,n=e.navigator,o=!1,i=e.setTimeout,s=e.clearTimeout,u=e.setInterval,l=e.clearInterval,c=e.JSON,d=e.alert,p=e.History=e.History||{},h=e.history;try{(o=e.sessionStorage).setItem("TEST","1"),o.removeItem("TEST")}catch(e){o=!1}if(c.stringify=c.stringify||c.encode,c.parse=c.parse||c.decode,void 0!==p.init)throw new Error("History.js Core has already been loaded...");p.init=function(e){return void 0!==p.Adapter&&(void 0!==p.initCore&&p.initCore(),void 0!==p.initHtml4&&p.initHtml4(),!0)},p.initCore=function(g){if(void 0!==p.initCore.initialized)return!1;if(p.initCore.initialized=!0,p.options=p.options||{},p.options.hashChangeInterval=p.options.hashChangeInterval||100,p.options.safariPollInterval=p.options.safariPollInterval||500,p.options.doubleCheckInterval=p.options.doubleCheckInterval||500,p.options.disableSuid=p.options.disableSuid||!1,p.options.storeInterval=p.options.storeInterval||1e3,p.options.busyDelay=p.options.busyDelay||250,p.options.debug=p.options.debug||!1,p.options.initialTitle=p.options.initialTitle||r.title,p.options.html4Mode=p.options.html4Mode||!1,p.options.delayInit=p.options.delayInit||!1,p.intervalList=[],p.clearAllIntervals=function(){var e,t=p.intervalList;if(void 0!==t&&null!==t){for(e=0;e<t.length;e++)l(t[e]);p.intervalList=null}},p.debug=function(){(p.options.debug||!1)&&p.log.apply(p,arguments)},p.log=function(){var e,t,n,o,i,s=void 0!==a&&void 0!==a.log&&void 0!==a.log.apply,u=r.getElementById("log");for(s?(o=Array.prototype.slice.call(arguments),e=o.shift(),void 0!==a.debug?a.debug.apply(a,[e,o]):a.log.apply(a,[e,o])):e="\n"+arguments[0]+"\n",t=1,n=arguments.length;t<n;++t){if("object"==typeof(i=arguments[t])&&void 0!==c)try{i=c.stringify(i)}catch(e){}e+="\n"+i+"\n"}return u?(u.value+=e+"\n-----\n",u.scrollTop=u.scrollHeight-u.clientHeight):s||d(e),!0},p.getInternetExplorerMajorVersion=function(){return p.getInternetExplorerMajorVersion.cached=void 0!==p.getInternetExplorerMajorVersion.cached?p.getInternetExplorerMajorVersion.cached:function(){for(var e=3,t=r.createElement("div"),a=t.getElementsByTagName("i");(t.innerHTML="\x3c!--[if gt IE "+ ++e+"]><i></i><![endif]--\x3e")&&a[0];);return e>4&&e}()},p.isInternetExplorer=function(){return p.isInternetExplorer.cached=void 0!==p.isInternetExplorer.cached?p.isInternetExplorer.cached:Boolean(p.getInternetExplorerMajorVersion())},p.options.html4Mode?p.emulated={pushState:!0,hashChange:!0}:p.emulated={pushState:!Boolean(e.history&&e.history.pushState&&e.history.replaceState&&!/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(n.userAgent)&&!/AppleWebKit\/5([0-2]|3[0-2])/i.test(n.userAgent)),hashChange:Boolean(!("onhashchange"in e||"onhashchange"in r)||p.isInternetExplorer()&&p.getInternetExplorerMajorVersion()<8)},p.enabled=!p.emulated.pushState,p.bugs={setHash:Boolean(!p.emulated.pushState&&"Apple Computer, Inc."===n.vendor&&/AppleWebKit\/5([0-2]|3[0-3])/.test(n.userAgent)),safariPoll:Boolean(!p.emulated.pushState&&"Apple Computer, Inc."===n.vendor&&/AppleWebKit\/5([0-2]|3[0-3])/.test(n.userAgent)),ieDoubleCheck:Boolean(p.isInternetExplorer()&&p.getInternetExplorerMajorVersion()<8),hashEscape:Boolean(p.isInternetExplorer()&&p.getInternetExplorerMajorVersion()<7)},p.isEmptyObject=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},p.cloneObject=function(e){var t,a;return e?(t=c.stringify(e),a=c.parse(t)):a={},a},p.getRootUrl=function(){var e=r.location.protocol+"//"+(r.location.hostname||r.location.host);return r.location.port&&(e+=":"+r.location.port),e+="/"},p.getBaseHref=function(){var e=r.getElementsByTagName("base"),t=null,a="";return 1===e.length&&(t=e[0],a=t.href.replace(/[^\/]+$/,"")),(a=a.replace(/\/+$/,""))&&(a+="/"),a},p.getBaseUrl=function(){return p.getBaseHref()||p.getBasePageUrl()||p.getRootUrl()},p.getPageUrl=function(){return((p.getState(!1,!1)||{}).url||p.getLocationHref()).replace(/\/+$/,"").replace(/[^\/]+$/,function(e,t,a){return/\./.test(e)?e:e+"/"})},p.getBasePageUrl=function(){return p.getLocationHref().replace(/[#\?].*/,"").replace(/[^\/]+$/,function(e,t,a){return/[^\/]$/.test(e)?"":e}).replace(/\/+$/,"")+"/"},p.getFullUrl=function(e,t){var a=e,r=e.substring(0,1);return t=void 0===t||t,/[a-z]+\:\/\//.test(e)||(a="/"===r?p.getRootUrl()+e.replace(/^\/+/,""):"#"===r?p.getPageUrl().replace(/#.*/,"")+e:"?"===r?p.getPageUrl().replace(/[\?#].*/,"")+e:t?p.getBaseUrl()+e.replace(/^(\.\/)+/,""):p.getBasePageUrl()+e.replace(/^(\.\/)+/,"")),a.replace(/\#$/,"")},p.getShortUrl=function(e){var t=e,a=p.getBaseUrl(),r=p.getRootUrl();return p.emulated.pushState&&(t=t.replace(a,"")),t=t.replace(r,"/"),p.isTraditionalAnchor(t)&&(t="./"+t),t=t.replace(/^(\.\/)+/g,"./").replace(/\#$/,"")},p.getLocationHref=function(e){return(e=e||r).URL===e.location.href?e.location.href:e.location.href===decodeURIComponent(e.URL)?e.URL:e.location.hash&&decodeURIComponent(e.location.href.replace(/^[^#]+/,""))===e.location.hash?e.location.href:-1==e.URL.indexOf("#")&&-1!=e.location.href.indexOf("#")?e.location.href:e.URL||e.location.href},p.store={},p.idToState=p.idToState||{},p.stateToId=p.stateToId||{},p.urlToId=p.urlToId||{},p.storedStates=p.storedStates||[],p.savedStates=p.savedStates||[],p.normalizeStore=function(){p.store.idToState=p.store.idToState||{},p.store.urlToId=p.store.urlToId||{},p.store.stateToId=p.store.stateToId||{}},p.getState=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var a=p.getLastSavedState();return!a&&t&&(a=p.createStateObject()),e&&(a=p.cloneObject(a),a.url=a.cleanUrl||a.url),a},p.getIdByState=function(e){var t,a=p.extractId(e.url);if(!a)if(t=p.getStateString(e),void 0!==p.stateToId[t])a=p.stateToId[t];else if(void 0!==p.store.stateToId[t])a=p.store.stateToId[t];else{for(;a=(new Date).getTime()+String(Math.random()).replace(/\D/g,""),void 0!==p.idToState[a]||void 0!==p.store.idToState[a];);p.stateToId[t]=a,p.idToState[a]=e}return a},p.normalizeState=function(e){var t,a;return e&&"object"==typeof e||(e={}),void 0!==e.normalized?e:(e.data&&"object"==typeof e.data||(e.data={}),t={},t.normalized=!0,t.title=e.title||"",t.url=p.getFullUrl(e.url?e.url:p.getLocationHref()),t.hash=p.getShortUrl(t.url),t.data=p.cloneObject(e.data),t.id=p.getIdByState(t),t.cleanUrl=t.url.replace(/\??\&_suid.*/,""),t.url=t.cleanUrl,a=!p.isEmptyObject(t.data),(t.title||a)&&!0!==p.options.disableSuid&&(t.hash=p.getShortUrl(t.url).replace(/\??\&_suid.*/,""),/\?/.test(t.hash)||(t.hash+="?"),t.hash+="&_suid="+t.id),t.hashedUrl=p.getFullUrl(t.hash),(p.emulated.pushState||p.bugs.safariPoll)&&p.hasUrlDuplicate(t)&&(t.url=t.hashedUrl),t)},p.createStateObject=function(e,t,a){var r={data:e,title:t,url:a};return r=p.normalizeState(r)},p.getStateById=function(e){return e=String(e),p.idToState[e]||p.store.idToState[e]||t},p.getStateString=function(e){var t,a;return t=p.normalizeState(e),a={data:t.data,title:e.title,url:e.url},c.stringify(a)},p.getStateId=function(e){var t;return t=p.normalizeState(e),t.id},p.getHashByState=function(e){var t;return t=p.normalizeState(e),t.hash},p.extractId=function(e){var t,a;return a=-1!=e.indexOf("#")?e.split("#")[0]:e,t=/(.*)\&_suid=([0-9]+)$/.exec(a),t?t[1]||e:e,(t?String(t[2]||""):"")||!1},p.isTraditionalAnchor=function(e){return!/[\/\?\.]/.test(e)},p.extractState=function(e,t){var a,r,n=null;return t=t||!1,(a=p.extractId(e))&&(n=p.getStateById(a)),n||(r=p.getFullUrl(e),(a=p.getIdByUrl(r)||!1)&&(n=p.getStateById(a)),!n&&t&&!p.isTraditionalAnchor(e)&&(n=p.createStateObject(null,null,r))),n},p.getIdByUrl=function(e){return p.urlToId[e]||p.store.urlToId[e]||t},p.getLastSavedState=function(){return p.savedStates[p.savedStates.length-1]||t},p.getLastStoredState=function(){return p.storedStates[p.storedStates.length-1]||t},p.hasUrlDuplicate=function(e){var t;return t=p.extractState(e.url),t&&t.id!==e.id},p.storeState=function(e){return p.urlToId[e.url]=e.id,p.storedStates.push(p.cloneObject(e)),e},p.isLastSavedState=function(e){var t,a,r,n=!1;return p.savedStates.length&&(t=e.id,a=p.getLastSavedState(),r=a.id,n=t===r),n},p.saveState=function(e){return!p.isLastSavedState(e)&&(p.savedStates.push(p.cloneObject(e)),!0)},p.getStateByIndex=function(e){return void 0===e?p.savedStates[p.savedStates.length-1]:e<0?p.savedStates[p.savedStates.length+e]:p.savedStates[e]},p.getCurrentIndex=function(){return p.savedStates.length<1?0:p.savedStates.length-1},p.getHash=function(e){var t=p.getLocationHref(e);return p.getHashByUrl(t)},p.unescapeHash=function(e){var t=p.normalizeHash(e);return t=decodeURIComponent(t)},p.normalizeHash=function(e){return e.replace(/[^#]*#/,"").replace(/#.*/,"")},p.setHash=function(e,t){var a,n;return!1!==t&&p.busy()?(p.pushQueue({scope:p,callback:p.setHash,args:arguments,queue:t}),!1):(p.busy(!0),(a=p.extractState(e,!0))&&!p.emulated.pushState?p.pushState(a.data,a.title,a.url,!1):p.getHash()!==e&&(p.bugs.setHash?(n=p.getPageUrl(),p.pushState(null,null,n+"#"+e,!1)):r.location.hash=e),p)},p.escapeHash=function(t){var a=p.normalizeHash(t);return a=e.encodeURIComponent(a),p.bugs.hashEscape||(a=a.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?")),a},p.getHashByUrl=function(e){var t=String(e).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");return t=p.unescapeHash(t)},p.setTitle=function(e){var t,a=e.title;a||(t=p.getStateByIndex(0))&&t.url===e.url&&(a=t.title||p.options.initialTitle);try{r.getElementsByTagName("title")[0].innerHTML=a.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(e){}return r.title=a,p},p.queues=[],p.busy=function(e){if(void 0!==e?p.busy.flag=e:void 0===p.busy.flag&&(p.busy.flag=!1),!p.busy.flag){s(p.busy.timeout);var t=function(){var e,a,r;if(!p.busy.flag)for(e=p.queues.length-1;e>=0;--e)0!==(a=p.queues[e]).length&&(r=a.shift(),p.fireQueueItem(r),p.busy.timeout=i(t,p.options.busyDelay))};p.busy.timeout=i(t,p.options.busyDelay)}return p.busy.flag},p.busy.flag=!1,p.fireQueueItem=function(e){return e.callback.apply(e.scope||p,e.args||[])},p.pushQueue=function(e){return p.queues[e.queue||0]=p.queues[e.queue||0]||[],p.queues[e.queue||0].push(e),p},p.queue=function(e,t){return"function"==typeof e&&(e={callback:e}),void 0!==t&&(e.queue=t),p.busy()?p.pushQueue(e):p.fireQueueItem(e),p},p.clearQueue=function(){return p.busy.flag=!1,p.queues=[],p},p.stateChanged=!1,p.doubleChecker=!1,p.doubleCheckComplete=function(){return p.stateChanged=!0,p.doubleCheckClear(),p},p.doubleCheckClear=function(){return p.doubleChecker&&(s(p.doubleChecker),p.doubleChecker=!1),p},p.doubleCheck=function(e){return p.stateChanged=!1,p.doubleCheckClear(),p.bugs.ieDoubleCheck&&(p.doubleChecker=i(function(){return p.doubleCheckClear(),p.stateChanged||e(),!0},p.options.doubleCheckInterval)),p},p.safariStatePoll=function(){var t=p.extractState(p.getLocationHref());if(!p.isLastSavedState(t))return t||p.createStateObject(),p.Adapter.trigger(e,"popstate"),p},p.back=function(e){return!1!==e&&p.busy()?(p.pushQueue({scope:p,callback:p.back,args:arguments,queue:e}),!1):(p.busy(!0),p.doubleCheck(function(){p.back(!1)}),h.go(-1),!0)},p.forward=function(e){return!1!==e&&p.busy()?(p.pushQueue({scope:p,callback:p.forward,args:arguments,queue:e}),!1):(p.busy(!0),p.doubleCheck(function(){p.forward(!1)}),h.go(1),!0)},p.go=function(e,t){var a;if(e>0)for(a=1;a<=e;++a)p.forward(t);else{if(!(e<0))throw new Error("History.go: History.go requires a positive or negative integer passed.");for(a=-1;a>=e;--a)p.back(t)}return p},p.emulated.pushState){var f=function(){};p.pushState=p.pushState||f,p.replaceState=p.replaceState||f}else p.onPopState=function(t,a){var r,n,o=!1,i=!1;return p.doubleCheckComplete(),(r=p.getHash())?((n=p.extractState(r||p.getLocationHref(),!0))?p.replaceState(n.data,n.title,n.url,!1):(p.Adapter.trigger(e,"anchorchange"),p.busy(!1)),p.expectedStateId=!1,!1):(o=p.Adapter.extractEventData("state",t,a)||!1,(i=o?p.getStateById(o):p.expectedStateId?p.getStateById(p.expectedStateId):p.extractState(p.getLocationHref()))||(i=p.createStateObject(null,null,p.getLocationHref())),p.expectedStateId=!1,p.isLastSavedState(i)?(p.busy(!1),!1):(p.storeState(i),p.saveState(i),p.setTitle(i),p.Adapter.trigger(e,"statechange"),p.busy(!1),!0))},p.Adapter.bind(e,"popstate",p.onPopState),p.pushState=function(t,a,r,n){if(p.getHashByUrl(r)&&p.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(!1!==n&&p.busy())return p.pushQueue({scope:p,callback:p.pushState,args:arguments,queue:n}),!1;p.busy(!0);var o=p.createStateObject(t,a,r);return p.isLastSavedState(o)?p.busy(!1):(p.storeState(o),p.expectedStateId=o.id,h.pushState(o.id,o.title,o.url),p.Adapter.trigger(e,"popstate")),!0},p.replaceState=function(t,a,r,n){if(p.getHashByUrl(r)&&p.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(!1!==n&&p.busy())return p.pushQueue({scope:p,callback:p.replaceState,args:arguments,queue:n}),!1;p.busy(!0);var o=p.createStateObject(t,a,r);return p.isLastSavedState(o)?p.busy(!1):(p.storeState(o),p.expectedStateId=o.id,h.replaceState(o.id,o.title,o.url),p.Adapter.trigger(e,"popstate")),!0};if(o){try{p.store=c.parse(o.getItem("History.store"))||{}}catch(e){p.store={}}p.normalizeStore()}else p.store={},p.normalizeStore();p.Adapter.bind(e,"unload",p.clearAllIntervals),p.saveState(p.storeState(p.extractState(p.getLocationHref(),!0))),o&&(p.onUnload=function(){var e,t,a;try{e=c.parse(o.getItem("History.store"))||{}}catch(t){e={}}e.idToState=e.idToState||{},e.urlToId=e.urlToId||{},e.stateToId=e.stateToId||{};for(t in p.idToState)p.idToState.hasOwnProperty(t)&&(e.idToState[t]=p.idToState[t]);for(t in p.urlToId)p.urlToId.hasOwnProperty(t)&&(e.urlToId[t]=p.urlToId[t]);for(t in p.stateToId)p.stateToId.hasOwnProperty(t)&&(e.stateToId[t]=p.stateToId[t]);p.store=e,p.normalizeStore(),a=c.stringify(e);try{o.setItem("History.store",a)}catch(e){if(e.code!==DOMException.QUOTA_EXCEEDED_ERR)throw e;o.length&&(o.removeItem("History.store"),o.setItem("History.store",a))}},p.intervalList.push(u(p.onUnload,p.options.storeInterval)),p.Adapter.bind(e,"beforeunload",p.onUnload),p.Adapter.bind(e,"unload",p.onUnload)),p.emulated.pushState||(p.bugs.safariPoll&&p.intervalList.push(u(p.safariStatePoll,p.options.safariPollInterval)),"Apple Computer, Inc."!==n.vendor&&"Mozilla"!==(n.appCodeName||"")||(p.Adapter.bind(e,"hashchange",function(){p.Adapter.trigger(e,"popstate")}),p.getHash()&&p.Adapter.onDomLoad(function(){p.Adapter.trigger(e,"hashchange")})))},(!p.options||!p.options.delayInit)&&p.init()}(window);