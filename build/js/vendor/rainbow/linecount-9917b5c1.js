window.Rainbow&&(window.Rainbow.linecount=function(e){e.onHighlight(function(e){var t=$(e),i=t.clone().empty(),a=$("<table />",{"class":"rainbow"}).appendTo(i),n=$("<tr />",{"class":"rainbow-header"}).appendTo(a);$("<th />").appendTo(n),$("<th />",{"class":"rainbow-language"}).text(t.data("language")).appendTo(n);var l=t.html().trim().split("\n");$.each(l,function(e,t){e++;var i=$("<tr />",{"class":"rainbow-line rainbow-line-"+e});$("<td />",{"class":"rainbow-line-number","data-number":e}).appendTo(i),$("<td />",{"class":"rainbow-line-code"}).html(t).appendTo(i),a.append(i)}),t.replaceWith(a)})}(window.Rainbow));