window.Rainbow=function(){function e(e){var t,n=e.getAttribute&&e.getAttribute("data-language")||0;if(!n)for(e=e.attributes,t=0;t<e.length;++t)if("data-language"===e[t].nodeName)return e[t].nodeValue;return n}function t(t){var n=e(t)||e(t.parentNode);if(!n){var r=/\blang(?:uage)?-(\w+)/;(t=t.className.match(r)||t.parentNode.className.match(r))&&(n=t[1])}return n}function n(e,t){for(var n in h[v])if(n=parseInt(n,10),(e==n&&t==h[v][n]?0:n>=e&&t>=h[v][n])&&(delete h[v][n],delete p[v][n]),e>=n&&e<h[v][n]||t>n&&t<h[v][n])return!0;return!1}function r(e,t){return'<span class="'+e.replace(/\./g," ")+(d?" "+d:"")+'">'+t+"</span>"}function i(e,t,s,l){var u=e.exec(s);if(u){++b,!t.name&&"string"==typeof t.matches[0]&&(t.name=t.matches[0],delete t.matches[0]);var d=u[0],f=u.index,g=u[0].length+f,m=function(){function n(){i(e,t,s,l)}b%100>0?n():setTimeout(n,0)};if(n(f,g))m();else{var y=o(t.matches),w=function(e,n,i){if(e>=n.length)i(d);else{var o=u[n[e]];if(o){var s=t.matches[n[e]],l=s.language,f=s.name&&s.matches?s.matches:s,p=function(t,o,a){var s;s=0;var c;for(c=1;c<n[e];++c)u[c]&&(s+=u[c].length);o=a?r(a,o):o,d=d.substr(0,s)+d.substr(s).replace(t,o),w(++e,n,i)};l?c(o,l,function(e){p(o,e)}):"string"==typeof s?p(o,o,s):a(o,f.length?f:[f],function(e){p(o,e,s.matches?s.name:0)})}else w(++e,n,i)}};w(0,y,function(e){t.name&&(e=r(t.name,e)),p[v]||(p[v]={},h[v]={}),p[v][f]={replace:u[0],"with":e},h[v][f]=g,m()})}}else l()}function o(e){var t,n=[];for(t in e)e.hasOwnProperty(t)&&n.push(t);return n.sort(function(e,t){return t-e})}function a(e,t,n){function r(t,o){o<t.length?i(t[o].pattern,t[o],e,function(){r(t,++o)}):s(e,function(e){delete p[v],delete h[v],--v,n(e)})}++v,r(t,0)}function s(e,t){function n(e,t,r,i){if(r<t.length){++w;var o=t[r],a=p[v][o],e=e.substr(0,o)+e.substr(o).replace(a.replace,a["with"]),o=function(){n(e,t,++r,i)};w%250>0?o():setTimeout(o,0)}else i(e)}var r=o(p[v]);n(e,r,0,t)}function c(e,t,n){var r=g[t]||[],i=g[y]||[],t=m[t]?r:r.concat(i);a(e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/&(?![\w\#]+;)/g,"&amp;"),t,n)}function l(e,n,r){if(n<e.length){var i=e[n],o=t(i);return-1<(" "+i.className+" ").indexOf(" rainbow ")||!o?l(e,++n,r):(o=o.toLowerCase(),i.className+=i.className?" rainbow":"rainbow",c(i.innerHTML,o,function(t){i.innerHTML=t,p={},h={},f&&f(i,o),setTimeout(function(){l(e,++n,r)},0)}))}r&&r()}function u(e,t){var n,e=e&&"function"==typeof e.getElementsByTagName?e:document,r=e.getElementsByTagName("pre"),i=e.getElementsByTagName("code"),o=[];for(n=0;n<i.length;++n)o.push(i[n]);for(n=0;n<r.length;++n)r[n].getElementsByTagName("code").length||o.push(r[n]);l(o,0,t)}var d,f,p={},h={},g={},m={},v=0,y=0,b=0,w=0;return{extend:function(e,t,n){1==arguments.length&&(t=e,e=y),m[e]=n,g[e]=t.concat(g[e]||[])},b:function(e){f=e},a:function(e){d=e},color:function(e,t,n){return"string"==typeof e?c(e,t,n):"function"==typeof e?u(0,e):(u(e,t),void 0)}}}(),window.addEventListener?window.addEventListener("load",Rainbow.color,!1):window.attachEvent("onload",Rainbow.color),Rainbow.onHighlight=Rainbow.b,Rainbow.addClass=Rainbow.a;