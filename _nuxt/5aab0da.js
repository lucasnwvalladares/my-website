(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{414:function(t,e,n){"use strict";n(118);var r=n(6),o=n(0);e.a=o.a.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(r.d)(this.height),n=Object(r.d)(this.minHeight),o=Object(r.d)(this.minWidth),c=Object(r.d)(this.maxHeight),l=Object(r.d)(this.maxWidth),d=Object(r.d)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),o&&(t.minWidth=o),c&&(t.maxHeight=c),l&&(t.maxWidth=l),d&&(t.width=d),t}}})},415:function(t,e,n){"use strict";var r=n(5),o=(n(23),n(67),n(74),n(68),n(122),n(57),n(33),n(8),n(25),n(46),n(47),n(48),n(0));function c(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,a){if(t){if("string"==typeof t)return l(t,a);var e={}.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?l(t,a):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,c=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw c}}}}function l(t,a){(null==a||a>t.length)&&(a=t.length);for(var e=0,n=Array(a);e<a;e++)n[e]=t[e];return n}e.a=o.a.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses:function(){var t=[],e="string"==typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"==typeof e){var n,o=c(e.split(" "));try{for(o.s();!(n=o.n()).done;){var l=n.value;t.push("rounded-".concat(l))}}catch(t){o.e(t)}finally{o.f()}}else e&&t.push("rounded");return t.length>0?Object(r.a)({},t.join(" "),!0):{}}}})},426:function(t,e,n){"use strict";n(23),n(27),n(31),n(32),n(26),n(8),n(24);var r=n(5),o=(n(118),n(427),n(180)),c=n(414),l=n(415),d=n(6),h=n(119);function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.a=Object(h.a)(o.a,c.a,l.a).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return f({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return f({height:Object(d.d)(this.size),minWidth:Object(d.d)(this.size),width:Object(d.d)(this.size)},this.measurableStyles)}},render:function(t){var data={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,data),Object(d.j)(this))}})},427:function(t,e,n){var content=n(428);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("03027dc7",content,!0,{sourceMap:!1})},428:function(t,e,n){var r=n(35)((function(i){return i[1]}));r.push([t.i,".v-avatar{align-items:center;border-radius:50%;display:inline-flex;justify-content:center;line-height:normal;overflow:hidden;position:relative;text-align:center;vertical-align:middle}.v-avatar .v-icon,.v-avatar .v-image,.v-avatar .v-responsive__content,.v-avatar img,.v-avatar svg{border-radius:inherit;display:inline-flex;height:inherit;width:inherit}",""]),r.locals={},t.exports=r},445:function(t,e,n){var content=n(498);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("8ed1ad9c",content,!0,{sourceMap:!1})},496:function(t,e,n){t.exports=n.p+"img/profile.8eecc41.jpg"},497:function(t,e,n){"use strict";n(445)},498:function(t,e,n){var r=n(35)((function(i){return i[1]}));r.push([t.i,".team[data-v-88cc5480]{align-items:center;display:flex;flex-direction:column;width:100%}.hero[data-v-88cc5480]{background:linear-gradient(135deg,#053540,#2ecc71);color:#fff;padding:80px 20px;text-align:center;width:100%}.hero .hero-content[data-v-88cc5480]{margin:0 auto;max-width:800px}.hero .hero-content h1[data-v-88cc5480]{font-size:40px;line-height:1.2;margin-bottom:16px}.hero .hero-content p[data-v-88cc5480]{color:#ccc;font-size:18px;margin-bottom:24px}.content-wrapper[data-v-88cc5480]{margin:0 auto;max-width:1200px;padding:40px 0 0;width:80%}.team-intro[data-v-88cc5480],.team-member[data-v-88cc5480]{margin-bottom:60px}.team-intro[data-v-88cc5480]{color:#333;font-size:18px;margin:0 auto 60px;max-width:800px;text-align:center}.team-member .v-avatar[data-v-88cc5480]{margin-bottom:20px}.team-member .text-content h2[data-v-88cc5480]{color:#053540;font-size:28px;margin-bottom:10px}.team-member .text-content h3[data-v-88cc5480]{color:#2ecc71;font-size:20px;margin-bottom:20px}.team-member .text-content p[data-v-88cc5480]{color:#333;font-size:16px;line-height:1.6}.cta[data-v-88cc5480]{align-items:center;background-color:#053540;color:#fff;display:flex;flex-direction:column;justify-content:center;margin-left:calc(-50vw + 50%);padding:60px 20px;text-align:center;width:100vw}.cta h2[data-v-88cc5480]{font-size:32px;margin-bottom:20px;max-width:800px}.cta .btn-primary[data-v-88cc5480]{background-color:#053540;border:none;border-radius:5px;color:#fff;font-size:18px;padding:15px 30px;-webkit-text-decoration:none;text-decoration:none;transition:background-color .3s ease}.cta .btn-primary[data-v-88cc5480]:hover{background-color:#010e11}@media(max-width:960px){.content-wrapper[data-v-88cc5480]{width:90%}}@media(max-width:600px){.content-wrapper[data-v-88cc5480]{width:95%}.hero .hero-content h1[data-v-88cc5480]{font-size:32px}.hero .hero-content p[data-v-88cc5480],.team-intro[data-v-88cc5480]{font-size:16px}.team-member .text-content h2[data-v-88cc5480]{font-size:24px}.team-member .text-content h3[data-v-88cc5480]{font-size:18px}.team-member .text-content p[data-v-88cc5480]{font-size:14px}.cta h2[data-v-88cc5480]{font-size:28px}}",""]),r.locals={},t.exports=r},511:function(t,e,n){"use strict";n.r(e);var r=n(426),o=n(409),c=n(408),l={__name:"team",setup:function(t){return{__sfc:!0}}},d=(n(497),n(50)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("section",{staticClass:"team"},[t._m(0),t._v(" "),e("div",{staticClass:"content-wrapper"},[t._m(1),t._v(" "),e("section",{staticClass:"team-member"},[e(c.a,{attrs:{align:"center"}},[e(o.a,{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[e(r.a,{attrs:{size:"200"}},[e("img",{attrs:{src:n(496),alt:"Lucas Valladares"}})])],1),t._v(" "),e(o.a,{attrs:{cols:"12",md:"8"}},[e("div",{staticClass:"text-content"},[e("h2",[t._v("Lucas Valladares")]),t._v(" "),e("h3",[t._v("Founder & CEO")]),t._v(" "),e("p",[t._v("\n                            With a background in technology and a passion for software development, Lucas Valladares brings a wealth of knowledge and experience to the table. He is dedicated to building custom solutions that solve real-world challenges, ensuring that every project meets the highest standards of quality and innovation.\n                        ")])])])],1)],1),t._v(" "),e("section",{staticClass:"cta"},[e("h2",[t._v("Ready to work with our expert team?")]),t._v(" "),e("nuxt-link",{staticClass:"btn-primary",attrs:{to:"/contact-us"}},[t._v("Get in Touch Today!")])],1)])])}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("section",{staticClass:"hero"},[e("div",{staticClass:"hero-content"},[e("h1",[t._v("Our Team")]),t._v(" "),e("p",[t._v("Meet the people behind Valla's innovative solutions")])])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("section",{staticClass:"team-intro"},[e("p",[t._v("\n                At Valla, we believe in strong leadership and delivering exceptional results. Led by Lucas Valladares, the founder and CEO, our company thrives on the vision of bringing technological solutions to businesses of all sizes.\n            ")])])}],!1,null,"88cc5480",null);e.default=component.exports}}]);