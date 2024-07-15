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

(self.AMP=self.AMP||[]).push({n:"amp-dynamic-css-classes",v:"1911191835190",f:(function(AMP,_){
function h(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(d){return b}};var l=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var m=self.__AMP_LOG;var n=Object.prototype.hasOwnProperty;(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0,action:!0});function p(a,b){if(a.__AMP__EXPERIMENT_TOGGLES)var d=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);d=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var e in a.AMP_CONFIG){var c=a.AMP_CONFIG[e];"number"===typeof c&&0<=c&&1>=c&&(d[e]=Math.random()<c)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(e=a.AMP_CONFIG["allow-doc-opt-in"],c=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){c=
c.getAttribute("content").split(",");for(var g=0;g<c.length;g++)-1!=e.indexOf(c[g])&&(d[c[g]]=!0)}Object.assign(d,q(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){e=a.AMP_CONFIG["allow-url-opt-in"];c=a.location.originalHash||a.location.hash;a=Object.create(null);if(c)for(var f;f=l.exec(c);)g=h(f[1],f[1]),f=f[2]?h(f[2].replace(/\+/g," "),f[2]):"",a[g]=f;for(c=0;c<e.length;c++)g=a["e-"+e[c]],"1"==g&&(d[e[c]]=!0),"0"==g&&(d[e[c]]=!1)}}var k=
d;return!!k[b]}function q(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(c){if(m.dev)a=m.dev;else throw Error("failed to call initLogConstructor");a.warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var d=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var e=0;e<d.length;e++)0!=d[e].length&&("-"==d[e][0]?a[d[e].substr(1)]=!1:a[d[e]]=!0);return a};var r={},t=(r["ampdoc-fie"]={isTrafficEligible:function(){return!0},branches:[["21065001"],["21065002"]]},r);function u(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return v(a,b)}function w(a){var b=x(a);b=y(b);return v(b,"viewer")}function x(a){return a.nodeType?u((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function y(a){a=x(a);return a.isSingleDoc()?a.win:a}function v(a,b){z(a,b);var d=a.__AMP_SERVICES;d||(d=a.__AMP_SERVICES={});var e=d;a=e[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
function z(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function A(a){var b=a.split("."),d="";return b.reduceRight(function(a,b){d&&(b+="."+d);d=b;a.push(b);return a},[])}
function B(a){var b;if(b=w(a).getUnconfirmedReferrerUrl()){var d=a.getHeadNode(),e=d.ownerDocument.defaultView,c=e.__AMP_TOP||(e.__AMP_TOP=e),g=e!=c;if(p(c,"ampdoc-fie")){c.__AMP_EXPERIMENT_BRANCHES=c.__AMP_EXPERIMENT_BRANCHES||{};for(var f in t)if(n.call(t,f)&&!n.call(c.__AMP_EXPERIMENT_BRANCHES,f))if(!t[f].isTrafficEligible||!t[f].isTrafficEligible(c))c.__AMP_EXPERIMENT_BRANCHES[f]=null;else if(!c.__AMP_EXPERIMENT_BRANCHES[f]&&p(c,f)){var k=t[f].branches;c.__AMP_EXPERIMENT_BRANCHES[f]=k[Math.floor(Math.random()*
k.length)]||null}c="21065002"===(c.__AMP_EXPERIMENT_BRANCHES?c.__AMP_EXPERIMENT_BRANCHES["ampdoc-fie"]:null)}else c=!1;g&&!c?d=z(e,"url")?v(e,"url"):null:(d=x(d),d=y(d),d=z(d,"url")?v(d,"url"):null);b=d.parse(b).hostname}else b="";return"t.co"===b?A("twitter.com"):!b&&/Pinterest/.test(a.win.navigator.userAgent)?A("www.pinterest.com"):A(b)}function C(a,b){a.isBodyAvailable()?D(a.getBody(),b):a.waitForBodyOpen().then(function(a){return D(a,b)})}
function D(a,b){var d=a.classList;for(a=0;a<b.length;a++)d.add(b[a])}function E(a){var b=B(a).map(function(a){return"amp-referrer-"+a.replace(/\./g,"-")});u(a.win,"vsync").mutate(function(){C(a,b)})}function F(a){var b=w(a);b.isEmbedded()&&u(a.win,"vsync").mutate(function(){C(a,["amp-viewer"])})}function G(a){E(a);F(a)}G.prototype.whenReady=function(){return Promise.resolve()};(function(a){a.registerServiceForDoc("amp-dynamic-css-classes",G)})(self.AMP);
})});

//# sourceMappingURL=amp-dynamic-css-classes-0.1.js.map


}
/*
     FILE ARCHIVED ON 23:03:22 Dec 11, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:58:12 Jul 15, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.445
  exclusion.robots: 0.024
  exclusion.robots.policy: 0.014
  esindex: 0.01
  cdx.remote: 17.379
  LoadShardBlock: 145.963 (3)
  PetaboxLoader3.datanode: 190.917 (5)
  PetaboxLoader3.resolve: 322.215 (3)
  load_resource: 424.966 (2)
*/