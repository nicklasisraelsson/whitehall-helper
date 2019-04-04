(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{132:function(e,t,i){"use strict";i.r(t);var n=i(0),r=i.n(n),o=(i(32),i(133),i(7)),d=i.n(o),a=i(47),p=i.n(a),l={border:"1px black solid",fontSize:"2em",borderRadius:"50%",height:"100px",width:"100px",padding:"10px",margin:"10px",display:"flex",alignItems:"center",justifyContent:"center"},s={cursor:"pointer",display:"inline-block",textAlign:"center",width:"130px"},x=function(e){return r.a.createElement("div",{style:s,onClick:e.onKeep},r.a.createElement("div",null,r.a.createElement("span",null,e.description)),r.a.createElement("div",{style:l},r.a.createElement("span",{style:{color:e.location.keep?"green":"red"}},e.location.id)),r.a.createElement("div",null,e.location.keep?"Reroll":"Keep"))},y={upperLeft:[{id:1,x:90,y:68},{id:2,x:279,y:51},{id:3,x:381,y:58},{id:8,x:50,y:123},{id:9,x:116,y:85},{id:10,x:132,y:132},{id:11,x:160,y:97},{id:12,x:194,y:94},{id:13,x:224,y:153},{id:14,x:257,y:95},{id:15,x:283,y:156},{id:16,x:301,y:111},{id:17,x:340,y:113},{id:18,x:377,y:120},{id:28,x:71,y:197},{id:29,x:124,y:173},{id:30,x:129,y:223},{id:31,x:176,y:231},{id:32,x:214,y:198},{id:33,x:260,y:209},{id:34,x:311,y:213},{id:35,x:360,y:212},{id:36,x:392,y:244},{id:48,x:78,y:254},{id:49,x:102,y:283},{id:50,x:104,y:321},{id:51,x:177,y:304},{id:52,x:243,y:335},{id:53,x:258,y:297},{id:54,x:284,y:266},{id:55,x:311,y:329},{id:68,x:89,y:378},{id:69,x:145,y:397},{id:71,x:273,y:386},{id:72,x:356,y:349}],upperRight:[{id:5,x:610,y:56},{id:6,x:717,y:57},{id:7,x:881,y:83},{id:23,x:656,y:91},{id:24,x:713,y:148},{id:25,x:792,y:98},{id:26,x:898,y:163},{id:27,x:961,y:112},{id:42,x:618,y:189},{id:43,x:676,y:246},{id:44,x:692,y:192},{id:45,x:789,y:171},{id:46,x:793,y:233},{id:47,x:951,y:200},{id:60,x:667,y:315},{id:61,x:728,y:318},{id:62,x:737,y:268},{id:63,x:800,y:312},{id:64,x:880,y:317},{id:65,x:904,y:276},{id:67,x:951,y:283},{id:77,x:621,y:402},{id:78,x:691,y:396},{id:79,x:768,y:391}],lowerLeft:[{id:117,x:84,y:655},{id:119,x:172,y:641},{id:120,x:253,y:670},{id:121,x:267,y:633},{id:122,x:359,y:645},{id:123,x:376,y:602},{id:134,x:131,y:720},{id:135,x:190,y:745},{id:136,x:233,y:760},{id:137,x:287,y:719},{id:139,x:358,y:695},{id:152,x:55,y:833},{id:153,x:94,y:777},{id:155,x:133,y:782},{id:156,x:170,y:789},{id:159,x:254,y:845},{id:161,x:372,y:841},{id:173,x:64,y:935},{id:175,x:193,y:903},{id:176,x:272,y:921},{id:177,x:330,y:877},{id:178,x:398,y:873},{id:189,x:129,y:948}],lowerRight:[{id:129,x:615,y:644},{id:130,x:652,y:607},{id:132,x:879,y:633},{id:133,x:919,y:624},{id:142,x:631,y:720},{id:145,x:814,y:715},{id:146,x:843,y:756},{id:147,x:855,y:697},{id:148,x:885,y:737},{id:149,x:901,y:681},{id:150,x:916,y:718},{id:151,x:953,y:700},{id:165,x:620,y:819},{id:168,x:809,y:797},{id:169,x:852,y:827},{id:170,x:887,y:808},{id:171,x:904,y:848},{id:172,x:943,y:776},{id:183,x:613,y:900},{id:185,x:704,y:928},{id:186,x:795,y:886},{id:187,x:832,y:894},{id:188,x:870,y:924}]},c=(i(74),i(75),i(135),i(137)),h=i.n(c),u=new Image;u.src=h.a;var g=function(e){function t(){return e.apply(this,arguments)||this}d()(t,e);var i=t.prototype;return i.componentDidMount=function(){this.updateCanvas()},i.componentDidUpdate=function(){this.updateCanvas()},i.updateCanvas=function(){var e=this.refs.canvas.getContext("2d");e.globalAlpha=1,e.drawImage(u,0,0),e.globalAlpha=.5,this.props.positions.forEach(function(t){!function(e,t){e.beginPath(),e.arc(t.x,t.y,15,0,2*Math.PI,!0),e.fillStyle=t.keep?"green":"red",e.fill()}(e,t)})},i.render=function(){return r.a.createElement("div",{style:{paddingTop:"20px"}},r.a.createElement("canvas",{ref:"canvas",width:"1024px",height:"1024px"}))},t}(r.a.Component),f=function(e){return e[(t=e.length,Math.floor(Math.random()*Math.floor(t)))];var t},L=function(e){function t(t){var i;return(i=e.call(this,t)||this).state={upperLeft:f(y.upperLeft),upperRight:f(y.upperRight),lowerLeft:f(y.lowerLeft),lowerRight:f(y.lowerRight)},i.reRoll=i.reRoll.bind(p()(p()(i))),i.toggleKeepUL=i.toggleKeepUL.bind(p()(p()(i))),i.toggleKeepUR=i.toggleKeepUR.bind(p()(p()(i))),i.toggleKeepLL=i.toggleKeepLL.bind(p()(p()(i))),i.toggleKeepLR=i.toggleKeepLR.bind(p()(p()(i))),i}d()(t,e);var i=t.prototype;return i.getLocations=function(){return{upperLeft:this.state.upperLeft.keep?this.state.upperLeft:f(y.upperLeft),upperRight:this.state.upperRight.keep?this.state.upperRight:f(y.upperRight),lowerLeft:this.state.lowerLeft.keep?this.state.lowerLeft:f(y.lowerLeft),lowerRight:this.state.lowerRight.keep?this.state.lowerRight:f(y.lowerRight)}},i.toggleKeepUL=function(){this.setState({upperLeft:Object.assign({},this.state.upperLeft,{keep:!this.state.upperLeft.keep})})},i.toggleKeepUR=function(){this.setState({upperRight:Object.assign({},this.state.upperRight,{keep:!this.state.upperRight.keep})})},i.toggleKeepLL=function(){this.setState({lowerLeft:Object.assign({},this.state.lowerLeft,{keep:!this.state.lowerLeft.keep})})},i.toggleKeepLR=function(){this.setState({lowerRight:Object.assign({},this.state.lowerRight,{keep:!this.state.lowerRight.keep})})},i.reRoll=function(){this.setState(this.getLocations())},i.render=function(){return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,"Whitehall helper"),r.a.createElement(x,{description:"Upper left",location:this.state.upperLeft,onKeep:this.toggleKeepUL}),r.a.createElement(x,{description:"Upper right",location:this.state.upperRight,onKeep:this.toggleKeepUR}),r.a.createElement(x,{description:"Lower left",location:this.state.lowerLeft,onKeep:this.toggleKeepLL}),r.a.createElement(x,{description:"Lower right",location:this.state.lowerRight,onKeep:this.toggleKeepLR}),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.reRoll},"Reroll")),r.a.createElement(g,{positions:[this.state.upperLeft,this.state.upperRight,this.state.lowerLeft,this.state.lowerRight]}))},t}(r.a.Component);t.default=function(){return r.a.createElement(L,null)}},133:function(e,t,i){var n=i(6);n(n.P,"Function",{bind:i(134)})},134:function(e,t,i){"use strict";var n=i(15),r=i(10),o=i(73),d=[].slice,a={};e.exports=Function.bind||function(e){var t=n(this),i=d.call(arguments,1),p=function(){var n=i.concat(d.call(arguments));return this instanceof p?function(e,t,i){if(!(t in a)){for(var n=[],r=0;r<t;r++)n[r]="a["+r+"]";a[t]=Function("F,a","return new F("+n.join(",")+")")}return a[t](e,i)}(t,n.length,n):o(t,n,e)};return r(t.prototype)&&(p.prototype=t.prototype),p}},135:function(e,t,i){var n=i(6);n(n.P,"Array",{fill:i(136)}),i(46)("fill")},136:function(e,t,i){"use strict";var n=i(25),r=i(72),o=i(24);e.exports=function(e){for(var t=n(this),i=o(t.length),d=arguments.length,a=r(d>1?arguments[1]:void 0,i),p=d>2?arguments[2]:void 0,l=void 0===p?i:r(p,i);l>a;)t[a++]=e;return t}},137:function(e,t,i){e.exports=i.p+"static/whitehall-map-d45b4abf0145a93671d386b5ca04a111.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-b8790c3403225e36ddc8.js.map