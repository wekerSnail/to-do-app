webpackJsonp([1],{"18VW":function(t,e){},"24MO":function(t,e){},KHIT:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={};n.d(i,"sideState",function(){return F}),n.d(i,"nowItem",function(){return H}),n.d(i,"list",function(){return W}),n.d(i,"firstList",function(){return y}),n.d(i,"itemIdex",function(){return D});var o={};n.d(o,"someThing",function(){return M});var s=n("7+uW"),a=n("Dd8w"),c=n.n(a),l=n("NYxO"),r=["icon-calendar","icon-friendadd","icon-remind","icon-qrcode","icon-pic","icon-form","icon-question","icon-settings","icon-wang","icon-notification","icon-emoji","icon-favor"],d=["random-color1","random-color2","random-color3","random-color4","random-color5"];function u(t,e){return Math.floor(Math.random()*(e-t+1)+t)}var h={props:{title:{required:!1,default:"新增清单",type:String},hint:{required:!1,default:"无标题清单",type:String},show:{required:!0,default:!1,type:Boolean}},data:function(){return{allShow:!1,showPop:!1,data:""}},methods:c()({cancel:function(){this.showPop=!1,this.$emit("cancel")},ok:function(){this.showPop=!1;var t,e={title:this.data,icon:(t=u(0,r.length),r[t]+" "+function(){var t=u(0,d.length);return d[t]}()),list:[]};this.data="",this.addList(e)},after:function(){this.allShow=!1}},Object(l.c)({addList:"ADD_LIST"})),watch:{show:function(t){this.showPop=t},showPop:function(){this.$emit("popState",this.showPop),this.showPop&&(this.allShow=!0)}},created:function(){this.showPop=this.show}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.allShow,expression:"allShow"}],staticClass:"popup"},[n("div",{staticClass:"mask"}),t._v(" "),n("transition",{attrs:{name:"popup"},on:{afterLeave:t.after}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showPop,expression:"showPop"}],staticClass:"content"},[n("h3",{staticClass:"name fontB"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"mid"},[n("i",{staticClass:"iconfont addicon icon-roundadd theme-color"}),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.data,expression:"data",modifiers:{trim:!0}}],staticClass:"text",attrs:{placeholder:t.hint,type:"text"},domProps:{value:t.data},on:{input:function(e){e.target.composing||(t.data=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),n("div",{staticClass:"btnPanel"},[n("button",{staticClass:"cancel fontB font-color",on:{click:t.cancel}},[t._v("取消")]),n("button",{staticClass:"ok fontB theme-color",on:{click:t.ok}},[t._v("确认")])])])])],1)},staticRenderFns:[]};var p=n("VU/8")(h,m,!1,function(t){n("18VW")},"data-v-760ff836",null).exports,f={data:function(){return{titles:[],active:0}},methods:{selectItem:function(t,e){this.active=e,this.$emit("selected",t)}},computed:c()({},Object(l.b)(["list"])),watch:{list:function(){this.titles=this.list}},created:function(){this.titles=this.list}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title-list"},[n("ul",t._l(t.titles,function(e,i){return n("li",{key:i,staticClass:"eachTitle",class:t.active==i?"active":"",on:{click:function(n){t.selectItem(e,i)}}},[n("i",{staticClass:"iconfont fontS",class:e.icon}),t._v(" "),n("span",{staticClass:"title-name"},[t._v(t._s(e.title))]),t._v(" "),n("span",{staticClass:"title-num"},[t._v(t._s(e.list.length))])])}))])},staticRenderFns:[]};var v=n("VU/8")(f,w,!1,function(t){n("bd7H")},"data-v-10c7cbde",null).exports,I=n("GQaK"),S={props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},data:{type:[Array,Object],default:null},listenScroll:{type:Boolean,default:!1}},data:function(){return{}},mounted:function(){var t=this;setTimeout(function(){t._initScroll()},20)},methods:{_initScroll:function(){var t=this.$refs.scrollWrap;if(t&&(this.scroll=new I.a(t,{probeType:this.probeType,click:this.click}),this.listenScroll)){var e=this;this.scroll.on("scroll",function(t){e.$emit("scroll",t)})}},enable:function(){this.scroll&&this.scroll.enable()},disable:function(){this.scroll&&this.scroll.disable()},refresh:function(){this.scroll&&this.scroll.refresh()},scrollTo:function(){this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},scrollToElement:function(){this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)}},watch:{data:function(){var t=this;setTimeout(function(){t.refresh()},20)}}},A={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"scrollWrap"},[this._t("default")],2)},staticRenderFns:[]},E=n("VU/8")(S,A,!1,null,null,null).exports,T={data:function(){return{mp3:"https://raw.githubusercontent.com/wekerSnail/react-music/master/datas/dingdong.mp3"}},computed:c()({},Object(l.b)(["nowItem"])),methods:c()({selectIt:function(t,e){t.state||this.$refs.mp3.play(),this.setItem(e)},remove:function(t,e){this.delItem(e)}},Object(l.c)({setItem:"SET_ITEM_LIST",delItem:"REMOVE_ITEM_LIST"}))},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"note-list"},t._l(t.nowItem.list,function(e,i){return n("li",{key:i,staticClass:"each-note"},[n("i",{staticClass:"iconfont icon",class:e.state?"icon-roundcheckfill green":"icon-round theme-color",on:{click:function(n){t.selectIt(e,i)}}}),n("span",{staticClass:"text",class:e.state?"decoration":""},[t._v(t._s(e.content))]),n("i",{staticClass:"icon iconfont icon-icon-",on:{click:function(n){t.remove(e,i)}}})])})),t._v(" "),n("audio",{ref:"mp3",staticStyle:{display:"none"},attrs:{src:t.mp3}})])},staticRenderFns:[]};var C=n("VU/8")(T,b,!1,function(t){n("rmSw")},"data-v-2bfd9a92",null).exports,R={props:{show:{required:!0,default:!1,type:Boolean}},data:function(){return{allShow:!1,showPop:!1,data:""}},methods:c()({del:function(){this.$emit("doit"),this.showPop=!1},close:function(){this.showPop=!1},after:function(){this.allShow=!1}},Object(l.c)({addList:"DEL_LIST"})),watch:{show:function(t){this.showPop=t},showPop:function(){this.showPop&&(this.allShow=!0),this.$emit("popState",this.showPop)}},created:function(){this.showPop=this.show}},N={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.allShow,expression:"allShow"}],staticClass:"popup"},[n("div",{staticClass:"mask",on:{click:t.close}}),t._v(" "),n("transition",{attrs:{name:"popup"},on:{afterLeave:t.after}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showPop,expression:"showPop"}],staticClass:"more-panel"},[n("div",{staticClass:"eachMore",on:{click:t.del}},[n("i",{staticClass:"icon iconfont icon-icon- gray"}),t._v(" "),n("span",[t._v("删除清单")])])])])],1)},staticRenderFns:[]};var V={data:function(){return{nowInput:"",btnColor:!1,addShow:!1,scrollY:0,probeType:3,showTitle:"",moreShow:!1}},components:{noteList:C,scroll:E,delPopup:n("VU/8")(R,N,!1,function(t){n("QGFA")},"data-v-1d1286ce",null).exports},methods:c()({del:function(){this.delList(this.itemIdex)},changeState:function(t){this.moreShow=t},more:function(){this.moreShow=!0},menu:function(){this.setSideState(!0)},addNote:function(){this.addShow=!0},pushNote:function(){this.nowInput&&(this.addList({state:!1,content:this.nowInput}),this.nowInput="",this.addShow=!1)},scroll:function(t){this.scrollY=t.y}},Object(l.c)({setSideState:"SET_SIDE_STATE",addList:"ADD_ITEM_LIST",setFirstList:"SET_FIRST_LIST",delList:"DEL_LIST",resetNowItem:"RESET_NOW_ITEM"})),computed:c()({},Object(l.b)(["nowItem","list","itemIdex"])),watch:{list:function(){this.resetNowItem()},itemIdex:function(){this.$refs.top.style.height=this.topHeight+"px",this.$refs.title.style.transform="",this.showTitle=""},nowInput:function(t){this.btnColor=!!t},scrollY:function(t){var e=Math.max(this.minTransalteY,t),n=-e/this.topHeight/6;this.$refs.title.style.transform="translate3d(0,"+e+"px,0) scale("+(1-n)+","+(1-n)+")";var i=0;this.showTitle="",t<this.minTransalteY&&(i=10,this.showTitle=this.nowItem.title),this.$refs.top.style.height=this.topHeight+t+"px",this.$refs.topTitle.style.zIndex=i}},created:function(){this.setFirstList(0)},mounted:function(){this.topHeight=this.$refs.top.clientHeight,this.minTransalteY=-this.topHeight+this.$refs.topTitle.clientHeight}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"notes"},[n("del-popup",{attrs:{show:t.moreShow},on:{popState:t.changeState,doit:t.del}}),t._v(" "),n("div",{ref:"top",staticClass:"top theme-background"},[n("div",{ref:"topTitle",staticClass:"top-btn-panel theme-background"},[n("button",{staticClass:"iconfont icon-sort",on:{click:t.menu}}),t._v(" "),n("span",{staticClass:"myday"},[t._v(t._s(t.showTitle))]),t._v(" "),n("button",{staticClass:"iconfont icon-moreandroid",on:{click:t.more}})]),t._v(" "),n("h1",{ref:"title",staticClass:"title"},[t._v(t._s(t.nowItem.title))])]),t._v(" "),n("div",{staticClass:"bottom"}),t._v(" "),n("div",{staticClass:"mian",staticStyle:{top:"35%"}},[n("scroll",{staticClass:"note-warrps",attrs:{data:t.nowItem,listenScroll:!0,probeType:t.probeType},on:{scroll:t.scroll}},[n("note-list"),t._v(" "),n("transition",{attrs:{name:"add"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.addShow,expression:"addShow"}],staticClass:"add-panel"},[n("i",{staticClass:"icon iconfont icon-round gray"}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.nowInput,expression:"nowInput",modifiers:{trim:!0}}],staticClass:"add-text",attrs:{placeholder:"添加待办事项",type:"text"},domProps:{value:t.nowInput},on:{input:function(e){e.target.composing||(t.nowInput=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),n("i",{staticClass:"icon iconfont icon-squarecheckfill",class:t.btnColor?"theme-color":"gray",on:{click:t.pushNote}})])])],1)],1),t._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:!t.addShow,expression:"!addShow"}],staticClass:"iconfont icon-roundaddfill addBtn theme-color",on:{click:t.addNote}})],1)},staticRenderFns:[]};var q={components:{Popup:p,titleList:v,Notes:n("VU/8")(V,g,!1,function(t){n("24MO")},"data-v-0d74847d",null).exports},data:function(){return{avata:n("Vmam"),name:"to-do",detail:"一个单纯的todo-list",pop:!1,allShow:!1}},methods:c()({openPop:function(){this.pop=!0,this.showSide=!1},popState:function(t){this.pop=t},after:function(){this.allShow=!1},btnCancel:function(){this.setSideState(!0)},getVal:function(){this.setSideState(!0)},close:function(){this.setSideState(!1)},selected:function(t,e){this.setSideState(!1),this.setNowItem(t)}},Object(l.c)({setSideState:"SET_SIDE_STATE",setNowItem:"SET_NOW_ITEM"})),watch:{sideState:function(t){t&&(this.allShow=!0)}},computed:c()({},Object(l.b)(["sideState"]))},P={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sideTab"},[n("transition",{attrs:{name:"mask"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.allShow,expression:"allShow"}],staticClass:"mask",on:{click:t.close}})]),t._v(" "),n("transition",{attrs:{name:"side"},on:{afterLeave:t.after}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.sideState,expression:"sideState"}],staticClass:"sidecontent"},[n("div",{staticClass:"top"},[n("div",{staticClass:"imgPanel"},[n("img",{staticClass:"avata",attrs:{src:t.avata}})]),t._v(" "),n("h5",{staticClass:"text"},[t._v(t._s(t.name))]),t._v(" "),n("h6",{staticClass:"text"},[t._v(t._s(t.detail))])]),t._v(" "),n("div",{staticClass:"content"},[n("title-list",{on:{selected:t.selected}})],1),t._v(" "),n("div",{staticClass:"bottom"},[n("button",{staticClass:"addList",on:{click:t.openPop}},[n("i",{staticClass:"theme-color iconS iconfont icon-add"}),t._v(" "),n("span",{staticClass:"theme-color"},[t._v("新建清单")])])])])]),t._v(" "),n("Notes"),t._v(" "),n("Popup",{attrs:{show:t.pop},on:{popState:t.popState,cancel:t.btnCancel,getVal:t.getVal}})],1)},staticRenderFns:[]};var x={name:"App",components:{sideTab:n("VU/8")(q,P,!1,function(t){n("UlNJ")},"data-v-25a94503",null).exports},created:function(){var t=document.createElement("style");function e(){var e=1*document.documentElement.clientWidth/10;t.innerHTML="html{font-size:"+e+"px!important;}"}document.documentElement.firstElementChild.appendChild(t),e(),window.onresize=e}},j={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("side-tab")],1)},staticRenderFns:[]};var B,O=n("VU/8")(x,j,!1,function(t){n("KHIT")},null,null).exports,L={sideState:!1,nowItem:{},list:[{title:"我的一天",icon:"icon-pic random-color1",list:[{state:!1,content:"我的吃饭"},{state:!1,content:"写代码了"},{state:!1,content:"我的吃饭"},{state:!1,content:"写代码了"},{state:!1,content:"我的吃饭"},{state:!1,content:"写代码了"},{state:!1,content:"我的吃饭"},{state:!1,content:"写代码了"},{state:!1,content:"我的吃饭"},{state:!1,content:"写代码了"},{state:!1,content:"我的吃饭"},{state:!1,content:"写代码了"}]},{title:"待办事项",icon:"icon-remind random-color4",list:[{state:!1,content:"我睡觉了"},{state:!1,content:"改bug了"}]}]},z=n("bOdI"),k=n.n(z),U=(B={},k()(B,"SET_SIDE_STATE",function(t,e){t.sideState=e}),k()(B,"SET_NOW_ITEM",function(t,e){t.nowItem=e}),k()(B,"SET_ITEM_LIST",function(t,e){t.nowItem.list[e].state=!t.nowItem.list[e].state}),k()(B,"ADD_ITEM_LIST",function(t,e){t.nowItem.list.push(e)}),k()(B,"REMOVE_ITEM_LIST",function(t,e){t.nowItem.list.splice(e,1)}),k()(B,"ADD_LIST",function(t,e){t.list.push(e)}),k()(B,"SET_FIRST_LIST",function(t,e){t.list.length>0?t.nowItem=t.list[e]:t.nowItem={}}),k()(B,"DEL_LIST",function(t,e){t.list.length>0?t.list.splice(e,1):t.list={}}),k()(B,"RESET_NOW_ITEM",function(t){t.list.length>0?t.nowItem=t.list[0]:t.nowItem={}}),B),F=function(t){return t.sideState},H=function(t){return t.nowItem},W=function(t){return t.list},y=function(t){return t.list.length>0?t.list[0]:{}},D=function(t){return t.list.indexOf(t.nowItem)},M=function(){};n("sax8");s.a.use(l.a);var X=new l.a.Store({state:L,getters:i,actions:o,mutations:U,strict:!1,plugins:[]});s.a.config.productionTip=!1,new s.a({el:"#app",store:X,components:{App:O},template:"<App/>"})},QGFA:function(t,e){},UlNJ:function(t,e){},Vmam:function(t,e){t.exports="data:image/jpeg;base64,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"},bd7H:function(t,e){},rmSw:function(t,e){}},["NHnr"]);