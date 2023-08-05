!function(t,i){if("function"==typeof define&&define.amd)define(["exports","module"],i);else if("undefined"!=typeof exports&&"undefined"!=typeof module)i(exports,module);else{var e={exports:{}};i(e.exports,e),t.Impetus=e.exports}}(this,function(t,i){"use strict";function e(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}var s=.04,n=.11;i.exports=function t(i){function o(){M.call(y,W,U)}function a(t){if("touchmove"===t.type||"touchstart"===t.type||"touchend"===t.type){var i=t.targetTouches[0]||t.changedTouches[0];return{x:i.clientX,y:i.clientY,id:i.identifier}}return{x:t.clientX,y:t.clientY,id:null}}function r(t){var i=a(t);N||j||(N=!0,G=!1,D=i.id,K=null,I=H=i.x,V=F=i.y,J=[],d(I,V),document.addEventListener("touchmove",u,{passive:!1}),document.addEventListener("touchend",c,{passive:!1}),document.addEventListener("touchcancel",m,{passive:!1}),document.addEventListener("mousemove",u,{passive:!1}),document.addEventListener("mouseup",c,{passive:!1}))}function u(t){var i=a(t);P&&!K&&(K=G?P:Math.abs(I-i.x)>Math.abs(V-i.y)?"horizontal":"vertical"),P&&K!==P||(t.preventDefault(),N&&i.id===D&&(H=i.x,F=i.y,d(I,V),f()))}function c(t){a(t).id===D&&m()}function m(){N=!1,d(I,V),g(),document.removeEventListener("touchmove",u),document.removeEventListener("touchend",c),document.removeEventListener("touchcancel",m),document.removeEventListener("mouseup",c),document.removeEventListener("mousemove",u)}function d(t,i){for(var e=Date.now();J.length>0&&!(e-J[0].time<=100);)J.shift();J.push({x:t,y:i,time:e})}function l(){var t=H-I,i=F-V;if(W+=t*E,U+=i*E,z){var e=p();0!==e.x&&(W-=t*v(e.x)*E),0!==e.y&&(U-=i*v(e.y)*E)}else p(!0);o(),I=H,V=F,B=!1}function v(t){return 5e-6*Math.pow(t,2)+1e-4*t+.55}function f(){B||h(l),B=!0}function p(t){var i=0,e=0;return void 0!==Y&&W<Y?i=Y-W:void 0!==C&&W>C&&(i=C-W),void 0!==Z&&U<Z?e=Z-U:void 0!==S&&U>S&&(e=S-U),t&&(0!==i&&(W=i>0?Y:C),0!==e&&(U=e>0?Z:S)),{x:i,y:e,inBounds:0===i&&0===e}}function g(){var t=J[0],i=J[J.length-1],e=i.x-t.x,s=i.y-t.y,n=(i.time-t.time)/15/E;q=e/n||0,k=s/n||0;var o=p();(Math.abs(q)>1||Math.abs(k)>1||!o.inBounds)&&(G=!0,h(w))}function w(){if(G){W+=q*=L,U+=k*=L;var t=p();if(Math.abs(q)>O||Math.abs(k)>O||!t.inBounds){if(z){if(0!==t.x&&(t.x*q<=0?q+=t.x*s:(i=t.x>0?2.5:-2.5,q=(t.x+i)*n)),0!==t.y)if(t.y*k<=0)k+=t.y*s;else{var i=t.y>0?2.5:-2.5;k=(t.y+i)*n}}else 0!==t.x&&(W=t.x>0?Y:C,q=0),0!==t.y&&(U=t.y>0?Z:S,k=0);o(),h(w)}else G=!1}}var x=i.source,y=void 0===x?document:x,M=i.update,A=i.multiplier,E=void 0===A?1:A,T=i.friction,L=void 0===T?.92:T,b=i.initialValues,X=i.boundX,_=i.boundY,R=i.bounce,z=void 0===R||R,P=i.directionLock;e(this,t);var Y,C,Z,S,I,V,H,F,D,q,k,W=0,U=0,O=.3*E,B=!1,N=!1,j=!1,G=!1,J=[],K=null;!function(){if(!(y="string"==typeof y?document.querySelector(y):y))throw new Error("IMPETUS: source not found.");if(!M)throw new Error("IMPETUS: update function not defined.");b&&(b[0]&&(W=b[0]),b[1]&&(U=b[1]),o()),X&&(Y=X[0],C=X[1]),_&&(Z=_[0],S=_[1]),y.addEventListener("touchstart",r,{passive:!1}),y.addEventListener("mousedown",r,{passive:!1})}(),this.pause=function(){N=!1,j=!0},this.resume=function(){j=!1},this.destroy=function(){y.removeEventListener("touchstart",r),y.removeEventListener("mousedown",r),document.removeEventListener("touchmove",u),document.removeEventListener("touchend",c),document.removeEventListener("touchcancel",m),document.removeEventListener("mouseup",c),document.removeEventListener("mousemove",u)},this.setValues=function(t,i){"number"==typeof t&&(W=t),"number"==typeof i&&(U=i)},this.setMultiplier=function(t){O=.3*(E=t)}};var h=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}),function(t,i){"function"==typeof define&&define.amd?define(["impetus"],function(e){return t.PinchZoomCanvas=i(e)}):"object"==typeof module&&module.exports?module.exports=t.PinchZoomCanvas=i(require("impetus")):t.PinchZoomCanvas=i(t.Impetus)}(this,function(t){var i=function(t){if(!t||!t.canvas)throw"PinchZoomCanvas constructor: missing arguments canvas or path";this._checkRequestAnimationFrame();var i=t.canvas.clientWidth,e=t.canvas.clientHeight;this.doubletap=void 0!==t.doubletap&&t.doubletap,this.swipe=void 0===t.swipe||t.swipe,this.swipeDuration=300,this.momentum=t.momentum,this.canvas=t.canvas,this.canvas.width=2*i,this.canvas.height=2*e,this.canvas.style.width=i+"px",this.canvas.style.height=e+"px",this.context=this.canvas.getContext("2d"),this.maxZoom=2*(t.maxZoom||2),this.zoomable=void 0===t.zoomable||t.zoomable,this.eventsEnabled=void 0===t.eventsEnabled||t.eventsEnabled,this.maxWidth=t.maxWidth,this.maxHeight=t.maxHeight,this.initResizeProperty=null,this.threshold=t.threshold||40,this.emptyImage=t.emptyImage||"empty.gif",this.padding={x:0,y:0},this.animation=null,this.view=null,this.clearCanvas=!0,this.onZoomEnd=t.onZoomEnd,this.onZoom=t.onZoom,this.onReady=function(){t.onReady&&t.onReady(),this.onReady=null},this.position={x:0,y:0},this.scale={x:.5,y:.5},this.initScale={x:.5,y:.5},this.initPosition={x:0,y:0},this.offeset={x:0,y:0},this.lastZoomScale=null,this.firstX=null,this.firstY=null,this.lastX=null,this.lastY=null,this.startZoom=!1,this.init=!1,this.running=!0,this.zoomed=!1,this.mousedown=!1,this.moved=!1,this.needRedraw=!1,this.onReady=this.onReady.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onMouseWheel=this.onMouseWheel.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.render=this.render.bind(this),this.listeningEvents=!1,this.clicks=0,this.imageList=null,this.imageMeta=null,this.image_cache=null,this.hoverAreaFill="rgba(255, 255, 255, 0.2)",this.hoverAreasPoints=null,this.hoverAreas=null,this.hoverAreaCurrent=null,this.nextView=null,this.prevView=null,this.initials=null,this.focus=null};return i.prototype={setImages:function(t,i){var e=this;this.imageList=null,this.view=i;var s=this;this._loadImages(t,function(t){if(!e.destroyed){e.imageList=t;var i=t[0],n=i.naturalWidth;"3_4"==s.view&&(n-=60),e.imageMeta={width:n,height:i.naturalHeight,ratio:n/i.naturalHeight},s.init=!1,s.needRedraw=!0,requestAnimationFrame(e.render),!e.listeningEvents&&e.eventsEnabled&&e._setEventListeners()}})},setInitials:function(t){this.needRedraw=!0,this.initials=t},setNotClearCanvas:function(t){this.clearCanvas=!1},removeInitials:function(){this.initials=null,this.needRedraw=!0},setPreviousView:function(t,i){this.prevView={text:t,image_src:i},this._loadImageView(i,this.prevView)},setNextView:function(t,i){this.nextView={text:t,image_src:i},this._loadImageView(i,this.nextView)},loadHoverAreas:function(t){this.hoverAreasPoints=t,this._updateHoverAreasScale()},clearHoverAreas:function(){this.hoverAreasPoints=null,this.hoverAreas=null},resize:function(t,i){this.canvas.width=2*t,this.canvas.height=2*i,this.canvas.style.width=t+"px",this.canvas.style.height=i+"px",this.init=!1,this.needRedraw=!0},render:function(){if(this.init&&!this.running)return this;if(this.needRedraw){this.needRedraw=!1;var t=!1;if(!this.init&&this.imageMeta){var i=this.canvas.width*this.padding.x,e=this.canvas.height*this.padding.y,s=(o=this.canvas.width-2*i)/(a=this.canvas.height-2*e),n=this.imageMeta.width/this.imageMeta.height,h=null;n>=s?(this.initResizeProperty="width",h=o/this.imageMeta.width,this.position.x=i,this.position.y=e+(a-this.imageMeta.height*h)/2):n<s&&(this.initResizeProperty="height",h=a/this.imageMeta.height,this.position.x=i+(o-this.imageMeta.width*h)/2,this.position.y=e),this.maxWidth&&h*this.imageMeta.width>this.maxWidth&&(h=this.maxWidth/this.imageMeta.width,this.position.x=i+(o-this.imageMeta.width*h)/2,this.position.y=e+(a-this.imageMeta.height*h)/2),this.maxHeight&&h*this.imageMeta.height>this.maxHeight&&(h=this.maxHeight/this.imageMeta.height,this.position.x=i+(o-this.imageMeta.width*h)/2,this.position.y=e+(a-this.imageMeta.height*h)/2),this.scale.x=h,this.scale.y=h,this.initPosition={x:this.position.x,y:this.position.y},this.initialScale=h,this.init=!0,t=!0,this.calculateOffset(),this._updateHoverAreasScale()}if(this.focus){var o=this.canvas.width,a=this.canvas.height,r=o/this.focus.width;r>2.5&&(r=2.1),this.scale.x=r,this.scale.y=r,this.position.x=-(this.imageMeta.width*r-o)/2,this.focus.x&&(this.position.x*=this.focus.x),this.focus.y>0&&(this.position.y=-(this.imageMeta.height*r-a))}if(this.animation){var u=(new Date).getTime(),c=this.animation.end-u;c<60?(this.position.x=this.animation.endX,this._updateHoverAreasScale(),"function"==typeof this.animation.callback&&this.animation.callback(),this.animation=null,this.moved=!1):this.position.x+=(this.animation.endX-this.position.x)*(1-c/this.animation.duration)}if(this.clearCanvas&&this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.imageList)for(var m=0;m<this.imageList.length;m++)this.context.drawImage(this.imageList[m],this.position.x,this.position.y,this.scale.x*this.imageList[m].width,this.scale.x*this.imageList[m].height);if(this.initials){this.context.fillStyle=this.initials.color;var d=this.initials.font_size*this.scale.x;this.context.font=d+"px "+this.initials.font_family,this.context.textAlign="center",this.context.save(),this.context.translate(this.position.x+this.scale.x*this.initials.left,this.position.y+this.scale.x*this.initials.top),this.context.rotate(this.initials.rotate*Math.PI/180),this.context.fillText(this.initials.text,0,0),this.context.restore()}if(!this.zoomed&&this.moved&&this.swipe){var l=this.initPosition.x-this.position.x;this.context.fillStyle="rgba(0,0,0,0.5)",this.context.font="60px gt-haptik",this.context.textAlign="center";var v,f=0,p=.2*this.canvas.width;l>0?this.nextView&&(this.nextView.img?(v=Math.min(this.canvas.width,2*this.nextView.width),f=this.nextView.height*v/this.nextView.width,this.context.drawImage(this.nextView.img,this.canvas.width+p-l,this.canvas.height/2-f/2,v,f)):this.context.textAlign="left",this.context.fillText(this.nextView.text,this.canvas.width+p-l+v/2,this.canvas.height/2-f/2-100)):this.prevView&&(this.prevView.img?(v=Math.min(this.canvas.width,2*this.prevView.width),f=this.prevView.height*v/this.prevView.width,this.context.drawImage(this.prevView.img,-l-v-p,this.canvas.height/2-f/2,v,f)):this.context.textAlign="right",this.context.fillText(this.prevView.text,-l-v/2-p,this.canvas.height/2-f/2-100))}this.hoverAreaCurrent&&!this.animation&&(this.context.fillStyle=this.hoverAreaFill,this.context.fill(this.hoverAreaCurrent)),t&&this.onReady&&this.onReady(),this.animation&&(this.needRedraw=!0),requestAnimationFrame(this.render)}else requestAnimationFrame(this.render)},takeScreenshot(t){if(!this.init||this.running||this.imageMeta){var i=t.clientWidth,e=t.clientHeight,s=i/e,n=this.imageMeta.width/this.imageMeta.height,h=null,o=0,a=0;n>=s?(h=i/this.imageMeta.width,a=(e-this.imageMeta.height*h)/2):n<s&&(h=e/this.imageMeta.height,o=(i-this.imageMeta.width*h)/2);var r=t.getContext("2d");r.clearRect(0,0,i,e);for(var u=0;u<this.imageList.length;u++)r.drawImage(this.imageList[u],o,a,h*this.imageList[u].width,h*this.imageList[u].height)}},pause:function(){return this.running=!1,this},resume:function(){return this.calculateOffset(),this.running=!0,requestAnimationFrame(this.render),this},calculateOffset:function(){return this.canvas?(this.offeset.x=this.canvas.getBoundingClientRect().left,this.offeset.y=this.canvas.getBoundingClientRect().top,this):this},setfocusOn:function(t,i,e,s){this.focus={x:t,y:i,width:e},s&&(this.needRedraw=!0)},removefocusOn:function(t,i,e,s){this.focus=null,this.needRedraw=!0},zoom:function(t,i,e){if(t&&this.zoomable){var s=this.scale.x,n=this.scale.x+t/100;if(n<this.initialScale)return this.zoomed=!1,this.position.x=this.initPosition.x,this.position.y=this.initPosition.y,this.scale.x=this.initialScale,this.scale.y=this.initialScale,void this._updateHoverAreasScale();this.maxZoom&&n>this.maxZoom&&(n=this.maxZoom);var h=n-s,o=this.imageMeta.width*this.scale.x,a=this.imageMeta.height*this.scale.y,r=this.imageMeta.width*h,u=this.imageMeta.height*h,c=-(2*i-this.position.x)/o,m=-(2*e-this.position.y)/a;this.scale.x=n,this.scale.y=n,this.position.x+=c*r,this.position.y+=m*u,this.zoomed=!0,this.needRedraw=!0,this._updateHoverAreasScale(),this.onZoom&&this.onZoom(n,this.zoomed)}},move:function(t,i,e,s){e||(e=1);var n=!s&&this.momentum;if(!n&&this.lastX&&this.lastY){var h=t-this.lastX,o=i-this.lastY,a=this.imageMeta.width*this.scale.x,r=this.imageMeta.height*this.scale.y,u=this.canvas.width,c=this.canvas.height;this.position.x+=h*e,this.position.y+=o*e,this.zoomed&&(a>=u?this.position.x>0?this.position.x=0:this.position.x+a<u&&(this.position.x=u-a):this.position.x<a-u?this.position.x=a-u:this.position.x>u-a&&(this.position.x=u-a)),r>c?this.position.y>0?this.position.y=0:this.position.y+r<c&&(this.position.y=c-r):this.position.y<0?this.position.y=0:this.position.y>c-r&&(this.position.y=c-r)}else n&&this.lastX&&this.lastY&&(this.position.x=t,this.position.y=i);this.firstX&&this.firstY&&Math.abs(this.firstX-t)+Math.abs(this.firstY-i)>3?(this.moved=!0,this.hoverAreaCurrent=null):this._updateHoverAreasScale(),this.lastX=t,this.lastY=i,this.needRedraw=!0},isZommed:function(){return this.zoomed},destroy:function(){this.destroyed=!0,this.pause(),this._removeEventListeners(),this._destroyImpetus(),this.image_cache=null,this.canvas=null},_loadImages:function(t,i){var e,s=t.length,n=[],h=function(){0===--s&&i(n)};for(e=0;e<t.length;e++){var o=!1;if(this.image_cache)for(var a=0;a<this.image_cache.length;a++)if(this.image_cache[a].src==t[e]){n[e]=this.image_cache[a],--s,o=!0;break}if(!o){var r=n[e]=new Image;r.onload=h,r.onerror=h,r.crossOrigin="anonymous",r.src=t[e]+"?v=2"}}return 0===s&&i(n),delete this.image_cache,this.image_cache=n,n},_loadImageView:function(t,i){var e=new Image;e.onload=function(){i.width=e.naturalWidth,i.height=e.naturalHeight},e.onerror=function(){i.img=null},e.src=t,i.img=e},_gesturePinchZoom:function(t){var i=!1;if(t.targetTouches.length>=2){var e=t.targetTouches[0],s=t.targetTouches[1],n=Math.sqrt(Math.pow(s.pageX-e.pageX,2)+Math.pow(s.pageY-e.pageY,2));this.lastZoomScale&&(i=n-this.lastZoomScale),this.lastZoomScale=n}return i},_checkRequestAnimationFrame:function(){if(window.requestAnimationFrame)return this;for(var t=0,i=["ms","moz","webkit","o"],e=0;e<i.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[i[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i[e]+"CancelAnimationFrame"]||window[i[e]+"CancelRequestAnimationFrame"];return window.requestAnimationFrame||(window.requestAnimationFrame=function(i,e){var s=(new Date).getTime(),n=Math.max(0,16-(s-t)),h=window.setTimeout(function(){i(s+n)},n);return t=s+n,h}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)}),this},_createImpetus:function(){if(void 0!==t&&this.momentum&&!this.impetus){var i,e;"width"==this.initResizeProperty?(i=[-this.imageMeta.width*this.scale.x+this.canvas.width,0],e=this.imageMeta.height*this.scale.y>this.canvas.height?[-this.imageMeta.height*this.scale.y+this.canvas.height,0]:[this.position.y-1,this.position.y+1]):(i=this.imageMeta.width*this.scale.x>this.canvas.width?[-this.imageMeta.width*this.scale.x+this.canvas.width,0]:[this.position.x-1,this.position.x+1],e=[-this.imageMeta.height*this.scale.y+this.canvas.height,0]),this.impetus=new t({source:this.canvas,boundX:i,boundY:e,initialValues:[this.position.x,this.position.y],friction:.96,multiplier:2,update:function(t,i){this.move(t,i)}.bind(this)})}},_destroyImpetus:function(){this.impetus&&this.impetus.destroy&&this.impetus.destroy(),this.impetus=null},_updateHoverAreasScale:function(){if(this.hoverAreasPoints){this.hoverAreas=[];var t=this.scale.x,i=-1;for(var e in this.hoverAreasPoints){var s=this.hoverAreasPoints[e];if(i++,!(s.length<2)){var n=new Path2D;n.index=i,n.name=e,n.moveTo(s[0][0]*t+this.position.x,s[0][1]*t+this.position.y);for(var h=1;h<s.length;h++)n.lineTo(s[h][0]*t+this.position.x,s[h][1]*t+this.position.y);n.closePath(),this.hoverAreas.push(n),this.hoverAreaCurrent&&this.hoverAreaCurrent.index==i&&(this.hoverAreaCurrent=n),i++}}var o=this.hoverAreas,a=!1;for(var r in o)"pala_0"===o[r].name&&(a=r);o.push(o.splice(a,1)[0]),this.hoverAreas=o}},_findHoverArea:function(t,i){if(!this.hoverAreas)return null;for(var e=0;e<this.hoverAreas.length;e++)if(this.context.isPointInPath(this.hoverAreas[e],2*t,2*i))return this.hoverAreas[e];return null},_setEventListeners:function(){return this.canvas?(this.canvas.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.canvas.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.canvas.addEventListener("touchend",this.onTouchEnd,{passive:!1}),this.canvas.addEventListener("mousewheel",this.onMouseWheel,{passive:!1}),this.canvas.addEventListener("mousedown",this.onMouseDown,{passive:!0}),window.addEventListener("mouseup",this.onMouseUp,{passive:!0}),this.canvas.addEventListener("mousemove",this.onMouseMove,{passive:!1}),this.listeningEvents=!0,this):this},_removeEventListeners:function(){return this.canvas?(this.canvas.removeEventListener("touchstart",this.onTouchStart),this.canvas.removeEventListener("touchmove",this.onTouchMove),this.canvas.removeEventListener("touchend",this.onTouchEnd),this.canvas.removeEventListener("mousewheel",this.onMouseWheel),this.canvas.removeEventListener("mousedown",this.onMouseDown),window.removeEventListener("mouseup",this.onMouseUp),this.canvas.removeEventListener("mousemove",this.onMouseMove),this.listeningEvents=!1,this):this},onTouchStart:function(t){this.firstX=t.targetTouches[0].pageX,this.firstY=t.targetTouches[0].pageY,this.lastX=this.firstX,this.lastY=this.firstY,this.lastZoomScale=null,this.moved=!1},onTouchMove:function(t){if(this.zoomed&&t.preventDefault(),2==t.targetTouches.length){this.startZoom=!0,this.momentum&&this._destroyImpetus();var i=(t.targetTouches[0].pageX+t.targetTouches[1].pageX)/2-this.offeset.x,e=(t.targetTouches[0].pageY+t.targetTouches[1].pageY)/2-this.offeset.y;this.zoom(this._gesturePinchZoom(t),i,e)}else if(1==t.targetTouches.length){var s=t.targetTouches[0].pageX-this.offeset.x;if(this.zoomed){if(!this.momentum){var n=t.targetTouches[0].pageY-this.offeset.y;this.move(s,n)}}else this.swipe&&this.move(s,this.lastY,2,!0)}},onTouchEnd:function(t){if(this.doubletap&&!this.startZoom&&t.changedTouches.length>0){var i=(h=t.changedTouches[0]).pageX-(this.lastTouchPageX||0),e=(new Date).getTime(),s=e-(this.lastTouchTime||e+1);i>=0&&i<this.threshold&&s>0&&s<500?(this.lastTouchTime=null,this.lastTouchPageX=0,this.startZoom=!0,this.zoomed?this.zoom(-400):this.zoom(2e3,h.pageX-this.offeset.x,h.pageY-this.offeset.y)):(this.lastTouchTime=e,this.lastTouchPageX=h.pageX)}else this.lastTouchTime=null,this.lastTouchPageX=0;if(this.momentum&&(t.cancelable&&t.preventDefault(),this.startZoom&&this.zoomed?this._createImpetus():!1===this.zoomed&&this._destroyImpetus()),this.startZoom&&"function"==typeof this.onZoomEnd&&this.onZoomEnd(Math.round(100*this.scale.x)/100,this.zoomed),this.moved){if(!this.zoomed&&this.swipe){var n=t.changedTouches[0].pageX-this.firstX;Math.abs(n)>this.canvas.width/10?n<0?this.swipeLeft():this.swipeRight():this.animation={startX:this.position.x,endX:this.initPosition.x,duration:this.swipeDuration,end:(new Date).getTime()+this.swipeDuration}}}else{var h=t.changedTouches[0],o=this._findHoverArea(h.pageX-this.offeset.x,h.pageY-this.offeset.y);if(o){var a=new CustomEvent("hoverClick",{detail:o});this.hoverAreaCurrent=o,this.needRedraw=!0;var r=this;setTimeout(function(){r.hoverAreaCurrent=null},300),this.canvas.dispatchEvent(a)}}this.startZoom=!1},onMouseWheel:function(t){this.zoom(-t.deltaY,t.pageX-this.offeset.x,t.pageY-this.offeset.y),t.preventDefault()},onMouseDown:function(t){if(this.firstX=t.pageX,this.firstY=t.pageY,this.lastX=t.pageX,this.lastY=t.pageY,this.mousedown=!0,this.momentum=!1,this.moved=!1,this.animation=null,this.doubletap){this.clicks++;var i=this;if(setTimeout(function(){i.clicks=0},400),2===this.clicks)return this.clicks=0,this.mousedown=!1,void(this.zoomed?this.zoom(-400):this.zoom(2e3,t.pageX-this.offeset.x,t.pageY-this.offeset.y))}},onMouseMove:function(t){if(this.mousedown){var i=t.pageX-this.offeset.x;if(this.zoomed){var e=t.pageY-this.offeset.y;this.move(i,e,2)}else this.swipe&&this.move(i,this.lastY,2)}else{if(this.animation)return!1;var s=this._findHoverArea(t.pageX-this.offeset.x,t.pageY-this.offeset.y);this.hoverAreaCurrent!=s&&(this.hoverAreaCurrent=s,this.needRedraw=!0),this.hoverAreaCurrent?this.canvas.style.cursor="pointer":this.canvas.style.cursor="default"}},onMouseUp:function(t){if(this.mousedown)if(this.mousedown=!1,this.moved){if(!this.zoomed&&this.swipe){var i=t.pageX-this.firstX;Math.abs(i)>this.canvas.width/10?i<0?this.swipeLeft():this.swipeRight():this.animation={startX:this.position.x,endX:this.initPosition.x,duration:this.swipeDuration,end:(new Date).getTime()+this.swipeDuration}}}else{var e=this._findHoverArea(t.pageX-this.offeset.x,t.pageY-this.offeset.y);if(e){var s=new CustomEvent("hoverClick",{detail:e});this.canvas.dispatchEvent(s)}}},swipeLeft:function(){var t=this;t.needRedraw=!0;var i=new CustomEvent("swipeLeft",{});t.canvas.dispatchEvent(i)},swipeRight:function(){var t=this;t.needRedraw=!0;var i=new CustomEvent("swipeRight",{});t.canvas.dispatchEvent(i)}},i});