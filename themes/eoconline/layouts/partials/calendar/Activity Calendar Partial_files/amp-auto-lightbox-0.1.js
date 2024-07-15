var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(self.AMP=self.AMP||[]).push({n:"amp-auto-lightbox",v:"1911191835190",f:(function(AMP,_){
(function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a})(this);function l(){var a,b;this.promise=new Promise(function(c,e){a=c;b=e});this.resolve=a;this.reject=b};function n(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var p=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function q(a){return a?Array.prototype.slice.call(a):[]};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var r=self.__AMP_LOG;function t(){if(r.dev)return r.dev;throw Error("failed to call initLogConstructor");};var u=Object.prototype.hasOwnProperty;(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0,action:!0});function v(a,b){if(a.__AMP__EXPERIMENT_TOGGLES)var c=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);c=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var e in a.AMP_CONFIG){var d=a.AMP_CONFIG[e];"number"===typeof d&&0<=d&&1>=d&&(c[e]=Math.random()<d)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(e=a.AMP_CONFIG["allow-doc-opt-in"],d=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){d=
d.getAttribute("content").split(",");for(var h=0;h<d.length;h++)-1!=e.indexOf(d[h])&&(c[d[h]]=!0)}Object.assign(c,w(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){e=a.AMP_CONFIG["allow-url-opt-in"];d=a.location.originalHash||a.location.hash;a=Object.create(null);if(d)for(var f;f=p.exec(d);)h=n(f[1],f[1]),f=f[2]?n(f[2].replace(/\+/g," "),f[2]):"",a[h]=f;for(d=0;d<e.length;d++)h=a["e-"+e[d]],"1"==h&&(c[e[d]]=!0),"0"==h&&(c[e[d]]=!1)}}var k=
c;return!!k[b]}function w(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(d){t().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var e=0;e<c.length;e++)0!=c[e].length&&("-"==c[e][0]?a[c[e].substr(1)]=!1:a[c[e]]=!0);return a};var x={},y=(x["ampdoc-fie"]={isTrafficEligible:function(){return!0},branches:[["21065001"],["21065002"]]},x);function z(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return A(a,b)}function B(a){return a.nodeType?z((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function C(a){a=B(a);return a.isSingleDoc()?a.win:a}function A(a,b){D(a,b);var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});var e=c;a=e[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function D(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function E(a,b){for(var c;a&&a!==c;a=a.parentElement)if(b(a))return a;return null}
function F(a){return a.closest?a.closest("a[href],amp-script,amp-story,button,amp-lightbox,amp-carousel,[placeholder],[data-amp-auto-lightbox-disable],amp-selector [option],[subscriptions-action]"):E(a,function(a){var b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return b?b.call(a,"a[href],amp-script,amp-story,button,amp-lightbox,amp-carousel,[placeholder],[data-amp-auto-lightbox-disable],amp-selector [option],[subscriptions-action]"):!1})}
function G(a){var b=a.tagName;4>b.length||b.lastIndexOf("AMP-",0);if(a.createdCallback)return Promise.resolve(a);a.__AMP_UPG_PRM||(b=new l,a.__AMP_UPG_PRM=b.promise,a.__AMP_UPG_RES=b.resolve);return a.__AMP_UPG_PRM};/nochunking=1/.test(self.location.hash);Promise.resolve();var H={Article:!0,NewsArticle:!0,BlogPosting:!0,LiveBlogPosting:!0,DiscussionForumPosting:!0};function I(){}function J(a){return K(a,function(){a.setAttribute("i-amphtml-auto-lightbox-visited","")})}function L(a){return G(a).then(function(a){return a.signals().whenSignal("load-end")})}
function M(a){return q(a.getRootNode().querySelectorAll('script[type="application/ld+json"]')).map(function(a){var b=a.textContent;try{var e=JSON.parse(b)}catch(d){e=null}return(e||{})["@type"]}).filter(function(a){return a})}function N(a){return M(a).some(function(a){return H[a]})}function K(a,b){return G(a).then(function(a){return a.getResources().mutateElement(a,b)})}
function O(a){function b(b){return!!a.getRootNode().querySelector(b)}var c='script[custom-element="amp-lightbox-gallery"]',e="[lightbox]:not([i-amphtml-auto-lightbox-visited])";return b(c)&&b(e)}var P=0;function Q(a,b){return K(b,function(){b.setAttribute("lightbox","i-amphtml-auto-lightbox-"+P++)}).then(function(){z(a.win,"extensions").installExtensionForDoc(a,"amp-lightbox-gallery");b.dispatchCustomEvent("amp-auto-lightbox:newly-set");return b})}
function R(a,b){b.map(function(b){return L(b).then(function(){var c=b.querySelector("img");var d=c.naturalWidth;c=c.naturalHeight;var h=b.getLayoutBox(),f=h.width;h=h.height;var k=B(b);k=C(k);var m=A(k,"viewport").getSize();k=m.width;m=m.height;f*=h;if(d=1.2<=d*c/f||d>k||c>m||.25<=f/(k*m)){if(F(b))var g=!1;else{d=b.ownerDocument.defaultView;f=d.__AMP_TOP||(d.__AMP_TOP=d);c=d!=f;if(v(f,"ampdoc-fie")){f.__AMP_EXPERIMENT_BRANCHES=f.__AMP_EXPERIMENT_BRANCHES||{};for(g in y)u.call(y,g)&&!u.call(f.__AMP_EXPERIMENT_BRANCHES,
g)&&(y[g].isTrafficEligible&&y[g].isTrafficEligible(f)?!f.__AMP_EXPERIMENT_BRANCHES[g]&&v(f,g)&&(h=y[g].branches,f.__AMP_EXPERIMENT_BRANCHES[g]=h[Math.floor(Math.random()*h.length)]||null):f.__AMP_EXPERIMENT_BRANCHES[g]=null);g="21065002"===(f.__AMP_EXPERIMENT_BRANCHES?f.__AMP_EXPERIMENT_BRANCHES["ampdoc-fie"]:null)}else g=!1;c&&!g?g=D(d,"action")?A(d,"action"):null:(g=B(b),g=C(g),g=D(g,"action")?A(g,"action"):null);g=!g.hasResolvableAction(b,"tap")}d=g}if(d)return t().info("amp-auto-lightbox","apply",
b),Q(a,b)},I)})}function S(a,b){if(O(a))var c=0;else c=(c=a.getRootNode().querySelector('meta[property="og:type"]'))?c.getAttribute("content"):void 0,c="article"==c||N(a);c?(c=q((b||a.win.document).querySelectorAll("amp-img:not([lightbox]):not([i-amphtml-auto-lightbox-visited])")),c.forEach(J),R(a,c)):t().info("amp-auto-lightbox","disabled")}(function(a){var b=a.ampdoc;b.whenReady().then(function(){b.getRootNode().addEventListener("amp:dom-update",function(a){S(b,a.target)});S(b)})})(self.AMP);
})});

//# sourceMappingURL=amp-auto-lightbox-0.1.js.map


}
/*
     FILE ARCHIVED ON 00:56:35 Dec 12, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:58:18 Jul 15, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.007
  exclusion.robots: 0.041
  exclusion.robots.policy: 0.023
  esindex: 0.015
  cdx.remote: 141.321
  LoadShardBlock: 1108.314 (3)
  PetaboxLoader3.datanode: 568.79 (4)
  PetaboxLoader3.resolve: 705.132 (2)
  load_resource: 185.501
*/