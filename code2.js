/*! jQuery Migrate v3.4.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
  (function (t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e, window);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(require("jquery"), window))
      : t(jQuery, window);
  })(function (s, n) {
    "use strict";
    function e(e) {
      return (
        0 <=
        (function (e, t) {
          for (
            var r = /^(\d+)\.(\d+)\.(\d+)/,
              n = r.exec(e) || [],
              o = r.exec(t) || [],
              a = 1;
            a <= 3;
            a++
          ) {
            if (+n[a] > +o[a]) return 1;
            if (+n[a] < +o[a]) return -1;
          }
          return 0;
        })(s.fn.jquery, e)
      );
    }
    s.migrateVersion = "3.4.0";
    var t = Object.create(null),
      o =
        ((s.migrateDisablePatches = function () {
          for (var e = 0; e < arguments.length; e++) t[arguments[e]] = !0;
        }),
        (s.migrateEnablePatches = function () {
          for (var e = 0; e < arguments.length; e++) delete t[arguments[e]];
        }),
        (s.migrateIsPatchEnabled = function (e) {
          return !t[e];
        }),
        n.console &&
          n.console.log &&
          ((s && e("3.0.0")) ||
            n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),
          s.migrateWarnings &&
            n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),
          n.console.log(
            "JQMIGRATE: Migrate is installed" +
              (s.migrateMute ? "" : " with logging active") +
              ", version " +
              s.migrateVersion
          )),
        {});
    function i(e, t) {
      var r = n.console;
      !s.migrateIsPatchEnabled(e) ||
        (s.migrateDeduplicateWarnings && o[t]) ||
        ((o[t] = !0),
        s.migrateWarnings.push(t + " [" + e + "]"),
        r &&
          r.warn &&
          !s.migrateMute &&
          (r.warn("JQMIGRATE: " + t), s.migrateTrace && r.trace && r.trace()));
    }
    function r(e, t, r, n, o) {
      Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return i(n, o), r;
        },
        set: function (e) {
          i(n, o), (r = e);
        }
      });
    }
    function a(e, t, r, n, o) {
      var a = e[t];
      e[t] = function () {
        return (
          o && i(n, o),
          (s.migrateIsPatchEnabled(n) ? r : a || s.noop).apply(this, arguments)
        );
      };
    }
    function u(e, t, r, n, o) {
      if (!o) throw new Error("No warning message provided");
      a(e, t, r, n, o);
    }
    function d(e, t, r, n) {
      a(e, t, r, n);
    }
    (s.migrateDeduplicateWarnings = !0),
      (s.migrateWarnings = []),
      void 0 === s.migrateTrace && (s.migrateTrace = !0),
      (s.migrateReset = function () {
        (o = {}), (s.migrateWarnings.length = 0);
      }),
      "BackCompat" === n.document.compatMode &&
        i("quirks", "jQuery is not compatible with Quirks Mode");
    var c,
      l,
      p,
      f = {},
      m = s.fn.init,
      y = s.find,
      h = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
      g = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
      v = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    for (c in (d(
      s.fn,
      "init",
      function (e) {
        var t = Array.prototype.slice.call(arguments);
        return (
          s.migrateIsPatchEnabled("selector-empty-id") &&
            "string" == typeof e &&
            "#" === e &&
            (i("selector-empty-id", "jQuery( '#' ) is not a valid selector"),
            (t[0] = [])),
          m.apply(this, t)
        );
      },
      "selector-empty-id"
    ),
    (s.fn.init.prototype = s.fn),
    d(
      s,
      "find",
      function (t) {
        var r = Array.prototype.slice.call(arguments);
        if ("string" == typeof t && h.test(t))
          try {
            n.document.querySelector(t);
          } catch (e) {
            t = t.replace(g, function (e, t, r, n) {
              return "[" + t + r + '"' + n + '"]';
            });
            try {
              n.document.querySelector(t),
                i(
                  "selector-hash",
                  "Attribute selector with '#' must be quoted: " + r[0]
                ),
                (r[0] = t);
            } catch (e) {
              i(
                "selector-hash",
                "Attribute selector with '#' was not fixed: " + r[0]
              );
            }
          }
        return y.apply(this, r);
      },
      "selector-hash"
    ),
    y))
      Object.prototype.hasOwnProperty.call(y, c) && (s.find[c] = y[c]);
    u(
      s.fn,
      "size",
      function () {
        return this.length;
      },
      "size",
      "jQuery.fn.size() is deprecated and removed; use the .length property"
    ),
      u(
        s,
        "parseJSON",
        function () {
          return JSON.parse.apply(null, arguments);
        },
        "parseJSON",
        "jQuery.parseJSON is deprecated; use JSON.parse"
      ),
      u(
        s,
        "holdReady",
        s.holdReady,
        "holdReady",
        "jQuery.holdReady is deprecated"
      ),
      u(
        s,
        "unique",
        s.uniqueSort,
        "unique",
        "jQuery.unique is deprecated; use jQuery.uniqueSort"
      ),
      r(
        s.expr,
        "filters",
        s.expr.pseudos,
        "expr-pre-pseudos",
        "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"
      ),
      r(
        s.expr,
        ":",
        s.expr.pseudos,
        "expr-pre-pseudos",
        "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"
      ),
      e("3.1.1") &&
        u(
          s,
          "trim",
          function (e) {
            return null == e ? "" : (e + "").replace(v, "");
          },
          "trim",
          "jQuery.trim is deprecated; use String.prototype.trim"
        ),
      e("3.2.0") &&
        (u(
          s,
          "nodeName",
          function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          },
          "nodeName",
          "jQuery.nodeName is deprecated"
        ),
        u(
          s,
          "isArray",
          Array.isArray,
          "isArray",
          "jQuery.isArray is deprecated; use Array.isArray"
        )),
      e("3.3.0") &&
        (u(
          s,
          "isNumeric",
          function (e) {
            var t = typeof e;
            return (
              ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
            );
          },
          "isNumeric",
          "jQuery.isNumeric() is deprecated"
        ),
        s.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            f["[object " + t + "]"] = t.toLowerCase();
          }
        ),
        u(
          s,
          "type",
          function (e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? f[Object.prototype.toString.call(e)] || "object"
              : typeof e;
          },
          "type",
          "jQuery.type is deprecated"
        ),
        u(
          s,
          "isFunction",
          function (e) {
            return "function" == typeof e;
          },
          "isFunction",
          "jQuery.isFunction() is deprecated"
        ),
        u(
          s,
          "isWindow",
          function (e) {
            return null != e && e === e.window;
          },
          "isWindow",
          "jQuery.isWindow() is deprecated"
        )),
      s.ajax &&
        ((l = s.ajax),
        (p = /(=)\?(?=&|$)|\?\?/),
        d(
          s,
          "ajax",
          function () {
            var e = l.apply(this, arguments);
            return (
              e.promise &&
                (u(
                  e,
                  "success",
                  e.done,
                  "jqXHR-methods",
                  "jQXHR.success is deprecated and removed"
                ),
                u(
                  e,
                  "error",
                  e.fail,
                  "jqXHR-methods",
                  "jQXHR.error is deprecated and removed"
                ),
                u(
                  e,
                  "complete",
                  e.always,
                  "jqXHR-methods",
                  "jQXHR.complete is deprecated and removed"
                )),
              e
            );
          },
          "jqXHR-methods"
        ),
        e("4.0.0") ||
          s.ajaxPrefilter("+json", function (e) {
            !1 !== e.jsonp &&
              (p.test(e.url) ||
                ("string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  p.test(e.data))) &&
              i(
                "jsonp-promotion",
                "JSON-to-JSONP auto-promotion is deprecated"
              );
          }));
    var j = s.fn.removeAttr,
      b = s.fn.toggleClass,
      w = /\S+/g;
    function Q(e) {
      return e.replace(/-([a-z])/g, function (e, t) {
        return t.toUpperCase();
      });
    }
    d(
      s.fn,
      "removeAttr",
      function (e) {
        var r = this;
        return (
          s.each(e.match(w), function (e, t) {
            s.expr.match.bool.test(t) &&
              (i(
                "removeAttr-bool",
                "jQuery.fn.removeAttr no longer sets boolean properties: " + t
              ),
              r.prop(t, !1));
          }),
          j.apply(this, arguments)
        );
      },
      "removeAttr-bool"
    ),
      d(
        s.fn,
        "toggleClass",
        function (t) {
          return void 0 !== t && "boolean" != typeof t
            ? b.apply(this, arguments)
            : (i(
                "toggleClass-bool",
                "jQuery.fn.toggleClass( boolean ) is deprecated"
              ),
              this.each(function () {
                var e = (this.getAttribute && this.getAttribute("class")) || "";
                e && s.data(this, "__className__", e),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      (!e && !1 !== t && s.data(this, "__className__")) || ""
                    );
              }));
        },
        "toggleClass-bool"
      );
    var x,
      A = !1,
      R = /^[a-z]/,
      T = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
    s.swap &&
      s.each(["height", "width", "reliableMarginRight"], function (e, t) {
        var r = s.cssHooks[t] && s.cssHooks[t].get;
        r &&
          (s.cssHooks[t].get = function () {
            var e;
            return (A = !0), (e = r.apply(this, arguments)), (A = !1), e;
          });
      }),
      d(
        s,
        "swap",
        function (e, t, r, n) {
          var o,
            a = {};
          for (o in (A ||
            i("swap", "jQuery.swap() is undocumented and deprecated"),
          t))
            (a[o] = e.style[o]), (e.style[o] = t[o]);
          for (o in ((r = r.apply(e, n || [])), t)) e.style[o] = a[o];
          return r;
        },
        "swap"
      ),
      e("3.4.0") &&
        "undefined" != typeof Proxy &&
        (s.cssProps = new Proxy(s.cssProps || {}, {
          set: function () {
            return (
              i("cssProps", "jQuery.cssProps is deprecated"),
              Reflect.set.apply(this, arguments)
            );
          }
        })),
      e("4.0.0") &&
        "undefined" != typeof Proxy &&
        (s.cssNumber = new Proxy(
          {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
          },
          {
            get: function () {
              return (
                i("css-number", "jQuery.cssNumber is deprecated"),
                Reflect.get.apply(this, arguments)
              );
            },
            set: function () {
              return (
                i("css-number", "jQuery.cssNumber is deprecated"),
                Reflect.set.apply(this, arguments)
              );
            }
          }
        )),
      (x = s.fn.css),
      d(
        s.fn,
        "css",
        function (e, t) {
          var r,
            n = this;
          return e && "object" == typeof e && !Array.isArray(e)
            ? (s.each(e, function (e, t) {
                s.fn.css.call(n, e, t);
              }),
              this)
            : ("number" == typeof t &&
                ((t = Q(e)),
                (r = t),
                (R.test(r) && T.test(r[0].toUpperCase() + r.slice(1))) ||
                  s.cssNumber[t] ||
                  i(
                    "css-number",
                    'Number-typed values are deprecated for jQuery.fn.css( "' +
                      e +
                      '", value )'
                  )),
              x.apply(this, arguments));
        },
        "css-number"
      );
    function C(e) {
      var t = n.document.implementation.createHTMLDocument("");
      return (t.body.innerHTML = e), t.body && t.body.innerHTML;
    }
    var S,
      N,
      P,
      k,
      H,
      E,
      M,
      q = s.data,
      D =
        (d(
          s,
          "data",
          function (e, t, r) {
            var n, o, a;
            if (t && "object" == typeof t && 2 === arguments.length) {
              for (a in ((n = s.hasData(e) && q.call(this, e)), (o = {}), t))
                a !== Q(a)
                  ? (i(
                      "data-camelCase",
                      "jQuery.data() always sets/gets camelCased names: " + a
                    ),
                    (n[a] = t[a]))
                  : (o[a] = t[a]);
              return q.call(this, e, o), t;
            }
            return t &&
              "string" == typeof t &&
              t !== Q(t) &&
              (n = s.hasData(e) && q.call(this, e)) &&
              t in n
              ? (i(
                  "data-camelCase",
                  "jQuery.data() always sets/gets camelCased names: " + t
                ),
                2 < arguments.length && (n[t] = r),
                n[t])
              : q.apply(this, arguments);
          },
          "data-camelCase"
        ),
        s.fx &&
          ((P = s.Tween.prototype.run),
          (k = function (e) {
            return e;
          }),
          d(
            s.Tween.prototype,
            "run",
            function () {
              1 < s.easing[this.easing].length &&
                (i(
                  "easing-one-arg",
                  "'jQuery.easing." +
                    this.easing.toString() +
                    "' should use only one argument"
                ),
                (s.easing[this.easing] = k)),
                P.apply(this, arguments);
            },
            "easing-one-arg"
          ),
          (S = s.fx.interval),
          (N = "jQuery.fx.interval is deprecated"),
          n.requestAnimationFrame &&
            Object.defineProperty(s.fx, "interval", {
              configurable: !0,
              enumerable: !0,
              get: function () {
                return (
                  n.document.hidden || i("fx-interval", N),
                  s.migrateIsPatchEnabled("fx-interval") && void 0 === S
                    ? 13
                    : S
                );
              },
              set: function (e) {
                i("fx-interval", N), (S = e);
              }
            })),
        s.fn.load),
      F = s.event.add,
      W = s.event.fix,
      O =
        ((s.event.props = []),
        (s.event.fixHooks = {}),
        r(
          s.event.props,
          "concat",
          s.event.props.concat,
          "event-old-patch",
          "jQuery.event.props.concat() is deprecated and removed"
        ),
        d(
          s.event,
          "fix",
          function (e) {
            var t = e.type,
              r = this.fixHooks[t],
              n = s.event.props;
            if (n.length) {
              i(
                "event-old-patch",
                "jQuery.event.props are deprecated and removed: " + n.join()
              );
              while (n.length) s.event.addProp(n.pop());
            }
            if (
              r &&
              !r._migrated_ &&
              ((r._migrated_ = !0),
              i(
                "event-old-patch",
                "jQuery.event.fixHooks are deprecated and removed: " + t
              ),
              (n = r.props) && n.length)
            )
              while (n.length) s.event.addProp(n.pop());
            return (t = W.call(this, e)), r && r.filter ? r.filter(t, e) : t;
          },
          "event-old-patch"
        ),
        d(
          s.event,
          "add",
          function (e, t) {
            return (
              e === n &&
                "load" === t &&
                "complete" === n.document.readyState &&
                i(
                  "load-after-event",
                  "jQuery(window).on('load'...) called after load event occurred"
                ),
              F.apply(this, arguments)
            );
          },
          "load-after-event"
        ),
        s.each(["load", "unload", "error"], function (e, t) {
          d(
            s.fn,
            t,
            function () {
              var e = Array.prototype.slice.call(arguments, 0);
              return "load" === t && "string" == typeof e[0]
                ? D.apply(this, e)
                : (i(
                    "shorthand-removed-v3",
                    "jQuery.fn." + t + "() is deprecated"
                  ),
                  e.splice(0, 0, t),
                  arguments.length
                    ? this.on.apply(this, e)
                    : (this.triggerHandler.apply(this, e), this));
            },
            "shorthand-removed-v3"
          );
        }),
        s.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (e, r) {
            u(
              s.fn,
              r,
              function (e, t) {
                return 0 < arguments.length
                  ? this.on(r, null, e, t)
                  : this.trigger(r);
              },
              "shorthand-deprecated-v3",
              "jQuery.fn." + r + "() event shorthand is deprecated"
            );
          }
        ),
        s(function () {
          s(n.document).triggerHandler("ready");
        }),
        (s.event.special.ready = {
          setup: function () {
            this === n.document &&
              i("ready-event", "'ready' event is deprecated");
          }
        }),
        u(
          s.fn,
          "bind",
          function (e, t, r) {
            return this.on(e, null, t, r);
          },
          "pre-on-methods",
          "jQuery.fn.bind() is deprecated"
        ),
        u(
          s.fn,
          "unbind",
          function (e, t) {
            return this.off(e, null, t);
          },
          "pre-on-methods",
          "jQuery.fn.unbind() is deprecated"
        ),
        u(
          s.fn,
          "delegate",
          function (e, t, r, n) {
            return this.on(t, e, r, n);
          },
          "pre-on-methods",
          "jQuery.fn.delegate() is deprecated"
        ),
        u(
          s.fn,
          "undelegate",
          function (e, t, r) {
            return 1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", r);
          },
          "pre-on-methods",
          "jQuery.fn.undelegate() is deprecated"
        ),
        u(
          s.fn,
          "hover",
          function (e, t) {
            return this.on("mouseenter", e).on("mouseleave", t || e);
          },
          "pre-on-methods",
          "jQuery.fn.hover() is deprecated"
        ),
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi),
      _ =
        ((s.UNSAFE_restoreLegacyHtmlPrefilter = function () {
          s.migrateEnablePatches("self-closed-tags");
        }),
        d(
          s,
          "htmlPrefilter",
          function (e) {
            var t, r;
            return (
              (r = (t = e).replace(O, "<$1></$2>")) !== t &&
                C(t) !== C(r) &&
                i(
                  "self-closed-tags",
                  "HTML tags must be properly nested and closed: " + t
                ),
              e.replace(O, "<$1></$2>")
            );
          },
          "self-closed-tags"
        ),
        s.migrateDisablePatches("self-closed-tags"),
        s.fn.offset);
    return (
      d(
        s.fn,
        "offset",
        function () {
          var e = this[0];
          return !e || (e.nodeType && e.getBoundingClientRect)
            ? _.apply(this, arguments)
            : (i(
                "offset-valid-elem",
                "jQuery.fn.offset() requires a valid DOM element"
              ),
              arguments.length ? this : void 0);
        },
        "offset-valid-elem"
      ),
      s.ajax &&
        ((H = s.param),
        d(
          s,
          "param",
          function (e, t) {
            var r = s.ajaxSettings && s.ajaxSettings.traditional;
            return (
              void 0 === t &&
                r &&
                (i(
                  "param-ajax-traditional",
                  "jQuery.param() no longer uses jQuery.ajaxSettings.traditional"
                ),
                (t = r)),
              H.call(this, e, t)
            );
          },
          "param-ajax-traditional"
        )),
      u(
        s.fn,
        "andSelf",
        s.fn.addBack,
        "andSelf",
        "jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"
      ),
      s.Deferred &&
        ((E = s.Deferred),
        (M = [
          [
            "resolve",
            "done",
            s.Callbacks("once memory"),
            s.Callbacks("once memory"),
            "resolved"
          ],
          [
            "reject",
            "fail",
            s.Callbacks("once memory"),
            s.Callbacks("once memory"),
            "rejected"
          ],
          ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]
        ]),
        d(
          s,
          "Deferred",
          function (e) {
            var a = E(),
              i = a.promise();
            function t() {
              var o = arguments;
              return s
                .Deferred(function (n) {
                  s.each(M, function (e, t) {
                    var r = "function" == typeof o[e] && o[e];
                    a[t[1]](function () {
                      var e = r && r.apply(this, arguments);
                      e && "function" == typeof e.promise
                        ? e
                            .promise()
                            .done(n.resolve)
                            .fail(n.reject)
                            .progress(n.notify)
                        : n[t[0] + "With"](
                            this === i ? n.promise() : this,
                            r ? [e] : arguments
                          );
                    });
                  }),
                    (o = null);
                })
                .promise();
            }
            return (
              u(a, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"),
              u(i, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"),
              e && e.call(a, a),
              a
            );
          },
          "deferred-pipe"
        ),
        (s.Deferred.exceptionHook = E.exceptionHook)),
      s
    );
  });
