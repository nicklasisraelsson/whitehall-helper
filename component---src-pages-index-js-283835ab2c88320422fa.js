(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{132:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),r=(n(133),n(32),n(7)),a=n.n(r),s=n(46),l=n.n(s),p={border:"1px black solid",fontSize:"2em",borderRadius:"50%",height:"100px",width:"100px",padding:"10px",margin:"10px",display:"flex",alignItems:"center",justifyContent:"center"},c={cursor:"pointer",display:"inline-block",textAlign:"center",width:"130px"},h=function(e){return o.a.createElement("div",{style:c,onClick:e.onKeep},o.a.createElement("div",null,o.a.createElement("span",null,e.description)),o.a.createElement("div",{style:p},o.a.createElement("span",{style:{color:e.keep?"green":"red"}},e.location)),o.a.createElement("div",null,e.keep?"Reroll":"Keep"))},g=[1,2,3,8,9,10,11,12,13,14,15,16,17,18,28,29,30,31,32,33,34,35,36,48,49,50,51,52,53,54,55,68,69,71,72],u=[5,6,7,23,24,25,26,27,42,43,44,45,46,47,60,61,62,63,64,65,67,77,78,79],L=[117,119,120,121,122,123,134,135,136,137,139,152,153,155,156,159,161,173,175,176,177,178,189],f=[129,130,132,133,142,145,146,147,148,149,150,151,165,168,169,170,171,172,183,185,186,187,188],d=function(e){return e[(t=e.length,Math.floor(Math.random()*Math.floor(t)))];var t},k=function(e){function t(t){var n;return(n=e.call(this,t)||this).state=Object.assign({},n.getLocations(),{keepUL:!1,keepUR:!1,keepLL:!1,keepLR:!1}),n.reRoll=n.reRoll.bind(l()(l()(n))),n.toggleKeepUL=n.toggleKeepUL.bind(l()(l()(n))),n.toggleKeepUR=n.toggleKeepUR.bind(l()(l()(n))),n.toggleKeepLL=n.toggleKeepLL.bind(l()(l()(n))),n.toggleKeepLR=n.toggleKeepLR.bind(l()(l()(n))),n}a()(t,e);var n=t.prototype;return n.getLocations=function(){return{upperLeft:this.state&&this.state.keepUL?this.state.upperLeft:d(g),upperRight:this.state&&this.state.keepUR?this.state.upperRight:d(u),lowerLeft:this.state&&this.state.keepLL?this.state.lowerLeft:d(L),lowerRight:this.state&&this.state.keepLR?this.state.lowerRight:d(f)}},n.toggleKeepUL=function(){this.setState({keepUL:!this.state.keepUL})},n.toggleKeepUR=function(){this.setState({keepUR:!this.state.keepUR})},n.toggleKeepLL=function(){this.setState({keepLL:!this.state.keepLL})},n.toggleKeepLR=function(){this.setState({keepLR:!this.state.keepLR})},n.reRoll=function(){this.setState(this.getLocations())},n.render=function(){return o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("h1",null,"Whitehall helper"),o.a.createElement(h,{description:"Upper left",location:this.state.upperLeft,keep:this.state.keepUL,onKeep:this.toggleKeepUL}),o.a.createElement(h,{description:"Upper right",location:this.state.upperRight,keep:this.state.keepUR,onKeep:this.toggleKeepUR}),o.a.createElement(h,{description:"Lower left",location:this.state.lowerLeft,keep:this.state.keepLL,onKeep:this.toggleKeepLL}),o.a.createElement(h,{description:"Lower right",location:this.state.lowerRight,keep:this.state.keepLR,onKeep:this.toggleKeepLR}),o.a.createElement("div",null,o.a.createElement("button",{onClick:this.reRoll},"Reroll")))},t}(o.a.Component);t.default=function(){return o.a.createElement(k,null)}},133:function(e,t,n){var i=n(6);i(i.P,"Function",{bind:n(134)})},134:function(e,t,n){"use strict";var i=n(15),o=n(10),r=n(72),a=[].slice,s={};e.exports=Function.bind||function(e){var t=i(this),n=a.call(arguments,1),l=function(){var i=n.concat(a.call(arguments));return this instanceof l?function(e,t,n){if(!(t in s)){for(var i=[],o=0;o<t;o++)i[o]="a["+o+"]";s[t]=Function("F,a","return new F("+i.join(",")+")")}return s[t](e,n)}(t,i.length,i):r(t,i,e)};return o(t.prototype)&&(l.prototype=t.prototype),l}}}]);
//# sourceMappingURL=component---src-pages-index-js-283835ab2c88320422fa.js.map