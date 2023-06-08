/*! For license information please see main.f5e21fdf.js.LICENSE.txt */
!function () { var e = { 6196: function (e, t, n) {
        "use strict";
        n.d(t, { He: function () { return v; }, Ld: function () { return C; }, eC: function () { return g; }, f3: function () { return h; }, iG: function () { return y; }, rS: function () { return w; }, sb: function () { return k; }, ys: function () { return p; } });
        var r = n(9439), i = n(1752), o = n(1120), a = n(136), u = n(7277), s = n(5671), l = n(3144), c = n(1315), f = n(2791), d = Symbol.for("Animated:node"), p = function (e) { return e && e[d]; }, h = function (e, t) { return (0, c.dE)(e, d, t); }, v = function (e) { return e && e[d] && e[d].getPayload(); }, m = function () { function e() { (0, s.Z)(this, e), this.payload = void 0, h(this, this); } return (0, l.Z)(e, [{ key: "getPayload", value: function () { return this.payload || []; } }]), e; }(), y = function (e) { (0, a.Z)(n, e); var t = (0, u.Z)(n); function n(e) { var r; return (0, s.Z)(this, n), (r = t.call(this)).done = !0, r.elapsedTime = void 0, r.lastPosition = void 0, r.lastVelocity = void 0, r.v0 = void 0, r.durationProgress = 0, r._value = e, c.is.num(r._value) && (r.lastPosition = r._value), r; } return (0, l.Z)(n, [{ key: "getPayload", value: function () { return [this]; } }, { key: "getValue", value: function () { return this._value; } }, { key: "setValue", value: function (e, t) { return c.is.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0); } }, { key: "reset", value: function () { var e = this.done; this.done = !1, c.is.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null); } }], [{ key: "create", value: function (e) { return new n(e); } }]), n; }(m), g = function (e) { (0, a.Z)(n, e); var t = (0, u.Z)(n); function n(e) { var r; return (0, s.Z)(this, n), (r = t.call(this, 0))._string = null, r._toString = void 0, r._toString = (0, c.mD)({ output: [e, e] }), r; } return (0, l.Z)(n, [{ key: "getValue", value: function () { var e = this._string; return null == e ? this._string = this._toString(this._value) : e; } }, { key: "setValue", value: function (e) { if (c.is.str(e)) {
                    if (e == this._string)
                        return !1;
                    this._string = e, this._value = 1;
                }
                else {
                    if (!(0, i.Z)((0, o.Z)(n.prototype), "setValue", this).call(this, e))
                        return !1;
                    this._string = null;
                } return !0; } }, { key: "reset", value: function (e) { e && (this._toString = (0, c.mD)({ output: [this.getValue(), e] })), this._value = 0, (0, i.Z)((0, o.Z)(n.prototype), "reset", this).call(this); } }], [{ key: "create", value: function (e) { return new n(e); } }]), n; }(y), b = { dependencies: null }, w = function (e) { (0, a.Z)(n, e); var t = (0, u.Z)(n); function n(e) { var r; return (0, s.Z)(this, n), (r = t.call(this)).source = e, r.setValue(e), r; } return (0, l.Z)(n, [{ key: "getValue", value: function (e) { var t = {}; return (0, c.rU)(this.source, (function (n, r) { var i; (i = n) && i[d] === i ? t[r] = n.getValue(e) : (0, c.j$)(n) ? t[r] = (0, c.je)(n) : e || (t[r] = n); })), t; } }, { key: "setValue", value: function (e) { this.source = e, this.payload = this._makePayload(e); } }, { key: "reset", value: function () { this.payload && (0, c.S6)(this.payload, (function (e) { return e.reset(); })); } }, { key: "_makePayload", value: function (e) { if (e) {
                    var t = new Set;
                    return (0, c.rU)(e, this._addToPayload, t), Array.from(t);
                } } }, { key: "_addToPayload", value: function (e) { var t = this; b.dependencies && (0, c.j$)(e) && b.dependencies.add(e); var n = v(e); n && (0, c.S6)(n, (function (e) { return t.add(e); })); } }]), n; }(m), x = function (e) { (0, a.Z)(n, e); var t = (0, u.Z)(n); function n(e) { return (0, s.Z)(this, n), t.call(this, e); } return (0, l.Z)(n, [{ key: "getValue", value: function () { return this.source.map((function (e) { return e.getValue(); })); } }, { key: "setValue", value: function (e) { var t = this.getPayload(); return e.length == t.length ? t.map((function (t, n) { return t.setValue(e[n]); })).some(Boolean) : ((0, i.Z)((0, o.Z)(n.prototype), "setValue", this).call(this, e.map(E)), !0); } }], [{ key: "create", value: function (e) { return new n(e); } }]), n; }(w);
        function E(e) { return ((0, c.Df)(e) ? g : y).create(e); }
        function k(e) { var t = p(e); return t ? t.constructor : c.is.arr(e) ? x : (0, c.Df)(e) ? g : y; }
        function _() { return _ = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        } return e; }, _.apply(this, arguments); }
        var S = function (e, t) { var n = !c.is.fun(e) || e.prototype && e.prototype.isReactComponent; return (0, f.forwardRef)((function (i, o) { var a = (0, f.useRef)(null), u = n && (0, f.useCallback)((function (e) { a.current = function (e, t) { e && (c.is.fun(e) ? e(t) : e.current = t); return t; }(o, e); }), [o]), s = function (e, t) { var n = new Set; b.dependencies = n, e.style && (e = _({}, e, { style: t.createAnimatedStyle(e.style) })); return e = new w(e), b.dependencies = null, [e, n]; }(i, t), l = (0, r.Z)(s, 2), d = l[0], p = l[1], h = (0, c.NW)(), v = function () { var e = a.current; n && !e || !1 === (!!e && t.applyAnimatedValues(e, d.getValue(!0))) && h(); }, m = new O(v, p), y = (0, f.useRef)(); (0, c.LI)((function () { return y.current = m, (0, c.S6)(p, (function (e) { return (0, c.UI)(e, m); })), function () { y.current && ((0, c.S6)(y.current.deps, (function (e) { return (0, c.iL)(e, y.current); })), c.Wn.cancel(y.current.update)); }; })), (0, f.useEffect)(v, []), (0, c.tf)((function () { return function () { var e = y.current; (0, c.S6)(e.deps, (function (t) { return (0, c.iL)(t, e); })); }; })); var g = t.getComponentProps(d.getValue()); return f.createElement(e, _({}, g, { ref: u })); })); }, O = function () { function e(t, n) { (0, s.Z)(this, e), this.update = t, this.deps = n; } return (0, l.Z)(e, [{ key: "eventObserved", value: function (e) { "change" == e.type && c.Wn.write(this.update); } }]), e; }();
        var N = Symbol.for("AnimatedComponent"), C = function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.applyAnimatedValues, r = void 0 === n ? function () { return !1; } : n, i = t.createAnimatedStyle, o = void 0 === i ? function (e) { return new w(e); } : i, a = t.getComponentProps, u = { applyAnimatedValues: r, createAnimatedStyle: o, getComponentProps: void 0 === a ? function (e) { return e; } : a }, s = function e(t) { var n = T(t) || "Anonymous"; return (t = c.is.str(t) ? e[t] || (e[t] = S(t, u)) : t[N] || (t[N] = S(t, u))).displayName = "Animated(".concat(n, ")"), t; }; return (0, c.rU)(e, (function (t, n) { c.is.arr(e) && (n = T(t)), s[n] = s(t); })), { animated: s }; }, T = function (e) { return c.is.str(e) ? e : e && c.is.str(e.displayName) ? e.displayName : c.is.fun(e) && e.name || null; };
    }, 8867: function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, { BailSignal: function () { return oe; }, Controller: function () { return Ne; }, FrameValue: function () { return le; }, Globals: function () { return m.OH; }, Interpolation: function () { return rt; }, Spring: function () { return Je; }, SpringContext: function () { return qe; }, SpringRef: function () { return ze; }, SpringValue: function () { return me; }, Trail: function () { return et; }, Transition: function () { return nt; }, config: function () { return V; }, createInterpolator: function () { return m.mD; }, easings: function () { return W; }, inferTo: function () { return I; }, interpolate: function () { return st; }, to: function () { return ut; }, update: function () { return lt; }, useChain: function () { return F; }, useIsomorphicLayoutEffect: function () { return m.LI; }, useReducedMotion: function () { return m.JZ; }, useSpring: function () { return Be; }, useSpringRef: function () { return He; }, useSprings: function () { return Qe; }, useTrail: function () { return Ke; }, useTransition: function () { return $e; } });
        var r = n(7326), i = n(3433), o = n(9439), a = n(1752), u = n(1120), s = n(136), l = n(7277), c = n(8737), f = n(4165), d = n(5861), p = n(3144), h = n(5671), v = n(7762), m = n(1315), y = n(2791), g = n(6196), b = n(4538), w = {};
        for (var x in b)
            ["default", "Globals", "createInterpolator", "useIsomorphicLayoutEffect", "useReducedMotion", "BailSignal", "Controller", "FrameValue", "Interpolation", "Spring", "SpringContext", "SpringRef", "SpringValue", "Trail", "Transition", "config", "easings", "inferTo", "interpolate", "to", "update", "useChain", "useSpring", "useSpringRef", "useSprings", "useTrail", "useTransition"].indexOf(x) < 0 && (w[x] = function (e) { return b[e]; }.bind(0, x));
        n.d(t, w);
        var E = n(9543);
        w = {};
        for (var x in E)
            ["default", "Globals", "createInterpolator", "useIsomorphicLayoutEffect", "useReducedMotion", "BailSignal", "Controller", "FrameValue", "Interpolation", "Spring", "SpringContext", "SpringRef", "SpringValue", "Trail", "Transition", "config", "easings", "inferTo", "interpolate", "to", "update", "useChain", "useSpring", "useSpringRef", "useSprings", "useTrail", "useTransition"].indexOf(x) < 0 && (w[x] = function (e) { return E[e]; }.bind(0, x));
        function k() { return k = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        } return e; }, k.apply(this, arguments); }
        function _(e) { for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]; return m.is.fun(e) ? e.apply(void 0, n) : e; }
        n.d(t, w);
        var S = function (e, t) { return !0 === e || !!(t && e && (m.is.fun(e) ? e(t) : (0, m.qo)(e).includes(t))); }, O = function (e, t) { return m.is.obj(e) ? t && e[t] : e; }, N = function (e, t) { return !0 === e.default ? e[t] : e.default ? e.default[t] : void 0; }, C = function (e) { return e; }, T = function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C, n = j; e.default && !0 !== e.default && (e = e.default, n = Object.keys(e)); var r, i = {}, o = (0, v.Z)(n); try {
            for (o.s(); !(r = o.n()).done;) {
                var a = r.value, u = t(e[a], a);
                m.is.und(u) || (i[a] = u);
            }
        }
        catch (s) {
            o.e(s);
        }
        finally {
            o.f();
        } return i; }, j = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"], P = { config: 1, from: 1, to: 1, ref: 1, loop: 1, reset: 1, pause: 1, cancel: 1, reverse: 1, immediate: 1, default: 1, delay: 1, onProps: 1, onStart: 1, onChange: 1, onPause: 1, onResume: 1, onRest: 1, onResolve: 1, items: 1, trail: 1, sort: 1, expires: 1, initial: 1, enter: 1, update: 1, leave: 1, children: 1, onDestroyed: 1, keys: 1, callId: 1, parentId: 1 };
        function I(e) { var t = function (e) { var t = {}, n = 0; if ((0, m.rU)(e, (function (e, r) { P[r] || (t[r] = e, n++); })), n)
            return t; }(e); if (t) {
            var n = { to: t };
            return (0, m.rU)(e, (function (e, r) { return r in t || (n[r] = e); })), n;
        } return k({}, e); }
        function R(e) { return e = (0, m.je)(e), m.is.arr(e) ? e.map(R) : (0, m.Df)(e) ? m.OH.createStringInterpolator({ range: [0, 1], output: [e, e] })(1) : e; }
        function D(e) { for (var t in e)
            return !0; return !1; }
        function L(e) { return m.is.fun(e) || m.is.arr(e) && m.is.obj(e[0]); }
        function A(e, t) { var n; null == (n = e.ref) || n.delete(e), null == t || t.delete(e); }
        function M(e, t) { var n; t && e.ref !== t && (null == (n = e.ref) || n.delete(e), t.add(e), e.ref = t); }
        function F(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3; (0, m.LI)((function () { if (t) {
            var r = 0;
            (0, m.S6)(e, (function (e, i) { var o = e.current; if (o.length) {
                var a = n * t[i];
                isNaN(a) ? a = r : r = a, (0, m.S6)(o, (function (e) { (0, m.S6)(e.queue, (function (e) { var t = e.delay; e.delay = function (e) { return a + _(t || 0, e); }; })); })), e.start();
            } }));
        }
        else {
            var i = Promise.resolve();
            (0, m.S6)(e, (function (e) { var t = e.current; if (t.length) {
                var n = t.map((function (e) { var t = e.queue; return e.queue = [], t; }));
                i = i.then((function () { return (0, m.S6)(t, (function (e, t) { return (0, m.S6)(n[t] || [], (function (t) { return e.queue.push(t); })); })), Promise.all(e.start()); }));
            } }));
        } })); }
        var V = { default: { tension: 170, friction: 26 }, gentle: { tension: 120, friction: 14 }, wobbly: { tension: 180, friction: 12 }, stiff: { tension: 210, friction: 20 }, slow: { tension: 280, friction: 60 }, molasses: { tension: 280, friction: 120 } }, q = 1.70158, U = 1.525 * q, z = q + 1, Q = 2 * Math.PI / 3, B = 2 * Math.PI / 4.5, Z = function (e) { var t = 7.5625, n = 2.75; return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375; }, W = { linear: function (e) { return e; }, easeInQuad: function (e) { return e * e; }, easeOutQuad: function (e) { return 1 - (1 - e) * (1 - e); }, easeInOutQuad: function (e) { return e < .5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2; }, easeInCubic: function (e) { return e * e * e; }, easeOutCubic: function (e) { return 1 - Math.pow(1 - e, 3); }, easeInOutCubic: function (e) { return e < .5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2; }, easeInQuart: function (e) { return e * e * e * e; }, easeOutQuart: function (e) { return 1 - Math.pow(1 - e, 4); }, easeInOutQuart: function (e) { return e < .5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2; }, easeInQuint: function (e) { return e * e * e * e * e; }, easeOutQuint: function (e) { return 1 - Math.pow(1 - e, 5); }, easeInOutQuint: function (e) { return e < .5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2; }, easeInSine: function (e) { return 1 - Math.cos(e * Math.PI / 2); }, easeOutSine: function (e) { return Math.sin(e * Math.PI / 2); }, easeInOutSine: function (e) { return -(Math.cos(Math.PI * e) - 1) / 2; }, easeInExpo: function (e) { return 0 === e ? 0 : Math.pow(2, 10 * e - 10); }, easeOutExpo: function (e) { return 1 === e ? 1 : 1 - Math.pow(2, -10 * e); }, easeInOutExpo: function (e) { return 0 === e ? 0 : 1 === e ? 1 : e < .5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2; }, easeInCirc: function (e) { return 1 - Math.sqrt(1 - Math.pow(e, 2)); }, easeOutCirc: function (e) { return Math.sqrt(1 - Math.pow(e - 1, 2)); }, easeInOutCirc: function (e) { return e < .5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2; }, easeInBack: function (e) { return z * e * e * e - q * e * e; }, easeOutBack: function (e) { return 1 + z * Math.pow(e - 1, 3) + q * Math.pow(e - 1, 2); }, easeInOutBack: function (e) { return e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - U) / 2 : (Math.pow(2 * e - 2, 2) * ((U + 1) * (2 * e - 2) + U) + 2) / 2; }, easeInElastic: function (e) { return 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * Q); }, easeOutElastic: function (e) { return 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * Q) + 1; }, easeInOutElastic: function (e) { return 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * B) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * B) / 2 + 1; }, easeInBounce: function (e) { return 1 - Z(1 - e); }, easeOutBounce: Z, easeInOutBounce: function (e) { return e < .5 ? (1 - Z(1 - 2 * e)) / 2 : (1 + Z(2 * e - 1)) / 2; } }, H = k({}, V.default, { mass: 1, damping: 1, easing: W.linear, clamp: !1 }), K = (0, p.Z)((function e() { (0, h.Z)(this, e), this.tension = void 0, this.friction = void 0, this.frequency = void 0, this.damping = void 0, this.mass = void 0, this.velocity = 0, this.restVelocity = void 0, this.precision = void 0, this.progress = void 0, this.duration = void 0, this.easing = void 0, this.clamp = void 0, this.bounce = void 0, this.decay = void 0, this.round = void 0, Object.assign(this, H); }));
        function $(e, t) { if (m.is.und(t.decay)) {
            var n = !m.is.und(t.tension) || !m.is.und(t.friction);
            !n && m.is.und(t.frequency) && m.is.und(t.damping) && m.is.und(t.mass) || (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0);
        }
        else
            e.duration = void 0; }
        var G = [], Y = (0, p.Z)((function e() { (0, h.Z)(this, e), this.changed = !1, this.values = G, this.toValues = null, this.fromValues = G, this.to = void 0, this.from = void 0, this.config = new K, this.immediate = !1; }));
        function J(e, t) { var n = t.key, r = t.props, i = t.defaultProps, o = t.state, a = t.actions; return new Promise((function (t, u) { var s, l, c, f = S(null != (s = r.cancel) ? s : null == i ? void 0 : i.cancel, n); if (f)
            v();
        else {
            m.is.und(r.pause) || (o.paused = S(r.pause, n));
            var d = null == i ? void 0 : i.pause;
            !0 !== d && (d = o.paused || S(d, n)), l = _(r.delay || 0, n), d ? (o.resumeQueue.add(h), a.pause()) : (a.resume(), h());
        } function p() { o.resumeQueue.add(h), o.timeouts.delete(c), c.cancel(), l = c.time - m.Wn.now(); } function h() { l > 0 && !m.OH.skipAnimation ? (o.delayed = !0, c = m.Wn.setTimeout(v, l), o.pauseQueue.add(p), o.timeouts.add(c)) : v(); } function v() { o.delayed && (o.delayed = !1), o.pauseQueue.delete(p), o.timeouts.delete(c), e <= (o.cancelId || 0) && (f = !0); try {
            a.start(k({}, r, { callId: e, cancel: f }), t);
        }
        catch (n) {
            u(n);
        } } })); }
        var X = function (e, t) { return 1 == t.length ? t[0] : t.some((function (e) { return e.cancelled; })) ? ne(e.get()) : t.every((function (e) { return e.noop; })) ? ee(e.get()) : te(e.get(), t.every((function (e) { return e.finished; }))); }, ee = function (e) { return { value: e, noop: !0, finished: !0, cancelled: !1 }; }, te = function (e, t) { return { value: e, finished: t, cancelled: arguments.length > 2 && void 0 !== arguments[2] && arguments[2] }; }, ne = function (e) { return { value: e, cancelled: !0, finished: !1 }; };
        function re(e, t, n, r) { var i = t.callId, o = t.parentId, a = t.onRest, u = n.asyncTo, s = n.promise; return o || e !== u || t.reset ? n.promise = (0, d.Z)((0, f.Z)().mark((function l() { var c, p, h, y, g, b, w, x; return (0, f.Z)().wrap((function (l) { for (;;)
            switch (l.prev = l.next) {
                case 0:
                    if (n.asyncId = i, n.asyncTo = e, c = T(t, (function (e, t) { return "onRest" === t ? void 0 : e; })), y = new Promise((function (e, t) { return p = e, h = t; })), g = function (e) { var t = i <= (n.cancelId || 0) && ne(r) || i !== n.asyncId && te(r, !1); if (t)
                        throw e.result = t, h(e), e; }, b = function (e, t) { var o = new oe, a = new ae; return (0, d.Z)((0, f.Z)().mark((function u() { var s, l; return (0, f.Z)().wrap((function (u) { for (;;)
                        switch (u.prev = u.next) {
                            case 0:
                                if (!m.OH.skipAnimation) {
                                    u.next = 5;
                                    break;
                                }
                                throw ie(n), a.result = te(r, !1), h(a), a;
                            case 5: return g(o), (s = m.is.obj(e) ? k({}, e) : k({}, t, { to: e })).parentId = i, (0, m.rU)(c, (function (e, t) { m.is.und(s[t]) && (s[t] = e); })), u.next = 11, r.start(s);
                            case 11:
                                if (l = u.sent, g(o), !n.paused) {
                                    u.next = 16;
                                    break;
                                }
                                return u.next = 16, new Promise((function (e) { n.resumeQueue.add(e); }));
                            case 16: return u.abrupt("return", l);
                            case 17:
                            case "end": return u.stop();
                        } }), u); })))(); }, !m.OH.skipAnimation) {
                        l.next = 9;
                        break;
                    }
                    return ie(n), l.abrupt("return", te(r, !1));
                case 9: return l.prev = 9, x = m.is.arr(e) ? function () { var e = (0, d.Z)((0, f.Z)().mark((function e(t) { var n, r, i; return (0, f.Z)().wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: n = (0, v.Z)(t), e.prev = 1, n.s();
                        case 3:
                            if ((r = n.n()).done) {
                                e.next = 9;
                                break;
                            }
                            return i = r.value, e.next = 7, b(i);
                        case 7:
                            e.next = 3;
                            break;
                        case 9:
                            e.next = 14;
                            break;
                        case 11: e.prev = 11, e.t0 = e.catch(1), n.e(e.t0);
                        case 14: return e.prev = 14, n.f(), e.finish(14);
                        case 17:
                        case "end": return e.stop();
                    } }), e, null, [[1, 11, 14, 17]]); }))); return function (t) { return e.apply(this, arguments); }; }()(e) : Promise.resolve(e(b, r.stop.bind(r))), l.next = 13, Promise.all([x.then(p), y]);
                case 13:
                    w = te(r.get(), !0, !1), l.next = 27;
                    break;
                case 16:
                    if (l.prev = 16, l.t0 = l.catch(9), !(l.t0 instanceof oe)) {
                        l.next = 22;
                        break;
                    }
                    w = l.t0.result, l.next = 27;
                    break;
                case 22:
                    if (!(l.t0 instanceof ae)) {
                        l.next = 26;
                        break;
                    }
                    w = l.t0.result, l.next = 27;
                    break;
                case 26: throw l.t0;
                case 27: return l.prev = 27, i == n.asyncId && (n.asyncId = o, n.asyncTo = o ? u : void 0, n.promise = o ? s : void 0), l.finish(27);
                case 30: return m.is.fun(a) && m.Wn.batchedUpdates((function () { a(w, r, r.item); })), l.abrupt("return", w);
                case 32:
                case "end": return l.stop();
            } }), l, null, [[9, 16, 27, 30]]); })))() : s; }
        function ie(e, t) { (0, m.yl)(e.timeouts, (function (e) { return e.cancel(); })), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t); }
        var oe = function (e) { (0, s.Z)(n, e); var t = (0, l.Z)(n); function n() { var e; return (0, h.Z)(this, n), (e = t.call(this, "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")).result = void 0, e; } return (0, p.Z)(n); }((0, c.Z)(Error)), ae = function (e) { (0, s.Z)(n, e); var t = (0, l.Z)(n); function n() { var e; return (0, h.Z)(this, n), (e = t.call(this, "SkipAnimationSignal")).result = void 0, e; } return (0, p.Z)(n); }((0, c.Z)(Error)), ue = function (e) { return e instanceof le; }, se = 1, le = function (e) { (0, s.Z)(n, e); var t = (0, l.Z)(n); function n() { var e; (0, h.Z)(this, n); for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
            i[o] = arguments[o]; return (e = t.call.apply(t, [this].concat(i))).id = se++, e.key = void 0, e._priority = 0, e; } return (0, p.Z)(n, [{ key: "priority", get: function () { return this._priority; }, set: function (e) { this._priority != e && (this._priority = e, this._onPriorityChange(e)); } }, { key: "get", value: function () { var e = (0, g.ys)(this); return e && e.getValue(); } }, { key: "to", value: function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n]; return m.OH.to(this, t); } }, { key: "interpolate", value: function () { (0, m.LW)(); for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n]; return m.OH.to(this, t); } }, { key: "toJSON", value: function () { return this.get(); } }, { key: "observerAdded", value: function (e) { 1 == e && this._attach(); } }, { key: "observerRemoved", value: function (e) { 0 == e && this._detach(); } }, { key: "_attach", value: function () { } }, { key: "_detach", value: function () { } }, { key: "_onChange", value: function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; (0, m.k0)(this, { type: "change", parent: this, value: e, idle: t }); } }, { key: "_onPriorityChange", value: function (e) { this.idle || m.fT.sort(this), (0, m.k0)(this, { type: "priority", parent: this, priority: e }); } }]), n; }(m.B0), ce = Symbol.for("SpringPhase"), fe = function (e) { return (1 & e[ce]) > 0; }, de = function (e) { return (2 & e[ce]) > 0; }, pe = function (e) { return (4 & e[ce]) > 0; }, he = function (e, t) { return t ? e[ce] |= 3 : e[ce] &= -3; }, ve = function (e, t) { return t ? e[ce] |= 4 : e[ce] &= -5; }, me = function (e) { (0, s.Z)(n, e); var t = (0, l.Z)(n); function n(e, r) { var i; if ((0, h.Z)(this, n), (i = t.call(this)).key = void 0, i.animation = new Y, i.queue = void 0, i.defaultProps = {}, i._state = { paused: !1, delayed: !1, pauseQueue: new Set, resumeQueue: new Set, timeouts: new Set }, i._pendingCalls = new Set, i._lastCallId = 0, i._lastToId = 0, i._memoizedDuration = 0, !m.is.und(e) || !m.is.und(r)) {
            var o = m.is.obj(e) ? k({}, e) : k({}, r, { from: e });
            m.is.und(o.default) && (o.default = !0), i.start(o);
        } return i; } return (0, p.Z)(n, [{ key: "idle", get: function () { return !(de(this) || this._state.asyncTo) || pe(this); } }, { key: "goal", get: function () { return (0, m.je)(this.animation.to); } }, { key: "velocity", get: function () { var e = (0, g.ys)(this); return e instanceof g.iG ? e.lastVelocity || 0 : e.getPayload().map((function (e) { return e.lastVelocity || 0; })); } }, { key: "hasAnimated", get: function () { return fe(this); } }, { key: "isAnimating", get: function () { return de(this); } }, { key: "isPaused", get: function () { return pe(this); } }, { key: "isDelayed", get: function () { return this._state.delayed; } }, { key: "advance", value: function (e) { var t = this, n = !0, r = !1, i = this.animation, o = i.config, a = i.toValues, u = (0, g.He)(i.to); !u && (0, m.j$)(i.to) && (a = (0, m.qo)((0, m.je)(i.to))), i.values.forEach((function (s, l) { if (!s.done) {
                    var c = s.constructor == g.eC ? 1 : u ? u[l].lastPosition : a[l], f = i.immediate, d = c;
                    if (!f) {
                        if (d = s.lastPosition, o.tension <= 0)
                            return void (s.done = !0);
                        var p, h = s.elapsedTime += e, v = i.fromValues[l], y = null != s.v0 ? s.v0 : s.v0 = m.is.arr(o.velocity) ? o.velocity[l] : o.velocity, b = o.precision || (v == c ? .005 : Math.min(1, .001 * Math.abs(c - v)));
                        if (m.is.und(o.duration))
                            if (o.decay) {
                                var w = !0 === o.decay ? .998 : o.decay, x = Math.exp(-(1 - w) * h);
                                d = v + y / (1 - w) * (1 - x), f = Math.abs(s.lastPosition - d) <= b, p = y * x;
                            }
                            else {
                                p = null == s.lastVelocity ? y : s.lastVelocity;
                                for (var E = o.restVelocity || b / 10, k = o.clamp ? 0 : o.bounce, _ = !m.is.und(k), S = v == c ? s.v0 > 0 : v < c, O = Math.ceil(e / 1), N = 0; N < O && (Math.abs(p) > E || !(f = Math.abs(c - d) <= b)); ++N) {
                                    _ && (d == c || d > c == S) && (p = -p * k, d = c), d += 1 * (p += 1 * ((1e-6 * -o.tension * (d - c) + .001 * -o.friction * p) / o.mass));
                                }
                            }
                        else {
                            var C = 1;
                            o.duration > 0 && (t._memoizedDuration !== o.duration && (t._memoizedDuration = o.duration, s.durationProgress > 0 && (s.elapsedTime = o.duration * s.durationProgress, h = s.elapsedTime += e)), C = (C = (o.progress || 0) + h / t._memoizedDuration) > 1 ? 1 : C < 0 ? 0 : C, s.durationProgress = C), p = ((d = v + o.easing(C) * (c - v)) - s.lastPosition) / e, f = 1 == C;
                        }
                        s.lastVelocity = p, Number.isNaN(d) && (console.warn("Got NaN while animating:", t), f = !0);
                    }
                    u && !u[l].done && (f = !1), f ? s.done = !0 : n = !1, s.setValue(d, o.round) && (r = !0);
                } })); var s = (0, g.ys)(this), l = s.getValue(); if (n) {
                    var c = (0, m.je)(i.to);
                    l === c && !r || o.decay ? r && o.decay && this._onChange(l) : (s.setValue(c), this._onChange(c)), this._stop();
                }
                else
                    r && this._onChange(l); } }, { key: "set", value: function (e) { var t = this; return m.Wn.batchedUpdates((function () { t._stop(), t._focus(e), t._set(e); })), this; } }, { key: "pause", value: function () { this._update({ pause: !0 }); } }, { key: "resume", value: function () { this._update({ pause: !1 }); } }, { key: "finish", value: function () { var e = this; if (de(this)) {
                    var t = this.animation, n = t.to, r = t.config;
                    m.Wn.batchedUpdates((function () { e._onStart(), r.decay || e._set(n, !1), e._stop(); }));
                } return this; } }, { key: "update", value: function (e) { return (this.queue || (this.queue = [])).push(e), this; } }, { key: "start", value: function (e, t) { var n, r = this; return m.is.und(e) ? (n = this.queue || [], this.queue = []) : n = [m.is.obj(e) ? e : k({}, t, { to: e })], Promise.all(n.map((function (e) { return r._update(e); }))).then((function (e) { return X(r, e); })); } }, { key: "stop", value: function (e) { var t = this, n = this.animation.to; return this._focus(this.get()), ie(this._state, e && this._lastCallId), m.Wn.batchedUpdates((function () { return t._stop(n, e); })), this; } }, { key: "reset", value: function () { this._update({ reset: !0 }); } }, { key: "eventObserved", value: function (e) { "change" == e.type ? this._start() : "priority" == e.type && (this.priority = e.priority + 1); } }, { key: "_prepareNode", value: function (e) { var t = this.key || "", n = e.to, r = e.from; (null == (n = m.is.obj(n) ? n[t] : n) || L(n)) && (n = void 0), null == (r = m.is.obj(r) ? r[t] : r) && (r = void 0); var i = { to: n, from: r }; if (!fe(this)) {
                    if (e.reverse) {
                        var o = [r, n];
                        n = o[0], r = o[1];
                    }
                    r = (0, m.je)(r), m.is.und(r) ? (0, g.ys)(this) || this._set(n) : this._set(r);
                } return i; } }, { key: "_update", value: function (e, t) { var n = this, r = k({}, e), i = this.key, o = this.defaultProps; r.default && Object.assign(o, T(r, (function (e, t) { return /^on/.test(t) ? O(e, i) : e; }))), ke(this, r, "onProps"), _e(this, "onProps", r, this); var a = this._prepareNode(r); if (Object.isFrozen(this))
                    throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"); var u = this._state; return J(++this._lastCallId, { key: i, props: r, defaultProps: o, state: u, actions: { pause: function () { pe(n) || (ve(n, !0), (0, m.bl)(u.pauseQueue), _e(n, "onPause", te(n, ye(n, n.animation.to)), n)); }, resume: function () { pe(n) && (ve(n, !1), de(n) && n._resume(), (0, m.bl)(u.resumeQueue), _e(n, "onResume", te(n, ye(n, n.animation.to)), n)); }, start: this._merge.bind(this, a) } }).then((function (e) { if (r.loop && e.finished && (!t || !e.noop)) {
                    var i = ge(r);
                    if (i)
                        return n._update(i, !0);
                } return e; })); } }, { key: "_merge", value: function (e, t, n) { var r = this; if (t.cancel)
                    return this.stop(!0), n(ne(this)); var i = !m.is.und(e.to), o = !m.is.und(e.from); if (i || o) {
                    if (!(t.callId > this._lastToId))
                        return n(ne(this));
                    this._lastToId = t.callId;
                } var a = this.key, u = this.defaultProps, s = this.animation, l = s.to, c = s.from, f = e.to, d = void 0 === f ? l : f, p = e.from, h = void 0 === p ? c : p; if (!o || i || t.default && !m.is.und(d) || (d = h), t.reverse) {
                    var v = [h, d];
                    d = v[0], h = v[1];
                } var y = !(0, m.Xy)(h, c); y && (s.from = h), h = (0, m.je)(h); var b = !(0, m.Xy)(d, l); b && this._focus(d); var w = L(t.to), x = s.config, E = x.decay, O = x.velocity; (i || o) && (x.velocity = 0), t.config && !w && function (e, t, n) { for (var r in n && ($(n = k({}, n), t), t = k({}, n, t)), $(e, t), Object.assign(e, t), H)
                    null == e[r] && (e[r] = H[r]); var i = e.mass, o = e.frequency, a = e.damping; m.is.und(o) || (o < .01 && (o = .01), a < 0 && (a = 0), e.tension = Math.pow(2 * Math.PI / o, 2) * i, e.friction = 4 * Math.PI * a * i / o); }(x, _(t.config, a), t.config !== u.config ? _(u.config, a) : void 0); var N = (0, g.ys)(this); if (!N || m.is.und(d))
                    return n(te(this, !0)); var C = m.is.und(t.reset) ? o && !t.default : !m.is.und(h) && S(t.reset, a), T = C ? h : this.get(), j = R(d), P = m.is.num(j) || m.is.arr(j) || (0, m.Df)(j), I = !w && (!P || S(u.immediate || t.immediate, a)); if (b) {
                    var D = (0, g.sb)(d);
                    if (D !== N.constructor) {
                        if (!I)
                            throw Error("Cannot animate between ".concat(N.constructor.name, " and ").concat(D.name, ', as the "to" prop suggests'));
                        N = this._set(j);
                    }
                } var A = N.constructor, M = (0, m.j$)(d), F = !1; if (!M) {
                    var V = C || !fe(this) && y;
                    (b || V) && (M = !(F = (0, m.Xy)(R(T), j))), ((0, m.Xy)(s.immediate, I) || I) && (0, m.Xy)(x.decay, E) && (0, m.Xy)(x.velocity, O) || (M = !0);
                } if (F && de(this) && (s.changed && !C ? M = !0 : M || this._stop(l)), !w && ((M || (0, m.j$)(l)) && (s.values = N.getPayload(), s.toValues = (0, m.j$)(d) ? null : A == g.eC ? [1] : (0, m.qo)(j)), s.immediate != I && (s.immediate = I, I || C || this._set(l)), M)) {
                    var q = s.onRest;
                    (0, m.S6)(Ee, (function (e) { return ke(r, t, e); }));
                    var U = te(this, ye(this, l));
                    (0, m.bl)(this._pendingCalls, U), this._pendingCalls.add(n), s.changed && m.Wn.batchedUpdates((function () { s.changed = !C, null == q || q(U, r), C ? _(u.onRest, U) : null == s.onStart || s.onStart(U, r); }));
                } C && this._set(T), w ? n(re(t.to, t, this._state, this)) : M ? this._start() : de(this) && !b ? this._pendingCalls.add(n) : n(ee(T)); } }, { key: "_focus", value: function (e) { var t = this.animation; e !== t.to && ((0, m.Ll)(this) && this._detach(), t.to = e, (0, m.Ll)(this) && this._attach()); } }, { key: "_attach", value: function () { var e = 0, t = this.animation.to; (0, m.j$)(t) && ((0, m.UI)(t, this), ue(t) && (e = t.priority + 1)), this.priority = e; } }, { key: "_detach", value: function () { var e = this.animation.to; (0, m.j$)(e) && (0, m.iL)(e, this); } }, { key: "_set", value: function (e) { var t = this, n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], r = (0, m.je)(e); if (!m.is.und(r)) {
                    var i = (0, g.ys)(this);
                    if (!i || !(0, m.Xy)(r, i.getValue())) {
                        var o = (0, g.sb)(r);
                        i && i.constructor == o ? i.setValue(r) : (0, g.f3)(this, o.create(r)), i && m.Wn.batchedUpdates((function () { t._onChange(r, n); }));
                    }
                } return (0, g.ys)(this); } }, { key: "_onStart", value: function () { var e = this.animation; e.changed || (e.changed = !0, _e(this, "onStart", te(this, ye(this, e.to)), this)); } }, { key: "_onChange", value: function (e, t) { t || (this._onStart(), _(this.animation.onChange, e, this)), _(this.defaultProps.onChange, e, this), (0, a.Z)((0, u.Z)(n.prototype), "_onChange", this).call(this, e, t); } }, { key: "_start", value: function () { var e = this.animation; (0, g.ys)(this).reset((0, m.je)(e.to)), e.immediate || (e.fromValues = e.values.map((function (e) { return e.lastPosition; }))), de(this) || (he(this, !0), pe(this) || this._resume()); } }, { key: "_resume", value: function () { m.OH.skipAnimation ? this.finish() : m.fT.start(this); } }, { key: "_stop", value: function (e, t) { if (de(this)) {
                    he(this, !1);
                    var n = this.animation;
                    (0, m.S6)(n.values, (function (e) { e.done = !0; })), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), (0, m.k0)(this, { type: "idle", parent: this });
                    var r = t ? ne(this.get()) : te(this.get(), ye(this, null != e ? e : n.to));
                    (0, m.bl)(this._pendingCalls, r), n.changed && (n.changed = !1, _e(this, "onRest", r, this));
                } } }]), n; }(le);
        function ye(e, t) { var n = R(t), r = R(e.get()); return (0, m.Xy)(r, n); }
        function ge(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.loop, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.to, r = _(t); if (r) {
            var i = !0 !== r && I(r), o = (i || e).reverse, a = !i || i.reset;
            return be(k({}, e, { loop: t, default: !1, pause: void 0, to: !o || L(n) ? n : void 0, from: a ? e.from : void 0, reset: a }, i));
        } }
        function be(e) { var t = e = I(e), n = t.to, r = t.from, i = new Set; return m.is.obj(n) && xe(n, i), m.is.obj(r) && xe(r, i), e.keys = i.size ? Array.from(i) : null, e; }
        function we(e) { var t = be(e); return m.is.und(t.default) && (t.default = T(t)), t; }
        function xe(e, t) { (0, m.rU)(e, (function (e, n) { return null != e && t.add(n); })); }
        var Ee = ["onStart", "onRest", "onChange", "onPause", "onResume"];
        function ke(e, t, n) { e.animation[n] = t[n] !== N(t, n) ? O(t[n], e.key) : void 0; }
        function _e(e, t) { for (var n, r, i, o, a, u, s = arguments.length, l = new Array(s > 2 ? s - 2 : 0), c = 2; c < s; c++)
            l[c - 2] = arguments[c]; null == (i = (o = e.animation)[t]) || (n = i).call.apply(n, [o].concat(l)), null == (a = (u = e.defaultProps)[t]) || (r = a).call.apply(r, [u].concat(l)); }
        var Se = ["onStart", "onChange", "onRest"], Oe = 1, Ne = function () { function e(t, n) { (0, h.Z)(this, e), this.id = Oe++, this.springs = {}, this.queue = [], this.ref = void 0, this._flush = void 0, this._initialProps = void 0, this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._item = void 0, this._state = { paused: !1, pauseQueue: new Set, resumeQueue: new Set, timeouts: new Set }, this._events = { onStart: new Map, onChange: new Map, onRest: new Map }, this._onFrame = this._onFrame.bind(this), n && (this._flush = n), t && this.start(k({ default: !0 }, t)); } return (0, p.Z)(e, [{ key: "idle", get: function () { return !this._state.asyncTo && Object.values(this.springs).every((function (e) { return e.idle && !e.isDelayed && !e.isPaused; })); } }, { key: "item", get: function () { return this._item; }, set: function (e) { this._item = e; } }, { key: "get", value: function () { var e = {}; return this.each((function (t, n) { return e[n] = t.get(); })), e; } }, { key: "set", value: function (e) { for (var t in e) {
                    var n = e[t];
                    m.is.und(n) || this.springs[t].set(n);
                } } }, { key: "update", value: function (e) { return e && this.queue.push(be(e)), this; } }, { key: "start", value: function (e) { var t = this.queue; return e ? t = (0, m.qo)(e).map(be) : this.queue = [], this._flush ? this._flush(this, t) : (Le(this, t), Ce(this, t)); } }, { key: "stop", value: function (e, t) { if (e !== !!e && (t = e), t) {
                    var n = this.springs;
                    (0, m.S6)((0, m.qo)(t), (function (t) { return n[t].stop(!!e); }));
                }
                else
                    ie(this._state, this._lastAsyncId), this.each((function (t) { return t.stop(!!e); })); return this; } }, { key: "pause", value: function (e) { if (m.is.und(e))
                    this.start({ pause: !0 });
                else {
                    var t = this.springs;
                    (0, m.S6)((0, m.qo)(e), (function (e) { return t[e].pause(); }));
                } return this; } }, { key: "resume", value: function (e) { if (m.is.und(e))
                    this.start({ pause: !1 });
                else {
                    var t = this.springs;
                    (0, m.S6)((0, m.qo)(e), (function (e) { return t[e].resume(); }));
                } return this; } }, { key: "each", value: function (e) { (0, m.rU)(this.springs, e); } }, { key: "_onFrame", value: function () { var e = this, t = this._events, n = t.onStart, r = t.onChange, i = t.onRest, a = this._active.size > 0, u = this._changed.size > 0; (a && !this._started || u && !this._started) && (this._started = !0, (0, m.yl)(n, (function (t) { var n = (0, o.Z)(t, 2), r = n[0], i = n[1]; i.value = e.get(), r(i, e, e._item); }))); var s = !a && this._started, l = u || s && i.size ? this.get() : null; u && r.size && (0, m.yl)(r, (function (t) { var n = (0, o.Z)(t, 2), r = n[0], i = n[1]; i.value = l, r(i, e, e._item); })), s && (this._started = !1, (0, m.yl)(i, (function (t) { var n = (0, o.Z)(t, 2), r = n[0], i = n[1]; i.value = l, r(i, e, e._item); }))); } }, { key: "eventObserved", value: function (e) { if ("change" == e.type)
                    this._changed.add(e.parent), e.idle || this._active.add(e.parent);
                else {
                    if ("idle" != e.type)
                        return;
                    this._active.delete(e.parent);
                } m.Wn.onFrame(this._onFrame); } }]), e; }();
        function Ce(e, t) { return Promise.all(t.map((function (t) { return Te(e, t); }))).then((function (t) { return X(e, t); })); }
        function Te(e, t, n) { return je.apply(this, arguments); }
        function je() { return je = (0, d.Z)((0, f.Z)().mark((function e(t, n, r) { var i, o, a, u, s, l, c, d, p, h, v, y, g; return (0, f.Z)().wrap((function (e) { for (;;)
            switch (e.prev = e.next) {
                case 0:
                    if (i = n.keys, o = n.to, a = n.from, u = n.loop, s = n.onRest, l = n.onResolve, c = m.is.obj(n.default) && n.default, u && (n.loop = !1), !1 === o && (n.to = null), !1 === a && (n.from = null), (d = m.is.arr(o) || m.is.fun(o) ? o : void 0) ? (n.to = void 0, n.onRest = void 0, c && (c.onRest = void 0)) : (0, m.S6)(Se, (function (e) { var r = n[e]; if (m.is.fun(r)) {
                        var i = t._events[e];
                        n[e] = function (e) { var t = e.finished, n = e.cancelled, o = i.get(r); o ? (t || (o.finished = !1), n && (o.cancelled = !0)) : i.set(r, { value: null, finished: t || !1, cancelled: n || !1 }); }, c && (c[e] = n[e]);
                    } })), p = t._state, n.pause === !p.paused ? (p.paused = n.pause, (0, m.bl)(n.pause ? p.pauseQueue : p.resumeQueue)) : p.paused && (n.pause = !0), h = (i || Object.keys(t.springs)).map((function (e) { return t.springs[e].start(n); })), v = !0 === n.cancel || !0 === N(n, "cancel"), (d || v && p.asyncId) && h.push(J(++t._lastAsyncId, { props: n, state: p, actions: { pause: m.ZT, resume: m.ZT, start: function (e, n) { v ? (ie(p, t._lastAsyncId), n(ne(t))) : (e.onRest = s, n(re(d, e, p, t))); } } })), !p.paused) {
                        e.next = 15;
                        break;
                    }
                    return e.next = 15, new Promise((function (e) { p.resumeQueue.add(e); }));
                case 15: return e.t0 = X, e.t1 = t, e.next = 19, Promise.all(h);
                case 19:
                    if (e.t2 = e.sent, y = (0, e.t0)(e.t1, e.t2), !u || !y.finished || r && y.noop) {
                        e.next = 26;
                        break;
                    }
                    if (!(g = ge(n, u, o))) {
                        e.next = 26;
                        break;
                    }
                    return Le(t, [g]), e.abrupt("return", Te(t, g, !0));
                case 26: return l && m.Wn.batchedUpdates((function () { return l(y, t, t.item); })), e.abrupt("return", y);
                case 28:
                case "end": return e.stop();
            } }), e); }))), je.apply(this, arguments); }
        function Pe(e, t) { var n = k({}, e.springs); return t && (0, m.S6)((0, m.qo)(t), (function (e) { m.is.und(e.keys) && (e = be(e)), m.is.obj(e.to) || (e = k({}, e, { to: void 0 })), De(n, e, (function (e) { return Re(e); })); })), Ie(e, n), n; }
        function Ie(e, t) { (0, m.rU)(t, (function (t, n) { e.springs[n] || (e.springs[n] = t, (0, m.UI)(t, e)); })); }
        function Re(e, t) { var n = new me; return n.key = e, t && (0, m.UI)(n, t), n; }
        function De(e, t, n) { t.keys && (0, m.S6)(t.keys, (function (r) { (e[r] || (e[r] = n(r)))._prepareNode(t); })); }
        function Le(e, t) { (0, m.S6)(t, (function (t) { De(e.springs, t, (function (t) { return Re(t, e); })); })); }
        function Ae(e, t) { if (null == e)
            return {}; var n, r, i = {}, o = Object.keys(e); for (r = 0; r < o.length; r++)
            n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]); return i; }
        var Me, Fe, Ve = ["children"], qe = function (e) { var t = e.children, n = Ae(e, Ve), r = (0, y.useContext)(Ue), i = n.pause || !!r.pause, o = n.immediate || !!r.immediate; n = (0, m.Pr)((function () { return { pause: i, immediate: o }; }), [i, o]); var a = Ue.Provider; return y.createElement(a, { value: n }, t); }, Ue = (Me = qe, Fe = {}, Object.assign(Me, y.createContext(Fe)), Me.Provider._context = Me, Me.Consumer._context = Me, Me);
        qe.Provider = Ue.Provider, qe.Consumer = Ue.Consumer;
        var ze = function () { var e = [], t = function (t) { (0, m.ZR)(); var r = []; return (0, m.S6)(e, (function (e, i) { if (m.is.und(t))
            r.push(e.start());
        else {
            var o = n(t, e, i);
            o && r.push(e.start(o));
        } })), r; }; t.current = e, t.add = function (t) { e.includes(t) || e.push(t); }, t.delete = function (t) { var n = e.indexOf(t); ~n && e.splice(n, 1); }, t.pause = function () { var t = arguments; return (0, m.S6)(e, (function (e) { return e.pause.apply(e, (0, i.Z)(t)); })), this; }, t.resume = function () { var t = arguments; return (0, m.S6)(e, (function (e) { return e.resume.apply(e, (0, i.Z)(t)); })), this; }, t.set = function (t) { (0, m.S6)(e, (function (e) { return e.set(t); })); }, t.start = function (t) { var n = this, r = []; return (0, m.S6)(e, (function (e, i) { if (m.is.und(t))
            r.push(e.start());
        else {
            var o = n._getProps(t, e, i);
            o && r.push(e.start(o));
        } })), r; }, t.stop = function () { var t = arguments; return (0, m.S6)(e, (function (e) { return e.stop.apply(e, (0, i.Z)(t)); })), this; }, t.update = function (t) { var n = this; return (0, m.S6)(e, (function (e, r) { return e.update(n._getProps(t, e, r)); })), this; }; var n = function (e, t, n) { return m.is.fun(e) ? e(n, t) : e; }; return t._getProps = n, t; };
        function Qe(e, t, n) { var r = arguments, o = m.is.fun(t) && t; o && !n && (n = []); var a = (0, y.useMemo)((function () { return o || 3 == r.length ? ze() : void 0; }), []), u = (0, y.useRef)(0), s = (0, m.NW)(), l = (0, y.useMemo)((function () { return { ctrls: [], queue: [], flush: function (e, t) { var n = Pe(e, t); return u.current > 0 && !l.queue.length && !Object.keys(n).some((function (t) { return !e.springs[t]; })) ? Ce(e, t) : new Promise((function (r) { Ie(e, n), l.queue.push((function () { r(Ce(e, t)); })), s(); })); } }; }), []), c = (0, y.useRef)((0, i.Z)(l.ctrls)), f = [], d = (0, m.zH)(e) || 0; function p(e, n) { for (var r = e; r < n; r++) {
            var i = c.current[r] || (c.current[r] = new Ne(null, l.flush)), a = o ? o(r, i) : t[r];
            a && (f[r] = we(a));
        } } (0, y.useMemo)((function () { (0, m.S6)(c.current.slice(e, d), (function (e) { A(e, a), e.stop(!0); })), c.current.length = e, p(d, e); }), [e]), (0, y.useMemo)((function () { p(0, Math.min(d, e)); }), n); var h = c.current.map((function (e, t) { return Pe(e, f[t]); })), v = (0, y.useContext)(qe), g = (0, m.zH)(v), b = v !== g && D(v); (0, m.LI)((function () { u.current++, l.ctrls = c.current; var e = l.queue; e.length && (l.queue = [], (0, m.S6)(e, (function (e) { return e(); }))), (0, m.S6)(c.current, (function (e, t) { null == a || a.add(e), b && e.start({ default: v }); var n = f[t]; n && (M(e, n.ref), e.ref ? e.queue.push(n) : e.start(n)); })); })), (0, m.tf)((function () { return function () { (0, m.S6)(l.ctrls, (function (e) { return e.stop(!0); })); }; })); var w = h.map((function (e) { return k({}, e); })); return a ? [w, a] : w; }
        function Be(e, t) { var n = m.is.fun(e), r = Qe(1, n ? e : [e], n ? t || [] : t), i = (0, o.Z)(r, 2), a = (0, o.Z)(i[0], 1)[0], u = i[1]; return n || 2 == arguments.length ? [a, u] : a; }
        var Ze, We = function () { return ze(); }, He = function () { return (0, y.useState)(We)[0]; };
        function Ke(e, t, n) { var r, i = m.is.fun(t) && t; i && !n && (n = []); var o = !0, a = void 0, u = Qe(e, (function (e, n) { var r = i ? i(e, n) : t; return a = r.ref, o = o && r.reverse, r; }), n || [{}]), s = null != (r = a) ? r : u[1]; return (0, m.LI)((function () { (0, m.S6)(s.current, (function (e, t) { var n = s.current[t + (o ? 1 : -1)]; n ? e.start({ to: n.springs }) : e.start(); })); }), n), i || 3 == arguments.length ? (s._getProps = function (e, t, n) { var r = m.is.fun(e) ? e(n, t) : e; if (r) {
            var i = s.current[n + (r.reverse ? 1 : -1)];
            return i && (r.to = i.springs), r;
        } }, u) : (s.start = function (e) { var t = []; return (0, m.S6)(s.current, (function (n, r) { var i = m.is.fun(e) ? e(r, n) : e, a = s.current[r + (o ? 1 : -1)]; a ? t.push(n.start(k({}, i, { to: a.springs }))) : t.push(n.start(k({}, i))); })), t; }, u[0]); }
        function $e(e, t, n) { var r = arguments, i = m.is.fun(t) && t, o = i ? i() : t, a = o.reset, u = o.sort, s = o.trail, l = void 0 === s ? 0 : s, c = o.expires, f = void 0 === c || c, d = o.exitBeforeEnter, p = void 0 !== d && d, h = o.onDestroyed, v = o.ref, g = o.config, b = (0, y.useMemo)((function () { return i || 3 == r.length ? ze() : void 0; }), []), w = (0, m.qo)(e), x = [], E = (0, y.useRef)(null), S = a ? null : E.current; (0, m.LI)((function () { E.current = x; })), (0, m.tf)((function () { return (0, m.S6)(x, (function (e) { null == b || b.add(e.ctrl), e.ctrl.ref = b; })), function () { (0, m.S6)(E.current, (function (e) { e.expired && clearTimeout(e.expirationId), A(e.ctrl, b), e.ctrl.stop(!0); })); }; })); var O = function (e, t, n) { var r = t.key, i = t.keys, o = void 0 === i ? r : i; if (null === o) {
            var a = new Set;
            return e.map((function (e) { var t = n && n.find((function (t) { return t.item === e && t.phase !== Ze.LEAVE && !a.has(t); })); return t ? (a.add(t), t.key) : Ge++; }));
        } return m.is.und(o) ? e : m.is.fun(o) ? e.map(o) : (0, m.qo)(o); }(w, i ? i() : t, S), N = a && E.current || []; (0, m.LI)((function () { return (0, m.S6)(N, (function (e) { var t = e.ctrl, n = e.item, r = e.key; A(t, b), _(h, n, r); })); })); var C = []; if (S && (0, m.S6)(S, (function (e, t) { e.expired ? (clearTimeout(e.expirationId), N.push(e)) : ~(t = C[t] = O.indexOf(e.key)) && (x[t] = e); })), (0, m.S6)(w, (function (e, t) { x[t] || (x[t] = { key: O[t], item: e, phase: Ze.MOUNT, ctrl: new Ne }, x[t].ctrl.item = e); })), C.length) {
            var j = -1, P = (i ? i() : t).leave;
            (0, m.S6)(C, (function (e, t) { var n = S[t]; ~e ? (j = x.indexOf(n), x[j] = k({}, n, { item: w[e] })) : P && x.splice(++j, 0, n); }));
        } m.is.fun(u) && x.sort((function (e, t) { return u(e.item, t.item); })); var R = -l, L = (0, m.NW)(), F = T(t), V = new Map, q = (0, y.useRef)(new Map), U = (0, y.useRef)(!1); (0, m.S6)(x, (function (e, n) { var r, o, a = e.key, u = e.phase, s = i ? i() : t, c = _(s.delay || 0, a); if (u == Ze.MOUNT)
            r = s.enter, o = Ze.ENTER;
        else {
            var d = O.indexOf(a) < 0;
            if (u != Ze.LEAVE)
                if (d)
                    r = s.leave, o = Ze.LEAVE;
                else {
                    if (!(r = s.update))
                        return;
                    o = Ze.UPDATE;
                }
            else {
                if (d)
                    return;
                r = s.enter, o = Ze.ENTER;
            }
        } if (r = _(r, e.item, n), !(r = m.is.obj(r) ? I(r) : { to: r }).config) {
            var h = g || F.config;
            r.config = _(h, e.item, n, o);
        } var y = k({}, F, { delay: c + (R += l), ref: v, immediate: s.immediate, reset: !1 }, r); if (o == Ze.ENTER && m.is.und(y.from)) {
            var b = i ? i() : t, w = m.is.und(b.initial) || S ? b.from : b.initial;
            y.from = _(w, e.item, n);
        } var x = y.onResolve; y.onResolve = function (e) { _(x, e); var t = E.current, n = t.find((function (e) { return e.key === a; })); if (n && (!e.cancelled || n.phase == Ze.UPDATE) && n.ctrl.idle) {
            var r = t.every((function (e) { return e.ctrl.idle; }));
            if (n.phase == Ze.LEAVE) {
                var i = _(f, n.item);
                if (!1 !== i) {
                    var o = !0 === i ? 0 : i;
                    if (n.expired = !0, !r && o > 0)
                        return void (o <= 2147483647 && (n.expirationId = setTimeout(L, o)));
                }
            }
            r && t.some((function (e) { return e.expired; })) && (q.current.delete(n), p && (U.current = !0), L());
        } }; var N = Pe(e.ctrl, y); o === Ze.LEAVE && p ? q.current.set(e, { phase: o, springs: N, payload: y }) : V.set(e, { phase: o, springs: N, payload: y }); })); var z = (0, y.useContext)(qe), Q = (0, m.zH)(z), B = z !== Q && D(z); (0, m.LI)((function () { B && (0, m.S6)(x, (function (e) { e.ctrl.start({ default: z }); })); }), [z]), (0, m.S6)(V, (function (e, t) { if (q.current.size) {
            var n = x.findIndex((function (e) { return e.key === t.key; }));
            x.splice(n, 1);
        } })), (0, m.LI)((function () { (0, m.S6)(q.current.size ? q.current : V, (function (e, t) { var n = e.phase, r = e.payload, i = t.ctrl; t.phase = n, null == b || b.add(i), B && n == Ze.ENTER && i.start({ default: z }), r && (M(i, r.ref), !i.ref && !b || U.current ? (i.start(r), U.current && (U.current = !1)) : i.update(r)); })); }), a ? void 0 : n); var Z = function (e) { return y.createElement(y.Fragment, null, x.map((function (t, n) { var r = (V.get(t) || t.ctrl).springs, i = e(k({}, r), t.item, t, n); return i && i.type ? y.createElement(i.type, k({}, i.props, { key: m.is.str(t.key) || m.is.num(t.key) ? t.key : t.ctrl.id, ref: i.ref })) : i; }))); }; return b ? [Z, b] : Z; }
        !function (e) { e.MOUNT = "mount", e.ENTER = "enter", e.UPDATE = "update", e.LEAVE = "leave"; }(Ze || (Ze = {}));
        var Ge = 1;
        var Ye = ["children"];
        function Je(e) { return (0, e.children)(Be(Ae(e, Ye))); }
        var Xe = ["items", "children"];
        function et(e) { var t = e.items, n = e.children, r = Ae(e, Xe), i = Ke(t.length, r); return t.map((function (e, t) { var r = n(e, t); return m.is.fun(r) ? r(i[t]) : r; })); }
        var tt = ["items", "children"];
        function nt(e) { var t = e.items, n = e.children; return $e(t, Ae(e, tt))(n); }
        var rt = function (e) { (0, s.Z)(n, e); var t = (0, l.Z)(n); function n(e, o) { var a; (0, h.Z)(this, n), (a = t.call(this)).key = void 0, a.idle = !0, a.calc = void 0, a._active = new Set, a.source = e, a.calc = m.mD.apply(void 0, (0, i.Z)(o)); var u = a._get(), s = (0, g.sb)(u); return (0, g.f3)((0, r.Z)(a), s.create(u)), a; } return (0, p.Z)(n, [{ key: "advance", value: function (e) { var t = this._get(), n = this.get(); (0, m.Xy)(t, n) || ((0, g.ys)(this).setValue(t), this._onChange(t, this.idle)), !this.idle && ot(this._active) && at(this); } }, { key: "_get", value: function () { var e = m.is.arr(this.source) ? this.source.map(m.je) : (0, m.qo)((0, m.je)(this.source)); return this.calc.apply(this, (0, i.Z)(e)); } }, { key: "_start", value: function () { var e = this; this.idle && !ot(this._active) && (this.idle = !1, (0, m.S6)((0, g.He)(this), (function (e) { e.done = !1; })), m.OH.skipAnimation ? (m.Wn.batchedUpdates((function () { return e.advance(); })), at(this)) : m.fT.start(this)); } }, { key: "_attach", value: function () { var e = this, t = 1; (0, m.S6)((0, m.qo)(this.source), (function (n) { (0, m.j$)(n) && (0, m.UI)(n, e), ue(n) && (n.idle || e._active.add(n), t = Math.max(t, n.priority + 1)); })), this.priority = t, this._start(); } }, { key: "_detach", value: function () { var e = this; (0, m.S6)((0, m.qo)(this.source), (function (t) { (0, m.j$)(t) && (0, m.iL)(t, e); })), this._active.clear(), at(this); } }, { key: "eventObserved", value: function (e) { "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = (0, m.qo)(this.source).reduce((function (e, t) { return Math.max(e, (ue(t) ? t.priority : 0) + 1); }), 0)); } }]), n; }(le);
        function it(e) { return !1 !== e.idle; }
        function ot(e) { return !e.size || Array.from(e).every(it); }
        function at(e) { e.idle || (e.idle = !0, (0, m.S6)((0, g.He)(e), (function (e) { e.done = !0; })), (0, m.k0)(e, { type: "idle", parent: e })); }
        var ut = function (e) { for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]; return new rt(e, n); }, st = function (e) { for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]; return (0, m.LW)(), new rt(e, n); };
        m.OH.assign({ createStringInterpolator: m.qS, to: function (e, t) { return new rt(e, t); } });
        var lt = m.fT.advance;
    }, 1315: function (e, t, n) {
        "use strict";
        n.d(t, { B0: function () { return Se; }, OH: function () { return z; }, UI: function () { return Ne; }, k0: function () { return _e; }, O9: function () { return J; }, mD: function () { return ye; }, qS: function () { return Ve; }, dE: function () { return N; }, ZR: function () { return Ze; }, LW: function () { return Qe; }, S6: function () { return j; }, rU: function () { return P; }, yl: function () { return R; }, bl: function () { return A; }, fT: function () { return H; }, Ll: function () { return ke; }, je: function () { return Ee; }, j$: function () { return xe; }, is: function () { return C; }, Df: function () { return We; }, Xy: function () { return T; }, ZT: function () { return O; }, Wn: function () { return s; }, iL: function () { return Ce; }, qo: function () { return I; }, NW: function () { return $e; }, LI: function () { return He; }, Pr: function () { return Ge; }, tf: function () { return Ye; }, zH: function () { return Xe; }, JZ: function () { return et; } });
        var r = n(9439), i = n(3144), o = n(5671), a = n(3433), u = k(), s = function (e) { return b(e, u); }, l = k();
        s.write = function (e) { return b(e, l); };
        var c = k();
        s.onStart = function (e) { return b(e, c); };
        var f = k();
        s.onFrame = function (e) { return b(e, f); };
        var d = k();
        s.onFinish = function (e) { return b(e, d); };
        var p = [];
        s.setTimeout = function (e, t) { var n = s.now() + t, r = { time: n, handler: e, cancel: function e() { var t = p.findIndex((function (t) { return t.cancel == e; })); ~t && p.splice(t, 1), y -= ~t ? 1 : 0; } }; return p.splice(h(n), 0, r), y += 1, w(), r; };
        var h = function (e) { return ~(~p.findIndex((function (t) { return t.time > e; })) || ~p.length); };
        s.cancel = function (e) { c.delete(e), f.delete(e), d.delete(e), u.delete(e), l.delete(e); }, s.sync = function (e) { g = !0, s.batchedUpdates(e), g = !1; }, s.throttle = function (e) { var t; function n() { try {
            e.apply(void 0, (0, a.Z)(t));
        }
        finally {
            t = null;
        } } function r() { for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++)
            r[i] = arguments[i]; t = r, s.onStart(n); } return r.handler = e, r.cancel = function () { c.delete(n), t = null; }, r; };
        var v = "undefined" != typeof window ? window.requestAnimationFrame : function () { };
        s.use = function (e) { return v = e; }, s.now = "undefined" != typeof performance ? function () { return performance.now(); } : Date.now, s.batchedUpdates = function (e) { return e(); }, s.catch = console.error, s.frameLoop = "always", s.advance = function () { "demand" !== s.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : E(); };
        var m = -1, y = 0, g = !1;
        function b(e, t) { g ? (t.delete(e), e(0)) : (t.add(e), w()); }
        function w() { m < 0 && (m = 0, "demand" !== s.frameLoop && v(x)); }
        function x() { ~m && (v(x), s.batchedUpdates(E)); }
        function E() { var e = m; m = s.now(); var t = h(m); t && (_(p.splice(0, t), (function (e) { return e.handler(); })), y -= t), y ? (c.flush(), u.flush(e ? Math.min(64, m - e) : 16.667), f.flush(), l.flush(), d.flush()) : m = -1; }
        function k() { var e = new Set, t = e; return { add: function (n) { y += t != e || e.has(n) ? 0 : 1, e.add(n); }, delete: function (n) { return y -= t == e && e.has(n) ? 1 : 0, e.delete(n); }, flush: function (n) { t.size && (e = new Set, y -= t.size, _(t, (function (t) { return t(n) && e.add(t); })), y += e.size, t = e); } }; }
        function _(e, t) { e.forEach((function (e) { try {
            t(e);
        }
        catch (n) {
            s.catch(n);
        } })); }
        var S = n(2791);
        function O() { }
        var N = function (e, t, n) { return Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }); }, C = { arr: Array.isArray, obj: function (e) { return !!e && "Object" === e.constructor.name; }, fun: function (e) { return "function" === typeof e; }, str: function (e) { return "string" === typeof e; }, num: function (e) { return "number" === typeof e; }, und: function (e) { return void 0 === e; } };
        function T(e, t) { if (C.arr(e)) {
            if (!C.arr(t) || e.length !== t.length)
                return !1;
            for (var n = 0; n < e.length; n++)
                if (e[n] !== t[n])
                    return !1;
            return !0;
        } return e === t; }
        var j = function (e, t) { return e.forEach(t); };
        function P(e, t, n) { if (C.arr(e))
            for (var r = 0; r < e.length; r++)
                t.call(n, e[r], "".concat(r));
        else
            for (var i in e)
                e.hasOwnProperty(i) && t.call(n, e[i], i); }
        var I = function (e) { return C.und(e) ? [] : C.arr(e) ? e : [e]; };
        function R(e, t) { if (e.size) {
            var n = Array.from(e);
            e.clear(), j(n, t);
        } }
        var D, L, A = function (e) { for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r]; return R(e, (function (e) { return e.apply(void 0, n); })); }, M = function () { return "undefined" === typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent); }, F = null, V = !1, q = O, U = function (e) { e.to && (L = e.to), e.now && (s.now = e.now), void 0 !== e.colors && (F = e.colors), null != e.skipAnimation && (V = e.skipAnimation), e.createStringInterpolator && (D = e.createStringInterpolator), e.requestAnimationFrame && s.use(e.requestAnimationFrame), e.batchedUpdates && (s.batchedUpdates = e.batchedUpdates), e.willAdvance && (q = e.willAdvance), e.frameLoop && (s.frameLoop = e.frameLoop); }, z = Object.freeze({ __proto__: null, get createStringInterpolator() { return D; }, get to() { return L; }, get colors() { return F; }, get skipAnimation() { return V; }, get willAdvance() { return q; }, assign: U }), Q = new Set, B = [], Z = [], W = 0, H = { get idle() { return !Q.size && !B.length; }, start: function (e) { W > e.priority ? (Q.add(e), s.onStart(K)) : ($(e), s(Y)); }, advance: Y, sort: function (e) { if (W)
                s.onFrame((function () { return H.sort(e); }));
            else {
                var t = B.indexOf(e);
                ~t && (B.splice(t, 1), G(e));
            } }, clear: function () { B = [], Q.clear(); } };
        function K() { Q.forEach($), Q.clear(), s(Y); }
        function $(e) { B.includes(e) || G(e); }
        function G(e) { B.splice(function (e, t) { var n = e.findIndex(t); return n < 0 ? e.length : n; }(B, (function (t) { return t.priority > e.priority; })), 0, e); }
        function Y(e) { for (var t = Z, n = 0; n < B.length; n++) {
            var r = B[n];
            W = r.priority, r.idle || (q(r), r.advance(e), r.idle || t.push(r));
        } return W = 0, (Z = B).length = 0, (B = t).length > 0; }
        var J = { transparent: 0, aliceblue: 4042850303, antiquewhite: 4209760255, aqua: 16777215, aquamarine: 2147472639, azure: 4043309055, beige: 4126530815, bisque: 4293182719, black: 255, blanchedalmond: 4293643775, blue: 65535, blueviolet: 2318131967, brown: 2771004159, burlywood: 3736635391, burntsienna: 3934150143, cadetblue: 1604231423, chartreuse: 2147418367, chocolate: 3530104575, coral: 4286533887, cornflowerblue: 1687547391, cornsilk: 4294499583, crimson: 3692313855, cyan: 16777215, darkblue: 35839, darkcyan: 9145343, darkgoldenrod: 3095792639, darkgray: 2846468607, darkgreen: 6553855, darkgrey: 2846468607, darkkhaki: 3182914559, darkmagenta: 2332068863, darkolivegreen: 1433087999, darkorange: 4287365375, darkorchid: 2570243327, darkred: 2332033279, darksalmon: 3918953215, darkseagreen: 2411499519, darkslateblue: 1211993087, darkslategray: 793726975, darkslategrey: 793726975, darkturquoise: 13554175, darkviolet: 2483082239, deeppink: 4279538687, deepskyblue: 12582911, dimgray: 1768516095, dimgrey: 1768516095, dodgerblue: 512819199, firebrick: 2988581631, floralwhite: 4294635775, forestgreen: 579543807, fuchsia: 4278255615, gainsboro: 3705462015, ghostwhite: 4177068031, gold: 4292280575, goldenrod: 3668254975, gray: 2155905279, green: 8388863, greenyellow: 2919182335, grey: 2155905279, honeydew: 4043305215, hotpink: 4285117695, indianred: 3445382399, indigo: 1258324735, ivory: 4294963455, khaki: 4041641215, lavender: 3873897215, lavenderblush: 4293981695, lawngreen: 2096890111, lemonchiffon: 4294626815, lightblue: 2916673279, lightcoral: 4034953471, lightcyan: 3774873599, lightgoldenrodyellow: 4210742015, lightgray: 3553874943, lightgreen: 2431553791, lightgrey: 3553874943, lightpink: 4290167295, lightsalmon: 4288707327, lightseagreen: 548580095, lightskyblue: 2278488831, lightslategray: 2005441023, lightslategrey: 2005441023, lightsteelblue: 2965692159, lightyellow: 4294959359, lime: 16711935, limegreen: 852308735, linen: 4210091775, magenta: 4278255615, maroon: 2147483903, mediumaquamarine: 1724754687, mediumblue: 52735, mediumorchid: 3126187007, mediumpurple: 2473647103, mediumseagreen: 1018393087, mediumslateblue: 2070474495, mediumspringgreen: 16423679, mediumturquoise: 1221709055, mediumvioletred: 3340076543, midnightblue: 421097727, mintcream: 4127193855, mistyrose: 4293190143, moccasin: 4293178879, navajowhite: 4292783615, navy: 33023, oldlace: 4260751103, olive: 2155872511, olivedrab: 1804477439, orange: 4289003775, orangered: 4282712319, orchid: 3664828159, palegoldenrod: 4008225535, palegreen: 2566625535, paleturquoise: 2951671551, palevioletred: 3681588223, papayawhip: 4293907967, peachpuff: 4292524543, peru: 3448061951, pink: 4290825215, plum: 3718307327, powderblue: 2967529215, purple: 2147516671, rebeccapurple: 1714657791, red: 4278190335, rosybrown: 3163525119, royalblue: 1097458175, saddlebrown: 2336560127, salmon: 4202722047, sandybrown: 4104413439, seagreen: 780883967, seashell: 4294307583, sienna: 2689740287, silver: 3233857791, skyblue: 2278484991, slateblue: 1784335871, slategray: 1887473919, slategrey: 1887473919, snow: 4294638335, springgreen: 16744447, steelblue: 1182971135, tan: 3535047935, teal: 8421631, thistle: 3636451583, tomato: 4284696575, turquoise: 1088475391, violet: 4001558271, wheat: 4125012991, white: 4294967295, whitesmoke: 4126537215, yellow: 4294902015, yellowgreen: 2597139199 }, X = "[-+]?\\d*\\.?\\d+", ee = X + "%";
        function te() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n]; return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)"; }
        var ne = new RegExp("rgb" + te(X, X, X)), re = new RegExp("rgba" + te(X, X, X, X)), ie = new RegExp("hsl" + te(X, ee, ee)), oe = new RegExp("hsla" + te(X, ee, ee, X)), ae = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, ue = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, se = /^#([0-9a-fA-F]{6})$/, le = /^#([0-9a-fA-F]{8})$/;
        function ce(e, t, n) { return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e; }
        function fe(e, t, n) { var r = n < .5 ? n * (1 + t) : n + t - n * t, i = 2 * n - r, o = ce(i, r, e + 1 / 3), a = ce(i, r, e), u = ce(i, r, e - 1 / 3); return Math.round(255 * o) << 24 | Math.round(255 * a) << 16 | Math.round(255 * u) << 8; }
        function de(e) { var t = parseInt(e, 10); return t < 0 ? 0 : t > 255 ? 255 : t; }
        function pe(e) { return (parseFloat(e) % 360 + 360) % 360 / 360; }
        function he(e) { var t = parseFloat(e); return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t); }
        function ve(e) { var t = parseFloat(e); return t < 0 ? 0 : t > 100 ? 1 : t / 100; }
        function me(e) { var t = function (e) { var t; return "number" === typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = se.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : F && void 0 !== F[e] ? F[e] : (t = ne.exec(e)) ? (de(t[1]) << 24 | de(t[2]) << 16 | de(t[3]) << 8 | 255) >>> 0 : (t = re.exec(e)) ? (de(t[1]) << 24 | de(t[2]) << 16 | de(t[3]) << 8 | he(t[4])) >>> 0 : (t = ae.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = le.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = ue.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = ie.exec(e)) ? (255 | fe(pe(t[1]), ve(t[2]), ve(t[3]))) >>> 0 : (t = oe.exec(e)) ? (fe(pe(t[1]), ve(t[2]), ve(t[3])) | he(t[4])) >>> 0 : null; }(e); if (null === t)
            return e; var n = (16711680 & (t = t || 0)) >>> 16, r = (65280 & t) >>> 8, i = (255 & t) / 255; return "rgba(".concat((4278190080 & t) >>> 24, ", ").concat(n, ", ").concat(r, ", ").concat(i, ")"); }
        var ye = function e(t, n, r) { if (C.fun(t))
            return t; if (C.arr(t))
            return e({ range: t, output: n, extrapolate: r }); if (C.str(t.output[0]))
            return D(t); var i = t, o = i.output, a = i.range || [0, 1], u = i.extrapolateLeft || i.extrapolate || "extend", s = i.extrapolateRight || i.extrapolate || "extend", l = i.easing || function (e) { return e; }; return function (e) { var t = function (e, t) { for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n)
            ; return n - 1; }(e, a); return function (e, t, n, r, i, o, a, u, s) { var l = s ? s(e) : e; if (l < t) {
            if ("identity" === a)
                return l;
            "clamp" === a && (l = t);
        } if (l > n) {
            if ("identity" === u)
                return l;
            "clamp" === u && (l = n);
        } if (r === i)
            return r; if (t === n)
            return e <= t ? r : i; t === -1 / 0 ? l = -l : n === 1 / 0 ? l -= t : l = (l - t) / (n - t); l = o(l), r === -1 / 0 ? l = -l : i === 1 / 0 ? l += r : l = l * (i - r) + r; return l; }(e, a[t], a[t + 1], o[t], o[t + 1], l, u, s, i.map); }; };
        function ge() { return ge = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        } return e; }, ge.apply(this, arguments); }
        var be = Symbol.for("FluidValue.get"), we = Symbol.for("FluidValue.observers"), xe = function (e) { return Boolean(e && e[be]); }, Ee = function (e) { return e && e[be] ? e[be]() : e; }, ke = function (e) { return e[we] || null; };
        function _e(e, t) { var n = e[we]; n && n.forEach((function (e) { !function (e, t) { e.eventObserved ? e.eventObserved(t) : e(t); }(e, t); })); }
        var Se = (0, i.Z)((function e(t) { if ((0, o.Z)(this, e), this[be] = void 0, this[we] = void 0, !t && !(t = this.get))
            throw Error("Unknown getter"); Oe(this, t); })), Oe = function (e, t) { return je(e, be, t); };
        function Ne(e, t) { if (e[be]) {
            var n = e[we];
            n || je(e, we, n = new Set), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
        } return t; }
        function Ce(e, t) { var n = e[we]; if (n && n.has(t)) {
            var r = n.size - 1;
            r ? n.delete(t) : e[we] = null, e.observerRemoved && e.observerRemoved(r, t);
        } }
        var Te, je = function (e, t, n) { return Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }); }, Pe = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, Ie = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, Re = new RegExp("(".concat(Pe.source, ")(%|[a-z]+)"), "i"), De = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, Le = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, Ae = function e(t) { var n = Me(t), i = (0, r.Z)(n, 2), o = i[0], a = i[1]; if (!o || M())
            return t; var u = window.getComputedStyle(document.documentElement).getPropertyValue(o); if (u)
            return u.trim(); if (a && a.startsWith("--")) {
            var s = window.getComputedStyle(document.documentElement).getPropertyValue(a);
            return s || t;
        } return a && Le.test(a) ? e(a) : a || t; }, Me = function (e) { var t = Le.exec(e); if (!t)
            return [,]; var n = (0, r.Z)(t, 3); return [n[1], n[2]]; }, Fe = function (e, t, n, r, i) { return "rgba(".concat(Math.round(t), ", ").concat(Math.round(n), ", ").concat(Math.round(r), ", ").concat(i, ")"); }, Ve = function (e) { Te || (Te = F ? new RegExp("(".concat(Object.keys(F).join("|"), ")(?!\\w)"), "g") : /^\b$/); var t = e.output.map((function (e) { return Ee(e).replace(Le, Ae).replace(Ie, me).replace(Te, me); })), n = t.map((function (e) { return e.match(Pe).map(Number); })), r = n[0].map((function (e, t) { return n.map((function (e) { if (!(t in e))
            throw Error('The arity of each "output" value must be equal'); return e[t]; })); })).map((function (t) { return ye(ge({}, e, { output: t })); })); return function (e) { var n, i = !Re.test(t[0]) && (null == (n = t.find((function (e) { return Re.test(e); }))) ? void 0 : n.replace(Pe, "")), o = 0; return t[0].replace(Pe, (function () { return "".concat(r[o++](e)).concat(i || ""); })).replace(De, Fe); }; }, qe = "react-spring: ", Ue = function (e) { var t = e, n = !1; if ("function" != typeof t)
            throw new TypeError("".concat(qe, "once requires a function parameter")); return function () { n || (t.apply(void 0, arguments), n = !0); }; }, ze = Ue(console.warn);
        function Qe() { ze("".concat(qe, 'The "interpolate" function is deprecated in v9 (use "to" instead)')); }
        var Be = Ue(console.warn);
        function Ze() { Be("".concat(qe, 'Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions')); }
        function We(e) { return C.str(e) && ("#" == e[0] || /\d/.test(e) || !M() && Le.test(e) || e in (F || {})); }
        var He = M() ? S.useEffect : S.useLayoutEffect, Ke = function () { var e = (0, S.useRef)(!1); return He((function () { return e.current = !0, function () { e.current = !1; }; }), []), e; };
        function $e() { var e = (0, S.useState)()[1], t = Ke(); return function () { t.current && e(Math.random()); }; }
        function Ge(e, t) { var n = (0, S.useState)((function () { return { inputs: t, result: e() }; })), i = (0, r.Z)(n, 1)[0], o = (0, S.useRef)(), a = o.current, u = a; u ? Boolean(t && u.inputs && function (e, t) { if (e.length !== t.length)
            return !1; for (var n = 0; n < e.length; n++)
            if (e[n] !== t[n])
                return !1; return !0; }(t, u.inputs)) || (u = { inputs: t, result: e() }) : u = i; return (0, S.useEffect)((function () { o.current = u, a == i && (i.inputs = i.result = void 0); }), [u]), u.result; }
        var Ye = function (e) { return (0, S.useEffect)(e, Je); }, Je = [];
        function Xe(e) { var t = (0, S.useRef)(); return (0, S.useEffect)((function () { t.current = e; })), t.current; }
        var et = function () { var e = (0, S.useState)(null), t = (0, r.Z)(e, 2), n = t[0], i = t[1]; return He((function () { var e = window.matchMedia("(prefers-reduced-motion)"), t = function (e) { i(e.matches), U({ skipAnimation: e.matches }); }; return t(e), e.addEventListener("change", t), function () { e.removeEventListener("change", t); }; }), []), n; };
    }, 4538: function () { }, 9543: function () { }, 4753: function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, { a: function () { return j; }, animated: function () { return j; } });
        var r = n(9439), i = n(3144), o = n(5671), a = n(136), u = n(7277), s = n(8867), l = {};
        for (var c in s)
            ["default", "a", "animated"].indexOf(c) < 0 && (l[c] = function (e) { return s[e]; }.bind(0, c));
        n.d(t, l);
        var f = n(4164), d = n(1315), p = n(6196);
        function h(e, t) { if (null == e)
            return {}; var n, r, i = {}, o = Object.keys(e); for (r = 0; r < o.length; r++)
            n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]); return i; }
        var v = ["style", "children", "scrollTop", "scrollLeft"], m = /^--/;
        function y(e, t) { return null == t || "boolean" === typeof t || "" === t ? "" : "number" !== typeof t || 0 === t || m.test(e) || b.hasOwnProperty(e) && b[e] ? ("" + t).trim() : t + "px"; }
        var g = {};
        var b = { animationIterationCount: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, w = ["Webkit", "Ms", "Moz", "O"];
        b = Object.keys(b).reduce((function (e, t) { return w.forEach((function (n) { return e[function (e, t) { return e + t.charAt(0).toUpperCase() + t.substring(1); }(n, t)] = e[t]; })), e; }), b);
        var x = ["x", "y", "z"], E = /^(matrix|translate|scale|rotate|skew)/, k = /^(translate)/, _ = /^(rotate|skew)/, S = function (e, t) { return d.is.num(e) && 0 !== e ? e + t : e; }, O = function e(t, n) { return d.is.arr(t) ? t.every((function (t) { return e(t, n); })) : d.is.num(t) ? t === n : parseFloat(t) === n; }, N = function (e) { (0, a.Z)(n, e); var t = (0, u.Z)(n); function n(e) { (0, o.Z)(this, n); var i = e.x, a = e.y, u = e.z, s = h(e, x), l = [], c = []; return (i || a || u) && (l.push([i || 0, a || 0, u || 0]), c.push((function (e) { return ["translate3d(".concat(e.map((function (e) { return S(e, "px"); })).join(","), ")"), O(e, 0)]; }))), (0, d.rU)(s, (function (e, t) { if ("transform" === t)
            l.push([e || ""]), c.push((function (e) { return [e, "" === e]; }));
        else if (E.test(t)) {
            if (delete s[t], d.is.und(e))
                return;
            var n = k.test(t) ? "px" : _.test(t) ? "deg" : "";
            l.push((0, d.qo)(e)), c.push("rotate3d" === t ? function (e) { var t = (0, r.Z)(e, 4), i = t[0], o = t[1], a = t[2], u = t[3]; return ["rotate3d(".concat(i, ",").concat(o, ",").concat(a, ",").concat(S(u, n), ")"), O(u, 0)]; } : function (e) { return ["".concat(t, "(").concat(e.map((function (e) { return S(e, n); })).join(","), ")"), O(e, t.startsWith("scale") ? 1 : 0)]; });
        } })), l.length && (s.transform = new C(l, c)), t.call(this, s); } return (0, i.Z)(n); }(p.rS), C = function (e) { (0, a.Z)(n, e); var t = (0, u.Z)(n); function n(e, r) { var i; return (0, o.Z)(this, n), (i = t.call(this))._value = null, i.inputs = e, i.transforms = r, i; } return (0, i.Z)(n, [{ key: "get", value: function () { return this._value || (this._value = this._get()); } }, { key: "_get", value: function () { var e = this, t = "", n = !0; return (0, d.S6)(this.inputs, (function (i, o) { var a = (0, d.je)(i[0]), u = e.transforms[o](d.is.arr(a) ? a : i.map(d.je)), s = (0, r.Z)(u, 2), l = s[0], c = s[1]; t += " " + l, n = n && c; })), n ? "none" : t; } }, { key: "observerAdded", value: function (e) { var t = this; 1 == e && (0, d.S6)(this.inputs, (function (e) { return (0, d.S6)(e, (function (e) { return (0, d.j$)(e) && (0, d.UI)(e, t); })); })); } }, { key: "observerRemoved", value: function (e) { var t = this; 0 == e && (0, d.S6)(this.inputs, (function (e) { return (0, d.S6)(e, (function (e) { return (0, d.j$)(e) && (0, d.iL)(e, t); })); })); } }, { key: "eventObserved", value: function (e) { "change" == e.type && (this._value = null), (0, d.k0)(this, e); } }]), n; }(d.B0), T = ["scrollTop", "scrollLeft"];
        s.Globals.assign({ batchedUpdates: f.unstable_batchedUpdates, createStringInterpolator: d.qS, colors: d.O9 });
        var j = (0, p.Ld)(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], { applyAnimatedValues: function (e, t) { if (!e.nodeType || !e.setAttribute)
                return !1; var n = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName, r = t, i = r.style, o = r.children, a = r.scrollTop, u = r.scrollLeft, s = h(r, v), l = Object.values(s), c = Object.keys(s).map((function (t) { return n || e.hasAttribute(t) ? t : g[t] || (g[t] = t.replace(/([A-Z])/g, (function (e) { return "-" + e.toLowerCase(); }))); })); for (var f in void 0 !== o && (e.textContent = o), i)
                if (i.hasOwnProperty(f)) {
                    var d = y(f, i[f]);
                    m.test(f) ? e.style.setProperty(f, d) : e.style[f] = d;
                } c.forEach((function (t, n) { e.setAttribute(t, l[n]); })), void 0 !== a && (e.scrollTop = a), void 0 !== u && (e.scrollLeft = u); }, createAnimatedStyle: function (e) { return new N(e); }, getComponentProps: function (e) { return h(e, T); } }).animated;
    }, 1694: function (e, t) { var n; !function () {
        "use strict";
        var r = {}.hasOwnProperty;
        function i() { for (var e = [], t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            if (n) {
                var o = typeof n;
                if ("string" === o || "number" === o)
                    e.push(n);
                else if (Array.isArray(n)) {
                    if (n.length) {
                        var a = i.apply(null, n);
                        a && e.push(a);
                    }
                }
                else if ("object" === o) {
                    if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]")) {
                        e.push(n.toString());
                        continue;
                    }
                    for (var u in n)
                        r.call(n, u) && n[u] && e.push(u);
                }
            }
        } return e.join(" "); }
        e.exports ? (i.default = i, e.exports = i) : void 0 === (n = function () { return i; }.apply(t, [])) || (e.exports = n);
    }(); }, 2176: function (e) {
        "use strict";
        e.exports = function (e, t, n, r, i, o, a, u) { if (!e) {
            var s;
            if (void 0 === t)
                s = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var l = [n, r, i, o, a, u], c = 0;
                (s = new Error(t.replace(/%s/g, (function () { return l[c++]; })))).name = "Invariant Violation";
            }
            throw s.framesToPop = 1, s;
        } };
    }, 1725: function (e) {
        "use strict";
        var t = Object.getOwnPropertySymbols, n = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
        e.exports = function () { try {
            if (!Object.assign)
                return !1;
            var e = new String("abc");
            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0])
                return !1;
            for (var t = {}, n = 0; n < 10; n++)
                t["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(t).map((function (e) { return t[e]; })).join(""))
                return !1;
            var r = {};
            return "abcdefghijklmnopqrst".split("").forEach((function (e) { r[e] = e; })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("");
        }
        catch (i) {
            return !1;
        } }() ? Object.assign : function (e, i) { for (var o, a, u = function (e) { if (null === e || void 0 === e)
            throw new TypeError("Object.assign cannot be called with null or undefined"); return Object(e); }(e), s = 1; s < arguments.length; s++) {
            for (var l in o = Object(arguments[s]))
                n.call(o, l) && (u[l] = o[l]);
            if (t) {
                a = t(o);
                for (var c = 0; c < a.length; c++)
                    r.call(o, a[c]) && (u[a[c]] = o[a[c]]);
            }
        } return u; };
    }, 3573: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function () { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n]; return (0, o.default)((function () { for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
            n[r] = arguments[r]; var i = null; return t.forEach((function (e) { if (null == i) {
            var t = e.apply(void 0, n);
            null != t && (i = t);
        } })), i; })); };
        var r, i = n(6054), o = (r = i) && r.__esModule ? r : { default: r };
        e.exports = t.default;
    }, 6054: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e) { function t(t, n, r, i, o, a) { var u = i || "<<anonymous>>", s = a || r; if (null == n[r])
            return t ? new Error("Required " + o + " `" + s + "` was not specified in `" + u + "`.") : null; for (var l = arguments.length, c = Array(l > 6 ? l - 6 : 0), f = 6; f < l; f++)
            c[f - 6] = arguments[f]; return e.apply(void 0, [n, r, u, o, s].concat(c)); } var n = t.bind(null, !1); return n.isRequired = t.bind(null, !0), n; }, e.exports = t.default;
    }, 888: function (e, t, n) {
        "use strict";
        var r = n(9047);
        function i() { }
        function o() { }
        o.resetWarningCache = i, e.exports = function () { function e(e, t, n, i, o, a) { if (a !== r) {
            var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw u.name = "Invariant Violation", u;
        } } function t() { return e; } e.isRequired = e; var n = { array: e, bigint: e, bool: e, func: e, number: e, object: e, string: e, symbol: e, any: e, arrayOf: t, element: e, elementType: e, instanceOf: t, node: e, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t, checkPropTypes: o, resetWarningCache: i }; return n.PropTypes = n, n; };
    }, 2007: function (e, t, n) { e.exports = n(888)(); }, 9047: function (e) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    }, 4463: function (e, t, n) {
        "use strict";
        var r = n(2791), i = n(1725), o = n(5296);
        function a(e) { for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
            t += "&args[]=" + encodeURIComponent(arguments[n]); return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."; }
        if (!r)
            throw Error(a(227));
        var u = new Set, s = {};
        function l(e, t) { c(e, t), c(e + "Capture", t); }
        function c(e, t) { for (s[e] = t, e = 0; e < t.length; e++)
            u.add(t[e]); }
        var f = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, p = Object.prototype.hasOwnProperty, h = {}, v = {};
        function m(e, t, n, r, i, o, a) { this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = a; }
        var y = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function (e) { y[e] = new m(e, 0, !1, e, null, !1, !1); })), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function (e) { var t = e[0]; y[t] = new m(t, 1, !1, e[1], null, !1, !1); })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function (e) { y[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1); })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (e) { y[e] = new m(e, 2, !1, e, null, !1, !1); })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function (e) { y[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1); })), ["checked", "multiple", "muted", "selected"].forEach((function (e) { y[e] = new m(e, 3, !0, e, null, !1, !1); })), ["capture", "download"].forEach((function (e) { y[e] = new m(e, 4, !1, e, null, !1, !1); })), ["cols", "rows", "size", "span"].forEach((function (e) { y[e] = new m(e, 6, !1, e, null, !1, !1); })), ["rowSpan", "start"].forEach((function (e) { y[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1); }));
        var g = /[\-:]([a-z])/g;
        function b(e) { return e[1].toUpperCase(); }
        function w(e, t, n, r) { var i = y.hasOwnProperty(t) ? y[t] : null; (null !== i ? 0 === i.type : !r && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (function (e, t, n, r) { if (null === t || "undefined" === typeof t || function (e, t, n, r) { if (null !== n && 0 === n.type)
            return !1; switch (typeof t) {
            case "function":
            case "symbol": return !0;
            case "boolean": return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
            default: return !1;
        } }(e, t, n, r))
            return !0; if (r)
            return !1; if (null !== n)
            switch (n.type) {
                case 3: return !t;
                case 4: return !1 === t;
                case 5: return isNaN(t);
                case 6: return isNaN(t) || 1 > t;
            } return !1; }(t, n, i, r) && (n = null), r || null === i ? function (e) { return !!p.call(v, e) || !p.call(h, e) && (d.test(e) ? v[e] = !0 : (h[e] = !0, !1)); }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = null === n ? 3 !== i.type && "" : n : (t = i.attributeName, r = i.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (i = i.type) || 4 === i && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n)))); }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function (e) { var t = e.replace(g, b); y[t] = new m(t, 1, !1, e, null, !1, !1); })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function (e) { var t = e.replace(g, b); y[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1); })), ["xml:base", "xml:lang", "xml:space"].forEach((function (e) { var t = e.replace(g, b); y[t] = new m(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1); })), ["tabIndex", "crossOrigin"].forEach((function (e) { y[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1); })), y.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function (e) { y[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0); }));
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, E = 60103, k = 60106, _ = 60107, S = 60108, O = 60114, N = 60109, C = 60110, T = 60112, j = 60113, P = 60120, I = 60115, R = 60116, D = 60121, L = 60128, A = 60129, M = 60130, F = 60131;
        if ("function" === typeof Symbol && Symbol.for) {
            var V = Symbol.for;
            E = V("react.element"), k = V("react.portal"), _ = V("react.fragment"), S = V("react.strict_mode"), O = V("react.profiler"), N = V("react.provider"), C = V("react.context"), T = V("react.forward_ref"), j = V("react.suspense"), P = V("react.suspense_list"), I = V("react.memo"), R = V("react.lazy"), D = V("react.block"), V("react.scope"), L = V("react.opaque.id"), A = V("react.debug_trace_mode"), M = V("react.offscreen"), F = V("react.legacy_hidden");
        }
        var q, U = "function" === typeof Symbol && Symbol.iterator;
        function z(e) { return null === e || "object" !== typeof e ? null : "function" === typeof (e = U && e[U] || e["@@iterator"]) ? e : null; }
        function Q(e) { if (void 0 === q)
            try {
                throw Error();
            }
            catch (n) {
                var t = n.stack.trim().match(/\n( *(at )?)/);
                q = t && t[1] || "";
            } return "\n" + q + e; }
        var B = !1;
        function Z(e, t) { if (!e || B)
            return ""; B = !0; var n = Error.prepareStackTrace; Error.prepareStackTrace = void 0; try {
            if (t)
                if (t = function () { throw Error(); }, Object.defineProperty(t.prototype, "props", { set: function () { throw Error(); } }), "object" === typeof Reflect && Reflect.construct) {
                    try {
                        Reflect.construct(t, []);
                    }
                    catch (s) {
                        var r = s;
                    }
                    Reflect.construct(e, [], t);
                }
                else {
                    try {
                        t.call();
                    }
                    catch (s) {
                        r = s;
                    }
                    e.call(t.prototype);
                }
            else {
                try {
                    throw Error();
                }
                catch (s) {
                    r = s;
                }
                e();
            }
        }
        catch (s) {
            if (s && r && "string" === typeof s.stack) {
                for (var i = s.stack.split("\n"), o = r.stack.split("\n"), a = i.length - 1, u = o.length - 1; 1 <= a && 0 <= u && i[a] !== o[u];)
                    u--;
                for (; 1 <= a && 0 <= u; a--, u--)
                    if (i[a] !== o[u]) {
                        if (1 !== a || 1 !== u)
                            do {
                                if (a--, 0 > --u || i[a] !== o[u])
                                    return "\n" + i[a].replace(" at new ", " at ");
                            } while (1 <= a && 0 <= u);
                        break;
                    }
            }
        }
        finally {
            B = !1, Error.prepareStackTrace = n;
        } return (e = e ? e.displayName || e.name : "") ? Q(e) : ""; }
        function W(e) { switch (e.tag) {
            case 5: return Q(e.type);
            case 16: return Q("Lazy");
            case 13: return Q("Suspense");
            case 19: return Q("SuspenseList");
            case 0:
            case 2:
            case 15: return e = Z(e.type, !1);
            case 11: return e = Z(e.type.render, !1);
            case 22: return e = Z(e.type._render, !1);
            case 1: return e = Z(e.type, !0);
            default: return "";
        } }
        function H(e) { if (null == e)
            return null; if ("function" === typeof e)
            return e.displayName || e.name || null; if ("string" === typeof e)
            return e; switch (e) {
            case _: return "Fragment";
            case k: return "Portal";
            case O: return "Profiler";
            case S: return "StrictMode";
            case j: return "Suspense";
            case P: return "SuspenseList";
        } if ("object" === typeof e)
            switch (e.$$typeof) {
                case C: return (e.displayName || "Context") + ".Consumer";
                case N: return (e._context.displayName || "Context") + ".Provider";
                case T:
                    var t = e.render;
                    return t = t.displayName || t.name || "", e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
                case I: return H(e.type);
                case D: return H(e._render);
                case R:
                    t = e._payload, e = e._init;
                    try {
                        return H(e(t));
                    }
                    catch (n) { }
            } return null; }
        function K(e) { switch (typeof e) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined": return e;
            default: return "";
        } }
        function $(e) { var t = e.type; return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t); }
        function G(e) { e._valueTracker || (e._valueTracker = function (e) { var t = $(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t]; if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
            var i = n.get, o = n.set;
            return Object.defineProperty(e, t, { configurable: !0, get: function () { return i.call(this); }, set: function (e) { r = "" + e, o.call(this, e); } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function () { return r; }, setValue: function (e) { r = "" + e; }, stopTracking: function () { e._valueTracker = null, delete e[t]; } };
        } }(e)); }
        function Y(e) { if (!e)
            return !1; var t = e._valueTracker; if (!t)
            return !0; var n = t.getValue(), r = ""; return e && (r = $(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0); }
        function J(e) { if ("undefined" === typeof (e = e || ("undefined" !== typeof document ? document : void 0)))
            return null; try {
            return e.activeElement || e.body;
        }
        catch (t) {
            return e.body;
        } }
        function X(e, t) { var n = t.checked; return i({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != n ? n : e._wrapperState.initialChecked }); }
        function ee(e, t) { var n = null == t.defaultValue ? "" : t.defaultValue, r = null != t.checked ? t.checked : t.defaultChecked; n = K(null != t.value ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value }; }
        function te(e, t) { null != (t = t.checked) && w(e, "checked", t, !1); }
        function ne(e, t) { te(e, t); var n = K(t.value), r = t.type; if (null != n)
            "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value"); t.hasOwnProperty("value") ? ie(e, t.type, n) : t.hasOwnProperty("defaultValue") && ie(e, t.type, K(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked); }
        function re(e, t, n) { if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value))
                return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
        } "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n); }
        function ie(e, t, n) { "number" === t && J(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n)); }
        function oe(e, t) { return e = i({ children: void 0 }, t), (t = function (e) { var t = ""; return r.Children.forEach(e, (function (e) { null != e && (t += e); })), t; }(t.children)) && (e.children = t), e; }
        function ae(e, t, n, r) { if (e = e.options, t) {
            t = {};
            for (var i = 0; i < n.length; i++)
                t["$" + n[i]] = !0;
            for (n = 0; n < e.length; n++)
                i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
        }
        else {
            for (n = "" + K(n), t = null, i = 0; i < e.length; i++) {
                if (e[i].value === n)
                    return e[i].selected = !0, void (r && (e[i].defaultSelected = !0));
                null !== t || e[i].disabled || (t = e[i]);
            }
            null !== t && (t.selected = !0);
        } }
        function ue(e, t) { if (null != t.dangerouslySetInnerHTML)
            throw Error(a(91)); return i({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }); }
        function se(e, t) { var n = t.value; if (null == n) {
            if (n = t.children, t = t.defaultValue, null != n) {
                if (null != t)
                    throw Error(a(92));
                if (Array.isArray(n)) {
                    if (!(1 >= n.length))
                        throw Error(a(93));
                    n = n[0];
                }
                t = n;
            }
            null == t && (t = ""), n = t;
        } e._wrapperState = { initialValue: K(n) }; }
        function le(e, t) { var n = K(t.value), r = K(t.defaultValue); null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r); }
        function ce(e) { var t = e.textContent; t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t); }
        var fe = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
        function de(e) { switch (e) {
            case "svg": return "http://www.w3.org/2000/svg";
            case "math": return "http://www.w3.org/1998/Math/MathML";
            default: return "http://www.w3.org/1999/xhtml";
        } }
        function pe(e, t) { return null == e || "http://www.w3.org/1999/xhtml" === e ? de(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e; }
        var he, ve, me = (ve = function (e, t) { if (e.namespaceURI !== fe.svg || "innerHTML" in e)
            e.innerHTML = t;
        else {
            for ((he = he || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = he.firstChild; e.firstChild;)
                e.removeChild(e.firstChild);
            for (; t.firstChild;)
                e.appendChild(t.firstChild);
        } }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (e, t, n, r) { MSApp.execUnsafeLocalFunction((function () { return ve(e, t); })); } : ve);
        function ye(e, t) { if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
                return void (n.nodeValue = t);
        } e.textContent = t; }
        var ge = { animationIterationCount: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, be = ["Webkit", "ms", "Moz", "O"];
        function we(e, t, n) { return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || ge.hasOwnProperty(e) && ge[e] ? ("" + t).trim() : t + "px"; }
        function xe(e, t) { for (var n in e = e.style, t)
            if (t.hasOwnProperty(n)) {
                var r = 0 === n.indexOf("--"), i = we(n, t[n], r);
                "float" === n && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
            } }
        Object.keys(ge).forEach((function (e) { be.forEach((function (t) { t = t + e.charAt(0).toUpperCase() + e.substring(1), ge[t] = ge[e]; })); }));
        var Ee = i({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
        function ke(e, t) { if (t) {
            if (Ee[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
                throw Error(a(137, e));
            if (null != t.dangerouslySetInnerHTML) {
                if (null != t.children)
                    throw Error(a(60));
                if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML))
                    throw Error(a(61));
            }
            if (null != t.style && "object" !== typeof t.style)
                throw Error(a(62));
        } }
        function _e(e, t) { if (-1 === e.indexOf("-"))
            return "string" === typeof t.is; switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph": return !1;
            default: return !0;
        } }
        function Se(e) { return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e; }
        var Oe = null, Ne = null, Ce = null;
        function Te(e) { if (e = ni(e)) {
            if ("function" !== typeof Oe)
                throw Error(a(280));
            var t = e.stateNode;
            t && (t = ii(t), Oe(e.stateNode, e.type, t));
        } }
        function je(e) { Ne ? Ce ? Ce.push(e) : Ce = [e] : Ne = e; }
        function Pe() { if (Ne) {
            var e = Ne, t = Ce;
            if (Ce = Ne = null, Te(e), t)
                for (e = 0; e < t.length; e++)
                    Te(t[e]);
        } }
        function Ie(e, t) { return e(t); }
        function Re(e, t, n, r, i) { return e(t, n, r, i); }
        function De() { }
        var Le = Ie, Ae = !1, Me = !1;
        function Fe() { null === Ne && null === Ce || (De(), Pe()); }
        function Ve(e, t) { var n = e.stateNode; if (null === n)
            return null; var r = ii(n); if (null === r)
            return null; n = r[t]; e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                break e;
            default: e = !1;
        } if (e)
            return null; if (n && "function" !== typeof n)
            throw Error(a(231, t, typeof n)); return n; }
        var qe = !1;
        if (f)
            try {
                var Ue = {};
                Object.defineProperty(Ue, "passive", { get: function () { qe = !0; } }), window.addEventListener("test", Ue, Ue), window.removeEventListener("test", Ue, Ue);
            }
            catch (ve) {
                qe = !1;
            }
        function ze(e, t, n, r, i, o, a, u, s) { var l = Array.prototype.slice.call(arguments, 3); try {
            t.apply(n, l);
        }
        catch (c) {
            this.onError(c);
        } }
        var Qe = !1, Be = null, Ze = !1, We = null, He = { onError: function (e) { Qe = !0, Be = e; } };
        function Ke(e, t, n, r, i, o, a, u, s) { Qe = !1, Be = null, ze.apply(He, arguments); }
        function $e(e) { var t = e, n = e; if (e.alternate)
            for (; t.return;)
                t = t.return;
        else {
            e = t;
            do {
                0 !== (1026 & (t = e).flags) && (n = t.return), e = t.return;
            } while (e);
        } return 3 === t.tag ? n : null; }
        function Ge(e) { if (13 === e.tag) {
            var t = e.memoizedState;
            if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t)
                return t.dehydrated;
        } return null; }
        function Ye(e) { if ($e(e) !== e)
            throw Error(a(188)); }
        function Je(e) { if (e = function (e) { var t = e.alternate; if (!t) {
            if (null === (t = $e(e)))
                throw Error(a(188));
            return t !== e ? null : e;
        } for (var n = e, r = t;;) {
            var i = n.return;
            if (null === i)
                break;
            var o = i.alternate;
            if (null === o) {
                if (null !== (r = i.return)) {
                    n = r;
                    continue;
                }
                break;
            }
            if (i.child === o.child) {
                for (o = i.child; o;) {
                    if (o === n)
                        return Ye(i), e;
                    if (o === r)
                        return Ye(i), t;
                    o = o.sibling;
                }
                throw Error(a(188));
            }
            if (n.return !== r.return)
                n = i, r = o;
            else {
                for (var u = !1, s = i.child; s;) {
                    if (s === n) {
                        u = !0, n = i, r = o;
                        break;
                    }
                    if (s === r) {
                        u = !0, r = i, n = o;
                        break;
                    }
                    s = s.sibling;
                }
                if (!u) {
                    for (s = o.child; s;) {
                        if (s === n) {
                            u = !0, n = o, r = i;
                            break;
                        }
                        if (s === r) {
                            u = !0, r = o, n = i;
                            break;
                        }
                        s = s.sibling;
                    }
                    if (!u)
                        throw Error(a(189));
                }
            }
            if (n.alternate !== r)
                throw Error(a(190));
        } if (3 !== n.tag)
            throw Error(a(188)); return n.stateNode.current === n ? e : t; }(e), !e)
            return null; for (var t = e;;) {
            if (5 === t.tag || 6 === t.tag)
                return t;
            if (t.child)
                t.child.return = t, t = t.child;
            else {
                if (t === e)
                    break;
                for (; !t.sibling;) {
                    if (!t.return || t.return === e)
                        return null;
                    t = t.return;
                }
                t.sibling.return = t.return, t = t.sibling;
            }
        } return null; }
        function Xe(e, t) { for (var n = e.alternate; null !== t;) {
            if (t === e || t === n)
                return !0;
            t = t.return;
        } return !1; }
        var et, tt, nt, rt, it = !1, ot = [], at = null, ut = null, st = null, lt = new Map, ct = new Map, ft = [], dt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
        function pt(e, t, n, r, i) { return { blockedOn: e, domEventName: t, eventSystemFlags: 16 | n, nativeEvent: i, targetContainers: [r] }; }
        function ht(e, t) { switch (e) {
            case "focusin":
            case "focusout":
                at = null;
                break;
            case "dragenter":
            case "dragleave":
                ut = null;
                break;
            case "mouseover":
            case "mouseout":
                st = null;
                break;
            case "pointerover":
            case "pointerout":
                lt.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture": ct.delete(t.pointerId);
        } }
        function vt(e, t, n, r, i, o) { return null === e || e.nativeEvent !== o ? (e = pt(t, n, r, i, o), null !== t && (null !== (t = ni(t)) && tt(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== i && -1 === t.indexOf(i) && t.push(i), e); }
        function mt(e) { var t = ti(e.target); if (null !== t) {
            var n = $e(t);
            if (null !== n)
                if (13 === (t = n.tag)) {
                    if (null !== (t = Ge(n)))
                        return e.blockedOn = t, void rt(e.lanePriority, (function () { o.unstable_runWithPriority(e.priority, (function () { nt(n); })); }));
                }
                else if (3 === t && n.stateNode.hydrate)
                    return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
        } e.blockedOn = null; }
        function yt(e) { if (null !== e.blockedOn)
            return !1; for (var t = e.targetContainers; 0 < t.length;) {
            var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
                return null !== (t = ni(n)) && tt(t), e.blockedOn = n, !1;
            t.shift();
        } return !0; }
        function gt(e, t, n) { yt(e) && n.delete(t); }
        function bt() { for (it = !1; 0 < ot.length;) {
            var e = ot[0];
            if (null !== e.blockedOn) {
                null !== (e = ni(e.blockedOn)) && et(e);
                break;
            }
            for (var t = e.targetContainers; 0 < t.length;) {
                var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                if (null !== n) {
                    e.blockedOn = n;
                    break;
                }
                t.shift();
            }
            null === e.blockedOn && ot.shift();
        } null !== at && yt(at) && (at = null), null !== ut && yt(ut) && (ut = null), null !== st && yt(st) && (st = null), lt.forEach(gt), ct.forEach(gt); }
        function wt(e, t) { e.blockedOn === t && (e.blockedOn = null, it || (it = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, bt))); }
        function xt(e) { function t(t) { return wt(t, e); } if (0 < ot.length) {
            wt(ot[0], e);
            for (var n = 1; n < ot.length; n++) {
                var r = ot[n];
                r.blockedOn === e && (r.blockedOn = null);
            }
        } for (null !== at && wt(at, e), null !== ut && wt(ut, e), null !== st && wt(st, e), lt.forEach(t), ct.forEach(t), n = 0; n < ft.length; n++)
            (r = ft[n]).blockedOn === e && (r.blockedOn = null); for (; 0 < ft.length && null === (n = ft[0]).blockedOn;)
            mt(n), null === n.blockedOn && ft.shift(); }
        function Et(e, t) { var n = {}; return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n; }
        var kt = { animationend: Et("Animation", "AnimationEnd"), animationiteration: Et("Animation", "AnimationIteration"), animationstart: Et("Animation", "AnimationStart"), transitionend: Et("Transition", "TransitionEnd") }, _t = {}, St = {};
        function Ot(e) { if (_t[e])
            return _t[e]; if (!kt[e])
            return e; var t, n = kt[e]; for (t in n)
            if (n.hasOwnProperty(t) && t in St)
                return _t[e] = n[t]; return e; }
        f && (St = document.createElement("div").style, "AnimationEvent" in window || (delete kt.animationend.animation, delete kt.animationiteration.animation, delete kt.animationstart.animation), "TransitionEvent" in window || delete kt.transitionend.transition);
        var Nt = Ot("animationend"), Ct = Ot("animationiteration"), Tt = Ot("animationstart"), jt = Ot("transitionend"), Pt = new Map, It = new Map, Rt = ["abort", "abort", Nt, "animationEnd", Ct, "animationIteration", Tt, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", jt, "transitionEnd", "waiting", "waiting"];
        function Dt(e, t) { for (var n = 0; n < e.length; n += 2) {
            var r = e[n], i = e[n + 1];
            i = "on" + (i[0].toUpperCase() + i.slice(1)), It.set(r, t), Pt.set(r, i), l(i, [r]);
        } }
        (0, o.unstable_now)();
        var Lt = 8;
        function At(e) { if (0 !== (1 & e))
            return Lt = 15, 1; if (0 !== (2 & e))
            return Lt = 14, 2; if (0 !== (4 & e))
            return Lt = 13, 4; var t = 24 & e; return 0 !== t ? (Lt = 12, t) : 0 !== (32 & e) ? (Lt = 11, 32) : 0 !== (t = 192 & e) ? (Lt = 10, t) : 0 !== (256 & e) ? (Lt = 9, 256) : 0 !== (t = 3584 & e) ? (Lt = 8, t) : 0 !== (4096 & e) ? (Lt = 7, 4096) : 0 !== (t = 4186112 & e) ? (Lt = 6, t) : 0 !== (t = 62914560 & e) ? (Lt = 5, t) : 67108864 & e ? (Lt = 4, 67108864) : 0 !== (134217728 & e) ? (Lt = 3, 134217728) : 0 !== (t = 805306368 & e) ? (Lt = 2, t) : 0 !== (1073741824 & e) ? (Lt = 1, 1073741824) : (Lt = 8, e); }
        function Mt(e, t) { var n = e.pendingLanes; if (0 === n)
            return Lt = 0; var r = 0, i = 0, o = e.expiredLanes, a = e.suspendedLanes, u = e.pingedLanes; if (0 !== o)
            r = o, i = Lt = 15;
        else if (0 !== (o = 134217727 & n)) {
            var s = o & ~a;
            0 !== s ? (r = At(s), i = Lt) : 0 !== (u &= o) && (r = At(u), i = Lt);
        }
        else
            0 !== (o = n & ~a) ? (r = At(o), i = Lt) : 0 !== u && (r = At(u), i = Lt); if (0 === r)
            return 0; if (r = n & ((0 > (r = 31 - Qt(r)) ? 0 : 1 << r) << 1) - 1, 0 !== t && t !== r && 0 === (t & a)) {
            if (At(t), i <= Lt)
                return t;
            Lt = i;
        } if (0 !== (t = e.entangledLanes))
            for (e = e.entanglements, t &= r; 0 < t;)
                i = 1 << (n = 31 - Qt(t)), r |= e[n], t &= ~i; return r; }
        function Ft(e) { return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0; }
        function Vt(e, t) { switch (e) {
            case 15: return 1;
            case 14: return 2;
            case 12: return 0 === (e = qt(24 & ~t)) ? Vt(10, t) : e;
            case 10: return 0 === (e = qt(192 & ~t)) ? Vt(8, t) : e;
            case 8: return 0 === (e = qt(3584 & ~t)) && (0 === (e = qt(4186112 & ~t)) && (e = 512)), e;
            case 2: return 0 === (t = qt(805306368 & ~t)) && (t = 268435456), t;
        } throw Error(a(358, e)); }
        function qt(e) { return e & -e; }
        function Ut(e) { for (var t = [], n = 0; 31 > n; n++)
            t.push(e); return t; }
        function zt(e, t, n) { e.pendingLanes |= t; var r = t - 1; e.suspendedLanes &= r, e.pingedLanes &= r, (e = e.eventTimes)[t = 31 - Qt(t)] = n; }
        var Qt = Math.clz32 ? Math.clz32 : function (e) { return 0 === e ? 32 : 31 - (Bt(e) / Zt | 0) | 0; }, Bt = Math.log, Zt = Math.LN2;
        var Wt = o.unstable_UserBlockingPriority, Ht = o.unstable_runWithPriority, Kt = !0;
        function $t(e, t, n, r) { Ae || De(); var i = Yt, o = Ae; Ae = !0; try {
            Re(i, e, t, n, r);
        }
        finally {
            (Ae = o) || Fe();
        } }
        function Gt(e, t, n, r) { Ht(Wt, Yt.bind(null, e, t, n, r)); }
        function Yt(e, t, n, r) { var i; if (Kt)
            if ((i = 0 === (4 & t)) && 0 < ot.length && -1 < dt.indexOf(e))
                e = pt(null, e, t, n, r), ot.push(e);
            else {
                var o = Jt(e, t, n, r);
                if (null === o)
                    i && ht(e, r);
                else {
                    if (i) {
                        if (-1 < dt.indexOf(e))
                            return e = pt(o, e, t, n, r), void ot.push(e);
                        if (function (e, t, n, r, i) { switch (t) {
                            case "focusin": return at = vt(at, e, t, n, r, i), !0;
                            case "dragenter": return ut = vt(ut, e, t, n, r, i), !0;
                            case "mouseover": return st = vt(st, e, t, n, r, i), !0;
                            case "pointerover":
                                var o = i.pointerId;
                                return lt.set(o, vt(lt.get(o) || null, e, t, n, r, i)), !0;
                            case "gotpointercapture": return o = i.pointerId, ct.set(o, vt(ct.get(o) || null, e, t, n, r, i)), !0;
                        } return !1; }(o, e, t, n, r))
                            return;
                        ht(e, r);
                    }
                    Dr(e, t, r, null, n);
                }
            } }
        function Jt(e, t, n, r) { var i = Se(r); if (null !== (i = ti(i))) {
            var o = $e(i);
            if (null === o)
                i = null;
            else {
                var a = o.tag;
                if (13 === a) {
                    if (null !== (i = Ge(o)))
                        return i;
                    i = null;
                }
                else if (3 === a) {
                    if (o.stateNode.hydrate)
                        return 3 === o.tag ? o.stateNode.containerInfo : null;
                    i = null;
                }
                else
                    o !== i && (i = null);
            }
        } return Dr(e, t, r, i, n), null; }
        var Xt = null, en = null, tn = null;
        function nn() { if (tn)
            return tn; var e, t, n = en, r = n.length, i = "value" in Xt ? Xt.value : Xt.textContent, o = i.length; for (e = 0; e < r && n[e] === i[e]; e++)
            ; var a = r - e; for (t = 1; t <= a && n[r - t] === i[o - t]; t++)
            ; return tn = i.slice(e, 1 < t ? 1 - t : void 0); }
        function rn(e) { var t = e.keyCode; return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0; }
        function on() { return !0; }
        function an() { return !1; }
        function un(e) { function t(t, n, r, i, o) { for (var a in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = o, this.currentTarget = null, e)
            e.hasOwnProperty(a) && (t = e[a], this[a] = t ? t(i) : i[a]); return this.isDefaultPrevented = (null != i.defaultPrevented ? i.defaultPrevented : !1 === i.returnValue) ? on : an, this.isPropagationStopped = an, this; } return i(t.prototype, { preventDefault: function () { this.defaultPrevented = !0; var e = this.nativeEvent; e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = on); }, stopPropagation: function () { var e = this.nativeEvent; e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = on); }, persist: function () { }, isPersistent: on }), t; }
        var sn, ln, cn, fn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) { return e.timeStamp || Date.now(); }, defaultPrevented: 0, isTrusted: 0 }, dn = un(fn), pn = i({}, fn, { view: 0, detail: 0 }), hn = un(pn), vn = i({}, pn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Nn, button: 0, buttons: 0, relatedTarget: function (e) { return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget; }, movementX: function (e) { return "movementX" in e ? e.movementX : (e !== cn && (cn && "mousemove" === e.type ? (sn = e.screenX - cn.screenX, ln = e.screenY - cn.screenY) : ln = sn = 0, cn = e), sn); }, movementY: function (e) { return "movementY" in e ? e.movementY : ln; } }), mn = un(vn), yn = un(i({}, vn, { dataTransfer: 0 })), gn = un(i({}, pn, { relatedTarget: 0 })), bn = un(i({}, fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })), wn = i({}, fn, { clipboardData: function (e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData; } }), xn = un(wn), En = un(i({}, fn, { data: 0 })), kn = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, _n = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, Sn = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
        function On(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : !!(e = Sn[e]) && !!t[e]; }
        function Nn() { return On; }
        var Cn = i({}, pn, { key: function (e) { if (e.key) {
                var t = kn[e.key] || e.key;
                if ("Unidentified" !== t)
                    return t;
            } return "keypress" === e.type ? 13 === (e = rn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? _n[e.keyCode] || "Unidentified" : ""; }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Nn, charCode: function (e) { return "keypress" === e.type ? rn(e) : 0; }, keyCode: function (e) { return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0; }, which: function (e) { return "keypress" === e.type ? rn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0; } }), Tn = un(Cn), jn = un(i({}, vn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })), Pn = un(i({}, pn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Nn })), In = un(i({}, fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })), Rn = i({}, vn, { deltaX: function (e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0; }, deltaY: function (e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0; }, deltaZ: 0, deltaMode: 0 }), Dn = un(Rn), Ln = [9, 13, 27, 32], An = f && "CompositionEvent" in window, Mn = null;
        f && "documentMode" in document && (Mn = document.documentMode);
        var Fn = f && "TextEvent" in window && !Mn, Vn = f && (!An || Mn && 8 < Mn && 11 >= Mn), qn = String.fromCharCode(32), Un = !1;
        function zn(e, t) { switch (e) {
            case "keyup": return -1 !== Ln.indexOf(t.keyCode);
            case "keydown": return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout": return !0;
            default: return !1;
        } }
        function Qn(e) { return "object" === typeof (e = e.detail) && "data" in e ? e.data : null; }
        var Bn = !1;
        var Zn = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
        function Wn(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return "input" === t ? !!Zn[e.type] : "textarea" === t; }
        function Hn(e, t, n, r) { je(r), 0 < (t = Ar(t, "onChange")).length && (n = new dn("onChange", "change", null, n, r), e.push({ event: n, listeners: t })); }
        var Kn = null, $n = null;
        function Gn(e) { Cr(e, 0); }
        function Yn(e) { if (Y(ri(e)))
            return e; }
        function Jn(e, t) { if ("change" === e)
            return t; }
        var Xn = !1;
        if (f) {
            var er;
            if (f) {
                var tr = "oninput" in document;
                if (!tr) {
                    var nr = document.createElement("div");
                    nr.setAttribute("oninput", "return;"), tr = "function" === typeof nr.oninput;
                }
                er = tr;
            }
            else
                er = !1;
            Xn = er && (!document.documentMode || 9 < document.documentMode);
        }
        function rr() { Kn && (Kn.detachEvent("onpropertychange", ir), $n = Kn = null); }
        function ir(e) { if ("value" === e.propertyName && Yn($n)) {
            var t = [];
            if (Hn(t, $n, e, Se(e)), e = Gn, Ae)
                e(t);
            else {
                Ae = !0;
                try {
                    Ie(e, t);
                }
                finally {
                    Ae = !1, Fe();
                }
            }
        } }
        function or(e, t, n) { "focusin" === e ? (rr(), $n = n, (Kn = t).attachEvent("onpropertychange", ir)) : "focusout" === e && rr(); }
        function ar(e) { if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Yn($n); }
        function ur(e, t) { if ("click" === e)
            return Yn(t); }
        function sr(e, t) { if ("input" === e || "change" === e)
            return Yn(t); }
        var lr = "function" === typeof Object.is ? Object.is : function (e, t) { return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t; }, cr = Object.prototype.hasOwnProperty;
        function fr(e, t) { if (lr(e, t))
            return !0; if ("object" !== typeof e || null === e || "object" !== typeof t || null === t)
            return !1; var n = Object.keys(e), r = Object.keys(t); if (n.length !== r.length)
            return !1; for (r = 0; r < n.length; r++)
            if (!cr.call(t, n[r]) || !lr(e[n[r]], t[n[r]]))
                return !1; return !0; }
        function dr(e) { for (; e && e.firstChild;)
            e = e.firstChild; return e; }
        function pr(e, t) { var n, r = dr(e); for (e = 0; r;) {
            if (3 === r.nodeType) {
                if (n = e + r.textContent.length, e <= t && n >= t)
                    return { node: r, offset: t - e };
                e = n;
            }
            e: {
                for (; r;) {
                    if (r.nextSibling) {
                        r = r.nextSibling;
                        break e;
                    }
                    r = r.parentNode;
                }
                r = void 0;
            }
            r = dr(r);
        } }
        function hr(e, t) { return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? hr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))); }
        function vr() { for (var e = window, t = J(); t instanceof e.HTMLIFrameElement;) {
            try {
                var n = "string" === typeof t.contentWindow.location.href;
            }
            catch (r) {
                n = !1;
            }
            if (!n)
                break;
            t = J((e = t.contentWindow).document);
        } return t; }
        function mr(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable); }
        var yr = f && "documentMode" in document && 11 >= document.documentMode, gr = null, br = null, wr = null, xr = !1;
        function Er(e, t, n) { var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument; xr || null == gr || gr !== J(r) || ("selectionStart" in (r = gr) && mr(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : r = { anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }, wr && fr(wr, r) || (wr = r, 0 < (r = Ar(br, "onSelect")).length && (t = new dn("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = gr))); }
        Dt("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0), Dt("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), Dt(Rt, 2);
        for (var kr = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), _r = 0; _r < kr.length; _r++)
            It.set(kr[_r], 0);
        c("onMouseEnter", ["mouseout", "mouseover"]), c("onMouseLeave", ["mouseout", "mouseover"]), c("onPointerEnter", ["pointerout", "pointerover"]), c("onPointerLeave", ["pointerout", "pointerover"]), l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var Sr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Or = new Set("cancel close invalid load scroll toggle".split(" ").concat(Sr));
        function Nr(e, t, n) { var r = e.type || "unknown-event"; e.currentTarget = n, function (e, t, n, r, i, o, u, s, l) { if (Ke.apply(this, arguments), Qe) {
            if (!Qe)
                throw Error(a(198));
            var c = Be;
            Qe = !1, Be = null, Ze || (Ze = !0, We = c);
        } }(r, t, void 0, e), e.currentTarget = null; }
        function Cr(e, t) { t = 0 !== (4 & t); for (var n = 0; n < e.length; n++) {
            var r = e[n], i = r.event;
            r = r.listeners;
            e: {
                var o = void 0;
                if (t)
                    for (var a = r.length - 1; 0 <= a; a--) {
                        var u = r[a], s = u.instance, l = u.currentTarget;
                        if (u = u.listener, s !== o && i.isPropagationStopped())
                            break e;
                        Nr(i, u, l), o = s;
                    }
                else
                    for (a = 0; a < r.length; a++) {
                        if (s = (u = r[a]).instance, l = u.currentTarget, u = u.listener, s !== o && i.isPropagationStopped())
                            break e;
                        Nr(i, u, l), o = s;
                    }
            }
        } if (Ze)
            throw e = We, Ze = !1, We = null, e; }
        function Tr(e, t) { var n = oi(t), r = e + "__bubble"; n.has(r) || (Rr(t, e, 2, !1), n.add(r)); }
        var jr = "_reactListening" + Math.random().toString(36).slice(2);
        function Pr(e) { e[jr] || (e[jr] = !0, u.forEach((function (t) { Or.has(t) || Ir(t, !1, e, null), Ir(t, !0, e, null); }))); }
        function Ir(e, t, n, r) { var i = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0, o = n; if ("selectionchange" === e && 9 !== n.nodeType && (o = n.ownerDocument), null !== r && !t && Or.has(e)) {
            if ("scroll" !== e)
                return;
            i |= 2, o = r;
        } var a = oi(o), u = e + "__" + (t ? "capture" : "bubble"); a.has(u) || (t && (i |= 4), Rr(o, e, i, t), a.add(u)); }
        function Rr(e, t, n, r) { var i = It.get(t); switch (void 0 === i ? 2 : i) {
            case 0:
                i = $t;
                break;
            case 1:
                i = Gt;
                break;
            default: i = Yt;
        } n = i.bind(null, t, n, e), i = void 0, !qe || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (i = !0), r ? void 0 !== i ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : void 0 !== i ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1); }
        function Dr(e, t, n, r, i) { var o = r; if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
                if (null === r)
                    return;
                var a = r.tag;
                if (3 === a || 4 === a) {
                    var u = r.stateNode.containerInfo;
                    if (u === i || 8 === u.nodeType && u.parentNode === i)
                        break;
                    if (4 === a)
                        for (a = r.return; null !== a;) {
                            var s = a.tag;
                            if ((3 === s || 4 === s) && ((s = a.stateNode.containerInfo) === i || 8 === s.nodeType && s.parentNode === i))
                                return;
                            a = a.return;
                        }
                    for (; null !== u;) {
                        if (null === (a = ti(u)))
                            return;
                        if (5 === (s = a.tag) || 6 === s) {
                            r = o = a;
                            continue e;
                        }
                        u = u.parentNode;
                    }
                }
                r = r.return;
            } !function (e, t, n) { if (Me)
            return e(t, n); Me = !0; try {
            return Le(e, t, n);
        }
        finally {
            Me = !1, Fe();
        } }((function () { var r = o, i = Se(n), a = []; e: {
            var u = Pt.get(e);
            if (void 0 !== u) {
                var s = dn, l = e;
                switch (e) {
                    case "keypress": if (0 === rn(n))
                        break e;
                    case "keydown":
                    case "keyup":
                        s = Tn;
                        break;
                    case "focusin":
                        l = "focus", s = gn;
                        break;
                    case "focusout":
                        l = "blur", s = gn;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        s = gn;
                        break;
                    case "click": if (2 === n.button)
                        break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        s = mn;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        s = yn;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        s = Pn;
                        break;
                    case Nt:
                    case Ct:
                    case Tt:
                        s = bn;
                        break;
                    case jt:
                        s = In;
                        break;
                    case "scroll":
                        s = hn;
                        break;
                    case "wheel":
                        s = Dn;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        s = xn;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup": s = jn;
                }
                var c = 0 !== (4 & t), f = !c && "scroll" === e, d = c ? null !== u ? u + "Capture" : null : u;
                c = [];
                for (var p, h = r; null !== h;) {
                    var v = (p = h).stateNode;
                    if (5 === p.tag && null !== v && (p = v, null !== d && (null != (v = Ve(h, d)) && c.push(Lr(h, v, p)))), f)
                        break;
                    h = h.return;
                }
                0 < c.length && (u = new s(u, l, null, n, i), a.push({ event: u, listeners: c }));
            }
        } if (0 === (7 & t)) {
            if (s = "mouseout" === e || "pointerout" === e, (!(u = "mouseover" === e || "pointerover" === e) || 0 !== (16 & t) || !(l = n.relatedTarget || n.fromElement) || !ti(l) && !l[Xr]) && (s || u) && (u = i.window === i ? i : (u = i.ownerDocument) ? u.defaultView || u.parentWindow : window, s ? (s = r, null !== (l = (l = n.relatedTarget || n.toElement) ? ti(l) : null) && (l !== (f = $e(l)) || 5 !== l.tag && 6 !== l.tag) && (l = null)) : (s = null, l = r), s !== l)) {
                if (c = mn, v = "onMouseLeave", d = "onMouseEnter", h = "mouse", "pointerout" !== e && "pointerover" !== e || (c = jn, v = "onPointerLeave", d = "onPointerEnter", h = "pointer"), f = null == s ? u : ri(s), p = null == l ? u : ri(l), (u = new c(v, h + "leave", s, n, i)).target = f, u.relatedTarget = p, v = null, ti(i) === r && ((c = new c(d, h + "enter", l, n, i)).target = p, c.relatedTarget = f, v = c), f = v, s && l)
                    e: {
                        for (d = l, h = 0, p = c = s; p; p = Mr(p))
                            h++;
                        for (p = 0, v = d; v; v = Mr(v))
                            p++;
                        for (; 0 < h - p;)
                            c = Mr(c), h--;
                        for (; 0 < p - h;)
                            d = Mr(d), p--;
                        for (; h--;) {
                            if (c === d || null !== d && c === d.alternate)
                                break e;
                            c = Mr(c), d = Mr(d);
                        }
                        c = null;
                    }
                else
                    c = null;
                null !== s && Fr(a, u, s, c, !1), null !== l && null !== f && Fr(a, f, l, c, !0);
            }
            if ("select" === (s = (u = r ? ri(r) : window).nodeName && u.nodeName.toLowerCase()) || "input" === s && "file" === u.type)
                var m = Jn;
            else if (Wn(u))
                if (Xn)
                    m = sr;
                else {
                    m = ar;
                    var y = or;
                }
            else
                (s = u.nodeName) && "input" === s.toLowerCase() && ("checkbox" === u.type || "radio" === u.type) && (m = ur);
            switch (m && (m = m(e, r)) ? Hn(a, m, n, i) : (y && y(e, u, r), "focusout" === e && (y = u._wrapperState) && y.controlled && "number" === u.type && ie(u, "number", u.value)), y = r ? ri(r) : window, e) {
                case "focusin":
                    (Wn(y) || "true" === y.contentEditable) && (gr = y, br = r, wr = null);
                    break;
                case "focusout":
                    wr = br = gr = null;
                    break;
                case "mousedown":
                    xr = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    xr = !1, Er(a, n, i);
                    break;
                case "selectionchange": if (yr)
                    break;
                case "keydown":
                case "keyup": Er(a, n, i);
            }
            var g;
            if (An)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var b = "onCompositionStart";
                            break e;
                        case "compositionend":
                            b = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            b = "onCompositionUpdate";
                            break e;
                    }
                    b = void 0;
                }
            else
                Bn ? zn(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
            b && (Vn && "ko" !== n.locale && (Bn || "onCompositionStart" !== b ? "onCompositionEnd" === b && Bn && (g = nn()) : (en = "value" in (Xt = i) ? Xt.value : Xt.textContent, Bn = !0)), 0 < (y = Ar(r, b)).length && (b = new En(b, e, null, n, i), a.push({ event: b, listeners: y }), g ? b.data = g : null !== (g = Qn(n)) && (b.data = g))), (g = Fn ? function (e, t) { switch (e) {
                case "compositionend": return Qn(t);
                case "keypress": return 32 !== t.which ? null : (Un = !0, qn);
                case "textInput": return (e = t.data) === qn && Un ? null : e;
                default: return null;
            } }(e, n) : function (e, t) { if (Bn)
                return "compositionend" === e || !An && zn(e, t) ? (e = nn(), tn = en = Xt = null, Bn = !1, e) : null; switch (e) {
                case "paste":
                default: return null;
                case "keypress":
                    if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                        if (t.char && 1 < t.char.length)
                            return t.char;
                        if (t.which)
                            return String.fromCharCode(t.which);
                    }
                    return null;
                case "compositionend": return Vn && "ko" !== t.locale ? null : t.data;
            } }(e, n)) && (0 < (r = Ar(r, "onBeforeInput")).length && (i = new En("onBeforeInput", "beforeinput", null, n, i), a.push({ event: i, listeners: r }), i.data = g));
        } Cr(a, t); })); }
        function Lr(e, t, n) { return { instance: e, listener: t, currentTarget: n }; }
        function Ar(e, t) { for (var n = t + "Capture", r = []; null !== e;) {
            var i = e, o = i.stateNode;
            5 === i.tag && null !== o && (i = o, null != (o = Ve(e, n)) && r.unshift(Lr(e, o, i)), null != (o = Ve(e, t)) && r.push(Lr(e, o, i))), e = e.return;
        } return r; }
        function Mr(e) { if (null === e)
            return null; do {
            e = e.return;
        } while (e && 5 !== e.tag); return e || null; }
        function Fr(e, t, n, r, i) { for (var o = t._reactName, a = []; null !== n && n !== r;) {
            var u = n, s = u.alternate, l = u.stateNode;
            if (null !== s && s === r)
                break;
            5 === u.tag && null !== l && (u = l, i ? null != (s = Ve(n, o)) && a.unshift(Lr(n, s, u)) : i || null != (s = Ve(n, o)) && a.push(Lr(n, s, u))), n = n.return;
        } 0 !== a.length && e.push({ event: t, listeners: a }); }
        function Vr() { }
        var qr = null, Ur = null;
        function zr(e, t) { switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea": return !!t.autoFocus;
        } return !1; }
        function Qr(e, t) { return "textarea" === e || "option" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html; }
        var Br = "function" === typeof setTimeout ? setTimeout : void 0, Zr = "function" === typeof clearTimeout ? clearTimeout : void 0;
        function Wr(e) { 1 === e.nodeType ? e.textContent = "" : 9 === e.nodeType && (null != (e = e.body) && (e.textContent = "")); }
        function Hr(e) { for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t)
                break;
        } return e; }
        function Kr(e) { e = e.previousSibling; for (var t = 0; e;) {
            if (8 === e.nodeType) {
                var n = e.data;
                if ("$" === n || "$!" === n || "$?" === n) {
                    if (0 === t)
                        return e;
                    t--;
                }
                else
                    "/$" === n && t++;
            }
            e = e.previousSibling;
        } return null; }
        var $r = 0;
        var Gr = Math.random().toString(36).slice(2), Yr = "__reactFiber$" + Gr, Jr = "__reactProps$" + Gr, Xr = "__reactContainer$" + Gr, ei = "__reactEvents$" + Gr;
        function ti(e) { var t = e[Yr]; if (t)
            return t; for (var n = e.parentNode; n;) {
            if (t = n[Xr] || n[Yr]) {
                if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                    for (e = Kr(e); null !== e;) {
                        if (n = e[Yr])
                            return n;
                        e = Kr(e);
                    }
                return t;
            }
            n = (e = n).parentNode;
        } return null; }
        function ni(e) { return !(e = e[Yr] || e[Xr]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e; }
        function ri(e) { if (5 === e.tag || 6 === e.tag)
            return e.stateNode; throw Error(a(33)); }
        function ii(e) { return e[Jr] || null; }
        function oi(e) { var t = e[ei]; return void 0 === t && (t = e[ei] = new Set), t; }
        var ai = [], ui = -1;
        function si(e) { return { current: e }; }
        function li(e) { 0 > ui || (e.current = ai[ui], ai[ui] = null, ui--); }
        function ci(e, t) { ui++, ai[ui] = e.current, e.current = t; }
        var fi = {}, di = si(fi), pi = si(!1), hi = fi;
        function vi(e, t) { var n = e.type.contextTypes; if (!n)
            return fi; var r = e.stateNode; if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext; var i, o = {}; for (i in n)
            o[i] = t[i]; return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o; }
        function mi(e) { return null !== (e = e.childContextTypes) && void 0 !== e; }
        function yi() { li(pi), li(di); }
        function gi(e, t, n) { if (di.current !== fi)
            throw Error(a(168)); ci(di, t), ci(pi, n); }
        function bi(e, t, n) { var r = e.stateNode; if (e = t.childContextTypes, "function" !== typeof r.getChildContext)
            return n; for (var o in r = r.getChildContext())
            if (!(o in e))
                throw Error(a(108, H(t) || "Unknown", o)); return i({}, n, r); }
        function wi(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || fi, hi = di.current, ci(di, e), ci(pi, pi.current), !0; }
        function xi(e, t, n) { var r = e.stateNode; if (!r)
            throw Error(a(169)); n ? (e = bi(e, t, hi), r.__reactInternalMemoizedMergedChildContext = e, li(pi), li(di), ci(di, e)) : li(pi), ci(pi, n); }
        var Ei = null, ki = null, _i = o.unstable_runWithPriority, Si = o.unstable_scheduleCallback, Oi = o.unstable_cancelCallback, Ni = o.unstable_shouldYield, Ci = o.unstable_requestPaint, Ti = o.unstable_now, ji = o.unstable_getCurrentPriorityLevel, Pi = o.unstable_ImmediatePriority, Ii = o.unstable_UserBlockingPriority, Ri = o.unstable_NormalPriority, Di = o.unstable_LowPriority, Li = o.unstable_IdlePriority, Ai = {}, Mi = void 0 !== Ci ? Ci : function () { }, Fi = null, Vi = null, qi = !1, Ui = Ti(), zi = 1e4 > Ui ? Ti : function () { return Ti() - Ui; };
        function Qi() { switch (ji()) {
            case Pi: return 99;
            case Ii: return 98;
            case Ri: return 97;
            case Di: return 96;
            case Li: return 95;
            default: throw Error(a(332));
        } }
        function Bi(e) { switch (e) {
            case 99: return Pi;
            case 98: return Ii;
            case 97: return Ri;
            case 96: return Di;
            case 95: return Li;
            default: throw Error(a(332));
        } }
        function Zi(e, t) { return e = Bi(e), _i(e, t); }
        function Wi(e, t, n) { return e = Bi(e), Si(e, t, n); }
        function Hi() { if (null !== Vi) {
            var e = Vi;
            Vi = null, Oi(e);
        } Ki(); }
        function Ki() { if (!qi && null !== Fi) {
            qi = !0;
            var e = 0;
            try {
                var t = Fi;
                Zi(99, (function () { for (; e < t.length; e++) {
                    var n = t[e];
                    do {
                        n = n(!0);
                    } while (null !== n);
                } })), Fi = null;
            }
            catch (n) {
                throw null !== Fi && (Fi = Fi.slice(e + 1)), Si(Pi, Hi), n;
            }
            finally {
                qi = !1;
            }
        } }
        var $i = x.ReactCurrentBatchConfig;
        function Gi(e, t) { if (e && e.defaultProps) {
            for (var n in t = i({}, t), e = e.defaultProps)
                void 0 === t[n] && (t[n] = e[n]);
            return t;
        } return t; }
        var Yi = si(null), Ji = null, Xi = null, eo = null;
        function to() { eo = Xi = Ji = null; }
        function no(e) { var t = Yi.current; li(Yi), e.type._context._currentValue = t; }
        function ro(e, t) { for (; null !== e;) {
            var n = e.alternate;
            if ((e.childLanes & t) === t) {
                if (null === n || (n.childLanes & t) === t)
                    break;
                n.childLanes |= t;
            }
            else
                e.childLanes |= t, null !== n && (n.childLanes |= t);
            e = e.return;
        } }
        function io(e, t) { Ji = e, eo = Xi = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (Aa = !0), e.firstContext = null); }
        function oo(e, t) { if (eo !== e && !1 !== t && 0 !== t)
            if ("number" === typeof t && 1073741823 !== t || (eo = e, t = 1073741823), t = { context: e, observedBits: t, next: null }, null === Xi) {
                if (null === Ji)
                    throw Error(a(308));
                Xi = t, Ji.dependencies = { lanes: 0, firstContext: t, responders: null };
            }
            else
                Xi = Xi.next = t; return e._currentValue; }
        var ao = !1;
        function uo(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null }; }
        function so(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }); }
        function lo(e, t) { return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }; }
        function co(e, t) { if (null !== (e = e.updateQueue)) {
            var n = (e = e.shared).pending;
            null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
        } }
        function fo(e, t) { var n = e.updateQueue, r = e.alternate; if (null !== r && n === (r = r.updateQueue)) {
            var i = null, o = null;
            if (null !== (n = n.firstBaseUpdate)) {
                do {
                    var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
                    null === o ? i = o = a : o = o.next = a, n = n.next;
                } while (null !== n);
                null === o ? i = o = t : o = o.next = t;
            }
            else
                i = o = t;
            return n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, void (e.updateQueue = n);
        } null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t; }
        function po(e, t, n, r) { var o = e.updateQueue; ao = !1; var a = o.firstBaseUpdate, u = o.lastBaseUpdate, s = o.shared.pending; if (null !== s) {
            o.shared.pending = null;
            var l = s, c = l.next;
            l.next = null, null === u ? a = c : u.next = c, u = l;
            var f = e.alternate;
            if (null !== f) {
                var d = (f = f.updateQueue).lastBaseUpdate;
                d !== u && (null === d ? f.firstBaseUpdate = c : d.next = c, f.lastBaseUpdate = l);
            }
        } if (null !== a) {
            for (d = o.baseState, u = 0, f = c = l = null;;) {
                s = a.lane;
                var p = a.eventTime;
                if ((r & s) === s) {
                    null !== f && (f = f.next = { eventTime: p, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
                    e: {
                        var h = e, v = a;
                        switch (s = t, p = n, v.tag) {
                            case 1:
                                if ("function" === typeof (h = v.payload)) {
                                    d = h.call(p, d, s);
                                    break e;
                                }
                                d = h;
                                break e;
                            case 3: h.flags = -4097 & h.flags | 64;
                            case 0:
                                if (null === (s = "function" === typeof (h = v.payload) ? h.call(p, d, s) : h) || void 0 === s)
                                    break e;
                                d = i({}, d, s);
                                break e;
                            case 2: ao = !0;
                        }
                    }
                    null !== a.callback && (e.flags |= 32, null === (s = o.effects) ? o.effects = [a] : s.push(a));
                }
                else
                    p = { eventTime: p, lane: s, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, null === f ? (c = f = p, l = d) : f = f.next = p, u |= s;
                if (null === (a = a.next)) {
                    if (null === (s = o.shared.pending))
                        break;
                    a = s.next, s.next = null, o.lastBaseUpdate = s, o.shared.pending = null;
                }
            }
            null === f && (l = d), o.baseState = l, o.firstBaseUpdate = c, o.lastBaseUpdate = f, Uu |= u, e.lanes = u, e.memoizedState = d;
        } }
        function ho(e, t, n) { if (e = t.effects, t.effects = null, null !== e)
            for (t = 0; t < e.length; t++) {
                var r = e[t], i = r.callback;
                if (null !== i) {
                    if (r.callback = null, r = n, "function" !== typeof i)
                        throw Error(a(191, i));
                    i.call(r);
                }
            } }
        var vo = (new r.Component).refs;
        function mo(e, t, n, r) { n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : i({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n); }
        var yo = { isMounted: function (e) { return !!(e = e._reactInternals) && $e(e) === e; }, enqueueSetState: function (e, t, n) { e = e._reactInternals; var r = ds(), i = ps(e), o = lo(r, i); o.payload = t, void 0 !== n && null !== n && (o.callback = n), co(e, o), hs(e, i, r); }, enqueueReplaceState: function (e, t, n) { e = e._reactInternals; var r = ds(), i = ps(e), o = lo(r, i); o.tag = 1, o.payload = t, void 0 !== n && null !== n && (o.callback = n), co(e, o), hs(e, i, r); }, enqueueForceUpdate: function (e, t) { e = e._reactInternals; var n = ds(), r = ps(e), i = lo(n, r); i.tag = 2, void 0 !== t && null !== t && (i.callback = t), co(e, i), hs(e, r, n); } };
        function go(e, t, n, r, i, o, a) { return "function" === typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, o, a) : !t.prototype || !t.prototype.isPureReactComponent || (!fr(n, r) || !fr(i, o)); }
        function bo(e, t, n) { var r = !1, i = fi, o = t.contextType; return "object" === typeof o && null !== o ? o = oo(o) : (i = mi(t) ? hi : di.current, o = (r = null !== (r = t.contextTypes) && void 0 !== r) ? vi(e, i) : fi), t = new t(n, o), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = yo, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t; }
        function wo(e, t, n, r) { e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && yo.enqueueReplaceState(t, t.state, null); }
        function xo(e, t, n, r) { var i = e.stateNode; i.props = n, i.state = e.memoizedState, i.refs = vo, uo(e); var o = t.contextType; "object" === typeof o && null !== o ? i.context = oo(o) : (o = mi(t) ? hi : di.current, i.context = vi(e, o)), po(e, n, i, r), i.state = e.memoizedState, "function" === typeof (o = t.getDerivedStateFromProps) && (mo(e, t, o, n), i.state = e.memoizedState), "function" === typeof t.getDerivedStateFromProps || "function" === typeof i.getSnapshotBeforeUpdate || "function" !== typeof i.UNSAFE_componentWillMount && "function" !== typeof i.componentWillMount || (t = i.state, "function" === typeof i.componentWillMount && i.componentWillMount(), "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(), t !== i.state && yo.enqueueReplaceState(i, i.state, null), po(e, n, i, r), i.state = e.memoizedState), "function" === typeof i.componentDidMount && (e.flags |= 4); }
        var Eo = Array.isArray;
        function ko(e, t, n) { if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
            if (n._owner) {
                if (n = n._owner) {
                    if (1 !== n.tag)
                        throw Error(a(309));
                    var r = n.stateNode;
                }
                if (!r)
                    throw Error(a(147, e));
                var i = "" + e;
                return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === i ? t.ref : (t = function (e) { var t = r.refs; t === vo && (t = r.refs = {}), null === e ? delete t[i] : t[i] = e; }, t._stringRef = i, t);
            }
            if ("string" !== typeof e)
                throw Error(a(284));
            if (!n._owner)
                throw Error(a(290, e));
        } return e; }
        function _o(e, t) { if ("textarea" !== e.type)
            throw Error(a(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t)); }
        function So(e) { function t(t, n) { if (e) {
            var r = t.lastEffect;
            null !== r ? (r.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n, n.nextEffect = null, n.flags = 8;
        } } function n(n, r) { if (!e)
            return null; for (; null !== r;)
            t(n, r), r = r.sibling; return null; } function r(e, t) { for (e = new Map; null !== t;)
            null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling; return e; } function i(e, t) { return (e = Ws(e, t)).index = 0, e.sibling = null, e; } function o(t, n, r) { return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags = 2, n) : r : (t.flags = 2, n) : n; } function u(t) { return e && null === t.alternate && (t.flags = 2), t; } function s(e, t, n, r) { return null === t || 6 !== t.tag ? ((t = Gs(n, e.mode, r)).return = e, t) : ((t = i(t, n)).return = e, t); } function l(e, t, n, r) { return null !== t && t.elementType === n.type ? ((r = i(t, n.props)).ref = ko(e, t, n), r.return = e, r) : ((r = Hs(n.type, n.key, n.props, null, e.mode, r)).ref = ko(e, t, n), r.return = e, r); } function c(e, t, n, r) { return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Ys(n, e.mode, r)).return = e, t) : ((t = i(t, n.children || [])).return = e, t); } function f(e, t, n, r, o) { return null === t || 7 !== t.tag ? ((t = Ks(n, e.mode, r, o)).return = e, t) : ((t = i(t, n)).return = e, t); } function d(e, t, n) { if ("string" === typeof t || "number" === typeof t)
            return (t = Gs("" + t, e.mode, n)).return = e, t; if ("object" === typeof t && null !== t) {
            switch (t.$$typeof) {
                case E: return (n = Hs(t.type, t.key, t.props, null, e.mode, n)).ref = ko(e, null, t), n.return = e, n;
                case k: return (t = Ys(t, e.mode, n)).return = e, t;
            }
            if (Eo(t) || z(t))
                return (t = Ks(t, e.mode, n, null)).return = e, t;
            _o(e, t);
        } return null; } function p(e, t, n, r) { var i = null !== t ? t.key : null; if ("string" === typeof n || "number" === typeof n)
            return null !== i ? null : s(e, t, "" + n, r); if ("object" === typeof n && null !== n) {
            switch (n.$$typeof) {
                case E: return n.key === i ? n.type === _ ? f(e, t, n.props.children, r, i) : l(e, t, n, r) : null;
                case k: return n.key === i ? c(e, t, n, r) : null;
            }
            if (Eo(n) || z(n))
                return null !== i ? null : f(e, t, n, r, null);
            _o(e, n);
        } return null; } function h(e, t, n, r, i) { if ("string" === typeof r || "number" === typeof r)
            return s(t, e = e.get(n) || null, "" + r, i); if ("object" === typeof r && null !== r) {
            switch (r.$$typeof) {
                case E: return e = e.get(null === r.key ? n : r.key) || null, r.type === _ ? f(t, e, r.props.children, i, r.key) : l(t, e, r, i);
                case k: return c(t, e = e.get(null === r.key ? n : r.key) || null, r, i);
            }
            if (Eo(r) || z(r))
                return f(t, e = e.get(n) || null, r, i, null);
            _o(t, r);
        } return null; } function v(i, a, u, s) { for (var l = null, c = null, f = a, v = a = 0, m = null; null !== f && v < u.length; v++) {
            f.index > v ? (m = f, f = null) : m = f.sibling;
            var y = p(i, f, u[v], s);
            if (null === y) {
                null === f && (f = m);
                break;
            }
            e && f && null === y.alternate && t(i, f), a = o(y, a, v), null === c ? l = y : c.sibling = y, c = y, f = m;
        } if (v === u.length)
            return n(i, f), l; if (null === f) {
            for (; v < u.length; v++)
                null !== (f = d(i, u[v], s)) && (a = o(f, a, v), null === c ? l = f : c.sibling = f, c = f);
            return l;
        } for (f = r(i, f); v < u.length; v++)
            null !== (m = h(f, i, v, u[v], s)) && (e && null !== m.alternate && f.delete(null === m.key ? v : m.key), a = o(m, a, v), null === c ? l = m : c.sibling = m, c = m); return e && f.forEach((function (e) { return t(i, e); })), l; } function m(i, u, s, l) { var c = z(s); if ("function" !== typeof c)
            throw Error(a(150)); if (null == (s = c.call(s)))
            throw Error(a(151)); for (var f = c = null, v = u, m = u = 0, y = null, g = s.next(); null !== v && !g.done; m++, g = s.next()) {
            v.index > m ? (y = v, v = null) : y = v.sibling;
            var b = p(i, v, g.value, l);
            if (null === b) {
                null === v && (v = y);
                break;
            }
            e && v && null === b.alternate && t(i, v), u = o(b, u, m), null === f ? c = b : f.sibling = b, f = b, v = y;
        } if (g.done)
            return n(i, v), c; if (null === v) {
            for (; !g.done; m++, g = s.next())
                null !== (g = d(i, g.value, l)) && (u = o(g, u, m), null === f ? c = g : f.sibling = g, f = g);
            return c;
        } for (v = r(i, v); !g.done; m++, g = s.next())
            null !== (g = h(v, i, m, g.value, l)) && (e && null !== g.alternate && v.delete(null === g.key ? m : g.key), u = o(g, u, m), null === f ? c = g : f.sibling = g, f = g); return e && v.forEach((function (e) { return t(i, e); })), c; } return function (e, r, o, s) { var l = "object" === typeof o && null !== o && o.type === _ && null === o.key; l && (o = o.props.children); var c = "object" === typeof o && null !== o; if (c)
            switch (o.$$typeof) {
                case E:
                    e: {
                        for (c = o.key, l = r; null !== l;) {
                            if (l.key === c) {
                                if (7 === l.tag) {
                                    if (o.type === _) {
                                        n(e, l.sibling), (r = i(l, o.props.children)).return = e, e = r;
                                        break e;
                                    }
                                }
                                else if (l.elementType === o.type) {
                                    n(e, l.sibling), (r = i(l, o.props)).ref = ko(e, l, o), r.return = e, e = r;
                                    break e;
                                }
                                n(e, l);
                                break;
                            }
                            t(e, l), l = l.sibling;
                        }
                        o.type === _ ? ((r = Ks(o.props.children, e.mode, s, o.key)).return = e, e = r) : ((s = Hs(o.type, o.key, o.props, null, e.mode, s)).ref = ko(e, r, o), s.return = e, e = s);
                    }
                    return u(e);
                case k:
                    e: {
                        for (l = o.key; null !== r;) {
                            if (r.key === l) {
                                if (4 === r.tag && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
                                    n(e, r.sibling), (r = i(r, o.children || [])).return = e, e = r;
                                    break e;
                                }
                                n(e, r);
                                break;
                            }
                            t(e, r), r = r.sibling;
                        }
                        (r = Ys(o, e.mode, s)).return = e, e = r;
                    }
                    return u(e);
            } if ("string" === typeof o || "number" === typeof o)
            return o = "" + o, null !== r && 6 === r.tag ? (n(e, r.sibling), (r = i(r, o)).return = e, e = r) : (n(e, r), (r = Gs(o, e.mode, s)).return = e, e = r), u(e); if (Eo(o))
            return v(e, r, o, s); if (z(o))
            return m(e, r, o, s); if (c && _o(e, o), "undefined" === typeof o && !l)
            switch (e.tag) {
                case 1:
                case 22:
                case 0:
                case 11:
                case 15: throw Error(a(152, H(e.type) || "Component"));
            } return n(e, r); }; }
        var Oo = So(!0), No = So(!1), Co = {}, To = si(Co), jo = si(Co), Po = si(Co);
        function Io(e) { if (e === Co)
            throw Error(a(174)); return e; }
        function Ro(e, t) { switch (ci(Po, t), ci(jo, e), ci(To, Co), e = t.nodeType) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : pe(null, "");
                break;
            default: t = pe(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName);
        } li(To), ci(To, t); }
        function Do() { li(To), li(jo), li(Po); }
        function Lo(e) { Io(Po.current); var t = Io(To.current), n = pe(t, e.type); t !== n && (ci(jo, e), ci(To, n)); }
        function Ao(e) { jo.current === e && (li(To), li(jo)); }
        var Mo = si(0);
        function Fo(e) { for (var t = e; null !== t;) {
            if (13 === t.tag) {
                var n = t.memoizedState;
                if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data))
                    return t;
            }
            else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                if (0 !== (64 & t.flags))
                    return t;
            }
            else if (null !== t.child) {
                t.child.return = t, t = t.child;
                continue;
            }
            if (t === e)
                break;
            for (; null === t.sibling;) {
                if (null === t.return || t.return === e)
                    return null;
                t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
        } return null; }
        var Vo = null, qo = null, Uo = !1;
        function zo(e, t) { var n = Bs(5, null, null, 0); n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.flags = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n; }
        function Qo(e, t) { switch (e.tag) {
            case 5:
                var n = e.type;
                return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, !0);
            case 6: return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, !0);
            default: return !1;
        } }
        function Bo(e) { if (Uo) {
            var t = qo;
            if (t) {
                var n = t;
                if (!Qo(e, t)) {
                    if (!(t = Hr(n.nextSibling)) || !Qo(e, t))
                        return e.flags = -1025 & e.flags | 2, Uo = !1, void (Vo = e);
                    zo(Vo, n);
                }
                Vo = e, qo = Hr(t.firstChild);
            }
            else
                e.flags = -1025 & e.flags | 2, Uo = !1, Vo = e;
        } }
        function Zo(e) { for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;)
            e = e.return; Vo = e; }
        function Wo(e) { if (e !== Vo)
            return !1; if (!Uo)
            return Zo(e), Uo = !0, !1; var t = e.type; if (5 !== e.tag || "head" !== t && "body" !== t && !Qr(t, e.memoizedProps))
            for (t = qo; t;)
                zo(e, t), t = Hr(t.nextSibling); if (Zo(e), 13 === e.tag) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                throw Error(a(317));
            e: {
                for (e = e.nextSibling, t = 0; e;) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("/$" === n) {
                            if (0 === t) {
                                qo = Hr(e.nextSibling);
                                break e;
                            }
                            t--;
                        }
                        else
                            "$" !== n && "$!" !== n && "$?" !== n || t++;
                    }
                    e = e.nextSibling;
                }
                qo = null;
            }
        }
        else
            qo = Vo ? Hr(e.stateNode.nextSibling) : null; return !0; }
        function Ho() { qo = Vo = null, Uo = !1; }
        var Ko = [];
        function $o() { for (var e = 0; e < Ko.length; e++)
            Ko[e]._workInProgressVersionPrimary = null; Ko.length = 0; }
        var Go = x.ReactCurrentDispatcher, Yo = x.ReactCurrentBatchConfig, Jo = 0, Xo = null, ea = null, ta = null, na = !1, ra = !1;
        function ia() { throw Error(a(321)); }
        function oa(e, t) { if (null === t)
            return !1; for (var n = 0; n < t.length && n < e.length; n++)
            if (!lr(e[n], t[n]))
                return !1; return !0; }
        function aa(e, t, n, r, i, o) { if (Jo = o, Xo = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Go.current = null === e || null === e.memoizedState ? Ia : Ra, e = n(r, i), ra) {
            o = 0;
            do {
                if (ra = !1, !(25 > o))
                    throw Error(a(301));
                o += 1, ta = ea = null, t.updateQueue = null, Go.current = Da, e = n(r, i);
            } while (ra);
        } if (Go.current = Pa, t = null !== ea && null !== ea.next, Jo = 0, ta = ea = Xo = null, na = !1, t)
            throw Error(a(300)); return e; }
        function ua() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return null === ta ? Xo.memoizedState = ta = e : ta = ta.next = e, ta; }
        function sa() { if (null === ea) {
            var e = Xo.alternate;
            e = null !== e ? e.memoizedState : null;
        }
        else
            e = ea.next; var t = null === ta ? Xo.memoizedState : ta.next; if (null !== t)
            ta = t, ea = e;
        else {
            if (null === e)
                throw Error(a(310));
            e = { memoizedState: (ea = e).memoizedState, baseState: ea.baseState, baseQueue: ea.baseQueue, queue: ea.queue, next: null }, null === ta ? Xo.memoizedState = ta = e : ta = ta.next = e;
        } return ta; }
        function la(e, t) { return "function" === typeof t ? t(e) : t; }
        function ca(e) { var t = sa(), n = t.queue; if (null === n)
            throw Error(a(311)); n.lastRenderedReducer = e; var r = ea, i = r.baseQueue, o = n.pending; if (null !== o) {
            if (null !== i) {
                var u = i.next;
                i.next = o.next, o.next = u;
            }
            r.baseQueue = i = o, n.pending = null;
        } if (null !== i) {
            i = i.next, r = r.baseState;
            var s = u = o = null, l = i;
            do {
                var c = l.lane;
                if ((Jo & c) === c)
                    null !== s && (s = s.next = { lane: 0, action: l.action, eagerReducer: l.eagerReducer, eagerState: l.eagerState, next: null }), r = l.eagerReducer === e ? l.eagerState : e(r, l.action);
                else {
                    var f = { lane: c, action: l.action, eagerReducer: l.eagerReducer, eagerState: l.eagerState, next: null };
                    null === s ? (u = s = f, o = r) : s = s.next = f, Xo.lanes |= c, Uu |= c;
                }
                l = l.next;
            } while (null !== l && l !== i);
            null === s ? o = r : s.next = u, lr(r, t.memoizedState) || (Aa = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = s, n.lastRenderedState = r;
        } return [t.memoizedState, n.dispatch]; }
        function fa(e) { var t = sa(), n = t.queue; if (null === n)
            throw Error(a(311)); n.lastRenderedReducer = e; var r = n.dispatch, i = n.pending, o = t.memoizedState; if (null !== i) {
            n.pending = null;
            var u = i = i.next;
            do {
                o = e(o, u.action), u = u.next;
            } while (u !== i);
            lr(o, t.memoizedState) || (Aa = !0), t.memoizedState = o, null === t.baseQueue && (t.baseState = o), n.lastRenderedState = o;
        } return [o, r]; }
        function da(e, t, n) { var r = t._getVersion; r = r(t._source); var i = t._workInProgressVersionPrimary; if (null !== i ? e = i === r : (e = e.mutableReadLanes, (e = (Jo & e) === e) && (t._workInProgressVersionPrimary = r, Ko.push(t))), e)
            return n(t._source); throw Ko.push(t), Error(a(350)); }
        function pa(e, t, n, r) { var i = Ru; if (null === i)
            throw Error(a(349)); var o = t._getVersion, u = o(t._source), s = Go.current, l = s.useState((function () { return da(i, t, n); })), c = l[1], f = l[0]; l = ta; var d = e.memoizedState, p = d.refs, h = p.getSnapshot, v = d.source; d = d.subscribe; var m = Xo; return e.memoizedState = { refs: p, source: t, subscribe: r }, s.useEffect((function () { p.getSnapshot = n, p.setSnapshot = c; var e = o(t._source); if (!lr(u, e)) {
            e = n(t._source), lr(f, e) || (c(e), e = ps(m), i.mutableReadLanes |= e & i.pendingLanes), e = i.mutableReadLanes, i.entangledLanes |= e;
            for (var r = i.entanglements, a = e; 0 < a;) {
                var s = 31 - Qt(a), l = 1 << s;
                r[s] |= e, a &= ~l;
            }
        } }), [n, t, r]), s.useEffect((function () { return r(t._source, (function () { var e = p.getSnapshot, n = p.setSnapshot; try {
            n(e(t._source));
            var r = ps(m);
            i.mutableReadLanes |= r & i.pendingLanes;
        }
        catch (o) {
            n((function () { throw o; }));
        } })); }), [t, r]), lr(h, n) && lr(v, t) && lr(d, r) || ((e = { pending: null, dispatch: null, lastRenderedReducer: la, lastRenderedState: f }).dispatch = c = ja.bind(null, Xo, e), l.queue = e, l.baseQueue = null, f = da(i, t, n), l.memoizedState = l.baseState = f), f; }
        function ha(e, t, n) { return pa(sa(), e, t, n); }
        function va(e) { var t = ua(); return "function" === typeof e && (e = e()), t.memoizedState = t.baseState = e, e = (e = t.queue = { pending: null, dispatch: null, lastRenderedReducer: la, lastRenderedState: e }).dispatch = ja.bind(null, Xo, e), [t.memoizedState, e]; }
        function ma(e, t, n, r) { return e = { tag: e, create: t, destroy: n, deps: r, next: null }, null === (t = Xo.updateQueue) ? (t = { lastEffect: null }, Xo.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e; }
        function ya(e) { return e = { current: e }, ua().memoizedState = e; }
        function ga() { return sa().memoizedState; }
        function ba(e, t, n, r) { var i = ua(); Xo.flags |= e, i.memoizedState = ma(1 | t, n, void 0, void 0 === r ? null : r); }
        function wa(e, t, n, r) { var i = sa(); r = void 0 === r ? null : r; var o = void 0; if (null !== ea) {
            var a = ea.memoizedState;
            if (o = a.destroy, null !== r && oa(r, a.deps))
                return void ma(t, n, o, r);
        } Xo.flags |= e, i.memoizedState = ma(1 | t, n, o, r); }
        function xa(e, t) { return ba(516, 4, e, t); }
        function Ea(e, t) { return wa(516, 4, e, t); }
        function ka(e, t) { return wa(4, 2, e, t); }
        function _a(e, t) { return "function" === typeof t ? (e = e(), t(e), function () { t(null); }) : null !== t && void 0 !== t ? (e = e(), t.current = e, function () { t.current = null; }) : void 0; }
        function Sa(e, t, n) { return n = null !== n && void 0 !== n ? n.concat([e]) : null, wa(4, 2, _a.bind(null, t, e), n); }
        function Oa() { }
        function Na(e, t) { var n = sa(); t = void 0 === t ? null : t; var r = n.memoizedState; return null !== r && null !== t && oa(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e); }
        function Ca(e, t) { var n = sa(); t = void 0 === t ? null : t; var r = n.memoizedState; return null !== r && null !== t && oa(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e); }
        function Ta(e, t) { var n = Qi(); Zi(98 > n ? 98 : n, (function () { e(!0); })), Zi(97 < n ? 97 : n, (function () { var n = Yo.transition; Yo.transition = 1; try {
            e(!1), t();
        }
        finally {
            Yo.transition = n;
        } })); }
        function ja(e, t, n) { var r = ds(), i = ps(e), o = { lane: i, action: n, eagerReducer: null, eagerState: null, next: null }, a = t.pending; if (null === a ? o.next = o : (o.next = a.next, a.next = o), t.pending = o, a = e.alternate, e === Xo || null !== a && a === Xo)
            ra = na = !0;
        else {
            if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer))
                try {
                    var u = t.lastRenderedState, s = a(u, n);
                    if (o.eagerReducer = a, o.eagerState = s, lr(s, u))
                        return;
                }
                catch (l) { }
            hs(e, i, r);
        } }
        var Pa = { readContext: oo, useCallback: ia, useContext: ia, useEffect: ia, useImperativeHandle: ia, useLayoutEffect: ia, useMemo: ia, useReducer: ia, useRef: ia, useState: ia, useDebugValue: ia, useDeferredValue: ia, useTransition: ia, useMutableSource: ia, useOpaqueIdentifier: ia, unstable_isNewReconciler: !1 }, Ia = { readContext: oo, useCallback: function (e, t) { return ua().memoizedState = [e, void 0 === t ? null : t], e; }, useContext: oo, useEffect: xa, useImperativeHandle: function (e, t, n) { return n = null !== n && void 0 !== n ? n.concat([e]) : null, ba(4, 2, _a.bind(null, t, e), n); }, useLayoutEffect: function (e, t) { return ba(4, 2, e, t); }, useMemo: function (e, t) { var n = ua(); return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e; }, useReducer: function (e, t, n) { var r = ua(); return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = (e = r.queue = { pending: null, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }).dispatch = ja.bind(null, Xo, e), [r.memoizedState, e]; }, useRef: ya, useState: va, useDebugValue: Oa, useDeferredValue: function (e) { var t = va(e), n = t[0], r = t[1]; return xa((function () { var t = Yo.transition; Yo.transition = 1; try {
                r(e);
            }
            finally {
                Yo.transition = t;
            } }), [e]), n; }, useTransition: function () { var e = va(!1), t = e[0]; return ya(e = Ta.bind(null, e[1])), [e, t]; }, useMutableSource: function (e, t, n) { var r = ua(); return r.memoizedState = { refs: { getSnapshot: t, setSnapshot: null }, source: e, subscribe: n }, pa(r, e, t, n); }, useOpaqueIdentifier: function () { if (Uo) {
                var e = !1, t = function (e) { return { $$typeof: L, toString: e, valueOf: e }; }((function () { throw e || (e = !0, n("r:" + ($r++).toString(36))), Error(a(355)); })), n = va(t)[1];
                return 0 === (2 & Xo.mode) && (Xo.flags |= 516, ma(5, (function () { n("r:" + ($r++).toString(36)); }), void 0, null)), t;
            } return va(t = "r:" + ($r++).toString(36)), t; }, unstable_isNewReconciler: !1 }, Ra = { readContext: oo, useCallback: Na, useContext: oo, useEffect: Ea, useImperativeHandle: Sa, useLayoutEffect: ka, useMemo: Ca, useReducer: ca, useRef: ga, useState: function () { return ca(la); }, useDebugValue: Oa, useDeferredValue: function (e) { var t = ca(la), n = t[0], r = t[1]; return Ea((function () { var t = Yo.transition; Yo.transition = 1; try {
                r(e);
            }
            finally {
                Yo.transition = t;
            } }), [e]), n; }, useTransition: function () { var e = ca(la)[0]; return [ga().current, e]; }, useMutableSource: ha, useOpaqueIdentifier: function () { return ca(la)[0]; }, unstable_isNewReconciler: !1 }, Da = { readContext: oo, useCallback: Na, useContext: oo, useEffect: Ea, useImperativeHandle: Sa, useLayoutEffect: ka, useMemo: Ca, useReducer: fa, useRef: ga, useState: function () { return fa(la); }, useDebugValue: Oa, useDeferredValue: function (e) { var t = fa(la), n = t[0], r = t[1]; return Ea((function () { var t = Yo.transition; Yo.transition = 1; try {
                r(e);
            }
            finally {
                Yo.transition = t;
            } }), [e]), n; }, useTransition: function () { var e = fa(la)[0]; return [ga().current, e]; }, useMutableSource: ha, useOpaqueIdentifier: function () { return fa(la)[0]; }, unstable_isNewReconciler: !1 }, La = x.ReactCurrentOwner, Aa = !1;
        function Ma(e, t, n, r) { t.child = null === e ? No(t, null, n, r) : Oo(t, e.child, n, r); }
        function Fa(e, t, n, r, i) { n = n.render; var o = t.ref; return io(t, i), r = aa(e, t, n, r, o, i), null === e || Aa ? (t.flags |= 1, Ma(e, t, r, i), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~i, ou(e, t, i)); }
        function Va(e, t, n, r, i, o) { if (null === e) {
            var a = n.type;
            return "function" !== typeof a || Zs(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Hs(n.type, null, r, t, t.mode, o)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = a, qa(e, t, a, r, i, o));
        } return a = e.child, 0 === (i & o) && (i = a.memoizedProps, (n = null !== (n = n.compare) ? n : fr)(i, r) && e.ref === t.ref) ? ou(e, t, o) : (t.flags |= 1, (e = Ws(a, r)).ref = t.ref, e.return = t, t.child = e); }
        function qa(e, t, n, r, i, o) { if (null !== e && fr(e.memoizedProps, r) && e.ref === t.ref) {
            if (Aa = !1, 0 === (o & i))
                return t.lanes = e.lanes, ou(e, t, o);
            0 !== (16384 & e.flags) && (Aa = !0);
        } return Qa(e, t, n, r, o); }
        function Ua(e, t, n) { var r = t.pendingProps, i = r.children, o = null !== e ? e.memoizedState : null; if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
            if (0 === (4 & t.mode))
                t.memoizedState = { baseLanes: 0 }, Es(t, n);
            else {
                if (0 === (1073741824 & n))
                    return e = null !== o ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e }, Es(t, e), null;
                t.memoizedState = { baseLanes: 0 }, Es(t, null !== o ? o.baseLanes : n);
            }
        else
            null !== o ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, Es(t, r); return Ma(e, t, i, n), t.child; }
        function za(e, t) { var n = t.ref; (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 128); }
        function Qa(e, t, n, r, i) { var o = mi(n) ? hi : di.current; return o = vi(t, o), io(t, i), n = aa(e, t, n, r, o, i), null === e || Aa ? (t.flags |= 1, Ma(e, t, n, i), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~i, ou(e, t, i)); }
        function Ba(e, t, n, r, i) { if (mi(n)) {
            var o = !0;
            wi(t);
        }
        else
            o = !1; if (io(t, i), null === t.stateNode)
            null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), bo(t, n, r), xo(t, n, r, i), r = !0;
        else if (null === e) {
            var a = t.stateNode, u = t.memoizedProps;
            a.props = u;
            var s = a.context, l = n.contextType;
            "object" === typeof l && null !== l ? l = oo(l) : l = vi(t, l = mi(n) ? hi : di.current);
            var c = n.getDerivedStateFromProps, f = "function" === typeof c || "function" === typeof a.getSnapshotBeforeUpdate;
            f || "function" !== typeof a.UNSAFE_componentWillReceiveProps && "function" !== typeof a.componentWillReceiveProps || (u !== r || s !== l) && wo(t, a, r, l), ao = !1;
            var d = t.memoizedState;
            a.state = d, po(t, r, a, i), s = t.memoizedState, u !== r || d !== s || pi.current || ao ? ("function" === typeof c && (mo(t, n, c, r), s = t.memoizedState), (u = ao || go(t, n, u, r, d, s, l)) ? (f || "function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount || ("function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()), "function" === typeof a.componentDidMount && (t.flags |= 4)) : ("function" === typeof a.componentDidMount && (t.flags |= 4), t.memoizedProps = r, t.memoizedState = s), a.props = r, a.state = s, a.context = l, r = u) : ("function" === typeof a.componentDidMount && (t.flags |= 4), r = !1);
        }
        else {
            a = t.stateNode, so(e, t), u = t.memoizedProps, l = t.type === t.elementType ? u : Gi(t.type, u), a.props = l, f = t.pendingProps, d = a.context, "object" === typeof (s = n.contextType) && null !== s ? s = oo(s) : s = vi(t, s = mi(n) ? hi : di.current);
            var p = n.getDerivedStateFromProps;
            (c = "function" === typeof p || "function" === typeof a.getSnapshotBeforeUpdate) || "function" !== typeof a.UNSAFE_componentWillReceiveProps && "function" !== typeof a.componentWillReceiveProps || (u !== f || d !== s) && wo(t, a, r, s), ao = !1, d = t.memoizedState, a.state = d, po(t, r, a, i);
            var h = t.memoizedState;
            u !== f || d !== h || pi.current || ao ? ("function" === typeof p && (mo(t, n, p, r), h = t.memoizedState), (l = ao || go(t, n, l, r, d, h, s)) ? (c || "function" !== typeof a.UNSAFE_componentWillUpdate && "function" !== typeof a.componentWillUpdate || ("function" === typeof a.componentWillUpdate && a.componentWillUpdate(r, h, s), "function" === typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, h, s)), "function" === typeof a.componentDidUpdate && (t.flags |= 4), "function" === typeof a.getSnapshotBeforeUpdate && (t.flags |= 256)) : ("function" !== typeof a.componentDidUpdate || u === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" !== typeof a.getSnapshotBeforeUpdate || u === e.memoizedProps && d === e.memoizedState || (t.flags |= 256), t.memoizedProps = r, t.memoizedState = h), a.props = r, a.state = h, a.context = s, r = l) : ("function" !== typeof a.componentDidUpdate || u === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" !== typeof a.getSnapshotBeforeUpdate || u === e.memoizedProps && d === e.memoizedState || (t.flags |= 256), r = !1);
        } return Za(e, t, n, r, o, i); }
        function Za(e, t, n, r, i, o) { za(e, t); var a = 0 !== (64 & t.flags); if (!r && !a)
            return i && xi(t, n, !1), ou(e, t, o); r = t.stateNode, La.current = t; var u = a && "function" !== typeof n.getDerivedStateFromError ? null : r.render(); return t.flags |= 1, null !== e && a ? (t.child = Oo(t, e.child, null, o), t.child = Oo(t, null, u, o)) : Ma(e, t, u, o), t.memoizedState = r.state, i && xi(t, n, !0), t.child; }
        function Wa(e) { var t = e.stateNode; t.pendingContext ? gi(0, t.pendingContext, t.pendingContext !== t.context) : t.context && gi(0, t.context, !1), Ro(e, t.containerInfo); }
        var Ha, Ka, $a, Ga, Ya = { dehydrated: null, retryLane: 0 };
        function Ja(e, t, n) { var r, i = t.pendingProps, o = Mo.current, a = !1; return (r = 0 !== (64 & t.flags)) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)), r ? (a = !0, t.flags &= -65) : null !== e && null === e.memoizedState || void 0 === i.fallback || !0 === i.unstable_avoidThisFallback || (o |= 1), ci(Mo, 1 & o), null === e ? (void 0 !== i.fallback && Bo(t), e = i.children, o = i.fallback, a ? (e = Xa(t, e, o, n), t.child.memoizedState = { baseLanes: n }, t.memoizedState = Ya, e) : "number" === typeof i.unstable_expectedLoadTime ? (e = Xa(t, e, o, n), t.child.memoizedState = { baseLanes: n }, t.memoizedState = Ya, t.lanes = 33554432, e) : ((n = $s({ mode: "visible", children: e }, t.mode, n, null)).return = t, t.child = n)) : (e.memoizedState, a ? (i = tu(e, t, i.children, i.fallback, n), a = t.child, o = e.child.memoizedState, a.memoizedState = null === o ? { baseLanes: n } : { baseLanes: o.baseLanes | n }, a.childLanes = e.childLanes & ~n, t.memoizedState = Ya, i) : (n = eu(e, t, i.children, n), t.memoizedState = null, n)); }
        function Xa(e, t, n, r) { var i = e.mode, o = e.child; return t = { mode: "hidden", children: t }, 0 === (2 & i) && null !== o ? (o.childLanes = 0, o.pendingProps = t) : o = $s(t, i, 0, null), n = Ks(n, i, r, null), o.return = e, n.return = e, o.sibling = n, e.child = o, n; }
        function eu(e, t, n, r) { var i = e.child; return e = i.sibling, n = Ws(i, { mode: "visible", children: n }), 0 === (2 & t.mode) && (n.lanes = r), n.return = t, n.sibling = null, null !== e && (e.nextEffect = null, e.flags = 8, t.firstEffect = t.lastEffect = e), t.child = n; }
        function tu(e, t, n, r, i) { var o = t.mode, a = e.child; e = a.sibling; var u = { mode: "hidden", children: n }; return 0 === (2 & o) && t.child !== a ? ((n = t.child).childLanes = 0, n.pendingProps = u, null !== (a = n.lastEffect) ? (t.firstEffect = n.firstEffect, t.lastEffect = a, a.nextEffect = null) : t.firstEffect = t.lastEffect = null) : n = Ws(a, u), null !== e ? r = Ws(e, r) : (r = Ks(r, o, i, null)).flags |= 2, r.return = t, n.return = t, n.sibling = r, t.child = n, r; }
        function nu(e, t) { e.lanes |= t; var n = e.alternate; null !== n && (n.lanes |= t), ro(e.return, t); }
        function ru(e, t, n, r, i, o) { var a = e.memoizedState; null === a ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i, lastEffect: o } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = i, a.lastEffect = o); }
        function iu(e, t, n) { var r = t.pendingProps, i = r.revealOrder, o = r.tail; if (Ma(e, t, r.children, n), 0 !== (2 & (r = Mo.current)))
            r = 1 & r | 2, t.flags |= 64;
        else {
            if (null !== e && 0 !== (64 & e.flags))
                e: for (e = t.child; null !== e;) {
                    if (13 === e.tag)
                        null !== e.memoizedState && nu(e, n);
                    else if (19 === e.tag)
                        nu(e, n);
                    else if (null !== e.child) {
                        e.child.return = e, e = e.child;
                        continue;
                    }
                    if (e === t)
                        break e;
                    for (; null === e.sibling;) {
                        if (null === e.return || e.return === t)
                            break e;
                        e = e.return;
                    }
                    e.sibling.return = e.return, e = e.sibling;
                }
            r &= 1;
        } if (ci(Mo, r), 0 === (2 & t.mode))
            t.memoizedState = null;
        else
            switch (i) {
                case "forwards":
                    for (n = t.child, i = null; null !== n;)
                        null !== (e = n.alternate) && null === Fo(e) && (i = n), n = n.sibling;
                    null === (n = i) ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), ru(t, !1, i, n, o, t.lastEffect);
                    break;
                case "backwards":
                    for (n = null, i = t.child, t.child = null; null !== i;) {
                        if (null !== (e = i.alternate) && null === Fo(e)) {
                            t.child = i;
                            break;
                        }
                        e = i.sibling, i.sibling = n, n = i, i = e;
                    }
                    ru(t, !0, n, null, o, t.lastEffect);
                    break;
                case "together":
                    ru(t, !1, null, null, void 0, t.lastEffect);
                    break;
                default: t.memoizedState = null;
            } return t.child; }
        function ou(e, t, n) { if (null !== e && (t.dependencies = e.dependencies), Uu |= t.lanes, 0 !== (n & t.childLanes)) {
            if (null !== e && t.child !== e.child)
                throw Error(a(153));
            if (null !== t.child) {
                for (n = Ws(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;)
                    e = e.sibling, (n = n.sibling = Ws(e, e.pendingProps)).return = t;
                n.sibling = null;
            }
            return t.child;
        } return null; }
        function au(e, t) { if (!Uo)
            switch (e.tailMode) {
                case "hidden":
                    t = e.tail;
                    for (var n = null; null !== t;)
                        null !== t.alternate && (n = t), t = t.sibling;
                    null === n ? e.tail = null : n.sibling = null;
                    break;
                case "collapsed":
                    n = e.tail;
                    for (var r = null; null !== n;)
                        null !== n.alternate && (r = n), n = n.sibling;
                    null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null;
            } }
        function uu(e, t, n) { var r = t.pendingProps; switch (t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14: return null;
            case 1:
            case 17: return mi(t.type) && yi(), null;
            case 3: return Do(), li(pi), li(di), $o(), (r = t.stateNode).pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (Wo(t) ? t.flags |= 4 : r.hydrate || (t.flags |= 256)), Ka(t), null;
            case 5:
                Ao(t);
                var o = Io(Po.current);
                if (n = t.type, null !== e && null != t.stateNode)
                    $a(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 128);
                else {
                    if (!r) {
                        if (null === t.stateNode)
                            throw Error(a(166));
                        return null;
                    }
                    if (e = Io(To.current), Wo(t)) {
                        r = t.stateNode, n = t.type;
                        var u = t.memoizedProps;
                        switch (r[Yr] = t, r[Jr] = u, n) {
                            case "dialog":
                                Tr("cancel", r), Tr("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Tr("load", r);
                                break;
                            case "video":
                            case "audio":
                                for (e = 0; e < Sr.length; e++)
                                    Tr(Sr[e], r);
                                break;
                            case "source":
                                Tr("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Tr("error", r), Tr("load", r);
                                break;
                            case "details":
                                Tr("toggle", r);
                                break;
                            case "input":
                                ee(r, u), Tr("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = { wasMultiple: !!u.multiple }, Tr("invalid", r);
                                break;
                            case "textarea": se(r, u), Tr("invalid", r);
                        }
                        for (var l in ke(n, u), e = null, u)
                            u.hasOwnProperty(l) && (o = u[l], "children" === l ? "string" === typeof o ? r.textContent !== o && (e = ["children", o]) : "number" === typeof o && r.textContent !== "" + o && (e = ["children", "" + o]) : s.hasOwnProperty(l) && null != o && "onScroll" === l && Tr("scroll", r));
                        switch (n) {
                            case "input":
                                G(r), re(r, u, !0);
                                break;
                            case "textarea":
                                G(r), ce(r);
                                break;
                            case "select":
                            case "option": break;
                            default: "function" === typeof u.onClick && (r.onclick = Vr);
                        }
                        r = e, t.updateQueue = r, null !== r && (t.flags |= 4);
                    }
                    else {
                        switch (l = 9 === o.nodeType ? o : o.ownerDocument, e === fe.html && (e = de(n)), e === fe.html ? "script" === n ? ((e = l.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), "select" === n && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[Yr] = t, e[Jr] = r, Ha(e, t, !1, !1), t.stateNode = e, l = _e(n, r), n) {
                            case "dialog":
                                Tr("cancel", e), Tr("close", e), o = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Tr("load", e), o = r;
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < Sr.length; o++)
                                    Tr(Sr[o], e);
                                o = r;
                                break;
                            case "source":
                                Tr("error", e), o = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Tr("error", e), Tr("load", e), o = r;
                                break;
                            case "details":
                                Tr("toggle", e), o = r;
                                break;
                            case "input":
                                ee(e, r), o = X(e, r), Tr("invalid", e);
                                break;
                            case "option":
                                o = oe(e, r);
                                break;
                            case "select":
                                e._wrapperState = { wasMultiple: !!r.multiple }, o = i({}, r, { value: void 0 }), Tr("invalid", e);
                                break;
                            case "textarea":
                                se(e, r), o = ue(e, r), Tr("invalid", e);
                                break;
                            default: o = r;
                        }
                        ke(n, o);
                        var c = o;
                        for (u in c)
                            if (c.hasOwnProperty(u)) {
                                var f = c[u];
                                "style" === u ? xe(e, f) : "dangerouslySetInnerHTML" === u ? null != (f = f ? f.__html : void 0) && me(e, f) : "children" === u ? "string" === typeof f ? ("textarea" !== n || "" !== f) && ye(e, f) : "number" === typeof f && ye(e, "" + f) : "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && "autoFocus" !== u && (s.hasOwnProperty(u) ? null != f && "onScroll" === u && Tr("scroll", e) : null != f && w(e, u, f, l));
                            }
                        switch (n) {
                            case "input":
                                G(e), re(e, r, !1);
                                break;
                            case "textarea":
                                G(e), ce(e);
                                break;
                            case "option":
                                null != r.value && e.setAttribute("value", "" + K(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, null != (u = r.value) ? ae(e, !!r.multiple, u, !1) : null != r.defaultValue && ae(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default: "function" === typeof o.onClick && (e.onclick = Vr);
                        }
                        zr(n, r) && (t.flags |= 4);
                    }
                    null !== t.ref && (t.flags |= 128);
                }
                return null;
            case 6:
                if (e && null != t.stateNode)
                    Ga(e, t, e.memoizedProps, r);
                else {
                    if ("string" !== typeof r && null === t.stateNode)
                        throw Error(a(166));
                    n = Io(Po.current), Io(To.current), Wo(t) ? (r = t.stateNode, n = t.memoizedProps, r[Yr] = t, r.nodeValue !== n && (t.flags |= 4)) : ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Yr] = t, t.stateNode = r);
                }
                return null;
            case 13: return li(Mo), r = t.memoizedState, 0 !== (64 & t.flags) ? (t.lanes = n, t) : (r = null !== r, n = !1, null === e ? void 0 !== t.memoizedProps.fallback && Wo(t) : n = null !== e.memoizedState, r && !n && 0 !== (2 & t.mode) && (null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback || 0 !== (1 & Mo.current) ? 0 === Fu && (Fu = 3) : (0 !== Fu && 3 !== Fu || (Fu = 4), null === Ru || 0 === (134217727 & Uu) && 0 === (134217727 & zu) || gs(Ru, Lu))), (r || n) && (t.flags |= 4), null);
            case 4: return Do(), Ka(t), null === e && Pr(t.stateNode.containerInfo), null;
            case 10: return no(t), null;
            case 19:
                if (li(Mo), null === (r = t.memoizedState))
                    return null;
                if (u = 0 !== (64 & t.flags), null === (l = r.rendering))
                    if (u)
                        au(r, !1);
                    else {
                        if (0 !== Fu || null !== e && 0 !== (64 & e.flags))
                            for (e = t.child; null !== e;) {
                                if (null !== (l = Fo(e))) {
                                    for (t.flags |= 64, au(r, !1), null !== (u = l.updateQueue) && (t.updateQueue = u, t.flags |= 4), null === r.lastEffect && (t.firstEffect = null), t.lastEffect = r.lastEffect, r = n, n = t.child; null !== n;)
                                        e = r, (u = n).flags &= 2, u.nextEffect = null, u.firstEffect = null, u.lastEffect = null, null === (l = u.alternate) ? (u.childLanes = 0, u.lanes = e, u.child = null, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, u.type = l.type, e = l.dependencies, u.dependencies = null === e ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                                    return ci(Mo, 1 & Mo.current | 2), t.child;
                                }
                                e = e.sibling;
                            }
                        null !== r.tail && zi() > Wu && (t.flags |= 64, u = !0, au(r, !1), t.lanes = 33554432);
                    }
                else {
                    if (!u)
                        if (null !== (e = Fo(l))) {
                            if (t.flags |= 64, u = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), au(r, !0), null === r.tail && "hidden" === r.tailMode && !l.alternate && !Uo)
                                return null !== (t = t.lastEffect = r.lastEffect) && (t.nextEffect = null), null;
                        }
                        else
                            2 * zi() - r.renderingStartTime > Wu && 1073741824 !== n && (t.flags |= 64, u = !0, au(r, !1), t.lanes = 33554432);
                    r.isBackwards ? (l.sibling = t.child, t.child = l) : (null !== (n = r.last) ? n.sibling = l : t.child = l, r.last = l);
                }
                return null !== r.tail ? (n = r.tail, r.rendering = n, r.tail = n.sibling, r.lastEffect = t.lastEffect, r.renderingStartTime = zi(), n.sibling = null, t = Mo.current, ci(Mo, u ? 1 & t | 2 : 1 & t), n) : null;
            case 23:
            case 24: return ks(), null !== e && null !== e.memoizedState !== (null !== t.memoizedState) && "unstable-defer-without-hiding" !== r.mode && (t.flags |= 4), null;
        } throw Error(a(156, t.tag)); }
        function su(e) { switch (e.tag) {
            case 1:
                mi(e.type) && yi();
                var t = e.flags;
                return 4096 & t ? (e.flags = -4097 & t | 64, e) : null;
            case 3:
                if (Do(), li(pi), li(di), $o(), 0 !== (64 & (t = e.flags)))
                    throw Error(a(285));
                return e.flags = -4097 & t | 64, e;
            case 5: return Ao(e), null;
            case 13: return li(Mo), 4096 & (t = e.flags) ? (e.flags = -4097 & t | 64, e) : null;
            case 19: return li(Mo), null;
            case 4: return Do(), null;
            case 10: return no(e), null;
            case 23:
            case 24: return ks(), null;
            default: return null;
        } }
        function lu(e, t) { try {
            var n = "", r = t;
            do {
                n += W(r), r = r.return;
            } while (r);
            var i = n;
        }
        catch (o) {
            i = "\nError generating stack: " + o.message + "\n" + o.stack;
        } return { value: e, source: t, stack: i }; }
        function cu(e, t) { try {
            console.error(t.value);
        }
        catch (n) {
            setTimeout((function () { throw n; }));
        } }
        Ha = function (e, t) { for (var n = t.child; null !== n;) {
            if (5 === n.tag || 6 === n.tag)
                e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
                n.child.return = n, n = n.child;
                continue;
            }
            if (n === t)
                break;
            for (; null === n.sibling;) {
                if (null === n.return || n.return === t)
                    return;
                n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
        } }, Ka = function () { }, $a = function (e, t, n, r) { var o = e.memoizedProps; if (o !== r) {
            e = t.stateNode, Io(To.current);
            var a, u = null;
            switch (n) {
                case "input":
                    o = X(e, o), r = X(e, r), u = [];
                    break;
                case "option":
                    o = oe(e, o), r = oe(e, r), u = [];
                    break;
                case "select":
                    o = i({}, o, { value: void 0 }), r = i({}, r, { value: void 0 }), u = [];
                    break;
                case "textarea":
                    o = ue(e, o), r = ue(e, r), u = [];
                    break;
                default: "function" !== typeof o.onClick && "function" === typeof r.onClick && (e.onclick = Vr);
            }
            for (f in ke(n, r), n = null, o)
                if (!r.hasOwnProperty(f) && o.hasOwnProperty(f) && null != o[f])
                    if ("style" === f) {
                        var l = o[f];
                        for (a in l)
                            l.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
                    }
                    else
                        "dangerouslySetInnerHTML" !== f && "children" !== f && "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (s.hasOwnProperty(f) ? u || (u = []) : (u = u || []).push(f, null));
            for (f in r) {
                var c = r[f];
                if (l = null != o ? o[f] : void 0, r.hasOwnProperty(f) && c !== l && (null != c || null != l))
                    if ("style" === f)
                        if (l) {
                            for (a in l)
                                !l.hasOwnProperty(a) || c && c.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
                            for (a in c)
                                c.hasOwnProperty(a) && l[a] !== c[a] && (n || (n = {}), n[a] = c[a]);
                        }
                        else
                            n || (u || (u = []), u.push(f, n)), n = c;
                    else
                        "dangerouslySetInnerHTML" === f ? (c = c ? c.__html : void 0, l = l ? l.__html : void 0, null != c && l !== c && (u = u || []).push(f, c)) : "children" === f ? "string" !== typeof c && "number" !== typeof c || (u = u || []).push(f, "" + c) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && (s.hasOwnProperty(f) ? (null != c && "onScroll" === f && Tr("scroll", e), u || l === c || (u = [])) : "object" === typeof c && null !== c && c.$$typeof === L ? c.toString() : (u = u || []).push(f, c));
            }
            n && (u = u || []).push("style", n);
            var f = u;
            (t.updateQueue = f) && (t.flags |= 4);
        } }, Ga = function (e, t, n, r) { n !== r && (t.flags |= 4); };
        var fu = "function" === typeof WeakMap ? WeakMap : Map;
        function du(e, t, n) { (n = lo(-1, n)).tag = 3, n.payload = { element: null }; var r = t.value; return n.callback = function () { Gu || (Gu = !0, Yu = r), cu(0, t); }, n; }
        function pu(e, t, n) { (n = lo(-1, n)).tag = 3; var r = e.type.getDerivedStateFromError; if ("function" === typeof r) {
            var i = t.value;
            n.payload = function () { return cu(0, t), r(i); };
        } var o = e.stateNode; return null !== o && "function" === typeof o.componentDidCatch && (n.callback = function () { "function" !== typeof r && (null === Ju ? Ju = new Set([this]) : Ju.add(this), cu(0, t)); var e = t.stack; this.componentDidCatch(t.value, { componentStack: null !== e ? e : "" }); }), n; }
        var hu = "function" === typeof WeakSet ? WeakSet : Set;
        function vu(e) { var t = e.ref; if (null !== t)
            if ("function" === typeof t)
                try {
                    t(null);
                }
                catch (n) {
                    qs(e, n);
                }
            else
                t.current = null; }
        function mu(e, t) { switch (t.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
            case 5:
            case 6:
            case 4:
            case 17: return;
            case 1:
                if (256 & t.flags && null !== e) {
                    var n = e.memoizedProps, r = e.memoizedState;
                    t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : Gi(t.type, n), r), e.__reactInternalSnapshotBeforeUpdate = t;
                }
                return;
            case 3: return void (256 & t.flags && Wr(t.stateNode.containerInfo));
        } throw Error(a(163)); }
        function yu(e, t, n) { switch (n.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
                if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
                    e = t = t.next;
                    do {
                        if (3 === (3 & e.tag)) {
                            var r = e.create;
                            e.destroy = r();
                        }
                        e = e.next;
                    } while (e !== t);
                }
                if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
                    e = t = t.next;
                    do {
                        var i = e;
                        r = i.next, 0 !== (4 & (i = i.tag)) && 0 !== (1 & i) && (Ms(n, e), As(n, e)), e = r;
                    } while (e !== t);
                }
                return;
            case 1: return e = n.stateNode, 4 & n.flags && (null === t ? e.componentDidMount() : (r = n.elementType === n.type ? t.memoizedProps : Gi(n.type, t.memoizedProps), e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate))), void (null !== (t = n.updateQueue) && ho(n, t, e));
            case 3:
                if (null !== (t = n.updateQueue)) {
                    if (e = null, null !== n.child)
                        switch (n.child.tag) {
                            case 5:
                            case 1: e = n.child.stateNode;
                        }
                    ho(n, t, e);
                }
                return;
            case 5: return e = n.stateNode, void (null === t && 4 & n.flags && zr(n.type, n.memoizedProps) && e.focus());
            case 6:
            case 4:
            case 12:
            case 19:
            case 17:
            case 20:
            case 21:
            case 23:
            case 24: return;
            case 13: return void (null === n.memoizedState && (n = n.alternate, null !== n && (n = n.memoizedState, null !== n && (n = n.dehydrated, null !== n && xt(n)))));
        } throw Error(a(163)); }
        function gu(e, t) { for (var n = e;;) {
            if (5 === n.tag) {
                var r = n.stateNode;
                if (t)
                    "function" === typeof (r = r.style).setProperty ? r.setProperty("display", "none", "important") : r.display = "none";
                else {
                    r = n.stateNode;
                    var i = n.memoizedProps.style;
                    i = void 0 !== i && null !== i && i.hasOwnProperty("display") ? i.display : null, r.style.display = we("display", i);
                }
            }
            else if (6 === n.tag)
                n.stateNode.nodeValue = t ? "" : n.memoizedProps;
            else if ((23 !== n.tag && 24 !== n.tag || null === n.memoizedState || n === e) && null !== n.child) {
                n.child.return = n, n = n.child;
                continue;
            }
            if (n === e)
                break;
            for (; null === n.sibling;) {
                if (null === n.return || n.return === e)
                    return;
                n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
        } }
        function bu(e, t) { if (ki && "function" === typeof ki.onCommitFiberUnmount)
            try {
                ki.onCommitFiberUnmount(Ei, t);
            }
            catch (o) { } switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
                if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                    var n = e = e.next;
                    do {
                        var r = n, i = r.destroy;
                        if (r = r.tag, void 0 !== i)
                            if (0 !== (4 & r))
                                Ms(t, n);
                            else {
                                r = t;
                                try {
                                    i();
                                }
                                catch (o) {
                                    qs(r, o);
                                }
                            }
                        n = n.next;
                    } while (n !== e);
                }
                break;
            case 1:
                if (vu(t), "function" === typeof (e = t.stateNode).componentWillUnmount)
                    try {
                        e.props = t.memoizedProps, e.state = t.memoizedState, e.componentWillUnmount();
                    }
                    catch (o) {
                        qs(t, o);
                    }
                break;
            case 5:
                vu(t);
                break;
            case 4: Su(e, t);
        } }
        function wu(e) { e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.return = null, e.updateQueue = null; }
        function xu(e) { return 5 === e.tag || 3 === e.tag || 4 === e.tag; }
        function Eu(e) { e: {
            for (var t = e.return; null !== t;) {
                if (xu(t))
                    break e;
                t = t.return;
            }
            throw Error(a(160));
        } var n = t; switch (t = n.stateNode, n.tag) {
            case 5:
                var r = !1;
                break;
            case 3:
            case 4:
                t = t.containerInfo, r = !0;
                break;
            default: throw Error(a(161));
        } 16 & n.flags && (ye(t, ""), n.flags &= -17); e: t: for (n = e;;) {
            for (; null === n.sibling;) {
                if (null === n.return || xu(n.return)) {
                    n = null;
                    break e;
                }
                n = n.return;
            }
            for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag;) {
                if (2 & n.flags)
                    continue t;
                if (null === n.child || 4 === n.tag)
                    continue t;
                n.child.return = n, n = n.child;
            }
            if (!(2 & n.flags)) {
                n = n.stateNode;
                break e;
            }
        } r ? ku(e, n, t) : _u(e, n, t); }
        function ku(e, t, n) { var r = e.tag, i = 5 === r || 6 === r; if (i)
            e = i ? e.stateNode : e.stateNode.instance, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = Vr));
        else if (4 !== r && null !== (e = e.child))
            for (ku(e, t, n), e = e.sibling; null !== e;)
                ku(e, t, n), e = e.sibling; }
        function _u(e, t, n) { var r = e.tag, i = 5 === r || 6 === r; if (i)
            e = i ? e.stateNode : e.stateNode.instance, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (4 !== r && null !== (e = e.child))
            for (_u(e, t, n), e = e.sibling; null !== e;)
                _u(e, t, n), e = e.sibling; }
        function Su(e, t) { for (var n, r, i = t, o = !1;;) {
            if (!o) {
                o = i.return;
                e: for (;;) {
                    if (null === o)
                        throw Error(a(160));
                    switch (n = o.stateNode, o.tag) {
                        case 5:
                            r = !1;
                            break e;
                        case 3:
                        case 4:
                            n = n.containerInfo, r = !0;
                            break e;
                    }
                    o = o.return;
                }
                o = !0;
            }
            if (5 === i.tag || 6 === i.tag) {
                e: for (var u = e, s = i, l = s;;)
                    if (bu(u, l), null !== l.child && 4 !== l.tag)
                        l.child.return = l, l = l.child;
                    else {
                        if (l === s)
                            break e;
                        for (; null === l.sibling;) {
                            if (null === l.return || l.return === s)
                                break e;
                            l = l.return;
                        }
                        l.sibling.return = l.return, l = l.sibling;
                    }
                r ? (u = n, s = i.stateNode, 8 === u.nodeType ? u.parentNode.removeChild(s) : u.removeChild(s)) : n.removeChild(i.stateNode);
            }
            else if (4 === i.tag) {
                if (null !== i.child) {
                    n = i.stateNode.containerInfo, r = !0, i.child.return = i, i = i.child;
                    continue;
                }
            }
            else if (bu(e, i), null !== i.child) {
                i.child.return = i, i = i.child;
                continue;
            }
            if (i === t)
                break;
            for (; null === i.sibling;) {
                if (null === i.return || i.return === t)
                    return;
                4 === (i = i.return).tag && (o = !1);
            }
            i.sibling.return = i.return, i = i.sibling;
        } }
        function Ou(e, t) { switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
                var n = t.updateQueue;
                if (null !== (n = null !== n ? n.lastEffect : null)) {
                    var r = n = n.next;
                    do {
                        3 === (3 & r.tag) && (e = r.destroy, r.destroy = void 0, void 0 !== e && e()), r = r.next;
                    } while (r !== n);
                }
                return;
            case 1:
            case 12:
            case 17: return;
            case 5:
                if (null != (n = t.stateNode)) {
                    r = t.memoizedProps;
                    var i = null !== e ? e.memoizedProps : r;
                    e = t.type;
                    var o = t.updateQueue;
                    if (t.updateQueue = null, null !== o) {
                        for (n[Jr] = r, "input" === e && "radio" === r.type && null != r.name && te(n, r), _e(e, i), t = _e(e, r), i = 0; i < o.length; i += 2) {
                            var u = o[i], s = o[i + 1];
                            "style" === u ? xe(n, s) : "dangerouslySetInnerHTML" === u ? me(n, s) : "children" === u ? ye(n, s) : w(n, u, s, t);
                        }
                        switch (e) {
                            case "input":
                                ne(n, r);
                                break;
                            case "textarea":
                                le(n, r);
                                break;
                            case "select": e = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, null != (o = r.value) ? ae(n, !!r.multiple, o, !1) : e !== !!r.multiple && (null != r.defaultValue ? ae(n, !!r.multiple, r.defaultValue, !0) : ae(n, !!r.multiple, r.multiple ? [] : "", !1));
                        }
                    }
                }
                return;
            case 6:
                if (null === t.stateNode)
                    throw Error(a(162));
                return void (t.stateNode.nodeValue = t.memoizedProps);
            case 3: return void ((n = t.stateNode).hydrate && (n.hydrate = !1, xt(n.containerInfo)));
            case 13: return null !== t.memoizedState && (Zu = zi(), gu(t.child, !0)), void Nu(t);
            case 19: return void Nu(t);
            case 23:
            case 24: return void gu(t, null !== t.memoizedState);
        } throw Error(a(163)); }
        function Nu(e) { var t = e.updateQueue; if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new hu), t.forEach((function (t) { var r = zs.bind(null, e, t); n.has(t) || (n.add(t), t.then(r, r)); }));
        } }
        function Cu(e, t) { return null !== e && (null === (e = e.memoizedState) || null !== e.dehydrated) && (null !== (t = t.memoizedState) && null === t.dehydrated); }
        var Tu = Math.ceil, ju = x.ReactCurrentDispatcher, Pu = x.ReactCurrentOwner, Iu = 0, Ru = null, Du = null, Lu = 0, Au = 0, Mu = si(0), Fu = 0, Vu = null, qu = 0, Uu = 0, zu = 0, Qu = 0, Bu = null, Zu = 0, Wu = 1 / 0;
        function Hu() { Wu = zi() + 500; }
        var Ku, $u = null, Gu = !1, Yu = null, Ju = null, Xu = !1, es = null, ts = 90, ns = [], rs = [], is = null, os = 0, as = null, us = -1, ss = 0, ls = 0, cs = null, fs = !1;
        function ds() { return 0 !== (48 & Iu) ? zi() : -1 !== us ? us : us = zi(); }
        function ps(e) { if (0 === (2 & (e = e.mode)))
            return 1; if (0 === (4 & e))
            return 99 === Qi() ? 1 : 2; if (0 === ss && (ss = qu), 0 !== $i.transition) {
            0 !== ls && (ls = null !== Bu ? Bu.pendingLanes : 0), e = ss;
            var t = 4186112 & ~ls;
            return 0 === (t &= -t) && (0 === (t = (e = 4186112 & ~e) & -e) && (t = 8192)), t;
        } return e = Qi(), 0 !== (4 & Iu) && 98 === e ? e = Vt(12, ss) : e = Vt(e = function (e) { switch (e) {
            case 99: return 15;
            case 98: return 10;
            case 97:
            case 96: return 8;
            case 95: return 2;
            default: return 0;
        } }(e), ss), e; }
        function hs(e, t, n) { if (50 < os)
            throw os = 0, as = null, Error(a(185)); if (null === (e = vs(e, t)))
            return null; zt(e, t, n), e === Ru && (zu |= t, 4 === Fu && gs(e, Lu)); var r = Qi(); 1 === t ? 0 !== (8 & Iu) && 0 === (48 & Iu) ? bs(e) : (ms(e, n), 0 === Iu && (Hu(), Hi())) : (0 === (4 & Iu) || 98 !== r && 99 !== r || (null === is ? is = new Set([e]) : is.add(e)), ms(e, n)), Bu = e; }
        function vs(e, t) { e.lanes |= t; var n = e.alternate; for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;)
            e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return; return 3 === n.tag ? n.stateNode : null; }
        function ms(e, t) { for (var n = e.callbackNode, r = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, u = e.pendingLanes; 0 < u;) {
            var s = 31 - Qt(u), l = 1 << s, c = o[s];
            if (-1 === c) {
                if (0 === (l & r) || 0 !== (l & i)) {
                    c = t, At(l);
                    var f = Lt;
                    o[s] = 10 <= f ? c + 250 : 6 <= f ? c + 5e3 : -1;
                }
            }
            else
                c <= t && (e.expiredLanes |= l);
            u &= ~l;
        } if (r = Mt(e, e === Ru ? Lu : 0), t = Lt, 0 === r)
            null !== n && (n !== Ai && Oi(n), e.callbackNode = null, e.callbackPriority = 0);
        else {
            if (null !== n) {
                if (e.callbackPriority === t)
                    return;
                n !== Ai && Oi(n);
            }
            15 === t ? (n = bs.bind(null, e), null === Fi ? (Fi = [n], Vi = Si(Pi, Ki)) : Fi.push(n), n = Ai) : 14 === t ? n = Wi(99, bs.bind(null, e)) : (n = function (e) { switch (e) {
                case 15:
                case 14: return 99;
                case 13:
                case 12:
                case 11:
                case 10: return 98;
                case 9:
                case 8:
                case 7:
                case 6:
                case 4:
                case 5: return 97;
                case 3:
                case 2:
                case 1: return 95;
                case 0: return 90;
                default: throw Error(a(358, e));
            } }(t), n = Wi(n, ys.bind(null, e))), e.callbackPriority = t, e.callbackNode = n;
        } }
        function ys(e) { if (us = -1, ls = ss = 0, 0 !== (48 & Iu))
            throw Error(a(327)); var t = e.callbackNode; if (Ls() && e.callbackNode !== t)
            return null; var n = Mt(e, e === Ru ? Lu : 0); if (0 === n)
            return null; var r = n, i = Iu; Iu |= 16; var o = Os(); for (Ru === e && Lu === r || (Hu(), _s(e, r));;)
            try {
                Ts();
                break;
            }
            catch (s) {
                Ss(e, s);
            } if (to(), ju.current = o, Iu = i, null !== Du ? r = 0 : (Ru = null, Lu = 0, r = Fu), 0 !== (qu & zu))
            _s(e, 0);
        else if (0 !== r) {
            if (2 === r && (Iu |= 64, e.hydrate && (e.hydrate = !1, Wr(e.containerInfo)), 0 !== (n = Ft(e)) && (r = Ns(e, n))), 1 === r)
                throw t = Vu, _s(e, 0), gs(e, n), ms(e, zi()), t;
            switch (e.finishedWork = e.current.alternate, e.finishedLanes = n, r) {
                case 0:
                case 1: throw Error(a(345));
                case 2:
                case 5:
                    Is(e);
                    break;
                case 3:
                    if (gs(e, n), (62914560 & n) === n && 10 < (r = Zu + 500 - zi())) {
                        if (0 !== Mt(e, 0))
                            break;
                        if (((i = e.suspendedLanes) & n) !== n) {
                            ds(), e.pingedLanes |= e.suspendedLanes & i;
                            break;
                        }
                        e.timeoutHandle = Br(Is.bind(null, e), r);
                        break;
                    }
                    Is(e);
                    break;
                case 4:
                    if (gs(e, n), (4186112 & n) === n)
                        break;
                    for (r = e.eventTimes, i = -1; 0 < n;) {
                        var u = 31 - Qt(n);
                        o = 1 << u, (u = r[u]) > i && (i = u), n &= ~o;
                    }
                    if (n = i, 10 < (n = (120 > (n = zi() - n) ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * Tu(n / 1960)) - n)) {
                        e.timeoutHandle = Br(Is.bind(null, e), n);
                        break;
                    }
                    Is(e);
                    break;
                default: throw Error(a(329));
            }
        } return ms(e, zi()), e.callbackNode === t ? ys.bind(null, e) : null; }
        function gs(e, t) { for (t &= ~Qu, t &= ~zu, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
            var n = 31 - Qt(t), r = 1 << n;
            e[n] = -1, t &= ~r;
        } }
        function bs(e) { if (0 !== (48 & Iu))
            throw Error(a(327)); if (Ls(), e === Ru && 0 !== (e.expiredLanes & Lu)) {
            var t = Lu, n = Ns(e, t);
            0 !== (qu & zu) && (n = Ns(e, t = Mt(e, t)));
        }
        else
            n = Ns(e, t = Mt(e, 0)); if (0 !== e.tag && 2 === n && (Iu |= 64, e.hydrate && (e.hydrate = !1, Wr(e.containerInfo)), 0 !== (t = Ft(e)) && (n = Ns(e, t))), 1 === n)
            throw n = Vu, _s(e, 0), gs(e, t), ms(e, zi()), n; return e.finishedWork = e.current.alternate, e.finishedLanes = t, Is(e), ms(e, zi()), null; }
        function ws(e, t) { var n = Iu; Iu |= 1; try {
            return e(t);
        }
        finally {
            0 === (Iu = n) && (Hu(), Hi());
        } }
        function xs(e, t) { var n = Iu; Iu &= -2, Iu |= 8; try {
            return e(t);
        }
        finally {
            0 === (Iu = n) && (Hu(), Hi());
        } }
        function Es(e, t) { ci(Mu, Au), Au |= t, qu |= t; }
        function ks() { Au = Mu.current, li(Mu); }
        function _s(e, t) { e.finishedWork = null, e.finishedLanes = 0; var n = e.timeoutHandle; if (-1 !== n && (e.timeoutHandle = -1, Zr(n)), null !== Du)
            for (n = Du.return; null !== n;) {
                var r = n;
                switch (r.tag) {
                    case 1:
                        null !== (r = r.type.childContextTypes) && void 0 !== r && yi();
                        break;
                    case 3:
                        Do(), li(pi), li(di), $o();
                        break;
                    case 5:
                        Ao(r);
                        break;
                    case 4:
                        Do();
                        break;
                    case 13:
                    case 19:
                        li(Mo);
                        break;
                    case 10:
                        no(r);
                        break;
                    case 23:
                    case 24: ks();
                }
                n = n.return;
            } Ru = e, Du = Ws(e.current, null), Lu = Au = qu = t, Fu = 0, Vu = null, Qu = zu = Uu = 0; }
        function Ss(e, t) { for (;;) {
            var n = Du;
            try {
                if (to(), Go.current = Pa, na) {
                    for (var r = Xo.memoizedState; null !== r;) {
                        var i = r.queue;
                        null !== i && (i.pending = null), r = r.next;
                    }
                    na = !1;
                }
                if (Jo = 0, ta = ea = Xo = null, ra = !1, Pu.current = null, null === n || null === n.return) {
                    Fu = 1, Vu = t, Du = null;
                    break;
                }
                e: {
                    var o = e, a = n.return, u = n, s = t;
                    if (t = Lu, u.flags |= 2048, u.firstEffect = u.lastEffect = null, null !== s && "object" === typeof s && "function" === typeof s.then) {
                        var l = s;
                        if (0 === (2 & u.mode)) {
                            var c = u.alternate;
                            c ? (u.updateQueue = c.updateQueue, u.memoizedState = c.memoizedState, u.lanes = c.lanes) : (u.updateQueue = null, u.memoizedState = null);
                        }
                        var f = 0 !== (1 & Mo.current), d = a;
                        do {
                            var p;
                            if (p = 13 === d.tag) {
                                var h = d.memoizedState;
                                if (null !== h)
                                    p = null !== h.dehydrated;
                                else {
                                    var v = d.memoizedProps;
                                    p = void 0 !== v.fallback && (!0 !== v.unstable_avoidThisFallback || !f);
                                }
                            }
                            if (p) {
                                var m = d.updateQueue;
                                if (null === m) {
                                    var y = new Set;
                                    y.add(l), d.updateQueue = y;
                                }
                                else
                                    m.add(l);
                                if (0 === (2 & d.mode)) {
                                    if (d.flags |= 64, u.flags |= 16384, u.flags &= -2981, 1 === u.tag)
                                        if (null === u.alternate)
                                            u.tag = 17;
                                        else {
                                            var g = lo(-1, 1);
                                            g.tag = 2, co(u, g);
                                        }
                                    u.lanes |= 1;
                                    break e;
                                }
                                s = void 0, u = t;
                                var b = o.pingCache;
                                if (null === b ? (b = o.pingCache = new fu, s = new Set, b.set(l, s)) : void 0 === (s = b.get(l)) && (s = new Set, b.set(l, s)), !s.has(u)) {
                                    s.add(u);
                                    var w = Us.bind(null, o, l, u);
                                    l.then(w, w);
                                }
                                d.flags |= 4096, d.lanes = t;
                                break e;
                            }
                            d = d.return;
                        } while (null !== d);
                        s = Error((H(u.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
                    }
                    5 !== Fu && (Fu = 2), s = lu(s, u), d = a;
                    do {
                        switch (d.tag) {
                            case 3:
                                o = s, d.flags |= 4096, t &= -t, d.lanes |= t, fo(d, du(0, o, t));
                                break e;
                            case 1:
                                o = s;
                                var x = d.type, E = d.stateNode;
                                if (0 === (64 & d.flags) && ("function" === typeof x.getDerivedStateFromError || null !== E && "function" === typeof E.componentDidCatch && (null === Ju || !Ju.has(E)))) {
                                    d.flags |= 4096, t &= -t, d.lanes |= t, fo(d, pu(d, o, t));
                                    break e;
                                }
                        }
                        d = d.return;
                    } while (null !== d);
                }
                Ps(n);
            }
            catch (k) {
                t = k, Du === n && null !== n && (Du = n = n.return);
                continue;
            }
            break;
        } }
        function Os() { var e = ju.current; return ju.current = Pa, null === e ? Pa : e; }
        function Ns(e, t) { var n = Iu; Iu |= 16; var r = Os(); for (Ru === e && Lu === t || _s(e, t);;)
            try {
                Cs();
                break;
            }
            catch (i) {
                Ss(e, i);
            } if (to(), Iu = n, ju.current = r, null !== Du)
            throw Error(a(261)); return Ru = null, Lu = 0, Fu; }
        function Cs() { for (; null !== Du;)
            js(Du); }
        function Ts() { for (; null !== Du && !Ni();)
            js(Du); }
        function js(e) { var t = Ku(e.alternate, e, Au); e.memoizedProps = e.pendingProps, null === t ? Ps(e) : Du = t, Pu.current = null; }
        function Ps(e) { var t = e; do {
            var n = t.alternate;
            if (e = t.return, 0 === (2048 & t.flags)) {
                if (null !== (n = uu(n, t, Au)))
                    return void (Du = n);
                if (24 !== (n = t).tag && 23 !== n.tag || null === n.memoizedState || 0 !== (1073741824 & Au) || 0 === (4 & n.mode)) {
                    for (var r = 0, i = n.child; null !== i;)
                        r |= i.lanes | i.childLanes, i = i.sibling;
                    n.childLanes = r;
                }
                null !== e && 0 === (2048 & e.flags) && (null === e.firstEffect && (e.firstEffect = t.firstEffect), null !== t.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = t.firstEffect), e.lastEffect = t.lastEffect), 1 < t.flags && (null !== e.lastEffect ? e.lastEffect.nextEffect = t : e.firstEffect = t, e.lastEffect = t));
            }
            else {
                if (null !== (n = su(t)))
                    return n.flags &= 2047, void (Du = n);
                null !== e && (e.firstEffect = e.lastEffect = null, e.flags |= 2048);
            }
            if (null !== (t = t.sibling))
                return void (Du = t);
            Du = t = e;
        } while (null !== t); 0 === Fu && (Fu = 5); }
        function Is(e) { var t = Qi(); return Zi(99, Rs.bind(null, e, t)), null; }
        function Rs(e, t) { do {
            Ls();
        } while (null !== es); if (0 !== (48 & Iu))
            throw Error(a(327)); var n = e.finishedWork; if (null === n)
            return null; if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
            throw Error(a(177)); e.callbackNode = null; var r = n.lanes | n.childLanes, i = r, o = e.pendingLanes & ~i; e.pendingLanes = i, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= i, e.mutableReadLanes &= i, e.entangledLanes &= i, i = e.entanglements; for (var u = e.eventTimes, s = e.expirationTimes; 0 < o;) {
            var l = 31 - Qt(o), c = 1 << l;
            i[l] = 0, u[l] = -1, s[l] = -1, o &= ~c;
        } if (null !== is && 0 === (24 & r) && is.has(e) && is.delete(e), e === Ru && (Du = Ru = null, Lu = 0), 1 < n.flags ? null !== n.lastEffect ? (n.lastEffect.nextEffect = n, r = n.firstEffect) : r = n : r = n.firstEffect, null !== r) {
            if (i = Iu, Iu |= 32, Pu.current = null, qr = Kt, mr(u = vr())) {
                if ("selectionStart" in u)
                    s = { start: u.selectionStart, end: u.selectionEnd };
                else
                    e: if (s = (s = u.ownerDocument) && s.defaultView || window, (c = s.getSelection && s.getSelection()) && 0 !== c.rangeCount) {
                        s = c.anchorNode, o = c.anchorOffset, l = c.focusNode, c = c.focusOffset;
                        try {
                            s.nodeType, l.nodeType;
                        }
                        catch (O) {
                            s = null;
                            break e;
                        }
                        var f = 0, d = -1, p = -1, h = 0, v = 0, m = u, y = null;
                        t: for (;;) {
                            for (var g; m !== s || 0 !== o && 3 !== m.nodeType || (d = f + o), m !== l || 0 !== c && 3 !== m.nodeType || (p = f + c), 3 === m.nodeType && (f += m.nodeValue.length), null !== (g = m.firstChild);)
                                y = m, m = g;
                            for (;;) {
                                if (m === u)
                                    break t;
                                if (y === s && ++h === o && (d = f), y === l && ++v === c && (p = f), null !== (g = m.nextSibling))
                                    break;
                                y = (m = y).parentNode;
                            }
                            m = g;
                        }
                        s = -1 === d || -1 === p ? null : { start: d, end: p };
                    }
                    else
                        s = null;
                s = s || { start: 0, end: 0 };
            }
            else
                s = null;
            Ur = { focusedElem: u, selectionRange: s }, Kt = !1, cs = null, fs = !1, $u = r;
            do {
                try {
                    Ds();
                }
                catch (O) {
                    if (null === $u)
                        throw Error(a(330));
                    qs($u, O), $u = $u.nextEffect;
                }
            } while (null !== $u);
            cs = null, $u = r;
            do {
                try {
                    for (u = e; null !== $u;) {
                        var b = $u.flags;
                        if (16 & b && ye($u.stateNode, ""), 128 & b) {
                            var w = $u.alternate;
                            if (null !== w) {
                                var x = w.ref;
                                null !== x && ("function" === typeof x ? x(null) : x.current = null);
                            }
                        }
                        switch (1038 & b) {
                            case 2:
                                Eu($u), $u.flags &= -3;
                                break;
                            case 6:
                                Eu($u), $u.flags &= -3, Ou($u.alternate, $u);
                                break;
                            case 1024:
                                $u.flags &= -1025;
                                break;
                            case 1028:
                                $u.flags &= -1025, Ou($u.alternate, $u);
                                break;
                            case 4:
                                Ou($u.alternate, $u);
                                break;
                            case 8:
                                Su(u, s = $u);
                                var E = s.alternate;
                                wu(s), null !== E && wu(E);
                        }
                        $u = $u.nextEffect;
                    }
                }
                catch (O) {
                    if (null === $u)
                        throw Error(a(330));
                    qs($u, O), $u = $u.nextEffect;
                }
            } while (null !== $u);
            if (x = Ur, w = vr(), b = x.focusedElem, u = x.selectionRange, w !== b && b && b.ownerDocument && hr(b.ownerDocument.documentElement, b)) {
                null !== u && mr(b) && (w = u.start, void 0 === (x = u.end) && (x = w), "selectionStart" in b ? (b.selectionStart = w, b.selectionEnd = Math.min(x, b.value.length)) : (x = (w = b.ownerDocument || document) && w.defaultView || window).getSelection && (x = x.getSelection(), s = b.textContent.length, E = Math.min(u.start, s), u = void 0 === u.end ? E : Math.min(u.end, s), !x.extend && E > u && (s = u, u = E, E = s), s = pr(b, E), o = pr(b, u), s && o && (1 !== x.rangeCount || x.anchorNode !== s.node || x.anchorOffset !== s.offset || x.focusNode !== o.node || x.focusOffset !== o.offset) && ((w = w.createRange()).setStart(s.node, s.offset), x.removeAllRanges(), E > u ? (x.addRange(w), x.extend(o.node, o.offset)) : (w.setEnd(o.node, o.offset), x.addRange(w))))), w = [];
                for (x = b; x = x.parentNode;)
                    1 === x.nodeType && w.push({ element: x, left: x.scrollLeft, top: x.scrollTop });
                for ("function" === typeof b.focus && b.focus(), b = 0; b < w.length; b++)
                    (x = w[b]).element.scrollLeft = x.left, x.element.scrollTop = x.top;
            }
            Kt = !!qr, Ur = qr = null, e.current = n, $u = r;
            do {
                try {
                    for (b = e; null !== $u;) {
                        var k = $u.flags;
                        if (36 & k && yu(b, $u.alternate, $u), 128 & k) {
                            w = void 0;
                            var _ = $u.ref;
                            if (null !== _) {
                                var S = $u.stateNode;
                                $u.tag, w = S, "function" === typeof _ ? _(w) : _.current = w;
                            }
                        }
                        $u = $u.nextEffect;
                    }
                }
                catch (O) {
                    if (null === $u)
                        throw Error(a(330));
                    qs($u, O), $u = $u.nextEffect;
                }
            } while (null !== $u);
            $u = null, Mi(), Iu = i;
        }
        else
            e.current = n; if (Xu)
            Xu = !1, es = e, ts = t;
        else
            for ($u = r; null !== $u;)
                t = $u.nextEffect, $u.nextEffect = null, 8 & $u.flags && ((k = $u).sibling = null, k.stateNode = null), $u = t; if (0 === (r = e.pendingLanes) && (Ju = null), 1 === r ? e === as ? os++ : (os = 0, as = e) : os = 0, n = n.stateNode, ki && "function" === typeof ki.onCommitFiberRoot)
            try {
                ki.onCommitFiberRoot(Ei, n, void 0, 64 === (64 & n.current.flags));
            }
            catch (O) { } if (ms(e, zi()), Gu)
            throw Gu = !1, e = Yu, Yu = null, e; return 0 !== (8 & Iu) || Hi(), null; }
        function Ds() { for (; null !== $u;) {
            var e = $u.alternate;
            fs || null === cs || (0 !== (8 & $u.flags) ? Xe($u, cs) && (fs = !0) : 13 === $u.tag && Cu(e, $u) && Xe($u, cs) && (fs = !0));
            var t = $u.flags;
            0 !== (256 & t) && mu(e, $u), 0 === (512 & t) || Xu || (Xu = !0, Wi(97, (function () { return Ls(), null; }))), $u = $u.nextEffect;
        } }
        function Ls() { if (90 !== ts) {
            var e = 97 < ts ? 97 : ts;
            return ts = 90, Zi(e, Fs);
        } return !1; }
        function As(e, t) { ns.push(t, e), Xu || (Xu = !0, Wi(97, (function () { return Ls(), null; }))); }
        function Ms(e, t) { rs.push(t, e), Xu || (Xu = !0, Wi(97, (function () { return Ls(), null; }))); }
        function Fs() { if (null === es)
            return !1; var e = es; if (es = null, 0 !== (48 & Iu))
            throw Error(a(331)); var t = Iu; Iu |= 32; var n = rs; rs = []; for (var r = 0; r < n.length; r += 2) {
            var i = n[r], o = n[r + 1], u = i.destroy;
            if (i.destroy = void 0, "function" === typeof u)
                try {
                    u();
                }
                catch (l) {
                    if (null === o)
                        throw Error(a(330));
                    qs(o, l);
                }
        } for (n = ns, ns = [], r = 0; r < n.length; r += 2) {
            i = n[r], o = n[r + 1];
            try {
                var s = i.create;
                i.destroy = s();
            }
            catch (l) {
                if (null === o)
                    throw Error(a(330));
                qs(o, l);
            }
        } for (s = e.current.firstEffect; null !== s;)
            e = s.nextEffect, s.nextEffect = null, 8 & s.flags && (s.sibling = null, s.stateNode = null), s = e; return Iu = t, Hi(), !0; }
        function Vs(e, t, n) { co(e, t = du(0, t = lu(n, t), 1)), t = ds(), null !== (e = vs(e, 1)) && (zt(e, 1, t), ms(e, t)); }
        function qs(e, t) { if (3 === e.tag)
            Vs(e, e, t);
        else
            for (var n = e.return; null !== n;) {
                if (3 === n.tag) {
                    Vs(n, e, t);
                    break;
                }
                if (1 === n.tag) {
                    var r = n.stateNode;
                    if ("function" === typeof n.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === Ju || !Ju.has(r))) {
                        var i = pu(n, e = lu(t, e), 1);
                        if (co(n, i), i = ds(), null !== (n = vs(n, 1)))
                            zt(n, 1, i), ms(n, i);
                        else if ("function" === typeof r.componentDidCatch && (null === Ju || !Ju.has(r)))
                            try {
                                r.componentDidCatch(t, e);
                            }
                            catch (o) { }
                        break;
                    }
                }
                n = n.return;
            } }
        function Us(e, t, n) { var r = e.pingCache; null !== r && r.delete(t), t = ds(), e.pingedLanes |= e.suspendedLanes & n, Ru === e && (Lu & n) === n && (4 === Fu || 3 === Fu && (62914560 & Lu) === Lu && 500 > zi() - Zu ? _s(e, 0) : Qu |= n), ms(e, t); }
        function zs(e, t) { var n = e.stateNode; null !== n && n.delete(t), 0 === (t = 0) && (0 === (2 & (t = e.mode)) ? t = 1 : 0 === (4 & t) ? t = 99 === Qi() ? 1 : 2 : (0 === ss && (ss = qu), 0 === (t = qt(62914560 & ~ss)) && (t = 4194304))), n = ds(), null !== (e = vs(e, t)) && (zt(e, t, n), ms(e, n)); }
        function Qs(e, t, n, r) { this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null; }
        function Bs(e, t, n, r) { return new Qs(e, t, n, r); }
        function Zs(e) { return !(!(e = e.prototype) || !e.isReactComponent); }
        function Ws(e, t) { var n = e.alternate; return null === n ? ((n = Bs(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n; }
        function Hs(e, t, n, r, i, o) { var u = 2; if (r = e, "function" === typeof e)
            Zs(e) && (u = 1);
        else if ("string" === typeof e)
            u = 5;
        else
            e: switch (e) {
                case _: return Ks(n.children, i, o, t);
                case A:
                    u = 8, i |= 16;
                    break;
                case S:
                    u = 8, i |= 1;
                    break;
                case O: return (e = Bs(12, n, t, 8 | i)).elementType = O, e.type = O, e.lanes = o, e;
                case j: return (e = Bs(13, n, t, i)).type = j, e.elementType = j, e.lanes = o, e;
                case P: return (e = Bs(19, n, t, i)).elementType = P, e.lanes = o, e;
                case M: return $s(n, i, o, t);
                case F: return (e = Bs(24, n, t, i)).elementType = F, e.lanes = o, e;
                default:
                    if ("object" === typeof e && null !== e)
                        switch (e.$$typeof) {
                            case N:
                                u = 10;
                                break e;
                            case C:
                                u = 9;
                                break e;
                            case T:
                                u = 11;
                                break e;
                            case I:
                                u = 14;
                                break e;
                            case R:
                                u = 16, r = null;
                                break e;
                            case D:
                                u = 22;
                                break e;
                        }
                    throw Error(a(130, null == e ? e : typeof e, ""));
            } return (t = Bs(u, n, t, i)).elementType = e, t.type = r, t.lanes = o, t; }
        function Ks(e, t, n, r) { return (e = Bs(7, e, r, t)).lanes = n, e; }
        function $s(e, t, n, r) { return (e = Bs(23, e, r, t)).elementType = M, e.lanes = n, e; }
        function Gs(e, t, n) { return (e = Bs(6, e, null, t)).lanes = n, e; }
        function Ys(e, t, n) { return (t = Bs(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t; }
        function Js(e, t, n) { this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = Ut(0), this.expirationTimes = Ut(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ut(0), this.mutableSourceEagerHydrationData = null; }
        function Xs(e, t, n, r) { var i = t.current, o = ds(), u = ps(i); e: if (n) {
            t: {
                if ($e(n = n._reactInternals) !== n || 1 !== n.tag)
                    throw Error(a(170));
                var s = n;
                do {
                    switch (s.tag) {
                        case 3:
                            s = s.stateNode.context;
                            break t;
                        case 1: if (mi(s.type)) {
                            s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                            break t;
                        }
                    }
                    s = s.return;
                } while (null !== s);
                throw Error(a(171));
            }
            if (1 === n.tag) {
                var l = n.type;
                if (mi(l)) {
                    n = bi(n, l, s);
                    break e;
                }
            }
            n = s;
        }
        else
            n = fi; return null === t.context ? t.context = n : t.pendingContext = n, (t = lo(o, u)).payload = { element: e }, null !== (r = void 0 === r ? null : r) && (t.callback = r), co(i, t), hs(i, u, o), u; }
        function el(e) { return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null; }
        function tl(e, t) { if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
        } }
        function nl(e, t) { tl(e, t), (e = e.alternate) && tl(e, t); }
        function rl(e, t, n) { var r = null != n && null != n.hydrationOptions && n.hydrationOptions.mutableSources || null; if (n = new Js(e, t, null != n && !0 === n.hydrate), t = Bs(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0), n.current = t, t.stateNode = n, uo(t), e[Xr] = n.current, Pr(8 === e.nodeType ? e.parentNode : e), r)
            for (e = 0; e < r.length; e++) {
                var i = (t = r[e])._getVersion;
                i = i(t._source), null == n.mutableSourceEagerHydrationData ? n.mutableSourceEagerHydrationData = [t, i] : n.mutableSourceEagerHydrationData.push(t, i);
            } this._internalRoot = n; }
        function il(e) { return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue)); }
        function ol(e, t, n, r, i) { var o = n._reactRootContainer; if (o) {
            var a = o._internalRoot;
            if ("function" === typeof i) {
                var u = i;
                i = function () { var e = el(a); u.call(e); };
            }
            Xs(t, a, e, i);
        }
        else {
            if (o = n._reactRootContainer = function (e, t) { if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t)
                for (var n; n = e.lastChild;)
                    e.removeChild(n); return new rl(e, 0, t ? { hydrate: !0 } : void 0); }(n, r), a = o._internalRoot, "function" === typeof i) {
                var s = i;
                i = function () { var e = el(a); s.call(e); };
            }
            xs((function () { Xs(t, a, e, i); }));
        } return el(a); }
        function al(e, t) { var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null; if (!il(t))
            throw Error(a(200)); return function (e, t, n) { var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null; return { $$typeof: k, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n }; }(e, t, null, n); }
        Ku = function (e, t, n) { var r = t.lanes; if (null !== e)
            if (e.memoizedProps !== t.pendingProps || pi.current)
                Aa = !0;
            else {
                if (0 === (n & r)) {
                    switch (Aa = !1, t.tag) {
                        case 3:
                            Wa(t), Ho();
                            break;
                        case 5:
                            Lo(t);
                            break;
                        case 1:
                            mi(t.type) && wi(t);
                            break;
                        case 4:
                            Ro(t, t.stateNode.containerInfo);
                            break;
                        case 10:
                            r = t.memoizedProps.value;
                            var i = t.type._context;
                            ci(Yi, i._currentValue), i._currentValue = r;
                            break;
                        case 13:
                            if (null !== t.memoizedState)
                                return 0 !== (n & t.child.childLanes) ? Ja(e, t, n) : (ci(Mo, 1 & Mo.current), null !== (t = ou(e, t, n)) ? t.sibling : null);
                            ci(Mo, 1 & Mo.current);
                            break;
                        case 19:
                            if (r = 0 !== (n & t.childLanes), 0 !== (64 & e.flags)) {
                                if (r)
                                    return iu(e, t, n);
                                t.flags |= 64;
                            }
                            if (null !== (i = t.memoizedState) && (i.rendering = null, i.tail = null, i.lastEffect = null), ci(Mo, Mo.current), r)
                                break;
                            return null;
                        case 23:
                        case 24: return t.lanes = 0, Ua(e, t, n);
                    }
                    return ou(e, t, n);
                }
                Aa = 0 !== (16384 & e.flags);
            }
        else
            Aa = !1; switch (t.lanes = 0, t.tag) {
            case 2:
                if (r = t.type, null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, i = vi(t, di.current), io(t, n), i = aa(null, t, r, e, i, n), t.flags |= 1, "object" === typeof i && null !== i && "function" === typeof i.render && void 0 === i.$$typeof) {
                    if (t.tag = 1, t.memoizedState = null, t.updateQueue = null, mi(r)) {
                        var o = !0;
                        wi(t);
                    }
                    else
                        o = !1;
                    t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null, uo(t);
                    var u = r.getDerivedStateFromProps;
                    "function" === typeof u && mo(t, r, u, e), i.updater = yo, t.stateNode = i, i._reactInternals = t, xo(t, r, e, n), t = Za(null, t, r, !0, o, n);
                }
                else
                    t.tag = 0, Ma(null, t, i, n), t = t.child;
                return t;
            case 16:
                i = t.elementType;
                e: {
                    switch (null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, i = (o = i._init)(i._payload), t.type = i, o = t.tag = function (e) { if ("function" === typeof e)
                        return Zs(e) ? 1 : 0; if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === T)
                            return 11;
                        if (e === I)
                            return 14;
                    } return 2; }(i), e = Gi(i, e), o) {
                        case 0:
                            t = Qa(null, t, i, e, n);
                            break e;
                        case 1:
                            t = Ba(null, t, i, e, n);
                            break e;
                        case 11:
                            t = Fa(null, t, i, e, n);
                            break e;
                        case 14:
                            t = Va(null, t, i, Gi(i.type, e), r, n);
                            break e;
                    }
                    throw Error(a(306, i, ""));
                }
                return t;
            case 0: return r = t.type, i = t.pendingProps, Qa(e, t, r, i = t.elementType === r ? i : Gi(r, i), n);
            case 1: return r = t.type, i = t.pendingProps, Ba(e, t, r, i = t.elementType === r ? i : Gi(r, i), n);
            case 3:
                if (Wa(t), r = t.updateQueue, null === e || null === r)
                    throw Error(a(282));
                if (r = t.pendingProps, i = null !== (i = t.memoizedState) ? i.element : null, so(e, t), po(t, r, null, n), (r = t.memoizedState.element) === i)
                    Ho(), t = ou(e, t, n);
                else {
                    if ((o = (i = t.stateNode).hydrate) && (qo = Hr(t.stateNode.containerInfo.firstChild), Vo = t, o = Uo = !0), o) {
                        if (null != (e = i.mutableSourceEagerHydrationData))
                            for (i = 0; i < e.length; i += 2)
                                (o = e[i])._workInProgressVersionPrimary = e[i + 1], Ko.push(o);
                        for (n = No(t, null, r, n), t.child = n; n;)
                            n.flags = -3 & n.flags | 1024, n = n.sibling;
                    }
                    else
                        Ma(e, t, r, n), Ho();
                    t = t.child;
                }
                return t;
            case 5: return Lo(t), null === e && Bo(t), r = t.type, i = t.pendingProps, o = null !== e ? e.memoizedProps : null, u = i.children, Qr(r, i) ? u = null : null !== o && Qr(r, o) && (t.flags |= 16), za(e, t), Ma(e, t, u, n), t.child;
            case 6: return null === e && Bo(t), null;
            case 13: return Ja(e, t, n);
            case 4: return Ro(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Oo(t, null, r, n) : Ma(e, t, r, n), t.child;
            case 11: return r = t.type, i = t.pendingProps, Fa(e, t, r, i = t.elementType === r ? i : Gi(r, i), n);
            case 7: return Ma(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12: return Ma(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    r = t.type._context, i = t.pendingProps, u = t.memoizedProps, o = i.value;
                    var s = t.type._context;
                    if (ci(Yi, s._currentValue), s._currentValue = o, null !== u)
                        if (s = u.value, 0 === (o = lr(s, o) ? 0 : 0 | ("function" === typeof r._calculateChangedBits ? r._calculateChangedBits(s, o) : 1073741823))) {
                            if (u.children === i.children && !pi.current) {
                                t = ou(e, t, n);
                                break e;
                            }
                        }
                        else
                            for (null !== (s = t.child) && (s.return = t); null !== s;) {
                                var l = s.dependencies;
                                if (null !== l) {
                                    u = s.child;
                                    for (var c = l.firstContext; null !== c;) {
                                        if (c.context === r && 0 !== (c.observedBits & o)) {
                                            1 === s.tag && ((c = lo(-1, n & -n)).tag = 2, co(s, c)), s.lanes |= n, null !== (c = s.alternate) && (c.lanes |= n), ro(s.return, n), l.lanes |= n;
                                            break;
                                        }
                                        c = c.next;
                                    }
                                }
                                else
                                    u = 10 === s.tag && s.type === t.type ? null : s.child;
                                if (null !== u)
                                    u.return = s;
                                else
                                    for (u = s; null !== u;) {
                                        if (u === t) {
                                            u = null;
                                            break;
                                        }
                                        if (null !== (s = u.sibling)) {
                                            s.return = u.return, u = s;
                                            break;
                                        }
                                        u = u.return;
                                    }
                                s = u;
                            }
                    Ma(e, t, i.children, n), t = t.child;
                }
                return t;
            case 9: return i = t.type, r = (o = t.pendingProps).children, io(t, n), r = r(i = oo(i, o.unstable_observedBits)), t.flags |= 1, Ma(e, t, r, n), t.child;
            case 14: return o = Gi(i = t.type, t.pendingProps), Va(e, t, i, o = Gi(i.type, o), r, n);
            case 15: return qa(e, t, t.type, t.pendingProps, r, n);
            case 17: return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Gi(r, i), null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), t.tag = 1, mi(r) ? (e = !0, wi(t)) : e = !1, io(t, n), bo(t, r, i), xo(t, r, i, n), Za(null, t, r, !0, e, n);
            case 19: return iu(e, t, n);
            case 23:
            case 24: return Ua(e, t, n);
        } throw Error(a(156, t.tag)); }, rl.prototype.render = function (e) { Xs(e, this._internalRoot, null, null); }, rl.prototype.unmount = function () { var e = this._internalRoot, t = e.containerInfo; Xs(null, e, null, (function () { t[Xr] = null; })); }, et = function (e) { 13 === e.tag && (hs(e, 4, ds()), nl(e, 4)); }, tt = function (e) { 13 === e.tag && (hs(e, 67108864, ds()), nl(e, 67108864)); }, nt = function (e) { if (13 === e.tag) {
            var t = ds(), n = ps(e);
            hs(e, n, t), nl(e, n);
        } }, rt = function (e, t) { return t(); }, Oe = function (e, t, n) { switch (t) {
            case "input":
                if (ne(e, n), t = n.name, "radio" === n.type && null != t) {
                    for (n = e; n.parentNode;)
                        n = n.parentNode;
                    for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var i = ii(r);
                            if (!i)
                                throw Error(a(90));
                            Y(r), ne(r, i);
                        }
                    }
                }
                break;
            case "textarea":
                le(e, n);
                break;
            case "select": null != (t = n.value) && ae(e, !!n.multiple, t, !1);
        } }, Ie = ws, Re = function (e, t, n, r, i) { var o = Iu; Iu |= 4; try {
            return Zi(98, e.bind(null, t, n, r, i));
        }
        finally {
            0 === (Iu = o) && (Hu(), Hi());
        } }, De = function () { 0 === (49 & Iu) && (function () { if (null !== is) {
            var e = is;
            is = null, e.forEach((function (e) { e.expiredLanes |= 24 & e.pendingLanes, ms(e, zi()); }));
        } Hi(); }(), Ls()); }, Le = function (e, t) { var n = Iu; Iu |= 2; try {
            return e(t);
        }
        finally {
            0 === (Iu = n) && (Hu(), Hi());
        } };
        var ul = { Events: [ni, ri, ii, je, Pe, Ls, { current: !1 }] }, sl = { findFiberByHostInstance: ti, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" }, ll = { bundleType: sl.bundleType, version: sl.version, rendererPackageName: sl.rendererPackageName, rendererConfig: sl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: x.ReactCurrentDispatcher, findHostInstanceByFiber: function (e) { return null === (e = Je(e)) ? null : e.stateNode; }, findFiberByHostInstance: sl.findFiberByHostInstance || function () { return null; }, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
            var cl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!cl.isDisabled && cl.supportsFiber)
                try {
                    Ei = cl.inject(ll), ki = cl;
                }
                catch (ve) { }
        }
        t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ul, t.createPortal = al, t.findDOMNode = function (e) { if (null == e)
            return null; if (1 === e.nodeType)
            return e; var t = e._reactInternals; if (void 0 === t) {
            if ("function" === typeof e.render)
                throw Error(a(188));
            throw Error(a(268, Object.keys(e)));
        } return e = null === (e = Je(t)) ? null : e.stateNode; }, t.flushSync = function (e, t) { var n = Iu; if (0 !== (48 & n))
            return e(t); Iu |= 1; try {
            if (e)
                return Zi(99, e.bind(null, t));
        }
        finally {
            Iu = n, Hi();
        } }, t.hydrate = function (e, t, n) { if (!il(t))
            throw Error(a(200)); return ol(null, e, t, !0, n); }, t.render = function (e, t, n) { if (!il(t))
            throw Error(a(200)); return ol(null, e, t, !1, n); }, t.unmountComponentAtNode = function (e) { if (!il(e))
            throw Error(a(40)); return !!e._reactRootContainer && (xs((function () { ol(null, null, e, !1, (function () { e._reactRootContainer = null, e[Xr] = null; })); })), !0); }, t.unstable_batchedUpdates = ws, t.unstable_createPortal = function (e, t) { return al(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null); }, t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) { if (!il(n))
            throw Error(a(200)); if (null == e || void 0 === e._reactInternals)
            throw Error(a(38)); return ol(e, t, n, !1, r); }, t.version = "17.0.2";
    }, 4164: function (e, t, n) {
        "use strict";
        !function e() { if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            }
            catch (t) {
                console.error(t);
            } }(), e.exports = n(4463);
    }, 8892: function (e, t, n) { var r = n(7424).default, i = n(7061).default, o = n(7156).default, a = n(2791), u = n(4753), s = u.useSpring, l = u.animated, c = window.innerHeight, f = window.innerWidth, d = { maxTilt: 25, rotationPower: 50, swipeThreshold: .5 }, p = { touchResponsive: { friction: 50, tension: 2e3 }, animateOut: { friction: 30, tension: 400 }, animateBack: { friction: 10, tension: 200 } }, h = function (e, t) { return Math.sqrt(Math.pow(e, 2) + Math.pow(t, 2)); }, v = function (e) { var t = Math.sqrt(Math.pow(e.x, 2) + Math.pow(e.y, 2)); return { x: e.x / t, y: e.y / t }; }, m = function () { var e = o(i().mark((function e(t, n) { var r, o, a, u, s, l; return i().wrap((function (e) { for (;;)
        switch (e.prev = e.next) {
            case 0: return r = h(c, f), o = h(t.x, t.y), a = r * t.x, u = r * t.y, s = 45 * t.x, l = r / o, n.start({ xyrot: [a, u, s], config: { duration: l } }), e.next = 9, new Promise((function (e) { return setTimeout((function () { e(); }), l); }));
            case 9: return e.abrupt("return", e.sent);
            case 10:
            case "end": return e.stop();
        } }), e); }))); return function (t, n) { return e.apply(this, arguments); }; }(), y = function (e) { return new Promise((function (t) { e.start({ xyrot: [0, 0, 0], config: p.animateBack, onRest: t }); })); }, g = function (e) { if (Math.abs(e.x) > Math.abs(e.y)) {
        if (e.x > d.swipeThreshold)
            return "right";
        if (e.x < -d.swipeThreshold)
            return "left";
    }
    else {
        if (e.y > d.swipeThreshold)
            return "down";
        if (e.y < -d.swipeThreshold)
            return "up";
    } return "none"; }, b = l.div, w = a.forwardRef((function (e, t) { var n = e.flickOnSwipe, u = void 0 === n || n, l = e.children, c = e.onSwipe, f = e.onCardLeftScreen, h = e.className, w = e.preventSwipe, x = void 0 === w ? [] : w, E = e.swipeRequirementType, k = void 0 === E ? "velocity" : E, _ = e.swipeThreshold, S = void 0 === _ ? d.swipeThreshold : _, O = e.onSwipeRequirementFulfilled, N = e.onSwipeRequirementUnfulfilled, C = s((function () { return { xyrot: [0, 0, 0], config: p.touchResponsive }; })), T = r(C, 2), j = T[0].xyrot, P = T[1]; d.swipeThreshold = S, a.useImperativeHandle(t, (function () { return { swipe: function () { var e = arguments; return o(i().mark((function t() { var n, r, o; return i().wrap((function (t) { for (;;)
            switch (t.prev = t.next) {
                case 0:
                    if (n = e.length > 0 && void 0 !== e[0] ? e[0] : "right", c && c(n), r = 1.3, o = (Math.random() - .5) / 2, "right" !== n) {
                        t.next = 9;
                        break;
                    }
                    return t.next = 7, m({ x: r, y: o }, P);
                case 7:
                    t.next = 22;
                    break;
                case 9:
                    if ("left" !== n) {
                        t.next = 14;
                        break;
                    }
                    return t.next = 12, m({ x: -r, y: o }, P);
                case 12:
                    t.next = 22;
                    break;
                case 14:
                    if ("up" !== n) {
                        t.next = 19;
                        break;
                    }
                    return t.next = 17, m({ x: o, y: r }, P);
                case 17:
                    t.next = 22;
                    break;
                case 19:
                    if ("down" !== n) {
                        t.next = 22;
                        break;
                    }
                    return t.next = 22, m({ x: o, y: -r }, P);
                case 22: f && f(n);
                case 23:
                case "end": return t.stop();
            } }), t); })))(); }, restoreCard: function () { return o(i().mark((function e() { return i().wrap((function (e) { for (;;)
            switch (e.prev = e.next) {
                case 0: return e.next = 2, y(P);
                case 2:
                case "end": return e.stop();
            } }), e); })))(); } }; })); var I = a.useCallback(function () { var e = o(i().mark((function e(t, n) { var r; return i().wrap((function (e) { for (;;)
        switch (e.prev = e.next) {
            case 0:
                if ("none" === (r = g({ x: "velocity" === k ? n.vx : n.dx, y: "velocity" === k ? n.vy : n.dy }))) {
                    e.next = 9;
                    break;
                }
                if (!u) {
                    e.next = 9;
                    break;
                }
                if (x.includes(r)) {
                    e.next = 9;
                    break;
                }
                return c && c(r), e.next = 7, m("velocity" === k ? { x: n.vx, y: n.vy } : v({ x: n.dx, y: n.dy }), t, k);
            case 7: return f && f(r), e.abrupt("return");
            case 9: y(t);
            case 10:
            case "end": return e.stop();
        } }), e); }))); return function (t, n) { return e.apply(this, arguments); }; }(), [k, u, x, c, f]), R = "none", D = function (e, t, n, r) { var i = r ? e.touches[0].clientX - t.x : e.clientX - t.x, o = r ? e.touches[0].clientY - t.y : e.clientY - t.y; return 0 === t.x && 0 === t.y && (i = 0, o = 0), { dx: i, dy: o, vx: -(i - n.dx) / (n.timeStamp - Date.now()), vy: -(o - n.dy) / (n.timeStamp - Date.now()), timeStamp: Date.now() }; }; a.useLayoutEffect((function () { var e = { x: 0, y: 0 }, t = { dx: 0, dy: 0, vx: 0, vy: 0, timeStamp: Date.now() }, n = !1; L.current.addEventListener("touchstart", (function (n) { !n.srcElement.className.includes("pressable") && n.cancelable && n.preventDefault(); var r = D(n, e, t, !0); t = r, e = { x: n.touches[0].clientX, y: n.touches[0].clientY }; })), L.current.addEventListener("mousedown", (function (r) { n = !0; var i = D(r, e, t, !1); t = i, e = { x: r.clientX, y: r.clientY }; })); var r = function (e) { if (O || N) {
        var t = g({ x: "velocity" === k ? e.vx : e.dx, y: "velocity" === k ? e.vy : e.dy });
        t !== R && ("none" === (R = t) ? N && N() : O && O(t));
    } var n = 15 * e.vx; n = Math.max(Math.min(n, d.maxTilt), -d.maxTilt), P.start({ xyrot: [e.dx, e.dy, n], config: p.touchResponsive }); }; window.addEventListener("mousemove", (function (i) { if (n) {
        var o = D(i, e, t, !1);
        t = o, r(o);
    } })), window.addEventListener("mouseup", (function (r) { n && (n = !1, I(P, t), e = { x: 0, y: 0 }, t = { dx: 0, dy: 0, vx: 0, vy: 0, timeStamp: Date.now() }); })), L.current.addEventListener("touchmove", (function (n) { var i = D(n, e, t, !0); t = i, r(i); })), L.current.addEventListener("touchend", (function (n) { I(P, t), e = { x: 0, y: 0 }, t = { dx: 0, dy: 0, vx: 0, vy: 0, timeStamp: Date.now() }; })); })); var L = a.useRef(); return a.createElement(b, { ref: L, className: h, style: { transform: j.to((function (e, t, n) { return "translate3d(".concat(e, "px, ").concat(t, "px, ", 0, "px) rotate(").concat(n, "deg)"); })) }, children: l }); })); e.exports = w; }, 6374: function (e, t, n) {
        "use strict";
        n(1725);
        var r = n(2791), i = 60103;
        if (t.Fragment = 60107, "function" === typeof Symbol && Symbol.for) {
            var o = Symbol.for;
            i = o("react.element"), t.Fragment = o("react.fragment");
        }
        var a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = Object.prototype.hasOwnProperty, s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function l(e, t, n) { var r, o = {}, l = null, c = null; for (r in void 0 !== n && (l = "" + n), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (c = t.ref), t)
            u.call(t, r) && !s.hasOwnProperty(r) && (o[r] = t[r]); if (e && e.defaultProps)
            for (r in t = e.defaultProps)
                void 0 === o[r] && (o[r] = t[r]); return { $$typeof: i, type: e, key: l, ref: c, props: o, _owner: a.current }; }
        t.jsx = l, t.jsxs = l;
    }, 9117: function (e, t, n) {
        "use strict";
        var r = n(1725), i = 60103, o = 60106;
        t.Fragment = 60107, t.StrictMode = 60108, t.Profiler = 60114;
        var a = 60109, u = 60110, s = 60112;
        t.Suspense = 60113;
        var l = 60115, c = 60116;
        if ("function" === typeof Symbol && Symbol.for) {
            var f = Symbol.for;
            i = f("react.element"), o = f("react.portal"), t.Fragment = f("react.fragment"), t.StrictMode = f("react.strict_mode"), t.Profiler = f("react.profiler"), a = f("react.provider"), u = f("react.context"), s = f("react.forward_ref"), t.Suspense = f("react.suspense"), l = f("react.memo"), c = f("react.lazy");
        }
        var d = "function" === typeof Symbol && Symbol.iterator;
        function p(e) { for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
            t += "&args[]=" + encodeURIComponent(arguments[n]); return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."; }
        var h = { isMounted: function () { return !1; }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, v = {};
        function m(e, t, n) { this.props = e, this.context = t, this.refs = v, this.updater = n || h; }
        function y() { }
        function g(e, t, n) { this.props = e, this.context = t, this.refs = v, this.updater = n || h; }
        m.prototype.isReactComponent = {}, m.prototype.setState = function (e, t) { if ("object" !== typeof e && "function" !== typeof e && null != e)
            throw Error(p(85)); this.updater.enqueueSetState(this, e, t, "setState"); }, m.prototype.forceUpdate = function (e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate"); }, y.prototype = m.prototype;
        var b = g.prototype = new y;
        b.constructor = g, r(b, m.prototype), b.isPureReactComponent = !0;
        var w = { current: null }, x = Object.prototype.hasOwnProperty, E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function k(e, t, n) { var r, o = {}, a = null, u = null; if (null != t)
            for (r in void 0 !== t.ref && (u = t.ref), void 0 !== t.key && (a = "" + t.key), t)
                x.call(t, r) && !E.hasOwnProperty(r) && (o[r] = t[r]); var s = arguments.length - 2; if (1 === s)
            o.children = n;
        else if (1 < s) {
            for (var l = Array(s), c = 0; c < s; c++)
                l[c] = arguments[c + 2];
            o.children = l;
        } if (e && e.defaultProps)
            for (r in s = e.defaultProps)
                void 0 === o[r] && (o[r] = s[r]); return { $$typeof: i, type: e, key: a, ref: u, props: o, _owner: w.current }; }
        function _(e) { return "object" === typeof e && null !== e && e.$$typeof === i; }
        var S = /\/+/g;
        function O(e, t) { return "object" === typeof e && null !== e && null != e.key ? function (e) { var t = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, (function (e) { return t[e]; })); }("" + e.key) : t.toString(36); }
        function N(e, t, n, r, a) { var u = typeof e; "undefined" !== u && "boolean" !== u || (e = null); var s = !1; if (null === e)
            s = !0;
        else
            switch (u) {
                case "string":
                case "number":
                    s = !0;
                    break;
                case "object": switch (e.$$typeof) {
                    case i:
                    case o: s = !0;
                }
            } if (s)
            return a = a(s = e), e = "" === r ? "." + O(s, 0) : r, Array.isArray(a) ? (n = "", null != e && (n = e.replace(S, "$&/") + "/"), N(a, t, n, "", (function (e) { return e; }))) : null != a && (_(a) && (a = function (e, t) { return { $$typeof: i, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }; }(a, n + (!a.key || s && s.key === a.key ? "" : ("" + a.key).replace(S, "$&/") + "/") + e)), t.push(a)), 1; if (s = 0, r = "" === r ? "." : r + ":", Array.isArray(e))
            for (var l = 0; l < e.length; l++) {
                var c = r + O(u = e[l], l);
                s += N(u, t, n, c, a);
            }
        else if (c = function (e) { return null === e || "object" !== typeof e ? null : "function" === typeof (e = d && e[d] || e["@@iterator"]) ? e : null; }(e), "function" === typeof c)
            for (e = c.call(e), l = 0; !(u = e.next()).done;)
                s += N(u = u.value, t, n, c = r + O(u, l++), a);
        else if ("object" === u)
            throw t = "" + e, Error(p(31, "[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)); return s; }
        function C(e, t, n) { if (null == e)
            return e; var r = [], i = 0; return N(e, r, "", "", (function (e) { return t.call(n, e, i++); })), r; }
        function T(e) { if (-1 === e._status) {
            var t = e._result;
            t = t(), e._status = 0, e._result = t, t.then((function (t) { 0 === e._status && (t = t.default, e._status = 1, e._result = t); }), (function (t) { 0 === e._status && (e._status = 2, e._result = t); }));
        } if (1 === e._status)
            return e._result; throw e._result; }
        var j = { current: null };
        function P() { var e = j.current; if (null === e)
            throw Error(p(321)); return e; }
        var I = { ReactCurrentDispatcher: j, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: w, IsSomeRendererActing: { current: !1 }, assign: r };
        t.Children = { map: C, forEach: function (e, t, n) { C(e, (function () { t.apply(this, arguments); }), n); }, count: function (e) { var t = 0; return C(e, (function () { t++; })), t; }, toArray: function (e) { return C(e, (function (e) { return e; })) || []; }, only: function (e) { if (!_(e))
                throw Error(p(143)); return e; } }, t.Component = m, t.PureComponent = g, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I, t.cloneElement = function (e, t, n) { if (null === e || void 0 === e)
            throw Error(p(267, e)); var o = r({}, e.props), a = e.key, u = e.ref, s = e._owner; if (null != t) {
            if (void 0 !== t.ref && (u = t.ref, s = w.current), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps)
                var l = e.type.defaultProps;
            for (c in t)
                x.call(t, c) && !E.hasOwnProperty(c) && (o[c] = void 0 === t[c] && void 0 !== l ? l[c] : t[c]);
        } var c = arguments.length - 2; if (1 === c)
            o.children = n;
        else if (1 < c) {
            l = Array(c);
            for (var f = 0; f < c; f++)
                l[f] = arguments[f + 2];
            o.children = l;
        } return { $$typeof: i, type: e.type, key: a, ref: u, props: o, _owner: s }; }, t.createContext = function (e, t) { return void 0 === t && (t = null), (e = { $$typeof: u, _calculateChangedBits: t, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null }).Provider = { $$typeof: a, _context: e }, e.Consumer = e; }, t.createElement = k, t.createFactory = function (e) { var t = k.bind(null, e); return t.type = e, t; }, t.createRef = function () { return { current: null }; }, t.forwardRef = function (e) { return { $$typeof: s, render: e }; }, t.isValidElement = _, t.lazy = function (e) { return { $$typeof: c, _payload: { _status: -1, _result: e }, _init: T }; }, t.memo = function (e, t) { return { $$typeof: l, type: e, compare: void 0 === t ? null : t }; }, t.useCallback = function (e, t) { return P().useCallback(e, t); }, t.useContext = function (e, t) { return P().useContext(e, t); }, t.useDebugValue = function () { }, t.useEffect = function (e, t) { return P().useEffect(e, t); }, t.useImperativeHandle = function (e, t, n) { return P().useImperativeHandle(e, t, n); }, t.useLayoutEffect = function (e, t) { return P().useLayoutEffect(e, t); }, t.useMemo = function (e, t) { return P().useMemo(e, t); }, t.useReducer = function (e, t, n) { return P().useReducer(e, t, n); }, t.useRef = function (e) { return P().useRef(e); }, t.useState = function (e) { return P().useState(e); }, t.version = "17.0.2";
    }, 2791: function (e, t, n) {
        "use strict";
        e.exports = n(9117);
    }, 184: function (e, t, n) {
        "use strict";
        e.exports = n(6374);
    }, 6813: function (e, t) {
        "use strict";
        var n, r, i, o;
        if ("object" === typeof performance && "function" === typeof performance.now) {
            var a = performance;
            t.unstable_now = function () { return a.now(); };
        }
        else {
            var u = Date, s = u.now();
            t.unstable_now = function () { return u.now() - s; };
        }
        if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
            var l = null, c = null, f = function e() { if (null !== l)
                try {
                    var n = t.unstable_now();
                    l(!0, n), l = null;
                }
                catch (r) {
                    throw setTimeout(e, 0), r;
                } };
            n = function (e) { null !== l ? setTimeout(n, 0, e) : (l = e, setTimeout(f, 0)); }, r = function (e, t) { c = setTimeout(e, t); }, i = function () { clearTimeout(c); }, t.unstable_shouldYield = function () { return !1; }, o = t.unstable_forceFrameRate = function () { };
        }
        else {
            var d = window.setTimeout, p = window.clearTimeout;
            if ("undefined" !== typeof console) {
                var h = window.cancelAnimationFrame;
                "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), "function" !== typeof h && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
            }
            var v = !1, m = null, y = -1, g = 5, b = 0;
            t.unstable_shouldYield = function () { return t.unstable_now() >= b; }, o = function () { }, t.unstable_forceFrameRate = function (e) { 0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : g = 0 < e ? Math.floor(1e3 / e) : 5; };
            var w = new MessageChannel, x = w.port2;
            w.port1.onmessage = function () { if (null !== m) {
                var e = t.unstable_now();
                b = e + g;
                try {
                    m(!0, e) ? x.postMessage(null) : (v = !1, m = null);
                }
                catch (n) {
                    throw x.postMessage(null), n;
                }
            }
            else
                v = !1; }, n = function (e) { m = e, v || (v = !0, x.postMessage(null)); }, r = function (e, n) { y = d((function () { e(t.unstable_now()); }), n); }, i = function () { p(y), y = -1; };
        }
        function E(e, t) { var n = e.length; e.push(t); e: for (;;) {
            var r = n - 1 >>> 1, i = e[r];
            if (!(void 0 !== i && 0 < S(i, t)))
                break e;
            e[r] = t, e[n] = i, n = r;
        } }
        function k(e) { return void 0 === (e = e[0]) ? null : e; }
        function _(e) { var t = e[0]; if (void 0 !== t) {
            var n = e.pop();
            if (n !== t) {
                e[0] = n;
                e: for (var r = 0, i = e.length; r < i;) {
                    var o = 2 * (r + 1) - 1, a = e[o], u = o + 1, s = e[u];
                    if (void 0 !== a && 0 > S(a, n))
                        void 0 !== s && 0 > S(s, a) ? (e[r] = s, e[u] = n, r = u) : (e[r] = a, e[o] = n, r = o);
                    else {
                        if (!(void 0 !== s && 0 > S(s, n)))
                            break e;
                        e[r] = s, e[u] = n, r = u;
                    }
                }
            }
            return t;
        } return null; }
        function S(e, t) { var n = e.sortIndex - t.sortIndex; return 0 !== n ? n : e.id - t.id; }
        var O = [], N = [], C = 1, T = null, j = 3, P = !1, I = !1, R = !1;
        function D(e) { for (var t = k(N); null !== t;) {
            if (null === t.callback)
                _(N);
            else {
                if (!(t.startTime <= e))
                    break;
                _(N), t.sortIndex = t.expirationTime, E(O, t);
            }
            t = k(N);
        } }
        function L(e) { if (R = !1, D(e), !I)
            if (null !== k(O))
                I = !0, n(A);
            else {
                var t = k(N);
                null !== t && r(L, t.startTime - e);
            } }
        function A(e, n) { I = !1, R && (R = !1, i()), P = !0; var o = j; try {
            for (D(n), T = k(O); null !== T && (!(T.expirationTime > n) || e && !t.unstable_shouldYield());) {
                var a = T.callback;
                if ("function" === typeof a) {
                    T.callback = null, j = T.priorityLevel;
                    var u = a(T.expirationTime <= n);
                    n = t.unstable_now(), "function" === typeof u ? T.callback = u : T === k(O) && _(O), D(n);
                }
                else
                    _(O);
                T = k(O);
            }
            if (null !== T)
                var s = !0;
            else {
                var l = k(N);
                null !== l && r(L, l.startTime - n), s = !1;
            }
            return s;
        }
        finally {
            T = null, j = o, P = !1;
        } }
        var M = o;
        t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function (e) { e.callback = null; }, t.unstable_continueExecution = function () { I || P || (I = !0, n(A)); }, t.unstable_getCurrentPriorityLevel = function () { return j; }, t.unstable_getFirstCallbackNode = function () { return k(O); }, t.unstable_next = function (e) { switch (j) {
            case 1:
            case 2:
            case 3:
                var t = 3;
                break;
            default: t = j;
        } var n = j; j = t; try {
            return e();
        }
        finally {
            j = n;
        } }, t.unstable_pauseExecution = function () { }, t.unstable_requestPaint = M, t.unstable_runWithPriority = function (e, t) { switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5: break;
            default: e = 3;
        } var n = j; j = e; try {
            return t();
        }
        finally {
            j = n;
        } }, t.unstable_scheduleCallback = function (e, o, a) { var u = t.unstable_now(); switch ("object" === typeof a && null !== a ? a = "number" === typeof (a = a.delay) && 0 < a ? u + a : u : a = u, e) {
            case 1:
                var s = -1;
                break;
            case 2:
                s = 250;
                break;
            case 5:
                s = 1073741823;
                break;
            case 4:
                s = 1e4;
                break;
            default: s = 5e3;
        } return e = { id: C++, callback: o, priorityLevel: e, startTime: a, expirationTime: s = a + s, sortIndex: -1 }, a > u ? (e.sortIndex = a, E(N, e), null === k(O) && e === k(N) && (R ? i() : R = !0, r(L, a - u))) : (e.sortIndex = s, E(O, e), I || P || (I = !0, n(A))), e; }, t.unstable_wrapCallback = function (e) { var t = j; return function () { var n = j; j = t; try {
            return e.apply(this, arguments);
        }
        finally {
            j = n;
        } }; };
    }, 5296: function (e, t, n) {
        "use strict";
        e.exports = n(6813);
    }, 2391: function (e) {
        "use strict";
        var t = function () { };
        e.exports = t;
    }, 3897: function (e) { e.exports = function (e, t) { (null == t || t > e.length) && (t = e.length); for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n]; return r; }, e.exports.__esModule = !0, e.exports.default = e.exports; }, 5372: function (e) { e.exports = function (e) { if (Array.isArray(e))
        return e; }, e.exports.__esModule = !0, e.exports.default = e.exports; }, 7156: function (e) { function t(e, t, n, r, i, o, a) { try {
        var u = e[o](a), s = u.value;
    }
    catch (l) {
        return void n(l);
    } u.done ? t(s) : Promise.resolve(s).then(r, i); } e.exports = function (e) { return function () { var n = this, r = arguments; return new Promise((function (i, o) { var a = e.apply(n, r); function u(e) { t(a, i, o, u, s, "next", e); } function s(e) { t(a, i, o, u, s, "throw", e); } u(void 0); })); }; }, e.exports.__esModule = !0, e.exports.default = e.exports; }, 8872: function (e) { e.exports = function (e, t) { var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (null != n) {
        var r, i, o, a, u = [], s = !0, l = !1;
        try {
            if (o = (n = n.call(e)).next, 0 === t) {
                if (Object(n) !== n)
                    return;
                s = !1;
            }
            else
                for (; !(s = (r = o.call(n)).done) && (u.push(r.value), u.length !== t); s = !0)
                    ;
        }
        catch (c) {
            l = !0, i = c;
        }
        finally {
            try {
                if (!s && null != n.return && (a = n.return(), Object(a) !== a))
                    return;
            }
            finally {
                if (l)
                    throw i;
            }
        }
        return u;
    } }, e.exports.__esModule = !0, e.exports.default = e.exports; }, 2218: function (e) { e.exports = function () { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }, e.exports.__esModule = !0, e.exports.default = e.exports; }, 7061: function (e, t, n) { var r = n(8698).default; function i() {
        "use strict";
        e.exports = i = function () { return t; }, e.exports.__esModule = !0, e.exports.default = e.exports;
        var t = {}, n = Object.prototype, o = n.hasOwnProperty, a = Object.defineProperty || function (e, t, n) { e[t] = n.value; }, u = "function" == typeof Symbol ? Symbol : {}, s = u.iterator || "@@iterator", l = u.asyncIterator || "@@asyncIterator", c = u.toStringTag || "@@toStringTag";
        function f(e, t, n) { return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t]; }
        try {
            f({}, "");
        }
        catch (P) {
            f = function (e, t, n) { return e[t] = n; };
        }
        function d(e, t, n, r) { var i = t && t.prototype instanceof v ? t : v, o = Object.create(i.prototype), u = new C(r || []); return a(o, "_invoke", { value: _(e, n, u) }), o; }
        function p(e, t, n) { try {
            return { type: "normal", arg: e.call(t, n) };
        }
        catch (P) {
            return { type: "throw", arg: P };
        } }
        t.wrap = d;
        var h = {};
        function v() { }
        function m() { }
        function y() { }
        var g = {};
        f(g, s, (function () { return this; }));
        var b = Object.getPrototypeOf, w = b && b(b(T([])));
        w && w !== n && o.call(w, s) && (g = w);
        var x = y.prototype = v.prototype = Object.create(g);
        function E(e) { ["next", "throw", "return"].forEach((function (t) { f(e, t, (function (e) { return this._invoke(t, e); })); })); }
        function k(e, t) { function n(i, a, u, s) { var l = p(e[i], e, a); if ("throw" !== l.type) {
            var c = l.arg, f = c.value;
            return f && "object" == r(f) && o.call(f, "__await") ? t.resolve(f.__await).then((function (e) { n("next", e, u, s); }), (function (e) { n("throw", e, u, s); })) : t.resolve(f).then((function (e) { c.value = e, u(c); }), (function (e) { return n("throw", e, u, s); }));
        } s(l.arg); } var i; a(this, "_invoke", { value: function (e, r) { function o() { return new t((function (t, i) { n(e, r, t, i); })); } return i = i ? i.then(o, o) : o(); } }); }
        function _(e, t, n) { var r = "suspendedStart"; return function (i, o) { if ("executing" === r)
            throw new Error("Generator is already running"); if ("completed" === r) {
            if ("throw" === i)
                throw o;
            return j();
        } for (n.method = i, n.arg = o;;) {
            var a = n.delegate;
            if (a) {
                var u = S(a, n);
                if (u) {
                    if (u === h)
                        continue;
                    return u;
                }
            }
            if ("next" === n.method)
                n.sent = n._sent = n.arg;
            else if ("throw" === n.method) {
                if ("suspendedStart" === r)
                    throw r = "completed", n.arg;
                n.dispatchException(n.arg);
            }
            else
                "return" === n.method && n.abrupt("return", n.arg);
            r = "executing";
            var s = p(e, t, n);
            if ("normal" === s.type) {
                if (r = n.done ? "completed" : "suspendedYield", s.arg === h)
                    continue;
                return { value: s.arg, done: n.done };
            }
            "throw" === s.type && (r = "completed", n.method = "throw", n.arg = s.arg);
        } }; }
        function S(e, t) { var n = t.method, r = e.iterator[n]; if (void 0 === r)
            return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, S(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), h; var i = p(r, e.iterator, t.arg); if ("throw" === i.type)
            return t.method = "throw", t.arg = i.arg, t.delegate = null, h; var o = i.arg; return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, h) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h); }
        function O(e) { var t = { tryLoc: e[0] }; 1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t); }
        function N(e) { var t = e.completion || {}; t.type = "normal", delete t.arg, e.completion = t; }
        function C(e) { this.tryEntries = [{ tryLoc: "root" }], e.forEach(O, this), this.reset(!0); }
        function T(e) { if (e) {
            var t = e[s];
            if (t)
                return t.call(e);
            if ("function" == typeof e.next)
                return e;
            if (!isNaN(e.length)) {
                var n = -1, r = function t() { for (; ++n < e.length;)
                    if (o.call(e, n))
                        return t.value = e[n], t.done = !1, t; return t.value = void 0, t.done = !0, t; };
                return r.next = r;
            }
        } return { next: j }; }
        function j() { return { value: void 0, done: !0 }; }
        return m.prototype = y, a(x, "constructor", { value: y, configurable: !0 }), a(y, "constructor", { value: m, configurable: !0 }), m.displayName = f(y, c, "GeneratorFunction"), t.isGeneratorFunction = function (e) { var t = "function" == typeof e && e.constructor; return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name)); }, t.mark = function (e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y, f(e, c, "GeneratorFunction")), e.prototype = Object.create(x), e; }, t.awrap = function (e) { return { __await: e }; }, E(k.prototype), f(k.prototype, l, (function () { return this; })), t.AsyncIterator = k, t.async = function (e, n, r, i, o) { void 0 === o && (o = Promise); var a = new k(d(e, n, r, i), o); return t.isGeneratorFunction(n) ? a : a.next().then((function (e) { return e.done ? e.value : a.next(); })); }, E(x), f(x, c, "Generator"), f(x, s, (function () { return this; })), f(x, "toString", (function () { return "[object Generator]"; })), t.keys = function (e) { var t = Object(e), n = []; for (var r in t)
            n.push(r); return n.reverse(), function e() { for (; n.length;) {
            var r = n.pop();
            if (r in t)
                return e.value = r, e.done = !1, e;
        } return e.done = !0, e; }; }, t.values = T, C.prototype = { constructor: C, reset: function (e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(N), !e)
                for (var t in this)
                    "t" === t.charAt(0) && o.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0); }, stop: function () { this.done = !0; var e = this.tryEntries[0].completion; if ("throw" === e.type)
                throw e.arg; return this.rval; }, dispatchException: function (e) { if (this.done)
                throw e; var t = this; function n(n, r) { return a.type = "throw", a.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r; } for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var i = this.tryEntries[r], a = i.completion;
                if ("root" === i.tryLoc)
                    return n("end");
                if (i.tryLoc <= this.prev) {
                    var u = o.call(i, "catchLoc"), s = o.call(i, "finallyLoc");
                    if (u && s) {
                        if (this.prev < i.catchLoc)
                            return n(i.catchLoc, !0);
                        if (this.prev < i.finallyLoc)
                            return n(i.finallyLoc);
                    }
                    else if (u) {
                        if (this.prev < i.catchLoc)
                            return n(i.catchLoc, !0);
                    }
                    else {
                        if (!s)
                            throw new Error("try statement without catch or finally");
                        if (this.prev < i.finallyLoc)
                            return n(i.finallyLoc);
                    }
                }
            } }, abrupt: function (e, t) { for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (r.tryLoc <= this.prev && o.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                    var i = r;
                    break;
                }
            } i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, h) : this.complete(a); }, complete: function (e, t) { if ("throw" === e.type)
                throw e.arg; return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h; }, finish: function (e) { for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc), N(n), h;
            } }, catch: function (e) { for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                        var i = r.arg;
                        N(n);
                    }
                    return i;
                }
            } throw new Error("illegal catch attempt"); }, delegateYield: function (e, t, n) { return this.delegate = { iterator: T(e), resultName: t, nextLoc: n }, "next" === this.method && (this.arg = void 0), h; } }, t;
    } e.exports = i, e.exports.__esModule = !0, e.exports.default = e.exports; }, 7424: function (e, t, n) { var r = n(5372), i = n(8872), o = n(6116), a = n(2218); e.exports = function (e, t) { return r(e) || i(e, t) || o(e, t) || a(); }, e.exports.__esModule = !0, e.exports.default = e.exports; }, 8698: function (e) { function t(n) { return e.exports = t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e; } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n); } e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports; }, 6116: function (e, t, n) { var r = n(3897); e.exports = function (e, t) { if (e) {
        if ("string" === typeof e)
            return r(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0;
    } }, e.exports.__esModule = !0, e.exports.default = e.exports; }, 907: function (e, t, n) {
        "use strict";
        function r(e, t) { (null == t || t > e.length) && (t = e.length); for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n]; return r; }
        n.d(t, { Z: function () { return r; } });
    }, 3878: function (e, t, n) {
        "use strict";
        function r(e) { if (Array.isArray(e))
            return e; }
        n.d(t, { Z: function () { return r; } });
    }, 7326: function (e, t, n) {
        "use strict";
        function r(e) { if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
        n.d(t, { Z: function () { return r; } });
    }, 5861: function (e, t, n) {
        "use strict";
        function r(e, t, n, r, i, o, a) { try {
            var u = e[o](a), s = u.value;
        }
        catch (l) {
            return void n(l);
        } u.done ? t(s) : Promise.resolve(s).then(r, i); }
        function i(e) { return function () { var t = this, n = arguments; return new Promise((function (i, o) { var a = e.apply(t, n); function u(e) { r(a, i, o, u, s, "next", e); } function s(e) { r(a, i, o, u, s, "throw", e); } u(void 0); })); }; }
        n.d(t, { Z: function () { return i; } });
    }, 5671: function (e, t, n) {
        "use strict";
        function r(e, t) { if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function"); }
        n.d(t, { Z: function () { return r; } });
    }, 3144: function (e, t, n) {
        "use strict";
        n.d(t, { Z: function () { return o; } });
        var r = n(9142);
        function i(e, t) { for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, (0, r.Z)(i.key), i);
        } }
        function o(e, t, n) { return t && i(e.prototype, t), n && i(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
    }, 7762: function (e, t, n) {
        "use strict";
        n.d(t, { Z: function () { return i; } });
        var r = n(181);
        function i(e, t) { var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!n) {
            if (Array.isArray(e) || (n = (0, r.Z)(e)) || t && e && "number" === typeof e.length) {
                n && (e = n);
                var i = 0, o = function () { };
                return { s: o, n: function () { return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] }; }, e: function (e) { throw e; }, f: o };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        } var a, u = !0, s = !1; return { s: function () { n = n.call(e); }, n: function () { var e = n.next(); return u = e.done, e; }, e: function (e) { s = !0, a = e; }, f: function () { try {
                u || null == n.return || n.return();
            }
            finally {
                if (s)
                    throw a;
            } } }; }
    }, 7277: function (e, t, n) {
        "use strict";
        n.d(t, { Z: function () { return u; } });
        var r = n(1120), i = n(8814), o = n(1002), a = n(7326);
        function u(e) { var t = (0, i.Z)(); return function () { var n, i = (0, r.Z)(e); if (t) {
            var u = (0, r.Z)(this).constructor;
            n = Reflect.construct(i, arguments, u);
        }
        else
            n = i.apply(this, arguments); return function (e, t) { if (t && ("object" === (0, o.Z)(t) || "function" === typeof t))
            return t; if (void 0 !== t)
            throw new TypeError("Derived constructors may only return object or undefined"); return (0, a.Z)(e); }(this, n); }; }
    }, 1752: function (e, t, n) {
        "use strict";
        n.d(t, { Z: function () { return i; } });
        var r = n(1120);
        function i() { return i = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, n) { var i = function (e, t) { for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = (0, r.Z)(e));)
            ; return e; }(e, t); if (i) {
            var o = Object.getOwnPropertyDescriptor(i, t);
            return o.get ? o.get.call(arguments.length < 3 ? e : n) : o.value;
        } }, i.apply(this, arguments); }
    }, 1120: function (e, t, n) {
        "use strict";
        function r(e) { return r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) { return e.__proto__ || Object.getPrototypeOf(e); }, r(e); }
        n.d(t, { Z: function () { return r; } });
    }, 136: function (e, t, n) {
        "use strict";
        n.d(t, { Z: function () { return i; } });
        var r = n(9611);
        function i(e, t) { if ("function" !== typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function"); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && (0, r.Z)(e, t); }
    }, 8814: function (e, t, n) {
        "use strict";
        function r() { if ("undefined" === typeof Reflect || !Reflect.construct)
            return !1; if (Reflect.construct.sham)
            return !1; if ("function" === typeof Proxy)
            return !0; try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0;
        }
        catch (e) {
            return !1;
        } }
        n.d(t, { Z: function () { return r; } });
    }, 9199: function (e, t, n) {
        "use strict";
        function r(e) { if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
            return Array.from(e); }
        n.d(t, { Z: function () { return r; } });
    }, 5267: function (e, t, n) {
        "use strict";
        function r() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
        n.d(t, { Z: function () { return r; } });
    }, 4165: function (e, t, n) {
        "use strict";
        n.d(t, { Z: function () { return i; } });
        var r = n(1002);
        function i() { i = function () { return e; }; var e = {}, t = Object.prototype, n = t.hasOwnProperty, o = Object.defineProperty || function (e, t, n) { e[t] = n.value; }, a = "function" == typeof Symbol ? Symbol : {}, u = a.iterator || "@@iterator", s = a.asyncIterator || "@@asyncIterator", l = a.toStringTag || "@@toStringTag"; function c(e, t, n) { return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t]; } try {
            c({}, "");
        }
        catch (j) {
            c = function (e, t, n) { return e[t] = n; };
        } function f(e, t, n, r) { var i = t && t.prototype instanceof h ? t : h, a = Object.create(i.prototype), u = new N(r || []); return o(a, "_invoke", { value: k(e, n, u) }), a; } function d(e, t, n) { try {
            return { type: "normal", arg: e.call(t, n) };
        }
        catch (j) {
            return { type: "throw", arg: j };
        } } e.wrap = f; var p = {}; function h() { } function v() { } function m() { } var y = {}; c(y, u, (function () { return this; })); var g = Object.getPrototypeOf, b = g && g(g(C([]))); b && b !== t && n.call(b, u) && (y = b); var w = m.prototype = h.prototype = Object.create(y); function x(e) { ["next", "throw", "return"].forEach((function (t) { c(e, t, (function (e) { return this._invoke(t, e); })); })); } function E(e, t) { function i(o, a, u, s) { var l = d(e[o], e, a); if ("throw" !== l.type) {
            var c = l.arg, f = c.value;
            return f && "object" == (0, r.Z)(f) && n.call(f, "__await") ? t.resolve(f.__await).then((function (e) { i("next", e, u, s); }), (function (e) { i("throw", e, u, s); })) : t.resolve(f).then((function (e) { c.value = e, u(c); }), (function (e) { return i("throw", e, u, s); }));
        } s(l.arg); } var a; o(this, "_invoke", { value: function (e, n) { function r() { return new t((function (t, r) { i(e, n, t, r); })); } return a = a ? a.then(r, r) : r(); } }); } function k(e, t, n) { var r = "suspendedStart"; return function (i, o) { if ("executing" === r)
            throw new Error("Generator is already running"); if ("completed" === r) {
            if ("throw" === i)
                throw o;
            return T();
        } for (n.method = i, n.arg = o;;) {
            var a = n.delegate;
            if (a) {
                var u = _(a, n);
                if (u) {
                    if (u === p)
                        continue;
                    return u;
                }
            }
            if ("next" === n.method)
                n.sent = n._sent = n.arg;
            else if ("throw" === n.method) {
                if ("suspendedStart" === r)
                    throw r = "completed", n.arg;
                n.dispatchException(n.arg);
            }
            else
                "return" === n.method && n.abrupt("return", n.arg);
            r = "executing";
            var s = d(e, t, n);
            if ("normal" === s.type) {
                if (r = n.done ? "completed" : "suspendedYield", s.arg === p)
                    continue;
                return { value: s.arg, done: n.done };
            }
            "throw" === s.type && (r = "completed", n.method = "throw", n.arg = s.arg);
        } }; } function _(e, t) { var n = t.method, r = e.iterator[n]; if (void 0 === r)
            return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, _(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), p; var i = d(r, e.iterator, t.arg); if ("throw" === i.type)
            return t.method = "throw", t.arg = i.arg, t.delegate = null, p; var o = i.arg; return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p); } function S(e) { var t = { tryLoc: e[0] }; 1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t); } function O(e) { var t = e.completion || {}; t.type = "normal", delete t.arg, e.completion = t; } function N(e) { this.tryEntries = [{ tryLoc: "root" }], e.forEach(S, this), this.reset(!0); } function C(e) { if (e) {
            var t = e[u];
            if (t)
                return t.call(e);
            if ("function" == typeof e.next)
                return e;
            if (!isNaN(e.length)) {
                var r = -1, i = function t() { for (; ++r < e.length;)
                    if (n.call(e, r))
                        return t.value = e[r], t.done = !1, t; return t.value = void 0, t.done = !0, t; };
                return i.next = i;
            }
        } return { next: T }; } function T() { return { value: void 0, done: !0 }; } return v.prototype = m, o(w, "constructor", { value: m, configurable: !0 }), o(m, "constructor", { value: v, configurable: !0 }), v.displayName = c(m, l, "GeneratorFunction"), e.isGeneratorFunction = function (e) { var t = "function" == typeof e && e.constructor; return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name)); }, e.mark = function (e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, c(e, l, "GeneratorFunction")), e.prototype = Object.create(w), e; }, e.awrap = function (e) { return { __await: e }; }, x(E.prototype), c(E.prototype, s, (function () { return this; })), e.AsyncIterator = E, e.async = function (t, n, r, i, o) { void 0 === o && (o = Promise); var a = new E(f(t, n, r, i), o); return e.isGeneratorFunction(n) ? a : a.next().then((function (e) { return e.done ? e.value : a.next(); })); }, x(w), c(w, l, "Generator"), c(w, u, (function () { return this; })), c(w, "toString", (function () { return "[object Generator]"; })), e.keys = function (e) { var t = Object(e), n = []; for (var r in t)
            n.push(r); return n.reverse(), function e() { for (; n.length;) {
            var r = n.pop();
            if (r in t)
                return e.value = r, e.done = !1, e;
        } return e.done = !0, e; }; }, e.values = C, N.prototype = { constructor: N, reset: function (e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !e)
                for (var t in this)
                    "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0); }, stop: function () { this.done = !0; var e = this.tryEntries[0].completion; if ("throw" === e.type)
                throw e.arg; return this.rval; }, dispatchException: function (e) { if (this.done)
                throw e; var t = this; function r(n, r) { return a.type = "throw", a.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r; } for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var o = this.tryEntries[i], a = o.completion;
                if ("root" === o.tryLoc)
                    return r("end");
                if (o.tryLoc <= this.prev) {
                    var u = n.call(o, "catchLoc"), s = n.call(o, "finallyLoc");
                    if (u && s) {
                        if (this.prev < o.catchLoc)
                            return r(o.catchLoc, !0);
                        if (this.prev < o.finallyLoc)
                            return r(o.finallyLoc);
                    }
                    else if (u) {
                        if (this.prev < o.catchLoc)
                            return r(o.catchLoc, !0);
                    }
                    else {
                        if (!s)
                            throw new Error("try statement without catch or finally");
                        if (this.prev < o.finallyLoc)
                            return r(o.finallyLoc);
                    }
                }
            } }, abrupt: function (e, t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var i = this.tryEntries[r];
                if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                    var o = i;
                    break;
                }
            } o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null); var a = o ? o.completion : {}; return a.type = e, a.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, p) : this.complete(a); }, complete: function (e, t) { if ("throw" === e.type)
                throw e.arg; return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p; }, finish: function (e) { for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc), O(n), p;
            } }, catch: function (e) { for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                        var i = r.arg;
                        O(n);
                    }
                    return i;
                }
            } throw new Error("illegal catch attempt"); }, delegateYield: function (e, t, n) { return this.delegate = { iterator: C(e), resultName: t, nextLoc: n }, "next" === this.method && (this.arg = void 0), p; } }, e; }
    }, 9611: function (e, t, n) {
        "use strict";
        function r(e, t) { return r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) { return e.__proto__ = t, e; }, r(e, t); }
        n.d(t, { Z: function () { return r; } });
    }, 9439: function (e, t, n) {
        "use strict";
        n.d(t, { Z: function () { return a; } });
        var r = n(3878);
        var i = n(181), o = n(5267);
        function a(e, t) { return (0, r.Z)(e) || function (e, t) { var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (null != n) {
            var r, i, o, a, u = [], s = !0, l = !1;
            try {
                if (o = (n = n.call(e)).next, 0 === t) {
                    if (Object(n) !== n)
                        return;
                    s = !1;
                }
                else
                    for (; !(s = (r = o.call(n)).done) && (u.push(r.value), u.length !== t); s = !0)
                        ;
            }
            catch (c) {
                l = !0, i = c;
            }
            finally {
                try {
                    if (!s && null != n.return && (a = n.return(), Object(a) !== a))
                        return;
                }
                finally {
                    if (l)
                        throw i;
                }
            }
            return u;
        } }(e, t) || (0, i.Z)(e, t) || (0, o.Z)(); }
    }, 3433: function (e, t, n) {
        "use strict";
        n.d(t, { Z: function () { return a; } });
        var r = n(907);
        var i = n(9199), o = n(181);
        function a(e) { return function (e) { if (Array.isArray(e))
            return (0, r.Z)(e); }(e) || (0, i.Z)(e) || (0, o.Z)(e) || function () { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }(); }
    }, 9142: function (e, t, n) {
        "use strict";
        n.d(t, { Z: function () { return i; } });
        var r = n(1002);
        function i(e) { var t = function (e, t) { if ("object" !== (0, r.Z)(e) || null === e)
            return e; var n = e[Symbol.toPrimitive]; if (void 0 !== n) {
            var i = n.call(e, t || "default");
            if ("object" !== (0, r.Z)(i))
                return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        } return ("string" === t ? String : Number)(e); }(e, "string"); return "symbol" === (0, r.Z)(t) ? t : String(t); }
    }, 1002: function (e, t, n) {
        "use strict";
        function r(e) { return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e; } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; }, r(e); }
        n.d(t, { Z: function () { return r; } });
    }, 181: function (e, t, n) {
        "use strict";
        n.d(t, { Z: function () { return i; } });
        var r = n(907);
        function i(e, t) { if (e) {
            if ("string" === typeof e)
                return (0, r.Z)(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? (0, r.Z)(e, t) : void 0;
        } }
    }, 8737: function (e, t, n) {
        "use strict";
        n.d(t, { Z: function () { return u; } });
        var r = n(1120), i = n(9611);
        var o = n(8814);
        function a(e, t, n) { return a = (0, o.Z)() ? Reflect.construct.bind() : function (e, t, n) { var r = [null]; r.push.apply(r, t); var o = new (Function.bind.apply(e, r)); return n && (0, i.Z)(o, n.prototype), o; }, a.apply(null, arguments); }
        function u(e) { var t = "function" === typeof Map ? new Map : void 0; return u = function (e) { if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]")))
            return e; var n; if ("function" !== typeof e)
            throw new TypeError("Super expression must either be null or a function"); if ("undefined" !== typeof t) {
            if (t.has(e))
                return t.get(e);
            t.set(e, o);
        } function o() { return a(e, arguments, (0, r.Z)(this).constructor); } return o.prototype = Object.create(e.prototype, { constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 } }), (0, i.Z)(o, e); }, u(e); }
    } }, t = {}; function n(r) { var i = t[r]; if (void 0 !== i)
    return i.exports; var o = t[r] = { exports: {} }; return e[r](o, o.exports, n), o.exports; } n.n = function (e) { var t = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return n.d(t, { a: t }), t; }, function () { var e, t = Object.getPrototypeOf ? function (e) { return Object.getPrototypeOf(e); } : function (e) { return e.__proto__; }; n.t = function (r, i) { if (1 & i && (r = this(r)), 8 & i)
    return r; if ("object" === typeof r && r) {
    if (4 & i && r.__esModule)
        return r;
    if (16 & i && "function" === typeof r.then)
        return r;
} var o = Object.create(null); n.r(o); var a = {}; e = e || [null, t({}), t([]), t(t)]; for (var u = 2 & i && r; "object" == typeof u && !~e.indexOf(u); u = t(u))
    Object.getOwnPropertyNames(u).forEach((function (e) { a[e] = function () { return r[e]; }; })); return a.default = function () { return r; }, n.d(o, a), o; }; }(), n.d = function (e, t) { for (var r in t)
    n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] }); }, n.g = function () { if ("object" === typeof globalThis)
    return globalThis; try {
    return this || new Function("return this")();
}
catch (e) {
    if ("object" === typeof window)
        return window;
} }(), n.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, n.r = function (e) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); }, n.p = "/", function () {
    "use strict";
    var e = n(2791), t = n.t(e, 2), r = n(4164), i = n(9142);
    function o(e, t, n) { return (t = (0, i.Z)(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e; }
    function a(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable; }))), n.push.apply(n, r);
    } return n; }
    function u(e) { for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? a(Object(n), !0).forEach((function (t) { o(e, t, n[t]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)); }));
    } return e; }
    var s = n(9439), l = n(3433), c = n(5671), f = n(3144), d = n(136), p = n(7277), h = n(8737), v = n(3878), m = n(9199), y = n(181), g = n(5267);
    var b, w = n(7762);
    function x() { return x = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, x.apply(this, arguments); }
    !function (e) { e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"; }(b || (b = {}));
    var E, k = "popstate";
    function _(e, t) { if (!1 === e || null === e || "undefined" === typeof e)
        throw new Error(t); }
    function S(e, t) { if (!e) {
        "undefined" !== typeof console && console.warn(t);
        try {
            throw new Error(t);
        }
        catch (Wr) { }
    } }
    function O(e, t) { return { usr: e.state, key: e.key, idx: t }; }
    function N(e, t, n, r) { return void 0 === n && (n = null), x({ pathname: "string" === typeof e ? e : e.pathname, search: "", hash: "" }, "string" === typeof t ? T(t) : t, { state: n, key: t && t.key || r || Math.random().toString(36).substr(2, 8) }); }
    function C(e) { var t = e.pathname, n = void 0 === t ? "/" : t, r = e.search, i = void 0 === r ? "" : r, o = e.hash, a = void 0 === o ? "" : o; return i && "?" !== i && (n += "?" === i.charAt(0) ? i : "?" + i), a && "#" !== a && (n += "#" === a.charAt(0) ? a : "#" + a), n; }
    function T(e) { var t = {}; if (e) {
        var n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        var r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
    } return t; }
    function j(e, t, n, r) { void 0 === r && (r = {}); var i = r, o = i.window, a = void 0 === o ? document.defaultView : o, u = i.v5Compat, s = void 0 !== u && u, l = a.history, c = b.Pop, f = null, d = p(); function p() { return (l.state || { idx: null }).idx; } function h() { c = b.Pop; var e = p(), t = null == e ? null : e - d; d = e, f && f({ action: c, location: m.location, delta: t }); } function v(e) { var t = "null" !== a.location.origin ? a.location.origin : a.location.href, n = "string" === typeof e ? e : C(e); return _(t, "No window.location.(origin|href) available to create URL for href: " + n), new URL(n, t); } null == d && (d = 0, l.replaceState(x({}, l.state, { idx: d }), "")); var m = { get action() { return c; }, get location() { return e(a, l); }, listen: function (e) { if (f)
            throw new Error("A history only accepts one active listener"); return a.addEventListener(k, h), f = e, function () { a.removeEventListener(k, h), f = null; }; }, createHref: function (e) { return t(a, e); }, createURL: v, encodeLocation: function (e) { var t = v(e); return { pathname: t.pathname, search: t.search, hash: t.hash }; }, push: function (e, t) { c = b.Push; var r = N(m.location, e, t); n && n(r, e); var i = O(r, d = p() + 1), o = m.createHref(r); try {
            l.pushState(i, "", o);
        }
        catch (u) {
            a.location.assign(o);
        } s && f && f({ action: c, location: m.location, delta: 1 }); }, replace: function (e, t) { c = b.Replace; var r = N(m.location, e, t); n && n(r, e); var i = O(r, d = p()), o = m.createHref(r); l.replaceState(i, "", o), s && f && f({ action: c, location: m.location, delta: 0 }); }, go: function (e) { return l.go(e); } }; return m; }
    !function (e) { e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"; }(E || (E = {}));
    new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
    function P(e, t, n) { void 0 === n && (n = "/"); var r = Z(("string" === typeof t ? T(t) : t).pathname || "/", n); if (null == r)
        return null; var i = I(e); !function (e) { e.sort((function (e, t) { return e.score !== t.score ? t.score - e.score : function (e, t) { var n = e.length === t.length && e.slice(0, -1).every((function (e, n) { return e === t[n]; })); return n ? e[e.length - 1] - t[t.length - 1] : 0; }(e.routesMeta.map((function (e) { return e.childrenIndex; })), t.routesMeta.map((function (e) { return e.childrenIndex; }))); })); }(i); for (var o = null, a = 0; null == o && a < i.length; ++a)
        o = z(i[a], B(r)); return o; }
    function I(e, t, n, r) { void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = ""); var i = function (e, i, o) { var a = { relativePath: void 0 === o ? e.path || "" : o, caseSensitive: !0 === e.caseSensitive, childrenIndex: i, route: e }; a.relativePath.startsWith("/") && (_(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path "' + r + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), a.relativePath = a.relativePath.slice(r.length)); var u = $([r, a.relativePath]), s = n.concat(a); e.children && e.children.length > 0 && (_(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + u + '".'), I(e.children, t, s, u)), (null != e.path || e.index) && t.push({ path: u, score: U(u, e.index), routesMeta: s }); }; return e.forEach((function (e, t) { var n; if ("" !== e.path && null != (n = e.path) && n.includes("?")) {
        var r, o = (0, w.Z)(R(e.path));
        try {
            for (o.s(); !(r = o.n()).done;) {
                var a = r.value;
                i(e, t, a);
            }
        }
        catch (u) {
            o.e(u);
        }
        finally {
            o.f();
        }
    }
    else
        i(e, t); })), t; }
    function R(e) { var t = e.split("/"); if (0 === t.length)
        return []; var n, r = (n = t, (0, v.Z)(n) || (0, m.Z)(n) || (0, y.Z)(n) || (0, g.Z)()), i = r[0], o = r.slice(1), a = i.endsWith("?"), u = i.replace(/\?$/, ""); if (0 === o.length)
        return a ? [u, ""] : [u]; var s = R(o.join("/")), c = []; return c.push.apply(c, (0, l.Z)(s.map((function (e) { return "" === e ? u : [u, e].join("/"); })))), a && c.push.apply(c, (0, l.Z)(s)), c.map((function (t) { return e.startsWith("/") && "" === t ? "/" : t; })); }
    var D = /^:\w+$/, L = 3, A = 2, M = 1, F = 10, V = -2, q = function (e) { return "*" === e; };
    function U(e, t) { var n = e.split("/"), r = n.length; return n.some(q) && (r += V), t && (r += A), n.filter((function (e) { return !q(e); })).reduce((function (e, t) { return e + (D.test(t) ? L : "" === t ? M : F); }), r); }
    function z(e, t) { for (var n = e.routesMeta, r = {}, i = "/", o = [], a = 0; a < n.length; ++a) {
        var u = n[a], s = a === n.length - 1, l = "/" === i ? t : t.slice(i.length) || "/", c = Q({ path: u.relativePath, caseSensitive: u.caseSensitive, end: s }, l);
        if (!c)
            return null;
        Object.assign(r, c.params);
        var f = u.route;
        o.push({ params: r, pathname: $([i, c.pathname]), pathnameBase: G($([i, c.pathnameBase])), route: f }), "/" !== c.pathnameBase && (i = $([i, c.pathnameBase]));
    } return o; }
    function Q(e, t) { "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 }); var n = function (e, t, n) { void 0 === t && (t = !1); void 0 === n && (n = !0); S("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".'); var r = [], i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (function (e, t) { return r.push(t), "/([^\\/]+)"; })); e.endsWith("*") ? (r.push("*"), i += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : "" !== e && "/" !== e && (i += "(?:(?=\\/|$))"); var o = new RegExp(i, t ? void 0 : "i"); return [o, r]; }(e.path, e.caseSensitive, e.end), r = (0, s.Z)(n, 2), i = r[0], o = r[1], a = t.match(i); if (!a)
        return null; var u = a[0], l = u.replace(/(.)\/+$/, "$1"), c = a.slice(1); return { params: o.reduce((function (e, t, n) { if ("*" === t) {
            var r = c[n] || "";
            l = u.slice(0, u.length - r.length).replace(/(.)\/+$/, "$1");
        } return e[t] = function (e, t) { try {
            return decodeURIComponent(e);
        }
        catch (n) {
            return S(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + n + ")."), e;
        } }(c[n] || "", t), e; }), {}), pathname: u, pathnameBase: l, pattern: e }; }
    function B(e) { try {
        return decodeURI(e);
    }
    catch (t) {
        return S(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e;
    } }
    function Z(e, t) { if ("/" === t)
        return e; if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null; var n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n); return r && "/" !== r ? null : e.slice(n) || "/"; }
    function W(e, t, n, r) { return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the `to." + n + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'; }
    function H(e) { return e.filter((function (e, t) { return 0 === t || e.route.path && e.route.path.length > 0; })); }
    function K(e, t, n, r) { var i; void 0 === r && (r = !1), "string" === typeof e ? i = T(e) : (_(!(i = x({}, e)).pathname || !i.pathname.includes("?"), W("?", "pathname", "search", i)), _(!i.pathname || !i.pathname.includes("#"), W("#", "pathname", "hash", i)), _(!i.search || !i.search.includes("#"), W("#", "search", "hash", i))); var o, a = "" === e || "" === i.pathname, u = a ? "/" : i.pathname; if (r || null == u)
        o = n;
    else {
        var s = t.length - 1;
        if (u.startsWith("..")) {
            for (var l = u.split("/"); ".." === l[0];)
                l.shift(), s -= 1;
            i.pathname = l.join("/");
        }
        o = s >= 0 ? t[s] : "/";
    } var c = function (e, t) { void 0 === t && (t = "/"); var n = "string" === typeof e ? T(e) : e, r = n.pathname, i = n.search, o = void 0 === i ? "" : i, a = n.hash, u = void 0 === a ? "" : a, s = r ? r.startsWith("/") ? r : function (e, t) { var n = t.replace(/\/+$/, "").split("/"); return e.split("/").forEach((function (e) { ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e); })), n.length > 1 ? n.join("/") : "/"; }(r, t) : t; return { pathname: s, search: Y(o), hash: J(u) }; }(i, o), f = u && "/" !== u && u.endsWith("/"), d = (a || "." === u) && n.endsWith("/"); return c.pathname.endsWith("/") || !f && !d || (c.pathname += "/"), c; }
    var $ = function (e) { return e.join("/").replace(/\/\/+/g, "/"); }, G = function (e) { return e.replace(/\/+$/, "").replace(/^\/*/, "/"); }, Y = function (e) { return e && "?" !== e ? e.startsWith("?") ? e : "?" + e : ""; }, J = function (e) { return e && "#" !== e ? e.startsWith("#") ? e : "#" + e : ""; }, X = function (e) { (0, d.Z)(n, e); var t = (0, p.Z)(n); function n() { return (0, c.Z)(this, n), t.apply(this, arguments); } return (0, f.Z)(n); }((0, h.Z)(Error));
    function ee(e) { return null != e && "number" === typeof e.status && "string" === typeof e.statusText && "boolean" === typeof e.internal && "data" in e; }
    var te = ["post", "put", "patch", "delete"], ne = (new Set(te), ["get"].concat(te));
    new Set(ne), new Set([301, 302, 303, 307, 308]), new Set([307, 308]), "undefined" !== typeof window && "undefined" !== typeof window.document && window.document.createElement;
    Symbol("deferred");
    function re() { return re = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, re.apply(this, arguments); }
    var ie = e.createContext(null);
    var oe = e.createContext(null);
    var ae = e.createContext(null);
    var ue = e.createContext(null);
    var se = e.createContext(null);
    var le = e.createContext({ outlet: null, matches: [], isDataRoute: !1 });
    var ce = e.createContext(null);
    function fe() { return null != e.useContext(se); }
    function de() { return fe() || _(!1), e.useContext(se).location; }
    function pe(t) { e.useContext(ue).static || e.useLayoutEffect(t); }
    function he() { return e.useContext(le).isDataRoute ? function () { var t = _e(ge.UseNavigateStable).router, n = Oe(be.UseNavigateStable), r = e.useRef(!1); pe((function () { r.current = !0; })); var i = e.useCallback((function (e, i) { void 0 === i && (i = {}), r.current && ("number" === typeof e ? t.navigate(e) : t.navigate(e, re({ fromRouteId: n }, i))); }), [t, n]); return i; }() : function () { fe() || _(!1); var t = e.useContext(ie), n = e.useContext(ue), r = n.basename, i = n.navigator, o = e.useContext(le).matches, a = de().pathname, u = JSON.stringify(H(o).map((function (e) { return e.pathnameBase; }))), s = e.useRef(!1); pe((function () { s.current = !0; })); var l = e.useCallback((function (e, n) { if (void 0 === n && (n = {}), s.current)
        if ("number" !== typeof e) {
            var o = K(e, JSON.parse(u), a, "path" === n.relative);
            null == t && "/" !== r && (o.pathname = "/" === o.pathname ? r : $([r, o.pathname])), (n.replace ? i.replace : i.push)(o, n.state, n);
        }
        else
            i.go(e); }), [r, i, u, a, t]); return l; }(); }
    function ve(t, n) { var r = (void 0 === n ? {} : n).relative, i = e.useContext(le).matches, o = de().pathname, a = JSON.stringify(H(i).map((function (e) { return e.pathnameBase; }))); return e.useMemo((function () { return K(t, JSON.parse(a), o, "path" === r); }), [t, a, o, r]); }
    function me(t, n, r) { fe() || _(!1); var i, o = e.useContext(ue).navigator, a = e.useContext(le).matches, u = a[a.length - 1], s = u ? u.params : {}, l = (u && u.pathname, u ? u.pathnameBase : "/"), c = (u && u.route, de()); if (n) {
        var f, d = "string" === typeof n ? T(n) : n;
        "/" === l || (null == (f = d.pathname) ? void 0 : f.startsWith(l)) || _(!1), i = d;
    }
    else
        i = c; var p = i.pathname || "/", h = P(t, { pathname: "/" === l ? p : p.slice(l.length) || "/" }); var v = ke(h && h.map((function (e) { return Object.assign({}, e, { params: Object.assign({}, s, e.params), pathname: $([l, o.encodeLocation ? o.encodeLocation(e.pathname).pathname : e.pathname]), pathnameBase: "/" === e.pathnameBase ? l : $([l, o.encodeLocation ? o.encodeLocation(e.pathnameBase).pathname : e.pathnameBase]) }); })), a, r); return n && v ? e.createElement(se.Provider, { value: { location: re({ pathname: "/", search: "", hash: "", state: null, key: "default" }, i), navigationType: b.Pop } }, v) : v; }
    function ye() { var t = function () { var t, n = e.useContext(ce), r = Se(be.UseRouteError), i = Oe(be.UseRouteError); if (n)
        return n; return null == (t = r.errors) ? void 0 : t[i]; }(), n = ee(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t), r = t instanceof Error ? t.stack : null, i = "rgba(200,200,200, 0.5)", o = { padding: "0.5rem", backgroundColor: i }; return e.createElement(e.Fragment, null, e.createElement("h2", null, "Unexpected Application Error!"), e.createElement("h3", { style: { fontStyle: "italic" } }, n), r ? e.createElement("pre", { style: o }, r) : null, null); }
    var ge, be, we = e.createElement(ye, null), xe = function (t) { (0, d.Z)(r, t); var n = (0, p.Z)(r); function r(e) { var t; return (0, c.Z)(this, r), (t = n.call(this, e)).state = { location: e.location, revalidation: e.revalidation, error: e.error }, t; } return (0, f.Z)(r, [{ key: "componentDidCatch", value: function (e, t) { console.error("React Router caught the following error during render", e, t); } }, { key: "render", value: function () { return this.state.error ? e.createElement(le.Provider, { value: this.props.routeContext }, e.createElement(ce.Provider, { value: this.state.error, children: this.props.component })) : this.props.children; } }], [{ key: "getDerivedStateFromError", value: function (e) { return { error: e }; } }, { key: "getDerivedStateFromProps", value: function (e, t) { return t.location !== e.location || "idle" !== t.revalidation && "idle" === e.revalidation ? { error: e.error, location: e.location, revalidation: e.revalidation } : { error: e.error || t.error, location: t.location, revalidation: e.revalidation || t.revalidation }; } }]), r; }(e.Component);
    function Ee(t) { var n = t.routeContext, r = t.match, i = t.children, o = e.useContext(ie); return o && o.static && o.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = r.route.id), e.createElement(le.Provider, { value: n }, i); }
    function ke(t, n, r) { var i; if (void 0 === n && (n = []), void 0 === r && (r = null), null == t) {
        var o;
        if (null == (o = r) || !o.errors)
            return null;
        t = r.matches;
    } var a = t, u = null == (i = r) ? void 0 : i.errors; if (null != u) {
        var s = a.findIndex((function (e) { return e.route.id && (null == u ? void 0 : u[e.route.id]); }));
        s >= 0 || _(!1), a = a.slice(0, Math.min(a.length, s + 1));
    } return a.reduceRight((function (t, i, o) { var s = i.route.id ? null == u ? void 0 : u[i.route.id] : null, l = null; r && (l = i.route.errorElement || we); var c = n.concat(a.slice(0, o + 1)), f = function () { var n; return n = s ? l : i.route.Component ? e.createElement(i.route.Component, null) : i.route.element ? i.route.element : t, e.createElement(Ee, { match: i, routeContext: { outlet: t, matches: c, isDataRoute: null != r }, children: n }); }; return r && (i.route.ErrorBoundary || i.route.errorElement || 0 === o) ? e.createElement(xe, { location: r.location, revalidation: r.revalidation, component: l, error: s, children: f(), routeContext: { outlet: null, matches: c, isDataRoute: !0 } }) : f(); }), null); }
    function _e(t) { var n = e.useContext(ie); return n || _(!1), n; }
    function Se(t) { var n = e.useContext(oe); return n || _(!1), n; }
    function Oe(t) { var n = function (t) { var n = e.useContext(le); return n || _(!1), n; }(), r = n.matches[n.matches.length - 1]; return r.route.id || _(!1), r.route.id; }
    !function (e) { e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate"; }(ge || (ge = {})), function (e) { e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId"; }(be || (be = {}));
    var Ne;
    function Ce(e) { _(!1); }
    function Te(t) { var n = t.basename, r = void 0 === n ? "/" : n, i = t.children, o = void 0 === i ? null : i, a = t.location, u = t.navigationType, s = void 0 === u ? b.Pop : u, l = t.navigator, c = t.static, f = void 0 !== c && c; fe() && _(!1); var d = r.replace(/^\/*/, "/"), p = e.useMemo((function () { return { basename: d, navigator: l, static: f }; }), [d, l, f]); "string" === typeof a && (a = T(a)); var h = a, v = h.pathname, m = void 0 === v ? "/" : v, y = h.search, g = void 0 === y ? "" : y, w = h.hash, x = void 0 === w ? "" : w, E = h.state, k = void 0 === E ? null : E, S = h.key, O = void 0 === S ? "default" : S, N = e.useMemo((function () { var e = Z(m, d); return null == e ? null : { location: { pathname: e, search: g, hash: x, state: k, key: O }, navigationType: s }; }), [d, m, g, x, k, O, s]); return null == N ? null : e.createElement(ue.Provider, { value: p }, e.createElement(se.Provider, { children: o, value: N })); }
    function je(e) { var t = e.children, n = e.location; return me(Ie(t), n); }
    !function (e) { e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error"; }(Ne || (Ne = {}));
    var Pe = new Promise((function () { }));
    e.Component;
    function Ie(t, n) { void 0 === n && (n = []); var r = []; return e.Children.forEach(t, (function (t, i) { if (e.isValidElement(t)) {
        var o = [].concat((0, l.Z)(n), [i]);
        if (t.type !== e.Fragment) {
            t.type !== Ce && _(!1), t.props.index && t.props.children && _(!1);
            var a = { id: t.props.id || o.join("-"), caseSensitive: t.props.caseSensitive, element: t.props.element, Component: t.props.Component, index: t.props.index, path: t.props.path, loader: t.props.loader, action: t.props.action, errorElement: t.props.errorElement, ErrorBoundary: t.props.ErrorBoundary, hasErrorBoundary: null != t.props.ErrorBoundary || null != t.props.errorElement, shouldRevalidate: t.props.shouldRevalidate, handle: t.props.handle, lazy: t.props.lazy };
            t.props.children && (a.children = Ie(t.props.children, o)), r.push(a);
        }
        else
            r.push.apply(r, Ie(t.props.children, o));
    } })), r; }
    function Re() { return Re = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, Re.apply(this, arguments); }
    function De(e, t) { if (null == e)
        return {}; var n, r, i = {}, o = Object.keys(e); for (r = 0; r < o.length; r++)
        n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]); return i; }
    var Le = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"];
    function Ae(t) { var n = t.basename, r = t.children, i = t.window, o = e.useRef(); null == o.current && (o.current = function (e) { return void 0 === e && (e = {}), j((function (e, t) { var n = e.location; return N("", { pathname: n.pathname, search: n.search, hash: n.hash }, t.state && t.state.usr || null, t.state && t.state.key || "default"); }), (function (e, t) { return "string" === typeof t ? t : C(t); }), null, e); }({ window: i, v5Compat: !0 })); var a = o.current, u = e.useState({ action: a.action, location: a.location }), l = (0, s.Z)(u, 2), c = l[0], f = l[1]; return e.useLayoutEffect((function () { return a.listen(f); }), [a]), e.createElement(Te, { basename: n, children: r, location: c.location, navigationType: c.action, navigator: a }); }
    var Me = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement, Fe = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Ve = e.forwardRef((function (t, n) { var r, i = t.onClick, o = t.relative, a = t.reloadDocument, u = t.replace, s = t.state, l = t.target, c = t.to, f = t.preventScrollReset, d = De(t, Le), p = e.useContext(ue).basename, h = !1; if ("string" === typeof c && Fe.test(c) && (r = c, Me))
        try {
            var v = new URL(window.location.href), m = c.startsWith("//") ? new URL(v.protocol + c) : new URL(c), y = Z(m.pathname, p);
            m.origin === v.origin && null != y ? c = y + m.search + m.hash : h = !0;
        }
        catch (Wr) { } var g = function (t, n) { var r = (void 0 === n ? {} : n).relative; fe() || _(!1); var i = e.useContext(ue), o = i.basename, a = i.navigator, u = ve(t, { relative: r }), s = u.hash, l = u.pathname, c = u.search, f = l; return "/" !== o && (f = "/" === l ? o : $([o, l])), a.createHref({ pathname: f, search: c, hash: s }); }(c, { relative: o }), b = function (t, n) { var r = void 0 === n ? {} : n, i = r.target, o = r.replace, a = r.state, u = r.preventScrollReset, s = r.relative, l = he(), c = de(), f = ve(t, { relative: s }); return e.useCallback((function (e) { if (function (e, t) { return 0 === e.button && (!t || "_self" === t) && !function (e) { return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey); }(e); }(e, i)) {
        e.preventDefault();
        var n = void 0 !== o ? o : C(c) === C(f);
        l(t, { replace: n, state: a, preventScrollReset: u, relative: s });
    } }), [c, l, f, o, a, i, t, u, s]); }(c, { replace: u, state: s, target: l, preventScrollReset: f, relative: o }); return e.createElement("a", Re({}, d, { href: r || g, onClick: h || a ? i : function (e) { i && i(e), e.defaultPrevented || b(e); }, ref: n, target: l })); }));
    var qe, Ue;
    (function (e) { e.UseScrollRestoration = "useScrollRestoration", e.UseSubmitImpl = "useSubmitImpl", e.UseFetcher = "useFetcher"; })(qe || (qe = {})), function (e) { e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"; }(Ue || (Ue = {}));
    function ze(e, t) { if (null == e)
        return {}; var n, r, i = {}, o = Object.keys(e); for (r = 0; r < o.length; r++)
        n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]); return i; }
    function Qe(e, t) { if (null == e)
        return {}; var n, r, i = ze(e, t); if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    } return i; }
    var Be = n(1694), Ze = n.n(Be), We = n(184), He = ["xxl", "xl", "lg", "md", "sm", "xs"], Ke = e.createContext({ prefixes: {}, breakpoints: He, minBreakpoint: "xs" });
    Ke.Consumer, Ke.Provider;
    function $e(t, n) { var r = (0, e.useContext)(Ke).prefixes; return t || r[n] || n; }
    function Ge() { return "rtl" === (0, e.useContext)(Ke).dir; }
    var Ye = ["bsPrefix", "fluid", "as", "className"], Je = e.forwardRef((function (e, t) { var n = e.bsPrefix, r = e.fluid, i = void 0 !== r && r, o = e.as, a = void 0 === o ? "div" : o, s = e.className, l = Qe(e, Ye), c = $e(n, "container"), f = "string" === typeof i ? "-".concat(i) : "-fluid"; return (0, We.jsx)(a, u(u({ ref: t }, l), {}, { className: Ze()(s, i ? "".concat(c).concat(f) : c) })); }));
    Je.displayName = "Container";
    var Xe = Je, et = n(4165), tt = n(5861), nt = n(8892), rt = n.n(nt), it = function (e, t) { return it = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t; } || function (e, t) { for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]); }, it(e, t); };
    function ot(e, t) { if ("function" !== typeof t && null !== t)
        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null"); function n() { this.constructor = e; } it(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n); }
    var at = function () { return at = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++)
        for (var i in t = arguments[n])
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }, at.apply(this, arguments); };
    function ut(e, t) { var n = {}; for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]); if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    } return n; }
    function st(e, t, n, r) { return new (n || (n = Promise))((function (i, o) { function a(e) { try {
        s(r.next(e));
    }
    catch (Wr) {
        o(Wr);
    } } function u(e) { try {
        s(r.throw(e));
    }
    catch (Wr) {
        o(Wr);
    } } function s(e) { var t; e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) { e(t); }))).then(a, u); } s((r = r.apply(e, t || [])).next()); })); }
    function lt(e, t) { var n, r, i, o, a = { label: 0, sent: function () { if (1 & i[0])
            throw i[1]; return i[1]; }, trys: [], ops: [] }; return o = { next: u(0), throw: u(1), return: u(2) }, "function" === typeof Symbol && (o[Symbol.iterator] = function () { return this; }), o; function u(u) { return function (s) { return function (u) { if (n)
        throw new TypeError("Generator is already executing."); for (; o && (o = 0, u[0] && (a = 0)), a;)
        try {
            if (n = 1, r && (i = 2 & u[0] ? r.return : u[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, u[1])).done)
                return i;
            switch (r = 0, i && (u = [2 & u[0], i.value]), u[0]) {
                case 0:
                case 1:
                    i = u;
                    break;
                case 4: return a.label++, { value: u[1], done: !1 };
                case 5:
                    a.label++, r = u[1], u = [0];
                    continue;
                case 7:
                    u = a.ops.pop(), a.trys.pop();
                    continue;
                default:
                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === u[0] || 2 === u[0])) {
                        a = 0;
                        continue;
                    }
                    if (3 === u[0] && (!i || u[1] > i[0] && u[1] < i[3])) {
                        a.label = u[1];
                        break;
                    }
                    if (6 === u[0] && a.label < i[1]) {
                        a.label = i[1], i = u;
                        break;
                    }
                    if (i && a.label < i[2]) {
                        a.label = i[2], a.ops.push(u);
                        break;
                    }
                    i[2] && a.ops.pop(), a.trys.pop();
                    continue;
            }
            u = t.call(e, a);
        }
        catch (Wr) {
            u = [6, Wr], r = 0;
        }
        finally {
            n = i = 0;
        } if (5 & u[0])
        throw u[1]; return { value: u[0] ? u[1] : void 0, done: !0 }; }([u, s]); }; } }
    Object.create;
    function ct(e, t, n) { if (n || 2 === arguments.length)
        for (var r, i = 0, o = t.length; i < o; i++)
            !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]); return e.concat(r || Array.prototype.slice.call(t)); }
    Object.create;
    var ft = "Invariant Violation", dt = Object.setPrototypeOf, pt = void 0 === dt ? function (e, t) { return e.__proto__ = t, e; } : dt, ht = function (e) { function t(n) { void 0 === n && (n = ft); var r = e.call(this, "number" === typeof n ? ft + ": " + n + " (see https://github.com/apollographql/invariant-packages)" : n) || this; return r.framesToPop = 1, r.name = ft, pt(r, t.prototype), r; } return ot(t, e), t; }(Error);
    function vt(e, t) { if (!e)
        throw new ht(t); }
    var mt = ["debug", "log", "warn", "error", "silent"], yt = mt.indexOf("log");
    function gt(e) { return function () { if (mt.indexOf(e) >= yt)
        return (console[e] || console.log).apply(console, arguments); }; }
    !function (e) { e.debug = gt("debug"), e.log = gt("log"), e.warn = gt("warn"), e.error = gt("error"); }(vt || (vt = {}));
    function bt(e) { try {
        return e();
    }
    catch (dt) { } }
    var wt = bt((function () { return globalThis; })) || bt((function () { return window; })) || bt((function () { return self; })) || bt((function () { return global; })) || bt((function () { return bt.constructor("return this")(); })), xt = "__", Et = [xt, xt].join("DEV");
    var kt = function () { try {
        return Boolean(__DEV__);
    }
    catch (dt) {
        return Object.defineProperty(wt, Et, { value: "production" !== bt((function () { return "production"; })), enumerable: !1, configurable: !0, writable: !0 }), wt[Et];
    } }();
    function _t(e) { try {
        return e();
    }
    catch (t) { } }
    var St = _t((function () { return globalThis; })) || _t((function () { return window; })) || _t((function () { return self; })) || _t((function () { return global; })) || _t((function () { return _t.constructor("return this")(); })), Ot = !1;
    function Nt() { Ot && (delete St.process, Ot = !1); }
    !St || _t((function () { return "production"; })) || _t((function () { return process; })) || (Object.defineProperty(St, "process", { value: { env: { NODE_ENV: "production" } }, configurable: !0, enumerable: !1, writable: !0 }), Ot = !0);
    "function" === typeof Symbol && null != Symbol.iterator && Symbol.iterator, "function" === typeof Symbol && null != Symbol.asyncIterator && Symbol.asyncIterator;
    var Ct = "function" === typeof Symbol && null != Symbol.toStringTag ? Symbol.toStringTag : "@@toStringTag", Tt = "function" === typeof Symbol && "function" === typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : void 0;
    function jt(e) { return jt = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) { return typeof e; } : function (e) { return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; }, jt(e); }
    var Pt = 10, It = 2;
    function Rt(e) { return Dt(e, []); }
    function Dt(e, t) { switch (jt(e)) {
        case "string": return JSON.stringify(e);
        case "function": return e.name ? "[function ".concat(e.name, "]") : "[function]";
        case "object": return null === e ? "null" : function (e, t) { if (-1 !== t.indexOf(e))
            return "[Circular]"; var n = [].concat(t, [e]), r = function (e) { var t = e[String(Tt)]; if ("function" === typeof t)
            return t; if ("function" === typeof e.inspect)
            return e.inspect; }(e); if (void 0 !== r) {
            var i = r.call(e);
            if (i !== e)
                return "string" === typeof i ? i : Dt(i, n);
        }
        else if (Array.isArray(e))
            return function (e, t) { if (0 === e.length)
                return "[]"; if (t.length > It)
                return "[Array]"; for (var n = Math.min(Pt, e.length), r = e.length - n, i = [], o = 0; o < n; ++o)
                i.push(Dt(e[o], t)); 1 === r ? i.push("... 1 more item") : r > 1 && i.push("... ".concat(r, " more items")); return "[" + i.join(", ") + "]"; }(e, n); return function (e, t) { var n = Object.keys(e); if (0 === n.length)
            return "{}"; if (t.length > It)
            return "[" + function (e) { var t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, ""); if ("Object" === t && "function" === typeof e.constructor) {
                var n = e.constructor.name;
                if ("string" === typeof n && "" !== n)
                    return n;
            } return t; }(e) + "]"; var r = n.map((function (n) { return n + ": " + Dt(e[n], t); })); return "{ " + r.join(", ") + " }"; }(e, n); }(e, t);
        default: return String(e);
    } }
    function Lt(e, t) { if (!Boolean(e))
        throw new Error(t); }
    var At = function (e, t) { return e instanceof t; };
    function Mt(e, t) { for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    } }
    var Ft = function () { function e(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "GraphQL request", n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { line: 1, column: 1 }; "string" === typeof e || Lt(0, "Body must be a string. Received: ".concat(Rt(e), ".")), this.body = e, this.name = t, this.locationOffset = n, this.locationOffset.line > 0 || Lt(0, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || Lt(0, "column in locationOffset is 1-indexed and must be positive."); } var t, n, r; return t = e, (n = [{ key: Ct, get: function () { return "Source"; } }]) && Mt(t.prototype, n), r && Mt(t, r), e; }();
    Nt(), __DEV__ ? vt("boolean" === typeof kt, kt) : vt("boolean" === typeof kt, 39);
    var Vt = "function" === typeof WeakMap && "ReactNative" !== bt((function () { return navigator.product; })), qt = "function" === typeof WeakSet, Ut = "function" === typeof Symbol && "function" === typeof Symbol.for, zt = Ut && Symbol.asyncIterator, Qt = "function" === typeof bt((function () { return window.document.createElement; })), Bt = bt((function () { return navigator.userAgent.indexOf("jsdom") >= 0; })) || !1, Zt = Qt && !Bt, Wt = !1, Ht = t.useSyncExternalStore || function (t, n, r) { var i = n(); __DEV__ && !Wt && i !== n() && (Wt = !0, __DEV__ && vt.error("The result of getSnapshot should be cached to avoid an infinite loop")); var o = e.useState({ inst: { value: i, getSnapshot: n } }), a = o[0].inst, u = o[1]; return Zt ? e.useLayoutEffect((function () { Object.assign(a, { value: i, getSnapshot: n }), Kt(a) && u({ inst: a }); }), [t, i, n]) : Object.assign(a, { value: i, getSnapshot: n }), e.useEffect((function () { return Kt(a) && u({ inst: a }), t((function () { Kt(a) && u({ inst: a }); })); }), [t]), i; };
    function Kt(e) { var t = e.value, n = e.getSnapshot; try {
        return t !== n();
    }
    catch (r) {
        return !0;
    } }
    var $t = Object.prototype, Gt = $t.toString, Yt = $t.hasOwnProperty, Jt = Function.prototype.toString, Xt = new Map;
    function en(e, t) { try {
        return tn(e, t);
    }
    finally {
        Xt.clear();
    } }
    function tn(e, t) { if (e === t)
        return !0; var n = Gt.call(e); if (n !== Gt.call(t))
        return !1; switch (n) {
        case "[object Array]": if (e.length !== t.length)
            return !1;
        case "[object Object]":
            if (an(e, t))
                return !0;
            var r = nn(e), i = nn(t), o = r.length;
            if (o !== i.length)
                return !1;
            for (var a = 0; a < o; ++a)
                if (!Yt.call(t, r[a]))
                    return !1;
            for (var u = 0; u < o; ++u) {
                var l = r[u];
                if (!tn(e[l], t[l]))
                    return !1;
            }
            return !0;
        case "[object Error]": return e.name === t.name && e.message === t.message;
        case "[object Number]": if (e !== e)
            return t !== t;
        case "[object Boolean]":
        case "[object Date]": return +e === +t;
        case "[object RegExp]":
        case "[object String]": return e == "".concat(t);
        case "[object Map]":
        case "[object Set]":
            if (e.size !== t.size)
                return !1;
            if (an(e, t))
                return !0;
            for (var c = e.entries(), f = "[object Map]" === n;;) {
                var d = c.next();
                if (d.done)
                    break;
                var p = (0, s.Z)(d.value, 2), h = p[0], v = p[1];
                if (!t.has(h))
                    return !1;
                if (f && !tn(v, t.get(h)))
                    return !1;
            }
            return !0;
        case "[object Uint16Array]":
        case "[object Uint8Array]":
        case "[object Uint32Array]":
        case "[object Int32Array]":
        case "[object Int8Array]":
        case "[object Int16Array]":
        case "[object ArrayBuffer]": e = new Uint8Array(e), t = new Uint8Array(t);
        case "[object DataView]":
            var m = e.byteLength;
            if (m === t.byteLength)
                for (; m-- && e[m] === t[m];)
                    ;
            return -1 === m;
        case "[object AsyncFunction]":
        case "[object GeneratorFunction]":
        case "[object AsyncGeneratorFunction]":
        case "[object Function]":
            var y = Jt.call(e);
            return y === Jt.call(t) && !function (e, t) { var n = e.length - t.length; return n >= 0 && e.indexOf(t, n) === n; }(y, on);
    } return !1; }
    function nn(e) { return Object.keys(e).filter(rn, e); }
    function rn(e) { return void 0 !== this[e]; }
    var on = "{ [native code] }";
    function an(e, t) { var n = Xt.get(e); if (n) {
        if (n.has(t))
            return !0;
    }
    else
        Xt.set(e, n = new Set); return n.add(t), !1; }
    function un() { for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t]; var n = Object.create(null); return e.forEach((function (e) { e && Object.keys(e).forEach((function (t) { var r = e[t]; void 0 !== r && (n[t] = r); })); })), n; }
    function sn(e, t) { return un(e, t, t.variables && { variables: at(at({}, e && e.variables), t.variables) }); }
    var ln = Ut ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__";
    function cn() { var t = e.createContext[ln]; return t || (Object.defineProperty(e.createContext, ln, { value: t = e.createContext({}), enumerable: !1, writable: !1, configurable: !0 }), t.displayName = "ApolloContext"), t; }
    function fn(e) { return null !== e && "object" === typeof e; }
    var dn = Symbol();
    var pn, hn, vn = function (e) { function t(n) { var r = n.graphQLErrors, i = n.protocolErrors, o = n.clientErrors, a = n.networkError, u = n.errorMessage, s = n.extraInfo, l = e.call(this, u) || this; return l.name = "ApolloError", l.graphQLErrors = r || [], l.protocolErrors = i || [], l.clientErrors = o || [], l.networkError = a || null, l.message = u || function (e) { var t = ct(ct(ct([], e.graphQLErrors, !0), e.clientErrors, !0), e.protocolErrors, !0); return e.networkError && t.push(e.networkError), t.map((function (e) { return fn(e) && e.message || "Error message not found."; })).join("\n"); }(l), l.extraInfo = s, l.__proto__ = t.prototype, l; } return ot(t, e), t; }(Error);
    function mn(e) { return !!e && e < 7; }
    !function (e) { e[e.loading = 1] = "loading", e[e.setVariables = 2] = "setVariables", e[e.fetchMore = 3] = "fetchMore", e[e.refetch = 4] = "refetch", e[e.poll = 6] = "poll", e[e.ready = 7] = "ready", e[e.error = 8] = "error"; }(pn || (pn = {})), function (e) { e[e.Query = 0] = "Query", e[e.Mutation = 1] = "Mutation", e[e.Subscription = 2] = "Subscription"; }(hn || (hn = {}));
    var yn = new Map;
    function gn(e) { var t; switch (e) {
        case hn.Query:
            t = "Query";
            break;
        case hn.Mutation:
            t = "Mutation";
            break;
        case hn.Subscription: t = "Subscription";
    } return t; }
    function bn(e, t) { var n = function (e) { var t, n, r = yn.get(e); if (r)
        return r; __DEV__ ? vt(!!e && !!e.kind, "Argument of ".concat(e, " passed to parser was not a valid GraphQL ") + "DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document") : vt(!!e && !!e.kind, 33); for (var i = [], o = [], a = [], u = [], s = 0, l = e.definitions; s < l.length; s++) {
        var c = l[s];
        if ("FragmentDefinition" !== c.kind) {
            if ("OperationDefinition" === c.kind)
                switch (c.operation) {
                    case "query":
                        o.push(c);
                        break;
                    case "mutation":
                        a.push(c);
                        break;
                    case "subscription": u.push(c);
                }
        }
        else
            i.push(c);
    } __DEV__ ? vt(!i.length || o.length || a.length || u.length, "Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well") : vt(!i.length || o.length || a.length || u.length, 34), __DEV__ ? vt(o.length + a.length + u.length <= 1, "react-apollo only supports a query, subscription, or a mutation per HOC. " + "".concat(e, " had ").concat(o.length, " queries, ").concat(u.length, " ") + "subscriptions and ".concat(a.length, " mutations. ") + "You can use 'compose' to join multiple operation types to a component") : vt(o.length + a.length + u.length <= 1, 35), n = o.length ? hn.Query : hn.Mutation, o.length || a.length || (n = hn.Subscription); var f = o.length ? o : a.length ? a : u; __DEV__ ? vt(1 === f.length, "react-apollo only supports one definition per HOC. ".concat(e, " had ") + "".concat(f.length, " definitions. ") + "You can use 'compose' to join multiple operation types to a component") : vt(1 === f.length, 36); var d = f[0]; t = d.variableDefinitions || []; var p = { name: d.name && "Name" === d.name.kind ? d.name.value : "data", type: n, variables: t }; return yn.set(e, p), p; }(e), r = gn(t), i = gn(n.type); __DEV__ ? vt(n.type === t, "Running a ".concat(r, " requires a graphql ") + "".concat(r, ", but a ").concat(i, " was used instead.")) : vt(n.type === t, 37); }
    function wn(t) { var n = (0, e.useContext)(cn()), r = t || n.client; return __DEV__ ? vt(!!r, 'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.') : vt(!!r, 32), r; }
    function xn(e) { var t = new Set([e]); return t.forEach((function (e) { fn(e) && function (e) { if (__DEV__ && !Object.isFrozen(e))
        try {
            Object.freeze(e);
        }
        catch (Wr) {
            if (Wr instanceof TypeError)
                return null;
            throw Wr;
        } return e; }(e) === e && Object.getOwnPropertyNames(e).forEach((function (n) { fn(e[n]) && t.add(e[n]); })); })), e; }
    function En(e) { return __DEV__ && xn(e), e; }
    var kn = Array.isArray;
    function _n(e) { return Array.isArray(e) && e.length > 0; }
    var Sn = Object.prototype.hasOwnProperty;
    function On(t, n) { return void 0 === n && (n = Object.create(null)), function (t, n) { var r = (0, e.useRef)(); r.current && t === r.current.client && n === r.current.query || (r.current = new Nn(t, n, r.current)); var i = r.current, o = (0, e.useState)(0), a = (o[0], o[1]); return i.forceUpdate = function () { a((function (e) { return e + 1; })); }, i; }(wn(n.client), t).useQuery(n); }
    var Nn = function () { function t(e, t, n) { this.client = e, this.query = t, this.ssrDisabledResult = En({ loading: !0, data: void 0, error: void 0, networkStatus: pn.loading }), this.skipStandbyResult = En({ loading: !1, data: void 0, error: void 0, networkStatus: pn.ready }), this.toQueryResultCache = new (Vt ? WeakMap : Map), bn(t, hn.Query); var r = n && n.result, i = r && r.data; i && (this.previousData = i); } return t.prototype.forceUpdate = function () { __DEV__ && vt.warn("Calling default no-op implementation of InternalState#forceUpdate"); }, t.prototype.executeQuery = function (e) { var t, n = this; e.query && Object.assign(this, { query: e.query }), this.watchQueryOptions = this.createWatchQueryOptions(this.queryHookOptions = e); var r = this.observable.reobserveAsConcast(this.getObsQueryOptions()); return this.previousData = (null === (t = this.result) || void 0 === t ? void 0 : t.data) || this.previousData, this.result = void 0, this.forceUpdate(), new Promise((function (e) { var t; r.subscribe({ next: function (e) { t = e; }, error: function () { e(n.toQueryResult(n.observable.getCurrentResult())); }, complete: function () { e(n.toQueryResult(t)); } }); })); }, t.prototype.useQuery = function (t) { var n = this; this.renderPromises = (0, e.useContext)(cn()).renderPromises, this.useOptions(t); var r = this.useObservableQuery(), i = Ht((0, e.useCallback)((function () { if (n.renderPromises)
        return function () { }; var e = function () { var e = n.result, t = r.getCurrentResult(); e && e.loading === t.loading && e.networkStatus === t.networkStatus && en(e.data, t.data) || n.setResult(t); }, t = r.subscribe(e, (function i(o) { var a = r.last; t.unsubscribe(); try {
        r.resetLastResults(), t = r.subscribe(e, i);
    }
    finally {
        r.last = a;
    } if (!Sn.call(o, "graphQLErrors"))
        throw o; var u = n.result; (!u || u && u.loading || !en(o, u.error)) && n.setResult({ data: u && u.data, error: o, loading: !1, networkStatus: pn.error }); })); return function () { return setTimeout((function () { return t.unsubscribe(); })); }; }), [r, this.renderPromises, this.client.disableNetworkFetches]), (function () { return n.getCurrentResult(); }), (function () { return n.getCurrentResult(); })); return this.unsafeHandlePartialRefetch(i), this.toQueryResult(i); }, t.prototype.useOptions = function (e) { var n, r = this.createWatchQueryOptions(this.queryHookOptions = e), i = this.watchQueryOptions; en(r, i) || (this.watchQueryOptions = r, i && this.observable && (this.observable.reobserve(this.getObsQueryOptions()), this.previousData = (null === (n = this.result) || void 0 === n ? void 0 : n.data) || this.previousData, this.result = void 0)), this.onCompleted = e.onCompleted || t.prototype.onCompleted, this.onError = e.onError || t.prototype.onError, !this.renderPromises && !this.client.disableNetworkFetches || !1 !== this.queryHookOptions.ssr || this.queryHookOptions.skip ? this.queryHookOptions.skip || "standby" === this.watchQueryOptions.fetchPolicy ? this.result = this.skipStandbyResult : this.result !== this.ssrDisabledResult && this.result !== this.skipStandbyResult || (this.result = void 0) : this.result = this.ssrDisabledResult; }, t.prototype.getObsQueryOptions = function () { var e = [], t = this.client.defaultOptions.watchQuery; return t && e.push(t), this.queryHookOptions.defaultOptions && e.push(this.queryHookOptions.defaultOptions), e.push(un(this.observable && this.observable.options, this.watchQueryOptions)), e.reduce(sn); }, t.prototype.createWatchQueryOptions = function (e) { var t; void 0 === e && (e = {}); var n = e.skip, r = (e.ssr, e.onCompleted, e.onError, e.defaultOptions, ut(e, ["skip", "ssr", "onCompleted", "onError", "defaultOptions"])), i = Object.assign(r, { query: this.query }); if (!this.renderPromises || "network-only" !== i.fetchPolicy && "cache-and-network" !== i.fetchPolicy || (i.fetchPolicy = "cache-first"), i.variables || (i.variables = {}), n) {
        var o = i.fetchPolicy, a = void 0 === o ? this.getDefaultFetchPolicy() : o, u = i.initialFetchPolicy, s = void 0 === u ? a : u;
        Object.assign(i, { initialFetchPolicy: s, fetchPolicy: "standby" });
    }
    else
        i.fetchPolicy || (i.fetchPolicy = (null === (t = this.observable) || void 0 === t ? void 0 : t.options.initialFetchPolicy) || this.getDefaultFetchPolicy()); return i; }, t.prototype.getDefaultFetchPolicy = function () { var e, t; return (null === (e = this.queryHookOptions.defaultOptions) || void 0 === e ? void 0 : e.fetchPolicy) || (null === (t = this.client.defaultOptions.watchQuery) || void 0 === t ? void 0 : t.fetchPolicy) || "cache-first"; }, t.prototype.onCompleted = function (e) { }, t.prototype.onError = function (e) { }, t.prototype.useObservableQuery = function () { var t = this.observable = this.renderPromises && this.renderPromises.getSSRObservable(this.watchQueryOptions) || this.observable || this.client.watchQuery(this.getObsQueryOptions()); this.obsQueryFields = (0, e.useMemo)((function () { return { refetch: t.refetch.bind(t), reobserve: t.reobserve.bind(t), fetchMore: t.fetchMore.bind(t), updateQuery: t.updateQuery.bind(t), startPolling: t.startPolling.bind(t), stopPolling: t.stopPolling.bind(t), subscribeToMore: t.subscribeToMore.bind(t) }; }), [t]); var n = !(!1 === this.queryHookOptions.ssr || this.queryHookOptions.skip); return this.renderPromises && n && (this.renderPromises.registerSSRObservable(t), t.getCurrentResult().loading && this.renderPromises.addObservableQueryPromise(t)), t; }, t.prototype.setResult = function (e) { var t = this.result; t && t.data && (this.previousData = t.data), this.result = e, this.forceUpdate(), this.handleErrorOrCompleted(e); }, t.prototype.handleErrorOrCompleted = function (e) { var t = this; if (!e.loading) {
        var n = this.toApolloError(e);
        Promise.resolve().then((function () { n ? t.onError(n) : e.data && t.onCompleted(e.data); })).catch((function (e) { __DEV__ && vt.warn(e); }));
    } }, t.prototype.toApolloError = function (e) { return _n(e.errors) ? new vn({ graphQLErrors: e.errors }) : e.error; }, t.prototype.getCurrentResult = function () { return this.result || this.handleErrorOrCompleted(this.result = this.observable.getCurrentResult()), this.result; }, t.prototype.toQueryResult = function (e) { var t = this.toQueryResultCache.get(e); if (t)
        return t; var n = e.data, r = (e.partial, ut(e, ["data", "partial"])); return this.toQueryResultCache.set(e, t = at(at(at({ data: n }, r), this.obsQueryFields), { client: this.client, observable: this.observable, variables: this.observable.variables, called: !this.queryHookOptions.skip, previousData: this.previousData })), !t.error && _n(e.errors) && (t.error = new vn({ graphQLErrors: e.errors })), t; }, t.prototype.unsafeHandlePartialRefetch = function (e) { !e.partial || !this.queryHookOptions.partialRefetch || e.loading || e.data && 0 !== Object.keys(e.data).length || "cache-only" === this.observable.options.fetchPolicy || (Object.assign(e, { loading: !0, networkStatus: pn.refetch }), this.observable.refetch()); }, t; }();
    function Cn(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
    function Tn(e) { return Tn = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) { return typeof e; } : function (e) { return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; }, Tn(e); }
    function jn(e, t) { for (var n, r = /\r\n|[\n\r]/g, i = 1, o = t + 1; (n = r.exec(e.body)) && n.index < t;)
        i += 1, o = t + 1 - (n.index + n[0].length); return { line: i, column: o }; }
    function Pn(e) { return In(e.source, jn(e.source, e.start)); }
    function In(e, t) { var n = e.locationOffset.column - 1, r = Dn(n) + e.body, i = t.line - 1, o = e.locationOffset.line - 1, a = t.line + o, u = 1 === t.line ? n : 0, s = t.column + u, l = "".concat(e.name, ":").concat(a, ":").concat(s, "\n"), c = r.split(/\r\n|[\n\r]/g), f = c[i]; if (f.length > 120) {
        for (var d = Math.floor(s / 80), p = s % 80, h = [], v = 0; v < f.length; v += 80)
            h.push(f.slice(v, v + 80));
        return l + Rn([["".concat(a), h[0]]].concat(h.slice(1, d + 1).map((function (e) { return ["", e]; })), [[" ", Dn(p - 1) + "^"], ["", h[d + 1]]]));
    } return l + Rn([["".concat(a - 1), c[i - 1]], ["".concat(a), f], ["", Dn(s - 1) + "^"], ["".concat(a + 1), c[i + 1]]]); }
    function Rn(e) { var t = e.filter((function (e) { e[0]; return void 0 !== e[1]; })), n = Math.max.apply(Math, t.map((function (e) { return e[0].length; }))); return t.map((function (e) { var t, r = e[0], i = e[1]; return Dn(n - (t = r).length) + t + (i ? " | " + i : " |"); })).join("\n"); }
    function Dn(e) { return Array(e + 1).join(" "); }
    function Ln(e) { return Ln = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) { return typeof e; } : function (e) { return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; }, Ln(e); }
    function An(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable; }))), n.push.apply(n, r);
    } return n; }
    function Mn(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e; }
    function Fn(e, t) { for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    } }
    function Vn(e, t) { return !t || "object" !== Ln(t) && "function" !== typeof t ? qn(e) : t; }
    function qn(e) { if (void 0 === e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
    function Un(e) { var t = "function" === typeof Map ? new Map : void 0; return Un = function (e) { if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]")))
        return e; var n; if ("function" !== typeof e)
        throw new TypeError("Super expression must either be null or a function"); if ("undefined" !== typeof t) {
        if (t.has(e))
            return t.get(e);
        t.set(e, r);
    } function r() { return zn(e, arguments, Zn(this).constructor); } return r.prototype = Object.create(e.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } }), Bn(r, e); }, Un(e); }
    function zn(e, t, n) { return zn = Qn() ? Reflect.construct : function (e, t, n) { var r = [null]; r.push.apply(r, t); var i = new (Function.bind.apply(e, r)); return n && Bn(i, n.prototype), i; }, zn.apply(null, arguments); }
    function Qn() { if ("undefined" === typeof Reflect || !Reflect.construct)
        return !1; if (Reflect.construct.sham)
        return !1; if ("function" === typeof Proxy)
        return !0; try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () { }))), !0;
    }
    catch (Wr) {
        return !1;
    } }
    function Bn(e, t) { return Bn = Object.setPrototypeOf || function (e, t) { return e.__proto__ = t, e; }, Bn(e, t); }
    function Zn(e) { return Zn = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) { return e.__proto__ || Object.getPrototypeOf(e); }, Zn(e); }
    var Wn = function (e) { !function (e, t) { if ("function" !== typeof t && null !== t)
        throw new TypeError("Super expression must either be null or a function"); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Bn(e, t); }(o, e); var t, n, r, i = function (e) { var t = Qn(); return function () { var n, r = Zn(e); if (t) {
        var i = Zn(this).constructor;
        n = Reflect.construct(r, arguments, i);
    }
    else
        n = r.apply(this, arguments); return Vn(this, n); }; }(o); function o(e, t, n, r, a, u, s) { var l, c, f, d; !function (e, t) { if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function"); }(this, o), (d = i.call(this, e)).name = "GraphQLError", d.originalError = null !== u && void 0 !== u ? u : void 0, d.nodes = Hn(Array.isArray(t) ? t : t ? [t] : void 0); for (var p = [], h = 0, v = null !== (m = d.nodes) && void 0 !== m ? m : []; h < v.length; h++) {
        var m, y = v[h].loc;
        null != y && p.push(y);
    } p = Hn(p), d.source = null !== n && void 0 !== n ? n : null === (l = p) || void 0 === l ? void 0 : l[0].source, d.positions = null !== r && void 0 !== r ? r : null === (c = p) || void 0 === c ? void 0 : c.map((function (e) { return e.start; })), d.locations = r && n ? r.map((function (e) { return jn(n, e); })) : null === (f = p) || void 0 === f ? void 0 : f.map((function (e) { return jn(e.source, e.start); })), d.path = null !== a && void 0 !== a ? a : void 0; var g, b = null === u || void 0 === u ? void 0 : u.extensions; return null == s && ("object" == Tn(g = b) && null !== g) ? d.extensions = function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? An(Object(n), !0).forEach((function (t) { Mn(e, t, n[t]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : An(Object(n)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)); }));
    } return e; }({}, b) : d.extensions = null !== s && void 0 !== s ? s : {}, Object.defineProperties(qn(d), { message: { enumerable: !0 }, locations: { enumerable: null != d.locations }, path: { enumerable: null != d.path }, extensions: { enumerable: null != d.extensions && Object.keys(d.extensions).length > 0 }, name: { enumerable: !1 }, nodes: { enumerable: !1 }, source: { enumerable: !1 }, positions: { enumerable: !1 }, originalError: { enumerable: !1 } }), null !== u && void 0 !== u && u.stack ? (Object.defineProperty(qn(d), "stack", { value: u.stack, writable: !0, configurable: !0 }), Vn(d)) : (Error.captureStackTrace ? Error.captureStackTrace(qn(d), o) : Object.defineProperty(qn(d), "stack", { value: Error().stack, writable: !0, configurable: !0 }), d); } return t = o, (n = [{ key: "toString", value: function () { return function (e) { var t = e.message; if (e.nodes)
                for (var n = 0, r = e.nodes; n < r.length; n++) {
                    var i = r[n];
                    i.loc && (t += "\n\n" + Pn(i.loc));
                }
            else if (e.source && e.locations)
                for (var o = 0, a = e.locations; o < a.length; o++) {
                    var u = a[o];
                    t += "\n\n" + In(e.source, u);
                } return t; }(this); } }, { key: Ct, get: function () { return "Object"; } }]) && Fn(t.prototype, n), r && Fn(t, r), o; }(Un(Error));
    function Hn(e) { return void 0 === e || 0 === e.length ? void 0 : e; }
    function Kn(e, t, n) { return new Wn("Syntax Error: ".concat(n), void 0, e, [t]); }
    var $n = Object.freeze({ NAME: "Name", DOCUMENT: "Document", OPERATION_DEFINITION: "OperationDefinition", VARIABLE_DEFINITION: "VariableDefinition", SELECTION_SET: "SelectionSet", FIELD: "Field", ARGUMENT: "Argument", FRAGMENT_SPREAD: "FragmentSpread", INLINE_FRAGMENT: "InlineFragment", FRAGMENT_DEFINITION: "FragmentDefinition", VARIABLE: "Variable", INT: "IntValue", FLOAT: "FloatValue", STRING: "StringValue", BOOLEAN: "BooleanValue", NULL: "NullValue", ENUM: "EnumValue", LIST: "ListValue", OBJECT: "ObjectValue", OBJECT_FIELD: "ObjectField", DIRECTIVE: "Directive", NAMED_TYPE: "NamedType", LIST_TYPE: "ListType", NON_NULL_TYPE: "NonNullType", SCHEMA_DEFINITION: "SchemaDefinition", OPERATION_TYPE_DEFINITION: "OperationTypeDefinition", SCALAR_TYPE_DEFINITION: "ScalarTypeDefinition", OBJECT_TYPE_DEFINITION: "ObjectTypeDefinition", FIELD_DEFINITION: "FieldDefinition", INPUT_VALUE_DEFINITION: "InputValueDefinition", INTERFACE_TYPE_DEFINITION: "InterfaceTypeDefinition", UNION_TYPE_DEFINITION: "UnionTypeDefinition", ENUM_TYPE_DEFINITION: "EnumTypeDefinition", ENUM_VALUE_DEFINITION: "EnumValueDefinition", INPUT_OBJECT_TYPE_DEFINITION: "InputObjectTypeDefinition", DIRECTIVE_DEFINITION: "DirectiveDefinition", SCHEMA_EXTENSION: "SchemaExtension", SCALAR_TYPE_EXTENSION: "ScalarTypeExtension", OBJECT_TYPE_EXTENSION: "ObjectTypeExtension", INTERFACE_TYPE_EXTENSION: "InterfaceTypeExtension", UNION_TYPE_EXTENSION: "UnionTypeExtension", ENUM_TYPE_EXTENSION: "EnumTypeExtension", INPUT_OBJECT_TYPE_EXTENSION: "InputObjectTypeExtension" });
    function Gn(e) { var t = e.prototype.toJSON; "function" === typeof t || function (e, t) { if (!Boolean(e))
        throw new Error(null != t ? t : "Unexpected invariant triggered."); }(0), e.prototype.inspect = t, Tt && (e.prototype[Tt] = t); }
    var Yn = function () { function e(e, t, n) { this.start = e.start, this.end = t.end, this.startToken = e, this.endToken = t, this.source = n; } return e.prototype.toJSON = function () { return { start: this.start, end: this.end }; }, e; }();
    Gn(Yn);
    var Jn = function () { function e(e, t, n, r, i, o, a) { this.kind = e, this.start = t, this.end = n, this.line = r, this.column = i, this.value = a, this.prev = o, this.next = null; } return e.prototype.toJSON = function () { return { kind: this.kind, value: this.value, line: this.line, column: this.column }; }, e; }();
    function Xn(e) { return null != e && "string" === typeof e.kind; }
    Gn(Jn);
    var er = Object.freeze({ SOF: "<SOF>", EOF: "<EOF>", BANG: "!", DOLLAR: "$", AMP: "&", PAREN_L: "(", PAREN_R: ")", SPREAD: "...", COLON: ":", EQUALS: "=", AT: "@", BRACKET_L: "[", BRACKET_R: "]", BRACE_L: "{", PIPE: "|", BRACE_R: "}", NAME: "Name", INT: "Int", FLOAT: "Float", STRING: "String", BLOCK_STRING: "BlockString", COMMENT: "Comment" }), tr = Object.freeze({ QUERY: "QUERY", MUTATION: "MUTATION", SUBSCRIPTION: "SUBSCRIPTION", FIELD: "FIELD", FRAGMENT_DEFINITION: "FRAGMENT_DEFINITION", FRAGMENT_SPREAD: "FRAGMENT_SPREAD", INLINE_FRAGMENT: "INLINE_FRAGMENT", VARIABLE_DEFINITION: "VARIABLE_DEFINITION", SCHEMA: "SCHEMA", SCALAR: "SCALAR", OBJECT: "OBJECT", FIELD_DEFINITION: "FIELD_DEFINITION", ARGUMENT_DEFINITION: "ARGUMENT_DEFINITION", INTERFACE: "INTERFACE", UNION: "UNION", ENUM: "ENUM", ENUM_VALUE: "ENUM_VALUE", INPUT_OBJECT: "INPUT_OBJECT", INPUT_FIELD_DEFINITION: "INPUT_FIELD_DEFINITION" });
    function nr(e) { var t = e.split(/\r\n|[\n\r]/g), n = function (e) { for (var t, n = !0, r = !0, i = 0, o = null, a = 0; a < e.length; ++a)
        switch (e.charCodeAt(a)) {
            case 13: 10 === e.charCodeAt(a + 1) && ++a;
            case 10:
                n = !1, r = !0, i = 0;
                break;
            case 9:
            case 32:
                ++i;
                break;
            default: r && !n && (null === o || i < o) && (o = i), r = !1;
        } return null !== (t = o) && void 0 !== t ? t : 0; }(e); if (0 !== n)
        for (var r = 1; r < t.length; r++)
            t[r] = t[r].slice(n); for (var i = 0; i < t.length && rr(t[i]);)
        ++i; for (var o = t.length; o > i && rr(t[o - 1]);)
        --o; return t.slice(i, o).join("\n"); }
    function rr(e) { for (var t = 0; t < e.length; ++t)
        if (" " !== e[t] && "\t" !== e[t])
            return !1; return !0; }
    var ir = function () { function e(e) { var t = new Jn(er.SOF, 0, 0, 0, 0, null); this.source = e, this.lastToken = t, this.token = t, this.line = 1, this.lineStart = 0; } var t = e.prototype; return t.advance = function () { return this.lastToken = this.token, this.token = this.lookahead(); }, t.lookahead = function () { var e = this.token; if (e.kind !== er.EOF)
        do {
            var t;
            e = null !== (t = e.next) && void 0 !== t ? t : e.next = ar(this, e);
        } while (e.kind === er.COMMENT); return e; }, e; }();
    function or(e) { return isNaN(e) ? er.EOF : e < 127 ? JSON.stringify(String.fromCharCode(e)) : '"\\u'.concat(("00" + e.toString(16).toUpperCase()).slice(-4), '"'); }
    function ar(e, t) { for (var n = e.source, r = n.body, i = r.length, o = t.end; o < i;) {
        var a = r.charCodeAt(o), u = e.line, s = 1 + o - e.lineStart;
        switch (a) {
            case 65279:
            case 9:
            case 32:
            case 44:
                ++o;
                continue;
            case 10:
                ++o, ++e.line, e.lineStart = o;
                continue;
            case 13:
                10 === r.charCodeAt(o + 1) ? o += 2 : ++o, ++e.line, e.lineStart = o;
                continue;
            case 33: return new Jn(er.BANG, o, o + 1, u, s, t);
            case 35: return sr(n, o, u, s, t);
            case 36: return new Jn(er.DOLLAR, o, o + 1, u, s, t);
            case 38: return new Jn(er.AMP, o, o + 1, u, s, t);
            case 40: return new Jn(er.PAREN_L, o, o + 1, u, s, t);
            case 41: return new Jn(er.PAREN_R, o, o + 1, u, s, t);
            case 46:
                if (46 === r.charCodeAt(o + 1) && 46 === r.charCodeAt(o + 2))
                    return new Jn(er.SPREAD, o, o + 3, u, s, t);
                break;
            case 58: return new Jn(er.COLON, o, o + 1, u, s, t);
            case 61: return new Jn(er.EQUALS, o, o + 1, u, s, t);
            case 64: return new Jn(er.AT, o, o + 1, u, s, t);
            case 91: return new Jn(er.BRACKET_L, o, o + 1, u, s, t);
            case 93: return new Jn(er.BRACKET_R, o, o + 1, u, s, t);
            case 123: return new Jn(er.BRACE_L, o, o + 1, u, s, t);
            case 124: return new Jn(er.PIPE, o, o + 1, u, s, t);
            case 125: return new Jn(er.BRACE_R, o, o + 1, u, s, t);
            case 34: return 34 === r.charCodeAt(o + 1) && 34 === r.charCodeAt(o + 2) ? dr(n, o, u, s, t, e) : fr(n, o, u, s, t);
            case 45:
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57: return lr(n, o, a, u, s, t);
            case 65:
            case 66:
            case 67:
            case 68:
            case 69:
            case 70:
            case 71:
            case 72:
            case 73:
            case 74:
            case 75:
            case 76:
            case 77:
            case 78:
            case 79:
            case 80:
            case 81:
            case 82:
            case 83:
            case 84:
            case 85:
            case 86:
            case 87:
            case 88:
            case 89:
            case 90:
            case 95:
            case 97:
            case 98:
            case 99:
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
            case 106:
            case 107:
            case 108:
            case 109:
            case 110:
            case 111:
            case 112:
            case 113:
            case 114:
            case 115:
            case 116:
            case 117:
            case 118:
            case 119:
            case 120:
            case 121:
            case 122: return hr(n, o, u, s, t);
        }
        throw Kn(n, o, ur(a));
    } var l = e.line, c = 1 + o - e.lineStart; return new Jn(er.EOF, i, i, l, c, t); }
    function ur(e) { return e < 32 && 9 !== e && 10 !== e && 13 !== e ? "Cannot contain the invalid character ".concat(or(e), ".") : 39 === e ? "Unexpected single quote character ('), did you mean to use a double quote (\")?" : "Cannot parse the unexpected character ".concat(or(e), "."); }
    function sr(e, t, n, r, i) { var o, a = e.body, u = t; do {
        o = a.charCodeAt(++u);
    } while (!isNaN(o) && (o > 31 || 9 === o)); return new Jn(er.COMMENT, t, u, n, r, i, a.slice(t + 1, u)); }
    function lr(e, t, n, r, i, o) { var a = e.body, u = n, s = t, l = !1; if (45 === u && (u = a.charCodeAt(++s)), 48 === u) {
        if ((u = a.charCodeAt(++s)) >= 48 && u <= 57)
            throw Kn(e, s, "Invalid number, unexpected digit after 0: ".concat(or(u), "."));
    }
    else
        s = cr(e, s, u), u = a.charCodeAt(s); if (46 === u && (l = !0, u = a.charCodeAt(++s), s = cr(e, s, u), u = a.charCodeAt(s)), 69 !== u && 101 !== u || (l = !0, 43 !== (u = a.charCodeAt(++s)) && 45 !== u || (u = a.charCodeAt(++s)), s = cr(e, s, u), u = a.charCodeAt(s)), 46 === u || function (e) { return 95 === e || e >= 65 && e <= 90 || e >= 97 && e <= 122; }(u))
        throw Kn(e, s, "Invalid number, expected digit but got: ".concat(or(u), ".")); return new Jn(l ? er.FLOAT : er.INT, t, s, r, i, o, a.slice(t, s)); }
    function cr(e, t, n) { var r = e.body, i = t, o = n; if (o >= 48 && o <= 57) {
        do {
            o = r.charCodeAt(++i);
        } while (o >= 48 && o <= 57);
        return i;
    } throw Kn(e, i, "Invalid number, expected digit but got: ".concat(or(o), ".")); }
    function fr(e, t, n, r, i) { for (var o, a, u, s, l = e.body, c = t + 1, f = c, d = 0, p = ""; c < l.length && !isNaN(d = l.charCodeAt(c)) && 10 !== d && 13 !== d;) {
        if (34 === d)
            return p += l.slice(f, c), new Jn(er.STRING, t, c + 1, n, r, i, p);
        if (d < 32 && 9 !== d)
            throw Kn(e, c, "Invalid character within String: ".concat(or(d), "."));
        if (++c, 92 === d) {
            switch (p += l.slice(f, c - 1), d = l.charCodeAt(c)) {
                case 34:
                    p += '"';
                    break;
                case 47:
                    p += "/";
                    break;
                case 92:
                    p += "\\";
                    break;
                case 98:
                    p += "\b";
                    break;
                case 102:
                    p += "\f";
                    break;
                case 110:
                    p += "\n";
                    break;
                case 114:
                    p += "\r";
                    break;
                case 116:
                    p += "\t";
                    break;
                case 117:
                    var h = (o = l.charCodeAt(c + 1), a = l.charCodeAt(c + 2), u = l.charCodeAt(c + 3), s = l.charCodeAt(c + 4), pr(o) << 12 | pr(a) << 8 | pr(u) << 4 | pr(s));
                    if (h < 0) {
                        var v = l.slice(c + 1, c + 5);
                        throw Kn(e, c, "Invalid character escape sequence: \\u".concat(v, "."));
                    }
                    p += String.fromCharCode(h), c += 4;
                    break;
                default: throw Kn(e, c, "Invalid character escape sequence: \\".concat(String.fromCharCode(d), "."));
            }
            f = ++c;
        }
    } throw Kn(e, c, "Unterminated string."); }
    function dr(e, t, n, r, i, o) { for (var a = e.body, u = t + 3, s = u, l = 0, c = ""; u < a.length && !isNaN(l = a.charCodeAt(u));) {
        if (34 === l && 34 === a.charCodeAt(u + 1) && 34 === a.charCodeAt(u + 2))
            return c += a.slice(s, u), new Jn(er.BLOCK_STRING, t, u + 3, n, r, i, nr(c));
        if (l < 32 && 9 !== l && 10 !== l && 13 !== l)
            throw Kn(e, u, "Invalid character within String: ".concat(or(l), "."));
        10 === l ? (++u, ++o.line, o.lineStart = u) : 13 === l ? (10 === a.charCodeAt(u + 1) ? u += 2 : ++u, ++o.line, o.lineStart = u) : 92 === l && 34 === a.charCodeAt(u + 1) && 34 === a.charCodeAt(u + 2) && 34 === a.charCodeAt(u + 3) ? (c += a.slice(s, u) + '"""', s = u += 4) : ++u;
    } throw Kn(e, u, "Unterminated string."); }
    function pr(e) { return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1; }
    function hr(e, t, n, r, i) { for (var o = e.body, a = o.length, u = t + 1, s = 0; u !== a && !isNaN(s = o.charCodeAt(u)) && (95 === s || s >= 48 && s <= 57 || s >= 65 && s <= 90 || s >= 97 && s <= 122);)
        ++u; return new Jn(er.NAME, t, u, n, r, i, o.slice(t, u)); }
    var vr = function () { function e(e, t) { var n = function (e) { return At(e, Ft); }(e) ? e : new Ft(e); this._lexer = new ir(n), this._options = t; } var t = e.prototype; return t.parseName = function () { var e = this.expectToken(er.NAME); return { kind: $n.NAME, value: e.value, loc: this.loc(e) }; }, t.parseDocument = function () { var e = this._lexer.token; return { kind: $n.DOCUMENT, definitions: this.many(er.SOF, this.parseDefinition, er.EOF), loc: this.loc(e) }; }, t.parseDefinition = function () { if (this.peek(er.NAME))
        switch (this._lexer.token.value) {
            case "query":
            case "mutation":
            case "subscription": return this.parseOperationDefinition();
            case "fragment": return this.parseFragmentDefinition();
            case "schema":
            case "scalar":
            case "type":
            case "interface":
            case "union":
            case "enum":
            case "input":
            case "directive": return this.parseTypeSystemDefinition();
            case "extend": return this.parseTypeSystemExtension();
        }
    else {
        if (this.peek(er.BRACE_L))
            return this.parseOperationDefinition();
        if (this.peekDescription())
            return this.parseTypeSystemDefinition();
    } throw this.unexpected(); }, t.parseOperationDefinition = function () { var e = this._lexer.token; if (this.peek(er.BRACE_L))
        return { kind: $n.OPERATION_DEFINITION, operation: "query", name: void 0, variableDefinitions: [], directives: [], selectionSet: this.parseSelectionSet(), loc: this.loc(e) }; var t, n = this.parseOperationType(); return this.peek(er.NAME) && (t = this.parseName()), { kind: $n.OPERATION_DEFINITION, operation: n, name: t, variableDefinitions: this.parseVariableDefinitions(), directives: this.parseDirectives(!1), selectionSet: this.parseSelectionSet(), loc: this.loc(e) }; }, t.parseOperationType = function () { var e = this.expectToken(er.NAME); switch (e.value) {
        case "query": return "query";
        case "mutation": return "mutation";
        case "subscription": return "subscription";
    } throw this.unexpected(e); }, t.parseVariableDefinitions = function () { return this.optionalMany(er.PAREN_L, this.parseVariableDefinition, er.PAREN_R); }, t.parseVariableDefinition = function () { var e = this._lexer.token; return { kind: $n.VARIABLE_DEFINITION, variable: this.parseVariable(), type: (this.expectToken(er.COLON), this.parseTypeReference()), defaultValue: this.expectOptionalToken(er.EQUALS) ? this.parseValueLiteral(!0) : void 0, directives: this.parseDirectives(!0), loc: this.loc(e) }; }, t.parseVariable = function () { var e = this._lexer.token; return this.expectToken(er.DOLLAR), { kind: $n.VARIABLE, name: this.parseName(), loc: this.loc(e) }; }, t.parseSelectionSet = function () { var e = this._lexer.token; return { kind: $n.SELECTION_SET, selections: this.many(er.BRACE_L, this.parseSelection, er.BRACE_R), loc: this.loc(e) }; }, t.parseSelection = function () { return this.peek(er.SPREAD) ? this.parseFragment() : this.parseField(); }, t.parseField = function () { var e, t, n = this._lexer.token, r = this.parseName(); return this.expectOptionalToken(er.COLON) ? (e = r, t = this.parseName()) : t = r, { kind: $n.FIELD, alias: e, name: t, arguments: this.parseArguments(!1), directives: this.parseDirectives(!1), selectionSet: this.peek(er.BRACE_L) ? this.parseSelectionSet() : void 0, loc: this.loc(n) }; }, t.parseArguments = function (e) { var t = e ? this.parseConstArgument : this.parseArgument; return this.optionalMany(er.PAREN_L, t, er.PAREN_R); }, t.parseArgument = function () { var e = this._lexer.token, t = this.parseName(); return this.expectToken(er.COLON), { kind: $n.ARGUMENT, name: t, value: this.parseValueLiteral(!1), loc: this.loc(e) }; }, t.parseConstArgument = function () { var e = this._lexer.token; return { kind: $n.ARGUMENT, name: this.parseName(), value: (this.expectToken(er.COLON), this.parseValueLiteral(!0)), loc: this.loc(e) }; }, t.parseFragment = function () { var e = this._lexer.token; this.expectToken(er.SPREAD); var t = this.expectOptionalKeyword("on"); return !t && this.peek(er.NAME) ? { kind: $n.FRAGMENT_SPREAD, name: this.parseFragmentName(), directives: this.parseDirectives(!1), loc: this.loc(e) } : { kind: $n.INLINE_FRAGMENT, typeCondition: t ? this.parseNamedType() : void 0, directives: this.parseDirectives(!1), selectionSet: this.parseSelectionSet(), loc: this.loc(e) }; }, t.parseFragmentDefinition = function () { var e, t = this._lexer.token; return this.expectKeyword("fragment"), !0 === (null === (e = this._options) || void 0 === e ? void 0 : e.experimentalFragmentVariables) ? { kind: $n.FRAGMENT_DEFINITION, name: this.parseFragmentName(), variableDefinitions: this.parseVariableDefinitions(), typeCondition: (this.expectKeyword("on"), this.parseNamedType()), directives: this.parseDirectives(!1), selectionSet: this.parseSelectionSet(), loc: this.loc(t) } : { kind: $n.FRAGMENT_DEFINITION, name: this.parseFragmentName(), typeCondition: (this.expectKeyword("on"), this.parseNamedType()), directives: this.parseDirectives(!1), selectionSet: this.parseSelectionSet(), loc: this.loc(t) }; }, t.parseFragmentName = function () { if ("on" === this._lexer.token.value)
        throw this.unexpected(); return this.parseName(); }, t.parseValueLiteral = function (e) { var t = this._lexer.token; switch (t.kind) {
        case er.BRACKET_L: return this.parseList(e);
        case er.BRACE_L: return this.parseObject(e);
        case er.INT: return this._lexer.advance(), { kind: $n.INT, value: t.value, loc: this.loc(t) };
        case er.FLOAT: return this._lexer.advance(), { kind: $n.FLOAT, value: t.value, loc: this.loc(t) };
        case er.STRING:
        case er.BLOCK_STRING: return this.parseStringLiteral();
        case er.NAME: switch (this._lexer.advance(), t.value) {
            case "true": return { kind: $n.BOOLEAN, value: !0, loc: this.loc(t) };
            case "false": return { kind: $n.BOOLEAN, value: !1, loc: this.loc(t) };
            case "null": return { kind: $n.NULL, loc: this.loc(t) };
            default: return { kind: $n.ENUM, value: t.value, loc: this.loc(t) };
        }
        case er.DOLLAR: if (!e)
            return this.parseVariable();
    } throw this.unexpected(); }, t.parseStringLiteral = function () { var e = this._lexer.token; return this._lexer.advance(), { kind: $n.STRING, value: e.value, block: e.kind === er.BLOCK_STRING, loc: this.loc(e) }; }, t.parseList = function (e) { var t = this, n = this._lexer.token; return { kind: $n.LIST, values: this.any(er.BRACKET_L, (function () { return t.parseValueLiteral(e); }), er.BRACKET_R), loc: this.loc(n) }; }, t.parseObject = function (e) { var t = this, n = this._lexer.token; return { kind: $n.OBJECT, fields: this.any(er.BRACE_L, (function () { return t.parseObjectField(e); }), er.BRACE_R), loc: this.loc(n) }; }, t.parseObjectField = function (e) { var t = this._lexer.token, n = this.parseName(); return this.expectToken(er.COLON), { kind: $n.OBJECT_FIELD, name: n, value: this.parseValueLiteral(e), loc: this.loc(t) }; }, t.parseDirectives = function (e) { for (var t = []; this.peek(er.AT);)
        t.push(this.parseDirective(e)); return t; }, t.parseDirective = function (e) { var t = this._lexer.token; return this.expectToken(er.AT), { kind: $n.DIRECTIVE, name: this.parseName(), arguments: this.parseArguments(e), loc: this.loc(t) }; }, t.parseTypeReference = function () { var e, t = this._lexer.token; return this.expectOptionalToken(er.BRACKET_L) ? (e = this.parseTypeReference(), this.expectToken(er.BRACKET_R), e = { kind: $n.LIST_TYPE, type: e, loc: this.loc(t) }) : e = this.parseNamedType(), this.expectOptionalToken(er.BANG) ? { kind: $n.NON_NULL_TYPE, type: e, loc: this.loc(t) } : e; }, t.parseNamedType = function () { var e = this._lexer.token; return { kind: $n.NAMED_TYPE, name: this.parseName(), loc: this.loc(e) }; }, t.parseTypeSystemDefinition = function () { var e = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token; if (e.kind === er.NAME)
        switch (e.value) {
            case "schema": return this.parseSchemaDefinition();
            case "scalar": return this.parseScalarTypeDefinition();
            case "type": return this.parseObjectTypeDefinition();
            case "interface": return this.parseInterfaceTypeDefinition();
            case "union": return this.parseUnionTypeDefinition();
            case "enum": return this.parseEnumTypeDefinition();
            case "input": return this.parseInputObjectTypeDefinition();
            case "directive": return this.parseDirectiveDefinition();
        } throw this.unexpected(e); }, t.peekDescription = function () { return this.peek(er.STRING) || this.peek(er.BLOCK_STRING); }, t.parseDescription = function () { if (this.peekDescription())
        return this.parseStringLiteral(); }, t.parseSchemaDefinition = function () { var e = this._lexer.token, t = this.parseDescription(); this.expectKeyword("schema"); var n = this.parseDirectives(!0), r = this.many(er.BRACE_L, this.parseOperationTypeDefinition, er.BRACE_R); return { kind: $n.SCHEMA_DEFINITION, description: t, directives: n, operationTypes: r, loc: this.loc(e) }; }, t.parseOperationTypeDefinition = function () { var e = this._lexer.token, t = this.parseOperationType(); this.expectToken(er.COLON); var n = this.parseNamedType(); return { kind: $n.OPERATION_TYPE_DEFINITION, operation: t, type: n, loc: this.loc(e) }; }, t.parseScalarTypeDefinition = function () { var e = this._lexer.token, t = this.parseDescription(); this.expectKeyword("scalar"); var n = this.parseName(), r = this.parseDirectives(!0); return { kind: $n.SCALAR_TYPE_DEFINITION, description: t, name: n, directives: r, loc: this.loc(e) }; }, t.parseObjectTypeDefinition = function () { var e = this._lexer.token, t = this.parseDescription(); this.expectKeyword("type"); var n = this.parseName(), r = this.parseImplementsInterfaces(), i = this.parseDirectives(!0), o = this.parseFieldsDefinition(); return { kind: $n.OBJECT_TYPE_DEFINITION, description: t, name: n, interfaces: r, directives: i, fields: o, loc: this.loc(e) }; }, t.parseImplementsInterfaces = function () { var e; if (!this.expectOptionalKeyword("implements"))
        return []; if (!0 === (null === (e = this._options) || void 0 === e ? void 0 : e.allowLegacySDLImplementsInterfaces)) {
        var t = [];
        this.expectOptionalToken(er.AMP);
        do {
            t.push(this.parseNamedType());
        } while (this.expectOptionalToken(er.AMP) || this.peek(er.NAME));
        return t;
    } return this.delimitedMany(er.AMP, this.parseNamedType); }, t.parseFieldsDefinition = function () { var e; return !0 === (null === (e = this._options) || void 0 === e ? void 0 : e.allowLegacySDLEmptyFields) && this.peek(er.BRACE_L) && this._lexer.lookahead().kind === er.BRACE_R ? (this._lexer.advance(), this._lexer.advance(), []) : this.optionalMany(er.BRACE_L, this.parseFieldDefinition, er.BRACE_R); }, t.parseFieldDefinition = function () { var e = this._lexer.token, t = this.parseDescription(), n = this.parseName(), r = this.parseArgumentDefs(); this.expectToken(er.COLON); var i = this.parseTypeReference(), o = this.parseDirectives(!0); return { kind: $n.FIELD_DEFINITION, description: t, name: n, arguments: r, type: i, directives: o, loc: this.loc(e) }; }, t.parseArgumentDefs = function () { return this.optionalMany(er.PAREN_L, this.parseInputValueDef, er.PAREN_R); }, t.parseInputValueDef = function () { var e = this._lexer.token, t = this.parseDescription(), n = this.parseName(); this.expectToken(er.COLON); var r, i = this.parseTypeReference(); this.expectOptionalToken(er.EQUALS) && (r = this.parseValueLiteral(!0)); var o = this.parseDirectives(!0); return { kind: $n.INPUT_VALUE_DEFINITION, description: t, name: n, type: i, defaultValue: r, directives: o, loc: this.loc(e) }; }, t.parseInterfaceTypeDefinition = function () { var e = this._lexer.token, t = this.parseDescription(); this.expectKeyword("interface"); var n = this.parseName(), r = this.parseImplementsInterfaces(), i = this.parseDirectives(!0), o = this.parseFieldsDefinition(); return { kind: $n.INTERFACE_TYPE_DEFINITION, description: t, name: n, interfaces: r, directives: i, fields: o, loc: this.loc(e) }; }, t.parseUnionTypeDefinition = function () { var e = this._lexer.token, t = this.parseDescription(); this.expectKeyword("union"); var n = this.parseName(), r = this.parseDirectives(!0), i = this.parseUnionMemberTypes(); return { kind: $n.UNION_TYPE_DEFINITION, description: t, name: n, directives: r, types: i, loc: this.loc(e) }; }, t.parseUnionMemberTypes = function () { return this.expectOptionalToken(er.EQUALS) ? this.delimitedMany(er.PIPE, this.parseNamedType) : []; }, t.parseEnumTypeDefinition = function () { var e = this._lexer.token, t = this.parseDescription(); this.expectKeyword("enum"); var n = this.parseName(), r = this.parseDirectives(!0), i = this.parseEnumValuesDefinition(); return { kind: $n.ENUM_TYPE_DEFINITION, description: t, name: n, directives: r, values: i, loc: this.loc(e) }; }, t.parseEnumValuesDefinition = function () { return this.optionalMany(er.BRACE_L, this.parseEnumValueDefinition, er.BRACE_R); }, t.parseEnumValueDefinition = function () { var e = this._lexer.token, t = this.parseDescription(), n = this.parseName(), r = this.parseDirectives(!0); return { kind: $n.ENUM_VALUE_DEFINITION, description: t, name: n, directives: r, loc: this.loc(e) }; }, t.parseInputObjectTypeDefinition = function () { var e = this._lexer.token, t = this.parseDescription(); this.expectKeyword("input"); var n = this.parseName(), r = this.parseDirectives(!0), i = this.parseInputFieldsDefinition(); return { kind: $n.INPUT_OBJECT_TYPE_DEFINITION, description: t, name: n, directives: r, fields: i, loc: this.loc(e) }; }, t.parseInputFieldsDefinition = function () { return this.optionalMany(er.BRACE_L, this.parseInputValueDef, er.BRACE_R); }, t.parseTypeSystemExtension = function () { var e = this._lexer.lookahead(); if (e.kind === er.NAME)
        switch (e.value) {
            case "schema": return this.parseSchemaExtension();
            case "scalar": return this.parseScalarTypeExtension();
            case "type": return this.parseObjectTypeExtension();
            case "interface": return this.parseInterfaceTypeExtension();
            case "union": return this.parseUnionTypeExtension();
            case "enum": return this.parseEnumTypeExtension();
            case "input": return this.parseInputObjectTypeExtension();
        } throw this.unexpected(e); }, t.parseSchemaExtension = function () { var e = this._lexer.token; this.expectKeyword("extend"), this.expectKeyword("schema"); var t = this.parseDirectives(!0), n = this.optionalMany(er.BRACE_L, this.parseOperationTypeDefinition, er.BRACE_R); if (0 === t.length && 0 === n.length)
        throw this.unexpected(); return { kind: $n.SCHEMA_EXTENSION, directives: t, operationTypes: n, loc: this.loc(e) }; }, t.parseScalarTypeExtension = function () { var e = this._lexer.token; this.expectKeyword("extend"), this.expectKeyword("scalar"); var t = this.parseName(), n = this.parseDirectives(!0); if (0 === n.length)
        throw this.unexpected(); return { kind: $n.SCALAR_TYPE_EXTENSION, name: t, directives: n, loc: this.loc(e) }; }, t.parseObjectTypeExtension = function () { var e = this._lexer.token; this.expectKeyword("extend"), this.expectKeyword("type"); var t = this.parseName(), n = this.parseImplementsInterfaces(), r = this.parseDirectives(!0), i = this.parseFieldsDefinition(); if (0 === n.length && 0 === r.length && 0 === i.length)
        throw this.unexpected(); return { kind: $n.OBJECT_TYPE_EXTENSION, name: t, interfaces: n, directives: r, fields: i, loc: this.loc(e) }; }, t.parseInterfaceTypeExtension = function () { var e = this._lexer.token; this.expectKeyword("extend"), this.expectKeyword("interface"); var t = this.parseName(), n = this.parseImplementsInterfaces(), r = this.parseDirectives(!0), i = this.parseFieldsDefinition(); if (0 === n.length && 0 === r.length && 0 === i.length)
        throw this.unexpected(); return { kind: $n.INTERFACE_TYPE_EXTENSION, name: t, interfaces: n, directives: r, fields: i, loc: this.loc(e) }; }, t.parseUnionTypeExtension = function () { var e = this._lexer.token; this.expectKeyword("extend"), this.expectKeyword("union"); var t = this.parseName(), n = this.parseDirectives(!0), r = this.parseUnionMemberTypes(); if (0 === n.length && 0 === r.length)
        throw this.unexpected(); return { kind: $n.UNION_TYPE_EXTENSION, name: t, directives: n, types: r, loc: this.loc(e) }; }, t.parseEnumTypeExtension = function () { var e = this._lexer.token; this.expectKeyword("extend"), this.expectKeyword("enum"); var t = this.parseName(), n = this.parseDirectives(!0), r = this.parseEnumValuesDefinition(); if (0 === n.length && 0 === r.length)
        throw this.unexpected(); return { kind: $n.ENUM_TYPE_EXTENSION, name: t, directives: n, values: r, loc: this.loc(e) }; }, t.parseInputObjectTypeExtension = function () { var e = this._lexer.token; this.expectKeyword("extend"), this.expectKeyword("input"); var t = this.parseName(), n = this.parseDirectives(!0), r = this.parseInputFieldsDefinition(); if (0 === n.length && 0 === r.length)
        throw this.unexpected(); return { kind: $n.INPUT_OBJECT_TYPE_EXTENSION, name: t, directives: n, fields: r, loc: this.loc(e) }; }, t.parseDirectiveDefinition = function () { var e = this._lexer.token, t = this.parseDescription(); this.expectKeyword("directive"), this.expectToken(er.AT); var n = this.parseName(), r = this.parseArgumentDefs(), i = this.expectOptionalKeyword("repeatable"); this.expectKeyword("on"); var o = this.parseDirectiveLocations(); return { kind: $n.DIRECTIVE_DEFINITION, description: t, name: n, arguments: r, repeatable: i, locations: o, loc: this.loc(e) }; }, t.parseDirectiveLocations = function () { return this.delimitedMany(er.PIPE, this.parseDirectiveLocation); }, t.parseDirectiveLocation = function () { var e = this._lexer.token, t = this.parseName(); if (void 0 !== tr[t.value])
        return t; throw this.unexpected(e); }, t.loc = function (e) { var t; if (!0 !== (null === (t = this._options) || void 0 === t ? void 0 : t.noLocation))
        return new Yn(e, this._lexer.lastToken, this._lexer.source); }, t.peek = function (e) { return this._lexer.token.kind === e; }, t.expectToken = function (e) { var t = this._lexer.token; if (t.kind === e)
        return this._lexer.advance(), t; throw Kn(this._lexer.source, t.start, "Expected ".concat(yr(e), ", found ").concat(mr(t), ".")); }, t.expectOptionalToken = function (e) { var t = this._lexer.token; if (t.kind === e)
        return this._lexer.advance(), t; }, t.expectKeyword = function (e) { var t = this._lexer.token; if (t.kind !== er.NAME || t.value !== e)
        throw Kn(this._lexer.source, t.start, 'Expected "'.concat(e, '", found ').concat(mr(t), ".")); this._lexer.advance(); }, t.expectOptionalKeyword = function (e) { var t = this._lexer.token; return t.kind === er.NAME && t.value === e && (this._lexer.advance(), !0); }, t.unexpected = function (e) { var t = null !== e && void 0 !== e ? e : this._lexer.token; return Kn(this._lexer.source, t.start, "Unexpected ".concat(mr(t), ".")); }, t.any = function (e, t, n) { this.expectToken(e); for (var r = []; !this.expectOptionalToken(n);)
        r.push(t.call(this)); return r; }, t.optionalMany = function (e, t, n) { if (this.expectOptionalToken(e)) {
        var r = [];
        do {
            r.push(t.call(this));
        } while (!this.expectOptionalToken(n));
        return r;
    } return []; }, t.many = function (e, t, n) { this.expectToken(e); var r = []; do {
        r.push(t.call(this));
    } while (!this.expectOptionalToken(n)); return r; }, t.delimitedMany = function (e, t) { this.expectOptionalToken(e); var n = []; do {
        n.push(t.call(this));
    } while (this.expectOptionalToken(e)); return n; }, e; }();
    function mr(e) { var t = e.value; return yr(e.kind) + (null != t ? ' "'.concat(t, '"') : ""); }
    function yr(e) { return function (e) { return e === er.BANG || e === er.DOLLAR || e === er.AMP || e === er.PAREN_L || e === er.PAREN_R || e === er.SPREAD || e === er.COLON || e === er.EQUALS || e === er.AT || e === er.BRACKET_L || e === er.BRACKET_R || e === er.BRACE_L || e === er.PIPE || e === er.BRACE_R; }(e) ? '"'.concat(e, '"') : e; }
    var gr = new Map, br = new Map, wr = !0, xr = !1;
    function Er(e) { return e.replace(/[\s,]+/g, " ").trim(); }
    function kr(e) { var t = new Set, n = []; return e.definitions.forEach((function (e) { if ("FragmentDefinition" === e.kind) {
        var r = e.name.value, i = Er((a = e.loc).source.body.substring(a.start, a.end)), o = br.get(r);
        o && !o.has(i) ? wr && console.warn("Warning: fragment with name " + r + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names") : o || br.set(r, o = new Set), o.add(i), t.has(i) || (t.add(i), n.push(e));
    }
    else
        n.push(e); var a; })), at(at({}, e), { definitions: n }); }
    function _r(e) { var t = Er(e); if (!gr.has(t)) {
        var n = function (e, t) { return new vr(e, t).parseDocument(); }(e, { experimentalFragmentVariables: xr, allowLegacyFragmentVariables: xr });
        if (!n || "Document" !== n.kind)
            throw new Error("Not a valid GraphQL document.");
        gr.set(t, function (e) { var t = new Set(e.definitions); t.forEach((function (e) { e.loc && delete e.loc, Object.keys(e).forEach((function (n) { var r = e[n]; r && "object" === typeof r && t.add(r); })); })); var n = e.loc; return n && (delete n.startToken, delete n.endToken), e; }(kr(n)));
    } return gr.get(t); }
    function Sr(e) { for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n]; "string" === typeof e && (e = [e]); var r = e[0]; return t.forEach((function (t, n) { t && "Document" === t.kind ? r += t.loc.source.body : r += t, r += e[n + 1]; })), _r(r); }
    var Or, Nr = Sr, Cr = function () { gr.clear(), br.clear(); }, Tr = function () { wr = !1; }, jr = function () { xr = !0; }, Pr = function () { xr = !1; };
    (Or = Sr || (Sr = {})).gql = Nr, Or.resetCaches = Cr, Or.disableFragmentWarnings = Tr, Or.enableExperimentalFragmentVariables = jr, Or.disableExperimentalFragmentVariables = Pr, Sr.default = Sr;
    var Ir, Rr, Dr, Lr, Ar, Mr, Fr, Vr = Sr(Ir || (Ir = Cn(["\n    query me {\n        me {\n            _id\n            username\n            email\n            image\n            gender\n            age\n            preferences\n            about\n            savedInmates {\n                _id\n                inmateName\n                inmateImage\n            }\n        }\n    },\n"]))), qr = Sr(Rr || (Rr = Cn(["\n    query inmates {\n        inmates {\n            _id\n            username\n            image\n            gender\n            age\n            about\n        }\n    }\n"]))), Ur = Sr(Dr || (Dr = Cn(["\n    mutation login($email: String!, $password: String!) {\n        login(email: $email, password: $password) {\n            token\n            user {\n                email\n                password\n        }\n        }\n    }\n"]))), zr = Sr(Lr || (Lr = Cn(["\n    mutation addUser($username: String!, $email: String!, $password: String!, $age: String!, $gender: String!) {\n        addUser(username: $username, email: $email, password: $password, age: $age, gender: $gender ) {\n            token\n            user {\n                username\n                email\n                password\n                age\n                gender\n            }\n        }\n        }\n\n"]))), Qr = Sr(Ar || (Ar = Cn(["\n    mutation updateUser($preferences: String, $about: String) {\n        updateUser(image: $image, preferences: $preferences, about: $about) {\n            image\n            preferences\n            about\n        }\n    }\n"]))), Br = (Sr(Mr || (Mr = Cn(["\n    mutation saveInmate($input: InmateInput) {\n        saveInmate(input: $input) {\n            _id\n            username\n            email\n            savedInmates {\n                inmateId\n                name\n                image\n            }\n        }\n    }\n"]))), Sr(Fr || (Fr = Cn(["\n    mutation removeInmate($inmateId: ID!) {\n        removeInmate(inmateId: $inmateId) {\n            _id\n            username\n            email\n            savedInmates {\n                inmateId\n                name\n                image\n            }\n        }\n    }\n"]))), [{ username: "Saoirse", image: "https://www.mindfood.com/wp-content/uploads/2018/10/Saoirse-Ronan-M.jpeg", age: "26" }, { username: "Brendan", image: "https://imengine.public.prod.dur.navigacloud.com/?uuid=A207CDAC-187A-4AD4-B9FA-AC9E233E43AB&function=original&type=preview", age: "31" }, { username: "Lujan", image: "https://pbs.twimg.com/ext_tw_video_thumb/1569885466433929218/pu/img/SZUskyRF83Km_50l.jpg", age: "25" }, { username: "Pitt", image: "https://i.insider.com/536a4500ecad042454b1a77a?width=1018&format=jpeg", age: "29" }]);
    var Zr = function () { var t = On(qr), n = (t.loading, t.data); console.log(null === n || void 0 === n ? void 0 : n.inmates); var r = (0, e.useState)(Br.length - 1), i = (0, s.Z)(r, 2), o = i[0], a = i[1], u = (0, e.useState)(), l = (0, s.Z)(u, 2), c = l[0], f = l[1], d = (0, e.useRef)(o), p = (0, e.useMemo)((function () { return Array(Br.length).fill(0).map((function (t) { return e.createRef(); })); }), []), h = function (e) { a(e), d.current = e; }, v = o < Br.length - 1, m = o >= 0, y = function () { var e = (0, tt.Z)((0, et.Z)().mark((function e(t) { return (0, et.Z)().wrap((function (e) { for (;;)
        switch (e.prev = e.next) {
            case 0:
                if (!(m && o < Br.length)) {
                    e.next = 3;
                    break;
                }
                return e.next = 3, p[o].current.swipe(t);
            case 3:
            case "end": return e.stop();
        } }), e); }))); return function (t) { return e.apply(this, arguments); }; }(), g = function () { var e = (0, tt.Z)((0, et.Z)().mark((function e() { var t; return (0, et.Z)().wrap((function (e) { for (;;)
        switch (e.prev = e.next) {
            case 0:
                if (v) {
                    e.next = 2;
                    break;
                }
                return e.abrupt("return");
            case 2: return h(t = o + 1), e.next = 6, p[t].current.restoreCard();
            case 6:
            case "end": return e.stop();
        } }), e); }))); return function () { return e.apply(this, arguments); }; }(); return (0, We.jsxs)("div", { className: "cardDiv", children: [(0, We.jsx)("link", { href: "https://fonts.googleapis.com/css?family=Damion&display=swap", rel: "stylesheet" }), (0, We.jsx)("link", { href: "https://fonts.googleapis.com/css?family=Alatsi&display=swap", rel: "stylesheet" }), (0, We.jsx)("div", { className: "cardContainer", children: Br.map((function (e, t) { return (0, We.jsx)(rt(), { ref: p[t], className: "swipe", onSwipe: function (n) { return function (e, t, n) { f(e), h(n - 1); }(n, e.username, t); }, onCardLeftScreen: function () { return n = e.username, r = t, console.log("".concat(n, " (").concat(r, ") left the screen!"), d.current), void (d.current >= r && p[r].current.restoreCard()); var n, r; }, children: (0, We.jsx)("div", { style: { backgroundImage: "url(" + e.image + ")" }, className: "card", children: (0, We.jsxs)("h3", { className: "cardName", children: [(0, We.jsx)("b", { children: e.username }), " - ", e.age, "  "] }) }) }, e.username); })) }), (0, We.jsxs)("div", { className: "buttons", children: [(0, We.jsx)("button", { style: { backgroundColor: !m && "#c3c4d3" }, onClick: function () { return y("left"); }, children: "\u2716" }), (0, We.jsx)("button", { style: { backgroundColor: !v && "#c3c4d3" }, onClick: function () { return g(); }, children: "\u21aa" }), (0, We.jsx)("button", { style: { backgroundColor: !m && "#c3c4d3" }, onClick: function () { return y("right"); }, children: "\ud83d\udda4" })] }), c ? (0, We.jsxs)("h6", { className: "infoText", children: ["You swiped ", c] }, c) : (0, We.jsx)("h6", { className: "infoText", children: "You can only undo once you have swiped!" })] }); };
    function Wr(e) { this.message = e; }
    Wr.prototype = new Error, Wr.prototype.name = "InvalidCharacterError";
    var Hr = "undefined" != typeof window && window.atob && window.atob.bind(window) || function (e) { var t = String(e).replace(/=+$/, ""); if (t.length % 4 == 1)
        throw new Wr("'atob' failed: The string to be decoded is not correctly encoded."); for (var n, r, i = 0, o = 0, a = ""; r = t.charAt(o++); ~r && (n = i % 4 ? 64 * n + r : r, i++ % 4) ? a += String.fromCharCode(255 & n >> (-2 * i & 6)) : 0)
        r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r); return a; };
    function Kr(e) { var t = e.replace(/-/g, "+").replace(/_/g, "/"); switch (t.length % 4) {
        case 0: break;
        case 2:
            t += "==";
            break;
        case 3:
            t += "=";
            break;
        default: throw "Illegal base64url string!";
    } try {
        return function (e) { return decodeURIComponent(Hr(e).replace(/(.)/g, (function (e, t) { var n = t.charCodeAt(0).toString(16).toUpperCase(); return n.length < 2 && (n = "0" + n), "%" + n; }))); }(t);
    }
    catch (e) {
        return Hr(t);
    } }
    function $r(e) { this.message = e; }
    $r.prototype = new Error, $r.prototype.name = "InvalidTokenError";
    var Gr = function (e, t) { if ("string" != typeof e)
        throw new $r("Invalid token specified"); var n = !0 === (t = t || {}).header ? 0 : 1; try {
        return JSON.parse(Kr(e.split(".")[n]));
    }
    catch (e) {
        throw new $r("Invalid token specified: " + e.message);
    } }, Yr = new (function () { function e() { (0, c.Z)(this, e); } return (0, f.Z)(e, [{ key: "getProfile", value: function () { return Gr(this.getToken()); } }, { key: "loggedIn", value: function () { var e = this.getToken(); return e && !this.isTokenExpired(e); } }, { key: "isTokenExpired", value: function (e) { try {
                return Gr(e).exp < Date.now() / 1e3;
            }
            catch (t) {
                return !1;
            } } }, { key: "getToken", value: function () { return localStorage.getItem("id_token"); } }, { key: "login", value: function (e) { localStorage.setItem("id_token", e), window.location.assign("/"); } }, { key: "logout", value: function () { localStorage.removeItem("id_token"), window.location.assign("/"); } }]), e; }()), Jr = n.p + "static/media/hearthands.0240ce4825622d66b788.png", Xr = function () { return (0, We.jsx)(We.Fragment, { children: (0, We.jsx)(Xe, { children: Yr.loggedIn() ? (0, We.jsx)(Zr, {}) : (0, We.jsxs)("div", { children: [(0, We.jsx)("h1", { className: "title", children: "Sign up or login to start matching!" }), (0, We.jsx)("img", { src: Jr, alt: "hearthands", className: "heart" })] }) }) }); }, ei = function () { var e = On(Vr), t = e.loading, n = e.data; if (!t) {
        (null === n || void 0 === n ? void 0 : n.me) || (null === n || void 0 === n || n.user);
        console.log(n), Yr.loggedIn() && Yr.getProfile().data.username && console.log("true");
    } return console.log(null === n || void 0 === n ? void 0 : n.me), (0, We.jsxs)(We.Fragment, { children: [(0, We.jsx)("div", { className: "profile", children: (0, We.jsx)(Xe, { children: (0, We.jsx)("h1", { children: null === n || void 0 === n ? void 0 : n.image }) }) }), (0, We.jsx)(Xe, {})] }); }, ti = n(2007), ni = n.n(ti), ri = ["as", "className", "type", "tooltip"], ii = { type: ni().string, tooltip: ni().bool, as: ni().elementType }, oi = e.forwardRef((function (e, t) { var n = e.as, r = void 0 === n ? "div" : n, i = e.className, o = e.type, a = void 0 === o ? "valid" : o, s = e.tooltip, l = void 0 !== s && s, c = Qe(e, ri); return (0, We.jsx)(r, u(u({}, c), {}, { ref: t, className: Ze()(i, "".concat(a, "-").concat(l ? "tooltip" : "feedback")) })); }));
    oi.displayName = "Feedback", oi.propTypes = ii;
    var ai = oi, ui = e.createContext({}), si = ["id", "bsPrefix", "className", "type", "isValid", "isInvalid", "as"], li = e.forwardRef((function (t, n) { var r = t.id, i = t.bsPrefix, o = t.className, a = t.type, s = void 0 === a ? "checkbox" : a, l = t.isValid, c = void 0 !== l && l, f = t.isInvalid, d = void 0 !== f && f, p = t.as, h = void 0 === p ? "input" : p, v = Qe(t, si), m = (0, e.useContext)(ui).controlId; return i = $e(i, "form-check-input"), (0, We.jsx)(h, u(u({}, v), {}, { ref: n, type: s, id: r || m, className: Ze()(o, i, c && "is-valid", d && "is-invalid") })); }));
    li.displayName = "FormCheckInput";
    var ci = li, fi = ["bsPrefix", "className", "htmlFor"], di = e.forwardRef((function (t, n) { var r = t.bsPrefix, i = t.className, o = t.htmlFor, a = Qe(t, fi), s = (0, e.useContext)(ui).controlId; return r = $e(r, "form-check-label"), (0, We.jsx)("label", u(u({}, a), {}, { ref: n, htmlFor: o || s, className: Ze()(i, r) })); }));
    di.displayName = "FormCheckLabel";
    var pi = di;
    var hi = ["id", "bsPrefix", "bsSwitchPrefix", "inline", "reverse", "disabled", "isValid", "isInvalid", "feedbackTooltip", "feedback", "feedbackType", "className", "style", "title", "type", "label", "children", "as"], vi = e.forwardRef((function (t, n) { var r = t.id, i = t.bsPrefix, o = t.bsSwitchPrefix, a = t.inline, s = void 0 !== a && a, l = t.reverse, c = void 0 !== l && l, f = t.disabled, d = void 0 !== f && f, p = t.isValid, h = void 0 !== p && p, v = t.isInvalid, m = void 0 !== v && v, y = t.feedbackTooltip, g = void 0 !== y && y, b = t.feedback, w = t.feedbackType, x = t.className, E = t.style, k = t.title, _ = void 0 === k ? "" : k, S = t.type, O = void 0 === S ? "checkbox" : S, N = t.label, C = t.children, T = t.as, j = void 0 === T ? "input" : T, P = Qe(t, hi); i = $e(i, "form-check"), o = $e(o, "form-switch"); var I = (0, e.useContext)(ui).controlId, R = (0, e.useMemo)((function () { return { controlId: r || I }; }), [I, r]), D = !C && null != N && !1 !== N || function (t, n) { return e.Children.toArray(t).some((function (t) { return e.isValidElement(t) && t.type === n; })); }(C, pi), L = (0, We.jsx)(ci, u(u({}, P), {}, { type: "switch" === O ? "checkbox" : O, ref: n, isValid: h, isInvalid: m, disabled: d, as: j })); return (0, We.jsx)(ui.Provider, { value: R, children: (0, We.jsx)("div", { style: E, className: Ze()(x, D && i, s && "".concat(i, "-inline"), c && "".concat(i, "-reverse"), "switch" === O && o), children: C || (0, We.jsxs)(We.Fragment, { children: [L, D && (0, We.jsx)(pi, { title: _, children: N }), b && (0, We.jsx)(ai, { type: w, tooltip: g, children: b })] }) }) }); }));
    vi.displayName = "FormCheck";
    var mi = Object.assign(vi, { Input: ci, Label: pi }), yi = n(2391), gi = n.n(yi), bi = ["bsPrefix", "type", "size", "htmlSize", "id", "className", "isValid", "isInvalid", "plaintext", "readOnly", "as"], wi = e.forwardRef((function (t, n) { var r, i, a = t.bsPrefix, s = t.type, l = t.size, c = t.htmlSize, f = t.id, d = t.className, p = t.isValid, h = void 0 !== p && p, v = t.isInvalid, m = void 0 !== v && v, y = t.plaintext, g = t.readOnly, b = t.as, w = void 0 === b ? "input" : b, x = Qe(t, bi), E = (0, e.useContext)(ui).controlId; (a = $e(a, "form-control"), y) ? r = o({}, "".concat(a, "-plaintext"), !0) : (o(i = {}, a, !0), o(i, "".concat(a, "-").concat(l), l), r = i); return (0, We.jsx)(w, u(u({}, x), {}, { type: s, size: c, ref: n, readOnly: g, id: f || E, className: Ze()(d, r, h && "is-valid", m && "is-invalid", "color" === s && "".concat(a, "-color")) })); }));
    wi.displayName = "FormControl";
    var xi = Object.assign(wi, { Feedback: ai }), Ei = /-(.)/g;
    var ki = ["className", "bsPrefix", "as"], _i = function (e) { return e[0].toUpperCase() + (t = e, t.replace(Ei, (function (e, t) { return t.toUpperCase(); }))).slice(1); var t; };
    function Si(t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = n.displayName, i = void 0 === r ? _i(t) : r, o = n.Component, a = n.defaultProps, s = e.forwardRef((function (e, n) { var r = e.className, i = e.bsPrefix, s = e.as, l = void 0 === s ? o || "div" : s, c = Qe(e, ki), f = u(u({}, a), c), d = $e(i, t); return (0, We.jsx)(l, u({ ref: n, className: Ze()(r, d) }, f)); })); return s.displayName = i, s; }
    var Oi = Si("form-floating"), Ni = ["controlId", "as"], Ci = e.forwardRef((function (t, n) { var r = t.controlId, i = t.as, o = void 0 === i ? "div" : i, a = Qe(t, Ni), s = (0, e.useMemo)((function () { return { controlId: r }; }), [r]); return (0, We.jsx)(ui.Provider, { value: s, children: (0, We.jsx)(o, u(u({}, a), {}, { ref: n })) }); }));
    Ci.displayName = "FormGroup";
    var Ti = Ci, ji = ["as", "bsPrefix", "className"], Pi = ["className"];
    function Ii(t) { var n = t.as, r = t.bsPrefix, i = t.className, o = Qe(t, ji); r = $e(r, "col"); var a = (0, e.useContext)(Ke).breakpoints, s = (0, e.useContext)(Ke).minBreakpoint, l = [], c = []; return a.forEach((function (e) { var t, n, i, a = o[e]; delete o[e], "object" === typeof a && null != a ? (t = a.span, n = a.offset, i = a.order) : t = a; var u = e !== s ? "-".concat(e) : ""; t && l.push(!0 === t ? "".concat(r).concat(u) : "".concat(r).concat(u, "-").concat(t)), null != i && c.push("order".concat(u, "-").concat(i)), null != n && c.push("offset".concat(u, "-").concat(n)); })), [u(u({}, o), {}, { className: Ze().apply(void 0, [i].concat(l, c)) }), { as: n, bsPrefix: r, spans: l }]; }
    var Ri = e.forwardRef((function (e, t) { var n = Ii(e), r = (0, s.Z)(n, 2), i = r[0], o = i.className, a = Qe(i, Pi), l = r[1], c = l.as, f = void 0 === c ? "div" : c, d = l.bsPrefix, p = l.spans; return (0, We.jsx)(f, u(u({}, a), {}, { ref: t, className: Ze()(o, !p.length && d) })); }));
    Ri.displayName = "Col";
    var Di = Ri, Li = ["as", "bsPrefix", "column", "visuallyHidden", "className", "htmlFor"], Ai = e.forwardRef((function (t, n) { var r = t.as, i = void 0 === r ? "label" : r, o = t.bsPrefix, a = t.column, s = void 0 !== a && a, l = t.visuallyHidden, c = void 0 !== l && l, f = t.className, d = t.htmlFor, p = Qe(t, Li), h = (0, e.useContext)(ui).controlId; o = $e(o, "form-label"); var v = "col-form-label"; "string" === typeof s && (v = "".concat(v, " ").concat(v, "-").concat(s)); var m = Ze()(f, o, c && "visually-hidden", s && v); return d = d || h, s ? (0, We.jsx)(Di, u({ ref: n, as: "label", className: m, htmlFor: d }, p)) : (0, We.jsx)(i, u({ ref: n, className: m, htmlFor: d }, p)); }));
    Ai.displayName = "FormLabel";
    var Mi = Ai, Fi = ["bsPrefix", "className", "id"], Vi = e.forwardRef((function (t, n) { var r = t.bsPrefix, i = t.className, o = t.id, a = Qe(t, Fi), s = (0, e.useContext)(ui).controlId; return r = $e(r, "form-range"), (0, We.jsx)("input", u(u({}, a), {}, { type: "range", ref: n, className: Ze()(i, r), id: o || s })); }));
    Vi.displayName = "FormRange";
    var qi = Vi, Ui = ["bsPrefix", "size", "htmlSize", "className", "isValid", "isInvalid", "id"], zi = e.forwardRef((function (t, n) { var r = t.bsPrefix, i = t.size, o = t.htmlSize, a = t.className, s = t.isValid, l = void 0 !== s && s, c = t.isInvalid, f = void 0 !== c && c, d = t.id, p = Qe(t, Ui), h = (0, e.useContext)(ui).controlId; return r = $e(r, "form-select"), (0, We.jsx)("select", u(u({}, p), {}, { size: o, ref: n, className: Ze()(a, r, i && "".concat(r, "-").concat(i), l && "is-valid", f && "is-invalid"), id: d || h })); }));
    zi.displayName = "FormSelect";
    var Qi = zi, Bi = ["bsPrefix", "className", "as", "muted"], Zi = e.forwardRef((function (e, t) { var n = e.bsPrefix, r = e.className, i = e.as, o = void 0 === i ? "small" : i, a = e.muted, s = Qe(e, Bi); return n = $e(n, "form-text"), (0, We.jsx)(o, u(u({}, s), {}, { ref: t, className: Ze()(r, n, a && "text-muted") })); }));
    Zi.displayName = "FormText";
    var Wi = Zi, Hi = e.forwardRef((function (e, t) { return (0, We.jsx)(mi, u(u({}, e), {}, { ref: t, type: "switch" })); }));
    Hi.displayName = "Switch";
    var Ki = Object.assign(Hi, { Input: mi.Input, Label: mi.Label }), $i = ["bsPrefix", "className", "children", "controlId", "label"], Gi = e.forwardRef((function (e, t) { var n = e.bsPrefix, r = e.className, i = e.children, o = e.controlId, a = e.label, s = Qe(e, $i); return n = $e(n, "form-floating"), (0, We.jsxs)(Ti, u(u({ ref: t, className: Ze()(r, n), controlId: o }, s), {}, { children: [i, (0, We.jsx)("label", { htmlFor: o, children: a })] })); }));
    Gi.displayName = "FloatingLabel";
    var Yi = Gi, Ji = ["className", "validated", "as"], Xi = { _ref: ni().any, validated: ni().bool, as: ni().elementType }, eo = e.forwardRef((function (e, t) { var n = e.className, r = e.validated, i = e.as, o = void 0 === i ? "form" : i, a = Qe(e, Ji); return (0, We.jsx)(o, u(u({}, a), {}, { ref: t, className: Ze()(n, r && "was-validated") })); }));
    eo.displayName = "Form", eo.propTypes = Xi;
    var to = Object.assign(eo, { Group: Ti, Control: xi, Floating: Oi, Check: mi, Switch: Ki, Label: Mi, Text: Wi, Range: qi, Select: Qi, FloatingLabel: Yi });
    function no() { return no = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, no.apply(this, arguments); }
    n(2176);
    function ro(e) { return "default" + e.charAt(0).toUpperCase() + e.substr(1); }
    function io(e) { var t = function (e, t) { if ("object" !== typeof e || null === e)
        return e; var n = e[Symbol.toPrimitive]; if (void 0 !== n) {
        var r = n.call(e, t || "default");
        if ("object" !== typeof r)
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    } return ("string" === t ? String : Number)(e); }(e, "string"); return "symbol" === typeof t ? t : String(t); }
    function oo(t, n) { return Object.keys(n).reduce((function (r, i) { var o, a = r, u = a[ro(i)], s = a[i], l = ze(a, [ro(i), i].map(io)), c = n[i], f = function (t, n, r) { var i = (0, e.useRef)(void 0 !== t), o = (0, e.useState)(n), a = o[0], u = o[1], s = void 0 !== t, l = i.current; return i.current = s, !s && l && a !== n && u(n), [s ? t : a, (0, e.useCallback)((function (e) { for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
            n[i - 1] = arguments[i]; r && r.apply(void 0, [e].concat(n)), u(e); }), [r])]; }(s, u, t[c]), d = f[0], p = f[1]; return no({}, l, ((o = {})[i] = d, o[c] = p, o)); }), t); }
    function ao() { var e = this.constructor.getDerivedStateFromProps(this.props, this.state); null !== e && void 0 !== e && this.setState(e); }
    function uo(e) { this.setState(function (t) { var n = this.constructor.getDerivedStateFromProps(e, t); return null !== n && void 0 !== n ? n : null; }.bind(this)); }
    function so(e, t) { try {
        var n = this.props, r = this.state;
        this.props = e, this.state = t, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r);
    }
    finally {
        this.props = n, this.state = r;
    } }
    ao.__suppressDeprecationWarning = !0, uo.__suppressDeprecationWarning = !0, so.__suppressDeprecationWarning = !0;
    var lo = function (t) { var n = (0, e.useRef)(t); return (0, e.useEffect)((function () { n.current = t; }), [t]), n; };
    function co(t) { var n = lo(t); return (0, e.useCallback)((function () { return n.current && n.current.apply(n, arguments); }), [n]); }
    function fo() { return (0, e.useState)(null); }
    function po() { var t = (0, e.useRef)(!0), n = (0, e.useRef)((function () { return t.current; })); return (0, e.useEffect)((function () { return t.current = !0, function () { t.current = !1; }; }), []), n.current; }
    function ho(t) { var n = (0, e.useRef)(null); return (0, e.useEffect)((function () { n.current = t; })), n.current; }
    var vo = "undefined" !== typeof n.g && n.g.navigator && "ReactNative" === n.g.navigator.product, mo = "undefined" !== typeof document || vo ? e.useLayoutEffect : e.useEffect;
    new WeakMap;
    var yo = ["as", "disabled"];
    function go(e) { var t = e.tagName, n = e.disabled, r = e.href, i = e.target, o = e.rel, a = e.role, u = e.onClick, s = e.tabIndex, l = void 0 === s ? 0 : s, c = e.type; t || (t = null != r || null != i || null != o ? "a" : "button"); var f = { tagName: t }; if ("button" === t)
        return [{ type: c || "button", disabled: n }, f]; var d = function (e) { (n || "a" === t && function (e) { return !e || "#" === e.trim(); }(r)) && e.preventDefault(), n ? e.stopPropagation() : null == u || u(e); }; return "a" === t && (r || (r = "#"), n && (r = void 0)), [{ role: null != a ? a : "button", disabled: void 0, tabIndex: n ? void 0 : l, href: r, target: "a" === t ? i : void 0, "aria-disabled": n || void 0, rel: "a" === t ? o : void 0, onClick: d, onKeyDown: function (e) { " " === e.key && (e.preventDefault(), d(e)); } }, f]; }
    var bo = e.forwardRef((function (e, t) { var n = e.as, r = e.disabled, i = function (e, t) { if (null == e)
        return {}; var n, r, i = {}, o = Object.keys(e); for (r = 0; r < o.length; r++)
        n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]); return i; }(e, yo), o = go(Object.assign({ tagName: n, disabled: r }, i)), a = (0, s.Z)(o, 2), u = a[0], l = a[1].tagName; return (0, We.jsx)(l, Object.assign({}, i, u, { ref: t })); }));
    bo.displayName = "Button";
    var wo = bo, xo = ["onKeyDown"];
    var Eo = e.forwardRef((function (e, t) { var n, r = e.onKeyDown, i = function (e, t) { if (null == e)
        return {}; var n, r, i = {}, o = Object.keys(e); for (r = 0; r < o.length; r++)
        n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]); return i; }(e, xo), o = go(Object.assign({ tagName: "a" }, i)), a = (0, s.Z)(o, 1)[0], u = co((function (e) { a.onKeyDown(e), null == r || r(e); })); return (n = i.href) && "#" !== n.trim() && "button" !== i.role ? (0, We.jsx)("a", Object.assign({ ref: t }, i, { onKeyDown: r })) : (0, We.jsx)("a", Object.assign({ ref: t }, i, a, { onKeyDown: u })); }));
    Eo.displayName = "Anchor";
    var ko = Eo, _o = n(9611);
    var So = !1, Oo = e.createContext(null), No = "unmounted", Co = "exited", To = "entering", jo = "entered", Po = "exiting", Io = function (t) { var n, i; function o(e, n) { var r; r = t.call(this, e, n) || this; var i, o = n && !n.isMounting ? e.enter : e.appear; return r.appearStatus = null, e.in ? o ? (i = Co, r.appearStatus = To) : i = jo : i = e.unmountOnExit || e.mountOnEnter ? No : Co, r.state = { status: i }, r.nextCallback = null, r; } i = t, (n = o).prototype = Object.create(i.prototype), n.prototype.constructor = n, (0, _o.Z)(n, i), o.getDerivedStateFromProps = function (e, t) { return e.in && t.status === No ? { status: Co } : null; }; var a = o.prototype; return a.componentDidMount = function () { this.updateStatus(!0, this.appearStatus); }, a.componentDidUpdate = function (e) { var t = null; if (e !== this.props) {
        var n = this.state.status;
        this.props.in ? n !== To && n !== jo && (t = To) : n !== To && n !== jo || (t = Po);
    } this.updateStatus(!1, t); }, a.componentWillUnmount = function () { this.cancelNextCallback(); }, a.getTimeouts = function () { var e, t, n, r = this.props.timeout; return e = t = n = r, null != r && "number" !== typeof r && (e = r.exit, t = r.enter, n = void 0 !== r.appear ? r.appear : t), { exit: e, enter: t, appear: n }; }, a.updateStatus = function (e, t) { if (void 0 === e && (e = !1), null !== t)
        if (this.cancelNextCallback(), t === To) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
                var n = this.props.nodeRef ? this.props.nodeRef.current : r.findDOMNode(this);
                n && function (e) { e.scrollTop; }(n);
            }
            this.performEnter(e);
        }
        else
            this.performExit();
    else
        this.props.unmountOnExit && this.state.status === Co && this.setState({ status: No }); }, a.performEnter = function (e) { var t = this, n = this.props.enter, i = this.context ? this.context.isMounting : e, o = this.props.nodeRef ? [i] : [r.findDOMNode(this), i], a = o[0], u = o[1], s = this.getTimeouts(), l = i ? s.appear : s.enter; !e && !n || So ? this.safeSetState({ status: jo }, (function () { t.props.onEntered(a); })) : (this.props.onEnter(a, u), this.safeSetState({ status: To }, (function () { t.props.onEntering(a, u), t.onTransitionEnd(l, (function () { t.safeSetState({ status: jo }, (function () { t.props.onEntered(a, u); })); })); }))); }, a.performExit = function () { var e = this, t = this.props.exit, n = this.getTimeouts(), i = this.props.nodeRef ? void 0 : r.findDOMNode(this); t && !So ? (this.props.onExit(i), this.safeSetState({ status: Po }, (function () { e.props.onExiting(i), e.onTransitionEnd(n.exit, (function () { e.safeSetState({ status: Co }, (function () { e.props.onExited(i); })); })); }))) : this.safeSetState({ status: Co }, (function () { e.props.onExited(i); })); }, a.cancelNextCallback = function () { null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null); }, a.safeSetState = function (e, t) { t = this.setNextCallback(t), this.setState(e, t); }, a.setNextCallback = function (e) { var t = this, n = !0; return this.nextCallback = function (r) { n && (n = !1, t.nextCallback = null, e(r)); }, this.nextCallback.cancel = function () { n = !1; }, this.nextCallback; }, a.onTransitionEnd = function (e, t) { this.setNextCallback(t); var n = this.props.nodeRef ? this.props.nodeRef.current : r.findDOMNode(this), i = null == e && !this.props.addEndListener; if (n && !i) {
        if (this.props.addEndListener) {
            var o = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback], a = o[0], u = o[1];
            this.props.addEndListener(a, u);
        }
        null != e && setTimeout(this.nextCallback, e);
    }
    else
        setTimeout(this.nextCallback, 0); }, a.render = function () { var t = this.state.status; if (t === No)
        return null; var n = this.props, r = n.children, i = (n.in, n.mountOnEnter, n.unmountOnExit, n.appear, n.enter, n.exit, n.timeout, n.addEndListener, n.onEnter, n.onEntering, n.onEntered, n.onExit, n.onExiting, n.onExited, n.nodeRef, ze(n, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"])); return e.createElement(Oo.Provider, { value: null }, "function" === typeof r ? r(t, i) : e.cloneElement(e.Children.only(r), i)); }, o; }(e.Component);
    function Ro() { }
    Io.contextType = Oo, Io.propTypes = {}, Io.defaultProps = { in: !1, mountOnEnter: !1, unmountOnExit: !1, appear: !1, enter: !0, exit: !0, onEnter: Ro, onEntering: Ro, onEntered: Ro, onExit: Ro, onExiting: Ro, onExited: Ro }, Io.UNMOUNTED = No, Io.EXITED = Co, Io.ENTERING = To, Io.ENTERED = jo, Io.EXITING = Po;
    var Do = Io;
    function Lo(e) { return e && e.ownerDocument || document; }
    function Ao(e, t) { return function (e) { var t = Lo(e); return t && t.defaultView || window; }(e).getComputedStyle(e, t); }
    var Mo = /([A-Z])/g;
    var Fo = /^ms-/;
    function Vo(e) { return function (e) { return e.replace(Mo, "-$1").toLowerCase(); }(e).replace(Fo, "-ms-"); }
    var qo = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
    var Uo = function (e, t) { var n = "", r = ""; if ("string" === typeof t)
        return e.style.getPropertyValue(Vo(t)) || Ao(e).getPropertyValue(Vo(t)); Object.keys(t).forEach((function (i) { var o = t[i]; o || 0 === o ? !function (e) { return !(!e || !qo.test(e)); }(i) ? n += Vo(i) + ": " + o + ";" : r += i + "(" + o + ") " : e.style.removeProperty(Vo(i)); })), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n; }, zo = !("undefined" === typeof window || !window.document || !window.document.createElement), Qo = !1, Bo = !1;
    try {
        var Zo = { get passive() { return Qo = !0; }, get once() { return Bo = Qo = !0; } };
        zo && (window.addEventListener("test", Zo, Zo), window.removeEventListener("test", Zo, !0));
    }
    catch (Wr) { }
    var Wo = function (e, t, n, r) { if (r && "boolean" !== typeof r && !Bo) {
        var i = r.once, o = r.capture, a = n;
        !Bo && i && (a = n.__once || function e(r) { this.removeEventListener(t, e, o), n.call(this, r); }, n.__once = a), e.addEventListener(t, a, Qo ? r : o);
    } e.addEventListener(t, n, r); };
    var Ho = function (e, t, n, r) { var i = r && "boolean" !== typeof r ? r.capture : r; e.removeEventListener(t, n, i), n.__once && e.removeEventListener(t, n.__once, i); };
    var Ko = function (e, t, n, r) { return Wo(e, t, n, r), function () { Ho(e, t, n, r); }; };
    function $o(e, t, n) { void 0 === n && (n = 5); var r = !1, i = setTimeout((function () { r || function (e, t, n, r) { if (void 0 === n && (n = !1), void 0 === r && (r = !0), e) {
        var i = document.createEvent("HTMLEvents");
        i.initEvent(t, n, r), e.dispatchEvent(i);
    } }(e, "transitionend", !0); }), t + n), o = Ko(e, "transitionend", (function () { r = !0; }), { once: !0 }); return function () { clearTimeout(i), o(); }; }
    function Go(e, t, n, r) { null == n && (n = function (e) { var t = Uo(e, "transitionDuration") || "", n = -1 === t.indexOf("ms") ? 1e3 : 1; return parseFloat(t) * n; }(e) || 0); var i = $o(e, n, r), o = Ko(e, "transitionend", t); return function () { i(), o(); }; }
    function Yo(e, t) { var n = Uo(e, t) || "", r = -1 === n.indexOf("ms") ? 1e3 : 1; return parseFloat(n) * r; }
    function Jo(e, t) { var n = Yo(e, "transitionDuration"), r = Yo(e, "transitionDelay"), i = Go(e, (function (n) { n.target === e && (i(), t(n)); }), n + r); }
    function Xo(e) { e.offsetHeight; }
    var ea = function (e) { return e && "function" !== typeof e ? function (t) { e.current = t; } : e; };
    var ta = function (t, n) { return (0, e.useMemo)((function () { return function (e, t) { var n = ea(e), r = ea(t); return function (e) { n && n(e), r && r(e); }; }(t, n); }), [t, n]); };
    var na, ra = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "addEndListener", "children", "childRef"], ia = e.forwardRef((function (t, n) { var i = t.onEnter, o = t.onEntering, a = t.onEntered, s = t.onExit, l = t.onExiting, c = t.onExited, f = t.addEndListener, d = t.children, p = t.childRef, h = Qe(t, ra), v = (0, e.useRef)(null), m = ta(v, p), y = function (e) { var t; m((t = e) && "setState" in t ? r.findDOMNode(t) : null != t ? t : null); }, g = function (e) { return function (t) { e && v.current && e(v.current, t); }; }, b = (0, e.useCallback)(g(i), [i]), w = (0, e.useCallback)(g(o), [o]), x = (0, e.useCallback)(g(a), [a]), E = (0, e.useCallback)(g(s), [s]), k = (0, e.useCallback)(g(l), [l]), _ = (0, e.useCallback)(g(c), [c]), S = (0, e.useCallback)(g(f), [f]); return (0, We.jsx)(Do, u(u({ ref: n }, h), {}, { onEnter: b, onEntered: x, onEntering: w, onExit: E, onExited: _, onExiting: k, addEndListener: S, nodeRef: v, children: "function" === typeof d ? function (e, t) { return d(e, u(u({}, t), {}, { ref: y })); } : e.cloneElement(d, { ref: y }) })); })), oa = ia, aa = ["className", "children", "transitionClasses", "onEnter"], ua = (o(na = {}, To, "show"), o(na, jo, "show"), na), sa = e.forwardRef((function (t, n) { var r = t.className, i = t.children, o = t.transitionClasses, a = void 0 === o ? {} : o, s = t.onEnter, l = u({ in: !1, timeout: 300, mountOnEnter: !1, unmountOnExit: !1, appear: !1 }, Qe(t, aa)), c = (0, e.useCallback)((function (e, t) { Xo(e), null == s || s(e, t); }), [s]); return (0, We.jsx)(oa, u(u({ ref: n, addEndListener: Jo }, l), {}, { onEnter: c, childRef: i.ref, children: function (t, n) { return e.cloneElement(i, u(u({}, n), {}, { className: Ze()("fade", r, i.props.className, ua[t], a[t]) })); } })); }));
    sa.displayName = "Fade";
    var la = sa, ca = ["className", "variant", "aria-label"], fa = { "aria-label": ni().string, onClick: ni().func, variant: ni().oneOf(["white"]) }, da = e.forwardRef((function (e, t) { var n = e.className, r = e.variant, i = e["aria-label"], o = void 0 === i ? "Close" : i, a = Qe(e, ca); return (0, We.jsx)("button", u({ ref: t, type: "button", className: Ze()("btn-close", r && "btn-close-".concat(r), n), "aria-label": o }, a)); }));
    da.displayName = "CloseButton", da.propTypes = fa;
    var pa = da, ha = function (t) { return e.forwardRef((function (e, n) { return (0, We.jsx)("div", u(u({}, e), {}, { ref: n, className: Ze()(e.className, t) })); })); }, va = ["bsPrefix", "show", "closeLabel", "closeVariant", "className", "children", "variant", "onClose", "dismissible", "transition"], ma = ha("h4");
    ma.displayName = "DivStyledAsH4";
    var ya = Si("alert-heading", { Component: ma }), ga = Si("alert-link", { Component: ko }), ba = e.forwardRef((function (e, t) { var n = oo(e, { show: "onClose" }), r = n.bsPrefix, i = n.show, o = void 0 === i || i, a = n.closeLabel, s = void 0 === a ? "Close alert" : a, l = n.closeVariant, c = n.className, f = n.children, d = n.variant, p = void 0 === d ? "primary" : d, h = n.onClose, v = n.dismissible, m = n.transition, y = void 0 === m ? la : m, g = Qe(n, va), b = $e(r, "alert"), w = co((function (e) { h && h(!1, e); })), x = !0 === y ? la : y, E = (0, We.jsxs)("div", u(u({ role: "alert" }, x ? void 0 : g), {}, { ref: t, className: Ze()(c, b, p && "".concat(b, "-").concat(p), v && "".concat(b, "-dismissible")), children: [v && (0, We.jsx)(pa, { onClick: w, "aria-label": s, variant: l }), f] })); return x ? (0, We.jsx)(x, u(u({ unmountOnExit: !0 }, g), {}, { ref: void 0, in: o, children: E })) : o ? E : null; }));
    ba.displayName = "Alert";
    var wa = Object.assign(ba, { Link: ga, Heading: ya }), xa = ["as", "bsPrefix", "variant", "size", "active", "disabled", "className"], Ea = e.forwardRef((function (e, t) { var n = e.as, r = e.bsPrefix, i = e.variant, o = void 0 === i ? "primary" : i, a = e.size, l = e.active, c = void 0 !== l && l, f = e.disabled, d = void 0 !== f && f, p = e.className, h = Qe(e, xa), v = $e(r, "btn"), m = go(u({ tagName: n, disabled: d }, h)), y = (0, s.Z)(m, 2), g = y[0], b = y[1].tagName; return (0, We.jsx)(b, u(u(u({}, g), h), {}, { ref: t, disabled: d, className: Ze()(p, v, c && "active", o && "".concat(v, "-").concat(o), a && "".concat(v, "-").concat(a), h.href && d && "disabled") })); }));
    Ea.displayName = "Button";
    var ka = Ea;
    function _a(t, n) { var r = wn(null === n || void 0 === n ? void 0 : n.client); bn(t, hn.Mutation); var i = (0, e.useState)({ called: !1, loading: !1, client: r }), o = i[0], a = i[1], u = (0, e.useRef)({ result: o, mutationId: 0, isMounted: !0, client: r, mutation: t, options: n }); Object.assign(u.current, { client: r, options: n, mutation: t }); var s = (0, e.useCallback)((function (e) { void 0 === e && (e = {}); var t = u.current, n = t.options, r = t.mutation, i = at(at({}, n), { mutation: r }), o = e.client || u.current.client; u.current.result.loading || i.ignoreResults || !u.current.isMounted || a(u.current.result = { loading: !0, error: void 0, data: void 0, called: !0, client: o }); var s = ++u.current.mutationId, l = sn(i, e); return o.mutate(l).then((function (t) { var n, r = t.data, i = t.errors, c = i && i.length > 0 ? new vn({ graphQLErrors: i }) : void 0; if (s === u.current.mutationId && !l.ignoreResults) {
        var f = { called: !0, loading: !1, data: r, error: c, client: o };
        u.current.isMounted && !en(u.current.result, f) && a(u.current.result = f);
    } var d = e.onCompleted || (null === (n = u.current.options) || void 0 === n ? void 0 : n.onCompleted); return null === d || void 0 === d || d(t.data, l), t; })).catch((function (t) { var n; if (s === u.current.mutationId && u.current.isMounted) {
        var r = { loading: !1, error: t, data: void 0, called: !0, client: o };
        en(u.current.result, r) || a(u.current.result = r);
    } var i = e.onError || (null === (n = u.current.options) || void 0 === n ? void 0 : n.onError); if (i)
        return i(t, l), { data: void 0, errors: t }; throw t; })); }), []), l = (0, e.useCallback)((function () { u.current.isMounted && a({ called: !1, loading: !1, client: r }); }), []); return (0, e.useEffect)((function () { return u.current.isMounted = !0, function () { u.current.isMounted = !1; }; }), []), [s, at({ reset: l }, o)]; }
    var Sa = function () { var t = (0, e.useState)({ image: "", preferences: "", about: "" }), n = (0, s.Z)(t, 2), r = n[0], i = n[1], a = (0, e.useState)(!1), l = (0, s.Z)(a, 1)[0], c = (0, e.useState)(!1), f = (0, s.Z)(c, 2), d = f[0], p = f[1], h = _a(Qr), v = (0, s.Z)(h, 2), m = v[0], y = v[1], g = (y.error, y.data), b = function (e) { var t = e.target, n = t.name, a = t.value; i(u(u({}, r), {}, o({}, n, a))); }, w = function () { var e = (0, tt.Z)((0, et.Z)().mark((function e(t) { var n; return (0, et.Z)().wrap((function (e) { for (;;)
        switch (e.prev = e.next) {
            case 0: return t.preventDefault(), !1 === t.currentTarget.checkValidity() && (t.preventDefault(), t.stopPropagation()), console.log(r), e.prev = 4, e.next = 7, m({ variables: u({}, r) });
            case 7:
                n = e.sent, n.data, e.next = 14;
                break;
            case 11: e.prev = 11, e.t0 = e.catch(4), console.error(e.t0);
            case 14: i({ image: "".concat(g.updateUser.image), preferences: "".concat(g.updateUser.preferences), about: "".concat(g.updateUser.about) });
            case 15:
            case "end": return e.stop();
        } }), e, null, [[4, 11]]); }))); return function (t) { return e.apply(this, arguments); }; }(), x = e.useRef(null), E = e.useRef(null); return (0, We.jsx)(We.Fragment, { children: (0, We.jsxs)(to, { validated: l, noValidate: !0, onSubmit: w, className: "settingsPage", children: [(0, We.jsx)(wa, { dismissible: !0, onClose: function () { return p(!1); }, show: d, variant: "danger", children: "Ruh-Roh! Something went wrong!" }), (0, We.jsxs)(to.Group, { className: "mb-3", children: [(0, We.jsx)(to.Label, { htmlFor: "image", className: "title", id: "label", children: (0, We.jsx)("u", { children: (0, We.jsx)("b", { children: "Upload an Image" }) }) }), (0, We.jsxs)("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, children: [(0, We.jsx)("input", { type: "file", accept: "image/*", onChange: function (e) { var t = (0, s.Z)(e.target.files, 1)[0]; if (t) {
                                        var n = new FileReader, r = x.current;
                                        r.file = t, n.onload = function (e) { r.src = e.target.result, console.log(r.src); }, n.readAsDataURL(t);
                                    } }, ref: E, style: { display: "none" } }), (0, We.jsx)("div", { style: { height: "90px", width: "90px", border: "1px black" }, onClick: function () { return E.current.click(); }, children: (0, We.jsx)("img", { ref: x, style: { width: "100%", height: "100%" } }) }), "Click to upload Image"] })] }), (0, We.jsxs)(to.Group, { className: "mb-3", children: [(0, We.jsx)(to.Label, { htmlFor: "preferences", className: "title", id: "label", children: (0, We.jsx)("u", { children: (0, We.jsx)("b", { children: "Preferences" }) }) }), (0, We.jsx)("p", { children: "Please Select One" }), (0, We.jsxs)("select", { name: "preferences", onChange: b, value: r.preferences, children: [(0, We.jsx)("option", { name: "male", value: "male", children: "Felonious Fellas (M)" }), (0, We.jsx)("option", { name: "female", value: "female", children: "Miss Demeanors (F)" }), (0, We.jsx)("option", { name: "both", value: "both", children: "Both" })] })] }), (0, We.jsxs)(to.Group, { className: "mb-3", children: [(0, We.jsx)(to.Label, { htmlFor: "about", className: "title", id: "label", children: (0, We.jsx)("u", { children: (0, We.jsx)("b", { children: "About" }) }) }), (0, We.jsx)("p", { children: "Feel free to be honest about your charges here, love is based on honesty!" }), (0, We.jsx)("p", { children: "Or if you haven't been in trouble with the law and are just into bad boys/girls, let them know!" }), (0, We.jsx)("textarea", { className: "settingsInput", rows: "8", cols: "50", placeholder: "Write a little about yourself", name: "about", onChange: b, value: r.about })] }), (0, We.jsx)(ka, { type: "submit", variant: "success", children: "Submit" })] }) }); }, Oa = function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null; return null != e ? String(e) : t || null; }, Na = e.createContext(null), Ca = ["bsPrefix", "className", "as"], Ta = e.forwardRef((function (e, t) { var n = e.bsPrefix, r = e.className, i = e.as, o = Qe(e, Ca); n = $e(n, "navbar-brand"); var a = i || (o.href ? "a" : "span"); return (0, We.jsx)(a, u(u({}, o), {}, { ref: t, className: Ze()(r, n) })); }));
    Ta.displayName = "NavbarBrand";
    var ja = Ta;
    var Pa, Ia = function () { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n]; return t.filter((function (e) { return null != e; })).reduce((function (e, t) { if ("function" !== typeof t)
        throw new Error("Invalid Argument Type, must only provide functions, undefined, or null."); return null === e ? t : function () { for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i]; e.apply(this, r), t.apply(this, r); }; }), null); }, Ra = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "className", "children", "dimension", "in", "timeout", "mountOnEnter", "unmountOnExit", "appear", "getDimensionValue"], Da = { height: ["marginTop", "marginBottom"], width: ["marginLeft", "marginRight"] };
    function La(e, t) { var n = t["offset".concat(e[0].toUpperCase()).concat(e.slice(1))], r = Da[e]; return n + parseInt(Uo(t, r[0]), 10) + parseInt(Uo(t, r[1]), 10); }
    var Aa = (o(Pa = {}, Co, "collapse"), o(Pa, Po, "collapsing"), o(Pa, To, "collapsing"), o(Pa, jo, "collapse show"), Pa), Ma = e.forwardRef((function (t, n) { var r = t.onEnter, i = t.onEntering, o = t.onEntered, a = t.onExit, s = t.onExiting, l = t.className, c = t.children, f = t.dimension, d = void 0 === f ? "height" : f, p = t.in, h = void 0 !== p && p, v = t.timeout, m = void 0 === v ? 300 : v, y = t.mountOnEnter, g = void 0 !== y && y, b = t.unmountOnExit, w = void 0 !== b && b, x = t.appear, E = void 0 !== x && x, k = t.getDimensionValue, _ = void 0 === k ? La : k, S = Qe(t, Ra), O = "function" === typeof d ? d() : d, N = (0, e.useMemo)((function () { return Ia((function (e) { e.style[O] = "0"; }), r); }), [O, r]), C = (0, e.useMemo)((function () { return Ia((function (e) { var t = "scroll".concat(O[0].toUpperCase()).concat(O.slice(1)); e.style[O] = "".concat(e[t], "px"); }), i); }), [O, i]), T = (0, e.useMemo)((function () { return Ia((function (e) { e.style[O] = null; }), o); }), [O, o]), j = (0, e.useMemo)((function () { return Ia((function (e) { e.style[O] = "".concat(_(O, e), "px"), Xo(e); }), a); }), [a, _, O]), P = (0, e.useMemo)((function () { return Ia((function (e) { e.style[O] = null; }), s); }), [O, s]); return (0, We.jsx)(oa, u(u({ ref: n, addEndListener: Jo }, S), {}, { "aria-expanded": S.role ? h : null, onEnter: N, onEntering: C, onEntered: T, onExit: j, onExiting: P, childRef: c.ref, in: h, timeout: m, mountOnEnter: g, unmountOnExit: w, appear: E, children: function (t, n) { return e.cloneElement(c, u(u({}, n), {}, { className: Ze()(l, c.props.className, Aa[t], "width" === O && "collapse-horizontal") })); } })); })), Fa = e.createContext(null);
    Fa.displayName = "NavbarContext";
    var Va = Fa, qa = ["children", "bsPrefix"], Ua = e.forwardRef((function (t, n) { var r = t.children, i = t.bsPrefix, o = Qe(t, qa); i = $e(i, "navbar-collapse"); var a = (0, e.useContext)(Va); return (0, We.jsx)(Ma, u(u({ in: !(!a || !a.expanded) }, o), {}, { children: (0, We.jsx)("div", { ref: n, className: i, children: r }) })); }));
    Ua.displayName = "NavbarCollapse";
    var za = Ua, Qa = ["bsPrefix", "className", "children", "label", "as", "onClick"], Ba = e.forwardRef((function (t, n) { var r = t.bsPrefix, i = t.className, o = t.children, a = t.label, s = void 0 === a ? "Toggle navigation" : a, l = t.as, c = void 0 === l ? "button" : l, f = t.onClick, d = Qe(t, Qa); r = $e(r, "navbar-toggler"); var p = (0, e.useContext)(Va) || {}, h = p.onToggle, v = p.expanded, m = co((function (e) { f && f(e), h && h(); })); return "button" === c && (d.type = "button"), (0, We.jsx)(c, u(u({}, d), {}, { ref: n, onClick: m, "aria-label": s, className: Ze()(i, r, !v && "collapsed"), children: o || (0, We.jsx)("span", { className: "".concat(r, "-icon") }) })); }));
    Ba.displayName = "NavbarToggle";
    var Za = Ba, Wa = new WeakMap, Ha = function (e, t) { if (e && t) {
        var n = Wa.get(t) || new Map;
        Wa.set(t, n);
        var r = n.get(e);
        return r || ((r = t.matchMedia(e)).refCount = 0, n.set(r.media, r)), r;
    } };
    function Ka(t, n) { void 0 === n && (n = "undefined" === typeof window ? void 0 : window); var r = Ha(t, n), i = (0, e.useState)((function () { return !!r && r.matches; })), o = i[0], a = i[1]; return mo((function () { var e = Ha(t, n); if (!e)
        return a(!1); var r = Wa.get(n), i = function () { a(e.matches); }; return e.refCount++, e.addListener(i), i(), function () { e.removeListener(i), e.refCount--, e.refCount <= 0 && (null == r || r.delete(e.media)), e = void 0; }; }), [t]), o; }
    var $a = function (t) { var n = Object.keys(t); function r(e, t) { return e === t ? t : e ? e + " and " + t : t; } function i(e) { var r = function (e) { return n[Math.min(n.indexOf(e) + 1, n.length - 1)]; }(e), i = t[r]; return "(max-width: " + (i = "number" === typeof i ? i - .2 + "px" : "calc(" + i + " - 0.2px)") + ")"; } return function (n, o, a) { var u, s; return "object" === typeof n ? (u = n, a = o, o = !0) : ((s = {})[n] = o = o || !0, u = s), Ka((0, e.useMemo)((function () { return Object.entries(u).reduce((function (e, n) { var o = n[0], a = n[1]; return "up" !== a && !0 !== a || (e = r(e, function (e) { var n = t[e]; return "number" === typeof n && (n += "px"), "(min-width: " + n + ")"; }(o))), "down" !== a && !0 !== a || (e = r(e, i(o))), e; }), ""); }), [JSON.stringify(u)]), a); }; }({ xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 });
    function Ga(e) { void 0 === e && (e = Lo()); try {
        var t = e.activeElement;
        return t && t.nodeName ? t : null;
    }
    catch (Wr) {
        return e.body;
    } }
    function Ya(e, t) { return e.contains ? e.contains(t) : e.compareDocumentPosition ? e === t || !!(16 & e.compareDocumentPosition(t)) : void 0; }
    function Ja(t) { var n = function (t) { var n = (0, e.useRef)(t); return n.current = t, n; }(t); (0, e.useEffect)((function () { return function () { return n.current(); }; }), []); }
    var Xa = "data-rr-ui-";
    function eu(e) { return "".concat(Xa).concat(e); }
    var tu = eu("modal-open"), nu = function () { function e() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.ownerDocument, r = t.handleContainerOverflow, i = void 0 === r || r, o = t.isRTL, a = void 0 !== o && o; (0, c.Z)(this, e), this.handleContainerOverflow = i, this.isRTL = a, this.modals = [], this.ownerDocument = n; } return (0, f.Z)(e, [{ key: "getScrollbarWidth", value: function () { return function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document, t = e.defaultView; return Math.abs(t.innerWidth - e.documentElement.clientWidth); }(this.ownerDocument); } }, { key: "getElement", value: function () { return (this.ownerDocument || document).body; } }, { key: "setModalAttributes", value: function (e) { } }, { key: "removeModalAttributes", value: function (e) { } }, { key: "setContainerStyle", value: function (e) { var t = { overflow: "hidden" }, n = this.isRTL ? "paddingLeft" : "paddingRight", r = this.getElement(); e.style = o({ overflow: r.style.overflow }, n, r.style[n]), e.scrollBarWidth && (t[n] = "".concat(parseInt(Uo(r, n) || "0", 10) + e.scrollBarWidth, "px")), r.setAttribute(tu, ""), Uo(r, t); } }, { key: "reset", value: function () { var e = this; (0, l.Z)(this.modals).forEach((function (t) { return e.remove(t); })); } }, { key: "removeContainerStyle", value: function (e) { var t = this.getElement(); t.removeAttribute(tu), Object.assign(t.style, e.style); } }, { key: "add", value: function (e) { var t = this.modals.indexOf(e); return -1 !== t ? t : (t = this.modals.length, this.modals.push(e), this.setModalAttributes(e), 0 !== t || (this.state = { scrollBarWidth: this.getScrollbarWidth(), style: {} }, this.handleContainerOverflow && this.setContainerStyle(this.state)), t); } }, { key: "remove", value: function (e) { var t = this.modals.indexOf(e); -1 !== t && (this.modals.splice(t, 1), !this.modals.length && this.handleContainerOverflow && this.removeContainerStyle(this.state), this.removeModalAttributes(e)); } }, { key: "isTopModal", value: function (e) { return !!this.modals.length && this.modals[this.modals.length - 1] === e; } }]), e; }(), ru = nu, iu = (0, e.createContext)(zo ? window : void 0);
    iu.Provider;
    function ou() { return (0, e.useContext)(iu); }
    var au = function (e, t) { return zo ? null == e ? (t || Lo()).body : ("function" === typeof e && (e = e()), e && "current" in e && (e = e.current), e && ("nodeType" in e || e.getBoundingClientRect) ? e : null) : null; };
    var uu = function (t) { var n = t.children, r = t.in, i = t.onExited, o = t.mountOnEnter, a = t.unmountOnExit, u = (0, e.useRef)(null), s = (0, e.useRef)(r), l = co(i); (0, e.useEffect)((function () { r ? s.current = !0 : l(u.current); }), [r, l]); var c = ta(u, n.ref), f = (0, e.cloneElement)(n, { ref: c }); return r ? f : a || !s.current && o ? null : f; };
    function su(t) { var n = t.children, r = t.in, i = t.onExited, o = t.onEntered, a = t.transition, u = (0, e.useState)(!r), l = (0, s.Z)(u, 2), c = l[0], f = l[1]; r && c && f(!1); var d = function (t) { var n = t.in, r = t.onTransition, i = (0, e.useRef)(null), o = (0, e.useRef)(!0), a = co(r); return mo((function () { if (i.current) {
        var e = !1;
        return a({ in: n, element: i.current, initial: o.current, isStale: function () { return e; } }), function () { e = !0; };
    } }), [n, a]), mo((function () { return o.current = !1, function () { o.current = !0; }; }), []), i; }({ in: !!r, onTransition: function (e) { Promise.resolve(a(e)).then((function () { e.isStale() || (e.in ? null == o || o(e.element, e.initial) : (f(!0), null == i || i(e.element))); }), (function (t) { throw e.in || f(!0), t; })); } }), p = ta(d, n.ref); return c && !r ? null : (0, e.cloneElement)(n, { ref: p }); }
    function lu(e, t, n) { return e ? (0, We.jsx)(e, Object.assign({}, n)) : t ? (0, We.jsx)(su, Object.assign({}, n, { transition: t })) : (0, We.jsx)(uu, Object.assign({}, n)); }
    var cu, fu = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "runTransition", "backdropTransition", "runBackdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];
    function du(t) { var n = ou(), r = t || function (e) { return cu || (cu = new ru({ ownerDocument: null == e ? void 0 : e.document })), cu; }(n), i = (0, e.useRef)({ dialog: null, backdrop: null }); return Object.assign(i.current, { add: function () { return r.add(i.current); }, remove: function () { return r.remove(i.current); }, isTopModal: function () { return r.isTopModal(i.current); }, setDialogRef: (0, e.useCallback)((function (e) { i.current.dialog = e; }), []), setBackdropRef: (0, e.useCallback)((function (e) { i.current.backdrop = e; }), []) }); }
    var pu = (0, e.forwardRef)((function (t, n) { var i = t.show, o = void 0 !== i && i, a = t.role, u = void 0 === a ? "dialog" : a, l = t.className, c = t.style, f = t.children, d = t.backdrop, p = void 0 === d || d, h = t.keyboard, v = void 0 === h || h, m = t.onBackdropClick, y = t.onEscapeKeyDown, g = t.transition, b = t.runTransition, w = t.backdropTransition, x = t.runBackdropTransition, E = t.autoFocus, k = void 0 === E || E, _ = t.enforceFocus, S = void 0 === _ || _, O = t.restoreFocus, N = void 0 === O || O, C = t.restoreFocusOptions, T = t.renderDialog, j = t.renderBackdrop, P = void 0 === j ? function (e) { return (0, We.jsx)("div", Object.assign({}, e)); } : j, I = t.manager, R = t.container, D = t.onShow, L = t.onHide, A = void 0 === L ? function () { } : L, M = t.onExit, F = t.onExited, V = t.onExiting, q = t.onEnter, U = t.onEntering, z = t.onEntered, Q = function (e, t) { if (null == e)
        return {}; var n, r, i = {}, o = Object.keys(e); for (r = 0; r < o.length; r++)
        n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]); return i; }(t, fu), B = function (t, n) { var r = ou(), i = (0, e.useState)((function () { return au(t, null == r ? void 0 : r.document); })), o = (0, s.Z)(i, 2), a = o[0], u = o[1]; if (!a) {
        var l = au(t);
        l && u(l);
    } return (0, e.useEffect)((function () { n && a && n(a); }), [n, a]), (0, e.useEffect)((function () { var e = au(t); e !== a && u(e); }), [t, a]), a; }(R), Z = du(I), W = po(), H = ho(o), K = (0, e.useState)(!o), $ = (0, s.Z)(K, 2), G = $[0], Y = $[1], J = (0, e.useRef)(null); (0, e.useImperativeHandle)(n, (function () { return Z; }), [Z]), zo && !H && o && (J.current = Ga()), o && G && Y(!1); var X = co((function () { if (Z.add(), oe.current = Ko(document, "keydown", re), ie.current = Ko(document, "focus", (function () { return setTimeout(te); }), !0), D && D(), k) {
        var e = Ga(document);
        Z.dialog && e && !Ya(Z.dialog, e) && (J.current = e, Z.dialog.focus());
    } })), ee = co((function () { var e; (Z.remove(), null == oe.current || oe.current(), null == ie.current || ie.current(), N) && (null == (e = J.current) || null == e.focus || e.focus(C), J.current = null); })); (0, e.useEffect)((function () { o && B && X(); }), [o, B, X]), (0, e.useEffect)((function () { G && ee(); }), [G, ee]), Ja((function () { ee(); })); var te = co((function () { if (S && W() && Z.isTopModal()) {
        var e = Ga();
        Z.dialog && e && !Ya(Z.dialog, e) && Z.dialog.focus();
    } })), ne = co((function (e) { e.target === e.currentTarget && (null == m || m(e), !0 === p && A()); })), re = co((function (e) { v && function (e) { return "Escape" === e.code || 27 === e.keyCode; }(e) && Z.isTopModal() && (null == y || y(e), e.defaultPrevented || A()); })), ie = (0, e.useRef)(), oe = (0, e.useRef)(); if (!B)
        return null; var ae = Object.assign({ role: u, ref: Z.setDialogRef, "aria-modal": "dialog" === u || void 0 }, Q, { style: c, className: l, tabIndex: -1 }), ue = T ? T(ae) : (0, We.jsx)("div", Object.assign({}, ae, { children: e.cloneElement(f, { role: "document" }) })); ue = lu(g, b, { unmountOnExit: !0, mountOnEnter: !0, appear: !0, in: !!o, onExit: M, onExiting: V, onExited: function () { Y(!0), null == F || F.apply(void 0, arguments); }, onEnter: q, onEntering: U, onEntered: z, children: ue }); var se = null; return p && (se = P({ ref: Z.setBackdropRef, onClick: ne }), se = lu(w, x, { in: !!o, appear: !0, mountOnEnter: !0, unmountOnExit: !0, children: se })), (0, We.jsx)(We.Fragment, { children: r.createPortal((0, We.jsxs)(We.Fragment, { children: [se, ue] }), B) }); }));
    pu.displayName = "Modal";
    var hu, vu = Object.assign(pu, { Manager: ru }), mu = Si("offcanvas-body"), yu = ["bsPrefix", "className", "children", "in", "mountOnEnter", "unmountOnExit", "appear"], gu = (o(hu = {}, To, "show"), o(hu, jo, "show"), hu), bu = e.forwardRef((function (t, n) { var r = t.bsPrefix, i = t.className, o = t.children, a = t.in, s = void 0 !== a && a, l = t.mountOnEnter, c = void 0 !== l && l, f = t.unmountOnExit, d = void 0 !== f && f, p = t.appear, h = void 0 !== p && p, v = Qe(t, yu); return r = $e(r, "offcanvas"), (0, We.jsx)(oa, u(u({ ref: n, addEndListener: Jo, in: s, mountOnEnter: c, unmountOnExit: d, appear: h }, v), {}, { childRef: o.ref, children: function (t, n) { return e.cloneElement(o, u(u({}, n), {}, { className: Ze()(i, o.props.className, (t === To || t === Po) && "".concat(r, "-toggling"), gu[t]) })); } })); }));
    bu.displayName = "OffcanvasToggling";
    var wu = bu, xu = e.createContext({ onHide: function () { } }), Eu = ["closeLabel", "closeVariant", "closeButton", "onHide", "children"], ku = e.forwardRef((function (t, n) { var r = t.closeLabel, i = void 0 === r ? "Close" : r, o = t.closeVariant, a = t.closeButton, s = void 0 !== a && a, l = t.onHide, c = t.children, f = Qe(t, Eu), d = (0, e.useContext)(xu), p = co((function () { null == d || d.onHide(), null == l || l(); })); return (0, We.jsxs)("div", u(u({ ref: n }, f), {}, { children: [c, s && (0, We.jsx)(pa, { "aria-label": i, variant: o, onClick: p })] })); })), _u = ku, Su = ["bsPrefix", "className", "closeLabel", "closeButton"], Ou = e.forwardRef((function (e, t) { var n = e.bsPrefix, r = e.className, i = e.closeLabel, o = void 0 === i ? "Close" : i, a = e.closeButton, s = void 0 !== a && a, l = Qe(e, Su); return n = $e(n, "offcanvas-header"), (0, We.jsx)(_u, u(u({ ref: t }, l), {}, { className: Ze()(r, n), closeLabel: o, closeButton: s })); }));
    Ou.displayName = "OffcanvasHeader";
    var Nu = Ou, Cu = Si("offcanvas-title", { Component: ha("h5") }), Tu = n(1752), ju = n(1120);
    var Pu = Function.prototype.bind.call(Function.prototype.call, [].slice);
    function Iu(e, t) { return Pu(e.querySelectorAll(t)); }
    function Ru(e, t) { return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, ""); }
    var Du, Lu = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Au = ".sticky-top", Mu = ".navbar-toggler", Fu = function (e) { (0, d.Z)(n, e); var t = (0, p.Z)(n); function n() { return (0, c.Z)(this, n), t.apply(this, arguments); } return (0, f.Z)(n, [{ key: "adjustAndStore", value: function (e, t, n) { var r = t.style[e]; t.dataset[e] = r, Uo(t, o({}, e, "".concat(parseFloat(Uo(t, e)) + n, "px"))); } }, { key: "restore", value: function (e, t) { var n = t.dataset[e]; void 0 !== n && (delete t.dataset[e], Uo(t, o({}, e, n))); } }, { key: "setContainerStyle", value: function (e) { var t = this; (0, Tu.Z)((0, ju.Z)(n.prototype), "setContainerStyle", this).call(this, e); var r, i, o = this.getElement(); if (i = "modal-open", (r = o).classList ? r.classList.add(i) : function (e, t) { return e.classList ? !!t && e.classList.contains(t) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " "); }(r, i) || ("string" === typeof r.className ? r.className = r.className + " " + i : r.setAttribute("class", (r.className && r.className.baseVal || "") + " " + i)), e.scrollBarWidth) {
                var a = this.isRTL ? "paddingLeft" : "paddingRight", u = this.isRTL ? "marginLeft" : "marginRight";
                Iu(o, Lu).forEach((function (n) { return t.adjustAndStore(a, n, e.scrollBarWidth); })), Iu(o, Au).forEach((function (n) { return t.adjustAndStore(u, n, -e.scrollBarWidth); })), Iu(o, Mu).forEach((function (n) { return t.adjustAndStore(u, n, e.scrollBarWidth); }));
            } } }, { key: "removeContainerStyle", value: function (e) { var t = this; (0, Tu.Z)((0, ju.Z)(n.prototype), "removeContainerStyle", this).call(this, e); var r, i, o = this.getElement(); i = "modal-open", (r = o).classList ? r.classList.remove(i) : "string" === typeof r.className ? r.className = Ru(r.className, i) : r.setAttribute("class", Ru(r.className && r.className.baseVal || "", i)); var a = this.isRTL ? "paddingLeft" : "paddingRight", u = this.isRTL ? "marginLeft" : "marginRight"; Iu(o, Lu).forEach((function (e) { return t.restore(a, e); })), Iu(o, Au).forEach((function (e) { return t.restore(u, e); })), Iu(o, Mu).forEach((function (e) { return t.restore(u, e); })); } }]), n; }(ru);
    function Vu(e) { return Du || (Du = new Fu(e)), Du; }
    var qu = Fu, Uu = ["bsPrefix", "className", "children", "aria-labelledby", "placement", "responsive", "show", "backdrop", "keyboard", "scroll", "onEscapeKeyDown", "onShow", "onHide", "container", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "onEntered", "onExit", "onExiting", "onEnter", "onEntering", "onExited", "backdropClassName", "manager", "renderStaticNode"];
    function zu(e) { return (0, We.jsx)(wu, u({}, e)); }
    function Qu(e) { return (0, We.jsx)(la, u({}, e)); }
    var Bu = e.forwardRef((function (t, n) { var r = t.bsPrefix, i = t.className, o = t.children, a = t["aria-labelledby"], l = t.placement, c = void 0 === l ? "start" : l, f = t.responsive, d = t.show, p = void 0 !== d && d, h = t.backdrop, v = void 0 === h || h, m = t.keyboard, y = void 0 === m || m, g = t.scroll, b = void 0 !== g && g, w = t.onEscapeKeyDown, x = t.onShow, E = t.onHide, k = t.container, _ = t.autoFocus, S = void 0 === _ || _, O = t.enforceFocus, N = void 0 === O || O, C = t.restoreFocus, T = void 0 === C || C, j = t.restoreFocusOptions, P = t.onEntered, I = t.onExit, R = t.onExiting, D = t.onEnter, L = t.onEntering, A = t.onExited, M = t.backdropClassName, F = t.manager, V = t.renderStaticNode, q = void 0 !== V && V, U = Qe(t, Uu), z = (0, e.useRef)(); r = $e(r, "offcanvas"); var Q = ((0, e.useContext)(Va) || {}).onToggle, B = (0, e.useState)(!1), Z = (0, s.Z)(B, 2), W = Z[0], H = Z[1], K = $a(f || "xs", "up"); (0, e.useEffect)((function () { H(f ? p && !K : p); }), [p, f, K]); var $ = co((function () { null == Q || Q(), null == E || E(); })), G = (0, e.useMemo)((function () { return { onHide: $ }; }), [$]); var Y = (0, e.useCallback)((function (e) { return (0, We.jsx)("div", u(u({}, e), {}, { className: Ze()("".concat(r, "-backdrop"), M) })); }), [M, r]), J = function (e) { return (0, We.jsx)("div", u(u(u({}, e), U), {}, { className: Ze()(i, f ? "".concat(r, "-").concat(f) : r, "".concat(r, "-").concat(c)), "aria-labelledby": a, children: o })); }; return (0, We.jsxs)(We.Fragment, { children: [!W && (f || q) && J({}), (0, We.jsx)(xu.Provider, { value: G, children: (0, We.jsx)(vu, { show: W, ref: n, backdrop: v, container: k, keyboard: y, autoFocus: S, enforceFocus: N && !b, restoreFocus: T, restoreFocusOptions: j, onEscapeKeyDown: w, onShow: x, onHide: $, onEnter: function (e) { e && (e.style.visibility = "visible"); for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                        n[r - 1] = arguments[r]; null == D || D.apply(void 0, [e].concat(n)); }, onEntering: L, onEntered: P, onExit: I, onExiting: R, onExited: function (e) { e && (e.style.visibility = ""); for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                        n[r - 1] = arguments[r]; null == A || A.apply(void 0, n); }, manager: F || (b ? (z.current || (z.current = new qu({ handleContainerOverflow: !1 })), z.current) : Vu()), transition: zu, backdropTransition: Qu, renderBackdrop: Y, renderDialog: J }) })] }); }));
    Bu.displayName = "Offcanvas";
    var Zu = Object.assign(Bu, { Body: mu, Header: Nu, Title: Cu }), Wu = e.forwardRef((function (t, n) { var r = (0, e.useContext)(Va); return (0, We.jsx)(Zu, u(u({ ref: n, show: !(null == r || !r.expanded) }, t), {}, { renderStaticNode: !0 })); }));
    Wu.displayName = "NavbarOffcanvas";
    var Hu = Wu, Ku = ["bsPrefix", "expand", "variant", "bg", "fixed", "sticky", "className", "as", "expanded", "onToggle", "onSelect", "collapseOnSelect"], $u = Si("navbar-text", { Component: "span" }), Gu = e.forwardRef((function (t, n) { var r = oo(t, { expanded: "onToggle" }), i = r.bsPrefix, o = r.expand, a = void 0 === o || o, s = r.variant, l = void 0 === s ? "light" : s, c = r.bg, f = r.fixed, d = r.sticky, p = r.className, h = r.as, v = void 0 === h ? "nav" : h, m = r.expanded, y = r.onToggle, g = r.onSelect, b = r.collapseOnSelect, w = void 0 !== b && b, x = Qe(r, Ku), E = $e(i, "navbar"), k = (0, e.useCallback)((function () { null == g || g.apply(void 0, arguments), w && m && (null == y || y(!1)); }), [g, w, m, y]); void 0 === x.role && "nav" !== v && (x.role = "navigation"); var _ = "".concat(E, "-expand"); "string" === typeof a && (_ = "".concat(_, "-").concat(a)); var S = (0, e.useMemo)((function () { return { onToggle: function () { return null == y ? void 0 : y(!m); }, bsPrefix: E, expanded: !!m, expand: a }; }), [E, m, a, y]); return (0, We.jsx)(Va.Provider, { value: S, children: (0, We.jsx)(Na.Provider, { value: k, children: (0, We.jsx)(v, u(u({ ref: n }, x), {}, { className: Ze()(p, E, a && _, l && "".concat(E, "-").concat(l), c && "bg-".concat(c), d && "sticky-".concat(d), f && "fixed-".concat(f)) })) }) }); }));
    Gu.displayName = "Navbar";
    var Yu = Object.assign(Gu, { Brand: ja, Collapse: za, Offcanvas: Hu, Text: $u, Toggle: Za });
    n(3573);
    function Ju() { return (0, e.useReducer)((function (e) { return !e; }), !1)[1]; }
    var Xu = e.createContext(null);
    Xu.displayName = "NavContext";
    var es = Xu, ts = e.createContext(null), ns = ["as", "active", "eventKey"];
    function rs(t) { var n = t.key, r = t.onClick, i = t.active, o = t.id, a = t.role, u = t.disabled, s = (0, e.useContext)(Na), l = (0, e.useContext)(es), c = (0, e.useContext)(ts), f = i, d = { role: a }; if (l) {
        a || "tablist" !== l.role || (d.role = "tab");
        var p = l.getControllerId(null != n ? n : null), h = l.getControlledId(null != n ? n : null);
        d[eu("event-key")] = n, d.id = p || o, !(f = null == i && null != n ? l.activeKey === n : i) && (null != c && c.unmountOnExit || null != c && c.mountOnEnter) || (d["aria-controls"] = h);
    } return "tab" === d.role && (d["aria-selected"] = f, f || (d.tabIndex = -1), u && (d.tabIndex = -1, d["aria-disabled"] = !0)), d.onClick = co((function (e) { u || (null == r || r(e), null != n && s && !e.isPropagationStopped() && s(n, e)); })), [d, { isActive: f }]; }
    var is = e.forwardRef((function (e, t) { var n = e.as, r = void 0 === n ? wo : n, i = e.active, o = e.eventKey, a = function (e, t) { if (null == e)
        return {}; var n, r, i = {}, o = Object.keys(e); for (r = 0; r < o.length; r++)
        n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]); return i; }(e, ns), u = rs(Object.assign({ key: Oa(o, a.href), active: i }, a)), l = (0, s.Z)(u, 2), c = l[0], f = l[1]; return c[eu("active")] = f.isActive, (0, We.jsx)(r, Object.assign({}, a, c, { ref: t })); }));
    is.displayName = "NavItem";
    var os = is, as = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
    var us = function () { }, ss = eu("event-key"), ls = e.forwardRef((function (t, n) { var r, i, o = t.as, a = void 0 === o ? "div" : o, u = t.onSelect, s = t.activeKey, l = t.role, c = t.onKeyDown, f = function (e, t) { if (null == e)
        return {}; var n, r, i = {}, o = Object.keys(e); for (r = 0; r < o.length; r++)
        n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]); return i; }(t, as), d = Ju(), p = (0, e.useRef)(!1), h = (0, e.useContext)(Na), v = (0, e.useContext)(ts); v && (l = l || "tablist", s = v.activeKey, r = v.getControlledId, i = v.getControllerId); var m = (0, e.useRef)(null), y = function (e) { var t = m.current; if (!t)
        return null; var n = Iu(t, "[".concat(ss, "]:not([aria-disabled=true])")), r = t.querySelector("[aria-selected=true]"); if (!r || r !== document.activeElement)
        return null; var i = n.indexOf(r); if (-1 === i)
        return null; var o = i + e; return o >= n.length && (o = 0), o < 0 && (o = n.length - 1), n[o]; }, g = function (e, t) { null != e && (null == u || u(e, t), null == h || h(e, t)); }; (0, e.useEffect)((function () { if (m.current && p.current) {
        var e = m.current.querySelector("[".concat(ss, "][aria-selected=true]"));
        null == e || e.focus();
    } p.current = !1; })); var b = ta(n, m); return (0, We.jsx)(Na.Provider, { value: g, children: (0, We.jsx)(es.Provider, { value: { role: l, activeKey: Oa(s), getControlledId: r || us, getControllerId: i || us }, children: (0, We.jsx)(a, Object.assign({}, f, { onKeyDown: function (e) { if (null == c || c(e), v) {
                    var t, n;
                    switch (e.key) {
                        case "ArrowLeft":
                        case "ArrowUp":
                            t = y(-1);
                            break;
                        case "ArrowRight":
                        case "ArrowDown":
                            t = y(1);
                            break;
                        default: return;
                    }
                    if (t)
                        e.preventDefault(), g(t.dataset[(n = "EventKey", "".concat("rrUi").concat(n))] || null, e), p.current = !0, d();
                } }, ref: b, role: l })) }) }); }));
    ls.displayName = "Nav";
    var cs = Object.assign(ls, { Item: os }), fs = e.createContext(null);
    fs.displayName = "CardHeaderContext";
    var ds = fs, ps = Si("nav-item"), hs = ["bsPrefix", "className", "as", "active", "eventKey", "disabled"], vs = e.forwardRef((function (e, t) { var n = e.bsPrefix, r = e.className, i = e.as, o = void 0 === i ? ko : i, a = e.active, l = e.eventKey, c = e.disabled, f = void 0 !== c && c, d = Qe(e, hs); n = $e(n, "nav-link"); var p = rs(u({ key: Oa(l, d.href), active: a, disabled: f }, d)), h = (0, s.Z)(p, 2), v = h[0], m = h[1]; return (0, We.jsx)(o, u(u(u({}, d), v), {}, { ref: t, disabled: f, className: Ze()(r, n, f && "disabled", m.isActive && "active") })); }));
    vs.displayName = "NavLink";
    var ms = vs, ys = ["as", "bsPrefix", "variant", "fill", "justify", "navbar", "navbarScroll", "className", "activeKey"], gs = e.forwardRef((function (t, n) { var r, i, a, s = oo(t, { activeKey: "onSelect" }), l = s.as, c = void 0 === l ? "div" : l, f = s.bsPrefix, d = s.variant, p = s.fill, h = void 0 !== p && p, v = s.justify, m = void 0 !== v && v, y = s.navbar, g = s.navbarScroll, b = s.className, w = s.activeKey, x = Qe(s, ys), E = $e(f, "nav"), k = !1, _ = (0, e.useContext)(Va), S = (0, e.useContext)(ds); return _ ? (i = _.bsPrefix, k = null == y || y) : S && (a = S.cardHeaderBsPrefix), (0, We.jsx)(cs, u({ as: c, ref: n, activeKey: w, className: Ze()(b, (r = {}, o(r, E, !k), o(r, "".concat(i, "-nav"), k), o(r, "".concat(i, "-nav-scroll"), k && g), o(r, "".concat(a, "-").concat(d), !!a), o(r, "".concat(E, "-").concat(d), !!d), o(r, "".concat(E, "-fill"), h), o(r, "".concat(E, "-justified"), m), r)) }, x)); }));
    gs.displayName = "Nav";
    var bs = Object.assign(gs, { Item: ps, Link: ms });
    function ws(t, n, r) { var i = (0, e.useRef)(void 0 !== t), o = (0, e.useState)(n), a = (0, s.Z)(o, 2), u = a[0], l = a[1], c = void 0 !== t, f = i.current; return i.current = c, !c && f && u !== n && l(n), [c ? t : u, (0, e.useCallback)((function (e) { for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
            n[i - 1] = arguments[i]; r && r.apply(void 0, [e].concat(n)), l(e); }), [r])]; }
    var xs = e.createContext(null), Es = Object.prototype.hasOwnProperty;
    function ks(e, t, n) { var r, i = (0, w.Z)(e.keys()); try {
        for (i.s(); !(r = i.n()).done;)
            if (_s(n = r.value, t))
                return n;
    }
    catch (o) {
        i.e(o);
    }
    finally {
        i.f();
    } }
    function _s(e, t) { var n, r, i; if (e === t)
        return !0; if (e && t && (n = e.constructor) === t.constructor) {
        if (n === Date)
            return e.getTime() === t.getTime();
        if (n === RegExp)
            return e.toString() === t.toString();
        if (n === Array) {
            if ((r = e.length) === t.length)
                for (; r-- && _s(e[r], t[r]);)
                    ;
            return -1 === r;
        }
        if (n === Set) {
            if (e.size !== t.size)
                return !1;
            var o, a = (0, w.Z)(e);
            try {
                for (a.s(); !(o = a.n()).done;) {
                    if ((i = r = o.value) && "object" === typeof i && !(i = ks(t, i)))
                        return !1;
                    if (!t.has(i))
                        return !1;
                }
            }
            catch (l) {
                a.e(l);
            }
            finally {
                a.f();
            }
            return !0;
        }
        if (n === Map) {
            if (e.size !== t.size)
                return !1;
            var u, s = (0, w.Z)(e);
            try {
                for (s.s(); !(u = s.n()).done;) {
                    if ((i = (r = u.value)[0]) && "object" === typeof i && !(i = ks(t, i)))
                        return !1;
                    if (!_s(r[1], t.get(i)))
                        return !1;
                }
            }
            catch (l) {
                s.e(l);
            }
            finally {
                s.f();
            }
            return !0;
        }
        if (n === ArrayBuffer)
            e = new Uint8Array(e), t = new Uint8Array(t);
        else if (n === DataView) {
            if ((r = e.byteLength) === t.byteLength)
                for (; r-- && e.getInt8(r) === t.getInt8(r);)
                    ;
            return -1 === r;
        }
        if (ArrayBuffer.isView(e)) {
            if ((r = e.byteLength) === t.byteLength)
                for (; r-- && e[r] === t[r];)
                    ;
            return -1 === r;
        }
        if (!n || "object" === typeof e) {
            for (n in r = 0, e) {
                if (Es.call(e, n) && ++r && !Es.call(t, n))
                    return !1;
                if (!(n in t) || !_s(e[n], t[n]))
                    return !1;
            }
            return Object.keys(t).length === r;
        }
    } return e !== e && t !== t; }
    var Ss = function (t) { var n = po(); return [t[0], (0, e.useCallback)((function (e) { if (n())
            return t[1](e); }), [n, t[1]])]; };
    function Os(e) { return e.split("-")[0]; }
    function Ns(e) { if (null == e)
        return window; if ("[object Window]" !== e.toString()) {
        var t = e.ownerDocument;
        return t && t.defaultView || window;
    } return e; }
    function Cs(e) { return e instanceof Ns(e).Element || e instanceof Element; }
    function Ts(e) { return e instanceof Ns(e).HTMLElement || e instanceof HTMLElement; }
    function js(e) { return "undefined" !== typeof ShadowRoot && (e instanceof Ns(e).ShadowRoot || e instanceof ShadowRoot); }
    var Ps = Math.max, Is = Math.min, Rs = Math.round;
    function Ds() { var e = navigator.userAgentData; return null != e && e.brands && Array.isArray(e.brands) ? e.brands.map((function (e) { return e.brand + "/" + e.version; })).join(" ") : navigator.userAgent; }
    function Ls() { return !/^((?!chrome|android).)*safari/i.test(Ds()); }
    function As(e, t, n) { void 0 === t && (t = !1), void 0 === n && (n = !1); var r = e.getBoundingClientRect(), i = 1, o = 1; t && Ts(e) && (i = e.offsetWidth > 0 && Rs(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Rs(r.height) / e.offsetHeight || 1); var a = (Cs(e) ? Ns(e) : window).visualViewport, u = !Ls() && n, s = (r.left + (u && a ? a.offsetLeft : 0)) / i, l = (r.top + (u && a ? a.offsetTop : 0)) / o, c = r.width / i, f = r.height / o; return { width: c, height: f, top: l, right: s + c, bottom: l + f, left: s, x: s, y: l }; }
    function Ms(e) { var t = As(e), n = e.offsetWidth, r = e.offsetHeight; return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }; }
    function Fs(e, t) { var n = t.getRootNode && t.getRootNode(); if (e.contains(t))
        return !0; if (n && js(n)) {
        var r = t;
        do {
            if (r && e.isSameNode(r))
                return !0;
            r = r.parentNode || r.host;
        } while (r);
    } return !1; }
    function Vs(e) { return e ? (e.nodeName || "").toLowerCase() : null; }
    function qs(e) { return Ns(e).getComputedStyle(e); }
    function Us(e) { return ["table", "td", "th"].indexOf(Vs(e)) >= 0; }
    function zs(e) { return ((Cs(e) ? e.ownerDocument : e.document) || window.document).documentElement; }
    function Qs(e) { return "html" === Vs(e) ? e : e.assignedSlot || e.parentNode || (js(e) ? e.host : null) || zs(e); }
    function Bs(e) { return Ts(e) && "fixed" !== qs(e).position ? e.offsetParent : null; }
    function Zs(e) { for (var t = Ns(e), n = Bs(e); n && Us(n) && "static" === qs(n).position;)
        n = Bs(n); return n && ("html" === Vs(n) || "body" === Vs(n) && "static" === qs(n).position) ? t : n || function (e) { var t = /firefox/i.test(Ds()); if (/Trident/i.test(Ds()) && Ts(e) && "fixed" === qs(e).position)
        return null; var n = Qs(e); for (js(n) && (n = n.host); Ts(n) && ["html", "body"].indexOf(Vs(n)) < 0;) {
        var r = qs(n);
        if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter)
            return n;
        n = n.parentNode;
    } return null; }(e) || t; }
    function Ws(e) { return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"; }
    function Hs(e, t, n) { return Ps(e, Is(t, n)); }
    function Ks(e) { return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e); }
    function $s(e, t) { return t.reduce((function (t, n) { return t[n] = e, t; }), {}); }
    var Gs = "top", Ys = "bottom", Js = "right", Xs = "left", el = "auto", tl = [Gs, Ys, Js, Xs], nl = "start", rl = "end", il = "clippingParents", ol = "viewport", al = "popper", ul = "reference", sl = tl.reduce((function (e, t) { return e.concat([t + "-" + nl, t + "-" + rl]); }), []), ll = [].concat(tl, [el]).reduce((function (e, t) { return e.concat([t, t + "-" + nl, t + "-" + rl]); }), []), cl = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
    var fl = { name: "arrow", enabled: !0, phase: "main", fn: function (e) { var t, n = e.state, r = e.name, i = e.options, o = n.elements.arrow, a = n.modifiersData.popperOffsets, u = Os(n.placement), s = Ws(u), l = [Xs, Js].indexOf(u) >= 0 ? "height" : "width"; if (o && a) {
            var c = function (e, t) { return Ks("number" !== typeof (e = "function" === typeof e ? e(Object.assign({}, t.rects, { placement: t.placement })) : e) ? e : $s(e, tl)); }(i.padding, n), f = Ms(o), d = "y" === s ? Gs : Xs, p = "y" === s ? Ys : Js, h = n.rects.reference[l] + n.rects.reference[s] - a[s] - n.rects.popper[l], v = a[s] - n.rects.reference[s], m = Zs(o), y = m ? "y" === s ? m.clientHeight || 0 : m.clientWidth || 0 : 0, g = h / 2 - v / 2, b = c[d], w = y - f[l] - c[p], x = y / 2 - f[l] / 2 + g, E = Hs(b, x, w), k = s;
            n.modifiersData[r] = ((t = {})[k] = E, t.centerOffset = E - x, t);
        } }, effect: function (e) { var t = e.state, n = e.options.element, r = void 0 === n ? "[data-popper-arrow]" : n; null != r && ("string" !== typeof r || (r = t.elements.popper.querySelector(r))) && Fs(t.elements.popper, r) && (t.elements.arrow = r); }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
    function dl(e) { return e.split("-")[1]; }
    var pl = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
    function hl(e) { var t, n = e.popper, r = e.popperRect, i = e.placement, o = e.variation, a = e.offsets, u = e.position, s = e.gpuAcceleration, l = e.adaptive, c = e.roundOffsets, f = e.isFixed, d = a.x, p = void 0 === d ? 0 : d, h = a.y, v = void 0 === h ? 0 : h, m = "function" === typeof c ? c({ x: p, y: v }) : { x: p, y: v }; p = m.x, v = m.y; var y = a.hasOwnProperty("x"), g = a.hasOwnProperty("y"), b = Xs, w = Gs, x = window; if (l) {
        var E = Zs(n), k = "clientHeight", _ = "clientWidth";
        if (E === Ns(n) && "static" !== qs(E = zs(n)).position && "absolute" === u && (k = "scrollHeight", _ = "scrollWidth"), i === Gs || (i === Xs || i === Js) && o === rl)
            w = Ys, v -= (f && E === x && x.visualViewport ? x.visualViewport.height : E[k]) - r.height, v *= s ? 1 : -1;
        if (i === Xs || (i === Gs || i === Ys) && o === rl)
            b = Js, p -= (f && E === x && x.visualViewport ? x.visualViewport.width : E[_]) - r.width, p *= s ? 1 : -1;
    } var S, O = Object.assign({ position: u }, l && pl), N = !0 === c ? function (e, t) { var n = e.x, r = e.y, i = t.devicePixelRatio || 1; return { x: Rs(n * i) / i || 0, y: Rs(r * i) / i || 0 }; }({ x: p, y: v }, Ns(n)) : { x: p, y: v }; return p = N.x, v = N.y, s ? Object.assign({}, O, ((S = {})[w] = g ? "0" : "", S[b] = y ? "0" : "", S.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + v + "px)" : "translate3d(" + p + "px, " + v + "px, 0)", S)) : Object.assign({}, O, ((t = {})[w] = g ? v + "px" : "", t[b] = y ? p + "px" : "", t.transform = "", t)); }
    var vl = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: function (e) { var t = e.state, n = e.options, r = n.gpuAcceleration, i = void 0 === r || r, o = n.adaptive, a = void 0 === o || o, u = n.roundOffsets, s = void 0 === u || u, l = { placement: Os(t.placement), variation: dl(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: i, isFixed: "fixed" === t.options.strategy }; null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, hl(Object.assign({}, l, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: a, roundOffsets: s })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, hl(Object.assign({}, l, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: s })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement }); }, data: {} }, ml = { passive: !0 };
    var yl = { name: "eventListeners", enabled: !0, phase: "write", fn: function () { }, effect: function (e) { var t = e.state, n = e.instance, r = e.options, i = r.scroll, o = void 0 === i || i, a = r.resize, u = void 0 === a || a, s = Ns(t.elements.popper), l = [].concat(t.scrollParents.reference, t.scrollParents.popper); return o && l.forEach((function (e) { e.addEventListener("scroll", n.update, ml); })), u && s.addEventListener("resize", n.update, ml), function () { o && l.forEach((function (e) { e.removeEventListener("scroll", n.update, ml); })), u && s.removeEventListener("resize", n.update, ml); }; }, data: {} }, gl = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function bl(e) { return e.replace(/left|right|bottom|top/g, (function (e) { return gl[e]; })); }
    var wl = { start: "end", end: "start" };
    function xl(e) { return e.replace(/start|end/g, (function (e) { return wl[e]; })); }
    function El(e) { var t = Ns(e); return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset }; }
    function kl(e) { return As(zs(e)).left + El(e).scrollLeft; }
    function _l(e) { var t = qs(e), n = t.overflow, r = t.overflowX, i = t.overflowY; return /auto|scroll|overlay|hidden/.test(n + i + r); }
    function Sl(e) { return ["html", "body", "#document"].indexOf(Vs(e)) >= 0 ? e.ownerDocument.body : Ts(e) && _l(e) ? e : Sl(Qs(e)); }
    function Ol(e, t) { var n; void 0 === t && (t = []); var r = Sl(e), i = r === (null == (n = e.ownerDocument) ? void 0 : n.body), o = Ns(r), a = i ? [o].concat(o.visualViewport || [], _l(r) ? r : []) : r, u = t.concat(a); return i ? u : u.concat(Ol(Qs(a))); }
    function Nl(e) { return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height }); }
    function Cl(e, t, n) { return t === ol ? Nl(function (e, t) { var n = Ns(e), r = zs(e), i = n.visualViewport, o = r.clientWidth, a = r.clientHeight, u = 0, s = 0; if (i) {
        o = i.width, a = i.height;
        var l = Ls();
        (l || !l && "fixed" === t) && (u = i.offsetLeft, s = i.offsetTop);
    } return { width: o, height: a, x: u + kl(e), y: s }; }(e, n)) : Cs(t) ? function (e, t) { var n = As(e, !1, "fixed" === t); return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n; }(t, n) : Nl(function (e) { var t, n = zs(e), r = El(e), i = null == (t = e.ownerDocument) ? void 0 : t.body, o = Ps(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = Ps(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), u = -r.scrollLeft + kl(e), s = -r.scrollTop; return "rtl" === qs(i || n).direction && (u += Ps(n.clientWidth, i ? i.clientWidth : 0) - o), { width: o, height: a, x: u, y: s }; }(zs(e))); }
    function Tl(e, t, n, r) { var i = "clippingParents" === t ? function (e) { var t = Ol(Qs(e)), n = ["absolute", "fixed"].indexOf(qs(e).position) >= 0 && Ts(e) ? Zs(e) : e; return Cs(n) ? t.filter((function (e) { return Cs(e) && Fs(e, n) && "body" !== Vs(e); })) : []; }(e) : [].concat(t), o = [].concat(i, [n]), a = o[0], u = o.reduce((function (t, n) { var i = Cl(e, n, r); return t.top = Ps(i.top, t.top), t.right = Is(i.right, t.right), t.bottom = Is(i.bottom, t.bottom), t.left = Ps(i.left, t.left), t; }), Cl(e, a, r)); return u.width = u.right - u.left, u.height = u.bottom - u.top, u.x = u.left, u.y = u.top, u; }
    function jl(e) { var t, n = e.reference, r = e.element, i = e.placement, o = i ? Os(i) : null, a = i ? dl(i) : null, u = n.x + n.width / 2 - r.width / 2, s = n.y + n.height / 2 - r.height / 2; switch (o) {
        case Gs:
            t = { x: u, y: n.y - r.height };
            break;
        case Ys:
            t = { x: u, y: n.y + n.height };
            break;
        case Js:
            t = { x: n.x + n.width, y: s };
            break;
        case Xs:
            t = { x: n.x - r.width, y: s };
            break;
        default: t = { x: n.x, y: n.y };
    } var l = o ? Ws(o) : null; if (null != l) {
        var c = "y" === l ? "height" : "width";
        switch (a) {
            case nl:
                t[l] = t[l] - (n[c] / 2 - r[c] / 2);
                break;
            case rl: t[l] = t[l] + (n[c] / 2 - r[c] / 2);
        }
    } return t; }
    function Pl(e, t) { void 0 === t && (t = {}); var n = t, r = n.placement, i = void 0 === r ? e.placement : r, o = n.strategy, a = void 0 === o ? e.strategy : o, u = n.boundary, s = void 0 === u ? il : u, l = n.rootBoundary, c = void 0 === l ? ol : l, f = n.elementContext, d = void 0 === f ? al : f, p = n.altBoundary, h = void 0 !== p && p, v = n.padding, m = void 0 === v ? 0 : v, y = Ks("number" !== typeof m ? m : $s(m, tl)), g = d === al ? ul : al, b = e.rects.popper, w = e.elements[h ? g : d], x = Tl(Cs(w) ? w : w.contextElement || zs(e.elements.popper), s, c, a), E = As(e.elements.reference), k = jl({ reference: E, element: b, strategy: "absolute", placement: i }), _ = Nl(Object.assign({}, b, k)), S = d === al ? _ : E, O = { top: x.top - S.top + y.top, bottom: S.bottom - x.bottom + y.bottom, left: x.left - S.left + y.left, right: S.right - x.right + y.right }, N = e.modifiersData.offset; if (d === al && N) {
        var C = N[i];
        Object.keys(O).forEach((function (e) { var t = [Js, Ys].indexOf(e) >= 0 ? 1 : -1, n = [Gs, Ys].indexOf(e) >= 0 ? "y" : "x"; O[e] += C[n] * t; }));
    } return O; }
    var Il = { name: "flip", enabled: !0, phase: "main", fn: function (e) { var t = e.state, n = e.options, r = e.name; if (!t.modifiersData[r]._skip) {
            for (var i = n.mainAxis, o = void 0 === i || i, a = n.altAxis, u = void 0 === a || a, s = n.fallbackPlacements, l = n.padding, c = n.boundary, f = n.rootBoundary, d = n.altBoundary, p = n.flipVariations, h = void 0 === p || p, v = n.allowedAutoPlacements, m = t.options.placement, y = Os(m), g = s || (y === m || !h ? [bl(m)] : function (e) { if (Os(e) === el)
                return []; var t = bl(e); return [xl(e), t, xl(t)]; }(m)), b = [m].concat(g).reduce((function (e, n) { return e.concat(Os(n) === el ? function (e, t) { void 0 === t && (t = {}); var n = t, r = n.placement, i = n.boundary, o = n.rootBoundary, a = n.padding, u = n.flipVariations, s = n.allowedAutoPlacements, l = void 0 === s ? ll : s, c = dl(r), f = c ? u ? sl : sl.filter((function (e) { return dl(e) === c; })) : tl, d = f.filter((function (e) { return l.indexOf(e) >= 0; })); 0 === d.length && (d = f); var p = d.reduce((function (t, n) { return t[n] = Pl(e, { placement: n, boundary: i, rootBoundary: o, padding: a })[Os(n)], t; }), {}); return Object.keys(p).sort((function (e, t) { return p[e] - p[t]; })); }(t, { placement: n, boundary: c, rootBoundary: f, padding: l, flipVariations: h, allowedAutoPlacements: v }) : n); }), []), w = t.rects.reference, x = t.rects.popper, E = new Map, k = !0, _ = b[0], S = 0; S < b.length; S++) {
                var O = b[S], N = Os(O), C = dl(O) === nl, T = [Gs, Ys].indexOf(N) >= 0, j = T ? "width" : "height", P = Pl(t, { placement: O, boundary: c, rootBoundary: f, altBoundary: d, padding: l }), I = T ? C ? Js : Xs : C ? Ys : Gs;
                w[j] > x[j] && (I = bl(I));
                var R = bl(I), D = [];
                if (o && D.push(P[N] <= 0), u && D.push(P[I] <= 0, P[R] <= 0), D.every((function (e) { return e; }))) {
                    _ = O, k = !1;
                    break;
                }
                E.set(O, D);
            }
            if (k)
                for (var L = function (e) { var t = b.find((function (t) { var n = E.get(t); if (n)
                    return n.slice(0, e).every((function (e) { return e; })); })); if (t)
                    return _ = t, "break"; }, A = h ? 3 : 1; A > 0; A--) {
                    if ("break" === L(A))
                        break;
                }
            t.placement !== _ && (t.modifiersData[r]._skip = !0, t.placement = _, t.reset = !0);
        } }, requiresIfExists: ["offset"], data: { _skip: !1 } };
    function Rl(e, t, n) { return void 0 === n && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x }; }
    function Dl(e) { return [Gs, Js, Ys, Xs].some((function (t) { return e[t] >= 0; })); }
    var Ll = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: function (e) { var t = e.state, n = e.options, r = e.name, i = n.offset, o = void 0 === i ? [0, 0] : i, a = ll.reduce((function (e, n) { return e[n] = function (e, t, n) { var r = Os(e), i = [Xs, Gs].indexOf(r) >= 0 ? -1 : 1, o = "function" === typeof n ? n(Object.assign({}, t, { placement: e })) : n, a = o[0], u = o[1]; return a = a || 0, u = (u || 0) * i, [Xs, Js].indexOf(r) >= 0 ? { x: u, y: a } : { x: a, y: u }; }(n, t.rects, o), e; }), {}), u = a[t.placement], s = u.x, l = u.y; null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += s, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = a; } };
    var Al = { name: "preventOverflow", enabled: !0, phase: "main", fn: function (e) { var t = e.state, n = e.options, r = e.name, i = n.mainAxis, o = void 0 === i || i, a = n.altAxis, u = void 0 !== a && a, s = n.boundary, l = n.rootBoundary, c = n.altBoundary, f = n.padding, d = n.tether, p = void 0 === d || d, h = n.tetherOffset, v = void 0 === h ? 0 : h, m = Pl(t, { boundary: s, rootBoundary: l, padding: f, altBoundary: c }), y = Os(t.placement), g = dl(t.placement), b = !g, w = Ws(y), x = "x" === w ? "y" : "x", E = t.modifiersData.popperOffsets, k = t.rects.reference, _ = t.rects.popper, S = "function" === typeof v ? v(Object.assign({}, t.rects, { placement: t.placement })) : v, O = "number" === typeof S ? { mainAxis: S, altAxis: S } : Object.assign({ mainAxis: 0, altAxis: 0 }, S), N = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, C = { x: 0, y: 0 }; if (E) {
            if (o) {
                var T, j = "y" === w ? Gs : Xs, P = "y" === w ? Ys : Js, I = "y" === w ? "height" : "width", R = E[w], D = R + m[j], L = R - m[P], A = p ? -_[I] / 2 : 0, M = g === nl ? k[I] : _[I], F = g === nl ? -_[I] : -k[I], V = t.elements.arrow, q = p && V ? Ms(V) : { width: 0, height: 0 }, U = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 }, z = U[j], Q = U[P], B = Hs(0, k[I], q[I]), Z = b ? k[I] / 2 - A - B - z - O.mainAxis : M - B - z - O.mainAxis, W = b ? -k[I] / 2 + A + B + Q + O.mainAxis : F + B + Q + O.mainAxis, H = t.elements.arrow && Zs(t.elements.arrow), K = H ? "y" === w ? H.clientTop || 0 : H.clientLeft || 0 : 0, $ = null != (T = null == N ? void 0 : N[w]) ? T : 0, G = R + W - $, Y = Hs(p ? Is(D, R + Z - $ - K) : D, R, p ? Ps(L, G) : L);
                E[w] = Y, C[w] = Y - R;
            }
            if (u) {
                var J, X = "x" === w ? Gs : Xs, ee = "x" === w ? Ys : Js, te = E[x], ne = "y" === x ? "height" : "width", re = te + m[X], ie = te - m[ee], oe = -1 !== [Gs, Xs].indexOf(y), ae = null != (J = null == N ? void 0 : N[x]) ? J : 0, ue = oe ? re : te - k[ne] - _[ne] - ae + O.altAxis, se = oe ? te + k[ne] + _[ne] - ae - O.altAxis : ie, le = p && oe ? function (e, t, n) { var r = Hs(e, t, n); return r > n ? n : r; }(ue, te, se) : Hs(p ? ue : re, te, p ? se : ie);
                E[x] = le, C[x] = le - te;
            }
            t.modifiersData[r] = C;
        } }, requiresIfExists: ["offset"] };
    function Ml(e, t, n) { void 0 === n && (n = !1); var r = Ts(t), i = Ts(t) && function (e) { var t = e.getBoundingClientRect(), n = Rs(t.width) / e.offsetWidth || 1, r = Rs(t.height) / e.offsetHeight || 1; return 1 !== n || 1 !== r; }(t), o = zs(t), a = As(e, i, n), u = { scrollLeft: 0, scrollTop: 0 }, s = { x: 0, y: 0 }; return (r || !r && !n) && (("body" !== Vs(t) || _l(o)) && (u = function (e) { return e !== Ns(e) && Ts(e) ? { scrollLeft: (t = e).scrollLeft, scrollTop: t.scrollTop } : El(e); var t; }(t)), Ts(t) ? ((s = As(t, !0)).x += t.clientLeft, s.y += t.clientTop) : o && (s.x = kl(o))), { x: a.left + u.scrollLeft - s.x, y: a.top + u.scrollTop - s.y, width: a.width, height: a.height }; }
    function Fl(e) { var t = new Map, n = new Set, r = []; function i(e) { n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function (e) { if (!n.has(e)) {
        var r = t.get(e);
        r && i(r);
    } })), r.push(e); } return e.forEach((function (e) { t.set(e.name, e); })), e.forEach((function (e) { n.has(e.name) || i(e); })), r; }
    function Vl(e) { var t; return function () { return t || (t = new Promise((function (n) { Promise.resolve().then((function () { t = void 0, n(e()); })); }))), t; }; }
    var ql = { placement: "bottom", modifiers: [], strategy: "absolute" };
    function Ul() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n]; return !t.some((function (e) { return !(e && "function" === typeof e.getBoundingClientRect); })); }
    function zl(e) { void 0 === e && (e = {}); var t = e, n = t.defaultModifiers, r = void 0 === n ? [] : n, i = t.defaultOptions, o = void 0 === i ? ql : i; return function (e, t, n) { void 0 === n && (n = o); var i = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, ql, o), modifiersData: {}, elements: { reference: e, popper: t }, attributes: {}, styles: {} }, a = [], u = !1, s = { state: i, setOptions: function (n) { var u = "function" === typeof n ? n(i.options) : n; l(), i.options = Object.assign({}, o, i.options, u), i.scrollParents = { reference: Cs(e) ? Ol(e) : e.contextElement ? Ol(e.contextElement) : [], popper: Ol(t) }; var c = function (e) { var t = Fl(e); return cl.reduce((function (e, n) { return e.concat(t.filter((function (e) { return e.phase === n; }))); }), []); }(function (e) { var t = e.reduce((function (e, t) { var n = e[t.name]; return e[t.name] = n ? Object.assign({}, n, t, { options: Object.assign({}, n.options, t.options), data: Object.assign({}, n.data, t.data) }) : t, e; }), {}); return Object.keys(t).map((function (e) { return t[e]; })); }([].concat(r, i.options.modifiers))); return i.orderedModifiers = c.filter((function (e) { return e.enabled; })), i.orderedModifiers.forEach((function (e) { var t = e.name, n = e.options, r = void 0 === n ? {} : n, o = e.effect; if ("function" === typeof o) {
            var u = o({ state: i, name: t, instance: s, options: r }), l = function () { };
            a.push(u || l);
        } })), s.update(); }, forceUpdate: function () { if (!u) {
            var e = i.elements, t = e.reference, n = e.popper;
            if (Ul(t, n)) {
                i.rects = { reference: Ml(t, Zs(n), "fixed" === i.options.strategy), popper: Ms(n) }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach((function (e) { return i.modifiersData[e.name] = Object.assign({}, e.data); }));
                for (var r = 0; r < i.orderedModifiers.length; r++)
                    if (!0 !== i.reset) {
                        var o = i.orderedModifiers[r], a = o.fn, l = o.options, c = void 0 === l ? {} : l, f = o.name;
                        "function" === typeof a && (i = a({ state: i, options: c, name: f, instance: s }) || i);
                    }
                    else
                        i.reset = !1, r = -1;
            }
        } }, update: Vl((function () { return new Promise((function (e) { s.forceUpdate(), e(i); })); })), destroy: function () { l(), u = !0; } }; if (!Ul(e, t))
        return s; function l() { a.forEach((function (e) { return e(); })), a = []; } return s.setOptions(n).then((function (e) { !u && n.onFirstUpdate && n.onFirstUpdate(e); })), s; }; }
    var Ql = zl({ defaultModifiers: [{ name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: function (e) { var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, o = t.modifiersData.preventOverflow, a = Pl(t, { elementContext: "reference" }), u = Pl(t, { altBoundary: !0 }), s = Rl(a, r), l = Rl(u, i, o), c = Dl(s), f = Dl(l); t.modifiersData[n] = { referenceClippingOffsets: s, popperEscapeOffsets: l, isReferenceHidden: c, hasPopperEscaped: f }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": c, "data-popper-escaped": f }); } }, { name: "popperOffsets", enabled: !0, phase: "read", fn: function (e) { var t = e.state, n = e.name; t.modifiersData[n] = jl({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement }); }, data: {} }, vl, yl, Ll, Il, Al, fl] }), Bl = ["enabled", "placement", "strategy", "modifiers"];
    var Zl = { name: "applyStyles", enabled: !1, phase: "afterWrite", fn: function () { } }, Wl = { name: "ariaDescribedBy", enabled: !0, phase: "afterWrite", effect: function (e) { var t = e.state; return function () { var e = t.elements, n = e.reference, r = e.popper; if ("removeAttribute" in n) {
            var i = (n.getAttribute("aria-describedby") || "").split(",").filter((function (e) { return e.trim() !== r.id; }));
            i.length ? n.setAttribute("aria-describedby", i.join(",")) : n.removeAttribute("aria-describedby");
        } }; }, fn: function (e) { var t, n = e.state.elements, r = n.popper, i = n.reference, o = null == (t = r.getAttribute("role")) ? void 0 : t.toLowerCase(); if (r.id && "tooltip" === o && "setAttribute" in i) {
            var a = i.getAttribute("aria-describedby");
            if (a && -1 !== a.split(",").indexOf(r.id))
                return;
            i.setAttribute("aria-describedby", a ? "".concat(a, ",").concat(r.id) : r.id);
        } } }, Hl = [];
    var Kl = function (t, n) { var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = r.enabled, o = void 0 === i || i, a = r.placement, u = void 0 === a ? "bottom" : a, c = r.strategy, f = void 0 === c ? "absolute" : c, d = r.modifiers, p = void 0 === d ? Hl : d, h = function (e, t) { if (null == e)
        return {}; var n, r, i = {}, o = Object.keys(e); for (r = 0; r < o.length; r++)
        n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]); return i; }(r, Bl), v = (0, e.useRef)(p), m = (0, e.useRef)(), y = (0, e.useCallback)((function () { var e; null == (e = m.current) || e.update(); }), []), g = (0, e.useCallback)((function () { var e; null == (e = m.current) || e.forceUpdate(); }), []), b = Ss((0, e.useState)({ placement: u, update: y, forceUpdate: g, attributes: {}, styles: { popper: {}, arrow: {} } })), w = (0, s.Z)(b, 2), x = w[0], E = w[1], k = (0, e.useMemo)((function () { return { name: "updateStateModifier", enabled: !0, phase: "write", requires: ["computeStyles"], fn: function (e) { var t = e.state, n = {}, r = {}; Object.keys(t.elements).forEach((function (e) { n[e] = t.styles[e], r[e] = t.attributes[e]; })), E({ state: t, styles: n, attributes: r, update: y, forceUpdate: g, placement: t.placement }); } }; }), [y, g, E]), _ = (0, e.useMemo)((function () { return _s(v.current, p) || (v.current = p), v.current; }), [p]); return (0, e.useEffect)((function () { m.current && o && m.current.setOptions({ placement: u, strategy: f, modifiers: [].concat((0, l.Z)(_), [k, Zl]) }); }), [f, u, k, o, _]), (0, e.useEffect)((function () { if (o && null != t && null != n)
        return m.current = Ql(t, n, Object.assign({}, h, { placement: u, strategy: f, modifiers: [].concat((0, l.Z)(_), [Wl, k]) })), function () { null != m.current && (m.current.destroy(), m.current = void 0, E((function (e) { return Object.assign({}, e, { attributes: {}, styles: { popper: {} } }); }))); }; }), [o, t, n]), x; }, $l = function () { };
    var Gl = function (e) { return e && ("current" in e ? e.current : e); }, Yl = { click: "mousedown", mouseup: "mousedown", pointerup: "pointerdown" };
    var Jl = function (t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : $l, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = r.disabled, o = r.clickTrigger, a = void 0 === o ? "click" : o, u = (0, e.useRef)(!1), s = (0, e.useRef)(!1), l = (0, e.useCallback)((function (e) { var n, r = Gl(t); gi()(!!r, "ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"), u.current = !r || !!((n = e).metaKey || n.altKey || n.ctrlKey || n.shiftKey) || !function (e) { return 0 === e.button; }(e) || !!Ya(r, e.target) || s.current, s.current = !1; }), [t]), c = co((function (e) { var n = Gl(t); n && Ya(n, e.target) && (s.current = !0); })), f = co((function (e) { u.current || n(e); })); (0, e.useEffect)((function () { var e, n; if (!i && null != t) {
        var r = Lo(Gl(t)), o = r.defaultView || window, u = null != (e = o.event) ? e : null == (n = o.parent) ? void 0 : n.event, s = null;
        Yl[a] && (s = Ko(r, Yl[a], c, !0));
        var d = Ko(r, a, l, !0), p = Ko(r, a, (function (e) { e !== u ? f(e) : u = void 0; })), h = [];
        return "ontouchstart" in r.documentElement && (h = [].slice.call(r.body.children).map((function (e) { return Ko(e, "mousemove", $l); }))), function () { null == s || s(), d(), p(), h.forEach((function (e) { return e(); })); };
    } }), [t, i, a, l, c, f]); };
    function Xl() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return Array.isArray(e) ? e : Object.keys(e).map((function (t) { return e[t].name = t, e[t]; })); }
    function ec(e) { var t, n, r, i, o, a = e.enabled, u = e.enableEvents, s = e.placement, l = e.flip, c = e.offset, f = e.fixed, d = e.containerPadding, p = e.arrowElement, h = e.popperConfig, v = void 0 === h ? {} : h, m = function (e) { var t = {}; return Array.isArray(e) ? (null == e || e.forEach((function (e) { t[e.name] = e; })), t) : e || t; }(v.modifiers); return Object.assign({}, v, { placement: s, enabled: a, strategy: f ? "fixed" : v.strategy, modifiers: Xl(Object.assign({}, m, { eventListeners: { enabled: u, options: null == (t = m.eventListeners) ? void 0 : t.options }, preventOverflow: Object.assign({}, m.preventOverflow, { options: d ? Object.assign({ padding: d }, null == (n = m.preventOverflow) ? void 0 : n.options) : null == (r = m.preventOverflow) ? void 0 : r.options }), offset: { options: Object.assign({ offset: c }, null == (i = m.offset) ? void 0 : i.options) }, arrow: Object.assign({}, m.arrow, { enabled: !!p, options: Object.assign({}, null == (o = m.arrow) ? void 0 : o.options, { element: p }) }), flip: Object.assign({ enabled: !!l }, m.flip) })) }); }
    var tc = ["children"];
    var nc = function () { };
    function rc() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = (0, e.useContext)(xs), r = fo(), i = (0, s.Z)(r, 2), o = i[0], a = i[1], u = (0, e.useRef)(!1), l = t.flip, c = t.offset, f = t.rootCloseEvent, d = t.fixed, p = void 0 !== d && d, h = t.placement, v = t.popperConfig, m = void 0 === v ? {} : v, y = t.enableEventListeners, g = void 0 === y || y, b = t.usePopper, w = void 0 === b ? !!n : b, x = null == (null == n ? void 0 : n.show) ? !!t.show : n.show; x && !u.current && (u.current = !0); var E = n || {}, k = E.placement, _ = E.setMenu, S = E.menuElement, O = E.toggleElement, N = Kl(O, S, ec({ placement: h || k || "bottom-start", enabled: w, enableEvents: null == g ? x : g, offset: c, flip: l, fixed: p, arrowElement: o, popperConfig: m })), C = Object.assign({ ref: _ || nc, "aria-labelledby": null == O ? void 0 : O.id }, N.attributes.popper, { style: N.styles.popper }), T = { show: x, placement: k, hasShown: u.current, toggle: null == n ? void 0 : n.toggle, popper: w ? N : null, arrowProps: w ? Object.assign({ ref: a }, N.attributes.arrow, { style: N.styles.arrow }) : {} }; return Jl(S, (function (e) { null == n || n.toggle(!1, e); }), { clickTrigger: f, disabled: !x }), [C, T]; }
    function ic(e) { var t = e.children, n = rc(function (e, t) { if (null == e)
        return {}; var n, r, i = {}, o = Object.keys(e); for (r = 0; r < o.length; r++)
        n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]); return i; }(e, tc)), r = (0, s.Z)(n, 2), i = r[0], o = r[1]; return (0, We.jsx)(We.Fragment, { children: t(i, o) }); }
    ic.displayName = "DropdownMenu", ic.defaultProps = { usePopper: !0 };
    var oc = ic, ac = { prefix: String(Math.round(1e10 * Math.random())), current: 0, isSSR: !1 }, uc = e.createContext(ac);
    var sc = Boolean("undefined" !== typeof window && window.document && window.document.createElement), lc = new WeakMap;
    function cc() { var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], n = (0, e.useContext)(uc), r = (0, e.useRef)(null); if (null === r.current && !t) {
        var i, o, a = null === (i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === i || null === (o = i.ReactCurrentOwner) || void 0 === o ? void 0 : o.current;
        if (a) {
            var u = lc.get(a);
            null == u ? lc.set(a, { id: n.current, state: a.memoizedState }) : a.memoizedState !== u.state && (n.current = u.id, lc.delete(a));
        }
        r.current = ++n.current;
    } return r.current; }
    function fc(t) { var n = (0, e.useContext)(uc); n !== ac || sc || console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."); var r = cc(!!t); return t || "react-aria".concat(n.prefix, "-").concat(r); }
    var dc = function (e) { var t; return "menu" === (null == (t = e.getAttribute("role")) ? void 0 : t.toLowerCase()); }, pc = function () { };
    function hc() { var t = fc(), n = (0, e.useContext)(xs) || {}, r = n.show, i = void 0 !== r && r, o = n.toggle, a = void 0 === o ? pc : o, u = n.setToggle, s = n.menuElement, l = (0, e.useCallback)((function (e) { a(!i, e); }), [i, a]), c = { id: t, ref: u || pc, onClick: l, "aria-expanded": !!i }; return s && dc(s) && (c["aria-haspopup"] = !0), [c, { show: i, toggle: a }]; }
    function vc(e) { var t = e.children, n = hc(), r = (0, s.Z)(n, 2), i = r[0], o = r[1]; return (0, We.jsx)(We.Fragment, { children: t(i, o) }); }
    vc.displayName = "DropdownToggle";
    var mc = vc, yc = ["eventKey", "disabled", "onClick", "active", "as"];
    function gc(t) { var n = t.key, r = t.href, i = t.active, a = t.disabled, u = t.onClick, s = (0, e.useContext)(Na), l = ((0, e.useContext)(es) || {}).activeKey, c = Oa(n, r), f = null == i && null != n ? Oa(l) === c : i; return [o({ onClick: co((function (e) { a || (null == u || u(e), s && !e.isPropagationStopped() && s(c, e)); })), "aria-disabled": a || void 0, "aria-selected": f }, eu("dropdown-item"), ""), { isActive: f }]; }
    var bc = e.forwardRef((function (e, t) { var n = e.eventKey, r = e.disabled, i = e.onClick, o = e.active, a = e.as, u = void 0 === a ? wo : a, l = function (e, t) { if (null == e)
        return {}; var n, r, i = {}, o = Object.keys(e); for (r = 0; r < o.length; r++)
        n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]); return i; }(e, yc), c = gc({ key: n, href: l.href, disabled: r, onClick: i, active: o }), f = (0, s.Z)(c, 1)[0]; return (0, We.jsx)(u, Object.assign({}, l, { ref: t }, f)); }));
    bc.displayName = "DropdownItem";
    var wc = bc;
    function xc() { var t = Ju(), n = (0, e.useRef)(null), r = (0, e.useCallback)((function (e) { n.current = e, t(); }), [t]); return [n, r]; }
    function Ec(t) { var n = t.defaultShow, r = t.show, i = t.onSelect, o = t.onToggle, a = t.itemSelector, u = void 0 === a ? "* [".concat(eu("dropdown-item"), "]") : a, l = t.focusFirstItemOnShow, c = t.placement, f = void 0 === c ? "bottom-start" : c, d = t.children, p = ou(), h = ws(r, n, o), v = (0, s.Z)(h, 2), m = v[0], y = v[1], g = xc(), b = (0, s.Z)(g, 2), w = b[0], x = b[1], E = w.current, k = xc(), _ = (0, s.Z)(k, 2), S = _[0], O = _[1], N = S.current, C = ho(m), T = (0, e.useRef)(null), j = (0, e.useRef)(!1), P = (0, e.useContext)(Na), I = (0, e.useCallback)((function (e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null == t ? void 0 : t.type; y(e, { originalEvent: t, source: n }); }), [y]), R = co((function (e, t) { null == i || i(e, t), I(!1, t, "select"), t.isPropagationStopped() || null == P || P(e, t); })), D = (0, e.useMemo)((function () { return { toggle: I, placement: f, show: m, menuElement: E, toggleElement: N, setMenu: x, setToggle: O }; }), [I, f, m, E, N, x, O]); E && C && !m && (j.current = E.contains(E.ownerDocument.activeElement)); var L = co((function () { N && N.focus && N.focus(); })), A = co((function () { var e = T.current, t = l; if (null == t && (t = !(!w.current || !dc(w.current)) && "keyboard"), !1 !== t && ("keyboard" !== t || /^key.+$/.test(e))) {
        var n = Iu(w.current, u)[0];
        n && n.focus && n.focus();
    } })); (0, e.useEffect)((function () { m ? A() : j.current && (j.current = !1, L()); }), [m, j, L, A]), (0, e.useEffect)((function () { T.current = null; })); var M = function (e, t) { if (!w.current)
        return null; var n = Iu(w.current, u), r = n.indexOf(e) + t; return n[r = Math.max(0, Math.min(r, n.length))]; }; return function (t, n, r, i) { void 0 === i && (i = !1); var o = co(r); (0, e.useEffect)((function () { var e = "function" === typeof t ? t() : t; return e.addEventListener(n, o, i), function () { return e.removeEventListener(n, o, i); }; }), [t]); }((0, e.useCallback)((function () { return p.document; }), [p]), "keydown", (function (e) { var t, n, r = e.key, i = e.target, o = null == (t = w.current) ? void 0 : t.contains(i), a = null == (n = S.current) ? void 0 : n.contains(i); if ((!/input|textarea/i.test(i.tagName) || !(" " === r || "Escape" !== r && o || "Escape" === r && "search" === i.type)) && (o || a) && ("Tab" !== r || w.current && m)) {
        T.current = e.type;
        var u = { originalEvent: e, source: e.type };
        switch (r) {
            case "ArrowUp":
                var s = M(i, -1);
                return s && s.focus && s.focus(), void e.preventDefault();
            case "ArrowDown":
                if (e.preventDefault(), m) {
                    var l = M(i, 1);
                    l && l.focus && l.focus();
                }
                else
                    y(!0, u);
                return;
            case "Tab":
                Wo(i.ownerDocument, "keyup", (function (e) { var t; ("Tab" !== e.key || e.target) && null != (t = w.current) && t.contains(e.target) || y(!1, u); }), { once: !0 });
                break;
            case "Escape": "Escape" === r && (e.preventDefault(), e.stopPropagation()), y(!1, u);
        }
    } })), (0, We.jsx)(Na.Provider, { value: R, children: (0, We.jsx)(xs.Provider, { value: D, children: d }) }); }
    Ec.displayName = "Dropdown", Ec.Menu = oc, Ec.Toggle = mc, Ec.Item = wc;
    var kc = Ec, _c = e.createContext({});
    _c.displayName = "DropdownContext";
    var Sc = _c, Oc = ["bsPrefix", "className", "eventKey", "disabled", "onClick", "active", "as"], Nc = e.forwardRef((function (e, t) { var n = e.bsPrefix, r = e.className, i = e.eventKey, o = e.disabled, a = void 0 !== o && o, l = e.onClick, c = e.active, f = e.as, d = void 0 === f ? ko : f, p = Qe(e, Oc), h = $e(n, "dropdown-item"), v = gc({ key: i, href: p.href, disabled: a, onClick: l, active: c }), m = (0, s.Z)(v, 2), y = m[0], g = m[1]; return (0, We.jsx)(d, u(u(u({}, p), y), {}, { ref: t, className: Ze()(r, h, g.isActive && "active", a && "disabled") })); }));
    Nc.displayName = "DropdownItem";
    var Cc = Nc, Tc = e.createContext(null);
    Tc.displayName = "InputGroupContext";
    var jc = Tc;
    function Pc(e, t) { return e; }
    var Ic = ["bsPrefix", "className", "align", "rootCloseEvent", "flip", "show", "renderOnMount", "as", "popperConfig", "variant"];
    function Rc(e, t, n) { var r = e ? n ? "bottom-start" : "bottom-end" : n ? "bottom-end" : "bottom-start"; return "up" === t ? r = e ? n ? "top-start" : "top-end" : n ? "top-end" : "top-start" : "end" === t ? r = e ? n ? "left-end" : "right-end" : n ? "left-start" : "right-start" : "start" === t ? r = e ? n ? "right-end" : "left-end" : n ? "right-start" : "left-start" : "down-centered" === t ? r = "bottom" : "up-centered" === t && (r = "top"), r; }
    var Dc = e.forwardRef((function (t, n) { var r = t.bsPrefix, i = t.className, o = t.align, a = t.rootCloseEvent, l = t.flip, c = void 0 === l || l, f = t.show, d = t.renderOnMount, p = t.as, h = void 0 === p ? "div" : p, v = t.popperConfig, m = t.variant, y = Qe(t, Ic), g = !1, b = (0, e.useContext)(Va), w = $e(r, "dropdown-menu"), x = (0, e.useContext)(Sc), E = x.align, k = x.drop, _ = x.isRTL; o = o || E; var S = (0, e.useContext)(jc), O = []; if (o)
        if ("object" === typeof o) {
            var N = Object.keys(o);
            if (N.length) {
                var C = N[0], T = o[C];
                g = "start" === T, O.push("".concat(w, "-").concat(C, "-").concat(T));
            }
        }
        else
            "end" === o && (g = !0); var j = Rc(g, k, _), P = rc({ flip: c, rootCloseEvent: a, show: f, usePopper: !b && 0 === O.length, offset: [0, 2], popperConfig: v, placement: j }), I = (0, s.Z)(P, 2), R = I[0], D = I[1], L = D.hasShown, A = D.popper, M = D.show, F = D.toggle; if (R.ref = ta(Pc(n), R.ref), mo((function () { M && (null == A || A.update()); }), [M]), !L && !d && !S)
        return null; "string" !== typeof h && (R.show = M, R.close = function () { return null == F ? void 0 : F(!1); }, R.align = o); var V = y.style; return null != A && A.placement && (V = u(u({}, y.style), R.style), y["x-placement"] = A.placement), (0, We.jsx)(h, u(u(u(u({}, y), R), {}, { style: V }, (O.length || b) && { "data-bs-popper": "static" }), {}, { className: Ze().apply(void 0, [i, w, M && "show", g && "".concat(w, "-end"), m && "".concat(w, "-").concat(m)].concat(O)) })); }));
    Dc.displayName = "DropdownMenu";
    var Lc = Dc, Ac = ["bsPrefix", "split", "className", "childBsPrefix", "as"], Mc = e.forwardRef((function (t, n) { var r = t.bsPrefix, i = t.split, o = t.className, a = t.childBsPrefix, l = t.as, c = void 0 === l ? ka : l, f = Qe(t, Ac), d = $e(r, "dropdown-toggle"), p = (0, e.useContext)(xs); void 0 !== a && (f.bsPrefix = a); var h = hc(), v = (0, s.Z)(h, 1)[0]; return v.ref = ta(v.ref, Pc(n)), (0, We.jsx)(c, u(u({ className: Ze()(o, d, i && "".concat(d, "-split"), (null == p ? void 0 : p.show) && "show") }, v), f)); }));
    Mc.displayName = "DropdownToggle";
    var Fc = Mc, Vc = ["bsPrefix", "drop", "show", "className", "align", "onSelect", "onToggle", "focusFirstItemOnShow", "as", "navbar", "autoClose"], qc = Si("dropdown-header", { defaultProps: { role: "heading" } }), Uc = Si("dropdown-divider", { Component: "hr", defaultProps: { role: "separator" } }), zc = Si("dropdown-item-text", { Component: "span" }), Qc = e.forwardRef((function (t, n) { var r = oo(t, { show: "onToggle" }), i = r.bsPrefix, o = r.drop, a = void 0 === o ? "down" : o, s = r.show, l = r.className, c = r.align, f = void 0 === c ? "start" : c, d = r.onSelect, p = r.onToggle, h = r.focusFirstItemOnShow, v = r.as, m = void 0 === v ? "div" : v, y = (r.navbar, r.autoClose), g = void 0 === y || y, b = Qe(r, Vc), w = (0, e.useContext)(jc), x = $e(i, "dropdown"), E = Ge(), k = co((function (e, t) { var n; t.originalEvent.currentTarget !== document || "keydown" === t.source && "Escape" !== t.originalEvent.key || (t.source = "rootClose"), n = t.source, (!1 === g ? "click" === n : "inside" === g ? "rootClose" !== n : "outside" !== g || "select" !== n) && (null == p || p(e, t)); })), _ = Rc("end" === f, a, E), S = (0, e.useMemo)((function () { return { align: f, drop: a, isRTL: E }; }), [f, a, E]), O = { down: x, "down-centered": "".concat(x, "-center"), up: "dropup", "up-centered": "dropup-center dropup", end: "dropend", start: "dropstart" }; return (0, We.jsx)(Sc.Provider, { value: S, children: (0, We.jsx)(kc, { placement: _, show: s, onSelect: d, onToggle: k, focusFirstItemOnShow: h, itemSelector: ".".concat(x, "-item:not(.disabled):not(:disabled)"), children: w ? b.children : (0, We.jsx)(m, u(u({}, b), {}, { ref: n, className: Ze()(l, s && "show", O[a]) })) }) }); }));
    Qc.displayName = "Dropdown";
    var Bc = Object.assign(Qc, { Toggle: Fc, Menu: Lc, Item: Cc, ItemText: zc, Divider: Uc, Header: qc }), Zc = ["id", "title", "children", "bsPrefix", "className", "rootCloseEvent", "menuRole", "disabled", "active", "renderMenuOnMount", "menuVariant"], Wc = e.forwardRef((function (e, t) { var n = e.id, r = e.title, i = e.children, o = e.bsPrefix, a = e.className, s = e.rootCloseEvent, l = e.menuRole, c = e.disabled, f = e.active, d = e.renderMenuOnMount, p = e.menuVariant, h = Qe(e, Zc), v = $e(void 0, "nav-item"); return (0, We.jsxs)(Bc, u(u({ ref: t }, h), {}, { className: Ze()(a, v), children: [(0, We.jsx)(Bc.Toggle, { id: n, eventKey: null, active: f, disabled: c, childBsPrefix: o, as: ms, children: r }), (0, We.jsx)(Bc.Menu, { role: l, renderOnMount: d, rootCloseEvent: s, variant: p, children: i })] })); }));
    Wc.displayName = "NavDropdown";
    var Hc, Kc = Object.assign(Wc, { Item: Bc.Item, ItemText: Bc.ItemText, Divider: Bc.Divider, Header: Bc.Header });
    function $c(e) { if ((!Hc && 0 !== Hc || e) && zo) {
        var t = document.createElement("div");
        t.style.position = "absolute", t.style.top = "-9999px", t.style.width = "50px", t.style.height = "50px", t.style.overflow = "scroll", document.body.appendChild(t), Hc = t.offsetWidth - t.clientWidth, document.body.removeChild(t);
    } return Hc; }
    var Gc = Si("modal-body"), Yc = ["bsPrefix", "className", "contentClassName", "centered", "size", "fullscreen", "children", "scrollable"], Jc = e.forwardRef((function (e, t) { var n = e.bsPrefix, r = e.className, i = e.contentClassName, o = e.centered, a = e.size, s = e.fullscreen, l = e.children, c = e.scrollable, f = Qe(e, Yc); n = $e(n, "modal"); var d = "".concat(n, "-dialog"), p = "string" === typeof s ? "".concat(n, "-fullscreen-").concat(s) : "".concat(n, "-fullscreen"); return (0, We.jsx)("div", u(u({}, f), {}, { ref: t, className: Ze()(d, r, a && "".concat(n, "-").concat(a), o && "".concat(d, "-centered"), c && "".concat(d, "-scrollable"), s && p), children: (0, We.jsx)("div", { className: Ze()("".concat(n, "-content"), i), children: l }) })); }));
    Jc.displayName = "ModalDialog";
    var Xc = Jc, ef = Si("modal-footer"), tf = ["bsPrefix", "className", "closeLabel", "closeButton"], nf = e.forwardRef((function (e, t) { var n = e.bsPrefix, r = e.className, i = e.closeLabel, o = void 0 === i ? "Close" : i, a = e.closeButton, s = void 0 !== a && a, l = Qe(e, tf); return n = $e(n, "modal-header"), (0, We.jsx)(_u, u(u({ ref: t }, l), {}, { className: Ze()(r, n), closeLabel: o, closeButton: s })); }));
    nf.displayName = "ModalHeader";
    var rf = nf, of = Si("modal-title", { Component: ha("h4") }), af = ["bsPrefix", "className", "style", "dialogClassName", "contentClassName", "children", "dialogAs", "aria-labelledby", "aria-describedby", "aria-label", "show", "animation", "backdrop", "keyboard", "onEscapeKeyDown", "onShow", "onHide", "container", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "onEntered", "onExit", "onExiting", "onEnter", "onEntering", "onExited", "backdropClassName", "manager"];
    function uf(e) { return (0, We.jsx)(la, u(u({}, e), {}, { timeout: null })); }
    function sf(e) { return (0, We.jsx)(la, u(u({}, e), {}, { timeout: null })); }
    var lf = e.forwardRef((function (t, n) { var r = t.bsPrefix, i = t.className, o = t.style, a = t.dialogClassName, l = t.contentClassName, c = t.children, f = t.dialogAs, d = void 0 === f ? Xc : f, p = t["aria-labelledby"], h = t["aria-describedby"], v = t["aria-label"], m = t.show, y = void 0 !== m && m, g = t.animation, b = void 0 === g || g, w = t.backdrop, x = void 0 === w || w, E = t.keyboard, k = void 0 === E || E, _ = t.onEscapeKeyDown, S = t.onShow, O = t.onHide, N = t.container, C = t.autoFocus, T = void 0 === C || C, j = t.enforceFocus, P = void 0 === j || j, I = t.restoreFocus, R = void 0 === I || I, D = t.restoreFocusOptions, L = t.onEntered, A = t.onExit, M = t.onExiting, F = t.onEnter, V = t.onEntering, q = t.onExited, U = t.backdropClassName, z = t.manager, Q = Qe(t, af), B = (0, e.useState)({}), Z = (0, s.Z)(B, 2), W = Z[0], H = Z[1], K = (0, e.useState)(!1), $ = (0, s.Z)(K, 2), G = $[0], Y = $[1], J = (0, e.useRef)(!1), X = (0, e.useRef)(!1), ee = (0, e.useRef)(null), te = fo(), ne = (0, s.Z)(te, 2), re = ne[0], ie = ne[1], oe = ta(n, ie), ae = co(O), ue = Ge(); r = $e(r, "modal"); var se = (0, e.useMemo)((function () { return { onHide: ae }; }), [ae]); function le() { return z || Vu({ isRTL: ue }); } function ce(e) { if (zo) {
        var t = le().getScrollbarWidth() > 0, n = e.scrollHeight > Lo(e).documentElement.clientHeight;
        H({ paddingRight: t && !n ? $c() : void 0, paddingLeft: !t && n ? $c() : void 0 });
    } } var fe = co((function () { re && ce(re.dialog); })); Ja((function () { Ho(window, "resize", fe), null == ee.current || ee.current(); })); var de = function () { J.current = !0; }, pe = function (e) { J.current && re && e.target === re.dialog && (X.current = !0), J.current = !1; }, he = function () { Y(!0), ee.current = Go(re.dialog, (function () { Y(!1); })); }, ve = function (e) { "static" !== x ? X.current || e.target !== e.currentTarget ? X.current = !1 : null == O || O() : function (e) { e.target === e.currentTarget && he(); }(e); }, me = (0, e.useCallback)((function (e) { return (0, We.jsx)("div", u(u({}, e), {}, { className: Ze()("".concat(r, "-backdrop"), U, !b && "show") })); }), [b, U, r]), ye = u(u({}, o), W); ye.display = "block"; return (0, We.jsx)(xu.Provider, { value: se, children: (0, We.jsx)(vu, { show: y, ref: oe, backdrop: x, container: N, keyboard: !0, autoFocus: T, enforceFocus: P, restoreFocus: R, restoreFocusOptions: D, onEscapeKeyDown: function (e) { k ? null == _ || _(e) : (e.preventDefault(), "static" === x && he()); }, onShow: S, onHide: O, onEnter: function (e, t) { e && ce(e), null == F || F(e, t); }, onEntering: function (e, t) { null == V || V(e, t), Wo(window, "resize", fe); }, onEntered: L, onExit: function (e) { null == ee.current || ee.current(), null == A || A(e); }, onExiting: M, onExited: function (e) { e && (e.style.display = ""), null == q || q(e), Ho(window, "resize", fe); }, manager: le(), transition: b ? uf : void 0, backdropTransition: b ? sf : void 0, renderBackdrop: me, renderDialog: function (e) { return (0, We.jsx)("div", u(u({ role: "dialog" }, e), {}, { style: ye, className: Ze()(i, r, G && "".concat(r, "-static"), !b && "show"), onClick: x ? ve : void 0, onMouseUp: pe, "aria-label": v, "aria-labelledby": p, "aria-describedby": h, children: (0, We.jsx)(d, u(u({}, Q), {}, { onMouseDown: de, className: a, contentClassName: l, children: c })) })); } }) }); }));
    lf.displayName = "Modal";
    var cf = Object.assign(lf, { Body: Gc, Header: rf, Title: of, Footer: ef, Dialog: Xc, TRANSITION_DURATION: 300, BACKDROP_TRANSITION_DURATION: 150 }), ff = ["active", "eventKey", "mountOnEnter", "transition", "unmountOnExit", "role", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited"], df = ["activeKey", "getControlledId", "getControllerId"], pf = ["as"];
    function hf(e, t) { if (null == e)
        return {}; var n, r, i = {}, o = Object.keys(e); for (r = 0; r < o.length; r++)
        n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]); return i; }
    function vf(t) { var n = t.active, r = t.eventKey, i = t.mountOnEnter, o = t.transition, a = t.unmountOnExit, u = t.role, s = void 0 === u ? "tabpanel" : u, l = t.onEnter, c = t.onEntering, f = t.onEntered, d = t.onExit, p = t.onExiting, h = t.onExited, v = hf(t, ff), m = (0, e.useContext)(ts); if (!m)
        return [Object.assign({}, v, { role: s }), { eventKey: r, isActive: n, mountOnEnter: i, transition: o, unmountOnExit: a, onEnter: l, onEntering: c, onEntered: f, onExit: d, onExiting: p, onExited: h }]; var y = m.activeKey, g = m.getControlledId, b = m.getControllerId, w = hf(m, df), x = Oa(r); return [Object.assign({}, v, { role: s, id: g(r), "aria-labelledby": b(r) }), { eventKey: r, isActive: null == n && null != x ? Oa(y) === x : n, transition: o || w.transition, mountOnEnter: null != i ? i : w.mountOnEnter, unmountOnExit: null != a ? a : w.unmountOnExit, onEnter: l, onEntering: c, onEntered: f, onExit: d, onExiting: p, onExited: h }]; }
    var mf = e.forwardRef((function (e, t) { var n = e.as, r = void 0 === n ? "div" : n, i = vf(hf(e, pf)), o = (0, s.Z)(i, 2), a = o[0], u = o[1], l = u.isActive, c = u.onEnter, f = u.onEntering, d = u.onEntered, p = u.onExit, h = u.onExiting, v = u.onExited, m = u.mountOnEnter, y = u.unmountOnExit, g = u.transition, b = void 0 === g ? uu : g; return (0, We.jsx)(ts.Provider, { value: null, children: (0, We.jsx)(Na.Provider, { value: null, children: (0, We.jsx)(b, { in: l, onEnter: c, onEntering: f, onEntered: d, onExit: p, onExiting: h, onExited: v, mountOnEnter: m, unmountOnExit: y, children: (0, We.jsx)(r, Object.assign({}, a, { ref: t, hidden: !l, "aria-hidden": !l })) }) }) }); }));
    mf.displayName = "TabPanel";
    var yf = function (t) { var n = t.id, r = t.generateChildId, i = t.onSelect, o = t.activeKey, a = t.defaultActiveKey, u = t.transition, l = t.mountOnEnter, c = t.unmountOnExit, f = t.children, d = ws(o, a, i), p = (0, s.Z)(d, 2), h = p[0], v = p[1], m = fc(n), y = (0, e.useMemo)((function () { return r || function (e, t) { return m ? "".concat(m, "-").concat(t, "-").concat(e) : null; }; }), [m, r]), g = (0, e.useMemo)((function () { return { onSelect: v, activeKey: h, transition: u, mountOnEnter: l || !1, unmountOnExit: c || !1, getControlledId: function (e) { return y(e, "tabpane"); }, getControllerId: function (e) { return y(e, "tab"); } }; }), [v, h, u, l, c, y]); return (0, We.jsx)(ts.Provider, { value: g, children: (0, We.jsx)(Na.Provider, { value: v || null, children: f }) }); };
    yf.Panel = mf;
    var gf = yf;
    function bf(e) { return "boolean" === typeof e ? e ? la : uu : e; }
    var wf = ["transition"], xf = function (e) { var t = e.transition, n = Qe(e, wf); return (0, We.jsx)(gf, u(u({}, n), {}, { transition: bf(t) })); };
    xf.displayName = "TabContainer";
    var Ef = xf, kf = Si("tab-content"), _f = ["bsPrefix", "transition"], Sf = ["className", "as"], Of = e.forwardRef((function (e, t) { var n = e.bsPrefix, r = e.transition, i = vf(u(u({}, Qe(e, _f)), {}, { transition: bf(r) })), o = (0, s.Z)(i, 2), a = o[0], l = a.className, c = a.as, f = void 0 === c ? "div" : c, d = Qe(a, Sf), p = o[1], h = p.isActive, v = p.onEnter, m = p.onEntering, y = p.onEntered, g = p.onExit, b = p.onExiting, w = p.onExited, x = p.mountOnEnter, E = p.unmountOnExit, k = p.transition, _ = void 0 === k ? la : k, S = $e(n, "tab-pane"); return (0, We.jsx)(ts.Provider, { value: null, children: (0, We.jsx)(Na.Provider, { value: null, children: (0, We.jsx)(_, { in: h, onEnter: v, onEntering: m, onEntered: y, onExit: g, onExiting: b, onExited: w, mountOnEnter: x, unmountOnExit: E, children: (0, We.jsx)(f, u(u({}, d), {}, { ref: t, className: Ze()(l, S, h && "active") })) }) }) }); }));
    Of.displayName = "TabPane";
    var Nf = Of, Cf = { eventKey: ni().oneOfType([ni().string, ni().number]), title: ni().node.isRequired, disabled: ni().bool, tabClassName: ni().string, tabAttrs: ni().object }, Tf = function () { throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly"); };
    Tf.propTypes = Cf;
    var jf = Object.assign(Tf, { Container: Ef, Content: kf, Pane: Nf }), Pf = function () { var t = (0, e.useState)({ username: "", email: "", password: "", gender: "", age: "" }), n = (0, s.Z)(t, 2), r = n[0], i = n[1], a = (0, e.useState)(!1), l = (0, s.Z)(a, 1)[0], c = (0, e.useState)(!1), f = (0, s.Z)(c, 2), d = f[0], p = f[1], h = _a(zr), v = (0, s.Z)(h, 2), m = v[0], y = v[1], g = (y.error, y.data, function (e) { var t = e.target, n = t.name, a = t.value; i(u(u({}, r), {}, o({}, n, a))); }), b = function () { var e = (0, tt.Z)((0, et.Z)().mark((function e(t) { var n, o; return (0, et.Z)().wrap((function (e) { for (;;)
        switch (e.prev = e.next) {
            case 0: return t.preventDefault(), !1 === t.currentTarget.checkValidity() && (t.preventDefault(), t.stopPropagation()), e.prev = 3, e.next = 6, m({ variables: u({}, r) });
            case 6:
                n = e.sent, o = n.data, Yr.login(o.addUser.token), e.next = 15;
                break;
            case 11: e.prev = 11, e.t0 = e.catch(3), console.log(r), console.error(e.t0);
            case 15: i({ username: "", email: "", password: "", gender: "", age: "" });
            case 16:
            case "end": return e.stop();
        } }), e, null, [[3, 11]]); }))); return function (t) { return e.apply(this, arguments); }; }(); return (0, We.jsx)(We.Fragment, { children: (0, We.jsxs)(to, { validated: l, noValidate: !0, onSubmit: b, children: [(0, We.jsx)(wa, { dismissible: !0, onClose: function () { return p(!1); }, show: d, variant: "danger", children: "Something went wrong with your signup!" }), (0, We.jsxs)(to.Group, { className: "mb-3", children: [(0, We.jsx)(to.Label, { htmlFor: "username", children: "Username" }), (0, We.jsx)("br", {}), (0, We.jsx)("input", { type: "text", placeholder: "Your username", name: "username", onChange: g, value: r.username, required: !0 })] }), (0, We.jsxs)(to.Group, { className: "mb-3", children: [(0, We.jsx)(to.Label, { htmlFor: "email", children: "Email" }), (0, We.jsx)("br", {}), (0, We.jsx)("input", { type: "email", placeholder: "Your email address", name: "email", onChange: g, value: r.email, required: !0 })] }), (0, We.jsxs)(to.Group, { className: "mb-3", children: [(0, We.jsx)(to.Label, { htmlFor: "password", children: "Password" }), (0, We.jsx)("br", {}), (0, We.jsx)("input", { type: "password", placeholder: "Your password", name: "password", onChange: g, value: r.password, required: !0 })] }), (0, We.jsxs)(to.Group, { className: "mb-3", children: [(0, We.jsx)(to.Label, { htmlFor: "gender", children: "Gender" }), (0, We.jsx)("br", {}), (0, We.jsxs)("select", { name: "gender", onChange: g, required: !0, children: [(0, We.jsx)("option", { name: "male", value: "male", children: "Male" }), (0, We.jsx)("option", { name: "female", value: "female", children: "Female" })] })] }), (0, We.jsxs)(to.Group, { className: "mb-3", children: [(0, We.jsx)(to.Label, { htmlFor: "age", children: "Your Age" }), (0, We.jsx)("br", {}), (0, We.jsx)("input", { type: "number", value: r.age, name: "age", onChange: g })] }), (0, We.jsx)(ka, { disabled: !(r.username && r.email && r.password), type: "submit", variant: "success", children: "Submit" })] }) }); }, If = function () { var t = (0, e.useState)({ email: "", password: "" }), n = (0, s.Z)(t, 2), r = n[0], i = n[1], a = (0, e.useState)(!1), l = (0, s.Z)(a, 1)[0], c = (0, e.useState)(!1), f = (0, s.Z)(c, 2), d = f[0], p = f[1], h = _a(Ur), v = (0, s.Z)(h, 2), m = v[0], y = v[1], g = (y.error, y.data, function (e) { var t = e.target, n = t.name, a = t.value; i(u(u({}, r), {}, o({}, n, a))); }), b = function () { var e = (0, tt.Z)((0, et.Z)().mark((function e(t) { var n, o; return (0, et.Z)().wrap((function (e) { for (;;)
        switch (e.prev = e.next) {
            case 0: return t.preventDefault(), !1 === t.currentTarget.checkValidity() && (t.preventDefault(), t.stopPropagation()), e.prev = 3, e.next = 6, m({ variables: u({}, r) });
            case 6:
                n = e.sent, o = n.data, Yr.login(o.login.token), e.next = 15;
                break;
            case 11: e.prev = 11, e.t0 = e.catch(3), console.error(e.t0), p(!0);
            case 15: i({ username: "", email: "", password: "" });
            case 16:
            case "end": return e.stop();
        } }), e, null, [[3, 11]]); }))); return function (t) { return e.apply(this, arguments); }; }(); return (0, We.jsx)(We.Fragment, { children: (0, We.jsxs)(to, { noValidate: !0, validated: l, onSubmit: b, children: [(0, We.jsx)(wa, { dismissible: !0, onClose: function () { return p(!1); }, show: d, variant: "danger", children: "Something went wrong with your login credentials!" }), (0, We.jsxs)(to.Group, { className: "mb-3", children: [(0, We.jsx)(to.Label, { htmlFor: "email", children: "Email" }), (0, We.jsx)(to.Control, { type: "text", placeholder: "Your email", name: "email", onChange: g, value: r.email, required: !0 }), (0, We.jsx)(to.Control.Feedback, { type: "invalid", children: "Email is required!" })] }), (0, We.jsxs)(to.Group, { className: "mb-3", children: [(0, We.jsx)(to.Label, { htmlFor: "password", children: "Password" }), (0, We.jsx)(to.Control, { type: "password", placeholder: "Your password", name: "password", onChange: g, value: r.password, required: !0 }), (0, We.jsx)(to.Control.Feedback, { type: "invalid", children: "Password is required!" })] }), (0, We.jsx)(ka, { disabled: !(r.email && r.password), type: "submit", variant: "success", children: "Submit" })] }) }); }, Rf = function () { var t = (0, e.useState)(!1), n = (0, s.Z)(t, 2), r = n[0], i = n[1]; return (0, We.jsxs)(We.Fragment, { children: [(0, We.jsx)(Yu, { bg: "dark", variant: "dark", expand: "lg", className: "nav", children: (0, We.jsxs)("div", { className: "d-flex flex-nowrap w-100", children: [(0, We.jsx)(Yu.Brand, { as: Ve, to: "/", className: "d-flex justify-content-start title", id: "title", children: "Babes Behind Bars" }), (0, We.jsx)(Yu.Collapse, { className: "d-flex justify-content-end", children: (0, We.jsx)(bs, { className: "ml-auto d-flex", children: Yr.loggedIn() ? (0, We.jsxs)(Kc, { title: "\ud83c\udfc3\u200d\u2642\ufe0f\ud83d\udca8\ud83d\ude93", children: [(0, We.jsx)(Kc.Item, { as: Ve, to: "/profile", children: "Profile" }), (0, We.jsx)(Kc.Item, { as: Ve, to: "/settings", children: "Settings" }), (0, We.jsx)(Kc.Item, { onClick: Yr.logout, children: "Logout" })] }) : (0, We.jsx)(bs.Link, { onClick: function () { return i(!0); }, children: "Login/Sign Up" }) }) })] }) }), (0, We.jsx)(cf, { size: "lg", show: r, onHide: function () { return i(!1); }, "aria-labelledby": "signup-modal", children: (0, We.jsxs)(jf.Container, { defaultActiveKey: "login", children: [(0, We.jsx)(cf.Header, { closeButton: !0, children: (0, We.jsx)(cf.Title, { id: "signup-modal", children: (0, We.jsxs)(bs, { variant: "pills", children: [(0, We.jsx)(bs.Item, { children: (0, We.jsx)(bs.Link, { eventKey: "login", children: "Login" }) }), (0, We.jsx)(bs.Item, { children: (0, We.jsx)(bs.Link, { eventKey: "signup", children: "Sign Up" }) })] }) }) }), (0, We.jsx)(cf.Body, { children: (0, We.jsxs)(jf.Content, { children: [(0, We.jsx)(jf.Pane, { eventKey: "login", children: (0, We.jsx)(If, { handleModalClose: function () { return i(!1); } }) }), (0, We.jsx)(jf.Pane, { eventKey: "signup", children: (0, We.jsx)(Pf, { handleModalClose: function () { return i(!1); } }) })] }) })] }) })] }); }, Df = { Name: [], Document: ["definitions"], OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"], VariableDefinition: ["variable", "type", "defaultValue", "directives"], Variable: ["name"], SelectionSet: ["selections"], Field: ["alias", "name", "arguments", "directives", "selectionSet"], Argument: ["name", "value"], FragmentSpread: ["name", "directives"], InlineFragment: ["typeCondition", "directives", "selectionSet"], FragmentDefinition: ["name", "variableDefinitions", "typeCondition", "directives", "selectionSet"], IntValue: [], FloatValue: [], StringValue: [], BooleanValue: [], NullValue: [], EnumValue: [], ListValue: ["values"], ObjectValue: ["fields"], ObjectField: ["name", "value"], Directive: ["name", "arguments"], NamedType: ["name"], ListType: ["type"], NonNullType: ["type"], SchemaDefinition: ["description", "directives", "operationTypes"], OperationTypeDefinition: ["type"], ScalarTypeDefinition: ["description", "name", "directives"], ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"], FieldDefinition: ["description", "name", "arguments", "type", "directives"], InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"], InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"], UnionTypeDefinition: ["description", "name", "directives", "types"], EnumTypeDefinition: ["description", "name", "directives", "values"], EnumValueDefinition: ["description", "name", "directives"], InputObjectTypeDefinition: ["description", "name", "directives", "fields"], DirectiveDefinition: ["description", "name", "arguments", "locations"], SchemaExtension: ["directives", "operationTypes"], ScalarTypeExtension: ["name", "directives"], ObjectTypeExtension: ["name", "interfaces", "directives", "fields"], InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"], UnionTypeExtension: ["name", "directives", "types"], EnumTypeExtension: ["name", "directives", "values"], InputObjectTypeExtension: ["name", "directives", "fields"] }, Lf = Object.freeze({});
    function Af(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Df, r = void 0, i = Array.isArray(e), o = [e], a = -1, u = [], s = void 0, l = void 0, c = void 0, f = [], d = [], p = e; do {
        var h = ++a === o.length, v = h && 0 !== u.length;
        if (h) {
            if (l = 0 === d.length ? void 0 : f[f.length - 1], s = c, c = d.pop(), v) {
                if (i)
                    s = s.slice();
                else {
                    for (var m = {}, y = 0, g = Object.keys(s); y < g.length; y++) {
                        var b = g[y];
                        m[b] = s[b];
                    }
                    s = m;
                }
                for (var w = 0, x = 0; x < u.length; x++) {
                    var E = u[x][0], k = u[x][1];
                    i && (E -= w), i && null === k ? (s.splice(E, 1), w++) : s[E] = k;
                }
            }
            a = r.index, o = r.keys, u = r.edits, i = r.inArray, r = r.prev;
        }
        else {
            if (l = c ? i ? a : o[a] : void 0, null === (s = c ? c[l] : p) || void 0 === s)
                continue;
            c && f.push(l);
        }
        var _, S = void 0;
        if (!Array.isArray(s)) {
            if (!Xn(s))
                throw new Error("Invalid AST Node: ".concat(Rt(s), "."));
            var O = Mf(t, s.kind, h);
            if (O) {
                if ((S = O.call(t, s, l, c, f, d)) === Lf)
                    break;
                if (!1 === S) {
                    if (!h) {
                        f.pop();
                        continue;
                    }
                }
                else if (void 0 !== S && (u.push([l, S]), !h)) {
                    if (!Xn(S)) {
                        f.pop();
                        continue;
                    }
                    s = S;
                }
            }
        }
        if (void 0 === S && v && u.push([l, s]), h)
            f.pop();
        else
            r = { inArray: i, index: a, keys: o, edits: u, prev: r }, o = (i = Array.isArray(s)) ? s : null !== (_ = n[s.kind]) && void 0 !== _ ? _ : [], a = -1, u = [], c && d.push(c), c = s;
    } while (void 0 !== r); return 0 !== u.length && (p = u[u.length - 1][1]), p; }
    function Mf(e, t, n) { var r = e[t]; if (r) {
        if (!n && "function" === typeof r)
            return r;
        var i = n ? r.leave : r.enter;
        if ("function" === typeof i)
            return i;
    }
    else {
        var o = n ? e.leave : e.enter;
        if (o) {
            if ("function" === typeof o)
                return o;
            var a = o[t];
            if ("function" === typeof a)
                return a;
        }
    } }
    function Ff(e, t) { var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (n)
        return (n = n.call(e)).next.bind(n); if (Array.isArray(e) || (n = function (e, t) { if (!e)
        return; if ("string" === typeof e)
        return Vf(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n)
        return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return Vf(e, t); }(e)) || t && e && "number" === typeof e.length) {
        n && (e = n);
        var r = 0;
        return function () { return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }; };
    } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
    function Vf(e, t) { (null == t || t > e.length) && (t = e.length); for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n]; return r; }
    function qf(e, t) { for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    } }
    function Uf(e, t, n) { return t && qf(e.prototype, t), n && qf(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
    var zf = function () { return "function" === typeof Symbol; }, Qf = function (e) { return zf() && Boolean(Symbol[e]); }, Bf = function (e) { return Qf(e) ? Symbol[e] : "@@" + e; };
    zf() && !Qf("observable") && (Symbol.observable = Symbol("observable"));
    var Zf = Bf("iterator"), Wf = Bf("observable"), Hf = Bf("species");
    function Kf(e, t) { var n = e[t]; if (null != n) {
        if ("function" !== typeof n)
            throw new TypeError(n + " is not a function");
        return n;
    } }
    function $f(e) { var t = e.constructor; return void 0 !== t && null === (t = t[Hf]) && (t = void 0), void 0 !== t ? t : od; }
    function Gf(e) { return e instanceof od; }
    function Yf(e) { Yf.log ? Yf.log(e) : setTimeout((function () { throw e; })); }
    function Jf(e) { Promise.resolve().then((function () { try {
        e();
    }
    catch (Wr) {
        Yf(Wr);
    } })); }
    function Xf(e) { var t = e._cleanup; if (void 0 !== t && (e._cleanup = void 0, t))
        try {
            if ("function" === typeof t)
                t();
            else {
                var n = Kf(t, "unsubscribe");
                n && n.call(t);
            }
        }
        catch (Wr) {
            Yf(Wr);
        } }
    function ed(e) { e._observer = void 0, e._queue = void 0, e._state = "closed"; }
    function td(e, t, n) { e._state = "running"; var r = e._observer; try {
        var i = Kf(r, t);
        switch (t) {
            case "next":
                i && i.call(r, n);
                break;
            case "error":
                if (ed(e), !i)
                    throw n;
                i.call(r, n);
                break;
            case "complete": ed(e), i && i.call(r);
        }
    }
    catch (Wr) {
        Yf(Wr);
    } "closed" === e._state ? Xf(e) : "running" === e._state && (e._state = "ready"); }
    function nd(e, t, n) { if ("closed" !== e._state) {
        if ("buffering" !== e._state)
            return "ready" !== e._state ? (e._state = "buffering", e._queue = [{ type: t, value: n }], void Jf((function () { return function (e) { var t = e._queue; if (t) {
                e._queue = void 0, e._state = "ready";
                for (var n = 0; n < t.length && (td(e, t[n].type, t[n].value), "closed" !== e._state); ++n)
                    ;
            } }(e); }))) : void td(e, t, n);
        e._queue.push({ type: t, value: n });
    } }
    var rd = function () { function e(e, t) { this._cleanup = void 0, this._observer = e, this._queue = void 0, this._state = "initializing"; var n = new id(this); try {
        this._cleanup = t.call(void 0, n);
    }
    catch (Wr) {
        n.error(Wr);
    } "initializing" === this._state && (this._state = "ready"); } return e.prototype.unsubscribe = function () { "closed" !== this._state && (ed(this), Xf(this)); }, Uf(e, [{ key: "closed", get: function () { return "closed" === this._state; } }]), e; }(), id = function () { function e(e) { this._subscription = e; } var t = e.prototype; return t.next = function (e) { nd(this._subscription, "next", e); }, t.error = function (e) { nd(this._subscription, "error", e); }, t.complete = function () { nd(this._subscription, "complete"); }, Uf(e, [{ key: "closed", get: function () { return "closed" === this._subscription._state; } }]), e; }(), od = function () { function e(t) { if (!(this instanceof e))
        throw new TypeError("Observable cannot be called as a function"); if ("function" !== typeof t)
        throw new TypeError("Observable initializer must be a function"); this._subscriber = t; } var t = e.prototype; return t.subscribe = function (e) { return "object" === typeof e && null !== e || (e = { next: e, error: arguments[1], complete: arguments[2] }), new rd(e, this._subscriber); }, t.forEach = function (e) { var t = this; return new Promise((function (n, r) { if ("function" === typeof e)
        var i = t.subscribe({ next: function (t) { try {
                e(t, o);
            }
            catch (Wr) {
                r(Wr), i.unsubscribe();
            } }, error: r, complete: n });
    else
        r(new TypeError(e + " is not a function")); function o() { i.unsubscribe(), n(); } })); }, t.map = function (e) { var t = this; if ("function" !== typeof e)
        throw new TypeError(e + " is not a function"); return new ($f(this))((function (n) { return t.subscribe({ next: function (t) { try {
            t = e(t);
        }
        catch (Wr) {
            return n.error(Wr);
        } n.next(t); }, error: function (e) { n.error(e); }, complete: function () { n.complete(); } }); })); }, t.filter = function (e) { var t = this; if ("function" !== typeof e)
        throw new TypeError(e + " is not a function"); return new ($f(this))((function (n) { return t.subscribe({ next: function (t) { try {
            if (!e(t))
                return;
        }
        catch (Wr) {
            return n.error(Wr);
        } n.next(t); }, error: function (e) { n.error(e); }, complete: function () { n.complete(); } }); })); }, t.reduce = function (e) { var t = this; if ("function" !== typeof e)
        throw new TypeError(e + " is not a function"); var n = $f(this), r = arguments.length > 1, i = !1, o = arguments[1]; return new n((function (n) { return t.subscribe({ next: function (t) { var a = !i; if (i = !0, !a || r)
            try {
                o = e(o, t);
            }
            catch (Wr) {
                return n.error(Wr);
            }
        else
            o = t; }, error: function (e) { n.error(e); }, complete: function () { if (!i && !r)
            return n.error(new TypeError("Cannot reduce an empty sequence")); n.next(o), n.complete(); } }); })); }, t.concat = function () { for (var e = this, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r]; var i = $f(this); return new i((function (t) { var r, o = 0; return function e(a) { r = a.subscribe({ next: function (e) { t.next(e); }, error: function (e) { t.error(e); }, complete: function () { o === n.length ? (r = void 0, t.complete()) : e(i.from(n[o++])); } }); }(e), function () { r && (r.unsubscribe(), r = void 0); }; })); }, t.flatMap = function (e) { var t = this; if ("function" !== typeof e)
        throw new TypeError(e + " is not a function"); var n = $f(this); return new n((function (r) { var i = [], o = t.subscribe({ next: function (t) { if (e)
            try {
                t = e(t);
            }
            catch (Wr) {
                return r.error(Wr);
            } var o = n.from(t).subscribe({ next: function (e) { r.next(e); }, error: function (e) { r.error(e); }, complete: function () { var e = i.indexOf(o); e >= 0 && i.splice(e, 1), a(); } }); i.push(o); }, error: function (e) { r.error(e); }, complete: function () { a(); } }); function a() { o.closed && 0 === i.length && r.complete(); } return function () { i.forEach((function (e) { return e.unsubscribe(); })), o.unsubscribe(); }; })); }, t[Wf] = function () { return this; }, e.from = function (t) { var n = "function" === typeof this ? this : e; if (null == t)
        throw new TypeError(t + " is not an object"); var r = Kf(t, Wf); if (r) {
        var i = r.call(t);
        if (Object(i) !== i)
            throw new TypeError(i + " is not an object");
        return Gf(i) && i.constructor === n ? i : new n((function (e) { return i.subscribe(e); }));
    } if (Qf("iterator") && (r = Kf(t, Zf)))
        return new n((function (e) { Jf((function () { if (!e.closed) {
            for (var n, i = Ff(r.call(t)); !(n = i()).done;) {
                var o = n.value;
                if (e.next(o), e.closed)
                    return;
            }
            e.complete();
        } })); })); if (Array.isArray(t))
        return new n((function (e) { Jf((function () { if (!e.closed) {
            for (var n = 0; n < t.length; ++n)
                if (e.next(t[n]), e.closed)
                    return;
            e.complete();
        } })); })); throw new TypeError(t + " is not observable"); }, e.of = function () { for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r]; return new ("function" === typeof this ? this : e)((function (e) { Jf((function () { if (!e.closed) {
        for (var t = 0; t < n.length; ++t)
            if (e.next(n[t]), e.closed)
                return;
        e.complete();
    } })); })); }, Uf(e, null, [{ key: Hf, get: function () { return this; } }]), e; }();
    function ad(e, t) { var n = t, r = []; return e.definitions.forEach((function (e) { if ("OperationDefinition" === e.kind)
        throw __DEV__ ? new ht("Found a ".concat(e.operation, " operation").concat(e.name ? " named '".concat(e.name.value, "'") : "", ". ") + "No operations are allowed when using a fragment as a query. Only fragments are allowed.") : new ht(44); "FragmentDefinition" === e.kind && r.push(e); })), "undefined" === typeof n && (__DEV__ ? vt(1 === r.length, "Found ".concat(r.length, " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.")) : vt(1 === r.length, 45), n = r[0].name.value), at(at({}, e), { definitions: ct([{ kind: "OperationDefinition", operation: "query", selectionSet: { kind: "SelectionSet", selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: n } }] } }], e.definitions, !0) }); }
    function ud(e) { void 0 === e && (e = []); var t = {}; return e.forEach((function (e) { t[e.name.value] = e; })), t; }
    function sd(e, t) { switch (e.kind) {
        case "InlineFragment": return e;
        case "FragmentSpread":
            var n = e.name.value;
            if ("function" === typeof t)
                return t(n);
            var r = t && t[n];
            return __DEV__ ? vt(r, "No fragment named ".concat(n)) : vt(r, 46), r || null;
        default: return null;
    } }
    function ld(e) { return { __ref: String(e) }; }
    function cd(e) { return Boolean(e && "object" === typeof e && "string" === typeof e.__ref); }
    function fd(e, t, n, r) { if (function (e) { return "IntValue" === e.kind; }(n) || function (e) { return "FloatValue" === e.kind; }(n))
        e[t.value] = Number(n.value);
    else if (function (e) { return "BooleanValue" === e.kind; }(n) || function (e) { return "StringValue" === e.kind; }(n))
        e[t.value] = n.value;
    else if (function (e) { return "ObjectValue" === e.kind; }(n)) {
        var i = {};
        n.fields.map((function (e) { return fd(i, e.name, e.value, r); })), e[t.value] = i;
    }
    else if (function (e) { return "Variable" === e.kind; }(n)) {
        var o = (r || {})[n.name.value];
        e[t.value] = o;
    }
    else if (function (e) { return "ListValue" === e.kind; }(n))
        e[t.value] = n.values.map((function (e) { var n = {}; return fd(n, t, e, r), n[t.value]; }));
    else if (function (e) { return "EnumValue" === e.kind; }(n))
        e[t.value] = n.value;
    else {
        if (!function (e) { return "NullValue" === e.kind; }(n))
            throw __DEV__ ? new ht('The inline argument "'.concat(t.value, '" of kind "').concat(n.kind, '"') + "is not supported. Use variables instead of inline arguments to overcome this limitation.") : new ht(55);
        e[t.value] = null;
    } }
    zf() && Object.defineProperty(od, Symbol("extensions"), { value: { symbol: Wf, hostReportError: Yf }, configurable: !0 });
    var dd = ["connection", "include", "skip", "client", "rest", "export"], pd = Object.assign((function (e, t, n) { if (t && n && n.connection && n.connection.key) {
        if (n.connection.filter && n.connection.filter.length > 0) {
            var r = n.connection.filter ? n.connection.filter : [];
            r.sort();
            var i = {};
            return r.forEach((function (e) { i[e] = t[e]; })), "".concat(n.connection.key, "(").concat(hd(i), ")");
        }
        return n.connection.key;
    } var o = e; if (t) {
        var a = hd(t);
        o += "(".concat(a, ")");
    } return n && Object.keys(n).forEach((function (e) { -1 === dd.indexOf(e) && (n[e] && Object.keys(n[e]).length ? o += "@".concat(e, "(").concat(hd(n[e]), ")") : o += "@".concat(e)); })), o; }), { setStringify: function (e) { var t = hd; return hd = e, t; } }), hd = function (e) { return JSON.stringify(e, vd); };
    function vd(e, t) { return fn(t) && !Array.isArray(t) && (t = Object.keys(t).sort().reduce((function (e, n) { return e[n] = t[n], e; }), {})), t; }
    function md(e, t) { if (e.arguments && e.arguments.length) {
        var n = {};
        return e.arguments.forEach((function (e) { var r = e.name, i = e.value; return fd(n, r, i, t); })), n;
    } return null; }
    function yd(e) { return e.alias ? e.alias.value : e.name.value; }
    function gd(e, t, n) { if ("string" === typeof e.__typename)
        return e.__typename; for (var r = 0, i = t.selections; r < i.length; r++) {
        var o = i[r];
        if (bd(o)) {
            if ("__typename" === o.name.value)
                return e[yd(o)];
        }
        else {
            var a = gd(e, sd(o, n).selectionSet, n);
            if ("string" === typeof a)
                return a;
        }
    } }
    function bd(e) { return "Field" === e.kind; }
    function wd(e) { __DEV__ ? vt(e && "Document" === e.kind, 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : vt(e && "Document" === e.kind, 47); var t = e.definitions.filter((function (e) { return "FragmentDefinition" !== e.kind; })).map((function (e) { if ("OperationDefinition" !== e.kind)
        throw __DEV__ ? new ht('Schema type definitions not allowed in queries. Found: "'.concat(e.kind, '"')) : new ht(48); return e; })); return __DEV__ ? vt(t.length <= 1, "Ambiguous GraphQL document: contains ".concat(t.length, " operations")) : vt(t.length <= 1, 49), e; }
    function xd(e) { return wd(e), e.definitions.filter((function (e) { return "OperationDefinition" === e.kind; }))[0]; }
    function Ed(e) { return e.definitions.filter((function (e) { return "OperationDefinition" === e.kind && !!e.name; })).map((function (e) { return e.name.value; }))[0] || null; }
    function kd(e) { return e.definitions.filter((function (e) { return "FragmentDefinition" === e.kind; })); }
    function _d(e) { var t = xd(e); return __DEV__ ? vt(t && "query" === t.operation, "Must contain a query definition.") : vt(t && "query" === t.operation, 50), t; }
    function Sd(e) { var t; wd(e); for (var n = 0, r = e.definitions; n < r.length; n++) {
        var i = r[n];
        if ("OperationDefinition" === i.kind) {
            var o = i.operation;
            if ("query" === o || "mutation" === o || "subscription" === o)
                return i;
        }
        "FragmentDefinition" !== i.kind || t || (t = i);
    } if (t)
        return t; throw __DEV__ ? new ht("Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.") : new ht(54); }
    function Od(e) { var t = Object.create(null), n = e && e.variableDefinitions; return n && n.length && n.forEach((function (e) { e.defaultValue && fd(t, e.variable.name, e.defaultValue); })), t; }
    function Nd(e, t) { return t ? t(e) : od.of(); }
    function Cd(e) { return "function" === typeof e ? new Pd(e) : e; }
    function Td(e) { return e.request.length <= 1; }
    var jd = function (e) { function t(t, n) { var r = e.call(this, t) || this; return r.link = n, r; } return ot(t, e), t; }(Error), Pd = function () { function e(e) { e && (this.request = e); } return e.empty = function () { return new e((function () { return od.of(); })); }, e.from = function (t) { return 0 === t.length ? e.empty() : t.map(Cd).reduce((function (e, t) { return e.concat(t); })); }, e.split = function (t, n, r) { var i = Cd(n), o = Cd(r || new e(Nd)); return Td(i) && Td(o) ? new e((function (e) { return t(e) ? i.request(e) || od.of() : o.request(e) || od.of(); })) : new e((function (e, n) { return t(e) ? i.request(e, n) || od.of() : o.request(e, n) || od.of(); })); }, e.execute = function (e, t) { return e.request(function (e, t) { var n = at({}, e); return Object.defineProperty(t, "setContext", { enumerable: !1, value: function (e) { n = at(at({}, n), "function" === typeof e ? e(n) : e); } }), Object.defineProperty(t, "getContext", { enumerable: !1, value: function () { return at({}, n); } }), t; }(t.context, function (e) { var t = { variables: e.variables || {}, extensions: e.extensions || {}, operationName: e.operationName, query: e.query }; return t.operationName || (t.operationName = "string" !== typeof t.query ? Ed(t.query) || void 0 : ""), t; }(function (e) { for (var t = ["query", "operationName", "variables", "extensions", "context"], n = 0, r = Object.keys(e); n < r.length; n++) {
        var i = r[n];
        if (t.indexOf(i) < 0)
            throw __DEV__ ? new ht("illegal argument: ".concat(i)) : new ht(27);
    } return e; }(t)))) || od.of(); }, e.concat = function (t, n) { var r = Cd(t); if (Td(r))
        return __DEV__ && vt.warn(new jd("You are calling concat on a terminating link, which will have no effect", r)), r; var i = Cd(n); return Td(i) ? new e((function (e) { return r.request(e, (function (e) { return i.request(e) || od.of(); })) || od.of(); })) : new e((function (e, t) { return r.request(e, (function (e) { return i.request(e, t) || od.of(); })) || od.of(); })); }, e.prototype.split = function (t, n, r) { return this.concat(e.split(t, n, r || new e(Nd))); }, e.prototype.concat = function (t) { return e.concat(this, t); }, e.prototype.request = function (e, t) { throw __DEV__ ? new ht("request is not implemented") : new ht(22); }, e.prototype.onError = function (e, t) { if (t && t.error)
        return t.error(e), !1; throw e; }, e.prototype.setOnError = function (e) { return this.onError = e, this; }, e; }();
    function Id(e, t) { var n = e.directives; return !n || !n.length || function (e) { var t = []; e && e.length && e.forEach((function (e) { if (function (e) { var t = e.name.value; return "skip" === t || "include" === t; }(e)) {
        var n = e.arguments, r = e.name.value;
        __DEV__ ? vt(n && 1 === n.length, "Incorrect number of arguments for the @".concat(r, " directive.")) : vt(n && 1 === n.length, 41);
        var i = n[0];
        __DEV__ ? vt(i.name && "if" === i.name.value, "Invalid argument for the @".concat(r, " directive.")) : vt(i.name && "if" === i.name.value, 42);
        var o = i.value;
        __DEV__ ? vt(o && ("Variable" === o.kind || "BooleanValue" === o.kind), "Argument for the @".concat(r, " directive must be a variable or a boolean value.")) : vt(o && ("Variable" === o.kind || "BooleanValue" === o.kind), 43), t.push({ directive: e, ifArgument: i });
    } })); return t; }(n).every((function (e) { var n = e.directive, r = e.ifArgument, i = !1; return "Variable" === r.value.kind ? (i = t && t[r.value.name.value], __DEV__ ? vt(void 0 !== i, "Invalid variable referenced in @".concat(n.name.value, " directive.")) : vt(void 0 !== i, 40)) : i = r.value.value, "skip" === n.name.value ? !i : i; })); }
    function Rd(e, t, n) { var r = new Set(e), i = r.size; return Af(t, { Directive: function (e) { if (r.delete(e.name.value) && (!n || !r.size))
            return Lf; } }), n ? !r.size : r.size < i; }
    function Dd(e) { return e && Rd(["client", "export"], e, !0); }
    var Ld = function (e, t) { var n; try {
        n = JSON.stringify(e);
    }
    catch (Wr) {
        var r = __DEV__ ? new ht("Network request failed. ".concat(t, " is not serializable: ").concat(Wr.message)) : new ht(24);
        throw r.parseError = Wr, r;
    } return n; };
    function Ad(e) { var t = null, n = null, r = !1, i = [], o = []; function a(e) { if (!n) {
        if (o.length) {
            var t = o.shift();
            if (Array.isArray(t) && t[0])
                return t[0]({ value: e, done: !1 });
        }
        i.push(e);
    } } function u(e) { n = e, o.slice().forEach((function (t) { t[1](e); })), !t || t(); } function s() { r = !0, o.slice().forEach((function (e) { e[0]({ value: void 0, done: !0 }); })), !t || t(); } t = function () { t = null, e.removeListener("data", a), e.removeListener("error", u), e.removeListener("end", s), e.removeListener("finish", s), e.removeListener("close", s); }, e.on("data", a), e.on("error", u), e.on("end", s), e.on("finish", s), e.on("close", s); var l = { next: function () { return new Promise((function (e, t) { return n ? t(n) : i.length ? e({ value: i.shift(), done: !1 }) : r ? e({ value: void 0, done: !0 }) : void o.push([e, t]); })); } }; return zt && (l[Symbol.asyncIterator] = function () { return this; }), l; }
    function Md(e) { var t = { next: function () { return e.read(); } }; return zt && (t[Symbol.asyncIterator] = function () { return this; }), t; }
    function Fd(e) { var t = e; if (e.body && (t = e.body), function (e) { return !(!zt || !e[Symbol.asyncIterator]); }(t))
        return function (e) { var t, n = e[Symbol.asyncIterator](); return (t = { next: function () { return n.next(); } })[Symbol.asyncIterator] = function () { return this; }, t; }(t); if (function (e) { return !!e.getReader; }(t))
        return Md(t.getReader()); if (function (e) { return !!e.stream; }(t))
        return Md(t.stream().getReader()); if (function (e) { return !!e.arrayBuffer; }(t))
        return function (e) { var t = !1, n = { next: function () { return t ? Promise.resolve({ value: void 0, done: !0 }) : (t = !0, new Promise((function (t, n) { e.then((function (e) { t({ value: e, done: !1 }); })).catch(n); }))); } }; return zt && (n[Symbol.asyncIterator] = function () { return this; }), n; }(t.arrayBuffer()); if (function (e) { return !!e.pipe; }(t))
        return Ad(t); throw new Error("Unknown body type for responseIterator. Please pass a streamable response."); }
    var Vd = function (e, t, n) { var r = new Error(n); throw r.name = "ServerError", r.response = e, r.statusCode = e.status, r.result = t, r; }, qd = Object.prototype.hasOwnProperty;
    function Ud() { for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t]; return zd(e); }
    function zd(e) { var t = e[0] || {}, n = e.length; if (n > 1)
        for (var r = new Bd, i = 1; i < n; ++i)
            t = r.merge(t, e[i]); return t; }
    var Qd = function (e, t, n) { return this.merge(e[n], t[n]); }, Bd = function () { function e(e) { void 0 === e && (e = Qd), this.reconciler = e, this.isObject = fn, this.pastCopies = new Set; } return e.prototype.merge = function (e, t) { for (var n = this, r = [], i = 2; i < arguments.length; i++)
        r[i - 2] = arguments[i]; return fn(t) && fn(e) ? (Object.keys(t).forEach((function (i) { if (qd.call(e, i)) {
        var o = e[i];
        if (t[i] !== o) {
            var a = n.reconciler.apply(n, ct([e, t, i], r, !1));
            a !== o && ((e = n.shallowCopyForMerge(e))[i] = a);
        }
    }
    else
        (e = n.shallowCopyForMerge(e))[i] = t[i]; })), e) : t; }, e.prototype.shallowCopyForMerge = function (e) { return fn(e) && (this.pastCopies.has(e) || (e = Array.isArray(e) ? e.slice(0) : at({ __proto__: Object.getPrototypeOf(e) }, e), this.pastCopies.add(e))), e; }, e; }();
    function Zd(e) { return "incremental" in e; }
    function Wd(e) { return fn(e) && "payload" in e; }
    function Hd(e, t) { var n = e, r = new Bd; return Zd(t) && _n(t.incremental) && t.incremental.forEach((function (e) { for (var t = e.data, i = e.path, o = i.length - 1; o >= 0; --o) {
        var a = i[o], u = !isNaN(+a) ? [] : {};
        u[a] = t, t = u;
    } n = r.merge(n, t); })), n; }
    var Kd = Object.prototype.hasOwnProperty;
    function $d(e) { var t = {}; return e.split("\n").forEach((function (e) { var n = e.indexOf(":"); if (n > -1) {
        var r = e.slice(0, n).trim().toLowerCase(), i = e.slice(n + 1).trim();
        t[r] = i;
    } })), t; }
    function Gd(e, t) { if (e.status >= 300) {
        Vd(e, function () { try {
            return JSON.parse(t);
        }
        catch (e) {
            return t;
        } }(), "Response not successful: Received status code ".concat(e.status));
    } try {
        return JSON.parse(t);
    }
    catch (r) {
        var n = r;
        throw n.name = "ServerParseError", n.response = e, n.statusCode = e.status, n.bodyText = t, n;
    } }
    function Yd(e, t) { var n, r; "AbortError" !== e.name && (e.result && e.result.errors && e.result.data && (null === (n = t.next) || void 0 === n || n.call(t, e.result)), null === (r = t.error) || void 0 === r || r.call(t, e)); }
    function Jd(e, t, n) { var r; (r = t, function (e) { return e.text().then((function (t) { return Gd(e, t); })).then((function (t) { return e.status >= 300 && Vd(e, t, "Response not successful: Received status code ".concat(e.status)), Array.isArray(t) || Kd.call(t, "data") || Kd.call(t, "errors") || Vd(e, t, "Server response was missing for query '".concat(Array.isArray(r) ? r.map((function (e) { return e.operationName; })) : r.operationName, "'.")), t; })); })(e).then((function (e) { var t, r; null === (t = n.next) || void 0 === t || t.call(n, e), null === (r = n.complete) || void 0 === r || r.call(n); })).catch((function (e) { return Yd(e, n); })); }
    function Xd(e) { return Af(e, { leave: ep }); }
    var ep = { Name: function (e) { return e.value; }, Variable: function (e) { return "$" + e.name; }, Document: function (e) { return np(e.definitions, "\n\n") + "\n"; }, OperationDefinition: function (e) { var t = e.operation, n = e.name, r = ip("(", np(e.variableDefinitions, ", "), ")"), i = np(e.directives, " "), o = e.selectionSet; return n || i || r || "query" !== t ? np([t, np([n, r]), i, o], " ") : o; }, VariableDefinition: function (e) { var t = e.variable, n = e.type, r = e.defaultValue, i = e.directives; return t + ": " + n + ip(" = ", r) + ip(" ", np(i, " ")); }, SelectionSet: function (e) { return rp(e.selections); }, Field: function (e) { var t = e.alias, n = e.name, r = e.arguments, i = e.directives, o = e.selectionSet, a = ip("", t, ": ") + n, u = a + ip("(", np(r, ", "), ")"); return u.length > 80 && (u = a + ip("(\n", op(np(r, "\n")), "\n)")), np([u, np(i, " "), o], " "); }, Argument: function (e) { return e.name + ": " + e.value; }, FragmentSpread: function (e) { return "..." + e.name + ip(" ", np(e.directives, " ")); }, InlineFragment: function (e) { var t = e.typeCondition, n = e.directives, r = e.selectionSet; return np(["...", ip("on ", t), np(n, " "), r], " "); }, FragmentDefinition: function (e) { var t = e.name, n = e.typeCondition, r = e.variableDefinitions, i = e.directives, o = e.selectionSet; return "fragment ".concat(t).concat(ip("(", np(r, ", "), ")"), " ") + "on ".concat(n, " ").concat(ip("", np(i, " "), " ")) + o; }, IntValue: function (e) { return e.value; }, FloatValue: function (e) { return e.value; }, StringValue: function (e, t) { var n = e.value; return e.block ? function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = -1 === e.indexOf("\n"), i = " " === e[0] || "\t" === e[0], o = '"' === e[e.length - 1], a = "\\" === e[e.length - 1], u = !r || o || a || n, s = ""; return !u || r && i || (s += "\n" + t), s += t ? e.replace(/\n/g, "\n" + t) : e, u && (s += "\n"), '"""' + s.replace(/"""/g, '\\"""') + '"""'; }(n, "description" === t ? "" : "  ") : JSON.stringify(n); }, BooleanValue: function (e) { return e.value ? "true" : "false"; }, NullValue: function () { return "null"; }, EnumValue: function (e) { return e.value; }, ListValue: function (e) { return "[" + np(e.values, ", ") + "]"; }, ObjectValue: function (e) { return "{" + np(e.fields, ", ") + "}"; }, ObjectField: function (e) { return e.name + ": " + e.value; }, Directive: function (e) { return "@" + e.name + ip("(", np(e.arguments, ", "), ")"); }, NamedType: function (e) { return e.name; }, ListType: function (e) { return "[" + e.type + "]"; }, NonNullType: function (e) { return e.type + "!"; }, SchemaDefinition: tp((function (e) { var t = e.directives, n = e.operationTypes; return np(["schema", np(t, " "), rp(n)], " "); })), OperationTypeDefinition: function (e) { return e.operation + ": " + e.type; }, ScalarTypeDefinition: tp((function (e) { return np(["scalar", e.name, np(e.directives, " ")], " "); })), ObjectTypeDefinition: tp((function (e) { var t = e.name, n = e.interfaces, r = e.directives, i = e.fields; return np(["type", t, ip("implements ", np(n, " & ")), np(r, " "), rp(i)], " "); })), FieldDefinition: tp((function (e) { var t = e.name, n = e.arguments, r = e.type, i = e.directives; return t + (up(n) ? ip("(\n", op(np(n, "\n")), "\n)") : ip("(", np(n, ", "), ")")) + ": " + r + ip(" ", np(i, " ")); })), InputValueDefinition: tp((function (e) { var t = e.name, n = e.type, r = e.defaultValue, i = e.directives; return np([t + ": " + n, ip("= ", r), np(i, " ")], " "); })), InterfaceTypeDefinition: tp((function (e) { var t = e.name, n = e.interfaces, r = e.directives, i = e.fields; return np(["interface", t, ip("implements ", np(n, " & ")), np(r, " "), rp(i)], " "); })), UnionTypeDefinition: tp((function (e) { var t = e.name, n = e.directives, r = e.types; return np(["union", t, np(n, " "), r && 0 !== r.length ? "= " + np(r, " | ") : ""], " "); })), EnumTypeDefinition: tp((function (e) { var t = e.name, n = e.directives, r = e.values; return np(["enum", t, np(n, " "), rp(r)], " "); })), EnumValueDefinition: tp((function (e) { return np([e.name, np(e.directives, " ")], " "); })), InputObjectTypeDefinition: tp((function (e) { var t = e.name, n = e.directives, r = e.fields; return np(["input", t, np(n, " "), rp(r)], " "); })), DirectiveDefinition: tp((function (e) { var t = e.name, n = e.arguments, r = e.repeatable, i = e.locations; return "directive @" + t + (up(n) ? ip("(\n", op(np(n, "\n")), "\n)") : ip("(", np(n, ", "), ")")) + (r ? " repeatable" : "") + " on " + np(i, " | "); })), SchemaExtension: function (e) { var t = e.directives, n = e.operationTypes; return np(["extend schema", np(t, " "), rp(n)], " "); }, ScalarTypeExtension: function (e) { return np(["extend scalar", e.name, np(e.directives, " ")], " "); }, ObjectTypeExtension: function (e) { var t = e.name, n = e.interfaces, r = e.directives, i = e.fields; return np(["extend type", t, ip("implements ", np(n, " & ")), np(r, " "), rp(i)], " "); }, InterfaceTypeExtension: function (e) { var t = e.name, n = e.interfaces, r = e.directives, i = e.fields; return np(["extend interface", t, ip("implements ", np(n, " & ")), np(r, " "), rp(i)], " "); }, UnionTypeExtension: function (e) { var t = e.name, n = e.directives, r = e.types; return np(["extend union", t, np(n, " "), r && 0 !== r.length ? "= " + np(r, " | ") : ""], " "); }, EnumTypeExtension: function (e) { var t = e.name, n = e.directives, r = e.values; return np(["extend enum", t, np(n, " "), rp(r)], " "); }, InputObjectTypeExtension: function (e) { var t = e.name, n = e.directives, r = e.fields; return np(["extend input", t, np(n, " "), rp(r)], " "); } };
    function tp(e) { return function (t) { return np([t.description, e(t)], "\n"); }; }
    function np(e) { var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""; return null !== (t = null === e || void 0 === e ? void 0 : e.filter((function (e) { return e; })).join(n)) && void 0 !== t ? t : ""; }
    function rp(e) { return ip("{\n", op(np(e, "\n")), "\n}"); }
    function ip(e, t) { return null != t && "" !== t ? e + t + (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") : ""; }
    function op(e) { return ip("  ", e.replace(/\n/g, "\n  ")); }
    function ap(e) { return -1 !== e.indexOf("\n"); }
    function up(e) { return null != e && e.some(ap); }
    var sp = { http: { includeQuery: !0, includeExtensions: !1, preserveHeaderCase: !1 }, headers: { accept: "*/*", "content-type": "application/json" }, options: { method: "POST" } }, lp = function (e, t) { return t(e); };
    function cp(e, t) { for (var n = [], r = 2; r < arguments.length; r++)
        n[r - 2] = arguments[r]; var i = {}, o = {}; n.forEach((function (e) { i = at(at(at({}, i), e.options), { headers: at(at({}, i.headers), e.headers) }), e.credentials && (i.credentials = e.credentials), o = at(at({}, o), e.http); })), i.headers && (i.headers = function (e, t) { if (!t) {
        var n = Object.create(null);
        return Object.keys(Object(e)).forEach((function (t) { n[t.toLowerCase()] = e[t]; })), n;
    } var r = Object.create(null); Object.keys(Object(e)).forEach((function (t) { r[t.toLowerCase()] = { originalName: t, value: e[t] }; })); var i = Object.create(null); return Object.keys(r).forEach((function (e) { i[r[e].originalName] = r[e].value; })), i; }(i.headers, o.preserveHeaderCase)); var a = e.operationName, u = e.extensions, s = e.variables, l = e.query, c = { operationName: a, variables: s }; return o.includeExtensions && (c.extensions = u), o.includeQuery && (c.query = t(l, Xd)), { options: i, body: c }; }
    function fp(e) { return new od((function (t) { t.error(e); })); }
    var dp = bt((function () { return fetch; })), pp = function (e) { void 0 === e && (e = {}); var t = e.uri, n = void 0 === t ? "/graphql" : t, r = e.fetch, i = e.print, o = void 0 === i ? lp : i, a = e.includeExtensions, u = e.preserveHeaderCase, s = e.useGETForQueries, l = e.includeUnusedVariables, c = void 0 !== l && l, f = ut(e, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]); __DEV__ && function (e) { if (!e && "undefined" === typeof fetch)
        throw __DEV__ ? new ht("\n\"fetch\" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:\n\nimport fetch from 'cross-fetch';\nimport { ApolloClient, HttpLink } from '@apollo/client';\nconst client = new ApolloClient({\n  link: new HttpLink({ uri: '/graphql', fetch })\n});\n    ") : new ht(23); }(r || dp); var d = { http: { includeExtensions: a, preserveHeaderCase: u }, options: f.fetchOptions, credentials: f.credentials, headers: f.headers }; return new Pd((function (e) { var t = function (e, t) { var n = e.getContext().uri; return n || ("function" === typeof t ? t(e) : t || "/graphql"); }(e, n), i = e.getContext(), a = {}; if (i.clientAwareness) {
        var u = i.clientAwareness, l = u.name, f = u.version;
        l && (a["apollographql-client-name"] = l), f && (a["apollographql-client-version"] = f);
    } var p, h = at(at({}, a), i.headers), v = { http: i.http, options: i.fetchOptions, credentials: i.credentials, headers: h }, m = cp(e, o, sp, d, v), y = m.options, g = m.body; if (g.variables && !c) {
        var b = new Set(Object.keys(g.variables));
        Af(e.query, { Variable: function (e, t, n) { n && "VariableDefinition" !== n.kind && b.delete(e.name.value); } }), b.size && (g.variables = at({}, g.variables), b.forEach((function (e) { delete g.variables[e]; })));
    } if (!y.signal) {
        var w = function () { if ("undefined" === typeof AbortController)
            return { controller: !1, signal: !1 }; var e = new AbortController; return { controller: e, signal: e.signal }; }(), x = w.controller, E = w.signal;
        (p = x) && (y.signal = E);
    } var k, _ = "OperationDefinition" === (k = Sd(e.query)).kind && "subscription" === k.operation, S = Rd(["defer"], e.query); if (s && !e.query.definitions.some((function (e) { return "OperationDefinition" === e.kind && "mutation" === e.operation; })) && (y.method = "GET"), S || _) {
        y.headers = y.headers || {};
        var O = "multipart/mixed;";
        _ && S && __DEV__ && vt.warn("Multipart-subscriptions do not support @defer"), _ ? O += "boundary=graphql;subscriptionSpec=1.0,application/json" : S && (O += "deferSpec=20220824,application/json"), y.headers.accept = O;
    } if ("GET" === y.method) {
        var N = function (e, t) { var n = [], r = function (e, t) { n.push("".concat(e, "=").concat(encodeURIComponent(t))); }; if ("query" in t && r("query", t.query), t.operationName && r("operationName", t.operationName), t.variables) {
            var i = void 0;
            try {
                i = Ld(t.variables, "Variables map");
            }
            catch (T) {
                return { parseError: T };
            }
            r("variables", i);
        } if (t.extensions) {
            var o = void 0;
            try {
                o = Ld(t.extensions, "Extensions map");
            }
            catch (T) {
                return { parseError: T };
            }
            r("extensions", o);
        } var a = "", u = e, s = e.indexOf("#"); -1 !== s && (a = e.substr(s), u = e.substr(0, s)); var l = -1 === u.indexOf("?") ? "?" : "&"; return { newURI: u + l + n.join("&") + a }; }(t, g), C = N.newURI, T = N.parseError;
        if (T)
            return fp(T);
        t = C;
    }
    else
        try {
            y.body = Ld(g, "Payload");
        }
        catch (T) {
            return fp(T);
        } return new od((function (n) { return (r || bt((function () { return fetch; })) || dp)(t, y).then((function (t) { var r; e.setContext({ response: t }); var i = null === (r = t.headers) || void 0 === r ? void 0 : r.get("content-type"); return null !== i && /^multipart\/mixed/i.test(i) ? function (e, t) { var n, r, i, o, a; return st(this, void 0, void 0, (function () { var u, s, l, c, f, d, p, h, v, m, y, g, b, w, x, E, k, _, S, O, N, C; return lt(this, (function (T) { switch (T.label) {
        case 0:
            if (void 0 === TextDecoder)
                throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
            u = new TextDecoder("utf-8"), s = null === (n = e.headers) || void 0 === n ? void 0 : n.get("content-type"), l = "boundary=", c = (null === s || void 0 === s ? void 0 : s.includes(l)) ? null === s || void 0 === s ? void 0 : s.substring((null === s || void 0 === s ? void 0 : s.indexOf(l)) + 9).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", f = "--".concat(c), d = "", p = Fd(e), h = !0, T.label = 1;
        case 1: return h ? [4, p.next()] : [3, 3];
        case 2:
            for (v = T.sent(), m = v.value, y = v.done, g = "string" === typeof m ? m : u.decode(m), h = !y, b = (d += g).indexOf(f); b > -1;) {
                if (w = void 0, N = [d.slice(0, b), d.slice(b + f.length)], d = N[1], (w = N[0]).trim()) {
                    if (x = w.indexOf("\r\n\r\n"), E = $d(w.slice(0, x)), (k = E["content-type"]) && -1 === k.toLowerCase().indexOf("application/json"))
                        throw new Error("Unsupported patch content type: application/json is required.");
                    _ = w.slice(x);
                    try {
                        S = Gd(e, _.replace("\r\n", "")), Object.keys(S).length > 1 || "data" in S || "incremental" in S || "errors" in S || "payload" in S ? Wd(S) ? (O = {}, "payload" in S && (O = at({}, S.payload)), "errors" in S && (O = at(at({}, O), { extensions: at(at({}, "extensions" in O ? O.extensions : null), (C = {}, C[dn] = S.errors, C)) })), null === (r = t.next) || void 0 === r || r.call(t, O)) : null === (i = t.next) || void 0 === i || i.call(t, S) : 1 === Object.keys(S).length && "hasNext" in S && !S.hasNext && (null === (o = t.complete) || void 0 === o || o.call(t));
                    }
                    catch (j) {
                        Yd(j, t);
                    }
                }
                b = d.indexOf(f);
            }
            return [3, 1];
        case 3: return null === (a = t.complete) || void 0 === a || a.call(t), [2];
    } })); })); }(t, n) : Jd(t, e, n); })).catch((function (e) { return Yd(e, n); })), function () { p && p.abort(); }; })); })); }, hp = Pd.execute, vp = function (e) { function t(t) { void 0 === t && (t = {}); var n = e.call(this, pp(t).request) || this; return n.options = t, n; } return ot(t, e), t; }(Pd), mp = function () { return Object.create(null); }, yp = Array.prototype, gp = yp.forEach, bp = yp.slice, wp = function () { function e(e, t) { void 0 === e && (e = !0), void 0 === t && (t = mp), this.weakness = e, this.makeData = t; } return e.prototype.lookup = function () { for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t]; return this.lookupArray(e); }, e.prototype.lookupArray = function (e) { var t = this; return gp.call(e, (function (e) { return t = t.getChildTrie(e); })), t.data || (t.data = this.makeData(bp.call(e))); }, e.prototype.getChildTrie = function (t) { var n = this.weakness && function (e) { switch (typeof e) {
        case "object": if (null === e)
            break;
        case "function": return !0;
    } return !1; }(t) ? this.weak || (this.weak = new WeakMap) : this.strong || (this.strong = new Map), r = n.get(t); return r || n.set(t, r = new e(this.weakness, this.makeData)), r; }, e; }();
    var xp, Ep, kp = function () { function e() { this.known = new (qt ? WeakSet : Set), this.pool = new wp(Vt), this.passes = new WeakMap, this.keysByJSON = new Map, this.empty = this.admit({}); } return e.prototype.isKnown = function (e) { return fn(e) && this.known.has(e); }, e.prototype.pass = function (e) { if (fn(e)) {
        var t = function (e) { return fn(e) ? kn(e) ? e.slice(0) : at({ __proto__: Object.getPrototypeOf(e) }, e) : e; }(e);
        return this.passes.set(t, e), t;
    } return e; }, e.prototype.admit = function (e) { var t = this; if (fn(e)) {
        var n = this.passes.get(e);
        if (n)
            return n;
        switch (Object.getPrototypeOf(e)) {
            case Array.prototype:
                if (this.known.has(e))
                    return e;
                var r = e.map(this.admit, this);
                return (u = this.pool.lookupArray(r)).array || (this.known.add(u.array = r), __DEV__ && Object.freeze(r)), u.array;
            case null:
            case Object.prototype:
                if (this.known.has(e))
                    return e;
                var i = Object.getPrototypeOf(e), o = [i], a = this.sortedKeys(e);
                o.push(a.json);
                var u, s = o.length;
                if (a.sorted.forEach((function (n) { o.push(t.admit(e[n])); })), !(u = this.pool.lookupArray(o)).object) {
                    var l = u.object = Object.create(i);
                    this.known.add(l), a.sorted.forEach((function (e, t) { l[e] = o[s + t]; })), __DEV__ && Object.freeze(l);
                }
                return u.object;
        }
    } return e; }, e.prototype.sortedKeys = function (e) { var t = Object.keys(e), n = this.pool.lookupArray(t); if (!n.keys) {
        t.sort();
        var r = JSON.stringify(t);
        (n.keys = this.keysByJSON.get(r)) || this.keysByJSON.set(r, n.keys = { sorted: t, json: r });
    } return n.keys; }, e; }(), _p = Object.assign((function (e) { if (fn(e)) {
        void 0 === xp && Sp();
        var t = xp.admit(e), n = Ep.get(t);
        return void 0 === n && Ep.set(t, n = JSON.stringify(t)), n;
    } return JSON.stringify(e); }), { reset: Sp });
    function Sp() { xp = new kp, Ep = new (Vt ? WeakMap : Map); }
    function Op(e, t, n) { return new od((function (r) { var i = r.next, o = r.error, a = r.complete, u = 0, s = !1, l = { then: function (e) { return new Promise((function (t) { return t(e()); })); } }; function c(e, t) { return e ? function (t) { ++u; var n = function () { return e(t); }; l = l.then(n, n).then((function (e) { --u, i && i.call(r, e), s && f.complete(); }), (function (e) { throw --u, e; })).catch((function (e) { o && o.call(r, e); })); } : function (e) { return t && t.call(r, e); }; } var f = { next: c(t, i), error: c(n, o), complete: function () { s = !0, u || a && a.call(r); } }, d = e.subscribe(f); return function () { return d.unsubscribe(); }; })); }
    function Np(e) { return _n(Cp(e)); }
    function Cp(e) { var t = _n(e.errors) ? e.errors.slice(0) : []; return Zd(e) && _n(e.incremental) && e.incremental.forEach((function (e) { e.errors && t.push.apply(t, e.errors); })), t; }
    var Tp = { kind: $n.FIELD, name: { kind: $n.NAME, value: "__typename" } };
    function jp(e, t) { return !e || e.selectionSet.selections.every((function (e) { return e.kind === $n.FRAGMENT_SPREAD && jp(t[e.name.value], t); })); }
    function Pp(e) { return jp(xd(e) || function (e) { __DEV__ ? vt("Document" === e.kind, 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : vt("Document" === e.kind, 51), __DEV__ ? vt(e.definitions.length <= 1, "Fragment must have exactly one definition.") : vt(e.definitions.length <= 1, 52); var t = e.definitions[0]; return __DEV__ ? vt("FragmentDefinition" === t.kind, "Must be a fragment definition.") : vt("FragmentDefinition" === t.kind, 53), t; }(e), ud(kd(e))) ? null : e; }
    function Ip(e) { var t = new Set, n = []; return e.forEach((function (e) { e.name ? t.add(e.name) : e.test && n.push(e.test); })), function (e) { return t.has(e.name.value) || n.some((function (t) { return t(e); })); }; }
    function Rp(e) { var t = new Map; return function (n) { void 0 === n && (n = e); var r = t.get(n); return r || t.set(n, r = { variables: new Set, fragmentSpreads: new Set }), r; }; }
    function Dp(e, t) { for (var n = Rp(""), r = Rp(""), i = function (e) { for (var t = 0, i = void 0; t < e.length && (i = e[t]); ++t)
        if (!kn(i)) {
            if (i.kind === $n.OPERATION_DEFINITION)
                return n(i.name && i.name.value);
            if (i.kind === $n.FRAGMENT_DEFINITION)
                return r(i.name.value);
        } return __DEV__ && vt.error("Could not find operation or fragment"), null; }, o = 0, a = t.definitions.length - 1; a >= 0; --a)
        t.definitions[a].kind === $n.OPERATION_DEFINITION && ++o; var u = Ip(e), s = e.some((function (e) { return e.remove; })), l = function (e) { return s && e && e.some(u); }, c = new Map, f = !1, d = { enter: function (e) { if (l(e.directives))
            return f = !0, null; } }, p = Af(t, { Field: d, InlineFragment: d, VariableDefinition: { enter: function () { return !1; } }, Variable: { enter: function (e, t, n, r, o) { var a = i(o); a && a.variables.add(e.name.value); } }, FragmentSpread: { enter: function (e, t, n, r, o) { if (l(e.directives))
                return f = !0, null; var a = i(o); a && a.fragmentSpreads.add(e.name.value); } }, FragmentDefinition: { enter: function (e, t, n, r) { c.set(JSON.stringify(r), e); }, leave: function (e, t, n, i) { return e === c.get(JSON.stringify(i)) ? e : o > 0 && e.selectionSet.selections.every((function (e) { return e.kind === $n.FIELD && "__typename" === e.name.value; })) ? (r(e.name.value).removed = !0, f = !0, null) : void 0; } }, Directive: { leave: function (e) { if (u(e))
                return f = !0, null; } } }); if (!f)
        return t; var h = function e(t) { return t.transitiveVars || (t.transitiveVars = new Set(t.variables), t.removed || t.fragmentSpreads.forEach((function (n) { e(r(n)).transitiveVars.forEach((function (e) { t.transitiveVars.add(e); })); }))), t; }, v = new Set; p.definitions.forEach((function (e) { e.kind === $n.OPERATION_DEFINITION ? h(n(e.name && e.name.value)).fragmentSpreads.forEach((function (e) { v.add(e); })) : e.kind !== $n.FRAGMENT_DEFINITION || 0 !== o || r(e.name.value).removed || v.add(e.name.value); })), v.forEach((function (e) { h(r(e)).fragmentSpreads.forEach((function (e) { v.add(e); })); })); var m = { enter: function (e) { if (t = e.name.value, !v.has(t) || r(t).removed)
            return null; var t; } }; return Pp(Af(p, { FragmentSpread: m, FragmentDefinition: m, OperationDefinition: { leave: function (e) { if (e.variableDefinitions) {
                var t = h(n(e.name && e.name.value)).transitiveVars;
                if (t.size < e.variableDefinitions.length)
                    return at(at({}, e), { variableDefinitions: e.variableDefinitions.filter((function (e) { return t.has(e.variable.name.value); })) });
            } } } })); }
    var Lp = Object.assign((function (e) { return Af(e, { SelectionSet: { enter: function (e, t, n) { if (!n || n.kind !== $n.OPERATION_DEFINITION) {
                var r = e.selections;
                if (r)
                    if (!r.some((function (e) { return bd(e) && ("__typename" === e.name.value || 0 === e.name.value.lastIndexOf("__", 0)); }))) {
                        var i = n;
                        if (!(bd(i) && i.directives && i.directives.some((function (e) { return "export" === e.name.value; }))))
                            return at(at({}, e), { selections: ct(ct([], r, !0), [Tp], !1) });
                    }
            } } } }); }), { added: function (e) { return e === Tp; } }), Ap = { test: function (e) { var t = "connection" === e.name.value; return t && (e.arguments && e.arguments.some((function (e) { return "key" === e.name.value; })) || __DEV__ && vt.warn("Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key.")), t; } };
    function Mp(e) { return "query" === Sd(e).operation ? e : Af(e, { OperationDefinition: { enter: function (e) { return at(at({}, e), { operation: "query" }); } } }); }
    var Fp = new Map;
    function Vp(e) { var t = Fp.get(e) || 1; return Fp.set(e, t + 1), "".concat(e, ":").concat(t, ":").concat(Math.random().toString(36).slice(2)); }
    function qp(e, t, n) { var r = []; e.forEach((function (e) { return e[t] && r.push(e); })), r.forEach((function (e) { return e[t](n); })); }
    function Up(e) { function t(t) { Object.defineProperty(e, t, { value: od }); } return Ut && Symbol.species && t(Symbol.species), t("@@species"), e; }
    function zp(e) { return e && "function" === typeof e.then; }
    var Qp = function (e) { function t(t) { var n = e.call(this, (function (e) { return n.addObserver(e), function () { return n.removeObserver(e); }; })) || this; return n.observers = new Set, n.promise = new Promise((function (e, t) { n.resolve = e, n.reject = t; })), n.handlers = { next: function (e) { null !== n.sub && (n.latest = ["next", e], n.notify("next", e), qp(n.observers, "next", e)); }, error: function (e) { var t = n.sub; null !== t && (t && setTimeout((function () { return t.unsubscribe(); })), n.sub = null, n.latest = ["error", e], n.reject(e), n.notify("error", e), qp(n.observers, "error", e)); }, complete: function () { var e = n, t = e.sub, r = e.sources; if (null !== t) {
            var i = (void 0 === r ? [] : r).shift();
            i ? zp(i) ? i.then((function (e) { return n.sub = e.subscribe(n.handlers); })) : n.sub = i.subscribe(n.handlers) : (t && setTimeout((function () { return t.unsubscribe(); })), n.sub = null, n.latest && "next" === n.latest[0] ? n.resolve(n.latest[1]) : n.resolve(), n.notify("complete"), qp(n.observers, "complete"));
        } } }, n.nextResultListeners = new Set, n.cancel = function (e) { n.reject(e), n.sources = [], n.handlers.complete(); }, n.promise.catch((function (e) { })), "function" === typeof t && (t = [new od(t)]), zp(t) ? t.then((function (e) { return n.start(e); }), n.handlers.error) : n.start(t), n; } return ot(t, e), t.prototype.start = function (e) { void 0 === this.sub && (this.sources = Array.from(e), this.handlers.complete()); }, t.prototype.deliverLastMessage = function (e) { if (this.latest) {
        var t = this.latest[0], n = e[t];
        n && n.call(e, this.latest[1]), null === this.sub && "next" === t && e.complete && e.complete();
    } }, t.prototype.addObserver = function (e) { this.observers.has(e) || (this.deliverLastMessage(e), this.observers.add(e)); }, t.prototype.removeObserver = function (e) { this.observers.delete(e) && this.observers.size < 1 && this.handlers.complete(); }, t.prototype.notify = function (e, t) { var n = this.nextResultListeners; n.size && (this.nextResultListeners = new Set, n.forEach((function (n) { return n(e, t); }))); }, t.prototype.beforeNext = function (e) { var t = !1; this.nextResultListeners.add((function (n, r) { t || (t = !0, e(n, r)); })); }, t; }(od);
    Up(Qp);
    var Bp = Object.prototype.toString;
    function Zp(e) { return Wp(e); }
    function Wp(e, t) { switch (Bp.call(e)) {
        case "[object Array]":
            if ((t = t || new Map).has(e))
                return t.get(e);
            var n = e.slice(0);
            return t.set(e, n), n.forEach((function (e, r) { n[r] = Wp(e, t); })), n;
        case "[object Object]":
            if ((t = t || new Map).has(e))
                return t.get(e);
            var r = Object.create(Object.getPrototypeOf(e));
            return t.set(e, r), Object.keys(e).forEach((function (n) { r[n] = Wp(e[n], t); })), r;
        default: return e;
    } }
    var Hp = Object.assign, Kp = Object.hasOwnProperty, $p = function (e) { function t(t) { var n = t.queryManager, r = t.queryInfo, i = t.options, o = e.call(this, (function (e) { try {
        var n = e._subscription._observer;
        n && !n.error && (n.error = Yp);
    }
    catch (t) { } var r = !o.observers.size; o.observers.add(e); var i = o.last; return i && i.error ? e.error && e.error(i.error) : i && i.result && e.next && e.next(i.result), r && o.reobserve().catch((function () { })), function () { o.observers.delete(e) && !o.observers.size && o.tearDownQuery(); }; })) || this; o.observers = new Set, o.subscriptions = new Set, o.queryInfo = r, o.queryManager = n, o.isTornDown = !1; var a = n.defaultOptions.watchQuery, u = (void 0 === a ? {} : a).fetchPolicy, s = void 0 === u ? "cache-first" : u, l = i.fetchPolicy, c = void 0 === l ? s : l, f = i.initialFetchPolicy, d = void 0 === f ? "standby" === c ? s : c : f; o.options = at(at({}, i), { initialFetchPolicy: d, fetchPolicy: c }), o.queryId = r.queryId || n.generateQueryId(); var p = xd(o.query); return o.queryName = p && p.name && p.name.value, o; } return ot(t, e), Object.defineProperty(t.prototype, "query", { get: function () { return this.queryManager.transform(this.options.query).document; }, enumerable: !1, configurable: !0 }), Object.defineProperty(t.prototype, "variables", { get: function () { return this.options.variables; }, enumerable: !1, configurable: !0 }), t.prototype.result = function () { var e = this; return new Promise((function (t, n) { var r = { next: function (n) { t(n), e.observers.delete(r), e.observers.size || e.queryManager.removeQuery(e.queryId), setTimeout((function () { i.unsubscribe(); }), 0); }, error: n }, i = e.subscribe(r); })); }, t.prototype.getCurrentResult = function (e) { void 0 === e && (e = !0); var t = this.getLastResult(!0), n = this.queryInfo.networkStatus || t && t.networkStatus || pn.ready, r = at(at({}, t), { loading: mn(n), networkStatus: n }), i = this.options.fetchPolicy, o = void 0 === i ? "cache-first" : i; if ("network-only" === o || "no-cache" === o || "standby" === o || this.queryManager.transform(this.options.query).hasForcedResolvers)
        ;
    else {
        var a = this.queryInfo.getDiff();
        (a.complete || this.options.returnPartialData) && (r.data = a.result), en(r.data, {}) && (r.data = void 0), a.complete ? (delete r.partial, !a.complete || r.networkStatus !== pn.loading || "cache-first" !== o && "cache-only" !== o || (r.networkStatus = pn.ready, r.loading = !1)) : r.partial = !0, !__DEV__ || a.complete || this.options.partialRefetch || r.loading || r.data || r.error || Jp(a.missing);
    } return e && this.updateLastResult(r), r; }, t.prototype.isDifferentFromLastResult = function (e, t) { return !this.last || !en(this.last.result, e) || t && !en(this.last.variables, t); }, t.prototype.getLast = function (e, t) { var n = this.last; if (n && n[e] && (!t || en(n.variables, this.variables)))
        return n[e]; }, t.prototype.getLastResult = function (e) { return this.getLast("result", e); }, t.prototype.getLastError = function (e) { return this.getLast("error", e); }, t.prototype.resetLastResults = function () { delete this.last, this.isTornDown = !1; }, t.prototype.resetQueryStoreErrors = function () { this.queryManager.resetErrors(this.queryId); }, t.prototype.refetch = function (e) { var t, n = { pollInterval: 0 }, r = this.options.fetchPolicy; if (n.fetchPolicy = "cache-and-network" === r ? r : "no-cache" === r ? "no-cache" : "network-only", __DEV__ && e && Kp.call(e, "variables")) {
        var i = _d(this.query), o = i.variableDefinitions;
        o && o.some((function (e) { return "variables" === e.variable.name.value; })) || __DEV__ && vt.warn("Called refetch(".concat(JSON.stringify(e), ") for query ").concat((null === (t = i.name) || void 0 === t ? void 0 : t.value) || JSON.stringify(i), ", which does not declare a $variables variable.\nDid you mean to call refetch(variables) instead of refetch({ variables })?"));
    } return e && !en(this.options.variables, e) && (n.variables = this.options.variables = at(at({}, this.options.variables), e)), this.queryInfo.resetLastWrite(), this.reobserve(n, pn.refetch); }, t.prototype.fetchMore = function (e) { var t = this, n = at(at({}, e.query ? e : at(at(at(at({}, this.options), { query: this.query }), e), { variables: at(at({}, this.options.variables), e.variables) })), { fetchPolicy: "no-cache" }), r = this.queryManager.generateQueryId(), i = this.queryInfo, o = i.networkStatus; i.networkStatus = pn.fetchMore, n.notifyOnNetworkStatusChange && this.observe(); var a = new Set; return this.queryManager.fetchQuery(r, n, pn.fetchMore).then((function (u) { return t.queryManager.removeQuery(r), i.networkStatus === pn.fetchMore && (i.networkStatus = o), t.queryManager.cache.batch({ update: function (r) { var i = e.updateQuery; i ? r.updateQuery({ query: t.query, variables: t.variables, returnPartialData: !0, optimistic: !1 }, (function (e) { return i(e, { fetchMoreResult: u.data, variables: n.variables }); })) : r.writeQuery({ query: n.query, variables: n.variables, data: u.data }); }, onWatchUpdated: function (e) { a.add(e.query); } }), u; })).finally((function () { a.has(t.query) || Gp(t); })); }, t.prototype.subscribeToMore = function (e) { var t = this, n = this.queryManager.startGraphQLSubscription({ query: e.document, variables: e.variables, context: e.context }).subscribe({ next: function (n) { var r = e.updateQuery; r && t.updateQuery((function (e, t) { var i = t.variables; return r(e, { subscriptionData: n, variables: i }); })); }, error: function (t) { e.onError ? e.onError(t) : __DEV__ && vt.error("Unhandled GraphQL subscription error", t); } }); return this.subscriptions.add(n), function () { t.subscriptions.delete(n) && n.unsubscribe(); }; }, t.prototype.setOptions = function (e) { return this.reobserve(e); }, t.prototype.setVariables = function (e) { return en(this.variables, e) ? this.observers.size ? this.result() : Promise.resolve() : (this.options.variables = e, this.observers.size ? this.reobserve({ fetchPolicy: this.options.initialFetchPolicy, variables: e }, pn.setVariables) : Promise.resolve()); }, t.prototype.updateQuery = function (e) { var t = this.queryManager, n = e(t.cache.diff({ query: this.options.query, variables: this.variables, returnPartialData: !0, optimistic: !1 }).result, { variables: this.variables }); n && (t.cache.writeQuery({ query: this.options.query, data: n, variables: this.variables }), t.broadcastQueries()); }, t.prototype.startPolling = function (e) { this.options.pollInterval = e, this.updatePolling(); }, t.prototype.stopPolling = function () { this.options.pollInterval = 0, this.updatePolling(); }, t.prototype.applyNextFetchPolicy = function (e, t) { if (t.nextFetchPolicy) {
        var n = t.fetchPolicy, r = void 0 === n ? "cache-first" : n, i = t.initialFetchPolicy, o = void 0 === i ? r : i;
        "standby" === r || ("function" === typeof t.nextFetchPolicy ? t.fetchPolicy = t.nextFetchPolicy(r, { reason: e, options: t, observable: this, initialFetchPolicy: o }) : t.fetchPolicy = "variables-changed" === e ? o : t.nextFetchPolicy);
    } return t.fetchPolicy; }, t.prototype.fetch = function (e, t) { return this.queryManager.setObservableQuery(this), this.queryManager.fetchConcastWithInfo(this.queryId, e, t); }, t.prototype.updatePolling = function () { var e = this; if (!this.queryManager.ssrMode) {
        var t = this.pollingInfo, n = this.options.pollInterval;
        if (n) {
            if (!t || t.interval !== n) {
                __DEV__ ? vt(n, "Attempted to start a polling query without a polling interval.") : vt(n, 13), (t || (this.pollingInfo = {})).interval = n;
                var r = function () { e.pollingInfo && (mn(e.queryInfo.networkStatus) ? i() : e.reobserve({ fetchPolicy: "no-cache" === e.options.initialFetchPolicy ? "no-cache" : "network-only" }, pn.poll).then(i, i)); }, i = function () { var t = e.pollingInfo; t && (clearTimeout(t.timeout), t.timeout = setTimeout(r, t.interval)); };
                i();
            }
        }
        else
            t && (clearTimeout(t.timeout), delete this.pollingInfo);
    } }, t.prototype.updateLastResult = function (e, t) { return void 0 === t && (t = this.variables), this.last = at(at({}, this.last), { result: this.queryManager.assumeImmutableResults ? e : Zp(e), variables: t }), _n(e.errors) || delete this.last.error, this.last; }, t.prototype.reobserveAsConcast = function (e, t) { var n = this; this.isTornDown = !1; var r = t === pn.refetch || t === pn.fetchMore || t === pn.poll, i = this.options.variables, o = this.options.fetchPolicy, a = un(this.options, e || {}), u = r ? a : Hp(this.options, a); r || (this.updatePolling(), e && e.variables && !en(e.variables, i) && "standby" !== u.fetchPolicy && u.fetchPolicy === o && (this.applyNextFetchPolicy("variables-changed", u), void 0 === t && (t = pn.setVariables))); var s = u.variables && at({}, u.variables), l = this.fetch(u, t), c = l.concast, f = l.fromLink, d = { next: function (e) { n.reportResult(e, s); }, error: function (e) { n.reportError(e, s); } }; return !r && f && (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = c, this.observer = d), c.addObserver(d), c; }, t.prototype.reobserve = function (e, t) { return this.reobserveAsConcast(e, t).promise; }, t.prototype.observe = function () { this.reportResult(this.getCurrentResult(!1), this.variables); }, t.prototype.reportResult = function (e, t) { var n = this.getLastError(); (n || this.isDifferentFromLastResult(e, t)) && ((n || !e.partial || this.options.returnPartialData) && this.updateLastResult(e, t), qp(this.observers, "next", e)); }, t.prototype.reportError = function (e, t) { var n = at(at({}, this.getLastResult()), { error: e, errors: e.graphQLErrors, networkStatus: pn.error, loading: !1 }); this.updateLastResult(n, t), qp(this.observers, "error", this.last.error = e); }, t.prototype.hasObservers = function () { return this.observers.size > 0; }, t.prototype.tearDownQuery = function () { this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach((function (e) { return e.unsubscribe(); })), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0); }, t; }(od);
    function Gp(e) { var t = e.options, n = t.fetchPolicy, r = t.nextFetchPolicy; return "cache-and-network" === n || "network-only" === n ? e.reobserve({ fetchPolicy: "cache-first", nextFetchPolicy: function () { return this.nextFetchPolicy = r, "function" === typeof r ? r.apply(this, arguments) : n; } }) : e.reobserve(); }
    function Yp(e) { __DEV__ && vt.error("Unhandled error", e.message, e.stack); }
    function Jp(e) { __DEV__ && e && __DEV__ && vt.debug("Missing cache result fields: ".concat(JSON.stringify(e)), e); }
    function Xp(e) { return e.kind === $n.FIELD || e.kind === $n.FRAGMENT_SPREAD || e.kind === $n.INLINE_FRAGMENT; }
    Up($p);
    var eh = null, th = {}, nh = 1;
    function rh(e) { try {
        return e();
    }
    catch (t) { } }
    var ih = "@wry/context:Slot", oh = rh((function () { return globalThis; })) || rh((function () { return global; })) || Object.create(null), ah = oh[ih] || Array[ih] || function (e) { try {
        Object.defineProperty(oh, ih, { value: e, enumerable: !1, writable: !1, configurable: !0 });
    }
    finally {
        return e;
    } }(function () { function e() { (0, c.Z)(this, e), this.id = ["slot", nh++, Date.now(), Math.random().toString(36).slice(2)].join(":"); } return (0, f.Z)(e, [{ key: "hasValue", value: function () { for (var e = eh; e; e = e.parent)
                if (this.id in e.slots) {
                    var t = e.slots[this.id];
                    if (t === th)
                        break;
                    return e !== eh && (eh.slots[this.id] = t), !0;
                } return eh && (eh.slots[this.id] = th), !1; } }, { key: "getValue", value: function () { if (this.hasValue())
                return eh.slots[this.id]; } }, { key: "withValue", value: function (e, t, n, r) { var i = o({ __proto__: null }, this.id, e), a = eh; eh = { parent: a, slots: i }; try {
                return t.apply(r, n);
            }
            finally {
                eh = a;
            } } }], [{ key: "bind", value: function (e) { var t = eh; return function () { var n = eh; try {
                return eh = t, e.apply(this, arguments);
            }
            finally {
                eh = n;
            } }; } }, { key: "noContext", value: function (e, t, n) { if (!eh)
                return e.apply(n, t); var r = eh; try {
                return eh = null, e.apply(n, t);
            }
            finally {
                eh = r;
            } } }]), e; }());
    ah.bind, ah.noContext;
    function uh() { }
    var sh, lh = function () { function e(e, t) { void 0 === e && (e = 1 / 0), void 0 === t && (t = uh), this.max = e, this.dispose = t, this.map = new Map, this.newest = null, this.oldest = null; } return e.prototype.has = function (e) { return this.map.has(e); }, e.prototype.get = function (e) { var t = this.getNode(e); return t && t.value; }, e.prototype.getNode = function (e) { var t = this.map.get(e); if (t && t !== this.newest) {
        var n = t.older, r = t.newer;
        r && (r.older = n), n && (n.newer = r), t.older = this.newest, t.older.newer = t, t.newer = null, this.newest = t, t === this.oldest && (this.oldest = r);
    } return t; }, e.prototype.set = function (e, t) { var n = this.getNode(e); return n ? n.value = t : (n = { key: e, value: t, newer: null, older: this.newest }, this.newest && (this.newest.newer = n), this.newest = n, this.oldest = this.oldest || n, this.map.set(e, n), n.value); }, e.prototype.clean = function () { for (; this.oldest && this.map.size > this.max;)
        this.delete(this.oldest.key); }, e.prototype.delete = function (e) { var t = this.map.get(e); return !!t && (t === this.newest && (this.newest = t.older), t === this.oldest && (this.oldest = t.newer), t.newer && (t.newer.older = t.older), t.older && (t.older.newer = t.newer), this.map.delete(e), this.dispose(t.value, e), !0); }, e; }(), ch = new ah, fh = Object.prototype.hasOwnProperty, dh = void 0 === (sh = Array.from) ? function (e) { var t = []; return e.forEach((function (e) { return t.push(e); })), t; } : sh;
    function ph(e) { var t = e.unsubscribe; "function" === typeof t && (e.unsubscribe = void 0, t()); }
    var hh = [], vh = 100;
    function mh(e, t) { if (!e)
        throw new Error(t || "assertion failure"); }
    function yh(e) { switch (e.length) {
        case 0: throw new Error("unknown value");
        case 1: return e[0];
        case 2: throw e[1];
    } }
    var gh = function () { function e(t) { this.fn = t, this.parents = new Set, this.childValues = new Map, this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++e.count; } return e.prototype.peek = function () { if (1 === this.value.length && !xh(this))
        return bh(this), this.value[0]; }, e.prototype.recompute = function (e) { return mh(!this.recomputing, "already recomputing"), bh(this), xh(this) ? function (e, t) { Ch(e), ch.withValue(e, wh, [e, t]), function (e, t) { if ("function" === typeof e.subscribe)
        try {
            ph(e), e.unsubscribe = e.subscribe.apply(null, t);
        }
        catch (Wr) {
            return e.setDirty(), !1;
        } return !0; }(e, t) && function (e) { if (e.dirty = !1, xh(e))
        return; kh(e); }(e); return yh(e.value); }(this, e) : yh(this.value); }, e.prototype.setDirty = function () { this.dirty || (this.dirty = !0, this.value.length = 0, Eh(this), ph(this)); }, e.prototype.dispose = function () { var e = this; this.setDirty(), Ch(this), _h(this, (function (t, n) { t.setDirty(), Th(t, e); })); }, e.prototype.forget = function () { this.dispose(); }, e.prototype.dependOn = function (e) { e.add(this), this.deps || (this.deps = hh.pop() || new Set), this.deps.add(e); }, e.prototype.forgetDeps = function () { var e = this; this.deps && (dh(this.deps).forEach((function (t) { return t.delete(e); })), this.deps.clear(), hh.push(this.deps), this.deps = null); }, e.count = 0, e; }();
    function bh(e) { var t = ch.getValue(); if (t)
        return e.parents.add(t), t.childValues.has(e) || t.childValues.set(e, []), xh(e) ? Sh(t, e) : Oh(t, e), t; }
    function wh(e, t) { e.recomputing = !0, e.value.length = 0; try {
        e.value[0] = e.fn.apply(null, t);
    }
    catch (Wr) {
        e.value[1] = Wr;
    } e.recomputing = !1; }
    function xh(e) { return e.dirty || !(!e.dirtyChildren || !e.dirtyChildren.size); }
    function Eh(e) { _h(e, Sh); }
    function kh(e) { _h(e, Oh); }
    function _h(e, t) { var n = e.parents.size; if (n)
        for (var r = dh(e.parents), i = 0; i < n; ++i)
            t(r[i], e); }
    function Sh(e, t) { mh(e.childValues.has(t)), mh(xh(t)); var n = !xh(e); if (e.dirtyChildren) {
        if (e.dirtyChildren.has(t))
            return;
    }
    else
        e.dirtyChildren = hh.pop() || new Set; e.dirtyChildren.add(t), n && Eh(e); }
    function Oh(e, t) { mh(e.childValues.has(t)), mh(!xh(t)); var n = e.childValues.get(t); 0 === n.length ? e.childValues.set(t, t.value.slice(0)) : function (e, t) { var n = e.length; return n > 0 && n === t.length && e[n - 1] === t[n - 1]; }(n, t.value) || e.setDirty(), Nh(e, t), xh(e) || kh(e); }
    function Nh(e, t) { var n = e.dirtyChildren; n && (n.delete(t), 0 === n.size && (hh.length < vh && hh.push(n), e.dirtyChildren = null)); }
    function Ch(e) { e.childValues.size > 0 && e.childValues.forEach((function (t, n) { Th(e, n); })), e.forgetDeps(), mh(null === e.dirtyChildren); }
    function Th(e, t) { t.parents.delete(e), e.childValues.delete(t), Nh(e, t); }
    var jh = { setDirty: !0, dispose: !0, forget: !0 };
    function Ph(e) { var t = new Map, n = e && e.subscribe; function r(e) { var r = ch.getValue(); if (r) {
        var i = t.get(e);
        i || t.set(e, i = new Set), r.dependOn(i), "function" === typeof n && (ph(i), i.unsubscribe = n(e));
    } } return r.dirty = function (e, n) { var r = t.get(e); if (r) {
        var i = n && fh.call(jh, n) ? n : "setDirty";
        dh(r).forEach((function (e) { return e[i](); })), t.delete(e), ph(r);
    } }, r; }
    function Ih() { var e = new wp("function" === typeof WeakMap); return function () { return e.lookupArray(arguments); }; }
    Ih();
    var Rh = new Set;
    function Dh(e, t) { void 0 === t && (t = Object.create(null)); var n = new lh(t.max || Math.pow(2, 16), (function (e) { return e.dispose(); })), r = t.keyArgs, i = t.makeCacheKey || Ih(), o = function () { var o = i.apply(null, r ? r.apply(null, arguments) : arguments); if (void 0 === o)
        return e.apply(null, arguments); var a = n.get(o); a || (n.set(o, a = new gh(e)), a.subscribe = t.subscribe, a.forget = function () { return n.delete(o); }); var u = a.recompute(Array.prototype.slice.call(arguments)); return n.set(o, a), Rh.add(n), ch.hasValue() || (Rh.forEach((function (e) { return e.clean(); })), Rh.clear()), u; }; function a(e) { var t = n.get(e); t && t.setDirty(); } function u(e) { var t = n.get(e); if (t)
        return t.peek(); } function s(e) { return n.delete(e); } return Object.defineProperty(o, "size", { get: function () { return n.map.size; }, configurable: !1, enumerable: !1 }), o.dirtyKey = a, o.dirty = function () { a(i.apply(null, arguments)); }, o.peekKey = u, o.peek = function () { return u(i.apply(null, arguments)); }, o.forgetKey = s, o.forget = function () { return s(i.apply(null, arguments)); }, o.makeCacheKey = i, o.getKey = r ? function () { return i.apply(null, r.apply(null, arguments)); } : i, Object.freeze(o); }
    var Lh = new ah, Ah = new WeakMap;
    function Mh(e) { var t = Ah.get(e); return t || Ah.set(e, t = { vars: new Set, dep: Ph() }), t; }
    function Fh(e) { Mh(e).vars.forEach((function (t) { return t.forgetCache(e); })); }
    function Vh(e) { var t = new Set, n = new Set, r = function r(o) { if (arguments.length > 0) {
        if (e !== o) {
            e = o, t.forEach((function (e) { Mh(e).dep.dirty(r), function (e) { e.broadcastWatches && e.broadcastWatches(); }(e); }));
            var a = Array.from(n);
            n.clear(), a.forEach((function (t) { return t(e); }));
        }
    }
    else {
        var u = Lh.getValue();
        u && (i(u), Mh(u).dep(r));
    } return e; }; r.onNextChange = function (e) { return n.add(e), function () { n.delete(e); }; }; var i = r.attachCache = function (e) { return t.add(e), Mh(e).vars.add(r), r; }; return r.forgetCache = function (e) { return t.delete(e); }, r; }
    var qh = function () { function e(e) { var t = e.cache, n = e.client, r = e.resolvers, i = e.fragmentMatcher; this.selectionsToResolveCache = new WeakMap, this.cache = t, n && (this.client = n), r && this.addResolvers(r), i && this.setFragmentMatcher(i); } return e.prototype.addResolvers = function (e) { var t = this; this.resolvers = this.resolvers || {}, Array.isArray(e) ? e.forEach((function (e) { t.resolvers = Ud(t.resolvers, e); })) : this.resolvers = Ud(this.resolvers, e); }, e.prototype.setResolvers = function (e) { this.resolvers = {}, this.addResolvers(e); }, e.prototype.getResolvers = function () { return this.resolvers || {}; }, e.prototype.runResolvers = function (e) { var t = e.document, n = e.remoteResult, r = e.context, i = e.variables, o = e.onlyRunForcedResolvers, a = void 0 !== o && o; return st(this, void 0, void 0, (function () { return lt(this, (function (e) { return t ? [2, this.resolveDocument(t, n.data, r, i, this.fragmentMatcher, a).then((function (e) { return at(at({}, n), { data: e.result }); }))] : [2, n]; })); })); }, e.prototype.setFragmentMatcher = function (e) { this.fragmentMatcher = e; }, e.prototype.getFragmentMatcher = function () { return this.fragmentMatcher; }, e.prototype.clientQuery = function (e) { return Rd(["client"], e) && this.resolvers ? e : null; }, e.prototype.serverQuery = function (e) { return function (e) { return wd(e), Dp([{ test: function (e) { return "client" === e.name.value; }, remove: !0 }], e); }(e); }, e.prototype.prepareContext = function (e) { var t = this.cache; return at(at({}, e), { cache: t, getCacheKey: function (e) { return t.identify(e); } }); }, e.prototype.addExportedVariables = function (e, t, n) { return void 0 === t && (t = {}), void 0 === n && (n = {}), st(this, void 0, void 0, (function () { return lt(this, (function (r) { return e ? [2, this.resolveDocument(e, this.buildRootValueFromCache(e, t) || {}, this.prepareContext(n), t).then((function (e) { return at(at({}, t), e.exportedVariables); }))] : [2, at({}, t)]; })); })); }, e.prototype.shouldForceResolvers = function (e) { var t = !1; return Af(e, { Directive: { enter: function (e) { if ("client" === e.name.value && e.arguments && (t = e.arguments.some((function (e) { return "always" === e.name.value && "BooleanValue" === e.value.kind && !0 === e.value.value; }))))
                return Lf; } } }), t; }, e.prototype.buildRootValueFromCache = function (e, t) { return this.cache.diff({ query: Mp(e), variables: t, returnPartialData: !0, optimistic: !1 }).result; }, e.prototype.resolveDocument = function (e, t, n, r, i, o) { return void 0 === n && (n = {}), void 0 === r && (r = {}), void 0 === i && (i = function () { return !0; }), void 0 === o && (o = !1), st(this, void 0, void 0, (function () { var a, u, s, l, c, f, d, p, h, v; return lt(this, (function (m) { return a = Sd(e), u = kd(e), s = ud(u), l = this.collectSelectionsToResolve(a, s), c = a.operation, f = c ? c.charAt(0).toUpperCase() + c.slice(1) : "Query", p = (d = this).cache, h = d.client, v = { fragmentMap: s, context: at(at({}, n), { cache: p, client: h }), variables: r, fragmentMatcher: i, defaultOperationType: f, exportedVariables: {}, selectionsToResolve: l, onlyRunForcedResolvers: o }, !1, [2, this.resolveSelectionSet(a.selectionSet, false, t, v).then((function (e) { return { result: e, exportedVariables: v.exportedVariables }; }))]; })); })); }, e.prototype.resolveSelectionSet = function (e, t, n, r) { return st(this, void 0, void 0, (function () { var i, o, a, u, s, l = this; return lt(this, (function (c) { return i = r.fragmentMap, o = r.context, a = r.variables, u = [n], s = function (e) { return st(l, void 0, void 0, (function () { var s, l; return lt(this, (function (c) { return (t || r.selectionsToResolve.has(e)) && Id(e, a) ? bd(e) ? [2, this.resolveField(e, t, n, r).then((function (t) { var n; "undefined" !== typeof t && u.push(((n = {})[yd(e)] = t, n)); }))] : (!function (e) { return "InlineFragment" === e.kind; }(e) ? (s = i[e.name.value], __DEV__ ? vt(s, "No fragment named ".concat(e.name.value)) : vt(s, 11)) : s = e, s && s.typeCondition && (l = s.typeCondition.name.value, r.fragmentMatcher(n, l, o)) ? [2, this.resolveSelectionSet(s.selectionSet, t, n, r).then((function (e) { u.push(e); }))] : [2]) : [2]; })); })); }, [2, Promise.all(e.selections.map(s)).then((function () { return zd(u); }))]; })); })); }, e.prototype.resolveField = function (e, t, n, r) { return st(this, void 0, void 0, (function () { var i, o, a, u, s, l, c, f, d, p = this; return lt(this, (function (h) { return n ? (i = r.variables, o = e.name.value, a = yd(e), u = o !== a, s = n[a] || n[o], l = Promise.resolve(s), r.onlyRunForcedResolvers && !this.shouldForceResolvers(e) || (c = n.__typename || r.defaultOperationType, (f = this.resolvers && this.resolvers[c]) && (d = f[u ? o : a]) && (l = Promise.resolve(Lh.withValue(this.cache, d, [n, md(e, i), r.context, { field: e, fragmentMap: r.fragmentMap }])))), [2, l.then((function (n) { var i, o; if (void 0 === n && (n = s), e.directives && e.directives.forEach((function (e) { "export" === e.name.value && e.arguments && e.arguments.forEach((function (e) { "as" === e.name.value && "StringValue" === e.value.kind && (r.exportedVariables[e.value.value] = n); })); })), !e.selectionSet)
            return n; if (null == n)
            return n; var a = null !== (o = null === (i = e.directives) || void 0 === i ? void 0 : i.some((function (e) { return "client" === e.name.value; }))) && void 0 !== o && o; return Array.isArray(n) ? p.resolveSubSelectedArray(e, t || a, n, r) : e.selectionSet ? p.resolveSelectionSet(e.selectionSet, t || a, n, r) : void 0; }))]) : [2, null]; })); })); }, e.prototype.resolveSubSelectedArray = function (e, t, n, r) { var i = this; return Promise.all(n.map((function (n) { return null === n ? null : Array.isArray(n) ? i.resolveSubSelectedArray(e, t, n, r) : e.selectionSet ? i.resolveSelectionSet(e.selectionSet, t, n, r) : void 0; }))); }, e.prototype.collectSelectionsToResolve = function (e, t) { var n = function (e) { return !Array.isArray(e); }, r = this.selectionsToResolveCache; return function e(i) { if (!r.has(i)) {
        var o = new Set;
        r.set(i, o), Af(i, { Directive: function (e, t, r, i, a) { "client" === e.name.value && a.forEach((function (e) { n(e) && Xp(e) && o.add(e); })); }, FragmentSpread: function (r, i, a, u, s) { var l = t[r.name.value]; __DEV__ ? vt(l, "No fragment named ".concat(r.name.value)) : vt(l, 12); var c = e(l); c.size > 0 && (s.forEach((function (e) { n(e) && Xp(e) && o.add(e); })), o.add(r), c.forEach((function (e) { o.add(e); }))); } });
    } return r.get(i); }(e); }, e; }(), Uh = new (Vt ? WeakMap : Map);
    function zh(e, t) { var n = e[t]; "function" === typeof n && (e[t] = function () { return Uh.set(e, (Uh.get(e) + 1) % 1e15), n.apply(this, arguments); }); }
    function Qh(e) { e.notifyTimeout && (clearTimeout(e.notifyTimeout), e.notifyTimeout = void 0); }
    var Bh = function () { function e(e, t) { void 0 === t && (t = e.generateQueryId()), this.queryId = t, this.listeners = new Set, this.document = null, this.lastRequestId = 1, this.subscriptions = new Set, this.stopped = !1, this.dirty = !1, this.observableQuery = null; var n = this.cache = e.cache; Uh.has(n) || (Uh.set(n, 0), zh(n, "evict"), zh(n, "modify"), zh(n, "reset")); } return e.prototype.init = function (e) { var t = e.networkStatus || pn.loading; return this.variables && this.networkStatus !== pn.loading && !en(this.variables, e.variables) && (t = pn.setVariables), en(e.variables, this.variables) || (this.lastDiff = void 0), Object.assign(this, { document: e.document, variables: e.variables, networkError: null, graphQLErrors: this.graphQLErrors || [], networkStatus: t }), e.observableQuery && this.setObservableQuery(e.observableQuery), e.lastRequestId && (this.lastRequestId = e.lastRequestId), this; }, e.prototype.reset = function () { Qh(this), this.dirty = !1; }, e.prototype.getDiff = function (e) { void 0 === e && (e = this.variables); var t = this.getDiffOptions(e); if (this.lastDiff && en(t, this.lastDiff.options))
        return this.lastDiff.diff; this.updateWatch(this.variables = e); var n = this.observableQuery; if (n && "no-cache" === n.options.fetchPolicy)
        return { complete: !1 }; var r = this.cache.diff(t); return this.updateLastDiff(r, t), r; }, e.prototype.updateLastDiff = function (e, t) { this.lastDiff = e ? { diff: e, options: t || this.getDiffOptions() } : void 0; }, e.prototype.getDiffOptions = function (e) { var t; return void 0 === e && (e = this.variables), { query: this.document, variables: e, returnPartialData: !0, optimistic: !0, canonizeResults: null === (t = this.observableQuery) || void 0 === t ? void 0 : t.options.canonizeResults }; }, e.prototype.setDiff = function (e) { var t = this, n = this.lastDiff && this.lastDiff.diff; this.updateLastDiff(e), this.dirty || en(n && n.result, e && e.result) || (this.dirty = !0, this.notifyTimeout || (this.notifyTimeout = setTimeout((function () { return t.notify(); }), 0))); }, e.prototype.setObservableQuery = function (e) { var t = this; e !== this.observableQuery && (this.oqListener && this.listeners.delete(this.oqListener), this.observableQuery = e, e ? (e.queryInfo = this, this.listeners.add(this.oqListener = function () { t.getDiff().fromOptimisticTransaction ? e.observe() : Gp(e); })) : delete this.oqListener); }, e.prototype.notify = function () { var e = this; Qh(this), this.shouldNotify() && this.listeners.forEach((function (t) { return t(e); })), this.dirty = !1; }, e.prototype.shouldNotify = function () { if (!this.dirty || !this.listeners.size)
        return !1; if (mn(this.networkStatus) && this.observableQuery) {
        var e = this.observableQuery.options.fetchPolicy;
        if ("cache-only" !== e && "cache-and-network" !== e)
            return !1;
    } return !0; }, e.prototype.stop = function () { if (!this.stopped) {
        this.stopped = !0, this.reset(), this.cancel(), this.cancel = e.prototype.cancel, this.subscriptions.forEach((function (e) { return e.unsubscribe(); }));
        var t = this.observableQuery;
        t && t.stopPolling();
    } }, e.prototype.cancel = function () { }, e.prototype.updateWatch = function (e) { var t = this; void 0 === e && (e = this.variables); var n = this.observableQuery; if (!n || "no-cache" !== n.options.fetchPolicy) {
        var r = at(at({}, this.getDiffOptions(e)), { watcher: this, callback: function (e) { return t.setDiff(e); } });
        this.lastWatch && en(r, this.lastWatch) || (this.cancel(), this.cancel = this.cache.watch(this.lastWatch = r));
    } }, e.prototype.resetLastWrite = function () { this.lastWrite = void 0; }, e.prototype.shouldWrite = function (e, t) { var n = this.lastWrite; return !(n && n.dmCount === Uh.get(this.cache) && en(t, n.variables) && en(e.data, n.result.data)); }, e.prototype.markResult = function (e, t, n, r) { var i = this, o = new Bd, a = _n(e.errors) ? e.errors.slice(0) : []; if (this.reset(), "incremental" in e && _n(e.incremental)) {
        var u = Hd(this.getDiff().result, e);
        e.data = u;
    }
    else if ("hasNext" in e && e.hasNext) {
        var s = this.getDiff();
        e.data = o.merge(s.result, e.data);
    } this.graphQLErrors = a, "no-cache" === n.fetchPolicy ? this.updateLastDiff({ result: e.data, complete: !0 }, this.getDiffOptions(n.variables)) : 0 !== r && (Zh(e, n.errorPolicy) ? this.cache.performTransaction((function (o) { if (i.shouldWrite(e, n.variables))
        o.writeQuery({ query: t, data: e.data, variables: n.variables, overwrite: 1 === r }), i.lastWrite = { result: e, variables: n.variables, dmCount: Uh.get(i.cache) };
    else if (i.lastDiff && i.lastDiff.diff.complete)
        return void (e.data = i.lastDiff.diff.result); var a = i.getDiffOptions(n.variables), u = o.diff(a); i.stopped || i.updateWatch(n.variables), i.updateLastDiff(u, a), u.complete && (e.data = u.result); })) : this.lastWrite = void 0); }, e.prototype.markReady = function () { return this.networkError = null, this.networkStatus = pn.ready; }, e.prototype.markError = function (e) { return this.networkStatus = pn.error, this.lastWrite = void 0, this.reset(), e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors), e.networkError && (this.networkError = e.networkError), e; }, e; }();
    function Zh(e, t) { void 0 === t && (t = "none"); var n = "ignore" === t || "all" === t, r = !Np(e); return !r && n && e.data && (r = !0), r; }
    var Wh = Object.prototype.hasOwnProperty, Hh = function () { function e(e) { var t = e.cache, n = e.link, r = e.defaultOptions, i = e.queryDeduplication, o = void 0 !== i && i, a = e.onBroadcast, u = e.ssrMode, s = void 0 !== u && u, l = e.clientAwareness, c = void 0 === l ? {} : l, f = e.localState, d = e.assumeImmutableResults; this.clientAwareness = {}, this.queries = new Map, this.fetchCancelFns = new Map, this.transformCache = new (Vt ? WeakMap : Map), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = new Map, this.cache = t, this.link = n, this.defaultOptions = r || Object.create(null), this.queryDeduplication = o, this.clientAwareness = c, this.localState = f || new qh({ cache: t }), this.ssrMode = s, this.assumeImmutableResults = !!d, (this.onBroadcast = a) && (this.mutationStore = Object.create(null)); } return e.prototype.stop = function () { var e = this; this.queries.forEach((function (t, n) { e.stopQueryNoBroadcast(n); })), this.cancelPendingFetches(__DEV__ ? new ht("QueryManager stopped while query was in flight") : new ht(14)); }, e.prototype.cancelPendingFetches = function (e) { this.fetchCancelFns.forEach((function (t) { return t(e); })), this.fetchCancelFns.clear(); }, e.prototype.mutate = function (e) { var t, n, r = e.mutation, i = e.variables, o = e.optimisticResponse, a = e.updateQueries, u = e.refetchQueries, s = void 0 === u ? [] : u, l = e.awaitRefetchQueries, c = void 0 !== l && l, f = e.update, d = e.onQueryUpdated, p = e.fetchPolicy, h = void 0 === p ? (null === (t = this.defaultOptions.mutate) || void 0 === t ? void 0 : t.fetchPolicy) || "network-only" : p, v = e.errorPolicy, m = void 0 === v ? (null === (n = this.defaultOptions.mutate) || void 0 === n ? void 0 : n.errorPolicy) || "none" : v, y = e.keepRootFields, g = e.context; return st(this, void 0, void 0, (function () { var e, t, n, u, l, p; return lt(this, (function (v) { switch (v.label) {
        case 0: return __DEV__ ? vt(r, "mutation option is required. You must specify your GraphQL document in the mutation option.") : vt(r, 15), __DEV__ ? vt("network-only" === h || "no-cache" === h, "Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write.") : vt("network-only" === h || "no-cache" === h, 16), e = this.generateMutationId(), t = this.transform(r), n = t.document, u = t.hasClientExports, r = this.cache.transformForLink(n), i = this.getVariables(r, i), u ? [4, this.localState.addExportedVariables(r, i, g)] : [3, 2];
        case 1: i = v.sent(), v.label = 2;
        case 2: return l = this.mutationStore && (this.mutationStore[e] = { mutation: r, variables: i, loading: !0, error: null }), o && this.markMutationOptimistic(o, { mutationId: e, document: r, variables: i, fetchPolicy: h, errorPolicy: m, context: g, updateQueries: a, update: f, keepRootFields: y }), this.broadcastQueries(), p = this, [2, new Promise((function (t, n) { return Op(p.getObservableFromLink(r, at(at({}, g), { optimisticResponse: o }), i, !1), (function (t) { if (Np(t) && "none" === m)
                throw new vn({ graphQLErrors: Cp(t) }); l && (l.loading = !1, l.error = null); var n = at({}, t); return "function" === typeof s && (s = s(n)), "ignore" === m && Np(n) && delete n.errors, p.markMutationResult({ mutationId: e, result: n, document: r, variables: i, fetchPolicy: h, errorPolicy: m, context: g, update: f, updateQueries: a, awaitRefetchQueries: c, refetchQueries: s, removeOptimistic: o ? e : void 0, onQueryUpdated: d, keepRootFields: y }); })).subscribe({ next: function (e) { p.broadcastQueries(), "hasNext" in e && !1 !== e.hasNext || t(e); }, error: function (t) { l && (l.loading = !1, l.error = t), o && p.cache.removeOptimistic(e), p.broadcastQueries(), n(t instanceof vn ? t : new vn({ networkError: t })); } }); }))];
    } })); })); }, e.prototype.markMutationResult = function (e, t) { var n = this; void 0 === t && (t = this.cache); var r = e.result, i = [], o = "no-cache" === e.fetchPolicy; if (!o && Zh(r, e.errorPolicy)) {
        if (Zd(r) || i.push({ result: r.data, dataId: "ROOT_MUTATION", query: e.document, variables: e.variables }), Zd(r) && _n(r.incremental)) {
            var a = t.diff({ id: "ROOT_MUTATION", query: this.transform(e.document).asQuery, variables: e.variables, optimistic: !1, returnPartialData: !0 }), u = void 0;
            a.result && (u = Hd(a.result, r)), "undefined" !== typeof u && (r.data = u, i.push({ result: u, dataId: "ROOT_MUTATION", query: e.document, variables: e.variables }));
        }
        var s = e.updateQueries;
        s && this.queries.forEach((function (e, o) { var a = e.observableQuery, u = a && a.queryName; if (u && Wh.call(s, u)) {
            var l = s[u], c = n.queries.get(o), f = c.document, d = c.variables, p = t.diff({ query: f, variables: d, returnPartialData: !0, optimistic: !1 }), h = p.result;
            if (p.complete && h) {
                var v = l(h, { mutationResult: r, queryName: f && Ed(f) || void 0, queryVariables: d });
                v && i.push({ result: v, dataId: "ROOT_QUERY", query: f, variables: d });
            }
        } }));
    } if (i.length > 0 || e.refetchQueries || e.update || e.onQueryUpdated || e.removeOptimistic) {
        var l = [];
        if (this.refetchQueries({ updateCache: function (t) { o || i.forEach((function (e) { return t.write(e); })); var a, u = e.update, s = !(Zd(a = r) || function (e) { return "hasNext" in e && "data" in e; }(a)) || Zd(r) && !r.hasNext; if (u) {
                if (!o) {
                    var l = t.diff({ id: "ROOT_MUTATION", query: n.transform(e.document).asQuery, variables: e.variables, optimistic: !1, returnPartialData: !0 });
                    l.complete && ("incremental" in (r = at(at({}, r), { data: l.result })) && delete r.incremental, "hasNext" in r && delete r.hasNext);
                }
                s && u(t, r, { context: e.context, variables: e.variables });
            } o || e.keepRootFields || !s || t.modify({ id: "ROOT_MUTATION", fields: function (e, t) { var n = t.fieldName, r = t.DELETE; return "__typename" === n ? e : r; } }); }, include: e.refetchQueries, optimistic: !1, removeOptimistic: e.removeOptimistic, onQueryUpdated: e.onQueryUpdated || null }).forEach((function (e) { return l.push(e); })), e.awaitRefetchQueries || e.onQueryUpdated)
            return Promise.all(l).then((function () { return r; }));
    } return Promise.resolve(r); }, e.prototype.markMutationOptimistic = function (e, t) { var n = this, r = "function" === typeof e ? e(t.variables) : e; return this.cache.recordOptimisticTransaction((function (e) { try {
        n.markMutationResult(at(at({}, t), { result: { data: r } }), e);
    }
    catch (i) {
        __DEV__ && vt.error(i);
    } }), t.mutationId); }, e.prototype.fetchQuery = function (e, t, n) { return this.fetchQueryObservable(e, t, n).promise; }, e.prototype.getQueryStore = function () { var e = Object.create(null); return this.queries.forEach((function (t, n) { e[n] = { variables: t.variables, networkStatus: t.networkStatus, networkError: t.networkError, graphQLErrors: t.graphQLErrors }; })), e; }, e.prototype.resetErrors = function (e) { var t = this.queries.get(e); t && (t.networkError = void 0, t.graphQLErrors = []); }, e.prototype.transform = function (e) { var t = this.transformCache; if (!t.has(e)) {
        var n = this.cache.transformDocument(e), r = Dp([Ap], wd(n)), i = this.localState.clientQuery(n), o = r && this.localState.serverQuery(r), a = { document: n, hasClientExports: Dd(n), hasForcedResolvers: this.localState.shouldForceResolvers(n), clientQuery: i, serverQuery: o, defaultVars: Od(xd(n)), asQuery: at(at({}, n), { definitions: n.definitions.map((function (e) { return "OperationDefinition" === e.kind && "query" !== e.operation ? at(at({}, e), { operation: "query" }) : e; })) }) }, u = function (e) { e && !t.has(e) && t.set(e, a); };
        u(e), u(n), u(i), u(o);
    } return t.get(e); }, e.prototype.getVariables = function (e, t) { return at(at({}, this.transform(e).defaultVars), t); }, e.prototype.watchQuery = function (e) { "undefined" === typeof (e = at(at({}, e), { variables: this.getVariables(e.query, e.variables) })).notifyOnNetworkStatusChange && (e.notifyOnNetworkStatusChange = !1); var t = new Bh(this), n = new $p({ queryManager: this, queryInfo: t, options: e }); return this.queries.set(n.queryId, t), t.init({ document: n.query, observableQuery: n, variables: n.variables }), n; }, e.prototype.query = function (e, t) { var n = this; return void 0 === t && (t = this.generateQueryId()), __DEV__ ? vt(e.query, "query option is required. You must specify your GraphQL document in the query option.") : vt(e.query, 17), __DEV__ ? vt("Document" === e.query.kind, 'You must wrap the query string in a "gql" tag.') : vt("Document" === e.query.kind, 18), __DEV__ ? vt(!e.returnPartialData, "returnPartialData option only supported on watchQuery.") : vt(!e.returnPartialData, 19), __DEV__ ? vt(!e.pollInterval, "pollInterval option only supported on watchQuery.") : vt(!e.pollInterval, 20), this.fetchQuery(t, e).finally((function () { return n.stopQuery(t); })); }, e.prototype.generateQueryId = function () { return String(this.queryIdCounter++); }, e.prototype.generateRequestId = function () { return this.requestIdCounter++; }, e.prototype.generateMutationId = function () { return String(this.mutationIdCounter++); }, e.prototype.stopQueryInStore = function (e) { this.stopQueryInStoreNoBroadcast(e), this.broadcastQueries(); }, e.prototype.stopQueryInStoreNoBroadcast = function (e) { var t = this.queries.get(e); t && t.stop(); }, e.prototype.clearStore = function (e) { return void 0 === e && (e = { discardWatches: !0 }), this.cancelPendingFetches(__DEV__ ? new ht("Store reset while query was in flight (not completed in link chain)") : new ht(21)), this.queries.forEach((function (e) { e.observableQuery ? e.networkStatus = pn.loading : e.stop(); })), this.mutationStore && (this.mutationStore = Object.create(null)), this.cache.reset(e); }, e.prototype.getObservableQueries = function (e) { var t = this; void 0 === e && (e = "active"); var n = new Map, r = new Map, i = new Set; return Array.isArray(e) && e.forEach((function (e) { var n; "string" === typeof e ? r.set(e, !1) : fn(n = e) && "Document" === n.kind && Array.isArray(n.definitions) ? r.set(t.transform(e).document, !1) : fn(e) && e.query && i.add(e); })), this.queries.forEach((function (t, i) { var o = t.observableQuery, a = t.document; if (o) {
        if ("all" === e)
            return void n.set(i, o);
        var u = o.queryName;
        if ("standby" === o.options.fetchPolicy || "active" === e && !o.hasObservers())
            return;
        ("active" === e || u && r.has(u) || a && r.has(a)) && (n.set(i, o), u && r.set(u, !0), a && r.set(a, !0));
    } })), i.size && i.forEach((function (e) { var r = Vp("legacyOneTimeQuery"), i = t.getQuery(r).init({ document: e.query, variables: e.variables }), o = new $p({ queryManager: t, queryInfo: i, options: at(at({}, e), { fetchPolicy: "network-only" }) }); vt(o.queryId === r), i.setObservableQuery(o), n.set(r, o); })), __DEV__ && r.size && r.forEach((function (e, t) { e || __DEV__ && vt.warn("Unknown query ".concat("string" === typeof t ? "named " : "").concat(JSON.stringify(t, null, 2), " requested in refetchQueries options.include array")); })), n; }, e.prototype.reFetchObservableQueries = function (e) { var t = this; void 0 === e && (e = !1); var n = []; return this.getObservableQueries(e ? "all" : "active").forEach((function (r, i) { var o = r.options.fetchPolicy; r.resetLastResults(), (e || "standby" !== o && "cache-only" !== o) && n.push(r.refetch()), t.getQuery(i).setDiff(null); })), this.broadcastQueries(), Promise.all(n); }, e.prototype.setObservableQuery = function (e) { this.getQuery(e.queryId).setObservableQuery(e); }, e.prototype.startGraphQLSubscription = function (e) { var t = this, n = e.query, r = e.fetchPolicy, i = e.errorPolicy, o = e.variables, a = e.context, u = void 0 === a ? {} : a; n = this.transform(n).document, o = this.getVariables(n, o); var s = function (e) { return t.getObservableFromLink(n, u, e).map((function (o) { "no-cache" !== r && (Zh(o, i) && t.cache.write({ query: n, result: o.data, dataId: "ROOT_SUBSCRIPTION", variables: e }), t.broadcastQueries()); var a = Np(o), u = function (e) { return !!e.extensions && Array.isArray(e.extensions[dn]); }(o); if (a || u) {
        var s = {};
        throw a && (s.graphQLErrors = o.errors), u && (s.protocolErrors = o.extensions[dn]), new vn(s);
    } return o; })); }; if (this.transform(n).hasClientExports) {
        var l = this.localState.addExportedVariables(n, o, u).then(s);
        return new od((function (e) { var t = null; return l.then((function (n) { return t = n.subscribe(e); }), e.error), function () { return t && t.unsubscribe(); }; }));
    } return s(o); }, e.prototype.stopQuery = function (e) { this.stopQueryNoBroadcast(e), this.broadcastQueries(); }, e.prototype.stopQueryNoBroadcast = function (e) { this.stopQueryInStoreNoBroadcast(e), this.removeQuery(e); }, e.prototype.removeQuery = function (e) { this.fetchCancelFns.delete(e), this.queries.has(e) && (this.getQuery(e).stop(), this.queries.delete(e)); }, e.prototype.broadcastQueries = function () { this.onBroadcast && this.onBroadcast(), this.queries.forEach((function (e) { return e.notify(); })); }, e.prototype.getLocalState = function () { return this.localState; }, e.prototype.getObservableFromLink = function (e, t, n, r) { var i, o, a = this; void 0 === r && (r = null !== (i = null === t || void 0 === t ? void 0 : t.queryDeduplication) && void 0 !== i ? i : this.queryDeduplication); var u = this.transform(e).serverQuery; if (u) {
        var s = this.inFlightLinkObservables, l = this.link, c = { query: u, variables: n, operationName: Ed(u) || void 0, context: this.prepareContext(at(at({}, t), { forceFetch: !r })) };
        if (t = c.context, r) {
            var f = s.get(u) || new Map;
            s.set(u, f);
            var d = _p(n);
            if (!(o = f.get(d))) {
                var p = new Qp([hp(l, c)]);
                f.set(d, o = p), p.beforeNext((function () { f.delete(d) && f.size < 1 && s.delete(u); }));
            }
        }
        else
            o = new Qp([hp(l, c)]);
    }
    else
        o = new Qp([od.of({ data: {} })]), t = this.prepareContext(t); var h = this.transform(e).clientQuery; return h && (o = Op(o, (function (e) { return a.localState.runResolvers({ document: h, remoteResult: e, context: t, variables: n }); }))), o; }, e.prototype.getResultsFromLink = function (e, t, n) { var r = e.lastRequestId = this.generateRequestId(), i = this.cache.transformForLink(this.transform(e.document).document); return Op(this.getObservableFromLink(i, n.context, n.variables), (function (o) { var a = Cp(o), u = a.length > 0; if (r >= e.lastRequestId) {
        if (u && "none" === n.errorPolicy)
            throw e.markError(new vn({ graphQLErrors: a }));
        e.markResult(o, i, n, t), e.markReady();
    } var s = { data: o.data, loading: !1, networkStatus: pn.ready }; return u && "ignore" !== n.errorPolicy && (s.errors = a, s.networkStatus = pn.error), s; }), (function (t) { var n = t.hasOwnProperty("graphQLErrors") ? t : new vn({ networkError: t }); throw r >= e.lastRequestId && e.markError(n), n; })); }, e.prototype.fetchQueryObservable = function (e, t, n) { return this.fetchConcastWithInfo(e, t, n).concast; }, e.prototype.fetchConcastWithInfo = function (e, t, n) { var r = this; void 0 === n && (n = pn.loading); var i, o, a = this.transform(t.query).document, u = this.getVariables(a, t.variables), s = this.getQuery(e), l = this.defaultOptions.watchQuery, c = t.fetchPolicy, f = void 0 === c ? l && l.fetchPolicy || "cache-first" : c, d = t.errorPolicy, p = void 0 === d ? l && l.errorPolicy || "none" : d, h = t.returnPartialData, v = void 0 !== h && h, m = t.notifyOnNetworkStatusChange, y = void 0 !== m && m, g = t.context, b = void 0 === g ? {} : g, w = Object.assign({}, t, { query: a, variables: u, fetchPolicy: f, errorPolicy: p, returnPartialData: v, notifyOnNetworkStatusChange: y, context: b }), x = function (e) { w.variables = e; var i = r.fetchQueryByPolicy(s, w, n); return "standby" !== w.fetchPolicy && i.sources.length > 0 && s.observableQuery && s.observableQuery.applyNextFetchPolicy("after-fetch", t), i; }, E = function () { return r.fetchCancelFns.delete(e); }; if (this.fetchCancelFns.set(e, (function (e) { E(), setTimeout((function () { return i.cancel(e); })); })), this.transform(w.query).hasClientExports)
        i = new Qp(this.localState.addExportedVariables(w.query, w.variables, w.context).then(x).then((function (e) { return e.sources; }))), o = !0;
    else {
        var k = x(w.variables);
        o = k.fromLink, i = new Qp(k.sources);
    } return i.promise.then(E, E), { concast: i, fromLink: o }; }, e.prototype.refetchQueries = function (e) { var t = this, n = e.updateCache, r = e.include, i = e.optimistic, o = void 0 !== i && i, a = e.removeOptimistic, u = void 0 === a ? o ? Vp("refetchQueries") : void 0 : a, s = e.onQueryUpdated, l = new Map; r && this.getObservableQueries(r).forEach((function (e, n) { l.set(n, { oq: e, lastDiff: t.getQuery(n).getDiff() }); })); var c = new Map; return n && this.cache.batch({ update: n, optimistic: o && u || !1, removeOptimistic: u, onWatchUpdated: function (e, t, n) { var r = e.watcher instanceof Bh && e.watcher.observableQuery; if (r) {
            if (s) {
                l.delete(r.queryId);
                var i = s(r, t, n);
                return !0 === i && (i = r.refetch()), !1 !== i && c.set(r, i), i;
            }
            null !== s && l.set(r.queryId, { oq: r, lastDiff: n, diff: t });
        } } }), l.size && l.forEach((function (e, n) { var r, i = e.oq, o = e.lastDiff, a = e.diff; if (s) {
        if (!a) {
            var u = i.queryInfo;
            u.reset(), a = u.getDiff();
        }
        r = s(i, a, o);
    } s && !0 !== r || (r = i.refetch()), !1 !== r && c.set(i, r), n.indexOf("legacyOneTimeQuery") >= 0 && t.stopQueryNoBroadcast(n); })), u && this.cache.removeOptimistic(u), c; }, e.prototype.fetchQueryByPolicy = function (e, t, n) { var r = this, i = t.query, o = t.variables, a = t.fetchPolicy, u = t.refetchWritePolicy, s = t.errorPolicy, l = t.returnPartialData, c = t.context, f = t.notifyOnNetworkStatusChange, d = e.networkStatus; e.init({ document: this.transform(i).document, variables: o, networkStatus: n }); var p = function () { return e.getDiff(o); }, h = function (t, n) { void 0 === n && (n = e.networkStatus || pn.loading); var a = t.result; !__DEV__ || l || en(a, {}) || Jp(t.missing); var u = function (e) { return od.of(at({ data: e, loading: mn(n), networkStatus: n }, t.complete ? null : { partial: !0 })); }; return a && r.transform(i).hasForcedResolvers ? r.localState.runResolvers({ document: i, remoteResult: { data: a }, context: c, variables: o, onlyRunForcedResolvers: !0 }).then((function (e) { return u(e.data || void 0); })) : "none" === s && n === pn.refetch && Array.isArray(t.missing) ? u(void 0) : u(a); }, v = "no-cache" === a ? 0 : n === pn.refetch && "merge" !== u ? 1 : 2, m = function () { return r.getResultsFromLink(e, v, { variables: o, context: c, fetchPolicy: a, errorPolicy: s }); }, y = f && "number" === typeof d && d !== n && mn(n); switch (a) {
        default:
        case "cache-first": return (g = p()).complete ? { fromLink: !1, sources: [h(g, e.markReady())] } : l || y ? { fromLink: !0, sources: [h(g), m()] } : { fromLink: !0, sources: [m()] };
        case "cache-and-network":
            var g;
            return (g = p()).complete || l || y ? { fromLink: !0, sources: [h(g), m()] } : { fromLink: !0, sources: [m()] };
        case "cache-only": return { fromLink: !1, sources: [h(p(), e.markReady())] };
        case "network-only": return y ? { fromLink: !0, sources: [h(p()), m()] } : { fromLink: !0, sources: [m()] };
        case "no-cache": return y ? { fromLink: !0, sources: [h(e.getDiff()), m()] } : { fromLink: !0, sources: [m()] };
        case "standby": return { fromLink: !1, sources: [] };
    } }, e.prototype.getQuery = function (e) { return e && !this.queries.has(e) && this.queries.set(e, new Bh(this, e)), this.queries.get(e); }, e.prototype.prepareContext = function (e) { void 0 === e && (e = {}); var t = this.localState.prepareContext(e); return at(at({}, t), { clientAwareness: this.clientAwareness }); }, e; }(), Kh = !1, $h = function () { function e(e) { var t = this; this.resetStoreCallbacks = [], this.clearStoreCallbacks = []; var n = e.uri, r = e.credentials, i = e.headers, o = e.cache, a = e.ssrMode, u = void 0 !== a && a, s = e.ssrForceFetchDelay, l = void 0 === s ? 0 : s, c = e.connectToDevTools, f = void 0 === c ? "object" === typeof window && !window.__APOLLO_CLIENT__ && __DEV__ : c, d = e.queryDeduplication, p = void 0 === d || d, h = e.defaultOptions, v = e.assumeImmutableResults, m = void 0 !== v && v, y = e.resolvers, g = e.typeDefs, b = e.fragmentMatcher, w = e.name, x = e.version, E = e.link; if (E || (E = n ? new vp({ uri: n, credentials: r, headers: i }) : Pd.empty()), !o)
        throw __DEV__ ? new ht("To initialize Apollo Client, you must specify a 'cache' property in the options object. \nFor more information, please visit: https://go.apollo.dev/c/docs") : new ht(9); if (this.link = E, this.cache = o, this.disableNetworkFetches = u || l > 0, this.queryDeduplication = p, this.defaultOptions = h || Object.create(null), this.typeDefs = g, l && setTimeout((function () { return t.disableNetworkFetches = !1; }), l), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), f && "object" === typeof window && (window.__APOLLO_CLIENT__ = this), !Kh && f && __DEV__ && (Kh = !0, "undefined" !== typeof window && window.document && window.top === window.self && !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__)) {
        var k = window.navigator, _ = k && k.userAgent, S = void 0;
        "string" === typeof _ && (_.indexOf("Chrome/") > -1 ? S = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : _.indexOf("Firefox/") > -1 && (S = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), S && __DEV__ && vt.log("Download the Apollo DevTools for a better development experience: " + S);
    } this.version = "3.7.14", this.localState = new qh({ cache: o, client: this, resolvers: y, fragmentMatcher: b }), this.queryManager = new Hh({ cache: this.cache, link: this.link, defaultOptions: this.defaultOptions, queryDeduplication: p, ssrMode: u, clientAwareness: { name: w, version: x }, localState: this.localState, assumeImmutableResults: m, onBroadcast: f ? function () { t.devToolsHookCb && t.devToolsHookCb({ action: {}, state: { queries: t.queryManager.getQueryStore(), mutations: t.queryManager.mutationStore || {} }, dataWithOptimisticResults: t.cache.extract(!0) }); } : void 0 }); } return e.prototype.stop = function () { this.queryManager.stop(); }, e.prototype.watchQuery = function (e) { return this.defaultOptions.watchQuery && (e = sn(this.defaultOptions.watchQuery, e)), !this.disableNetworkFetches || "network-only" !== e.fetchPolicy && "cache-and-network" !== e.fetchPolicy || (e = at(at({}, e), { fetchPolicy: "cache-first" })), this.queryManager.watchQuery(e); }, e.prototype.query = function (e) { return this.defaultOptions.query && (e = sn(this.defaultOptions.query, e)), __DEV__ ? vt("cache-and-network" !== e.fetchPolicy, "The cache-and-network fetchPolicy does not work with client.query, because client.query can only return a single result. Please use client.watchQuery to receive multiple results from the cache and the network, or consider using a different fetchPolicy, such as cache-first or network-only.") : vt("cache-and-network" !== e.fetchPolicy, 10), this.disableNetworkFetches && "network-only" === e.fetchPolicy && (e = at(at({}, e), { fetchPolicy: "cache-first" })), this.queryManager.query(e); }, e.prototype.mutate = function (e) { return this.defaultOptions.mutate && (e = sn(this.defaultOptions.mutate, e)), this.queryManager.mutate(e); }, e.prototype.subscribe = function (e) { return this.queryManager.startGraphQLSubscription(e); }, e.prototype.readQuery = function (e, t) { return void 0 === t && (t = !1), this.cache.readQuery(e, t); }, e.prototype.readFragment = function (e, t) { return void 0 === t && (t = !1), this.cache.readFragment(e, t); }, e.prototype.writeQuery = function (e) { var t = this.cache.writeQuery(e); return !1 !== e.broadcast && this.queryManager.broadcastQueries(), t; }, e.prototype.writeFragment = function (e) { var t = this.cache.writeFragment(e); return !1 !== e.broadcast && this.queryManager.broadcastQueries(), t; }, e.prototype.__actionHookForDevTools = function (e) { this.devToolsHookCb = e; }, e.prototype.__requestRaw = function (e) { return hp(this.link, e); }, e.prototype.resetStore = function () { var e = this; return Promise.resolve().then((function () { return e.queryManager.clearStore({ discardWatches: !1 }); })).then((function () { return Promise.all(e.resetStoreCallbacks.map((function (e) { return e(); }))); })).then((function () { return e.reFetchObservableQueries(); })); }, e.prototype.clearStore = function () { var e = this; return Promise.resolve().then((function () { return e.queryManager.clearStore({ discardWatches: !0 }); })).then((function () { return Promise.all(e.clearStoreCallbacks.map((function (e) { return e(); }))); })); }, e.prototype.onResetStore = function (e) { var t = this; return this.resetStoreCallbacks.push(e), function () { t.resetStoreCallbacks = t.resetStoreCallbacks.filter((function (t) { return t !== e; })); }; }, e.prototype.onClearStore = function (e) { var t = this; return this.clearStoreCallbacks.push(e), function () { t.clearStoreCallbacks = t.clearStoreCallbacks.filter((function (t) { return t !== e; })); }; }, e.prototype.reFetchObservableQueries = function (e) { return this.queryManager.reFetchObservableQueries(e); }, e.prototype.refetchQueries = function (e) { var t = this.queryManager.refetchQueries(e), n = [], r = []; t.forEach((function (e, t) { n.push(t), r.push(e); })); var i = Promise.all(r); return i.queries = n, i.results = r, i.catch((function (e) { __DEV__ && vt.debug("In client.refetchQueries, Promise.all promise rejected with error ".concat(e)); })), i; }, e.prototype.getObservableQueries = function (e) { return void 0 === e && (e = "active"), this.queryManager.getObservableQueries(e); }, e.prototype.extract = function (e) { return this.cache.extract(e); }, e.prototype.restore = function (e) { return this.cache.restore(e); }, e.prototype.addResolvers = function (e) { this.localState.addResolvers(e); }, e.prototype.setResolvers = function (e) { this.localState.setResolvers(e); }, e.prototype.getResolvers = function () { return this.localState.getResolvers(); }, e.prototype.setLocalStateFragmentMatcher = function (e) { this.localState.setFragmentMatcher(e); }, e.prototype.setLink = function (e) { this.link = this.queryManager.link = e; }, e; }(), Gh = function () { function e() { this.getFragmentDoc = Dh(ad); } return e.prototype.batch = function (e) { var t, n = this, r = "string" === typeof e.optimistic ? e.optimistic : !1 === e.optimistic ? null : void 0; return this.performTransaction((function () { return t = e.update(n); }), r), t; }, e.prototype.recordOptimisticTransaction = function (e, t) { this.performTransaction(e, t); }, e.prototype.transformDocument = function (e) { return e; }, e.prototype.transformForLink = function (e) { return e; }, e.prototype.identify = function (e) { }, e.prototype.gc = function () { return []; }, e.prototype.modify = function (e) { return !1; }, e.prototype.readQuery = function (e, t) { return void 0 === t && (t = !!e.optimistic), this.read(at(at({}, e), { rootId: e.id || "ROOT_QUERY", optimistic: t })); }, e.prototype.readFragment = function (e, t) { return void 0 === t && (t = !!e.optimistic), this.read(at(at({}, e), { query: this.getFragmentDoc(e.fragment, e.fragmentName), rootId: e.id, optimistic: t })); }, e.prototype.writeQuery = function (e) { var t = e.id, n = e.data, r = ut(e, ["id", "data"]); return this.write(Object.assign(r, { dataId: t || "ROOT_QUERY", result: n })); }, e.prototype.writeFragment = function (e) { var t = e.id, n = e.data, r = e.fragment, i = e.fragmentName, o = ut(e, ["id", "data", "fragment", "fragmentName"]); return this.write(Object.assign(o, { query: this.getFragmentDoc(r, i), dataId: t, result: n })); }, e.prototype.updateQuery = function (e, t) { return this.batch({ update: function (n) { var r = n.readQuery(e), i = t(r); return void 0 === i || null === i ? r : (n.writeQuery(at(at({}, e), { data: i })), i); } }); }, e.prototype.updateFragment = function (e, t) { return this.batch({ update: function (n) { var r = n.readFragment(e), i = t(r); return void 0 === i || null === i ? r : (n.writeFragment(at(at({}, e), { data: i })), i); } }); }, e; }(), Yh = function (e) { function t(n, r, i, o) { var a, u = e.call(this, n) || this; if (u.message = n, u.path = r, u.query = i, u.variables = o, Array.isArray(u.path)) {
        u.missing = u.message;
        for (var s = u.path.length - 1; s >= 0; --s)
            u.missing = ((a = {})[u.path[s]] = u.missing, a);
    }
    else
        u.missing = u.path; return u.__proto__ = t.prototype, u; } return ot(t, e), t; }(Error), Jh = Object.prototype.hasOwnProperty;
    function Xh(e) { return null === e || void 0 === e; }
    function ev(e, t) { var n = e.__typename, r = e.id, i = e._id; if ("string" === typeof n && (t && (t.keyObject = Xh(r) ? Xh(i) ? void 0 : { _id: i } : { id: r }), Xh(r) && !Xh(i) && (r = i), !Xh(r)))
        return "".concat(n, ":").concat("number" === typeof r || "string" === typeof r ? r : JSON.stringify(r)); }
    var tv = { dataIdFromObject: ev, addTypename: !0, resultCaching: !0, canonizeResults: !1 };
    function nv(e) { var t = e.canonizeResults; return void 0 === t ? tv.canonizeResults : t; }
    var rv = /^[_a-z][_0-9a-z]*/i;
    function iv(e) { var t = e.match(rv); return t ? t[0] : e; }
    function ov(e, t, n) { return !!fn(t) && (kn(t) ? t.every((function (t) { return ov(e, t, n); })) : e.selections.every((function (e) { if (bd(e) && Id(e, n)) {
        var r = yd(e);
        return Jh.call(t, r) && (!e.selectionSet || ov(e.selectionSet, t[r], n));
    } return !0; }))); }
    function av(e) { return fn(e) && !cd(e) && !kn(e); }
    function uv(e, t) { var n = ud(kd(e)); return { fragmentMap: n, lookupFragment: function (e) { var r = n[e]; return !r && t && (r = t.lookup(e)), r || null; } }; }
    var sv = Object.create(null), lv = function () { return sv; }, cv = Object.create(null), fv = function () { function e(e, t) { var n = this; this.policies = e, this.group = t, this.data = Object.create(null), this.rootIds = Object.create(null), this.refs = Object.create(null), this.getFieldValue = function (e, t) { return En(cd(e) ? n.get(e.__ref, t) : e && e[t]); }, this.canRead = function (e) { return cd(e) ? n.has(e.__ref) : "object" === typeof e; }, this.toReference = function (e, t) { if ("string" === typeof e)
        return ld(e); if (cd(e))
        return e; var r = n.policies.identify(e)[0]; if (r) {
        var i = ld(r);
        return t && n.merge(r, e), i;
    } }; } return e.prototype.toObject = function () { return at({}, this.data); }, e.prototype.has = function (e) { return void 0 !== this.lookup(e, !0); }, e.prototype.get = function (e, t) { if (this.group.depend(e, t), Jh.call(this.data, e)) {
        var n = this.data[e];
        if (n && Jh.call(n, t))
            return n[t];
    } return "__typename" === t && Jh.call(this.policies.rootTypenamesById, e) ? this.policies.rootTypenamesById[e] : this instanceof vv ? this.parent.get(e, t) : void 0; }, e.prototype.lookup = function (e, t) { return t && this.group.depend(e, "__exists"), Jh.call(this.data, e) ? this.data[e] : this instanceof vv ? this.parent.lookup(e, t) : this.policies.rootTypenamesById[e] ? Object.create(null) : void 0; }, e.prototype.merge = function (e, t) { var n, r = this; cd(e) && (e = e.__ref), cd(t) && (t = t.__ref); var i = "string" === typeof e ? this.lookup(n = e) : e, o = "string" === typeof t ? this.lookup(n = t) : t; if (o) {
        __DEV__ ? vt("string" === typeof n, "store.merge expects a string ID") : vt("string" === typeof n, 1);
        var a = new Bd(yv).merge(i, o);
        if (this.data[n] = a, a !== i && (delete this.refs[n], this.group.caching)) {
            var u = Object.create(null);
            i || (u.__exists = 1), Object.keys(o).forEach((function (e) { if (!i || i[e] !== a[e]) {
                u[e] = 1;
                var t = iv(e);
                t === e || r.policies.hasKeyArgs(a.__typename, t) || (u[t] = 1), void 0 !== a[e] || r instanceof vv || delete a[e];
            } })), !u.__typename || i && i.__typename || this.policies.rootTypenamesById[n] !== a.__typename || delete u.__typename, Object.keys(u).forEach((function (e) { return r.group.dirty(n, e); }));
        }
    } }, e.prototype.modify = function (e, t) { var n = this, r = this.lookup(e); if (r) {
        var i = Object.create(null), o = !1, a = !0, u = { DELETE: sv, INVALIDATE: cv, isReference: cd, toReference: this.toReference, canRead: this.canRead, readField: function (t, r) { return n.policies.readField("string" === typeof t ? { fieldName: t, from: r || ld(e) } : t, { store: n }); } };
        if (Object.keys(r).forEach((function (s) { var l = iv(s), c = r[s]; if (void 0 !== c) {
            var f = "function" === typeof t ? t : t[s] || t[l];
            if (f) {
                var d = f === lv ? sv : f(En(c), at(at({}, u), { fieldName: l, storeFieldName: s, storage: n.getStorage(e, s) }));
                d === cv ? n.group.dirty(e, s) : (d === sv && (d = void 0), d !== c && (i[s] = d, o = !0, c = d));
            }
            void 0 !== c && (a = !1);
        } })), o)
            return this.merge(e, i), a && (this instanceof vv ? this.data[e] = void 0 : delete this.data[e], this.group.dirty(e, "__exists")), !0;
    } return !1; }, e.prototype.delete = function (e, t, n) { var r, i = this.lookup(e); if (i) {
        var o = this.getFieldValue(i, "__typename"), a = t && n ? this.policies.getStoreFieldName({ typename: o, fieldName: t, args: n }) : t;
        return this.modify(e, a ? ((r = {})[a] = lv, r) : lv);
    } return !1; }, e.prototype.evict = function (e, t) { var n = !1; return e.id && (Jh.call(this.data, e.id) && (n = this.delete(e.id, e.fieldName, e.args)), this instanceof vv && this !== t && (n = this.parent.evict(e, t) || n), (e.fieldName || n) && this.group.dirty(e.id, e.fieldName || "__exists")), n; }, e.prototype.clear = function () { this.replace(null); }, e.prototype.extract = function () { var e = this, t = this.toObject(), n = []; return this.getRootIdSet().forEach((function (t) { Jh.call(e.policies.rootTypenamesById, t) || n.push(t); })), n.length && (t.__META = { extraRootIds: n.sort() }), t; }, e.prototype.replace = function (e) { var t = this; if (Object.keys(this.data).forEach((function (n) { e && Jh.call(e, n) || t.delete(n); })), e) {
        var n = e.__META, r = ut(e, ["__META"]);
        Object.keys(r).forEach((function (e) { t.merge(e, r[e]); })), n && n.extraRootIds.forEach(this.retain, this);
    } }, e.prototype.retain = function (e) { return this.rootIds[e] = (this.rootIds[e] || 0) + 1; }, e.prototype.release = function (e) { if (this.rootIds[e] > 0) {
        var t = --this.rootIds[e];
        return t || delete this.rootIds[e], t;
    } return 0; }, e.prototype.getRootIdSet = function (e) { return void 0 === e && (e = new Set), Object.keys(this.rootIds).forEach(e.add, e), this instanceof vv ? this.parent.getRootIdSet(e) : Object.keys(this.policies.rootTypenamesById).forEach(e.add, e), e; }, e.prototype.gc = function () { var e = this, t = this.getRootIdSet(), n = this.toObject(); t.forEach((function (r) { Jh.call(n, r) && (Object.keys(e.findChildRefIds(r)).forEach(t.add, t), delete n[r]); })); var r = Object.keys(n); if (r.length) {
        for (var i = this; i instanceof vv;)
            i = i.parent;
        r.forEach((function (e) { return i.delete(e); }));
    } return r; }, e.prototype.findChildRefIds = function (e) { if (!Jh.call(this.refs, e)) {
        var t = this.refs[e] = Object.create(null), n = this.data[e];
        if (!n)
            return t;
        var r = new Set([n]);
        r.forEach((function (e) { cd(e) && (t[e.__ref] = !0), fn(e) && Object.keys(e).forEach((function (t) { var n = e[t]; fn(n) && r.add(n); })); }));
    } return this.refs[e]; }, e.prototype.makeCacheKey = function () { return this.group.keyMaker.lookupArray(arguments); }, e; }(), dv = function () { function e(e, t) { void 0 === t && (t = null), this.caching = e, this.parent = t, this.d = null, this.resetCaching(); } return e.prototype.resetCaching = function () { this.d = this.caching ? Ph() : null, this.keyMaker = new wp(Vt); }, e.prototype.depend = function (e, t) { if (this.d) {
        this.d(pv(e, t));
        var n = iv(t);
        n !== t && this.d(pv(e, n)), this.parent && this.parent.depend(e, t);
    } }, e.prototype.dirty = function (e, t) { this.d && this.d.dirty(pv(e, t), "__exists" === t ? "forget" : "setDirty"); }, e; }();
    function pv(e, t) { return t + "#" + e; }
    function hv(e, t) { gv(e) && e.group.depend(t, "__exists"); }
    !function (e) { var t = function (e) { function t(t) { var n = t.policies, r = t.resultCaching, i = void 0 === r || r, o = t.seed, a = e.call(this, n, new dv(i)) || this; return a.stump = new mv(a), a.storageTrie = new wp(Vt), o && a.replace(o), a; } return ot(t, e), t.prototype.addLayer = function (e, t) { return this.stump.addLayer(e, t); }, t.prototype.removeLayer = function () { return this; }, t.prototype.getStorage = function () { return this.storageTrie.lookupArray(arguments); }, t; }(e); e.Root = t; }(fv || (fv = {}));
    var vv = function (e) { function t(t, n, r, i) { var o = e.call(this, n.policies, i) || this; return o.id = t, o.parent = n, o.replay = r, o.group = i, r(o), o; } return ot(t, e), t.prototype.addLayer = function (e, n) { return new t(e, this, n, this.group); }, t.prototype.removeLayer = function (e) { var t = this, n = this.parent.removeLayer(e); return e === this.id ? (this.group.caching && Object.keys(this.data).forEach((function (e) { var r = t.data[e], i = n.lookup(e); i ? r ? r !== i && Object.keys(r).forEach((function (n) { en(r[n], i[n]) || t.group.dirty(e, n); })) : (t.group.dirty(e, "__exists"), Object.keys(i).forEach((function (n) { t.group.dirty(e, n); }))) : t.delete(e); })), n) : n === this.parent ? this : n.addLayer(this.id, this.replay); }, t.prototype.toObject = function () { return at(at({}, this.parent.toObject()), this.data); }, t.prototype.findChildRefIds = function (t) { var n = this.parent.findChildRefIds(t); return Jh.call(this.data, t) ? at(at({}, n), e.prototype.findChildRefIds.call(this, t)) : n; }, t.prototype.getStorage = function () { for (var e = this.parent; e.parent;)
        e = e.parent; return e.getStorage.apply(e, arguments); }, t; }(fv), mv = function (e) { function t(t) { return e.call(this, "EntityStore.Stump", t, (function () { }), new dv(t.group.caching, t.group)) || this; } return ot(t, e), t.prototype.removeLayer = function () { return this; }, t.prototype.merge = function () { return this.parent.merge.apply(this.parent, arguments); }, t; }(vv);
    function yv(e, t, n) { var r = e[n], i = t[n]; return en(r, i) ? r : i; }
    function gv(e) { return !!(e instanceof fv && e.group.caching); }
    function bv(e) { return [e.selectionSet, e.objectOrReference, e.context, e.context.canonizeResults]; }
    var wv = function () { function e(e) { var t = this; this.knownResults = new (Vt ? WeakMap : Map), this.config = un(e, { addTypename: !1 !== e.addTypename, canonizeResults: nv(e) }), this.canon = e.canon || new kp, this.executeSelectionSet = Dh((function (e) { var n, r = e.context.canonizeResults, i = bv(e); i[3] = !r; var o = (n = t.executeSelectionSet).peek.apply(n, i); return o ? r ? at(at({}, o), { result: t.canon.admit(o.result) }) : o : (hv(e.context.store, e.enclosingRef.__ref), t.execSelectionSetImpl(e)); }), { max: this.config.resultCacheMaxSize, keyArgs: bv, makeCacheKey: function (e, t, n, r) { if (gv(n.store))
            return n.store.makeCacheKey(e, cd(t) ? t.__ref : t, n.varString, r); } }), this.executeSubSelectedArray = Dh((function (e) { return hv(e.context.store, e.enclosingRef.__ref), t.execSubSelectedArrayImpl(e); }), { max: this.config.resultCacheMaxSize, makeCacheKey: function (e) { var t = e.field, n = e.array, r = e.context; if (gv(r.store))
            return r.store.makeCacheKey(t, n, r.varString); } }); } return e.prototype.resetCanon = function () { this.canon = new kp; }, e.prototype.diffQueryAgainstStore = function (e) { var t = e.store, n = e.query, r = e.rootId, i = void 0 === r ? "ROOT_QUERY" : r, o = e.variables, a = e.returnPartialData, u = void 0 === a || a, s = e.canonizeResults, l = void 0 === s ? this.config.canonizeResults : s, c = this.config.cache.policies; o = at(at({}, Od(_d(n))), o); var f, d = ld(i), p = this.executeSelectionSet({ selectionSet: Sd(n).selectionSet, objectOrReference: d, enclosingRef: d, context: at({ store: t, query: n, policies: c, variables: o, varString: _p(o), canonizeResults: l }, uv(n, this.config.fragments)) }); if (p.missing && (f = [new Yh(xv(p.missing), p.missing, n, o)], !u))
        throw f[0]; return { result: p.result, complete: !f, missing: f }; }, e.prototype.isFresh = function (e, t, n, r) { if (gv(r.store) && this.knownResults.get(e) === n) {
        var i = this.executeSelectionSet.peek(n, t, r, this.canon.isKnown(e));
        if (i && e === i.result)
            return !0;
    } return !1; }, e.prototype.execSelectionSetImpl = function (e) { var t = this, n = e.selectionSet, r = e.objectOrReference, i = e.enclosingRef, o = e.context; if (cd(r) && !o.policies.rootTypenamesById[r.__ref] && !o.store.has(r.__ref))
        return { result: this.canon.empty, missing: "Dangling reference to missing ".concat(r.__ref, " object") }; var a, u = o.variables, s = o.policies, l = o.store.getFieldValue(r, "__typename"), c = [], f = new Bd; function d(e, t) { var n; return e.missing && (a = f.merge(a, ((n = {})[t] = e.missing, n))), e.result; } this.config.addTypename && "string" === typeof l && !s.rootIdsByTypename[l] && c.push({ __typename: l }); var p = new Set(n.selections); p.forEach((function (e) { var n, h; if (Id(e, u))
        if (bd(e)) {
            var v = s.readField({ fieldName: e.name.value, field: e, variables: o.variables, from: r }, o), m = yd(e);
            void 0 === v ? Lp.added(e) || (a = f.merge(a, ((n = {})[m] = "Can't find field '".concat(e.name.value, "' on ").concat(cd(r) ? r.__ref + " object" : "object " + JSON.stringify(r, null, 2)), n))) : kn(v) ? v = d(t.executeSubSelectedArray({ field: e, array: v, enclosingRef: i, context: o }), m) : e.selectionSet ? null != v && (v = d(t.executeSelectionSet({ selectionSet: e.selectionSet, objectOrReference: v, enclosingRef: cd(v) ? v : i, context: o }), m)) : o.canonizeResults && (v = t.canon.pass(v)), void 0 !== v && c.push(((h = {})[m] = v, h));
        }
        else {
            var y = sd(e, o.lookupFragment);
            if (!y && e.kind === $n.FRAGMENT_SPREAD)
                throw __DEV__ ? new ht("No fragment named ".concat(e.name.value)) : new ht(5);
            y && s.fragmentMatches(y, l) && y.selectionSet.selections.forEach(p.add, p);
        } })); var h = { result: zd(c), missing: a }, v = o.canonizeResults ? this.canon.admit(h) : En(h); return v.result && this.knownResults.set(v.result, n), v; }, e.prototype.execSubSelectedArrayImpl = function (e) { var t, n = this, r = e.field, i = e.array, o = e.enclosingRef, a = e.context, u = new Bd; function s(e, n) { var r; return e.missing && (t = u.merge(t, ((r = {})[n] = e.missing, r))), e.result; } return r.selectionSet && (i = i.filter(a.store.canRead)), i = i.map((function (e, t) { return null === e ? null : kn(e) ? s(n.executeSubSelectedArray({ field: r, array: e, enclosingRef: o, context: a }), t) : r.selectionSet ? s(n.executeSelectionSet({ selectionSet: r.selectionSet, objectOrReference: e, enclosingRef: cd(e) ? e : o, context: a }), t) : (__DEV__ && function (e, t, n) { if (!t.selectionSet) {
        var r = new Set([n]);
        r.forEach((function (n) { fn(n) && (__DEV__ ? vt(!cd(n), "Missing selection set for object of type ".concat(function (e, t) { return cd(t) ? e.get(t.__ref, "__typename") : t && t.__typename; }(e, n), " returned for query field ").concat(t.name.value)) : vt(!cd(n), 6), Object.values(n).forEach(r.add, r)); }));
    } }(a.store, r, e), e); })), { result: a.canonizeResults ? this.canon.admit(i) : i, missing: t }; }, e; }();
    function xv(e) { try {
        JSON.stringify(e, (function (e, t) { if ("string" === typeof t)
            throw t; return t; }));
    }
    catch (t) {
        return t;
    } }
    var Ev = Object.create(null);
    function kv(e) { var t = JSON.stringify(e); return Ev[t] || (Ev[t] = Object.create(null)); }
    function _v(e) { var t = kv(e); return t.keyFieldsFn || (t.keyFieldsFn = function (t, n) { var r = function (e, t) { return n.readField(t, e); }, i = n.keyObject = Ov(e, (function (e) { var i = Tv(n.storeObject, e, r); return void 0 === i && t !== n.storeObject && Jh.call(t, e[0]) && (i = Tv(t, e, Cv)), __DEV__ ? vt(void 0 !== i, "Missing field '".concat(e.join("."), "' while extracting keyFields from ").concat(JSON.stringify(t))) : vt(void 0 !== i, 2), i; })); return "".concat(n.typename, ":").concat(JSON.stringify(i)); }); }
    function Sv(e) { var t = kv(e); return t.keyArgsFn || (t.keyArgsFn = function (t, n) { var r = n.field, i = n.variables, o = n.fieldName, a = Ov(e, (function (e) { var n = e[0], o = n.charAt(0); if ("@" !== o)
        if ("$" !== o) {
            if (t)
                return Tv(t, e);
        }
        else {
            var a = n.slice(1);
            if (i && Jh.call(i, a)) {
                var u = e.slice(0);
                return u[0] = a, Tv(i, u);
            }
        }
    else if (r && _n(r.directives)) {
        var s = n.slice(1), l = r.directives.find((function (e) { return e.name.value === s; })), c = l && md(l, i);
        return c && Tv(c, e.slice(1));
    } })), u = JSON.stringify(a); return (t || "{}" !== u) && (o += ":" + u), o; }); }
    function Ov(e, t) { var n = new Bd; return Nv(e).reduce((function (e, r) { var i, o = t(r); if (void 0 !== o) {
        for (var a = r.length - 1; a >= 0; --a)
            (i = {})[r[a]] = o, o = i;
        e = n.merge(e, o);
    } return e; }), Object.create(null)); }
    function Nv(e) { var t = kv(e); if (!t.paths) {
        var n = t.paths = [], r = [];
        e.forEach((function (t, i) { kn(t) ? (Nv(t).forEach((function (e) { return n.push(r.concat(e)); })), r.length = 0) : (r.push(t), kn(e[i + 1]) || (n.push(r.slice(0)), r.length = 0)); }));
    } return t.paths; }
    function Cv(e, t) { return e[t]; }
    function Tv(e, t, n) { return n = n || Cv, jv(t.reduce((function e(t, r) { return kn(t) ? t.map((function (t) { return e(t, r); })) : t && n(t, r); }), e)); }
    function jv(e) { return fn(e) ? kn(e) ? e.map(jv) : Ov(Object.keys(e).sort(), (function (t) { return Tv(e, t); })) : e; }
    function Pv(e) { return void 0 !== e.args ? e.args : e.field ? md(e.field, e.variables) : null; }
    pd.setStringify(_p);
    var Iv = function () { }, Rv = function (e, t) { return t.fieldName; }, Dv = function (e, t, n) { return (0, n.mergeObjects)(e, t); }, Lv = function (e, t) { return t; }, Av = function () { function e(e) { this.config = e, this.typePolicies = Object.create(null), this.toBeAdded = Object.create(null), this.supertypeMap = new Map, this.fuzzySubtypes = new Map, this.rootIdsByTypename = Object.create(null), this.rootTypenamesById = Object.create(null), this.usingPossibleTypes = !1, this.config = at({ dataIdFromObject: ev }, e), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), e.possibleTypes && this.addPossibleTypes(e.possibleTypes), e.typePolicies && this.addTypePolicies(e.typePolicies); } return e.prototype.identify = function (e, t) { var n, r = this, i = t && (t.typename || (null === (n = t.storeObject) || void 0 === n ? void 0 : n.__typename)) || e.__typename; if (i === this.rootTypenamesById.ROOT_QUERY)
        return ["ROOT_QUERY"]; for (var o, a = t && t.storeObject || e, u = at(at({}, t), { typename: i, storeObject: a, readField: t && t.readField || function () { var e = Fv(arguments, a); return r.readField(e, { store: r.cache.data, variables: e.variables }); } }), s = i && this.getTypePolicy(i), l = s && s.keyFn || this.config.dataIdFromObject; l;) {
        var c = l(e, u);
        if (!kn(c)) {
            o = c;
            break;
        }
        l = _v(c);
    } return o = o ? String(o) : void 0, u.keyObject ? [o, u.keyObject] : [o]; }, e.prototype.addTypePolicies = function (e) { var t = this; Object.keys(e).forEach((function (n) { var r = e[n], i = r.queryType, o = r.mutationType, a = r.subscriptionType, u = ut(r, ["queryType", "mutationType", "subscriptionType"]); i && t.setRootTypename("Query", n), o && t.setRootTypename("Mutation", n), a && t.setRootTypename("Subscription", n), Jh.call(t.toBeAdded, n) ? t.toBeAdded[n].push(u) : t.toBeAdded[n] = [u]; })); }, e.prototype.updateTypePolicy = function (e, t) { var n = this, r = this.getTypePolicy(e), i = t.keyFields, o = t.fields; function a(e, t) { e.merge = "function" === typeof t ? t : !0 === t ? Dv : !1 === t ? Lv : e.merge; } a(r, t.merge), r.keyFn = !1 === i ? Iv : kn(i) ? _v(i) : "function" === typeof i ? i : r.keyFn, o && Object.keys(o).forEach((function (t) { var r = n.getFieldPolicy(e, t, !0), i = o[t]; if ("function" === typeof i)
        r.read = i;
    else {
        var u = i.keyArgs, s = i.read, l = i.merge;
        r.keyFn = !1 === u ? Rv : kn(u) ? Sv(u) : "function" === typeof u ? u : r.keyFn, "function" === typeof s && (r.read = s), a(r, l);
    } r.read && r.merge && (r.keyFn = r.keyFn || Rv); })); }, e.prototype.setRootTypename = function (e, t) { void 0 === t && (t = e); var n = "ROOT_" + e.toUpperCase(), r = this.rootTypenamesById[n]; t !== r && (__DEV__ ? vt(!r || r === e, "Cannot change root ".concat(e, " __typename more than once")) : vt(!r || r === e, 3), r && delete this.rootIdsByTypename[r], this.rootIdsByTypename[t] = n, this.rootTypenamesById[n] = t); }, e.prototype.addPossibleTypes = function (e) { var t = this; this.usingPossibleTypes = !0, Object.keys(e).forEach((function (n) { t.getSupertypeSet(n, !0), e[n].forEach((function (e) { t.getSupertypeSet(e, !0).add(n); var r = e.match(rv); r && r[0] === e || t.fuzzySubtypes.set(e, new RegExp(e)); })); })); }, e.prototype.getTypePolicy = function (e) { var t = this; if (!Jh.call(this.typePolicies, e)) {
        var n = this.typePolicies[e] = Object.create(null);
        n.fields = Object.create(null);
        var r = this.supertypeMap.get(e);
        r && r.size && r.forEach((function (e) { var r = t.getTypePolicy(e), i = r.fields, o = ut(r, ["fields"]); Object.assign(n, o), Object.assign(n.fields, i); }));
    } var i = this.toBeAdded[e]; return i && i.length && i.splice(0).forEach((function (n) { t.updateTypePolicy(e, n); })), this.typePolicies[e]; }, e.prototype.getFieldPolicy = function (e, t, n) { if (e) {
        var r = this.getTypePolicy(e).fields;
        return r[t] || n && (r[t] = Object.create(null));
    } }, e.prototype.getSupertypeSet = function (e, t) { var n = this.supertypeMap.get(e); return !n && t && this.supertypeMap.set(e, n = new Set), n; }, e.prototype.fragmentMatches = function (e, t, n, r) { var i = this; if (!e.typeCondition)
        return !0; if (!t)
        return !1; var o = e.typeCondition.name.value; if (t === o)
        return !0; if (this.usingPossibleTypes && this.supertypeMap.has(o))
        for (var a = this.getSupertypeSet(t, !0), u = [a], s = function (e) { var t = i.getSupertypeSet(e, !1); t && t.size && u.indexOf(t) < 0 && u.push(t); }, l = !(!n || !this.fuzzySubtypes.size), c = !1, f = 0; f < u.length; ++f) {
            var d = u[f];
            if (d.has(o))
                return a.has(o) || (c && __DEV__ && vt.warn("Inferring subtype ".concat(t, " of supertype ").concat(o)), a.add(o)), !0;
            d.forEach(s), l && f === u.length - 1 && ov(e.selectionSet, n, r) && (l = !1, c = !0, this.fuzzySubtypes.forEach((function (e, n) { var r = t.match(e); r && r[0] === t && s(n); })));
        } return !1; }, e.prototype.hasKeyArgs = function (e, t) { var n = this.getFieldPolicy(e, t, !1); return !(!n || !n.keyFn); }, e.prototype.getStoreFieldName = function (e) { var t, n = e.typename, r = e.fieldName, i = this.getFieldPolicy(n, r, !1), o = i && i.keyFn; if (o && n)
        for (var a = { typename: n, fieldName: r, field: e.field || null, variables: e.variables }, u = Pv(e); o;) {
            var s = o(u, a);
            if (!kn(s)) {
                t = s || r;
                break;
            }
            o = Sv(s);
        } return void 0 === t && (t = e.field ? function (e, t) { var n = null; e.directives && (n = {}, e.directives.forEach((function (e) { n[e.name.value] = {}, e.arguments && e.arguments.forEach((function (r) { var i = r.name, o = r.value; return fd(n[e.name.value], i, o, t); })); }))); var r = null; return e.arguments && e.arguments.length && (r = {}, e.arguments.forEach((function (e) { var n = e.name, i = e.value; return fd(r, n, i, t); }))), pd(e.name.value, r, n); }(e.field, e.variables) : pd(r, Pv(e))), !1 === t ? r : r === iv(t) ? t : r + ":" + t; }, e.prototype.readField = function (e, t) { var n = e.from; if (n && (e.field || e.fieldName)) {
        if (void 0 === e.typename) {
            var r = t.store.getFieldValue(n, "__typename");
            r && (e.typename = r);
        }
        var i = this.getStoreFieldName(e), o = iv(i), a = t.store.getFieldValue(n, i), u = this.getFieldPolicy(e.typename, o, !1), s = u && u.read;
        if (s) {
            var l = Mv(this, n, e, t, t.store.getStorage(cd(n) ? n.__ref : n, i));
            return Lh.withValue(this.cache, s, [a, l]);
        }
        return a;
    } }, e.prototype.getReadFunction = function (e, t) { var n = this.getFieldPolicy(e, t, !1); return n && n.read; }, e.prototype.getMergeFunction = function (e, t, n) { var r = this.getFieldPolicy(e, t, !1), i = r && r.merge; return !i && n && (i = (r = this.getTypePolicy(n)) && r.merge), i; }, e.prototype.runMergeFunction = function (e, t, n, r, i) { var o = n.field, a = n.typename, u = n.merge; return u === Dv ? Vv(r.store)(e, t) : u === Lv ? t : (r.overwrite && (e = void 0), u(e, t, Mv(this, void 0, { typename: a, fieldName: o.name.value, field: o, variables: r.variables }, r, i || Object.create(null)))); }, e; }();
    function Mv(e, t, n, r, i) { var o = e.getStoreFieldName(n), a = iv(o), u = n.variables || r.variables, s = r.store, l = s.toReference, c = s.canRead; return { args: Pv(n), field: n.field || null, fieldName: a, storeFieldName: o, variables: u, isReference: cd, toReference: l, storage: i, cache: e.cache, canRead: c, readField: function () { return e.readField(Fv(arguments, t, u), r); }, mergeObjects: Vv(r.store) }; }
    function Fv(e, t, n) { var r, i = e[0], o = e[1], a = e.length; return "string" === typeof i ? r = { fieldName: i, from: a > 1 ? o : t } : (r = at({}, i), Jh.call(r, "from") || (r.from = t)), __DEV__ && void 0 === r.from && __DEV__ && vt.warn("Undefined 'from' passed to readField with arguments ".concat(function (e) { var t = Vp("stringifyForDisplay"); return JSON.stringify(e, (function (e, n) { return void 0 === n ? t : n; })).split(JSON.stringify(t)).join("<undefined>"); }(Array.from(e)))), void 0 === r.variables && (r.variables = n), r; }
    function Vv(e) { return function (t, n) { if (kn(t) || kn(n))
        throw __DEV__ ? new ht("Cannot automatically merge arrays") : new ht(4); if (fn(t) && fn(n)) {
        var r = e.getFieldValue(t, "__typename"), i = e.getFieldValue(n, "__typename");
        if (r && i && r !== i)
            return n;
        if (cd(t) && av(n))
            return e.merge(t.__ref, n), t;
        if (av(t) && cd(n))
            return e.merge(t, n.__ref), n;
        if (av(t) && av(n))
            return at(at({}, t), n);
    } return n; }; }
    function qv(e, t, n) { var r = "".concat(t).concat(n), i = e.flavors.get(r); return i || e.flavors.set(r, i = e.clientOnly === t && e.deferred === n ? e : at(at({}, e), { clientOnly: t, deferred: n })), i; }
    var Uv = function () { function e(e, t, n) { this.cache = e, this.reader = t, this.fragments = n; } return e.prototype.writeToStore = function (e, t) { var n = this, r = t.query, i = t.result, o = t.dataId, a = t.variables, u = t.overwrite, s = xd(r), l = new Bd; a = at(at({}, Od(s)), a); var c = at(at({ store: e, written: Object.create(null), merge: function (e, t) { return l.merge(e, t); }, variables: a, varString: _p(a) }, uv(r, this.fragments)), { overwrite: !!u, incomingById: new Map, clientOnly: !1, deferred: !1, flavors: new Map }), f = this.processSelectionSet({ result: i || Object.create(null), dataId: o, selectionSet: s.selectionSet, mergeTree: { map: new Map }, context: c }); if (!cd(f))
        throw __DEV__ ? new ht("Could not identify object ".concat(JSON.stringify(i))) : new ht(7); return c.incomingById.forEach((function (t, r) { var i = t.storeObject, o = t.mergeTree, a = t.fieldNodeSet, u = ld(r); if (o && o.map.size) {
        var s = n.applyMerges(o, u, i, c);
        if (cd(s))
            return;
        i = s;
    } if (__DEV__ && !c.overwrite) {
        var l = Object.create(null);
        a.forEach((function (e) { e.selectionSet && (l[e.name.value] = !0); }));
        Object.keys(i).forEach((function (e) { (function (e) { return !0 === l[iv(e)]; })(e) && !function (e) { var t = o && o.map.get(e); return Boolean(t && t.info && t.info.merge); }(e) && function (e, t, n, r) { var i = function (e) { var t = r.getFieldValue(e, n); return "object" === typeof t && t; }, o = i(e); if (!o)
            return; var a = i(t); if (!a)
            return; if (cd(o))
            return; if (en(o, a))
            return; if (Object.keys(o).every((function (e) { return void 0 !== r.getFieldValue(a, e); })))
            return; var u = r.getFieldValue(e, "__typename") || r.getFieldValue(t, "__typename"), s = iv(n), l = "".concat(u, ".").concat(s); if (Hv.has(l))
            return; Hv.add(l); var c = []; kn(o) || kn(a) || [o, a].forEach((function (e) { var t = r.getFieldValue(e, "__typename"); "string" !== typeof t || c.includes(t) || c.push(t); })); __DEV__ && vt.warn("Cache data may be lost when replacing the ".concat(s, " field of a ").concat(u, " object.\n\nTo address this problem (which is not a bug in Apollo Client), ").concat(c.length ? "either ensure all objects of type " + c.join(" and ") + " have an ID or a custom merge function, or " : "", "define a custom merge function for the ").concat(l, " field, so InMemoryCache can safely merge these objects:\n\n  existing: ").concat(JSON.stringify(o).slice(0, 1e3), "\n  incoming: ").concat(JSON.stringify(a).slice(0, 1e3), "\n\nFor more information about these options, please refer to the documentation:\n\n  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers\n  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects\n")); }(u, i, e, c.store); }));
    } e.merge(r, i); })), e.retain(f.__ref), f; }, e.prototype.processSelectionSet = function (e) { var t = this, n = e.dataId, r = e.result, i = e.selectionSet, o = e.context, a = e.mergeTree, u = this.cache.policies, s = Object.create(null), l = n && u.rootTypenamesById[n] || gd(r, i, o.fragmentMap) || n && o.store.get(n, "__typename"); "string" === typeof l && (s.__typename = l); var c = function () { var e = Fv(arguments, s, o.variables); if (cd(e.from)) {
        var t = o.incomingById.get(e.from.__ref);
        if (t) {
            var n = u.readField(at(at({}, e), { from: t.storeObject }), o);
            if (void 0 !== n)
                return n;
        }
    } return u.readField(e, o); }, f = new Set; this.flattenFields(i, r, o, l).forEach((function (e, n) { var i, o = yd(n), d = r[o]; if (f.add(n), void 0 !== d) {
        var p = u.getStoreFieldName({ typename: l, fieldName: n.name.value, field: n, variables: e.variables }), h = Qv(a, p), v = t.processFieldValue(d, n, n.selectionSet ? qv(e, !1, !1) : e, h), m = void 0;
        n.selectionSet && (cd(v) || av(v)) && (m = c("__typename", v));
        var y = u.getMergeFunction(l, n.name.value, m);
        y ? h.info = { field: n, typename: l, merge: y } : Wv(a, p), s = e.merge(s, ((i = {})[p] = v, i));
    }
    else
        !__DEV__ || e.clientOnly || e.deferred || Lp.added(n) || u.getReadFunction(l, n.name.value) || __DEV__ && vt.error("Missing field '".concat(yd(n), "' while writing result ").concat(JSON.stringify(r, null, 2)).substring(0, 1e3)); })); try {
        var d = u.identify(r, { typename: l, selectionSet: i, fragmentMap: o.fragmentMap, storeObject: s, readField: c }), p = d[0], h = d[1];
        n = n || p, h && (s = o.merge(s, h));
    }
    catch (Wr) {
        if (!n)
            throw Wr;
    } if ("string" === typeof n) {
        var v = ld(n), m = o.written[n] || (o.written[n] = []);
        if (m.indexOf(i) >= 0)
            return v;
        if (m.push(i), this.reader && this.reader.isFresh(r, v, i, o))
            return v;
        var y = o.incomingById.get(n);
        return y ? (y.storeObject = o.merge(y.storeObject, s), y.mergeTree = Bv(y.mergeTree, a), f.forEach((function (e) { return y.fieldNodeSet.add(e); }))) : o.incomingById.set(n, { storeObject: s, mergeTree: Zv(a) ? void 0 : a, fieldNodeSet: f }), v;
    } return s; }, e.prototype.processFieldValue = function (e, t, n, r) { var i = this; return t.selectionSet && null !== e ? kn(e) ? e.map((function (e, o) { var a = i.processFieldValue(e, t, n, Qv(r, o)); return Wv(r, o), a; })) : this.processSelectionSet({ result: e, selectionSet: t.selectionSet, context: n, mergeTree: r }) : __DEV__ ? Zp(e) : e; }, e.prototype.flattenFields = function (e, t, n, r) { void 0 === r && (r = gd(t, e, n.fragmentMap)); var i = new Map, o = this.cache.policies, a = new wp(!1); return function e(u, s) { var l = a.lookup(u, s.clientOnly, s.deferred); l.visited || (l.visited = !0, u.selections.forEach((function (a) { if (Id(a, n.variables)) {
        var u = s.clientOnly, l = s.deferred;
        if (u && l || !_n(a.directives) || a.directives.forEach((function (e) { var t = e.name.value; if ("client" === t && (u = !0), "defer" === t) {
            var r = md(e, n.variables);
            r && !1 === r.if || (l = !0);
        } })), bd(a)) {
            var c = i.get(a);
            c && (u = u && c.clientOnly, l = l && c.deferred), i.set(a, qv(n, u, l));
        }
        else {
            var f = sd(a, n.lookupFragment);
            if (!f && a.kind === $n.FRAGMENT_SPREAD)
                throw __DEV__ ? new ht("No fragment named ".concat(a.name.value)) : new ht(8);
            f && o.fragmentMatches(f, r, t, n.variables) && e(f.selectionSet, qv(n, u, l));
        }
    } }))); }(e, n), i; }, e.prototype.applyMerges = function (e, t, n, r, i) { var o, a = this; if (e.map.size && !cd(n)) {
        var u, s = kn(n) || !cd(t) && !av(t) ? void 0 : t, l = n;
        s && !i && (i = [cd(s) ? s.__ref : s]);
        var c = function (e, t) { return kn(e) ? "number" === typeof t ? e[t] : void 0 : r.store.getFieldValue(e, String(t)); };
        e.map.forEach((function (e, t) { var n = c(s, t), o = c(l, t); if (void 0 !== o) {
            i && i.push(t);
            var f = a.applyMerges(e, n, o, r, i);
            f !== o && (u = u || new Map).set(t, f), i && vt(i.pop() === t);
        } })), u && (n = kn(l) ? l.slice(0) : at({}, l), u.forEach((function (e, t) { n[t] = e; })));
    } return e.info ? this.cache.policies.runMergeFunction(t, n, e.info, r, i && (o = r.store).getStorage.apply(o, i)) : n; }, e; }(), zv = [];
    function Qv(e, t) { var n = e.map; return n.has(t) || n.set(t, zv.pop() || { map: new Map }), n.get(t); }
    function Bv(e, t) { if (e === t || !t || Zv(t))
        return e; if (!e || Zv(e))
        return t; var n = e.info && t.info ? at(at({}, e.info), t.info) : e.info || t.info, r = e.map.size && t.map.size, i = { info: n, map: r ? new Map : e.map.size ? e.map : t.map }; if (r) {
        var o = new Set(t.map.keys());
        e.map.forEach((function (e, n) { i.map.set(n, Bv(e, t.map.get(n))), o.delete(n); })), o.forEach((function (n) { i.map.set(n, Bv(t.map.get(n), e.map.get(n))); }));
    } return i; }
    function Zv(e) { return !e || !(e.info || e.map.size); }
    function Wv(e, t) { var n = e.map, r = n.get(t); r && Zv(r) && (zv.push(r), n.delete(t)); }
    var Hv = new Set;
    var Kv = function (e) { function t(t) { void 0 === t && (t = {}); var n = e.call(this) || this; return n.watches = new Set, n.typenameDocumentCache = new Map, n.makeVar = Vh, n.txCount = 0, n.config = function (e) { return un(tv, e); }(t), n.addTypename = !!n.config.addTypename, n.policies = new Av({ cache: n, dataIdFromObject: n.config.dataIdFromObject, possibleTypes: n.config.possibleTypes, typePolicies: n.config.typePolicies }), n.init(), n; } return ot(t, e), t.prototype.init = function () { var e = this.data = new fv.Root({ policies: this.policies, resultCaching: this.config.resultCaching }); this.optimisticData = e.stump, this.resetResultCache(); }, t.prototype.resetResultCache = function (e) { var t = this, n = this.storeReader, r = this.config.fragments; this.storeWriter = new Uv(this, this.storeReader = new wv({ cache: this, addTypename: this.addTypename, resultCacheMaxSize: this.config.resultCacheMaxSize, canonizeResults: nv(this.config), canon: e ? void 0 : n && n.canon, fragments: r }), r), this.maybeBroadcastWatch = Dh((function (e, n) { return t.broadcastWatch(e, n); }), { max: this.config.resultCacheMaxSize, makeCacheKey: function (e) { var n = e.optimistic ? t.optimisticData : t.data; if (gv(n)) {
            var r = e.optimistic, i = e.id, o = e.variables;
            return n.makeCacheKey(e.query, e.callback, _p({ optimistic: r, id: i, variables: o }));
        } } }), new Set([this.data.group, this.optimisticData.group]).forEach((function (e) { return e.resetCaching(); })); }, t.prototype.restore = function (e) { return this.init(), e && this.data.replace(e), this; }, t.prototype.extract = function (e) { return void 0 === e && (e = !1), (e ? this.optimisticData : this.data).extract(); }, t.prototype.read = function (e) { var t = e.returnPartialData, n = void 0 !== t && t; try {
        return this.storeReader.diffQueryAgainstStore(at(at({}, e), { store: e.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData: n })).result || null;
    }
    catch (Wr) {
        if (Wr instanceof Yh)
            return null;
        throw Wr;
    } }, t.prototype.write = function (e) { try {
        return ++this.txCount, this.storeWriter.writeToStore(this.data, e);
    }
    finally {
        --this.txCount || !1 === e.broadcast || this.broadcastWatches();
    } }, t.prototype.modify = function (e) { if (Jh.call(e, "id") && !e.id)
        return !1; var t = e.optimistic ? this.optimisticData : this.data; try {
        return ++this.txCount, t.modify(e.id || "ROOT_QUERY", e.fields);
    }
    finally {
        --this.txCount || !1 === e.broadcast || this.broadcastWatches();
    } }, t.prototype.diff = function (e) { return this.storeReader.diffQueryAgainstStore(at(at({}, e), { store: e.optimistic ? this.optimisticData : this.data, rootId: e.id || "ROOT_QUERY", config: this.config })); }, t.prototype.watch = function (e) { var t = this; return this.watches.size || function (e) { Mh(e).vars.forEach((function (t) { return t.attachCache(e); })); }(this), this.watches.add(e), e.immediate && this.maybeBroadcastWatch(e), function () { t.watches.delete(e) && !t.watches.size && Fh(t), t.maybeBroadcastWatch.forget(e); }; }, t.prototype.gc = function (e) { _p.reset(); var t = this.optimisticData.gc(); return e && !this.txCount && (e.resetResultCache ? this.resetResultCache(e.resetResultIdentities) : e.resetResultIdentities && this.storeReader.resetCanon()), t; }, t.prototype.retain = function (e, t) { return (t ? this.optimisticData : this.data).retain(e); }, t.prototype.release = function (e, t) { return (t ? this.optimisticData : this.data).release(e); }, t.prototype.identify = function (e) { if (cd(e))
        return e.__ref; try {
        return this.policies.identify(e)[0];
    }
    catch (Wr) {
        __DEV__ && vt.warn(Wr);
    } }, t.prototype.evict = function (e) { if (!e.id) {
        if (Jh.call(e, "id"))
            return !1;
        e = at(at({}, e), { id: "ROOT_QUERY" });
    } try {
        return ++this.txCount, this.optimisticData.evict(e, this.data);
    }
    finally {
        --this.txCount || !1 === e.broadcast || this.broadcastWatches();
    } }, t.prototype.reset = function (e) { var t = this; return this.init(), _p.reset(), e && e.discardWatches ? (this.watches.forEach((function (e) { return t.maybeBroadcastWatch.forget(e); })), this.watches.clear(), Fh(this)) : this.broadcastWatches(), Promise.resolve(); }, t.prototype.removeOptimistic = function (e) { var t = this.optimisticData.removeLayer(e); t !== this.optimisticData && (this.optimisticData = t, this.broadcastWatches()); }, t.prototype.batch = function (e) { var t, n = this, r = e.update, i = e.optimistic, o = void 0 === i || i, a = e.removeOptimistic, u = e.onWatchUpdated, s = function (e) { var i = n, o = i.data, a = i.optimisticData; ++n.txCount, e && (n.data = n.optimisticData = e); try {
        return t = r(n);
    }
    finally {
        --n.txCount, n.data = o, n.optimisticData = a;
    } }, l = new Set; return u && !this.txCount && this.broadcastWatches(at(at({}, e), { onWatchUpdated: function (e) { return l.add(e), !1; } })), "string" === typeof o ? this.optimisticData = this.optimisticData.addLayer(o, s) : !1 === o ? s(this.data) : s(), "string" === typeof a && (this.optimisticData = this.optimisticData.removeLayer(a)), u && l.size ? (this.broadcastWatches(at(at({}, e), { onWatchUpdated: function (e, t) { var n = u.call(this, e, t); return !1 !== n && l.delete(e), n; } })), l.size && l.forEach((function (e) { return n.maybeBroadcastWatch.dirty(e); }))) : this.broadcastWatches(e), t; }, t.prototype.performTransaction = function (e, t) { return this.batch({ update: e, optimistic: t || null !== t }); }, t.prototype.transformDocument = function (e) { if (this.addTypename) {
        var t = this.typenameDocumentCache.get(e);
        return t || (t = Lp(e), this.typenameDocumentCache.set(e, t), this.typenameDocumentCache.set(t, t)), t;
    } return e; }, t.prototype.transformForLink = function (e) { var t = this.config.fragments; return t ? t.transform(e) : e; }, t.prototype.broadcastWatches = function (e) { var t = this; this.txCount || this.watches.forEach((function (n) { return t.maybeBroadcastWatch(n, e); })); }, t.prototype.broadcastWatch = function (e, t) { var n = e.lastDiff, r = this.diff(e); t && (e.optimistic && "string" === typeof t.optimistic && (r.fromOptimisticTransaction = !0), t.onWatchUpdated && !1 === t.onWatchUpdated.call(this, e, r, n)) || n && en(n.result, r.result) || e.callback(e.lastDiff = r, n); }, t; }(Gh), $v = function (t) { var n = t.client, r = t.children, i = cn(); return e.createElement(i.Consumer, null, (function (t) { return void 0 === t && (t = {}), n && t.client !== n && (t = Object.assign({}, t, { client: n })), __DEV__ ? vt(t.client, 'ApolloProvider was not passed a client instance. Make sure you pass in your client via the "client" prop.') : vt(t.client, 29), e.createElement(i.Provider, { value: t }, r); })); };
    var Gv, Yv = pp({ uri: "/graphql" }), Jv = new $h({ link: (Gv = function (e, t) { var n = t.headers, r = localStorage.getItem("id_token"); return { headers: u(u({}, n), {}, { authorization: r ? "Bearer ".concat(r) : "" }) }; }, new Pd((function (e, t) { var n = ut(e, []); return new od((function (r) { var i, o = !1; return Promise.resolve(n).then((function (t) { return Gv(t, e.getContext()); })).then(e.setContext).then((function () { o || (i = t(e).subscribe({ next: r.next.bind(r), error: r.error.bind(r), complete: r.complete.bind(r) })); })).catch(r.error.bind(r)), function () { o = !0, i && i.unsubscribe(); }; })); }))).concat(Yv), cache: new Kv });
    var Xv = function () { return (0, We.jsx)($v, { client: Jv, children: (0, We.jsx)(Ae, { children: (0, We.jsxs)(We.Fragment, { children: [(0, We.jsx)("link", { href: "https://fonts.googleapis.com/css?family=Damion&display=swap", rel: "stylesheet" }), (0, We.jsx)("link", { href: "https://fonts.googleapis.com/css?family=Alatsi&display=swap", rel: "stylesheet" }), (0, We.jsx)(Rf, {}), (0, We.jsxs)(je, { children: [(0, We.jsx)(Ce, { path: "/", element: (0, We.jsx)(Xr, {}) }), (0, We.jsx)(Ce, { path: "/settings", element: (0, We.jsx)(Sa, {}) }), (0, We.jsx)(Ce, { path: "/profile", element: (0, We.jsx)(ei, {}) }), (0, We.jsx)(Ce, { path: "*", element: (0, We.jsx)("h1", { className: "display-2", children: "Wrong page!" }) })] })] }) }) }); };
    r.render((0, We.jsx)(e.StrictMode, { children: (0, We.jsx)(Xv, {}) }), document.getElementById("root"));
}(); }();
//# sourceMappingURL=main.f5e21fdf.js.map
