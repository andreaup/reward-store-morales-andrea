(this["webpackJsonpnews-morales-andrea"]=this["webpackJsonpnews-morales-andrea"]||[]).push([[0],{10:function(e,r,n){e.exports=n(21)},21:function(e,r,n){"use strict";n.r(r);var t=n(0),a=n.n(t),o=n(3),l=n(2),s=n(1),c=Object(s.c)({repos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"LOADING_SUCCESS":return r.repos;case"CLEAR_REPOS":return[];default:return e}},loadingError:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"LOADING_ERROR":return r.hasErrored;default:return e}},loadingInProgress:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"LOADING_IN_PROGRESS":return r.isLoading;default:return e}}}),i=n(9),u=function(e){return function(r){return function(n){var t;return console.groupCollapsed("dispatching",n.type),console.log("prev state: ",e.getState()),console.log("action: ",n),t=r(n),console.log("next state: ",e.getState()),console.groupEnd(),t}}},d=function(){return Object(s.d)(c,Object(s.a)(u,i.a))},g=function(e){var r=e.repos,n=e.hasError,t=e.isLoading;return n?a.a.createElement("div",{className:"container"},a.a.createElement("h6",null,"Sorry! There was an error loading the repos.")):t?a.a.createElement("div",{className:"container"},a.a.createElement("h6",null,"Loading\u2026")):a.a.createElement("div",{className:"container"},r.map((function(e,r){return a.a.createElement("div",{className:"row border border-info rounded bg-light p-2 m-1",key:r},a.a.createElement("div",{className:"ml-2"},a.a.createElement("a",{href:e.html_url,className:"text-primary",target:"blank"},e.name),a.a.createElement("span",{className:"badge badge-pill badge-secondary ml-2"},e.stargazers_count)))})))},m=Object(l.b)((function(e){return{repos:e.repos,hasError:e.loadingError,isLoading:e.loadingInProgress}}),null)(g),p=Object(l.b)((function(e){return{repos:e.repos,hasError:e.loadingError,isLoading:e.loadingInProgress}}),null)(g),E=function(){return a.a.createElement("div",null,a.a.createElement(m,{user:"facebook"}),a.a.createElement(p,null))},h=d();Object(o.render)(a.a.createElement(l.a,{store:h},a.a.createElement(E,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.52a837aa.chunk.js.map