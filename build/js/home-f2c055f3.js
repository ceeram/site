!function(){$(function(){return $("#tagline h1, #tagline div").transition({opacity:1,duration:1e3,delay:800}),$("#screen").transition({opacity:1,duration:5e3,delay:600}),$("#screen a").transition({opacity:1,duration:1e3,delay:2500})})}.call(this),function(){$(function(){var e,t,n,i,r,a,o;return n=$("#social-icons"),e=$("aside"),i=e.offset(),r=e.find("li"),a=r.find("a"),o=$("section"),t=e.height(),i.top-=85,i.left=$(".container",o.first()).offset().left,e.css("left",i.left),$(window).on("resize",function(){return i.left=$(".container",o.first()).offset().left,e.css("left",i.left)}),$(window).on("scroll",function(){var s;return s=$(document).scrollTop(),s>=i.top&&!e.hasClass("fixed")?(e.addClass("fixed"),n.addClass("fixed")):s<=i.top&&(e.removeClass("fixed"),n.removeClass("fixed")),s<i.top?void 0:o.each(function(e,n){var i,o;return o=$(n),o.data().frame||o.data({frame:{top:o.offset().top,bottom:o.offset().top+o.height()},link:a.filter('[href="#'+o.attr("id")+'"]')}),i=s+t/2,i>=o.data().frame.top&&i<=o.data().frame.bottom?(r.removeClass("active"),o.data().link.closest("li").addClass("active")):void 0})})})}.call(this);