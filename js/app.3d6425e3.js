(function(t){function a(a){for(var n,r,c=a[0],o=a[1],l=a[2],p=0,d=[];p<c.length;p++)r=c[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(a);while(d.length)d.shift()();return s.push.apply(s,l||[]),e()}function e(){for(var t,a=0;a<s.length;a++){for(var e=s[a],n=!0,c=1;c<e.length;c++){var o=e[c];0!==i[o]&&(n=!1)}n&&(s.splice(a--,1),t=r(r.s=e[0]))}return t}var n={},i={app:0},s=[];function r(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=n,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)r.d(e,n,function(a){return t[a]}.bind(null,n));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=a,c=c.slice();for(var l=0;l<c.length;l++)a(c[l]);var u=o;s.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("cd49")},"24cf":function(t){t.exports=JSON.parse('{"icns":[{"id":"0","p":"https://twitter.com/StatuesOfSM","s":"fab","c":"fab fa-twitter"},{"id":"1","p":"https://www.instagram.com/StatuesOfSM/","s":"fab","c":"fab fa-instagram"},{"id":"2","p":"https://statuesofsinkingmen.bandcamp.com/","s":"fab","c":"fab fa-bandcamp"},{"id":"3","p":"https://www.youtube.com/channel/UCnGE-cRl4ty1_dZEVVJNpEg?view_as=subscriber","s":"fab","c":"fab fa-youtube"}]}')},3654:function(t,a,e){"use strict";var n=e("caba"),i=e.n(n);i.a},"4ffd":function(t,a,e){t.exports=e.p+"img/logo.6984aba9.png"},"7f27":function(t){t.exports=JSON.parse('{"rts":[{"id":"0","p":"/","t":"home"},{"id":"1","p":"/about","t":"about"},{"id":"2","p":"/releases","t":"releases"},{"id":"3","p":"/friends","t":"friends"},{"id":"6","p":"/contact","t":"contact"}]}')},"87b8":function(t,a,e){},"8a69":function(t,a,e){"use strict";var n=e("9633"),i=e.n(n);i.a},9633:function(t,a,e){},caba:function(t,a,e){},cd49:function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Header",{attrs:{ics:t.ic,rts:t.rt}}),e("div",{staticClass:"content",attrs:{id:"content"}},[e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view")],1)],1),e("Footer")],1)},s=[],r=e("d4ec"),c=e("bee2"),o=e("262e"),l=e("2caf"),u=e("9ab4"),p=e("60a3"),d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"header"},[e("Playback"),e("Links",{attrs:{rt:t.rts}}),e("Icons",{attrs:{ic:t.ics}})],1)},f=[],h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"header",attrs:{id:"navbar"}},[e("div",{staticClass:"rt"},t._l(t.rt.rts,(function(a){return e("router-link",{key:a.id,attrs:{to:a.p}},[t._v(t._s(a.t))])})),1)])},b=[],m=function(t){Object(o["a"])(e,t);var a=Object(l["a"])(e);function e(){return Object(r["a"])(this,e),a.apply(this,arguments)}return e}(p["b"]);m=Object(u["a"])([Object(p["a"])({name:"Links",props:{rt:Object}})],m);var v=m,g=v,y=e("2877"),O=Object(y["a"])(g,h,b,!1,null,null,null),j=O.exports,_=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"icn",attrs:{id:"icons"}},t._l(t.ic.icns,(function(t){return e("a",{key:t.id,attrs:{href:t.p}},[e("i",{class:t.c})])})),0)},k=[],w=function(t){Object(o["a"])(e,t);var a=Object(l["a"])(e);function e(){return Object(r["a"])(this,e),a.apply(this,arguments)}return e}(p["b"]);w=Object(u["a"])([Object(p["a"])({name:"Icons",props:{ic:Object},components:{}})],w);var S=w,C=S,A=Object(y["a"])(C,_,k,!1,null,"7b62a1e2",null),x=A.exports,E=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pb"},[e("button",{on:{click:t.vis}},[e("i",{staticClass:"fas fa-music"})]),e("button",{on:{click:t.prev}},[e("i",{staticClass:"fas fa-backward"})]),e("button",{on:{click:t.pause}},[e("i",{staticClass:"fas",class:t.pbbutton})]),e("button",{on:{click:t.next}},[e("i",{staticClass:"fas fa-forward"})])])},M=[],$=(e("cb29"),e("4160"),e("d81d"),e("159b"),e("e617"),"./music/"),F=2,H=function(){function t(a){var e=this;Object(r["a"])(this,t),this.duration=0,this.pi=0,this.songs=[],this.urls=[],this.vol=0,this.pause=function(){return e.playing.isPlaying()?e.playing.pause():e.playing.play()},this.next=function(){return e.pi<F?e.changeSong(1):e.changeSong(-2)},this.prev=function(){return e.pi>0?e.changeSong(-1):e.changeSong(2)},this.jump=function(t){return e.playing.jump(e.playing.currentTime()+10*t,e.duration-10*t)},this.p=a;for(var n=0;n<4;++n)this.urls[n]=$;this.urls[0]+="Sinking.mp3",this.urls[1]+="Burial_Day.mp3",this.urls[2]+="Criminal.mp3",this.playing=this.preload()}return Object(c["a"])(t,[{key:"play",value:function(t){this.playing.isPlaying()&&this.playing.stop(),void 0!==t&&(this.pi=t),this.playing.play()}},{key:"replay",value:function(){this.playing.stop(),this.playing.play()}},{key:"volume",value:function(t){this.p.masterVolume(t),this.vol=t}},{key:"forward",value:function(){this.jump(1)}},{key:"backward",value:function(){this.jump(-1)}},{key:"mute",value:function(){var t=this.p.getMasterVolume();0!==t?(this.p.masterVolume(0),this.vol=t):(this.p.masterVolume(this.vol),this.vol=0)}},{key:"preload",value:function(){return this.songs[0]=this.p.loadSound(this.urls[0]),this.songs[1]=this.p.loadSound(this.urls[1]),this.songs[2]=this.p.loadSound(this.urls[2]),this.songs[2]}},{key:"changeSong",value:function(t){this.playing.stop(),this.playing=this.songs[this.pi+t],this.duration=this.playing.duration(),this.pi=this.pi+t,this.play()}}]),t}(),P=function(t){Object(o["a"])(e,t);var a=Object(l["a"])(e);function e(){return Object(r["a"])(this,e),a.apply(this,arguments)}return Object(c["a"])(e,[{key:"data",value:function(){return{mp5:null,pback:null,playing:!0,pbbutton:"fa-play"}}},{key:"mounted",value:function(){var t,a,e,n,i=this,s=function(s){s.setup=function(){var e=s.createCanvas(s.windowWidth,s.windowHeight,s.WEBGL);e.class("canvas"),e.style("z-index","-50"),e.style("position","absolute"),e.style("top","0"),e.style("left","0"),t=new H(s),a=new p5.FFT,i.pback=t,s.frameRate(24)},s.draw=function(){var t=180;s.frameCount;s.background(10,10,17),a.analyze(),e=a.getOctaveBands(128,120),n=a.logAverages(e);for(var i=0;i<n.length;++i){var r=i*i/1e4;s.noStroke();Math.random();s.fill(n[i]*n[i]*.002,.001*n[i],n[i]*n[i]*.004,n[i]+.05*r),s.rect(3*i-s.width/2,s.height,.05*i*(.05*n[i])*1,2*-s.height)}},s.windowResized=function(){s.resizeCanvas(s.windowWidth,s.windowHeight)}};this.mp5=new p5(s)}},{key:"pause",value:function(){this.pback.pause(),this.playing?(this.playing=!1,this.pbbutton="fa-pause"):(this.playing=!0,this.pbbutton="fa-play")}},{key:"next",value:function(){this.pback.next()}},{key:"prev",value:function(){this.pback.prev()}},{key:"vis",value:function(){["navbad","icons","content","foot"].map((function(t){return document.getElementById(t)})).forEach((function(t){return t?t.style.visibility="hidden"===t.style.visibility?"visible":"hidden":{}}))}}]),e}(p["b"]);P=Object(u["a"])([Object(p["a"])({name:"Playback",props:{},components:{}})],P);var z=P,B=z,T=(e("8a69"),Object(y["a"])(B,E,M,!1,null,"38f61367",null)),N=T.exports,R=function(t){Object(o["a"])(e,t);var a=Object(l["a"])(e);function e(){return Object(r["a"])(this,e),a.apply(this,arguments)}return e}(p["b"]);R=Object(u["a"])([Object(p["a"])({name:"Header",props:{rts:Object,ics:Object},components:{Links:j,Icons:x,Playback:N}})],R);var G=R,I=G,L=Object(y["a"])(I,d,f,!1,null,null,null),D=L.exports,J=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer",attrs:{id:"foot"}},[e("p",[t._v(" Developed by "),e("a",{attrs:{href:"https://github.com/mohfunk"}},[t._v("mohfunk")])])])}],Z=function(t){Object(o["a"])(e,t);var a=Object(l["a"])(e);function e(){return Object(r["a"])(this,e),a.apply(this,arguments)}return e}(p["b"]);Z=Object(u["a"])([Object(p["a"])({name:"Footer"})],Z);var K=Z,W=K,q=Object(y["a"])(W,J,V,!1,null,null,null),Y=q.exports,Q=function(t){Object(o["a"])(n,t);var a=Object(l["a"])(n);function n(){return Object(r["a"])(this,n),a.apply(this,arguments)}return Object(c["a"])(n,[{key:"data",value:function(){return{rt:e("7f27"),ic:e("24cf")}}}]),n}(p["b"]);Q=Object(u["a"])([Object(p["a"])({components:{Header:D,Footer:Y}})],Q);var U=Q,X=U,tt=(e("cf25"),Object(y["a"])(X,i,s,!1,null,null,null)),at=tt.exports,et=e("8c4f"),nt=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},it=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("h1",{staticClass:"title"},[t._v("statues of sinking men")]),e("h3",{staticClass:"title"},[t._v("Embrace The Stage of Sentimental Night")]),e("div",{attrs:{id:"mc_embed_signup"}},[e("form",{staticClass:"validate",attrs:{action:"https://statuesofsinkingmen.us18.list-manage.com/subscribe/post?u=8df26402b4cd749dcb07033ac&id=9c64b173f0",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",target:"_blank",novalidate:""}},[e("div",{attrs:{id:"mc_embed_signup_scroll"}},[e("label",{attrs:{for:"mce-EMAIL"}},[t._v("Subscribe to our mailing list")]),e("input",{staticClass:"email",attrs:{type:"email",value:"",name:"EMAIL",id:"mce-EMAIL",placeholder:"email address",required:""}}),e("div",{staticStyle:{position:"absolute",left:"-5000px"},attrs:{"aria-hidden":"true"}},[e("input",{attrs:{type:"text",name:"b_8df26402b4cd749dcb07033ac_9c64b173f0",tabindex:"-1",value:""}})]),e("div",{staticClass:"clear"},[e("input",{staticClass:"button",attrs:{type:"submit",value:"Subscribe",name:"subscribe",id:"mc-embedded-subscribe"}})])])])])])}],st=function(t){Object(o["a"])(e,t);var a=Object(l["a"])(e);function e(){return Object(r["a"])(this,e),a.apply(this,arguments)}return e}(p["b"]);st=Object(u["a"])([Object(p["a"])({name:"Home",props:{},components:{}})],st);var rt=st,ct=rt,ot=(e("3654"),Object(y["a"])(ct,nt,it,!1,null,null,null)),lt=ot.exports,ut=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},pt=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"about"},[n("div",{staticClass:"det"},[n("img",{staticClass:"logo",staticStyle:{height:"100px"},attrs:{src:e("4ffd")}}),n("p",[t._v(" Statues of Sinking Men are a Jeddah based Electronic/Alternative duo that formed in October 2017. ")])])])}],dt={},ft=Object(y["a"])(dt,ut,pt,!1,null,null,null),ht=ft.exports,bt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"Disco"},[e("Container",{staticClass:"square",attrs:{rts:[{id:"0",t:"Statues Of Sinking Men",d:"Debut Album",p:"https://statuesofsinkingmen.bandcamp.com/album/statues-of-sinking-men",date:"Dec 21st",img:"./assets/img/0.png"},{id:"1",t:"Sinking",d:"Single",p:"https://statuesofsinkingmen.bandcamp.com/track/sinking",date:"Aug 24th",img:"./assets/img/1.png"},{id:"2",t:"Burial Day",d:"Single",p:"https://statuesofsinkingmen.bandcamp.com/track/burial-day",date:"Sep 28th",img:"./assets/img/2.png"},{id:"3",t:"Criminal",d:"Single",p:"https://statuesofsinkingmen.bandcamp.com/track/criminal",date:"Nov 4th",img:"./assets/img/3.png"}]}}),e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view")],1)],1)},mt=[],vt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cont"},t._l(t.rts,(function(a){return e("a",{key:a.id,attrs:{href:a.p}},[e("div",{staticClass:"elem",attrs:{id:a.id}},[e("h1",[t._v(t._s(a.t))]),e("img",{attrs:{src:a.img}}),e("h4",[t._v(t._s(a.d))]),e("h6",[t._v(t._s(a.date))])])])})),0)},gt=[],yt={name:"Con",props:{rts:Array,icn:Array},data:function(){return{msg:null}}},Ot=yt,jt=Object(y["a"])(Ot,vt,gt,!1,null,null,null),_t=jt.exports,kt=function(t){Object(o["a"])(e,t);var a=Object(l["a"])(e);function e(){return Object(r["a"])(this,e),a.apply(this,arguments)}return e}(p["b"]);kt=Object(u["a"])([Object(p["a"])({name:"Releases",components:{Container:_t}})],kt);var wt=kt,St=wt,Ct=Object(y["a"])(St,bt,mt,!1,null,null,null),At=Ct.exports,xt=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},Et=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"Friends"},[e("p",[t._v(" Sara Ali - Rayan Al-Sharief - Faris Al-Sobyani - Hala Tashkandi - Omar Bahabri - Noufing - Abdulrahman Zubailah - Mohammed Fahad - Abdulelah Rashwan - Abdulrahman Al-Ghamdi - Omar Enezi - Fahad Al-Haidari - Sahar Al-Zahrani - Abdulhameed Khan - Yazeed Al-Ghamdi - Aziz Al-Twaijri - Atheer Minwar - Meshael Abu-Alnaja - Mohammed Al-Qadi - Stryfer - Bayan Mashat - Mosaid Khaled - Ghaidaa Al-Ruhaily - Abdullah Fayoumi - Talal Ghazzawi - Khalid Hawari - Muna Hussain - Zara - Noura - Mnassa Community - Osama Abdoh - Suzan Abulkhair - Maryam Omar - Raeda Nahari - Fahad Al-Yafi - Abdulhadi Zubailah - Abdulmajeed Zubailah - Hani Banjari - Basma Mariki - Hasanin - Essam Al-Ghamdi - Mohammed Basheer - Maha Al-Beladi ")])])}],Mt={name:"Friends",components:{}},$t=Mt,Ft=Object(y["a"])($t,xt,Et,!1,null,null,null),Ht=Ft.exports,Pt=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},zt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"contact"},[e("h2",[t._v("Send us anything info@statuesofsinkingmen.com")])])}],Bt={name:"Contact",components:{}},Tt=Bt,Nt=Object(y["a"])(Tt,Pt,zt,!1,null,null,null),Rt=Nt.exports;n["a"].use(et["a"]);var Gt=new et["a"]({base:"/",routes:[{path:"/",name:"home",component:lt},{path:"/about",name:"about",component:ht},{path:"/releases",name:"releases",component:At},{path:"/friends",name:"friends",component:Ht},{path:"/contact",name:"contact",component:Rt}]});e("237d");e("87b8"),n["a"].config.productionTip=!1,new n["a"]({router:Gt,render:function(t){return t(at)}}).$mount("#app")},cf25:function(t,a,e){"use strict";var n=e("fea6"),i=e.n(n);i.a},fea6:function(t,a,e){}});
//# sourceMappingURL=app.3d6425e3.js.map