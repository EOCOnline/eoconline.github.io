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

(self.AMP=self.AMP||[]).push({n:"amp-install-serviceworker",v:"1911191835190",f:(function(AMP,_){
var h="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},l;if("function"==typeof Object.setPrototypeOf)l=Object.setPrototypeOf;else{var m;a:{var n={a:!0},p={};try{p.__proto__=n;m=p.a;break a}catch(a){}m=!1}l=m?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var q=l;function r(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var t=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function u(a){var b=Object.create(null);if(!a)return b;for(var c;c=t.exec(a);){var d=r(c[1],c[1]),e=c[2]?r(c[2].replace(/\+/g," "),c[2]):"";b[d]=e}return b};var w="";
function x(){var a,b=a||self;if(b.__AMP_MODE)var c=b.__AMP_MODE;else{c=b;var d=self.AMP_CONFIG||{},e=!!d.test||!1,f=u(c.location.originalHash||c.location.hash);d=d.spt;var g=u(c.location.search);w||(w=c.AMP_CONFIG&&c.AMP_CONFIG.v?c.AMP_CONFIG.v:"011911191835190");c={localDev:!1,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(f.development)||c.AMP_DEV_MODE),examiner:"2"==f.development,geoOverride:f["amp-geo"],userLocationOverride:f["amp-user-location"],minified:!0,lite:void 0!=g.amp_lite,
test:e,log:f.log,version:"1911191835190",rtvVersion:w,singlePassType:d};c=b.__AMP_MODE=c}return c};var y=self.AMP_CONFIG||{},z={thirdParty:y.thirdPartyUrl||"https://web.archive.org/web/20191212012829/https://3p.ampproject.net",thirdPartyFrameHost:y.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof y.thirdPartyFrameRegex?new RegExp(y.thirdPartyFrameRegex):y.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:y.cdnUrl||"https://web.archive.org/web/20191212012829/https://cdn.ampproject.org",cdnProxyRegex:("string"==typeof y.cdnProxyRegex?new RegExp(y.cdnProxyRegex):y.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,
errorReporting:y.errorReportingUrl||"https://web.archive.org/web/20191212012829/https://amp-error-reporting.appspot.com/r",localDev:y.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/]};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var A=self.__AMP_LOG;function B(){if(!A.user)throw Error("failed to call initLogConstructor");return A.user}function C(a,b,c,d,e){B().assert(a,b,c,d,e,void 0,void 0,void 0,void 0,void 0,void 0)};var D=Object.prototype.hasOwnProperty;function E(a){return a||{}};E({c:!0,v:!0,a:!0,ad:!0,action:!0});function F(a){var b=a.indexOf("#");return-1==b?a:a.substring(0,b)};function G(a,b){if(a.__AMP__EXPERIMENT_TOGGLES)var c=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);c=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var d in a.AMP_CONFIG){var e=a.AMP_CONFIG[d];"number"===typeof e&&0<=e&&1>=e&&(c[d]=Math.random()<e)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(d=a.AMP_CONFIG["allow-doc-opt-in"],e=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){e=
e.getAttribute("content").split(",");for(var f=0;f<e.length;f++)-1!=d.indexOf(e[f])&&(c[e[f]]=!0)}Object.assign(c,H(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length)for(d=a.AMP_CONFIG["allow-url-opt-in"],a=u(a.location.originalHash||a.location.hash),e=0;e<d.length;e++)f=a["e-"+d[e]],"1"==f&&(c[d[e]]=!0),"0"==f&&(c[d[e]]=!1)}var g=c;return!!g[b]}
function H(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){if(A.dev)a=A.dev;else throw Error("failed to call initLogConstructor");a.warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};var I={},J=(I["ampdoc-fie"]={isTrafficEligible:function(){return!0},branches:[["21065001"],["21065002"]]},I);function K(a){var b=a.ownerDocument.defaultView,c=b.__AMP_TOP||(b.__AMP_TOP=b),d=b!=c;var e=c;if(G(e,"ampdoc-fie")){e.__AMP_EXPERIMENT_BRANCHES=e.__AMP_EXPERIMENT_BRANCHES||{};for(var f in J)if(D.call(J,f)&&!D.call(e.__AMP_EXPERIMENT_BRANCHES,f))if(J[f].isTrafficEligible&&J[f].isTrafficEligible(e)){if(!e.__AMP_EXPERIMENT_BRANCHES[f]&&G(e,f)){var g=J[f].branches;e.__AMP_EXPERIMENT_BRANCHES[f]=g[Math.floor(Math.random()*g.length)]||null}}else e.__AMP_EXPERIMENT_BRANCHES[f]=null;e="21065002"===(e.__AMP_EXPERIMENT_BRANCHES?
e.__AMP_EXPERIMENT_BRANCHES["ampdoc-fie"]:null)}else e=!1;var k=e;d&&!k?a=L(b,"url")?M(b,"url"):null:(a=N(a),a=O(a),a=L(a,"url")?M(a,"url"):null);return a}function Q(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return M(a,b)}function aa(a){var b=N(a);b=O(b);return M(b,"documentInfo")}function N(a){return a.nodeType?Q((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function O(a){a=N(a);return a.isSingleDoc()?a.win:a}
function M(a,b){L(a,b);var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});var d=c;a=d[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function L(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function ba(a,b){for(var c;a&&a!==c;a=a.parentElement)if(b(a))return a;return null}function ca(a){return a.closest?a.closest("A"):ba(a,function(a){var b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return b?b.call(a,"A"):!1})};var R;function da(a,b){var c=void 0,d=a,e=b;var f=function(a){try{return e(a)}catch(P){throw self.__AMP_REPORT_ERROR(P),P;}};var g=ea(),k=!1;c&&(k=c.capture);d.addEventListener("click",f,g?c:k)}function ea(){if(void 0!==R)return R;R=!1;try{var a={get capture(){R=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return R};function S(a){var b=!1;void 0===b&&(b=a.hasAttribute("hidden"));b?a.removeAttribute("hidden"):a.setAttribute("hidden","")};function T(a){a=AMP.BaseElement.call(this,a)||this;a.h=null;a.B=null;a.j=Q(a.win,"platform").isSafari();return a}var U=AMP.BaseElement;T.prototype=h(U.prototype);T.prototype.constructor=T;if(q)q(T,U);else for(var V in U)if("prototype"!=V)if(Object.defineProperties){var W=Object.getOwnPropertyDescriptor(U,V);W&&Object.defineProperty(T,V,W)}else T[V]=U[V];T.C=U.prototype;
T.prototype.buildCallback=function(){var a=this,b=this.win;if("serviceWorker"in b.navigator){var c=K(this.element),d=this.element.getAttribute("src");c.assertHttpsUrl(d,this.element);if(!c.isProxyOrigin(d)&&!c.isProxyOrigin(b.location.href)||this.j)c.parse(b.location.href).origin==c.parse(d).origin?X(this).then(function(){return fa(a.win,d,a.element)}):this.user().error("amp-install-serviceworker","Did not install ServiceWorker because it does not match the current origin: "+d);else{var e=this.element.getAttribute("data-iframe-src");
if(e){c.assertHttpsUrl(e,this.element);var f=c.parse(e).origin,g=aa(this.element).get(),k=c.parse(g.sourceUrl),v=c.parse(g.canonicalUrl);C(f==k.origin||f==v.origin,"data-iframe-src (%s) should be a URL on the same origin as the source (%s) or canonical URL (%s) of the AMP-document.",f,k.origin,v.origin);this.h=e;X(this).then(function(){return ha(a)})}}(c.isProxyOrigin(d)||c.isProxyOrigin(b.location.href))&&this.j&&this.user().error("amp-install-serviceworker","Did not install ServiceWorker because of safari double keyring caching as it will not have any effect")}else ia(this)};
function X(a){return Promise.all([a.loadPromise(a.win),a.getAmpDoc().whenFirstVisible()])}function ha(a){return a.mutateElement(function(){S(a.element);var b=a.win.document.createElement("iframe");b.setAttribute("sandbox","allow-same-origin allow-scripts");b.src=a.h;a.element.appendChild(b)})}
function ia(a){if(a.getAmpDoc().isSingleDoc()){var b=a.getAmpDoc(),c=a.win,d=K(a.element),e=d.parse(c.location.href),f=a.element.getAttribute("data-no-service-worker-fallback-url-match"),g=a.element.getAttribute("data-no-service-worker-fallback-shell-url");if(f||g){C(f&&g,'Both, "%s" and "%s" must be specified for url-rewrite',"data-no-service-worker-fallback-url-match","data-no-service-worker-fallback-shell-url");g=F(g);try{var k=new RegExp(f)}catch(v){throw B().createError('Invalid "data-no-service-worker-fallback-url-match" expression',
v);}C(d.getSourceOrigin(e)==d.parse(g).origin,'Shell source origin "%s" must be the same as source origin "%s"',g,e.href);a.B=new Y(b,k,g,a.element);d.isSecure(g)&&ja(a,g)}}}function ja(a,b){X(a).then(function(){a.mutateElement(function(){return ka(a,b)})})}
function ka(a,b){var c=a.win.document.createElement("iframe");c.id="i-amphtml-shell-preload";c.setAttribute("src",b+"#preload");S(c);c.setAttribute("sandbox","allow-scripts allow-same-origin");var d=a.loadPromise(c);d.then(function(){c.parentElement&&c.parentElement.removeChild(c)});a.element.appendChild(c)}function Y(a,b,c,d){this.win=a.win;this.A=b;this.w=c;this.m=K(d);this.l=this.m.parse(c);a=a.getRootNode();b=this.o.bind(this);da(a,b)}
Y.prototype.o=function(a){if(!a.defaultPrevented&&(a=ca(a.target))&&a.href){var b=this.m.parse(a.href);if(b.origin==this.l.origin&&b.pathname!=this.l.pathname&&this.A.test(b.href)&&!a.getAttribute("i-amphtml-orig-href")){var c=this.win;F(b.href)!=F(c.location.href)&&(a.setAttribute("i-amphtml-orig-href",a.href),a.href=this.w+"#href="+encodeURIComponent(""+b.pathname+b.search+b.hash))}}};
function fa(a,b,c){var d={};c.hasAttribute("data-scope")&&(d.scope=c.getAttribute("data-scope"));return a.navigator.serviceWorker.register(b,d).then(function(b){x().development&&B().info("amp-install-serviceworker","ServiceWorker registration successful with scope: ",b.scope);var e=b.installing;e?e.addEventListener("statechange",function(e){"activated"===e.target.state&&Z(b,a,c)}):b.active&&Z(b,a,c);return b},function(a){B().error("amp-install-serviceworker","ServiceWorker registration failed:",a)})}
function Z(a,b,c){la(b,a);c.hasAttribute("data-prefetch")&&ma(a,b)}function la(a,b){if("performance"in a){var c=a.performance.getEntriesByType("resource").filter(function(a){var b;if(b="script"===a.initiatorType)a=a.name,b=z.cdn,b=b.length>a.length?!1:0==a.lastIndexOf(b,0);return b}).map(function(a){return a.name}),d=b.active;d.postMessage&&d.postMessage(JSON.stringify(E({type:"AMP__FIRST-VISIT-CACHING",payload:c})))}}
function ma(a,b){var c=b.document,d=[].map.call(c.querySelectorAll("a[data-rel=prefetch]"),function(a){return a.href});na(c)?d.forEach(function(a){var b=c.createElement("link");b.setAttribute("rel","prefetch");b.setAttribute("href",a);c.head.appendChild(b)}):(a=a.active,a.postMessage&&a.postMessage(JSON.stringify(E({type:"AMP__LINK-PREFETCH",payload:d}))))}function na(a){var b=a.createElement("link");return b.relList&&b.relList.supports?b.relList.supports("prefetch"):!1}
(function(a){a.registerElement("amp-install-serviceworker",T)})(self.AMP);
})});

//# sourceMappingURL=amp-install-serviceworker-0.1.js.map


}
/*
     FILE ARCHIVED ON 01:28:29 Dec 12, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:57:45 Jul 15, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.778
  exclusion.robots: 0.037
  exclusion.robots.policy: 0.022
  esindex: 0.012
  cdx.remote: 10.574
  LoadShardBlock: 118.484 (6)
  PetaboxLoader3.datanode: 134.939 (7)
  load_resource: 114.811
  PetaboxLoader3.resolve: 46.016
*/