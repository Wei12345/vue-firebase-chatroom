webpackJsonp([2],{270:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}n(523);var a=n(101),r=o(a),s=n(299),i=o(s),u=n(296),l=o(u),d=n(518),f=o(d);n(519);var c=n(526),m=o(c),p=n(1),h=o(p),x=n(529),g=o(x);h.default.locale("zh-tw"),r.default.prototype.$_firebase=f.default,r.default.prototype.$_moment=h.default,r.default.prototype.$_uuid=m.default,new r.default({store:i.default,router:l.default,components:{App:g.default}}).$mount("#app")},294:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=(n(71),n(530)),a=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={beforeCreate:function(){var e=JSON.parse(localStorage.getItem("user"));e?(this.userId=e.userId,this.username=e.username,this.usernameModalShow=!1):this.userId=this.$_uuid.v4(),this.$_firebase.initializeApp({apiKey:"AIzaSyD5sOqXskqkmK5gj9tfwy6-pRfRe-Q-11Q",authDomain:"chatroom-6f875.firebaseapp.com",databaseURL:"https://chatroom-6f875.firebaseio.com",projectId:"chatroom-6f875",storageBucket:"chatroom-6f875.appspot.com",messagingSenderId:"1057518627369",timestampsInSnapshots:!0})},computed:{userId:{get:function(){return this.$store.getters.userId},set:function(e){this.$store.commit("setUserId",e)}},username:{get:function(){return this.$store.getters.username},set:function(e){this.$store.commit("setUsername",e)}},usernameModalShow:{get:function(){return this.$store.getters.usernameModalShow},set:function(e){this.$store.commit("setUsernameModalShow",e)}}},components:{UsernameModal:a.default}}},295:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(302),r=o(a),s=n(281),i=o(s),u=n(71);t.default={computed:(0,i.default)({username:{get:function(){return this.$store.getters.username},set:function(e){this.$store.commit("setUsername",e)}}},(0,u.mapGetters)(["userId"])),methods:(0,i.default)({usernameConfirm:function(){this.setUsernameModalShow(!1),localStorage.setItem("user",(0,r.default)({userId:this.userId,username:this.username}))}},(0,u.mapMutations)(["setUsernameModalShow"]))}},296:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(101),r=o(a),s=n(533),i=o(s);r.default.use(i.default);var u=[{path:"/",component:function(){return n.e(0).then(n.bind(null,537))}}],l=new i.default({routes:u});t.default=l},297:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},298:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={usernameModalShow:function(e){return e.usernameModalShow},userId:function(e){return e.userId},username:function(e){return e.username}}},299:function(e,t,n){"use strict";(function(e){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(101),r=o(a),s=n(71),i=o(s),u=n(298),l=o(u),d=n(297),f=o(d),c=n(300),m=o(c);r.default.use(i.default);var p={usernameModalShow:!0,userId:"",username:""},h=new i.default.Store({state:p,getters:l.default,actions:f.default,mutations:m.default,strict:"production"!==e.env.NODE_ENV});t.default=h}).call(t,n(100))},300:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={setUsernameModalShow:function(e,t){e.usernameModalShow=t},setUserId:function(e,t){e.userId=t},setUsername:function(e,t){e.username=t}}},516:function(e,t,n){t=e.exports=n(69)(!1),t.push([e.i,"\n.modal {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100vw;\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: rgba(0, 0, 0, .5);\n  z-index: 999;\n}\n.modal-dialog {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: 60%;\n    padding-bottom: 10px;\n    border-radius: 6px;\n    border-bottom: 10px solid #444956;\n    -webkit-box-shadow: 0px 5px 15px rgba(0, 0, 0, .5);\n            box-shadow: 0px 5px 15px rgba(0, 0, 0, .5);\n    background-color: #ffffff;\n    overflow: hidden;\n}\n@media screen and (max-width: 767px) {\n.modal-dialog {\n        width: 90%;\n}\n}\n.modal-dialog-header {\n      padding: 25px 0px;\n      width: 100%;\n      background-color: #444956;\n}\n.modal-dialog-header-title {\n        margin-top: 10px;\n        font-size: 32px;\n        font-size: 2rem;\n        text-align: center;\n        color: #ffffff;\n}\n.modal-dialog-header-description {\n        margin-top: 5px;\n        font-size: 19.2px;\n        font-size: 1.2rem;\n        text-align: center;\n        color: #aaaaaa;\n}\n.modal-dialog-username {\n      margin-top: 45px;\n      padding: 10px 20px;\n      width: 60%;\n      font-size: 48px;\n      font-size: 3rem;\n      border: 1px solid #e6e8ea;\n}\n.modal-dialog-confirm {\n      cursor: pointer;\n      margin-top: 45px;\n      padding: 20px 0px;\n      width: 30%;\n      font-size: 22.4px;\n      font-size: 1.4rem;\n      color: #ffffff;\n      border-radius: 6px;\n      border: none;\n      background-color: #444956;\n}\n",""])},517:function(e,t,n){t=e.exports=n(69)(!1),t.push([e.i,'\nhtml {\n  font-size: 10px;\n}\nbody {\n  font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;\n}\ntextarea:focus, input:focus, button:focus {\n  outline: none;\n}\ntextarea {\n  resize: none;\n}\nh1, h2, h3, h4, p {\n  margin: 0px;\n}\n',""])},524:function(e,t,n){var o=n(516);"string"==typeof o&&(o=[[e.i,o,""]]);n(70)(o,{});o.locals&&(e.exports=o.locals)},525:function(e,t,n){var o=n(517);"string"==typeof o&&(o=[[e.i,o,""]]);n(70)(o,{});o.locals&&(e.exports=o.locals)},529:function(e,t,n){n(525);var o=n(106)(n(294),n(532),null,null);e.exports=o.exports},530:function(e,t,n){n(524);var o=n(106)(n(295),n(531),null,null);e.exports=o.exports},531:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal"},[n("section",{staticClass:"modal-dialog"},[e._m(0),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"modal-dialog-username",attrs:{type:"text"},domProps:{value:e.username},on:{keypress:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.usernameConfirm(t):null},input:function(t){t.target.composing||(e.username=t.target.value)}}}),e._v(" "),n("button",{staticClass:"modal-dialog-confirm",attrs:{type:"button"},on:{click:e.usernameConfirm}},[e._v("確認")])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"modal-dialog-header"},[n("h4",{staticClass:"modal-dialog-header-title"},[e._v("請輸入暱稱")]),e._v(" "),n("p",{staticClass:"modal-dialog-header-description"},[e._v("請輸入你的暱稱")])])}]}},532:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-view"),e._v(" "),n("username-modal",{directives:[{name:"show",rawName:"v-show",value:e.usernameModalShow,expression:"usernameModalShow"}]})],1)},staticRenderFns:[]}},536:function(e,t,n){n(271),e.exports=n(270)}},[536]);