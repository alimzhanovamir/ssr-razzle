module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=5)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("http")},function(e,t){e.exports=require("react-dom/server")},function(e,t,n){e.exports=n(6)},function(e,t,n){"use strict";n.r(t);var r=n(3),o=n.n(r),c=n(9).default;o.a.createServer(c).listen(3e3,(function(){console.log("🚀 started")})).on("error",(function(e){console.log(e)}))},function(e,t){e.exports={}},function(e){e.exports=JSON.parse('{"client":{"css":"/static/css/bundle.9823d995.css","js":"/static/js/bundle.4b62ffd3.js"},"":{"json":"/..\\\\chunks.json","txt":"/static/js/bundle.4b62ffd3.js.LICENSE.txt"}}')},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=n(1),u=function(){return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("h2",null,"Welcome to home page")),o.a.createElement(c.Link,{to:"/contacts"},"Contacts"))},a=function(){return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("h2",null,"Contacts")),o.a.createElement(c.Link,{to:"/"},"Home"))},i=(n(7),function(){return o.a.createElement(c.Switch,null,o.a.createElement(c.Route,{exact:!0,path:"/",component:u}),o.a.createElement(c.Route,{exact:!0,path:"/contacts",component:a}))}),l=n(2),s=n.n(l),d=n(4),f=n(8),p=s()();p.disable("x-powered-by").use(s.a.static("D:\\work\\TB\\tutkovbudkov\\build\\public")).get("/*",(function(e,t){var n={},r=Object(d.renderToString)(o.a.createElement(c.StaticRouter,{context:n,location:e.url},o.a.createElement(i,null)));n.url?t.redirect(n.url):t.status(200).send('<!doctype html>\n          <html lang="">\n          <head>\n            <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n            <meta charset="utf-8" />\n            <title>Tutkovbudkov</title>\n            <meta name="viewport" content="width=device-width, initial-scale=1">\n            '.concat(f.client.css?'<link rel="stylesheet" href="'.concat(f.client.css,'">'):"","\n            ").concat('<script src="'.concat(f.client.js,'" defer><\/script>'),'\n          </head>\n          <body>\n            <div id="root">').concat(r,"</div>\n          </body>\n      </html>"))}));t.default=p}]);
//# sourceMappingURL=server.js.map