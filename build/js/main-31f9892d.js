/*!
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
!function(e,t,i){function a(e){return e}function n(e){return decodeURIComponent(e.replace(l," "))}var l=/\+/g,r=e.cookie=function(l,o,s){if(o!==i){if(s=e.extend({},r.defaults,s),null===o&&(s.expires=-1),"number"==typeof s.expires){var d=s.expires,c=s.expires=new Date;c.setDate(c.getDate()+d)}return o=r.json?JSON.stringify(o):String(o),t.cookie=[encodeURIComponent(l),"=",r.raw?o:encodeURIComponent(o),s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}for(var u=r.raw?a:n,y=t.cookie.split("; "),f=0,p=y.length;p>f;f++){var b=y[f].split("=");if(u(b.shift())===l){var h=u(b.join("="));return r.json?JSON.parse(h):h}}return null};r.defaults={},e.removeCookie=function(t,i){return null!==e.cookie(t)?(e.cookie(t,null,i),!0):!1}}(jQuery,document),function(e,t,i,a){var n=i("html"),l=i(e),r=i(t),o=i.fancybox=function(){o.open.apply(this,arguments)},s=navigator.userAgent.match(/msie/i),d=null,c=t.createTouch!==a,u=function(e){return e&&e.hasOwnProperty&&e instanceof i},y=function(e){return e&&"string"===i.type(e)},f=function(e){return y(e)&&0<e.indexOf("%")},p=function(e,t){var i=parseInt(e,10)||0;return t&&f(e)&&(i*=o.getViewport()[t]/100),Math.ceil(i)},b=function(e,t){return p(e,t)+"px"};i.extend(o,{version:"2.1.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!c,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(s?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:i.noop,beforeLoad:i.noop,afterLoad:i.noop,beforeShow:i.noop,afterShow:i.noop,beforeChange:i.noop,beforeClose:i.noop,afterClose:i.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(e,t){return e&&(i.isPlainObject(t)||(t={}),!1!==o.close(!0))?(i.isArray(e)||(e=u(e)?i(e).get():[e]),i.each(e,function(n,l){var r,s,d,c,f,p={};"object"===i.type(l)&&(l.nodeType&&(l=i(l)),u(l)?(p={href:l.data("fancybox-href")||l.attr("href"),title:l.data("fancybox-title")||l.attr("title"),isDom:!0,element:l},i.metadata&&i.extend(!0,p,l.metadata())):p=l),r=t.href||p.href||(y(l)?l:null),s=t.title!==a?t.title:p.title||"",c=(d=t.content||p.content)?"html":t.type||p.type,!c&&p.isDom&&(c=l.data("fancybox-type"),c||(c=(c=l.prop("class").match(/fancybox\.(\w+)/))?c[1]:null)),y(r)&&(c||(o.isImage(r)?c="image":o.isSWF(r)?c="swf":"#"===r.charAt(0)?c="inline":y(l)&&(c="html",d=l)),"ajax"===c&&(f=r.split(/\s+/,2),r=f.shift(),f=f.shift())),d||("inline"===c?r?d=i(y(r)?r.replace(/.*(?=#[^\s]+$)/,""):r):p.isDom&&(d=l):"html"===c?d=r:!c&&!r&&p.isDom&&(c="inline",d=l)),i.extend(p,{href:r,type:c,content:d,title:s,selector:f}),e[n]=p}),o.opts=i.extend(!0,{},o.defaults,t),t.keys!==a&&(o.opts.keys=t.keys?i.extend({},o.defaults.keys,t.keys):!1),o.group=e,o._start(o.opts.index)):void 0},cancel:function(){var e=o.coming;e&&!1!==o.trigger("onCancel")&&(o.hideLoading(),o.ajaxLoad&&o.ajaxLoad.abort(),o.ajaxLoad=null,o.imgPreload&&(o.imgPreload.onload=o.imgPreload.onerror=null),e.wrap&&e.wrap.stop(!0,!0).trigger("onReset").remove(),o.coming=null,o.current||o._afterZoomOut(e))},close:function(e){o.cancel(),!1!==o.trigger("beforeClose")&&(o.unbindEvents(),o.isActive&&(o.isOpen&&!0!==e?(o.isOpen=o.isOpened=!1,o.isClosing=!0,i(".fancybox-item, .fancybox-nav").remove(),o.wrap.stop(!0,!0).removeClass("fancybox-opened"),o.transitions[o.current.closeMethod]()):(i(".fancybox-wrap").stop(!0).trigger("onReset").remove(),o._afterZoomOut())))},play:function(e){var t=function(){clearTimeout(o.player.timer)},i=function(){t(),o.current&&o.player.isActive&&(o.player.timer=setTimeout(o.next,o.current.playSpeed))},a=function(){t(),r.unbind(".player"),o.player.isActive=!1,o.trigger("onPlayEnd")};!0===e||!o.player.isActive&&!1!==e?o.current&&(o.current.loop||o.current.index<o.group.length-1)&&(o.player.isActive=!0,r.bind({"onCancel.player beforeClose.player":a,"onUpdate.player":i,"beforeLoad.player":t}),i(),o.trigger("onPlayStart")):a()},next:function(e){var t=o.current;t&&(y(e)||(e=t.direction.next),o.jumpto(t.index+1,e,"next"))},prev:function(e){var t=o.current;t&&(y(e)||(e=t.direction.prev),o.jumpto(t.index-1,e,"prev"))},jumpto:function(e,t,i){var n=o.current;n&&(e=p(e),o.direction=t||n.direction[e>=n.index?"next":"prev"],o.router=i||"jumpto",n.loop&&(0>e&&(e=n.group.length+e%n.group.length),e%=n.group.length),n.group[e]!==a&&(o.cancel(),o._start(e)))},reposition:function(e,t){var a,n=o.current,l=n?n.wrap:null;l&&(a=o._getPosition(t),e&&"scroll"===e.type?(delete a.position,l.stop(!0,!0).animate(a,200)):(l.css(a),n.pos=i.extend({},n.dim,a)))},update:function(e){var t=e&&e.type,i=!t||"orientationchange"===t;i&&(clearTimeout(d),d=null),o.isOpen&&!d&&(d=setTimeout(function(){var a=o.current;a&&!o.isClosing&&(o.wrap.removeClass("fancybox-tmp"),(i||"load"===t||"resize"===t&&a.autoResize)&&o._setDimension(),"scroll"===t&&a.canShrink||o.reposition(e),o.trigger("onUpdate"),d=null)},i&&!c?0:300))},toggle:function(e){o.isOpen&&(o.current.fitToView="boolean"===i.type(e)?e:!o.current.fitToView,c&&(o.wrap.removeAttr("style").addClass("fancybox-tmp"),o.trigger("onUpdate")),o.update())},hideLoading:function(){r.unbind(".loading"),i("#fancybox-loading").remove()},showLoading:function(){var e,t;o.hideLoading(),e=i('<div id="fancybox-loading"><div></div></div>').click(o.cancel).appendTo("body"),r.bind("keydown.loading",function(e){27===(e.which||e.keyCode)&&(e.preventDefault(),o.cancel())}),o.defaults.fixed||(t=o.getViewport(),e.css({position:"absolute",top:.5*t.h+t.y,left:.5*t.w+t.x}))},getViewport:function(){var t=o.current&&o.current.locked||!1,i={x:l.scrollLeft(),y:l.scrollTop()};return t?(i.w=t[0].clientWidth,i.h=t[0].clientHeight):(i.w=c&&e.innerWidth?e.innerWidth:l.width(),i.h=c&&e.innerHeight?e.innerHeight:l.height()),i},unbindEvents:function(){o.wrap&&u(o.wrap)&&o.wrap.unbind(".fb"),r.unbind(".fb"),l.unbind(".fb")},bindEvents:function(){var e,t=o.current;t&&(l.bind("orientationchange.fb"+(c?"":" resize.fb")+(t.autoCenter&&!t.locked?" scroll.fb":""),o.update),(e=t.keys)&&r.bind("keydown.fb",function(n){var l=n.which||n.keyCode,r=n.target||n.srcElement;return 27===l&&o.coming?!1:(!(n.ctrlKey||n.altKey||n.shiftKey||n.metaKey||r&&(r.type||i(r).is("[contenteditable]"))||!i.each(e,function(e,r){return 1<t.group.length&&r[l]!==a?(o[e](r[l]),n.preventDefault(),!1):-1<i.inArray(l,r)?(o[e](),n.preventDefault(),!1):void 0})),void 0)}),i.fn.mousewheel&&t.mouseWheel&&o.wrap.bind("mousewheel.fb",function(e,a,n,l){for(var r=i(e.target||null),s=!1;r.length&&!s&&!r.is(".fancybox-skin")&&!r.is(".fancybox-wrap");)s=r[0]&&!(r[0].style.overflow&&"hidden"===r[0].style.overflow)&&(r[0].clientWidth&&r[0].scrollWidth>r[0].clientWidth||r[0].clientHeight&&r[0].scrollHeight>r[0].clientHeight),r=i(r).parent();0!==a&&!s&&1<o.group.length&&!t.canShrink&&(l>0||n>0?o.prev(l>0?"down":"left"):(0>l||0>n)&&o.next(0>l?"up":"right"),e.preventDefault())}))},trigger:function(e,t){var a,n=t||o.coming||o.current;if(n){if(i.isFunction(n[e])&&(a=n[e].apply(n,Array.prototype.slice.call(arguments,1))),!1===a)return!1;n.helpers&&i.each(n.helpers,function(t,a){a&&o.helpers[t]&&i.isFunction(o.helpers[t][e])&&o.helpers[t][e](i.extend(!0,{},o.helpers[t].defaults,a),n)}),r.trigger(e)}},isImage:function(e){return y(e)&&e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(e){return y(e)&&e.match(/\.(swf)((\?|#).*)?$/i)},_start:function(e){var t,a,n={};if(e=p(e),t=o.group[e]||null,!t)return!1;if(n=i.extend(!0,{},o.opts,t),t=n.margin,a=n.padding,"number"===i.type(t)&&(n.margin=[t,t,t,t]),"number"===i.type(a)&&(n.padding=[a,a,a,a]),n.modal&&i.extend(!0,n,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}}),n.autoSize&&(n.autoWidth=n.autoHeight=!0),"auto"===n.width&&(n.autoWidth=!0),"auto"===n.height&&(n.autoHeight=!0),n.group=o.group,n.index=e,o.coming=n,!1===o.trigger("beforeLoad"))o.coming=null;else{if(a=n.type,t=n.href,!a)return o.coming=null,o.current&&o.router&&"jumpto"!==o.router?(o.current.index=e,o[o.router](o.direction)):!1;if(o.isActive=!0,("image"===a||"swf"===a)&&(n.autoHeight=n.autoWidth=!1,n.scrolling="visible"),"image"===a&&(n.aspectRatio=!0),"iframe"===a&&c&&(n.scrolling="scroll"),n.wrap=i(n.tpl.wrap).addClass("fancybox-"+(c?"mobile":"desktop")+" fancybox-type-"+a+" fancybox-tmp "+n.wrapCSS).appendTo(n.parent||"body"),i.extend(n,{skin:i(".fancybox-skin",n.wrap),outer:i(".fancybox-outer",n.wrap),inner:i(".fancybox-inner",n.wrap)}),i.each(["Top","Right","Bottom","Left"],function(e,t){n.skin.css("padding"+t,b(n.padding[e]))}),o.trigger("onReady"),"inline"===a||"html"===a){if(!n.content||!n.content.length)return o._error("content")}else if(!t)return o._error("href");"image"===a?o._loadImage():"ajax"===a?o._loadAjax():"iframe"===a?o._loadIframe():o._afterLoad()}},_error:function(e){i.extend(o.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:e,content:o.coming.tpl.error}),o._afterLoad()},_loadImage:function(){var e=o.imgPreload=new Image;e.onload=function(){this.onload=this.onerror=null,o.coming.width=this.width/o.opts.pixelRatio,o.coming.height=this.height/o.opts.pixelRatio,o._afterLoad()},e.onerror=function(){this.onload=this.onerror=null,o._error("image")},e.src=o.coming.href,!0!==e.complete&&o.showLoading()},_loadAjax:function(){var e=o.coming;o.showLoading(),o.ajaxLoad=i.ajax(i.extend({},e.ajax,{url:e.href,error:function(e,t){o.coming&&"abort"!==t?o._error("ajax",e):o.hideLoading()},success:function(t,i){"success"===i&&(e.content=t,o._afterLoad())}}))},_loadIframe:function(){var e=o.coming,t=i(e.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",c?"auto":e.iframe.scrolling).attr("src",e.href);i(e.wrap).bind("onReset",function(){try{i(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(e){}}),e.iframe.preload&&(o.showLoading(),t.one("load",function(){i(this).data("ready",1),c||i(this).bind("load.fb",o.update),i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(),o._afterLoad()})),e.content=t.appendTo(e.inner),e.iframe.preload||o._afterLoad()},_preloadImages:function(){var e,t,i=o.group,a=o.current,n=i.length,l=a.preload?Math.min(a.preload,n-1):0;for(t=1;l>=t;t+=1)e=i[(a.index+t)%n],"image"===e.type&&e.href&&((new Image).src=e.href)},_afterLoad:function(){var e,t,a,n,l,r=o.coming,s=o.current;if(o.hideLoading(),r&&!1!==o.isActive)if(!1===o.trigger("afterLoad",r,s))r.wrap.stop(!0).trigger("onReset").remove(),o.coming=null;else{switch(s&&(o.trigger("beforeChange",s),s.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()),o.unbindEvents(),e=r.content,t=r.type,a=r.scrolling,i.extend(o,{wrap:r.wrap,skin:r.skin,outer:r.outer,inner:r.inner,current:r,previous:s}),n=r.href,t){case"inline":case"ajax":case"html":r.selector?e=i("<div>").html(e).find(r.selector):u(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",i('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),r.wrap.bind("onReset",function(){i(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case"image":e=r.tpl.image.replace("{href}",n);break;case"swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+n+'"></param>',l="",i.each(r.swf,function(t,i){e+='<param name="'+t+'" value="'+i+'"></param>',l+=" "+t+'="'+i+'"'}),e+='<embed src="'+n+'" type="application/x-shockwave-flash" width="100%" height="100%"'+l+"></embed></object>"}(!u(e)||!e.parent().is(r.inner))&&r.inner.append(e),o.trigger("beforeShow"),r.inner.css("overflow","yes"===a?"scroll":"no"===a?"hidden":a),o._setDimension(),o.reposition(),o.isOpen=!1,o.coming=null,o.bindEvents(),o.isOpened?s.prevMethod&&o.transitions[s.prevMethod]():i(".fancybox-wrap").not(r.wrap).stop(!0).trigger("onReset").remove(),o.transitions[o.isOpened?r.nextMethod:r.openMethod](),o._preloadImages()}},_setDimension:function(){var e,t,a,n,l,r,s,d,c,u=o.getViewport(),y=0,h=!1,g=!1,h=o.wrap,m=o.skin,v=o.inner,w=o.current,g=w.width,x=w.height,_=w.minWidth,k=w.minHeight,C=w.maxWidth,T=w.maxHeight,S=w.scrolling,O=w.scrollOutside?w.scrollbarWidth:0,E=w.margin,I=p(E[1]+E[3]),L=p(E[0]+E[2]);if(h.add(m).add(v).width("auto").height("auto").removeClass("fancybox-tmp"),E=p(m.outerWidth(!0)-m.width()),e=p(m.outerHeight(!0)-m.height()),t=I+E,a=L+e,n=f(g)?(u.w-t)*p(g)/100:g,l=f(x)?(u.h-a)*p(x)/100:x,"iframe"===w.type){if(c=w.content,w.autoHeight&&1===c.data("ready"))try{c[0].contentWindow.document.location&&(v.width(n).height(9999),r=c.contents().find("body"),O&&r.css("overflow-x","hidden"),l=r.outerHeight(!0))}catch($){}}else(w.autoWidth||w.autoHeight)&&(v.addClass("fancybox-tmp"),w.autoWidth||v.width(n),w.autoHeight||v.height(l),w.autoWidth&&(n=v.width()),w.autoHeight&&(l=v.height()),v.removeClass("fancybox-tmp"));if(g=p(n),x=p(l),d=n/l,_=p(f(_)?p(_,"w")-t:_),C=p(f(C)?p(C,"w")-t:C),k=p(f(k)?p(k,"h")-a:k),T=p(f(T)?p(T,"h")-a:T),r=C,s=T,w.fitToView&&(C=Math.min(u.w-t,C),T=Math.min(u.h-a,T)),t=u.w-I,L=u.h-L,w.aspectRatio?(g>C&&(g=C,x=p(g/d)),x>T&&(x=T,g=p(x*d)),_>g&&(g=_,x=p(g/d)),k>x&&(x=k,g=p(x*d))):(g=Math.max(_,Math.min(g,C)),w.autoHeight&&"iframe"!==w.type&&(v.width(g),x=v.height()),x=Math.max(k,Math.min(x,T))),w.fitToView)if(v.width(g).height(x),h.width(g+E),u=h.width(),I=h.height(),w.aspectRatio)for(;(u>t||I>L)&&g>_&&x>k&&!(19<y++);)x=Math.max(k,Math.min(T,x-10)),g=p(x*d),_>g&&(g=_,x=p(g/d)),g>C&&(g=C,x=p(g/d)),v.width(g).height(x),h.width(g+E),u=h.width(),I=h.height();else g=Math.max(_,Math.min(g,g-(u-t))),x=Math.max(k,Math.min(x,x-(I-L)));O&&"auto"===S&&l>x&&t>g+E+O&&(g+=O),v.width(g).height(x),h.width(g+E),u=h.width(),I=h.height(),h=(u>t||I>L)&&g>_&&x>k,g=w.aspectRatio?r>g&&s>x&&n>g&&l>x:(r>g||s>x)&&(n>g||l>x),i.extend(w,{dim:{width:b(u),height:b(I)},origWidth:n,origHeight:l,canShrink:h,canExpand:g,wPadding:E,hPadding:e,wrapSpace:I-m.outerHeight(!0),skinSpace:m.height()-x}),!c&&w.autoHeight&&x>k&&T>x&&!g&&v.height("auto")},_getPosition:function(e){var t=o.current,i=o.getViewport(),a=t.margin,n=o.wrap.width()+a[1]+a[3],l=o.wrap.height()+a[0]+a[2],a={position:"absolute",top:a[0],left:a[3]};return t.autoCenter&&t.fixed&&!e&&l<=i.h&&n<=i.w?a.position="fixed":t.locked||(a.top+=i.y,a.left+=i.x),a.top=b(Math.max(a.top,a.top+(i.h-l)*t.topRatio)),a.left=b(Math.max(a.left,a.left+(i.w-n)*t.leftRatio)),a},_afterZoomIn:function(){var e=o.current;e&&(o.isOpen=o.isOpened=!0,o.wrap.css("overflow","visible").addClass("fancybox-opened"),o.update(),(e.closeClick||e.nextClick&&1<o.group.length)&&o.inner.css("cursor","pointer").bind("click.fb",function(t){!i(t.target).is("a")&&!i(t.target).parent().is("a")&&(t.preventDefault(),o[e.closeClick?"close":"next"]())}),e.closeBtn&&i(e.tpl.closeBtn).appendTo(o.skin).bind("click.fb",function(e){e.preventDefault(),o.close()}),e.arrows&&1<o.group.length&&((e.loop||0<e.index)&&i(e.tpl.prev).appendTo(o.outer).bind("click.fb",o.prev),(e.loop||e.index<o.group.length-1)&&i(e.tpl.next).appendTo(o.outer).bind("click.fb",o.next)),o.trigger("afterShow"),e.loop||e.index!==e.group.length-1?o.opts.autoPlay&&!o.player.isActive&&(o.opts.autoPlay=!1,o.play()):o.play(!1))},_afterZoomOut:function(e){e=e||o.current,i(".fancybox-wrap").trigger("onReset").remove(),i.extend(o,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null}),o.trigger("afterClose",e)}}),o.transitions={getOrigPosition:function(){var e=o.current,t=e.element,i=e.orig,a={},n=50,l=50,r=e.hPadding,s=e.wPadding,d=o.getViewport();return!i&&e.isDom&&t.is(":visible")&&(i=t.find("img:first"),i.length||(i=t)),u(i)?(a=i.offset(),i.is("img")&&(n=i.outerWidth(),l=i.outerHeight())):(a.top=d.y+(d.h-l)*e.topRatio,a.left=d.x+(d.w-n)*e.leftRatio),("fixed"===o.wrap.css("position")||e.locked)&&(a.top-=d.y,a.left-=d.x),a={top:b(a.top-r*e.topRatio),left:b(a.left-s*e.leftRatio),width:b(n+s),height:b(l+r)}},step:function(e,t){var i,a,n=t.prop;a=o.current;var l=a.wrapSpace,r=a.skinSpace;("width"===n||"height"===n)&&(i=t.end===t.start?1:(e-t.start)/(t.end-t.start),o.isClosing&&(i=1-i),a="width"===n?a.wPadding:a.hPadding,a=e-a,o.skin[n](p("width"===n?a:a-l*i)),o.inner[n](p("width"===n?a:a-l*i-r*i)))},zoomIn:function(){var e=o.current,t=e.pos,a=e.openEffect,n="elastic"===a,l=i.extend({opacity:1},t);delete l.position,n?(t=this.getOrigPosition(),e.openOpacity&&(t.opacity=.1)):"fade"===a&&(t.opacity=.1),o.wrap.css(t).animate(l,{duration:"none"===a?0:e.openSpeed,easing:e.openEasing,step:n?this.step:null,complete:o._afterZoomIn})},zoomOut:function(){var e=o.current,t=e.closeEffect,i="elastic"===t,a={opacity:.1};i&&(a=this.getOrigPosition(),e.closeOpacity&&(a.opacity=.1)),o.wrap.animate(a,{duration:"none"===t?0:e.closeSpeed,easing:e.closeEasing,step:i?this.step:null,complete:o._afterZoomOut})},changeIn:function(){var e,t=o.current,i=t.nextEffect,a=t.pos,n={opacity:1},l=o.direction;a.opacity=.1,"elastic"===i&&(e="down"===l||"up"===l?"top":"left","down"===l||"right"===l?(a[e]=b(p(a[e])-200),n[e]="+=200px"):(a[e]=b(p(a[e])+200),n[e]="-=200px")),"none"===i?o._afterZoomIn():o.wrap.css(a).animate(n,{duration:t.nextSpeed,easing:t.nextEasing,complete:o._afterZoomIn})},changeOut:function(){var e=o.previous,t=e.prevEffect,a={opacity:.1},n=o.direction;"elastic"===t&&(a["down"===n||"up"===n?"top":"left"]=("up"===n||"left"===n?"-":"+")+"=200px"),e.wrap.animate(a,{duration:"none"===t?0:e.prevSpeed,easing:e.prevEasing,complete:function(){i(this).trigger("onReset").remove()}})}},o.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!c,fixed:!0},overlay:null,fixed:!1,el:i("html"),create:function(e){e=i.extend({},this.defaults,e),this.overlay&&this.close(),this.overlay=i('<div class="fancybox-overlay"></div>').appendTo(o.coming?o.coming.parent:e.parent),this.fixed=!1,e.fixed&&o.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(e){var t=this;e=i.extend({},this.defaults,e),this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(e),this.fixed||(l.bind("resize.overlay",i.proxy(this.update,this)),this.update()),e.closeClick&&this.overlay.bind("click.overlay",function(e){return i(e.target).hasClass("fancybox-overlay")?(o.isActive?o.close():t.close(),!1):void 0}),this.overlay.css(e.css).show()},close:function(){var e,t;l.unbind("resize.overlay"),this.el.hasClass("fancybox-lock")&&(i(".fancybox-margin").removeClass("fancybox-margin"),e=l.scrollTop(),t=l.scrollLeft(),this.el.removeClass("fancybox-lock"),l.scrollTop(e).scrollLeft(t)),i(".fancybox-overlay").remove().hide(),i.extend(this,{overlay:null,fixed:!1})},update:function(){var e,i="100%";this.overlay.width(i).height("100%"),s?(e=Math.max(t.documentElement.offsetWidth,t.body.offsetWidth),r.width()>e&&(i=r.width())):r.width()>l.width()&&(i=r.width()),this.overlay.width(i).height(r.height())},onReady:function(e,t){var a=this.overlay;i(".fancybox-overlay").stop(!0,!0),a||this.create(e),e.locked&&this.fixed&&t.fixed&&(a||(this.margin=r.height()>l.height()?i("html").css("margin-right").replace("px",""):!1),t.locked=this.overlay.append(t.wrap),t.fixed=!1),!0===e.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(e,t){var a,n;t.locked&&(!1!==this.margin&&(i("*").filter(function(){return"fixed"===i(this).css("position")&&!i(this).hasClass("fancybox-overlay")&&!i(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),a=l.scrollTop(),n=l.scrollLeft(),this.el.addClass("fancybox-lock"),l.scrollTop(a).scrollLeft(n)),this.open(e)},onUpdate:function(){this.fixed||this.update()},afterClose:function(e){this.overlay&&!o.coming&&this.overlay.fadeOut(e.speedOut,i.proxy(this.close,this))}},o.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(e){var t=o.current,a=t.title,n=e.type;if(i.isFunction(a)&&(a=a.call(t.element,t)),y(a)&&""!==i.trim(a)){switch(t=i('<div class="fancybox-title fancybox-title-'+n+'-wrap">'+a+"</div>"),n){case"inside":n=o.skin;break;case"outside":n=o.wrap;break;case"over":n=o.inner;break;default:n=o.skin,t.appendTo("body"),s&&t.width(t.width()),t.wrapInner('<span class="child"></span>'),o.current.margin[2]+=Math.abs(p(t.css("margin-bottom")))}t["top"===e.position?"prependTo":"appendTo"](n)}}},i.fn.fancybox=function(e){var t,a=i(this),n=this.selector||"",l=function(l){var r,s,d=i(this).blur(),c=t;!(l.ctrlKey||l.altKey||l.shiftKey||l.metaKey||d.is(".fancybox-wrap")||(r=e.groupAttr||"data-fancybox-group",s=d.attr(r),s||(r="rel",s=d.get(0)[r]),s&&""!==s&&"nofollow"!==s&&(d=n.length?i(n):a,d=d.filter("["+r+'="'+s+'"]'),c=d.index(this)),e.index=c,!1===o.open(d,e)||!l.preventDefault()))};return e=e||{},t=e.index||0,n&&!1!==e.live?r.undelegate(n,"click.fb-start").delegate(n+":not('.fancybox-item, .fancybox-nav')","click.fb-start",l):a.unbind("click.fb-start").bind("click.fb-start",l),this.filter("[data-fancybox-start=1]").trigger("click"),this},r.ready(function(){var t,l;if(i.scrollbarWidth===a&&(i.scrollbarWidth=function(){var e=i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),t=e.children(),t=t.innerWidth()-t.height(99).innerWidth();return e.remove(),t}),i.support.fixedPosition===a){t=i.support,l=i('<div style="position:fixed;top:20px;"></div>').appendTo("body");var r=20===l[0].offsetTop||15===l[0].offsetTop;l.remove(),t.fixedPosition=r}i.extend(o.defaults,{scrollbarWidth:i.scrollbarWidth(),fixed:i.support.fixedPosition,parent:i("body")}),t=i(e).width(),n.addClass("fancybox-lock-test"),l=i(e).width(),n.removeClass("fancybox-lock-test"),i("<style type='text/css'>.fancybox-margin{margin-right:"+(l-t)+"px;}</style>").appendTo("head")})}(window,document,jQuery),function(e){function t(e){if(e in u.style)return e;var t=["Moz","Webkit","O","ms"],i=e.charAt(0).toUpperCase()+e.substr(1);if(e in u.style)return e;for(var a=0;a<t.length;++a){var n=t[a]+i;if(n in u.style)return n}}function i(){return u.style[y.transform]="",u.style[y.transform]="rotateY(90deg)",""!==u.style[y.transform]}function a(e){return"string"==typeof e&&this.parse(e),this}function n(e,t,i){t===!0?e.queue(i):t?e.queue(t,i):i()}function l(t){var i=[];return e.each(t,function(t){t=e.camelCase(t),t=e.transit.propertyMap[t]||e.cssProps[t]||t,t=s(t),-1===e.inArray(t,i)&&i.push(t)}),i}function r(t,i,a,n){var r=l(t);e.cssEase[a]&&(a=e.cssEase[a]);var o=""+c(i)+" "+a;parseInt(n,10)>0&&(o+=" "+c(n));var s=[];return e.each(r,function(e,t){s.push(t+" "+o)}),s.join(", ")}function o(t,i){i||(e.cssNumber[t]=!0),e.transit.propertyMap[t]=y.transform,e.cssHooks[t]={get:function(i){var a=e(i).css("transit:transform");return a.get(t)},set:function(i,a){var n=e(i).css("transit:transform");n.setFromString(t,a),e(i).css({"transit:transform":n})}}}function s(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}function d(e,t){return"string"!=typeof e||e.match(/^[\-0-9\.]+$/)?""+e+t:e}function c(t){var i=t;return e.fx.speeds[i]&&(i=e.fx.speeds[i]),d(i,"ms")}e.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:!0,useTransitionEnd:!1};var u=document.createElement("div"),y={},f=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;y.transition=t("transition"),y.transitionDelay=t("transitionDelay"),y.transform=t("transform"),y.transformOrigin=t("transformOrigin"),y.transform3d=i();var p={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"},b=y.transitionEnd=p[y.transition]||null;for(var h in y)y.hasOwnProperty(h)&&"undefined"==typeof e.support[h]&&(e.support[h]=y[h]);u=null,e.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"},e.cssHooks["transit:transform"]={get:function(t){return e(t).data("transform")||new a},set:function(t,i){var n=i;n instanceof a||(n=new a(n)),t.style[y.transform]="WebkitTransform"!==y.transform||f?n.toString():n.toString(!0),e(t).data("transform",n)}},e.cssHooks.transform={set:e.cssHooks["transit:transform"].set},e.fn.jquery<"1.8"&&(e.cssHooks.transformOrigin={get:function(e){return e.style[y.transformOrigin]},set:function(e,t){e.style[y.transformOrigin]=t}},e.cssHooks.transition={get:function(e){return e.style[y.transition]},set:function(e,t){e.style[y.transition]=t}}),o("scale"),o("translate"),o("rotate"),o("rotateX"),o("rotateY"),o("rotate3d"),o("perspective"),o("skewX"),o("skewY"),o("x",!0),o("y",!0),a.prototype={setFromString:function(e,t){var i="string"==typeof t?t.split(","):t.constructor===Array?t:[t];i.unshift(e),a.prototype.set.apply(this,i)},set:function(e){var t=Array.prototype.slice.apply(arguments,[1]);this.setter[e]?this.setter[e].apply(this,t):this[e]=t.join(",")},get:function(e){return this.getter[e]?this.getter[e].apply(this):this[e]||0},setter:{rotate:function(e){this.rotate=d(e,"deg")},rotateX:function(e){this.rotateX=d(e,"deg")},rotateY:function(e){this.rotateY=d(e,"deg")},scale:function(e,t){void 0===t&&(t=e),this.scale=e+","+t},skewX:function(e){this.skewX=d(e,"deg")},skewY:function(e){this.skewY=d(e,"deg")},perspective:function(e){this.perspective=d(e,"px")},x:function(e){this.set("translate",e,null)},y:function(e){this.set("translate",null,e)},translate:function(e,t){void 0===this._translateX&&(this._translateX=0),void 0===this._translateY&&(this._translateY=0),null!==e&&void 0!==e&&(this._translateX=d(e,"px")),null!==t&&void 0!==t&&(this._translateY=d(t,"px")),this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var e=(this.scale||"1,1").split(",");return e[0]&&(e[0]=parseFloat(e[0])),e[1]&&(e[1]=parseFloat(e[1])),e[0]===e[1]?e[0]:e},rotate3d:function(){for(var e=(this.rotate3d||"0,0,0,0deg").split(","),t=0;3>=t;++t)e[t]&&(e[t]=parseFloat(e[t]));return e[3]&&(e[3]=d(e[3],"deg")),e}},parse:function(e){var t=this;e.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(e,i,a){t.setFromString(i,a)})},toString:function(e){var t=[];for(var i in this)if(this.hasOwnProperty(i)){if(!y.transform3d&&("rotateX"===i||"rotateY"===i||"perspective"===i||"transformOrigin"===i))continue;"_"!==i[0]&&(e&&"scale"===i?t.push(i+"3d("+this[i]+",1)"):e&&"translate"===i?t.push(i+"3d("+this[i]+",0)"):t.push(i+"("+this[i]+")"))}return t.join(" ")}},e.fn.transition=e.fn.transit=function(t,i,a,l){var o=this,s=0,d=!0;"function"==typeof i&&(l=i,i=void 0),"function"==typeof a&&(l=a,a=void 0),"undefined"!=typeof t.easing&&(a=t.easing,delete t.easing),"undefined"!=typeof t.duration&&(i=t.duration,delete t.duration),"undefined"!=typeof t.complete&&(l=t.complete,delete t.complete),"undefined"!=typeof t.queue&&(d=t.queue,delete t.queue),"undefined"!=typeof t.delay&&(s=t.delay,delete t.delay),"undefined"==typeof i&&(i=e.fx.speeds._default),"undefined"==typeof a&&(a=e.cssEase._default),i=c(i);var u=r(t,i,a,s),f=e.transit.enabled&&y.transition,p=f?parseInt(i,10)+parseInt(s,10):0;if(0===p){var h=function(e){o.css(t),l&&l.apply(o),e&&e()};return n(o,d,h),o}var g={},m=function(i){var a=!1,n=function(){a&&o.unbind(b,n),p>0&&o.each(function(){this.style[y.transition]=g[this]||null}),"function"==typeof l&&l.apply(o),"function"==typeof i&&i()};p>0&&b&&e.transit.useTransitionEnd?(a=!0,o.bind(b,n)):window.setTimeout(n,p),o.each(function(){p>0&&(this.style[y.transition]=u),e(this).css(t)})},v=function(e){this.offsetWidth,m(e)};return n(o,d,v),this},e.transit.getTransitionValue=r}(jQuery),function(e){function t(e,t){var i=(65535&e)+(65535&t),a=(e>>16)+(t>>16)+(i>>16);return a<<16|65535&i}function i(e,t){return e<<t|e>>>32-t}function a(e,a,n,l,r,o){return t(i(t(t(a,e),t(l,o)),r),n)}function n(e,t,i,n,l,r,o){return a(t&i|~t&n,e,t,l,r,o)}function l(e,t,i,n,l,r,o){return a(t&n|i&~n,e,t,l,r,o)}function r(e,t,i,n,l,r,o){return a(t^i^n,e,t,l,r,o)}function o(e,t,i,n,l,r,o){return a(i^(t|~n),e,t,l,r,o)}function s(e,i){e[i>>5]|=128<<i%32,e[(i+64>>>9<<4)+14]=i;var a,s,d,c,u,y=1732584193,f=-271733879,p=-1732584194,b=271733878;for(a=0;a<e.length;a+=16)s=y,d=f,c=p,u=b,y=n(y,f,p,b,e[a],7,-680876936),b=n(b,y,f,p,e[a+1],12,-389564586),p=n(p,b,y,f,e[a+2],17,606105819),f=n(f,p,b,y,e[a+3],22,-1044525330),y=n(y,f,p,b,e[a+4],7,-176418897),b=n(b,y,f,p,e[a+5],12,1200080426),p=n(p,b,y,f,e[a+6],17,-1473231341),f=n(f,p,b,y,e[a+7],22,-45705983),y=n(y,f,p,b,e[a+8],7,1770035416),b=n(b,y,f,p,e[a+9],12,-1958414417),p=n(p,b,y,f,e[a+10],17,-42063),f=n(f,p,b,y,e[a+11],22,-1990404162),y=n(y,f,p,b,e[a+12],7,1804603682),b=n(b,y,f,p,e[a+13],12,-40341101),p=n(p,b,y,f,e[a+14],17,-1502002290),f=n(f,p,b,y,e[a+15],22,1236535329),y=l(y,f,p,b,e[a+1],5,-165796510),b=l(b,y,f,p,e[a+6],9,-1069501632),p=l(p,b,y,f,e[a+11],14,643717713),f=l(f,p,b,y,e[a],20,-373897302),y=l(y,f,p,b,e[a+5],5,-701558691),b=l(b,y,f,p,e[a+10],9,38016083),p=l(p,b,y,f,e[a+15],14,-660478335),f=l(f,p,b,y,e[a+4],20,-405537848),y=l(y,f,p,b,e[a+9],5,568446438),b=l(b,y,f,p,e[a+14],9,-1019803690),p=l(p,b,y,f,e[a+3],14,-187363961),f=l(f,p,b,y,e[a+8],20,1163531501),y=l(y,f,p,b,e[a+13],5,-1444681467),b=l(b,y,f,p,e[a+2],9,-51403784),p=l(p,b,y,f,e[a+7],14,1735328473),f=l(f,p,b,y,e[a+12],20,-1926607734),y=r(y,f,p,b,e[a+5],4,-378558),b=r(b,y,f,p,e[a+8],11,-2022574463),p=r(p,b,y,f,e[a+11],16,1839030562),f=r(f,p,b,y,e[a+14],23,-35309556),y=r(y,f,p,b,e[a+1],4,-1530992060),b=r(b,y,f,p,e[a+4],11,1272893353),p=r(p,b,y,f,e[a+7],16,-155497632),f=r(f,p,b,y,e[a+10],23,-1094730640),y=r(y,f,p,b,e[a+13],4,681279174),b=r(b,y,f,p,e[a],11,-358537222),p=r(p,b,y,f,e[a+3],16,-722521979),f=r(f,p,b,y,e[a+6],23,76029189),y=r(y,f,p,b,e[a+9],4,-640364487),b=r(b,y,f,p,e[a+12],11,-421815835),p=r(p,b,y,f,e[a+15],16,530742520),f=r(f,p,b,y,e[a+2],23,-995338651),y=o(y,f,p,b,e[a],6,-198630844),b=o(b,y,f,p,e[a+7],10,1126891415),p=o(p,b,y,f,e[a+14],15,-1416354905),f=o(f,p,b,y,e[a+5],21,-57434055),y=o(y,f,p,b,e[a+12],6,1700485571),b=o(b,y,f,p,e[a+3],10,-1894986606),p=o(p,b,y,f,e[a+10],15,-1051523),f=o(f,p,b,y,e[a+1],21,-2054922799),y=o(y,f,p,b,e[a+8],6,1873313359),b=o(b,y,f,p,e[a+15],10,-30611744),p=o(p,b,y,f,e[a+6],15,-1560198380),f=o(f,p,b,y,e[a+13],21,1309151649),y=o(y,f,p,b,e[a+4],6,-145523070),b=o(b,y,f,p,e[a+11],10,-1120210379),p=o(p,b,y,f,e[a+2],15,718787259),f=o(f,p,b,y,e[a+9],21,-343485551),y=t(y,s),f=t(f,d),p=t(p,c),b=t(b,u);
return[y,f,p,b]}function d(e){var t,i="";for(t=0;t<32*e.length;t+=8)i+=String.fromCharCode(e[t>>5]>>>t%32&255);return i}function c(e){var t,i=[];for(i[(e.length>>2)-1]=void 0,t=0;t<i.length;t+=1)i[t]=0;for(t=0;t<8*e.length;t+=8)i[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;return i}function u(e){return d(s(c(e),8*e.length))}function y(e,t){var i,a,n=c(e),l=[],r=[];for(l[15]=r[15]=void 0,n.length>16&&(n=s(n,8*e.length)),i=0;16>i;i+=1)l[i]=909522486^n[i],r[i]=1549556828^n[i];return a=s(l.concat(c(t)),512+8*t.length),d(s(r.concat(a),640))}function f(e){var t,i,a="0123456789abcdef",n="";for(i=0;i<e.length;i+=1)t=e.charCodeAt(i),n+=a.charAt(t>>>4&15)+a.charAt(15&t);return n}function p(e){return unescape(encodeURIComponent(e))}function b(e){return u(p(e))}function h(e){return f(b(e))}function g(e,t){return y(p(e),p(t))}function m(e,t){return f(g(e,t))}function v(e,t,i){return t?i?g(t,e):m(t,e):i?b(e):h(e)}"function"==typeof define&&define.amd?define(function(){return v}):e.md5=v}(this),window.console&&console.log||!function(){for(var e=function(){},t=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","markTimeline","table","time","timeEnd","timeStamp","trace","warn"],i=t.length,a=window.console={};i--;)a[t[i]]=e}(),function(){var e;e=this,$(function(){var e,t,i,a;return i=$("#signedin-nav"),a=$("#signedout-nav"),t=$.cookie("crafted_session"),t?(e=$.post("https://codio.com/service/",{acrequest:JSON.stringify({object:"AccountManager",method:"getMyInfo",params:{session_id:t}})}),e.done(function(e){var t,n,l;if(1!==e.code){if(a.fadeIn(),"undefined"!=typeof ga&&null!==ga)return ga("set","dimension1","no"),ga("set","dimension3","anonymous")}else if(n=e.response.details,"undefined"!=typeof Intercom&&Intercom("boot",{app_id:"ee8711023afa04b80a6b921ddb3939c1171e0f62",email:n.email,created_at:n.created_at?Math.round(n.created_at/1e3):void 0,username:n.name,name:n.actual_name||n.name,user_id:e.response.account,widget:{activator:"#IntercomDefaultWidget"}}),t=md5(n.email.toLowerCase()),$("#gravatar img").prop("src","//www.gravatar.com/avatar/"+t+"?s=32&amp;d=mm"),$("#gravatar").prop("href","/"+n.name),l=$("#userlink"),l.prop("href","/"+n.name),l.text(n.name),i.fadeIn(),"undefined"!=typeof ga&&null!==ga)return ga("set","dimension1","yes"),ga("set","dimension3",n.name)})):(a.fadeIn(),"undefined"!=typeof ga&&null!==ga?(ga("set","dimension1","no"),ga("set","dimension3","anonymous")):void 0)}),$(function(){return $("a[href^='#']").on("click",function(){var e,t;return e=$(this).data().el||$(this.hash),$(this).data().el=e,e.length?(t=e.offset().top,$("html,body").animate({scrollTop:t-50},"slow")):void 0})}),$(function(){return $("#content-body h1 button").click(function(){return $("aside").is(":visible")?$("aside").hide():$("aside").show()})}),$(function(){return $(".fancybox").fancybox({helpers:{media:{},title:{type:"inside"}},beforeLoad:function(){return this.title=$(this.element).find("img").attr("title")}})}),$(function(){var e,t;return(e=$("body.standard:not(.no-fixed-submenu) aside")).length>0?(t=e.offset().top-parseFloat(e.css("marginTop").replace(/auto/,0)),$(window).scroll(function(){return $(this).scrollTop()>=t?e.addClass("fixed"):e.removeClass("fixed")})):void 0}),$(function(){var e,t;return(e=$("body.blog section.posts article img")).length>0&&e.each(function(){var e;return e=$(this),e.parent().is("a")?void 0:e.wrap(function(){return"<a href='"+e.attr("src")+"' class='fancybox' />"})}),$("body.blog section.posts article pre > code").addClass("lang-javascript"),(t=$("body.blog section.posts article a").filter("[href*='youtube'], [href*='vimeo']")).length>0?t.addClass("fancybox fancybox.iframe"):void 0}),$(function(){var e,t;return(e=$("#tree")).length>0?(t=function(){var e,t;return(e=$("body.docs article :not(a)>img")).length>0&&e.wrap(function(){return"<a href='"+$(this).attr("src")+"' class='fancybox' />"}),$("body.docs article pre > code").addClass("lang-javascript"),(t=$("body.docs article a").filter("[href*='youtube'], [href*='vimeo']")).length>0?t.addClass("fancybox fancybox.iframe"):void 0},t(),$("#full-screen").on("click",function(t){return t.preventDefault(),$("body").hasClass("full-screen")?$("body").removeClass("full-screen"):($("body").addClass("full-screen"),e.height($(window).height()-e.offset().top-20))}),e.find("div>span").on("click",function(){return $(this).parent().parent().toggleClass("expanded")}),e.find("a").on("click",function(){var t;return e.find("li").removeClass("checked"),t=$(this).parent().find(">span").length>0?$(this).parent().parent():$(this).parent(),t.addClass("checked"),t.parents("li").addClass("checked")}),expandTreeWithPath(),$(document).on("page:change",function(){return expandTreeWithPath(),t(),Rainbow.color(),"undefined"!=typeof ga&&null!==ga&&ga("send","pageview")})):void 0}),e.expandTreeWithPath=function(e){var t,i;return null==e&&(e=document.location.pathname),e=e.replace(/\/$/,"")+"/",(i=$("#tree a[href='"+e+"']")).length>0?($("#tree li").removeClass("checked"),t=i.parent().find(">span").length>0?i.parent().parent():i.parent(),t.addClass("checked"),t.parents("li").addClass("checked")):void 0}}.call(this);