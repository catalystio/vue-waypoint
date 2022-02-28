(function(e) {
  function t(t) {
    for (
      var o, i, c = t[0], a = t[1], l = t[2], p = 0, d = [];
      p < c.length;
      p++
    )
      (i = c[p]),
        Object.prototype.hasOwnProperty.call(r, i) && r[i] && d.push(r[i][0]),
        (r[i] = 0);
    for (o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
    f && f(t);
    while (d.length) d.shift()();
    return u.push.apply(u, l || []), n();
  }
  function n() {
    for (var e, t = 0; t < u.length; t++) {
      for (var n = u[t], o = !0, c = 1; c < n.length; c++) {
        const a = n[c];
        0 !== r[a] && (o = !1);
      }
      o && (u.splice(t--, 1), (e = i((i.s = n[0]))));
    }
    return e;
  }
  var o = {},
    r = { app: 0 },
    u = [];
  function i(t) {
    if (o[t]) return o[t].exports;
    const n = (o[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.m = e),
    (i.c = o),
    (i.d = function(e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function(e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function(e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      const n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (const o in e)
          i.d(
            n,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (i.n = function(e) {
      const t =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = "/");
  let c = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    a = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (let l = 0; l < c.length; l++) t(c[l]);
  var f = a;
  u.push([0, "chunk-vendors"]), n();
})({
  0: function(e, t, n) {
    e.exports = n("cd49");
  },
  "62f8": function(e, t, n) {
    "use strict";
    n("7386");
  },
  7386: function(e, t, n) {},
  "8bbf": function(e, t) {
    e.exports = void 0;
  },
  cd49: function(e, t, n) {
    "use strict";
    n.r(t);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    const o = n("8bbf");
    n("a630"), n("3ca3");
    function r(e, t, n, r, u, i) {
      const c = Object(o["resolveComponent"])("Waypoint");
      return (
        Object(o["openBlock"])(!0),
        Object(o["createBlock"])(
          o["Fragment"],
          null,
          Object(o["renderList"])(Array.from({ length: e.testSize }), function(
            t
          ) {
            return (
              Object(o["openBlock"])(),
              Object(o["createBlock"])(
                c,
                { key: t, onChange: e.printCallback },
                null,
                8,
                ["onChange"]
              )
            );
          }),
          128
        )
      );
    }
    let u,
      i,
      c = n("5530"),
      a = n("53ca");
    n("d3b7"), n("25f0"), n("498a"), n("a15b");
    (function(e) {
      (e["In"] = "IN"), (e["Out"] = "OUT");
    })(u || (u = {})),
      (function(e) {
        (e["Up"] = "UP"),
          (e["Down"] = "DOWN"),
          (e["Left"] = "LEFT"),
          (e["Right"] = "RIGHT");
      })(i || (i = {}));
    const l = function(e) {
        return e ? u.In : u.Out;
      },
      f = function(e, t) {
        return e.top < t.top
          ? i.Up
          : e.left > t.left
          ? i.Right
          : e.top > t.top
          ? i.Down
          : e.left < t.left
          ? i.Left
          : void 0;
      },
      p = function(e) {
        return function(t) {
          const n = Object(o["ref"])(void 0);
          return new window.IntersectionObserver(function(e) {
            const o = e[0];
            if ("undefined" !== typeof o) {
              "undefined" === typeof n.value &&
                (n.value = o.boundingClientRect);
              const r = {
                el: o.target,
                going: l(o.isIntersecting),
                direction: f(o.boundingClientRect, n.value)
              };
              t(r), (n.value = o.boundingClientRect);
            } else console.error("[vue-waypoint]", "observed element is undefined");
          }, e);
        };
      },
      d = Object(o["defineComponent"])({
        name: "Waypoint",
        props: {
          active: {
            type: Boolean,
            default: function() {
              return !0;
            }
          },
          options: {
            type: Object,
            validator: function(e) {
              return "object" === Object(a["a"])(e);
            },
            default: function() {
              return {};
            }
          },
          tag: {
            type: String,
            default: function() {
              return "div";
            }
          },
          disableCssHelpers: {
            type: Boolean,
            default: function() {
              return !1;
            }
          }
        },
        setup: function(e, t) {
          const n = "function" === typeof window.IntersectionObserver,
            r = Object(o["ref"])(!1),
            u = Object(o["ref"])(null),
            i = Object(o["computed"])(function() {
              return n && r.value && e.active && null !== u.value;
            }),
            a = Object(o["ref"])(void 0),
            l = function(e) {
              return (a.value = e);
            },
            f = Object(o["ref"])(p(e.options)(l));
          Object(o["watch"])(i, function() {
            if (null !== u.value)
              return i.value
                ? f.value.observe(u.value)
                : f.value.unobserve(u.value);
          }),
            Object(o["watch"])(a, function() {
              "undefined" !== typeof a.value && t.emit("change", a.value);
            }),
            Object(o["onMounted"])(function() {
              return (r.value = !0);
            }),
            Object(o["onBeforeUpdate"])(function() {
              return (r.value = !1);
            }),
            Object(o["onUpdated"])(function() {
              return (r.value = !0);
            }),
            Object(o["onBeforeUnmount"])(function() {
              return (r.value = !1);
            });
          const d = Object(o["computed"])(function() {
              let e,
                t = null === (e = a.value) || void 0 === e ? void 0 : e.going;
              return "undefined" === typeof t
                ? ""
                : "going-".concat(t.toString().toLowerCase());
            }),
            v = Object(o["computed"])(function() {
              let e,
                t =
                  null === (e = a.value) || void 0 === e ? void 0 : e.direction;
              return "undefined" === typeof t
                ? ""
                : "direction-".concat(t.toString().toLowerCase());
            }),
            s = Object(o["computed"])(function() {
              return [d.value, v.value].join(" ").trim();
            }),
            b = Object(o["computed"])(function() {
              if (!e.disableCssHelpers)
                return "waypoint ".concat(s.value).trim();
            });
          return function() {
            return Object(o["h"])(
              e.tag,
              Object(c["a"])({ ref: u }, b.value ? { class: b.value } : {}),
              t.slots
            );
          };
        }
      }),
      v = d,
      s = Object(o["defineComponent"])({
        name: "App",
        components: { Waypoint: v },
        setup: function() {
          const e = function(e) {
            console.info({ el: e.el, going: e.going, direction: e.direction });
          };
          return { printCallback: e, testSize: 100 };
        }
      });
    n("62f8");
    s.render = r;
    const b = s;
    Object(o["createApp"])(b).mount("#app");
  }
});
//# sourceMappingURL=app.3e4b8005.js.map
