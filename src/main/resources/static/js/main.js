// !
//     function() {
//         var define = document.getElementById('newBridge').define;
//         define("bull/aop/JointPoint", ["require"],
//             function(require) {
//                 function e(e, t, n, i, o, a) {
//                     this.thisp = e,
//                         this.args = t,
//                         this.modName = n,
//                         this.funcName = i,
//                         this.func = o,
//                         this.returnValue = a
//                 }
//                 return e.prototype = {
//                     constructor: e,
//                     getThis: function() {
//                         return this.thisp
//                     },
//                     getArgs: function() {
//                         return this.args
//                     },
//                     getModName: function() {
//                         return this.modName
//                     },
//                     getFuncName: function() {
//                         return this.funcName
//                     },
//                     getFunc: function() {
//                         return this.func
//                     },
//                     setReturnValue: function(e) {
//                         this.returnValue = e
//                     },
//                     getReturnValue: function() {
//                         return this.returnValue
//                     }
//                 },
//                     e
//             }),
//             define("bull/aop/aopEmitter", ["require", "./main"],
//                 function(require) {
//                     function e(e, n, i) {
//                         var o = [],
//                             a = t;
//                         if (a = a[e] || {},
//                             a = a[n] || {},
//                             a = a[i] || [], "[object Array]" === {}.toString.call(a)) for (var r = 0; r < a.length; r++) o.push(a[r]);
//                         return o
//                     }
//                     var exports = {},
//                         t = {};
//                     return exports.on = function(e, n, i, o) {
//                         var a = t;
//                         a[e] = a[e] || {},
//                             a = a[e],
//                             a[n] = a[n] || {},
//                             a = a[n],
//                             a[i] = a[i] || [],
//                             a = a[i],
//                             a.push({
//                                 func: o.func,
//                                 funcName: o.funcName,
//                                 modName: o.modName
//                             })
//                     },
//                         exports.getBefore = function(t, n) {
//                             var i = require("./main"),
//                                 o = i.TypeEnum.BEFORE;
//                             return e(o, t, n)
//                         },
//                         exports.queryBefore = function(e, t) {
//                             var n = exports.getBefore();
//                             if (console.log("method before " + e + " -> " + t + ":"), !n.length) return void console.log("none");
//                             for (var i = 0; i < n.length; i++) console.log(n[i].modName + " -> " + n[i].funcName);
//                             console.log("-----------------------------------")
//                         },
//                         exports.getAfter = function(t, n) {
//                             var i = require("./main"),
//                                 o = i.TypeEnum.AFTER;
//                             return e(o, t, n)
//                         },
//                         exports.queryAfter = function(e, t) {
//                             var n = exports.getAfter();
//                             if (!n.length) return void console.log("none");
//                             console.log("method after " + e + " -> " + t + ":");
//                             for (var i = 0; i < n.length; i++) console.log(n[i].modName + " -> " + n[i].funcName);
//                             console.log("-----------------------------------")
//                         },
//                         exports.getRegisterAop = function(e) {
//                             var n = {},
//                                 i = [],
//                                 o = t[e];
//                             for (var a in o) if (o.hasOwnProperty(a)) {
//                                 var r = o[a];
//                                 for (var s in r) if (r.hasOwnProperty(s)) {
//                                     if (!n[s]) n[s] = !0,
//                                         i.push({
//                                             modName: a,
//                                             funcName: s,
//                                             from: r[s][0].modName
//                                         })
//                                 }
//                             }
//                             return i
//                         },
//                         exports.emit = function(t, n, i, o) {
//                             for (var a = e(t, n, i), r = 0; r < a.length; r++) a[r].func(o)
//                         },
//                         exports
//                 }),
//             define("bull/microPromise/microPromise", ["require"],
//                 function(require) {
//                     function e() {
//                         for (var e = arguments.length,
//                                  n = 0,
//                                  i = t(), o = [], a = 0; a < e; a++) {
//                             var r = arguments[a]; !
//                                 function(t) {
//                                     r.then(function(a) {
//                                             if (n++, o[t] = a, n === e) i.resolve.apply(i, o)
//                                         },
//                                         function() {
//                                             i.reject()
//                                         })
//                                 } (a)
//                         }
//                         return i.promise()
//                     }
//                     var t = function() {
//                         function e() {
//                             for (var e = this,
//                                      t = 0; t < o.length; t++) !
//                                 function(t) {
//                                     if (r && r[0] && r[0].then) r[0].then(function() {
//                                         o[t].apply(e, arguments)
//                                     });
//                                     else setTimeout(function() {
//                                             o[t].apply(e, r)
//                                         },
//                                         0)
//                                 } (t)
//                         }
//                         function n() {
//                             for (var e = this,
//                                      t = 0; t < a.length; t++) !
//                                 function(t) {
//                                     setTimeout(function() {
//                                             a[t].apply(e, r)
//                                         },
//                                         0)
//                                 } (t)
//                         }
//                         function i(e, n) {
//                             var i = t();
//                             if (f === c.resolved) {
//                                 var l = this;
//                                 setTimeout(function() {
//                                         e.apply(l, r)
//                                     },
//                                     0)
//                             } else if (f === c.reject) {
//                                 var l = this;
//                                 setTimeout(function() {
//                                         n.call(l, s)
//                                     },
//                                     0)
//                             } else {
//                                 if (e) o.push(function() {
//                                     i.resolve(e.apply(l, arguments))
//                                 });
//                                 if (n) a.push(function(e) {
//                                     n(e),
//                                         i.reject()
//                                 })
//                             }
//                             return i.promise()
//                         }
//                         if (!this instanceof t) return new t;
//                         var o = [],
//                             a = [],
//                             r = [],
//                             s = "",
//                             c = {
//                                 pendding: 1,
//                                 resolved: 2,
//                                 rejected: 3
//                             },
//                             f = c.pendding,
//                             l = {
//                                 resolve: function() {
//                                     var t = Array.prototype.slice.call(arguments, 0);
//                                     if (f === c.pendding) r = t,
//                                         f = c.resolved,
//                                         e.call(this)
//                                 },
//                                 reject: function(e) {
//                                     if (f === c.pendding) s = e,
//                                         f = c.rejected,
//                                         n.call(this)
//                                 },
//                                 then: i,
//                                 promise: function() {
//                                     return {
//                                         then: i
//                                     }
//                                 }
//                             };
//                         return l
//                     };
//                     return {
//                         Deferred: t,
//                         when: e
//                     }
//                 }),
//             define("bull/aop/main", ["require", "./JointPoint", "./aopEmitter", "../loader", "../microPromise/microPromise"],
//                 function(require) {
//                     function e(e, t, n) {
//                         a.emit(r.BEFORE, e, t, n)
//                     }
//                     function t(e, t, n) {
//                         a.emit(r.AFTER, e, t, n)
//                     }
//                     function n(e) {
//                         return e = e || "",
//                             e.replace(/^\s|\s$/g, "")
//                     }
//                     function i(e) {
//                         e = e || "";
//                         var t = e.split(","),
//                             i = n(t[0] || ""),
//                             o = n(t[1]),
//                             a = n(t[2]);
//                         t = i.split(".");
//                         var r = t[0],
//                             s = t[1],
//                             c = t[2];
//                         return {
//                             packageName: r,
//                             modName: s,
//                             funcName: c,
//                             before: o,
//                             after: a
//                         }
//                     }
//                     var exports = {},
//                         o = require("./JointPoint"),
//                         a = require("./aopEmitter"),
//                         r = exports.TypeEnum = {
//                             BEFORE: "type1",
//                             AFTER: "type2"
//                         };
//                     return exports.createAopProxy = function(n, i, a) {
//                         var r = require("../loader"),
//                             s = require("../microPromise/microPromise");
//                         return function() {
//                             var c = [],
//                                 f = Array.prototype.slice.call(arguments, 0),
//                                 l = new o(this, f, n, i, a),
//                                 d = {
//                                     jointPoint: l,
//                                     microPromise: s
//                                 };
//                             e(n, i, l);
//                             var u = r.getInjection(n) || {},
//                                 m = u[i] || [];
//                             if ("[object Array]" === {}.toString.call(m)) for (var g = 0; g < m.length; g++) {
//                                 var p = m[g];
//                                 if (p in d) c.push(d[p]);
//                                 else c.push(r.get(p))
//                             }
//                             c = c.concat(f);
//                             var b = a.apply(this, c);
//                             if (b && b.then) b.then(function(e) {
//                                 l.setReturnValue(e),
//                                     t(n, i, l)
//                             });
//                             else l.setReturnValue(b),
//                                 t(n, i, l);
//                             return b
//                         }
//                     },
//                         exports.aspectRegister = function(e, t, n) {
//                             var o = require("../loader");
//                             if (e.indexOf(".") === -1) e = t + "." + e;
//                             for (var s = 0; s < n.length; s++) !
//                                 function(t) {
//                                     t.before && a.on(r.BEFORE, t.packageName + "." + t.modName, t.funcName, {
//                                         modName: e,
//                                         funcName: t.before,
//                                         func: function(n) {
//                                             var i = o.get(e)[t.before];
//                                             if (!i) throw 'module "' + e + "\" don't have method " + t.before;
//                                             i.apply(n.getThis(), n.getArgs())
//                                         }
//                                     }),
//                                     t.after && a.on(r.AFTER, t.packageName + "." + t.modName, t.funcName, {
//                                         modName: e,
//                                         funcName: t.after,
//                                         func: function(n) {
//                                             var i = o.get(e)[t.after];
//                                             if (!i) throw 'module "' + e + "\" don't have method " + t.after;
//                                             i.apply(n.getThis(), n.getArgs())
//                                         }
//                                     })
//                                 } (i(n[s]))
//                         },
//                         exports
//                 }),
//             define("bull/loader", ["require", "./aop/main"],
//                 function(require) {
//                     function e(t, n) {
//                         var i;
//                         if ("function" == typeof n) {
//                             e(t, n.prototype);
//                             var o = c(t, a, n);
//                             return o.prototype = n.prototype,
//                                 o
//                         } else {
//                             for (var a in n) if (n.hasOwnProperty(a)) {
//                                 if (i = n[a], "function" == typeof i) n[a] = c(t, a, i)
//                             } else;
//                             return n
//                         }
//                     }
//                     function t(e) {
//                         e = e || [];
//                         for (var t = 0; t < e.length; t++) exports.init(e[t])
//                     }
//                     function n(t, n) {
//                         for (var i in t) if (t.hasOwnProperty(i)) {
//                             var o = t[i];
//                             if (i = n + "." + i, a.hasOwnProperty(i)) {
//                                 if (o._belong && i !== o._belong) throw 'module conflict: module "' + i + '" is already register to "' + o._belong + '"'
//                             } else {
//                                 if (o._belong) throw 'module "' + i + '" already register to "' + o._belong + '"';
//                                 o._belong = i,
//                                     a[i] = e(i, o)
//                             }
//                         } else;
//                     }
//                     function i(e, t) {
//                         e = e || [];
//                         for (var n = 0; n < e.length; n++) {
//                             var i = e[n];
//                             r[i.id] = r[i.id] || {};
//                             var o = r[i.id],
//                                 a = i.method;
//                             for (var s in a) o[s] = a[s]
//                         }
//                     }
//                     function o(e, t) {
//                         for (var n = 0; n < e.length; n++) {
//                             var i = e[n];
//                             f(i.id, t, i.pointCut)
//                         }
//                     }
//                     var exports = {},
//                         a = {},
//                         r = {},
//                         s = require("./aop/main"),
//                         c = s.createAopProxy,
//                         f = s.aspectRegister;
//                     return exports.init = function(e) {
//                         if (!e._initialized) {
//                             e._initialized = !0;
//                             var a = e.package;
//                             if (!a && (e.resource || e.aspect)) throw "package name not found";
//                             t(e.importConfig),
//                             e.resource && n(e.resource, a),
//                             e.aspect && o(e.aspect, a),
//                             e.injection && i(e.injection, a)
//                         }
//                     },
//                         exports.getInjection = function(e) {
//                             return r[e]
//                         },
//                         exports.getDeps = function(e) {
//                             var t = r[e],
//                                 n = {};
//                             for (var i in t) if (t.hasOwnProperty(i)) for (var o = t[i], a = 0; a < o.length; a++) n[o[a]] = !0;
//                             delete n[e];
//                             var s = [];
//                             for (var i in n) if (i.indexOf(".") > -1) s.push(i);
//                             return s
//                         },
//                         exports.queryDep = function(e) {
//                             var t = exports.getDeps(e);
//                             if (console.log("deps of " + e + " is:"), !t.length) console.log("none");
//                             for (var n = 0; n < t.length; n++) console.log(t[n]);
//                             console.log("-----------------------------------")
//                         },
//                         exports.getModules = function(e) {
//                             e = e || "";
//                             var t = [];
//                             for (var n in a) if (a.hasOwnProperty(n)) if (e) {
//                                 if (n.indexOf(e) > -1) t.push(n)
//                             } else t.push(n);
//                             return t
//                         },
//                         exports.queryModule = function(e) {
//                             var t = exports.getModules(e);
//                             if (e) console.log('modules contains "' + e + '":');
//                             else console.log("all modules:");
//                             for (var n = 0; n < t.length; n++) console.log(t[n]);
//                             console.log("-----------------------------------")
//                         },
//                         exports.queryInvoke = function(e) {
//                             var t = [],
//                                 n = {};
//                             for (var i in r) if (r.hasOwnProperty(i)) {
//                                 var o = r[i];
//                                 for (var a in o) if (o.hasOwnProperty(a)) for (var s = o[a], c = 0; c < s.length; c++) {
//                                     var f = s[c];
//                                     if (f === e) {
//                                         var l = i + f;
//                                         if (l in n) continue;
//                                         else n[l] = !0;
//                                         t.push({
//                                             modName: i,
//                                             funcName: a
//                                         })
//                                     }
//                                 }
//                             }
//                             if (t.length) {
//                                 console.log("module " + e + " used by these method:");
//                                 for (var c = 0; c < t.length; c++) console.log(t[c].modName + " -> " + a)
//                             } else console.log("module" + e + " used nowhere");
//                             console.log("-----------------------------------")
//                         },
//                         exports.checkDep = function() {
//                             var e, t = 0;
//                             console.log("checking deps:");
//                             for (var n in a) if (a.hasOwnProperty(n)) {
//                                 e = exports.getDeps(n);
//                                 for (var i = 0; i < e.length; i++) if (!exports.has(e[i])) if (e[i].indexOf(".") > -1) t++,
//                                     console.log(e[i] + " is required by " + n + " but now missing")
//                             }
//                             if (!t) console.log("all dependencies is ready");
//                             console.log("-----------------------------------")
//                         },
//                         exports.has = function(e) {
//                             return e in a
//                         },
//                         exports.get = function(e) {
//                             if (e in a) return a[e];
//                             else throw 'module "' + e + '" not found'
//                         },
//                         exports
//                 }),
//             define("bull/main", ["require", "./loader", "./aop/aopEmitter"],
//                 function(require) {
//                     function e() {
//                         var e = document.createElement("div"),
//                             t = e.style;
//                         t.position = "fixed",
//                             t.right = "20px",
//                             t.top = "20px",
//                             t.border = "solid 1px black",
//                             t.backgroundColor = "#eee",
//                             e.innerHTML = "\u70b9\u6b64\u67e5\u770b<br/>\u6a21\u5757\u5173\u7cfb";
//                         var n = !1;
//                         e.onclick = function() {
//                             if (!n) n = !0,
//                                 require(["bull/debug"],
//                                     function(e) {
//                                         n = !1,
//                                             e.entry()
//                                     })
//                         },
//                             document.body.insertBefore(e, document.body.firstChild)
//                     }
//                     function t() {
//                         var t = location.hash;
//                         if (t.indexOf("bullDebug") > -1) e()
//                     }
//                     var exports = {},
//                         n = require("./loader"),
//                         i = require("./aop/aopEmitter");
//                     return exports.get = n.get,
//                         exports.queryBefore = i.queryBefore,
//                         exports.queryAfter = i.queryAfter,
//                         exports.queryInvoke = n.queryInvoke,
//                         exports.queryDep = n.queryDep,
//                         exports.checkDep = n.checkDep,
//                         exports.queryModule = n.queryModule,
//                         exports.init = function(e) {
//                             t(),
//                                 n.init(e)
//                         },
//                         exports
//                 }),
//             define("bull", ["bull/main"],
//                 function(e) {
//                     return e
//                 }),
//             define("embed/webimlight/statusbar/main", [],
//                 function() {
//                     function e() {
//                         var e = t.getBoundingClientRect(),
//                             n = e.width || e.right - e.left,
//                             i = e.height || e.bottom - e.top,
//                             o = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
//                             a = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
//                         c = o - n - l,
//                             f = a - i - d
//                     }
//                     var t, n, i, o, a, r, s, c, f, exports = {},
//                         l = 2,
//                         d = 0,
//                         u = 0;
//                     return exports.show = function(e) {
//                         e.addClass(t, "maxMessageContainer"),
//                             e.removeClass(t, "minMessageContainer"),
//                             e.removeClass(o, "nb-webim-light-hide"),
//                             exports.fixPosition()
//                     },
//                         exports.hide = function(e) {
//                             e.removeClass(t, "maxMessageContainer"),
//                                 e.addClass(t, "minMessageContainer"),
//                                 e.addClass(o, "nb-webim-light-hide"),
//                                 exports.fixPosition()
//                         },
//                         exports.toggle = function(e, n) {
//                             if (n.hasClass(t, "minMessageContainer")) exports.show(),
//                                 e.emit("webimLightStatus", "show");
//                             else exports.hide(),
//                                 e.emit("webimLightStatus", "hide")
//                         },
//                         exports.clearMessageStatus = function() {
//                             u = 0,
//                                 i.style.display = "none"
//                         },
//                         exports.syncClearMessage = function(e) {
//                             e.emit("clearMessageCount", Math.random())
//                         },
//                         exports.displayMessagStatus = function() {
//                             u++,
//                                 i.innerHTML = u,
//                                 i.style.display = ""
//                         },
//                         exports.addMessageCount = function(e, t) {
//                             if (e.isConnected()) if (!t || t.role) exports.displayMessagStatus()
//                         },
//                         exports.startDrag = function(t) {
//                             if (t.target !== o) a = !0,
//                                 e(),
//                                 r = c + t.offsetX,
//                                 s = f + t.offsetY,
//                                 t.preventDefault()
//                         },
//                         exports.draging = function(e) {
//                             if (a) {
//                                 var i = e.target === n,
//                                     o = r - e.clientX + l,
//                                     u = s - e.clientY + d;
//                                 if (o > c || o < l) {
//                                     if (i) r = c + e.offsetX;
//                                     o = Math.max(Math.min(o, c), l)
//                                 }
//                                 if (u > f || u < d) {
//                                     if (i) s = f + e.offsetY;
//                                     u = Math.max(Math.min(u, f), d)
//                                 }
//                                 t.style.right = o + "px",
//                                     t.style.bottom = u + "px"
//                             }
//                         },
//                         exports.endDrag = function() {
//                             a = !1
//                         },
//                         exports.fixPosition = function() {
//                             e();
//                             var n = t.style.right.match(/\d+/) || [l],
//                                 i = t.style.bottom.match(/\d+/) || [d];
//                             n = parseInt(n[0], 10),
//                                 i = parseInt(i[0], 10),
//                                 n = Math.max(Math.min(n, c), l),
//                                 i = Math.max(Math.min(i, f), d),
//                                 t.style.right = n + "px",
//                                 t.style.bottom = i + "px"
//                         },
//                         exports.render = function(e, a, r) {
//                             r.appendHTML(a.template(e.get("statusbar")), t),
//                                 n = r.g("nbwlStatusBar"),
//                                 i = r.g("nbwlUnreadCount"),
//                                 o = r.g("nbwlToggle")
//                         },
//                         exports.bindEvent = function(e, t) {
//                             e.domOn(o, "click", exports.toggle),
//                                 e.domOn(n, "mousedown", exports.startDrag),
//                                 e.domOn(document, "mousemove", e.throttle(exports.draging, 20)),
//                                 e.domOn(document, "mouseup", exports.endDrag),
//                                 e.domOn(window, "resize", e.debounce(exports.fixPosition, 500)),
//                                 t.on("clearMessageCount", exports.clearMessageStatus),
//                                 t.on("webimLightStatus",
//                                     function(e) {
//                                         if ("hide" === e) exports.hide();
//                                         else exports.show()
//                                     })
//                         },
//                         exports.init = function(e, n, i) {
//                             t = e.g("nbWebImLightContainer"),
//                                 n.parse(i),
//                                 exports.render(),
//                                 exports.bindEvent()
//                         },
//                         exports
//                 }),
//             define("embed/webimlight/statusbar/notify", [],
//                 function() {
//                     var e, exports = {},
//                         t = document.title,
//                         n = 500;
//                     return exports.display = function(i) {
//                         var o = i.LANG.TITLENOTIFY;
//                         if (!e) {
//                             if (!t) t = document.title;
//                             var a = 0;
//                             e = setInterval(function() {
//                                     var e = a % o.length;
//                                     document.title = o.substring(e),
//                                         a++
//                                 },
//                                 n)
//                         }
//                     },
//                         exports.clear = function() {
//                             clearInterval(e),
//                                 e = 0,
//                                 document.title = t
//                         },
//                         exports
//                 }),
//             define("embed/webimlight/statusbar/main.tpl", [],
//                 function() {
//                     return '<!-- target: statusbar --><ins id="nbwlStatusBar"><ins id="nbwlToggle" class="nb-webim-light-status-bar-toggle"><ins class="nb-webim-light-toggle-icon"></ins></ins><!--<ins id="nbwlOpenWebim" title="\u6253\u5f00\u65b0\u6c9f\u901a\u7a97\u53e3"></ins>--><ins class="nb-webim-light-status-bar-title">\u5728\u7ebf\u54a8\u8be2</ins><ins id="nbwlUnreadCount" style="display: none;"></ins></ins>'
//                 }),
//             define("embed/webimlight/statusbar/config", ["require", "./main", "./notify", "./main.tpl"],
//                 function(require) {
//                     return {
//                         package: "statusbar",
//                         resource: {
//                             main: require("./main"),
//                             notify: require("./notify"),
//                             tpl: require("./main.tpl")
//                         },
//                         injection: [{
//                             id: "statusbar.main",
//                             method: {
//                                 init: ["pbase.dom", "common.tpl", "statusbar.tpl"],
//                                 render: ["common.tpl", "common.util", "pbase.dom"],
//                                 addMessageCount: ["core.chat"],
//                                 syncClearMessage: ["communicate.synchronizer"],
//                                 toggle: ["communicate.synchronizer", "pbase.dom"],
//                                 show: ["pbase.dom"],
//                                 hide: ["pbase.dom"],
//                                 bindEvent: ["pbase.events", "communicate.synchronizer"]
//                             }
//                         },
//                             {
//                                 id: "statusbar.notify",
//                                 method: {
//                                     display: ["webimlight.commonConfig"]
//                                 }
//                             }],
//                         aspect: [{
//                             id: "statusbar.main",
//                             pointCut: ["layout.main.render, , init", "layout.main.hasOperation, , clearMessageStatus", "layout.main.hasOperation, , syncClearMessage", "messagecontainer.main.renderMessage, , addMessageCount", "webimlight.entry.show, , show"]
//                         },
//                             {
//                                 id: "statusbar.notify",
//                                 pointCut: ["statusbar.main.displayMessagStatus, , display", "statusbar.main.clearMessageStatus, , clear"]
//                             }]
//                     }
//                 }),
//             define("embed/webimlight/robot/main", ["require"],
//                 function(require) {
//                     var e, t, n, exports = {};
//                     return exports.render = function(i, o, a, r, s) {
//                         var c = i.domain + "/msgIndex?siteId=" + s.siteid;
//                         if (/^https:/.test(c)) c = c.replace(/^https/, "http");
//                         else if (/^\/\//.test(c)) c = "http:" + c;
//                         r.appendHTML(a.template(o.get("irTipLayer"), {
//                             url: c
//                         }), e),
//                             t = r.g("nbGotoMsg"),
//                             n = r.g("nbTransToCs")
//                     },
//                         exports.bindEvents = function() {
//                             var e = document.getElementById("nbTransToCs-close");
//                             e.onclick = function() {
//                                 exports.hideOnline()
//                             };
//                             var t = document.getElementById("nbTransToCs-btn");
//                             t.onclick = function() {
//                                 return exports.send({
//                                     type: "transfer"
//                                 }),
//                                     !1
//                             }
//                         },
//                         exports.send = function(e) {},
//                         exports.showMsg = function() {
//                             t.style.display = "block"
//                         },
//                         exports.showOnline = function(e, t) {
//                             if ("IR" === t) n.style.display = "block"
//                         },
//                         exports.hideOnline = function() {
//                             n.style.display = "none"
//                         },
//                         exports.hideMsg = function() {
//                             t.style.display = "none"
//                         },
//                         exports.hideLayer = function() {
//                             exports.hideOnline(),
//                                 exports.hideMsg()
//                         },
//                         exports.init = function(t, n, i) {
//                             e = t.g("nbWebImLightContainer"),
//                                 n.parse(i),
//                                 exports.render(),
//                                 exports.bindEvents()
//                         },
//                         exports
//                 }),
//             define("embed/webimlight/robot/main.tpl", [],
//                 function() {
//                     return '<!-- target: irTipLayer --><ins id="nbIRLayer" class="nb-robot-layer"><ins id="nbGotoMsg" class="nb-robot-layer-in nb-robot-layer-msg"><ins class="nb-robot-text"><span>\u4ee5\u4e0b\u4fe1\u606f\u6ca1\u6709\u5e2e\u52a9\u5230\u60a8\uff0c\u8bf7</span><a href="<%url%>" target="_blank">[ \u7559\u8a00 ]</a></ins></ins><ins id="nbTransToCs" class="nb-robot-layer-in nb-robot-layer-cs"><ins class="nb-robot-text"><ins id="nbTransToCs-close"></ins><span>\u5ba2\u670d\u5df2\u4e0a\u7ebf\uff0c\u60a8\u662f\u5426</span><a href="#" id="nbTransToCs-btn">[ \u5728\u7ebf\u6c9f\u901a ]</a></ins></ins></ins>'
//                 }),
//             define("embed/webimlight/robot/config", ["require", "./main", "./main.tpl"],
//                 function(require) {
//                     return {
//                         package: "robot",
//                         resource: {
//                             main: require("./main"),
//                             tpl: require("./main.tpl")
//                         },
//                         injection: [{
//                             id: "robot.main",
//                             method: {
//                                 init: ["pbase.dom", "common.tpl", "robot.tpl"],
//                                 render: ["webimlight.commonConfig", "common.tpl", "common.util", "pbase.dom", "core.config"]
//                             }
//                         }],
//                         aspect: [{
//                             id: "robot.main",
//                             pointCut: ["communicate.handler.currentIR, ,init", "communicate.handler.showMsgRemind, ,showMsg", "communicate.handler.csonline, ,showOnline", "communicate.handler.fininshIR, ,hideLayer", "communicate.handler.transferError, ,hideOnline"]
//                         }]
//                     }
//                 }),
//             define("im-lib/lang/isObject", [],
//                 function() {
//                     return function(e) {
//                         return "[object Object]" == Object.prototype.toString.call(e)
//                     }
//                 }),
//             define("im-lib/lang/isArray", [],
//                 function() {
//                     return function(e) {
//                         return "[object Array]" == Object.prototype.toString.call(e)
//                     }
//                 }),
//             define("im-lib/lang/extend", [],
//                 function() {
//                     return function(e, t) {
//                         for (var n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
//                         return e
//                     }
//                 }),
//             define("im-lib/lang/each", ["require", "./isArray"],
//                 function(require) {
//                     return function(e, t, n) {
//                         if (require("./isArray")(e)) {
//                             for (var i = e.length,
//                                      o = 0; o < i; o++) if ("function" == typeof t) t.call(n, e[o], o, e)
//                         } else for (var a in e) if (e.hasOwnProperty(a)) t.call(n, a, e[a], e)
//                     }
//                 }),
//             define("im-lib/lang", ["require", "./lang/isObject", "./lang/isArray", "./lang/extend", "./lang/each"],
//                 function(require) {
//                     var exports = {};
//                     return exports.isObject = require("./lang/isObject"),
//                         exports.isArray = require("./lang/isArray"),
//                         exports.extend = require("./lang/extend"),
//                         exports.each = require("./lang/each"),
//                         exports
//                 }),
//             define("im-lib/json", [],
//                 function() {
//                     function e(e) {
//                         if (/["\\\x00-\x1f]/.test(e)) e = e.replace(/["\\\x00-\x1f]/g,
//                             function(e) {
//                                 var t = a[e];
//                                 if (t) return t;
//                                 else return t = e.charCodeAt(),
//                                 "\\u00" + Math.floor(t / 16).toString(16) + (t % 16).toString(16)
//                             });
//                         return '"' + e + '"'
//                     }
//                     function t(e) {
//                         var t, n, i, a = ["["],
//                             r = e.length;
//                         for (n = 0; n < r; n++) switch (i = e[n], typeof i) {
//                             case "undefined":
//                             case "function":
//                             case "unknown":
//                                 break;
//                             default:
//                                 if (t) a.push(",");
//                                 a.push(o(i)),
//                                     t = 1
//                         }
//                         return a.push("]"),
//                             a.join("")
//                     }
//                     function n(e) {
//                         return e < 10 ? "0" + e: e
//                     }
//                     function i(e) {
//                         return '"' + e.getFullYear() + "-" + n(e.getMonth() + 1) + "-" + n(e.getDate()) + "T" + n(e.getHours()) + ":" + n(e.getMinutes()) + ":" + n(e.getSeconds()) + '"'
//                     }
//                     function o(n) {
//                         switch (typeof n) {
//                             case "undefined":
//                                 return "undefined";
//                             case "number":
//                                 return isFinite(n) ? String(n) : "null";
//                             case "string":
//                                 return e(n);
//                             case "boolean":
//                                 return String(n);
//                             default:
//                                 if (null === n) return "null";
//                                 else if (n instanceof Array) return t(n);
//                                 else if (n instanceof Date) return i(n);
//                                 else {
//                                     var a, r, s = ["{"],
//                                         c = o;
//                                     for (var f in n) if (Object.prototype.hasOwnProperty.call(n, f)) switch (r = n[f], typeof r) {
//                                         case "undefined":
//                                         case "unknown":
//                                         case "function":
//                                             break;
//                                         default:
//                                             if (a) s.push(",");
//                                             a = 1,
//                                                 s.push(c(f) + ":" + c(r))
//                                     }
//                                     return s.push("}"),
//                                         s.join("")
//                                 }
//                         }
//                     }
//                     var exports = {};
//                     exports.parse = function(e) {
//                         if (window.JSON && JSON.parse) return JSON.parse(e);
//                         else return new Function("return (" + e + ")")()
//                     },
//                         exports.stringify = function(e) {
//                             if (window.JSON && JSON.stringify) return JSON.stringify(e);
//                             else return o(e)
//                         };
//                     var a = {
//                         "\b": "\\b",
//                         "\t": "\\t",
//                         "\n": "\\n",
//                         "\f": "\\f",
//                         "\r": "\\r",
//                         '"': '\\"',
//                         "\\": "\\\\"
//                     };
//                     return exports
//                 }),
//             define("im-lib/net", [],
//                 function() {
//                     function e() {
//                         if (window.ActiveXObject) try {
//                             return new ActiveXObject("Msxml2.XMLHTTP")
//                         } catch(e) {
//                             try {
//                                 return new ActiveXObject("Microsoft.XMLHTTP")
//                             } catch(e) {}
//                         }
//                         if (window.XMLHttpRequest) return new XMLHttpRequest
//                     }
//                     var exports = {};
//                     return exports.imgRequest = function(e) {
//                         var t = document.createElement("img");
//                         t.src = e
//                     },
//                         exports.jsonp = function(e, t) {
//                             function n() {
//                                 return (new Date).getTime()
//                             }
//                             function i() {
//                                 return Math.random().toString().substr(2)
//                             }
//                             function o(e) {
//                                 if (e) {
//                                     var t = e.parentNode;
//                                     if (t && 11 !== t.nodeType) t.removeChild(e)
//                                 }
//                             }
//                             function a(e) {
//                                 var t = "";
//                                 if ("string" == typeof e) t = e;
//                                 else if ("object" == typeof e) for (var i in e) if (e.hasOwnProperty(i)) t += "&" + i + "=" + encodeURIComponent(e[i]);
//                                 return t += "&_time=" + n(),
//                                     t = t.substr(1)
//                             }
//                             function r(e, r, s, c) {
//                                 var f, l = (r.op, r.l);
//                                 r = null,
//                                     e = e + (e.indexOf("?") === -1 ? "?": "&") + a(r);
//                                 var d = /callback=(\w+)/.exec(e);
//                                 if (d && d[1]) f = d[1];
//                                 else f = "jsonp_bridge_" + n() + "_" + i(),
//                                     e = e.replace("?", "?" + t.key + "=" + f + "&");
//                                 var u = document.createElement("script");
//                                 u.type = "text/javascript",
//                                     u.src = e,
//                                     u.id = "id_" + f,
//                                     u.charset = "utf-8";
//                                 var m = !0,
//                                     g = null;
//                                 if (window[f] = function(e) {
//                                     clearTimeout(g),
//                                         window[f] = void 0;
//                                     var t = document.getElementById("id_" + f);
//                                     setTimeout(function() {
//                                             o(t)
//                                         },
//                                         0),
//                                         s(e),
//                                         m = !1
//                                 },
//                                 "onerror" in u) u.onerror = function() {
//                                     c && c(),
//                                         o(u)
//                                 },
//                                     m = !1;
//                                 var p = 1e4;
//                                 if (1 === l) p += 2e4;
//                                 g = setTimeout(function() {
//                                         if (m) c && c(),
//                                             o(u)
//                                     },
//                                     p);
//                                 var b = document.getElementsByTagName("head")[0];
//                                 if (b) setTimeout(function() {
//                                         b.appendChild(u)
//                                     },
//                                     0)
//                             }
//                             r(e, t, t.success, t.failure)
//                         },
//                         exports.request = function(t, n) {
//                             var i = e(),
//                                 o = 3e4,
//                                 a = setTimeout(function() {
//                                         i.onreadystatechange = null,
//                                             i.abort(),
//                                         n.failure && n.failure()
//                                     },
//                                     o);
//                             return i.open(n.method || "GET", t),
//                                 i.onreadystatechange = function() {
//                                     if (4 === i.readyState) if (clearTimeout(a), i.status >= 200 && i.status < 300 || 304 === i.status) {
//                                         if (n.success) n.success(i.responseText)
//                                     } else if (n.failure) n.failure()
//                                 },
//                                 i.send(n.data),
//                                 i
//                         },
//                         exports.upload = function(e, t, n, i, o) {
//                             function a() {
//                                 i(),
//                                     d.onload = function() {},
//                                     d.parentNode.removeChild(d)
//                             }
//                             function r() {
//                                 o(),
//                                     d.onerror = function() {},
//                                     d.parentNode.removeChild(d)
//                             }
//                             if ("/" === e.charAt(0) && !/^\/\//.test(e)) e = location.protocol + "//" + location.host + e;
//                             if ("[object String]" === Object.prototype.toString.call(t) && window.clouda) {
//                                 var s = t;
//                                 clouda.device.fs.post(s, e, {
//                                     onsuccess: function(e) {
//                                         if (i) i(e)
//                                     },
//                                     onfail: function() {
//                                         if (o) o()
//                                     },
//                                     uploadKey: n,
//                                     param: {}
//                                 })
//                             } else if (t.nodeName) {
//                                 var c = "upload_iframe" + parseInt(1e4 * Math.random(), 10),
//                                     f = '<iframe id="' + c + '" name="' + c + '" width="0" height="0" border="0" style="width: 0; height: 0; border: none;">',
//                                     l = document.createElement("div");
//                                 l.innerHTML = f;
//                                 var d = l.getElementsByTagName("iframe")[0];
//                                 if (document.body.appendChild(d), t.setAttribute("target", c), t.setAttribute("action", e), t.setAttribute("method", "post"), t.setAttribute("enctype", "multipart/form-data"), t.setAttribute("encoding", "multipart/form-data"), d.attachEvent) d.attachEvent("onload", a),
//                                     d.attachEvent("onerror", r);
//                                 else d.onload = a,
//                                     d.onerror = r;
//                                 t.submit()
//                             } else if (window.FormData) {
//                                 var u = new FormData;
//                                 u.append(n, t),
//                                     exports.request(e, {
//                                         success: i,
//                                         failure: o,
//                                         data: u,
//                                         method: "post"
//                                     })
//                             }
//                         },
//                         exports.initWs = function(e, t, n) {
//                             e.init(t, n)
//                         },
//                         exports.ws = function(e, t, n, i) {
//                             e.sendMsg(t, n, i)
//                         },
//                         exports
//                 }),
//             define("im-lib/util", [],
//                 function() {
//                     var exports = {},
//                         e = "0123456789ABCDEF";
//                     return exports.uuid = function() {
//                         for (var t = [], n = 0; n < 32; n++) t[n] = e.substr(Math.floor(16 * Math.random()), 1);
//                         t[12] = "4",
//                             t[16] = e.substr(3 & t[16] | 8, 1);
//                         var i = t.join("").toLowerCase();
//                         return i = i.toLowerCase(),
//                             i = i.replace(/^(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})$/, "$1-$2-$3-$4-$5")
//                     },
//                         exports.decodeHTML = function(e) {
//                             return e = e || "",
//                                 e.replace("&lt;", "<").replace("&gt;", ">").replace("&amp;", "&").replace("&quot;", '"').replace("&nbsp;", " ")
//                         },
//                         exports.encodeHTML = function(e) {
//                             return e = e || "",
//                                 e.replace(/</g, "&lt").replace(/>/g, "&gt").replace(/&/g, "&amp").replace(/"/g, "&quot").replace(/ /g, "&nbsp")
//                         },
//                         exports.getText = function(e) {
//                             var t = "";
//                             if (3 === e.nodeType || 4 === e.nodeType) t += exports.decodeHTML(e.nodeValue);
//                             else if ("IMG" === e.tagName) if (e.getAttribute("data-face-id")) return "[" + e.getAttribute("data-face-text") + "]";
//                             else return "[\u56fe\u7247]";
//                             else if (8 !== e.nodeType) for (var n = 0; n < e.childNodes.length; n++) t += exports.getText(e.childNodes[n]);
//                             return t
//                         },
//                         exports.isSupportWs = function() {
//                             return "function" == typeof window.WebSocket && "function" == typeof window.WebSocket.prototype.send
//                         } (),
//                         exports.padLeft = function(e, t, n) {
//                             n = n || "0";
//                             for (var i = e.toString().length; i < t;) e = n + e,
//                                 i++;
//                             return e
//                         },
//                         exports.msgid = function() {
//                             for (var e = [], t = 0; t < 5; t++) e[t] = Math.floor(10 * Math.random());
//                             return (new Date).getTime() + e.join("")
//                         },
//                         exports
//                 }),
//             define("im-lib/Emitter", [],
//                 function() {
//                     function e() {}
//                     var t = e.prototype;
//                     return t._getEvents = function() {
//                         if (!this._events) this._events = {};
//                         return this._events
//                     },
//                         t._getMaxListeners = function() {
//                             if (isNaN(this.maxListeners)) this.maxListeners = 10;
//                             return this.maxListeners
//                         },
//                         t.on = function(e, t) {
//                             var n = this._getEvents(),
//                                 i = this._getMaxListeners();
//                             n[e] = n[e] || [];
//                             var o = n[e].length;
//                             if (o >= i && 0 !== i) throw new RangeError("Warning: possible Emitter memory leak detected. " + o + " listeners added.");
//                             return n[e].push(t),
//                                 this
//                         },
//                         t.once = function(e, t) {
//                             function n() {
//                                 i.off(e, n),
//                                     t.apply(this, arguments)
//                             }
//                             var i = this;
//                             return n.listener = t,
//                                 this.on(e, n),
//                                 this
//                         },
//                         t.off = function(e, t) {
//                             var n = this._getEvents();
//                             if (0 === arguments.length) return this._events = {},
//                                 this;
//                             var i = n[e];
//                             if (!i) return this;
//                             if (1 === arguments.length) return delete n[e],
//                                 this;
//                             for (var o, a = 0; a < i.length; a++) if (o = i[a], o === t || o.listener === t) {
//                                 i.splice(a, 1);
//                                 break
//                             }
//                             return this
//                         },
//                         t.emit = function(e) {
//                             var t = this._getEvents(),
//                                 n = t[e],
//                                 i = Array.prototype.slice.call(arguments, 1);
//                             if (n) {
//                                 n = n.slice(0);
//                                 for (var o = 0,
//                                          a = n.length; o < a; o++) n[o].apply(this, i)
//                             }
//                             return this
//                         },
//                         t.listeners = function(e) {
//                             var t = this._getEvents();
//                             return t[e] || []
//                         },
//                         t.setMaxListeners = function(e) {
//                             return this.maxListeners = e,
//                                 this
//                         },
//                         e.mixin = function(t) {
//                             for (var n in e.prototype) t[n] = e.prototype[n];
//                             return t
//                         },
//                         e
//                 }),
//             define("im-lib/userData", [],
//                 function() {
//                     function e(e) {
//                         return e.replace(o, "___")
//                     }
//                     function t() {}
//                     function n() {
//                         if (!i) try {
//                             return i = document.createElement("input"),
//                                 i.type = "hidden",
//                                 i.addBehavior("#default#userData"),
//                                 document.body.appendChild(i),
//                                 !0
//                         } catch(e) {
//                             return i = {
//                                 load: t,
//                                 save: t,
//                                 getAttribute: t,
//                                 setAttribute: t,
//                                 removeAttribute: t
//                             },
//                                 !1
//                         }
//                         return ! 0
//                     }
//                     var exports = {},
//                         i = null,
//                         o = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g"),
//                         a = 365,
//                         r = location.hostname + "_bridge_im";
//                     return exports.setItem = function(t, o) {
//                         if (n()) {
//                             t = e(t);
//                             var s = new Date;
//                             s.setDate(s.getDate() + a),
//                                 i.expires = s.toUTCString(),
//                                 i.load(r),
//                                 i.setAttribute(t, o),
//                                 i.save(r)
//                         }
//                     },
//                         exports.getItem = function(t) {
//                             if (!n()) return "";
//                             else return t = e(t),
//                                 i.load(r),
//                                 i.getAttribute(t)
//                         },
//                         exports.removeItem = function() {
//                             if (n()) key = e(key),
//                                 i.load(r),
//                                 i.removeAttribute(key),
//                                 i.save(r)
//                         },
//                         exports.clear = function() {
//                             var e = new Date;
//                             e.setDate(e.getDate() - 1),
//                                 i.expires = e.toUTCString()
//                         },
//                         exports
//                 }),
//             define("im-lib/localStorage", ["require", "./userData"],
//                 function(require) {
//                     var e, exports = {};
//                     try {
//                         e = window.localStorage || require("./userData")
//                     } catch(t) {
//                         e = require("./userData")
//                     }
//                     return exports.setItem = function(t, n) {
//                         try {
//                             e.setItem(t, n)
//                         } catch(e) {}
//                     },
//                         exports.getItem = function(t) {
//                             return e.getItem(t)
//                         },
//                         exports.removeItem = function(t) {
//                             e.removeItem(t)
//                         },
//                         exports.clear = function() {
//                             e.clear()
//                         },
//                         exports
//                 }),
//             define("im-lib/main", ["require", "./lang", "./json", "./net", "./util", "./Emitter", "./localStorage"],
//                 function(require) {
//                     return {
//                         lang: require("./lang"),
//                         json: require("./json"),
//                         net: require("./net"),
//                         util: require("./util"),
//                         Emitter: require("./Emitter"),
//                         localStorage: require("./localStorage")
//                     }
//                 }),
//             define("im-lib", ["im-lib/main"],
//                 function(e) {
//                     return e
//                 }),
//             define("im-core/plugin/fileTransfer", ["require", "../main"],
//                 function(require) {
//                     var e = 1,
//                         exports = {};
//                     exports.encoder = {};
//                     var t = exports.encoder;
//                     t.fileAccept = function(t, n) {
//                         n({
//                             mtype: e,
//                             content: {
//                                 type: "file",
//                                 data: {
//                                     bcsName: t.bcsName,
//                                     name: t.name,
//                                     size: t.size,
//                                     type: "accept"
//                                 }
//                             }
//                         })
//                     },
//                         t.fileVUpload = function(t, n) {
//                             n({
//                                 mtype: e,
//                                 content: {
//                                     type: "file",
//                                     msgInfo: t.msgInfo,
//                                     data: {
//                                         status: t.status,
//                                         bcsName: t.bcsName,
//                                         name: t.name,
//                                         size: t.size,
//                                         type: "vUpload"
//                                     }
//                                 }
//                             })
//                         },
//                         t.fileVDownLoad = function(t, n) {
//                             n({
//                                 mtype: e,
//                                 content: {
//                                     type: "file",
//                                     data: {
//                                         status: t.status,
//                                         bcsName: t.bcsName,
//                                         name: t.name,
//                                         type: "vDownLoad"
//                                     }
//                                 }
//                             })
//                         },
//                         t.fileVCancelSend = function(t, n) {
//                             n({
//                                 mtype: e,
//                                 content: {
//                                     type: "file",
//                                     data: {
//                                         bcsName: t.bcsName,
//                                         name: t.name,
//                                         type: "vCancelSend"
//                                     }
//                                 }
//                             })
//                         },
//                         exports.decoder = {};
//                     var n = require("../main");
//                     return exports.decoder.fileTransfer = function(e, t) {
//                         e = e || {};
//                         var i = e.content || {},
//                             o = i.data || {},
//                             a = i.msgInfo || {},
//                             r = {
//                                 bcsName: o.bcsName,
//                                 name: o.name
//                             },
//                             s = "";
//                         switch (o.type) {
//                             case "accept":
//                                 s = "fileAccept",
//                                     r.status = o.status;
//                                 break;
//                             case "sDownLoad":
//                                 s = "fileSDownLoad",
//                                     r.status = o.status;
//                                 break;
//                             case "sUpLoad":
//                                 s = "fileSUpload",
//                                     r.size = o.size;
//                                 break;
//                             case "vCancelSend":
//                                 s = "vCancelSend";
//                                 break;
//                             case "vDownLoad":
//                                 s = "vDownLoad",
//                                     r.status = o.status;
//                                 break;
//                             case "vUpload":
//                                 s = "vUpload"
//                         }
//                         n.emit(s, r, a, e.msgHandlerType || "")
//                     },
//                         exports
//                 }),
//             define("qiao-im-msdk/plugin/fileTransfer", ["im-core/plugin/fileTransfer"],
//                 function(e) {
//                     return e
//                 }),
//             define("im-core/const", [],
//                 function() {
//                     var exports = {};
//                     return exports.PLATFORM_PC = 0,
//                         exports.PLATFORM_MOBILE = 1,
//                         exports.SERVER_TIEXIN = 1,
//                         exports.SERVER_DUZHAN = 2,
//                         exports.SERVER_QIAO = 3,
//                         exports.AUTH_TYPE_LOCAL = 0,
//                         exports.AUTH_TYPE_QIAO = 4,
//                         exports.AUTH_TYPE_DUZHAN = 5,
//                         exports.CHAT_TYPE_USER = 0,
//                         exports.CHAT_TYPE_GROUP = 1,
//                         exports.CHAT_TYPE_IR = 4,
//                         exports.PUSH_TYPE_BYE = 2,
//                         exports.PUSH_TYPE_CHAT = 3,
//                         exports.PUSH_TYPE_OFFLINE = 4,
//                         exports.PUSH_TYPE_FETCH_HISTORY = 5,
//                         exports.PUSH_TYPE_PRE_SEND = 6,
//                         exports.PUSH_TYPE_FETCH_SESSION_MESSAGE = 7,
//                         exports.PUSH_TYPE_MSG_SYNC = 9,
//                         exports.CHART_START_TYPE = "vsturl:u",
//                         exports
//                 }),
//             define("qiao-im-msdk/const", ["im-core/const"],
//                 function(e) {
//                     return e
//                 }),
//             define("im-core/config", ["require", "./const"],
//                 function(require) {
//                     var e = require("./const");
//                     return {
//                         bid: "",
//                         siteid: "",
//                         eid: "",
//                         crossDomain: !1,
//                         platform: e.PLATFORM_PC,
//                         server: e.SERVER_QIAO,
//                         authType: e.AUTH_TYPE_QIAO,
//                         authToken: "bridge",
//                         urlRoot: "/",
//                         sid: "-100",
//                         tid: "-1",
//                         fromType: 1,
//                         ttype: 1,
//                         reasons: ["vstreq:u", "vstsys:u", "vstwtr:u", "vsturl:u", "vstwtr:f", "vstreq:f", "vstsys:f"],
//                         isPageOnload: !0,
//                         isSessionConnected: !1,
//                         webSocket: !1,
//                         usingWs: !1,
//                         wsUrl: "/"
//                     }
//                 }),
//             define("qiao-im-msdk/config", ["im-core/config"],
//                 function(e) {
//                     return e
//                 }),
//             define("im-core/plugin/unknownMsg", ["require", "im-lib", "../config", "im-core"],
//                 function(require) {
//                     function e(e, t) {
//                         t({
//                             content: {
//                                 content: {
//                                     data: e.content,
//                                     msgInfo: e.msgInfo || {},
//                                     type: e.msgType || ""
//                                 },
//                                 type: r
//                             },
//                             mtype: a
//                         })
//                     }
//                     function t(e, t) {
//                         e = e || {};
//                         var r = e.content || {},
//                             s = r.content;
//                         if (r.mtype === o || r.mtype === a) try {
//                             s = n.json.parse(r.content),
//                                 s.msgInfo = s.msgInfo || {};
//                             var f = e.adata && n.json.parse(e.adata) || {};
//                             s.nickname = f.nickname || c
//                         } catch(e) {
//                             s = r.content
//                         }
//                         s.role = e.from === i.bid ? 0 : 1,
//                             require("im-core").emit("unknownMsg", s)
//                     }
//                     var exports = {},
//                         n = require("im-lib"),
//                         i = require("../config"),
//                         o = 1,
//                         a = 4,
//                         r = "unable message",
//                         s = "unable message",
//                         c = "\u5bf9\u65b9";
//                     return exports.encoder = {},
//                         exports.encoder[r] = e,
//                         exports.decoder = {},
//                         exports.decoder[s] = t,
//                         exports
//                 }),
//             define("qiao-im-msdk/plugin/unknownMsg", ["im-core/plugin/unknownMsg"],
//                 function(e) {
//                     return e
//                 }),
//             define("im-core/net", ["require", "im-lib"],
//                 function(require) {
//                     function e() {}
//                     var exports = {},
//                         t = require("im-lib").Emitter;
//                     t.mixin(exports);
//                     var n = "POST",
//                         i = {
//                             INITIAL: 0,
//                             INITIALIZED: 1,
//                             DISABLED: 2
//                         },
//                         o = i.INITIAL;
//                     return exports.canUseWs = function(e, t, n, a, r, s, c) {
//                         return e.isSupportWs && t.webSocket && o !== i.DISABLED
//                     },
//                         exports.successFactory = function(e, t, n, i, o) {
//                             var a = e;
//                             return function(e) {
//                                 try {
//                                     if (Object.prototype.toString.call(e).indexOf("String") !== -1) e = t.parse(e)
//                                 } catch(e) {
//                                     return void i()
//                                 }
//                                 if (a.set("sn", e.n_sn), !e.status || 2 === e.status) exports.emit("response", o || e.method, e.body || e),
//                                     n(e.body || e);
//                                 else exports.emit("auth invalid"),
//                                     i(e)
//                             }
//                         },
//                         exports.wsCommands = function(e, t, n, a) {
//                             return {
//                                 getComCallback: function(e) {
//                                     return {
//                                         "site/poll": {
//                                             success: exports.successFactory(n.pickSuccess, n.pickFailure),
//                                             failure: n.pickFailure
//                                         },
//                                         "chat/poll": {
//                                             success: exports.successFactory(a.wsPickSucc, a.wsPickFail),
//                                             failure: a.wsPickFail
//                                         }
//                                     }
//                                 },
//                                 changeStatus: function(t) {
//                                     o = t.status,
//                                         e.usingWs = o === i.INITIALIZED
//                                 },
//                                 getBaseBody: function(n) {
//                                     return {
//                                         auth: t.get(),
//                                         e: e.eid,
//                                         s: e.siteid,
//                                         v: e.bid
//                                     }
//                                 },
//                                 setAuth: function(n) {
//                                     t.set("key", n.key),
//                                         e.bid = n.bid
//                                 },
//                                 request: function(e) {
//                                     exports.request(e.path, e.options, "downgrade")
//                                 }
//                             }
//                         },
//                         exports.wsCallBack = function(e) {
//                             var t = exports.wsCommands();
//                             return t[e.type](e.data)
//                         },
//                         exports.jsonToQuery = function(e, t, n) {
//                             var i = [];
//                             return t.each(n,
//                                 function(n, o) {
//                                     if (t.isObject(o)) o = e.stringify(o);
//                                     if ("number" != typeof o) o = encodeURIComponent(o);
//                                     i.push(n + "=" + o)
//                                 }),
//                                 i.join("&")
//                         },
//                         exports.request = function(t, a, r, s, c, f, l) {
//                             var d = t.urlRoot + c;
//                             f = f || {};
//                             var u = f.failure || e,
//                                 m = f.success || e;
//                             if ("downgrade" !== l) f.success = exports.successFactory(m, u, c);
//                             var g = f.data || {};
//                             if (exports.emit("request", c, g), g.v = t.bid, g.s = t.siteid, g.e = t.eid, g.dev = t.platform, g.auth = a.get(), f.data = null, exports.canUseWs(g, c, m, u, l)) {
//                                 if (o === i.INITIAL) r.initWs(t.wsUrl + "?v=" + g.v, exports.wsCallBack);
//                                 r.ws(c, g, f)
//                             } else if (t.crossDomain) {
//                                 if (d += d.indexOf("?") >= 0 ? "&": "?", d += exports.jsonToQuery(g), f.type = g.type, f.key = "cb", f.op = g.op, f.l = g.l, 2 === g.type && "chat/push" === c && !m && !u || 3 === g.op && "site/auth" === c && !m && !u || 1 === g.op && "site/st" === c && !m && !u) {
//                                     var p = document.createElement("img");
//                                     return void(p.src = d)
//                                 }
//                                 if ("imgCross" === l) r.imgRequest(d);
//                                 else r.jsonp(d, f)
//                             } else {
//                                 if (f.method = f.method || "POST", f.method === n) f.data = s.stringify(g),
//                                     d = d + "?v=" + g.v;
//                                 else d += d.indexOf("?") >= 0 ? "&": "?",
//                                     d += exports.jsonToQuery(g),
//                                     d += "&v=" + g.v;
//                                 if (f.setCookie) d = d + "&s=" + g.s,
//                                     d = d + "&t=" + f.setCookie;
//                                 r.request(d, f)
//                             }
//                         },
//                         exports.auth = function(e, t, n, i) {
//                             var o;
//                             if (0 === e.visitType) o = t ? 0 : 1;
//                             else o = t ? 2 : 3;
//                             var a, r = {
//                                 success: n,
//                                 failure: i,
//                                 data: {
//                                     op: o,
//                                     dev: e.platform,
//                                     ser: e.server
//                                 }
//                             };
//                             if (!t) r.method = "GET",
//                                 a = "imgCross";
//                             exports.request("site/auth", r, a)
//                         },
//                         exports.poll = function(e, t, n) {
//                             var i = {
//                                 success: t,
//                                 failure: n,
//                                 data: {
//                                     l: e ? 1 : 0
//                                 }
//                             };
//                             exports.request("site/poll", i)
//                         },
//                         exports.site = function(e, t, n, i) {
//                             var o, a = {
//                                 success: n,
//                                 failure: i,
//                                 data: {
//                                     op: e ? 0 : 1,
//                                     s_info: t,
//                                     url: location.href
//                                 }
//                             };
//                             if (!e) a.method = "GET",
//                                 o = "imgCross";
//                             exports.request("site/st", a, o)
//                         },
//                         exports.chat = function(e, t, n) {
//                             var i = {
//                                 success: t,
//                                 failure: n,
//                                 data: e
//                             };
//                             exports.request("chat/st", i)
//                         },
//                         exports.pick = function(e, t, n, i) {
//                             var o = {
//                                 success: n,
//                                 failure: i,
//                                 data: {
//                                     l: 1,
//                                     sid: t || ""
//                                 }
//                             };
//                             if (e.isPageOnload || !e.isSessionConnected) exports.request("chat/poll", o);
//                             else o.data.l = 0,
//                                 setTimeout(function() {
//                                         exports.request("chat/poll", o)
//                                     },
//                                     3e3)
//                         },
//                         exports.push = function(e, t, n) {
//                             var i = {
//                                 success: t,
//                                 failure: n,
//                                 data: e || {}
//                             };
//                             if (2 === e.type) i.method = "GET";
//                             exports.request("chat/push", i)
//                         },
//                         exports.node = function(e, t, n) {
//                             var i = {
//                                 success: t,
//                                 failure: n,
//                                 data: e || {}
//                             };
//                             exports.request("bookmanage/saveBook.action", i)
//                         },
//                         exports.upload = function(e, t, n, i, o, a) {
//                             t.upload(e.urlRoot + n, i, "file", o, a)
//                         },
//                         exports.getUploadUrl = function(e, t, n, i) {
//                             return i = i || t.uuid(),
//                             e.urlRoot + "wupload/" + i + "/" + n.get("sid")
//                         },
//                         exports.getDownloadUrl = function(e, t, n, i, o) {
//                             return i = i || t.uuid(),
//                                 o = o || i,
//                             e.urlRoot + "wdownload/" + i + "/" + n.get("sid") + "/" + i + "?response-content-disposition=attachment;filename=" + o;
//                         },
//                         exports.getDomain = function(e) {
//                             e = e || "";
//                             var t = /https?:\/\/([^\/]+)/i,
//                                 n = e.match(t);
//                             return null != n && n.length > 1 ? n[1] : ""
//                         },
//                         exports.getParam = function(e, t) {
//                             t = t || "";
//                             var n = t.substr(t.indexOf("?")),
//                                 i = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
//                                 o = n.substr(1).match(i);
//                             return o && o.length > 2 ? decodeURIComponent(o[2]) : ""
//                         },
//                         exports.getXst = function() {
//                             var e = "",
//                                 t = exports.getDomain(location.href),
//                                 n = exports.getDomain(document.referrer);
//                             if (t && t.indexOf("baidu.com") >= 0) if (e = exports.getParam("xst", location.href), !e && exports.getParam("reqParam", location.href)) {
//                                 var i = exports.getParam("reqParam", location.href) || "";
//                                 try {
//                                     i = JSON.parse(i)
//                                 } catch(e) {
//                                     i = {}
//                                 }
//                                 if (i.xst) e = i.xst
//                             }
//                             if (!e && n && n.indexOf("baidu.com") >= 0) e = exports.getParam("xst", document.referrer);
//                             return e
//                         },
//                         exports.log = function(e, t, n) {
//                             var i = t + "/eye/log/js/stat.gif?";
//                             i += exports.jsonToQuery(n),
//                                 e.imgRequest(i)
//                         },
//                         exports
//                 }),
//             define("qiao-im-msdk/net", ["im-core/net"],
//                 function(e) {
//                     return e
//                 }),
//             define("im-core/chat", ["require", "im-lib", "./config", "./net"],
//                 function(require) {
//                     function e(e) {
//                         if (!e && v.connected) exports.emit("disconnect");
//                         if (v.stopPick = !0, v.connected = !1, v.sid = "", v.options && 1 === v.options.invited) v.options.invited = 0
//                     }
//                     function t() {
//                         if (!v.connected) if (v.csonline) if (!v.csonline || v.online) v.connected = !0,
//                             exports.emit("connected", {
//                                 sid: v.sid
//                             }),
//                             p.each(v.msgPool,
//                                 function(e) {
//                                     exports.emit("message", e)
//                                 }),
//                             v.msgPool = []
//                     }
//                     function n(t, n) {
//                         var i = {
//                             type: t
//                         };
//                         if (n) i.data = n;
//                         exports.emit("error", i),
//                             e()
//                     }
//                     function i(e, t) {
//                         if (!e.pickType) v.sid = e.sid,
//                             v.to = e.uid,
//                             v.authType = e.authtype,
//                             v.csonline = !0,
//                             v.ttype = e.ttype;
//                         if (t) b.sinfo = e.sinfo && m.json.parse(e.sinfo) || {}
//                     }
//                     function o() {
//                         k = {
//                             ifIR: !1,
//                             count: 0,
//                             id: null
//                         }
//                     }
//                     function a(e) {
//                         var t = {},
//                             n = e.length - 1;
//                         return p.each(e,
//                             function(i, o) {
//                                 var a = i.content.bcsName;
//                                 if ("img" === i.content.type && !t[a]) {
//                                     if (o >= n) return O.push(e[n]),
//                                         e;
//                                     p.each(e,
//                                         function(n, i) {
//                                             if ("string" == typeof n.content) {
//                                                 var r = document.createElement("div");
//                                                 r.innerHTML = n.content;
//                                                 var s = r.getElementsByTagName("img")[0];
//                                                 if (s && s.tagName && "IMG" === s.tagName.toUpperCase() && s.id === a) {
//                                                     var c = e.splice(o, 1);
//                                                     e.splice(i, 0, c[0]),
//                                                         t[a] = 1
//                                                 }
//                                             }
//                                         })
//                                 }
//                             }),
//                             e
//                     }
//                     function r(e) {
//                         var t;
//                         if (e && 1 === e.status && "auth invalid" === e.errinfo) n("offline"),
//                             t = !0;
//                         return t
//                     }
//                     function s(e) {
//                         if (R = 0, M) M = !1,
//                             exports.emit("reconnect");
//                         if (exports.isConnected()) {
//                             var t = v.options.siteid;
//                             if (t) m.localStorage.setItem("ACTIVE_" + t, +new Date)
//                         }
//                         p.each(e,
//                             function(e) {
//                                 var t = e.type,
//                                     n = exports.pickHandler[t];
//                                 if (n) n(e.msg)
//                             })
//                     }
//                     function c(e) {
//                         if (R++, R > P && !M) M = !0,
//                             exports.emit("offline")
//                     }
//                     function f(e) {
//                         s(e),
//                             d()
//                     }
//                     function l(e) {
//                         if (c(e), !r(e)) setTimeout(function() {
//                                 d()
//                             },
//                             3e3)
//                     }
//                     function d() {
//                         if (!v.stopPick) setTimeout(function() {
//                                 h.pick(v.sid, f, l)
//                             },
//                             0)
//                     }
//                     var u, m = require("im-lib"),
//                         g = m.Emitter,
//                         p = m.lang,
//                         b = require("./config"),
//                         h = require("./net"),
//                         v = {
//                             connected: !1,
//                             stopPick: !1,
//                             csonline: !1,
//                             msgPool: [],
//                             presend: {
//                                 sending: !1,
//                                 content: ""
//                             }
//                         },
//                         y = {
//                             INVITE: 18,
//                             ACCEPT: 20,
//                             BYE: 28
//                         },
//                         w = {
//                             OVER: 4,
//                             TAKE_OVER: 3,
//                             TRANSFER: 6,
//                             RECEIVE: 2
//                         },
//                         T = "blocked",
//                         E = "auto",
//                         S = {
//                             SUCCESS: 0,
//                             FAILURE: 1
//                         },
//                         I = {
//                             QUEUEING: 2,
//                             TALKING: 4
//                         },
//                         C = 10,
//                         k = {
//                             ifIR: !1,
//                             count: 1,
//                             id: null
//                         },
//                         x = {
//                             CSR: 0,
//                             GROUP: 1,
//                             IR: 4
//                         },
//                         N = {
//                             READY: 0,
//                             BUSY: 1,
//                             LEAVE: 2,
//                             UNLOGIN: 3
//                         },
//                         L = {
//                             TRANSFER: 0,
//                             CONVERSATION: 1
//                         },
//                         A = {
//                             COUNT: 0,
//                             LIST: 1,
//                             MSG_SYNC: 0,
//                             END_TIME: 0,
//                             PAGE: 20,
//                             DEFAULT: 5,
//                             DELAY: 2e3
//                         },
//                         O = [],
//                         exports = {};
//                     g.mixin(exports),
//                         h.on("auth invalid",
//                             function() {
//                                 v.stopPick = !0
//                             }),
//                         exports.pickHandler = {},
//                         exports.pickHandler[100] = function(e) {
//                             if (e.op === y.ACCEPT) if (e.st === S.SUCCESS) A.END_TIME = e.systime || 0,
//                                 v.sid = e.sid,
//                                 v.to = e.uid,
//                                 v.authType = e.authtype,
//                                 v.csonline = !0,
//                                 v.online = !0,
//                                 b.sinfo = e.sinfo && m.json.parse(e.sinfo) || {},
//                                 exports.fetchOfflineMsg(),
//                                 A.MSG_SYNC = e.systime || 0;
//                             else exports.bye();
//                             if (e.op === y.BYE) if (e.st === S.SUCCESS) {
//                                 var t = v.options || {};
//                                 if ("talk to other" === e.reason) v.stopPick = !1,
//                                     t.invited = 0,
//                                     t.tid = b.tid,
//                                     t.ttype = 1,
//                                     t.sid = "",
//                                     t.from = 5,
//                                     exports.connect(t.ttype, t, !1)
//                             } else exports.emit("invitefail");
//                             if (e.op === y.INVITE) {
//                                 if (A.END_TIME = e.systime || 0, "queue" === e.reason) return;
//                                 if (e.ttype === x.IR) k.ifIR = !0,
//                                     k.id = e.uid,
//                                     exports.emit("currentIR");
//                                 if ("re_invite" === e.reason && b.status === I.QUEUEING) return void exports.emit("queueing");
//                                 if ("re_invite" === e.reason) {
//                                     if (b.sinfo = e.sinfo && m.json.parse(e.sinfo) || {},
//                                         v.sid = e.sid, v.to = e.uid, v.authType = e.authtype, v.tid = b.tid || "", v.ttype = e.ttype, v.csonline = !0, v.online = !0, b.syncSessionHistory) exports.fetchSessionMessage();
//                                     return void exports.fetchOfflineMsg()
//                                 }
//                                 if (e.st === S.SUCCESS) v.sid = e.sid,
//                                     v.to = e.uid,
//                                     v.authType = e.authtype,
//                                     v.csonline = !0,
//                                     v.ttype = e.ttype,
//                                     b.sinfo = e.sinfo && m.json.parse(e.sinfo) || {};
//                                 else {
//                                     var n = m.json.parse(e.adata || "{}");
//                                     return v.to = n.uid || "-1",
//                                         v.authType = e.authtype,
//                                         v.csonline = !1,
//                                         exports.emit("csoffline"),
//                                         void exports.fetchOfflineMsg()
//                                 }
//                                 exports.fetchOfflineMsg()
//                             }
//                         },
//                         exports.pickHandler[101] = function(t) {
//                             if (t.msgHandlerType = t.msgHandlerType || "", t.opr === w.OVER) if (t.reason && t.reason.indexOf(T) !== -1) exports.emit("visitorblock", t),
//                                 e();
//                             else if (t.reason && t.reason.indexOf(E) !== -1) exports.emit("autoendtalk", t),
//                                 e();
//                             else n("forceover");
//                             else if (t.opr === w.TAKE_OVER) if (i(t, !0), k.ifIR) o(),
//                                 exports.emit("fininshIR", {
//                                     type: "invite"
//                                 });
//                             else exports.emit("updateNewCSR", b.sinfo);
//                             else if (t.opr === w.TRANSFER) if (i(t, !0), k.ifIR) o(),
//                                 exports.emit("fininshIR", {
//                                     type: "online"
//                                 });
//                             else exports.emit("updateNewCSR", b.sinfo);
//                             else if (t.opr === w.RECEIVE) {
//                                 var a = t.detail || {};
//                                 if (a.join_action === L.TRANSFER) {
//                                     var r = !1,
//                                         s = t.adata && m.json.parse(t.adata) || {},
//                                         c = s.transfer || {},
//                                         f = t.sinfo && m.json.parse(t.sinfo) || {};
//                                     if (c.status) r = !0,
//                                         exports.emit("visitorTransfer", {
//                                                 nickname: f.nickname || ""
//                                             },
//                                             t.msgHandlerType);
//                                     i(t, r)
//                                 }
//                             }
//                         },
//                         exports.pickHandler[103] = function(e) {
//                             if (v.connected) {
//                                 if (exports.emit("message", e), k.ifIR && e.from === k.id && k.count) if (++k.count >= 5) exports.emit("showMsgRemind", k.count),
//                                     k.count = 0
//                             } else v.msgPool.push(e)
//                         },
//                         exports.pickHandler[104] = function(e) {
//                             if (b.status = e.status, e.status === I.QUEUEING) v.sid = e.sid,
//                                 v.queueing = !0,
//                                 exports.emit("queueing");
//                             if (e.status === I.TALKING) if (v.queueing = !1, v.sid = e.sid, v.online = !0, t(), k.ifIR) if ("" !== e.reason) exports.emit("transferError", e)
//                         },
//                         exports.pickHandler[105] = function(e) {
//                             if (u) clearTimeout(u),
//                                 u = null;
//                             var t = e.detail || [];
//                             if (e.type === A.COUNT) {
//                                 var n = 0;
//                                 if (p.each(t,
//                                     function(e, t) {
//                                         n += e.count
//                                     }), n < A.DEFAULT) n = A.DEFAULT;
//                                 if (n > A.PAGE) n = A.PAGE;
//                                 exports.fetchHistory({
//                                     count: n
//                                 })
//                             } else if (e.type === A.LIST) {
//                                 var i = t.length;
//                                 if (t[0]) A.MSG_SYNC = t[0].systime || A.MSG_SYNC;
//                                 if (t[i - 1]) A.END_TIME = t[i - 1].systime || A.END_TIME;
//                                 t = O.concat(t),
//                                     O = [],
//                                     t = a(t),
//                                     p.each(t,
//                                         function(e, t) {
//                                             e.msgHandlerType = "insertBefore",
//                                                 exports.emit("message", e)
//                                         }),
//                                     exports.fetchHisFinish(!0, e)
//                             }
//                         },
//                         exports.pickHandler[106] = function(e) {
//                             v.sid = e.sid,
//                                 v.to = e.uid,
//                                 v.authType = e.authtype,
//                                 v.csonline = !0,
//                                 b.sinfo = e.sinfo && m.json.parse(e.sinfo) || {},
//                                 exports.fetchOfflineMsg()
//                         },
//                         exports.pickHandler[107] = function(e) {
//                             if (e.webmsg) {
//                                 var t = m.json.parse(e.webmsg);
//                                 t.body.reverse(),
//                                     p.each(t.body,
//                                         function(e) {
//                                             var t = e.msg;
//                                             t.msgHandlerType = "insertBefore",
//                                                 t.time = parseInt( + t.time / 1e3, 10);
//                                             var n = e.msg.content;
//                                             if (m.lang.isArray(n)) p.each(n,
//                                                 function(e) {
//                                                     var n = e.pickType;
//                                                     if (n) {
//                                                         var i = exports.pickHandler[n];
//                                                         if (e.msgHandlerType = "insertBefore", i) i(e)
//                                                     } else t.content = e.content || e,
//                                                         t.mtype = e.mtype || 0,
//                                                         exports.emit("message", t)
//                                                 })
//                                         })
//                             }
//                         },
//                         exports.pickHandler[108] = function(e) {
//                             if (k.ifIR && e.status === N.READY) exports.emit("csonline", e, "IR");
//                             else if (!v.connected && e.status === N.READY) exports.emit("csonline", e, "OFFLINE_MSG")
//                         },
//                         exports.receiveOfflineMsg = function(e) {
//                             var t = {
//                                 sid: "",
//                                 tid: v.tid,
//                                 type: e.PUSH_TYPE_MSG_SYNC,
//                                 tid_authtype: b.authType,
//                                 param: {
//                                     systime: A.MSG_SYNC
//                                 }
//                             };
//                             h.push(t, null, null)
//                         },
//                         exports.fetchHisFinish = function(e, n) {
//                             if (n = n || {},
//                                 e) exports.receiveOfflineMsg(),
//                                 exports.emit("fetchhistorysuccess");
//                             else exports.emit("fetchhistoryfail");
//                             exports.emit("fetchhistoryfinish", n),
//                                 t()
//                         },
//                         exports.fetchHistory = function(e, t) {
//                             t = t || {};
//                             var n = b.offlineMsgGetType || 0,
//                                 i = n ? "": v.sid,
//                                 o = n ? "-1": v.tid,
//                                 a = n ? b.bid: v.to,
//                                 r = {
//                                     sid: i,
//                                     tid: o,
//                                     type: e.PUSH_TYPE_FETCH_HISTORY,
//                                     tid_authtype: b.authType,
//                                     param: {
//                                         type: 1,
//                                         gettype: n,
//                                         from: a,
//                                         max_count: t.count || C,
//                                         from_authtype: v.authType,
//                                         endtime: A.END_TIME
//                                     }
//                                 };
//                             h.push(r, null, exports.fetchHisFinish)
//                         },
//                         exports.fetchSessionMessage = function(e) {
//                             var t = v.tid || "",
//                                 n = t,
//                                 i = "";
//                             if (t.indexOf(":")) {
//                                 var o = t.split(":");
//                                 n = o[0],
//                                     i = o[1] || ""
//                             }
//                             var a = m.json.stringify({
//                                     tag: 1,
//                                     type: 2,
//                                     userId: n - 0,
//                                     subId: i - 0,
//                                     bid: b.bid
//                                 }),
//                                 r = {
//                                     sid: v.sid,
//                                     tid: v.tid,
//                                     type: e.PUSH_TYPE_FETCH_SESSION_MESSAGE,
//                                     tid_authtype: b.authType,
//                                     param: {
//                                         webmsg: a
//                                     }
//                                 };
//                             h.push(r)
//                         },
//                         exports.bye = function(e) {
//                             var t = {
//                                 sid: v.options.sid,
//                                 tid: v.tid,
//                                 type: e.PUSH_TYPE_BYE,
//                                 tid_authtype: b.authType,
//                                 param: {
//                                     reason: "bye for invite error"
//                                 }
//                             };
//                             h.push(t)
//                         };
//                     var R = 0,
//                         M = !1,
//                         P = 3;
//                     return exports.wsPickSucc = function(e) {
//                         s(e)
//                     },
//                         exports.wsPickFail = function(e) {
//                             c(e)
//                         },
//                         exports.pick = d,
//                         exports.connect = function(e, t, i, o, a) {
//                             o = o || {},
//                                 v.tid = o.tid || "",
//                                 v.options = o;
//                             var r = {
//                                 op: 0,
//                                 sid: o.sid || "",
//                                 tid: v.tid,
//                                 tid_authtype: t.authType,
//                                 invited: o.invited - 0 ? 1 : 0,
//                                 rtype: o.route || 0,
//                                 ttype: i,
//                                 inviterefer: document.referrer,
//                                 sp_refer: o.sp_refer || "",
//                                 reason: t.reasons[o.from] || e.CHART_START_TYPE
//                             };
//                             if (t.adata && 1 !== o.noshowSmartInvite) r.adata = t.adata;
//                             h.chat(r,
//                                 function(e) {
//                                     if (a !== !1) if (v.stopPick = !1, t.usingWs) exports.wsPickSucc(e),
//                                         exports.wsPick();
//                                     else d()
//                                 },
//                                 function() {
//                                     n("connect")
//                                 })
//                         },
//                         exports.wsPick = function(e) {
//                             if (d(), e.usingWs) setTimeout(exports.wsPick, 3e4)
//                         },
//                         exports.talking = function(e, n) {
//                             if (n = n || {},
//                                 e = e || {},
//                                 b.sinfo = e.sinfo && m.json.parse(e.sinfo) || {},
//                                 v.sid = e.sid, v.to = n.tid, v.authType = e.authtype, v.csonline = !0, v.online = !0, v.tid = e.tid || "", v.options = n, v.stopPick = !1, b.syncSessionHistory) exports.fetchSessionMessage();
//                             t(),
//                                 d()
//                         },
//                         exports.queue = function(e, t) {
//                             t = t || {},
//                                 e = e || {},
//                                 b.sinfo = e.sinfo && m.json.parse(e.sinfo) || {},
//                                 v.sid = e.sid,
//                                 v.to = e.uid,
//                                 v.authType = e.authtype,
//                                 v.csonline = !0,
//                                 v.tid = e.tid || "",
//                                 v.options = t,
//                                 v.stopPick = !1,
//                                 exports.emit("queueing"),
//                                 d()
//                         },
//                         exports.preSend = function(e, t) {
//                             if (t.content && v.presend.sending !== !0 && t.content !== v.presend.content) {
//                                 t.mtype = 0,
//                                     t.to = v.to,
//                                     t.time = (new Date).getTime(),
//                                     t.rtype = v.ttype;
//                                 var n = {
//                                     sid: v.sid || "",
//                                     tid: v.to,
//                                     type: e.PUSH_TYPE_PRE_SEND,
//                                     tid_authtype: v.authType,
//                                     param: t
//                                 };
//                                 h.push(n,
//                                     function(e) {
//                                         v.presend.sending = !1
//                                     },
//                                     function(e) {
//                                         v.presend.sending = !1
//                                     }),
//                                     v.presend.sending = !0,
//                                     v.presend.content = t.content
//                             }
//                         },
//                         exports.send = function(e, t, n, i) {
//                             t.from = b.bid,
//                                 t.to = v.to,
//                                 t.time = (new Date).getTime(),
//                                 t.rtype = v.ttype;
//                             var o = {
//                                 sid: v.sid || "",
//                                 tid: v.to,
//                                 type: v.csonline ? e.PUSH_TYPE_CHAT: e.PUSH_TYPE_OFFLINE,
//                                 tid_authtype: v.authType,
//                                 param: t
//                             };
//                             if (void 0 !== t.adata) o.adata = t.adata,
//                                 delete t.adata;
//                             h.push(o, n,
//                                 function(e) {
//                                     if (r(e), i) i()
//                                 })
//                         },
//                         exports.disconnect = function(t, n, i) {
//                             t = t || {};
//                             var o = void 0 === t.tid_authtype ? v.authType: t.tid_authtype;
//                             o = o || 4,
//                                 h.push({
//                                         type: 2,
//                                         sid: t.sid || v.sid,
//                                         tid: t.tid || v.to || -1,
//                                         reason: t.reason || "",
//                                         tid_authtype: o
//                                     },
//                                     n, i),
//                                 e(!0)
//                         },
//                         exports.isConnected = function() {
//                             return v.connected
//                         },
//                         exports.get = function(e) {
//                             return v[e]
//                         },
//                         exports.setStopPick = function(e) {
//                             v.stopPick = e
//                         },
//                         exports.fetchOfflineMsg = function(e) {
//                             if (b.syncFetchOfflineMsg) {
//                                 var n = {
//                                     sid: "",
//                                     tid: "-1",
//                                     type: e.PUSH_TYPE_FETCH_HISTORY,
//                                     tid_authtype: b.authType,
//                                     param: {
//                                         type: A.COUNT,
//                                         from: v.to,
//                                         from_authtype: v.authType
//                                     }
//                                 };
//                                 h.push(n, null, exports.fetchHisFinish),
//                                     u = setTimeout(function() {
//                                             t()
//                                         },
//                                         A.DELAY)
//                             } else t()
//                         },
//                         exports
//                 }),
//             define("qiao-im-msdk/chat", ["im-core/chat"],
//                 function(e) {
//                     return e
//                 }),
//             define("im-core/plugin/img", ["require", "im-lib", "../chat", "../net", "im-core/chat", "../main"],
//                 function(require) {
//                     function e(e) {
//                         return e = e.split(d ? "\\": "/"),
//                             e.pop()
//                     }
//                     function t(e) {
//                         return "wupload/" + e + "/" + r.get("sid")
//                     }
//                     function n(e, t) {
//                         var n = require("im-core/chat");
//                         return t = t || "a.jpg",
//                         "wdownload/" + e + "/" + n.get("sid") + "/" + t
//                     }
//                     function i(n, i) {
//                         var o = (e(n.path), n.bcsName),
//                             a = t(o);
//                         c[a] = {
//                             msg: n,
//                             done: i
//                         };
//                         var r = '<img id="' + o + '" data-uploaded="0" data-bcsName="' + o + '"/>',
//                             d = {
//                                 mtype: 0,
//                                 content: r
//                             };
//                         i(d);
//                         var u = {
//                                 mtype: l,
//                                 content: {
//                                     type: f,
//                                     bcsName: o
//                                 }
//                             },
//                             m = require("../main");
//                         s.upload(a, n.form || n.path,
//                             function() {
//                                 u.content.status = 0,
//                                     i(u),
//                                     m.emit("imgsendsuccess", {
//                                         bcsName: o,
//                                         id: n.mid,
//                                         status: "success"
//                                     })
//                             },
//                             function() {
//                                 u.content.status = 1,
//                                     i(u),
//                                     m.emit("imgsendfail", {
//                                         bcsName: o,
//                                         id: n.id,
//                                         status: "fail"
//                                     })
//                             })
//                     }
//                     function o(e, t) {
//                         var i = e.content,
//                             o = i.bcsName,
//                             a = n(o, "img");
//                         t({
//                             type: f,
//                             bcsName: o,
//                             bcsUrl: a,
//                             status: i.status
//                         })
//                     }
//                     var a = require("im-lib").Emitter,
//                         r = require("../chat"),
//                         s = require("../net"),
//                         c = {},
//                         f = "img",
//                         l = 1,
//                         d = / window nt/i.test(navigator.userAgent),
//                         exports = {};
//                     return a.mixin(exports),
//                         exports.encoder = {},
//                         exports.encoder[f] = i,
//                         exports.decoder = {},
//                         exports.decoder[f] = o,
//                         exports
//                 }),
//             define("qiao-im-msdk/plugin/img", ["im-core/plugin/img"],
//                 function(e) {
//                     return e
//                 }),
//             define("im-core/plugin/shake", ["require", "../main"],
//                 function(require) {
//                     function e(e, t) {
//                         t({
//                             mtype: i,
//                             content: {
//                                 type: n
//                             }
//                         })
//                     }
//                     function t(e, t) {
//                         var n = require("../main");
//                         n.emit("shake", e.msgHandlerType || ""),
//                             t()
//                     }
//                     var exports = {},
//                         n = "shake",
//                         i = 4;
//                     return exports.encoder = {},
//                         exports.encoder[n] = e,
//                         exports.decoder = {},
//                         exports.decoder[n] = t,
//                         exports
//                 }),
//             define("qiao-im-msdk/plugin/shake", ["im-core/plugin/shake"],
//                 function(e) {
//                     return e
//                 }),
//             define("im-core/plugin/text", ["require", "../chat", "../config", "im-core/chat"],
//                 function(require) {
//                     function e(e, t) {
//                         var n = document.createElement("div");
//                         n.innerHTML = e.text || "";
//                         for (var i = n.getElementsByTagName("img"), o = i.length; o; o--) {
//                             var a = i[o - 1];
//                             if (a.getAttribute("data-bcsName")) {
//                                 var s = document.createElement("img");
//                                 s.setAttribute("data-bcsName", a.getAttribute("data-bcsName")),
//                                     s.setAttribute("data-uploaded", a.getAttribute("data-uploaded")),
//                                     s.id = a.id,
//                                     a.id = "";
//                                 var c = a.parentNode;
//                                 c.insertBefore(s, a),
//                                     c.removeChild(a)
//                             }
//                         }
//                         t({
//                             mtype: r,
//                             content: n.innerHTML.replace(/\r|\n/gi, "") || ""
//                         })
//                     }
//                     function t(e, t) {
//                         var n = require("im-core/chat");
//                         return t = t || "a.jpg",
//                             o.urlRoot = o.urlRoot || "",
//                         o.urlRoot + "wdownload/" + e + "/" + n.get("sid") + "/" + t
//                     }
//                     function n(e) {
//                         var n = document.createElement("div");
//                         n.innerHTML = e;
//                         for (var i = n.getElementsByTagName("img"), o = 0; o < i.length; o++) {
//                             var a = i[o],
//                                 r = a.getAttribute("data-bcsName"),
//                                 s = a.getAttribute("data-bcsUrl");
//                             if (r && !s) s = t(r, r),
//                                 a.setAttribute("data-bcsUrl", s)
//                         }
//                         return n.innerHTML
//                     }
//                     function i(e, t) {
//                         var i = (require("../chat"), n(e.content)),
//                             r = e.from === o.bid ? 0 : 1;
//                         t({
//                             type: a,
//                             role: r,
//                             time: 1e3 * e.time,
//                             text: i || ""
//                         })
//                     }
//                     var o = (require("../chat"), require("../config")),
//                         a = "text",
//                         r = 0,
//                         exports = {};
//                     return exports.encoder = {},
//                         exports.encoder[a] = e,
//                         exports.decoder = {},
//                         exports.decoder[r] = i,
//                         exports
//                 }),
//             define("qiao-im-msdk/plugin/text", ["im-core/plugin/text"],
//                 function(e) {
//                     return e
//                 }),
//             define("im-core/plugin/transfer", [],
//                 function() {
//                     function e(e, t) {
//                         t({
//                             mtype: i,
//                             content: {
//                                 type: n
//                             }
//                         })
//                     }
//                     function t(e, t) {
//                         t()
//                     }
//                     var exports = {},
//                         n = "transfer",
//                         i = 4;
//                     return exports.encoder = {},
//                         exports.encoder[n] = e,
//                         exports.decoder = {},
//                         exports.decoder[i] = t,
//                         exports
//                 }),
//             define("qiao-im-msdk/plugin/transfer", ["im-core/plugin/transfer"],
//                 function(e) {
//                     return e
//                 }),
//             define("im-core/plugin/uploaded", [],
//                 function() {
//                     function e(e, t) {
//                         t({
//                             mtype: i,
//                             content: {
//                                 type: n,
//                                 bcsName: e.bcsName,
//                                 status: 0
//                             }
//                         })
//                     }
//                     function t(e, t) {
//                         t()
//                     }
//                     var exports = {},
//                         n = "img",
//                         i = 1;
//                     return exports.encoder = {},
//                         exports.encoder.uploaded = e,
//                         exports.decoder = {},
//                         exports.decoder.uploaded = t,
//                         exports
//                 }),
//             define("qiao-im-msdk/plugin/uploaded", ["im-core/plugin/uploaded"],
//                 function(e) {
//                     return e
//                 }),
//             define("im-core/plugin/voice", ["require", "../config"],
//                 function(require) {
//                     function e(e, t) {
//                         t({
//                             mtype: o,
//                             content: e
//                         })
//                     }
//                     function t(e, t) {
//                         var o = e.content,
//                             s = e.from === n.bid ? 0 : 1;
//                         t({
//                             type: i,
//                             role: s,
//                             text: a + o.text,
//                             bcsName: o.bcsName,
//                             fetchURL: r.replace(/#{bcsName}/g, o.bcsName),
//                             duration: o.duration,
//                             token: o.token
//                         })
//                     }
//                     var n = require("../config"),
//                         i = "voice",
//                         o = 2,
//                         a = "\u8bed\u97f3\u8f6c\u8bd1\uff1a",
//                         r = '//p.qiao.baidu.com/cps/audio/getAudio?reqParam={"audioName": "#{bcsName}"}',
//                         exports = {};
//                     return exports.encoder = {},
//                         exports.encoder[i] = e,
//                         exports.decoder = {},
//                         exports.decoder[i] = t,
//                         exports
//                 }),
//             define("qiao-im-msdk/plugin/voice", ["im-core/plugin/voice"],
//                 function(e) {
//                     return e
//                 }),
//             define("im-core/plugin/location", ["require", "../config"],
//                 function(require) {
//                     function e(e, t) {
//                         t({
//                             mtype: o,
//                             content: e
//                         })
//                     }
//                     function t(e, t) {
//                         var o = e.from === n.bid ? 0 : 1;
//                         e.content.type = i,
//                             e.content.role = o,
//                             e.content.text = a,
//                             t(e.content)
//                     }
//                     var n = require("../config"),
//                         i = "location",
//                         o = 4,
//                         a = "[\u5730\u7406\u4f4d\u7f6e]",
//                         exports = {};
//                     return exports.encoder = {},
//                         exports.encoder[i] = e,
//                         exports.decoder = {},
//                         exports.decoder[i] = t,
//                         exports
//                 }),
//             define("qiao-im-msdk/plugin/location", ["im-core/plugin/location"],
//                 function(e) {
//                     return e
//                 }),
//             define("im-core/plugin/config", ["require", "./fileTransfer", "./unknownMsg", "./img", "./shake", "./text", "./transfer", "./uploaded", "./voice", "./location"],
//                 function(require) {
//                     return {
//                         package: "coreplugin",
//                         resource: {
//                             fileTransfer: require("./fileTransfer"),
//                             unknownMsg: require("./unknownMsg"),
//                             img: require("./img"),
//                             shake: require("./shake"),
//                             text: require("./text"),
//                             transfer: require("./transfer"),
//                             uploaded: require("./uploaded"),
//                             voice: require("./voice"),
//                             location: require("./location")
//                         }
//                     }
//                 }),
//             define("qiao-im-msdk/plugin/config", ["im-core/plugin/config"],
//                 function(e) {
//                     return e
//                 }),
//             define("im-lib/websocket/config", [],
//                 function() {
//                     var exports = {
//                         wsUrl: "/",
//                         majorVer: "1",
//                         minorVer: "0",
//                         protocol: "0",
//                         reqTimeout: 2e4,
//                         wsTimeout: 3e4
//                     };
//                     return exports
//                 }),
//             define("im-lib/websocket/const", [],
//                 function() {
//                     var exports = {
//                         MSGINITSTATUS: {
//                             INITIAL: 0,
//                             INITIALIZED: 1
//                         },
//                         WSINITSTATUS: {
//                             INITIAL: 0,
//                             INITIALIZING: 1,
//                             INITIALIZED: 2
//                         },
//                         WSSTATUS: {
//                             CONNECTING: 0,
//                             OPEN: 1,
//                             CLOSING: 2,
//                             CLOSED: 3
//                         },
//                         REQMSGTYPE: {
//                             CONTROL: 0,
//                             BEAT: 1,
//                             TEXT: 2
//                         },
//                         REQPROTYPE: {
//                             BEAT: 0,
//                             REQUEST: 2,
//                             ACK: 5
//                         },
//                         REQSTATUS: {
//                             UNSENT: 0,
//                             SENT: 1,
//                             CONFIRMED: 2
//                         },
//                         RESPPROTYPE: {
//                             BEATACK: 1,
//                             ACK: 3,
//                             REQUEST: 4
//                         }
//                     };
//                     return exports
//                 }),
//             define("im-lib/websocket/index", ["require", "./const"],
//                 function(require) {
//                     function e(e) {
//                         return g[e.type](e.data)
//                     }
//                     function t(e) {
//                         return {
//                             seqId: parseInt(e.substr(2, 8), 10),
//                             type: parseInt(e.substr(10, 1), 10)
//                         }
//                     }
//                     var exports = {},
//                         n = require("./const"),
//                         i = 1,
//                         o = 1,
//                         a = n.MSGINITSTATUS.INITIAL,
//                         r = {},
//                         s = {},
//                         c = {},
//                         f = {},
//                         l = null,
//                         d = null,
//                         u = {
//                             "site/auth": n.REQMSGTYPE.CONTROL,
//                             "site/st": n.REQMSGTYPE.CONTROL,
//                             "site/poll": n.REQMSGTYPE.BEAT,
//                             "chat/st": n.REQMSGTYPE.CONTROL,
//                             "chat/poll": n.REQMSGTYPE.BEAT,
//                             "chat/push": n.REQMSGTYPE.TEXT,
//                             ack: n.REQMSGTYPE.ACK
//                         },
//                         m = {
//                             "site/auth": n.REQPROTYPE.REQUEST,
//                             "site/st": n.REQPROTYPE.REQUEST,
//                             "site/poll": n.REQPROTYPE.BEAT,
//                             "chat/st": n.REQPROTYPE.REQUEST,
//                             "chat/poll": n.REQPROTYPE.BEAT,
//                             "chat/push": n.REQPROTYPE.REQUEST,
//                             ack: n.REQPROTYPE.ACK
//                         },
//                         g = {
//                             disabled: function(e) {
//                                 l({
//                                     type: "changeStatus",
//                                     data: {
//                                         status: 2
//                                     }
//                                 });
//                                 for (var t in s) if (s.hasOwnProperty(t)) {
//                                     var n = s[t];
//                                     clearTimeout(n.timeOut);
//                                     var i = n.data.substr(20);
//                                     try {
//                                         i = JSON.parse(i);
//                                         var o = n.options,
//                                             a = i.method.substr(1);
//                                         delete i.method,
//                                             delete i.header,
//                                             delete i.msgid,
//                                             o.data = i,
//                                             l({
//                                                 type: "request",
//                                                 data: {
//                                                     path: a,
//                                                     options: o
//                                                 }
//                                             })
//                                     } catch(e) {}
//                                 }
//                             },
//                             message: function(e) {
//                                 exports.dealMsg(e)
//                             }
//                         };
//                     return exports.generateHead = function(e, t, n) {
//                         return t.majorVer + t.minorVer + e.padLeft(n.seqId, 8) + n.type + t.protocol + "00001111"
//                     },
//                         exports.encodeMsg = function(e, t, o, a) {
//                             var r = {};
//                             if (r.type = m[t], r.msgType = u[t], r.status = n.REQSTATUS.UNSENT, r.msgid = e.msgid(), r.type === n.REQPROTYPE.ACK) r.seqId = a.seqId;
//                             else r.seqId = i++;
//                             o.msgid = r.msgid,
//                                 o.method = "/" + t,
//                                 o.header = {
//                                     cookie: document.cookie
//                                 };
//                             var s = exports.generateHead(r);
//                             return r.data = s + JSON.stringify(o),
//                                 r.options = a,
//                                 r
//                         },
//                         exports.sendMsg = function(e, t, i, o, a) {
//                             function r() {
//                                 t.send(c.data),
//                                     c.timeOut = setTimeout(r, e.reqTimeout)
//                             }
//                             var c = exports.encodeMsg(i, o, a);
//                             if (c.type === n.REQPROTYPE.REQUEST) s[c.seqId] = c,
//                                 f[c.msgid] = c,
//                                 r(),
//                                 c.status = n.REQSTATUS.SENT;
//                             else t.send(c.data)
//                         },
//                         exports.decodeMsg = function(e) {
//                             var n = {},
//                                 i = t(e.substr(0, 20));
//                             if (n.seqId = i.seqId, n.type = i.type, n.body = "" === e.substr(20) ? {}: JSON.parse(e.substr(20)), null === d && n.body.body) {
//                                 var o = n.body.body[0];
//                                 l({
//                                     type: "setAuth",
//                                     data: {
//                                         key: o.key,
//                                         bid: o.msg.v
//                                     }
//                                 })
//                             }
//                             return n
//                         },
//                         exports.dealMsg = function(e) {
//                             var t = exports.decodeMsg(e);
//                             if (t.type === n.RESPPROTYPE.ACK) {
//                                 var i = s[t.seqId];
//                                 clearTimeout(i.timeOut),
//                                     i.status = n.REQSTATUS.CONFIRMED,
//                                     delete s[t.seqId]
//                             } else if (t.type === n.RESPPROTYPE.REQUEST) {
//                                 if (null === d) d = l({
//                                     type: "getBaseBody",
//                                     data: {}
//                                 });
//                                 if (exports.sendMsg("ack", d, {
//                                     seqId: t.seqId
//                                 }), t.seqId === o) {
//                                     do
//                                         try {
//                                             if (f[t.body.msgid]) {
//                                                 var i = f[t.body.msgid];
//                                                 i.options.success(t.body),
//                                                     delete f[t.body.msgid]
//                                             } else r[t.body.method].success(t.body);
//                                             delete c[o]
//                                         } catch(e) {} finally {
//                                             o++
//                                         }
//                                     while (t = c[o])
//                                 } else if (t.seqId > o) c[t.seqId] = t
//                             }
//                         },
//                         exports.init = function(t, i, o, s) {
//                             if (a === n.MSGINITSTATUS.INITIAL) i.wsUrl = o,
//                                 l = s,
//                                 r = l({
//                                     type: "getComCallback"
//                                 }),
//                                 t.init(e),
//                                 a = n.MSGINITSTATUS.INITIALIZED,
//                                 l({
//                                     type: "changeStatus",
//                                     data: {
//                                         status: 1
//                                     }
//                                 })
//                         },
//                         exports
//                 }),
//             define("im-lib/websocket/websocket", ["require", "./const"],
//                 function(require) {
//                     function e(e) {
//                         if (r.readyState === a.WSSTATUS.OPEN) f = a.WSINITSTATUS.INITIALIZED,
//                             s = 3,
//                             exports.pushAllMsgs()
//                     }
//                     function t(e) {
//                         l({
//                             type: "message",
//                             data: e.data
//                         })
//                     }
//                     function n(e) {}
//                     function i(e) {
//                         if (f = a.WSINITSTATUS.INITIAL, s-->0) exports.init(l);
//                         else l({
//                             type: "disabled",
//                             data: c
//                         })
//                     }
//                     function o() {
//                         r.addEventListener("open", e),
//                             r.addEventListener("message", t),
//                             r.addEventListener("error", n),
//                             r.addEventListener("close", i)
//                     }
//                     var exports = {},
//                         a = require("./const"),
//                         r = null,
//                         s = 3,
//                         c = [],
//                         f = a.WSINITSTATUS.INITIAL,
//                         l = null;
//                     return exports.pushAllMsgs = function() {
//                         for (var e = null; e = c.shift();) r.send(e)
//                     },
//                         exports.send = function(e) {
//                             if (f === a.WSINITSTATUS.INITIALIZED) r.send(e);
//                             else c.push(e)
//                         },
//                         exports.close = function() {
//                             r.close()
//                         },
//                         exports.init = function(e, t) {
//                             if (f === a.WSINITSTATUS.INITIAL) f = a.WSINITSTATUS.INITIALIZING,
//                                 r = new WebSocket(e.wsUrl),
//                                 setTimeout(function() {
//                                         if (f === a.WSINITSTATUS.INITIALIZING) exports.close()
//                                     },
//                                     e.wsTimeout),
//                                 l = t,
//                                 o()
//                         },
//                         exports
//                 }),
//             define("im-lib/config", ["require", "./lang", "./json", "./net", "./util", "./Emitter", "./localStorage", "./main", "./websocket/config", "./websocket/const", "./websocket/index", "./websocket/websocket"],
//                 function(require) {
//                     return {
//                         package: "imLib",
//                         resource: {
//                             lang: require("./lang"),
//                             json: require("./json"),
//                             net: require("./net"),
//                             util: require("./util"),
//                             Emitter: require("./Emitter"),
//                             localStorage: require("./localStorage"),
//                             main: require("./main"),
//                             wsConf: require("./websocket/config"),
//                             wsConst: require("./websocket/const"),
//                             ws: require("./websocket/index"),
//                             wssocket: require("./websocket/websocket")
//                         },
//                         injection: [{
//                             id: "imLib.net",
//                             method: {
//                                 initWs: ["imLib.ws"],
//                                 ws: ["imLib.ws"]
//                             }
//                         },
//                             {
//                                 id: "imLib.ws",
//                                 method: {
//                                     generateHead: ["imLib.util", "imLib.wsConf"],
//                                     encodeMsg: ["imLib.util"],
//                                     sendMsg: ["imLib.wsConf", "imLib.wssocket"],
//                                     init: ["imLib.wssocket", "imLib.wsConf"]
//                                 }
//                             },
//                             {
//                                 id: "imLib.wssocket",
//                                 method: {
//                                     init: ["imLib.wsConf"]
//                                 }
//                             }]
//                     }
//                 }),
//             define("im-core/auth", ["require"],
//                 function(require) {
//                     var e = {},
//                         exports = {};
//                     return exports.get = function(t, n) {
//                         var i = {
//                             anonym: t.anonym,
//                             key: e.key || "",
//                             sn: e.sn || "",
//                             id: t.bid || "",
//                             from: t.authType,
//                             token: t.authToken || ""
//                         };
//                         if (n) return i[n];
//                         else return i
//                     },
//                         exports.set = function(t, n) {
//                             e[t] = n
//                         },
//                         exports
//                 }),
//             define("qiao-im-msdk/auth", ["im-core/auth"],
//                 function(e) {
//                     return e
//                 }),
//             define("im-core/message", ["require"],
//                 function(require) {
//                     function e() {}
//                     function t(t, n) {
//                         return t = t || e,
//                             n = n || e,
//                             function(e) {
//                                 if (e === !1) n();
//                                 else if (e) t(e)
//                             }
//                     }
//                     var n = 1,
//                         i = 2,
//                         o = 4,
//                         a = {},
//                         r = {},
//                         exports = {};
//                     return exports.encode = function(e, n, i) {
//                         var o = a[e.type];
//                         if (!o) throw e.type + " message not supported";
//                         o(e, t(n, i))
//                     },
//                         exports.decode = function(e, a, s) {
//                             var c = e.mtype;
//                             if (c === n || c === o || c === i) if (e.content && e.content.type) if (c = e.content.type, "file" === c) c = "fileTransfer";
//                             var f = r[c];
//                             if (f) f(e, t(a, s));
//                             else if (s) s()
//                         },
//                         exports.addEncoder = function(e, t) {
//                             e.each(t,
//                                 function(e, t) {
//                                     a[e] = t
//                                 })
//                         },
//                         exports.addDecoder = function(e, t) {
//                             e.each(t,
//                                 function(e, t) {
//                                     r[e] = t
//                                 })
//                         },
//                         exports
//                 }),
//             define("qiao-im-msdk/message", ["im-core/message"],
//                 function(e) {
//                     return e
//                 }),
//             define("im-core/site", ["require"],
//                 function(require) {
//                     var exports = {};
//                     return exports.init = function(e, t, n) {
//                         t.extend(e, n || {}),
//                             e.anonym = e.bid ? 0 : 1
//                     },
//                         exports.enter = function(e, t, n) {
//                             if (t = t ||
//                                 function() {},
//                                 n = n ||
//                                     function() {},
//                                 e.isLogin()) t();
//                             else e.login(t, n)
//                         },
//                         exports.leave = function(e) {
//                             if (e.isLogin()) e.logout()
//                         },
//                         exports
//                 }),
//             define("qiao-im-msdk/site", ["im-core/site"],
//                 function(e) {
//                     return e
//                 }),
//             define("im-core/user", ["require", "./net"],
//                 function(require) {
//                     function e() {
//                         clearTimeout(n),
//                             n = null,
//                             i = !1
//                     }
//                     var exports = {},
//                         t = require("./net");
//                     t.on("auth invalid",
//                         function() {
//                             e()
//                         });
//                     var n, i, o = {
//                             INVITE: 1,
//                             AUTH: 2
//                         },
//                         a = "blocked",
//                         r = null;
//                     exports.heartBeat = function(e) {
//                         function t() {
//                             n = setTimeout(exports.heartBeat, 15e3)
//                         }
//                         e.poll(!1, t, t)
//                     },
//                         exports.wsHeartBeat = function(e, t) {
//                             if (t.poll(!1, exports.refresh, exports.refresh), e.usingWs) r = setTimeout(exports.wsHeartBeat, 3e4)
//                         };
//                     var s = {};
//                     return exports.pickSuccess = function(e, t) {
//                         e.each(t,
//                             function(e) {
//                                 var t = s[e.type + ""];
//                                 if (t) t(e.msg)
//                             })
//                     },
//                         exports.pickFailure = function() {},
//                         exports.refresh = function(e, t, n) {
//                             function o() {
//                                 t.poll(a,
//                                     function(t) {
//                                         e.each(t,
//                                             function(e) {
//                                                 var t = s[e.type + ""];
//                                                 if (t) t(e.msg)
//                                             }),
//                                             exports.refresh()
//                                     },
//                                     function() {
//                                         setTimeout(exports.refresh, 3e3)
//                                     })
//                             }
//                             if (i) {
//                                 var a = Boolean(n.isPageOnload);
//                                 if (a) o();
//                                 else setTimeout(o, 3e3)
//                             }
//                         },
//                         exports.pickHandler1 = function(e, t, n, i) {
//                             if ("invite" === i.reason) n.sid = i.sid,
//                                 n.tid = i.uid,
//                                 n.fromType = 2,
//                                 n.ttype = 0,
//                                 e.emit("initiative", i);
//                             else if ("chat" === i.reason) n.sid = i.sid,
//                                 n.tid = i.uid,
//                                 n.ttype = i.ttype,
//                                 n.invited = 1,
//                                 n.sinfo = i.sinfo && t.parse(i.sinfo) || {},
//                                 e.emit("forcetalk", i)
//                         },
//                         exports.pickHandler104 = function(e, t, n) {
//                             t.status = n.status,
//                                 e.emit("watchStatus", n)
//                         },
//                         s[1] = function(e) {
//                             exports.pickHandler1(e)
//                         },
//                         s[104] = function(e) {
//                             exports.pickHandler104(e)
//                         },
//                         exports.getInfo = function(e, t) {
//                             function n() {
//                                 var e = (new Date).getTimezoneOffset(),
//                                     t = parseInt(e / 60, 10),
//                                     n = e % 60,
//                                     i = "-";
//                                 if (t < 0 || n < 0) if (i = "+", t = -t, n < 0) n = -n;
//                                 return t += "",
//                                     n += "",
//                                 "UTC" + i + t + ":" + n
//                             }
//                             var i = window.navigator,
//                                 o = window.screen,
//                                 a = {
//                                     lang: i.language || i.systemLanguage,
//                                     cbit: o.colorDepth,
//                                     rsl: o.width + "*" + o.height,
//                                     tz: n(),
//                                     xst: encodeURIComponent(t.getXst()),
//                                     referrer: encodeURIComponent(document.referrer)
//                                 };
//                             return a
//                         },
//                         exports.enter = function(e, t, n) {
//                             e.site(!0, exports.getInfo(),
//                                 function(e) {
//                                     if (!exports.checkEnterResult(e, t, n)) exports.getEnterResult(t, n)
//                                 },
//                                 n)
//                         },
//                         exports.checkEnterResult = function(e, t, n, o, a) {
//                             var r = !1;
//                             if (!n.length) return r;
//                             else return e.each(n,
//                                 function(n) {
//                                     if (100 === n.type) {
//                                         var s = n.msg || {};
//                                         if (3 === s.status && 0 === t.visitType) {
//                                             var c = t.tid || "",
//                                                 f = t.sid || "";
//                                             e.extend(t, s),
//                                                 t.tid = c,
//                                                 t.sid = f
//                                         } else e.extend(t, s);
//                                         if (r = !0, i = !0, t.usingWs) exports.wsHeartBeat();
//                                         else exports.refresh();
//                                         o(n.msg)
//                                     } else a()
//                                 }),
//                                 r
//                         },
//                         exports.checkAuthResult = function(e, t, n, i, r, s) {
//                             var c = !1;
//                             return e.each(n,
//                                 function(e) {
//                                     if (e.type === o.AUTH) {
//                                         if (c = !0, e = e.msg || {},
//                                         e.reason && e.reason.indexOf(a) !== -1) return void(s && s());
//                                         if (e.valid) t.bid = e.v,
//                                             exports.enter(i, r);
//                                         else r()
//                                     }
//                                 }),
//                                 c
//                         },
//                         exports.getEnterResult = function(e, t, n) {
//                             e.poll(!0,
//                                 function(e) {
//                                     if (!exports.checkEnterResult(e, t, n)) exports.getEnterResult(t, n)
//                                 },
//                                 n)
//                         },
//                         exports.getAuthResult = function(e, t, n, i) {
//                             e.poll(!0,
//                                 function(e) {
//                                     if (!exports.checkAuthResult(e, t, n, i)) exports.getAuthResult(t, n, i)
//                                 },
//                                 n)
//                         },
//                         exports.isLogin = function() {
//                             return !! n || i
//                         },
//                         exports.login = function(e, t, n, i, o, a) {
//                             if (!exports.isLogin()) e.auth(!0,
//                                 function(e) {
//                                     if (t.set("key", e.key || e[0].key), n.bid = e.v || e[0].msg.v, !exports.checkAuthResult(e, i, !1, a)) exports.getAuthResult(i, o, a)
//                                 },
//                                 o);
//                             else i()
//                         },
//                         exports.logout = function(t) {
//                             e(),
//                                 t.site(!1),
//                                 t.auth(!1)
//                         },
//                         exports.extendPickHandler = function(e, t) {
//                             e.extend(s, t.pickHandler)
//                         },
//                         exports
//                 }),
//             define("qiao-im-msdk/user", ["im-core/user"],
//                 function(e) {
//                     return e
//                 }),
//             define("im-core/log", ["require"],
//                 function(require) {
//                     var exports = {};
//                     return exports.send = function() {},
//                         exports
//                 }),
//             define("qiao-im-msdk/log", ["im-core/log"],
//                 function(e) {
//                     return e
//                 }),
//             define("im-core/bullConfig", ["require", "./plugin/config", "im-lib/config", "./main", "./auth", "./config", "./const", "./chat", "./message", "./site", "./user", "./net", "./log"],
//                 function(require) {
//                     return {
//                         package: "core",
//                         importConfig: [require("./plugin/config"), require("im-lib/config")],
//                         resource: {
//                             main: require("./main"),
//                             auth: require("./auth"),
//                             config: require("./config"),
//                             consts: require("./const"),
//                             chat: require("./chat"),
//                             message: require("./message"),
//                             site: require("./site"),
//                             user: require("./user"),
//                             net: require("./net"),
//                             log: require("./log")
//                         },
//                         injection: [{
//                             id: "core.main",
//                             method: {
//                                 initCore: ["core.chat", "core.config", "imLib.lang", "core.consts"],
//                                 connect: ["core.chat", "core.config", "core.user"],
//                                 auth: ["core.user"],
//                                 send: ["core.chat", "core.message"],
//                                 addPlugin: ["coreplugin.fileTransfer", "coreplugin.img", "coreplugin.unknownMsg", "coreplugin.shake", "coreplugin.text", "coreplugin.transfer", "coreplugin.uploaded", "coreplugin.voice", "coreplugin.location"],
//                                 preSend: ["core.chat", "core.message"],
//                                 plugin: ["core.message"],
//                                 disconnect: ["core.chat", "core.user"],
//                                 messageHandler: ["core.config"],
//                                 get: ["core.chat"],
//                                 bindEvent: ["core.main", "communicate.handler"],
//                                 isConnected: ["core.chat"],
//                                 sendOfflineMsg: ["core.chat", "core.message"],
//                                 fetchHistory: ["core.chat"]
//                             }
//                         },
//                             {
//                                 id: "core.auth",
//                                 method: {
//                                     get: ["core.config"]
//                                 }
//                             },
//                             {
//                                 id: "core.chat",
//                                 method: {
//                                     fetchHistory: ["core.consts"],
//                                     connect: ["core.consts", "core.config"],
//                                     fetchSessionMessage: ["core.consts"],
//                                     bye: ["core.consts"],
//                                     preSend: ["core.consts"],
//                                     send: ["core.consts"],
//                                     fetchOfflineMsg: ["core.consts"],
//                                     receiveOfflineMsg: ["core.consts"],
//                                     wsPick: ["core.config"]
//                                 }
//                             },
//                             {
//                                 id: "core.message",
//                                 method: {
//                                     addEncoder: ["imLib.lang"],
//                                     addDecoder: ["imLib.lang"]
//                                 }
//                             },
//                             {
//                                 id: "core.net",
//                                 method: {
//                                     jsonToQuery: ["imLib.json", "imLib.lang"],
//                                     getUploadUrl: ["core.config", "imLib.util", "core.main"],
//                                     getDownloadUrl: ["core.config", "imLib.util", "core.main"],
//                                     request: ["core.config", "core.auth", "imLib.net", "imLib.json"],
//                                     auth: ["core.config"],
//                                     authOut: ["core.user"],
//                                     upload: ["core.config", "imLib.net"],
//                                     initLog: ["core.config", "data.config"],
//                                     log: ["imLib.net"],
//                                     pick: ["core.config"],
//                                     canUseWs: ["imLib.util", "core.config"],
//                                     wsCommands: ["core.config", "core.auth", "core.user", "core.chat"],
//                                     successFactory: ["core.auth", "imLib.json"]
//                                 }
//                             },
//                             {
//                                 id: "core.site",
//                                 method: {
//                                     init: ["core.config", "imLib.lang"],
//                                     enter: ["core.user"],
//                                     leave: ["core.user"]
//                                 }
//                             },
//                             {
//                                 id: "core.user",
//                                 method: {
//                                     refresh: ["imLib.lang", "core.net", "core.config"],
//                                     getInfo: ["imLib.lang", "core.net"],
//                                     enter: ["core.net"],
//                                     checkEnterResult: ["imLib.lang", "core.config"],
//                                     getAuthResult: ["core.net"],
//                                     login: ["core.net", "core.auth", "core.config"],
//                                     logout: ["core.net"],
//                                     getEnterResult: ["core.net"],
//                                     pickHandler1: ["core.main", "imLib.json", "core.config"],
//                                     pickHandler104: ["core.main", "core.config"],
//                                     heartBeat: ["core.net"],
//                                     checkAuthResult: ["imLib.lang", "core.config"],
//                                     pickSuccess: ["imLib.lang"],
//                                     wsHeartBeat: ["core.config", "core.net"]
//                                 }
//                             }],
//                         aspect: [{
//                             id: "core.message",
//                             pointCut: ["core.main.decode, , decode"]
//                         },
//                             {
//                                 id: "core.net",
//                                 pointCut: ["core.log.send, ,log"]
//                             }]
//                     }
//                 }),
//             define("qiao-im-msdk/bullConfig", ["im-core/bullConfig"],
//                 function(e) {
//                     return e
//                 }),
//             define("im-core/main", ["require", "im-lib", "im-lib/Emitter", "bull", "./bullConfig"],
//                 function(require) {
//                     function e(module, e, t) {
//                         module.on(e,
//                             function() {
//                                 var n = Array.prototype.slice.call(arguments);
//                                 n.unshift(t || e),
//                                     exports.emit.apply(exports, n)
//                             })
//                     }
//                     var t = require("im-lib"),
//                         n = require("im-lib/Emitter"),
//                         exports = {};
//                     return n.mixin(exports),
//                         exports.messageHandler = function(e, n) {
//                             var i = n.adata && t.json.parse(n.adata) || {},
//                                 o = i.displayName || i.nickname || e.sinfo.nickname || n.from,
//                                 a = 1e3 * n.time;
//                             exports.decode(n,
//                                 function(e) {
//                                     exports.emit("message", e, o, a, n.msgHandlerType || "")
//                                 })
//                         },
//                         exports.decode = function(e, t) {},
//                         exports.init = function(e) {
//                             var t = require("bull"),
//                                 n = require("./bullConfig");
//                             t.init(n),
//                                 exports.initCore(e)
//                         },
//                         exports.initCore = function(t, n, i, o, a) {
//                             i.extend(exports, o),
//                                 exports.addPlugin(),
//                                 i.extend(n, a || {}),
//                                 n.anonym = n.bid ? 0 : 1,
//                                 t.on("message", exports.messageHandler);
//                             var r = ["error", "reconnect", "connected", "disconnect", "offline", "csoffline", "invitefail", "queueing", "otherwebimalive", "fetchhistorysuccess", "fetchhistoryfail", "fetchhistoryfinish", "visitorblock", "autoendtalk", "currentIR", "showMsgRemind", "csonline", "transferError", "fininshIR", "updateNewCSR", "visitorTransfer", "unknownMsg"];
//                             i.each(r,
//                                 function(n) {
//                                     e(t, n)
//                                 })
//                         },
//                         exports.addPlugin = function() {
//                             for (var e = 0; e < arguments.length; e++) exports.plugin(arguments[e])
//                         },
//                         exports.connect = function(e, t, n, i, o) {
//                             function a(t) {
//                                 if (t.invited) t.status = 3;
//                                 switch (t.status) {
//                                     case 0:
//                                     case 1:
//                                         e.connect(i, o);
//                                         break;
//                                     case 2:
//                                         e.connect(i, o);
//                                         break;
//                                     case 3:
//                                         if (o.invited || t.invited) t.invited = 1,
//                                             t.from = o.from,
//                                             e.connect(i, t);
//                                         else t.reason = "talk to other",
//                                             e.disconnect(t),
//                                             e.setStopPick(!1),
//                                             e.pick();
//                                         break;
//                                     case 4:
//                                         e.connect(i, o);
//                                         break;
//                                     default:
//                                         e.connect(i, o)
//                                 }
//                             }
//                             if (exports.emit("startconnect"), n.isLogin()) a(t);
//                             else n.login(a,
//                                 function() {
//                                     exports.emit("error", {
//                                         type: "init"
//                                     })
//                                 },
//                                 function() {
//                                     exports.emit("visitorblock")
//                                 })
//                         },
//                         exports.auth = function(e, t, n) {
//                             if (e.isLogin());
//                             else e.login(function() {
//                                     exports.emit("connected")
//                                 },
//                                 function() {
//                                     exports.emit("error", {
//                                         type: "init"
//                                     })
//                                 })
//                         },
//                         exports.send = function(e, t, n, i) {
//                             function o() {
//                                 exports.emit("sendfinish", n),
//                                     exports.emit("sendsuccess", n)
//                             }
//                             function a() {
//                                 exports.emit("sendfail", n)
//                             }
//                             if (exports.emit("trysendmsg"), !e.isConnected()) return exports.emit("sendfail", n),
//                                 !1;
//                             else return t.encode(n,
//                                 function(t) {
//                                     t.adata = i,
//                                         e.send(t, o, a)
//                                 },
//                                 a),
//                                 !0
//                         },
//                         exports.preSend = function(e, t, n) {
//                             if (!e.isConnected()) return ! 1;
//                             else return void e.preSend({
//                                 mtype: 0,
//                                 content: n.text
//                             })
//                         },
//                         exports.disconnect = function(e, t, n, i) {
//                             if (exports.emit("sessioncut"), i !== !1) e.disconnect();
//                             if (n !== !1) t.logout()
//                         },
//                         exports.plugin = function(e, t) {
//                             if (t.encoder) e.addEncoder(t.encoder);
//                             if (t.decoder) e.addDecoder(t.decoder);
//                             if (t.emit) t.emit = function() {
//                                 var e = Array.prototype.slice.call(arguments);
//                                 exports.emit.apply(exports, e)
//                             }
//                         },
//                         exports.get = function(e, t) {
//                             return e.get(t)
//                         },
//                         exports.isConnected = function(e) {
//                             return e.isConnected()
//                         },
//                         exports.sendOfflineMsg = function(e, t, n, i) {
//                             function o() {
//                                 exports.emit("sendofflinemsgfinish", n),
//                                     exports.emit("sendofflinemsgsuccess", n)
//                             }
//                             function a() {
//                                 exports.emit("sendofflinemsgfail", n)
//                             }
//                             if (e.isConnected()) return exports.emit("sendofflinemsgfail", n),
//                                 !1;
//                             else return t.encode(n,
//                                 function(t) {
//                                     t.adata = i,
//                                         e.send(t, o, a)
//                                 },
//                                 a),
//                                 !0
//                         },
//                         exports.fetchHistory = function(e, t) {
//                             e.fetchHistory(t)
//                         },
//                         exports
//                 }),
//             define("im-core", ["im-core/main"],
//                 function(e) {
//                     return e
//                 }),
//             define("im-filter/main", ["require", "im-core"],
//                 function(require) {
//                     function e(t, n, i) {
//                         n = n || {};
//                         for (var o = t.childNodes,
//                                  a = 0; a < o.length; a++) {
//                             var r = o[a].tagName;
//                             if (! (r in n)) if (3 === o[a].nodeType) i(o[a]);
//                             else e(o[a], n, i);
//                             else if ("function" == typeof n[r]) n[r](o[a])
//                         }
//                     }
//                     function t(t, n) {
//                         var i = document.createElement("div");
//                         i.innerHTML = n;
//                         var o = "^((https|http|ftp|rtsp|mms)?://)?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}\\.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+\\.)*([%0-9a-z][%0-9A-Za-z-]{0,61})?[0-9a-z]\\.[a-z]{2,6})(:[0-9]{1,4})?((/?)|(/[\u4e00-\u9fa5%A-Z0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$",
//                             a = new RegExp(o);
//                         return e(i, {
//                                 A: function(e) {
//                                     e.setAttribute("target", "_blank")
//                                 }
//                             },
//                             function(e) {
//                                 var n = !1,
//                                     i = t.encodeHTML(e.data),
//                                     o = i.replace(a,
//                                         function(e) {
//                                             if (e.indexOf("@") > 0) return e;
//                                             if (n = !0, /https?\:\/\//.test(e)) return '<a href="' + e + '" target="_blank">' + e + "</a>";
//                                             else return '<a href="http://' + e + '" target="_blank">' + e + "</a>"
//                                         });
//                                 if (n) {
//                                     var r = document.createElement("span");
//                                     r.innerHTML = o;
//                                     var s = e.parentNode;
//                                     s.insertBefore(r, e),
//                                         s.removeChild(e)
//                                 }
//                             }),
//                             i.innerHTML
//                     }
//                     function n(e, t) {
//                         t = t ||
//                             function() {};
//                         var n = e.getAttribute("data-bcsUrl"),
//                             i = e.getAttribute("data-bcsName");
//                         if (!n) if (i) {
//                             var o = require("im-core"),
//                                 a = o.get("sid");
//                             n = f + "/wdownload/" + i + "/" + a + "/" + i
//                         } else n = e.src;
//                         else;
//                         e.src = s;
//                         var c = new Image;
//                         c.onload = function() {
//                             if (e.setAttribute("data-originwidth", c.width), e.setAttribute("data-originheight", c.height), c.width > r || c.height > r) {
//                                 var i = "",
//                                     o = "";
//                                 if (c.width > c.height) i = "width",
//                                     o = "height";
//                                 else i = "height",
//                                     o = "width";
//                                 e.style[i] = r + "px",
//                                     e.style[o] = parseInt(r * c[o] / c[i], 10) + "px";
//                                 var a = document.createElement("span");
//                                 a.className = "zoom",
//                                     a.innerHTML = '<div class="zoom-icon"></div>',
//                                     e.parentNode.insertBefore(a, e),
//                                     e.style.display = "block",
//                                     a.appendChild(e),
//                                     e.src = n
//                             } else e.src = n;
//                             t()
//                         },
//                             c.src = n
//                     }
//                     function i(e, t) {
//                         var i = document.createElement("div");
//                         i.innerHTML = e;
//                         for (var o = i.getElementsByTagName("img"), a = 0; a < o.length; a++) {
//                             var r = o[a];
//                             if (!r.getAttribute("data-face-id")) {
//                                 var l = r.getAttribute("data-bcsName");
//                                 if (l) {
//                                     var d = r.getAttribute("data-bcsUrl");
//                                     if (r.src = "", !d) {
//                                         var u = require("im-core"),
//                                             m = u.get("sid");
//                                         d = f + "/wdownload/" + l + "/" + m + "/" + l,
//                                             r.setAttribute("data-bcsUrl", d)
//                                     }
//                                     var g = r.getAttribute("data-uploaded") - 0;
//                                     if (0 === g) r.src = s;
//                                     else if (1 === g) n(r, t);
//                                     else if (2 === g) r.src = c
//                                 } else n(r, t)
//                             } else {
//                                 var p = r.getAttribute("data-face-text");
//                                 r.setAttribute("alt", p || "\u8868\u60c5")
//                             }
//                         }
//                         return i.childNodes
//                     }
//                     function o(e) {
//                         return e.replace(l, "").replace(d, "")
//                     }
//                     function a(e) {
//                         return e.replace(/<img [^>]*src=['"]file:\/\/\/.*['"][^>]*>/, "")
//                     }
//                     var r = 200,
//                         s = "//sgoutong.baidu.com/webim/resource/img/loading.gif",
//                         c = "//sgoutong.baidu.com/webim/resource/img/fail.png",
//                         f = "//p.qiao.baidu.com/cps",
//                         l = /<script.*?>.*?<\/script>/g,
//                         d = / on\w+=(['"]).*\1/g;
//                     return {
//                         picFilter: i,
//                         imgProccessor: n,
//                         staticHTMLFilter: o,
//                         loadingUrl: s,
//                         loadFailUrl: c,
//                         anchor: t,
//                         localImgFilter: a
//                     }
//                 }),
//             define("im-filter", ["im-filter/main"],
//                 function(e) {
//                     return e
//                 }),
//             define("im-filter/config", ["require", "./main"],
//                 function(require) {
//                     return {
//                         package: "imfilter",
//                         resource: {
//                             main: require("./main")
//                         },
//                         injection: [{
//                             id: "imfilter.main",
//                             method: {
//                                 anchor: ["imLib.util"]
//                             }
//                         }]
//                     }
//                 }),
//             define("embed/webimlight/commonConfig", [],
//                 function() {
//                     var exports = {};
//                     return exports.domain = "/",
//                         exports.staticDomain = "//sgoutong.baidu.com",
//                         exports.picExt = "*.jpg *.png *.gif *.jpeg *.bmp",
//                         exports.sizeLimit = 2e7,
//                         exports.LANG = {
//                             OVER: "\u4f1a\u8bdd\u5df2\u7ed3\u675f",
//                             ERROR: "\u5ba2\u670d\u4e0d\u5728\u7ebf",
//                             CSOFFLINE: "\u5ba2\u670d\u4e0d\u5728\u7ebf",
//                             STARTCONVERSATION: "\u5f00\u59cb\u6c9f\u901a",
//                             TRANSFERERROR: "\u8f6c\u63a5\u5931\u8d25",
//                             CSONLINETIP: "\u60a8\u5df2\u4e0e\u5ba2\u670d\u5efa\u7acb\u5bf9\u8bdd",
//                             FILEUNKNOWN: "\u8be5\u6c9f\u901a\u7a97\u53e3\u4e0d\u652f\u6301\u63a5\u6536\u6587\u4ef6",
//                             TITLENOTIFY: "\u60a8\u6709\u65b0\u6d88\u606f",
//                             CSINVITETIP: "\u5ba2\u670d\u5df2\u4e0e\u60a8\u5efa\u7acb\u5bf9\u8bdd",
//                             VISITORBLOCK: "\u6682\u65f6\u65e0\u5728\u7ebf\u5ba2\u670d\u53ef\u63a5\u5f85\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",
//                             AUTOENDTALK: "\u672c\u6b21\u6c9f\u901a\u5df2\u7ed3\u675f\uff0c\u5982\u6709\u95ee\u9898\u6b22\u8fce\u518d\u6b21\u54a8\u8be2\u3002",
//                             VISITORTRANSFER: "\u5c06\u7531${nickname}\u7ee7\u7eed\u4e3a\u60a8\u670d\u52a1",
//                             IMGERROR: "\u8bf7\u9009\u62e9\u683c\u5f0f\u4e3ajpg\u3001png\u6216gif\uff0c\u4e14\u5927\u5c0f\u4e0d\u8d85\u8fc720M\u7684\u56fe\u7247"
//                         },
//                         exports.init = function(e) {
//                             exports.domain = e
//                         },
//                         exports
//                 }),
//             define("embed/webimlight/messagecontainer/main", ["require", "../commonConfig"],
//                 function(require) {
//                     var e, t, n, exports = {};
//                     return exports.imgUploadSuccessNotify = function(e) {},
//                         exports.imgUploadFailNotify = function(e) {},
//                         exports.scrollToBottom = function(e) {
//                             e.scrollToBottom(t)
//                         },
//                         exports.renderMessage = function(e, n, i, o, a, r, s, c, f, l, d) {
//                             var u = t;
//                             if ("img" === c.type) if (0 === c.status) return void exports.imgUploadSuccessNotify(c);
//                             else if (1 === c.status) return void exports.imgUploadFailNotify(c);
//                             if ("uploaded" !== c.type && "transfer" !== c.type) {
//                                 l = l ? new Date(l) : new Date,
//                                     c.timeStr = o.transferDate(l) + " " + o.parseTime(l, "HH:mm:ss");
//                                 var m = c.name;
//                                 if ("location" === c.type) {
//                                     var g = e.get("location"),
//                                         p = r.lngLatToPixel(c.x, c.y, 18),
//                                         b = {
//                                             x: p[0],
//                                             y: p[1]
//                                         },
//                                         h = n.getLocationUrl({
//                                             x: b.x,
//                                             y: b.y,
//                                             name: m,
//                                             alias: c.alias
//                                         }),
//                                         v = n.getLocationImgUrl({
//                                             x: c.x,
//                                             y: c.y,
//                                             width: 240,
//                                             height: 110
//                                         });
//                                     c.text = n.template(g, {
//                                         x: c.x,
//                                         y: c.y,
//                                         aliasStr: c.alias,
//                                         url: h,
//                                         locationImgSrc: v
//                                     })
//                                 }
//                                 if (c.role) c.role = 1,
//                                     c.name = f;
//                                 else {
//                                     c.role = 0;
//                                     var y = s.getServer("siteObj").session || {};
//                                     c.name = y.displayName || "\u6211"
//                                 }
//                                 var w = e.get("message");
//                                 c.text = a.anchor(c.text);
//                                 var T = n.template(w, c),
//                                     E = a.picFilter(T, exports.scrollToBottom),
//                                     S = "insertBefore" === d ? "prependNodes": "appendNodes";
//                                 i[S](E, u),
//                                     exports.scrollToBottom()
//                             }
//                         },
//                         exports.renderStatusMessage = function(e, t, i, o) {
//                             n.innerHTML = t.template(e.get("statusmessage"), {
//                                 text: o
//                             })
//                         },
//                         exports.renderSystemMessage = function(e, n, i, o, a, r) {
//                             var s = t;
//                             a = a || "alert";
//                             var c = "insertBefore" === r ? "prependHTML": "appendHTML";
//                             i[c](n.template(e.get("systemmessage"), {
//                                 text: o,
//                                 type: a
//                             }), s),
//                                 exports.scrollToBottom()
//                         },
//                         exports.getElByBcsname = function(e) {
//                             return t.getElementById(e)
//                         },
//                         exports.render = function(i, o, a) {
//                             a.appendHTML(o.template(i.get("messagecontainer"), {
//                                 domain: require("../commonConfig").domain
//                             }), e),
//                                 t = a.g("nbwlMessageContainer"),
//                                 n = a.g("nbwlStatusMessage")
//                         },
//                         exports.imgPreview = function(e) {
//                             var t = document.getElementById("nbwlImgViewer"),
//                                 n = document.getElementById("nbwlImgViewerInput");
//                             n.value = e,
//                                 t.submit()
//                         },
//                         exports.bindEvent = function(n, i) {
//                             i.domOn(t, "mousewheel",
//                                 function(e) {
//                                     e = e || window.event;
//                                     var n = t.scrollTop,
//                                         o = t.offsetHeight,
//                                         a = t.scrollHeight,
//                                         r = e.wheelDelta || e.detail;
//                                     if (!n && r > 0 || r < 0 && n + o === a) return i.domPrevent(e),
//                                         !1
//                                 }),
//                                 i.domOn(e, "dblclick",
//                                     function(e) {
//                                         e = e || window.event;
//                                         var t = e.target || e.srcElement,
//                                             i = t.parentNode;
//                                         if (n.hasClass(i, "zoom")) {
//                                             var o = i.getElementsByTagName("img")[0].src;
//                                             exports.imgPreview(o)
//                                         }
//                                     }),
//                                 i.domOn(e, "click",
//                                     function(e) {
//                                         e = e || window.event;
//                                         var t = e.target || e.srcElement,
//                                             i = t.parentNode;
//                                         if (n.hasClass(t, "zoom-icon")) {
//                                             var o = i.getElementsByTagName("img")[0].src;
//                                             exports.imgPreview(o)
//                                         }
//                                         if (n.hasClass(t, "nb-webim-light-message-resend")) {
//                                             if (n.hasClass(t, "nb-webim-light-message-resend-sent")) return;
//                                             var a = t.parentNode.id;
//                                             if (a) exports.resend(a),
//                                                 n.addClass(t, "nb-webim-light-message-resend-sent")
//                                         }
//                                     })
//                         },
//                         exports.getImagesByBcsName = function(e) {
//                             for (var n = t.getElementsByTagName("img"), i = [], o = 0; o < n.length; o++) {
//                                 var a = n[o].getAttribute("data-bcsname");
//                                 if (a === e) i.push(n[o])
//                             }
//                             return i
//                         },
//                         exports.resend = function(e) {},
//                         exports.init = function(n, i, o) {
//                             e = n.g("nbWebImLightContainer"),
//                                 t = n.g("nbwlMessageContainer"),
//                                 i.parse(o),
//                                 exports.render(),
//                                 exports.bindEvent()
//                         },
//                         exports
//                 }),
//             define("embed/webimlight/messagecontainer/main.tpl", [],
//                 function() {
//                     return '<!-- target: messagecontainer --><ins id="nbwlMessageContainer"><form id="nbwlImgViewer" action="<%domain%>/imageviewer" method="post" target="_blank"><input id="nbwlImgViewerInput" name="imgsrc"></form><ins id="nbwlStatusMessage"><ins class="nb-webim-light-status-message"><ins class="nb-webim-light-status-message-container">\u6b63\u5728\u7b49\u5f85\u5ba2\u670d\u63a5\u8d77â€¦</ins></ins></ins></ins><!-- target: message --><ins class="nb-webim-light-message nb-webim-light-message-<%role%>"><ins class="nb-webim-light-message-title"><ins class="nb-webim-light-message-name"><%name%></ins><ins class="nb-webim-light-message-time"><%timeStr%></ins></ins><ins class="nb-webim-light-message-content"><ins class="nb-webim-light-message-arrow"></ins><ins><%text%></ins></ins><ins id="<%id%>" class="nb-webim-light-message-error" style="display: none;"><ins class="nb-webim-light-message-error-icon"></ins>\u6d88\u606f\u53d1\u9001\u5931\u8d25, <ins class="nb-webim-light-message-resend">\u91cd\u65b0\u53d1\u9001</ins></ins></ins><!-- target: systemmessage --><ins class="nb-webim-light-system-message"><ins class="nb-webim-light-system-message-container"><ins class="nb-webim-light-system-message-type-<%type%>"></ins><%text%></ins></ins><!-- target: statusmessage --><ins class="nb-webim-light-status-message"><ins class="nb-webim-light-status-message-container"><%text%></ins></ins><!-- target: location --><ins class="nb-webim-light-location"><ins class="nb-webim-light-location-img-content"><a href="<%url%>" target="_blank"><img class="nb-webim-light-location-img" src="<%locationImgSrc%>"></a></ins><a href="<%url%>" target="_blank"><ins class="nb-webim-light-location-content"><%aliasStr%><span class="view-map">\u67e5\u770b\u5730\u56fe</span></ins></a></ins>'
//                 }),
//             define("embed/webimlight/messagecontainer/config", ["require", "im-filter/config", "./main", "./main.tpl"],
//                 function(require) {
//                     return {
//                         package: "messagecontainer",
//                         importConfig: [require("im-filter/config")],
//                         resource: {
//                             main: require("./main"),
//                             tpl: require("./main.tpl")
//                         },
//                         injection: [{
//                             id: "messagecontainer.main",
//                             method: {
//                                 init: ["pbase.dom", "common.tpl", "messagecontainer.tpl"],
//                                 scrollToBottom: ["pbase.dom"],
//                                 renderMessage: ["common.tpl", "common.util", "pbase.dom", "pbase.lib", "imfilter.main", "common.convert", "data.config"],
//                                 renderStatusMessage: ["common.tpl", "common.util", "pbase.dom"],
//                                 renderSystemMessage: ["common.tpl", "common.util", "pbase.dom"],
//                                 bindEvent: ["pbase.dom", "pbase.events"],
//                                 render: ["common.tpl", "common.util", "pbase.dom"]
//                             }
//                         }],
//                         aspect: [{
//                             id: "messagecontainer.main",
//                             pointCut: ["layout.main.render, ,init", "communicate.main.send, renderMessage", "communicate.handler.message, ,renderMessage", "communicate.handler.systemMessage, ,renderSystemMessage", "communicate.handler.scrollToBottom, ,scrollToBottom", "communicate.handler.sendfail, ,scrollToBottom", "communicate.handler.changeStatus, ,renderStatusMessage", "picture.main.message, ,renderMessage"]
//                         }]
//                     }
//                 }),
//             define("embed/data/config", ["require"],
//                 function(require) {
//                     var exports = {};
//                     return exports.staticDomain = "//sgoutong.baidu.com",
//                         exports.getServer = function(e, t) {
//                             var n = e.getWrap();
//                             return n = {
//                                 configBox: n.config,
//                                 siteObj: n.siteConfig,
//                                 startTime: n.startTime
//                             },
//                             n[t] || n
//                         },
//                         exports.isAutoInvite = function() {
//                             var e = exports.getServer("configBox");
//                             return !! (e.inviteBox.autoInvite - 0)
//                         },
//                         exports
//                 }),
//             define("embed/data/bullConfig", ["require", "./config"],
//                 function(require) {
//                     return {
//                         package: "data",
//                         resource: {
//                             config: require("./config")
//                         },
//                         injection: [{
//                             id: "data.config",
//                             method: {
//                                 getServer: ["common.view"]
//                             }
//                         }]
//                     }
//                 }),
//             define("embed/webimlight/layout/main", [],
//                 function() {
//                     var e, exports = {};
//                     return exports.bindEvent = function(t) {
//                         t.domOn(e, "click", exports.hasOperation),
//                             t.domOn(e, "keydown", exports.hasOperation)
//                     },
//                         exports.hasOperation = function() {},
//                         exports.render = function(t, n, i) {
//                             i.appendHTML(n.template(t.get("layout")), e)
//                         },
//                         exports.setFix = function(e, t) {
//                             var n = e.g("nbWebImLightContainer");
//                             t.setFixed(n)
//                         },
//                         exports.init = function(t, n) {
//                             e = document.getElementById("newBridge"),
//                                 t.parse(n),
//                                 exports.render(),
//                                 exports.setFix(),
//                                 exports.bindEvent()
//                         },
//                         exports
//                 }),
//             define("embed/webimlight/layout/main.tpl", [],
//                 function() {
//                     return '<!-- target: layout --><ins id="nbWebImLightContainer"></ins>'
//                 }),
//             define("embed/webimlight/layout/config", ["require", "./main", "./main.tpl"],
//                 function(require) {
//                     return {
//                         package: "layout",
//                         resource: {
//                             main: require("./main"),
//                             tpl: require("./main.tpl")
//                         },
//                         injection: [{
//                             id: "layout.main",
//                             method: {
//                                 render: ["common.tpl", "common.util", "pbase.dom"],
//                                 setFix: ["pbase.dom", "common.fixed"],
//                                 init: ["common.tpl", "layout.tpl"],
//                                 bindEvent: ["pbase.events"]
//                             }
//                         }],
//                         aspect: [{
//                             id: "layout.main",
//                             pointCut: ["webimlight.entry.init, ,init"]
//                         }]
//                     }
//                 }),
//             define("im-editor/browser", ["require"],
//                 function(require) {
//                     var exports = {},
//                         e = navigator.userAgent.toLowerCase();
//                     return exports.ie = function() {
//                         var t = e.match(/(?:msie\s([\w.]+))/),
//                             n = e.match(/(?:trident.*rv:([\w.]+))/);
//                         if (t && n && t[1] && n[1]) return Math.max(1 * t[1], 1 * n[1]);
//                         else if (t && t[1]) return 1 * t[1];
//                         else if (n && n[1]) return 1 * n[1];
//                         else return 0
//                     } (),
//                         exports.webkit = e.indexOf(" applewebkit/") > -1,
//                         exports
//                 }),
//             define("im-editor/selection", ["require", "im-lib/lang/each"],
//                 function(require) {
//                     function e(e, t) {
//                         var n = t.focusNode || t.anchorNode || t.parentElement(),
//                             i = document.body;
//                         do
//                             if (n === e) return ! 0;
//                             else if (n === i) return ! 1;
//                             else n = n.parentNode;
//                         while (n)
//                     }
//                     function t(t, i, a, r) {
//                         var s = [];
//                         if (n(i,
//                             function(e) {
//                                 s.push(e.outerHTML)
//                             }), !r) r = o.selection.createRange();
//                         if (!e(t, r)) r.moveToElementText(t),
//                             r.collapse(!1),
//                             r.select();
//                         r.pasteHTML(s.join("")),
//                             r.select()
//                     }
//                     var exports = {},
//                         n = require("im-lib/lang/each"),
//                         i = window,
//                         o = document;
//                     return exports.setRange = function(e) {
//                         var t = exports.getRange();
//                         if (i.getSelection) {
//                             t.setStartBefore(e),
//                                 t.collapse(!0);
//                             var n = i.getSelection();
//                             return n.removeAllRanges(),
//                                 void n.addRange(t)
//                         }
//                         t.select()
//                     },
//                         exports.getRange = function() {
//                             var e = i.getSelection ? i.getSelection() : o.selection;
//                             return e.getRangeAt ? e.getRangeAt(0) : e.createRange()
//                         },
//                         exports.insertNodes = function(e, o, a, r) {
//                             if (e.focus(), !i.getSelection) t(e, o, a, r);
//                             else {
//                                 var s = i.getSelection();
//                                 if (!r) r = s.getRangeAt(0);
//                                 if (r.deleteContents(), o.reverse(), n(o,
//                                     function(e) {
//                                         r.insertNode(e)
//                                     }), !a) r = document.createRange(),
//                                     r.setStartAfter(o[0]),
//                                     r.collapse(!0),
//                                     s.removeAllRanges(),
//                                     s.addRange(r)
//                             }
//                         },
//                         exports
//                 }),
//             define("im-editor/plugins/text", [],
//                 function() {
//                     var exports = {};
//                     return exports.name = "text",
//                         exports.insert = function(e, t) {
//                             e.insertElements(document.createTextNode(t))
//                         },
//                         exports
//                 }),
//             define("im-editor/plugins/html", [],
//                 function() {
//                     var exports = {};
//                     return exports.name = "html",
//                         exports.insert = function(e, t) {
//                             var n = document.createElement("div");
//                             n.innerHTML = t;
//                             var i = Array.prototype.slice.call(n.childNodes, 0);
//                             e.insertElements(i)
//                         },
//                         exports
//                 }),
//             define("im-editor/plugins/face", [],
//                 function() {
//                     var e = 25,
//                         t = 25,
//                         exports = {};
//                     return exports.name = "face",
//                         exports.insert = function(n, i, o) {
//                             var a = document.createElement("img");
//                             a.setAttribute("data-face-id", i),
//                             o.faceText && a.setAttribute("data-face-text", o.faceText),
//                                 a.style.width = e + "px",
//                                 a.style.height = t + "px",
//                                 a.src = o.urlPrefix + i + "." + o.extension,
//                                 n.insertElements(a)
//                         },
//                         exports
//                 }),
//             define("im-editor/plugins/br", [],
//                 function() {
//                     var exports = {};
//                     return exports.name = "br",
//                         exports.insert = function(e) {
//                             var t = document.createElement("br");
//                             if (e.insertElements(t), / chrome/i.test(navigator.userAgent)) {
//                                 for (t = t.nextSibling; t && 3 == t.nodeType && !t.nodeValue;) t = t.nextSibling;
//                                 if (!t) e.insertElements(document.createElement("br"))
//                             }
//                         },
//                         exports
//                 }),
//             define("im-editor/plugins/img", [],
//                 function() {
//                     var exports = {};
//                     return exports.name = "img",
//                         exports.insert = function(e, t, n) {
//                             var i = document.createElement("img");
//                             i.style.resize = "none",
//                                 i.src = t;
//                             for (var o in n) if (n.hasOwnProperty(o)) i.setAttribute(o, n[o]);
//                             e.insertElements(i)
//                         },
//                         exports
//                 }),
//             define("im-editor/Editor", ["require", "im-lib/lang/each", "im-lib/lang/extend", "im-lib/Emitter", "./browser", "im-filter", "./selection", "./plugins/text", "./plugins/html", "./plugins/face", "./plugins/br", "./plugins/img"],
//                 function(require) {
//                     function e(e, t) {
//                         e.setAttribute("contentEditable", t ? "true": "false")
//                     }
//                     function t(e) {
//                         return "true" === e.getAttribute("contentEditable").toString()
//                     }
//                     function n(t) {
//                         return e(t, !0),
//                             t.innerHTML = y,
//                             t
//                     }
//                     function i(e, t) {
//                         var n = e.innerHTML,
//                             i = document.createElement("div");
//                         return i.innerHTML = n.replace(/\r|\n/gi, "").replace(/<p[^>]*><br\/?><\/p>/gi, "<faketag></faketag>").replace(/<br\/?>/gi, "</p><p>").replace(/<p[^>]*>\s*<\/p>/gi, "<p><br/></p>").replace(/<faketag><\/faketag>/gi, "<p><br/></p>").replace(T, ""),
//                             t.setStyles({},
//                                 i),
//                             i.innerHTML
//                     }
//                     function o(e, t) {
//                         e.innerHTML = t
//                     }
//                     function a(e) {
//                         var t = [];
//                         return u(e,
//                             function(e, n) {
//                                 e = e.replace(/[A-Z]/g,
//                                     function(e) {
//                                         return "-" + e.toLowerCase()
//                                     }),
//                                     t.push(e + ":" + n)
//                             }),
//                             t.join(";")
//                     }
//                     function r(e) {
//                         var t = {};
//                         return e = e.split(";"),
//                             u(e,
//                                 function(e) {
//                                     if (e) {
//                                         e = e.split(":");
//                                         var n = e[0],
//                                             i = e[1];
//                                         n = n.replace(/-+(.)?/g,
//                                             function(e, t) {
//                                                 return t = t.replace(/^\s+|\s+$/g, ""),
//                                                     t ? t.toUpperCase() : ""
//                                             }),
//                                             t[n] = i
//                                     }
//                                 }),
//                             t
//                     }
//                     function s(e, t) {
//                         u(t,
//                             function(t, n) {
//                                 e.style[t] = n
//                             })
//                     }
//                     function c(e) {
//                         e._cursor = v.getRange(),
//                             clearTimeout(e._getCursorTimer),
//                             e._getCursorTimer = setTimeout(function() {
//                                     c(e)
//                                 },
//                                 E)
//                     }
//                     function f(e, t) {
//                         try {
//                             var n = new FileReader;
//                             n.onload = function(n) {
//                                 e.emit("screenshotpaste", {
//                                     src: n.target.result,
//                                     blob: t
//                                 })
//                             },
//                                 n.readAsDataURL(t)
//                         } catch(e) {}
//                     }
//                     function l(e) {
//                         function t(e) {
//                             if (!e.stopPropagation) e.stopPropagation = function() {
//                                 this.cancelBubble = !0
//                             };
//                             if (!e.preventDefault) e.preventDefault = function() {
//                                 this.returnValue = !1
//                             };
//                             return e.stop = function() {
//                                 this.stopPropagation(),
//                                     this.preventDefault()
//                             },
//                                 e
//                         }
//                         function n(n) {
//                             if (n = t(n || window.event), n.ctrlKey) switch (n.keyCode) {
//                                 case 66:
//                                     var i = e.isBold(),
//                                         o = i ? "normal": "bold";
//                                     e.setStyles({
//                                         fontWeight: o
//                                     }),
//                                         e.emit("ctrlB", !i),
//                                         n.stop();
//                                     break;
//                                 case 73:
//                                     var a = e.isItalic(),
//                                         o = a ? "normal": "italic";
//                                     e.setStyles({
//                                         fontStyle: o
//                                     }),
//                                         e.emit("ctrlI", !a),
//                                         n.stop();
//                                     break;
//                                 case 85:
//                                     var r = e.isUnderline(),
//                                         o = r ? "none": "underline";
//                                     e.setStyles({
//                                         textDecoration: o
//                                     }),
//                                         e.emit("ctrlU", !r),
//                                         n.stop()
//                             }
//                             if (8 === n.keyCode && e.main.innerHTML === y) n.stop();
//                             e.emit("keydown", n)
//                         }
//                         function i(n) {
//                             if (n = t(n || window.event), n.clipboardData && n.clipboardData.getData) if (/Files/.test(n.clipboardData.types)) {
//                                 var i = n.clipboardData.items[0].getAsFile();
//                                 f(e, i)
//                             } else {
//                                 var o = n.clipboardData.getData("text/plain");
//                                 n.clipboardData.getData("text/html");
//                                 if ("" === o) n.stop();
//                                 else {
//                                     var a = b.staticHTMLFilter(o);
//                                     e.insert("text", a),
//                                         n.stop()
//                                 }
//                             } else if (window.clipboardData) if (clipboardData.files && clipboardData.files.length > 0) {
//                                 n.stop();
//                                 var i = clipboardData.files[0];
//                                 f(e, i)
//                             }
//                         }
//                         function o(t) {
//                             if (p.webkit) return void(e._cursor = v.getRange());
//                             else return void clearTimeout(e._getCursorTimer)
//                         }
//                         function a(t) {
//                             if (p.webkit) return void(e._cursor = null);
//                             else return void c(e)
//                         }
//                         var r = e.main;
//                         if (r.addEventListener) r.addEventListener("keydown", n, !1),
//                             r.addEventListener("paste", i, !1),
//                             r.addEventListener("blur", o, !1),
//                             r.addEventListener("focus", a, !1);
//                         else r.attachEvent("onkeydown", n),
//                             r.attachEvent("onpaste", i),
//                             r.attachEvent("onblur", o),
//                             r.attachEvent("onfocus", a);
//                         r.ondrop = function() {
//                             return ! 1
//                         }
//                     }
//                     function d(e) {
//                         g.mixin(this),
//                             this.styles = {},
//                             this.plugins = {
//                                 text: require("./plugins/text"),
//                                 html: require("./plugins/html"),
//                                 face: require("./plugins/face"),
//                                 br: require("./plugins/br"),
//                                 img: require("./plugins/img")
//                             },
//                             this.main = n(e.main),
//                             l(this),
//                             this.setStyles(m(w, e.styles || {})),
//                             u(e.plugins || [],
//                                 function(e) {
//                                     this.plugin(e)
//                                 },
//                                 this)
//                     }
//                     var u = require("im-lib/lang/each"),
//                         m = require("im-lib/lang/extend"),
//                         g = require("im-lib/Emitter"),
//                         p = require("./browser"),
//                         b = require("im-filter"),
//                         h = p.ie,
//                         v = require("./selection"),
//                         y = h && h < 11 ? "<p></p>": "<p><br></p>",
//                         w = {
//                             fontFamily: "\u5b8b\u4f53",
//                             fontSize: "14px"
//                         },
//                         T = new RegExp("(^(<p[^>]*>(<br/?>|\\s*&nbsp;\\s*)*</p>)+)|((<p[^>]*>(<br/?>|\\s*&nbsp;\\s*)*</p>)+$)", "ig"),
//                         E = 300;
//                     return d.prototype.setStyles = function(e, t) {
//                         e = e || {},
//                             this.styles = m(this.styles, e);
//                         for (var n = t || this.main,
//                                  i = 0; i < n.childNodes.length; i++) if ("P" === n.childNodes[i].tagName) s(n.childNodes[i], this.styles);
//                         s(this.main, e)
//                     },
//                         d.prototype.getStyles = function() {
//                             return m({},
//                                 this.styles)
//                         },
//                         d.prototype.isBold = function() {
//                             var e = this.getStyles(),
//                                 t = e.fontWeight;
//                             return "bold" === t
//                         },
//                         d.prototype.isItalic = function() {
//                             var e = this.getStyles(),
//                                 t = e.fontStyle;
//                             return "italic" === t
//                         },
//                         d.prototype.isUnderline = function() {
//                             var e = this.getStyles(),
//                                 t = e.textDecoration;
//                             return "underline" === t
//                         },
//                         d.prototype.getContent = function() {
//                             var e = [i(this.main, this)];
//                             if (e[0]) e.unshift('<div style="' + a(this.styles) + '">'),
//                                 e.push("</div>");
//                             return e.join("")
//                         },
//                         d.prototype.setContent = function(e) {
//                             if (e) {
//                                 var t = document.createDocumentFragment();
//                                 t.innerHTML = e;
//                                 var n = t.firstChild || this.main,
//                                     i = r(n.style.cssText),
//                                     a = this;
//                                 u(i,
//                                     function(e, t) {
//                                         if (a.styles[e] !== t) a.emit("stylechange", e, t, a.styles[e])
//                                     }),
//                                     this.setStyles(i),
//                                     o(this.main, e)
//                             }
//                         },
//                         d.prototype.setText = function(e) {
//                             if (e) o(this.main, e)
//                         },
//                         d.prototype.plugin = function(e) {
//                             this.plugins[e.name] = e
//                         },
//                         d.prototype.insertElements = function(e, t) {
//                             if (! (e instanceof Array)) e = [e];
//                             if (e.length) v.insertNodes(this.main, e, t, this._cursor)
//                         },
//                         d.prototype.insert = function(e, t, n) {
//                             var i = this.plugins[e];
//                             if (i && "function" == typeof i.insert) i.insert(this, t, n)
//                         },
//                         d.prototype.focus = function() {
//                             var e = this.main;
//                             if (e.focus(), !h) {
//                                 var t = e.getElementsByTagName("p")[0];
//                                 if (t) v.setRange(t.firstChild || t)
//                             }
//                         },
//                         d.prototype.clear = function() {
//                             o(this.main, y),
//                                 this.setStyles(),
//                                 this.main.blur(),
//                                 this.main.focus()
//                         },
//                         d.prototype.enable = function() {
//                             e(this.main, !0)
//                         },
//                         d.prototype.disable = function() {
//                             e(this.main, !1)
//                         },
//                         d.prototype.isEnabled = function() {
//                             return t(this.main)
//                         },
//                         d
//                 }),
//             define("im-editor/main", ["require", "./Editor"],
//                 function(require) {
//                     var e = require("./Editor");
//                     return function(t) {
//                         return new e(t)
//                     }
//                 }),
//             define("im-editor", ["im-editor/main"],
//                 function(e) {
//                     return e
//                 }),
//             define("im-editor/config", ["require", "./main"],
//                 function(require) {
//                     return {
//                         package: "imEditor",
//                         resource: {
//                             main: require("./main")
//                         }
//                     }
//                 }),
//             define("embed/webimlight/editor/main", [],
//                 function() {
//                     var e, t, n, exports = {};
//                     return exports.setBold = function() {
//                         n.setStyles({
//                             fontWeight: "bold"
//                         })
//                     },
//                         exports.clearBold = function() {
//                             n.setStyles({
//                                 fontWeight: "normal"
//                             })
//                         },
//                         exports.setItalic = function() {
//                             n.setStyles({
//                                 fontStyle: "italic"
//                             })
//                         },
//                         exports.clearItalic = function() {
//                             n.setStyles({
//                                 fontStyle: "normal"
//                             })
//                         },
//                         exports.setUnderline = function() {
//                             n.setStyles({
//                                 textDecoration: "underline"
//                             })
//                         },
//                         exports.clearUnderline = function() {
//                             n.setStyles({
//                                 textDecoration: "none"
//                             })
//                         },
//                         exports.setColor = function(e) {
//                             n.setStyles({
//                                 color: e || "#000"
//                             })
//                         },
//                         exports.setFamily = function(e) {
//                             n.setStyles({
//                                 fontFamily: e
//                             })
//                         },
//                         exports.setSize = function(e) {
//                             n.setStyles({
//                                 fontSize: e
//                             })
//                         },
//                         exports.render = function(i, o, a, r) {
//                             a.appendHTML(o.template(i.get("editor")), e),
//                                 t = a.g("nbWebimLightEditor"),
//                                 n = r({
//                                     main: t,
//                                     styles: {
//                                         fontSize: "9pt"
//                                     }
//                                 })
//                         },
//                         exports.setFocus = function(e) {
//                             t.focus()
//                         },
//                         exports.getInstance = function() {
//                             return n
//                         },
//                         exports.handleInput = function(e) {
//                             if (13 === e.keyCode) {
//                                 if (e.stop(), e.ctrlKey) {
//                                     if (!/ mac/i.test(navigator.userAgent)) n.insert("br");
//                                     return
//                                 }
//                                 exports.sendText()
//                             }
//                         },
//                         exports.send = function(e) {},
//                         exports.sendText = function(e, t) {
//                             var i = n.getContent();
//                             if (i && e.isConnected()) i = t.anchor(i),
//                                 exports.send({
//                                     id: "msg" + +new Date,
//                                     text: i,
//                                     type: "text"
//                                 }),
//                                 n.clear()
//                         },
//                         exports.pasteUploadSuccess = function(e, n) {
//                             var i = n.bcsName,
//                                 o = document.getElementById(i);
//                             if (e.contain(o, t)) o.setAttribute("data-uploaded", 1);
//                             else exports.send({
//                                 type: "uploaded",
//                                 bcsName: i
//                             })
//                         },
//                         exports.insertFace = function(e, t, i, o) {
//                             var a = e.staticDomain;
//                             n.insert("face", t, {
//                                 urlPrefix: a + "/webim/resource/img/face/",
//                                 width: 19,
//                                 height: 19,
//                                 faceText: i,
//                                 extension: o
//                             })
//                         },
//                         exports.pasteShot = function(e, t, i, o) {
//                             var a = t.uuid();
//                             n.insert("img", o.src, {
//                                 "data-snap": 1,
//                                 "data-uploaded": 0,
//                                 "data-bcsName": a,
//                                 id: a
//                             }),
//                                 i.upload(e.getUploadUrl(a), o.blob, "file",
//                                     function() {
//                                         exports.pasteUploadSuccess({
//                                             bcsName: a
//                                         })
//                                     })
//                         },
//                         exports.bindEvent = function() {
//                             n.on("keydown", exports.handleInput),
//                                 n.on("screenshotpaste", exports.pasteShot)
//                         },
//                         exports.init = function(t, n, i) {
//                             e = t.g("nbWebImLightContainer"),
//                                 n.parse(i),
//                                 exports.render(),
//                                 exports.bindEvent()
//                         },
//                         exports
//                 }),
//             define("embed/webimlight/editor/main.tpl", [],
//                 function() {
//                     return '<!-- target: editor --><ins id="nbwlEditor"><ins id="nbWebimLightEditor" class="editor"></ins></ins>'
//                 }),
//             define("embed/webimlight/editor/config", ["require", "im-editor/config", "im-lib/config", "./main", "./main.tpl"],
//                 function(require) {
//                     return {
//                         package: "editor",
//                         importConfig: [require("im-editor/config"), require("im-lib/config")],
//                         resource: {
//                             main: require("./main"),
//                             tpl: require("./main.tpl")
//                         },
//                         injection: [{
//                             id: "editor.main",
//                             method: {
//                                 init: ["pbase.dom", "common.tpl", "editor.tpl"],
//                                 pasteShot: ["core.net", "pbase.lib", "imLib.net"],
//                                 sendText: ["core.chat", "imfilter.main"],
//                                 insertFace: ["webimlight.commonConfig"],
//                                 pasteUploadSuccess: ["pbase.dom"],
//                                 render: ["common.tpl", "common.util", "pbase.dom", "imEditor.main"],
//                                 setFocus: ["pbase.dom"]
//                             }
//                         }],
//                         aspect: [{
//                             id: "editor.main",
//                             pointCut: ["layout.main.render, , init", "toolbar.main.sendBtnClick, , sendText", "font.main.setBold, , setBold", "font.main.clearBold, , clearBold", "font.main.setItalic, , setItalic", "font.main.clearItalic, , clearItalic", "font.main.setUnderline, , setUnderline", "font.main.clearUnderline, , clearUnderline", "font.main.colorSelected, , setColor", "font.main.fontFamilyChange, , setFamily", "font.main.fontSizeChange, , setSize", "face.main.faceSelected, , insertFace", "webimlight.entry.show, , setFocus"]
//                         }]
//                     }
//                 }),
//             define("embed/webimlight/communicate/main", [],
//                 function() {
//                     var e, exports = {};
//                     exports.bindEvent = function(e, t) {
//                         for (var n in t) if (t.hasOwnProperty(n)) e.on(n, t[n])
//                     };
//                     var t;
//                     return exports.alive = function(e, n, i) {
//                         if (e.setItem("NEWBRIDGE_TALK_TYPE_" + n.siteid, "webimlight_" + i.sid), !t) t = setInterval(function() {
//                                 e.setItem("webimLightAlive" + n.siteid, +new Date)
//                             },
//                             1e3)
//                     },
//                         exports.die = function() {
//                             clearInterval(t)
//                         },
//                         exports.init = function(t, n) {
//                             var i = document.getElementById("newBridge");
//                             e = i.siteConfig,
//                                 e.ttype = 1,
//                                 exports.bindEvent()
//                         },
//                         exports.connect = function(t, n, i) {
//                             if (e.tid = n.tid, e.sp_refer = location.href, t.connect(e.ttype, e), 0 === n.status || 3 === n.status) i.emit("webimLightStatus", "show")
//                         },
//                         exports.send = function(e, t) {
//                             e.send(t)
//                         },
//                         exports.sendUnableMessage = function(e, t, n) {
//                             e.send({
//                                 id: "msg" + +new Date,
//                                 content: t,
//                                 msgInfo: n,
//                                 msgType: "file",
//                                 type: "unable message"
//                             })
//                         },
//                         exports
//                 }),
//         define("embed/webimlight/communicate/synchronizer", [],
//             function() {
//                 var e, exports = {},
//                     t = {},
//                     n = {},
//                     i = !1;
//                 return exports.broadcast = function(e, n, i) {
//                     if (n) for (var o = t[n] || [], a = 0; a < o.length; a++) {
//                         var r = o[a];
//                         if ("function" == typeof r) r(i)
//                     }
//                 },
//                     exports.emit = function(t, i, o) {
//                         exports.init(),
//                             i += e,
//                             n[i] = o + "",
//                             t.setItem(i, o)
//                     },
//                     exports.on = function(i, o, a) {
//                         if (exports.init(), o += e, n[o] = null, o) t[o] = t[o] || [],
//                             t[o].push(a)
//                     },
//                     exports.startpoll = function(e) {
//                         setInterval(function() {
//                                 for (var t in n) if (n.hasOwnProperty(t)) {
//                                     var i = e.getItem(t);
//                                     if (i !== n[t]) exports.broadcast(t, i),
//                                         n[t] = i
//                                 }
//                             },
//                             100)
//                     },
//                     exports.init = function(t) {
//                         if (!i) i = !0,
//                             e = t.siteid,
//                             exports.startpoll();
//                         else;
//                     },
//                     exports
//             }),
//         define("embed/webimlight/communicate/handler", ["require", "../main"],
//             function(require) {
//                 var exports = {},
//                     e = 1e3;
//                 exports.error = function(e, t) {
//                     if (require("../main").finish(), "forceover" === t.type) exports.systemMessage(e.LANG.OVER);
//                     else if (exports.systemMessage(e.LANG.ERROR), "init" === t.type || "connect" === t.type || "offline" === t.type) exports.transferErrorLog()
//                 },
//                     exports.transferErrorLog = function() {},
//                     exports.queueing = function(e) {
//                         var t = e.getServer("siteObj").queuing;
//                         exports.changeStatus(t)
//                     },
//                     exports.changeStatus = function(e) {},
//                     exports.systemMessage = function(e) {},
//                     exports.csoffline = function(e) {
//                         exports.changeStatus(e.LANG.CSOFFLINE)
//                     },
//                     exports.visitorblock = function(e, t) {
//                         if (t) exports.systemMessage(e.LANG.VISITORBLOCK);
//                         else exports.changeStatus(e.LANG.VISITORBLOCK)
//                     },
//                     exports.autoendtalk = function(e, t) {
//                         if (t) exports.systemMessage(e.LANG.AUTOENDTALK),
//                             require("../main").finish()
//                     },
//                     exports.invitefail = function(e) {
//                         exports.systemMessage(e.LANG.ERROR)
//                     };
//                 var t = null;
//                 exports.connected = function(n, i, o, a, r, s) {
//                     function c(e) {
//                         var t = {
//                             type: "text",
//                             text: e,
//                             id: "msg" + +new Date
//                         };
//                         n.preSend(t)
//                     }
//                     i.isSessionConnected = !0;
//                     var f = a.getInstance(),
//                         l = "";
//                     t = setInterval(function() {
//                             var e = f.getContent(),
//                                 t = document.createElement("div");
//                             t.innerHTML = e;
//                             var n = r.getText(t);
//                             if (n !== l) c(n),
//                                 l = n
//                         },
//                         e),
//                         exports.changeStatus(s.parseTime(new Date, "yyyy-MM-dd HH:mm:ss") + " " + o.LANG.STARTCONVERSATION)
//                 },
//                     exports.stopPreSend = function() {
//                         clearInterval(t)
//                     },
//                     exports.fileSUpload = function(e, t, n, i, o) {
//                         e.renderSystemMessage(t.LANG.FILEUNKNOWN, "info", o)
//                     },
//                     exports.message = function(e) {};
//                 var n = {};
//                 return exports.sendfail = function(e, t, i) {
//                     if (i.id) {
//                         var o = t.g(i.id);
//                         if (o) {
//                             if (!e.isConnected()) o.innerHTML = '<ins class="nb-webim-light-message-error-icon"></ins>\u5ba2\u670d\u5df2\u7ed3\u675f\u6c9f\u901a\uff0c\u53d1\u9001\u5931\u8d25';
//                             o.style.display = "block",
//                                 n[i.id] = i
//                         }
//                     }
//                 },
//                     exports.resend = function(e, t) {
//                         var i = n[t];
//                         if (i) i.id = "msg" + +new Date,
//                             e.send(i)
//                     },
//                     exports.scrollToBottom = function() {},
//                     exports.imgsendsuccess = function(e, t, n) {
//                         for (var i = t.getImagesByBcsName(n.bcsName), o = 0; o < i.length; o++) e.imgProccessor(i[o], exports.scrollToBottom),
//                             i[o].setAttribute("data-uploaded", 1)
//                     },
//                     exports.imgsendfail = function(e, t) {
//                         var n = document.getElementById(t.bcsName);
//                         if (n) n.setAttribute("data-uploaded", 2),
//                             e.imgProccessor(n, exports.scrollToBottom)
//                     },
//                     exports.currentIR = function() {},
//                     exports.showMsgRemind = function() {},
//                     exports.csonline = function() {},
//                     exports.fininshIR = function(e, t, n) {
//                         e.renderSystemMessage(t.LANG["CS" + n.type.toUpperCase() + "TIP"], "info")
//                     },
//                     exports.transferError = function(e, t) {
//                         e.renderSystemMessage(t.LANG.TRANSFERERROR)
//                     },
//                     exports.visitorTransfer = function(e, t, n, i, o) {
//                         e.renderSystemMessage(n.parseTime(new Date, "yyyy-MM-dd HH:mm:ss") + " " + t.LANG.VISITORTRANSFER.replace("${nickname}", i.nickname), "info", o)
//                     },
//                     exports
//             }),
//         define("embed/webimlight/communicate/config", ["require", "im-core/bullConfig", "./main", "./synchronizer", "./handler"],
//             function(require) {
//                 return {
//                     package: "communicate",
//                     importConfig: [require("im-core/bullConfig")],
//                     resource: {
//                         main: require("./main"),
//                         synchronizer: require("./synchronizer"),
//                         handler: require("./handler")
//                     },
//                     injection: [{
//                         id: "communicate.main",
//                         method: {
//                             init: ["core.main", "core.config"],
//                             send: ["core.main"],
//                             sendUnableMessage: ["core.main"],
//                             alive: ["imLib.localStorage", "core.config"],
//                             connect: ["core.main", "core.config", "communicate.synchronizer"],
//                             bindEvent: ["core.main", "communicate.handler"]
//                         }
//                     },
//                         {
//                             id: "communicate.synchronizer",
//                             method: {
//                                 broadcast: ["imLib.localStorage"],
//                                 emit: ["imLib.localStorage"],
//                                 on: ["imLib.localStorage"],
//                                 init: ["core.config"],
//                                 startpoll: ["imLib.localStorage"]
//                             }
//                         },
//                         {
//                             id: "communicate.handler",
//                             method: {
//                                 error: ["webimlight.commonConfig"],
//                                 queueing: ["data.config"],
//                                 csoffline: ["webimlight.commonConfig"],
//                                 visitorblock: ["webimlight.commonConfig"],
//                                 autoendtalk: ["webimlight.commonConfig"],
//                                 invitefail: ["webimlight.commonConfig"],
//                                 connected: ["core.main", "core.config", "webimlight.commonConfig", "editor.main", "imLib.util", "pbase.lib"],
//                                 sendfail: ["core.chat", "pbase.dom"],
//                                 resend: ["communicate.main"],
//                                 imgsendsuccess: ["imfilter.main", "messagecontainer.main"],
//                                 imgsendfail: ["imfilter.main"],
//                                 fininshIR: ["messagecontainer.main", "webimlight.commonConfig"],
//                                 fileSUpload: ["messagecontainer.main", "webimlight.commonConfig"],
//                                 transferError: ["messagecontainer.main", "webimlight.commonConfig"],
//                                 visitorTransfer: ["messagecontainer.main", "webimlight.commonConfig", "pbase.lib"]
//                             }
//                         }],
//                     aspect: [{
//                         id: "communicate.main",
//                         pointCut: ["layout.main.init, ,init", "webimlight.entry.connect, ,connect", "communicate.handler.connected, ,alive", "communicate.handler.error, ,die", "communicate.handler.csoffline, ,die", "communicate.handler.invitefail, ,die", "communicate.handler.autoendtalk, ,die", "editor.main.send, ,send", "picture.main.send, ,send", "robot.main.send, ,send", "communicate.handler.fileSUpload, ,sendUnableMessage"]
//                     },
//                         {
//                             id: "communicate.handler",
//                             pointCut: ["messagecontainer.main.imgUploadSuccessNotify, ,imgsendsuccess", "editor.main.pasteUploadSuccess, ,imgsendsuccess", "messagecontainer.main.resend, ,resend", "communicate.main.die, ,stopPreSend", "messagecontainer.main.imgUploadFailNotify, ,imgsendfail"]
//                         },
//                         {
//                             id: "communicate.synchronizer",
//                             pointCut: ["communicate.main.init, ,init"]
//                         }]
//                 }
//             }),
//         define("embed/embedChat/bid", ["require"],
//             function(require) {
//                 function e(e, t, n) {
//                     var i = n.OLDBIDKEY + e + "_BID",
//                         o = t.getItem(i);
//                     if (!o) return o;
//                     else return o = parseInt(o.substr(0, 13), 16).toString()
//                 }
//                 var exports = {};
//                 return exports.init = function(t, n, i, o, a, r, s) {
//                     if (n.isObject(s) && "undefined" != typeof r && "" !== r) return r;
//                     var c = o.BIDPRE + a;
//                     if (!r) r = t.getItem(c) || e(a, t, o) || i.getBid();
//                     return t.setItem(c, r),
//                         r
//                 },
//                     exports
//             }),
//         define("embed/embedChat/pc/chat", ["require", "exports"],
//             function(require, exports) {
//                 function e(e, t) {
//                     var n = window.screen.availWidth,
//                         i = window.screen.availHeight;
//                     return {
//                         left: Math.ceil((n - e) / 2),
//                         top: Math.ceil((i - t) / 2)
//                     }
//                 }
//                 function t(e) {}
//                 function n(e) {
//                     var t = e;
//                     if (/^https:/.test(e)) t = e.replace(/^https/, "http");
//                     else if (/^\/\//.test(e)) t = "http:" + e;
//                     return t
//                 }
//                 function i(e) {}
//                 function o(e) {
//                     exports.openWebimLight(!0)
//                 }
//                 var a = null,
//                     r = null,
//                     s = {};
//                 exports.initSystemInvite = function(e) {
//                     e.sid = "-100",
//                         e.tid = "-1",
//                         e.fromType = 1,
//                         e.ttype = 1
//                 },
//                     exports.refuseSuccess = function(e, t) {
//                         t.hide([r]),
//                             e.fromType = 1
//                     },
//                     exports.sendInviteMessage = function(e, t, n, i, o) {
//                         var a = i.getServer("configBox").inviteBox;
//                         if (a.inviteTxt) {
//                             var r = new t({
//                                 main: o.g("nbWebimLightEditor"),
//                                 styles: {
//                                     fontSize: "9pt"
//                                 }
//                             });
//                             r.setContent(a.inviteTxt);
//                             var s = o.g("nbwlSendBtn");
//                             n.domTrigger(s, "click")
//                         }
//                     },
//                     exports.openWebimLight = function(e, t, n, i) {
//                         var o = n.getServer("siteObj");
//                         if (!o.isWebim || i) {
//                             var a = (false || document.getElementById("newBridge")).require;
//                             a(["embed/webimlight/main"],
//                                 function(e) {
//                                     e.init()
//                                 })
//                         }
//                     },
//                     exports.autoOpenWebimLight = function(e, t) {
//                         var n = e.getServer("siteObj").siteId,
//                             i = "webimLightAlive" + n,
//                             o = t.localStorage.getItem(i) - 0;
//                         if (new Date - o < 2e3) exports.openWebimLight()
//                     },
//                     exports.setVisitorFrom = function(e, t, n, i) {
//                         var o = t.getServer("siteObj");
//                         if (e.tid && "-1" !== e.tid && !i) o.from = 4;
//                         else if (0 === n) o.from = 5;
//                         else o.from = 6
//                     },
//                     exports.openWebimWindow = function(t, i, o, r, c) {
//                         var f = o.getServer("siteObj"),
//                             l = o.getServer("configBox").inviteBox,
//                             d = {
//                                 from: 0,
//                                 sid: "-100",
//                                 tid: c || "-1",
//                                 ttype: 1,
//                                 siteId: f.siteId,
//                                 userId: f.userId
//                             };
//                         if (0 !== r) d = {
//                             from: t.fromType,
//                             sessionid: t.sid,
//                             siteId: f.siteId,
//                             tid: t.tid || "-1",
//                             userId: f.userId,
//                             ttype: t.ttype,
//                             messageText: l.inviteTxt
//                         },
//                             exports.initSystemInvite();
//                         d.pageId = f.pageId;
//                         var u = i.getXst();
//                         if (u) d.xst = u;
//                         s.reqParam = d;
//                         var m = f.webRoot + "chatIndex";
//                         m = n(m);
//                         var g = 750,
//                             p = 634,
//                             b = e(g, p),
//                             h = "left=" + b.left + ",top=" + b.top + ",resizable=1,width=" + g + ",height=" + p;
//                         if (!a && 4 !== t.siteStatus || 0 === t.siteStatus) {
//                             var v = "pcNBBridage" + (new Date).getTime();
//                             a = window.open(m + "?" + i.jsonToQuery(s), v, h)
//                         } else if (!a || a.closed || !a.window) a = window.open(m + "?" + i.jsonToQuery(s), "pcNBBridage", h);
//                         else a.focus()
//                     },
//                     exports.accept = function(e, t, n, i, o) {
//                         var a = n.getServer("siteObj");
//                         n.getServer("configBox").inviteBox;
//                         if (this.setVisitorFrom(i, o), !a.isWebim) {
//                             if (0 !== i) {
//                                 if (a.invited = 0, 4 === a.from) a.invited = 1
//                             } else if (0 === i) if (e.gid = o || -1, e.invited = 0, e.tid = "-1", o) e.tid = o;
//                             return void exports.openWebimLight()
//                         }
//                         this.openWebimWindow(i, o)
//                     },
//                     exports.enterSuccess = function(e, t, n, i, o, a, s, c, f) {
//                         var l = o.getServer("siteObj");
//                         if (3 === f.status) c.show([r]),
//                             i.sid = f.sid,
//                             i.tid = f.tid,
//                             i.fromType = 2,
//                             i.ttype = 0;
//                         else if (4 === f.status) c.hide([r]),
//                             i.siteStatus = f.status;
//                         if (e.emit("circleShowInvite", f), exports.autoOpenWebimLight(), exports.initSystemInvite(), 4 !== f.status) n.localStorage.removeItem(a.TALKTYPEPRE + l.siteId);
//                         var d = s.getItem(a.TALKTYPEPRE + l.siteId);
//                         if (d && d.indexOf("webimlight") !== -1) exports.openWebimLight(!0);
//                         if (4 === f.status) {
//                             var u = f.sid,
//                                 d = n.localStorage.getItem(a.TALKTYPEPRE + l.siteId) || "";
//                             if (!l.isWebim && !t.isConnected() && d.indexOf(u) !== -1) l.from = 5,
//                                 exports.openWebimLight()
//                         } else n.localStorage.removeItem(a.TALKTYPEPRE + l.siteId);
//                         if (i.siteStatus = f.status, "3".indexOf(f.status) !== -1) c.show([r]);
//                         else {
//                             if (c.hide([r]), "iconBox" === l.clcikType && 0 !== f.status) return;
//                             exports.initSystemInvite()
//                         }
//                     },
//                     exports.builtComunicate = function(e, t, n, a, s, c) {
//                         var f = e.getServer("siteObj");
//                         n.siteid = f.siteId,
//                             n.bid = a.init(f.siteId, f.bid || n.bid, f.session),
//                             n.eid = f.eid,
//                             n.urlRoot = f.webRoot,
//                             n.crossDomain = !0,
//                             n.webSocket = "true" === f.isGray,
//                             n.wsUrl = f.wsUrl,
//                             n.syncSessionHistory = !0,
//                             n.visitType = 1,
//                             t.init(n),
//                             s.init(n),
//                             exports.pageOnload(),
//                             s.enter(exports.enterSuccess, i),
//                             t.on("initiative", exports.initiative),
//                             t.on("forcetalk", o),
//                             t.on("watchStatus", exports.watchStatus),
//                             t.on("csoffline", exports.csoffline),
//                             r = c.g("nb_invite_wrap")
//                     },
//                     exports.initiative = function(e, t, n) {
//                         if (2 === e.fromType) t.show([r])
//                     },
//                     exports.watchStatus = function(e, t, n, i, o, a, s) {
//                         var c = t.getServer("siteObj");
//                         if (r) {
//                             if (4 === s.status) {
//                                 if (!c.isWebim && !n.isConnected()) exports.openWebimLight()
//                             } else o.removeItem(i.TALKTYPEPRE + c.siteId);
//                             if (e.siteStatus = s.status, "3".indexOf(s.status) !== -1) a.show([r]);
//                             else a.hide([r]),
//                                 exports.initSystemInvite()
//                         }
//                     },
//                     exports.csoffline = function(e) {
//                         e.showInCenter()
//                     },
//                     exports.refuse = function(e, n, i) {
//                         var o = e.getServer("siteObj"),
//                             a = {
//                                 v: o.userId,
//                                 s: o.siteId,
//                                 dev: "0",
//                                 type: 1,
//                                 sid: n.sid,
//                                 tid: n.tid,
//                                 tid_authtype: 4
//                             };
//                         i.push(a, exports.refuseSuccess, t)
//                     },
//                     exports.pageOnload = function(e, t, n) {
//                         if (t.isPageOnload = !1, n.checkLoad()) t.isPageOnload = !0;
//                         else e.domOn(window, "load",
//                             function() {
//                                 t.isPageOnload = !0
//                             })
//                     }
//             }),
//         define("embed/embedChat/pc/leave", ["require"],
//             function(require) {
//                 var e, exports = {};
//                 return exports.pageLeave = function(t, n, i, o, a) {
//                     if (!e) {
//                         var r = i.getServer("siteObj"),
//                             s = 4 === +n.siteStatus,
//                             c = o.getItem(a.TALKTYPEPRE + n.siteid);
//                         if (!c) {
//                             if (s && 1 === r.isWebim) t.disconnect();
//                             else t.disconnect(void 0, !1);
//                             e = !0
//                         }
//                     }
//                 },
//                     exports.init = function(e) {
//                         e.domOn(window, "pagehide", exports.pagehideHandler),
//                             e.domOn(window, "unload", exports.unloadHandler)
//                     },
//                     exports.pagehideHandler = function(e) {
//                         e.domOff(window, "unload", exports.unloadHandler),
//                             exports.pageLeave()
//                     },
//                     exports.unloadHandler = function(e) {
//                         e.domOff(window, "pagehide", exports.pagehideHandler),
//                             exports.pageLeave()
//                     },
//                     exports
//             }),
//         define("embed/embedChat/consts", [],
//             function() {
//                 return {
//                     OLDBIDKEY: "QIAO_LS_",
//                     BIDPRE: "NEWBRIDGE_BID_",
//                     TALKTYPEPRE: "NEWBRIDGE_TALK_TYPE_",
//                     DOMAIN: "//sgoutong.baidu.com"
//                 }
//             }),
//         define("embed/embedChat/config", ["require", "./bid", "./pc/chat", "./pc/leave", "./consts"],
//             function(require) {
//                 return {
//                     package: "pchat",
//                     resource: {
//                         bid: require("./bid"),
//                         chat: require("./pc/chat"),
//                         leave: require("./pc/leave"),
//                         consts: require("./consts")
//                     },
//                     injection: [{
//                         id: "pchat.chat",
//                         method: {
//                             setVisitorFrom: ["core.config", "data.config"],
//                             openWebimWindow: ["core.config", "core.net", "data.config"],
//                             accept: ["core.config", "core.net", "data.config"],
//                             builtComunicate: ["data.config", "core.main", "core.config", "pchat.bid", "core.site", "pbase.dom", "pchat.leave"],
//                             enterSuccess: ["core.main", "core.chat", "imLib.main", "core.config", "data.config", "pchat.consts", "imLib.localStorage", "pbase.dom"],
//                             autoOpenWebimLight: ["data.config", "imLib.main"],
//                             openWebimLight: ["pchat.consts", "imLib.localStorage", "data.config"],
//                             initSystemInvite: ["core.config"],
//                             watchStatus: ["core.config", "data.config", "core.chat", "pchat.consts", "imLib.localStorage", "pbase.dom"],
//                             refuse: ["data.config", "core.config", "core.net"],
//                             initiative: ["core.config", "pbase.dom"],
//                             refuseSuccess: ["core.config", "pbase.dom"],
//                             sendInviteMessage: ["common.util", "imEditor.main", "pbase.events", "data.config", "pbase.dom"],
//                             csoffline: ["pmessage.pmain"],
//                             pageOnload: ["pbase.events", "core.config", "common.util"]
//                         }
//                     },
//                         {
//                             id: "pchat.leave",
//                             method: {
//                                 pageLeave: ["core.main", "core.config", "data.config", "imLib.localStorage", "pchat.consts"],
//                                 init: ["pbase.events"],
//                                 pagehideHandler: ["pbase.events"],
//                                 unloadHandler: ["pbase.events"]
//                             }
//                         },
//                         {
//                             id: "pchat.bid",
//                             method: {
//                                 init: ["imLib.localStorage", "imLib.lang", "pbase.lib", "pchat.consts"]
//                             }
//                         }],
//                     aspect: [{
//                         id: "pchat.chat",
//                         pointCut: ["pinvite.main.init, , builtComunicate", "toolbar.main.enableSendBtn, ,sendInviteMessage"]
//                     },
//                         {
//                             id: "pchat.leave",
//                             pointCut: ["pchat.chat.builtComunicate, , init"]
//                         }]
//                 }
//             }),
//         define("embed/webimlight/toolbar/font/main", [],
//             function() {
//                 var e, t, n, i, o, a, r, s, c, f, exports = {};
//                 exports.bindEvent = function(e, l) {
//                     l.domOn(n, "click",
//                         function(e) {
//                             exports.toggleFontBar(),
//                                 l.domStop(e)
//                         }),
//                         l.domOn(t, "click",
//                             function(e) {
//                                 exports.hasOperation(),
//                                     l.domStop(e)
//                             }),
//                         l.domOn(i, "change",
//                             function(e) {
//                                 e = e || window.event;
//                                 var t = e.target || e.srcElement,
//                                     n = t.value;
//                                 exports.fontFamilyChange(n)
//                             }),
//                         l.domOn(o, "change",
//                             function(e) {
//                                 e = e || window.event;
//                                 var t = e.target || e.srcElement,
//                                     n = t.value;
//                                 exports.fontSizeChange(n)
//                             }),
//                         l.domOn(a, "click",
//                             function(e) {
//                                 exports.toggleBold()
//                             }),
//                         l.domOn(r, "click",
//                             function(e) {
//                                 exports.toggleItalic()
//                             }),
//                         l.domOn(s, "click",
//                             function(e) {
//                                 exports.toggleUnderline()
//                             }),
//                         l.domOn(c, "click",
//                             function(e) {
//                                 exports.toggleColor(),
//                                     l.domStop(e)
//                             }),
//                         l.domOn(f, "click",
//                             function(e) {
//                                 e = e || window.event;
//                                 var t = e.target || e.srcElement,
//                                     n = t.getAttribute("data-color");
//                                 if (n) exports.colorSelected(n)
//                             })
//                 },
//                     exports.fontFamilyChange = function(e) {},
//                     exports.fontSizeChange = function(e) {},
//                     exports.hasOperation = function() {};
//                 var l = "nb-webim-light-color-select";
//                 exports.colorSelected = function(e, t, n) {
//                     for (var i = f.getElementsByTagName("li"), o = 0; o < t.length; o++) if (e.removeClass(i[o], l), t[o] === n) e.addClass(i[o], l)
//                 },
//                     exports.showFontBar = function(e, i) {
//                         var o = i.getInstance();
//                         if (o.isBold()) exports.setBold();
//                         else exports.clearBold();
//                         if (o.isItalic()) exports.setItalic();
//                         else exports.clearItalic();
//                         if (o.isUnderline()) exports.setUnderline();
//                         else exports.clearUnderline();
//                         t.style.display = "block",
//                             e.addClass(n, "nb-webim-light-font-bar-show")
//                     },
//                     exports.hideFontBar = function(e) {
//                         t.style.display = "none",
//                             e.removeClass(n, "nb-webim-light-font-bar-show"),
//                             exports.hideColor()
//                     },
//                     exports.toggleFontBar = function() {
//                         if (t.offsetHeight) exports.hideFontBar();
//                         else exports.showFontBar()
//                     };
//                 var d = "nb-webim-light-font-bold-selected";
//                 exports.setBold = function(e) {
//                     e.addClass(a, d)
//                 },
//                     exports.clearBold = function(e) {
//                         e.removeClass(a, d)
//                     },
//                     exports.toggleBold = function(e) {
//                         if (e.hasClass(a, d)) exports.clearBold();
//                         else exports.setBold()
//                     };
//                 var u = "nb-webim-light-font-italic-selected";
//                 exports.setItalic = function(e) {
//                     e.addClass(r, u)
//                 },
//                     exports.clearItalic = function(e) {
//                         e.removeClass(r, u)
//                     },
//                     exports.toggleItalic = function(e) {
//                         if (e.hasClass(r, u)) exports.clearItalic();
//                         else exports.setItalic()
//                     };
//                 var m = "nb-webim-light-font-underline-selected";
//                 return exports.setUnderline = function(e) {
//                     e.addClass(s, m)
//                 },
//                     exports.clearUnderline = function(e) {
//                         e.removeClass(s, m)
//                     },
//                     exports.toggleUnderline = function(e) {
//                         if (e.hasClass(s, m)) exports.clearUnderline();
//                         else exports.setUnderline()
//                     },
//                     exports.showColor = function(e, t) {
//                         var n = t.getInstance(),
//                             i = n.getStyles();
//                         exports.colorSelected(i.color),
//                             f.style.display = "block"
//                     },
//                     exports.hideColor = function() {
//                         f.style.display = "none"
//                     },
//                     exports.toggleColor = function() {
//                         if (f.offsetHeight) exports.hideColor();
//                         else exports.showColor()
//                     },
//                     exports.render = function(l, d, u, m) {
//                         for (var g = [], p = l.get("colorItem"), b = 0; b < m.length; b++) g.push(d.template(p, {
//                             color: m[b]
//                         }));
//                         u.appendHTML(d.template(l.get("font"), {
//                             colorItems: g.join("")
//                         }), e),
//                             n = u.g("nbwlFontIcon"),
//                             t = u.g("nbwlFontContainer"),
//                             i = u.g("nbwlFontFamily"),
//                             o = u.g("nbwlFontSize"),
//                             a = u.g("nbwlFontBold"),
//                             r = u.g("nbwlFontItalic"),
//                             s = u.g("nbwlFontUnderline"),
//                             c = u.g("nbwlFontColor"),
//                             f = u.g("nbwlColorContainer"),
//                             exports.colorSelected(m[0])
//                     },
//                     exports.init = function(t, n, i) {
//                         e = t.g("nbwlToolBar"),
//                             n.parse(i),
//                             exports.render(),
//                             exports.bindEvent()
//                     },
//                     exports
//             }),
//         define("embed/webimlight/toolbar/font/color", [],
//             function() {
//                 return ["#000000", "#7f8003", "#808080", "#408082", "#420140", "#efefef", "#3f0100", "#814000", "#004300", "#010576", "#00003f", "#40027e", "#7c0200", "#fd8100", "#00ff04", "#02fffb", "#7e81bf", "#ff01fa", "#fe0100", "#feff00"]
//             }),
//         define("embed/webimlight/toolbar/font/main.tpl", [],
//             function() {
//                 return '<!-- target: font --><ins id="nbwlFontIcon" class="nb-webim-light-toolbar-font"><ins id="nbwlFontContainer" class="nb-webim-light-font-container"><ins class="nb-webim-light-font-bar"><select id="nbwlFontFamily" class="nb-webim-light-font-family"><option value="\u5b8b\u4f53">\u5b8b\u4f53</option><option value="arial,\u5fae\u8f6f\u96c5\u9ed1">\u5fae\u8f6f\u96c5\u9ed1</option><option value="arial,\u6977\u4f53">\u6977\u4f53</option><option value="arial,\u9ed1\u4f53">\u9ed1\u4f53</option><option value="arial,\u96b6\u4e66">\u96b6\u4e66</option><option value="Arial">Arial</option><option value="Roman">Roman</option></select><select id="nbwlFontSize" class="nb-webim-light-font-size"><option value="8pt">8</option><option value="10pt" selected>10</option><option value="12pt">12</option><option value="14pt">14</option><option value="16pt">16</option><option value="18pt">18</option><option value="24pt">24</option></select><ins id="nbwlFontBold" class="nb-webim-light-font-bold" title="\u52a0\u7c97">B</ins><ins id="nbwlFontItalic" class="nb-webim-light-font-italic" title="\u659c\u4f53">I&nbsp;</ins><ins id="nbwlFontUnderline" class="nb-webim-light-font-underline" title="\u4e0b\u5212\u7ebf">U</ins><ins id="nbwlFontColor" class="nb-webim-light-font-color" title="\u5b57\u4f53\u989c\u8272"><ins id="nbwlColorContainer" class="nb-webim-light-color-container"><ul><%colorItems%></ul><div class="nb-webim-light-arrow"><em></em><ins></ins></div></ins></ins></ins></ins></ins><!-- target: colorItem --><li class="nb-webim-light-color-item" style="border-color:<%color%>;"><ins style="background-color: <%color%>;" data-color="<%color%>"></ins></li>'
//             }),
//         define("embed/webimlight/toolbar/font/config", ["require", "./main", "./color", "./main.tpl"],
//             function(require) {
//                 return {
//                     package: "font",
//                     resource: {
//                         main: require("./main"),
//                         color: require("./color"),
//                         tpl: require("./main.tpl")
//                     },
//                     injection: [{
//                         id: "font.main",
//                         method: {
//                             init: ["pbase.dom", "common.tpl", "font.tpl"],
//                             bindEvent: ["pbase.dom", "pbase.events"],
//                             showFontBar: ["pbase.dom", "editor.main"],
//                             hideFontBar: ["pbase.dom"],
//                             setBold: ["pbase.dom"],
//                             clearBold: ["pbase.dom"],
//                             toggleBold: ["pbase.dom"],
//                             setItalic: ["pbase.dom"],
//                             clearItalic: ["pbase.dom"],
//                             toggleItalic: ["pbase.dom"],
//                             setUnderline: ["pbase.dom"],
//                             clearUnderline: ["pbase.dom"],
//                             toggleUnderline: ["pbase.dom"],
//                             showColor: ["pbase.dom", "editor.main"],
//                             colorSelected: ["pbase.dom", "font.color"],
//                             render: ["common.tpl", "common.util", "pbase.dom", "font.color"]
//                         }
//                     }],
//                     aspect: [{
//                         id: "font.main",
//                         pointCut: ["toolbar.main.render, , init", "layout.main.hasOperation, , hideFontBar", "font.main.hasOperation, , hideColor", "face.main.toggle, , hideFontBar"]
//                     }]
//                 }
//             }),
//         define("embed/webimlight/toolbar/face/main", [],
//             function() {
//                 var e, t, n, i, exports = {};
//                 exports.show = function(e) {
//                     t.style.display = "block",
//                         e.addClass(n, "nb-webim-light-face-show")
//                 },
//                     exports.hide = function(e) {
//                         t.style.display = "none",
//                             e.removeClass(n, "nb-webim-light-face-show")
//                     },
//                     exports.toggle = function() {
//                         if (exports.isShown()) exports.hide();
//                         else exports.show()
//                     },
//                     exports.bindEvent = function(e) {
//                         e.domOn(n, "click",
//                             function(t) {
//                                 exports.toggle(),
//                                     e.domStop(t)
//                             }),
//                             e.domOn(t, "mouseover",
//                                 function(e) {
//                                     e = e || window.event;
//                                     var t = e.target || e.srcElement;
//                                     if (t && "nb-webim-light-face-item" === t.className) exports.showPreview(t);
//                                     else if ("nbwlFaceContainer" === t.id) a()
//                                 }),
//                             e.domOn(t, "click",
//                                 function(e) {
//                                     e = e || window.event;
//                                     var t = e.target || e.srcElement,
//                                         n = t.getAttribute("face"),
//                                         i = t.getAttribute("alt"),
//                                         o = t.getAttribute("extension");
//                                     if (n) exports.faceSelected(n, i, o)
//                                 })
//                     };
//                 var o = "//sgoutong.baidu.com/webim/resource/img/face/";
//                 exports.showPreview = function(e, t) {
//                     for (var n = t.getAttribute("face"), a = 0, r = 0; r < e.length; r++) if (e[r].md5 === n) a = r;
//                     if (a % 12 < 6) i.style.left = "313px";
//                     else i.style.left = "12px";
//                     i.style.backgroundImage = 'url("' + o + n + '.png")',
//                         i.style.display = "block"
//                 };
//                 var a = function() {
//                     i.style.display = "none"
//                 };
//                 return exports.faceSelected = function(e, t) {},
//                     exports.isShown = function() {
//                         return !! t.offsetHeight
//                     },
//                     exports.render = function(o, a, r, s, c) {
//                         for (var f = [], l = o.get("faceItem"), d = 0; d < s.length; d++) f.push(a.template(l, {
//                             md5: s[d].md5,
//                             ext: s[d].ext,
//                             comment: c[d]
//                         }));
//                         r.appendHTML(a.template(o.get("face"), {
//                             faceItems: f.join("")
//                         }), e),
//                             t = r.g("nbwlFaceContainer"),
//                             n = r.g("nbwlFaceIcon"),
//                             i = r.g("previewBox")
//                     },
//                     exports.init = function(t, n, i) {
//                         e = t.g("nbwlToolBar"),
//                             n.parse(i),
//                             exports.render(),
//                             exports.bindEvent()
//                     },
//                     exports
//             }),
//         define("embed/webimlight/toolbar/face/facemd5", [],
//             function() {
//                 return [{
//                     md5: "7f62a16f51cc29b221a87ed741cb2040",
//                     ext: "png"
//                 },
//                     {
//                         md5: "449f34831c63932bc6f816fb69222696",
//                         ext: "png"
//                     },
//                     {
//                         md5: "84ac7709105c9e8b986e1fb080aef158",
//                         ext: "png"
//                     },
//                     {
//                         md5: "1360cc1b2e12fc722571584290a2b6e1",
//                         ext: "png"
//                     },
//                     {
//                         md5: "6628ce0328a1aec3e3688a95ebbd609d",
//                         ext: "png"
//                     },
//                     {
//                         md5: "5a2cce712902b315f98cbce1df04462a",
//                         ext: "png"
//                     },
//                     {
//                         md5: "6c0ae5a68c041f7f339d87ba313292c5",
//                         ext: "png"
//                     },
//                     {
//                         md5: "576f76513e5a4c5b49b8e5323e69ff8b",
//                         ext: "png"
//                     },
//                     {
//                         md5: "43a89b8fa99b951863b9e52bbba44e63",
//                         ext: "png"
//                     },
//                     {
//                         md5: "f0bcf27ffcef2c7d627af19d04ce7051",
//                         ext: "png"
//                     },
//                     {
//                         md5: "b19fb15226fdc3bedb574f7f319ac4e8",
//                         ext: "png"
//                     },
//                     {
//                         md5: "20791b0c75839b8ede1deddf7d14ea0e",
//                         ext: "png"
//                     },
//                     {
//                         md5: "585d6a02d5209eebce230c11a84e2122",
//                         ext: "png"
//                     },
//                     {
//                         md5: "65c0ea03c6ad3a2c9a56ef2f12d73d7f",
//                         ext: "png"
//                     },
//                     {
//                         md5: "9c3ab5280830b24928fba2ecbfa5423c",
//                         ext: "png"
//                     },
//                     {
//                         md5: "ec619f6b677a364aa8daca7ee088b0fc",
//                         ext: "png"
//                     },
//                     {
//                         md5: "ba6bd8678622db5c54cc265f78540a59",
//                         ext: "png"
//                     },
//                     {
//                         md5: "5d2bba3091be38970563d3e4bd04e8fb",
//                         ext: "png"
//                     },
//                     {
//                         md5: "eba03f67b8a667bb16b20fd32b9b51bd",
//                         ext: "png"
//                     },
//                     {
//                         md5: "915fb0149e684a7f1f40f568aac87a74",
//                         ext: "png"
//                     },
//                     {
//                         md5: "80f75e10b4fb8c46df80b1595c7d50cb",
//                         ext: "png"
//                     },
//                     {
//                         md5: "49c0997a2807cf28300e84fb87605efe",
//                         ext: "png"
//                     },
//                     {
//                         md5: "e162da21d7bde950367501958629aa18",
//                         ext: "png"
//                     },
//                     {
//                         md5: "f59bf80e1ba9111f4ee819fddec977d5",
//                         ext: "png"
//                     },
//                     {
//                         md5: "6594322f85d0a78caa55c95182937a43",
//                         ext: "png"
//                     },
//                     {
//                         md5: "6dd384507524a14951b2978ce45d427c",
//                         ext: "png"
//                     },
//                     {
//                         md5: "d2b9f0ebae2898bab340a464f10a678c",
//                         ext: "png"
//                     },
//                     {
//                         md5: "3b1f5191cc6f6aab3fbc161f5ca95586",
//                         ext: "png"
//                     },
//                     {
//                         md5: "6b562d094d2f23a5f41ba823ded02da2",
//                         ext: "png"
//                     },
//                     {
//                         md5: "10dbd6c0cf8d5af5c70fdf4eb7f98692",
//                         ext: "png"
//                     },
//                     {
//                         md5: "ce277e2ca55543eb7eb467c5d397e10d",
//                         ext: "png"
//                     },
//                     {
//                         md5: "d652ac7ff1ac8c0d4ad9d00e9847fccc",
//                         ext: "png"
//                     },
//                     {
//                         md5: "42c9ab68d510f0dfa35e4df3abf6a5fa",
//                         ext: "png"
//                     },
//                     {
//                         md5: "8e972967218fa060a8fcda1a54fe025b",
//                         ext: "png"
//                     },
//                     {
//                         md5: "2a3a3cf6d0b28d889fd249e3d68afae2",
//                         ext: "png"
//                     },
//                     {
//                         md5: "9912488906a31978d1c93150e7da65be",
//                         ext: "png"
//                     },
//                     {
//                         md5: "034650679ea520821ace18816fd309b8",
//                         ext: "png"
//                     },
//                     {
//                         md5: "f34d9586f86e135e4ce5c9630c9f6a25",
//                         ext: "png"
//                     },
//                     {
//                         md5: "a5b36a0ac2cf38463e9e6486fc3d6b70",
//                         ext: "png"
//                     },
//                     {
//                         md5: "f5ddc76e56c8221e61c58b72e37f9829",
//                         ext: "png"
//                     },
//                     {
//                         md5: "2f25b6cbc178c5811743bb3f3fe95eb6",
//                         ext: "png"
//                     },
//                     {
//                         md5: "b6405f17ae2596f6065a8b1da7d81da4",
//                         ext: "png"
//                     },
//                     {
//                         md5: "b0955a756bc690b02fc6c82cb5663be6",
//                         ext: "png"
//                     },
//                     {
//                         md5: "6a91ab45cab3ce482b2069f3a8bb43aa",
//                         ext: "png"
//                     },
//                     {
//                         md5: "e33ec7875595d23dfc0e70625aa839dd",
//                         ext: "png"
//                     },
//                     {
//                         md5: "d987e058fe2ddb9436e3f3af3aeee43c",
//                         ext: "png"
//                     },
//                     {
//                         md5: "7413c233681ce9f2a7d3d0e22d4ba632",
//                         ext: "png"
//                     },
//                     {
//                         md5: "004a9411849aa007b843d4bc74ba2db3",
//                         ext: "png"
//                     },
//                     {
//                         md5: "1e04fa2b77173ad5419c58cb2a4c944c",
//                         ext: "png"
//                     },
//                     {
//                         md5: "14f8db64e92d43e0ee4bb1c55553e399",
//                         ext: "png"
//                     },
//                     {
//                         md5: "0246fb8175a9e47e859593f6ed19e7f3",
//                         ext: "png"
//                     },
//                     {
//                         md5: "54207c894ff556b1778eeb90893e196a",
//                         ext: "png"
//                     },
//                     {
//                         md5: "73d4ace4f6bafb7c48f7d4ea62da5e27",
//                         ext: "png"
//                     },
//                     {
//                         md5: "f985e5a0d5f5e7ec7d0e02f229164816",
//                         ext: "png"
//                     },
//                     {
//                         md5: "4fc4e9bf21b34df2170c2add1a215162",
//                         ext: "png"
//                     },
//                     {
//                         md5: "481fa659924b4dd3c692556fe1e42349",
//                         ext: "png"
//                     },
//                     {
//                         md5: "e0275fff10e8225e5618e7baf95b6296",
//                         ext: "png"
//                     },
//                     {
//                         md5: "e1e8ac2d122dca4fe77644994a815613",
//                         ext: "png"
//                     },
//                     {
//                         md5: "fd1457cad55db7e7dc7970acb24e5832",
//                         ext: "png"
//                     },
//                     {
//                         md5: "dc45642dc5aae41541fff2634a08a647",
//                         ext: "png"
//                     },
//                     {
//                         md5: "49106010c742c69727221622283131a9",
//                         ext: "png"
//                     },
//                     {
//                         md5: "6b278bb3a2acaa362311551208c22de7",
//                         ext: "png"
//                     },
//                     {
//                         md5: "3693411aa84d66f7ff840993acc9c753",
//                         ext: "png"
//                     },
//                     {
//                         md5: "f5d3fd06ead545b5abd48e367195b1fb",
//                         ext: "png"
//                     },
//                     {
//                         md5: "a91f909f9d1a1fdca0c0eaf8f232eb1f",
//                         ext: "png"
//                     },
//                     {
//                         md5: "3e2ec2a092127757f89a771762d2103f",
//                         ext: "png"
//                     },
//                     {
//                         md5: "5cd4259ce1239fb13b1b026826ae5cd8",
//                         ext: "png"
//                     },
//                     {
//                         md5: "b9149566ccf3b7937ab2f0a639e681f5",
//                         ext: "png"
//                     },
//                     {
//                         md5: "6697732553bbee2d1760b2d889220eb2",
//                         ext: "png"
//                     },
//                     {
//                         md5: "5537920713864c60f86dcba194b459ef",
//                         ext: "png"
//                     },
//                     {
//                         md5: "bf4bc9d82fd8365319e4f4fca8732e26",
//                         ext: "png"
//                     },
//                     {
//                         md5: "bb3b630c7189b362d39905a6b10f4e25",
//                         ext: "png"
//                     },
//                     {
//                         md5: "c6796331da7ebed681d6adcfdc1d9e60",
//                         ext: "png"
//                     },
//                     {
//                         md5: "5e54aaa520e07cc35c92594aa85c3ca5",
//                         ext: "png"
//                     },
//                     {
//                         md5: "0e3a50af997063d132bb115e98cf9783",
//                         ext: "png"
//                     },
//                     {
//                         md5: "f4963b986d487f24100ac41b4d36e4b6",
//                         ext: "png"
//                     },
//                     {
//                         md5: "78d7c5e2e0dfb11fce910a45019bc52c",
//                         ext: "png"
//                     },
//                     {
//                         md5: "24b03c84c57ced0bea595c264bd7d9f1",
//                         ext: "png"
//                     },
//                     {
//                         md5: "e6af94688a6f70062c75a3cf3f8dfdf5",
//                         ext: "png"
//                     },
//                     {
//                         md5: "71a6b6d3231a0ca74f2c80f6c36b81b8",
//                         ext: "png"
//                     }]
//             }),
//         define("embed/webimlight/toolbar/face/facename", [],
//             function() {
//                 return ["\u5fae\u7b11", "\u5927\u7b11", "\u5077\u7b11", "\u61a8\u7b11", "\u5f97\u610f", "\u53ef\u7231", "\u5bb3\u7f9e", "\u4e56", "\u6dd8\u6c14", "\u8c03\u76ae", "\u6d41\u6cea", "\u5927\u54ed", "\u6487\u5634", "\u95ed\u5634", "\u5618", "\u9119\u89c6", "\u50b2\u6162", "\u767d\u773c", "\u601d\u8003", "\u56f0", "\u7761", "\u6c57", "\u5c34\u5c2c", "\u60ca\u8bb6", "\u60ca\u6050", "\u7591\u95ee", "\u6655", "\u6572\u6253", "\u96be\u8fc7", "\u59d4\u5c48", "\u8272", "\u6293\u72c2", "\u6124\u6012", "\u5410", "\u8870", "\u518d\u89c1", "\u6ed1\u7a3d", "\u9ad8\u5174", "\u5b8c\u7f8e", "\u574f\u7b11", "\u60ca\u5446", "\u563f\u54c8", "\u673a\u667a", "\u8d70\u4f60", "\u6342\u8138", "\u6233\u8138", "\u7231\u5fc3", "\u9f3b\u8840", "\u594b\u6597", "\u68d2\u68d2\u54d2", "\u6478\u5934", "NO", "\u6c89\u601d", "\u62a0\u9f3b", "\u751f\u75c5", "\u53e3\u7f69", "\u5de6\u62e5\u62b1", "\u53f3\u62e5\u62b1", "\u95ea\u4eba", "\u5200", "\u543b", "\u7231\u60c5", "\u5fc3\u788e", "\u9c9c\u82b1", "\u67af\u840e", "\u80dc\u5229", "OK", "\u5927\u62c7\u6307", "\u5f31", "\u63e1\u624b", "\u86cb\u7cd5", "\u5496\u5561", "\u5403\u996d", "\u592a\u9633", "\u6708\u4eae", "\u661f\u661f", "\u4fbf\u4fbf", "\u732a\u5934", "\u94b1", "Hi"]
//             }),
//         define("embed/webimlight/toolbar/face/main.tpl", [],
//             function() {
//                 return '<!-- target: face --><ins id="nbwlFaceIcon" class="nb-webim-light-toolbar-face"><ins id="nbwlFaceContainer" class="nb-webim-light-face-container"><ins class="nb-webim-light-face-content"><ul><%faceItems%></ul></ins><ins id="previewBox"></ins><div class="nb-webim-light-arrow"><em></em><ins></ins></div><ins></ins><!-- target: faceItem --><li class="nb-webim-light-face-item" face="<%md5%>" extension="<%ext%>" alt="<%comment%>"></li>'
//             }),
//         define("embed/webimlight/toolbar/face/config", ["require", "./main", "./facemd5", "./facename", "./main.tpl"],
//             function(require) {
//                 return {
//                     package: "face",
//                     resource: {
//                         main: require("./main"),
//                         facemd5: require("./facemd5"),
//                         facename: require("./facename"),
//                         tpl: require("./main.tpl")
//                     },
//                     injection: [{
//                         id: "face.main",
//                         method: {
//                             init: ["pbase.dom", "common.tpl", "face.tpl"],
//                             bindEvent: ["pbase.events"],
//                             show: ["pbase.dom"],
//                             hide: ["pbase.dom"],
//                             render: ["common.tpl", "common.util", "pbase.dom", "face.facemd5", "face.facename"],
//                             showPreview: ["face.facemd5"]
//                         }
//                     }],
//                     aspect: [{
//                         id: "face.main",
//                         pointCut: ["toolbar.main.render, , init", "layout.main.hasOperation, , hide", "font.main.toggleFontBar, , hide"]
//                     }]
//                 }
//             }),
//         define("embed/webimlight/toolbar/picture/main", [],
//             function() {
//                 var e, t, n, exports = {};
//                 return exports.bindEvent = function(e, n) {
//                     t = e.g("nbwlPicInput"),
//                         n.domOn(t, "change",
//                             function(e) {
//                                 exports.fileSelected(t)
//                             })
//                 },
//                     exports.checkExt = function(e, t) {
//                         var n = e.picExt,
//                             i = t.value,
//                             o = i.substring(i.lastIndexOf(".")).toLowerCase();
//                         if (n.indexOf(o) === -1) return ! 1;
//                         else return ! 0
//                     },
//                     exports.checkSize = function(e, t) {
//                         var n = e.sizeLimit,
//                             i = 0;
//                         if (!n) return ! 0;
//                         try {
//                             if ("files" in t) i = t.files[0].size;
//                             else {
//                                 var o = new ActiveXObject("Scripting.FileSystemObject"),
//                                     a = t.value,
//                                     r = o.getFile(a);
//                                 i = r.size
//                             }
//                         } catch(e) {}
//                         if (i > n) return ! 1;
//                         else return ! 0
//                     },
//                     exports.send = function(e) {},
//                     exports.resetInput = function() {
//                         n.innerHTML = n.innerHTML,
//                             exports.bindEvent()
//                     },
//                     exports.message = function(e) {},
//                     exports.fileSelected = function(e, i, o, a, r, s) {
//                         if (s.value) {
//                             if (!exports.checkExt(s)) return void exports.checkFailMsg();
//                             if (!exports.checkSize(s)) return void exports.checkFailMsg();
//                             if (i.isConnected()) {
//                                 var c = o.uuid(),
//                                     f = "msg" + +new Date,
//                                     l = a.template(r.get("imgMessage"), {
//                                         bcsname: c
//                                     });
//                                 exports.send({
//                                     type: "img",
//                                     id: f,
//                                     bcsName: c,
//                                     form: n,
//                                     text: l,
//                                     role: 0,
//                                     path: t.value
//                                 })
//                             }
//                         }
//                     },
//                     exports.render = function(i, o, a) {
//                         a.appendHTML(o.template(i.get("picture")), e),
//                             t = a.g("nbwlPicInput"),
//                             n = a.g("nbwlPicForm")
//                     },
//                     exports.checkFailMsg = function(e, t) {
//                         e.renderSystemMessage(t.LANG.IMGERROR)
//                     },
//                     exports.init = function(t, n, i) {
//                         e = t.g("nbwlToolBar"),
//                             n.parse(i),
//                             exports.render(),
//                             exports.bindEvent()
//                     },
//                     exports
//             }),
//         define("embed/webimlight/toolbar/picture/main.tpl", [],
//             function() {
//                 return '<!-- target: picture --><ins class="nb-webim-light-toolbar-picture"><form id="nbwlPicForm"><input id="nbwlPicInput" type="file" name="pic" accept="image/jpeg,image/png,image/gif"></form></ins><!-- target: imgMessage --><img id="<%bcsname%>" data-uploaded="0" data-bcsName="<%bcsname%>">'
//             }),
//         define("embed/webimlight/toolbar/picture/config", ["require", "./main", "./main.tpl"],
//             function(require) {
//                 return {
//                     package: "picture",
//                     resource: {
//                         main: require("./main"),
//                         tpl: require("./main.tpl")
//                     },
//                     injection: [{
//                         id: "picture.main",
//                         method: {
//                             init: ["pbase.dom", "common.tpl", "picture.tpl"],
//                             bindEvent: ["pbase.dom", "pbase.events"],
//                             checkExt: ["webimlight.commonConfig"],
//                             fileSelected: ["core.net", "core.chat", "imLib.util", "common.util", "common.tpl"],
//                             render: ["common.tpl", "common.util", "pbase.dom"],
//                             checkFailMsg: ["messagecontainer.main", "webimlight.commonConfig"]
//                         }
//                     }],
//                     aspect: [{
//                         id: "picture.main",
//                         pointCut: ["toolbar.main.render, , init", "picture.main.fileSelected, , resetInput"]
//                     }]
//                 }
//             }),
//         define("embed/webimlight/toolbar/main", [],
//             function() {
//                 var e, exports = {};
//                 return exports.bindEvent = function(e, t) {
//                     var n = e.g("nbwlSendBtn");
//                     t.domOn(n, "click",
//                         function() {
//                             exports.sendBtnClick()
//                         })
//                 },
//                     exports.disableSendBtn = function(e) {
//                         var t = e.g("nbwlSendBtn");
//                         e.addClass(t, "nb-webim-light-toolbar-send-disable")
//                     },
//                     exports.enableSendBtn = function(e) {
//                         var t = e.g("nbwlSendBtn");
//                         e.removeClass(t, "nb-webim-light-toolbar-send-disable")
//                     },
//                     exports.sendBtnClick = function() {},
//                     exports.render = function(t, n, i) {
//                         i.appendHTML(n.template(t.get("toolbar")), e)
//                     },
//                     exports.init = function(t, n, i) {
//                         e = t.g("nbWebImLightContainer"),
//                             n.parse(i),
//                             exports.render(),
//                             exports.bindEvent()
//                     },
//                     exports
//             }),
//         define("embed/webimlight/toolbar/main.tpl", [],
//             function() {
//                 return '<!-- target: toolbar --><ins id="nbwlToolBar"><ins id="nbwlSendBtn" class="nb-webim-light-toolbar-send nb-webim-light-toolbar-send-disable">\u53d1\u9001</ins></ins>'
//             }),
//         define("embed/webimlight/toolbar/config", ["require", "./font/config", "./face/config", "./picture/config", "./main", "./main.tpl"],
//             function(require) {
//                 return {
//                     package: "toolbar",
//                     importConfig: [require("./font/config"), require("./face/config"), require("./picture/config")],
//                     resource: {
//                         main: require("./main"),
//                         tpl: require("./main.tpl")
//                     },
//                     injection: [{
//                         id: "toolbar.main",
//                         method: {
//                             init: ["pbase.dom", "common.tpl", "toolbar.tpl"],
//                             bindEvent: ["pbase.dom", "pbase.events"],
//                             disableSendBtn: ["pbase.dom"],
//                             enableSendBtn: ["pbase.dom"],
//                             render: ["common.tpl", "common.util", "pbase.dom"]
//                         }
//                     }],
//                     aspect: [{
//                         id: "toolbar.main",
//                         pointCut: ["layout.main.render, , init", "communicate.handler.connected, , enableSendBtn", "communicate.handler.error, , disableSendBtn", "communicate.handler.autoendtalk, , disableSendBtn"]
//                     }]
//                 }
//             }),
//         define("embed/webimlight/entry", ["require"],
//             function(require) {
//                 var exports = {};
//                 return exports.init = function() {},
//                     exports.connect = function() {},
//                     exports.show = function() {},
//                     exports
//             }),
//         define("embed/webimlight/config", ["require", "./statusbar/config", "./robot/config", "./messagecontainer/config", "../data/bullConfig", "./layout/config", "./editor/config", "./communicate/config", "../embedChat/config", "./toolbar/config", "./entry", "./commonConfig"],
//             function(require) {
//                 return {
//                     package: "webimlight",
//                     importConfig: [require("./statusbar/config"), require("./robot/config"), require("./messagecontainer/config"), require("../data/bullConfig"), require("./layout/config"), require("./editor/config"), require("./communicate/config"), require("../embedChat/config"), require("./toolbar/config")],
//                     resource: {
//                         entry: require("./entry"),
//                         commonConfig: require("./commonConfig")
//                     }
//                 }
//             }),
//         define("embed/webimlight/main", ["require", "bull", "./config", "./commonConfig"],
//             function(require) {
//                 var exports = {},
//                     e = require("bull"),
//                     t = require("./config"),
//                     n = 0;
//                 return exports.init = function() {
//                     if (0 === n) {
//                         n = 1,
//                             e.init(t);
//                         var i = e.get("data.config"),
//                             o = i.getServer("siteObj"),
//                             a = o.webimConfig;
//                         require("./commonConfig").init(o.webRoot);
//                         var r = "";
//                         r = "embed/css/pc/webimlight/skin-" + a.skinIndex + ".css";
//                         var s = (false || document.getElementById("newBridge")).require;
//                         s(["cl!" + r],
//                             function() {
//                                 n = 2;
//                                 var t = e.get("webimlight.entry");
//                                 t.init(),
//                                     t.connect()
//                             })
//                     } else if (1 === n) return;
//                     else if (2 === n) return void e.get("webimlight.entry").show();
//                     else if (3 === n) n = 2,
//                         e.get("webimlight.entry").connect(),
//                         e.get("webimlight.entry").show()
//                 },
//                     exports.finish = function() {
//                         n = 3
//                     },
//                     exports
//             });
//     } ();