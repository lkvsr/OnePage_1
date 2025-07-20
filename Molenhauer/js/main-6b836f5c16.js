( () => {
    var e = {
        964: () => {
            ( () => {
                const e = document.getElementById("burger")
                  , t = document.getElementById("mobile-menu")
                  , s = document.querySelectorAll(".nav__link")
                  , i = document.body;
                function a(e) {
                    e.preventDefault();
                    let t = e.target;
                    if (t.dataset.goto && document.querySelector(t.dataset.goto)) {
                        let e = document.querySelector(t.dataset.goto).getBoundingClientRect().top + scrollY;
                        window.scrollTo({
                            top: e,
                            behavior: "smooth"
                        }),
                        n()
                    }
                }
                function r() {
                    e.classList.add("_active"),
                    t.classList.add("_active"),
                    i.classList.add("_lock"),
                    e.setAttribute("aria-label", "Close menu"),
                    e.setAttribute("aria-expanded", !0),
                    e.removeEventListener("click", r)
                }
                function n() {
                    e.classList.remove("_active"),
                    t.classList.remove("_active"),
                    i.classList.remove("_lock"),
                    e.setAttribute("aria-label", "Open menu"),
                    e.setAttribute("aria-expanded", !1),
                    e.addEventListener("click", r)
                }
                e?.addEventListener("click", (function() {
                    this.classList.contains("_active") ? n() : r()
                }
                )),
                s?.forEach((e => {
                    e.addEventListener("click", ( () => {
                        n()
                    }
                    ))
                }
                )),
                document.querySelectorAll("[data-goto]").forEach((e => {
                    e.addEventListener("click", a)
                }
                )),
                document.body.addEventListener("click", (function(s) {
                    const i = s.composedPath().includes(t)
                      , a = s.composedPath().includes(e);
                    i || a || n()
                }
                ))
            }
            )()
        }
    }
      , t = {};
    function s(i) {
        var a = t[i];
        if (void 0 !== a)
            return a.exports;
        var r = t[i] = {
            exports: {}
        };
        return e[i](r, r.exports, s),
        r.exports
    }
    s.d = (e, t) => {
        for (var i in t)
            s.o(t, i) && !s.o(e, i) && Object.defineProperty(e, i, {
                enumerable: !0,
                get: t[i]
            })
    }
    ,
    s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
    var i = {};
    ( () => {
        "use strict";
        function e(e) {
            return null !== e && "object" == typeof e && "constructor"in e && e.constructor === Object
        }
        function t(s, i) {
            void 0 === s && (s = {}),
            void 0 === i && (i = {}),
            Object.keys(i).forEach((a => {
                void 0 === s[a] ? s[a] = i[a] : e(i[a]) && e(s[a]) && Object.keys(i[a]).length > 0 && t(s[a], i[a])
            }
            ))
        }
        s.d(i, {
            s5: () => Z,
            rj: () => te,
            W_: () => K,
            tl: () => Q,
            tq: () => X,
            o3: () => ee
        });
        const a = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector: () => null,
            querySelectorAll: () => [],
            getElementById: () => null,
            createEvent: () => ({
                initEvent() {}
            }),
            createElement: () => ({
                children: [],
                childNodes: [],
                style: {},
                setAttribute() {},
                getElementsByTagName: () => []
            }),
            createElementNS: () => ({}),
            importNode: () => null,
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function r() {
            const e = "undefined" != typeof document ? document : {};
            return t(e, a),
            e
        }
        const n = {
            document: a,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function() {
                return this
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle: () => ({
                getPropertyValue: () => ""
            }),
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia: () => ({}),
            requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(),
            null) : setTimeout(e, 0),
            cancelAnimationFrame(e) {
                "undefined" != typeof setTimeout && clearTimeout(e)
            }
        };
        function l() {
            const e = "undefined" != typeof window ? window : {};
            return t(e, n),
            e
        }
        function o(e, t) {
            return void 0 === t && (t = 0),
            setTimeout(e, t)
        }
        function d() {
            return Date.now()
        }
        function c(e) {
            return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
        }
        function p() {
            const e = Object(arguments.length <= 0 ? void 0 : arguments[0])
              , t = ["__proto__", "constructor", "prototype"];
            for (let i = 1; i < arguments.length; i += 1) {
                const a = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                if (null != a && (s = a,
                !("undefined" != typeof window && void 0 !== window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType)))) {
                    const s = Object.keys(Object(a)).filter((e => t.indexOf(e) < 0));
                    for (let t = 0, i = s.length; t < i; t += 1) {
                        const i = s[t]
                          , r = Object.getOwnPropertyDescriptor(a, i);
                        void 0 !== r && r.enumerable && (c(e[i]) && c(a[i]) ? a[i].__swiper__ ? e[i] = a[i] : p(e[i], a[i]) : !c(e[i]) && c(a[i]) ? (e[i] = {},
                        a[i].__swiper__ ? e[i] = a[i] : p(e[i], a[i])) : e[i] = a[i])
                    }
                }
            }
            var s;
            return e
        }
        function u(e, t, s) {
            e.style.setProperty(t, s)
        }
        function m(e) {
            let {swiper: t, targetPosition: s, side: i} = e;
            const a = l()
              , r = -t.translate;
            let n, o = null;
            const d = t.params.speed;
            t.wrapperEl.style.scrollSnapType = "none",
            a.cancelAnimationFrame(t.cssModeFrameID);
            const c = s > r ? "next" : "prev"
              , p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t
              , u = () => {
                n = (new Date).getTime(),
                null === o && (o = n);
                const e = Math.max(Math.min((n - o) / d, 1), 0)
                  , l = .5 - Math.cos(e * Math.PI) / 2;
                let c = r + l * (s - r);
                if (p(c, s) && (c = s),
                t.wrapperEl.scrollTo({
                    [i]: c
                }),
                p(c, s))
                    return t.wrapperEl.style.overflow = "hidden",
                    t.wrapperEl.style.scrollSnapType = "",
                    setTimeout(( () => {
                        t.wrapperEl.style.overflow = "",
                        t.wrapperEl.scrollTo({
                            [i]: c
                        })
                    }
                    )),
                    void a.cancelAnimationFrame(t.cssModeFrameID);
                t.cssModeFrameID = a.requestAnimationFrame(u)
            }
            ;
            u()
        }
        function f(e, t) {
            return void 0 === t && (t = ""),
            [...e.children].filter((e => e.matches(t)))
        }
        function h(e) {
            try {
                return void console.warn(e)
            } catch (e) {}
        }
        function g(e, t) {
            void 0 === t && (t = []);
            const s = document.createElement(e);
            return s.classList.add(...Array.isArray(t) ? t : function(e) {
                return void 0 === e && (e = ""),
                e.trim().split(" ").filter((e => !!e.trim()))
            }(t)),
            s
        }
        function v(e, t) {
            return l().getComputedStyle(e, null).getPropertyValue(t)
        }
        function w(e) {
            let t, s = e;
            if (s) {
                for (t = 0; null !== (s = s.previousSibling); )
                    1 === s.nodeType && (t += 1);
                return t
            }
        }
        function b(e, t) {
            const s = [];
            let i = e.parentElement;
            for (; i; )
                t ? i.matches(t) && s.push(i) : s.push(i),
                i = i.parentElement;
            return s
        }
        function S(e, t, s) {
            const i = l();
            return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
        }
        let y, x, T;
        function E() {
            return y || (y = function() {
                const e = l()
                  , t = r();
                return {
                    smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior"in t.documentElement.style,
                    touch: !!("ontouchstart"in e || e.DocumentTouch && t instanceof e.DocumentTouch)
                }
            }()),
            y
        }
        var C = {
            on(e, t, s) {
                const i = this;
                if (!i.eventsListeners || i.destroyed)
                    return i;
                if ("function" != typeof t)
                    return i;
                const a = s ? "unshift" : "push";
                return e.split(" ").forEach((e => {
                    i.eventsListeners[e] || (i.eventsListeners[e] = []),
                    i.eventsListeners[e][a](t)
                }
                )),
                i
            },
            once(e, t, s) {
                const i = this;
                if (!i.eventsListeners || i.destroyed)
                    return i;
                if ("function" != typeof t)
                    return i;
                function a() {
                    i.off(e, a),
                    a.__emitterProxy && delete a.__emitterProxy;
                    for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++)
                        r[n] = arguments[n];
                    t.apply(i, r)
                }
                return a.__emitterProxy = t,
                i.on(e, a, s)
            },
            onAny(e, t) {
                const s = this;
                if (!s.eventsListeners || s.destroyed)
                    return s;
                if ("function" != typeof e)
                    return s;
                const i = t ? "unshift" : "push";
                return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e),
                s
            },
            offAny(e) {
                const t = this;
                if (!t.eventsListeners || t.destroyed)
                    return t;
                if (!t.eventsAnyListeners)
                    return t;
                const s = t.eventsAnyListeners.indexOf(e);
                return s >= 0 && t.eventsAnyListeners.splice(s, 1),
                t
            },
            off(e, t) {
                const s = this;
                return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e => {
                    void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(( (i, a) => {
                        (i === t || i.__emitterProxy && i.__emitterProxy === t) && s.eventsListeners[e].splice(a, 1)
                    }
                    ))
                }
                )),
                s) : s
            },
            emit() {
                const e = this;
                if (!e.eventsListeners || e.destroyed)
                    return e;
                if (!e.eventsListeners)
                    return e;
                let t, s, i;
                for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++)
                    r[n] = arguments[n];
                return "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0],
                s = r.slice(1, r.length),
                i = e) : (t = r[0].events,
                s = r[0].data,
                i = r[0].context || e),
                s.unshift(i),
                (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
                    e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                        e.apply(i, [t, ...s])
                    }
                    )),
                    e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                        e.apply(i, s)
                    }
                    ))
                }
                )),
                e
            }
        };
        const M = (e, t) => {
            if (!e || e.destroyed || !e.params)
                return;
            const s = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
            if (s) {
                let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
                !t && e.isElement && (s.shadowRoot ? t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(( () => {
                    s.shadowRoot && (t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),
                    t && t.remove())
                }
                ))),
                t && t.remove()
            }
        }
          , L = (e, t) => {
            if (!e.slides[t])
                return;
            const s = e.slides[t].querySelector('[loading="lazy"]');
            s && s.removeAttribute("loading")
        }
          , P = e => {
            if (!e || e.destroyed || !e.params)
                return;
            let t = e.params.lazyPreloadPrevNext;
            const s = e.slides.length;
            if (!s || !t || t < 0)
                return;
            t = Math.min(t, s);
            const i = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView)
              , a = e.activeIndex;
            if (e.params.grid && e.params.grid.rows > 1) {
                const s = a
                  , r = [s - t];
                return r.push(...Array.from({
                    length: t
                }).map(( (e, t) => s + i + t))),
                void e.slides.forEach(( (t, s) => {
                    r.includes(t.column) && L(e, s)
                }
                ))
            }
            const r = a + i - 1;
            if (e.params.rewind || e.params.loop)
                for (let i = a - t; i <= r + t; i += 1) {
                    const t = (i % s + s) % s;
                    (t < a || t > r) && L(e, t)
                }
            else
                for (let i = Math.max(a - t, 0); i <= Math.min(r + t, s - 1); i += 1)
                    i !== a && (i > r || i < a) && L(e, i)
        }
        ;
        var k = {
            updateSize: function() {
                const e = this;
                let t, s;
                const i = e.el;
                t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i.clientWidth,
                s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i.clientHeight,
                0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(v(i, "padding-left") || 0, 10) - parseInt(v(i, "padding-right") || 0, 10),
                s = s - parseInt(v(i, "padding-top") || 0, 10) - parseInt(v(i, "padding-bottom") || 0, 10),
                Number.isNaN(t) && (t = 0),
                Number.isNaN(s) && (s = 0),
                Object.assign(e, {
                    width: t,
                    height: s,
                    size: e.isHorizontal() ? t : s
                }))
            },
            updateSlides: function() {
                const e = this;
                function t(t, s) {
                    return parseFloat(t.getPropertyValue(e.getDirectionLabel(s)) || 0)
                }
                const s = e.params
                  , {wrapperEl: i, slidesEl: a, size: r, rtlTranslate: n, wrongRTL: l} = e
                  , o = e.virtual && s.virtual.enabled
                  , d = o ? e.virtual.slides.length : e.slides.length
                  , c = f(a, `.${e.params.slideClass}, swiper-slide`)
                  , p = o ? e.virtual.slides.length : c.length;
                let m = [];
                const h = []
                  , g = [];
                let w = s.slidesOffsetBefore;
                "function" == typeof w && (w = s.slidesOffsetBefore.call(e));
                let b = s.slidesOffsetAfter;
                "function" == typeof b && (b = s.slidesOffsetAfter.call(e));
                const y = e.snapGrid.length
                  , x = e.slidesGrid.length;
                let T = s.spaceBetween
                  , E = -w
                  , C = 0
                  , M = 0;
                if (void 0 === r)
                    return;
                "string" == typeof T && T.indexOf("%") >= 0 ? T = parseFloat(T.replace("%", "")) / 100 * r : "string" == typeof T && (T = parseFloat(T)),
                e.virtualSize = -T,
                c.forEach((e => {
                    n ? e.style.marginLeft = "" : e.style.marginRight = "",
                    e.style.marginBottom = "",
                    e.style.marginTop = ""
                }
                )),
                s.centeredSlides && s.cssMode && (u(i, "--swiper-centered-offset-before", ""),
                u(i, "--swiper-centered-offset-after", ""));
                const L = s.grid && s.grid.rows > 1 && e.grid;
                let P;
                L ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
                const k = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter((e => void 0 !== s.breakpoints[e].slidesPerView)).length > 0;
                for (let i = 0; i < p; i += 1) {
                    let a;
                    if (P = 0,
                    c[i] && (a = c[i]),
                    L && e.grid.updateSlide(i, a, c),
                    !c[i] || "none" !== v(a, "display")) {
                        if ("auto" === s.slidesPerView) {
                            k && (c[i].style[e.getDirectionLabel("width")] = "");
                            const r = getComputedStyle(a)
                              , n = a.style.transform
                              , l = a.style.webkitTransform;
                            if (n && (a.style.transform = "none"),
                            l && (a.style.webkitTransform = "none"),
                            s.roundLengths)
                                P = e.isHorizontal() ? S(a, "width", !0) : S(a, "height", !0);
                            else {
                                const e = t(r, "width")
                                  , s = t(r, "padding-left")
                                  , i = t(r, "padding-right")
                                  , n = t(r, "margin-left")
                                  , l = t(r, "margin-right")
                                  , o = r.getPropertyValue("box-sizing");
                                if (o && "border-box" === o)
                                    P = e + n + l;
                                else {
                                    const {clientWidth: t, offsetWidth: r} = a;
                                    P = e + s + i + n + l + (r - t)
                                }
                            }
                            n && (a.style.transform = n),
                            l && (a.style.webkitTransform = l),
                            s.roundLengths && (P = Math.floor(P))
                        } else
                            P = (r - (s.slidesPerView - 1) * T) / s.slidesPerView,
                            s.roundLengths && (P = Math.floor(P)),
                            c[i] && (c[i].style[e.getDirectionLabel("width")] = `${P}px`);
                        c[i] && (c[i].swiperSlideSize = P),
                        g.push(P),
                        s.centeredSlides ? (E = E + P / 2 + C / 2 + T,
                        0 === C && 0 !== i && (E = E - r / 2 - T),
                        0 === i && (E = E - r / 2 - T),
                        Math.abs(E) < .001 && (E = 0),
                        s.roundLengths && (E = Math.floor(E)),
                        M % s.slidesPerGroup == 0 && m.push(E),
                        h.push(E)) : (s.roundLengths && (E = Math.floor(E)),
                        (M - Math.min(e.params.slidesPerGroupSkip, M)) % e.params.slidesPerGroup == 0 && m.push(E),
                        h.push(E),
                        E = E + P + T),
                        e.virtualSize += P + T,
                        C = P,
                        M += 1
                    }
                }
                if (e.virtualSize = Math.max(e.virtualSize, r) + b,
                n && l && ("slide" === s.effect || "coverflow" === s.effect) && (i.style.width = `${e.virtualSize + T}px`),
                s.setWrapperSize && (i.style[e.getDirectionLabel("width")] = `${e.virtualSize + T}px`),
                L && e.grid.updateWrapperSize(P, m),
                !s.centeredSlides) {
                    const t = [];
                    for (let i = 0; i < m.length; i += 1) {
                        let a = m[i];
                        s.roundLengths && (a = Math.floor(a)),
                        m[i] <= e.virtualSize - r && t.push(a)
                    }
                    m = t,
                    Math.floor(e.virtualSize - r) - Math.floor(m[m.length - 1]) > 1 && m.push(e.virtualSize - r)
                }
                if (o && s.loop) {
                    const t = g[0] + T;
                    if (s.slidesPerGroup > 1) {
                        const i = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup)
                          , a = t * s.slidesPerGroup;
                        for (let e = 0; e < i; e += 1)
                            m.push(m[m.length - 1] + a)
                    }
                    for (let i = 0; i < e.virtual.slidesBefore + e.virtual.slidesAfter; i += 1)
                        1 === s.slidesPerGroup && m.push(m[m.length - 1] + t),
                        h.push(h[h.length - 1] + t),
                        e.virtualSize += t
                }
                if (0 === m.length && (m = [0]),
                0 !== T) {
                    const t = e.isHorizontal() && n ? "marginLeft" : e.getDirectionLabel("marginRight");
                    c.filter(( (e, t) => !(s.cssMode && !s.loop) || t !== c.length - 1)).forEach((e => {
                        e.style[t] = `${T}px`
                    }
                    ))
                }
                if (s.centeredSlides && s.centeredSlidesBounds) {
                    let e = 0;
                    g.forEach((t => {
                        e += t + (T || 0)
                    }
                    )),
                    e -= T;
                    const t = e - r;
                    m = m.map((e => e <= 0 ? -w : e > t ? t + b : e))
                }
                if (s.centerInsufficientSlides) {
                    let e = 0;
                    if (g.forEach((t => {
                        e += t + (T || 0)
                    }
                    )),
                    e -= T,
                    e < r) {
                        const t = (r - e) / 2;
                        m.forEach(( (e, s) => {
                            m[s] = e - t
                        }
                        )),
                        h.forEach(( (e, s) => {
                            h[s] = e + t
                        }
                        ))
                    }
                }
                if (Object.assign(e, {
                    slides: c,
                    snapGrid: m,
                    slidesGrid: h,
                    slidesSizesGrid: g
                }),
                s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
                    u(i, "--swiper-centered-offset-before", -m[0] + "px"),
                    u(i, "--swiper-centered-offset-after", e.size / 2 - g[g.length - 1] / 2 + "px");
                    const t = -e.snapGrid[0]
                      , s = -e.slidesGrid[0];
                    e.snapGrid = e.snapGrid.map((e => e + t)),
                    e.slidesGrid = e.slidesGrid.map((e => e + s))
                }
                if (p !== d && e.emit("slidesLengthChange"),
                m.length !== y && (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
                h.length !== x && e.emit("slidesGridLengthChange"),
                s.watchSlidesProgress && e.updateSlidesOffset(),
                e.emit("slidesUpdated"),
                !(o || s.cssMode || "slide" !== s.effect && "fade" !== s.effect)) {
                    const t = `${s.containerModifierClass}backface-hidden`
                      , i = e.el.classList.contains(t);
                    p <= s.maxBackfaceHiddenSlides ? i || e.el.classList.add(t) : i && e.el.classList.remove(t)
                }
            },
            updateAutoHeight: function(e) {
                const t = this
                  , s = []
                  , i = t.virtual && t.params.virtual.enabled;
                let a, r = 0;
                "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                const n = e => i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
                if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                    if (t.params.centeredSlides)
                        (t.visibleSlides || []).forEach((e => {
                            s.push(e)
                        }
                        ));
                    else
                        for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
                            const e = t.activeIndex + a;
                            if (e > t.slides.length && !i)
                                break;
                            s.push(n(e))
                        }
                else
                    s.push(n(t.activeIndex));
                for (a = 0; a < s.length; a += 1)
                    if (void 0 !== s[a]) {
                        const e = s[a].offsetHeight;
                        r = e > r ? e : r
                    }
                (r || 0 === r) && (t.wrapperEl.style.height = `${r}px`)
            },
            updateSlidesOffset: function() {
                const e = this
                  , t = e.slides
                  , s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
                for (let i = 0; i < t.length; i += 1)
                    t[i].swiperSlideOffset = (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - s - e.cssOverflowAdjustment()
            },
            updateSlidesProgress: function(e) {
                void 0 === e && (e = this && this.translate || 0);
                const t = this
                  , s = t.params
                  , {slides: i, rtlTranslate: a, snapGrid: r} = t;
                if (0 === i.length)
                    return;
                void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                let n = -e;
                a && (n = e),
                i.forEach((e => {
                    e.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass)
                }
                )),
                t.visibleSlidesIndexes = [],
                t.visibleSlides = [];
                let l = s.spaceBetween;
                "string" == typeof l && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * t.size : "string" == typeof l && (l = parseFloat(l));
                for (let e = 0; e < i.length; e += 1) {
                    const o = i[e];
                    let d = o.swiperSlideOffset;
                    s.cssMode && s.centeredSlides && (d -= i[0].swiperSlideOffset);
                    const c = (n + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l)
                      , p = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l)
                      , u = -(n - d)
                      , m = u + t.slidesSizesGrid[e]
                      , f = u >= 0 && u <= t.size - t.slidesSizesGrid[e];
                    (u >= 0 && u < t.size - 1 || m > 1 && m <= t.size || u <= 0 && m >= t.size) && (t.visibleSlides.push(o),
                    t.visibleSlidesIndexes.push(e),
                    i[e].classList.add(s.slideVisibleClass)),
                    f && i[e].classList.add(s.slideFullyVisibleClass),
                    o.progress = a ? -c : c,
                    o.originalProgress = a ? -p : p
                }
            },
            updateProgress: function(e) {
                const t = this;
                if (void 0 === e) {
                    const s = t.rtlTranslate ? -1 : 1;
                    e = t && t.translate && t.translate * s || 0
                }
                const s = t.params
                  , i = t.maxTranslate() - t.minTranslate();
                let {progress: a, isBeginning: r, isEnd: n, progressLoop: l} = t;
                const o = r
                  , d = n;
                if (0 === i)
                    a = 0,
                    r = !0,
                    n = !0;
                else {
                    a = (e - t.minTranslate()) / i;
                    const s = Math.abs(e - t.minTranslate()) < 1
                      , l = Math.abs(e - t.maxTranslate()) < 1;
                    r = s || a <= 0,
                    n = l || a >= 1,
                    s && (a = 0),
                    l && (a = 1)
                }
                if (s.loop) {
                    const s = t.getSlideIndexByData(0)
                      , i = t.getSlideIndexByData(t.slides.length - 1)
                      , a = t.slidesGrid[s]
                      , r = t.slidesGrid[i]
                      , n = t.slidesGrid[t.slidesGrid.length - 1]
                      , o = Math.abs(e);
                    l = o >= a ? (o - a) / n : (o + n - r) / n,
                    l > 1 && (l -= 1)
                }
                Object.assign(t, {
                    progress: a,
                    progressLoop: l,
                    isBeginning: r,
                    isEnd: n
                }),
                (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e),
                r && !o && t.emit("reachBeginning toEdge"),
                n && !d && t.emit("reachEnd toEdge"),
                (o && !r || d && !n) && t.emit("fromEdge"),
                t.emit("progress", a)
            },
            updateSlidesClasses: function() {
                const e = this
                  , {slides: t, params: s, slidesEl: i, activeIndex: a} = e
                  , r = e.virtual && s.virtual.enabled
                  , n = e.grid && s.grid && s.grid.rows > 1
                  , l = e => f(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
                let o, d, c;
                if (t.forEach((e => {
                    e.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass)
                }
                )),
                r)
                    if (s.loop) {
                        let t = a - e.virtual.slidesBefore;
                        t < 0 && (t = e.virtual.slides.length + t),
                        t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
                        o = l(`[data-swiper-slide-index="${t}"]`)
                    } else
                        o = l(`[data-swiper-slide-index="${a}"]`);
                else
                    n ? (o = t.filter((e => e.column === a))[0],
                    c = t.filter((e => e.column === a + 1))[0],
                    d = t.filter((e => e.column === a - 1))[0]) : o = t[a];
                o && (o.classList.add(s.slideActiveClass),
                n ? (c && c.classList.add(s.slideNextClass),
                d && d.classList.add(s.slidePrevClass)) : (c = function(e, t) {
                    const s = [];
                    for (; e.nextElementSibling; ) {
                        const i = e.nextElementSibling;
                        t ? i.matches(t) && s.push(i) : s.push(i),
                        e = i
                    }
                    return s
                }(o, `.${s.slideClass}, swiper-slide`)[0],
                s.loop && !c && (c = t[0]),
                c && c.classList.add(s.slideNextClass),
                d = function(e, t) {
                    const s = [];
                    for (; e.previousElementSibling; ) {
                        const i = e.previousElementSibling;
                        t ? i.matches(t) && s.push(i) : s.push(i),
                        e = i
                    }
                    return s
                }(o, `.${s.slideClass}, swiper-slide`)[0],
                s.loop && 0 === !d && (d = t[t.length - 1]),
                d && d.classList.add(s.slidePrevClass))),
                e.emitSlidesClasses()
            },
            updateActiveIndex: function(e) {
                const t = this
                  , s = t.rtlTranslate ? t.translate : -t.translate
                  , {snapGrid: i, params: a, activeIndex: r, realIndex: n, snapIndex: l} = t;
                let o, d = e;
                const c = e => {
                    let s = e - t.virtual.slidesBefore;
                    return s < 0 && (s = t.virtual.slides.length + s),
                    s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
                    s
                }
                ;
                if (void 0 === d && (d = function(e) {
                    const {slidesGrid: t, params: s} = e
                      , i = e.rtlTranslate ? e.translate : -e.translate;
                    let a;
                    for (let e = 0; e < t.length; e += 1)
                        void 0 !== t[e + 1] ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2 ? a = e : i >= t[e] && i < t[e + 1] && (a = e + 1) : i >= t[e] && (a = e);
                    return s.normalizeSlideIndex && (a < 0 || void 0 === a) && (a = 0),
                    a
                }(t)),
                i.indexOf(s) >= 0)
                    o = i.indexOf(s);
                else {
                    const e = Math.min(a.slidesPerGroupSkip, d);
                    o = e + Math.floor((d - e) / a.slidesPerGroup)
                }
                if (o >= i.length && (o = i.length - 1),
                d === r && !t.params.loop)
                    return void (o !== l && (t.snapIndex = o,
                    t.emit("snapIndexChange")));
                if (d === r && t.params.loop && t.virtual && t.params.virtual.enabled)
                    return void (t.realIndex = c(d));
                const p = t.grid && a.grid && a.grid.rows > 1;
                let u;
                if (t.virtual && a.virtual.enabled && a.loop)
                    u = c(d);
                else if (p) {
                    const e = t.slides.filter((e => e.column === d))[0];
                    let s = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                    Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)),
                    u = Math.floor(s / a.grid.rows)
                } else if (t.slides[d]) {
                    const e = t.slides[d].getAttribute("data-swiper-slide-index");
                    u = e ? parseInt(e, 10) : d
                } else
                    u = d;
                Object.assign(t, {
                    previousSnapIndex: l,
                    snapIndex: o,
                    previousRealIndex: n,
                    realIndex: u,
                    previousIndex: r,
                    activeIndex: d
                }),
                t.initialized && P(t),
                t.emit("activeIndexChange"),
                t.emit("snapIndexChange"),
                (t.initialized || t.params.runCallbacksOnInit) && (n !== u && t.emit("realIndexChange"),
                t.emit("slideChange"))
            },
            updateClickedSlide: function(e, t) {
                const s = this
                  , i = s.params;
                let a = e.closest(`.${i.slideClass}, swiper-slide`);
                !a && s.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e => {
                    !a && e.matches && e.matches(`.${i.slideClass}, swiper-slide`) && (a = e)
                }
                ));
                let r, n = !1;
                if (a)
                    for (let e = 0; e < s.slides.length; e += 1)
                        if (s.slides[e] === a) {
                            n = !0,
                            r = e;
                            break
                        }
                if (!a || !n)
                    return s.clickedSlide = void 0,
                    void (s.clickedIndex = void 0);
                s.clickedSlide = a,
                s.virtual && s.params.virtual.enabled ? s.clickedIndex = parseInt(a.getAttribute("data-swiper-slide-index"), 10) : s.clickedIndex = r,
                i.slideToClickedSlide && void 0 !== s.clickedIndex && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide()
            }
        };
        function A(e) {
            let {swiper: t, runCallbacks: s, direction: i, step: a} = e;
            const {activeIndex: r, previousIndex: n} = t;
            let l = i;
            if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"),
            t.emit(`transition${a}`),
            s && r !== n) {
                if ("reset" === l)
                    return void t.emit(`slideResetTransition${a}`);
                t.emit(`slideChangeTransition${a}`),
                "next" === l ? t.emit(`slideNextTransition${a}`) : t.emit(`slidePrevTransition${a}`)
            }
        }
        var I = {
            slideTo: function(e, t, s, i, a) {
                void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === s && (s = !0),
                "string" == typeof e && (e = parseInt(e, 10));
                const r = this;
                let n = e;
                n < 0 && (n = 0);
                const {params: l, snapGrid: o, slidesGrid: d, previousIndex: c, activeIndex: p, rtlTranslate: u, wrapperEl: f, enabled: h} = r;
                if (r.animating && l.preventInteractionOnTransition || !h && !i && !a)
                    return !1;
                const g = Math.min(r.params.slidesPerGroupSkip, n);
                let v = g + Math.floor((n - g) / r.params.slidesPerGroup);
                v >= o.length && (v = o.length - 1);
                const w = -o[v];
                if (l.normalizeSlideIndex)
                    for (let e = 0; e < d.length; e += 1) {
                        const t = -Math.floor(100 * w)
                          , s = Math.floor(100 * d[e])
                          , i = Math.floor(100 * d[e + 1]);
                        void 0 !== d[e + 1] ? t >= s && t < i - (i - s) / 2 ? n = e : t >= s && t < i && (n = e + 1) : t >= s && (n = e)
                    }
                if (r.initialized && n !== p) {
                    if (!r.allowSlideNext && (u ? w > r.translate && w > r.minTranslate() : w < r.translate && w < r.minTranslate()))
                        return !1;
                    if (!r.allowSlidePrev && w > r.translate && w > r.maxTranslate() && (p || 0) !== n)
                        return !1
                }
                let b;
                if (n !== (c || 0) && s && r.emit("beforeSlideChangeStart"),
                r.updateProgress(w),
                b = n > p ? "next" : n < p ? "prev" : "reset",
                u && -w === r.translate || !u && w === r.translate)
                    return r.updateActiveIndex(n),
                    l.autoHeight && r.updateAutoHeight(),
                    r.updateSlidesClasses(),
                    "slide" !== l.effect && r.setTranslate(w),
                    "reset" !== b && (r.transitionStart(s, b),
                    r.transitionEnd(s, b)),
                    !1;
                if (l.cssMode) {
                    const e = r.isHorizontal()
                      , s = u ? w : -w;
                    if (0 === t) {
                        const t = r.virtual && r.params.virtual.enabled;
                        t && (r.wrapperEl.style.scrollSnapType = "none",
                        r._immediateVirtual = !0),
                        t && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0,
                        requestAnimationFrame(( () => {
                            f[e ? "scrollLeft" : "scrollTop"] = s
                        }
                        ))) : f[e ? "scrollLeft" : "scrollTop"] = s,
                        t && requestAnimationFrame(( () => {
                            r.wrapperEl.style.scrollSnapType = "",
                            r._immediateVirtual = !1
                        }
                        ))
                    } else {
                        if (!r.support.smoothScroll)
                            return m({
                                swiper: r,
                                targetPosition: s,
                                side: e ? "left" : "top"
                            }),
                            !0;
                        f.scrollTo({
                            [e ? "left" : "top"]: s,
                            behavior: "smooth"
                        })
                    }
                    return !0
                }
                return r.setTransition(t),
                r.setTranslate(w),
                r.updateActiveIndex(n),
                r.updateSlidesClasses(),
                r.emit("beforeTransitionStart", t, i),
                r.transitionStart(s, b),
                0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0,
                r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                    r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                    r.onSlideToWrapperTransitionEnd = null,
                    delete r.onSlideToWrapperTransitionEnd,
                    r.transitionEnd(s, b))
                }
                ),
                r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)),
                !0
            },
            slideToLoop: function(e, t, s, i) {
                void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === s && (s = !0),
                "string" == typeof e && (e = parseInt(e, 10));
                const a = this
                  , r = a.grid && a.params.grid && a.params.grid.rows > 1;
                let n = e;
                if (a.params.loop)
                    if (a.virtual && a.params.virtual.enabled)
                        n += a.virtual.slidesBefore;
                    else {
                        let e;
                        if (r) {
                            const t = n * a.params.grid.rows;
                            e = a.slides.filter((e => 1 * e.getAttribute("data-swiper-slide-index") === t))[0].column
                        } else
                            e = a.getSlideIndexByData(n);
                        const t = r ? Math.ceil(a.slides.length / a.params.grid.rows) : a.slides.length
                          , {centeredSlides: s} = a.params;
                        let i = a.params.slidesPerView;
                        "auto" === i ? i = a.slidesPerViewDynamic() : (i = Math.ceil(parseFloat(a.params.slidesPerView, 10)),
                        s && i % 2 == 0 && (i += 1));
                        let l = t - e < i;
                        if (s && (l = l || e < Math.ceil(i / 2)),
                        l) {
                            const i = s ? e < a.activeIndex ? "prev" : "next" : e - a.activeIndex - 1 < a.params.slidesPerView ? "next" : "prev";
                            a.loopFix({
                                direction: i,
                                slideTo: !0,
                                activeSlideIndex: "next" === i ? e + 1 : e - t + 1,
                                slideRealIndex: "next" === i ? a.realIndex : void 0
                            })
                        }
                        if (r) {
                            const e = n * a.params.grid.rows;
                            n = a.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0].column
                        } else
                            n = a.getSlideIndexByData(n)
                    }
                return requestAnimationFrame(( () => {
                    a.slideTo(n, t, s, i)
                }
                )),
                a
            },
            slideNext: function(e, t, s) {
                void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0);
                const i = this
                  , {enabled: a, params: r, animating: n} = i;
                if (!a)
                    return i;
                let l = r.slidesPerGroup;
                "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
                const o = i.activeIndex < r.slidesPerGroupSkip ? 1 : l
                  , d = i.virtual && r.virtual.enabled;
                if (r.loop) {
                    if (n && !d && r.loopPreventsSliding)
                        return !1;
                    if (i.loopFix({
                        direction: "next"
                    }),
                    i._clientLeft = i.wrapperEl.clientLeft,
                    i.activeIndex === i.slides.length - 1 && r.cssMode)
                        return requestAnimationFrame(( () => {
                            i.slideTo(i.activeIndex + o, e, t, s)
                        }
                        )),
                        !0
                }
                return r.rewind && i.isEnd ? i.slideTo(0, e, t, s) : i.slideTo(i.activeIndex + o, e, t, s)
            },
            slidePrev: function(e, t, s) {
                void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0);
                const i = this
                  , {params: a, snapGrid: r, slidesGrid: n, rtlTranslate: l, enabled: o, animating: d} = i;
                if (!o)
                    return i;
                const c = i.virtual && a.virtual.enabled;
                if (a.loop) {
                    if (d && !c && a.loopPreventsSliding)
                        return !1;
                    i.loopFix({
                        direction: "prev"
                    }),
                    i._clientLeft = i.wrapperEl.clientLeft
                }
                function p(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }
                const u = p(l ? i.translate : -i.translate)
                  , m = r.map((e => p(e)));
                let f = r[m.indexOf(u) - 1];
                if (void 0 === f && a.cssMode) {
                    let e;
                    r.forEach(( (t, s) => {
                        u >= t && (e = s)
                    }
                    )),
                    void 0 !== e && (f = r[e > 0 ? e - 1 : e])
                }
                let h = 0;
                if (void 0 !== f && (h = n.indexOf(f),
                h < 0 && (h = i.activeIndex - 1),
                "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (h = h - i.slidesPerViewDynamic("previous", !0) + 1,
                h = Math.max(h, 0))),
                a.rewind && i.isBeginning) {
                    const a = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
                    return i.slideTo(a, e, t, s)
                }
                return a.loop && 0 === i.activeIndex && a.cssMode ? (requestAnimationFrame(( () => {
                    i.slideTo(h, e, t, s)
                }
                )),
                !0) : i.slideTo(h, e, t, s)
            },
            slideReset: function(e, t, s) {
                return void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0),
                this.slideTo(this.activeIndex, e, t, s)
            },
            slideToClosest: function(e, t, s, i) {
                void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0),
                void 0 === i && (i = .5);
                const a = this;
                let r = a.activeIndex;
                const n = Math.min(a.params.slidesPerGroupSkip, r)
                  , l = n + Math.floor((r - n) / a.params.slidesPerGroup)
                  , o = a.rtlTranslate ? a.translate : -a.translate;
                if (o >= a.snapGrid[l]) {
                    const e = a.snapGrid[l];
                    o - e > (a.snapGrid[l + 1] - e) * i && (r += a.params.slidesPerGroup)
                } else {
                    const e = a.snapGrid[l - 1];
                    o - e <= (a.snapGrid[l] - e) * i && (r -= a.params.slidesPerGroup)
                }
                return r = Math.max(r, 0),
                r = Math.min(r, a.slidesGrid.length - 1),
                a.slideTo(r, e, t, s)
            },
            slideToClickedSlide: function() {
                const e = this
                  , {params: t, slidesEl: s} = e
                  , i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                let a, r = e.clickedIndex;
                const n = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
                if (t.loop) {
                    if (e.animating)
                        return;
                    a = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
                    t.centeredSlides ? r < e.loopedSlides - i / 2 || r > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(),
                    r = e.getSlideIndex(f(s, `${n}[data-swiper-slide-index="${a}"]`)[0]),
                    o(( () => {
                        e.slideTo(r)
                    }
                    ))) : e.slideTo(r) : r > e.slides.length - i ? (e.loopFix(),
                    r = e.getSlideIndex(f(s, `${n}[data-swiper-slide-index="${a}"]`)[0]),
                    o(( () => {
                        e.slideTo(r)
                    }
                    ))) : e.slideTo(r)
                } else
                    e.slideTo(r)
            }
        }
          , O = {
            loopCreate: function(e) {
                const t = this
                  , {params: s, slidesEl: i} = t;
                if (!s.loop || t.virtual && t.params.virtual.enabled)
                    return;
                const a = () => {
                    f(i, `.${s.slideClass}, swiper-slide`).forEach(( (e, t) => {
                        e.setAttribute("data-swiper-slide-index", t)
                    }
                    ))
                }
                  , r = t.grid && s.grid && s.grid.rows > 1
                  , n = s.slidesPerGroup * (r ? s.grid.rows : 1)
                  , l = t.slides.length % n != 0
                  , o = r && t.slides.length % s.grid.rows != 0
                  , d = e => {
                    for (let i = 0; i < e; i += 1) {
                        const e = t.isElement ? g("swiper-slide", [s.slideBlankClass]) : g("div", [s.slideClass, s.slideBlankClass]);
                        t.slidesEl.append(e)
                    }
                }
                ;
                l ? (s.loopAddBlankSlides ? (d(n - t.slides.length % n),
                t.recalcSlides(),
                t.updateSlides()) : h("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"),
                a()) : o ? (s.loopAddBlankSlides ? (d(s.grid.rows - t.slides.length % s.grid.rows),
                t.recalcSlides(),
                t.updateSlides()) : h("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"),
                a()) : a(),
                t.loopFix({
                    slideRealIndex: e,
                    direction: s.centeredSlides ? void 0 : "next"
                })
            },
            loopFix: function(e) {
                let {slideRealIndex: t, slideTo: s=!0, direction: i, setTranslate: a, activeSlideIndex: r, byController: n, byMousewheel: l} = void 0 === e ? {} : e;
                const o = this;
                if (!o.params.loop)
                    return;
                o.emit("beforeLoopFix");
                const {slides: d, allowSlidePrev: c, allowSlideNext: p, slidesEl: u, params: m} = o
                  , {centeredSlides: f} = m;
                if (o.allowSlidePrev = !0,
                o.allowSlideNext = !0,
                o.virtual && m.virtual.enabled)
                    return s && (m.centeredSlides || 0 !== o.snapIndex ? m.centeredSlides && o.snapIndex < m.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0) : o.slideTo(o.virtual.slides.length, 0, !1, !0)),
                    o.allowSlidePrev = c,
                    o.allowSlideNext = p,
                    void o.emit("loopFix");
                let g = m.slidesPerView;
                "auto" === g ? g = o.slidesPerViewDynamic() : (g = Math.ceil(parseFloat(m.slidesPerView, 10)),
                f && g % 2 == 0 && (g += 1));
                const v = m.slidesPerGroupAuto ? g : m.slidesPerGroup;
                let w = v;
                w % v != 0 && (w += v - w % v),
                w += m.loopAdditionalSlides,
                o.loopedSlides = w;
                const b = o.grid && m.grid && m.grid.rows > 1;
                d.length < g + w ? h("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && "row" === m.grid.fill && h("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
                const S = []
                  , y = [];
                let x = o.activeIndex;
                void 0 === r ? r = o.getSlideIndex(d.filter((e => e.classList.contains(m.slideActiveClass)))[0]) : x = r;
                const T = "next" === i || !i
                  , E = "prev" === i || !i;
                let C = 0
                  , M = 0;
                const L = b ? Math.ceil(d.length / m.grid.rows) : d.length
                  , P = (b ? d[r].column : r) + (f && void 0 === a ? -g / 2 + .5 : 0);
                if (P < w) {
                    C = Math.max(w - P, v);
                    for (let e = 0; e < w - P; e += 1) {
                        const t = e - Math.floor(e / L) * L;
                        if (b) {
                            const e = L - t - 1;
                            for (let t = d.length - 1; t >= 0; t -= 1)
                                d[t].column === e && S.push(t)
                        } else
                            S.push(L - t - 1)
                    }
                } else if (P + g > L - w) {
                    M = Math.max(P - (L - 2 * w), v);
                    for (let e = 0; e < M; e += 1) {
                        const t = e - Math.floor(e / L) * L;
                        b ? d.forEach(( (e, s) => {
                            e.column === t && y.push(s)
                        }
                        )) : y.push(t)
                    }
                }
                if (o.__preventObserver__ = !0,
                requestAnimationFrame(( () => {
                    o.__preventObserver__ = !1
                }
                )),
                E && S.forEach((e => {
                    d[e].swiperLoopMoveDOM = !0,
                    u.prepend(d[e]),
                    d[e].swiperLoopMoveDOM = !1
                }
                )),
                T && y.forEach((e => {
                    d[e].swiperLoopMoveDOM = !0,
                    u.append(d[e]),
                    d[e].swiperLoopMoveDOM = !1
                }
                )),
                o.recalcSlides(),
                "auto" === m.slidesPerView ? o.updateSlides() : b && (S.length > 0 && E || y.length > 0 && T) && o.slides.forEach(( (e, t) => {
                    o.grid.updateSlide(t, e, o.slides)
                }
                )),
                m.watchSlidesProgress && o.updateSlidesOffset(),
                s)
                    if (S.length > 0 && E) {
                        if (void 0 === t) {
                            const e = o.slidesGrid[x]
                              , t = o.slidesGrid[x + C] - e;
                            l ? o.setTranslate(o.translate - t) : (o.slideTo(x + C, 0, !1, !0),
                            a && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - t,
                            o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - t))
                        } else if (a) {
                            const e = b ? S.length / m.grid.rows : S.length;
                            o.slideTo(o.activeIndex + e, 0, !1, !0),
                            o.touchEventsData.currentTranslate = o.translate
                        }
                    } else if (y.length > 0 && T)
                        if (void 0 === t) {
                            const e = o.slidesGrid[x]
                              , t = o.slidesGrid[x - M] - e;
                            l ? o.setTranslate(o.translate - t) : (o.slideTo(x - M, 0, !1, !0),
                            a && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - t,
                            o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - t))
                        } else {
                            const e = b ? y.length / m.grid.rows : y.length;
                            o.slideTo(o.activeIndex - e, 0, !1, !0)
                        }
                if (o.allowSlidePrev = c,
                o.allowSlideNext = p,
                o.controller && o.controller.control && !n) {
                    const e = {
                        slideRealIndex: t,
                        direction: i,
                        setTranslate: a,
                        activeSlideIndex: r,
                        byController: !0
                    };
                    Array.isArray(o.controller.control) ? o.controller.control.forEach((t => {
                        !t.destroyed && t.params.loop && t.loopFix({
                            ...e,
                            slideTo: t.params.slidesPerView === m.slidesPerView && s
                        })
                    }
                    )) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix({
                        ...e,
                        slideTo: o.controller.control.params.slidesPerView === m.slidesPerView && s
                    })
                }
                o.emit("loopFix")
            },
            loopDestroy: function() {
                const e = this
                  , {params: t, slidesEl: s} = e;
                if (!t.loop || e.virtual && e.params.virtual.enabled)
                    return;
                e.recalcSlides();
                const i = [];
                e.slides.forEach((e => {
                    const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                    i[t] = e
                }
                )),
                e.slides.forEach((e => {
                    e.removeAttribute("data-swiper-slide-index")
                }
                )),
                i.forEach((e => {
                    s.append(e)
                }
                )),
                e.recalcSlides(),
                e.slideTo(e.realIndex, 0)
            }
        };
        function z(e, t, s) {
            const i = l()
              , {params: a} = e
              , r = a.edgeSwipeDetection
              , n = a.edgeSwipeThreshold;
            return !r || !(s <= n || s >= i.innerWidth - n) || "prevent" === r && (t.preventDefault(),
            !0)
        }
        function _(e) {
            const t = this
              , s = r();
            let i = e;
            i.originalEvent && (i = i.originalEvent);
            const a = t.touchEventsData;
            if ("pointerdown" === i.type) {
                if (null !== a.pointerId && a.pointerId !== i.pointerId)
                    return;
                a.pointerId = i.pointerId
            } else
                "touchstart" === i.type && 1 === i.targetTouches.length && (a.touchId = i.targetTouches[0].identifier);
            if ("touchstart" === i.type)
                return void z(t, i, i.targetTouches[0].pageX);
            const {params: n, touches: o, enabled: c} = t;
            if (!c)
                return;
            if (!n.simulateTouch && "mouse" === i.pointerType)
                return;
            if (t.animating && n.preventInteractionOnTransition)
                return;
            !t.animating && n.cssMode && n.loop && t.loopFix();
            let p = i.target;
            if ("wrapper" === n.touchEventsTarget && !t.wrapperEl.contains(p))
                return;
            if ("which"in i && 3 === i.which)
                return;
            if ("button"in i && i.button > 0)
                return;
            if (a.isTouched && a.isMoved)
                return;
            const u = !!n.noSwipingClass && "" !== n.noSwipingClass
              , m = i.composedPath ? i.composedPath() : i.path;
            u && i.target && i.target.shadowRoot && m && (p = m[0]);
            const f = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`
              , h = !(!i.target || !i.target.shadowRoot);
            if (n.noSwiping && (h ? function(e, t) {
                return void 0 === t && (t = this),
                function t(s) {
                    if (!s || s === r() || s === l())
                        return null;
                    s.assignedSlot && (s = s.assignedSlot);
                    const i = s.closest(e);
                    return i || s.getRootNode ? i || t(s.getRootNode().host) : null
                }(t)
            }(f, p) : p.closest(f)))
                return void (t.allowClick = !0);
            if (n.swipeHandler && !p.closest(n.swipeHandler))
                return;
            o.currentX = i.pageX,
            o.currentY = i.pageY;
            const g = o.currentX
              , v = o.currentY;
            if (!z(t, i, g))
                return;
            Object.assign(a, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
            }),
            o.startX = g,
            o.startY = v,
            a.touchStartTime = d(),
            t.allowClick = !0,
            t.updateSize(),
            t.swipeDirection = void 0,
            n.threshold > 0 && (a.allowThresholdMove = !1);
            let w = !0;
            p.matches(a.focusableElements) && (w = !1,
            "SELECT" === p.nodeName && (a.isTouched = !1)),
            s.activeElement && s.activeElement.matches(a.focusableElements) && s.activeElement !== p && s.activeElement.blur();
            const b = w && t.allowTouchMove && n.touchStartPreventDefault;
            !n.touchStartForcePreventDefault && !b || p.isContentEditable || i.preventDefault(),
            n.freeMode && n.freeMode.enabled && t.freeMode && t.animating && !n.cssMode && t.freeMode.onTouchStart(),
            t.emit("touchStart", i)
        }
        function G(e) {
            const t = r()
              , s = this
              , i = s.touchEventsData
              , {params: a, touches: n, rtlTranslate: l, enabled: o} = s;
            if (!o)
                return;
            if (!a.simulateTouch && "mouse" === e.pointerType)
                return;
            let c, p = e;
            if (p.originalEvent && (p = p.originalEvent),
            "pointermove" === p.type) {
                if (null !== i.touchId)
                    return;
                if (p.pointerId !== i.pointerId)
                    return
            }
            if ("touchmove" === p.type) {
                if (c = [...p.changedTouches].filter((e => e.identifier === i.touchId))[0],
                !c || c.identifier !== i.touchId)
                    return
            } else
                c = p;
            if (!i.isTouched)
                return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", p));
            const u = c.pageX
              , m = c.pageY;
            if (p.preventedByNestedSwiper)
                return n.startX = u,
                void (n.startY = m);
            if (!s.allowTouchMove)
                return p.target.matches(i.focusableElements) || (s.allowClick = !1),
                void (i.isTouched && (Object.assign(n, {
                    startX: u,
                    startY: m,
                    currentX: u,
                    currentY: m
                }),
                i.touchStartTime = d()));
            if (a.touchReleaseOnEdges && !a.loop)
                if (s.isVertical()) {
                    if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate())
                        return i.isTouched = !1,
                        void (i.isMoved = !1)
                } else if (u < n.startX && s.translate <= s.maxTranslate() || u > n.startX && s.translate >= s.minTranslate())
                    return;
            if (t.activeElement && p.target === t.activeElement && p.target.matches(i.focusableElements))
                return i.isMoved = !0,
                void (s.allowClick = !1);
            i.allowTouchCallbacks && s.emit("touchMove", p),
            n.previousX = n.currentX,
            n.previousY = n.currentY,
            n.currentX = u,
            n.currentY = m;
            const f = n.currentX - n.startX
              , h = n.currentY - n.startY;
            if (s.params.threshold && Math.sqrt(f ** 2 + h ** 2) < s.params.threshold)
                return;
            if (void 0 === i.isScrolling) {
                let e;
                s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : f * f + h * h >= 25 && (e = 180 * Math.atan2(Math.abs(h), Math.abs(f)) / Math.PI,
                i.isScrolling = s.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle)
            }
            if (i.isScrolling && s.emit("touchMoveOpposite", p),
            void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)),
            i.isScrolling)
                return void (i.isTouched = !1);
            if (!i.startMoving)
                return;
            s.allowClick = !1,
            !a.cssMode && p.cancelable && p.preventDefault(),
            a.touchMoveStopPropagation && !a.nested && p.stopPropagation();
            let g = s.isHorizontal() ? f : h
              , v = s.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
            a.oneWayMovement && (g = Math.abs(g) * (l ? 1 : -1),
            v = Math.abs(v) * (l ? 1 : -1)),
            n.diff = g,
            g *= a.touchRatio,
            l && (g = -g,
            v = -v);
            const w = s.touchesDirection;
            s.swipeDirection = g > 0 ? "prev" : "next",
            s.touchesDirection = v > 0 ? "prev" : "next";
            const b = s.params.loop && !a.cssMode
              , S = "next" === s.touchesDirection && s.allowSlideNext || "prev" === s.touchesDirection && s.allowSlidePrev;
            if (!i.isMoved) {
                if (b && S && s.loopFix({
                    direction: s.swipeDirection
                }),
                i.startTranslate = s.getTranslate(),
                s.setTransition(0),
                s.animating) {
                    const e = new window.CustomEvent("transitionend",{
                        bubbles: !0,
                        cancelable: !0
                    });
                    s.wrapperEl.dispatchEvent(e)
                }
                i.allowMomentumBounce = !1,
                !a.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0),
                s.emit("sliderFirstMove", p)
            }
            if ((new Date).getTime(),
            i.isMoved && i.allowThresholdMove && w !== s.touchesDirection && b && S && Math.abs(g) >= 1)
                return Object.assign(n, {
                    startX: u,
                    startY: m,
                    currentX: u,
                    currentY: m,
                    startTranslate: i.currentTranslate
                }),
                i.loopSwapReset = !0,
                void (i.startTranslate = i.currentTranslate);
            s.emit("sliderMove", p),
            i.isMoved = !0,
            i.currentTranslate = g + i.startTranslate;
            let y = !0
              , x = a.resistanceRatio;
            if (a.touchReleaseOnEdges && (x = 0),
            g > 0 ? (b && S && i.allowThresholdMove && i.currentTranslate > (a.centeredSlides ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1] : s.minTranslate()) && s.loopFix({
                direction: "prev",
                setTranslate: !0,
                activeSlideIndex: 0
            }),
            i.currentTranslate > s.minTranslate() && (y = !1,
            a.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + g) ** x))) : g < 0 && (b && S && i.allowThresholdMove && i.currentTranslate < (a.centeredSlides ? s.maxTranslate() + s.slidesSizesGrid[s.slidesSizesGrid.length - 1] : s.maxTranslate()) && s.loopFix({
                direction: "next",
                setTranslate: !0,
                activeSlideIndex: s.slides.length - ("auto" === a.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(a.slidesPerView, 10)))
            }),
            i.currentTranslate < s.maxTranslate() && (y = !1,
            a.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - g) ** x))),
            y && (p.preventedByNestedSwiper = !0),
            !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
            !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
            s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate),
            a.threshold > 0) {
                if (!(Math.abs(g) > a.threshold || i.allowThresholdMove))
                    return void (i.currentTranslate = i.startTranslate);
                if (!i.allowThresholdMove)
                    return i.allowThresholdMove = !0,
                    n.startX = n.currentX,
                    n.startY = n.currentY,
                    i.currentTranslate = i.startTranslate,
                    void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
            }
            a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && s.freeMode || a.watchSlidesProgress) && (s.updateActiveIndex(),
            s.updateSlidesClasses()),
            a.freeMode && a.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(),
            s.updateProgress(i.currentTranslate),
            s.setTranslate(i.currentTranslate))
        }
        function D(e) {
            const t = this
              , s = t.touchEventsData;
            let i, a = e;
            if (a.originalEvent && (a = a.originalEvent),
            "touchend" === a.type || "touchcancel" === a.type) {
                if (i = [...a.changedTouches].filter((e => e.identifier === s.touchId))[0],
                !i || i.identifier !== s.touchId)
                    return
            } else {
                if (null !== s.touchId)
                    return;
                if (a.pointerId !== s.pointerId)
                    return;
                i = a
            }
            if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(a.type) && (!["pointercancel", "contextmenu"].includes(a.type) || !t.browser.isSafari && !t.browser.isWebView))
                return;
            s.pointerId = null,
            s.touchId = null;
            const {params: r, touches: n, rtlTranslate: l, slidesGrid: c, enabled: p} = t;
            if (!p)
                return;
            if (!r.simulateTouch && "mouse" === a.pointerType)
                return;
            if (s.allowTouchCallbacks && t.emit("touchEnd", a),
            s.allowTouchCallbacks = !1,
            !s.isTouched)
                return s.isMoved && r.grabCursor && t.setGrabCursor(!1),
                s.isMoved = !1,
                void (s.startMoving = !1);
            r.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            const u = d()
              , m = u - s.touchStartTime;
            if (t.allowClick) {
                const e = a.path || a.composedPath && a.composedPath();
                t.updateClickedSlide(e && e[0] || a.target, e),
                t.emit("tap click", a),
                m < 300 && u - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", a)
            }
            if (s.lastClickTime = d(),
            o(( () => {
                t.destroyed || (t.allowClick = !0)
            }
            )),
            !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === n.diff && !s.loopSwapReset || s.currentTranslate === s.startTranslate && !s.loopSwapReset)
                return s.isTouched = !1,
                s.isMoved = !1,
                void (s.startMoving = !1);
            let f;
            if (s.isTouched = !1,
            s.isMoved = !1,
            s.startMoving = !1,
            f = r.followFinger ? l ? t.translate : -t.translate : -s.currentTranslate,
            r.cssMode)
                return;
            if (r.freeMode && r.freeMode.enabled)
                return void t.freeMode.onTouchEnd({
                    currentPos: f
                });
            const h = f >= -t.maxTranslate() && !t.params.loop;
            let g = 0
              , v = t.slidesSizesGrid[0];
            for (let e = 0; e < c.length; e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
                const t = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                void 0 !== c[e + t] ? (h || f >= c[e] && f < c[e + t]) && (g = e,
                v = c[e + t] - c[e]) : (h || f >= c[e]) && (g = e,
                v = c[c.length - 1] - c[c.length - 2])
            }
            let w = null
              , b = null;
            r.rewind && (t.isBeginning ? b = r.virtual && r.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (w = 0));
            const S = (f - c[g]) / v
              , y = g < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
            if (m > r.longSwipesMs) {
                if (!r.longSwipes)
                    return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && (S >= r.longSwipesRatio ? t.slideTo(r.rewind && t.isEnd ? w : g + y) : t.slideTo(g)),
                "prev" === t.swipeDirection && (S > 1 - r.longSwipesRatio ? t.slideTo(g + y) : null !== b && S < 0 && Math.abs(S) > r.longSwipesRatio ? t.slideTo(b) : t.slideTo(g))
            } else {
                if (!r.shortSwipes)
                    return void t.slideTo(t.activeIndex);
                !t.navigation || a.target !== t.navigation.nextEl && a.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== w ? w : g + y),
                "prev" === t.swipeDirection && t.slideTo(null !== b ? b : g)) : a.target === t.navigation.nextEl ? t.slideTo(g + y) : t.slideTo(g)
            }
        }
        function $() {
            const e = this
              , {params: t, el: s} = e;
            if (s && 0 === s.offsetWidth)
                return;
            t.breakpoints && e.setBreakpoint();
            const {allowSlideNext: i, allowSlidePrev: a, snapGrid: r} = e
              , n = e.virtual && e.params.virtual.enabled;
            e.allowSlideNext = !0,
            e.allowSlidePrev = !0,
            e.updateSize(),
            e.updateSlides(),
            e.updateSlidesClasses();
            const l = n && t.loop;
            !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || l ? e.params.loop && !n ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0),
            e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout),
            e.autoplay.resizeTimeout = setTimeout(( () => {
                e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
            }
            ), 500)),
            e.allowSlidePrev = a,
            e.allowSlideNext = i,
            e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
        }
        function B(e) {
            const t = this;
            t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation && t.animating && (e.stopPropagation(),
            e.stopImmediatePropagation())))
        }
        function V() {
            const e = this
              , {wrapperEl: t, rtlTranslate: s, enabled: i} = e;
            if (!i)
                return;
            let a;
            e.previousTranslate = e.translate,
            e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop,
            0 === e.translate && (e.translate = 0),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
            const r = e.maxTranslate() - e.minTranslate();
            a = 0 === r ? 0 : (e.translate - e.minTranslate()) / r,
            a !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
            e.emit("setTranslate", e.translate, !1)
        }
        function F(e) {
            const t = this;
            M(t, e.target),
            t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
        }
        function N() {
            const e = this;
            e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0,
            e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
        }
        const H = (e, t) => {
            const s = r()
              , {params: i, el: a, wrapperEl: n, device: l} = e
              , o = !!i.nested
              , d = "on" === t ? "addEventListener" : "removeEventListener"
              , c = t;
            s[d]("touchstart", e.onDocumentTouchStart, {
                passive: !1,
                capture: o
            }),
            a[d]("touchstart", e.onTouchStart, {
                passive: !1
            }),
            a[d]("pointerdown", e.onTouchStart, {
                passive: !1
            }),
            s[d]("touchmove", e.onTouchMove, {
                passive: !1,
                capture: o
            }),
            s[d]("pointermove", e.onTouchMove, {
                passive: !1,
                capture: o
            }),
            s[d]("touchend", e.onTouchEnd, {
                passive: !0
            }),
            s[d]("pointerup", e.onTouchEnd, {
                passive: !0
            }),
            s[d]("pointercancel", e.onTouchEnd, {
                passive: !0
            }),
            s[d]("touchcancel", e.onTouchEnd, {
                passive: !0
            }),
            s[d]("pointerout", e.onTouchEnd, {
                passive: !0
            }),
            s[d]("pointerleave", e.onTouchEnd, {
                passive: !0
            }),
            s[d]("contextmenu", e.onTouchEnd, {
                passive: !0
            }),
            (i.preventClicks || i.preventClicksPropagation) && a[d]("click", e.onClick, !0),
            i.cssMode && n[d]("scroll", e.onScroll),
            i.updateOnWindowResize ? e[c](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", $, !0) : e[c]("observerUpdate", $, !0),
            a[d]("load", e.onLoad, {
                capture: !0
            })
        }
          , j = (e, t) => e.grid && t.grid && t.grid.rows > 1;
        var R = {
            init: !0,
            direction: "horizontal",
            oneWayMovement: !1,
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            resizeObserver: !0,
            nested: !1,
            createElements: !1,
            eventsPrefix: "swiper",
            enabled: !0,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: !1,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 5,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            loop: !1,
            loopAddBlankSlides: !0,
            loopAdditionalSlides: 0,
            loopPreventsSliding: !0,
            rewind: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-blank",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideFullyVisibleClass: "swiper-slide-fully-visible",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            lazyPreloaderClass: "swiper-lazy-preloader",
            lazyPreloadPrevNext: 0,
            runCallbacksOnInit: !0,
            _emitClasses: !1
        };
        function q(e, t) {
            return function(s) {
                void 0 === s && (s = {});
                const i = Object.keys(s)[0]
                  , a = s[i];
                "object" == typeof a && null !== a ? (!0 === e[i] && (e[i] = {
                    enabled: !0
                }),
                "navigation" === i && e[i] && e[i].enabled && !e[i].prevEl && !e[i].nextEl && (e[i].auto = !0),
                ["pagination", "scrollbar"].indexOf(i) >= 0 && e[i] && e[i].enabled && !e[i].el && (e[i].auto = !0),
                i in e && "enabled"in a ? ("object" != typeof e[i] || "enabled"in e[i] || (e[i].enabled = !0),
                e[i] || (e[i] = {
                    enabled: !1
                }),
                p(t, s)) : p(t, s)) : p(t, s)
            }
        }
        const W = {
            eventsEmitter: C,
            update: k,
            translate: {
                getTranslate: function(e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    const {params: t, rtlTranslate: s, translate: i, wrapperEl: a} = this;
                    if (t.virtualTranslate)
                        return s ? -i : i;
                    if (t.cssMode)
                        return i;
                    let r = function(e, t) {
                        void 0 === t && (t = "x");
                        const s = l();
                        let i, a, r;
                        const n = function(e) {
                            const t = l();
                            let s;
                            return t.getComputedStyle && (s = t.getComputedStyle(e, null)),
                            !s && e.currentStyle && (s = e.currentStyle),
                            s || (s = e.style),
                            s
                        }(e);
                        return s.WebKitCSSMatrix ? (a = n.transform || n.webkitTransform,
                        a.split(",").length > 6 && (a = a.split(", ").map((e => e.replace(",", "."))).join(", ")),
                        r = new s.WebKitCSSMatrix("none" === a ? "" : a)) : (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
                        i = r.toString().split(",")),
                        "x" === t && (a = s.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
                        "y" === t && (a = s.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
                        a || 0
                    }(a, e);
                    return r += this.cssOverflowAdjustment(),
                    s && (r = -r),
                    r || 0
                },
                setTranslate: function(e, t) {
                    const s = this
                      , {rtlTranslate: i, params: a, wrapperEl: r, progress: n} = s;
                    let l, o = 0, d = 0;
                    s.isHorizontal() ? o = i ? -e : e : d = e,
                    a.roundLengths && (o = Math.floor(o),
                    d = Math.floor(d)),
                    s.previousTranslate = s.translate,
                    s.translate = s.isHorizontal() ? o : d,
                    a.cssMode ? r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -o : -d : a.virtualTranslate || (s.isHorizontal() ? o -= s.cssOverflowAdjustment() : d -= s.cssOverflowAdjustment(),
                    r.style.transform = `translate3d(${o}px, ${d}px, 0px)`);
                    const c = s.maxTranslate() - s.minTranslate();
                    l = 0 === c ? 0 : (e - s.minTranslate()) / c,
                    l !== n && s.updateProgress(e),
                    s.emit("setTranslate", s.translate, t)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function(e, t, s, i, a) {
                    void 0 === e && (e = 0),
                    void 0 === t && (t = this.params.speed),
                    void 0 === s && (s = !0),
                    void 0 === i && (i = !0);
                    const r = this
                      , {params: n, wrapperEl: l} = r;
                    if (r.animating && n.preventInteractionOnTransition)
                        return !1;
                    const o = r.minTranslate()
                      , d = r.maxTranslate();
                    let c;
                    if (c = i && e > o ? o : i && e < d ? d : e,
                    r.updateProgress(c),
                    n.cssMode) {
                        const e = r.isHorizontal();
                        if (0 === t)
                            l[e ? "scrollLeft" : "scrollTop"] = -c;
                        else {
                            if (!r.support.smoothScroll)
                                return m({
                                    swiper: r,
                                    targetPosition: -c,
                                    side: e ? "left" : "top"
                                }),
                                !0;
                            l.scrollTo({
                                [e ? "left" : "top"]: -c,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return 0 === t ? (r.setTransition(0),
                    r.setTranslate(c),
                    s && (r.emit("beforeTransitionStart", t, a),
                    r.emit("transitionEnd"))) : (r.setTransition(t),
                    r.setTranslate(c),
                    s && (r.emit("beforeTransitionStart", t, a),
                    r.emit("transitionStart")),
                    r.animating || (r.animating = !0,
                    r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                        r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
                        r.onTranslateToWrapperTransitionEnd = null,
                        delete r.onTranslateToWrapperTransitionEnd,
                        s && r.emit("transitionEnd"))
                    }
                    ),
                    r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))),
                    !0
                }
            },
            transition: {
                setTransition: function(e, t) {
                    const s = this;
                    s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`,
                    s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""),
                    s.emit("setTransition", e, t)
                },
                transitionStart: function(e, t) {
                    void 0 === e && (e = !0);
                    const s = this
                      , {params: i} = s;
                    i.cssMode || (i.autoHeight && s.updateAutoHeight(),
                    A({
                        swiper: s,
                        runCallbacks: e,
                        direction: t,
                        step: "Start"
                    }))
                },
                transitionEnd: function(e, t) {
                    void 0 === e && (e = !0);
                    const s = this
                      , {params: i} = s;
                    s.animating = !1,
                    i.cssMode || (s.setTransition(0),
                    A({
                        swiper: s,
                        runCallbacks: e,
                        direction: t,
                        step: "End"
                    }))
                }
            },
            slide: I,
            loop: O,
            grabCursor: {
                setGrabCursor: function(e) {
                    const t = this;
                    if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
                        return;
                    const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                    t.isElement && (t.__preventObserver__ = !0),
                    s.style.cursor = "move",
                    s.style.cursor = e ? "grabbing" : "grab",
                    t.isElement && requestAnimationFrame(( () => {
                        t.__preventObserver__ = !1
                    }
                    ))
                },
                unsetGrabCursor: function() {
                    const e = this;
                    e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0),
                    e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "",
                    e.isElement && requestAnimationFrame(( () => {
                        e.__preventObserver__ = !1
                    }
                    )))
                }
            },
            events: {
                attachEvents: function() {
                    const e = this
                      , {params: t} = e;
                    e.onTouchStart = _.bind(e),
                    e.onTouchMove = G.bind(e),
                    e.onTouchEnd = D.bind(e),
                    e.onDocumentTouchStart = N.bind(e),
                    t.cssMode && (e.onScroll = V.bind(e)),
                    e.onClick = B.bind(e),
                    e.onLoad = F.bind(e),
                    H(e, "on")
                },
                detachEvents: function() {
                    H(this, "off")
                }
            },
            breakpoints: {
                setBreakpoint: function() {
                    const e = this
                      , {realIndex: t, initialized: s, params: i, el: a} = e
                      , r = i.breakpoints;
                    if (!r || r && 0 === Object.keys(r).length)
                        return;
                    const n = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
                    if (!n || e.currentBreakpoint === n)
                        return;
                    const l = (n in r ? r[n] : void 0) || e.originalParams
                      , o = j(e, i)
                      , d = j(e, l)
                      , c = i.enabled;
                    o && !d ? (a.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`),
                    e.emitContainerClasses()) : !o && d && (a.classList.add(`${i.containerModifierClass}grid`),
                    (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === i.grid.fill) && a.classList.add(`${i.containerModifierClass}grid-column`),
                    e.emitContainerClasses()),
                    ["navigation", "pagination", "scrollbar"].forEach((t => {
                        if (void 0 === l[t])
                            return;
                        const s = i[t] && i[t].enabled
                          , a = l[t] && l[t].enabled;
                        s && !a && e[t].disable(),
                        !s && a && e[t].enable()
                    }
                    ));
                    const u = l.direction && l.direction !== i.direction
                      , m = i.loop && (l.slidesPerView !== i.slidesPerView || u)
                      , f = i.loop;
                    u && s && e.changeDirection(),
                    p(e.params, l);
                    const h = e.params.enabled
                      , g = e.params.loop;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }),
                    c && !h ? e.disable() : !c && h && e.enable(),
                    e.currentBreakpoint = n,
                    e.emit("_beforeBreakpoint", l),
                    s && (m ? (e.loopDestroy(),
                    e.loopCreate(t),
                    e.updateSlides()) : !f && g ? (e.loopCreate(t),
                    e.updateSlides()) : f && !g && e.loopDestroy()),
                    e.emit("breakpoint", l)
                },
                getBreakpoint: function(e, t, s) {
                    if (void 0 === t && (t = "window"),
                    !e || "container" === t && !s)
                        return;
                    let i = !1;
                    const a = l()
                      , r = "window" === t ? a.innerHeight : s.clientHeight
                      , n = Object.keys(e).map((e => {
                        if ("string" == typeof e && 0 === e.indexOf("@")) {
                            const t = parseFloat(e.substr(1));
                            return {
                                value: r * t,
                                point: e
                            }
                        }
                        return {
                            value: e,
                            point: e
                        }
                    }
                    ));
                    n.sort(( (e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                    for (let e = 0; e < n.length; e += 1) {
                        const {point: r, value: l} = n[e];
                        "window" === t ? a.matchMedia(`(min-width: ${l}px)`).matches && (i = r) : l <= s.clientWidth && (i = r)
                    }
                    return i || "max"
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    const e = this
                      , {isLocked: t, params: s} = e
                      , {slidesOffsetBefore: i} = s;
                    if (i) {
                        const t = e.slides.length - 1
                          , s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                        e.isLocked = e.size > s
                    } else
                        e.isLocked = 1 === e.snapGrid.length;
                    !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                    !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                    t && t !== e.isLocked && (e.isEnd = !1),
                    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                }
            },
            classes: {
                addClasses: function() {
                    const e = this
                      , {classNames: t, params: s, rtl: i, el: a, device: r} = e
                      , n = function(e, t) {
                        const s = [];
                        return e.forEach((e => {
                            "object" == typeof e ? Object.keys(e).forEach((i => {
                                e[i] && s.push(t + i)
                            }
                            )) : "string" == typeof e && s.push(t + e)
                        }
                        )),
                        s
                    }(["initialized", s.direction, {
                        "free-mode": e.params.freeMode && s.freeMode.enabled
                    }, {
                        autoheight: s.autoHeight
                    }, {
                        rtl: i
                    }, {
                        grid: s.grid && s.grid.rows > 1
                    }, {
                        "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
                    }, {
                        android: r.android
                    }, {
                        ios: r.ios
                    }, {
                        "css-mode": s.cssMode
                    }, {
                        centered: s.cssMode && s.centeredSlides
                    }, {
                        "watch-progress": s.watchSlidesProgress
                    }], s.containerModifierClass);
                    t.push(...n),
                    a.classList.add(...t),
                    e.emitContainerClasses()
                },
                removeClasses: function() {
                    const {el: e, classNames: t} = this;
                    e.classList.remove(...t),
                    this.emitContainerClasses()
                }
            }
        }
          , Y = {};
        class X {
            constructor() {
                let e, t;
                for (var s = arguments.length, i = new Array(s), a = 0; a < s; a++)
                    i[a] = arguments[a];
                1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e,t] = i,
                t || (t = {}),
                t = p({}, t),
                e && !t.el && (t.el = e);
                const n = r();
                if (t.el && "string" == typeof t.el && n.querySelectorAll(t.el).length > 1) {
                    const e = [];
                    return n.querySelectorAll(t.el).forEach((s => {
                        const i = p({}, t, {
                            el: s
                        });
                        e.push(new X(i))
                    }
                    )),
                    e
                }
                const o = this;
                var d;
                o.__swiper__ = !0,
                o.support = E(),
                o.device = (void 0 === (d = {
                    userAgent: t.userAgent
                }) && (d = {}),
                x || (x = function(e) {
                    let {userAgent: t} = void 0 === e ? {} : e;
                    const s = E()
                      , i = l()
                      , a = i.navigator.platform
                      , r = t || i.navigator.userAgent
                      , n = {
                        ios: !1,
                        android: !1
                    }
                      , o = i.screen.width
                      , d = i.screen.height
                      , c = r.match(/(Android);?[\s\/]+([\d.]+)?/);
                    let p = r.match(/(iPad).*OS\s([\d_]+)/);
                    const u = r.match(/(iPod)(.*OS\s([\d_]+))?/)
                      , m = !p && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
                      , f = "Win32" === a;
                    let h = "MacIntel" === a;
                    return !p && h && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${d}`) >= 0 && (p = r.match(/(Version)\/([\d.]+)/),
                    p || (p = [0, 1, "13_0_0"]),
                    h = !1),
                    c && !f && (n.os = "android",
                    n.android = !0),
                    (p || m || u) && (n.os = "ios",
                    n.ios = !0),
                    n
                }(d)),
                x),
                o.browser = (T || (T = function() {
                    const e = l();
                    let t = !1;
                    function s() {
                        const t = e.navigator.userAgent.toLowerCase();
                        return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                    }
                    if (s()) {
                        const s = String(e.navigator.userAgent);
                        if (s.includes("Version/")) {
                            const [e,i] = s.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
                            t = e < 16 || 16 === e && i < 2
                        }
                    }
                    return {
                        isSafari: t || s(),
                        needPerspectiveFix: t,
                        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                    }
                }()),
                T),
                o.eventsListeners = {},
                o.eventsAnyListeners = [],
                o.modules = [...o.__modules__],
                t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
                const c = {};
                o.modules.forEach((e => {
                    e({
                        params: t,
                        swiper: o,
                        extendParams: q(t, c),
                        on: o.on.bind(o),
                        once: o.once.bind(o),
                        off: o.off.bind(o),
                        emit: o.emit.bind(o)
                    })
                }
                ));
                const u = p({}, R, c);
                return o.params = p({}, u, Y, t),
                o.originalParams = p({}, o.params),
                o.passedParams = p({}, t),
                o.params && o.params.on && Object.keys(o.params.on).forEach((e => {
                    o.on(e, o.params.on[e])
                }
                )),
                o.params && o.params.onAny && o.onAny(o.params.onAny),
                Object.assign(o, {
                    enabled: o.params.enabled,
                    el: e,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: () => "horizontal" === o.params.direction,
                    isVertical: () => "vertical" === o.params.direction,
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    cssOverflowAdjustment() {
                        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
                    },
                    allowSlideNext: o.params.allowSlideNext,
                    allowSlidePrev: o.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: o.params.focusableElements,
                        lastClickTime: 0,
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        pointerId: null,
                        touchId: null
                    },
                    allowClick: !0,
                    allowTouchMove: o.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }),
                o.emit("_swiper"),
                o.params.init && o.init(),
                o
            }
            getDirectionLabel(e) {
                return this.isHorizontal() ? e : {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[e]
            }
            getSlideIndex(e) {
                const {slidesEl: t, params: s} = this
                  , i = w(f(t, `.${s.slideClass}, swiper-slide`)[0]);
                return w(e) - i
            }
            getSlideIndexByData(e) {
                return this.getSlideIndex(this.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0])
            }
            recalcSlides() {
                const {slidesEl: e, params: t} = this;
                this.slides = f(e, `.${t.slideClass}, swiper-slide`)
            }
            enable() {
                const e = this;
                e.enabled || (e.enabled = !0,
                e.params.grabCursor && e.setGrabCursor(),
                e.emit("enable"))
            }
            disable() {
                const e = this;
                e.enabled && (e.enabled = !1,
                e.params.grabCursor && e.unsetGrabCursor(),
                e.emit("disable"))
            }
            setProgress(e, t) {
                const s = this;
                e = Math.min(Math.max(e, 0), 1);
                const i = s.minTranslate()
                  , a = (s.maxTranslate() - i) * e + i;
                s.translateTo(a, void 0 === t ? 0 : t),
                s.updateActiveIndex(),
                s.updateSlidesClasses()
            }
            emitContainerClasses() {
                const e = this;
                if (!e.params._emitClasses || !e.el)
                    return;
                const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
                e.emit("_containerClasses", t.join(" "))
            }
            getSlideClasses(e) {
                const t = this;
                return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
            }
            emitSlidesClasses() {
                const e = this;
                if (!e.params._emitClasses || !e.el)
                    return;
                const t = [];
                e.slides.forEach((s => {
                    const i = e.getSlideClasses(s);
                    t.push({
                        slideEl: s,
                        classNames: i
                    }),
                    e.emit("_slideClass", s, i)
                }
                )),
                e.emit("_slideClasses", t)
            }
            slidesPerViewDynamic(e, t) {
                void 0 === e && (e = "current"),
                void 0 === t && (t = !1);
                const {params: s, slides: i, slidesGrid: a, slidesSizesGrid: r, size: n, activeIndex: l} = this;
                let o = 1;
                if ("number" == typeof s.slidesPerView)
                    return s.slidesPerView;
                if (s.centeredSlides) {
                    let e, t = i[l] ? i[l].swiperSlideSize : 0;
                    for (let s = l + 1; s < i.length; s += 1)
                        i[s] && !e && (t += i[s].swiperSlideSize,
                        o += 1,
                        t > n && (e = !0));
                    for (let s = l - 1; s >= 0; s -= 1)
                        i[s] && !e && (t += i[s].swiperSlideSize,
                        o += 1,
                        t > n && (e = !0))
                } else if ("current" === e)
                    for (let e = l + 1; e < i.length; e += 1)
                        (t ? a[e] + r[e] - a[l] < n : a[e] - a[l] < n) && (o += 1);
                else
                    for (let e = l - 1; e >= 0; e -= 1)
                        a[l] - a[e] < n && (o += 1);
                return o
            }
            update() {
                const e = this;
                if (!e || e.destroyed)
                    return;
                const {snapGrid: t, params: s} = e;
                function i() {
                    const t = e.rtlTranslate ? -1 * e.translate : e.translate
                      , s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(s),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses()
                }
                let a;
                if (s.breakpoints && e.setBreakpoint(),
                [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
                    t.complete && M(e, t)
                }
                )),
                e.updateSize(),
                e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                s.freeMode && s.freeMode.enabled && !s.cssMode)
                    i(),
                    s.autoHeight && e.updateAutoHeight();
                else {
                    if (("auto" === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
                        const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
                        a = e.slideTo(t.length - 1, 0, !1, !0)
                    } else
                        a = e.slideTo(e.activeIndex, 0, !1, !0);
                    a || i()
                }
                s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                e.emit("update")
            }
            changeDirection(e, t) {
                void 0 === t && (t = !0);
                const s = this
                  , i = s.params.direction;
                return e || (e = "horizontal" === i ? "vertical" : "horizontal"),
                e === i || "horizontal" !== e && "vertical" !== e || (s.el.classList.remove(`${s.params.containerModifierClass}${i}`),
                s.el.classList.add(`${s.params.containerModifierClass}${e}`),
                s.emitContainerClasses(),
                s.params.direction = e,
                s.slides.forEach((t => {
                    "vertical" === e ? t.style.width = "" : t.style.height = ""
                }
                )),
                s.emit("changeDirection"),
                t && s.update()),
                s
            }
            changeLanguageDirection(e) {
                const t = this;
                t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e,
                t.rtlTranslate = "horizontal" === t.params.direction && t.rtl,
                t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
                t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
                t.el.dir = "ltr"),
                t.update())
            }
            mount(e) {
                const t = this;
                if (t.mounted)
                    return !0;
                let s = e || t.params.el;
                if ("string" == typeof s && (s = document.querySelector(s)),
                !s)
                    return !1;
                s.swiper = t,
                s.parentNode && s.parentNode.host && "SWIPER-CONTAINER" === s.parentNode.host.nodeName && (t.isElement = !0);
                const i = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
                let a = s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(i()) : f(s, i())[0];
                return !a && t.params.createElements && (a = g("div", t.params.wrapperClass),
                s.append(a),
                f(s, `.${t.params.slideClass}`).forEach((e => {
                    a.append(e)
                }
                ))),
                Object.assign(t, {
                    el: s,
                    wrapperEl: a,
                    slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : a,
                    hostEl: t.isElement ? s.parentNode.host : s,
                    mounted: !0,
                    rtl: "rtl" === s.dir.toLowerCase() || "rtl" === v(s, "direction"),
                    rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === v(s, "direction")),
                    wrongRTL: "-webkit-box" === v(a, "display")
                }),
                !0
            }
            init(e) {
                const t = this;
                if (t.initialized)
                    return t;
                if (!1 === t.mount(e))
                    return t;
                t.emit("beforeInit"),
                t.params.breakpoints && t.setBreakpoint(),
                t.addClasses(),
                t.updateSize(),
                t.updateSlides(),
                t.params.watchOverflow && t.checkOverflow(),
                t.params.grabCursor && t.enabled && t.setGrabCursor(),
                t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
                t.params.loop && t.loopCreate(),
                t.attachEvents();
                const s = [...t.el.querySelectorAll('[loading="lazy"]')];
                return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
                s.forEach((e => {
                    e.complete ? M(t, e) : e.addEventListener("load", (e => {
                        M(t, e.target)
                    }
                    ))
                }
                )),
                P(t),
                t.initialized = !0,
                P(t),
                t.emit("init"),
                t.emit("afterInit"),
                t
            }
            destroy(e, t) {
                void 0 === e && (e = !0),
                void 0 === t && (t = !0);
                const s = this
                  , {params: i, el: a, wrapperEl: r, slides: n} = s;
                return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"),
                s.initialized = !1,
                s.detachEvents(),
                i.loop && s.loopDestroy(),
                t && (s.removeClasses(),
                a.removeAttribute("style"),
                r.removeAttribute("style"),
                n && n.length && n.forEach((e => {
                    e.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass),
                    e.removeAttribute("style"),
                    e.removeAttribute("data-swiper-slide-index")
                }
                ))),
                s.emit("destroy"),
                Object.keys(s.eventsListeners).forEach((e => {
                    s.off(e)
                }
                )),
                !1 !== e && (s.el.swiper = null,
                function(e) {
                    const t = e;
                    Object.keys(t).forEach((e => {
                        try {
                            t[e] = null
                        } catch (e) {}
                        try {
                            delete t[e]
                        } catch (e) {}
                    }
                    ))
                }(s)),
                s.destroyed = !0),
                null
            }
            static extendDefaults(e) {
                p(Y, e)
            }
            static get extendedDefaults() {
                return Y
            }
            static get defaults() {
                return R
            }
            static installModule(e) {
                X.prototype.__modules__ || (X.prototype.__modules__ = []);
                const t = X.prototype.__modules__;
                "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
            }
            static use(e) {
                return Array.isArray(e) ? (e.forEach((e => X.installModule(e))),
                X) : (X.installModule(e),
                X)
            }
        }
        function U(e, t, s, i) {
            return e.params.createElements && Object.keys(i).forEach((a => {
                if (!s[a] && !0 === s.auto) {
                    let r = f(e.el, `.${i[a]}`)[0];
                    r || (r = g("div", i[a]),
                    r.className = i[a],
                    e.el.append(r)),
                    s[a] = r,
                    t[a] = r
                }
            }
            )),
            s
        }
        function K(e) {
            let {swiper: t, extendParams: s, on: i, emit: a} = e;
            s({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            }),
            t.navigation = {
                nextEl: null,
                prevEl: null
            };
            const r = e => (Array.isArray(e) ? e : [e]).filter((e => !!e));
            function n(e) {
                let s;
                return e && "string" == typeof e && t.isElement && (s = t.el.querySelector(e),
                s) ? s : (e && ("string" == typeof e && (s = [...document.querySelectorAll(e)]),
                t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.el.querySelectorAll(e).length && (s = t.el.querySelector(e))),
                e && !s ? e : s)
            }
            function l(e, s) {
                const i = t.params.navigation;
                (e = r(e)).forEach((e => {
                    e && (e.classList[s ? "add" : "remove"](...i.disabledClass.split(" ")),
                    "BUTTON" === e.tagName && (e.disabled = s),
                    t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](i.lockClass))
                }
                ))
            }
            function o() {
                const {nextEl: e, prevEl: s} = t.navigation;
                if (t.params.loop)
                    return l(s, !1),
                    void l(e, !1);
                l(s, t.isBeginning && !t.params.rewind),
                l(e, t.isEnd && !t.params.rewind)
            }
            function d(e) {
                e.preventDefault(),
                (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(),
                a("navigationPrev"))
            }
            function c(e) {
                e.preventDefault(),
                (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(),
                a("navigationNext"))
            }
            function p() {
                const e = t.params.navigation;
                if (t.params.navigation = U(t, t.originalParams.navigation, t.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                }),
                !e.nextEl && !e.prevEl)
                    return;
                let s = n(e.nextEl)
                  , i = n(e.prevEl);
                Object.assign(t.navigation, {
                    nextEl: s,
                    prevEl: i
                }),
                s = r(s),
                i = r(i);
                const a = (s, i) => {
                    s && s.addEventListener("click", "next" === i ? c : d),
                    !t.enabled && s && s.classList.add(...e.lockClass.split(" "))
                }
                ;
                s.forEach((e => a(e, "next"))),
                i.forEach((e => a(e, "prev")))
            }
            function u() {
                let {nextEl: e, prevEl: s} = t.navigation;
                e = r(e),
                s = r(s);
                const i = (e, s) => {
                    e.removeEventListener("click", "next" === s ? c : d),
                    e.classList.remove(...t.params.navigation.disabledClass.split(" "))
                }
                ;
                e.forEach((e => i(e, "next"))),
                s.forEach((e => i(e, "prev")))
            }
            i("init", ( () => {
                !1 === t.params.navigation.enabled ? m() : (p(),
                o())
            }
            )),
            i("toEdge fromEdge lock unlock", ( () => {
                o()
            }
            )),
            i("destroy", ( () => {
                u()
            }
            )),
            i("enable disable", ( () => {
                let {nextEl: e, prevEl: s} = t.navigation;
                e = r(e),
                s = r(s),
                t.enabled ? o() : [...e, ...s].filter((e => !!e)).forEach((e => e.classList.add(t.params.navigation.lockClass)))
            }
            )),
            i("click", ( (e, s) => {
                let {nextEl: i, prevEl: n} = t.navigation;
                i = r(i),
                n = r(n);
                const l = s.target;
                if (t.params.navigation.hideOnClick && !n.includes(l) && !i.includes(l)) {
                    if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === l || t.pagination.el.contains(l)))
                        return;
                    let e;
                    i.length ? e = i[0].classList.contains(t.params.navigation.hiddenClass) : n.length && (e = n[0].classList.contains(t.params.navigation.hiddenClass)),
                    a(!0 === e ? "navigationShow" : "navigationHide"),
                    [...i, ...n].filter((e => !!e)).forEach((e => e.classList.toggle(t.params.navigation.hiddenClass)))
                }
            }
            ));
            const m = () => {
                t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),
                u()
            }
            ;
            Object.assign(t.navigation, {
                enable: () => {
                    t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),
                    p(),
                    o()
                }
                ,
                disable: m,
                update: o,
                init: p,
                destroy: u
            })
        }
        function J(e) {
            return void 0 === e && (e = ""),
            `.${e.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`
        }
        function Q(e) {
            let {swiper: t, extendParams: s, on: i, emit: a} = e;
            const r = "swiper-pagination";
            let n;
            s({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: e => e,
                    formatFractionTotal: e => e,
                    bulletClass: `${r}-bullet`,
                    bulletActiveClass: `${r}-bullet-active`,
                    modifierClass: `${r}-`,
                    currentClass: `${r}-current`,
                    totalClass: `${r}-total`,
                    hiddenClass: `${r}-hidden`,
                    progressbarFillClass: `${r}-progressbar-fill`,
                    progressbarOppositeClass: `${r}-progressbar-opposite`,
                    clickableClass: `${r}-clickable`,
                    lockClass: `${r}-lock`,
                    horizontalClass: `${r}-horizontal`,
                    verticalClass: `${r}-vertical`,
                    paginationDisabledClass: `${r}-disabled`
                }
            }),
            t.pagination = {
                el: null,
                bullets: []
            };
            let l = 0;
            const o = e => (Array.isArray(e) ? e : [e]).filter((e => !!e));
            function d() {
                return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && 0 === t.pagination.el.length
            }
            function c(e, s) {
                const {bulletActiveClass: i} = t.params.pagination;
                e && (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${i}-${s}`),
                (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${i}-${s}-${s}`))
            }
            function p(e) {
                const s = e.target.closest(J(t.params.pagination.bulletClass));
                if (!s)
                    return;
                e.preventDefault();
                const i = w(s) * t.params.slidesPerGroup;
                if (t.params.loop) {
                    if (t.realIndex === i)
                        return;
                    t.slideToLoop(i)
                } else
                    t.slideTo(i)
            }
            function u() {
                const e = t.rtl
                  , s = t.params.pagination;
                if (d())
                    return;
                let i, r, p = t.pagination.el;
                p = o(p);
                const u = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length
                  , m = t.params.loop ? Math.ceil(u / t.params.slidesPerGroup) : t.snapGrid.length;
                if (t.params.loop ? (r = t.previousRealIndex || 0,
                i = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : void 0 !== t.snapIndex ? (i = t.snapIndex,
                r = t.previousSnapIndex) : (r = t.previousIndex || 0,
                i = t.activeIndex || 0),
                "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                    const a = t.pagination.bullets;
                    let o, d, u;
                    if (s.dynamicBullets && (n = S(a[0], t.isHorizontal() ? "width" : "height", !0),
                    p.forEach((e => {
                        e.style[t.isHorizontal() ? "width" : "height"] = n * (s.dynamicMainBullets + 4) + "px"
                    }
                    )),
                    s.dynamicMainBullets > 1 && void 0 !== r && (l += i - (r || 0),
                    l > s.dynamicMainBullets - 1 ? l = s.dynamicMainBullets - 1 : l < 0 && (l = 0)),
                    o = Math.max(i - l, 0),
                    d = o + (Math.min(a.length, s.dynamicMainBullets) - 1),
                    u = (d + o) / 2),
                    a.forEach((e => {
                        const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${s.bulletActiveClass}${e}`))].map((e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e)).flat();
                        e.classList.remove(...t)
                    }
                    )),
                    p.length > 1)
                        a.forEach((e => {
                            const a = w(e);
                            a === i ? e.classList.add(...s.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"),
                            s.dynamicBullets && (a >= o && a <= d && e.classList.add(...`${s.bulletActiveClass}-main`.split(" ")),
                            a === o && c(e, "prev"),
                            a === d && c(e, "next"))
                        }
                        ));
                    else {
                        const e = a[i];
                        if (e && e.classList.add(...s.bulletActiveClass.split(" ")),
                        t.isElement && a.forEach(( (e, t) => {
                            e.setAttribute("part", t === i ? "bullet-active" : "bullet")
                        }
                        )),
                        s.dynamicBullets) {
                            const e = a[o]
                              , t = a[d];
                            for (let e = o; e <= d; e += 1)
                                a[e] && a[e].classList.add(...`${s.bulletActiveClass}-main`.split(" "));
                            c(e, "prev"),
                            c(t, "next")
                        }
                    }
                    if (s.dynamicBullets) {
                        const i = Math.min(a.length, s.dynamicMainBullets + 4)
                          , r = (n * i - n) / 2 - u * n
                          , l = e ? "right" : "left";
                        a.forEach((e => {
                            e.style[t.isHorizontal() ? l : "top"] = `${r}px`
                        }
                        ))
                    }
                }
                p.forEach(( (e, r) => {
                    if ("fraction" === s.type && (e.querySelectorAll(J(s.currentClass)).forEach((e => {
                        e.textContent = s.formatFractionCurrent(i + 1)
                    }
                    )),
                    e.querySelectorAll(J(s.totalClass)).forEach((e => {
                        e.textContent = s.formatFractionTotal(m)
                    }
                    ))),
                    "progressbar" === s.type) {
                        let a;
                        a = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                        const r = (i + 1) / m;
                        let n = 1
                          , l = 1;
                        "horizontal" === a ? n = r : l = r,
                        e.querySelectorAll(J(s.progressbarFillClass)).forEach((e => {
                            e.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${l})`,
                            e.style.transitionDuration = `${t.params.speed}ms`
                        }
                        ))
                    }
                    "custom" === s.type && s.renderCustom ? (e.innerHTML = s.renderCustom(t, i + 1, m),
                    0 === r && a("paginationRender", e)) : (0 === r && a("paginationRender", e),
                    a("paginationUpdate", e)),
                    t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](s.lockClass)
                }
                ))
            }
            function m() {
                const e = t.params.pagination;
                if (d())
                    return;
                const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.grid && t.params.grid.rows > 1 ? t.slides.length / Math.ceil(t.params.grid.rows) : t.slides.length;
                let i = t.pagination.el;
                i = o(i);
                let r = "";
                if ("bullets" === e.type) {
                    let i = t.params.loop ? Math.ceil(s / t.params.slidesPerGroup) : t.snapGrid.length;
                    t.params.freeMode && t.params.freeMode.enabled && i > s && (i = s);
                    for (let s = 0; s < i; s += 1)
                        e.renderBullet ? r += e.renderBullet.call(t, s, e.bulletClass) : r += `<${e.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${e.bulletClass}"></${e.bulletElement}>`
                }
                "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
                "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`),
                t.pagination.bullets = [],
                i.forEach((s => {
                    "custom" !== e.type && (s.innerHTML = r || ""),
                    "bullets" === e.type && t.pagination.bullets.push(...s.querySelectorAll(J(e.bulletClass)))
                }
                )),
                "custom" !== e.type && a("paginationRender", i[0])
            }
            function f() {
                t.params.pagination = U(t, t.originalParams.pagination, t.params.pagination, {
                    el: "swiper-pagination"
                });
                const e = t.params.pagination;
                if (!e.el)
                    return;
                let s;
                "string" == typeof e.el && t.isElement && (s = t.el.querySelector(e.el)),
                s || "string" != typeof e.el || (s = [...document.querySelectorAll(e.el)]),
                s || (s = e.el),
                s && 0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(s) && s.length > 1 && (s = [...t.el.querySelectorAll(e.el)],
                s.length > 1 && (s = s.filter((e => b(e, ".swiper")[0] === t.el))[0])),
                Array.isArray(s) && 1 === s.length && (s = s[0]),
                Object.assign(t.pagination, {
                    el: s
                }),
                s = o(s),
                s.forEach((s => {
                    "bullets" === e.type && e.clickable && s.classList.add(...(e.clickableClass || "").split(" ")),
                    s.classList.add(e.modifierClass + e.type),
                    s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
                    "bullets" === e.type && e.dynamicBullets && (s.classList.add(`${e.modifierClass}${e.type}-dynamic`),
                    l = 0,
                    e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                    "progressbar" === e.type && e.progressbarOpposite && s.classList.add(e.progressbarOppositeClass),
                    e.clickable && s.addEventListener("click", p),
                    t.enabled || s.classList.add(e.lockClass)
                }
                )))
            }
            function h() {
                const e = t.params.pagination;
                if (d())
                    return;
                let s = t.pagination.el;
                s && (s = o(s),
                s.forEach((s => {
                    s.classList.remove(e.hiddenClass),
                    s.classList.remove(e.modifierClass + e.type),
                    s.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
                    e.clickable && (s.classList.remove(...(e.clickableClass || "").split(" ")),
                    s.removeEventListener("click", p))
                }
                ))),
                t.pagination.bullets && t.pagination.bullets.forEach((t => t.classList.remove(...e.bulletActiveClass.split(" "))))
            }
            i("changeDirection", ( () => {
                if (!t.pagination || !t.pagination.el)
                    return;
                const e = t.params.pagination;
                let {el: s} = t.pagination;
                s = o(s),
                s.forEach((s => {
                    s.classList.remove(e.horizontalClass, e.verticalClass),
                    s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
                }
                ))
            }
            )),
            i("init", ( () => {
                !1 === t.params.pagination.enabled ? g() : (f(),
                m(),
                u())
            }
            )),
            i("activeIndexChange", ( () => {
                void 0 === t.snapIndex && u()
            }
            )),
            i("snapIndexChange", ( () => {
                u()
            }
            )),
            i("snapGridLengthChange", ( () => {
                m(),
                u()
            }
            )),
            i("destroy", ( () => {
                h()
            }
            )),
            i("enable disable", ( () => {
                let {el: e} = t.pagination;
                e && (e = o(e),
                e.forEach((e => e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass))))
            }
            )),
            i("lock unlock", ( () => {
                u()
            }
            )),
            i("click", ( (e, s) => {
                const i = s.target
                  , r = o(t.pagination.el);
                if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !i.classList.contains(t.params.pagination.bulletClass)) {
                    if (t.navigation && (t.navigation.nextEl && i === t.navigation.nextEl || t.navigation.prevEl && i === t.navigation.prevEl))
                        return;
                    const e = r[0].classList.contains(t.params.pagination.hiddenClass);
                    a(!0 === e ? "paginationShow" : "paginationHide"),
                    r.forEach((e => e.classList.toggle(t.params.pagination.hiddenClass)))
                }
            }
            ));
            const g = () => {
                t.el.classList.add(t.params.pagination.paginationDisabledClass);
                let {el: e} = t.pagination;
                e && (e = o(e),
                e.forEach((e => e.classList.add(t.params.pagination.paginationDisabledClass)))),
                h()
            }
            ;
            Object.assign(t.pagination, {
                enable: () => {
                    t.el.classList.remove(t.params.pagination.paginationDisabledClass);
                    let {el: e} = t.pagination;
                    e && (e = o(e),
                    e.forEach((e => e.classList.remove(t.params.pagination.paginationDisabledClass)))),
                    f(),
                    m(),
                    u()
                }
                ,
                disable: g,
                render: m,
                update: u,
                init: f,
                destroy: h
            })
        }
        function Z(e) {
            let {swiper: t, extendParams: s, on: i} = e;
            s({
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    slideLabelMessage: "{{index}} / {{slidesLength}}",
                    containerMessage: null,
                    containerRoleDescriptionMessage: null,
                    itemRoleDescriptionMessage: null,
                    slideRole: "group",
                    id: null
                }
            }),
            t.a11y = {
                clicked: !1
            };
            let a = null;
            function r(e) {
                const t = a;
                0 !== t.length && (t.innerHTML = "",
                t.innerHTML = e)
            }
            const n = e => (Array.isArray(e) ? e : [e]).filter((e => !!e));
            function l(e) {
                (e = n(e)).forEach((e => {
                    e.setAttribute("tabIndex", "0")
                }
                ))
            }
            function o(e) {
                (e = n(e)).forEach((e => {
                    e.setAttribute("tabIndex", "-1")
                }
                ))
            }
            function d(e, t) {
                (e = n(e)).forEach((e => {
                    e.setAttribute("role", t)
                }
                ))
            }
            function c(e, t) {
                (e = n(e)).forEach((e => {
                    e.setAttribute("aria-roledescription", t)
                }
                ))
            }
            function p(e, t) {
                (e = n(e)).forEach((e => {
                    e.setAttribute("aria-label", t)
                }
                ))
            }
            function u(e) {
                (e = n(e)).forEach((e => {
                    e.setAttribute("aria-disabled", !0)
                }
                ))
            }
            function m(e) {
                (e = n(e)).forEach((e => {
                    e.setAttribute("aria-disabled", !1)
                }
                ))
            }
            function f(e) {
                if (13 !== e.keyCode && 32 !== e.keyCode)
                    return;
                const s = t.params.a11y
                  , i = e.target;
                t.pagination && t.pagination.el && (i === t.pagination.el || t.pagination.el.contains(e.target)) && !e.target.matches(J(t.params.pagination.bulletClass)) || (t.navigation && t.navigation.nextEl && i === t.navigation.nextEl && (t.isEnd && !t.params.loop || t.slideNext(),
                t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)),
                t.navigation && t.navigation.prevEl && i === t.navigation.prevEl && (t.isBeginning && !t.params.loop || t.slidePrev(),
                t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)),
                t.pagination && i.matches(J(t.params.pagination.bulletClass)) && i.click())
            }
            function h() {
                return t.pagination && t.pagination.bullets && t.pagination.bullets.length
            }
            function v() {
                return h() && t.params.pagination.clickable
            }
            const b = (e, t, s) => {
                l(e),
                "BUTTON" !== e.tagName && (d(e, "button"),
                e.addEventListener("keydown", f)),
                p(e, s),
                function(e, t) {
                    (e = n(e)).forEach((e => {
                        e.setAttribute("aria-controls", t)
                    }
                    ))
                }(e, t)
            }
              , S = () => {
                t.a11y.clicked = !0
            }
              , y = () => {
                requestAnimationFrame(( () => {
                    requestAnimationFrame(( () => {
                        t.destroyed || (t.a11y.clicked = !1)
                    }
                    ))
                }
                ))
            }
              , x = e => {
                if (t.a11y.clicked)
                    return;
                const s = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
                if (!s || !t.slides.includes(s))
                    return;
                const i = t.slides.indexOf(s) === t.activeIndex
                  , a = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
                i || a || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0,
                t.slideTo(t.slides.indexOf(s), 0))
            }
              , T = () => {
                const e = t.params.a11y;
                e.itemRoleDescriptionMessage && c(t.slides, e.itemRoleDescriptionMessage),
                e.slideRole && d(t.slides, e.slideRole);
                const s = t.slides.length;
                e.slideLabelMessage && t.slides.forEach(( (i, a) => {
                    const r = t.params.loop ? parseInt(i.getAttribute("data-swiper-slide-index"), 10) : a;
                    p(i, e.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, s))
                }
                ))
            }
            ;
            i("beforeInit", ( () => {
                a = g("span", t.params.a11y.notificationClass),
                a.setAttribute("aria-live", "assertive"),
                a.setAttribute("aria-atomic", "true")
            }
            )),
            i("afterInit", ( () => {
                t.params.a11y.enabled && ( () => {
                    const e = t.params.a11y;
                    t.el.append(a);
                    const s = t.el;
                    e.containerRoleDescriptionMessage && c(s, e.containerRoleDescriptionMessage),
                    e.containerMessage && p(s, e.containerMessage);
                    const i = t.wrapperEl
                      , r = e.id || i.getAttribute("id") || `swiper-wrapper-${l = 16,
                    void 0 === l && (l = 16),
                    "x".repeat(l).replace(/x/g, ( () => Math.round(16 * Math.random()).toString(16)))}`;
                    var l;
                    const o = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
                    var d;
                    d = r,
                    n(i).forEach((e => {
                        e.setAttribute("id", d)
                    }
                    )),
                    function(e, t) {
                        (e = n(e)).forEach((e => {
                            e.setAttribute("aria-live", t)
                        }
                        ))
                    }(i, o),
                    T();
                    let {nextEl: u, prevEl: m} = t.navigation ? t.navigation : {};
                    u = n(u),
                    m = n(m),
                    u && u.forEach((t => b(t, r, e.nextSlideMessage))),
                    m && m.forEach((t => b(t, r, e.prevSlideMessage))),
                    v() && n(t.pagination.el).forEach((e => {
                        e.addEventListener("keydown", f)
                    }
                    )),
                    t.el.addEventListener("focus", x, !0),
                    t.el.addEventListener("pointerdown", S, !0),
                    t.el.addEventListener("pointerup", y, !0)
                }
                )()
            }
            )),
            i("slidesLengthChange snapGridLengthChange slidesGridLengthChange", ( () => {
                t.params.a11y.enabled && T()
            }
            )),
            i("fromEdge toEdge afterInit lock unlock", ( () => {
                t.params.a11y.enabled && function() {
                    if (t.params.loop || t.params.rewind || !t.navigation)
                        return;
                    const {nextEl: e, prevEl: s} = t.navigation;
                    s && (t.isBeginning ? (u(s),
                    o(s)) : (m(s),
                    l(s))),
                    e && (t.isEnd ? (u(e),
                    o(e)) : (m(e),
                    l(e)))
                }()
            }
            )),
            i("paginationUpdate", ( () => {
                t.params.a11y.enabled && function() {
                    const e = t.params.a11y;
                    h() && t.pagination.bullets.forEach((s => {
                        t.params.pagination.clickable && (l(s),
                        t.params.pagination.renderBullet || (d(s, "button"),
                        p(s, e.paginationBulletMessage.replace(/\{\{index\}\}/, w(s) + 1)))),
                        s.matches(J(t.params.pagination.bulletActiveClass)) ? s.setAttribute("aria-current", "true") : s.removeAttribute("aria-current")
                    }
                    ))
                }()
            }
            )),
            i("destroy", ( () => {
                t.params.a11y.enabled && function() {
                    a && a.remove();
                    let {nextEl: e, prevEl: s} = t.navigation ? t.navigation : {};
                    e = n(e),
                    s = n(s),
                    e && e.forEach((e => e.removeEventListener("keydown", f))),
                    s && s.forEach((e => e.removeEventListener("keydown", f))),
                    v() && n(t.pagination.el).forEach((e => {
                        e.removeEventListener("keydown", f)
                    }
                    )),
                    t.el.removeEventListener("focus", x, !0),
                    t.el.removeEventListener("pointerdown", S, !0),
                    t.el.removeEventListener("pointerup", y, !0)
                }()
            }
            ))
        }
        function ee(e) {
            let {swiper: t, extendParams: s, on: i} = e;
            s({
                thumbs: {
                    swiper: null,
                    multipleActiveThumbs: !0,
                    autoScrollOffset: 0,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-thumbs"
                }
            });
            let a = !1
              , n = !1;
            function l() {
                const e = t.thumbs.swiper;
                if (!e || e.destroyed)
                    return;
                const s = e.clickedIndex
                  , i = e.clickedSlide;
                if (i && i.classList.contains(t.params.thumbs.slideThumbActiveClass))
                    return;
                if (null == s)
                    return;
                let a;
                a = e.params.loop ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : s,
                t.params.loop ? t.slideToLoop(a) : t.slideTo(a)
            }
            function o() {
                const {thumbs: e} = t.params;
                if (a)
                    return !1;
                a = !0;
                const s = t.constructor;
                if (e.swiper instanceof s)
                    t.thumbs.swiper = e.swiper,
                    Object.assign(t.thumbs.swiper.originalParams, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    }),
                    Object.assign(t.thumbs.swiper.params, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    }),
                    t.thumbs.swiper.update();
                else if (c(e.swiper)) {
                    const i = Object.assign({}, e.swiper);
                    Object.assign(i, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    }),
                    t.thumbs.swiper = new s(i),
                    n = !0
                }
                return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass),
                t.thumbs.swiper.on("tap", l),
                !0
            }
            function d(e) {
                const s = t.thumbs.swiper;
                if (!s || s.destroyed)
                    return;
                const i = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
                let a = 1;
                const r = t.params.thumbs.slideThumbActiveClass;
                if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (a = t.params.slidesPerView),
                t.params.thumbs.multipleActiveThumbs || (a = 1),
                a = Math.floor(a),
                s.slides.forEach((e => e.classList.remove(r))),
                s.params.loop || s.params.virtual && s.params.virtual.enabled)
                    for (let e = 0; e < a; e += 1)
                        f(s.slidesEl, `[data-swiper-slide-index="${t.realIndex + e}"]`).forEach((e => {
                            e.classList.add(r)
                        }
                        ));
                else
                    for (let e = 0; e < a; e += 1)
                        s.slides[t.realIndex + e] && s.slides[t.realIndex + e].classList.add(r);
                const n = t.params.thumbs.autoScrollOffset
                  , l = n && !s.params.loop;
                if (t.realIndex !== s.realIndex || l) {
                    const a = s.activeIndex;
                    let r, o;
                    if (s.params.loop) {
                        const e = s.slides.filter((e => e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`))[0];
                        r = s.slides.indexOf(e),
                        o = t.activeIndex > t.previousIndex ? "next" : "prev"
                    } else
                        r = t.realIndex,
                        o = r > t.previousIndex ? "next" : "prev";
                    l && (r += "next" === o ? n : -1 * n),
                    s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(r) < 0 && (s.params.centeredSlides ? r = r > a ? r - Math.floor(i / 2) + 1 : r + Math.floor(i / 2) - 1 : r > a && s.params.slidesPerGroup,
                    s.slideTo(r, e ? 0 : void 0))
                }
            }
            t.thumbs = {
                swiper: null
            },
            i("beforeInit", ( () => {
                const {thumbs: e} = t.params;
                if (e && e.swiper)
                    if ("string" == typeof e.swiper || e.swiper instanceof HTMLElement) {
                        const s = r()
                          , i = () => {
                            const i = "string" == typeof e.swiper ? s.querySelector(e.swiper) : e.swiper;
                            if (i && i.swiper)
                                e.swiper = i.swiper,
                                o(),
                                d(!0);
                            else if (i) {
                                const s = a => {
                                    e.swiper = a.detail[0],
                                    i.removeEventListener("init", s),
                                    o(),
                                    d(!0),
                                    e.swiper.update(),
                                    t.update()
                                }
                                ;
                                i.addEventListener("init", s)
                            }
                            return i
                        }
                          , a = () => {
                            t.destroyed || i() || requestAnimationFrame(a)
                        }
                        ;
                        requestAnimationFrame(a)
                    } else
                        o(),
                        d(!0)
            }
            )),
            i("slideChange update resize observerUpdate", ( () => {
                d()
            }
            )),
            i("setTransition", ( (e, s) => {
                const i = t.thumbs.swiper;
                i && !i.destroyed && i.setTransition(s)
            }
            )),
            i("beforeDestroy", ( () => {
                const e = t.thumbs.swiper;
                e && !e.destroyed && n && e.destroy()
            }
            )),
            Object.assign(t.thumbs, {
                init: o,
                update: d
            })
        }
        function te(e) {
            let t, s, i, a, {swiper: r, extendParams: n, on: l} = e;
            n({
                grid: {
                    rows: 1,
                    fill: "column"
                }
            });
            const o = () => {
                let e = r.params.spaceBetween;
                return "string" == typeof e && e.indexOf("%") >= 0 ? e = parseFloat(e.replace("%", "")) / 100 * r.size : "string" == typeof e && (e = parseFloat(e)),
                e
            }
            ;
            l("init", ( () => {
                a = r.params.grid && r.params.grid.rows > 1
            }
            )),
            l("update", ( () => {
                const {params: e, el: t} = r
                  , s = e.grid && e.grid.rows > 1;
                a && !s ? (t.classList.remove(`${e.containerModifierClass}grid`, `${e.containerModifierClass}grid-column`),
                i = 1,
                r.emitContainerClasses()) : !a && s && (t.classList.add(`${e.containerModifierClass}grid`),
                "column" === e.grid.fill && t.classList.add(`${e.containerModifierClass}grid-column`),
                r.emitContainerClasses()),
                a = s
            }
            )),
            r.grid = {
                initSlides: e => {
                    const {slidesPerView: a} = r.params
                      , {rows: n, fill: l} = r.params.grid
                      , o = r.virtual && r.params.virtual.enabled ? r.virtual.slides.length : e.length;
                    i = Math.floor(o / n),
                    t = Math.floor(o / n) === o / n ? o : Math.ceil(o / n) * n,
                    "auto" !== a && "row" === l && (t = Math.max(t, a * n)),
                    s = t / n
                }
                ,
                unsetSlides: () => {
                    r.slides && r.slides.forEach((e => {
                        e.swiperSlideGridSet && (e.style.height = "",
                        e.style[r.getDirectionLabel("margin-top")] = "")
                    }
                    ))
                }
                ,
                updateSlide: (e, a, n) => {
                    const {slidesPerGroup: l} = r.params
                      , d = o()
                      , {rows: c, fill: p} = r.params.grid
                      , u = r.virtual && r.params.virtual.enabled ? r.virtual.slides.length : n.length;
                    let m, f, h;
                    if ("row" === p && l > 1) {
                        const s = Math.floor(e / (l * c))
                          , i = e - c * l * s
                          , r = 0 === s ? l : Math.min(Math.ceil((u - s * c * l) / c), l);
                        h = Math.floor(i / r),
                        f = i - h * r + s * l,
                        m = f + h * t / c,
                        a.style.order = m
                    } else
                        "column" === p ? (f = Math.floor(e / c),
                        h = e - f * c,
                        (f > i || f === i && h === c - 1) && (h += 1,
                        h >= c && (h = 0,
                        f += 1))) : (h = Math.floor(e / s),
                        f = e - h * s);
                    a.row = h,
                    a.column = f,
                    a.style.height = `calc((100% - ${(c - 1) * d}px) / ${c})`,
                    a.style[r.getDirectionLabel("margin-top")] = 0 !== h ? d && `${d}px` : "",
                    a.swiperSlideGridSet = !0
                }
                ,
                updateWrapperSize: (e, s) => {
                    const {centeredSlides: i, roundLengths: a} = r.params
                      , n = o()
                      , {rows: l} = r.params.grid;
                    if (r.virtualSize = (e + n) * t,
                    r.virtualSize = Math.ceil(r.virtualSize / l) - n,
                    r.params.cssMode || (r.wrapperEl.style[r.getDirectionLabel("width")] = `${r.virtualSize + n}px`),
                    i) {
                        const e = [];
                        for (let t = 0; t < s.length; t += 1) {
                            let i = s[t];
                            a && (i = Math.floor(i)),
                            s[t] < r.virtualSize + s[0] && e.push(i)
                        }
                        s.splice(0, s.length),
                        s.push(...e)
                    }
                }
            }
        }
        function se(e) {
            document.querySelectorAll("[data-i18n]").forEach((t => {
                const s = t.getAttribute("data-i18n");
                t.innerHTML = e[s]
            }
            ))
        }
        async function ie(e) {
            return (await fetch(`data-json/${e}.json`)).json()
        }
        function ae(e) {
            document.querySelectorAll(".lang__btn").forEach((t => {
                t.classList.remove("active"),
                e === t.getAttribute("data-lang") && t.classList.add("active")
            }
            ))
        }
        Object.keys(W).forEach((e => {
            Object.keys(W[e]).forEach((t => {
                X.prototype[t] = W[e][t]
            }
            ))
        }
        )),
        X.use([function(e) {
            let {swiper: t, on: s, emit: i} = e;
            const a = l();
            let r = null
              , n = null;
            const o = () => {
                t && !t.destroyed && t.initialized && (i("beforeResize"),
                i("resize"))
            }
              , d = () => {
                t && !t.destroyed && t.initialized && i("orientationchange")
            }
            ;
            s("init", ( () => {
                t.params.resizeObserver && void 0 !== a.ResizeObserver ? t && !t.destroyed && t.initialized && (r = new ResizeObserver((e => {
                    n = a.requestAnimationFrame(( () => {
                        const {width: s, height: i} = t;
                        let a = s
                          , r = i;
                        e.forEach((e => {
                            let {contentBoxSize: s, contentRect: i, target: n} = e;
                            n && n !== t.el || (a = i ? i.width : (s[0] || s).inlineSize,
                            r = i ? i.height : (s[0] || s).blockSize)
                        }
                        )),
                        a === s && r === i || o()
                    }
                    ))
                }
                )),
                r.observe(t.el)) : (a.addEventListener("resize", o),
                a.addEventListener("orientationchange", d))
            }
            )),
            s("destroy", ( () => {
                n && a.cancelAnimationFrame(n),
                r && r.unobserve && t.el && (r.unobserve(t.el),
                r = null),
                a.removeEventListener("resize", o),
                a.removeEventListener("orientationchange", d)
            }
            ))
        }
        , function(e) {
            let {swiper: t, extendParams: s, on: i, emit: a} = e;
            const r = []
              , n = l()
              , o = function(e, s) {
                void 0 === s && (s = {});
                const i = new (n.MutationObserver || n.WebkitMutationObserver)((e => {
                    if (t.__preventObserver__)
                        return;
                    if (1 === e.length)
                        return void a("observerUpdate", e[0]);
                    const s = function() {
                        a("observerUpdate", e[0])
                    };
                    n.requestAnimationFrame ? n.requestAnimationFrame(s) : n.setTimeout(s, 0)
                }
                ));
                i.observe(e, {
                    attributes: void 0 === s.attributes || s.attributes,
                    childList: void 0 === s.childList || s.childList,
                    characterData: void 0 === s.characterData || s.characterData
                }),
                r.push(i)
            };
            s({
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            }),
            i("init", ( () => {
                if (t.params.observer) {
                    if (t.params.observeParents) {
                        const e = b(t.hostEl);
                        for (let t = 0; t < e.length; t += 1)
                            o(e[t])
                    }
                    o(t.hostEl, {
                        childList: t.params.observeSlideChildren
                    }),
                    o(t.wrapperEl, {
                        attributes: !1
                    })
                }
            }
            )),
            i("destroy", ( () => {
                r.forEach((e => {
                    e.disconnect()
                }
                )),
                r.splice(0, r.length)
            }
            ))
        }
        ]),
        window.addEventListener("DOMContentLoaded", (async () => {
            const e = localStorage.getItem("language") || "en";
            se(await ie(e)),
            ae(e)
        }
        )),
        s(964);
        const re = new X(".expert-slider",{
            modules: [Q, Z],
            slidesPerView: 1,
            slidesPerGroup: 1,
            pagination: {
                el: ".expertise__slider-pagination",
                clickable: !0
            },
            breakpoints: {
                421: {
                    slidesPerView: 2,
                    slidesPerGroup: 2
                },
                570: {
                    slidesPerView: 3,
                    slidesPerGroup: 3
                },
                769: {
                    slidesPerView: 4,
                    slidesPerGroup: 4
                },
                1120: {
                    slidesPerView: 5,
                    slidesPerGroup: 5
                },
                1420: {
                    slidesPerView: 6,
                    slidesPerGroup: 6
                }
            },
            a11y: {
                paginationBulletMessage: "Go to slide {{index}}"
            },
            init: !1
        })
          , ne = new X(".thumbs-slider",{
            slidesPerView: 5,
            init: !1
        })
          , le = new X(".main-slider",{
            modules: [K, Q, ee, Z],
            loop: !0,
            spaceBetween: 20,
            pagination: {
                el: ".slider-block-main__pagination",
                clickable: !0
            },
            navigation: {
                nextEl: ".thumbs-nav__button-next",
                prevEl: ".thumbs-nav__button-prev"
            },
            a11y: {
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                paginationBulletMessage: "Go to slide {{index}}"
            },
            thumbs: {
                swiper: ne
            },
            init: !1
        })
          , oe = new X(".players__slider",{
            modules: [K, Q, te, Z],
            slidesPerView: 3,
            grid: {
                rows: 3
            },
            pagination: {
                el: ".players__pagination",
                clickable: !0
            },
            navigation: {
                nextEl: ".players__btn-slide--next",
                prevEl: ".players__btn-slide--prev"
            },
            a11y: {
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                paginationBulletMessage: "Go to slide {{index}}"
            },
            breakpoints: {
                491: {
                    slidesPerView: 3,
                    grid: {
                        rows: 1
                    }
                },
                1024: {
                    slidesPerView: 4,
                    grid: {
                        rows: 1
                    }
                }
            },
            init: !1
        })
          , de = new X(".slider-clients__slider",{
            modules: [K, Q, Z],
            loop: !0,
            slidesPerView: 1,
            pagination: {
                el: ".slider-clients__pagination",
                clickable: !0
            },
            navigation: {
                nextEl: ".slider-clients__button--next",
                prevEl: ".slider-clients__button--prev"
            },
            a11y: {
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                paginationBulletMessage: "Go to slide {{index}}"
            },
            init: !1
        });
        document.querySelectorAll(".lang__btn").forEach((e => {
            e.addEventListener("click", (function() {
                !async function(e) {
                    await function(e) {
                        localStorage.setItem("language", e)
                    }(e),
                    se(await ie(e)),
                    ae(e)
                }(this.getAttribute("data-lang"))
            }
            ))
        }
        )),
        function() {
            const e = document.querySelector(".scroll-btn");
            e && e.addEventListener("click", ( () => {
                if (document.querySelector(e.dataset.nextSection)) {
                    let t = document.querySelector(e.dataset.nextSection).getBoundingClientRect().top + scrollY;
                    window.scrollTo({
                        top: t,
                        behavior: "smooth"
                    })
                }
            }
            ))
        }(),
        re.init(),
        ne.init(),
        le.init(),
        oe.init(),
        de.init()
    }
    )()
}
)();
