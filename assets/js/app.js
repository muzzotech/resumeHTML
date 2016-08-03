!function e(t, n, i) {
    function o(s, a) {
        if (!n[s]) {
            if (!t[s]) {
                var l = "function" == typeof require && require;
                if (!a && l)
                    return l(s, !0);
                if (r)
                    return r(s, !0);
                var c = new Error("Cannot find module '" + s + "'");
                throw c.code = "MODULE_NOT_FOUND",
                c
            }
            var u = n[s] = {
                exports: {}
            };
            t[s][0].call(u.exports, function(e) {
                var n = t[s][1][e];
                return o(n ? n : e)
            }, u, u.exports, e, t, n, i)
        }
        return n[s].exports
    }
    for (var r = "function" == typeof require && require, s = 0; s < i.length; s++)
        o(i[s]);
    return o
}({
    1: [function(e, t, n) {
        var i = e("./lib/Modernizr")
          , o = e("./lib/ModernizrProto")
          , r = e("./lib/classes")
          , s = e("./lib/testRunner")
          , a = e("./lib/setClasses");
        s(),
        a(r),
        delete o.addTest,
        delete o.addAsyncTest;
        for (var l = 0; l < i._q.length; l++)
            i._q[l]();
        t.exports = i
    }
    , {
        "./lib/Modernizr": 2,
        "./lib/ModernizrProto": 3,
        "./lib/classes": 4,
        "./lib/setClasses": 11,
        "./lib/testRunner": 13
    }],
    2: [function(e, t, n) {
        var i = e("./ModernizrProto")
          , o = function() {}
        ;
        o.prototype = i,
        o = new o,
        t.exports = o
    }
    , {
        "./ModernizrProto": 3
    }],
    3: [function(e, t, n) {
        var i = e("./tests")
          , o = {
            _version: "v3.0.0pre",
            _config: {
                classPrefix: "",
                enableClasses: !0
            },
            _q: [],
            on: function(e, t) {
                setTimeout(function() {
                    t(this[e])
                }, 0)
            },
            addTest: function(e, t, n) {
                i.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                i.push({
                    name: null ,
                    fn: e
                })
            }
        };
        t.exports = o
    }
    , {
        "./tests": 14
    }],
    4: [function(e, t, n) {
        var i = [];
        t.exports = i
    }
    , {}],
    5: [function(e, t, n) {
        var i = function() {
            return document.createElement.apply(document, arguments)
        }
        ;
        t.exports = i
    }
    , {}],
    6: [function(e, t, n) {
        var i = document.documentElement;
        t.exports = i
    }
    , {}],
    7: [function(e, t, n) {
        function i() {
            var e = document.body;
            return e || (e = o("body"),
            e.fake = !0),
            e
        }
        var o = e("./createElement");
        t.exports = i
    }
    , {
        "./createElement": 5
    }],
    8: [function(e, t, n) {
        function i(e, t, n, i) {
            var a, l, c, u, f = "modernizr", d = r("div"), h = s();
            if (parseInt(n, 10))
                for (; n--; )
                    c = r("div"),
                    c.id = i ? i[n] : f + (n + 1),
                    d.appendChild(c);
            return a = ["&#173;", '<style id="s', f, '">', e, "</style>"].join(""),
            d.id = f,
            (h.fake ? h : d).innerHTML += a,
            h.appendChild(d),
            h.fake && (h.style.background = "",
            h.style.overflow = "hidden",
            u = o.style.overflow,
            o.style.overflow = "hidden",
            o.appendChild(h)),
            l = t(d, e),
            h.fake ? (h.parentNode.removeChild(h),
            o.style.overflow = u,
            o.offsetHeight) : d.parentNode.removeChild(d),
            !!l
        }
        var o = (e("./ModernizrProto"),
        e("./docElement"))
          , r = e("./createElement")
          , s = e("./getBody");
        t.exports = i
    }
    , {
        "./ModernizrProto": 3,
        "./createElement": 5,
        "./docElement": 6,
        "./getBody": 7
    }],
    9: [function(e, t, n) {
        function i(e, t) {
            return typeof e === t
        }
        t.exports = i
    }
    , {}],
    10: [function(e, t, n) {
        var i = e("./ModernizrProto")
          , o = e("./testMediaQuery")
          , r = i.mq = o;
        t.exports = r
    }
    , {
        "./ModernizrProto": 3,
        "./testMediaQuery": 12
    }],
    11: [function(e, t, n) {
        function i(e) {
            var t = r.className
              , n = o._config.classPrefix || ""
              , i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(i, "$1" + n + "js$2"),
            o._config.enableClasses && (t += " " + n + e.join(" " + n),
            r.className = t)
        }
        var o = e("./Modernizr")
          , r = e("./docElement");
        t.exports = i
    }
    , {
        "./Modernizr": 2,
        "./docElement": 6
    }],
    12: [function(e, t, n) {
        var i = e("./injectElementWithStyles")
          , o = function() {
            var e = window.matchMedia || window.msMatchMedia;
            return e ? function(t) {
                var n = e(t);
                return n && n.matches || !1
            }
            : function(e) {
                var t = !1;
                return i("@media " + e + " { #modernizr { position: absolute; } }", function(e) {
                    t = "absolute" == (window.getComputedStyle ? window.getComputedStyle(e, null ) : e.currentStyle).position
                }),
                t
            }
        }();
        t.exports = o
    }
    , {
        "./injectElementWithStyles": 8
    }],
    13: [function(e, t, n) {
        function i() {
            var e, t, n, i, l, c, u;
            for (var f in o) {
                if (e = [],
                t = o[f],
                t.name && (e.push(t.name.toLowerCase()),
                t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++)
                        e.push(t.options.aliases[n].toLowerCase());
                for (i = a(t.fn, "function") ? t.fn() : t.fn,
                l = 0; l < e.length; l++)
                    c = e[l],
                    u = c.split("."),
                    1 === u.length ? r[u[0]] = i : 2 === u.length && (r[u[0]][u[1]] = i),
                    s.push((i ? "" : "no-") + u.join("-"))
            }
        }
        var o = e("./tests")
          , r = e("./Modernizr")
          , s = e("./classes")
          , a = e("./is");
        t.exports = i
    }
    , {
        "./Modernizr": 2,
        "./classes": 4,
        "./is": 9,
        "./tests": 14
    }],
    14: [function(e, t, n) {
        var i = [];
        t.exports = i
    }
    , {}],
    15: [function(e, t, n) {
        /*!
 * ScrollMagic v2.0.5 (2015-04-29)
 * The javascript library for magical scroll interactions.
 * (c) 2015 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.5
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic main library.
 */
        !function(e, i) {
            "function" == typeof define && define.amd ? define(i) : "object" == typeof n ? t.exports = i() : e.ScrollMagic = i()
        }(this, function() {
            "use strict";
            var e = function() {
                o.log(2, "(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")
            }
            ;
            e.version = "2.0.5",
            window.addEventListener("mousewheel", function() {});
            var t = "data-scrollmagic-pin-spacer";
            e.Controller = function(i) {
                var r, s, a = "ScrollMagic.Controller", l = "FORWARD", c = "REVERSE", u = "PAUSED", f = n.defaults, d = this, h = o.extend({}, f, i), p = [], g = !1, v = 0, m = u, w = !0, y = 0, b = !0, S = function() {
                    for (var t in h)
                        f.hasOwnProperty(t) || (O(2, 'WARNING: Unknown option "' + t + '"'),
                        delete h[t]);
                    if (h.container = o.get.elements(h.container)[0],
                    !h.container)
                        throw O(1, "ERROR creating object " + a + ": No valid scroll container supplied"),
                        a + " init failed.";
                    w = h.container === window || h.container === document.body || !document.body.contains(h.container),
                    w && (h.container = window),
                    y = A(),
                    h.container.addEventListener("resize", C),
                    h.container.addEventListener("scroll", C),
                    h.refreshInterval = parseInt(h.refreshInterval) || f.refreshInterval,
                    E(),
                    O(3, "added new " + a + " controller (v" + e.version + ")")
                }
                , E = function() {
                    h.refreshInterval > 0 && (s = window.setTimeout(k, h.refreshInterval))
                }
                , x = function() {
                    return h.vertical ? o.get.scrollTop(h.container) : o.get.scrollLeft(h.container)
                }
                , A = function() {
                    return h.vertical ? o.get.height(h.container) : o.get.width(h.container)
                }
                , z = this._setScrollPos = function(e) {
                    h.vertical ? w ? window.scrollTo(o.get.scrollLeft(), e) : h.container.scrollTop = e : w ? window.scrollTo(e, o.get.scrollTop()) : h.container.scrollLeft = e
                }
                , R = function() {
                    if (b && g) {
                        var e = o.type.Array(g) ? g : p.slice(0);
                        g = !1;
                        var t = v;
                        v = d.scrollPos();
                        var n = v - t;
                        0 !== n && (m = n > 0 ? l : c),
                        m === c && e.reverse(),
                        e.forEach(function(t, n) {
                            O(3, "updating Scene " + (n + 1) + "/" + e.length + " (" + p.length + " total)"),
                            t.update(!0)
                        }),
                        0 === e.length && h.loglevel >= 3 && O(3, "updating 0 Scenes (nothing added to controller)")
                    }
                }
                , T = function() {
                    r = o.rAF(R)
                }
                , C = function(e) {
                    O(3, "event fired causing an update:", e.type),
                    "resize" == e.type && (y = A(),
                    m = u),
                    g !== !0 && (g = !0,
                    T())
                }
                , k = function() {
                    if (!w && y != A()) {
                        var e;
                        try {
                            e = new Event("resize",{
                                bubbles: !1,
                                cancelable: !1
                            })
                        } catch (t) {
                            e = document.createEvent("Event"),
                            e.initEvent("resize", !1, !1)
                        }
                        h.container.dispatchEvent(e)
                    }
                    p.forEach(function(e, t) {
                        e.refresh()
                    }),
                    E()
                }
                , O = this._log = function(e, t) {
                    h.loglevel >= e && (Array.prototype.splice.call(arguments, 1, 0, "(" + a + ") ->"),
                    o.log.apply(window, arguments))
                }
                ;
                this._options = h;
                var $ = function(e) {
                    if (e.length <= 1)
                        return e;
                    var t = e.slice(0);
                    return t.sort(function(e, t) {
                        return e.scrollOffset() > t.scrollOffset() ? 1 : -1
                    }),
                    t
                }
                ;
                return this.addScene = function(t) {
                    if (o.type.Array(t))
                        t.forEach(function(e, t) {
                            d.addScene(e)
                        });
                    else if (t instanceof e.Scene) {
                        if (t.controller() !== d)
                            t.addTo(d);
                        else if (p.indexOf(t) < 0) {
                            p.push(t),
                            p = $(p),
                            t.on("shift.controller_sort", function() {
                                p = $(p)
                            });
                            for (var n in h.globalSceneOptions)
                                t[n] && t[n].call(t, h.globalSceneOptions[n]);
                            O(3, "adding Scene (now " + p.length + " total)")
                        }
                    } else
                        O(1, "ERROR: invalid argument supplied for '.addScene()'");
                    return d
                }
                ,
                this.removeScene = function(e) {
                    if (o.type.Array(e))
                        e.forEach(function(e, t) {
                            d.removeScene(e)
                        });
                    else {
                        var t = p.indexOf(e);
                        t > -1 && (e.off("shift.controller_sort"),
                        p.splice(t, 1),
                        O(3, "removing Scene (now " + p.length + " left)"),
                        e.remove())
                    }
                    return d
                }
                ,
                this.updateScene = function(t, n) {
                    return o.type.Array(t) ? t.forEach(function(e, t) {
                        d.updateScene(e, n)
                    }) : n ? t.update(!0) : g !== !0 && t instanceof e.Scene && (g = g || [],
                    -1 == g.indexOf(t) && g.push(t),
                    g = $(g),
                    T()),
                    d
                }
                ,
                this.update = function(e) {
                    return C({
                        type: "resize"
                    }),
                    e && R(),
                    d
                }
                ,
                this.scrollTo = function(n, i) {
                    if (o.type.Number(n))
                        z.call(h.container, n, i);
                    else if (n instanceof e.Scene)
                        n.controller() === d ? d.scrollTo(n.scrollOffset(), i) : O(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", n);
                    else if (o.type.Function(n))
                        z = n;
                    else {
                        var r = o.get.elements(n)[0];
                        if (r) {
                            for (; r.parentNode.hasAttribute(t); )
                                r = r.parentNode;
                            var s = h.vertical ? "top" : "left"
                              , a = o.get.offset(h.container)
                              , l = o.get.offset(r);
                            w || (a[s] -= d.scrollPos()),
                            d.scrollTo(l[s] - a[s], i)
                        } else
                            O(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", n)
                    }
                    return d
                }
                ,
                this.scrollPos = function(e) {
                    return arguments.length ? (o.type.Function(e) ? x = e : O(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."),
                    d) : x.call(d)
                }
                ,
                this.info = function(e) {
                    var t = {
                        size: y,
                        vertical: h.vertical,
                        scrollPos: v,
                        scrollDirection: m,
                        container: h.container,
                        isDocument: w
                    };
                    return arguments.length ? void 0 !== t[e] ? t[e] : void O(1, 'ERROR: option "' + e + '" is not available') : t
                }
                ,
                this.loglevel = function(e) {
                    return arguments.length ? (h.loglevel != e && (h.loglevel = e),
                    d) : h.loglevel
                }
                ,
                this.enabled = function(e) {
                    return arguments.length ? (b != e && (b = !!e,
                    d.updateScene(p, !0)),
                    d) : b
                }
                ,
                this.destroy = function(e) {
                    window.clearTimeout(s);
                    for (var t = p.length; t--; )
                        p[t].destroy(e);
                    return h.container.removeEventListener("resize", C),
                    h.container.removeEventListener("scroll", C),
                    o.cAF(r),
                    O(3, "destroyed " + a + " (reset: " + (e ? "true" : "false") + ")"),
                    null
                }
                ,
                S(),
                d
            }
            ;
            var n = {
                defaults: {
                    container: window,
                    vertical: !0,
                    globalSceneOptions: {},
                    loglevel: 2,
                    refreshInterval: 100
                }
            };
            e.Controller.addOption = function(e, t) {
                n.defaults[e] = t
            }
            ,
            e.Controller.extend = function(t) {
                var n = this;
                e.Controller = function() {
                    return n.apply(this, arguments),
                    this.$super = o.extend({}, this),
                    t.apply(this, arguments) || this
                }
                ,
                o.extend(e.Controller, n),
                e.Controller.prototype = n.prototype,
                e.Controller.prototype.constructor = e.Controller
            }
            ,
            e.Scene = function(n) {
                var r, s, a = "ScrollMagic.Scene", l = "BEFORE", c = "DURING", u = "AFTER", f = i.defaults, d = this, h = o.extend({}, f, n), p = l, g = 0, v = {
                    start: 0,
                    end: 0
                }, m = 0, w = !0, y = function() {
                    for (var e in h)
                        f.hasOwnProperty(e) || (S(2, 'WARNING: Unknown option "' + e + '"'),
                        delete h[e]);
                    for (var t in f)
                        k(t);
                    T()
                }
                , b = {};
                this.on = function(e, t) {
                    return o.type.Function(t) ? (e = e.trim().split(" "),
                    e.forEach(function(e) {
                        var n = e.split(".")
                          , i = n[0]
                          , o = n[1];
                        "*" != i && (b[i] || (b[i] = []),
                        b[i].push({
                            namespace: o || "",
                            callback: t
                        }))
                    })) : S(1, "ERROR when calling '.on()': Supplied callback for '" + e + "' is not a valid function!"),
                    d
                }
                ,
                this.off = function(e, t) {
                    return e ? (e = e.trim().split(" "),
                    e.forEach(function(e, n) {
                        var i = e.split(".")
                          , o = i[0]
                          , r = i[1] || ""
                          , s = "*" === o ? Object.keys(b) : [o];
                        s.forEach(function(e) {
                            for (var n = b[e] || [], i = n.length; i--; ) {
                                var o = n[i];
                                !o || r !== o.namespace && "*" !== r || t && t != o.callback || n.splice(i, 1)
                            }
                            n.length || delete b[e]
                        })
                    }),
                    d) : (S(1, "ERROR: Invalid event name supplied."),
                    d)
                }
                ,
                this.trigger = function(t, n) {
                    if (t) {
                        var i = t.trim().split(".")
                          , o = i[0]
                          , r = i[1]
                          , s = b[o];
                        S(3, "event fired:", o, n ? "->" : "", n || ""),
                        s && s.forEach(function(t, i) {
                            r && r !== t.namespace || t.callback.call(d, new e.Event(o,t.namespace,d,n))
                        })
                    } else
                        S(1, "ERROR: Invalid event name supplied.");
                    return d
                }
                ,
                d.on("change.internal", function(e) {
                    "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? A() : "reverse" === e.what && d.update())
                }).on("shift.internal", function(e) {
                    E(),
                    d.update()
                });
                var S = this._log = function(e, t) {
                    h.loglevel >= e && (Array.prototype.splice.call(arguments, 1, 0, "(" + a + ") ->"),
                    o.log.apply(window, arguments))
                }
                ;
                this.addTo = function(t) {
                    return t instanceof e.Controller ? s != t && (s && s.removeScene(d),
                    s = t,
                    T(),
                    x(!0),
                    A(!0),
                    E(),
                    s.info("container").addEventListener("resize", z),
                    t.addScene(d),
                    d.trigger("add", {
                        controller: s
                    }),
                    S(3, "added " + a + " to controller"),
                    d.update()) : S(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"),
                    d
                }
                ,
                this.enabled = function(e) {
                    return arguments.length ? (w != e && (w = !!e,
                    d.update(!0)),
                    d) : w
                }
                ,
                this.remove = function() {
                    if (s) {
                        s.info("container").removeEventListener("resize", z);
                        var e = s;
                        s = void 0,
                        e.removeScene(d),
                        d.trigger("remove"),
                        S(3, "removed " + a + " from controller")
                    }
                    return d
                }
                ,
                this.destroy = function(e) {
                    return d.trigger("destroy", {
                        reset: e
                    }),
                    d.remove(),
                    d.off("*.*"),
                    S(3, "destroyed " + a + " (reset: " + (e ? "true" : "false") + ")"),
                    null
                }
                ,
                this.update = function(e) {
                    if (s)
                        if (e)
                            if (s.enabled() && w) {
                                var t, n = s.info("scrollPos");
                                t = h.duration > 0 ? (n - v.start) / (v.end - v.start) : n >= v.start ? 1 : 0,
                                d.trigger("update", {
                                    startPos: v.start,
                                    endPos: v.end,
                                    scrollPos: n
                                }),
                                d.progress(t)
                            } else
                                O && p === c && P(!0);
                        else
                            s.updateScene(d, !1);
                    return d
                }
                ,
                this.refresh = function() {
                    return x(),
                    A(),
                    d
                }
                ,
                this.progress = function(e) {
                    if (arguments.length) {
                        var t = !1
                          , n = p
                          , i = s ? s.info("scrollDirection") : "PAUSED"
                          , o = h.reverse || e >= g;
                        if (0 === h.duration ? (t = g != e,
                        g = 1 > e && o ? 0 : 1,
                        p = 0 === g ? l : c) : 0 > e && p !== l && o ? (g = 0,
                        p = l,
                        t = !0) : e >= 0 && 1 > e && o ? (g = e,
                        p = c,
                        t = !0) : e >= 1 && p !== u ? (g = 1,
                        p = u,
                        t = !0) : p !== c || o || P(),
                        t) {
                            var r = {
                                progress: g,
                                state: p,
                                scrollDirection: i
                            }
                              , a = p != n
                              , f = function(e) {
                                d.trigger(e, r)
                            }
                            ;
                            a && n !== c && (f("enter"),
                            f(n === l ? "start" : "end")),
                            f("progress"),
                            a && p !== c && (f(p === l ? "start" : "end"),
                            f("leave"))
                        }
                        return d
                    }
                    return g
                }
                ;
                var E = function() {
                    v = {
                        start: m + h.offset
                    },
                    s && h.triggerElement && (v.start -= s.info("size") * h.triggerHook),
                    v.end = v.start + h.duration
                }
                  , x = function(e) {
                    if (r) {
                        var t = "duration";
                        C(t, r.call(d)) && !e && (d.trigger("change", {
                            what: t,
                            newval: h[t]
                        }),
                        d.trigger("shift", {
                            reason: t
                        }))
                    }
                }
                  , A = function(e) {
                    var n = 0
                      , i = h.triggerElement;
                    if (s && i) {
                        for (var r = s.info(), a = o.get.offset(r.container), l = r.vertical ? "top" : "left"; i.parentNode.hasAttribute(t); )
                            i = i.parentNode;
                        var c = o.get.offset(i);
                        r.isDocument || (a[l] -= s.scrollPos()),
                        n = c[l] - a[l]
                    }
                    var u = n != m;
                    m = n,
                    u && !e && d.trigger("shift", {
                        reason: "triggerElementPosition"
                    })
                }
                  , z = function(e) {
                    h.triggerHook > 0 && d.trigger("shift", {
                        reason: "containerResize"
                    })
                }
                  , R = o.extend(i.validate, {
                    duration: function(e) {
                        if (o.type.String(e) && e.match(/^(\.|\d)*\d+%$/)) {
                            var t = parseFloat(e) / 100;
                            e = function() {
                                return s ? s.info("size") * t : 0
                            }
                        }
                        if (o.type.Function(e)) {
                            r = e;
                            try {
                                e = parseFloat(r())
                            } catch (n) {
                                e = -1
                            }
                        }
                        if (e = parseFloat(e),
                        !o.type.Number(e) || 0 > e)
                            throw r ? (r = void 0,
                            ['Invalid return value of supplied function for option "duration":', e]) : ['Invalid value for option "duration":', e];
                        return e
                    }
                })
                  , T = function(e) {
                    e = arguments.length ? [e] : Object.keys(R),
                    e.forEach(function(e, t) {
                        var n;
                        if (R[e])
                            try {
                                n = R[e](h[e])
                            } catch (i) {
                                n = f[e];
                                var r = o.type.String(i) ? [i] : i;
                                o.type.Array(r) ? (r[0] = "ERROR: " + r[0],
                                r.unshift(1),
                                S.apply(this, r)) : S(1, "ERROR: Problem executing validation callback for option '" + e + "':", i.message)
                            } finally {
                                h[e] = n
                            }
                    })
                }
                  , C = function(e, t) {
                    var n = !1
                      , i = h[e];
                    return h[e] != t && (h[e] = t,
                    T(e),
                    n = i != h[e]),
                    n
                }
                  , k = function(e) {
                    d[e] || (d[e] = function(t) {
                        return arguments.length ? ("duration" === e && (r = void 0),
                        C(e, t) && (d.trigger("change", {
                            what: e,
                            newval: h[e]
                        }),
                        i.shifts.indexOf(e) > -1 && d.trigger("shift", {
                            reason: e
                        })),
                        d) : h[e]
                    }
                    )
                }
                ;
                this.controller = function() {
                    return s
                }
                ,
                this.state = function() {
                    return p
                }
                ,
                this.scrollOffset = function() {
                    return v.start
                }
                ,
                this.triggerPosition = function() {
                    var e = h.offset;
                    return s && (e += h.triggerElement ? m : s.info("size") * d.triggerHook()),
                    e
                }
                ;
                var O, $;
                d.on("shift.internal", function(e) {
                    var t = "duration" === e.reason;
                    (p === u && t || p === c && 0 === h.duration) && P(),
                    t && M()
                }).on("progress.internal", function(e) {
                    P()
                }).on("add.internal", function(e) {
                    M()
                }).on("destroy.internal", function(e) {
                    d.removePin(e.reset)
                });
                var P = function(e) {
                    if (O && s) {
                        var t = s.info()
                          , n = $.spacer.firstChild;
                        if (e || p !== c) {
                            var i = {
                                position: $.inFlow ? "relative" : "absolute",
                                top: 0,
                                left: 0
                            }
                              , r = o.css(n, "position") != i.position;
                            $.pushFollowers ? h.duration > 0 && (p === u && 0 === parseFloat(o.css($.spacer, "padding-top")) ? r = !0 : p === l && 0 === parseFloat(o.css($.spacer, "padding-bottom")) && (r = !0)) : i[t.vertical ? "top" : "left"] = h.duration * g,
                            o.css(n, i),
                            r && M()
                        } else {
                            "fixed" != o.css(n, "position") && (o.css(n, {
                                position: "fixed"
                            }),
                            M());
                            var a = o.get.offset($.spacer, !0)
                              , f = h.reverse || 0 === h.duration ? t.scrollPos - v.start : Math.round(g * h.duration * 10) / 10;
                            a[t.vertical ? "top" : "left"] += f,
                            o.css($.spacer.firstChild, {
                                top: a.top,
                                left: a.left
                            })
                        }
                    }
                }
                  , M = function() {
                    if (O && s && $.inFlow) {
                        var e = p === c
                          , t = s.info("vertical")
                          , n = $.spacer.firstChild
                          , i = o.isMarginCollapseType(o.css($.spacer, "display"))
                          , r = {};
                        $.relSize.width || $.relSize.autoFullWidth ? e ? o.css(O, {
                            width: o.get.width($.spacer)
                        }) : o.css(O, {
                            width: "100%"
                        }) : (r["min-width"] = o.get.width(t ? O : n, !0, !0),
                        r.width = e ? r["min-width"] : "auto"),
                        $.relSize.height ? e ? o.css(O, {
                            height: o.get.height($.spacer) - ($.pushFollowers ? h.duration : 0)
                        }) : o.css(O, {
                            height: "100%"
                        }) : (r["min-height"] = o.get.height(t ? n : O, !0, !i),
                        r.height = e ? r["min-height"] : "auto"),
                        $.pushFollowers && (r["padding" + (t ? "Top" : "Left")] = h.duration * g,
                        r["padding" + (t ? "Bottom" : "Right")] = h.duration * (1 - g)),
                        o.css($.spacer, r)
                    }
                }
                  , _ = function() {
                    s && O && p === c && !s.info("isDocument") && P()
                }
                  , I = function() {
                    s && O && p === c && (($.relSize.width || $.relSize.autoFullWidth) && o.get.width(window) != o.get.width($.spacer.parentNode) || $.relSize.height && o.get.height(window) != o.get.height($.spacer.parentNode)) && M()
                }
                  , F = function(e) {
                    s && O && p === c && !s.info("isDocument") && (e.preventDefault(),
                    s._setScrollPos(s.info("scrollPos") - ((e.wheelDelta || e[s.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail)))
                }
                ;
                this.setPin = function(e, n) {
                    var i = {
                        pushFollowers: !0,
                        spacerClass: "scrollmagic-pin-spacer"
                    };
                    if (n = o.extend({}, i, n),
                    e = o.get.elements(e)[0],
                    !e)
                        return S(1, "ERROR calling method 'setPin()': Invalid pin element supplied."),
                        d;
                    if ("fixed" === o.css(e, "position"))
                        return S(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."),
                        d;
                    if (O) {
                        if (O === e)
                            return d;
                        d.removePin()
                    }
                    O = e;
                    var r = O.parentNode.style.display
                      , s = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                    O.parentNode.style.display = "none";
                    var a = "absolute" != o.css(O, "position")
                      , l = o.css(O, s.concat(["display"]))
                      , c = o.css(O, ["width", "height"]);
                    O.parentNode.style.display = r,
                    !a && n.pushFollowers && (S(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."),
                    n.pushFollowers = !1),
                    window.setTimeout(function() {
                        O && 0 === h.duration && n.pushFollowers && S(2, "WARNING: pushFollowers =", !0, "has no effect, when scene duration is 0.")
                    }, 0);
                    var u = O.parentNode.insertBefore(document.createElement("div"), O)
                      , f = o.extend(l, {
                        position: a ? "relative" : "absolute",
                        boxSizing: "content-box",
                        mozBoxSizing: "content-box",
                        webkitBoxSizing: "content-box"
                    });
                    if (a || o.extend(f, o.css(O, ["width", "height"])),
                    o.css(u, f),
                    u.setAttribute(t, ""),
                    o.addClass(u, n.spacerClass),
                    $ = {
                        spacer: u,
                        relSize: {
                            width: "%" === c.width.slice(-1),
                            height: "%" === c.height.slice(-1),
                            autoFullWidth: "auto" === c.width && a && o.isMarginCollapseType(l.display)
                        },
                        pushFollowers: n.pushFollowers,
                        inFlow: a
                    },
                    !O.___origStyle) {
                        O.___origStyle = {};
                        var p = O.style
                          , g = s.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
                        g.forEach(function(e) {
                            O.___origStyle[e] = p[e] || ""
                        })
                    }
                    return $.relSize.width && o.css(u, {
                        width: c.width
                    }),
                    $.relSize.height && o.css(u, {
                        height: c.height
                    }),
                    u.appendChild(O),
                    o.css(O, {
                        position: a ? "relative" : "absolute",
                        margin: "auto",
                        top: "auto",
                        left: "auto",
                        bottom: "auto",
                        right: "auto"
                    }),
                    ($.relSize.width || $.relSize.autoFullWidth) && o.css(O, {
                        boxSizing: "border-box",
                        mozBoxSizing: "border-box",
                        webkitBoxSizing: "border-box"
                    }),
                    window.addEventListener("scroll", _),
                    window.addEventListener("resize", _),
                    window.addEventListener("resize", I),
                    O.addEventListener("mousewheel", F),
                    O.addEventListener("DOMMouseScroll", F),
                    S(3, "added pin"),
                    P(),
                    d
                }
                ,
                this.removePin = function(e) {
                    if (O) {
                        if (p === c && P(!0),
                        e || !s) {
                            var n = $.spacer.firstChild;
                            if (n.hasAttribute(t)) {
                                var i = $.spacer.style
                                  , r = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                                margins = {},
                                r.forEach(function(e) {
                                    margins[e] = i[e] || ""
                                }),
                                o.css(n, margins)
                            }
                            $.spacer.parentNode.insertBefore(n, $.spacer),
                            $.spacer.parentNode.removeChild($.spacer),
                            O.parentNode.hasAttribute(t) || (o.css(O, O.___origStyle),
                            delete O.___origStyle)
                        }
                        window.removeEventListener("scroll", _),
                        window.removeEventListener("resize", _),
                        window.removeEventListener("resize", I),
                        O.removeEventListener("mousewheel", F),
                        O.removeEventListener("DOMMouseScroll", F),
                        O = void 0,
                        S(3, "removed pin (reset: " + (e ? "true" : "false") + ")")
                    }
                    return d
                }
                ;
                var N, L = [];
                return d.on("destroy.internal", function(e) {
                    d.removeClassToggle(e.reset)
                }),
                this.setClassToggle = function(e, t) {
                    var n = o.get.elements(e);
                    return 0 !== n.length && o.type.String(t) ? (L.length > 0 && d.removeClassToggle(),
                    N = t,
                    L = n,
                    d.on("enter.internal_class leave.internal_class", function(e) {
                        var t = "enter" === e.type ? o.addClass : o.removeClass;
                        L.forEach(function(e, n) {
                            t(e, N)
                        })
                    }),
                    d) : (S(1, "ERROR calling method 'setClassToggle()': Invalid " + (0 === n.length ? "element" : "classes") + " supplied."),
                    d)
                }
                ,
                this.removeClassToggle = function(e) {
                    return e && L.forEach(function(e, t) {
                        o.removeClass(e, N)
                    }),
                    d.off("start.internal_class end.internal_class"),
                    N = void 0,
                    L = [],
                    d
                }
                ,
                y(),
                d
            }
            ;
            var i = {
                defaults: {
                    duration: 0,
                    offset: 0,
                    triggerElement: void 0,
                    triggerHook: .5,
                    reverse: !0,
                    loglevel: 2
                },
                validate: {
                    offset: function(e) {
                        if (e = parseFloat(e),
                        !o.type.Number(e))
                            throw ['Invalid value for option "offset":', e];
                        return e
                    },
                    triggerElement: function(e) {
                        if (e = e || void 0) {
                            var t = o.get.elements(e)[0];
                            if (!t)
                                throw ['Element defined in option "triggerElement" was not found:', e];
                            e = t
                        }
                        return e
                    },
                    triggerHook: function(e) {
                        var t = {
                            onCenter: .5,
                            onEnter: 1,
                            onLeave: 0
                        };
                        if (o.type.Number(e))
                            e = Math.max(0, Math.min(parseFloat(e), 1));
                        else {
                            if (!(e in t))
                                throw ['Invalid value for option "triggerHook": ', e];
                            e = t[e]
                        }
                        return e
                    },
                    reverse: function(e) {
                        return !!e
                    },
                    loglevel: function(e) {
                        if (e = parseInt(e),
                        !o.type.Number(e) || 0 > e || e > 3)
                            throw ['Invalid value for option "loglevel":', e];
                        return e
                    }
                },
                shifts: ["duration", "offset", "triggerHook"]
            };
            e.Scene.addOption = function(t, n, o, r) {
                t in i.defaults ? e._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + t + "', because it already exists.") : (i.defaults[t] = n,
                i.validate[t] = o,
                r && i.shifts.push(t))
            }
            ,
            e.Scene.extend = function(t) {
                var n = this;
                e.Scene = function() {
                    return n.apply(this, arguments),
                    this.$super = o.extend({}, this),
                    t.apply(this, arguments) || this
                }
                ,
                o.extend(e.Scene, n),
                e.Scene.prototype = n.prototype,
                e.Scene.prototype.constructor = e.Scene
            }
            ,
            e.Event = function(e, t, n, i) {
                i = i || {};
                for (var o in i)
                    this[o] = i[o];
                return this.type = e,
                this.target = this.currentTarget = n,
                this.namespace = t || "",
                this.timeStamp = this.timestamp = Date.now(),
                this
            }
            ;
            var o = e._util = function(e) {
                var t, n = {}, i = function(e) {
                    return parseFloat(e) || 0
                }
                , o = function(t) {
                    return t.currentStyle ? t.currentStyle : e.getComputedStyle(t)
                }
                , r = function(t, n, r, s) {
                    if (n = n === document ? e : n,
                    n === e)
                        s = !1;
                    else if (!p.DomElement(n))
                        return 0;
                    t = t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
                    var a = (r ? n["offset" + t] || n["outer" + t] : n["client" + t] || n["inner" + t]) || 0;
                    if (r && s) {
                        var l = o(n);
                        a += "Height" === t ? i(l.marginTop) + i(l.marginBottom) : i(l.marginLeft) + i(l.marginRight)
                    }
                    return a
                }
                , s = function(e) {
                    return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(e) {
                        return e[1].toUpperCase()
                    })
                }
                ;
                n.extend = function(e) {
                    for (e = e || {},
                    t = 1; t < arguments.length; t++)
                        if (arguments[t])
                            for (var n in arguments[t])
                                arguments[t].hasOwnProperty(n) && (e[n] = arguments[t][n]);
                    return e
                }
                ,
                n.isMarginCollapseType = function(e) {
                    return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e) > -1
                }
                ;
                var a = 0
                  , l = ["ms", "moz", "webkit", "o"]
                  , c = e.requestAnimationFrame
                  , u = e.cancelAnimationFrame;
                for (t = 0; !c && t < l.length; ++t)
                    c = e[l[t] + "RequestAnimationFrame"],
                    u = e[l[t] + "CancelAnimationFrame"] || e[l[t] + "CancelRequestAnimationFrame"];
                c || (c = function(t) {
                    var n = (new Date).getTime()
                      , i = Math.max(0, 16 - (n - a))
                      , o = e.setTimeout(function() {
                        t(n + i)
                    }, i);
                    return a = n + i,
                    o
                }
                ),
                u || (u = function(t) {
                    e.clearTimeout(t)
                }
                ),
                n.rAF = c.bind(e),
                n.cAF = u.bind(e);
                var f = ["error", "warn", "log"]
                  , d = e.console || {};
                for (d.log = d.log || function() {}
                ,
                t = 0; t < f.length; t++) {
                    var h = f[t];
                    d[h] || (d[h] = d.log)
                }
                n.log = function(e) {
                    (e > f.length || 0 >= e) && (e = f.length);
                    var t = new Date
                      , n = ("0" + t.getHours()).slice(-2) + ":" + ("0" + t.getMinutes()).slice(-2) + ":" + ("0" + t.getSeconds()).slice(-2) + ":" + ("00" + t.getMilliseconds()).slice(-3)
                      , i = f[e - 1]
                      , o = Array.prototype.splice.call(arguments, 1)
                      , r = Function.prototype.bind.call(d[i], d);
                    o.unshift(n),
                    r.apply(d, o)
                }
                ;
                var p = n.type = function(e) {
                    return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
                }
                ;
                p.String = function(e) {
                    return "string" === p(e)
                }
                ,
                p.Function = function(e) {
                    return "function" === p(e)
                }
                ,
                p.Array = function(e) {
                    return Array.isArray(e)
                }
                ,
                p.Number = function(e) {
                    return !p.Array(e) && e - parseFloat(e) + 1 >= 0
                }
                ,
                p.DomElement = function(e) {
                    return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
                }
                ;
                var g = n.get = {};
                return g.elements = function(t) {
                    var n = [];
                    if (p.String(t))
                        try {
                            t = document.querySelectorAll(t)
                        } catch (i) {
                            return n
                        }
                    if ("nodelist" === p(t) || p.Array(t))
                        for (var o = 0, r = n.length = t.length; r > o; o++) {
                            var s = t[o];
                            n[o] = p.DomElement(s) ? s : g.elements(s)
                        }
                    else
                        (p.DomElement(t) || t === document || t === e) && (n = [t]);
                    return n
                }
                ,
                g.scrollTop = function(t) {
                    return t && "number" == typeof t.scrollTop ? t.scrollTop : e.pageYOffset || 0
                }
                ,
                g.scrollLeft = function(t) {
                    return t && "number" == typeof t.scrollLeft ? t.scrollLeft : e.pageXOffset || 0
                }
                ,
                g.width = function(e, t, n) {
                    return r("width", e, t, n)
                }
                ,
                g.height = function(e, t, n) {
                    return r("height", e, t, n)
                }
                ,
                g.offset = function(e, t) {
                    var n = {
                        top: 0,
                        left: 0
                    };
                    if (e && e.getBoundingClientRect) {
                        var i = e.getBoundingClientRect();
                        n.top = i.top,
                        n.left = i.left,
                        t || (n.top += g.scrollTop(),
                        n.left += g.scrollLeft())
                    }
                    return n
                }
                ,
                n.addClass = function(e, t) {
                    t && (e.classList ? e.classList.add(t) : e.className += " " + t)
                }
                ,
                n.removeClass = function(e, t) {
                    t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)","gi"), " "))
                }
                ,
                n.css = function(e, t) {
                    if (p.String(t))
                        return o(e)[s(t)];
                    if (p.Array(t)) {
                        var n = {}
                          , i = o(e);
                        return t.forEach(function(e, t) {
                            n[e] = i[s(e)]
                        }),
                        n
                    }
                    for (var r in t) {
                        var a = t[r];
                        a == parseFloat(a) && (a += "px"),
                        e.style[s(r)] = a
                    }
                }
                ,
                n
            }(window || {});
            return e.Scene.prototype.addIndicators = function() {
                return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),
                this
            }
            ,
            e.Scene.prototype.removeIndicators = function() {
                return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),
                this
            }
            ,
            e.Scene.prototype.setTween = function() {
                return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),
                this
            }
            ,
            e.Scene.prototype.removeTween = function() {
                return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),
                this
            }
            ,
            e.Scene.prototype.setVelocity = function() {
                return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),
                this
            }
            ,
            e.Scene.prototype.removeVelocity = function() {
                return e._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),
                this
            }
            ,
            e
        })
    }
    , {}],
    16: [function(e, t, n) {
        e("browsernizr/lib/mq"),
        e("browsernizr");
        {
            var i = e("browsernizr")
              , o = e("scrollmagic");
            e("./plugins/jquery.backstretch"),
            e("./plugins/jquery.lazyload")
        }
        !function(e) {
            "use strict";
            var t = {
                $htmlBody: e("html, body"),
                $body: e("body"),
                $nav: e("#nav"),
                $navButton: e("#nav-button"),
                $go: e("#go"),
                $sections: e("#sections"),
                $section: e(".section"),
                $stat: e(".stat"),
                $timelineEvent: e(".timeline-event"),
                $lazy: e("img.lazy")
            }
              , n = {
                init: function() {
                    n.backstretch(),
                    n.jump(),
                    n.navScroll(),
                    n.navToggle(),
                    n.timeline(),
                    n.lazyImages()
                },
                backstretch: function() {
                    e("#section-cover").backstretch("assets/images/tide.jpg"),
                    e("#section-quotes").backstretch("assets/images/SMP_Sunset.jpg")
                },
                jump: function() {
                    var e = t.$go;
                    e.off("click"),
                    e.on("click", function() {
                        var e = t.$section.eq(1).offset().top;
                        return i.mq("only screen and (min-width: 768px)") && (e = t.$section.eq(1).offset().top - t.$nav.height()),
                        t.$htmlBody.animate({
                            scrollTop: e
                        }, 500),
                        !1
                    })
                },
                navScroll: function() {
                    var n = t.$nav.find("a");
                    n.off("click"),
                    n.on("click", function() {
                        var n = e(e.attr(this, "href")).offset().top;
                        return i.mq("only screen and (min-width: 768px)") && (n = e(e.attr(this, "href")).offset().top - (t.$nav.height() - 1)),
                        t.$htmlBody.animate({
                            scrollTop: n
                        }, 1e3, "linear", function() {
                            t.$nav.removeClass("nav-open")
                        }),
                        !1
                    })
                },
                navToggle: function() {
                    t.$navButton.on("click", function() {
                        return t.$nav.toggleClass("nav-open"),
                        !1
                    })
                },
                navHighlight: function() {},
                timeline: function() {
                    var n = new o.Controller;
                    t.$timelineEvent.each(function() {
                        new o.Scene({
                            triggerElement: e(this)[0],
                            offset: -150
                        }).setClassToggle(e(this)[0], "show").addTo(n)
                    })
                },
                lazyImages: function() {
                    t.$lazy.lazyload({
                        threshold: 200,
                        effect: "fadeIn"
                    })
                }
            };
            n.init(),
            e(window).on("resize load", function() {
                n.navHighlight(),
                n.navScroll(),
                n.jump()
            })
        }(jQuery)
    }
    , {
        "./plugins/jquery.backstretch": 17,
        "./plugins/jquery.lazyload": 18,
        browsernizr: 1,
        "browsernizr/lib/mq": 10,
        scrollmagic: 15
    }],
    17: [function(e, t, n) {
        /*! Backstretch - v2.0.4 - 2013-06-19
* http://srobbin.com/jquery-plugins/backstretch/
* Copyright (c) 2013 Scott Robbin; Licensed MIT */
        !function(e, t, n) {
            e.fn.backstretch = function(i, o) {
                return (i === n || 0 === i.length) && e.error("No images were supplied for Backstretch"),
                0 === e(t).scrollTop() && t.scrollTo(0, 0),
                this.each(function() {
                    var t = e(this)
                      , n = t.data("backstretch");
                    if (n) {
                        if ("string" == typeof i && "function" == typeof n[i])
                            return void n[i](o);
                        o = e.extend(n.options, o),
                        n.destroy(!0)
                    }
                    n = new r(this,i,o),
                    t.data("backstretch", n)
                })
            }
            ,
            e.backstretch = function(t, n) {
                return e("body").backstretch(t, n).data("backstretch")
            }
            ,
            e.expr[":"].backstretch = function(t) {
                return e(t).data("backstretch") !== n
            }
            ,
            e.fn.backstretch.defaults = {
                centeredX: !0,
                centeredY: !0,
                duration: 5e3,
                fade: 0
            };
            var i = {
                left: 0,
                top: 0,
                overflow: "hidden",
                margin: 0,
                padding: 0,
                height: "100%",
                width: "100%",
                zIndex: -999999
            }
              , o = {
                position: "absolute",
                display: "none",
                margin: 0,
                padding: 0,
                border: "none",
                width: "auto",
                height: "auto",
                maxHeight: "none",
                maxWidth: "none",
                zIndex: -999999
            }
              , r = function(n, o, r) {
                this.options = e.extend({}, e.fn.backstretch.defaults, r || {}),
                this.images = e.isArray(o) ? o : [o],
                e.each(this.images, function() {
                    e("<img />")[0].src = this
                }),
                this.isBody = n === document.body,
                this.$container = e(n),
                this.$root = this.isBody ? e(s ? t : document) : this.$container,
                n = this.$container.children(".backstretch").first(),
                this.$wrap = n.length ? n : e('<div class="backstretch"></div>').css(i).appendTo(this.$container),
                this.isBody || (n = this.$container.css("position"),
                o = this.$container.css("zIndex"),
                this.$container.css({
                    position: "static" === n ? "relative" : n,
                    zIndex: "auto" === o ? 0 : o,
                    background: "none"
                }),
                this.$wrap.css({
                    zIndex: -999998
                })),
                this.$wrap.css({
                    position: this.isBody && s ? "fixed" : "absolute"
                }),
                this.index = 0,
                this.show(this.index),
                e(t).on("resize.backstretch", e.proxy(this.resize, this)).on("orientationchange.backstretch", e.proxy(function() {
                    this.isBody && 0 === t.pageYOffset && (t.scrollTo(0, 1),
                    this.resize())
                }, this))
            }
            ;
            r.prototype = {
                resize: function() {
                    try {
                        var e, n = {
                            left: 0,
                            top: 0
                        }, i = this.isBody ? this.$root.width() : this.$root.innerWidth(), o = i, r = this.isBody ? t.innerHeight ? t.innerHeight : this.$root.height() : this.$root.innerHeight(), s = o / this.$img.data("ratio");
                        s >= r ? (e = (s - r) / 2,
                        this.options.centeredY && (n.top = "-" + e + "px")) : (s = r,
                        o = s * this.$img.data("ratio"),
                        e = (o - i) / 2,
                        this.options.centeredX && (n.left = "-" + e + "px")),
                        this.$wrap.css({
                            width: i,
                            height: r
                        }).find("img:not(.deleteable)").css({
                            width: o,
                            height: s
                        }).css(n)
                    } catch (a) {}
                    return this
                },
                show: function(t) {
                    if (!(Math.abs(t) > this.images.length - 1)) {
                        var n = this
                          , i = n.$wrap.find("img").addClass("deleteable")
                          , r = {
                            relatedTarget: n.$container[0]
                        };
                        return n.$container.trigger(e.Event("backstretch.before", r), [n, t]),
                        this.index = t,
                        clearInterval(n.interval),
                        n.$img = e("<img />").css(o).bind("load", function(o) {
                            var s = this.width || e(o.target).width();
                            o = this.height || e(o.target).height(),
                            e(this).data("ratio", s / o),
                            e(this).fadeIn(n.options.speed || n.options.fade, function() {
                                i.remove(),
                                n.paused || n.cycle(),
                                e(["after", "show"]).each(function() {
                                    n.$container.trigger(e.Event("backstretch." + this, r), [n, t])
                                })
                            }),
                            n.resize()
                        }).appendTo(n.$wrap),
                        n.$img.attr("src", n.images[t]),
                        n
                    }
                },
                next: function() {
                    return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0)
                },
                prev: function() {
                    return this.show(0 === this.index ? this.images.length - 1 : this.index - 1)
                },
                pause: function() {
                    return this.paused = !0,
                    this
                },
                resume: function() {
                    return this.paused = !1,
                    this.next(),
                    this
                },
                cycle: function() {
                    return 1 < this.images.length && (clearInterval(this.interval),
                    this.interval = setInterval(e.proxy(function() {
                        this.paused || this.next()
                    }, this), this.options.duration)),
                    this
                },
                destroy: function(n) {
                    e(t).off("resize.backstretch orientationchange.backstretch"),
                    clearInterval(this.interval),
                    n || this.$wrap.remove(),
                    this.$container.removeData("backstretch")
                }
            };
            var s, a = navigator.userAgent, l = navigator.platform, c = a.match(/AppleWebKit\/([0-9]+)/), c = !!c && c[1], u = a.match(/Fennec\/([0-9]+)/), u = !!u && u[1], f = a.match(/Opera Mobi\/([0-9]+)/), d = !!f && f[1], h = a.match(/MSIE ([0-9]+)/), h = !!h && h[1];
            s = !((-1 < l.indexOf("iPhone") || -1 < l.indexOf("iPad") || -1 < l.indexOf("iPod")) && c && 534 > c || t.operamini && "[object OperaMini]" === {}.toString.call(t.operamini) || f && 7458 > d || -1 < a.indexOf("Android") && c && 533 > c || u && 6 > u || "palmGetResource"in t && c && 534 > c || -1 < a.indexOf("MeeGo") && -1 < a.indexOf("NokiaBrowser/8.5.0") || h && 6 >= h)
        }(jQuery, window)
    }
    , {}],
    18: [function(e, t, n) {
        /*!
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2015 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.9.5
 *
 */
        !function(e, t, n, i) {
            var o = e(t);
            e.fn.lazyload = function(r) {
                function s() {
                    var t = 0;
                    l.each(function() {
                        var n = e(this);
                        if (!c.skip_invisible || n.is(":visible"))
                            if (e.abovethetop(this, c) || e.leftofbegin(this, c))
                                ;
                            else if (e.belowthefold(this, c) || e.rightoffold(this, c)) {
                                if (++t > c.failure_limit)
                                    return !1
                            } else
                                n.trigger("appear"),
                                t = 0
                    })
                }
                var a, l = this, c = {
                    threshold: 0,
                    failure_limit: 0,
                    event: "scroll",
                    effect: "show",
                    container: t,
                    data_attribute: "original",
                    skip_invisible: !1,
                    appear: null ,
                    load: null ,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                };
                return r && (i !== r.failurelimit && (r.failure_limit = r.failurelimit,
                delete r.failurelimit),
                i !== r.effectspeed && (r.effect_speed = r.effectspeed,
                delete r.effectspeed),
                e.extend(c, r)),
                a = c.container === i || c.container === t ? o : e(c.container),
                0 === c.event.indexOf("scroll") && a.bind(c.event, function() {
                    return s()
                }),
                this.each(function() {
                    var t = this
                      , n = e(t);
                    t.loaded = !1,
                    (n.attr("src") === i || n.attr("src") === !1) && n.is("img") && n.attr("src", c.placeholder),
                    n.one("appear", function() {
                        if (!this.loaded) {
                            if (c.appear) {
                                var i = l.length;
                                c.appear.call(t, i, c)
                            }
                            e("<img />").bind("load", function() {
                                var i = n.attr("data-" + c.data_attribute);
                                n.hide(),
                                n.is("img") ? n.attr("src", i) : n.css("background-image", "url('" + i + "')"),
                                n[c.effect](c.effect_speed),
                                t.loaded = !0;
                                var o = e.grep(l, function(e) {
                                    return !e.loaded
                                });
                                if (l = e(o),
                                c.load) {
                                    var r = l.length;
                                    c.load.call(t, r, c)
                                }
                            }).attr("src", n.attr("data-" + c.data_attribute))
                        }
                    }),
                    0 !== c.event.indexOf("scroll") && n.bind(c.event, function() {
                        t.loaded || n.trigger("appear")
                    })
                }),
                o.bind("resize", function() {
                    s()
                }),
                /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && o.bind("pageshow", function(t) {
                    t.originalEvent && t.originalEvent.persisted && l.each(function() {
                        e(this).trigger("appear")
                    })
                }),
                e(n).ready(function() {
                    s()
                }),
                this
            }
            ,
            e.belowthefold = function(n, r) {
                var s;
                return s = r.container === i || r.container === t ? (t.innerHeight ? t.innerHeight : o.height()) + o.scrollTop() : e(r.container).offset().top + e(r.container).height(),
                s <= e(n).offset().top - r.threshold
            }
            ,
            e.rightoffold = function(n, r) {
                var s;
                return s = r.container === i || r.container === t ? o.width() + o.scrollLeft() : e(r.container).offset().left + e(r.container).width(),
                s <= e(n).offset().left - r.threshold
            }
            ,
            e.abovethetop = function(n, r) {
                var s;
                return s = r.container === i || r.container === t ? o.scrollTop() : e(r.container).offset().top,
                s >= e(n).offset().top + r.threshold + e(n).height()
            }
            ,
            e.leftofbegin = function(n, r) {
                var s;
                return s = r.container === i || r.container === t ? o.scrollLeft() : e(r.container).offset().left,
                s >= e(n).offset().left + r.threshold + e(n).width()
            }
            ,
            e.inviewport = function(t, n) {
                return !(e.rightoffold(t, n) || e.leftofbegin(t, n) || e.belowthefold(t, n) || e.abovethetop(t, n))
            }
            ,
            e.extend(e.expr[":"], {
                "below-the-fold": function(t) {
                    return e.belowthefold(t, {
                        threshold: 0
                    })
                },
                "above-the-top": function(t) {
                    return !e.belowthefold(t, {
                        threshold: 0
                    })
                },
                "right-of-screen": function(t) {
                    return e.rightoffold(t, {
                        threshold: 0
                    })
                },
                "left-of-screen": function(t) {
                    return !e.rightoffold(t, {
                        threshold: 0
                    })
                },
                "in-viewport": function(t) {
                    return e.inviewport(t, {
                        threshold: 0
                    })
                },
                "above-the-fold": function(t) {
                    return !e.belowthefold(t, {
                        threshold: 0
                    })
                },
                "right-of-fold": function(t) {
                    return e.rightoffold(t, {
                        threshold: 0
                    })
                },
                "left-of-fold": function(t) {
                    return !e.rightoffold(t, {
                        threshold: 0
                    })
                }
            })
        }(jQuery, window, document)
    }
    , {}]
}, {}, [16]);
