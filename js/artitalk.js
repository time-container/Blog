(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Artitalk = factory());
}(this, (function () { 'use strict';

  var version = "2.4.2";

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, basedir, module) {
  	return module = {
  	  path: basedir,
  	  exports: {},
  	  require: function (path, base) {
        return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
      }
  	}, fn(module, module.exports), module.exports;
  }

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  var avMin = createCommonjsModule(function (module, exports) {
    !function (t, e) {
       module.exports = e() ;
    }("undefined" != typeof self ? self : commonjsGlobal, function () {
      return function (t) {
        function e(r) {
          if (n[r]) return n[r].exports;
          var i = n[r] = {
            i: r,
            l: !1,
            exports: {}
          };
          return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports;
        }

        var n = {};
        return e.m = t, e.c = n, e.d = function (t, n, r) {
          e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: r
          });
        }, e.n = function (t) {
          var n = t && t.__esModule ? function () {
            return t.default;
          } : function () {
            return t;
          };
          return e.d(n, "a", n), n;
        }, e.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }, e.p = "", e(e.s = 80);
      }([function (t, e, n) {
        (function (t, n) {
          var r, i;
          !function () {
            var o = "object" == typeof self && self.self === self && self || "object" == typeof t && t.global === t && t || this || {},
                s = o._,
                a = Array.prototype,
                u = Object.prototype,
                c = "undefined" != typeof Symbol ? Symbol.prototype : null,
                l = a.push,
                f = a.slice,
                h = u.toString,
                d = u.hasOwnProperty,
                p = Array.isArray,
                _ = Object.keys,
                v = Object.create,
                y = function () {},
                m = function (t) {
              return t instanceof m ? t : this instanceof m ? void (this._wrapped = t) : new m(t);
            };

            void 0 === e || e.nodeType ? o._ = m : (void 0 !== n && !n.nodeType && n.exports && (e = n.exports = m), e._ = m), m.VERSION = "1.9.1";

            var g,
                b = function (t, e, n) {
              if (void 0 === e) return t;

              switch (null == n ? 3 : n) {
                case 1:
                  return function (n) {
                    return t.call(e, n);
                  };

                case 3:
                  return function (n, r, i) {
                    return t.call(e, n, r, i);
                  };

                case 4:
                  return function (n, r, i, o) {
                    return t.call(e, n, r, i, o);
                  };
              }

              return function () {
                return t.apply(e, arguments);
              };
            },
                w = function (t, e, n) {
              return m.iteratee !== g ? m.iteratee(t, e) : null == t ? m.identity : m.isFunction(t) ? b(t, e, n) : m.isObject(t) && !m.isArray(t) ? m.matcher(t) : m.property(t);
            };

            m.iteratee = g = function (t, e) {
              return w(t, e, 1 / 0);
            };

            var O = function (t, e) {
              return e = null == e ? t.length - 1 : +e, function () {
                for (var n = Math.max(arguments.length - e, 0), r = Array(n), i = 0; i < n; i++) r[i] = arguments[i + e];

                switch (e) {
                  case 0:
                    return t.call(this, r);

                  case 1:
                    return t.call(this, arguments[0], r);

                  case 2:
                    return t.call(this, arguments[0], arguments[1], r);
                }

                var o = Array(e + 1);

                for (i = 0; i < e; i++) o[i] = arguments[i];

                return o[e] = r, t.apply(this, o);
              };
            },
                A = function (t) {
              if (!m.isObject(t)) return {};
              if (v) return v(t);
              y.prototype = t;
              var e = new y();
              return y.prototype = null, e;
            },
                S = function (t) {
              return function (e) {
                return null == e ? void 0 : e[t];
              };
            },
                E = function (t, e) {
              return null != t && d.call(t, e);
            },
                C = function (t, e) {
              for (var n = e.length, r = 0; r < n; r++) {
                if (null == t) return;
                t = t[e[r]];
              }

              return n ? t : void 0;
            },
                x = Math.pow(2, 53) - 1,
                T = S("length"),
                j = function (t) {
              var e = T(t);
              return "number" == typeof e && e >= 0 && e <= x;
            };

            m.each = m.forEach = function (t, e, n) {
              e = b(e, n);
              var r, i;
              if (j(t)) for (r = 0, i = t.length; r < i; r++) e(t[r], r, t);else {
                var o = m.keys(t);

                for (r = 0, i = o.length; r < i; r++) e(t[o[r]], o[r], t);
              }
              return t;
            }, m.map = m.collect = function (t, e, n) {
              e = w(e, n);

              for (var r = !j(t) && m.keys(t), i = (r || t).length, o = Array(i), s = 0; s < i; s++) {
                var a = r ? r[s] : s;
                o[s] = e(t[a], a, t);
              }

              return o;
            };

            var N = function (t) {
              var e = function (e, n, r, i) {
                var o = !j(e) && m.keys(e),
                    s = (o || e).length,
                    a = t > 0 ? 0 : s - 1;

                for (i || (r = e[o ? o[a] : a], a += t); a >= 0 && a < s; a += t) {
                  var u = o ? o[a] : a;
                  r = n(r, e[u], u, e);
                }

                return r;
              };

              return function (t, n, r, i) {
                var o = arguments.length >= 3;
                return e(t, b(n, i, 4), r, o);
              };
            };

            m.reduce = m.foldl = m.inject = N(1), m.reduceRight = m.foldr = N(-1), m.find = m.detect = function (t, e, n) {
              var r = j(t) ? m.findIndex : m.findKey,
                  i = r(t, e, n);
              if (void 0 !== i && -1 !== i) return t[i];
            }, m.filter = m.select = function (t, e, n) {
              var r = [];
              return e = w(e, n), m.each(t, function (t, n, i) {
                e(t, n, i) && r.push(t);
              }), r;
            }, m.reject = function (t, e, n) {
              return m.filter(t, m.negate(w(e)), n);
            }, m.every = m.all = function (t, e, n) {
              e = w(e, n);

              for (var r = !j(t) && m.keys(t), i = (r || t).length, o = 0; o < i; o++) {
                var s = r ? r[o] : o;
                if (!e(t[s], s, t)) return !1;
              }

              return !0;
            }, m.some = m.any = function (t, e, n) {
              e = w(e, n);

              for (var r = !j(t) && m.keys(t), i = (r || t).length, o = 0; o < i; o++) {
                var s = r ? r[o] : o;
                if (e(t[s], s, t)) return !0;
              }

              return !1;
            }, m.contains = m.includes = m.include = function (t, e, n, r) {
              return j(t) || (t = m.values(t)), ("number" != typeof n || r) && (n = 0), m.indexOf(t, e, n) >= 0;
            }, m.invoke = O(function (t, e, n) {
              var r, i;
              return m.isFunction(e) ? i = e : m.isArray(e) && (r = e.slice(0, -1), e = e[e.length - 1]), m.map(t, function (t) {
                var o = i;

                if (!o) {
                  if (r && r.length && (t = C(t, r)), null == t) return;
                  o = t[e];
                }

                return null == o ? o : o.apply(t, n);
              });
            }), m.pluck = function (t, e) {
              return m.map(t, m.property(e));
            }, m.where = function (t, e) {
              return m.filter(t, m.matcher(e));
            }, m.findWhere = function (t, e) {
              return m.find(t, m.matcher(e));
            }, m.max = function (t, e, n) {
              var r,
                  i,
                  o = -1 / 0,
                  s = -1 / 0;

              if (null == e || "number" == typeof e && "object" != typeof t[0] && null != t) {
                t = j(t) ? t : m.values(t);

                for (var a = 0, u = t.length; a < u; a++) null != (r = t[a]) && r > o && (o = r);
              } else e = w(e, n), m.each(t, function (t, n, r) {
                ((i = e(t, n, r)) > s || i === -1 / 0 && o === -1 / 0) && (o = t, s = i);
              });

              return o;
            }, m.min = function (t, e, n) {
              var r,
                  i,
                  o = 1 / 0,
                  s = 1 / 0;

              if (null == e || "number" == typeof e && "object" != typeof t[0] && null != t) {
                t = j(t) ? t : m.values(t);

                for (var a = 0, u = t.length; a < u; a++) null != (r = t[a]) && r < o && (o = r);
              } else e = w(e, n), m.each(t, function (t, n, r) {
                ((i = e(t, n, r)) < s || i === 1 / 0 && o === 1 / 0) && (o = t, s = i);
              });

              return o;
            }, m.shuffle = function (t) {
              return m.sample(t, 1 / 0);
            }, m.sample = function (t, e, n) {
              if (null == e || n) return j(t) || (t = m.values(t)), t[m.random(t.length - 1)];
              var r = j(t) ? m.clone(t) : m.values(t),
                  i = T(r);
              e = Math.max(Math.min(e, i), 0);

              for (var o = i - 1, s = 0; s < e; s++) {
                var a = m.random(s, o),
                    u = r[s];
                r[s] = r[a], r[a] = u;
              }

              return r.slice(0, e);
            }, m.sortBy = function (t, e, n) {
              var r = 0;
              return e = w(e, n), m.pluck(m.map(t, function (t, n, i) {
                return {
                  value: t,
                  index: r++,
                  criteria: e(t, n, i)
                };
              }).sort(function (t, e) {
                var n = t.criteria,
                    r = e.criteria;

                if (n !== r) {
                  if (n > r || void 0 === n) return 1;
                  if (n < r || void 0 === r) return -1;
                }

                return t.index - e.index;
              }), "value");
            };

            var k = function (t, e) {
              return function (n, r, i) {
                var o = e ? [[], []] : {};
                return r = w(r, i), m.each(n, function (e, i) {
                  var s = r(e, i, n);
                  t(o, e, s);
                }), o;
              };
            };

            m.groupBy = k(function (t, e, n) {
              E(t, n) ? t[n].push(e) : t[n] = [e];
            }), m.indexBy = k(function (t, e, n) {
              t[n] = e;
            }), m.countBy = k(function (t, e, n) {
              E(t, n) ? t[n]++ : t[n] = 1;
            });
            var U = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
            m.toArray = function (t) {
              return t ? m.isArray(t) ? f.call(t) : m.isString(t) ? t.match(U) : j(t) ? m.map(t, m.identity) : m.values(t) : [];
            }, m.size = function (t) {
              return null == t ? 0 : j(t) ? t.length : m.keys(t).length;
            }, m.partition = k(function (t, e, n) {
              t[n ? 0 : 1].push(e);
            }, !0), m.first = m.head = m.take = function (t, e, n) {
              return null == t || t.length < 1 ? null == e ? void 0 : [] : null == e || n ? t[0] : m.initial(t, t.length - e);
            }, m.initial = function (t, e, n) {
              return f.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)));
            }, m.last = function (t, e, n) {
              return null == t || t.length < 1 ? null == e ? void 0 : [] : null == e || n ? t[t.length - 1] : m.rest(t, Math.max(0, t.length - e));
            }, m.rest = m.tail = m.drop = function (t, e, n) {
              return f.call(t, null == e || n ? 1 : e);
            }, m.compact = function (t) {
              return m.filter(t, Boolean);
            };

            var P = function (t, e, n, r) {
              r = r || [];

              for (var i = r.length, o = 0, s = T(t); o < s; o++) {
                var a = t[o];
                if (j(a) && (m.isArray(a) || m.isArguments(a))) {
                  if (e) for (var u = 0, c = a.length; u < c;) r[i++] = a[u++];else P(a, e, n, r), i = r.length;
                } else n || (r[i++] = a);
              }

              return r;
            };

            m.flatten = function (t, e) {
              return P(t, e, !1);
            }, m.without = O(function (t, e) {
              return m.difference(t, e);
            }), m.uniq = m.unique = function (t, e, n, r) {
              m.isBoolean(e) || (r = n, n = e, e = !1), null != n && (n = w(n, r));

              for (var i = [], o = [], s = 0, a = T(t); s < a; s++) {
                var u = t[s],
                    c = n ? n(u, s, t) : u;
                e && !n ? (s && o === c || i.push(u), o = c) : n ? m.contains(o, c) || (o.push(c), i.push(u)) : m.contains(i, u) || i.push(u);
              }

              return i;
            }, m.union = O(function (t) {
              return m.uniq(P(t, !0, !0));
            }), m.intersection = function (t) {
              for (var e = [], n = arguments.length, r = 0, i = T(t); r < i; r++) {
                var o = t[r];

                if (!m.contains(e, o)) {
                  var s;

                  for (s = 1; s < n && m.contains(arguments[s], o); s++);

                  s === n && e.push(o);
                }
              }

              return e;
            }, m.difference = O(function (t, e) {
              return e = P(e, !0, !0), m.filter(t, function (t) {
                return !m.contains(e, t);
              });
            }), m.unzip = function (t) {
              for (var e = t && m.max(t, T).length || 0, n = Array(e), r = 0; r < e; r++) n[r] = m.pluck(t, r);

              return n;
            }, m.zip = O(m.unzip), m.object = function (t, e) {
              for (var n = {}, r = 0, i = T(t); r < i; r++) e ? n[t[r]] = e[r] : n[t[r][0]] = t[r][1];

              return n;
            };

            var I = function (t) {
              return function (e, n, r) {
                n = w(n, r);

                for (var i = T(e), o = t > 0 ? 0 : i - 1; o >= 0 && o < i; o += t) if (n(e[o], o, e)) return o;

                return -1;
              };
            };

            m.findIndex = I(1), m.findLastIndex = I(-1), m.sortedIndex = function (t, e, n, r) {
              n = w(n, r, 1);

              for (var i = n(e), o = 0, s = T(t); o < s;) {
                var a = Math.floor((o + s) / 2);
                n(t[a]) < i ? o = a + 1 : s = a;
              }

              return o;
            };

            var R = function (t, e, n) {
              return function (r, i, o) {
                var s = 0,
                    a = T(r);
                if ("number" == typeof o) t > 0 ? s = o >= 0 ? o : Math.max(o + a, s) : a = o >= 0 ? Math.min(o + 1, a) : o + a + 1;else if (n && o && a) return o = n(r, i), r[o] === i ? o : -1;
                if (i !== i) return o = e(f.call(r, s, a), m.isNaN), o >= 0 ? o + s : -1;

                for (o = t > 0 ? s : a - 1; o >= 0 && o < a; o += t) if (r[o] === i) return o;

                return -1;
              };
            };

            m.indexOf = R(1, m.findIndex, m.sortedIndex), m.lastIndexOf = R(-1, m.findLastIndex), m.range = function (t, e, n) {
              null == e && (e = t || 0, t = 0), n || (n = e < t ? -1 : 1);

              for (var r = Math.max(Math.ceil((e - t) / n), 0), i = Array(r), o = 0; o < r; o++, t += n) i[o] = t;

              return i;
            }, m.chunk = function (t, e) {
              if (null == e || e < 1) return [];

              for (var n = [], r = 0, i = t.length; r < i;) n.push(f.call(t, r, r += e));

              return n;
            };

            var D = function (t, e, n, r, i) {
              if (!(r instanceof e)) return t.apply(n, i);
              var o = A(t.prototype),
                  s = t.apply(o, i);
              return m.isObject(s) ? s : o;
            };

            m.bind = O(function (t, e, n) {
              if (!m.isFunction(t)) throw new TypeError("Bind must be called on a function");
              var r = O(function (i) {
                return D(t, r, e, this, n.concat(i));
              });
              return r;
            }), m.partial = O(function (t, e) {
              var n = m.partial.placeholder,
                  r = function () {
                for (var i = 0, o = e.length, s = Array(o), a = 0; a < o; a++) s[a] = e[a] === n ? arguments[i++] : e[a];

                for (; i < arguments.length;) s.push(arguments[i++]);

                return D(t, r, this, this, s);
              };

              return r;
            }), m.partial.placeholder = m, m.bindAll = O(function (t, e) {
              e = P(e, !1, !1);
              var n = e.length;
              if (n < 1) throw new Error("bindAll must be passed function names");

              for (; n--;) {
                var r = e[n];
                t[r] = m.bind(t[r], t);
              }
            }), m.memoize = function (t, e) {
              var n = function (r) {
                var i = n.cache,
                    o = "" + (e ? e.apply(this, arguments) : r);
                return E(i, o) || (i[o] = t.apply(this, arguments)), i[o];
              };

              return n.cache = {}, n;
            }, m.delay = O(function (t, e, n) {
              return setTimeout(function () {
                return t.apply(null, n);
              }, e);
            }), m.defer = m.partial(m.delay, m, 1), m.throttle = function (t, e, n) {
              var r,
                  i,
                  o,
                  s,
                  a = 0;
              n || (n = {});

              var u = function () {
                a = !1 === n.leading ? 0 : m.now(), r = null, s = t.apply(i, o), r || (i = o = null);
              },
                  c = function () {
                var c = m.now();
                a || !1 !== n.leading || (a = c);
                var l = e - (c - a);
                return i = this, o = arguments, l <= 0 || l > e ? (r && (clearTimeout(r), r = null), a = c, s = t.apply(i, o), r || (i = o = null)) : r || !1 === n.trailing || (r = setTimeout(u, l)), s;
              };

              return c.cancel = function () {
                clearTimeout(r), a = 0, r = i = o = null;
              }, c;
            }, m.debounce = function (t, e, n) {
              var r,
                  i,
                  o = function (e, n) {
                r = null, n && (i = t.apply(e, n));
              },
                  s = O(function (s) {
                if (r && clearTimeout(r), n) {
                  var a = !r;
                  r = setTimeout(o, e), a && (i = t.apply(this, s));
                } else r = m.delay(o, e, this, s);

                return i;
              });

              return s.cancel = function () {
                clearTimeout(r), r = null;
              }, s;
            }, m.wrap = function (t, e) {
              return m.partial(e, t);
            }, m.negate = function (t) {
              return function () {
                return !t.apply(this, arguments);
              };
            }, m.compose = function () {
              var t = arguments,
                  e = t.length - 1;
              return function () {
                for (var n = e, r = t[e].apply(this, arguments); n--;) r = t[n].call(this, r);

                return r;
              };
            }, m.after = function (t, e) {
              return function () {
                if (--t < 1) return e.apply(this, arguments);
              };
            }, m.before = function (t, e) {
              var n;
              return function () {
                return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = null), n;
              };
            }, m.once = m.partial(m.before, 2), m.restArguments = O;

            var L = !{
              toString: null
            }.propertyIsEnumerable("toString"),
                F = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
                q = function (t, e) {
              var n = F.length,
                  r = t.constructor,
                  i = m.isFunction(r) && r.prototype || u,
                  o = "constructor";

              for (E(t, o) && !m.contains(e, o) && e.push(o); n--;) (o = F[n]) in t && t[o] !== i[o] && !m.contains(e, o) && e.push(o);
            };

            m.keys = function (t) {
              if (!m.isObject(t)) return [];
              if (_) return _(t);
              var e = [];

              for (var n in t) E(t, n) && e.push(n);

              return L && q(t, e), e;
            }, m.allKeys = function (t) {
              if (!m.isObject(t)) return [];
              var e = [];

              for (var n in t) e.push(n);

              return L && q(t, e), e;
            }, m.values = function (t) {
              for (var e = m.keys(t), n = e.length, r = Array(n), i = 0; i < n; i++) r[i] = t[e[i]];

              return r;
            }, m.mapObject = function (t, e, n) {
              e = w(e, n);

              for (var r = m.keys(t), i = r.length, o = {}, s = 0; s < i; s++) {
                var a = r[s];
                o[a] = e(t[a], a, t);
              }

              return o;
            }, m.pairs = function (t) {
              for (var e = m.keys(t), n = e.length, r = Array(n), i = 0; i < n; i++) r[i] = [e[i], t[e[i]]];

              return r;
            }, m.invert = function (t) {
              for (var e = {}, n = m.keys(t), r = 0, i = n.length; r < i; r++) e[t[n[r]]] = n[r];

              return e;
            }, m.functions = m.methods = function (t) {
              var e = [];

              for (var n in t) m.isFunction(t[n]) && e.push(n);

              return e.sort();
            };

            var M = function (t, e) {
              return function (n) {
                var r = arguments.length;
                if (e && (n = Object(n)), r < 2 || null == n) return n;

                for (var i = 1; i < r; i++) for (var o = arguments[i], s = t(o), a = s.length, u = 0; u < a; u++) {
                  var c = s[u];
                  e && void 0 !== n[c] || (n[c] = o[c]);
                }

                return n;
              };
            };

            m.extend = M(m.allKeys), m.extendOwn = m.assign = M(m.keys), m.findKey = function (t, e, n) {
              e = w(e, n);

              for (var r, i = m.keys(t), o = 0, s = i.length; o < s; o++) if (r = i[o], e(t[r], r, t)) return r;
            };

            var W = function (t, e, n) {
              return e in n;
            };

            m.pick = O(function (t, e) {
              var n = {},
                  r = e[0];
              if (null == t) return n;
              m.isFunction(r) ? (e.length > 1 && (r = b(r, e[1])), e = m.allKeys(t)) : (r = W, e = P(e, !1, !1), t = Object(t));

              for (var i = 0, o = e.length; i < o; i++) {
                var s = e[i],
                    a = t[s];
                r(a, s, t) && (n[s] = a);
              }

              return n;
            }), m.omit = O(function (t, e) {
              var n,
                  r = e[0];
              return m.isFunction(r) ? (r = m.negate(r), e.length > 1 && (n = e[1])) : (e = m.map(P(e, !1, !1), String), r = function (t, n) {
                return !m.contains(e, n);
              }), m.pick(t, r, n);
            }), m.defaults = M(m.allKeys, !0), m.create = function (t, e) {
              var n = A(t);
              return e && m.extendOwn(n, e), n;
            }, m.clone = function (t) {
              return m.isObject(t) ? m.isArray(t) ? t.slice() : m.extend({}, t) : t;
            }, m.tap = function (t, e) {
              return e(t), t;
            }, m.isMatch = function (t, e) {
              var n = m.keys(e),
                  r = n.length;
              if (null == t) return !r;

              for (var i = Object(t), o = 0; o < r; o++) {
                var s = n[o];
                if (e[s] !== i[s] || !(s in i)) return !1;
              }

              return !0;
            };
            var B, Q;
            B = function (t, e, n, r) {
              if (t === e) return 0 !== t || 1 / t == 1 / e;
              if (null == t || null == e) return !1;
              if (t !== t) return e !== e;
              var i = typeof t;
              return ("function" === i || "object" === i || "object" == typeof e) && Q(t, e, n, r);
            }, Q = function (t, e, n, r) {
              t instanceof m && (t = t._wrapped), e instanceof m && (e = e._wrapped);
              var i = h.call(t);
              if (i !== h.call(e)) return !1;

              switch (i) {
                case "[object RegExp]":
                case "[object String]":
                  return "" + t == "" + e;

                case "[object Number]":
                  return +t != +t ? +e != +e : 0 == +t ? 1 / +t == 1 / e : +t == +e;

                case "[object Date]":
                case "[object Boolean]":
                  return +t == +e;

                case "[object Symbol]":
                  return c.valueOf.call(t) === c.valueOf.call(e);
              }

              var o = "[object Array]" === i;

              if (!o) {
                if ("object" != typeof t || "object" != typeof e) return !1;
                var s = t.constructor,
                    a = e.constructor;
                if (s !== a && !(m.isFunction(s) && s instanceof s && m.isFunction(a) && a instanceof a) && "constructor" in t && "constructor" in e) return !1;
              }

              n = n || [], r = r || [];

              for (var u = n.length; u--;) if (n[u] === t) return r[u] === e;

              if (n.push(t), r.push(e), o) {
                if ((u = t.length) !== e.length) return !1;

                for (; u--;) if (!B(t[u], e[u], n, r)) return !1;
              } else {
                var l,
                    f = m.keys(t);
                if (u = f.length, m.keys(e).length !== u) return !1;

                for (; u--;) if (l = f[u], !E(e, l) || !B(t[l], e[l], n, r)) return !1;
              }

              return n.pop(), r.pop(), !0;
            }, m.isEqual = function (t, e) {
              return B(t, e);
            }, m.isEmpty = function (t) {
              return null == t || (j(t) && (m.isArray(t) || m.isString(t) || m.isArguments(t)) ? 0 === t.length : 0 === m.keys(t).length);
            }, m.isElement = function (t) {
              return !(!t || 1 !== t.nodeType);
            }, m.isArray = p || function (t) {
              return "[object Array]" === h.call(t);
            }, m.isObject = function (t) {
              var e = typeof t;
              return "function" === e || "object" === e && !!t;
            }, m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error", "Symbol", "Map", "WeakMap", "Set", "WeakSet"], function (t) {
              m["is" + t] = function (e) {
                return h.call(e) === "[object " + t + "]";
              };
            }), m.isArguments(arguments) || (m.isArguments = function (t) {
              return E(t, "callee");
            });
            var V = o.document && o.document.childNodes;
            "function" != typeof /./ && "object" != typeof Int8Array && "function" != typeof V && (m.isFunction = function (t) {
              return "function" == typeof t || !1;
            }), m.isFinite = function (t) {
              return !m.isSymbol(t) && isFinite(t) && !isNaN(parseFloat(t));
            }, m.isNaN = function (t) {
              return m.isNumber(t) && isNaN(t);
            }, m.isBoolean = function (t) {
              return !0 === t || !1 === t || "[object Boolean]" === h.call(t);
            }, m.isNull = function (t) {
              return null === t;
            }, m.isUndefined = function (t) {
              return void 0 === t;
            }, m.has = function (t, e) {
              if (!m.isArray(e)) return E(t, e);

              for (var n = e.length, r = 0; r < n; r++) {
                var i = e[r];
                if (null == t || !d.call(t, i)) return !1;
                t = t[i];
              }

              return !!n;
            }, m.noConflict = function () {
              return o._ = s, this;
            }, m.identity = function (t) {
              return t;
            }, m.constant = function (t) {
              return function () {
                return t;
              };
            }, m.noop = function () {}, m.property = function (t) {
              return m.isArray(t) ? function (e) {
                return C(e, t);
              } : S(t);
            }, m.propertyOf = function (t) {
              return null == t ? function () {} : function (e) {
                return m.isArray(e) ? C(t, e) : t[e];
              };
            }, m.matcher = m.matches = function (t) {
              return t = m.extendOwn({}, t), function (e) {
                return m.isMatch(e, t);
              };
            }, m.times = function (t, e, n) {
              var r = Array(Math.max(0, t));
              e = b(e, n, 1);

              for (var i = 0; i < t; i++) r[i] = e(i);

              return r;
            }, m.random = function (t, e) {
              return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1));
            }, m.now = Date.now || function () {
              return new Date().getTime();
            };

            var K = {
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#x27;",
              "`": "&#x60;"
            },
                J = m.invert(K),
                G = function (t) {
              var e = function (e) {
                return t[e];
              },
                  n = "(?:" + m.keys(t).join("|") + ")",
                  r = RegExp(n),
                  i = RegExp(n, "g");

              return function (t) {
                return t = null == t ? "" : "" + t, r.test(t) ? t.replace(i, e) : t;
              };
            };

            m.escape = G(K), m.unescape = G(J), m.result = function (t, e, n) {
              m.isArray(e) || (e = [e]);
              var r = e.length;
              if (!r) return m.isFunction(n) ? n.call(t) : n;

              for (var i = 0; i < r; i++) {
                var o = null == t ? void 0 : t[e[i]];
                void 0 === o && (o = n, i = r), t = m.isFunction(o) ? o.call(t) : o;
              }

              return t;
            };
            var z = 0;
            m.uniqueId = function (t) {
              var e = ++z + "";
              return t ? t + e : e;
            }, m.templateSettings = {
              evaluate: /<%([\s\S]+?)%>/g,
              interpolate: /<%=([\s\S]+?)%>/g,
              escape: /<%-([\s\S]+?)%>/g
            };

            var H = /(.)^/,
                $ = {
              "'": "'",
              "\\": "\\",
              "\r": "r",
              "\n": "n",
              "\u2028": "u2028",
              "\u2029": "u2029"
            },
                X = /\\|'|\r|\n|\u2028|\u2029/g,
                Y = function (t) {
              return "\\" + $[t];
            };

            m.template = function (t, e, n) {
              !e && n && (e = n), e = m.defaults({}, e, m.templateSettings);
              var r = RegExp([(e.escape || H).source, (e.interpolate || H).source, (e.evaluate || H).source].join("|") + "|$", "g"),
                  i = 0,
                  o = "__p+='";
              t.replace(r, function (e, n, r, s, a) {
                return o += t.slice(i, a).replace(X, Y), i = a + e.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : s && (o += "';\n" + s + "\n__p+='"), e;
              }), o += "';\n", e.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
              var s;

              try {
                s = new Function(e.variable || "obj", "_", o);
              } catch (t) {
                throw t.source = o, t;
              }

              var a = function (t) {
                return s.call(this, t, m);
              };

              return a.source = "function(" + (e.variable || "obj") + "){\n" + o + "}", a;
            }, m.chain = function (t) {
              var e = m(t);
              return e._chain = !0, e;
            };

            var Z = function (t, e) {
              return t._chain ? m(e).chain() : e;
            };

            m.mixin = function (t) {
              return m.each(m.functions(t), function (e) {
                var n = m[e] = t[e];

                m.prototype[e] = function () {
                  var t = [this._wrapped];
                  return l.apply(t, arguments), Z(this, n.apply(m, t));
                };
              }), m;
            }, m.mixin(m), m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
              var e = a[t];

              m.prototype[t] = function () {
                var n = this._wrapped;
                return e.apply(n, arguments), "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0], Z(this, n);
              };
            }), m.each(["concat", "join", "slice"], function (t) {
              var e = a[t];

              m.prototype[t] = function () {
                return Z(this, e.apply(this._wrapped, arguments));
              };
            }), m.prototype.value = function () {
              return this._wrapped;
            }, m.prototype.valueOf = m.prototype.toJSON = m.prototype.value, m.prototype.toString = function () {
              return String(this._wrapped);
            }, r = [], void 0 !== (i = function () {
              return m;
            }.apply(e, r)) && (n.exports = i);
          }();
        }).call(e, n(66), n(103)(t));
      }, function (t, e) {
        var n = t.exports = {
          version: "2.6.9"
        };
        "number" == typeof __e && (__e = n);
      }, function (t, e, n) {
        t.exports = {
          default: n(83),
          __esModule: !0
        };
      }, function (t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n);
      }, function (t, e, n) {
        var r = n(42)("wks"),
            i = n(31),
            o = n(3).Symbol,
            s = "function" == typeof o;
        (t.exports = function (t) {
          return r[t] || (r[t] = s && o[t] || (s ? o : i)("Symbol." + t));
        }).store = r;
      }, function (t, e, n) {

        function r(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }

        var i = n(2),
            o = r(i),
            s = n(111),
            a = r(s),
            u = n(9),
            c = r(u),
            l = n(27),
            f = r(l),
            h = n(67),
            d = r(h),
            p = n(0),
            _ = n(123),
            v = _.timeout,
            y = n(19),
            m = y("leancloud:request"),
            g = y("leancloud:request:error"),
            b = n(28),
            w = b.getAdapter,
            O = 0,
            A = function (t) {
          var e = t.method,
              n = t.url,
              r = t.query,
              i = t.data,
              o = t.headers,
              s = void 0 === o ? {} : o,
              a = t.timeout,
              u = t.onprogress;

          if (r) {
            var l = (0, d.default)(r).map(function (t) {
              var e = r[t];

              if (void 0 !== e) {
                var n = "object" === (void 0 === e ? "undefined" : (0, f.default)(e)) ? (0, c.default)(e) : e;
                return encodeURIComponent(t) + "=" + encodeURIComponent(n);
              }
            }).filter(function (t) {
              return t;
            }).join("&");
            n = n + "?" + l;
          }

          var h = O++;
          m("request(%d) %s %s %o %o %o", h, e, n, r, i, s);

          var p = w("request"),
              _ = p(n, {
            method: e,
            headers: s,
            data: i,
            onprogress: u
          }).then(function (t) {
            if (m("response(%d) %d %O %o", h, t.status, t.data || t.text, t.header), !1 === t.ok) {
              var e = new Error();
              throw e.response = t, e;
            }

            return t.data;
          }).catch(function (t) {
            throw t.response && (y.enabled("leancloud:request") || g("request(%d) %s %s %o %o %o", h, e, n, r, i, s), g("response(%d) %d %O %o", h, t.response.status, t.response.data || t.response.text, t.response.header), t.statusCode = t.response.status, t.responseText = t.response.text, t.response = t.response.data), t;
          });

          return a ? v(_, a) : _;
        },
            S = function (t) {
          return p.isNull(t) || p.isUndefined(t);
        },
            E = function (t) {
          return p.isArray(t) ? t : void 0 === t || null === t ? [] : [t];
        },
            C = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              e = t.keys,
              n = t.include,
              r = t.includeACL,
              i = {};
          return e && (i.keys = E(e).join(",")), n && (i.include = E(n).join(",")), r && (i.returnACL = r), i;
        },
            x = function (t) {
          return t.sessionToken ? t.sessionToken : t.user && "function" == typeof t.user.getSessionToken ? t.user.getSessionToken() : void 0;
        },
            T = function (t) {
          return function (e) {
            return t(e), e;
          };
        },
            j = function () {},
            N = function (t, e, n) {
          var r;
          return r = e && e.hasOwnProperty("constructor") ? e.constructor : function () {
            t.apply(this, arguments);
          }, p.extend(r, t), j.prototype = t.prototype, r.prototype = new j(), e && p.extend(r.prototype, e), n && p.extend(r, n), r.prototype.constructor = r, r.__super__ = t.prototype, r;
        },
            k = function (t) {
          return new Date(t);
        },
            U = function (t, e, n) {
          var r = e.split("."),
              i = r.pop(),
              o = t;
          return r.forEach(function (t) {
            void 0 === o[t] && (o[t] = {}), o = o[t];
          }), o[i] = n, t;
        },
            P = function (t, e) {
          for (var n = e.split("."), r = n[0], i = n.pop(), o = t, s = 0; s < n.length; s++) if (void 0 === (o = o[n[s]])) return [void 0, void 0, i];

          return [o[i], o, i, r];
        },
            I = function (t) {
          return p.isObject(t) && (0, a.default)(t) === Object.prototype;
        },
            R = function t(e, n) {
          return e() ? n().then(function () {
            return t(e, n);
          }) : o.default.resolve();
        };

        t.exports = {
          ajax: A,
          isNullOrUndefined: S,
          ensureArray: E,
          transformFetchOptions: C,
          getSessionToken: x,
          tap: T,
          inherits: N,
          parseDate: k,
          setValue: U,
          findValue: P,
          isPlainObject: I,
          continueWhile: R
        };
      }, function (t, e, n) {

        var r = n(2),
            i = function (t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }(r),
            o = n(0),
            s = n(137),
            a = n(0),
            u = a.extend,
            c = n(18),
            l = n(5),
            f = l.getSessionToken,
            h = l.ajax,
            d = function (t, e) {
          var n = new Date().getTime(),
              r = s(n + t);
          return e ? r + "," + n + ",master" : r + "," + n;
        },
            p = function (t, e) {
          e ? t["X-LC-Sign"] = d(c.applicationKey) : t["X-LC-Key"] = c.applicationKey;
        },
            _ = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              e = arguments[1],
              n = {
            "X-LC-Id": c.applicationId,
            "Content-Type": "application/json;charset=UTF-8"
          },
              r = !1;
          return "boolean" == typeof t.useMasterKey ? r = t.useMasterKey : "boolean" == typeof c._config.useMasterKey && (r = c._config.useMasterKey), r ? c.masterKey ? e ? n["X-LC-Sign"] = d(c.masterKey, !0) : n["X-LC-Key"] = c.masterKey + ",master" : (console.warn("masterKey is not set, fall back to use appKey"), p(n, e)) : p(n, e), c.hookKey && (n["X-LC-Hook-Key"] = c.hookKey), null !== c._config.production && (n["X-LC-Prod"] = String(c._config.production)), n["X-LC-UA"] = c._sharedConfig.userAgent, i.default.resolve().then(function () {
            var e = f(t);
            if (e) n["X-LC-Session"] = e;else if (!c._config.disableCurrentUser) return c.User.currentAsync().then(function (t) {
              return t && t._sessionToken && (n["X-LC-Session"] = t._sessionToken), n;
            });
            return n;
          });
        },
            v = function (t) {
          var e = t.service,
              n = void 0 === e ? "api" : e,
              r = t.version,
              i = void 0 === r ? "1.1" : r,
              o = t.path,
              s = c._config.serverURLs[n];
          if (!s) throw new Error("undefined server URL for " + n);
          return "/" !== s.charAt(s.length - 1) && (s += "/"), s += i, o && (s += o), s;
        },
            y = function (t) {
          var e = t.service,
              n = t.version,
              r = t.method,
              i = t.path,
              s = t.query,
              a = t.data,
              u = t.authOptions,
              l = t.signKey,
              f = void 0 === l || l;
          if (!c.applicationId || !c.applicationKey && !c.masterKey) throw new Error("Not initialized");
          c._appRouter && c._appRouter.refresh();
          var d = c._config.requestTimeout,
              p = v({
            service: e,
            path: i,
            version: n
          });
          return _(u, f).then(function (t) {
            return h({
              method: r,
              url: p,
              query: s,
              data: a,
              headers: t,
              timeout: d
            }).catch(function (t) {
              var e = {
                code: t.code || -1,
                error: t.message || t.responseText
              };
              if (t.response && t.response.code) e = t.response;else if (t.responseText) try {
                e = JSON.parse(t.responseText);
              } catch (t) {}
              e.rawMessage = e.rawMessage || e.error, c._sharedConfig.keepErrorRawMessage || (e.error += " [" + (t.statusCode || "N/A") + " " + r + " " + p + "]");
              var n = new Error(e.error);
              throw delete e.error, o.extend(n, e);
            });
          });
        },
            m = function (t, e, n, r, i, o, s) {
          var a = "";
          if (t && (a += "/" + t), e && (a += "/" + e), n && (a += "/" + n), i && i._fetchWhenSave) throw new Error("_fetchWhenSave should be in the query");
          if (i && i._where) throw new Error("_where should be in the query");
          return r && "get" === r.toLowerCase() && (s = u({}, s, i), i = null), y({
            method: r,
            path: a,
            query: s,
            data: i,
            authOptions: o
          });
        };

        c.request = y, t.exports = {
          _request: m,
          request: y
        };
      }, function (t, e, n) {
        var r = n(8),
            i = n(53),
            o = n(39),
            s = Object.defineProperty;
        e.f = n(11) ? Object.defineProperty : function (t, e, n) {
          if (r(t), e = o(e, !0), r(n), i) try {
            return s(t, e, n);
          } catch (t) {}
          if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
          return "value" in n && (t[e] = n.value), t;
        };
      }, function (t, e, n) {
        var r = n(13);

        t.exports = function (t) {
          if (!r(t)) throw TypeError(t + " is not an object!");
          return t;
        };
      }, function (t, e, n) {
        t.exports = {
          default: n(104),
          __esModule: !0
        };
      }, function (t, e, n) {
        var r = n(3),
            i = n(1),
            o = n(22),
            s = n(12),
            a = n(14),
            u = function (t, e, n) {
          var c,
              l,
              f,
              h = t & u.F,
              d = t & u.G,
              p = t & u.S,
              _ = t & u.P,
              v = t & u.B,
              y = t & u.W,
              m = d ? i : i[e] || (i[e] = {}),
              g = m.prototype,
              b = d ? r : p ? r[e] : (r[e] || {}).prototype;

          d && (n = e);

          for (c in n) (l = !h && b && void 0 !== b[c]) && a(m, c) || (f = l ? b[c] : n[c], m[c] = d && "function" != typeof b[c] ? n[c] : v && l ? o(f, r) : y && b[c] == f ? function (t) {
            var e = function (e, n, r) {
              if (this instanceof t) {
                switch (arguments.length) {
                  case 0:
                    return new t();

                  case 1:
                    return new t(e);

                  case 2:
                    return new t(e, n);
                }

                return new t(e, n, r);
              }

              return t.apply(this, arguments);
            };

            return e.prototype = t.prototype, e;
          }(f) : _ && "function" == typeof f ? o(Function.call, f) : f, _ && ((m.virtual || (m.virtual = {}))[c] = f, t & u.R && g && !g[c] && s(g, c, f)));
        };

        u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u;
      }, function (t, e, n) {
        t.exports = !n(23)(function () {
          return 7 != Object.defineProperty({}, "a", {
            get: function () {
              return 7;
            }
          }).a;
        });
      }, function (t, e, n) {
        var r = n(7),
            i = n(24);
        t.exports = n(11) ? function (t, e, n) {
          return r.f(t, e, i(1, n));
        } : function (t, e, n) {
          return t[e] = n, t;
        };
      }, function (t, e) {
        t.exports = function (t) {
          return "object" == typeof t ? null !== t : "function" == typeof t;
        };
      }, function (t, e) {
        var n = {}.hasOwnProperty;

        t.exports = function (t, e) {
          return n.call(t, e);
        };
      }, function (t, e, n) {
        var r = n(87),
            i = n(37);

        t.exports = function (t) {
          return r(i(t));
        };
      }, function (t, e, n) {

        function r(t, e) {
          var n = new Error(e);
          return n.code = t, n;
        }

        n(0).extend(r, {
          OTHER_CAUSE: -1,
          INTERNAL_SERVER_ERROR: 1,
          CONNECTION_FAILED: 100,
          OBJECT_NOT_FOUND: 101,
          INVALID_QUERY: 102,
          INVALID_CLASS_NAME: 103,
          MISSING_OBJECT_ID: 104,
          INVALID_KEY_NAME: 105,
          INVALID_POINTER: 106,
          INVALID_JSON: 107,
          COMMAND_UNAVAILABLE: 108,
          NOT_INITIALIZED: 109,
          INCORRECT_TYPE: 111,
          INVALID_CHANNEL_NAME: 112,
          PUSH_MISCONFIGURED: 115,
          OBJECT_TOO_LARGE: 116,
          OPERATION_FORBIDDEN: 119,
          CACHE_MISS: 120,
          INVALID_NESTED_KEY: 121,
          INVALID_FILE_NAME: 122,
          INVALID_ACL: 123,
          TIMEOUT: 124,
          INVALID_EMAIL_ADDRESS: 125,
          MISSING_CONTENT_TYPE: 126,
          MISSING_CONTENT_LENGTH: 127,
          INVALID_CONTENT_LENGTH: 128,
          FILE_TOO_LARGE: 129,
          FILE_SAVE_ERROR: 130,
          FILE_DELETE_ERROR: 153,
          DUPLICATE_VALUE: 137,
          INVALID_ROLE_NAME: 139,
          EXCEEDED_QUOTA: 140,
          SCRIPT_FAILED: 141,
          VALIDATION_ERROR: 142,
          INVALID_IMAGE_DATA: 150,
          UNSAVED_FILE_ERROR: 151,
          INVALID_PUSH_TIME_ERROR: 152,
          USERNAME_MISSING: 200,
          PASSWORD_MISSING: 201,
          USERNAME_TAKEN: 202,
          EMAIL_TAKEN: 203,
          EMAIL_MISSING: 204,
          EMAIL_NOT_FOUND: 205,
          SESSION_MISSING: 206,
          MUST_CREATE_USER_THROUGH_SIGNUP: 207,
          ACCOUNT_ALREADY_LINKED: 208,
          LINKED_ID_MISSING: 250,
          INVALID_LINKED_SESSION: 251,
          UNSUPPORTED_SERVICE: 252,
          X_DOMAIN_REQUEST: 602
        }), t.exports = r;
      }, function (t, e) {
        t.exports = {};
      }, function (t, e, n) {

        (function (e) {
          function r(t) {
            return t && t.__esModule ? t : {
              default: t
            };
          }

          var i = n(9),
              o = r(i),
              s = n(67),
              a = r(s),
              u = n(2),
              c = r(u),
              l = n(0),
              f = n(68),
              h = n(19),
              d = n(69),
              p = n(5),
              _ = p.inherits,
              v = p.parseDate,
              y = n(28),
              m = y.setAdapters,
              g = e.AV || {};
          g._config = {
            serverURLs: {},
            useMasterKey: !1,
            production: null,
            realtime: null,
            requestTimeout: null
          }, g._sharedConfig = {
            userAgent: d(),
            liveQueryRealtime: null
          }, g._getAVPath = function (t) {
            if (!g.applicationId) throw new Error("You need to call AV.initialize before using AV.");
            if (t || (t = ""), !l.isString(t)) throw new Error("Tried to get a localStorage path that wasn't a String.");
            return "/" === t[0] && (t = t.substring(1)), "AV/" + g.applicationId + "/" + t;
          }, g._installationId = null, g._getInstallationId = function () {
            if (g._installationId) return c.default.resolve(g._installationId);

            var t = g._getAVPath("installationId");

            return g.localStorage.getItemAsync(t).then(function (e) {
              return g._installationId = e, g._installationId ? e : (g._installationId = e = f(), g.localStorage.setItemAsync(t, e).then(function () {
                return e;
              }));
            });
          }, g._subscriptionId = null, g._refreshSubscriptionId = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g._getAVPath("subscriptionId"),
                e = g._subscriptionId = f();
            return g.localStorage.setItemAsync(t, e).then(function () {
              return e;
            });
          }, g._getSubscriptionId = function () {
            if (g._subscriptionId) return c.default.resolve(g._subscriptionId);

            var t = g._getAVPath("subscriptionId");

            return g.localStorage.getItemAsync(t).then(function (e) {
              return g._subscriptionId = e, g._subscriptionId || (e = g._refreshSubscriptionId(t)), e;
            });
          }, g._parseDate = v, g._extend = function (t, e) {
            var n = _(this, t, e);

            return n.extend = this.extend, n;
          }, g._encode = function (t, e, n) {
            var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];

            if (t instanceof g.Object) {
              if (n) throw new Error("AV.Objects not allowed here");
              return e && !l.include(e, t) && t._hasData ? t._toFullJSON(e.concat(t), r) : t._toPointer();
            }

            if (t instanceof g.ACL) return t.toJSON();
            if (l.isDate(t)) return r ? {
              __type: "Date",
              iso: t.toJSON()
            } : t.toJSON();
            if (t instanceof g.GeoPoint) return t.toJSON();
            if (l.isArray(t)) return l.map(t, function (t) {
              return g._encode(t, e, n, r);
            });
            if (l.isRegExp(t)) return t.source;
            if (t instanceof g.Relation) return t.toJSON();
            if (t instanceof g.Op) return t.toJSON();

            if (t instanceof g.File) {
              if (!t.url() && !t.id) throw new Error("Tried to save an object containing an unsaved file.");
              return t._toFullJSON(e, r);
            }

            return l.isObject(t) ? l.mapObject(t, function (t, i) {
              return g._encode(t, e, n, r);
            }) : t;
          }, g._decode = function (t, e) {
            if (!l.isObject(t) || l.isDate(t)) return t;
            if (l.isArray(t)) return l.map(t, function (t) {
              return g._decode(t);
            });
            if (t instanceof g.Object) return t;
            if (t instanceof g.File) return t;
            if (t instanceof g.Op) return t;
            if (t instanceof g.GeoPoint) return t;
            if (t instanceof g.ACL) return t;
            if ("ACL" === e) return new g.ACL(t);
            if (t.__op) return g.Op._decode(t);
            var n;

            if ("Pointer" === t.__type) {
              n = t.className;

              var r = g.Object._create(n);

              if ((0, a.default)(t).length > 3) {
                var i = l.clone(t);
                delete i.__type, delete i.className, r._finishFetch(i, !0);
              } else r._finishFetch({
                objectId: t.objectId
              }, !1);

              return r;
            }

            if ("Object" === t.__type) {
              n = t.className;
              var o = l.clone(t);
              delete o.__type, delete o.className;

              var s = g.Object._create(n);

              return s._finishFetch(o, !0), s;
            }

            if ("Date" === t.__type) return g._parseDate(t.iso);
            if ("GeoPoint" === t.__type) return new g.GeoPoint({
              latitude: t.latitude,
              longitude: t.longitude
            });

            if ("Relation" === t.__type) {
              if (!e) throw new Error("key missing decoding a Relation");
              var u = new g.Relation(null, e);
              return u.targetClassName = t.className, u;
            }

            if ("File" === t.__type) {
              var c = new g.File(t.name),
                  f = l.clone(t);
              return delete f.__type, c._finishFetch(f), c;
            }

            return l.mapObject(t, g._decode);
          }, g.parseJSON = g._decode, g.parse = function (t) {
            return g.parseJSON(JSON.parse(t));
          }, g.stringify = function (t) {
            return (0, o.default)(g._encode(t, [], !1, !0));
          }, g._encodeObjectOrArray = function (t) {
            var e = function (t) {
              return t && t._toFullJSON && (t = t._toFullJSON([])), l.mapObject(t, function (t) {
                return g._encode(t, []);
              });
            };

            return l.isArray(t) ? t.map(function (t) {
              return e(t);
            }) : e(t);
          }, g._arrayEach = l.each, g._traverse = function (t, e, n) {
            if (t instanceof g.Object) {
              if (n = n || [], l.indexOf(n, t) >= 0) return;
              return n.push(t), g._traverse(t.attributes, e, n), e(t);
            }

            return t instanceof g.Relation || t instanceof g.File ? e(t) : l.isArray(t) ? (l.each(t, function (r, i) {
              var o = g._traverse(r, e, n);

              o && (t[i] = o);
            }), e(t)) : l.isObject(t) ? (g._each(t, function (r, i) {
              var o = g._traverse(r, e, n);

              o && (t[i] = o);
            }), e(t)) : e(t);
          }, g._objectEach = g._each = function (t, e) {
            l.isObject(t) ? l.each(l.keys(t), function (n) {
              e(t[n], n);
            }) : l.each(t, e);
          }, g.debug = {
            enable: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "leancloud*";
              return h.enable(t);
            },
            disable: h.disable
          }, g.setAdapters = m, t.exports = g;
        }).call(e, n(66));
      }, function (t, e, n) {

        function r(t) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t;
          } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
          })(t);
        }

        function i() {
          return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
        }

        function o(e) {
          if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), this.useColors) {
            var n = "color: " + this.color;
            e.splice(1, 0, n, "color: inherit");
            var r = 0,
                i = 0;
            e[0].replace(/%[a-zA-Z%]/g, function (t) {
              "%%" !== t && (r++, "%c" === t && (i = r));
            }), e.splice(i, 0, n);
          }
        }

        function s() {
          var t;
          return "object" === ("undefined" == typeof console ? "undefined" : r(console)) && console.log && (t = console).log.apply(t, arguments);
        }

        function a(t) {
          try {
            t ? e.storage.setItem("debug", t) : e.storage.removeItem("debug");
          } catch (t) {}
        }

        function u() {
          var t;

          try {
            t = e.storage.getItem("debug");
          } catch (t) {}

          return !t && "undefined" != typeof process && "env" in process && (t = process.env.DEBUG), t;
        }

        e.log = s, e.formatArgs = o, e.save = a, e.load = u, e.useColors = i, e.storage = function () {
          try {
            return localStorage;
          } catch (t) {}
        }(), e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.exports = n(109)(e), t.exports.formatters.j = function (t) {
          try {
            return JSON.stringify(t);
          } catch (t) {
            return "[UnexpectedJSONParseError]: " + t.message;
          }
        };
      }, function (t, e, n) {

        var r = n(84)(!0);
        n(52)(String, "String", function (t) {
          this._t = String(t), this._i = 0;
        }, function () {
          var t,
              e = this._t,
              n = this._i;
          return n >= e.length ? {
            value: void 0,
            done: !0
          } : (t = r(e, n), this._i += t.length, {
            value: t,
            done: !1
          });
        });
      }, function (t, e) {
        t.exports = !0;
      }, function (t, e, n) {
        var r = n(29);

        t.exports = function (t, e, n) {
          if (r(t), void 0 === e) return t;

          switch (n) {
            case 1:
              return function (n) {
                return t.call(e, n);
              };

            case 2:
              return function (n, r) {
                return t.call(e, n, r);
              };

            case 3:
              return function (n, r, i) {
                return t.call(e, n, r, i);
              };
          }

          return function () {
            return t.apply(e, arguments);
          };
        };
      }, function (t, e) {
        t.exports = function (t) {
          try {
            return !!t();
          } catch (t) {
            return !0;
          }
        };
      }, function (t, e) {
        t.exports = function (t, e) {
          return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
          };
        };
      }, function (t, e) {
        var n = {}.toString;

        t.exports = function (t) {
          return n.call(t).slice(8, -1);
        };
      }, function (t, e, n) {
        var r = n(37);

        t.exports = function (t) {
          return Object(r(t));
        };
      }, function (t, e, n) {

        function r(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }

        e.__esModule = !0;
        var i = n(34),
            o = r(i),
            s = n(35),
            a = r(s),
            u = "function" == typeof a.default && "symbol" == typeof o.default ? function (t) {
          return typeof t;
        } : function (t) {
          return t && "function" == typeof a.default && t.constructor === a.default && t !== a.default.prototype ? "symbol" : typeof t;
        };
        e.default = "function" == typeof a.default && "symbol" === u(o.default) ? function (t) {
          return void 0 === t ? "undefined" : u(t);
        } : function (t) {
          return t && "function" == typeof a.default && t.constructor === a.default && t !== a.default.prototype ? "symbol" : void 0 === t ? "undefined" : u(t);
        };
      }, function (t, e, n) {

        var r = n(0),
            i = {},
            o = function (t) {
          var e = i[t];
          if (void 0 === e) throw new Error(t + " adapter is not configured");
          return e;
        },
            s = function (t) {
          r.extend(i, t);
        };

        t.exports = {
          getAdapter: o,
          setAdapters: s
        };
      }, function (t, e) {
        t.exports = function (t) {
          if ("function" != typeof t) throw TypeError(t + " is not a function!");
          return t;
        };
      }, function (t, e, n) {
        var r = n(56),
            i = n(43);

        t.exports = Object.keys || function (t) {
          return r(t, i);
        };
      }, function (t, e) {
        var n = 0,
            r = Math.random();

        t.exports = function (t) {
          return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36));
        };
      }, function (t, e, n) {
        var r = n(7).f,
            i = n(14),
            o = n(4)("toStringTag");

        t.exports = function (t, e, n) {
          t && !i(t = n ? t : t.prototype, o) && r(t, o, {
            configurable: !0,
            value: e
          });
        };
      }, function (t, e, n) {
        n(90);

        for (var r = n(3), i = n(12), o = n(17), s = n(4)("toStringTag"), a = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < a.length; u++) {
          var c = a[u],
              l = r[c],
              f = l && l.prototype;
          f && !f[s] && i(f, s, c), o[c] = o.Array;
        }
      }, function (t, e, n) {
        t.exports = {
          default: n(114),
          __esModule: !0
        };
      }, function (t, e, n) {
        t.exports = {
          default: n(115),
          __esModule: !0
        };
      }, function (t, e) {
        var n = Math.ceil,
            r = Math.floor;

        t.exports = function (t) {
          return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t);
        };
      }, function (t, e) {
        t.exports = function (t) {
          if (void 0 == t) throw TypeError("Can't call method on  " + t);
          return t;
        };
      }, function (t, e, n) {
        var r = n(13),
            i = n(3).document,
            o = r(i) && r(i.createElement);

        t.exports = function (t) {
          return o ? i.createElement(t) : {};
        };
      }, function (t, e, n) {
        var r = n(13);

        t.exports = function (t, e) {
          if (!r(t)) return t;
          var n, i;
          if (e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
          if ("function" == typeof (n = t.valueOf) && !r(i = n.call(t))) return i;
          if (!e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
          throw TypeError("Can't convert object to primitive value");
        };
      }, function (t, e, n) {
        var r = n(36),
            i = Math.min;

        t.exports = function (t) {
          return t > 0 ? i(r(t), 9007199254740991) : 0;
        };
      }, function (t, e, n) {
        var r = n(42)("keys"),
            i = n(31);

        t.exports = function (t) {
          return r[t] || (r[t] = i(t));
        };
      }, function (t, e, n) {
        var r = n(1),
            i = n(3),
            o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
        (t.exports = function (t, e) {
          return o[t] || (o[t] = void 0 !== e ? e : {});
        })("versions", []).push({
          version: r.version,
          mode: n(21) ? "pure" : "global",
          copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        });
      }, function (t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
      }, function (t, e, n) {
        var r = n(25),
            i = n(4)("toStringTag"),
            o = "Arguments" == r(function () {
          return arguments;
        }()),
            s = function (t, e) {
          try {
            return t[e];
          } catch (t) {}
        };

        t.exports = function (t) {
          var e, n, a;
          return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = s(e = Object(t), i)) ? n : o ? r(e) : "Object" == (a = r(e)) && "function" == typeof e.callee ? "Arguments" : a;
        };
      }, function (t, e, n) {
        var r = n(44),
            i = n(4)("iterator"),
            o = n(17);

        t.exports = n(1).getIteratorMethod = function (t) {
          if (void 0 != t) return t[i] || t["@@iterator"] || o[r(t)];
        };
      }, function (t, e, n) {

        function r(t) {
          var e, n;
          this.promise = new t(function (t, r) {
            if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
            e = t, n = r;
          }), this.resolve = i(e), this.reject = i(n);
        }

        var i = n(29);

        t.exports.f = function (t) {
          return new r(t);
        };
      }, function (t, e, n) {
        var r = n(10),
            i = n(1),
            o = n(23);

        t.exports = function (t, e) {
          var n = (i.Object || {})[t] || Object[t],
              s = {};
          s[t] = e(n), r(r.S + r.F * o(function () {
            n(1);
          }), "Object", s);
        };
      }, function (t, e, n) {
        e.f = n(4);
      }, function (t, e, n) {
        var r = n(3),
            i = n(1),
            o = n(21),
            s = n(48),
            a = n(7).f;

        t.exports = function (t) {
          var e = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
          "_" == t.charAt(0) || t in e || a(e, t, {
            value: s.f(t)
          });
        };
      }, function (t, e) {
        e.f = {}.propertyIsEnumerable;
      }, function (t, e) {}, function (t, e, n) {

        var r = n(21),
            i = n(10),
            o = n(54),
            s = n(12),
            a = n(17),
            u = n(85),
            c = n(32),
            l = n(58),
            f = n(4)("iterator"),
            h = !([].keys && "next" in [].keys()),
            d = function () {
          return this;
        };

        t.exports = function (t, e, n, p, _, v, y) {
          u(n, e, p);

          var m,
              g,
              b,
              w = function (t) {
            if (!h && t in E) return E[t];

            switch (t) {
              case "keys":
              case "values":
                return function () {
                  return new n(this, t);
                };
            }

            return function () {
              return new n(this, t);
            };
          },
              O = e + " Iterator",
              A = "values" == _,
              S = !1,
              E = t.prototype,
              C = E[f] || E["@@iterator"] || _ && E[_],
              x = C || w(_),
              T = _ ? A ? w("entries") : x : void 0,
              j = "Array" == e ? E.entries || C : C;

          if (j && (b = l(j.call(new t()))) !== Object.prototype && b.next && (c(b, O, !0), r || "function" == typeof b[f] || s(b, f, d)), A && C && "values" !== C.name && (S = !0, x = function () {
            return C.call(this);
          }), r && !y || !h && !S && E[f] || s(E, f, x), a[e] = x, a[O] = d, _) if (m = {
            values: A ? x : w("values"),
            keys: v ? x : w("keys"),
            entries: T
          }, y) for (g in m) g in E || o(E, g, m[g]);else i(i.P + i.F * (h || S), e, m);
          return m;
        };
      }, function (t, e, n) {
        t.exports = !n(11) && !n(23)(function () {
          return 7 != Object.defineProperty(n(38)("div"), "a", {
            get: function () {
              return 7;
            }
          }).a;
        });
      }, function (t, e, n) {
        t.exports = n(12);
      }, function (t, e, n) {
        var r = n(8),
            i = n(86),
            o = n(43),
            s = n(41)("IE_PROTO"),
            a = function () {},
            u = function () {
          var t,
              e = n(38)("iframe"),
              r = o.length;

          for (e.style.display = "none", n(57).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; r--;) delete u.prototype[o[r]];

          return u();
        };

        t.exports = Object.create || function (t, e) {
          var n;
          return null !== t ? (a.prototype = r(t), n = new a(), a.prototype = null, n[s] = t) : n = u(), void 0 === e ? n : i(n, e);
        };
      }, function (t, e, n) {
        var r = n(14),
            i = n(15),
            o = n(88)(!1),
            s = n(41)("IE_PROTO");

        t.exports = function (t, e) {
          var n,
              a = i(t),
              u = 0,
              c = [];

          for (n in a) n != s && r(a, n) && c.push(n);

          for (; e.length > u;) r(a, n = e[u++]) && (~o(c, n) || c.push(n));

          return c;
        };
      }, function (t, e, n) {
        var r = n(3).document;
        t.exports = r && r.documentElement;
      }, function (t, e, n) {
        var r = n(14),
            i = n(26),
            o = n(41)("IE_PROTO"),
            s = Object.prototype;

        t.exports = Object.getPrototypeOf || function (t) {
          return t = i(t), r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null;
        };
      }, function (t, e, n) {
        var r = n(8);

        t.exports = function (t, e, n, i) {
          try {
            return i ? e(r(n)[0], n[1]) : e(n);
          } catch (e) {
            var o = t.return;
            throw void 0 !== o && r(o.call(t)), e;
          }
        };
      }, function (t, e, n) {
        var r = n(17),
            i = n(4)("iterator"),
            o = Array.prototype;

        t.exports = function (t) {
          return void 0 !== t && (r.Array === t || o[i] === t);
        };
      }, function (t, e, n) {
        var r = n(8),
            i = n(29),
            o = n(4)("species");

        t.exports = function (t, e) {
          var n,
              s = r(t).constructor;
          return void 0 === s || void 0 == (n = r(s)[o]) ? e : i(n);
        };
      }, function (t, e, n) {
        var r,
            i,
            o,
            s = n(22),
            a = n(96),
            u = n(57),
            c = n(38),
            l = n(3),
            f = l.process,
            h = l.setImmediate,
            d = l.clearImmediate,
            p = l.MessageChannel,
            _ = l.Dispatch,
            v = 0,
            y = {},
            m = function () {
          var t = +this;

          if (y.hasOwnProperty(t)) {
            var e = y[t];
            delete y[t], e();
          }
        },
            g = function (t) {
          m.call(t.data);
        };

        h && d || (h = function (t) {
          for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);

          return y[++v] = function () {
            a("function" == typeof t ? t : Function(t), e);
          }, r(v), v;
        }, d = function (t) {
          delete y[t];
        }, "process" == n(25)(f) ? r = function (t) {
          f.nextTick(s(m, t, 1));
        } : _ && _.now ? r = function (t) {
          _.now(s(m, t, 1));
        } : p ? (i = new p(), o = i.port2, i.port1.onmessage = g, r = s(o.postMessage, o, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function (t) {
          l.postMessage(t + "", "*");
        }, l.addEventListener("message", g, !1)) : r = "onreadystatechange" in c("script") ? function (t) {
          u.appendChild(c("script")).onreadystatechange = function () {
            u.removeChild(this), m.call(t);
          };
        } : function (t) {
          setTimeout(s(m, t, 1), 0);
        }), t.exports = {
          set: h,
          clear: d
        };
      }, function (t, e) {
        t.exports = function (t) {
          try {
            return {
              e: !1,
              v: t()
            };
          } catch (t) {
            return {
              e: !0,
              v: t
            };
          }
        };
      }, function (t, e, n) {
        var r = n(8),
            i = n(13),
            o = n(46);

        t.exports = function (t, e) {
          if (r(t), i(e) && e.constructor === t) return e;
          var n = o.f(t);
          return (0, n.resolve)(e), n.promise;
        };
      }, function (t, e, n) {
        var r = n(4)("iterator"),
            i = !1;

        try {
          var o = [7][r]();
          o.return = function () {
            i = !0;
          }, Array.from(o, function () {
            throw 2;
          });
        } catch (t) {}

        t.exports = function (t, e) {
          if (!e && !i) return !1;
          var n = !1;

          try {
            var o = [7],
                s = o[r]();
            s.next = function () {
              return {
                done: n = !0
              };
            }, o[r] = function () {
              return s;
            }, t(o);
          } catch (t) {}

          return n;
        };
      }, function (t, e) {
        var n;

        n = function () {
          return this;
        }();

        try {
          n = n || Function("return this")() || (0, eval)("this");
        } catch (t) {
          "object" == typeof window && (n = window);
        }

        t.exports = n;
      }, function (t, e, n) {
        t.exports = {
          default: n(105),
          __esModule: !0
        };
      }, function (t, e, n) {
        function r(t, e, n) {
          var r = e && n || 0;
          "string" == typeof t && (e = "binary" === t ? new Array(16) : null, t = null), t = t || {};
          var s = t.random || (t.rng || i)();
          if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, e) for (var a = 0; a < 16; ++a) e[r + a] = s[a];
          return e || o(s);
        }

        var i = n(107),
            o = n(108);
        t.exports = r;
      }, function (t, e, n) {

        var r = n(70),
            i = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
              e = "LeanCloud-JS-SDK/" + r;
          return t.length && (e += " (" + t.join("; ") + ")"), e;
        };

        t.exports = i;
      }, function (t, e, n) {

        t.exports = "4.5.3";
      }, function (t, e) {
        e.f = Object.getOwnPropertySymbols;
      }, function (t, e, n) {
        var r = n(56),
            i = n(43).concat("length", "prototype");

        e.f = Object.getOwnPropertyNames || function (t) {
          return r(t, i);
        };
      }, function (t, e, n) {
        var r = n(50),
            i = n(24),
            o = n(15),
            s = n(39),
            a = n(14),
            u = n(53),
            c = Object.getOwnPropertyDescriptor;
        e.f = n(11) ? c : function (t, e) {
          if (t = o(t), e = s(e, !0), u) try {
            return c(t, e);
          } catch (t) {}
          if (a(t, e)) return i(!r.f.call(t, e), t[e]);
        };
      }, function (t, e, n) {

        var r = n(2),
            i = function (t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }(r),
            o = n(28),
            s = o.getAdapter,
            a = ["getItem", "setItem", "removeItem", "clear"],
            u = {
          get async() {
            return s("storage").async;
          }

        };

        a.forEach(function (t) {
          u[t + "Async"] = function () {
            var e = s("storage");
            return i.default.resolve(e[t].apply(e, arguments));
          }, u[t] = function () {
            var e = s("storage");
            if (!e.async) return e[t].apply(e, arguments);
            var n = new Error("Synchronous API [" + t + "] is not available in this runtime.");
            throw n.code = "SYNC_API_NOT_AVAILABLE", n;
          };
        }), t.exports = u;
      }, function (t, e, n) {

        var r = n(9),
            i = function (t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }(r),
            o = n(74),
            s = n(18),
            a = e.removeAsync = o.removeItemAsync.bind(o),
            u = function (t, e) {
          try {
            t = JSON.parse(t);
          } catch (t) {
            return null;
          }

          if (t) {
            return t.expiredAt && t.expiredAt < Date.now() ? a(e).then(function () {
              return null;
            }) : t.value;
          }

          return null;
        };

        e.getAsync = function (t) {
          return t = "AV/" + s.applicationId + "/" + t, o.getItemAsync(t).then(function (e) {
            return u(e, t);
          });
        }, e.setAsync = function (t, e, n) {
          var r = {
            value: e
          };
          return "number" == typeof n && (r.expiredAt = Date.now() + n), o.setItemAsync("AV/" + s.applicationId + "/" + t, (0, i.default)(r));
        };
      }, function (t, e, n) {
        t.exports = {
          default: n(125),
          __esModule: !0
        };
      }, function (t, e) {
        var n = {
          utf8: {
            stringToBytes: function (t) {
              return n.bin.stringToBytes(unescape(encodeURIComponent(t)));
            },
            bytesToString: function (t) {
              return decodeURIComponent(escape(n.bin.bytesToString(t)));
            }
          },
          bin: {
            stringToBytes: function (t) {
              for (var e = [], n = 0; n < t.length; n++) e.push(255 & t.charCodeAt(n));

              return e;
            },
            bytesToString: function (t) {
              for (var e = [], n = 0; n < t.length; n++) e.push(String.fromCharCode(t[n]));

              return e.join("");
            }
          }
        };
        t.exports = n;
      }, function (t, e, n) {
        t.exports = {
          default: n(146),
          __esModule: !0
        };
      }, function (t, e, n) {

        function r(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }

        function i(t) {
          return (i = "function" == typeof f.default && "symbol" === (0, c.default)(a.default) ? function (t) {
            return void 0 === t ? "undefined" : (0, c.default)(t);
          } : function (t) {
            return t && "function" == typeof f.default && t.constructor === f.default && t !== f.default.prototype ? "symbol" : void 0 === t ? "undefined" : (0, c.default)(t);
          })(t);
        }

        function o(t) {
          return null !== t && "object" === i(t);
        }

        var s = n(34),
            a = r(s),
            u = n(27),
            c = r(u),
            l = n(35),
            f = r(l);
        t.exports = o;
      }, function (t, e, n) {

        var r = n(81),
            i = n(165);
        t.exports = i(r);
      }, function (t, e, n) {

        t.exports = n(82);
      }, function (t, e, n) {

        var r = n(2),
            i = function (t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }(r),
            o = n(0),
            s = n(18);

        s._ = o, s.version = n(70), s.Promise = i.default, s.localStorage = n(74), s.Cache = n(75), s.Error = n(16), n(124), n(128)(s), n(129)(s), n(130)(s), n(131)(s), n(132)(s), n(133)(s), n(141)(s), n(151)(s), n(152)(s), n(154)(s), n(155)(s), n(157)(s), n(158)(s), n(159)(s), n(160)(s), n(161)(s), n(162)(s), s.Conversation = n(163), n(164), t.exports = s;
      }, function (t, e, n) {
        n(51), n(20), n(33), n(93), n(101), n(102), t.exports = n(1).Promise;
      }, function (t, e, n) {
        var r = n(36),
            i = n(37);

        t.exports = function (t) {
          return function (e, n) {
            var o,
                s,
                a = String(i(e)),
                u = r(n),
                c = a.length;
            return u < 0 || u >= c ? t ? "" : void 0 : (o = a.charCodeAt(u), o < 55296 || o > 56319 || u + 1 === c || (s = a.charCodeAt(u + 1)) < 56320 || s > 57343 ? t ? a.charAt(u) : o : t ? a.slice(u, u + 2) : s - 56320 + (o - 55296 << 10) + 65536);
          };
        };
      }, function (t, e, n) {

        var r = n(55),
            i = n(24),
            o = n(32),
            s = {};
        n(12)(s, n(4)("iterator"), function () {
          return this;
        }), t.exports = function (t, e, n) {
          t.prototype = r(s, {
            next: i(1, n)
          }), o(t, e + " Iterator");
        };
      }, function (t, e, n) {
        var r = n(7),
            i = n(8),
            o = n(30);
        t.exports = n(11) ? Object.defineProperties : function (t, e) {
          i(t);

          for (var n, s = o(e), a = s.length, u = 0; a > u;) r.f(t, n = s[u++], e[n]);

          return t;
        };
      }, function (t, e, n) {
        var r = n(25);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
          return "String" == r(t) ? t.split("") : Object(t);
        };
      }, function (t, e, n) {
        var r = n(15),
            i = n(40),
            o = n(89);

        t.exports = function (t) {
          return function (e, n, s) {
            var a,
                u = r(e),
                c = i(u.length),
                l = o(s, c);

            if (t && n != n) {
              for (; c > l;) if ((a = u[l++]) != a) return !0;
            } else for (; c > l; l++) if ((t || l in u) && u[l] === n) return t || l || 0;

            return !t && -1;
          };
        };
      }, function (t, e, n) {
        var r = n(36),
            i = Math.max,
            o = Math.min;

        t.exports = function (t, e) {
          return t = r(t), t < 0 ? i(t + e, 0) : o(t, e);
        };
      }, function (t, e, n) {

        var r = n(91),
            i = n(92),
            o = n(17),
            s = n(15);
        t.exports = n(52)(Array, "Array", function (t, e) {
          this._t = s(t), this._i = 0, this._k = e;
        }, function () {
          var t = this._t,
              e = this._k,
              n = this._i++;
          return !t || n >= t.length ? (this._t = void 0, i(1)) : "keys" == e ? i(0, n) : "values" == e ? i(0, t[n]) : i(0, [n, t[n]]);
        }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries");
      }, function (t, e) {
        t.exports = function () {};
      }, function (t, e) {
        t.exports = function (t, e) {
          return {
            value: e,
            done: !!t
          };
        };
      }, function (t, e, n) {

        var r,
            i,
            o,
            s,
            a = n(21),
            u = n(3),
            c = n(22),
            l = n(44),
            f = n(10),
            h = n(13),
            d = n(29),
            p = n(94),
            _ = n(95),
            v = n(61),
            y = n(62).set,
            m = n(97)(),
            g = n(46),
            b = n(63),
            w = n(98),
            O = n(64),
            A = u.TypeError,
            S = u.process,
            E = S && S.versions,
            C = E && E.v8 || "",
            x = u.Promise,
            T = "process" == l(S),
            j = function () {},
            N = i = g.f,
            k = !!function () {
          try {
            var t = x.resolve(1),
                e = (t.constructor = {})[n(4)("species")] = function (t) {
              t(j, j);
            };

            return (T || "function" == typeof PromiseRejectionEvent) && t.then(j) instanceof e && 0 !== C.indexOf("6.6") && -1 === w.indexOf("Chrome/66");
          } catch (t) {}
        }(),
            U = function (t) {
          var e;
          return !(!h(t) || "function" != typeof (e = t.then)) && e;
        },
            P = function (t, e) {
          if (!t._n) {
            t._n = !0;
            var n = t._c;
            m(function () {
              for (var r = t._v, i = 1 == t._s, o = 0; n.length > o;) !function (e) {
                var n,
                    o,
                    s,
                    a = i ? e.ok : e.fail,
                    u = e.resolve,
                    c = e.reject,
                    l = e.domain;

                try {
                  a ? (i || (2 == t._h && D(t), t._h = 1), !0 === a ? n = r : (l && l.enter(), n = a(r), l && (l.exit(), s = !0)), n === e.promise ? c(A("Promise-chain cycle")) : (o = U(n)) ? o.call(n, u, c) : u(n)) : c(r);
                } catch (t) {
                  l && !s && l.exit(), c(t);
                }
              }(n[o++]);

              t._c = [], t._n = !1, e && !t._h && I(t);
            });
          }
        },
            I = function (t) {
          y.call(u, function () {
            var e,
                n,
                r,
                i = t._v,
                o = R(t);
            if (o && (e = b(function () {
              T ? S.emit("unhandledRejection", i, t) : (n = u.onunhandledrejection) ? n({
                promise: t,
                reason: i
              }) : (r = u.console) && r.error && r.error("Unhandled promise rejection", i);
            }), t._h = T || R(t) ? 2 : 1), t._a = void 0, o && e.e) throw e.v;
          });
        },
            R = function (t) {
          return 1 !== t._h && 0 === (t._a || t._c).length;
        },
            D = function (t) {
          y.call(u, function () {
            var e;
            T ? S.emit("rejectionHandled", t) : (e = u.onrejectionhandled) && e({
              promise: t,
              reason: t._v
            });
          });
        },
            L = function (t) {
          var e = this;
          e._d || (e._d = !0, e = e._w || e, e._v = t, e._s = 2, e._a || (e._a = e._c.slice()), P(e, !0));
        },
            F = function (t) {
          var e,
              n = this;

          if (!n._d) {
            n._d = !0, n = n._w || n;

            try {
              if (n === t) throw A("Promise can't be resolved itself");
              (e = U(t)) ? m(function () {
                var r = {
                  _w: n,
                  _d: !1
                };

                try {
                  e.call(t, c(F, r, 1), c(L, r, 1));
                } catch (t) {
                  L.call(r, t);
                }
              }) : (n._v = t, n._s = 1, P(n, !1));
            } catch (t) {
              L.call({
                _w: n,
                _d: !1
              }, t);
            }
          }
        };

        k || (x = function (t) {
          p(this, x, "Promise", "_h"), d(t), r.call(this);

          try {
            t(c(F, this, 1), c(L, this, 1));
          } catch (t) {
            L.call(this, t);
          }
        }, r = function (t) {
          this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1;
        }, r.prototype = n(99)(x.prototype, {
          then: function (t, e) {
            var n = N(v(this, x));
            return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = T ? S.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && P(this, !1), n.promise;
          },
          catch: function (t) {
            return this.then(void 0, t);
          }
        }), o = function () {
          var t = new r();
          this.promise = t, this.resolve = c(F, t, 1), this.reject = c(L, t, 1);
        }, g.f = N = function (t) {
          return t === x || t === s ? new o(t) : i(t);
        }), f(f.G + f.W + f.F * !k, {
          Promise: x
        }), n(32)(x, "Promise"), n(100)("Promise"), s = n(1).Promise, f(f.S + f.F * !k, "Promise", {
          reject: function (t) {
            var e = N(this);
            return (0, e.reject)(t), e.promise;
          }
        }), f(f.S + f.F * (a || !k), "Promise", {
          resolve: function (t) {
            return O(a && this === s ? x : this, t);
          }
        }), f(f.S + f.F * !(k && n(65)(function (t) {
          x.all(t).catch(j);
        })), "Promise", {
          all: function (t) {
            var e = this,
                n = N(e),
                r = n.resolve,
                i = n.reject,
                o = b(function () {
              var n = [],
                  o = 0,
                  s = 1;
              _(t, !1, function (t) {
                var a = o++,
                    u = !1;
                n.push(void 0), s++, e.resolve(t).then(function (t) {
                  u || (u = !0, n[a] = t, --s || r(n));
                }, i);
              }), --s || r(n);
            });
            return o.e && i(o.v), n.promise;
          },
          race: function (t) {
            var e = this,
                n = N(e),
                r = n.reject,
                i = b(function () {
              _(t, !1, function (t) {
                e.resolve(t).then(n.resolve, r);
              });
            });
            return i.e && r(i.v), n.promise;
          }
        });
      }, function (t, e) {
        t.exports = function (t, e, n, r) {
          if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
          return t;
        };
      }, function (t, e, n) {
        var r = n(22),
            i = n(59),
            o = n(60),
            s = n(8),
            a = n(40),
            u = n(45),
            c = {},
            l = {},
            e = t.exports = function (t, e, n, f, h) {
          var d,
              p,
              _,
              v,
              y = h ? function () {
            return t;
          } : u(t),
              m = r(n, f, e ? 2 : 1),
              g = 0;

          if ("function" != typeof y) throw TypeError(t + " is not iterable!");

          if (o(y)) {
            for (d = a(t.length); d > g; g++) if ((v = e ? m(s(p = t[g])[0], p[1]) : m(t[g])) === c || v === l) return v;
          } else for (_ = y.call(t); !(p = _.next()).done;) if ((v = i(_, m, p.value, e)) === c || v === l) return v;
        };

        e.BREAK = c, e.RETURN = l;
      }, function (t, e) {
        t.exports = function (t, e, n) {
          var r = void 0 === n;

          switch (e.length) {
            case 0:
              return r ? t() : t.call(n);

            case 1:
              return r ? t(e[0]) : t.call(n, e[0]);

            case 2:
              return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);

            case 3:
              return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);

            case 4:
              return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3]);
          }

          return t.apply(n, e);
        };
      }, function (t, e, n) {
        var r = n(3),
            i = n(62).set,
            o = r.MutationObserver || r.WebKitMutationObserver,
            s = r.process,
            a = r.Promise,
            u = "process" == n(25)(s);

        t.exports = function () {
          var t,
              e,
              n,
              c = function () {
            var r, i;

            for (u && (r = s.domain) && r.exit(); t;) {
              i = t.fn, t = t.next;

              try {
                i();
              } catch (r) {
                throw t ? n() : e = void 0, r;
              }
            }

            e = void 0, r && r.enter();
          };

          if (u) n = function () {
            s.nextTick(c);
          };else if (!o || r.navigator && r.navigator.standalone) {
            if (a && a.resolve) {
              var l = a.resolve(void 0);

              n = function () {
                l.then(c);
              };
            } else n = function () {
              i.call(r, c);
            };
          } else {
            var f = !0,
                h = document.createTextNode("");
            new o(c).observe(h, {
              characterData: !0
            }), n = function () {
              h.data = f = !f;
            };
          }
          return function (r) {
            var i = {
              fn: r,
              next: void 0
            };
            e && (e.next = i), t || (t = i, n()), e = i;
          };
        };
      }, function (t, e, n) {
        var r = n(3),
            i = r.navigator;
        t.exports = i && i.userAgent || "";
      }, function (t, e, n) {
        var r = n(12);

        t.exports = function (t, e, n) {
          for (var i in e) n && t[i] ? t[i] = e[i] : r(t, i, e[i]);

          return t;
        };
      }, function (t, e, n) {

        var r = n(3),
            i = n(1),
            o = n(7),
            s = n(11),
            a = n(4)("species");

        t.exports = function (t) {
          var e = "function" == typeof i[t] ? i[t] : r[t];
          s && e && !e[a] && o.f(e, a, {
            configurable: !0,
            get: function () {
              return this;
            }
          });
        };
      }, function (t, e, n) {

        var r = n(10),
            i = n(1),
            o = n(3),
            s = n(61),
            a = n(64);
        r(r.P + r.R, "Promise", {
          finally: function (t) {
            var e = s(this, i.Promise || o.Promise),
                n = "function" == typeof t;
            return this.then(n ? function (n) {
              return a(e, t()).then(function () {
                return n;
              });
            } : t, n ? function (n) {
              return a(e, t()).then(function () {
                throw n;
              });
            } : t);
          }
        });
      }, function (t, e, n) {

        var r = n(10),
            i = n(46),
            o = n(63);
        r(r.S, "Promise", {
          try: function (t) {
            var e = i.f(this),
                n = o(t);
            return (n.e ? e.reject : e.resolve)(n.v), e.promise;
          }
        });
      }, function (t, e) {
        t.exports = function (t) {
          return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
              return t.l;
            }
          }), Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function () {
              return t.i;
            }
          }), t.webpackPolyfill = 1), t;
        };
      }, function (t, e, n) {
        var r = n(1),
            i = r.JSON || (r.JSON = {
          stringify: JSON.stringify
        });

        t.exports = function (t) {
          return i.stringify.apply(i, arguments);
        };
      }, function (t, e, n) {
        n(106), t.exports = n(1).Object.keys;
      }, function (t, e, n) {
        var r = n(26),
            i = n(30);
        n(47)("keys", function () {
          return function (t) {
            return i(r(t));
          };
        });
      }, function (t, e) {
        var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);

        if (n) {
          var r = new Uint8Array(16);

          t.exports = function () {
            return n(r), r;
          };
        } else {
          var i = new Array(16);

          t.exports = function () {
            for (var t, e = 0; e < 16; e++) 0 == (3 & e) && (t = 4294967296 * Math.random()), i[e] = t >>> ((3 & e) << 3) & 255;

            return i;
          };
        }
      }, function (t, e) {
        function n(t, e) {
          var n = e || 0,
              i = r;
          return [i[t[n++]], i[t[n++]], i[t[n++]], i[t[n++]], "-", i[t[n++]], i[t[n++]], "-", i[t[n++]], i[t[n++]], "-", i[t[n++]], i[t[n++]], "-", i[t[n++]], i[t[n++]], i[t[n++]], i[t[n++]], i[t[n++]], i[t[n++]]].join("");
        }

        for (var r = [], i = 0; i < 256; ++i) r[i] = (i + 256).toString(16).substr(1);

        t.exports = n;
      }, function (t, e, n) {

        function r(t) {
          function e(t) {
            for (var e = 0, n = 0; n < t.length; n++) e = (e << 5) - e + t.charCodeAt(n), e |= 0;

            return r.colors[Math.abs(e) % r.colors.length];
          }

          function r(t) {
            function n() {
              if (n.enabled) {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];

                var o = n,
                    a = Number(new Date()),
                    u = a - (s || a);
                o.diff = u, o.prev = s, o.curr = a, s = a, e[0] = r.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
                var c = 0;
                e[0] = e[0].replace(/%([a-zA-Z%])/g, function (t, n) {
                  if ("%%" === t) return t;
                  c++;
                  var i = r.formatters[n];

                  if ("function" == typeof i) {
                    var s = e[c];
                    t = i.call(o, s), e.splice(c, 1), c--;
                  }

                  return t;
                }), r.formatArgs.call(o, e);
                (o.log || r.log).apply(o, e);
              }
            }

            var s;
            return n.namespace = t, n.enabled = r.enabled(t), n.useColors = r.useColors(), n.color = e(t), n.destroy = i, n.extend = o, "function" == typeof r.init && r.init(n), r.instances.push(n), n;
          }

          function i() {
            var t = r.instances.indexOf(this);
            return -1 !== t && (r.instances.splice(t, 1), !0);
          }

          function o(t, e) {
            return r(this.namespace + (void 0 === e ? ":" : e) + t);
          }

          function s(t) {
            r.save(t), r.names = [], r.skips = [];
            var e,
                n = ("string" == typeof t ? t : "").split(/[\s,]+/),
                i = n.length;

            for (e = 0; e < i; e++) n[e] && (t = n[e].replace(/\*/g, ".*?"), "-" === t[0] ? r.skips.push(new RegExp("^" + t.substr(1) + "$")) : r.names.push(new RegExp("^" + t + "$")));

            for (e = 0; e < r.instances.length; e++) {
              var o = r.instances[e];
              o.enabled = r.enabled(o.namespace);
            }
          }

          function a() {
            r.enable("");
          }

          function u(t) {
            if ("*" === t[t.length - 1]) return !0;
            var e, n;

            for (e = 0, n = r.skips.length; e < n; e++) if (r.skips[e].test(t)) return !1;

            for (e = 0, n = r.names.length; e < n; e++) if (r.names[e].test(t)) return !0;

            return !1;
          }

          function c(t) {
            return t instanceof Error ? t.stack || t.message : t;
          }

          return r.debug = r, r.default = r, r.coerce = c, r.disable = a, r.enable = s, r.enabled = u, r.humanize = n(110), Object.keys(t).forEach(function (e) {
            r[e] = t[e];
          }), r.instances = [], r.names = [], r.skips = [], r.formatters = {}, r.selectColor = e, r.enable(r.load()), r;
        }

        t.exports = r;
      }, function (t, e) {
        function n(t) {
          if (t = String(t), !(t.length > 100)) {
            var e = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);

            if (e) {
              var n = parseFloat(e[1]);

              switch ((e[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                  return n * f;

                case "weeks":
                case "week":
                case "w":
                  return n * l;

                case "days":
                case "day":
                case "d":
                  return n * c;

                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                  return n * u;

                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                  return n * a;

                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                  return n * s;

                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                  return n;

                default:
                  return;
              }
            }
          }
        }

        function r(t) {
          var e = Math.abs(t);
          return e >= c ? Math.round(t / c) + "d" : e >= u ? Math.round(t / u) + "h" : e >= a ? Math.round(t / a) + "m" : e >= s ? Math.round(t / s) + "s" : t + "ms";
        }

        function i(t) {
          var e = Math.abs(t);
          return e >= c ? o(t, e, c, "day") : e >= u ? o(t, e, u, "hour") : e >= a ? o(t, e, a, "minute") : e >= s ? o(t, e, s, "second") : t + " ms";
        }

        function o(t, e, n, r) {
          var i = e >= 1.5 * n;
          return Math.round(t / n) + " " + r + (i ? "s" : "");
        }

        var s = 1e3,
            a = 60 * s,
            u = 60 * a,
            c = 24 * u,
            l = 7 * c,
            f = 365.25 * c;

        t.exports = function (t, e) {
          e = e || {};
          var o = typeof t;
          if ("string" === o && t.length > 0) return n(t);
          if ("number" === o && isFinite(t)) return e.long ? i(t) : r(t);
          throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t));
        };
      }, function (t, e, n) {
        t.exports = {
          default: n(112),
          __esModule: !0
        };
      }, function (t, e, n) {
        n(113), t.exports = n(1).Object.getPrototypeOf;
      }, function (t, e, n) {
        var r = n(26),
            i = n(58);
        n(47)("getPrototypeOf", function () {
          return function (t) {
            return i(r(t));
          };
        });
      }, function (t, e, n) {
        n(20), n(33), t.exports = n(48).f("iterator");
      }, function (t, e, n) {
        n(116), n(51), n(121), n(122), t.exports = n(1).Symbol;
      }, function (t, e, n) {

        var r = n(3),
            i = n(14),
            o = n(11),
            s = n(10),
            a = n(54),
            u = n(117).KEY,
            c = n(23),
            l = n(42),
            f = n(32),
            h = n(31),
            d = n(4),
            p = n(48),
            _ = n(49),
            v = n(118),
            y = n(119),
            m = n(8),
            g = n(13),
            b = n(26),
            w = n(15),
            O = n(39),
            A = n(24),
            S = n(55),
            E = n(120),
            C = n(73),
            x = n(71),
            T = n(7),
            j = n(30),
            N = C.f,
            k = T.f,
            U = E.f,
            P = r.Symbol,
            I = r.JSON,
            R = I && I.stringify,
            D = d("_hidden"),
            L = d("toPrimitive"),
            F = {}.propertyIsEnumerable,
            q = l("symbol-registry"),
            M = l("symbols"),
            W = l("op-symbols"),
            B = Object.prototype,
            Q = "function" == typeof P && !!x.f,
            V = r.QObject,
            K = !V || !V.prototype || !V.prototype.findChild,
            J = o && c(function () {
          return 7 != S(k({}, "a", {
            get: function () {
              return k(this, "a", {
                value: 7
              }).a;
            }
          })).a;
        }) ? function (t, e, n) {
          var r = N(B, e);
          r && delete B[e], k(t, e, n), r && t !== B && k(B, e, r);
        } : k,
            G = function (t) {
          var e = M[t] = S(P.prototype);
          return e._k = t, e;
        },
            z = Q && "symbol" == typeof P.iterator ? function (t) {
          return "symbol" == typeof t;
        } : function (t) {
          return t instanceof P;
        },
            H = function (t, e, n) {
          return t === B && H(W, e, n), m(t), e = O(e, !0), m(n), i(M, e) ? (n.enumerable ? (i(t, D) && t[D][e] && (t[D][e] = !1), n = S(n, {
            enumerable: A(0, !1)
          })) : (i(t, D) || k(t, D, A(1, {})), t[D][e] = !0), J(t, e, n)) : k(t, e, n);
        },
            $ = function (t, e) {
          m(t);

          for (var n, r = v(e = w(e)), i = 0, o = r.length; o > i;) H(t, n = r[i++], e[n]);

          return t;
        },
            X = function (t, e) {
          return void 0 === e ? S(t) : $(S(t), e);
        },
            Y = function (t) {
          var e = F.call(this, t = O(t, !0));
          return !(this === B && i(M, t) && !i(W, t)) && (!(e || !i(this, t) || !i(M, t) || i(this, D) && this[D][t]) || e);
        },
            Z = function (t, e) {
          if (t = w(t), e = O(e, !0), t !== B || !i(M, e) || i(W, e)) {
            var n = N(t, e);
            return !n || !i(M, e) || i(t, D) && t[D][e] || (n.enumerable = !0), n;
          }
        },
            tt = function (t) {
          for (var e, n = U(w(t)), r = [], o = 0; n.length > o;) i(M, e = n[o++]) || e == D || e == u || r.push(e);

          return r;
        },
            et = function (t) {
          for (var e, n = t === B, r = U(n ? W : w(t)), o = [], s = 0; r.length > s;) !i(M, e = r[s++]) || n && !i(B, e) || o.push(M[e]);

          return o;
        };

        Q || (P = function () {
          if (this instanceof P) throw TypeError("Symbol is not a constructor!");

          var t = h(arguments.length > 0 ? arguments[0] : void 0),
              e = function (n) {
            this === B && e.call(W, n), i(this, D) && i(this[D], t) && (this[D][t] = !1), J(this, t, A(1, n));
          };

          return o && K && J(B, t, {
            configurable: !0,
            set: e
          }), G(t);
        }, a(P.prototype, "toString", function () {
          return this._k;
        }), C.f = Z, T.f = H, n(72).f = E.f = tt, n(50).f = Y, x.f = et, o && !n(21) && a(B, "propertyIsEnumerable", Y, !0), p.f = function (t) {
          return G(d(t));
        }), s(s.G + s.W + s.F * !Q, {
          Symbol: P
        });

        for (var nt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), rt = 0; nt.length > rt;) d(nt[rt++]);

        for (var it = j(d.store), ot = 0; it.length > ot;) _(it[ot++]);

        s(s.S + s.F * !Q, "Symbol", {
          for: function (t) {
            return i(q, t += "") ? q[t] : q[t] = P(t);
          },
          keyFor: function (t) {
            if (!z(t)) throw TypeError(t + " is not a symbol!");

            for (var e in q) if (q[e] === t) return e;
          },
          useSetter: function () {
            K = !0;
          },
          useSimple: function () {
            K = !1;
          }
        }), s(s.S + s.F * !Q, "Object", {
          create: X,
          defineProperty: H,
          defineProperties: $,
          getOwnPropertyDescriptor: Z,
          getOwnPropertyNames: tt,
          getOwnPropertySymbols: et
        });
        var st = c(function () {
          x.f(1);
        });
        s(s.S + s.F * st, "Object", {
          getOwnPropertySymbols: function (t) {
            return x.f(b(t));
          }
        }), I && s(s.S + s.F * (!Q || c(function () {
          var t = P();
          return "[null]" != R([t]) || "{}" != R({
            a: t
          }) || "{}" != R(Object(t));
        })), "JSON", {
          stringify: function (t) {
            for (var e, n, r = [t], i = 1; arguments.length > i;) r.push(arguments[i++]);

            if (n = e = r[1], (g(e) || void 0 !== t) && !z(t)) return y(e) || (e = function (t, e) {
              if ("function" == typeof n && (e = n.call(this, t, e)), !z(e)) return e;
            }), r[1] = e, R.apply(I, r);
          }
        }), P.prototype[L] || n(12)(P.prototype, L, P.prototype.valueOf), f(P, "Symbol"), f(Math, "Math", !0), f(r.JSON, "JSON", !0);
      }, function (t, e, n) {
        var r = n(31)("meta"),
            i = n(13),
            o = n(14),
            s = n(7).f,
            a = 0,
            u = Object.isExtensible || function () {
          return !0;
        },
            c = !n(23)(function () {
          return u(Object.preventExtensions({}));
        }),
            l = function (t) {
          s(t, r, {
            value: {
              i: "O" + ++a,
              w: {}
            }
          });
        },
            f = function (t, e) {
          if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;

          if (!o(t, r)) {
            if (!u(t)) return "F";
            if (!e) return "E";
            l(t);
          }

          return t[r].i;
        },
            h = function (t, e) {
          if (!o(t, r)) {
            if (!u(t)) return !0;
            if (!e) return !1;
            l(t);
          }

          return t[r].w;
        },
            d = function (t) {
          return c && p.NEED && u(t) && !o(t, r) && l(t), t;
        },
            p = t.exports = {
          KEY: r,
          NEED: !1,
          fastKey: f,
          getWeak: h,
          onFreeze: d
        };
      }, function (t, e, n) {
        var r = n(30),
            i = n(71),
            o = n(50);

        t.exports = function (t) {
          var e = r(t),
              n = i.f;
          if (n) for (var s, a = n(t), u = o.f, c = 0; a.length > c;) u.call(t, s = a[c++]) && e.push(s);
          return e;
        };
      }, function (t, e, n) {
        var r = n(25);

        t.exports = Array.isArray || function (t) {
          return "Array" == r(t);
        };
      }, function (t, e, n) {
        var r = n(15),
            i = n(72).f,
            o = {}.toString,
            s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
            a = function (t) {
          try {
            return i(t);
          } catch (t) {
            return s.slice();
          }
        };

        t.exports.f = function (t) {
          return s && "[object Window]" == o.call(t) ? a(t) : i(r(t));
        };
      }, function (t, e, n) {
        n(49)("asyncIterator");
      }, function (t, e, n) {
        n(49)("observable");
      }, function (t, e, n) {

        var r;

        t.exports.timeout = function (t, e) {
          var n,
              i = new r();
          return Promise.race([t, new Promise(function (t, r) {
            n = setTimeout(function () {
              r(i);
            }, e);
          })]).then(function (t) {
            return clearTimeout(n), t;
          }, function (t) {
            throw clearTimeout(n), t;
          });
        };

        r = t.exports.TimeoutError = function () {
          Error.call(this), this.stack = Error().stack, this.message = "Timeout";
        }, r.prototype = Object.create(Error.prototype), r.prototype.name = "TimeoutError";
      }, function (t, e, n) {

        function r(t) {
          if (p(t)) return {};
          var e = t.slice(0, 8).toLowerCase(),
              n = "lncldglobal.com";
          return {
            push: "https://" + e + ".push." + n,
            stats: "https://" + e + ".stats." + n,
            engine: "https://" + e + ".engine." + n,
            api: "https://" + e + ".api." + n,
            rtm: "https://" + e + ".rtm." + n
          };
        }

        var i = n(76),
            o = function (t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }(i),
            s = n(18),
            a = n(127),
            u = n(5),
            c = u.isNullOrUndefined,
            l = n(0),
            f = l.extend,
            h = l.isObject,
            d = l.isEmpty,
            p = function (t) {
          return "-MdYXbMMI" !== t.slice(-9);
        },
            _ = function (t) {
          return {
            push: t,
            stats: t,
            engine: t,
            api: t,
            rtm: t
          };
        },
            v = !1,
            y = !1;

        s.init = function (t) {
          if (!h(t)) return s.init({
            appId: t,
            appKey: arguments.length <= 1 ? void 0 : arguments[1],
            masterKey: arguments.length <= 2 ? void 0 : arguments[2]
          });
          var e = t.appId,
              n = t.appKey,
              i = t.masterKey,
              o = t.hookKey,
              u = t.serverURL,
              c = t.serverURLs,
              l = void 0 === c ? u : c,
              m = t.disableCurrentUser,
              g = t.production,
              b = t.realtime;
          if (y && console.warn("Initializing LeanCloud Storage SDK which has already been initialized. Reinitializing the SDK might cause problems like unexpected cross-app data writing and invalid relations."), !e) throw new TypeError("appId must be a string");
          if (!n) throw new TypeError("appKey must be a string");
          if (i && console.warn("MasterKey is not supposed to be used at client side."), p(e) && !l && d(s._config.serverURLs)) throw new TypeError("serverURL option is required for apps from CN region");
          e !== s._config.applicationId ? (s._config.masterKey = i, s._config.hookKey = o) : (i && (s._config.masterKey = i), o && (s._config.hookKey = o)), s._config.applicationId = e, s._config.applicationKey = n, s.setProduction(g), void 0 !== m && (s._config.disableCurrentUser = m);
          var w = v || void 0 !== l;
          if (w || (s._appRouter = new a(s)), s._setServerURLs(f({}, r(e), s._config.serverURLs, "string" == typeof l ? _(l) : l), w), b) s._config.realtime = b;else if (s._sharedConfig.liveQueryRealtime) {
            var O = s._config.serverURLs,
                A = O.api,
                S = O.rtm;
            s._config.realtime = new s._sharedConfig.liveQueryRealtime({
              appId: e,
              appKey: n,
              server: {
                api: A,
                RTMRouter: S
              }
            });
          }
          y = !0;
        }, s.setProduction = function (t) {
          c(t) ? s._config.production = null : s._config.production = t ? 1 : 0;
        }, s._setServerURLs = function (t) {
          var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          "string" != typeof t ? f(s._config.serverURLs, t) : s._config.serverURLs = _(t), e && (s._appRouter ? s._appRouter.disable() : v = !0);
        }, s.setServerURL = function (t) {
          return s._setServerURLs(t);
        }, s.setServerURLs = s.setServerURL, s.keepErrorRawMessage = function (t) {
          s._sharedConfig.keepErrorRawMessage = t;
        }, s.setRequestTimeout = function (t) {
          s._config.requestTimeout = t;
        }, s.initialize = s.init, ["applicationId", "applicationKey", "masterKey", "hookKey"].forEach(function (t) {
          return (0, o.default)(s, t, {
            get: function () {
              return s._config[t];
            },
            set: function (e) {
              s._config[t] = e;
            }
          });
        });
      }, function (t, e, n) {
        n(126);
        var r = n(1).Object;

        t.exports = function (t, e, n) {
          return r.defineProperty(t, e, n);
        };
      }, function (t, e, n) {
        var r = n(10);
        r(r.S + r.F * !n(11), "Object", {
          defineProperty: n(7).f
        });
      }, function (t, e, n) {

        function r(t) {
          var e = this;
          this.AV = t, this.lockedUntil = 0, s.getAsync("serverURLs").then(function (t) {
            if (!e.disabled) {
              if (!t) return e.lock(0);
              var n = t.serverURLs,
                  r = t.lockedUntil;
              e.AV._setServerURLs(n, !1), e.lockedUntil = r;
            }
          }).catch(function () {
            return e.lock(0);
          });
        }

        var i = n(5),
            o = i.ajax,
            s = n(75);
        r.prototype.disable = function () {
          this.disabled = !0;
        }, r.prototype.lock = function (t) {
          this.lockedUntil = Date.now() + t;
        }, r.prototype.refresh = function () {
          var t = this;

          if (!(this.disabled || Date.now() < this.lockedUntil)) {
            this.lock(10);
            return o({
              method: "get",
              url: "https://app-router.com/2/route",
              query: {
                appId: this.AV.applicationId
              }
            }).then(function (e) {
              if (!t.disabled) {
                var n = e.ttl;
                if (!n) throw new Error("missing ttl");
                n *= 1e3;
                var r = {
                  push: "https://" + e.push_server,
                  stats: "https://" + e.stats_server,
                  engine: "https://" + e.engine_server,
                  api: "https://" + e.api_server
                };
                return t.AV._setServerURLs(r, !1), t.lock(n), s.setAsync("serverURLs", {
                  serverURLs: r,
                  lockedUntil: t.lockedUntil
                }, n);
              }
            }).catch(function (e) {
              console.warn("refresh server URLs failed: " + e.message), t.lock(600);
            });
          }
        }, t.exports = r;
      }, function (t, e, n) {

        var r = n(0);

        t.exports = function (t) {
          var e = /\s+/,
              n = Array.prototype.slice;
          t.Events = {
            on: function (t, n, r) {
              var i, o, s, a, u;
              if (!n) return this;

              for (t = t.split(e), i = this._callbacks || (this._callbacks = {}), o = t.shift(); o;) u = i[o], s = u ? u.tail : {}, s.next = a = {}, s.context = r, s.callback = n, i[o] = {
                tail: a,
                next: u ? u.next : s
              }, o = t.shift();

              return this;
            },
            off: function (t, n, i) {
              var o, s, a, u, c, l;

              if (s = this._callbacks) {
                if (!(t || n || i)) return delete this._callbacks, this;

                for (t = t ? t.split(e) : r.keys(s), o = t.shift(); o;) if (a = s[o], delete s[o], a && (n || i)) {
                  for (u = a.tail, a = a.next; a !== u;) c = a.callback, l = a.context, (n && c !== n || i && l !== i) && this.on(o, c, l), a = a.next;

                  o = t.shift();
                }

                return this;
              }
            },
            trigger: function (t) {
              var r, i, o, s, a, u, c;
              if (!(o = this._callbacks)) return this;

              for (u = o.all, t = t.split(e), c = n.call(arguments, 1), r = t.shift(); r;) {
                if (i = o[r]) for (s = i.tail; (i = i.next) !== s;) i.callback.apply(i.context || this, c);
                if (i = u) for (s = i.tail, a = [r].concat(c); (i = i.next) !== s;) i.callback.apply(i.context || this, a);
                r = t.shift();
              }

              return this;
            }
          }, t.Events.bind = t.Events.on, t.Events.unbind = t.Events.off;
        };
      }, function (t, e, n) {

        var r = n(2),
            i = function (t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }(r),
            o = n(0);

        t.exports = function (t) {
          t.GeoPoint = function (e, n) {
            o.isArray(e) ? (t.GeoPoint._validate(e[0], e[1]), this.latitude = e[0], this.longitude = e[1]) : o.isObject(e) ? (t.GeoPoint._validate(e.latitude, e.longitude), this.latitude = e.latitude, this.longitude = e.longitude) : o.isNumber(e) && o.isNumber(n) ? (t.GeoPoint._validate(e, n), this.latitude = e, this.longitude = n) : (this.latitude = 0, this.longitude = 0);
            var r = this;
            this.__defineGetter__ && this.__defineSetter__ && (this._latitude = this.latitude, this._longitude = this.longitude, this.__defineGetter__("latitude", function () {
              return r._latitude;
            }), this.__defineGetter__("longitude", function () {
              return r._longitude;
            }), this.__defineSetter__("latitude", function (e) {
              t.GeoPoint._validate(e, r.longitude), r._latitude = e;
            }), this.__defineSetter__("longitude", function (e) {
              t.GeoPoint._validate(r.latitude, e), r._longitude = e;
            }));
          }, t.GeoPoint._validate = function (t, e) {
            if (t < -90) throw new Error("AV.GeoPoint latitude " + t + " < -90.0.");
            if (t > 90) throw new Error("AV.GeoPoint latitude " + t + " > 90.0.");
            if (e < -180) throw new Error("AV.GeoPoint longitude " + e + " < -180.0.");
            if (e > 180) throw new Error("AV.GeoPoint longitude " + e + " > 180.0.");
          }, t.GeoPoint.current = function () {
            return new i.default(function (e, n) {
              navigator.geolocation.getCurrentPosition(function (n) {
                e(new t.GeoPoint({
                  latitude: n.coords.latitude,
                  longitude: n.coords.longitude
                }));
              }, n);
            });
          }, o.extend(t.GeoPoint.prototype, {
            toJSON: function () {
              return t.GeoPoint._validate(this.latitude, this.longitude), {
                __type: "GeoPoint",
                latitude: this.latitude,
                longitude: this.longitude
              };
            },
            radiansTo: function (t) {
              var e = Math.PI / 180,
                  n = this.latitude * e,
                  r = this.longitude * e,
                  i = t.latitude * e,
                  o = t.longitude * e,
                  s = n - i,
                  a = r - o,
                  u = Math.sin(s / 2),
                  c = Math.sin(a / 2),
                  l = u * u + Math.cos(n) * Math.cos(i) * c * c;
              return l = Math.min(1, l), 2 * Math.asin(Math.sqrt(l));
            },
            kilometersTo: function (t) {
              return 6371 * this.radiansTo(t);
            },
            milesTo: function (t) {
              return 3958.8 * this.radiansTo(t);
            }
          });
        };
      }, function (t, e, n) {

        var r = n(0);

        t.exports = function (t) {
          t.ACL = function (e) {
            var n = this;
            if (n.permissionsById = {}, r.isObject(e)) if (e instanceof t.User) n.setReadAccess(e, !0), n.setWriteAccess(e, !0);else {
              if (r.isFunction(e)) throw new Error("AV.ACL() called with a function.  Did you forget ()?");

              t._objectEach(e, function (e, i) {
                if (!r.isString(i)) throw new Error("Tried to create an ACL with an invalid userId.");
                n.permissionsById[i] = {}, t._objectEach(e, function (t, e) {
                  if ("read" !== e && "write" !== e) throw new Error("Tried to create an ACL with an invalid permission type.");
                  if (!r.isBoolean(t)) throw new Error("Tried to create an ACL with an invalid permission value.");
                  n.permissionsById[i][e] = t;
                });
              });
            }
          }, t.ACL.prototype.toJSON = function () {
            return r.clone(this.permissionsById);
          }, t.ACL.prototype._setAccess = function (e, n, i) {
            if (n instanceof t.User ? n = n.id : n instanceof t.Role && (n = "role:" + n.getName()), !r.isString(n)) throw new Error("userId must be a string.");
            if (!r.isBoolean(i)) throw new Error("allowed must be either true or false.");
            var o = this.permissionsById[n];

            if (!o) {
              if (!i) return;
              o = {}, this.permissionsById[n] = o;
            }

            i ? this.permissionsById[n][e] = !0 : (delete o[e], r.isEmpty(o) && delete this.permissionsById[n]);
          }, t.ACL.prototype._getAccess = function (e, n) {
            n instanceof t.User ? n = n.id : n instanceof t.Role && (n = "role:" + n.getName());
            var r = this.permissionsById[n];
            return !!r && !!r[e];
          }, t.ACL.prototype.setReadAccess = function (t, e) {
            this._setAccess("read", t, e);
          }, t.ACL.prototype.getReadAccess = function (t) {
            return this._getAccess("read", t);
          }, t.ACL.prototype.setWriteAccess = function (t, e) {
            this._setAccess("write", t, e);
          }, t.ACL.prototype.getWriteAccess = function (t) {
            return this._getAccess("write", t);
          }, t.ACL.prototype.setPublicReadAccess = function (t) {
            this.setReadAccess("*", t);
          }, t.ACL.prototype.getPublicReadAccess = function () {
            return this.getReadAccess("*");
          }, t.ACL.prototype.setPublicWriteAccess = function (t) {
            this.setWriteAccess("*", t);
          }, t.ACL.prototype.getPublicWriteAccess = function () {
            return this.getWriteAccess("*");
          }, t.ACL.prototype.getRoleReadAccess = function (e) {
            if (e instanceof t.Role && (e = e.getName()), r.isString(e)) return this.getReadAccess("role:" + e);
            throw new Error("role must be a AV.Role or a String");
          }, t.ACL.prototype.getRoleWriteAccess = function (e) {
            if (e instanceof t.Role && (e = e.getName()), r.isString(e)) return this.getWriteAccess("role:" + e);
            throw new Error("role must be a AV.Role or a String");
          }, t.ACL.prototype.setRoleReadAccess = function (e, n) {
            if (e instanceof t.Role && (e = e.getName()), r.isString(e)) return void this.setReadAccess("role:" + e, n);
            throw new Error("role must be a AV.Role or a String");
          }, t.ACL.prototype.setRoleWriteAccess = function (e, n) {
            if (e instanceof t.Role && (e = e.getName()), r.isString(e)) return void this.setWriteAccess("role:" + e, n);
            throw new Error("role must be a AV.Role or a String");
          };
        };
      }, function (t, e, n) {

        var r = n(0);

        t.exports = function (t) {
          t.Op = function () {
            this._initialize.apply(this, arguments);
          }, r.extend(t.Op.prototype, {
            _initialize: function () {}
          }), r.extend(t.Op, {
            _extend: t._extend,
            _opDecoderMap: {},
            _registerDecoder: function (e, n) {
              t.Op._opDecoderMap[e] = n;
            },
            _decode: function (e) {
              var n = t.Op._opDecoderMap[e.__op];
              return n ? n(e) : void 0;
            }
          }), t.Op._registerDecoder("Batch", function (e) {
            var n = null;
            return t._arrayEach(e.ops, function (e) {
              e = t.Op._decode(e), n = e._mergeWithPrevious(n);
            }), n;
          }), t.Op.Set = t.Op._extend({
            _initialize: function (t) {
              this._value = t;
            },
            value: function () {
              return this._value;
            },
            toJSON: function () {
              return t._encode(this.value());
            },
            _mergeWithPrevious: function (t) {
              return this;
            },
            _estimate: function (t) {
              return this.value();
            }
          }), t.Op._UNSET = {}, t.Op.Unset = t.Op._extend({
            toJSON: function () {
              return {
                __op: "Delete"
              };
            },
            _mergeWithPrevious: function (t) {
              return this;
            },
            _estimate: function (e) {
              return t.Op._UNSET;
            }
          }), t.Op._registerDecoder("Delete", function (e) {
            return new t.Op.Unset();
          }), t.Op.Increment = t.Op._extend({
            _initialize: function (t) {
              this._amount = t;
            },
            amount: function () {
              return this._amount;
            },
            toJSON: function () {
              return {
                __op: "Increment",
                amount: this._amount
              };
            },
            _mergeWithPrevious: function (e) {
              if (e) {
                if (e instanceof t.Op.Unset) return new t.Op.Set(this.amount());
                if (e instanceof t.Op.Set) return new t.Op.Set(e.value() + this.amount());
                if (e instanceof t.Op.Increment) return new t.Op.Increment(this.amount() + e.amount());
                throw new Error("Op is invalid after previous op.");
              }

              return this;
            },
            _estimate: function (t) {
              return t ? t + this.amount() : this.amount();
            }
          }), t.Op._registerDecoder("Increment", function (e) {
            return new t.Op.Increment(e.amount);
          }), t.Op.BitAnd = t.Op._extend({
            _initialize: function (t) {
              this._value = t;
            },
            value: function () {
              return this._value;
            },
            toJSON: function () {
              return {
                __op: "BitAnd",
                value: this.value()
              };
            },
            _mergeWithPrevious: function (e) {
              if (e) {
                if (e instanceof t.Op.Unset) return new t.Op.Set(0);
                if (e instanceof t.Op.Set) return new t.Op.Set(e.value() & this.value());
                throw new Error("Op is invalid after previous op.");
              }

              return this;
            },
            _estimate: function (t) {
              return t & this.value();
            }
          }), t.Op._registerDecoder("BitAnd", function (e) {
            return new t.Op.BitAnd(e.value);
          }), t.Op.BitOr = t.Op._extend({
            _initialize: function (t) {
              this._value = t;
            },
            value: function () {
              return this._value;
            },
            toJSON: function () {
              return {
                __op: "BitOr",
                value: this.value()
              };
            },
            _mergeWithPrevious: function (e) {
              if (e) {
                if (e instanceof t.Op.Unset) return new t.Op.Set(this.value());
                if (e instanceof t.Op.Set) return new t.Op.Set(e.value() | this.value());
                throw new Error("Op is invalid after previous op.");
              }

              return this;
            },
            _estimate: function (t) {
              return t | this.value();
            }
          }), t.Op._registerDecoder("BitOr", function (e) {
            return new t.Op.BitOr(e.value);
          }), t.Op.BitXor = t.Op._extend({
            _initialize: function (t) {
              this._value = t;
            },
            value: function () {
              return this._value;
            },
            toJSON: function () {
              return {
                __op: "BitXor",
                value: this.value()
              };
            },
            _mergeWithPrevious: function (e) {
              if (e) {
                if (e instanceof t.Op.Unset) return new t.Op.Set(this.value());
                if (e instanceof t.Op.Set) return new t.Op.Set(e.value() ^ this.value());
                throw new Error("Op is invalid after previous op.");
              }

              return this;
            },
            _estimate: function (t) {
              return t ^ this.value();
            }
          }), t.Op._registerDecoder("BitXor", function (e) {
            return new t.Op.BitXor(e.value);
          }), t.Op.Add = t.Op._extend({
            _initialize: function (t) {
              this._objects = t;
            },
            objects: function () {
              return this._objects;
            },
            toJSON: function () {
              return {
                __op: "Add",
                objects: t._encode(this.objects())
              };
            },
            _mergeWithPrevious: function (e) {
              if (e) {
                if (e instanceof t.Op.Unset) return new t.Op.Set(this.objects());
                if (e instanceof t.Op.Set) return new t.Op.Set(this._estimate(e.value()));
                if (e instanceof t.Op.Add) return new t.Op.Add(e.objects().concat(this.objects()));
                throw new Error("Op is invalid after previous op.");
              }

              return this;
            },
            _estimate: function (t) {
              return t ? t.concat(this.objects()) : r.clone(this.objects());
            }
          }), t.Op._registerDecoder("Add", function (e) {
            return new t.Op.Add(t._decode(e.objects));
          }), t.Op.AddUnique = t.Op._extend({
            _initialize: function (t) {
              this._objects = r.uniq(t);
            },
            objects: function () {
              return this._objects;
            },
            toJSON: function () {
              return {
                __op: "AddUnique",
                objects: t._encode(this.objects())
              };
            },
            _mergeWithPrevious: function (e) {
              if (e) {
                if (e instanceof t.Op.Unset) return new t.Op.Set(this.objects());
                if (e instanceof t.Op.Set) return new t.Op.Set(this._estimate(e.value()));
                if (e instanceof t.Op.AddUnique) return new t.Op.AddUnique(this._estimate(e.objects()));
                throw new Error("Op is invalid after previous op.");
              }

              return this;
            },
            _estimate: function (e) {
              if (e) {
                var n = r.clone(e);
                return t._arrayEach(this.objects(), function (e) {
                  if (e instanceof t.Object && e.id) {
                    var i = r.find(n, function (n) {
                      return n instanceof t.Object && n.id === e.id;
                    });

                    if (i) {
                      var o = r.indexOf(n, i);
                      n[o] = e;
                    } else n.push(e);
                  } else r.contains(n, e) || n.push(e);
                }), n;
              }

              return r.clone(this.objects());
            }
          }), t.Op._registerDecoder("AddUnique", function (e) {
            return new t.Op.AddUnique(t._decode(e.objects));
          }), t.Op.Remove = t.Op._extend({
            _initialize: function (t) {
              this._objects = r.uniq(t);
            },
            objects: function () {
              return this._objects;
            },
            toJSON: function () {
              return {
                __op: "Remove",
                objects: t._encode(this.objects())
              };
            },
            _mergeWithPrevious: function (e) {
              if (e) {
                if (e instanceof t.Op.Unset) return e;
                if (e instanceof t.Op.Set) return new t.Op.Set(this._estimate(e.value()));
                if (e instanceof t.Op.Remove) return new t.Op.Remove(r.union(e.objects(), this.objects()));
                throw new Error("Op is invalid after previous op.");
              }

              return this;
            },
            _estimate: function (e) {
              if (e) {
                var n = r.difference(e, this.objects());
                return t._arrayEach(this.objects(), function (e) {
                  e instanceof t.Object && e.id && (n = r.reject(n, function (n) {
                    return n instanceof t.Object && n.id === e.id;
                  }));
                }), n;
              }

              return [];
            }
          }), t.Op._registerDecoder("Remove", function (e) {
            return new t.Op.Remove(t._decode(e.objects));
          }), t.Op.Relation = t.Op._extend({
            _initialize: function (e, n) {
              this._targetClassName = null;

              var i = this,
                  o = function (e) {
                if (e instanceof t.Object) {
                  if (!e.id) throw new Error("You can't add an unsaved AV.Object to a relation.");
                  if (i._targetClassName || (i._targetClassName = e.className), i._targetClassName !== e.className) throw new Error("Tried to create a AV.Relation with 2 different types: " + i._targetClassName + " and " + e.className + ".");
                  return e.id;
                }

                return e;
              };

              this.relationsToAdd = r.uniq(r.map(e, o)), this.relationsToRemove = r.uniq(r.map(n, o));
            },
            added: function () {
              var e = this;
              return r.map(this.relationsToAdd, function (n) {
                var r = t.Object._create(e._targetClassName);

                return r.id = n, r;
              });
            },
            removed: function () {
              var e = this;
              return r.map(this.relationsToRemove, function (n) {
                var r = t.Object._create(e._targetClassName);

                return r.id = n, r;
              });
            },
            toJSON: function () {
              var t = null,
                  e = null,
                  n = this,
                  i = function (t) {
                return {
                  __type: "Pointer",
                  className: n._targetClassName,
                  objectId: t
                };
              },
                  o = null;

              return this.relationsToAdd.length > 0 && (o = r.map(this.relationsToAdd, i), t = {
                __op: "AddRelation",
                objects: o
              }), this.relationsToRemove.length > 0 && (o = r.map(this.relationsToRemove, i), e = {
                __op: "RemoveRelation",
                objects: o
              }), t && e ? {
                __op: "Batch",
                ops: [t, e]
              } : t || e || {};
            },
            _mergeWithPrevious: function (e) {
              if (e) {
                if (e instanceof t.Op.Unset) throw new Error("You can't modify a relation after deleting it.");

                if (e instanceof t.Op.Relation) {
                  if (e._targetClassName && e._targetClassName !== this._targetClassName) throw new Error("Related object must be of class " + e._targetClassName + ", but " + this._targetClassName + " was passed in.");
                  var n = r.union(r.difference(e.relationsToAdd, this.relationsToRemove), this.relationsToAdd),
                      i = r.union(r.difference(e.relationsToRemove, this.relationsToAdd), this.relationsToRemove),
                      o = new t.Op.Relation(n, i);
                  return o._targetClassName = this._targetClassName, o;
                }

                throw new Error("Op is invalid after previous op.");
              }

              return this;
            },
            _estimate: function (e, n, r) {
              if (e) {
                if (e instanceof t.Relation) {
                  if (this._targetClassName) if (e.targetClassName) {
                    if (e.targetClassName !== this._targetClassName) throw new Error("Related object must be a " + e.targetClassName + ", but a " + this._targetClassName + " was passed in.");
                  } else e.targetClassName = this._targetClassName;
                  return e;
                }

                throw new Error("Op is invalid after previous op.");
              }

              new t.Relation(n, r).targetClassName = this._targetClassName;
            }
          }), t.Op._registerDecoder("AddRelation", function (e) {
            return new t.Op.Relation(t._decode(e.objects), []);
          }), t.Op._registerDecoder("RemoveRelation", function (e) {
            return new t.Op.Relation([], t._decode(e.objects));
          });
        };
      }, function (t, e, n) {

        var r = n(0);

        t.exports = function (t) {
          t.Relation = function (t, e) {
            if (!r.isString(e)) throw new TypeError("key must be a string");
            this.parent = t, this.key = e, this.targetClassName = null;
          }, t.Relation.reverseQuery = function (e, n, r) {
            var i = new t.Query(e);
            return i.equalTo(n, r._toPointer()), i;
          }, r.extend(t.Relation.prototype, {
            _ensureParentAndKey: function (t, e) {
              if (this.parent = this.parent || t, this.key = this.key || e, this.parent !== t) throw new Error("Internal Error. Relation retrieved from two different Objects.");
              if (this.key !== e) throw new Error("Internal Error. Relation retrieved from two different keys.");
            },
            add: function (e) {
              r.isArray(e) || (e = [e]);
              var n = new t.Op.Relation(e, []);
              this.parent.set(this.key, n), this.targetClassName = n._targetClassName;
            },
            remove: function (e) {
              r.isArray(e) || (e = [e]);
              var n = new t.Op.Relation([], e);
              this.parent.set(this.key, n), this.targetClassName = n._targetClassName;
            },
            toJSON: function () {
              return {
                __type: "Relation",
                className: this.targetClassName
              };
            },
            query: function () {
              var e, n;
              return this.targetClassName ? (e = t.Object._getSubclass(this.targetClassName), n = new t.Query(e)) : (e = t.Object._getSubclass(this.parent.className), n = new t.Query(e), n._defaultParams.redirectClassNameForKey = this.key), n._addCondition("$relatedTo", "object", this.parent._toPointer()), n._addCondition("$relatedTo", "key", this.key), n;
            }
          });
        };
      }, function (t, e, n) {

        var r = n(2),
            i = function (t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }(r),
            o = n(0),
            s = n(134),
            a = n(135),
            u = n(136),
            c = n(16),
            l = n(6)._request,
            f = n(5),
            h = f.tap,
            d = f.transformFetchOptions,
            p = n(19)("leancloud:file"),
            _ = n(140);

        t.exports = function (t) {
          var e = function () {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
          },
              n = function (t) {
            return o.isString(t) ? t.match(/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/)[4] : "";
          },
              r = function (t) {
            if (t < 26) return String.fromCharCode(65 + t);
            if (t < 52) return String.fromCharCode(t - 26 + 97);
            if (t < 62) return String.fromCharCode(t - 52 + 48);
            if (62 === t) return "+";
            if (63 === t) return "/";
            throw new Error("Tried to encode large digit " + t + " in base64.");
          },
              f = function (t) {
            var e = [];
            return e.length = Math.ceil(t.length / 3), o.times(e.length, function (n) {
              var i = t[3 * n],
                  o = t[3 * n + 1] || 0,
                  s = t[3 * n + 2] || 0,
                  a = 3 * n + 1 < t.length,
                  u = 3 * n + 2 < t.length;
              e[n] = [r(i >> 2 & 63), r(i << 4 & 48 | o >> 4 & 15), a ? r(o << 2 & 60 | s >> 6 & 3) : "=", u ? r(63 & s) : "="].join("");
            }), e.join("");
          };

          t.File = function (e, r, i) {
            if (this.attributes = {
              name: e,
              url: "",
              metaData: {},
              base64: ""
            }, o.isString(r)) throw new TypeError("Creating an AV.File from a String is not yet supported.");
            o.isArray(r) && (this.attributes.metaData.size = r.length, r = {
              base64: f(r)
            }), this._extName = "", this._data = r, this._uploadHeaders = {}, r && r.blob && "string" == typeof r.blob.uri && (this._extName = n(r.blob.uri)), "undefined" != typeof Blob && r instanceof Blob && (r.size && (this.attributes.metaData.size = r.size), r.name && (this._extName = n(r.name)));
            var s = void 0;
            if (r && r.owner) s = r.owner;else if (!t._config.disableCurrentUser) try {
              s = t.User.current();
            } catch (t) {
              if ("SYNC_API_NOT_AVAILABLE" !== t.code) throw t;
            }
            this.attributes.metaData.owner = s ? s.id : "unknown", this.set("mime_type", i);
          }, t.File.withURL = function (e, n, r, i) {
            if (!e || !n) throw new Error("Please provide file name and url");
            var o = new t.File(e, null, i);
            if (r) for (var s in r) o.attributes.metaData[s] || (o.attributes.metaData[s] = r[s]);
            return o.attributes.url = n, o.attributes.metaData.__source = "external", o;
          }, t.File.createWithoutData = function (e) {
            var n = new t.File();
            return n.id = e, n;
          }, o.extend(t.File.prototype, {
            className: "_File",
            _toFullJSON: function (e) {
              var n = this,
                  r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                  i = o.clone(this.attributes);
              return t._objectEach(i, function (n, o) {
                i[o] = t._encode(n, e, void 0, r);
              }), t._objectEach(this._operations, function (t, e) {
                i[e] = t;
              }), o.has(this, "id") && (i.objectId = this.id), o(["createdAt", "updatedAt"]).each(function (t) {
                if (o.has(n, t)) {
                  var e = n[t];
                  i[t] = o.isDate(e) ? e.toJSON() : e;
                }
              }), r && (i.__type = "File"), i;
            },
            toFullJSON: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
              return this._toFullJSON(t);
            },
            toJSON: function (t, e) {
              var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [this];
              return this._toFullJSON(n, !1);
            },
            _toPointer: function () {
              return {
                __type: "Pointer",
                className: this.className,
                objectId: this.id
              };
            },
            getACL: function () {
              return this._acl;
            },
            setACL: function (e) {
              return e instanceof t.ACL ? (this._acl = e, this) : new c(c.OTHER_CAUSE, "ACL must be a AV.ACL.");
            },
            name: function () {
              return this.get("name");
            },
            url: function () {
              return this.get("url");
            },
            get: function (t) {
              switch (t) {
                case "objectId":
                  return this.id;

                case "url":
                case "name":
                case "mime_type":
                case "metaData":
                case "createdAt":
                case "updatedAt":
                  return this.attributes[t];

                default:
                  return this.attributes.metaData[t];
              }
            },
            set: function () {
              for (var t = this, e = function (e, n) {
                switch (e) {
                  case "name":
                  case "url":
                  case "mime_type":
                  case "base64":
                  case "metaData":
                    t.attributes[e] = n;
                    break;

                  default:
                    t.attributes.metaData[e] = n;
                }
              }, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];

              switch (r.length) {
                case 1:
                  for (var o in r[0]) e(o, r[0][o]);

                  break;

                case 2:
                  e(r[0], r[1]);
              }

              return this;
            },
            setUploadHeader: function (t, e) {
              return this._uploadHeaders[t] = e, this;
            },
            metaData: function (t, e) {
              return t && e ? (this.attributes.metaData[t] = e, this) : t && !e ? this.attributes.metaData[t] : this.attributes.metaData;
            },
            thumbnailURL: function (t, e) {
              var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
                  r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                  i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "png",
                  o = this.attributes.url;
              if (!o) throw new Error("Invalid url.");
              if (!t || !e || t <= 0 || e <= 0) throw new Error("Invalid width or height value.");
              if (n <= 0 || n > 100) throw new Error("Invalid quality value.");
              return o + "?imageView/" + (r ? 2 : 1) + "/w/" + t + "/h/" + e + "/q/" + n + "/format/" + i;
            },
            size: function () {
              return this.metaData().size;
            },
            ownerId: function () {
              return this.metaData().owner;
            },
            destroy: function (t) {
              return this.id ? l("files", null, this.id, "DELETE", null, t) : i.default.reject(new Error("The file id does not eixst."));
            },
            _fileToken: function (t, r) {
              var i = this.attributes.name,
                  o = n(i);
              !o && this._extName && (i += this._extName, o = this._extName);
              var s = e() + e() + e() + e() + e() + o,
                  a = {
                key: s,
                name: i,
                keep_file_name: r.keepFileName,
                ACL: this._acl,
                mime_type: t,
                metaData: this.attributes.metaData
              };
              return this._qiniu_key = s, l("fileTokens", null, null, "POST", a, r);
            },
            save: function () {
              var t = this,
                  e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              if (this.id) throw new Error("File is already saved.");
              if (!this._previousSave) if (this._data) {
                var n = this.get("mime_type");
                this._previousSave = this._fileToken(n, e).then(function (r) {
                  return r.mime_type && (n = r.mime_type, t.set("mime_type", n)), t._token = r.token, i.default.resolve().then(function () {
                    var e = t._data;
                    if (e && e.base64) return _(e.base64, n);
                    if (e && e.blob) return !e.blob.type && n && (e.blob.type = n), e.blob.name || (e.blob.name = t.get("name")), e.blob;
                    if ("undefined" != typeof Blob && e instanceof Blob) return e;
                    throw new TypeError("malformed file data");
                  }).then(function (n) {
                    var i = o.extend({}, e);

                    switch (e.onprogress && (i.onprogress = function (t) {
                      if ("download" !== t.direction) return e.onprogress(t);
                    }), r.provider) {
                      case "s3":
                        return u(r, n, t, i);

                      case "qcloud":
                        return s(r, n, t, i);

                      case "qiniu":
                      default:
                        return a(r, n, t, i);
                    }
                  }).then(h(function () {
                    return t._callback(!0);
                  }), function (e) {
                    throw t._callback(!1), e;
                  });
                });
              } else if (this.attributes.url && "external" === this.attributes.metaData.__source) {
                var r = {
                  name: this.attributes.name,
                  ACL: this._acl,
                  metaData: this.attributes.metaData,
                  mime_type: this.mimeType,
                  url: this.attributes.url
                };
                this._previousSave = l("files", this.attributes.name, null, "post", r, e).then(function (e) {
                  return t.attributes.name = e.name, t.attributes.url = e.url, t.id = e.objectId, e.size && (t.attributes.metaData.size = e.size), t;
                });
              }
              return this._previousSave;
            },
            _callback: function (t) {
              l("fileCallback", null, null, "post", {
                token: this._token,
                result: t
              }).catch(p), delete this._token, delete this._data;
            },
            fetch: function (t, e) {
              return l("files", null, this.id, "GET", d(t), e).then(this._finishFetch.bind(this));
            },
            _finishFetch: function (e) {
              var n = t.Object.prototype.parse(e);
              return n.attributes = {
                name: n.name,
                url: n.url,
                mime_type: n.mime_type,
                bucket: n.bucket
              }, n.attributes.metaData = n.metaData || {}, n.id = n.objectId, delete n.objectId, delete n.metaData, delete n.url, delete n.name, delete n.mime_type, delete n.bucket, o.extend(this, n), this;
            }
          });
        };
      }, function (t, e, n) {

        var r = n(28),
            i = r.getAdapter,
            o = n(19)("cos");

        t.exports = function (t, e, n) {
          var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          n.attributes.url = t.url, n._bucket = t.bucket, n.id = t.objectId;
          var s = t.upload_url + "?sign=" + encodeURIComponent(t.token),
              a = {
            field: "fileContent",
            data: e,
            name: n.attributes.name
          },
              u = {
            headers: n._uploadHeaders,
            data: {
              op: "upload"
            },
            onprogress: r.onprogress
          };
          return o("url: %s, file: %o, options: %o", s, a, u), i("upload")(s, a, u).then(function (t) {
            if (o(t.status, t.data), !1 === t.ok) {
              var e = new Error(t.status);
              throw e.response = t, e;
            }

            return n;
          }, function (t) {
            var e = t.response;
            throw e && (o(e.status, e.data), t.statusCode = e.status, t.response = e.data), t;
          });
        };
      }, function (t, e, n) {

        var r = n(9),
            i = function (t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }(r),
            o = n(28),
            s = o.getAdapter,
            a = n(19)("leancloud:qiniu");

        t.exports = function (t, e, n) {
          var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          n.attributes.url = t.url, n._bucket = t.bucket, n.id = t.objectId;
          var o = t.token,
              u = t.upload_url || "https://upload.qiniup.com",
              c = {
            field: "file",
            data: e,
            name: n.attributes.name
          },
              l = {
            headers: n._uploadHeaders,
            data: {
              name: n.attributes.name,
              key: t.key || n._qiniu_key,
              token: o
            },
            onprogress: r.onprogress
          };
          return a("url: %s, file: %o, options: %o", u, c, l), s("upload")(u, c, l).then(function (t) {
            if (a(t.status, t.data), !1 === t.ok) {
              var e = t.status;
              t.data && (e = t.data.error ? t.data.error : (0, i.default)(t.data));
              var r = new Error(e);
              throw r.response = t, r;
            }

            return n;
          }, function (t) {
            var e = t.response;
            throw e && (a(e.status, e.data), t.statusCode = e.status, t.response = e.data), t;
          });
        };
      }, function (t, e, n) {

        var r = n(0),
            i = n(5),
            o = i.ajax;

        t.exports = function (t, e, n) {
          var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return n.attributes.url = t.url, n._bucket = t.bucket, n.id = t.objectId, o({
            url: t.upload_url,
            method: "PUT",
            data: e,
            headers: r.extend({
              "Content-Type": n.get("mime_type"),
              "Cache-Control": "public, max-age=31536000"
            }, n._uploadHeaders),
            onprogress: i.onprogress
          }).then(function () {
            return n;
          });
        };
      }, function (t, e, n) {
        !function () {
          var e = n(138),
              r = n(77).utf8,
              i = n(139),
              o = n(77).bin,
              s = function (t, n) {
            t.constructor == String ? t = n && "binary" === n.encoding ? o.stringToBytes(t) : r.stringToBytes(t) : i(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || (t = t.toString());

            for (var a = e.bytesToWords(t), u = 8 * t.length, c = 1732584193, l = -271733879, f = -1732584194, h = 271733878, d = 0; d < a.length; d++) a[d] = 16711935 & (a[d] << 8 | a[d] >>> 24) | 4278255360 & (a[d] << 24 | a[d] >>> 8);

            a[u >>> 5] |= 128 << u % 32, a[14 + (u + 64 >>> 9 << 4)] = u;

            for (var p = s._ff, _ = s._gg, v = s._hh, y = s._ii, d = 0; d < a.length; d += 16) {
              var m = c,
                  g = l,
                  b = f,
                  w = h;
              c = p(c, l, f, h, a[d + 0], 7, -680876936), h = p(h, c, l, f, a[d + 1], 12, -389564586), f = p(f, h, c, l, a[d + 2], 17, 606105819), l = p(l, f, h, c, a[d + 3], 22, -1044525330), c = p(c, l, f, h, a[d + 4], 7, -176418897), h = p(h, c, l, f, a[d + 5], 12, 1200080426), f = p(f, h, c, l, a[d + 6], 17, -1473231341), l = p(l, f, h, c, a[d + 7], 22, -45705983), c = p(c, l, f, h, a[d + 8], 7, 1770035416), h = p(h, c, l, f, a[d + 9], 12, -1958414417), f = p(f, h, c, l, a[d + 10], 17, -42063), l = p(l, f, h, c, a[d + 11], 22, -1990404162), c = p(c, l, f, h, a[d + 12], 7, 1804603682), h = p(h, c, l, f, a[d + 13], 12, -40341101), f = p(f, h, c, l, a[d + 14], 17, -1502002290), l = p(l, f, h, c, a[d + 15], 22, 1236535329), c = _(c, l, f, h, a[d + 1], 5, -165796510), h = _(h, c, l, f, a[d + 6], 9, -1069501632), f = _(f, h, c, l, a[d + 11], 14, 643717713), l = _(l, f, h, c, a[d + 0], 20, -373897302), c = _(c, l, f, h, a[d + 5], 5, -701558691), h = _(h, c, l, f, a[d + 10], 9, 38016083), f = _(f, h, c, l, a[d + 15], 14, -660478335), l = _(l, f, h, c, a[d + 4], 20, -405537848), c = _(c, l, f, h, a[d + 9], 5, 568446438), h = _(h, c, l, f, a[d + 14], 9, -1019803690), f = _(f, h, c, l, a[d + 3], 14, -187363961), l = _(l, f, h, c, a[d + 8], 20, 1163531501), c = _(c, l, f, h, a[d + 13], 5, -1444681467), h = _(h, c, l, f, a[d + 2], 9, -51403784), f = _(f, h, c, l, a[d + 7], 14, 1735328473), l = _(l, f, h, c, a[d + 12], 20, -1926607734), c = v(c, l, f, h, a[d + 5], 4, -378558), h = v(h, c, l, f, a[d + 8], 11, -2022574463), f = v(f, h, c, l, a[d + 11], 16, 1839030562), l = v(l, f, h, c, a[d + 14], 23, -35309556), c = v(c, l, f, h, a[d + 1], 4, -1530992060), h = v(h, c, l, f, a[d + 4], 11, 1272893353), f = v(f, h, c, l, a[d + 7], 16, -155497632), l = v(l, f, h, c, a[d + 10], 23, -1094730640), c = v(c, l, f, h, a[d + 13], 4, 681279174), h = v(h, c, l, f, a[d + 0], 11, -358537222), f = v(f, h, c, l, a[d + 3], 16, -722521979), l = v(l, f, h, c, a[d + 6], 23, 76029189), c = v(c, l, f, h, a[d + 9], 4, -640364487), h = v(h, c, l, f, a[d + 12], 11, -421815835), f = v(f, h, c, l, a[d + 15], 16, 530742520), l = v(l, f, h, c, a[d + 2], 23, -995338651), c = y(c, l, f, h, a[d + 0], 6, -198630844), h = y(h, c, l, f, a[d + 7], 10, 1126891415), f = y(f, h, c, l, a[d + 14], 15, -1416354905), l = y(l, f, h, c, a[d + 5], 21, -57434055), c = y(c, l, f, h, a[d + 12], 6, 1700485571), h = y(h, c, l, f, a[d + 3], 10, -1894986606), f = y(f, h, c, l, a[d + 10], 15, -1051523), l = y(l, f, h, c, a[d + 1], 21, -2054922799), c = y(c, l, f, h, a[d + 8], 6, 1873313359), h = y(h, c, l, f, a[d + 15], 10, -30611744), f = y(f, h, c, l, a[d + 6], 15, -1560198380), l = y(l, f, h, c, a[d + 13], 21, 1309151649), c = y(c, l, f, h, a[d + 4], 6, -145523070), h = y(h, c, l, f, a[d + 11], 10, -1120210379), f = y(f, h, c, l, a[d + 2], 15, 718787259), l = y(l, f, h, c, a[d + 9], 21, -343485551), c = c + m >>> 0, l = l + g >>> 0, f = f + b >>> 0, h = h + w >>> 0;
            }

            return e.endian([c, l, f, h]);
          };

          s._ff = function (t, e, n, r, i, o, s) {
            var a = t + (e & n | ~e & r) + (i >>> 0) + s;
            return (a << o | a >>> 32 - o) + e;
          }, s._gg = function (t, e, n, r, i, o, s) {
            var a = t + (e & r | n & ~r) + (i >>> 0) + s;
            return (a << o | a >>> 32 - o) + e;
          }, s._hh = function (t, e, n, r, i, o, s) {
            var a = t + (e ^ n ^ r) + (i >>> 0) + s;
            return (a << o | a >>> 32 - o) + e;
          }, s._ii = function (t, e, n, r, i, o, s) {
            var a = t + (n ^ (e | ~r)) + (i >>> 0) + s;
            return (a << o | a >>> 32 - o) + e;
          }, s._blocksize = 16, s._digestsize = 16, t.exports = function (t, n) {
            if (void 0 === t || null === t) throw new Error("Illegal argument " + t);
            var r = e.wordsToBytes(s(t, n));
            return n && n.asBytes ? r : n && n.asString ? o.bytesToString(r) : e.bytesToHex(r);
          };
        }();
      }, function (t, e) {
        !function () {
          var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              n = {
            rotl: function (t, e) {
              return t << e | t >>> 32 - e;
            },
            rotr: function (t, e) {
              return t << 32 - e | t >>> e;
            },
            endian: function (t) {
              if (t.constructor == Number) return 16711935 & n.rotl(t, 8) | 4278255360 & n.rotl(t, 24);

              for (var e = 0; e < t.length; e++) t[e] = n.endian(t[e]);

              return t;
            },
            randomBytes: function (t) {
              for (var e = []; t > 0; t--) e.push(Math.floor(256 * Math.random()));

              return e;
            },
            bytesToWords: function (t) {
              for (var e = [], n = 0, r = 0; n < t.length; n++, r += 8) e[r >>> 5] |= t[n] << 24 - r % 32;

              return e;
            },
            wordsToBytes: function (t) {
              for (var e = [], n = 0; n < 32 * t.length; n += 8) e.push(t[n >>> 5] >>> 24 - n % 32 & 255);

              return e;
            },
            bytesToHex: function (t) {
              for (var e = [], n = 0; n < t.length; n++) e.push((t[n] >>> 4).toString(16)), e.push((15 & t[n]).toString(16));

              return e.join("");
            },
            hexToBytes: function (t) {
              for (var e = [], n = 0; n < t.length; n += 2) e.push(parseInt(t.substr(n, 2), 16));

              return e;
            },
            bytesToBase64: function (t) {
              for (var n = [], r = 0; r < t.length; r += 3) for (var i = t[r] << 16 | t[r + 1] << 8 | t[r + 2], o = 0; o < 4; o++) 8 * r + 6 * o <= 8 * t.length ? n.push(e.charAt(i >>> 6 * (3 - o) & 63)) : n.push("=");

              return n.join("");
            },
            base64ToBytes: function (t) {
              t = t.replace(/[^A-Z0-9+\/]/gi, "");

              for (var n = [], r = 0, i = 0; r < t.length; i = ++r % 4) 0 != i && n.push((e.indexOf(t.charAt(r - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | e.indexOf(t.charAt(r)) >>> 6 - 2 * i);

              return n;
            }
          };
          t.exports = n;
        }();
      }, function (t, e) {
        function n(t) {
          return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t);
        }

        function r(t) {
          return "function" == typeof t.readFloatLE && "function" == typeof t.slice && n(t.slice(0, 0));
        }
        /*!
        * Determine if an object is a Buffer
        *
        * @author   Feross Aboukhadijeh <https://feross.org>
        * @license  MIT
        */


        t.exports = function (t) {
          return null != t && (n(t) || r(t) || !!t._isBuffer);
        };
      }, function (t, e, n) {

        var r = function (t, e) {
          var n;
          t.indexOf("base64") < 0 ? n = atob(t) : t.split(",")[0].indexOf("base64") >= 0 ? (e = e || t.split(",")[0].split(":")[1].split(";")[0], n = atob(t.split(",")[1])) : n = unescape(t.split(",")[1]);

          for (var r = new Uint8Array(n.length), i = 0; i < n.length; i++) r[i] = n.charCodeAt(i);

          return new Blob([r], {
            type: e
          });
        };

        t.exports = r;
      }, function (t, e, n) {

        function r(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }

        function i(t, e) {
          return t && t[e] ? d.isFunction(t[e]) ? t[e]() : t[e] : null;
        }

        var o = n(142),
            s = r(o),
            a = n(9),
            u = r(a),
            c = n(145),
            l = r(c),
            f = n(2),
            h = r(f),
            d = n(0),
            p = n(16),
            _ = n(6),
            v = _._request,
            y = n(5),
            m = y.isNullOrUndefined,
            g = y.ensureArray,
            b = y.transformFetchOptions,
            w = y.setValue,
            O = y.findValue,
            A = y.isPlainObject,
            S = y.continueWhile,
            E = function t(e) {
          return d.isArray(e) ? e.map(t) : A(e) ? d.mapObject(e, t) : d.isObject(e) && e._toPointer ? e._toPointer() : e;
        },
            C = ["objectId", "createdAt", "updatedAt"],
            x = function (t) {
          if (-1 !== C.indexOf(t)) throw new Error("key[" + t + "] is reserved");
        },
            T = function (t) {
          var e = d.find(t, function (t) {
            return t instanceof Error;
          });
          if (!e) return t;
          var n = new p(e.code, e.message);
          throw n.results = t, n;
        };

        t.exports = function (t) {
          t.Object = function (e, n) {
            if (d.isString(e)) return t.Object._create.apply(this, arguments);
            e = e || {}, n && n.parse && (e = this.parse(e), e = this._mergeMagicFields(e));
            var r = i(this, "defaults");
            r && (e = d.extend({}, r, e)), n && n.collection && (this.collection = n.collection), this._serverData = {}, this._opSetQueue = [{}], this._flags = {}, this.attributes = {}, this._hashedJSON = {}, this._escapedAttributes = {}, this.cid = d.uniqueId("c"), this.changed = {}, this._silent = {}, this._pending = {}, this.set(e, {
              silent: !0
            }), this.changed = {}, this._silent = {}, this._pending = {}, this._hasData = !0, this._previousAttributes = d.clone(this.attributes), this.initialize.apply(this, arguments);
          }, t.Object.saveAll = function (e, n) {
            return t.Object._deepSaveAsync(e, null, n);
          }, t.Object.fetchAll = function (t, e) {
            return h.default.resolve().then(function () {
              return v("batch", null, null, "POST", {
                requests: d.map(t, function (t) {
                  if (!t.className) throw new Error("object must have className to fetch");
                  if (!t.id) throw new Error("object must have id to fetch");
                  if (t.dirty()) throw new Error("object is modified but not saved");
                  return {
                    method: "GET",
                    path: "/1.1/classes/" + t.className + "/" + t.id
                  };
                })
              }, e);
            }).then(function (e) {
              var n = d.map(t, function (t, n) {
                if (e[n].success) {
                  var r = t.parse(e[n].success);
                  return t._cleanupUnsetKeys(r), t._finishFetch(r), t;
                }

                return null === e[n].success ? new p(p.OBJECT_NOT_FOUND, "Object not found.") : new p(e[n].error.code, e[n].error.error);
              });
              return T(n);
            });
          }, d.extend(t.Object.prototype, t.Events, {
            _fetchWhenSave: !1,
            initialize: function () {},
            fetchWhenSave: function (t) {
              if (console.warn("AV.Object#fetchWhenSave is deprecated, use AV.Object#save with options.fetchWhenSave instead."), !d.isBoolean(t)) throw new Error("Expect boolean value for fetchWhenSave");
              this._fetchWhenSave = t;
            },
            getObjectId: function () {
              return this.id;
            },
            getCreatedAt: function () {
              return this.createdAt;
            },
            getUpdatedAt: function () {
              return this.updatedAt;
            },
            toJSON: function (t, e) {
              var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
              return this._toFullJSON(n, !1);
            },
            toFullJSON: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
              return this._toFullJSON(t);
            },
            _toFullJSON: function (e) {
              var n = this,
                  r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                  i = d.clone(this.attributes);
              if (d.isArray(e)) var o = e.concat(this);
              return t._objectEach(i, function (e, n) {
                i[n] = t._encode(e, o, void 0, r);
              }), t._objectEach(this._operations, function (t, e) {
                i[e] = t;
              }), d.has(this, "id") && (i.objectId = this.id), d(["createdAt", "updatedAt"]).each(function (t) {
                if (d.has(n, t)) {
                  var e = n[t];
                  i[t] = d.isDate(e) ? e.toJSON() : e;
                }
              }), r && (i.__type = "Object", d.isArray(e) && e.length && (i.__type = "Pointer"), i.className = this.className), i;
            },
            _refreshCache: function () {
              var e = this;
              e._refreshingCache || (e._refreshingCache = !0, t._objectEach(this.attributes, function (n, r) {
                n instanceof t.Object ? n._refreshCache() : d.isObject(n) && e._resetCacheForKey(r) && e.set(r, new t.Op.Set(n), {
                  silent: !0
                });
              }), delete e._refreshingCache);
            },
            dirty: function (t) {
              this._refreshCache();

              var e = d.last(this._opSetQueue);
              return t ? !!e[t] : !this.id || d.keys(e).length > 0;
            },
            dirtyKeys: function () {
              this._refreshCache();

              var t = d.last(this._opSetQueue);
              return d.keys(t);
            },
            _toPointer: function () {
              return {
                __type: "Pointer",
                className: this.className,
                objectId: this.id
              };
            },
            get: function (t) {
              switch (t) {
                case "objectId":
                  return this.id;

                case "createdAt":
                case "updatedAt":
                  return this[t];

                default:
                  return this.attributes[t];
              }
            },
            relation: function (e) {
              var n = this.get(e);

              if (n) {
                if (!(n instanceof t.Relation)) throw new Error("Called relation() on non-relation field " + e);
                return n._ensureParentAndKey(this, e), n;
              }

              return new t.Relation(this, e);
            },
            escape: function (t) {
              var e = this._escapedAttributes[t];
              if (e) return e;
              var n,
                  r = this.attributes[t];
              return n = m(r) ? "" : d.escape(r.toString()), this._escapedAttributes[t] = n, n;
            },
            has: function (t) {
              return !m(this.attributes[t]);
            },
            _mergeMagicFields: function (e) {
              var n = this,
                  r = ["objectId", "createdAt", "updatedAt"];
              return t._arrayEach(r, function (r) {
                e[r] && ("objectId" === r ? n.id = e[r] : "createdAt" !== r && "updatedAt" !== r || d.isDate(e[r]) ? n[r] = e[r] : n[r] = t._parseDate(e[r]), delete e[r]);
              }), e;
            },
            _startSave: function () {
              this._opSetQueue.push({});
            },
            _cancelSave: function () {
              var e = d.first(this._opSetQueue);
              this._opSetQueue = d.rest(this._opSetQueue);
              var n = d.first(this._opSetQueue);
              t._objectEach(e, function (t, r) {
                var i = e[r],
                    o = n[r];
                i && o ? n[r] = o._mergeWithPrevious(i) : i && (n[r] = i);
              }), this._saving = this._saving - 1;
            },
            _finishSave: function (e) {
              var n = {};

              t._traverse(this.attributes, function (e) {
                e instanceof t.Object && e.id && e._hasData && (n[e.id] = e);
              });

              var r = d.first(this._opSetQueue);
              this._opSetQueue = d.rest(this._opSetQueue), this._applyOpSet(r, this._serverData), this._mergeMagicFields(e);
              var i = this;
              t._objectEach(e, function (e, r) {
                i._serverData[r] = t._decode(e, r);

                var o = t._traverse(i._serverData[r], function (e) {
                  if (e instanceof t.Object && n[e.id]) return n[e.id];
                });

                o && (i._serverData[r] = o);
              }), this._rebuildAllEstimatedData();

              var o = this._opSetQueue.map(d.clone);

              this._refreshCache(), this._opSetQueue = o, this._saving = this._saving - 1;
            },
            _finishFetch: function (e, n) {
              this._opSetQueue = [{}], this._mergeMagicFields(e);
              var r = this;
              t._objectEach(e, function (e, n) {
                r._serverData[n] = t._decode(e, n);
              }), this._rebuildAllEstimatedData(), this._refreshCache(), this._opSetQueue = [{}], this._hasData = n;
            },
            _applyOpSet: function (e, n) {
              var r = this;

              t._objectEach(e, function (e, i) {
                var o = O(n, i),
                    s = (0, l.default)(o, 3),
                    a = s[0],
                    u = s[1],
                    c = s[2];
                w(n, i, e._estimate(a, r, i)), u && u[c] === t.Op._UNSET && delete u[c];
              });
            },
            _resetCacheForKey: function (e) {
              var n = this.attributes[e];

              if (d.isObject(n) && !(n instanceof t.Object) && !(n instanceof t.File)) {
                var r = (0, u.default)(E(n));

                if (this._hashedJSON[e] !== r) {
                  var i = !!this._hashedJSON[e];
                  return this._hashedJSON[e] = r, i;
                }
              }

              return !1;
            },
            _rebuildEstimatedDataForKey: function (e) {
              var n = this;
              delete this.attributes[e], this._serverData[e] && (this.attributes[e] = this._serverData[e]), t._arrayEach(this._opSetQueue, function (r) {
                var i = r[e];

                if (i) {
                  var o = O(n.attributes, e),
                      s = (0, l.default)(o, 4),
                      a = s[0],
                      u = s[1],
                      c = s[2],
                      f = s[3];
                  w(n.attributes, e, i._estimate(a, n, e)), u && u[c] === t.Op._UNSET && delete u[c], n._resetCacheForKey(f);
                }
              });
            },
            _rebuildAllEstimatedData: function () {
              var e = this,
                  n = d.clone(this.attributes);
              this.attributes = d.clone(this._serverData), t._arrayEach(this._opSetQueue, function (n) {
                e._applyOpSet(n, e.attributes), t._objectEach(n, function (t, n) {
                  e._resetCacheForKey(n);
                });
              }), t._objectEach(n, function (t, n) {
                e.attributes[n] !== t && e.trigger("change:" + n, e, e.attributes[n], {});
              }), t._objectEach(this.attributes, function (t, r) {
                d.has(n, r) || e.trigger("change:" + r, e, t, {});
              });
            },
            set: function (e, n, r) {
              var i;
              if (d.isObject(e) || m(e) ? (i = d.mapObject(e, function (e, n) {
                return x(n), t._decode(e, n);
              }), r = n) : (i = {}, x(e), i[e] = t._decode(n, e)), r = r || {}, !i) return this;
              i instanceof t.Object && (i = i.attributes), r.unset && t._objectEach(i, function (e, n) {
                i[n] = new t.Op.Unset();
              });
              var o = d.clone(i),
                  s = this;
              t._objectEach(o, function (e, n) {
                e instanceof t.Op && (o[n] = e._estimate(s.attributes[n], s, n), o[n] === t.Op._UNSET && delete o[n]);
              }), this._validate(i, r), r.changes = {};
              var a = this._escapedAttributes;
              return t._arrayEach(d.keys(i), function (e) {
                var n = i[e];
                n instanceof t.Relation && (n.parent = s), n instanceof t.Op || (n = new t.Op.Set(n));
                var o = !0;
                n instanceof t.Op.Set && d.isEqual(s.attributes[e], n.value) && (o = !1), o && (delete a[e], r.silent ? s._silent[e] = !0 : r.changes[e] = !0);
                var u = d.last(s._opSetQueue);
                u[e] = n._mergeWithPrevious(u[e]), s._rebuildEstimatedDataForKey(e), o ? (s.changed[e] = s.attributes[e], r.silent || (s._pending[e] = !0)) : (delete s.changed[e], delete s._pending[e]);
              }), r.silent || this.change(r), this;
            },
            unset: function (t, e) {
              return e = e || {}, e.unset = !0, this.set(t, null, e);
            },
            increment: function (e, n) {
              return (d.isUndefined(n) || d.isNull(n)) && (n = 1), this.set(e, new t.Op.Increment(n));
            },
            add: function (e, n) {
              return this.set(e, new t.Op.Add(g(n)));
            },
            addUnique: function (e, n) {
              return this.set(e, new t.Op.AddUnique(g(n)));
            },
            remove: function (e, n) {
              return this.set(e, new t.Op.Remove(g(n)));
            },
            bitAnd: function (e, n) {
              return this.set(e, new t.Op.BitAnd(n));
            },
            bitOr: function (e, n) {
              return this.set(e, new t.Op.BitOr(n));
            },
            bitXor: function (e, n) {
              return this.set(e, new t.Op.BitXor(n));
            },
            op: function (t) {
              return d.last(this._opSetQueue)[t];
            },
            clear: function (t) {
              t = t || {}, t.unset = !0;
              var e = d.extend(this.attributes, this._operations);
              return this.set(e, t);
            },
            revert: function (t) {
              var e = d.last(this._opSetQueue);
              return g(t || d.keys(e)).forEach(function (t) {
                delete e[t];
              }), this._rebuildAllEstimatedData(), this;
            },
            _getSaveJSON: function () {
              var e = d.clone(d.first(this._opSetQueue));
              return t._objectEach(e, function (t, n) {
                e[n] = t.toJSON();
              }), e;
            },
            _canBeSerialized: function () {
              return t.Object._canBeSerializedAsValue(this.attributes);
            },
            fetch: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  e = arguments[1],
                  n = this;
              return v("classes", this.className, this.id, "GET", b(t), e).then(function (e) {
                var r = n.parse(e);
                return n._cleanupUnsetKeys(r, t.keys ? g(t.keys).join(",").split(",") : void 0), n._finishFetch(r, !0), n;
              });
            },
            _cleanupUnsetKeys: function (t) {
              var e = this,
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.keys(this._serverData);
              d.forEach(n, function (n) {
                void 0 === t[n] && delete e._serverData[n];
              });
            },
            save: function (e, n, r) {
              var i, o, s;
              d.isObject(e) || m(e) ? (i = e, s = n) : (i = {}, i[e] = n, s = r), s = d.clone(s) || {}, s.wait && (o = d.clone(this.attributes));
              var a = d.clone(s) || {};
              a.wait && (a.silent = !0), i && this.set(i, a);
              var u = this,
                  c = [],
                  l = [];
              return t.Object._findUnsavedChildren(u, c, l), c.length + l.length > 1 ? t.Object._deepSaveAsync(this, u, s) : (this._startSave(), this._saving = (this._saving || 0) + 1, this._allPreviousSaves = this._allPreviousSaves || h.default.resolve(), this._allPreviousSaves = this._allPreviousSaves.catch(function (t) {}).then(function () {
                var t = u.id ? "PUT" : "POST",
                    e = u._getSaveJSON(),
                    n = {};

                if ((u._fetchWhenSave || s.fetchWhenSave) && (n.new = "true"), s._failOnNotExist && (n.failOnNotExist = "true"), s.query) {
                  var r;

                  if ("function" == typeof s.query._getParams && (r = s.query._getParams()) && (n.where = r.where), !n.where) {
                    throw new Error("options.query is not an AV.Query");
                  }
                }

                d.extend(e, u._flags);
                var c = "classes",
                    l = u.className;
                "_User" !== u.className || u.id || (c = "users", l = null);
                var f = s._makeRequest || v,
                    h = f(c, l, u.id, t, e, s, n);
                return h = h.then(function (t) {
                  var e = u.parse(t);
                  return s.wait && (e = d.extend(i || {}, e)), u._finishSave(e), s.wait && u.set(o, a), u;
                }, function (t) {
                  throw u._cancelSave(), t;
                });
              }), this._allPreviousSaves);
            },
            destroy: function (t) {
              t = t || {};

              var e = this,
                  n = function () {
                e.trigger("destroy", e, e.collection, t);
              };

              return this.id ? (t.wait || n(), v("classes", this.className, this.id, "DELETE", this._flags, t).then(function () {
                return t.wait && n(), e;
              })) : n();
            },
            parse: function (e) {
              var n = d.clone(e);
              return d(["createdAt", "updatedAt"]).each(function (e) {
                n[e] && (n[e] = t._parseDate(n[e]));
              }), n.createdAt && !n.updatedAt && (n.updatedAt = n.createdAt), n;
            },
            clone: function () {
              return new this.constructor(this.attributes);
            },
            isNew: function () {
              return !this.id;
            },
            change: function (e) {
              e = e || {};
              var n = this._changing;
              this._changing = !0;
              var r = this;

              t._objectEach(this._silent, function (t) {
                r._pending[t] = !0;
              });

              var i = d.extend({}, e.changes, this._silent);
              if (this._silent = {}, t._objectEach(i, function (t, n) {
                r.trigger("change:" + n, r, r.get(n), e);
              }), n) return this;

              for (var o = function (t, e) {
                r._pending[e] || r._silent[e] || delete r.changed[e];
              }; !d.isEmpty(this._pending);) this._pending = {}, this.trigger("change", this, e), t._objectEach(this.changed, o), r._previousAttributes = d.clone(this.attributes);

              return this._changing = !1, this;
            },
            previous: function (t) {
              return arguments.length && this._previousAttributes ? this._previousAttributes[t] : null;
            },
            previousAttributes: function () {
              return d.clone(this._previousAttributes);
            },
            isValid: function () {
              try {
                this.validate(this.attributes);
              } catch (t) {
                return !1;
              }

              return !0;
            },
            validate: function (e) {
              if (d.has(e, "ACL") && !(e.ACL instanceof t.ACL)) throw new p(p.OTHER_CAUSE, "ACL must be a AV.ACL.");
            },
            _validate: function (t, e) {
              !e.silent && this.validate && (t = d.extend({}, this.attributes, t), this.validate(t));
            },
            getACL: function () {
              return this.get("ACL");
            },
            setACL: function (t, e) {
              return this.set("ACL", t, e);
            },
            disableBeforeHook: function () {
              this.ignoreHook("beforeSave"), this.ignoreHook("beforeUpdate"), this.ignoreHook("beforeDelete");
            },
            disableAfterHook: function () {
              this.ignoreHook("afterSave"), this.ignoreHook("afterUpdate"), this.ignoreHook("afterDelete");
            },
            ignoreHook: function (e) {
              if (!d.contains(["beforeSave", "afterSave", "beforeUpdate", "afterUpdate", "beforeDelete", "afterDelete"], e)) throw new Error("Unsupported hookName: " + e);
              if (!t.hookKey) throw new Error("ignoreHook required hookKey");
              this._flags.__ignore_hooks || (this._flags.__ignore_hooks = []), this._flags.__ignore_hooks.push(e);
            }
          }), t.Object.createWithoutData = function (e, n, r) {
            var i = void 0;
            if (d.isString(e)) i = t.Object._getSubclass(e);else {
              if (!(e.prototype && e.prototype instanceof t.Object)) throw new Error("class must be a string or a subclass of AV.Object.");
              i = e;
            }
            var o = new i();
            return o.id = n, o._hasData = r, o;
          }, t.Object.destroyAll = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!t || 0 === t.length) return h.default.resolve();
            var n = d.groupBy(t, function (t) {
              return (0, u.default)({
                className: t.className,
                flags: t._flags
              });
            }),
                r = {
              requests: d.map(n, function (t) {
                var e = d.map(t, "id").join(",");
                return {
                  method: "DELETE",
                  path: "/1.1/classes/" + t[0].className + "/" + e,
                  body: t[0]._flags
                };
              })
            };
            return v("batch", null, null, "POST", r, e).then(function (t) {
              var e = d.find(t, function (t) {
                return !t.success;
              });
              if (e) throw new p(e.error.code, e.error.error);
            });
          }, t.Object._getSubclass = function (e) {
            if (!d.isString(e)) throw new Error("AV.Object._getSubclass requires a string argument.");
            var n = t.Object._classMap[e];
            return n || (n = t.Object.extend(e), t.Object._classMap[e] = n), n;
          }, t.Object._create = function (e, n, r) {
            return new (t.Object._getSubclass(e))(n, r);
          }, t.Object._classMap = {}, t.Object._extend = t._extend, t.Object.new = function (e, n) {
            return new t.Object(e, n);
          }, t.Object.extend = function (e, n, r) {
            if (!d.isString(e)) {
              if (e && d.has(e, "className")) return t.Object.extend(e.className, e, n);
              throw new Error("AV.Object.extend's first argument should be the className.");
            }

            "User" === e && (e = "_User");
            var i = null;

            if (d.has(t.Object._classMap, e)) {
              var o = t.Object._classMap[e];
              if (!n && !r) return o;
              i = o._extend(n, r);
            } else n = n || {}, n._className = e, i = this._extend(n, r);

            return i.extend = function (n) {
              if (d.isString(n) || n && d.has(n, "className")) return t.Object.extend.apply(i, arguments);
              var r = [e].concat(d.toArray(arguments));
              return t.Object.extend.apply(i, r);
            }, Object.defineProperty(i, "query", (0, s.default)(t.Object, "query")), i.new = function (t, e) {
              return new i(t, e);
            }, t.Object._classMap[e] = i, i;
          }, Object.defineProperty(t.Object.prototype, "className", {
            get: function () {
              var t = this._className || this.constructor._LCClassName || this.constructor.name;
              return "User" === t ? "_User" : t;
            }
          }), t.Object.register = function (e, n) {
            if (!(e.prototype instanceof t.Object)) throw new Error("registered class is not a subclass of AV.Object");
            var r = n || e.name;
            if (!r.length) throw new Error("registered class must be named");
            n && (e._LCClassName = n), t.Object._classMap[r] = e;
          }, Object.defineProperty(t.Object, "query", {
            get: function () {
              return new t.Query(this.prototype.className);
            }
          }), t.Object._findUnsavedChildren = function (e, n, r) {
            t._traverse(e, function (e) {
              return e instanceof t.Object ? void (e.dirty() && n.push(e)) : e instanceof t.File ? void (e.id || r.push(e)) : void 0;
            });
          }, t.Object._canBeSerializedAsValue = function (e) {
            var n = !0;
            return e instanceof t.Object || e instanceof t.File ? n = !!e.id : d.isArray(e) ? t._arrayEach(e, function (e) {
              t.Object._canBeSerializedAsValue(e) || (n = !1);
            }) : d.isObject(e) && t._objectEach(e, function (e) {
              t.Object._canBeSerializedAsValue(e) || (n = !1);
            }), n;
          }, t.Object._deepSaveAsync = function (e, n, r) {
            var i = [],
                o = [];

            t.Object._findUnsavedChildren(e, i, o);

            var s = h.default.resolve();
            d.each(o, function (t) {
              s = s.then(function () {
                return t.save();
              });
            });
            var a = d.uniq(i),
                u = d.uniq(a);
            return s.then(function () {
              return S(function () {
                return u.length > 0;
              }, function () {
                var e = [],
                    n = [];
                if (t._arrayEach(u, function (t) {
                  if (e.length > 20) return void n.push(t);
                  t._canBeSerialized() ? e.push(t) : n.push(t);
                }), u = n, 0 === e.length) return h.default.reject(new p(p.OTHER_CAUSE, "Tried to save a batch with a cycle."));
                var i = h.default.resolve(d.map(e, function (t) {
                  return t._allPreviousSaves || h.default.resolve();
                })),
                    o = i.then(function () {
                  return v("batch", null, null, "POST", {
                    requests: d.map(e, function (t) {
                      var e = t.id ? "PUT" : "POST",
                          n = t._getSaveJSON();

                      d.extend(n, t._flags);
                      var r = t.className,
                          i = "/classes/" + r;
                      "_User" !== t.className || t.id || (i = "/users");
                      var i = "/1.1" + i;
                      return t.id && (i = i + "/" + t.id), t._startSave(), {
                        method: e,
                        path: i,
                        body: n
                      };
                    })
                  }, r).then(function (t) {
                    var n = d.map(e, function (e, n) {
                      return t[n].success ? (e._finishSave(e.parse(t[n].success)), e) : (e._cancelSave(), new p(t[n].error.code, t[n].error.error));
                    });
                    return T(n);
                  });
                });
                return t._arrayEach(e, function (t) {
                  t._allPreviousSaves = o;
                }), o;
              });
            }).then(function () {
              return e;
            });
          };
        };
      }, function (t, e, n) {
        t.exports = {
          default: n(143),
          __esModule: !0
        };
      }, function (t, e, n) {
        n(144);
        var r = n(1).Object;

        t.exports = function (t, e) {
          return r.getOwnPropertyDescriptor(t, e);
        };
      }, function (t, e, n) {
        var r = n(15),
            i = n(73).f;
        n(47)("getOwnPropertyDescriptor", function () {
          return function (t, e) {
            return i(r(t), e);
          };
        });
      }, function (t, e, n) {

        function r(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }

        e.__esModule = !0;
        var i = n(78),
            o = r(i),
            s = n(148),
            a = r(s);

        e.default = function () {
          function t(t, e) {
            var n = [],
                r = !0,
                i = !1,
                o = void 0;

            try {
              for (var s, u = (0, a.default)(t); !(r = (s = u.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
            } catch (t) {
              i = !0, o = t;
            } finally {
              try {
                !r && u.return && u.return();
              } finally {
                if (i) throw o;
              }
            }

            return n;
          }

          return function (e, n) {
            if (Array.isArray(e)) return e;
            if ((0, o.default)(Object(e))) return t(e, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        }();
      }, function (t, e, n) {
        n(33), n(20), t.exports = n(147);
      }, function (t, e, n) {
        var r = n(44),
            i = n(4)("iterator"),
            o = n(17);

        t.exports = n(1).isIterable = function (t) {
          var e = Object(t);
          return void 0 !== e[i] || "@@iterator" in e || o.hasOwnProperty(r(e));
        };
      }, function (t, e, n) {
        t.exports = {
          default: n(149),
          __esModule: !0
        };
      }, function (t, e, n) {
        n(33), n(20), t.exports = n(150);
      }, function (t, e, n) {
        var r = n(8),
            i = n(45);

        t.exports = n(1).getIterator = function (t) {
          var e = i(t);
          if ("function" != typeof e) throw TypeError(t + " is not iterable!");
          return r(e.call(t));
        };
      }, function (t, e, n) {

        var r = n(0),
            i = n(16);

        t.exports = function (t) {
          t.Role = t.Object.extend("_Role", {
            constructor: function (e, n) {
              if (r.isString(e) ? (t.Object.prototype.constructor.call(this, null, null), this.setName(e)) : t.Object.prototype.constructor.call(this, e, n), n) {
                if (!(n instanceof t.ACL)) throw new TypeError("acl must be an instance of AV.ACL");
                this.setACL(n);
              }
            },
            getName: function () {
              return this.get("name");
            },
            setName: function (t, e) {
              return this.set("name", t, e);
            },
            getUsers: function () {
              return this.relation("users");
            },
            getRoles: function () {
              return this.relation("roles");
            },
            validate: function (e, n) {
              if ("name" in e && e.name !== this.getName()) {
                var o = e.name;
                if (this.id && this.id !== e.objectId) return new i(i.OTHER_CAUSE, "A role's name can only be set before it has been saved.");
                if (!r.isString(o)) return new i(i.OTHER_CAUSE, "A role's name must be a String.");
                if (!/^[0-9a-zA-Z\-_ ]+$/.test(o)) return new i(i.OTHER_CAUSE, "A role's name can only contain alphanumeric characters, _, -, and spaces.");
              }

              return !!t.Object.prototype.validate && t.Object.prototype.validate.call(this, e, n);
            }
          });
        };
      }, function (t, e, n) {

        function r(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }

        var i = n(9),
            o = r(i),
            s = n(153),
            a = r(s),
            u = n(2),
            c = r(u),
            l = n(0),
            f = n(68),
            h = n(16),
            d = n(6),
            p = d._request,
            _ = d.request,
            v = function () {
          if ("undefined" == typeof wx || "function" != typeof wx.login) throw new Error("wx.login is not a function（当前平台不支持一键登录）");
          return new c.default(function (t, e) {
            wx.login({
              success: function (n) {
                var r = n.code,
                    i = n.errMsg;
                r ? t(r) : e(new Error(i));
              },
              fail: function () {
                return e(new Error("login 失败"));
              }
            });
          });
        },
            y = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "weixin";
          return function (e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = n.preferUnionId,
                i = n.unionIdPlatform,
                o = void 0 === i ? t : i,
                s = n.asMainAccount,
                a = void 0 === s || s;
            return r ? {
              platform: o,
              main_account: a,
              code: e
            } : {
              code: e
            };
          };
        },
            m = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "weixin";
          return function (e, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = r.unionIdPlatform,
                o = void 0 === i ? t : i,
                s = r.asMainAccount,
                a = void 0 !== s && s;
            if ("string" != typeof n) throw new h(h.OTHER_CAUSE, "unionId is not a string");
            if ("string" != typeof o) throw new h(h.OTHER_CAUSE, "unionIdPlatform is not a string");
            return l.extend({}, e, {
              platform: o,
              unionid: n,
              main_account: Boolean(a)
            });
          };
        };

        t.exports = function (t) {
          t.User = t.Object.extend("_User", {
            _isCurrentUser: !1,
            _mergeMagicFields: function (e) {
              return e.sessionToken && (this._sessionToken = e.sessionToken, delete e.sessionToken), t.User.__super__._mergeMagicFields.call(this, e);
            },
            _cleanupAuthData: function () {
              if (this.isCurrent()) {
                var e = this.get("authData");
                e && t._objectEach(this.get("authData"), function (t, n) {
                  e[n] || delete e[n];
                });
              }
            },
            _synchronizeAllAuthData: function () {
              if (this.get("authData")) {
                var e = this;

                t._objectEach(this.get("authData"), function (t, n) {
                  e._synchronizeAuthData(n);
                });
              }
            },
            _synchronizeAuthData: function (e) {
              if (this.isCurrent()) {
                var n;
                l.isString(e) ? (n = e, e = t.User._authProviders[n]) : n = e.getAuthType();
                var r = this.get("authData");

                if (r && e) {
                  e.restoreAuthentication(r[n]) || this.dissociateAuthData(e);
                }
              }
            },
            _handleSaveResult: function (e) {
              return e && !t._config.disableCurrentUser && (this._isCurrentUser = !0), this._cleanupAuthData(), this._synchronizeAllAuthData(), delete this._serverData.password, this._rebuildEstimatedDataForKey("password"), this._refreshCache(), !e && !this.isCurrent() || t._config.disableCurrentUser ? c.default.resolve() : c.default.resolve(t.User._saveCurrentUser(this));
            },
            _linkWith: function (e, n) {
              var r,
                  i = this,
                  o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  s = o.failOnNotExist,
                  u = void 0 !== s && s;
              return l.isString(e) ? (r = e, e = t.User._authProviders[e]) : r = e.getAuthType(), n ? this.save({
                authData: (0, a.default)({}, r, n)
              }, {
                fetchWhenSave: !!this.get("authData"),
                _failOnNotExist: u
              }).then(function (t) {
                return t._handleSaveResult(!0).then(function () {
                  return t;
                });
              }) : e.authenticate().then(function (t) {
                return i._linkWith(e, t);
              });
            },
            associateWithAuthData: function (t, e) {
              return this._linkWith(e, t);
            },
            associateWithAuthDataAndUnionId: function (t, e, n, r) {
              return this._linkWith(e, m()(t, n, r));
            },
            associateWithQQApp: function (t) {
              var e = this;
              return v().then(function (n) {
                return e._linkWith("lc_qqapp", y("qq")(n, t));
              });
            },
            associateWithWeapp: function (t) {
              var e = this;
              return v().then(function (n) {
                return e._linkWith("lc_weapp", y()(n, t));
              });
            },
            linkWithWeapp: function (t) {
              return console.warn("DEPRECATED: User#linkWithWeapp 已废弃，请使用 User#associateWithWeapp 代替"), this.associateWithWeapp(t);
            },
            associateWithQQAppWithUnionId: function (t, e) {
              var n = this;
              return v().then(function (r) {
                return n._linkWith("lc_qqapp", m("qq")({
                  code: r
                }, t, e));
              });
            },
            associateWithWeappWithUnionId: function (t, e) {
              var n = this;
              return v().then(function (r) {
                return n._linkWith("lc_weapp", m()({
                  code: r
                }, t, e));
              });
            },
            dissociateAuthData: function (t) {
              return this.unset("authData." + t), this.save().then(function (t) {
                return t._handleSaveResult(!0).then(function () {
                  return t;
                });
              });
            },
            _unlinkFrom: function (t) {
              return console.warn("DEPRECATED: User#_unlinkFrom 已废弃，请使用 User#dissociateAuthData 代替"), this.dissociateAuthData(t);
            },
            _isLinked: function (t) {
              var e;
              return e = l.isString(t) ? t : t.getAuthType(), !!(this.get("authData") || {})[e];
            },
            isAnonymous: function () {
              return this._isLinked("anonymous");
            },
            logOut: function () {
              this._logOutWithAll(), this._isCurrentUser = !1;
            },
            _logOutWithAll: function () {
              if (this.get("authData")) {
                var e = this;

                t._objectEach(this.get("authData"), function (t, n) {
                  e._logOutWith(n);
                });
              }
            },
            _logOutWith: function (e) {
              this.isCurrent() && (l.isString(e) && (e = t.User._authProviders[e]), e && e.deauthenticate && e.deauthenticate());
            },
            signUp: function (t, e) {
              var n = t && t.username || this.get("username");
              if (!n || "" === n) throw new h(h.OTHER_CAUSE, "Cannot sign up user with an empty name.");
              var r = t && t.password || this.get("password");
              if (!r || "" === r) throw new h(h.OTHER_CAUSE, "Cannot sign up user with an empty password.");
              return this.save(t, e).then(function (t) {
                return t.isAnonymous() && (t.unset("authData.anonymous"), t._opSetQueue = [{}]), t._handleSaveResult(!0).then(function () {
                  return t;
                });
              });
            },
            signUpOrlogInWithMobilePhone: function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  n = t && t.mobilePhoneNumber || this.get("mobilePhoneNumber");
              if (!n || "" === n) throw new h(h.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber with an empty mobilePhoneNumber.");
              var r = t && t.smsCode || this.get("smsCode");
              if (!r || "" === r) throw new h(h.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber  with an empty smsCode.");
              return e._makeRequest = function (t, e, n, r, i) {
                return p("usersByMobilePhone", null, null, "POST", i);
              }, this.save(t, e).then(function (t) {
                return delete t.attributes.smsCode, delete t._serverData.smsCode, t._handleSaveResult(!0).then(function () {
                  return t;
                });
              });
            },
            loginWithAuthData: function (t, e, n) {
              return this._linkWith(e, t, n);
            },
            loginWithAuthDataAndUnionId: function (t, e, n, r) {
              return this.loginWithAuthData(m()(t, n, r), e, r);
            },
            loginWithWeapp: function (t) {
              var e = this;
              return v().then(function (n) {
                return e.loginWithAuthData(y()(n, t), "lc_weapp", t);
              });
            },
            loginWithWeappWithUnionId: function (t, e) {
              var n = this;
              return v().then(function (r) {
                return n.loginWithAuthData(m()({
                  code: r
                }, t, e), "lc_weapp", e);
              });
            },
            loginWithQQApp: function (t) {
              var e = this;
              return v().then(function (n) {
                return e.loginWithAuthData(y("qq")(n, t), "lc_weapp", t);
              });
            },
            loginWithQQAppWithUnionId: function (t, e) {
              var n = this;
              return v().then(function (r) {
                return n.loginWithAuthData(m("qq")({
                  code: r
                }, t, e), "lc_weapp", e);
              });
            },
            logIn: function () {
              var t = this;
              return p("login", null, null, "POST", this.toJSON()).then(function (e) {
                var n = t.parse(e);
                return t._finishFetch(n), t._handleSaveResult(!0).then(function () {
                  return n.smsCode || delete t.attributes.smsCode, t;
                });
              });
            },
            save: function (e, n, r) {
              var i, o;
              return l.isObject(e) || l.isNull(e) || l.isUndefined(e) ? (i = e, o = n) : (i = {}, i[e] = n, o = r), o = o || {}, t.Object.prototype.save.call(this, i, o).then(function (t) {
                return t._handleSaveResult(!1).then(function () {
                  return t;
                });
              });
            },
            follow: function (e, n) {
              if (!this.id) throw new Error("Please signin.");
              var r = void 0,
                  i = void 0;
              e.user ? (r = e.user, i = e.attributes) : r = e;
              var o = l.isString(r) ? r : r.id;
              if (!o) throw new Error("Invalid target user.");
              var s = "users/" + this.id + "/friendship/" + o;
              return p(s, null, null, "POST", t._encode(i), n);
            },
            unfollow: function (t, e) {
              if (!this.id) throw new Error("Please signin.");
              var n = void 0;
              n = t.user ? t.user : t;
              var r = l.isString(n) ? n : n.id;
              if (!r) throw new Error("Invalid target user.");
              var i = "users/" + this.id + "/friendship/" + r;
              return p(i, null, null, "DELETE", null, e);
            },
            followerQuery: function () {
              return t.User.followerQuery(this.id);
            },
            followeeQuery: function () {
              return t.User.followeeQuery(this.id);
            },
            fetch: function (e, n) {
              return t.Object.prototype.fetch.call(this, e, n).then(function (t) {
                return t._handleSaveResult(!1).then(function () {
                  return t;
                });
              });
            },
            updatePassword: function (t, e, n) {
              var r = "users/" + this.id + "/updatePassword";
              return p(r, null, null, "PUT", {
                old_password: t,
                new_password: e
              }, n);
            },
            isCurrent: function () {
              return this._isCurrentUser;
            },
            getUsername: function () {
              return this.get("username");
            },
            getMobilePhoneNumber: function () {
              return this.get("mobilePhoneNumber");
            },
            setMobilePhoneNumber: function (t, e) {
              return this.set("mobilePhoneNumber", t, e);
            },
            setUsername: function (t, e) {
              return this.set("username", t, e);
            },
            setPassword: function (t, e) {
              return this.set("password", t, e);
            },
            getEmail: function () {
              return this.get("email");
            },
            setEmail: function (t, e) {
              return this.set("email", t, e);
            },
            authenticated: function () {
              return console.warn("DEPRECATED: 如果要判断当前用户的登录状态是否有效，请使用 currentUser.isAuthenticated().then()，如果要判断该用户是否是当前登录用户，请使用 user.id === currentUser.id。"), !!this._sessionToken && !t._config.disableCurrentUser && t.User.current() && t.User.current().id === this.id;
            },
            isAuthenticated: function () {
              var e = this;
              return c.default.resolve().then(function () {
                return !!e._sessionToken && t.User._fetchUserBySessionToken(e._sessionToken).then(function () {
                  return !0;
                }, function (t) {
                  if (211 === t.code) return !1;
                  throw t;
                });
              });
            },
            getSessionToken: function () {
              return this._sessionToken;
            },
            refreshSessionToken: function (t) {
              var e = this;
              return p("users/" + this.id + "/refreshSessionToken", null, null, "PUT", null, t).then(function (t) {
                return e._finishFetch(t), e._handleSaveResult(!0).then(function () {
                  return e;
                });
              });
            },
            getRoles: function (e) {
              return t.Relation.reverseQuery("_Role", "users", this).find(e);
            }
          }, {
            _currentUser: null,
            _currentUserMatchesDisk: !1,
            _CURRENT_USER_KEY: "currentUser",
            _authProviders: {},
            signUp: function (e, n, r, i) {
              return r = r || {}, r.username = e, r.password = n, t.Object._create("_User").signUp(r, i);
            },
            logIn: function (e, n) {
              var r = t.Object._create("_User");

              return r._finishFetch({
                username: e,
                password: n
              }), r.logIn();
            },
            become: function (t) {
              return this._fetchUserBySessionToken(t).then(function (t) {
                return t._handleSaveResult(!0).then(function () {
                  return t;
                });
              });
            },
            _fetchUserBySessionToken: function (e) {
              var n = t.Object._create("_User");

              return _({
                method: "GET",
                path: "/users/me",
                authOptions: {
                  sessionToken: e
                }
              }).then(function (t) {
                var e = n.parse(t);
                return n._finishFetch(e), n;
              });
            },
            logInWithMobilePhoneSmsCode: function (e, n) {
              var r = t.Object._create("_User");

              return r._finishFetch({
                mobilePhoneNumber: e,
                smsCode: n
              }), r.logIn();
            },
            signUpOrlogInWithMobilePhone: function (e, n, r, i) {
              return r = r || {}, r.mobilePhoneNumber = e, r.smsCode = n, t.Object._create("_User").signUpOrlogInWithMobilePhone(r, i);
            },
            logInWithMobilePhone: function (e, n) {
              var r = t.Object._create("_User");

              return r._finishFetch({
                mobilePhoneNumber: e,
                password: n
              }), r.logIn();
            },
            loginWithEmail: function (e, n) {
              var r = t.Object._create("_User");

              return r._finishFetch({
                email: e,
                password: n
              }), r.logIn();
            },
            loginWithAuthData: function (e, n, r) {
              return t.User._logInWith(n, e, r);
            },
            signUpOrlogInWithAuthData: function () {
              return console.warn("DEPRECATED: User.signUpOrlogInWithAuthData 已废弃，请使用 User#loginWithAuthData 代替"), this.loginWithAuthData.apply(this, arguments);
            },
            loginWithAuthDataAndUnionId: function (t, e, n, r) {
              return this.loginWithAuthData(m()(t, n, r), e, r);
            },
            signUpOrlogInWithAuthDataAndUnionId: function () {
              return console.warn("DEPRECATED: User.signUpOrlogInWithAuthDataAndUnionId 已废弃，请使用 User#loginWithAuthDataAndUnionId 代替"), this.loginWithAuthDataAndUnionId.apply(this, arguments);
            },
            loginWithWeapp: function (t) {
              var e = this;
              return v().then(function (n) {
                return e.loginWithAuthData(y()(n, t), "lc_weapp", t);
              });
            },
            loginWithWeappWithUnionId: function (t, e) {
              var n = this;
              return v().then(function (r) {
                return n.loginWithAuthData(m()({
                  code: r
                }, t, e), "lc_weapp", e);
              });
            },
            loginWithQQApp: function (t) {
              var e = this;
              return v().then(function (n) {
                return e.loginWithAuthData(y("qq")(n, t), "lc_qqapp", t);
              });
            },
            loginWithQQAppWithUnionId: function (t, e) {
              var n = this;
              return v().then(function (r) {
                return n.loginWithAuthData(m("qq")({
                  code: r
                }, t, e), "lc_qqapp", e);
              });
            },
            _genId: function () {
              return f();
            },
            loginAnonymously: function () {
              return this.loginWithAuthData({
                id: t.User._genId()
              }, "anonymous");
            },
            associateWithAuthData: function (t, e, n) {
              return console.warn("DEPRECATED: User.associateWithAuthData 已废弃，请使用 User#associateWithAuthData 代替"), t._linkWith(e, n);
            },
            logOut: function () {
              return t._config.disableCurrentUser ? (console.warn("AV.User.current() was disabled in multi-user environment, call logOut() from user object instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), c.default.resolve(null)) : (null !== t.User._currentUser && (t.User._currentUser._logOutWithAll(), t.User._currentUser._isCurrentUser = !1), t.User._currentUserMatchesDisk = !0, t.User._currentUser = null, t.localStorage.removeItemAsync(t._getAVPath(t.User._CURRENT_USER_KEY)).then(function () {
                return t._refreshSubscriptionId();
              }));
            },
            followerQuery: function (e) {
              if (!e || !l.isString(e)) throw new Error("Invalid user object id.");
              var n = new t.FriendShipQuery("_Follower");
              return n._friendshipTag = "follower", n.equalTo("user", t.Object.createWithoutData("_User", e)), n;
            },
            followeeQuery: function (e) {
              if (!e || !l.isString(e)) throw new Error("Invalid user object id.");
              var n = new t.FriendShipQuery("_Followee");
              return n._friendshipTag = "followee", n.equalTo("user", t.Object.createWithoutData("_User", e)), n;
            },
            requestPasswordReset: function (t) {
              return p("requestPasswordReset", null, null, "POST", {
                email: t
              });
            },
            requestEmailVerify: function (t) {
              return p("requestEmailVerify", null, null, "POST", {
                email: t
              });
            },
            requestMobilePhoneVerify: function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  n = {
                mobilePhoneNumber: t
              };
              return e.validateToken && (n.validate_token = e.validateToken), p("requestMobilePhoneVerify", null, null, "POST", n, e);
            },
            requestPasswordResetBySmsCode: function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  n = {
                mobilePhoneNumber: t
              };
              return e.validateToken && (n.validate_token = e.validateToken), p("requestPasswordResetBySmsCode", null, null, "POST", n, e);
            },
            resetPasswordBySmsCode: function (t, e) {
              return p("resetPasswordBySmsCode", null, t, "PUT", {
                password: e
              });
            },
            verifyMobilePhone: function (t) {
              return p("verifyMobilePhone", null, t, "POST", null);
            },
            requestLoginSmsCode: function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  n = {
                mobilePhoneNumber: t
              };
              return e.validateToken && (n.validate_token = e.validateToken), p("requestLoginSmsCode", null, null, "POST", n, e);
            },
            currentAsync: function () {
              return t._config.disableCurrentUser ? (console.warn("AV.User.currentAsync() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), c.default.resolve(null)) : t.User._currentUser ? c.default.resolve(t.User._currentUser) : t.User._currentUserMatchesDisk ? c.default.resolve(t.User._currentUser) : t.localStorage.getItemAsync(t._getAVPath(t.User._CURRENT_USER_KEY)).then(function (e) {
                if (!e) return null;
                t.User._currentUserMatchesDisk = !0, t.User._currentUser = t.Object._create("_User"), t.User._currentUser._isCurrentUser = !0;
                var n = JSON.parse(e);
                return t.User._currentUser.id = n._id, delete n._id, t.User._currentUser._sessionToken = n._sessionToken, delete n._sessionToken, t.User._currentUser._finishFetch(n), t.User._currentUser._synchronizeAllAuthData(), t.User._currentUser._refreshCache(), t.User._currentUser._opSetQueue = [{}], t.User._currentUser;
              });
            },
            current: function () {
              if (t._config.disableCurrentUser) return console.warn("AV.User.current() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), null;

              if (t.localStorage.async) {
                var e = new Error("Synchronous API User.current() is not available in this runtime. Use User.currentAsync() instead.");
                throw e.code = "SYNC_API_NOT_AVAILABLE", e;
              }

              if (t.User._currentUser) return t.User._currentUser;
              if (t.User._currentUserMatchesDisk) return t.User._currentUser;
              t.User._currentUserMatchesDisk = !0;
              var n = t.localStorage.getItem(t._getAVPath(t.User._CURRENT_USER_KEY));
              if (!n) return null;
              t.User._currentUser = t.Object._create("_User"), t.User._currentUser._isCurrentUser = !0;
              var r = JSON.parse(n);
              return t.User._currentUser.id = r._id, delete r._id, t.User._currentUser._sessionToken = r._sessionToken, delete r._sessionToken, t.User._currentUser._finishFetch(r), t.User._currentUser._synchronizeAllAuthData(), t.User._currentUser._refreshCache(), t.User._currentUser._opSetQueue = [{}], t.User._currentUser;
            },
            _saveCurrentUser: function (e) {
              var n;
              return n = t.User._currentUser !== e ? t.User.logOut() : c.default.resolve(), n.then(function () {
                e._isCurrentUser = !0, t.User._currentUser = e;

                var n = e._toFullJSON();

                return n._id = e.id, n._sessionToken = e._sessionToken, t.localStorage.setItemAsync(t._getAVPath(t.User._CURRENT_USER_KEY), (0, o.default)(n)).then(function () {
                  return t.User._currentUserMatchesDisk = !0, t._refreshSubscriptionId();
                });
              });
            },
            _registerAuthenticationProvider: function (e) {
              t.User._authProviders[e.getAuthType()] = e, !t._config.disableCurrentUser && t.User.current() && t.User.current()._synchronizeAuthData(e.getAuthType());
            },
            _logInWith: function (e, n, r) {
              return t.Object._create("_User")._linkWith(e, n, r);
            }
          });
        };
      }, function (t, e, n) {

        e.__esModule = !0;

        var r = n(76),
            i = function (t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }(r);

        e.default = function (t, e, n) {
          return e in t ? (0, i.default)(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : t[e] = n, t;
        };
      }, function (t, e, n) {

        function r(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }

        var i = n(9),
            o = r(i),
            s = n(2),
            a = r(s),
            u = n(0),
            c = n(19)("leancloud:query"),
            l = n(16),
            f = n(6),
            h = f._request,
            d = f.request,
            p = n(5),
            _ = p.ensureArray,
            v = p.transformFetchOptions,
            y = p.continueWhile,
            m = function (t, e) {
          if (void 0 === t) throw new Error(e);
        };

        t.exports = function (t) {
          t.Query = function (e) {
            u.isString(e) && (e = t.Object._getSubclass(e)), this.objectClass = e, this.className = e.prototype.className, this._where = {}, this._include = [], this._select = [], this._limit = -1, this._skip = 0, this._defaultParams = {};
          }, t.Query.or = function () {
            var e = u.toArray(arguments),
                n = null;

            t._arrayEach(e, function (t) {
              if (u.isNull(n) && (n = t.className), n !== t.className) throw new Error("All queries must be for the same class");
            });

            var r = new t.Query(n);
            return r._orQuery(e), r;
          }, t.Query.and = function () {
            var e = u.toArray(arguments),
                n = null;

            t._arrayEach(e, function (t) {
              if (u.isNull(n) && (n = t.className), n !== t.className) throw new Error("All queries must be for the same class");
            });

            var r = new t.Query(n);
            return r._andQuery(e), r;
          }, t.Query.doCloudQuery = function (e, n, r) {
            var i = {
              cql: e
            };
            return u.isArray(n) ? i.pvalues = n : r = n, h("cloudQuery", null, null, "GET", i, r).then(function (e) {
              var n = new t.Query(e.className);
              return {
                results: u.map(e.results, function (t) {
                  var r = n._newObject(e);

                  return r._finishFetch && r._finishFetch(n._processResult(t), !0), r;
                }),
                count: e.count,
                className: e.className
              };
            });
          }, t.Query.fromJSON = function (e) {
            var n = e.className,
                r = e.where,
                i = e.include,
                o = e.select,
                s = e.includeACL,
                a = e.limit,
                c = e.skip,
                l = e.order;
            if ("string" != typeof n) throw new TypeError("Invalid Query JSON, className must be a String.");
            var f = new t.Query(n);
            return u.extend(f, {
              _where: r,
              _include: i,
              _select: o,
              _includeACL: s,
              _limit: a,
              _skip: c,
              _order: l
            }), f;
          }, t.Query._extend = t._extend, u.extend(t.Query.prototype, {
            _processResult: function (t) {
              return t;
            },
            get: function (t, e) {
              if (!u.isString(t)) throw new Error("objectId must be a string");
              if ("" === t) return a.default.reject(new l(l.OBJECT_NOT_FOUND, "Object not found."));

              var n = this._newObject();

              n.id = t;

              var r = this._getParams(),
                  i = {};

              return r.keys && (i.keys = r.keys), r.include && (i.include = r.include), r.includeACL && (i.includeACL = r.includeACL), h("classes", this.className, t, "GET", v(i), e).then(function (t) {
                if (u.isEmpty(t)) throw new l(l.OBJECT_NOT_FOUND, "Object not found.");
                return n._finishFetch(n.parse(t), !0), n;
              });
            },
            toJSON: function () {
              return {
                className: this.className,
                where: this._where,
                include: this._include,
                select: this._select,
                includeACL: this._includeACL,
                limit: this._limit,
                skip: this._skip,
                order: this._order
              };
            },
            _getParams: function () {
              var t = u.extend({}, this._defaultParams, {
                where: this._where
              });
              return this._include.length > 0 && (t.include = this._include.join(",")), this._select.length > 0 && (t.keys = this._select.join(",")), void 0 !== this._includeACL && (t.returnACL = this._includeACL), this._limit >= 0 && (t.limit = this._limit), this._skip > 0 && (t.skip = this._skip), void 0 !== this._order && (t.order = this._order), t;
            },
            _newObject: function (e) {
              return e && e.className ? new t.Object(e.className) : new this.objectClass();
            },
            _createRequest: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._getParams(),
                  e = arguments[1],
                  n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/classes/" + this.className;

              if (encodeURIComponent((0, o.default)(t)).length > 2e3) {
                return d({
                  path: "/batch",
                  method: "POST",
                  data: {
                    requests: [{
                      method: "GET",
                      path: "/1.1" + n,
                      params: t
                    }]
                  },
                  authOptions: e
                }).then(function (t) {
                  var e = t[0];
                  if (e.success) return e.success;
                  var n = new Error(e.error.error || "Unknown batch error");
                  throw n.code = e.error.code, n;
                });
              }

              return d({
                method: "GET",
                path: n,
                query: t,
                authOptions: e
              });
            },
            _parseResponse: function (t) {
              var e = this;
              return u.map(t.results, function (n) {
                var r = e._newObject(t);

                return r._finishFetch && r._finishFetch(e._processResult(n), !0), r;
              });
            },
            find: function (t) {
              return this._createRequest(void 0, t).then(this._parseResponse.bind(this));
            },
            scan: function () {
              var t = this,
                  e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  n = e.orderedBy,
                  r = e.batchSize,
                  i = arguments[1],
                  o = this._getParams();

              c("scan %O", o), o.order && (console.warn("The order of the query is ignored for Query#scan. Checkout the orderedBy option of Query#scan."), delete o.order), o.skip && (console.warn("The skip option of the query is ignored for Query#scan."), delete o.skip), o.limit && (console.warn("The limit option of the query is ignored for Query#scan."), delete o.limit), n && (o.scan_key = n), r && (o.limit = r);
              var s = a.default.resolve([]),
                  l = void 0,
                  f = !1;
              return {
                next: function () {
                  return s = s.then(function (e) {
                    return f ? [] : e.length > 1 ? e : l || 0 === e.length ? h("scan/classes", t.className, null, "GET", l ? u.extend({}, o, {
                      cursor: l
                    }) : o, i).then(function (e) {
                      return l = e.cursor, t._parseResponse(e);
                    }).then(function (t) {
                      return t.length || (f = !0), e.concat(t);
                    }) : (f = !0, e);
                  }), s.then(function (t) {
                    return t.shift();
                  }).then(function (t) {
                    return {
                      value: t,
                      done: f
                    };
                  });
                }
              };
            },
            destroyAll: function (e) {
              return this.find(e).then(function (n) {
                return t.Object.destroyAll(n, e);
              });
            },
            count: function (t) {
              var e = this._getParams();

              return e.limit = 0, e.count = 1, this._createRequest(e, t).then(function (t) {
                return t.count;
              });
            },
            first: function (t) {
              var e = this,
                  n = this._getParams();

              return n.limit = 1, this._createRequest(n, t).then(function (t) {
                return u.map(t.results, function (t) {
                  var n = e._newObject();

                  return n._finishFetch && n._finishFetch(e._processResult(t), !0), n;
                })[0];
              });
            },
            skip: function (t) {
              return m(t, "undefined is not a valid skip value"), this._skip = t, this;
            },
            limit: function (t) {
              return m(t, "undefined is not a valid limit value"), this._limit = t, this;
            },
            equalTo: function (e, n) {
              return m(e, "undefined is not a valid key"), m(n, "undefined is not a valid value"), this._where[e] = t._encode(n), this;
            },
            _addCondition: function (e, n, r) {
              return m(e, "undefined is not a valid condition key"), m(n, "undefined is not a valid condition"), m(r, "undefined is not a valid condition value"), this._where[e] || (this._where[e] = {}), this._where[e][n] = t._encode(r), this;
            },
            sizeEqualTo: function (t, e) {
              return this._addCondition(t, "$size", e), this;
            },
            notEqualTo: function (t, e) {
              return this._addCondition(t, "$ne", e), this;
            },
            lessThan: function (t, e) {
              return this._addCondition(t, "$lt", e), this;
            },
            greaterThan: function (t, e) {
              return this._addCondition(t, "$gt", e), this;
            },
            lessThanOrEqualTo: function (t, e) {
              return this._addCondition(t, "$lte", e), this;
            },
            greaterThanOrEqualTo: function (t, e) {
              return this._addCondition(t, "$gte", e), this;
            },
            containedIn: function (t, e) {
              return this._addCondition(t, "$in", e), this;
            },
            notContainedIn: function (t, e) {
              return this._addCondition(t, "$nin", e), this;
            },
            containsAll: function (t, e) {
              return this._addCondition(t, "$all", e), this;
            },
            exists: function (t) {
              return this._addCondition(t, "$exists", !0), this;
            },
            doesNotExist: function (t) {
              return this._addCondition(t, "$exists", !1), this;
            },
            matches: function (t, e, n) {
              return this._addCondition(t, "$regex", e), n || (n = ""), e.ignoreCase && (n += "i"), e.multiline && (n += "m"), n && n.length && this._addCondition(t, "$options", n), this;
            },
            matchesQuery: function (t, e) {
              var n = e._getParams();

              return n.className = e.className, this._addCondition(t, "$inQuery", n), this;
            },
            doesNotMatchQuery: function (t, e) {
              var n = e._getParams();

              return n.className = e.className, this._addCondition(t, "$notInQuery", n), this;
            },
            matchesKeyInQuery: function (t, e, n) {
              var r = n._getParams();

              return r.className = n.className, this._addCondition(t, "$select", {
                key: e,
                query: r
              }), this;
            },
            doesNotMatchKeyInQuery: function (t, e, n) {
              var r = n._getParams();

              return r.className = n.className, this._addCondition(t, "$dontSelect", {
                key: e,
                query: r
              }), this;
            },
            _orQuery: function (t) {
              var e = u.map(t, function (t) {
                return t._getParams().where;
              });
              return this._where.$or = e, this;
            },
            _andQuery: function (t) {
              var e = u.map(t, function (t) {
                return t._getParams().where;
              });
              return this._where.$and = e, this;
            },
            _quote: function (t) {
              return "\\Q" + t.replace("\\E", "\\E\\\\E\\Q") + "\\E";
            },
            contains: function (t, e) {
              return this._addCondition(t, "$regex", this._quote(e)), this;
            },
            startsWith: function (t, e) {
              return this._addCondition(t, "$regex", "^" + this._quote(e)), this;
            },
            endsWith: function (t, e) {
              return this._addCondition(t, "$regex", this._quote(e) + "$"), this;
            },
            ascending: function (t) {
              return m(t, "undefined is not a valid key"), this._order = t, this;
            },
            addAscending: function (t) {
              return m(t, "undefined is not a valid key"), this._order ? this._order += "," + t : this._order = t, this;
            },
            descending: function (t) {
              return m(t, "undefined is not a valid key"), this._order = "-" + t, this;
            },
            addDescending: function (t) {
              return m(t, "undefined is not a valid key"), this._order ? this._order += ",-" + t : this._order = "-" + t, this;
            },
            near: function (e, n) {
              return n instanceof t.GeoPoint || (n = new t.GeoPoint(n)), this._addCondition(e, "$nearSphere", n), this;
            },
            withinRadians: function (t, e, n) {
              return this.near(t, e), this._addCondition(t, "$maxDistance", n), this;
            },
            withinMiles: function (t, e, n) {
              return this.withinRadians(t, e, n / 3958.8);
            },
            withinKilometers: function (t, e, n) {
              return this.withinRadians(t, e, n / 6371);
            },
            withinGeoBox: function (e, n, r) {
              return n instanceof t.GeoPoint || (n = new t.GeoPoint(n)), r instanceof t.GeoPoint || (r = new t.GeoPoint(r)), this._addCondition(e, "$within", {
                $box: [n, r]
              }), this;
            },
            include: function (t) {
              var e = this;
              return m(t, "undefined is not a valid key"), u.forEach(arguments, function (t) {
                e._include = e._include.concat(_(t));
              }), this;
            },
            includeACL: function () {
              var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              return this._includeACL = t, this;
            },
            select: function (t) {
              var e = this;
              return m(t, "undefined is not a valid key"), u.forEach(arguments, function (t) {
                e._select = e._select.concat(_(t));
              }), this;
            },
            each: function (e) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};

              if (this._order || this._skip || this._limit >= 0) {
                var r = new Error("Cannot iterate on a query with sort, skip, or limit.");
                return a.default.reject(r);
              }

              var i = new t.Query(this.objectClass);
              i._limit = n.batchSize || 100, i._where = u.clone(this._where), i._include = u.clone(this._include), i.ascending("objectId");
              var o = !1;
              return y(function () {
                return !o;
              }, function () {
                return i.find(n).then(function (t) {
                  var n = a.default.resolve();
                  return u.each(t, function (t) {
                    n = n.then(function () {
                      return e(t);
                    });
                  }), n.then(function () {
                    t.length >= i._limit ? i.greaterThan("objectId", t[t.length - 1].id) : o = !0;
                  });
                });
              });
            },
            subscribe: function (e) {
              return t.LiveQuery.init(this, e);
            }
          }), t.FriendShipQuery = t.Query._extend({
            _newObject: function () {
              return new (t.Object._getSubclass("_User"))();
            },
            _processResult: function (t) {
              if (t && t[this._friendshipTag]) {
                var e = t[this._friendshipTag];
                return "Pointer" === e.__type && "_User" === e.className && (delete e.__type, delete e.className), e;
              }

              return null;
            }
          });
        };
      }, function (t, e, n) {

        var r = n(2),
            i = function (t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }(r),
            o = n(0),
            s = n(156),
            a = n(5),
            u = a.inherits,
            c = n(6),
            l = c.request,
            f = function (t, e) {
          return l({
            method: "POST",
            path: "/LiveQuery/subscribe",
            data: {
              query: t,
              id: e
            }
          });
        };

        t.exports = function (t) {
          var e = function () {
            if (!t._config.realtime) throw new Error("LiveQuery not supported. Please use the LiveQuery bundle. https://url.leanapp.cn/enable-live-query");
          };

          t.LiveQuery = u(s, {
            constructor: function (t, e, n, r) {
              var i = this;
              s.apply(this), this.id = t, this._client = e, this._client.register(this), this._queryJSON = n, this._subscriptionId = r, this._onMessage = this._dispatch.bind(this), this._onReconnect = function () {
                f(i._queryJSON, i._subscriptionId).catch(function (t) {
                  return console.error("LiveQuery resubscribe error: " + t.message);
                });
              }, e.on("message", this._onMessage), e.on("reconnect", this._onReconnect);
            },
            _dispatch: function (e) {
              var n = this;
              e.forEach(function (e) {
                var r = e.op,
                    i = e.object,
                    s = e.query_id,
                    a = e.updatedKeys;

                if (s === n.id) {
                  var u = t.parseJSON(o.extend({
                    __type: "_File" === i.className ? "File" : "Object"
                  }, i));
                  a ? n.emit(r, u, a) : n.emit(r, u);
                }
              });
            },
            unsubscribe: function () {
              var t = this._client;
              return t.off("message", this._onMessage), t.off("reconnect", this._onReconnect), t.deregister(this), l({
                method: "POST",
                path: "/LiveQuery/unsubscribe",
                data: {
                  id: t.id,
                  query_id: this.id
                }
              });
            }
          }, {
            init: function (n) {
              var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  o = r.subscriptionId,
                  s = void 0 === o ? t._getSubscriptionId() : o;
              if (e(), !(n instanceof t.Query)) throw new TypeError("LiveQuery must be inited with a Query");
              return i.default.resolve(s).then(function (e) {
                return t._config.realtime.createLiveQueryClient(e).then(function (r) {
                  var i = n._getParams(),
                      o = i.where,
                      s = i.keys,
                      a = i.returnACL,
                      u = {
                    where: o,
                    keys: s,
                    returnACL: a,
                    className: n.className
                  },
                      c = f(u, e).then(function (n) {
                    var i = n.query_id;
                    return new t.LiveQuery(i, r, u, e);
                  }).finally(function () {
                    r.deregister(c);
                  });

                  return r.register(c), c;
                });
              });
            },
            pause: function () {
              return e(), t._config.realtime.pause();
            },
            resume: function () {
              return e(), t._config.realtime.resume();
            }
          });
        };
      }, function (t, e, n) {

        function r() {}

        function i(t, e, n) {
          this.fn = t, this.context = e, this.once = n || !1;
        }

        function o() {
          this._events = new r(), this._eventsCount = 0;
        }

        var s = Object.prototype.hasOwnProperty,
            a = "~";
        Object.create && (r.prototype = Object.create(null), new r().__proto__ || (a = !1)), o.prototype.eventNames = function () {
          var t,
              e,
              n = [];
          if (0 === this._eventsCount) return n;

          for (e in t = this._events) s.call(t, e) && n.push(a ? e.slice(1) : e);

          return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n;
        }, o.prototype.listeners = function (t, e) {
          var n = a ? a + t : t,
              r = this._events[n];
          if (e) return !!r;
          if (!r) return [];
          if (r.fn) return [r.fn];

          for (var i = 0, o = r.length, s = new Array(o); i < o; i++) s[i] = r[i].fn;

          return s;
        }, o.prototype.emit = function (t, e, n, r, i, o) {
          var s = a ? a + t : t;
          if (!this._events[s]) return !1;
          var u,
              c,
              l = this._events[s],
              f = arguments.length;

          if (l.fn) {
            switch (l.once && this.removeListener(t, l.fn, void 0, !0), f) {
              case 1:
                return l.fn.call(l.context), !0;

              case 2:
                return l.fn.call(l.context, e), !0;

              case 3:
                return l.fn.call(l.context, e, n), !0;

              case 4:
                return l.fn.call(l.context, e, n, r), !0;

              case 5:
                return l.fn.call(l.context, e, n, r, i), !0;

              case 6:
                return l.fn.call(l.context, e, n, r, i, o), !0;
            }

            for (c = 1, u = new Array(f - 1); c < f; c++) u[c - 1] = arguments[c];

            l.fn.apply(l.context, u);
          } else {
            var h,
                d = l.length;

            for (c = 0; c < d; c++) switch (l[c].once && this.removeListener(t, l[c].fn, void 0, !0), f) {
              case 1:
                l[c].fn.call(l[c].context);
                break;

              case 2:
                l[c].fn.call(l[c].context, e);
                break;

              case 3:
                l[c].fn.call(l[c].context, e, n);
                break;

              case 4:
                l[c].fn.call(l[c].context, e, n, r);
                break;

              default:
                if (!u) for (h = 1, u = new Array(f - 1); h < f; h++) u[h - 1] = arguments[h];
                l[c].fn.apply(l[c].context, u);
            }
          }

          return !0;
        }, o.prototype.on = function (t, e, n) {
          var r = new i(e, n || this),
              o = a ? a + t : t;
          return this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], r] : this._events[o].push(r) : (this._events[o] = r, this._eventsCount++), this;
        }, o.prototype.once = function (t, e, n) {
          var r = new i(e, n || this, !0),
              o = a ? a + t : t;
          return this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], r] : this._events[o].push(r) : (this._events[o] = r, this._eventsCount++), this;
        }, o.prototype.removeListener = function (t, e, n, i) {
          var o = a ? a + t : t;
          if (!this._events[o]) return this;
          if (!e) return 0 == --this._eventsCount ? this._events = new r() : delete this._events[o], this;
          var s = this._events[o];
          if (s.fn) s.fn !== e || i && !s.once || n && s.context !== n || (0 == --this._eventsCount ? this._events = new r() : delete this._events[o]);else {
            for (var u = 0, c = [], l = s.length; u < l; u++) (s[u].fn !== e || i && !s[u].once || n && s[u].context !== n) && c.push(s[u]);

            c.length ? this._events[o] = 1 === c.length ? c[0] : c : 0 == --this._eventsCount ? this._events = new r() : delete this._events[o];
          }
          return this;
        }, o.prototype.removeAllListeners = function (t) {
          var e;
          return t ? (e = a ? a + t : t, this._events[e] && (0 == --this._eventsCount ? this._events = new r() : delete this._events[e])) : (this._events = new r(), this._eventsCount = 0), this;
        }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prototype.setMaxListeners = function () {
          return this;
        }, o.prefixed = a, o.EventEmitter = o, t.exports = o;
      }, function (t, e, n) {

        var r = n(0),
            i = n(5),
            o = i.tap;

        t.exports = function (t) {
          t.Captcha = function (t, e) {
            this._options = t, this._authOptions = e, this.url = void 0, this.captchaToken = void 0, this.validateToken = void 0;
          }, t.Captcha.prototype.refresh = function () {
            var e = this;
            return t.Cloud._requestCaptcha(this._options, this._authOptions).then(function (t) {
              var n = t.captchaToken,
                  i = t.url;
              return r.extend(e, {
                captchaToken: n,
                url: i
              }), i;
            });
          }, t.Captcha.prototype.verify = function (e) {
            var n = this;
            return t.Cloud.verifyCaptcha(e, this.captchaToken).then(o(function (t) {
              return n.validateToken = t;
            }));
          }, t.Captcha.prototype.bind = function (t, e) {
            var n = this,
                r = t.textInput,
                i = t.image,
                o = t.verifyButton,
                s = e.success,
                a = e.error;
            if ("string" == typeof r && !(r = document.getElementById(r))) throw new Error("textInput with id " + r + " not found");
            if ("string" == typeof i && !(i = document.getElementById(i))) throw new Error("image with id " + i + " not found");
            if ("string" == typeof o && !(o = document.getElementById(o))) throw new Error("verifyButton with id " + o + " not found");
            this.__refresh = function () {
              return n.refresh().then(function (t) {
                i.src = t, r && (r.value = "", r.focus());
              }).catch(function (t) {
                return console.warn("refresh captcha fail: " + t.message);
              });
            }, i && (this.__image = i, i.src = this.url, i.addEventListener("click", this.__refresh)), this.__verify = function () {
              var t = r.value;
              n.verify(t).catch(function (t) {
                throw n.__refresh(), t;
              }).then(s, a).catch(function (t) {
                return console.warn("verify captcha fail: " + t.message);
              });
            }, r && o && (this.__verifyButton = o, o.addEventListener("click", this.__verify));
          }, t.Captcha.prototype.unbind = function () {
            this.__image && this.__image.removeEventListener("click", this.__refresh), this.__verifyButton && this.__verifyButton.removeEventListener("click", this.__verify);
          }, t.Captcha.request = function (e, n) {
            var r = new t.Captcha(e, n);
            return r.refresh().then(function () {
              return r;
            });
          };
        };
      }, function (t, e, n) {

        var r = n(2),
            i = function (t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }(r),
            o = n(0),
            s = n(6),
            a = s._request,
            u = s.request;

        t.exports = function (t) {
          t.Cloud = t.Cloud || {}, o.extend(t.Cloud, {
            run: function (e, n, r) {
              return u({
                service: "engine",
                method: "POST",
                path: "/functions/" + e,
                data: t._encode(n, null, !0),
                authOptions: r
              }).then(function (e) {
                return t._decode(e).result;
              });
            },
            rpc: function (e, n, r) {
              return o.isArray(n) ? i.default.reject(new Error("Can't pass Array as the param of rpc function in JavaScript SDK.")) : u({
                service: "engine",
                method: "POST",
                path: "/call/" + e,
                data: t._encodeObjectOrArray(n),
                authOptions: r
              }).then(function (e) {
                return t._decode(e).result;
              });
            },
            getServerDate: function () {
              return a("date", null, null, "GET").then(function (e) {
                return t._decode(e);
              });
            },
            requestSmsCode: function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              if (o.isString(t) && (t = {
                mobilePhoneNumber: t
              }), !t.mobilePhoneNumber) throw new Error("Missing mobilePhoneNumber.");
              return e.validateToken && (t = o.extend({}, t, {
                validate_token: e.validateToken
              })), a("requestSmsCode", null, null, "POST", t, e);
            },
            verifySmsCode: function (t, e) {
              if (!t) throw new Error("Missing sms code.");
              var n = {};
              return o.isString(e) && (n.mobilePhoneNumber = e), a("verifySmsCode", t, null, "POST", n);
            },
            _requestCaptcha: function (t, e) {
              return a("requestCaptcha", null, null, "GET", t, e).then(function (t) {
                var e = t.captcha_url;
                return {
                  captchaToken: t.captcha_token,
                  url: e
                };
              });
            },
            requestCaptcha: t.Captcha.request,
            verifyCaptcha: function (t, e) {
              return a("verifyCaptcha", null, null, "POST", {
                captcha_code: t,
                captcha_token: e
              }).then(function (t) {
                return t.validate_token;
              });
            }
          });
        };
      }, function (t, e, n) {

        var r = n(6).request;

        t.exports = function (t) {
          t.Installation = t.Object.extend("_Installation"), t.Push = t.Push || {}, t.Push.send = function (t, e) {
            if (t.where && (t.where = t.where._getParams().where), t.where && t.cql) throw new Error("Both where and cql can't be set");
            if (t.push_time && (t.push_time = t.push_time.toJSON()), t.expiration_time && (t.expiration_time = t.expiration_time.toJSON()), t.expiration_time && t.expiration_time_interval) throw new Error("Both expiration_time and expiration_time_interval can't be set");
            return r({
              service: "push",
              method: "POST",
              path: "/push",
              data: t,
              authOptions: e
            });
          };
        };
      }, function (t, e, n) {

        function r(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }

        var i = n(2),
            o = r(i),
            s = n(27),
            a = r(s),
            u = n(0),
            c = n(6)._request,
            l = n(5),
            f = l.getSessionToken;

        t.exports = function (t) {
          var e = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return f(e) ? t.User._fetchUserBySessionToken(f(e)) : t.User.currentAsync();
          },
              n = function (n) {
            return e(n).then(function (e) {
              return t.Object.createWithoutData("_User", e.id)._toPointer();
            });
          };

          t.Status = function (t, e) {
            return this.data = {}, this.inboxType = "default", this.query = null, t && "object" === (void 0 === t ? "undefined" : (0, a.default)(t)) ? this.data = t : (t && (this.data.image = t), e && (this.data.message = e)), this;
          }, u.extend(t.Status.prototype, {
            get: function (t) {
              return this.data[t];
            },
            set: function (t, e) {
              return this.data[t] = e, this;
            },
            destroy: function (t) {
              return this.id ? c("statuses", null, this.id, "DELETE", t) : o.default.reject(new Error("The status id is not exists."));
            },
            toObject: function () {
              return this.id ? t.Object.createWithoutData("_Status", this.id) : null;
            },
            _getDataJSON: function () {
              var e = u.clone(this.data);
              return t._encode(e);
            },
            send: function () {
              var e = this,
                  r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              if (!f(r) && !t.User.current()) throw new Error("Please signin an user.");
              return this.query ? n(r).then(function (t) {
                var n = e.query._getParams();

                n.className = e.query.className;
                var i = {};
                return i.query = n, e.data = e.data || {}, e.data.source = e.data.source || t, i.data = e._getDataJSON(), i.inboxType = e.inboxType || "default", c("statuses", null, null, "POST", i, r);
              }).then(function (n) {
                return e.id = n.objectId, e.createdAt = t._parseDate(n.createdAt), e;
              }) : t.Status.sendStatusToFollowers(this, r);
            },
            _finishFetch: function (e) {
              this.id = e.objectId, this.createdAt = t._parseDate(e.createdAt), this.updatedAt = t._parseDate(e.updatedAt), this.messageId = e.messageId, delete e.messageId, delete e.objectId, delete e.createdAt, delete e.updatedAt, this.data = t._decode(e);
            }
          }), t.Status.sendStatusToFollowers = function (e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!f(r) && !t.User.current()) throw new Error("Please signin an user.");
            return n(r).then(function (n) {
              var i = {};
              i.className = "_Follower", i.keys = "follower", i.where = {
                user: n
              };
              var o = {};
              return o.query = i, e.data = e.data || {}, e.data.source = e.data.source || n, o.data = e._getDataJSON(), o.inboxType = e.inboxType || "default", c("statuses", null, null, "POST", o, r).then(function (n) {
                return e.id = n.objectId, e.createdAt = t._parseDate(n.createdAt), e;
              });
            });
          }, t.Status.sendPrivateStatus = function (e, r) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (!f(i) && !t.User.current()) throw new Error("Please signin an user.");
            if (!r) throw new Error("Invalid target user.");
            var o = u.isString(r) ? r : r.id;
            if (!o) throw new Error("Invalid target user.");
            return n(i).then(function (n) {
              var r = {};
              r.className = "_User", r.where = {
                objectId: o
              };
              var s = {};
              return s.query = r, e.data = e.data || {}, e.data.source = e.data.source || n, s.data = e._getDataJSON(), s.inboxType = "private", e.inboxType = "private", c("statuses", null, null, "POST", s, i).then(function (n) {
                return e.id = n.objectId, e.createdAt = t._parseDate(n.createdAt), e;
              });
            });
          }, t.Status.countUnreadStatuses = function (n) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default",
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (u.isString(r) || (i = r), !f(i) && null == n && !t.User.current()) throw new Error("Please signin an user or pass the owner objectId.");
            return o.default.resolve(n || e(i)).then(function (e) {
              var n = {};
              return n.inboxType = t._encode(r), n.owner = t._encode(e), c("subscribe/statuses/count", null, null, "GET", n, i);
            });
          }, t.Status.resetUnreadCount = function (n) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default",
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (u.isString(r) || (i = r), !f(i) && null == n && !t.User.current()) throw new Error("Please signin an user or pass the owner objectId.");
            return o.default.resolve(n || e(i)).then(function (e) {
              var n = {};
              return n.inboxType = t._encode(r), n.owner = t._encode(e), c("subscribe/statuses/resetUnreadCount", null, null, "POST", n, i);
            });
          }, t.Status.statusQuery = function (e) {
            var n = new t.Query("_Status");
            return e && n.equalTo("source", e), n;
          }, t.InboxQuery = t.Query._extend({
            _objectClass: t.Status,
            _sinceId: 0,
            _maxId: 0,
            _inboxType: "default",
            _owner: null,
            _newObject: function () {
              return new t.Status();
            },
            _createRequest: function (e, n) {
              return t.InboxQuery.__super__._createRequest.call(this, e, n, "/subscribe/statuses");
            },
            sinceId: function (t) {
              return this._sinceId = t, this;
            },
            maxId: function (t) {
              return this._maxId = t, this;
            },
            owner: function (t) {
              return this._owner = t, this;
            },
            inboxType: function (t) {
              return this._inboxType = t, this;
            },
            _getParams: function () {
              var e = t.InboxQuery.__super__._getParams.call(this);

              return e.owner = t._encode(this._owner), e.inboxType = t._encode(this._inboxType), e.sinceId = t._encode(this._sinceId), e.maxId = t._encode(this._maxId), e;
            }
          }), t.Status.inboxQuery = function (e, n) {
            var r = new t.InboxQuery(t.Status);
            return e && (r._owner = e), n && (r._inboxType = n), r;
          };
        };
      }, function (t, e, n) {

        var r = n(9),
            i = function (t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }(r),
            o = n(0),
            s = n(6)._request;

        t.exports = function (t) {
          t.SearchSortBuilder = function () {
            this._sortFields = [];
          }, o.extend(t.SearchSortBuilder.prototype, {
            _addField: function (t, e, n, r) {
              var i = {};
              return i[t] = {
                order: e || "asc",
                mode: n || "avg",
                missing: "_" + (r || "last")
              }, this._sortFields.push(i), this;
            },
            ascending: function (t, e, n) {
              return this._addField(t, "asc", e, n);
            },
            descending: function (t, e, n) {
              return this._addField(t, "desc", e, n);
            },
            whereNear: function (t, e, n) {
              n = n || {};
              var r = {},
                  i = {
                lat: e.latitude,
                lon: e.longitude
              },
                  o = {
                order: n.order || "asc",
                mode: n.mode || "avg",
                unit: n.unit || "km"
              };
              return o[t] = i, r._geo_distance = o, this._sortFields.push(r), this;
            },
            build: function () {
              return (0, i.default)(t._encode(this._sortFields));
            }
          }), t.SearchQuery = t.Query._extend({
            _sid: null,
            _hits: 0,
            _queryString: null,
            _highlights: null,
            _sortBuilder: null,
            _createRequest: function (t, e) {
              return s("search/select", null, null, "GET", t || this._getParams(), e);
            },
            sid: function (t) {
              return this._sid = t, this;
            },
            queryString: function (t) {
              return this._queryString = t, this;
            },
            highlights: function (t) {
              var e;
              return e = t && o.isString(t) ? arguments : t, this._highlights = e, this;
            },
            sortBy: function (t) {
              return this._sortBuilder = t, this;
            },
            hits: function () {
              return this._hits || (this._hits = 0), this._hits;
            },
            _processResult: function (t) {
              return delete t.className, delete t._app_url, delete t._deeplink, t;
            },
            hasMore: function () {
              return !this._hitEnd;
            },
            reset: function () {
              this._hitEnd = !1, this._sid = null, this._hits = 0;
            },
            find: function () {
              var t = this;
              return this._createRequest().then(function (e) {
                return e.sid ? (t._oldSid = t._sid, t._sid = e.sid) : (t._sid = null, t._hitEnd = !0), t._hits = e.hits || 0, o.map(e.results, function (n) {
                  n.className && (e.className = n.className);

                  var r = t._newObject(e);

                  return r.appURL = n._app_url, r._finishFetch(t._processResult(n), !0), r;
                });
              });
            },
            _getParams: function () {
              var e = t.SearchQuery.__super__._getParams.call(this);

              if (delete e.where, this.className && (e.clazz = this.className), this._sid && (e.sid = this._sid), !this._queryString) throw new Error("Please set query string.");
              if (e.q = this._queryString, this._highlights && (e.highlights = this._highlights.join(",")), this._sortBuilder && e.order) throw new Error("sort and order can not be set at same time.");
              return this._sortBuilder && (e.sort = this._sortBuilder.build()), e;
            }
          });
        };
      }, function (t, e, n) {

        var r = n(2),
            i = function (t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }(r),
            o = n(0),
            s = n(16),
            a = n(6),
            u = a.request;

        t.exports = function (t) {
          t.Insight = t.Insight || {}, o.extend(t.Insight, {
            startJob: function (e, n) {
              if (!e || !e.sql) throw new Error("Please provide the sql to run the job.");
              var r = {
                jobConfig: e,
                appId: t.applicationId
              };
              return u({
                path: "/bigquery/jobs",
                method: "POST",
                data: t._encode(r, null, !0),
                authOptions: n,
                signKey: !1
              }).then(function (e) {
                return t._decode(e).id;
              });
            },
            on: function (t, e) {}
          }), t.Insight.JobQuery = function (t, e) {
            if (!t) throw new Error("Please provide the job id.");
            this.id = t, this.className = e, this._skip = 0, this._limit = 100;
          }, o.extend(t.Insight.JobQuery.prototype, {
            skip: function (t) {
              return this._skip = t, this;
            },
            limit: function (t) {
              return this._limit = t, this;
            },
            find: function (t) {
              var e = {
                skip: this._skip,
                limit: this._limit
              };
              return u({
                path: "/bigquery/jobs/" + this.id,
                method: "GET",
                query: e,
                authOptions: t,
                signKey: !1
              }).then(function (t) {
                return t.error ? i.default.reject(new s(t.code, t.error)) : i.default.resolve(t);
              });
            }
          });
        };
      }, function (t, e, n) {

        var r = n(9),
            i = function (t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }(r),
            o = n(0),
            s = n(6),
            a = s._request,
            u = n(18),
            c = function (t) {
          return "string" == typeof t ? t : "function" == typeof t.getPayload ? (0, i.default)(t.getPayload()) : (0, i.default)(t);
        };

        t.exports = u.Object.extend("_Conversation", {
          constructor: function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            u.Object.prototype.constructor.call(this, null, null), this.set("name", t), void 0 !== e.isSystem && this.set("sys", !!e.isSystem), void 0 !== e.isTransient && this.set("tr", !!e.isTransient);
          },
          getCreator: function () {
            return this.get("c");
          },
          getLastMessageAt: function () {
            return this.get("lm");
          },
          getMembers: function () {
            return this.get("m");
          },
          addMember: function (t) {
            return this.add("m", t);
          },
          getMutedMembers: function () {
            return this.get("mu");
          },
          getName: function () {
            return this.get("name");
          },
          isTransient: function () {
            return this.get("tr");
          },
          isSystem: function () {
            return this.get("sys");
          },
          send: function (t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                i = {
              from_peer: t,
              conv_id: this.id,
              transient: !1,
              message: c(e)
            };
            return void 0 !== n.toClients && (i.to_peers = n.toClients), void 0 !== n.transient && (i.transient = !!n.transient), void 0 !== n.pushData && (i.push_data = n.pushData), a("rtm", "messages", null, "POST", i, r);
          },
          broadcast: function (t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                i = {
              from_peer: t,
              conv_id: this.id,
              message: c(e)
            };

            if (void 0 !== n.pushData && (i.push = n.pushData), void 0 !== n.validTill) {
              var s = n.validTill;
              o.isDate(s) && (s = s.getTime()), n.valid_till = s;
            }

            return a("rtm", "broadcast", null, "POST", i, r);
          }
        });
      }, function (t, e, n) {

        function r(t) {
          var e = t.name,
              n = t.value,
              r = t.version;
          this.name = e, this.value = n, this.version = r;
        }

        var i = n(2),
            o = function (t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }(i),
            s = n(0),
            a = n(6),
            u = a.request,
            c = n(5),
            l = c.ensureArray,
            f = c.parseDate,
            h = n(18);

        h.LeaderboardVersionChangeInterval = {
          NEVER: "never",
          DAY: "day",
          WEEK: "week",
          MONTH: "month"
        }, h.LeaderboardOrder = {
          ASCENDING: "ascending",
          DESCENDING: "descending"
        }, h.LeaderboardUpdateStrategy = {
          BETTER: "better",
          LAST: "last",
          SUM: "sum"
        };

        var d = function (t) {
          var e = h._decode(t);

          return new r({
            name: e.statisticName,
            value: e.statisticValue,
            version: e.version
          });
        };

        h.Leaderboard = function (t) {
          this.statisticName = t, this.order = void 0, this.updateStrategy = void 0, this.versionChangeInterval = void 0, this.version = void 0, this.nextResetAt = void 0, this.createdAt = void 0;
        };

        var p = h.Leaderboard;
        h.Leaderboard.createWithoutData = function (t) {
          return new p(t);
        }, h.Leaderboard.createLeaderboard = function (t, e) {
          var n = t.statisticName,
              r = t.order,
              i = t.versionChangeInterval,
              o = t.updateStrategy;
          return u({
            method: "POST",
            path: "/leaderboard/leaderboards",
            data: {
              statisticName: n,
              order: r,
              versionChangeInterval: i,
              updateStrategy: o
            },
            authOptions: e
          }).then(function (t) {
            return new p(n)._finishFetch(t);
          });
        }, h.Leaderboard.getLeaderboard = function (t, e) {
          return p.createWithoutData(t).fetch(e);
        }, h.Leaderboard.getStatistics = function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = e.statisticNames,
              r = arguments[2];
          return o.default.resolve().then(function () {
            if (!t || !t.id) throw new Error("user must be an AV.User");
            return u({
              method: "GET",
              path: "/leaderboard/users/" + t.id + "/statistics",
              query: {
                statistics: n ? l(n).join(",") : void 0
              },
              authOptions: r
            }).then(function (t) {
              return t.results.map(d);
            });
          });
        }, h.Leaderboard.updateStatistics = function (t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return o.default.resolve().then(function () {
            if (!t || !t.id) throw new Error("user must be an AV.User");
            var r = s.map(e, function (t, e) {
              return {
                statisticName: e,
                statisticValue: t
              };
            }),
                i = n.overwrite;
            return u({
              method: "POST",
              path: "/leaderboard/users/" + t.id + "/statistics",
              query: {
                overwrite: i ? 1 : void 0
              },
              data: r,
              authOptions: n
            }).then(function (t) {
              return t.results.map(d);
            });
          });
        }, h.Leaderboard.deleteStatistics = function (t, e, n) {
          return o.default.resolve().then(function () {
            if (!t || !t.id) throw new Error("user must be an AV.User");
            return u({
              method: "DELETE",
              path: "/leaderboard/users/" + t.id + "/statistics",
              query: {
                statistics: l(e).join(",")
              },
              authOptions: n
            }).then(function () {});
          });
        }, s.extend(p.prototype, {
          _finishFetch: function (t) {
            var e = this;
            return s.forEach(t, function (t, n) {
              "updatedAt" !== n && "objectId" !== n && ("expiredAt" === n && (n = "nextResetAt"), "createdAt" === n && (t = f(t)), t && "Date" === t.__type && (t = f(t.iso)), e[n] = t);
            }), this;
          },
          fetch: function (t) {
            var e = this;
            return u({
              method: "GET",
              path: "/leaderboard/leaderboards/" + this.statisticName,
              authOptions: t
            }).then(function (t) {
              return e._finishFetch(t);
            });
          },
          count: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = t.version,
                n = arguments[1];
            return u({
              method: "GET",
              path: "/leaderboard/leaderboards/" + this.statisticName + "/ranks",
              query: {
                count: 1,
                limit: 0,
                version: e
              },
              authOptions: n
            }).then(function (t) {
              return t.count;
            });
          },
          _getResults: function (t, e, n) {
            var r = t.skip,
                i = t.limit,
                o = t.selectUserKeys,
                a = t.includeUserKeys,
                c = t.includeStatistics,
                f = t.version;
            return u({
              method: "GET",
              path: "/leaderboard/leaderboards/" + this.statisticName + "/ranks" + (n ? "/" + n : ""),
              query: {
                skip: r,
                limit: i,
                selectUserKeys: s.union(l(o), l(a)).join(",") || void 0,
                includeUser: a ? l(a).join(",") : void 0,
                includeStatistics: c ? l(c).join(",") : void 0,
                version: f
              },
              authOptions: e
            }).then(function (t) {
              return t.results.map(function (t) {
                var e = h._decode(t),
                    n = e.user,
                    r = e.statisticValue,
                    i = e.rank,
                    o = e.statistics;

                return {
                  user: n,
                  value: r,
                  rank: i,
                  includedStatistics: (void 0 === o ? [] : o).map(d)
                };
              });
            });
          },
          getResults: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = t.skip,
                n = t.limit,
                r = t.selectUserKeys,
                i = t.includeUserKeys,
                o = t.includeStatistics,
                s = t.version,
                a = arguments[1];
            return this._getResults({
              skip: e,
              limit: n,
              selectUserKeys: r,
              includeUserKeys: i,
              includeStatistics: o,
              version: s
            }, a);
          },
          getResultsAroundUser: function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments[2];
            if (t && "string" != typeof t.id) return this.getResultsAroundUser(void 0, t, e);
            var r = e.limit,
                i = e.selectUserKeys,
                o = e.includeUserKeys,
                s = e.includeStatistics,
                a = e.version;
            return this._getResults({
              limit: r,
              selectUserKeys: i,
              includeUserKeys: o,
              includeStatistics: s,
              version: a
            }, n, t ? t.id : "self");
          },
          _update: function (t, e) {
            var n = this;
            return u({
              method: "PUT",
              path: "/leaderboard/leaderboards/" + this.statisticName,
              data: t,
              authOptions: e
            }).then(function (t) {
              return n._finishFetch(t);
            });
          },
          updateVersionChangeInterval: function (t, e) {
            return this._update({
              versionChangeInterval: t
            }, e);
          },
          updateUpdateStrategy: function (t, e) {
            return this._update({
              updateStrategy: t
            }, e);
          },
          reset: function (t) {
            var e = this;
            return u({
              method: "PUT",
              path: "/leaderboard/leaderboards/" + this.statisticName + "/incrementVersion",
              authOptions: t
            }).then(function (t) {
              return e._finishFetch(t);
            });
          },
          destroy: function (t) {
            return h.request({
              method: "DELETE",
              path: "/leaderboard/leaderboards/" + this.statisticName,
              authOptions: t
            }).then(function () {});
          },
          getArchives: function () {
            var t = this,
                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = e.skip,
                r = e.limit,
                i = arguments[1];
            return u({
              method: "GET",
              path: "/leaderboard/leaderboards/" + this.statisticName + "/archives",
              query: {
                skip: n,
                limit: r
              },
              authOptions: i
            }).then(function (e) {
              return e.results.map(function (e) {
                var n = e.version,
                    r = e.status,
                    i = e.url,
                    o = e.activatedAt,
                    s = e.deactivatedAt;
                return {
                  statisticName: t.statisticName,
                  version: n,
                  status: r,
                  url: i,
                  activatedAt: f(o.iso),
                  deactivatedAt: f(s.iso)
                };
              });
            });
          }
        });
      }, function (t, e, n) {

        var r = n(166),
            i = n(69),
            o = ["Browser"].concat(n(179));

        t.exports = function (t) {
          return t.setAdapters(r), t._sharedConfig.userAgent = i(o), t;
        };
      }, function (t, e, n) {

        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var r = n(167);
        e.request = r.request, e.upload = r.upload, e.storage = window.localStorage, e.WebSocket = window.WebSocket;
      }, function (t, e, n) {

        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var r = n(168);
        e.request = function (t, e) {
          void 0 === e && (e = {});
          var n = e.method,
              i = void 0 === n ? "GET" : n,
              o = e.data,
              s = e.headers,
              a = e.onprogress,
              u = r(i, t);
          return s && u.set(s), a && u.on("progress", a), u.send(o).catch(function (t) {
            if (t.response) return t.response;
            throw t;
          }).then(function (t) {
            return {
              status: t.status,
              ok: t.ok,
              headers: t.header,
              data: t.body
            };
          });
        }, e.upload = function (t, e, n) {
          void 0 === n && (n = {});
          var i = n.data,
              o = n.headers,
              s = n.onprogress,
              a = r("POST", t).attach(e.field, e.data, e.name);
          return i && a.field(i), o && a.set(o), s && a.on("progress", s), a.catch(function (t) {
            if (t.response) return t.response;
            throw t;
          }).then(function (t) {
            return {
              status: t.status,
              ok: t.ok,
              headers: t.header,
              data: t.body
            };
          });
        };
      }, function (t, e, n) {

        function r(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }

        function i(t) {
          return (i = "function" == typeof b.default && "symbol" === (0, m.default)(v.default) ? function (t) {
            return void 0 === t ? "undefined" : (0, m.default)(t);
          } : function (t) {
            return t && "function" == typeof b.default && t.constructor === b.default && t !== b.default.prototype ? "symbol" : void 0 === t ? "undefined" : (0, m.default)(t);
          })(t);
        }

        function o() {}

        function s(t) {
          if (!S(t)) return t;
          var e = [];

          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && a(e, n, t[n]);

          return e.join("&");
        }

        function a(t, e, n) {
          if (void 0 !== n) {
            if (null === n) return void t.push(encodeURI(e));
            if (Array.isArray(n)) n.forEach(function (n) {
              a(t, e, n);
            });else if (S(n)) for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && a(t, "".concat(e, "[").concat(r, "]"), n[r]);else t.push(encodeURI(e) + "=" + encodeURIComponent(n));
          }
        }

        function u(t) {
          for (var e, n, r = {}, i = t.split("&"), o = 0, s = i.length; o < s; ++o) e = i[o], n = e.indexOf("="), -1 === n ? r[decodeURIComponent(e)] = "" : r[decodeURIComponent(e.slice(0, n))] = decodeURIComponent(e.slice(n + 1));

          return r;
        }

        function c(t) {
          for (var e, n, r, i, o = t.split(/\r?\n/), s = {}, a = 0, u = o.length; a < u; ++a) n = o[a], -1 !== (e = n.indexOf(":")) && (r = n.slice(0, e).toLowerCase(), i = T(n.slice(e + 1)), s[r] = i);

          return s;
        }

        function l(t) {
          return /[\/+]json($|[^-\w])/.test(t);
        }

        function f(t) {
          this.req = t, this.xhr = this.req.xhr, this.text = "HEAD" !== this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText;
          var e = this.xhr.status;
          1223 === e && (e = 204), this._setStatusProperties(e), this.headers = c(this.xhr.getAllResponseHeaders()), this.header = this.headers, this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), null === this.text && t._responseType ? this.body = this.xhr.response : this.body = "HEAD" === this.req.method ? null : this._parseBody(this.text ? this.text : this.xhr.response);
        }

        function h(t, e) {
          var n = this;
          this._query = this._query || [], this.method = t, this.url = e, this.header = {}, this._header = {}, this.on("end", function () {
            var t = null,
                e = null;

            try {
              e = new f(n);
            } catch (e) {
              return t = new Error("Parser is unable to parse the response"), t.parse = !0, t.original = e, n.xhr ? (t.rawResponse = void 0 === n.xhr.responseType ? n.xhr.responseText : n.xhr.response, t.status = n.xhr.status ? n.xhr.status : null, t.statusCode = t.status) : (t.rawResponse = null, t.status = null), n.callback(t);
            }

            n.emit("response", e);
            var r;

            try {
              n._isResponseOK(e) || (r = new Error(e.statusText || e.text || "Unsuccessful HTTP response"));
            } catch (t) {
              r = t;
            }

            r ? (r.original = t, r.response = e, r.status = e.status, n.callback(r, e)) : n.callback(null, e);
          });
        }

        function d(t, e, n) {
          var r = x("DELETE", t);
          return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r;
        }

        var p,
            _ = n(34),
            v = r(_),
            y = n(27),
            m = r(y),
            g = n(35),
            b = r(g);

        "undefined" != typeof window ? p = window : "undefined" == typeof self ? (console.warn("Using browser-only version of superagent in non-browser environment"), p = void 0) : p = self;
        var w = n(169),
            O = n(170),
            A = n(171),
            S = n(79),
            E = n(172),
            C = n(174);
        t.exports = function (t, n) {
          return "function" == typeof n ? new e.Request("GET", t).end(n) : 1 === arguments.length ? new e.Request("GET", t) : new e.Request(t, n);
        }, e = t.exports;
        var x = e;
        e.Request = h, x.getXHR = function () {
          if (p.XMLHttpRequest && (!p.location || "file:" !== p.location.protocol || !p.ActiveXObject)) return new XMLHttpRequest();

          try {
            return new ActiveXObject("Microsoft.XMLHTTP");
          } catch (t) {}

          try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0");
          } catch (t) {}

          try {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0");
          } catch (t) {}

          try {
            return new ActiveXObject("Msxml2.XMLHTTP");
          } catch (t) {}

          throw new Error("Browser-only version of superagent could not find XHR");
        };
        var T = "".trim ? function (t) {
          return t.trim();
        } : function (t) {
          return t.replace(/(^\s*|\s*$)/g, "");
        };
        x.serializeObject = s, x.parseString = u, x.types = {
          html: "text/html",
          json: "application/json",
          xml: "text/xml",
          urlencoded: "application/x-www-form-urlencoded",
          form: "application/x-www-form-urlencoded",
          "form-data": "application/x-www-form-urlencoded"
        }, x.serialize = {
          "application/x-www-form-urlencoded": s,
          "application/json": O
        }, x.parse = {
          "application/x-www-form-urlencoded": u,
          "application/json": JSON.parse
        }, E(f.prototype), f.prototype._parseBody = function (t) {
          var e = x.parse[this.type];
          return this.req._parser ? this.req._parser(this, t) : (!e && l(this.type) && (e = x.parse["application/json"]), e && t && (t.length > 0 || t instanceof Object) ? e(t) : null);
        }, f.prototype.toError = function () {
          var t = this.req,
              e = t.method,
              n = t.url,
              r = "cannot ".concat(e, " ").concat(n, " (").concat(this.status, ")"),
              i = new Error(r);
          return i.status = this.status, i.method = e, i.url = n, i;
        }, x.Response = f, w(h.prototype), A(h.prototype), h.prototype.type = function (t) {
          return this.set("Content-Type", x.types[t] || t), this;
        }, h.prototype.accept = function (t) {
          return this.set("Accept", x.types[t] || t), this;
        }, h.prototype.auth = function (t, e, n) {
          1 === arguments.length && (e = ""), "object" === i(e) && null !== e && (n = e, e = ""), n || (n = {
            type: "function" == typeof btoa ? "basic" : "auto"
          });

          var r = function (t) {
            if ("function" == typeof btoa) return btoa(t);
            throw new Error("Cannot use basic auth, btoa is not a function");
          };

          return this._auth(t, e, n, r);
        }, h.prototype.query = function (t) {
          return "string" != typeof t && (t = s(t)), t && this._query.push(t), this;
        }, h.prototype.attach = function (t, e, n) {
          if (e) {
            if (this._data) throw new Error("superagent can't mix .send() and .attach()");

            this._getFormData().append(t, e, n || e.name);
          }

          return this;
        }, h.prototype._getFormData = function () {
          return this._formData || (this._formData = new p.FormData()), this._formData;
        }, h.prototype.callback = function (t, e) {
          if (this._shouldRetry(t, e)) return this._retry();
          var n = this._callback;
          this.clearTimeout(), t && (this._maxRetries && (t.retries = this._retries - 1), this.emit("error", t)), n(t, e);
        }, h.prototype.crossDomainError = function () {
          var t = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
          t.crossDomain = !0, t.status = this.status, t.method = this.method, t.url = this.url, this.callback(t);
        }, h.prototype.agent = function () {
          return console.warn("This is not supported in browser version of superagent"), this;
        }, h.prototype.ca = h.prototype.agent, h.prototype.buffer = h.prototype.ca, h.prototype.write = function () {
          throw new Error("Streaming is not supported in browser version of superagent");
        }, h.prototype.pipe = h.prototype.write, h.prototype._isHost = function (t) {
          return t && "object" === i(t) && !Array.isArray(t) && "[object Object]" !== Object.prototype.toString.call(t);
        }, h.prototype.end = function (t) {
          this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"), this._endCalled = !0, this._callback = t || o, this._finalizeQueryString(), this._end();
        }, h.prototype._setUploadTimeout = function () {
          var t = this;
          this._uploadTimeout && !this._uploadTimeoutTimer && (this._uploadTimeoutTimer = setTimeout(function () {
            t._timeoutError("Upload timeout of ", t._uploadTimeout, "ETIMEDOUT");
          }, this._uploadTimeout));
        }, h.prototype._end = function () {
          if (this._aborted) return this.callback(new Error("The request has been aborted even before .end() was called"));
          var t = this;
          this.xhr = x.getXHR();
          var e = this.xhr,
              n = this._formData || this._data;
          this._setTimeouts(), e.onreadystatechange = function () {
            var n = e.readyState;

            if (n >= 2 && t._responseTimeoutTimer && clearTimeout(t._responseTimeoutTimer), 4 === n) {
              var r;

              try {
                r = e.status;
              } catch (t) {
                r = 0;
              }

              if (!r) {
                if (t.timedout || t._aborted) return;
                return t.crossDomainError();
              }

              t.emit("end");
            }
          };

          var r = function (e, n) {
            n.total > 0 && (n.percent = n.loaded / n.total * 100, 100 === n.percent && clearTimeout(t._uploadTimeoutTimer)), n.direction = e, t.emit("progress", n);
          };

          if (this.hasListeners("progress")) try {
            e.addEventListener("progress", r.bind(null, "download")), e.upload && e.upload.addEventListener("progress", r.bind(null, "upload"));
          } catch (t) {}
          e.upload && this._setUploadTimeout();

          try {
            this.username && this.password ? e.open(this.method, this.url, !0, this.username, this.password) : e.open(this.method, this.url, !0);
          } catch (t) {
            return this.callback(t);
          }

          if (this._withCredentials && (e.withCredentials = !0), !this._formData && "GET" !== this.method && "HEAD" !== this.method && "string" != typeof n && !this._isHost(n)) {
            var i = this._header["content-type"],
                o = this._serializer || x.serialize[i ? i.split(";")[0] : ""];
            !o && l(i) && (o = x.serialize["application/json"]), o && (n = o(n));
          }

          for (var s in this.header) null !== this.header[s] && Object.prototype.hasOwnProperty.call(this.header, s) && e.setRequestHeader(s, this.header[s]);

          this._responseType && (e.responseType = this._responseType), this.emit("request", this), e.send(void 0 === n ? null : n);
        }, x.agent = function () {
          return new C();
        }, ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function (t) {
          C.prototype[t.toLowerCase()] = function (e, n) {
            var r = new x.Request(t, e);
            return this._setDefaults(r), n && r.end(n), r;
          };
        }), C.prototype.del = C.prototype.delete, x.get = function (t, e, n) {
          var r = x("GET", t);
          return "function" == typeof e && (n = e, e = null), e && r.query(e), n && r.end(n), r;
        }, x.head = function (t, e, n) {
          var r = x("HEAD", t);
          return "function" == typeof e && (n = e, e = null), e && r.query(e), n && r.end(n), r;
        }, x.options = function (t, e, n) {
          var r = x("OPTIONS", t);
          return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r;
        }, x.del = d, x.delete = d, x.patch = function (t, e, n) {
          var r = x("PATCH", t);
          return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r;
        }, x.post = function (t, e, n) {
          var r = x("POST", t);
          return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r;
        }, x.put = function (t, e, n) {
          var r = x("PUT", t);
          return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r;
        };
      }, function (t, e, n) {
        function r(t) {
          if (t) return i(t);
        }

        function i(t) {
          for (var e in r.prototype) t[e] = r.prototype[e];

          return t;
        }

        t.exports = r, r.prototype.on = r.prototype.addEventListener = function (t, e) {
          return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
        }, r.prototype.once = function (t, e) {
          function n() {
            this.off(t, n), e.apply(this, arguments);
          }

          return n.fn = e, this.on(t, n), this;
        }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function (t, e) {
          if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
          var n = this._callbacks["$" + t];
          if (!n) return this;
          if (1 == arguments.length) return delete this._callbacks["$" + t], this;

          for (var r, i = 0; i < n.length; i++) if ((r = n[i]) === e || r.fn === e) {
            n.splice(i, 1);
            break;
          }

          return 0 === n.length && delete this._callbacks["$" + t], this;
        }, r.prototype.emit = function (t) {
          this._callbacks = this._callbacks || {};

          for (var e = new Array(arguments.length - 1), n = this._callbacks["$" + t], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];

          if (n) {
            n = n.slice(0);

            for (var r = 0, i = n.length; r < i; ++r) n[r].apply(this, e);
          }

          return this;
        }, r.prototype.listeners = function (t) {
          return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
        }, r.prototype.hasListeners = function (t) {
          return !!this.listeners(t).length;
        };
      }, function (t, e) {
        function n(t, e, n) {
          r(t, "", [], void 0);
          var i;

          for (i = 0 === c.length ? JSON.stringify(t, e, n) : JSON.stringify(t, a(e), n); 0 !== u.length;) {
            var o = u.pop();
            4 === o.length ? Object.defineProperty(o[0], o[1], o[3]) : o[0][o[1]] = o[2];
          }

          return i;
        }

        function r(t, e, n, i) {
          var o;

          if ("object" == typeof t && null !== t) {
            for (o = 0; o < n.length; o++) if (n[o] === t) {
              var s = Object.getOwnPropertyDescriptor(i, e);
              return void (void 0 !== s.get ? s.configurable ? (Object.defineProperty(i, e, {
                value: "[Circular]"
              }), u.push([i, e, t, s])) : c.push([t, e]) : (i[e] = "[Circular]", u.push([i, e, t])));
            }

            if (n.push(t), Array.isArray(t)) for (o = 0; o < t.length; o++) r(t[o], o, n, t);else {
              var a = Object.keys(t);

              for (o = 0; o < a.length; o++) {
                var l = a[o];
                r(t[l], l, n, t);
              }
            }
            n.pop();
          }
        }

        function i(t, e) {
          return t < e ? -1 : t > e ? 1 : 0;
        }

        function o(t, e, n) {
          var r,
              i = s(t, "", [], void 0) || t;

          for (r = 0 === c.length ? JSON.stringify(i, e, n) : JSON.stringify(i, a(e), n); 0 !== u.length;) {
            var o = u.pop();
            4 === o.length ? Object.defineProperty(o[0], o[1], o[3]) : o[0][o[1]] = o[2];
          }

          return r;
        }

        function s(t, e, n, r) {
          var o;

          if ("object" == typeof t && null !== t) {
            for (o = 0; o < n.length; o++) if (n[o] === t) {
              var a = Object.getOwnPropertyDescriptor(r, e);
              return void (void 0 !== a.get ? a.configurable ? (Object.defineProperty(r, e, {
                value: "[Circular]"
              }), u.push([r, e, t, a])) : c.push([t, e]) : (r[e] = "[Circular]", u.push([r, e, t])));
            }

            if ("function" == typeof t.toJSON) return;
            if (n.push(t), Array.isArray(t)) for (o = 0; o < t.length; o++) s(t[o], o, n, t);else {
              var l = {},
                  f = Object.keys(t).sort(i);

              for (o = 0; o < f.length; o++) {
                var h = f[o];
                s(t[h], h, n, t), l[h] = t[h];
              }

              if (void 0 === r) return l;
              u.push([r, e, t]), r[e] = l;
            }
            n.pop();
          }
        }

        function a(t) {
          return t = void 0 !== t ? t : function (t, e) {
            return e;
          }, function (e, n) {
            if (c.length > 0) for (var r = 0; r < c.length; r++) {
              var i = c[r];

              if (i[1] === e && i[0] === n) {
                n = "[Circular]", c.splice(r, 1);
                break;
              }
            }
            return t.call(this, e, n);
          };
        }

        t.exports = n, n.default = n, n.stable = o, n.stableStringify = o;
        var u = [],
            c = [];
      }, function (t, e, n) {

        function r(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }

        function i(t) {
          return (i = "function" == typeof p.default && "symbol" === (0, h.default)(l.default) ? function (t) {
            return void 0 === t ? "undefined" : (0, h.default)(t);
          } : function (t) {
            return t && "function" == typeof p.default && t.constructor === p.default && t !== p.default.prototype ? "symbol" : void 0 === t ? "undefined" : (0, h.default)(t);
          })(t);
        }

        function o(t) {
          if (t) return s(t);
        }

        function s(t) {
          for (var e in o.prototype) Object.prototype.hasOwnProperty.call(o.prototype, e) && (t[e] = o.prototype[e]);

          return t;
        }

        var a = n(2),
            u = r(a),
            c = n(34),
            l = r(c),
            f = n(27),
            h = r(f),
            d = n(35),
            p = r(d),
            _ = n(79);

        t.exports = o, o.prototype.clearTimeout = function () {
          return clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), clearTimeout(this._uploadTimeoutTimer), delete this._timer, delete this._responseTimeoutTimer, delete this._uploadTimeoutTimer, this;
        }, o.prototype.parse = function (t) {
          return this._parser = t, this;
        }, o.prototype.responseType = function (t) {
          return this._responseType = t, this;
        }, o.prototype.serialize = function (t) {
          return this._serializer = t, this;
        }, o.prototype.timeout = function (t) {
          if (!t || "object" !== i(t)) return this._timeout = t, this._responseTimeout = 0, this._uploadTimeout = 0, this;

          for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) switch (e) {
            case "deadline":
              this._timeout = t.deadline;
              break;

            case "response":
              this._responseTimeout = t.response;
              break;

            case "upload":
              this._uploadTimeout = t.upload;
              break;

            default:
              console.warn("Unknown timeout option", e);
          }

          return this;
        }, o.prototype.retry = function (t, e) {
          return 0 !== arguments.length && !0 !== t || (t = 1), t <= 0 && (t = 0), this._maxRetries = t, this._retries = 0, this._retryCallback = e, this;
        };
        var v = ["ECONNRESET", "ETIMEDOUT", "EADDRINFO", "ESOCKETTIMEDOUT"];
        o.prototype._shouldRetry = function (t, e) {
          if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1;
          if (this._retryCallback) try {
            var n = this._retryCallback(t, e);

            if (!0 === n) return !0;
            if (!1 === n) return !1;
          } catch (t) {
            console.error(t);
          }
          if (e && e.status && e.status >= 500 && 501 !== e.status) return !0;

          if (t) {
            if (t.code && v.includes(t.code)) return !0;
            if (t.timeout && "ECONNABORTED" === t.code) return !0;
            if (t.crossDomain) return !0;
          }

          return !1;
        }, o.prototype._retry = function () {
          return this.clearTimeout(), this.req && (this.req = null, this.req = this.request()), this._aborted = !1, this.timedout = !1, this.timedoutError = null, this._end();
        }, o.prototype.then = function (t, e) {
          var n = this;

          if (!this._fullfilledPromise) {
            var r = this;
            this._endCalled && console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"), this._fullfilledPromise = new u.default(function (t, e) {
              r.on("abort", function () {
                if (n.timedout && n.timedoutError) return void e(n.timedoutError);
                var t = new Error("Aborted");
                t.code = "ABORTED", t.status = n.status, t.method = n.method, t.url = n.url, e(t);
              }), r.end(function (n, r) {
                n ? e(n) : t(r);
              });
            });
          }

          return this._fullfilledPromise.then(t, e);
        }, o.prototype.catch = function (t) {
          return this.then(void 0, t);
        }, o.prototype.use = function (t) {
          return t(this), this;
        }, o.prototype.ok = function (t) {
          if ("function" != typeof t) throw new Error("Callback required");
          return this._okCallback = t, this;
        }, o.prototype._isResponseOK = function (t) {
          return !!t && (this._okCallback ? this._okCallback(t) : t.status >= 200 && t.status < 300);
        }, o.prototype.get = function (t) {
          return this._header[t.toLowerCase()];
        }, o.prototype.getHeader = o.prototype.get, o.prototype.set = function (t, e) {
          if (_(t)) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && this.set(n, t[n]);

            return this;
          }

          return this._header[t.toLowerCase()] = e, this.header[t] = e, this;
        }, o.prototype.unset = function (t) {
          return delete this._header[t.toLowerCase()], delete this.header[t], this;
        }, o.prototype.field = function (t, e) {
          if (null === t || void 0 === t) throw new Error(".field(name, val) name can not be empty");
          if (this._data) throw new Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");

          if (_(t)) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && this.field(n, t[n]);

            return this;
          }

          if (Array.isArray(e)) {
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && this.field(t, e[r]);

            return this;
          }

          if (null === e || void 0 === e) throw new Error(".field(name, val) val can not be empty");
          return "boolean" == typeof e && (e = String(e)), this._getFormData().append(t, e), this;
        }, o.prototype.abort = function () {
          return this._aborted ? this : (this._aborted = !0, this.xhr && this.xhr.abort(), this.req && this.req.abort(), this.clearTimeout(), this.emit("abort"), this);
        }, o.prototype._auth = function (t, e, n, r) {
          switch (n.type) {
            case "basic":
              this.set("Authorization", "Basic ".concat(r("".concat(t, ":").concat(e))));
              break;

            case "auto":
              this.username = t, this.password = e;
              break;

            case "bearer":
              this.set("Authorization", "Bearer ".concat(t));
          }

          return this;
        }, o.prototype.withCredentials = function (t) {
          return void 0 === t && (t = !0), this._withCredentials = t, this;
        }, o.prototype.redirects = function (t) {
          return this._maxRedirects = t, this;
        }, o.prototype.maxResponseSize = function (t) {
          if ("number" != typeof t) throw new TypeError("Invalid argument");
          return this._maxResponseSize = t, this;
        }, o.prototype.toJSON = function () {
          return {
            method: this.method,
            url: this.url,
            data: this._data,
            headers: this._header
          };
        }, o.prototype.send = function (t) {
          var e = _(t),
              n = this._header["content-type"];

          if (this._formData) throw new Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
          if (e && !this._data) Array.isArray(t) ? this._data = [] : this._isHost(t) || (this._data = {});else if (t && this._data && this._isHost(this._data)) throw new Error("Can't merge these send calls");
          if (e && _(this._data)) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (this._data[r] = t[r]);else "string" == typeof t ? (n || this.type("form"), n = this._header["content-type"], this._data = "application/x-www-form-urlencoded" === n ? this._data ? "".concat(this._data, "&").concat(t) : t : (this._data || "") + t) : this._data = t;
          return !e || this._isHost(t) ? this : (n || this.type("json"), this);
        }, o.prototype.sortQuery = function (t) {
          return this._sort = void 0 === t || t, this;
        }, o.prototype._finalizeQueryString = function () {
          var t = this._query.join("&");

          if (t && (this.url += (this.url.includes("?") ? "&" : "?") + t), this._query.length = 0, this._sort) {
            var e = this.url.indexOf("?");

            if (e >= 0) {
              var n = this.url.slice(e + 1).split("&");
              "function" == typeof this._sort ? n.sort(this._sort) : n.sort(), this.url = this.url.slice(0, e) + "?" + n.join("&");
            }
          }
        }, o.prototype._appendQueryString = function () {
          console.warn("Unsupported");
        }, o.prototype._timeoutError = function (t, e, n) {
          if (!this._aborted) {
            var r = new Error("".concat(t + e, "ms exceeded"));
            r.timeout = e, r.code = "ECONNABORTED", r.errno = n, this.timedout = !0, this.timedoutError = r, this.abort(), this.callback(r);
          }
        }, o.prototype._setTimeouts = function () {
          var t = this;
          this._timeout && !this._timer && (this._timer = setTimeout(function () {
            t._timeoutError("Timeout of ", t._timeout, "ETIME");
          }, this._timeout)), this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout(function () {
            t._timeoutError("Response timeout of ", t._responseTimeout, "ETIMEDOUT");
          }, this._responseTimeout));
        };
      }, function (t, e, n) {

        function r(t) {
          if (t) return i(t);
        }

        function i(t) {
          for (var e in r.prototype) Object.prototype.hasOwnProperty.call(r.prototype, e) && (t[e] = r.prototype[e]);

          return t;
        }

        var o = n(173);
        t.exports = r, r.prototype.get = function (t) {
          return this.header[t.toLowerCase()];
        }, r.prototype._setHeaderProperties = function (t) {
          var e = t["content-type"] || "";
          this.type = o.type(e);
          var n = o.params(e);

          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (this[r] = n[r]);

          this.links = {};

          try {
            t.link && (this.links = o.parseLinks(t.link));
          } catch (t) {}
        }, r.prototype._setStatusProperties = function (t) {
          var e = t / 100 | 0;
          this.statusCode = t, this.status = this.statusCode, this.statusType = e, this.info = 1 === e, this.ok = 2 === e, this.redirect = 3 === e, this.clientError = 4 === e, this.serverError = 5 === e, this.error = (4 === e || 5 === e) && this.toError(), this.created = 201 === t, this.accepted = 202 === t, this.noContent = 204 === t, this.badRequest = 400 === t, this.unauthorized = 401 === t, this.notAcceptable = 406 === t, this.forbidden = 403 === t, this.notFound = 404 === t, this.unprocessableEntity = 422 === t;
        };
      }, function (t, e, n) {

        e.type = function (t) {
          return t.split(/ *; */).shift();
        }, e.params = function (t) {
          return t.split(/ *; */).reduce(function (t, e) {
            var n = e.split(/ *= */),
                r = n.shift(),
                i = n.shift();
            return r && i && (t[r] = i), t;
          }, {});
        }, e.parseLinks = function (t) {
          return t.split(/ *, */).reduce(function (t, e) {
            var n = e.split(/ *; */),
                r = n[0].slice(1, -1);
            return t[n[1].split(/ *= */)[1].slice(1, -1)] = r, t;
          }, {});
        }, e.cleanHeader = function (t, e) {
          return delete t["content-type"], delete t["content-length"], delete t["transfer-encoding"], delete t.host, e && (delete t.authorization, delete t.cookie), t;
        };
      }, function (t, e, n) {

        function r(t) {
          return t && t.__esModule ? t : {
            default: t
          };
        }

        function i(t) {
          return a(t) || s(t) || o();
        }

        function o() {
          throw new TypeError("Invalid attempt to spread non-iterable instance");
        }

        function s(t) {
          if ((0, h.default)(Object(t)) || "[object Arguments]" === Object.prototype.toString.call(t)) return (0, l.default)(t);
        }

        function a(t) {
          if (Array.isArray(t)) {
            for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];

            return n;
          }
        }

        function u() {
          this._defaults = [];
        }

        var c = n(175),
            l = r(c),
            f = n(78),
            h = r(f);
        ["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert", "disableTLSCerts"].forEach(function (t) {
          u.prototype[t] = function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];

            return this._defaults.push({
              fn: t,
              args: n
            }), this;
          };
        }), u.prototype._setDefaults = function (t) {
          this._defaults.forEach(function (e) {
            t[e.fn].apply(t, i(e.args));
          });
        }, t.exports = u;
      }, function (t, e, n) {
        t.exports = {
          default: n(176),
          __esModule: !0
        };
      }, function (t, e, n) {
        n(20), n(177), t.exports = n(1).Array.from;
      }, function (t, e, n) {

        var r = n(22),
            i = n(10),
            o = n(26),
            s = n(59),
            a = n(60),
            u = n(40),
            c = n(178),
            l = n(45);
        i(i.S + i.F * !n(65)(function (t) {
          Array.from(t);
        }), "Array", {
          from: function (t) {
            var e,
                n,
                i,
                f,
                h = o(t),
                d = "function" == typeof this ? this : Array,
                p = arguments.length,
                _ = p > 1 ? arguments[1] : void 0,
                v = void 0 !== _,
                y = 0,
                m = l(h);

            if (v && (_ = r(_, p > 2 ? arguments[2] : void 0, 2)), void 0 == m || d == Array && a(m)) for (e = u(h.length), n = new d(e); e > y; y++) c(n, y, v ? _(h[y], y) : h[y]);else for (f = m.call(h), n = new d(); !(i = f.next()).done; y++) c(n, y, v ? s(f, _, [i.value, y], !0) : i.value);
            return n.length = y, n;
          }
        });
      }, function (t, e, n) {

        var r = n(7),
            i = n(24);

        t.exports = function (t, e, n) {
          e in t ? r.f(t, e, i(0, n)) : t[e] = n;
        };
      }, function (t, e, n) {

        t.exports = [];
      }]);
    });
  });
  var AV = /*@__PURE__*/getDefaultExportFromCjs(avMin);

  var showdown_min = createCommonjsModule(function (module) {
    (function () {
      function e(e) {

        var r = {
          omitExtraWLInCodeBlocks: {
            defaultValue: !1,
            describe: "Omit the default extra whiteline added to code blocks",
            type: "boolean"
          },
          noHeaderId: {
            defaultValue: !1,
            describe: "Turn on/off generated header id",
            type: "boolean"
          },
          prefixHeaderId: {
            defaultValue: !1,
            describe: "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
            type: "string"
          },
          rawPrefixHeaderId: {
            defaultValue: !1,
            describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
            type: "boolean"
          },
          ghCompatibleHeaderId: {
            defaultValue: !1,
            describe: "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
            type: "boolean"
          },
          rawHeaderId: {
            defaultValue: !1,
            describe: "Remove only spaces, ' and \" from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids",
            type: "boolean"
          },
          headerLevelStart: {
            defaultValue: !1,
            describe: "The header blocks level start",
            type: "integer"
          },
          parseImgDimensions: {
            defaultValue: !1,
            describe: "Turn on/off image dimension parsing",
            type: "boolean"
          },
          simplifiedAutoLink: {
            defaultValue: !1,
            describe: "Turn on/off GFM autolink style",
            type: "boolean"
          },
          excludeTrailingPunctuationFromURLs: {
            defaultValue: !1,
            describe: "Excludes trailing punctuation from links generated with autoLinking",
            type: "boolean"
          },
          literalMidWordUnderscores: {
            defaultValue: !1,
            describe: "Parse midword underscores as literal underscores",
            type: "boolean"
          },
          literalMidWordAsterisks: {
            defaultValue: !1,
            describe: "Parse midword asterisks as literal asterisks",
            type: "boolean"
          },
          strikethrough: {
            defaultValue: !1,
            describe: "Turn on/off strikethrough support",
            type: "boolean"
          },
          tables: {
            defaultValue: !1,
            describe: "Turn on/off tables support",
            type: "boolean"
          },
          tablesHeaderId: {
            defaultValue: !1,
            describe: "Add an id to table headers",
            type: "boolean"
          },
          ghCodeBlocks: {
            defaultValue: !0,
            describe: "Turn on/off GFM fenced code blocks support",
            type: "boolean"
          },
          tasklists: {
            defaultValue: !1,
            describe: "Turn on/off GFM tasklist support",
            type: "boolean"
          },
          smoothLivePreview: {
            defaultValue: !1,
            describe: "Prevents weird effects in live previews due to incomplete input",
            type: "boolean"
          },
          smartIndentationFix: {
            defaultValue: !1,
            description: "Tries to smartly fix indentation in es6 strings",
            type: "boolean"
          },
          disableForced4SpacesIndentedSublists: {
            defaultValue: !1,
            description: "Disables the requirement of indenting nested sublists by 4 spaces",
            type: "boolean"
          },
          simpleLineBreaks: {
            defaultValue: !1,
            description: "Parses simple line breaks as <br> (GFM Style)",
            type: "boolean"
          },
          requireSpaceBeforeHeadingText: {
            defaultValue: !1,
            description: "Makes adding a space between `#` and the header text mandatory (GFM Style)",
            type: "boolean"
          },
          ghMentions: {
            defaultValue: !1,
            description: "Enables github @mentions",
            type: "boolean"
          },
          ghMentionsLink: {
            defaultValue: "https://github.com/{u}",
            description: "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
            type: "string"
          },
          encodeEmails: {
            defaultValue: !0,
            description: "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
            type: "boolean"
          },
          openLinksInNewWindow: {
            defaultValue: !1,
            description: "Open all links in new windows",
            type: "boolean"
          },
          backslashEscapesHTMLTags: {
            defaultValue: !1,
            description: "Support for HTML Tag escaping. ex: <div>foo</div>",
            type: "boolean"
          },
          emoji: {
            defaultValue: !1,
            description: "Enable emoji support. Ex: `this is a :smile: emoji`",
            type: "boolean"
          },
          underline: {
            defaultValue: !1,
            description: "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
            type: "boolean"
          },
          completeHTMLDocument: {
            defaultValue: !1,
            description: "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
            type: "boolean"
          },
          metadata: {
            defaultValue: !1,
            description: "Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",
            type: "boolean"
          },
          splitAdjacentBlockquotes: {
            defaultValue: !1,
            description: "Split adjacent blockquote blocks",
            type: "boolean"
          }
        };
        if (!1 === e) return JSON.parse(JSON.stringify(r));
        var t = {};

        for (var a in r) r.hasOwnProperty(a) && (t[a] = r[a].defaultValue);

        return t;
      }

      function r(e, r) {

        var t = r ? "Error in " + r + " extension->" : "Error in unnamed extension",
            n = {
          valid: !0,
          error: ""
        };
        a.helper.isArray(e) || (e = [e]);

        for (var s = 0; s < e.length; ++s) {
          var o = t + " sub-extension " + s + ": ",
              i = e[s];
          if ("object" != typeof i) return n.valid = !1, n.error = o + "must be an object, but " + typeof i + " given", n;
          if (!a.helper.isString(i.type)) return n.valid = !1, n.error = o + 'property "type" must be a string, but ' + typeof i.type + " given", n;
          var l = i.type = i.type.toLowerCase();
          if ("language" === l && (l = i.type = "lang"), "html" === l && (l = i.type = "output"), "lang" !== l && "output" !== l && "listener" !== l) return n.valid = !1, n.error = o + "type " + l + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"', n;

          if ("listener" === l) {
            if (a.helper.isUndefined(i.listeners)) return n.valid = !1, n.error = o + '. Extensions of type "listener" must have a property called "listeners"', n;
          } else if (a.helper.isUndefined(i.filter) && a.helper.isUndefined(i.regex)) return n.valid = !1, n.error = o + l + ' extensions must define either a "regex" property or a "filter" method', n;

          if (i.listeners) {
            if ("object" != typeof i.listeners) return n.valid = !1, n.error = o + '"listeners" property must be an object but ' + typeof i.listeners + " given", n;

            for (var c in i.listeners) if (i.listeners.hasOwnProperty(c) && "function" != typeof i.listeners[c]) return n.valid = !1, n.error = o + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + c + " must be a function but " + typeof i.listeners[c] + " given", n;
          }

          if (i.filter) {
            if ("function" != typeof i.filter) return n.valid = !1, n.error = o + '"filter" must be a function, but ' + typeof i.filter + " given", n;
          } else if (i.regex) {
            if (a.helper.isString(i.regex) && (i.regex = new RegExp(i.regex, "g")), !(i.regex instanceof RegExp)) return n.valid = !1, n.error = o + '"regex" property must either be a string or a RegExp object, but ' + typeof i.regex + " given", n;
            if (a.helper.isUndefined(i.replace)) return n.valid = !1, n.error = o + '"regex" extensions must implement a replace string or function', n;
          }
        }

        return n;
      }

      function t(e, r) {

        return "¨E" + r.charCodeAt(0) + "E";
      }

      var a = {},
          n = {},
          s = {},
          o = e(!0),
          i = "vanilla",
          l = {
        github: {
          omitExtraWLInCodeBlocks: !0,
          simplifiedAutoLink: !0,
          excludeTrailingPunctuationFromURLs: !0,
          literalMidWordUnderscores: !0,
          strikethrough: !0,
          tables: !0,
          tablesHeaderId: !0,
          ghCodeBlocks: !0,
          tasklists: !0,
          disableForced4SpacesIndentedSublists: !0,
          simpleLineBreaks: !0,
          requireSpaceBeforeHeadingText: !0,
          ghCompatibleHeaderId: !0,
          ghMentions: !0,
          backslashEscapesHTMLTags: !0,
          emoji: !0,
          splitAdjacentBlockquotes: !0
        },
        original: {
          noHeaderId: !0,
          ghCodeBlocks: !1
        },
        ghost: {
          omitExtraWLInCodeBlocks: !0,
          parseImgDimensions: !0,
          simplifiedAutoLink: !0,
          excludeTrailingPunctuationFromURLs: !0,
          literalMidWordUnderscores: !0,
          strikethrough: !0,
          tables: !0,
          tablesHeaderId: !0,
          ghCodeBlocks: !0,
          tasklists: !0,
          smoothLivePreview: !0,
          simpleLineBreaks: !0,
          requireSpaceBeforeHeadingText: !0,
          ghMentions: !1,
          encodeEmails: !0
        },
        vanilla: e(!0),
        allOn: function () {

          var r = e(!0),
              t = {};

          for (var a in r) r.hasOwnProperty(a) && (t[a] = !0);

          return t;
        }()
      };
      a.helper = {}, a.extensions = {}, a.setOption = function (e, r) {

        return o[e] = r, this;
      }, a.getOption = function (e) {

        return o[e];
      }, a.getOptions = function () {

        return o;
      }, a.resetOptions = function () {

        o = e(!0);
      }, a.setFlavor = function (e) {

        if (!l.hasOwnProperty(e)) throw Error(e + " flavor was not found");
        a.resetOptions();
        var r = l[e];
        i = e;

        for (var t in r) r.hasOwnProperty(t) && (o[t] = r[t]);
      }, a.getFlavor = function () {

        return i;
      }, a.getFlavorOptions = function (e) {

        if (l.hasOwnProperty(e)) return l[e];
      }, a.getDefaultOptions = function (r) {

        return e(r);
      }, a.subParser = function (e, r) {

        if (a.helper.isString(e)) {
          if (void 0 === r) {
            if (n.hasOwnProperty(e)) return n[e];
            throw Error("SubParser named " + e + " not registered!");
          }

          n[e] = r;
        }
      }, a.extension = function (e, t) {

        if (!a.helper.isString(e)) throw Error("Extension 'name' must be a string");

        if (e = a.helper.stdExtName(e), a.helper.isUndefined(t)) {
          if (!s.hasOwnProperty(e)) throw Error("Extension named " + e + " is not registered!");
          return s[e];
        }

        "function" == typeof t && (t = t()), a.helper.isArray(t) || (t = [t]);
        var n = r(t, e);
        if (!n.valid) throw Error(n.error);
        s[e] = t;
      }, a.getAllExtensions = function () {

        return s;
      }, a.removeExtension = function (e) {

        delete s[e];
      }, a.resetExtensions = function () {

        s = {};
      }, a.validateExtension = function (e) {

        var t = r(e, null);
        return !!t.valid || (console.warn(t.error), !1);
      }, a.hasOwnProperty("helper") || (a.helper = {}), a.helper.isString = function (e) {

        return "string" == typeof e || e instanceof String;
      }, a.helper.isFunction = function (e) {

        return e && "[object Function]" === {}.toString.call(e);
      }, a.helper.isArray = function (e) {

        return Array.isArray(e);
      }, a.helper.isUndefined = function (e) {

        return void 0 === e;
      }, a.helper.forEach = function (e, r) {

        if (a.helper.isUndefined(e)) throw new Error("obj param is required");
        if (a.helper.isUndefined(r)) throw new Error("callback param is required");
        if (!a.helper.isFunction(r)) throw new Error("callback param must be a function/closure");
        if ("function" == typeof e.forEach) e.forEach(r);else if (a.helper.isArray(e)) for (var t = 0; t < e.length; t++) r(e[t], t, e);else {
          if ("object" != typeof e) throw new Error("obj does not seem to be an array or an iterable object");

          for (var n in e) e.hasOwnProperty(n) && r(e[n], n, e);
        }
      }, a.helper.stdExtName = function (e) {

        return e.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase();
      }, a.helper.escapeCharactersCallback = t, a.helper.escapeCharacters = function (e, r, a) {

        var n = "([" + r.replace(/([\[\]\\])/g, "\\$1") + "])";
        a && (n = "\\\\" + n);
        var s = new RegExp(n, "g");
        return e = e.replace(s, t);
      }, a.helper.unescapeHTMLEntities = function (e) {

        return e.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
      };

      var c = function (e, r, t, a) {

        var n,
            s,
            o,
            i,
            l,
            c = a || "",
            u = c.indexOf("g") > -1,
            d = new RegExp(r + "|" + t, "g" + c.replace(/g/g, "")),
            p = new RegExp(r, c.replace(/g/g, "")),
            h = [];

        do {
          for (n = 0; o = d.exec(e);) if (p.test(o[0])) n++ || (i = (s = d.lastIndex) - o[0].length);else if (n && ! --n) {
            l = o.index + o[0].length;
            var _ = {
              left: {
                start: i,
                end: s
              },
              match: {
                start: s,
                end: o.index
              },
              right: {
                start: o.index,
                end: l
              },
              wholeMatch: {
                start: i,
                end: l
              }
            };
            if (h.push(_), !u) return h;
          }
        } while (n && (d.lastIndex = s));

        return h;
      };

      a.helper.matchRecursiveRegExp = function (e, r, t, a) {

        for (var n = c(e, r, t, a), s = [], o = 0; o < n.length; ++o) s.push([e.slice(n[o].wholeMatch.start, n[o].wholeMatch.end), e.slice(n[o].match.start, n[o].match.end), e.slice(n[o].left.start, n[o].left.end), e.slice(n[o].right.start, n[o].right.end)]);

        return s;
      }, a.helper.replaceRecursiveRegExp = function (e, r, t, n, s) {

        if (!a.helper.isFunction(r)) {
          var o = r;

          r = function () {
            return o;
          };
        }

        var i = c(e, t, n, s),
            l = e,
            u = i.length;

        if (u > 0) {
          var d = [];
          0 !== i[0].wholeMatch.start && d.push(e.slice(0, i[0].wholeMatch.start));

          for (var p = 0; p < u; ++p) d.push(r(e.slice(i[p].wholeMatch.start, i[p].wholeMatch.end), e.slice(i[p].match.start, i[p].match.end), e.slice(i[p].left.start, i[p].left.end), e.slice(i[p].right.start, i[p].right.end))), p < u - 1 && d.push(e.slice(i[p].wholeMatch.end, i[p + 1].wholeMatch.start));

          i[u - 1].wholeMatch.end < e.length && d.push(e.slice(i[u - 1].wholeMatch.end)), l = d.join("");
        }

        return l;
      }, a.helper.regexIndexOf = function (e, r, t) {

        if (!a.helper.isString(e)) throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        if (r instanceof RegExp == !1) throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
        var n = e.substring(t || 0).search(r);
        return n >= 0 ? n + (t || 0) : n;
      }, a.helper.splitAtIndex = function (e, r) {

        if (!a.helper.isString(e)) throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        return [e.substring(0, r), e.substring(r)];
      }, a.helper.encodeEmailAddress = function (e) {

        var r = [function (e) {
          return "&#" + e.charCodeAt(0) + ";";
        }, function (e) {
          return "&#x" + e.charCodeAt(0).toString(16) + ";";
        }, function (e) {
          return e;
        }];
        return e = e.replace(/./g, function (e) {
          if ("@" === e) e = r[Math.floor(2 * Math.random())](e);else {
            var t = Math.random();
            e = t > .9 ? r[2](e) : t > .45 ? r[1](e) : r[0](e);
          }
          return e;
        });
      }, a.helper.padEnd = function (e, r, t) {

        return r >>= 0, t = String(t || " "), e.length > r ? String(e) : ((r -= e.length) > t.length && (t += t.repeat(r / t.length)), String(e) + t.slice(0, r));
      }, "undefined" == typeof console && (console = {
        warn: function (e) {

          alert(e);
        },
        log: function (e) {

          alert(e);
        },
        error: function (e) {

          throw e;
        }
      }), a.helper.regexes = {
        asteriskDashAndColon: /([*_:~])/g
      }, a.helper.emojis = {
        "+1": "👍",
        "-1": "👎",
        100: "💯",
        1234: "🔢",
        "1st_place_medal": "🥇",
        "2nd_place_medal": "🥈",
        "3rd_place_medal": "🥉",
        "8ball": "🎱",
        a: "🅰️",
        ab: "🆎",
        abc: "🔤",
        abcd: "🔡",
        accept: "🉑",
        aerial_tramway: "🚡",
        airplane: "✈️",
        alarm_clock: "⏰",
        alembic: "⚗️",
        alien: "👽",
        ambulance: "🚑",
        amphora: "🏺",
        anchor: "⚓️",
        angel: "👼",
        anger: "💢",
        angry: "😠",
        anguished: "😧",
        ant: "🐜",
        apple: "🍎",
        aquarius: "♒️",
        aries: "♈️",
        arrow_backward: "◀️",
        arrow_double_down: "⏬",
        arrow_double_up: "⏫",
        arrow_down: "⬇️",
        arrow_down_small: "🔽",
        arrow_forward: "▶️",
        arrow_heading_down: "⤵️",
        arrow_heading_up: "⤴️",
        arrow_left: "⬅️",
        arrow_lower_left: "↙️",
        arrow_lower_right: "↘️",
        arrow_right: "➡️",
        arrow_right_hook: "↪️",
        arrow_up: "⬆️",
        arrow_up_down: "↕️",
        arrow_up_small: "🔼",
        arrow_upper_left: "↖️",
        arrow_upper_right: "↗️",
        arrows_clockwise: "🔃",
        arrows_counterclockwise: "🔄",
        art: "🎨",
        articulated_lorry: "🚛",
        artificial_satellite: "🛰",
        astonished: "😲",
        athletic_shoe: "👟",
        atm: "🏧",
        atom_symbol: "⚛️",
        avocado: "🥑",
        b: "🅱️",
        baby: "👶",
        baby_bottle: "🍼",
        baby_chick: "🐤",
        baby_symbol: "🚼",
        back: "🔙",
        bacon: "🥓",
        badminton: "🏸",
        baggage_claim: "🛄",
        baguette_bread: "🥖",
        balance_scale: "⚖️",
        balloon: "🎈",
        ballot_box: "🗳",
        ballot_box_with_check: "☑️",
        bamboo: "🎍",
        banana: "🍌",
        bangbang: "‼️",
        bank: "🏦",
        bar_chart: "📊",
        barber: "💈",
        baseball: "⚾️",
        basketball: "🏀",
        basketball_man: "⛹️",
        basketball_woman: "⛹️&zwj;♀️",
        bat: "🦇",
        bath: "🛀",
        bathtub: "🛁",
        battery: "🔋",
        beach_umbrella: "🏖",
        bear: "🐻",
        bed: "🛏",
        bee: "🐝",
        beer: "🍺",
        beers: "🍻",
        beetle: "🐞",
        beginner: "🔰",
        bell: "🔔",
        bellhop_bell: "🛎",
        bento: "🍱",
        biking_man: "🚴",
        bike: "🚲",
        biking_woman: "🚴&zwj;♀️",
        bikini: "👙",
        biohazard: "☣️",
        bird: "🐦",
        birthday: "🎂",
        black_circle: "⚫️",
        black_flag: "🏴",
        black_heart: "🖤",
        black_joker: "🃏",
        black_large_square: "⬛️",
        black_medium_small_square: "◾️",
        black_medium_square: "◼️",
        black_nib: "✒️",
        black_small_square: "▪️",
        black_square_button: "🔲",
        blonde_man: "👱",
        blonde_woman: "👱&zwj;♀️",
        blossom: "🌼",
        blowfish: "🐡",
        blue_book: "📘",
        blue_car: "🚙",
        blue_heart: "💙",
        blush: "😊",
        boar: "🐗",
        boat: "⛵️",
        bomb: "💣",
        book: "📖",
        bookmark: "🔖",
        bookmark_tabs: "📑",
        books: "📚",
        boom: "💥",
        boot: "👢",
        bouquet: "💐",
        bowing_man: "🙇",
        bow_and_arrow: "🏹",
        bowing_woman: "🙇&zwj;♀️",
        bowling: "🎳",
        boxing_glove: "🥊",
        boy: "👦",
        bread: "🍞",
        bride_with_veil: "👰",
        bridge_at_night: "🌉",
        briefcase: "💼",
        broken_heart: "💔",
        bug: "🐛",
        building_construction: "🏗",
        bulb: "💡",
        bullettrain_front: "🚅",
        bullettrain_side: "🚄",
        burrito: "🌯",
        bus: "🚌",
        business_suit_levitating: "🕴",
        busstop: "🚏",
        bust_in_silhouette: "👤",
        busts_in_silhouette: "👥",
        butterfly: "🦋",
        cactus: "🌵",
        cake: "🍰",
        calendar: "📆",
        call_me_hand: "🤙",
        calling: "📲",
        camel: "🐫",
        camera: "📷",
        camera_flash: "📸",
        camping: "🏕",
        cancer: "♋️",
        candle: "🕯",
        candy: "🍬",
        canoe: "🛶",
        capital_abcd: "🔠",
        capricorn: "♑️",
        car: "🚗",
        card_file_box: "🗃",
        card_index: "📇",
        card_index_dividers: "🗂",
        carousel_horse: "🎠",
        carrot: "🥕",
        cat: "🐱",
        cat2: "🐈",
        cd: "💿",
        chains: "⛓",
        champagne: "🍾",
        chart: "💹",
        chart_with_downwards_trend: "📉",
        chart_with_upwards_trend: "📈",
        checkered_flag: "🏁",
        cheese: "🧀",
        cherries: "🍒",
        cherry_blossom: "🌸",
        chestnut: "🌰",
        chicken: "🐔",
        children_crossing: "🚸",
        chipmunk: "🐿",
        chocolate_bar: "🍫",
        christmas_tree: "🎄",
        church: "⛪️",
        cinema: "🎦",
        circus_tent: "🎪",
        city_sunrise: "🌇",
        city_sunset: "🌆",
        cityscape: "🏙",
        cl: "🆑",
        clamp: "🗜",
        clap: "👏",
        clapper: "🎬",
        classical_building: "🏛",
        clinking_glasses: "🥂",
        clipboard: "📋",
        clock1: "🕐",
        clock10: "🕙",
        clock1030: "🕥",
        clock11: "🕚",
        clock1130: "🕦",
        clock12: "🕛",
        clock1230: "🕧",
        clock130: "🕜",
        clock2: "🕑",
        clock230: "🕝",
        clock3: "🕒",
        clock330: "🕞",
        clock4: "🕓",
        clock430: "🕟",
        clock5: "🕔",
        clock530: "🕠",
        clock6: "🕕",
        clock630: "🕡",
        clock7: "🕖",
        clock730: "🕢",
        clock8: "🕗",
        clock830: "🕣",
        clock9: "🕘",
        clock930: "🕤",
        closed_book: "📕",
        closed_lock_with_key: "🔐",
        closed_umbrella: "🌂",
        cloud: "☁️",
        cloud_with_lightning: "🌩",
        cloud_with_lightning_and_rain: "⛈",
        cloud_with_rain: "🌧",
        cloud_with_snow: "🌨",
        clown_face: "🤡",
        clubs: "♣️",
        cocktail: "🍸",
        coffee: "☕️",
        coffin: "⚰️",
        cold_sweat: "😰",
        comet: "☄️",
        computer: "💻",
        computer_mouse: "🖱",
        confetti_ball: "🎊",
        confounded: "😖",
        confused: "😕",
        congratulations: "㊗️",
        construction: "🚧",
        construction_worker_man: "👷",
        construction_worker_woman: "👷&zwj;♀️",
        control_knobs: "🎛",
        convenience_store: "🏪",
        cookie: "🍪",
        cool: "🆒",
        policeman: "👮",
        copyright: "©️",
        corn: "🌽",
        couch_and_lamp: "🛋",
        couple: "👫",
        couple_with_heart_woman_man: "💑",
        couple_with_heart_man_man: "👨&zwj;❤️&zwj;👨",
        couple_with_heart_woman_woman: "👩&zwj;❤️&zwj;👩",
        couplekiss_man_man: "👨&zwj;❤️&zwj;💋&zwj;👨",
        couplekiss_man_woman: "💏",
        couplekiss_woman_woman: "👩&zwj;❤️&zwj;💋&zwj;👩",
        cow: "🐮",
        cow2: "🐄",
        cowboy_hat_face: "🤠",
        crab: "🦀",
        crayon: "🖍",
        credit_card: "💳",
        crescent_moon: "🌙",
        cricket: "🏏",
        crocodile: "🐊",
        croissant: "🥐",
        crossed_fingers: "🤞",
        crossed_flags: "🎌",
        crossed_swords: "⚔️",
        crown: "👑",
        cry: "😢",
        crying_cat_face: "😿",
        crystal_ball: "🔮",
        cucumber: "🥒",
        cupid: "💘",
        curly_loop: "➰",
        currency_exchange: "💱",
        curry: "🍛",
        custard: "🍮",
        customs: "🛃",
        cyclone: "🌀",
        dagger: "🗡",
        dancer: "💃",
        dancing_women: "👯",
        dancing_men: "👯&zwj;♂️",
        dango: "🍡",
        dark_sunglasses: "🕶",
        dart: "🎯",
        dash: "💨",
        date: "📅",
        deciduous_tree: "🌳",
        deer: "🦌",
        department_store: "🏬",
        derelict_house: "🏚",
        desert: "🏜",
        desert_island: "🏝",
        desktop_computer: "🖥",
        male_detective: "🕵️",
        diamond_shape_with_a_dot_inside: "💠",
        diamonds: "♦️",
        disappointed: "😞",
        disappointed_relieved: "😥",
        dizzy: "💫",
        dizzy_face: "😵",
        do_not_litter: "🚯",
        dog: "🐶",
        dog2: "🐕",
        dollar: "💵",
        dolls: "🎎",
        dolphin: "🐬",
        door: "🚪",
        doughnut: "🍩",
        dove: "🕊",
        dragon: "🐉",
        dragon_face: "🐲",
        dress: "👗",
        dromedary_camel: "🐪",
        drooling_face: "🤤",
        droplet: "💧",
        drum: "🥁",
        duck: "🦆",
        dvd: "📀",
        "e-mail": "📧",
        eagle: "🦅",
        ear: "👂",
        ear_of_rice: "🌾",
        earth_africa: "🌍",
        earth_americas: "🌎",
        earth_asia: "🌏",
        egg: "🥚",
        eggplant: "🍆",
        eight_pointed_black_star: "✴️",
        eight_spoked_asterisk: "✳️",
        electric_plug: "🔌",
        elephant: "🐘",
        email: "✉️",
        end: "🔚",
        envelope_with_arrow: "📩",
        euro: "💶",
        european_castle: "🏰",
        european_post_office: "🏤",
        evergreen_tree: "🌲",
        exclamation: "❗️",
        expressionless: "😑",
        eye: "👁",
        eye_speech_bubble: "👁&zwj;🗨",
        eyeglasses: "👓",
        eyes: "👀",
        face_with_head_bandage: "🤕",
        face_with_thermometer: "🤒",
        fist_oncoming: "👊",
        factory: "🏭",
        fallen_leaf: "🍂",
        family_man_woman_boy: "👪",
        family_man_boy: "👨&zwj;👦",
        family_man_boy_boy: "👨&zwj;👦&zwj;👦",
        family_man_girl: "👨&zwj;👧",
        family_man_girl_boy: "👨&zwj;👧&zwj;👦",
        family_man_girl_girl: "👨&zwj;👧&zwj;👧",
        family_man_man_boy: "👨&zwj;👨&zwj;👦",
        family_man_man_boy_boy: "👨&zwj;👨&zwj;👦&zwj;👦",
        family_man_man_girl: "👨&zwj;👨&zwj;👧",
        family_man_man_girl_boy: "👨&zwj;👨&zwj;👧&zwj;👦",
        family_man_man_girl_girl: "👨&zwj;👨&zwj;👧&zwj;👧",
        family_man_woman_boy_boy: "👨&zwj;👩&zwj;👦&zwj;👦",
        family_man_woman_girl: "👨&zwj;👩&zwj;👧",
        family_man_woman_girl_boy: "👨&zwj;👩&zwj;👧&zwj;👦",
        family_man_woman_girl_girl: "👨&zwj;👩&zwj;👧&zwj;👧",
        family_woman_boy: "👩&zwj;👦",
        family_woman_boy_boy: "👩&zwj;👦&zwj;👦",
        family_woman_girl: "👩&zwj;👧",
        family_woman_girl_boy: "👩&zwj;👧&zwj;👦",
        family_woman_girl_girl: "👩&zwj;👧&zwj;👧",
        family_woman_woman_boy: "👩&zwj;👩&zwj;👦",
        family_woman_woman_boy_boy: "👩&zwj;👩&zwj;👦&zwj;👦",
        family_woman_woman_girl: "👩&zwj;👩&zwj;👧",
        family_woman_woman_girl_boy: "👩&zwj;👩&zwj;👧&zwj;👦",
        family_woman_woman_girl_girl: "👩&zwj;👩&zwj;👧&zwj;👧",
        fast_forward: "⏩",
        fax: "📠",
        fearful: "😨",
        feet: "🐾",
        female_detective: "🕵️&zwj;♀️",
        ferris_wheel: "🎡",
        ferry: "⛴",
        field_hockey: "🏑",
        file_cabinet: "🗄",
        file_folder: "📁",
        film_projector: "📽",
        film_strip: "🎞",
        fire: "🔥",
        fire_engine: "🚒",
        fireworks: "🎆",
        first_quarter_moon: "🌓",
        first_quarter_moon_with_face: "🌛",
        fish: "🐟",
        fish_cake: "🍥",
        fishing_pole_and_fish: "🎣",
        fist_raised: "✊",
        fist_left: "🤛",
        fist_right: "🤜",
        flags: "🎏",
        flashlight: "🔦",
        fleur_de_lis: "⚜️",
        flight_arrival: "🛬",
        flight_departure: "🛫",
        floppy_disk: "💾",
        flower_playing_cards: "🎴",
        flushed: "😳",
        fog: "🌫",
        foggy: "🌁",
        football: "🏈",
        footprints: "👣",
        fork_and_knife: "🍴",
        fountain: "⛲️",
        fountain_pen: "🖋",
        four_leaf_clover: "🍀",
        fox_face: "🦊",
        framed_picture: "🖼",
        free: "🆓",
        fried_egg: "🍳",
        fried_shrimp: "🍤",
        fries: "🍟",
        frog: "🐸",
        frowning: "😦",
        frowning_face: "☹️",
        frowning_man: "🙍&zwj;♂️",
        frowning_woman: "🙍",
        middle_finger: "🖕",
        fuelpump: "⛽️",
        full_moon: "🌕",
        full_moon_with_face: "🌝",
        funeral_urn: "⚱️",
        game_die: "🎲",
        gear: "⚙️",
        gem: "💎",
        gemini: "♊️",
        ghost: "👻",
        gift: "🎁",
        gift_heart: "💝",
        girl: "👧",
        globe_with_meridians: "🌐",
        goal_net: "🥅",
        goat: "🐐",
        golf: "⛳️",
        golfing_man: "🏌️",
        golfing_woman: "🏌️&zwj;♀️",
        gorilla: "🦍",
        grapes: "🍇",
        green_apple: "🍏",
        green_book: "📗",
        green_heart: "💚",
        green_salad: "🥗",
        grey_exclamation: "❕",
        grey_question: "❔",
        grimacing: "😬",
        grin: "😁",
        grinning: "😀",
        guardsman: "💂",
        guardswoman: "💂&zwj;♀️",
        guitar: "🎸",
        gun: "🔫",
        haircut_woman: "💇",
        haircut_man: "💇&zwj;♂️",
        hamburger: "🍔",
        hammer: "🔨",
        hammer_and_pick: "⚒",
        hammer_and_wrench: "🛠",
        hamster: "🐹",
        hand: "✋",
        handbag: "👜",
        handshake: "🤝",
        hankey: "💩",
        hatched_chick: "🐥",
        hatching_chick: "🐣",
        headphones: "🎧",
        hear_no_evil: "🙉",
        heart: "❤️",
        heart_decoration: "💟",
        heart_eyes: "😍",
        heart_eyes_cat: "😻",
        heartbeat: "💓",
        heartpulse: "💗",
        hearts: "♥️",
        heavy_check_mark: "✔️",
        heavy_division_sign: "➗",
        heavy_dollar_sign: "💲",
        heavy_heart_exclamation: "❣️",
        heavy_minus_sign: "➖",
        heavy_multiplication_x: "✖️",
        heavy_plus_sign: "➕",
        helicopter: "🚁",
        herb: "🌿",
        hibiscus: "🌺",
        high_brightness: "🔆",
        high_heel: "👠",
        hocho: "🔪",
        hole: "🕳",
        honey_pot: "🍯",
        horse: "🐴",
        horse_racing: "🏇",
        hospital: "🏥",
        hot_pepper: "🌶",
        hotdog: "🌭",
        hotel: "🏨",
        hotsprings: "♨️",
        hourglass: "⌛️",
        hourglass_flowing_sand: "⏳",
        house: "🏠",
        house_with_garden: "🏡",
        houses: "🏘",
        hugs: "🤗",
        hushed: "😯",
        ice_cream: "🍨",
        ice_hockey: "🏒",
        ice_skate: "⛸",
        icecream: "🍦",
        id: "🆔",
        ideograph_advantage: "🉐",
        imp: "👿",
        inbox_tray: "📥",
        incoming_envelope: "📨",
        tipping_hand_woman: "💁",
        information_source: "ℹ️",
        innocent: "😇",
        interrobang: "⁉️",
        iphone: "📱",
        izakaya_lantern: "🏮",
        jack_o_lantern: "🎃",
        japan: "🗾",
        japanese_castle: "🏯",
        japanese_goblin: "👺",
        japanese_ogre: "👹",
        jeans: "👖",
        joy: "😂",
        joy_cat: "😹",
        joystick: "🕹",
        kaaba: "🕋",
        key: "🔑",
        keyboard: "⌨️",
        keycap_ten: "🔟",
        kick_scooter: "🛴",
        kimono: "👘",
        kiss: "💋",
        kissing: "😗",
        kissing_cat: "😽",
        kissing_closed_eyes: "😚",
        kissing_heart: "😘",
        kissing_smiling_eyes: "😙",
        kiwi_fruit: "🥝",
        koala: "🐨",
        koko: "🈁",
        label: "🏷",
        large_blue_circle: "🔵",
        large_blue_diamond: "🔷",
        large_orange_diamond: "🔶",
        last_quarter_moon: "🌗",
        last_quarter_moon_with_face: "🌜",
        latin_cross: "✝️",
        laughing: "😆",
        leaves: "🍃",
        ledger: "📒",
        left_luggage: "🛅",
        left_right_arrow: "↔️",
        leftwards_arrow_with_hook: "↩️",
        lemon: "🍋",
        leo: "♌️",
        leopard: "🐆",
        level_slider: "🎚",
        libra: "♎️",
        light_rail: "🚈",
        link: "🔗",
        lion: "🦁",
        lips: "👄",
        lipstick: "💄",
        lizard: "🦎",
        lock: "🔒",
        lock_with_ink_pen: "🔏",
        lollipop: "🍭",
        loop: "➿",
        loud_sound: "🔊",
        loudspeaker: "📢",
        love_hotel: "🏩",
        love_letter: "💌",
        low_brightness: "🔅",
        lying_face: "🤥",
        m: "Ⓜ️",
        mag: "🔍",
        mag_right: "🔎",
        mahjong: "🀄️",
        mailbox: "📫",
        mailbox_closed: "📪",
        mailbox_with_mail: "📬",
        mailbox_with_no_mail: "📭",
        man: "👨",
        man_artist: "👨&zwj;🎨",
        man_astronaut: "👨&zwj;🚀",
        man_cartwheeling: "🤸&zwj;♂️",
        man_cook: "👨&zwj;🍳",
        man_dancing: "🕺",
        man_facepalming: "🤦&zwj;♂️",
        man_factory_worker: "👨&zwj;🏭",
        man_farmer: "👨&zwj;🌾",
        man_firefighter: "👨&zwj;🚒",
        man_health_worker: "👨&zwj;⚕️",
        man_in_tuxedo: "🤵",
        man_judge: "👨&zwj;⚖️",
        man_juggling: "🤹&zwj;♂️",
        man_mechanic: "👨&zwj;🔧",
        man_office_worker: "👨&zwj;💼",
        man_pilot: "👨&zwj;✈️",
        man_playing_handball: "🤾&zwj;♂️",
        man_playing_water_polo: "🤽&zwj;♂️",
        man_scientist: "👨&zwj;🔬",
        man_shrugging: "🤷&zwj;♂️",
        man_singer: "👨&zwj;🎤",
        man_student: "👨&zwj;🎓",
        man_teacher: "👨&zwj;🏫",
        man_technologist: "👨&zwj;💻",
        man_with_gua_pi_mao: "👲",
        man_with_turban: "👳",
        tangerine: "🍊",
        mans_shoe: "👞",
        mantelpiece_clock: "🕰",
        maple_leaf: "🍁",
        martial_arts_uniform: "🥋",
        mask: "😷",
        massage_woman: "💆",
        massage_man: "💆&zwj;♂️",
        meat_on_bone: "🍖",
        medal_military: "🎖",
        medal_sports: "🏅",
        mega: "📣",
        melon: "🍈",
        memo: "📝",
        men_wrestling: "🤼&zwj;♂️",
        menorah: "🕎",
        mens: "🚹",
        metal: "🤘",
        metro: "🚇",
        microphone: "🎤",
        microscope: "🔬",
        milk_glass: "🥛",
        milky_way: "🌌",
        minibus: "🚐",
        minidisc: "💽",
        mobile_phone_off: "📴",
        money_mouth_face: "🤑",
        money_with_wings: "💸",
        moneybag: "💰",
        monkey: "🐒",
        monkey_face: "🐵",
        monorail: "🚝",
        moon: "🌔",
        mortar_board: "🎓",
        mosque: "🕌",
        motor_boat: "🛥",
        motor_scooter: "🛵",
        motorcycle: "🏍",
        motorway: "🛣",
        mount_fuji: "🗻",
        mountain: "⛰",
        mountain_biking_man: "🚵",
        mountain_biking_woman: "🚵&zwj;♀️",
        mountain_cableway: "🚠",
        mountain_railway: "🚞",
        mountain_snow: "🏔",
        mouse: "🐭",
        mouse2: "🐁",
        movie_camera: "🎥",
        moyai: "🗿",
        mrs_claus: "🤶",
        muscle: "💪",
        mushroom: "🍄",
        musical_keyboard: "🎹",
        musical_note: "🎵",
        musical_score: "🎼",
        mute: "🔇",
        nail_care: "💅",
        name_badge: "📛",
        national_park: "🏞",
        nauseated_face: "🤢",
        necktie: "👔",
        negative_squared_cross_mark: "❎",
        nerd_face: "🤓",
        neutral_face: "😐",
        new: "🆕",
        new_moon: "🌑",
        new_moon_with_face: "🌚",
        newspaper: "📰",
        newspaper_roll: "🗞",
        next_track_button: "⏭",
        ng: "🆖",
        no_good_man: "🙅&zwj;♂️",
        no_good_woman: "🙅",
        night_with_stars: "🌃",
        no_bell: "🔕",
        no_bicycles: "🚳",
        no_entry: "⛔️",
        no_entry_sign: "🚫",
        no_mobile_phones: "📵",
        no_mouth: "😶",
        no_pedestrians: "🚷",
        no_smoking: "🚭",
        "non-potable_water": "🚱",
        nose: "👃",
        notebook: "📓",
        notebook_with_decorative_cover: "📔",
        notes: "🎶",
        nut_and_bolt: "🔩",
        o: "⭕️",
        o2: "🅾️",
        ocean: "🌊",
        octopus: "🐙",
        oden: "🍢",
        office: "🏢",
        oil_drum: "🛢",
        ok: "🆗",
        ok_hand: "👌",
        ok_man: "🙆&zwj;♂️",
        ok_woman: "🙆",
        old_key: "🗝",
        older_man: "👴",
        older_woman: "👵",
        om: "🕉",
        on: "🔛",
        oncoming_automobile: "🚘",
        oncoming_bus: "🚍",
        oncoming_police_car: "🚔",
        oncoming_taxi: "🚖",
        open_file_folder: "📂",
        open_hands: "👐",
        open_mouth: "😮",
        open_umbrella: "☂️",
        ophiuchus: "⛎",
        orange_book: "📙",
        orthodox_cross: "☦️",
        outbox_tray: "📤",
        owl: "🦉",
        ox: "🐂",
        package: "📦",
        page_facing_up: "📄",
        page_with_curl: "📃",
        pager: "📟",
        paintbrush: "🖌",
        palm_tree: "🌴",
        pancakes: "🥞",
        panda_face: "🐼",
        paperclip: "📎",
        paperclips: "🖇",
        parasol_on_ground: "⛱",
        parking: "🅿️",
        part_alternation_mark: "〽️",
        partly_sunny: "⛅️",
        passenger_ship: "🛳",
        passport_control: "🛂",
        pause_button: "⏸",
        peace_symbol: "☮️",
        peach: "🍑",
        peanuts: "🥜",
        pear: "🍐",
        pen: "🖊",
        pencil2: "✏️",
        penguin: "🐧",
        pensive: "😔",
        performing_arts: "🎭",
        persevere: "😣",
        person_fencing: "🤺",
        pouting_woman: "🙎",
        phone: "☎️",
        pick: "⛏",
        pig: "🐷",
        pig2: "🐖",
        pig_nose: "🐽",
        pill: "💊",
        pineapple: "🍍",
        ping_pong: "🏓",
        pisces: "♓️",
        pizza: "🍕",
        place_of_worship: "🛐",
        plate_with_cutlery: "🍽",
        play_or_pause_button: "⏯",
        point_down: "👇",
        point_left: "👈",
        point_right: "👉",
        point_up: "☝️",
        point_up_2: "👆",
        police_car: "🚓",
        policewoman: "👮&zwj;♀️",
        poodle: "🐩",
        popcorn: "🍿",
        post_office: "🏣",
        postal_horn: "📯",
        postbox: "📮",
        potable_water: "🚰",
        potato: "🥔",
        pouch: "👝",
        poultry_leg: "🍗",
        pound: "💷",
        rage: "😡",
        pouting_cat: "😾",
        pouting_man: "🙎&zwj;♂️",
        pray: "🙏",
        prayer_beads: "📿",
        pregnant_woman: "🤰",
        previous_track_button: "⏮",
        prince: "🤴",
        princess: "👸",
        printer: "🖨",
        purple_heart: "💜",
        purse: "👛",
        pushpin: "📌",
        put_litter_in_its_place: "🚮",
        question: "❓",
        rabbit: "🐰",
        rabbit2: "🐇",
        racehorse: "🐎",
        racing_car: "🏎",
        radio: "📻",
        radio_button: "🔘",
        radioactive: "☢️",
        railway_car: "🚃",
        railway_track: "🛤",
        rainbow: "🌈",
        rainbow_flag: "🏳️&zwj;🌈",
        raised_back_of_hand: "🤚",
        raised_hand_with_fingers_splayed: "🖐",
        raised_hands: "🙌",
        raising_hand_woman: "🙋",
        raising_hand_man: "🙋&zwj;♂️",
        ram: "🐏",
        ramen: "🍜",
        rat: "🐀",
        record_button: "⏺",
        recycle: "♻️",
        red_circle: "🔴",
        registered: "®️",
        relaxed: "☺️",
        relieved: "😌",
        reminder_ribbon: "🎗",
        repeat: "🔁",
        repeat_one: "🔂",
        rescue_worker_helmet: "⛑",
        restroom: "🚻",
        revolving_hearts: "💞",
        rewind: "⏪",
        rhinoceros: "🦏",
        ribbon: "🎀",
        rice: "🍚",
        rice_ball: "🍙",
        rice_cracker: "🍘",
        rice_scene: "🎑",
        right_anger_bubble: "🗯",
        ring: "💍",
        robot: "🤖",
        rocket: "🚀",
        rofl: "🤣",
        roll_eyes: "🙄",
        roller_coaster: "🎢",
        rooster: "🐓",
        rose: "🌹",
        rosette: "🏵",
        rotating_light: "🚨",
        round_pushpin: "📍",
        rowing_man: "🚣",
        rowing_woman: "🚣&zwj;♀️",
        rugby_football: "🏉",
        running_man: "🏃",
        running_shirt_with_sash: "🎽",
        running_woman: "🏃&zwj;♀️",
        sa: "🈂️",
        sagittarius: "♐️",
        sake: "🍶",
        sandal: "👡",
        santa: "🎅",
        satellite: "📡",
        saxophone: "🎷",
        school: "🏫",
        school_satchel: "🎒",
        scissors: "✂️",
        scorpion: "🦂",
        scorpius: "♏️",
        scream: "😱",
        scream_cat: "🙀",
        scroll: "📜",
        seat: "💺",
        secret: "㊙️",
        see_no_evil: "🙈",
        seedling: "🌱",
        selfie: "🤳",
        shallow_pan_of_food: "🥘",
        shamrock: "☘️",
        shark: "🦈",
        shaved_ice: "🍧",
        sheep: "🐑",
        shell: "🐚",
        shield: "🛡",
        shinto_shrine: "⛩",
        ship: "🚢",
        shirt: "👕",
        shopping: "🛍",
        shopping_cart: "🛒",
        shower: "🚿",
        shrimp: "🦐",
        signal_strength: "📶",
        six_pointed_star: "🔯",
        ski: "🎿",
        skier: "⛷",
        skull: "💀",
        skull_and_crossbones: "☠️",
        sleeping: "😴",
        sleeping_bed: "🛌",
        sleepy: "😪",
        slightly_frowning_face: "🙁",
        slightly_smiling_face: "🙂",
        slot_machine: "🎰",
        small_airplane: "🛩",
        small_blue_diamond: "🔹",
        small_orange_diamond: "🔸",
        small_red_triangle: "🔺",
        small_red_triangle_down: "🔻",
        smile: "😄",
        smile_cat: "😸",
        smiley: "😃",
        smiley_cat: "😺",
        smiling_imp: "😈",
        smirk: "😏",
        smirk_cat: "😼",
        smoking: "🚬",
        snail: "🐌",
        snake: "🐍",
        sneezing_face: "🤧",
        snowboarder: "🏂",
        snowflake: "❄️",
        snowman: "⛄️",
        snowman_with_snow: "☃️",
        sob: "😭",
        soccer: "⚽️",
        soon: "🔜",
        sos: "🆘",
        sound: "🔉",
        space_invader: "👾",
        spades: "♠️",
        spaghetti: "🍝",
        sparkle: "❇️",
        sparkler: "🎇",
        sparkles: "✨",
        sparkling_heart: "💖",
        speak_no_evil: "🙊",
        speaker: "🔈",
        speaking_head: "🗣",
        speech_balloon: "💬",
        speedboat: "🚤",
        spider: "🕷",
        spider_web: "🕸",
        spiral_calendar: "🗓",
        spiral_notepad: "🗒",
        spoon: "🥄",
        squid: "🦑",
        stadium: "🏟",
        star: "⭐️",
        star2: "🌟",
        star_and_crescent: "☪️",
        star_of_david: "✡️",
        stars: "🌠",
        station: "🚉",
        statue_of_liberty: "🗽",
        steam_locomotive: "🚂",
        stew: "🍲",
        stop_button: "⏹",
        stop_sign: "🛑",
        stopwatch: "⏱",
        straight_ruler: "📏",
        strawberry: "🍓",
        stuck_out_tongue: "😛",
        stuck_out_tongue_closed_eyes: "😝",
        stuck_out_tongue_winking_eye: "😜",
        studio_microphone: "🎙",
        stuffed_flatbread: "🥙",
        sun_behind_large_cloud: "🌥",
        sun_behind_rain_cloud: "🌦",
        sun_behind_small_cloud: "🌤",
        sun_with_face: "🌞",
        sunflower: "🌻",
        sunglasses: "😎",
        sunny: "☀️",
        sunrise: "🌅",
        sunrise_over_mountains: "🌄",
        surfing_man: "🏄",
        surfing_woman: "🏄&zwj;♀️",
        sushi: "🍣",
        suspension_railway: "🚟",
        sweat: "😓",
        sweat_drops: "💦",
        sweat_smile: "😅",
        sweet_potato: "🍠",
        swimming_man: "🏊",
        swimming_woman: "🏊&zwj;♀️",
        symbols: "🔣",
        synagogue: "🕍",
        syringe: "💉",
        taco: "🌮",
        tada: "🎉",
        tanabata_tree: "🎋",
        taurus: "♉️",
        taxi: "🚕",
        tea: "🍵",
        telephone_receiver: "📞",
        telescope: "🔭",
        tennis: "🎾",
        tent: "⛺️",
        thermometer: "🌡",
        thinking: "🤔",
        thought_balloon: "💭",
        ticket: "🎫",
        tickets: "🎟",
        tiger: "🐯",
        tiger2: "🐅",
        timer_clock: "⏲",
        tipping_hand_man: "💁&zwj;♂️",
        tired_face: "😫",
        tm: "™️",
        toilet: "🚽",
        tokyo_tower: "🗼",
        tomato: "🍅",
        tongue: "👅",
        top: "🔝",
        tophat: "🎩",
        tornado: "🌪",
        trackball: "🖲",
        tractor: "🚜",
        traffic_light: "🚥",
        train: "🚋",
        train2: "🚆",
        tram: "🚊",
        triangular_flag_on_post: "🚩",
        triangular_ruler: "📐",
        trident: "🔱",
        triumph: "😤",
        trolleybus: "🚎",
        trophy: "🏆",
        tropical_drink: "🍹",
        tropical_fish: "🐠",
        truck: "🚚",
        trumpet: "🎺",
        tulip: "🌷",
        tumbler_glass: "🥃",
        turkey: "🦃",
        turtle: "🐢",
        tv: "📺",
        twisted_rightwards_arrows: "🔀",
        two_hearts: "💕",
        two_men_holding_hands: "👬",
        two_women_holding_hands: "👭",
        u5272: "🈹",
        u5408: "🈴",
        u55b6: "🈺",
        u6307: "🈯️",
        u6708: "🈷️",
        u6709: "🈶",
        u6e80: "🈵",
        u7121: "🈚️",
        u7533: "🈸",
        u7981: "🈲",
        u7a7a: "🈳",
        umbrella: "☔️",
        unamused: "😒",
        underage: "🔞",
        unicorn: "🦄",
        unlock: "🔓",
        up: "🆙",
        upside_down_face: "🙃",
        v: "✌️",
        vertical_traffic_light: "🚦",
        vhs: "📼",
        vibration_mode: "📳",
        video_camera: "📹",
        video_game: "🎮",
        violin: "🎻",
        virgo: "♍️",
        volcano: "🌋",
        volleyball: "🏐",
        vs: "🆚",
        vulcan_salute: "🖖",
        walking_man: "🚶",
        walking_woman: "🚶&zwj;♀️",
        waning_crescent_moon: "🌘",
        waning_gibbous_moon: "🌖",
        warning: "⚠️",
        wastebasket: "🗑",
        watch: "⌚️",
        water_buffalo: "🐃",
        watermelon: "🍉",
        wave: "👋",
        wavy_dash: "〰️",
        waxing_crescent_moon: "🌒",
        wc: "🚾",
        weary: "😩",
        wedding: "💒",
        weight_lifting_man: "🏋️",
        weight_lifting_woman: "🏋️&zwj;♀️",
        whale: "🐳",
        whale2: "🐋",
        wheel_of_dharma: "☸️",
        wheelchair: "♿️",
        white_check_mark: "✅",
        white_circle: "⚪️",
        white_flag: "🏳️",
        white_flower: "💮",
        white_large_square: "⬜️",
        white_medium_small_square: "◽️",
        white_medium_square: "◻️",
        white_small_square: "▫️",
        white_square_button: "🔳",
        wilted_flower: "🥀",
        wind_chime: "🎐",
        wind_face: "🌬",
        wine_glass: "🍷",
        wink: "😉",
        wolf: "🐺",
        woman: "👩",
        woman_artist: "👩&zwj;🎨",
        woman_astronaut: "👩&zwj;🚀",
        woman_cartwheeling: "🤸&zwj;♀️",
        woman_cook: "👩&zwj;🍳",
        woman_facepalming: "🤦&zwj;♀️",
        woman_factory_worker: "👩&zwj;🏭",
        woman_farmer: "👩&zwj;🌾",
        woman_firefighter: "👩&zwj;🚒",
        woman_health_worker: "👩&zwj;⚕️",
        woman_judge: "👩&zwj;⚖️",
        woman_juggling: "🤹&zwj;♀️",
        woman_mechanic: "👩&zwj;🔧",
        woman_office_worker: "👩&zwj;💼",
        woman_pilot: "👩&zwj;✈️",
        woman_playing_handball: "🤾&zwj;♀️",
        woman_playing_water_polo: "🤽&zwj;♀️",
        woman_scientist: "👩&zwj;🔬",
        woman_shrugging: "🤷&zwj;♀️",
        woman_singer: "👩&zwj;🎤",
        woman_student: "👩&zwj;🎓",
        woman_teacher: "👩&zwj;🏫",
        woman_technologist: "👩&zwj;💻",
        woman_with_turban: "👳&zwj;♀️",
        womans_clothes: "👚",
        womans_hat: "👒",
        women_wrestling: "🤼&zwj;♀️",
        womens: "🚺",
        world_map: "🗺",
        worried: "😟",
        wrench: "🔧",
        writing_hand: "✍️",
        x: "❌",
        yellow_heart: "💛",
        yen: "💴",
        yin_yang: "☯️",
        yum: "😋",
        zap: "⚡️",
        zipper_mouth_face: "🤐",
        zzz: "💤",
        octocat: '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
        showdown: "<span style=\"font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;\">S</span>"
      }, a.Converter = function (e) {

        function t(e, t) {
          if (t = t || null, a.helper.isString(e)) {
            if (e = a.helper.stdExtName(e), t = e, a.extensions[e]) return console.warn("DEPRECATION WARNING: " + e + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"), void function (e, t) {
              "function" == typeof e && (e = e(new a.Converter()));
              a.helper.isArray(e) || (e = [e]);
              var n = r(e, t);
              if (!n.valid) throw Error(n.error);

              for (var s = 0; s < e.length; ++s) switch (e[s].type) {
                case "lang":
                  u.push(e[s]);
                  break;

                case "output":
                  d.push(e[s]);
                  break;

                default:
                  throw Error("Extension loader error: Type unrecognized!!!");
              }
            }(a.extensions[e], e);
            if (a.helper.isUndefined(s[e])) throw Error('Extension "' + e + '" could not be loaded. It was either not found or is not a valid extension.');
            e = s[e];
          }

          "function" == typeof e && (e = e()), a.helper.isArray(e) || (e = [e]);
          var o = r(e, t);
          if (!o.valid) throw Error(o.error);

          for (var i = 0; i < e.length; ++i) {
            switch (e[i].type) {
              case "lang":
                u.push(e[i]);
                break;

              case "output":
                d.push(e[i]);
            }

            if (e[i].hasOwnProperty("listeners")) for (var l in e[i].listeners) e[i].listeners.hasOwnProperty(l) && n(l, e[i].listeners[l]);
          }
        }

        function n(e, r) {
          if (!a.helper.isString(e)) throw Error("Invalid argument in converter.listen() method: name must be a string, but " + typeof e + " given");
          if ("function" != typeof r) throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + typeof r + " given");
          p.hasOwnProperty(e) || (p[e] = []), p[e].push(r);
        }

        var c = {},
            u = [],
            d = [],
            p = {},
            h = i,
            _ = {
          parsed: {},
          raw: "",
          format: ""
        };
        !function () {
          e = e || {};

          for (var r in o) o.hasOwnProperty(r) && (c[r] = o[r]);

          if ("object" != typeof e) throw Error("Converter expects the passed parameter to be an object, but " + typeof e + " was passed instead.");

          for (var n in e) e.hasOwnProperty(n) && (c[n] = e[n]);

          c.extensions && a.helper.forEach(c.extensions, t);
        }(), this._dispatch = function (e, r, t, a) {
          if (p.hasOwnProperty(e)) for (var n = 0; n < p[e].length; ++n) {
            var s = p[e][n](e, r, this, t, a);
            s && void 0 !== s && (r = s);
          }
          return r;
        }, this.listen = function (e, r) {
          return n(e, r), this;
        }, this.makeHtml = function (e) {
          if (!e) return e;
          var r = {
            gHtmlBlocks: [],
            gHtmlMdBlocks: [],
            gHtmlSpans: [],
            gUrls: {},
            gTitles: {},
            gDimensions: {},
            gListLevel: 0,
            hashLinkCounts: {},
            langExtensions: u,
            outputModifiers: d,
            converter: this,
            ghCodeBlocks: [],
            metadata: {
              parsed: {},
              raw: "",
              format: ""
            }
          };
          return e = e.replace(/¨/g, "¨T"), e = e.replace(/\$/g, "¨D"), e = e.replace(/\r\n/g, "\n"), e = e.replace(/\r/g, "\n"), e = e.replace(/\u00A0/g, "&nbsp;"), c.smartIndentationFix && (e = function (e) {
            var r = e.match(/^\s*/)[0].length,
                t = new RegExp("^\\s{0," + r + "}", "gm");
            return e.replace(t, "");
          }(e)), e = "\n\n" + e + "\n\n", e = a.subParser("detab")(e, c, r), e = e.replace(/^[ \t]+$/gm, ""), a.helper.forEach(u, function (t) {
            e = a.subParser("runExtension")(t, e, c, r);
          }), e = a.subParser("metadata")(e, c, r), e = a.subParser("hashPreCodeTags")(e, c, r), e = a.subParser("githubCodeBlocks")(e, c, r), e = a.subParser("hashHTMLBlocks")(e, c, r), e = a.subParser("hashCodeTags")(e, c, r), e = a.subParser("stripLinkDefinitions")(e, c, r), e = a.subParser("blockGamut")(e, c, r), e = a.subParser("unhashHTMLSpans")(e, c, r), e = a.subParser("unescapeSpecialChars")(e, c, r), e = e.replace(/¨D/g, "$$"), e = e.replace(/¨T/g, "¨"), e = a.subParser("completeHTMLDocument")(e, c, r), a.helper.forEach(d, function (t) {
            e = a.subParser("runExtension")(t, e, c, r);
          }), _ = r.metadata, e;
        }, this.makeMarkdown = this.makeMd = function (e, r) {
          function t(e) {
            for (var r = 0; r < e.childNodes.length; ++r) {
              var a = e.childNodes[r];
              3 === a.nodeType ? /\S/.test(a.nodeValue) ? (a.nodeValue = a.nodeValue.split("\n").join(" "), a.nodeValue = a.nodeValue.replace(/(\s)+/g, "$1")) : (e.removeChild(a), --r) : 1 === a.nodeType && t(a);
            }
          }

          if (e = e.replace(/\r\n/g, "\n"), e = e.replace(/\r/g, "\n"), e = e.replace(/>[ \t]+</, ">¨NBSP;<"), !r) {
            if (!window || !window.document) throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");
            r = window.document;
          }

          var n = r.createElement("div");
          n.innerHTML = e;
          var s = {
            preList: function (e) {
              for (var r = e.querySelectorAll("pre"), t = [], n = 0; n < r.length; ++n) if (1 === r[n].childElementCount && "code" === r[n].firstChild.tagName.toLowerCase()) {
                var s = r[n].firstChild.innerHTML.trim(),
                    o = r[n].firstChild.getAttribute("data-language") || "";
                if ("" === o) for (var i = r[n].firstChild.className.split(" "), l = 0; l < i.length; ++l) {
                  var c = i[l].match(/^language-(.+)$/);

                  if (null !== c) {
                    o = c[1];
                    break;
                  }
                }
                s = a.helper.unescapeHTMLEntities(s), t.push(s), r[n].outerHTML = '<precode language="' + o + '" precodenum="' + n.toString() + '"></precode>';
              } else t.push(r[n].innerHTML), r[n].innerHTML = "", r[n].setAttribute("prenum", n.toString());

              return t;
            }(n)
          };
          t(n);

          for (var o = n.childNodes, i = "", l = 0; l < o.length; l++) i += a.subParser("makeMarkdown.node")(o[l], s);

          return i;
        }, this.setOption = function (e, r) {
          c[e] = r;
        }, this.getOption = function (e) {
          return c[e];
        }, this.getOptions = function () {
          return c;
        }, this.addExtension = function (e, r) {
          t(e, r = r || null);
        }, this.useExtension = function (e) {
          t(e);
        }, this.setFlavor = function (e) {
          if (!l.hasOwnProperty(e)) throw Error(e + " flavor was not found");
          var r = l[e];
          h = e;

          for (var t in r) r.hasOwnProperty(t) && (c[t] = r[t]);
        }, this.getFlavor = function () {
          return h;
        }, this.removeExtension = function (e) {
          a.helper.isArray(e) || (e = [e]);

          for (var r = 0; r < e.length; ++r) {
            for (var t = e[r], n = 0; n < u.length; ++n) u[n] === t && u[n].splice(n, 1);

            for (; 0 < d.length; ++n) d[0] === t && d[0].splice(n, 1);
          }
        }, this.getAllExtensions = function () {
          return {
            language: u,
            output: d
          };
        }, this.getMetadata = function (e) {
          return e ? _.raw : _.parsed;
        }, this.getMetadataFormat = function () {
          return _.format;
        }, this._setMetadataPair = function (e, r) {
          _.parsed[e] = r;
        }, this._setMetadataFormat = function (e) {
          _.format = e;
        }, this._setMetadataRaw = function (e) {
          _.raw = e;
        };
      }, a.subParser("anchors", function (e, r, t) {

        var n = function (e, n, s, o, i, l, c) {
          if (a.helper.isUndefined(c) && (c = ""), s = s.toLowerCase(), e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) o = "";else if (!o) {
            if (s || (s = n.toLowerCase().replace(/ ?\n/g, " ")), o = "#" + s, a.helper.isUndefined(t.gUrls[s])) return e;
            o = t.gUrls[s], a.helper.isUndefined(t.gTitles[s]) || (c = t.gTitles[s]);
          }
          var u = '<a href="' + (o = o.replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback)) + '"';
          return "" !== c && null !== c && (u += ' title="' + (c = (c = c.replace(/"/g, "&quot;")).replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback)) + '"'), r.openLinksInNewWindow && !/^#/.test(o) && (u += ' rel="noopener noreferrer" target="¨E95Eblank"'), u += ">" + n + "</a>";
        };

        return e = (e = t.converter._dispatch("anchors.before", e, r, t)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, n), e = e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, n), e = e.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, n), e = e.replace(/\[([^\[\]]+)]()()()()()/g, n), r.ghMentions && (e = e.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gim, function (e, t, n, s, o) {
          if ("\\" === n) return t + s;
          if (!a.helper.isString(r.ghMentionsLink)) throw new Error("ghMentionsLink option must be a string");
          var i = r.ghMentionsLink.replace(/\{u}/g, o),
              l = "";
          return r.openLinksInNewWindow && (l = ' rel="noopener noreferrer" target="¨E95Eblank"'), t + '<a href="' + i + '"' + l + ">" + s + "</a>";
        })), e = t.converter._dispatch("anchors.after", e, r, t);
      });

      var u = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,
          d = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,
          p = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,
          h = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gim,
          _ = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,
          g = function (e) {

        return function (r, t, n, s, o, i, l) {
          var c = n = n.replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback),
              u = "",
              d = "",
              p = t || "",
              h = l || "";
          return /^www\./i.test(n) && (n = n.replace(/^www\./i, "http://www.")), e.excludeTrailingPunctuationFromURLs && i && (u = i), e.openLinksInNewWindow && (d = ' rel="noopener noreferrer" target="¨E95Eblank"'), p + '<a href="' + n + '"' + d + ">" + c + "</a>" + u + h;
        };
      },
          m = function (e, r) {

        return function (t, n, s) {
          var o = "mailto:";
          return n = n || "", s = a.subParser("unescapeSpecialChars")(s, e, r), e.encodeEmails ? (o = a.helper.encodeEmailAddress(o + s), s = a.helper.encodeEmailAddress(s)) : o += s, n + '<a href="' + o + '">' + s + "</a>";
        };
      };

      a.subParser("autoLinks", function (e, r, t) {

        return e = t.converter._dispatch("autoLinks.before", e, r, t), e = e.replace(p, g(r)), e = e.replace(_, m(r, t)), e = t.converter._dispatch("autoLinks.after", e, r, t);
      }), a.subParser("simplifiedAutoLinks", function (e, r, t) {

        return r.simplifiedAutoLink ? (e = t.converter._dispatch("simplifiedAutoLinks.before", e, r, t), e = r.excludeTrailingPunctuationFromURLs ? e.replace(d, g(r)) : e.replace(u, g(r)), e = e.replace(h, m(r, t)), e = t.converter._dispatch("simplifiedAutoLinks.after", e, r, t)) : e;
      }), a.subParser("blockGamut", function (e, r, t) {

        return e = t.converter._dispatch("blockGamut.before", e, r, t), e = a.subParser("blockQuotes")(e, r, t), e = a.subParser("headers")(e, r, t), e = a.subParser("horizontalRule")(e, r, t), e = a.subParser("lists")(e, r, t), e = a.subParser("codeBlocks")(e, r, t), e = a.subParser("tables")(e, r, t), e = a.subParser("hashHTMLBlocks")(e, r, t), e = a.subParser("paragraphs")(e, r, t), e = t.converter._dispatch("blockGamut.after", e, r, t);
      }), a.subParser("blockQuotes", function (e, r, t) {

        e = t.converter._dispatch("blockQuotes.before", e, r, t), e += "\n\n";
        var n = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
        return r.splitAdjacentBlockquotes && (n = /^ {0,3}>[\s\S]*?(?:\n\n)/gm), e = e.replace(n, function (e) {
          return e = e.replace(/^[ \t]*>[ \t]?/gm, ""), e = e.replace(/¨0/g, ""), e = e.replace(/^[ \t]+$/gm, ""), e = a.subParser("githubCodeBlocks")(e, r, t), e = a.subParser("blockGamut")(e, r, t), e = e.replace(/(^|\n)/g, "$1  "), e = e.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function (e, r) {
            var t = r;
            return t = t.replace(/^  /gm, "¨0"), t = t.replace(/¨0/g, "");
          }), a.subParser("hashBlock")("<blockquote>\n" + e + "\n</blockquote>", r, t);
        }), e = t.converter._dispatch("blockQuotes.after", e, r, t);
      }), a.subParser("codeBlocks", function (e, r, t) {

        e = t.converter._dispatch("codeBlocks.before", e, r, t);
        return e = (e += "¨0").replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g, function (e, n, s) {
          var o = n,
              i = s,
              l = "\n";
          return o = a.subParser("outdent")(o, r, t), o = a.subParser("encodeCode")(o, r, t), o = a.subParser("detab")(o, r, t), o = o.replace(/^\n+/g, ""), o = o.replace(/\n+$/g, ""), r.omitExtraWLInCodeBlocks && (l = ""), o = "<pre><code>" + o + l + "</code></pre>", a.subParser("hashBlock")(o, r, t) + i;
        }), e = e.replace(/¨0/, ""), e = t.converter._dispatch("codeBlocks.after", e, r, t);
      }), a.subParser("codeSpans", function (e, r, t) {

        return void 0 === (e = t.converter._dispatch("codeSpans.before", e, r, t)) && (e = ""), e = e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function (e, n, s, o) {
          var i = o;
          return i = i.replace(/^([ \t]*)/g, ""), i = i.replace(/[ \t]*$/g, ""), i = a.subParser("encodeCode")(i, r, t), i = n + "<code>" + i + "</code>", i = a.subParser("hashHTMLSpans")(i, r, t);
        }), e = t.converter._dispatch("codeSpans.after", e, r, t);
      }), a.subParser("completeHTMLDocument", function (e, r, t) {

        if (!r.completeHTMLDocument) return e;
        e = t.converter._dispatch("completeHTMLDocument.before", e, r, t);
        var a = "html",
            n = "<!DOCTYPE HTML>\n",
            s = "",
            o = '<meta charset="utf-8">\n',
            i = "",
            l = "";
        void 0 !== t.metadata.parsed.doctype && (n = "<!DOCTYPE " + t.metadata.parsed.doctype + ">\n", "html" !== (a = t.metadata.parsed.doctype.toString().toLowerCase()) && "html5" !== a || (o = '<meta charset="utf-8">'));

        for (var c in t.metadata.parsed) if (t.metadata.parsed.hasOwnProperty(c)) switch (c.toLowerCase()) {
          case "doctype":
            break;

          case "title":
            s = "<title>" + t.metadata.parsed.title + "</title>\n";
            break;

          case "charset":
            o = "html" === a || "html5" === a ? '<meta charset="' + t.metadata.parsed.charset + '">\n' : '<meta name="charset" content="' + t.metadata.parsed.charset + '">\n';
            break;

          case "language":
          case "lang":
            i = ' lang="' + t.metadata.parsed[c] + '"', l += '<meta name="' + c + '" content="' + t.metadata.parsed[c] + '">\n';
            break;

          default:
            l += '<meta name="' + c + '" content="' + t.metadata.parsed[c] + '">\n';
        }

        return e = n + "<html" + i + ">\n<head>\n" + s + o + l + "</head>\n<body>\n" + e.trim() + "\n</body>\n</html>", e = t.converter._dispatch("completeHTMLDocument.after", e, r, t);
      }), a.subParser("detab", function (e, r, t) {

        return e = t.converter._dispatch("detab.before", e, r, t), e = e.replace(/\t(?=\t)/g, "    "), e = e.replace(/\t/g, "¨A¨B"), e = e.replace(/¨B(.+?)¨A/g, function (e, r) {
          for (var t = r, a = 4 - t.length % 4, n = 0; n < a; n++) t += " ";

          return t;
        }), e = e.replace(/¨A/g, "    "), e = e.replace(/¨B/g, ""), e = t.converter._dispatch("detab.after", e, r, t);
      }), a.subParser("ellipsis", function (e, r, t) {

        return e = t.converter._dispatch("ellipsis.before", e, r, t), e = e.replace(/\.\.\./g, "…"), e = t.converter._dispatch("ellipsis.after", e, r, t);
      }), a.subParser("emoji", function (e, r, t) {

        if (!r.emoji) return e;
        return e = (e = t.converter._dispatch("emoji.before", e, r, t)).replace(/:([\S]+?):/g, function (e, r) {
          return a.helper.emojis.hasOwnProperty(r) ? a.helper.emojis[r] : e;
        }), e = t.converter._dispatch("emoji.after", e, r, t);
      }), a.subParser("encodeAmpsAndAngles", function (e, r, t) {

        return e = t.converter._dispatch("encodeAmpsAndAngles.before", e, r, t), e = e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;"), e = e.replace(/<(?![a-z\/?$!])/gi, "&lt;"), e = e.replace(/</g, "&lt;"), e = e.replace(/>/g, "&gt;"), e = t.converter._dispatch("encodeAmpsAndAngles.after", e, r, t);
      }), a.subParser("encodeBackslashEscapes", function (e, r, t) {

        return e = t.converter._dispatch("encodeBackslashEscapes.before", e, r, t), e = e.replace(/\\(\\)/g, a.helper.escapeCharactersCallback), e = e.replace(/\\([`*_{}\[\]()>#+.!~=|-])/g, a.helper.escapeCharactersCallback), e = t.converter._dispatch("encodeBackslashEscapes.after", e, r, t);
      }), a.subParser("encodeCode", function (e, r, t) {

        return e = t.converter._dispatch("encodeCode.before", e, r, t), e = e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/([*_{}\[\]\\=~-])/g, a.helper.escapeCharactersCallback), e = t.converter._dispatch("encodeCode.after", e, r, t);
      }), a.subParser("escapeSpecialCharsWithinTagAttributes", function (e, r, t) {

        return e = (e = t.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", e, r, t)).replace(/<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, function (e) {
          return e.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, a.helper.escapeCharactersCallback);
        }), e = e.replace(/<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi, function (e) {
          return e.replace(/([\\`*_~=|])/g, a.helper.escapeCharactersCallback);
        }), e = t.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", e, r, t);
      }), a.subParser("githubCodeBlocks", function (e, r, t) {

        return r.ghCodeBlocks ? (e = t.converter._dispatch("githubCodeBlocks.before", e, r, t), e += "¨0", e = e.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function (e, n, s, o) {
          var i = r.omitExtraWLInCodeBlocks ? "" : "\n";
          return o = a.subParser("encodeCode")(o, r, t), o = a.subParser("detab")(o, r, t), o = o.replace(/^\n+/g, ""), o = o.replace(/\n+$/g, ""), o = "<pre><code" + (s ? ' class="' + s + " language-" + s + '"' : "") + ">" + o + i + "</code></pre>", o = a.subParser("hashBlock")(o, r, t), "\n\n¨G" + (t.ghCodeBlocks.push({
            text: e,
            codeblock: o
          }) - 1) + "G\n\n";
        }), e = e.replace(/¨0/, ""), t.converter._dispatch("githubCodeBlocks.after", e, r, t)) : e;
      }), a.subParser("hashBlock", function (e, r, t) {

        return e = t.converter._dispatch("hashBlock.before", e, r, t), e = e.replace(/(^\n+|\n+$)/g, ""), e = "\n\n¨K" + (t.gHtmlBlocks.push(e) - 1) + "K\n\n", e = t.converter._dispatch("hashBlock.after", e, r, t);
      }), a.subParser("hashCodeTags", function (e, r, t) {

        e = t.converter._dispatch("hashCodeTags.before", e, r, t);
        return e = a.helper.replaceRecursiveRegExp(e, function (e, n, s, o) {
          var i = s + a.subParser("encodeCode")(n, r, t) + o;
          return "¨C" + (t.gHtmlSpans.push(i) - 1) + "C";
        }, "<code\\b[^>]*>", "</code>", "gim"), e = t.converter._dispatch("hashCodeTags.after", e, r, t);
      }), a.subParser("hashElement", function (e, r, t) {

        return function (e, r) {
          var a = r;
          return a = a.replace(/\n\n/g, "\n"), a = a.replace(/^\n/, ""), a = a.replace(/\n+$/g, ""), a = "\n\n¨K" + (t.gHtmlBlocks.push(a) - 1) + "K\n\n";
        };
      }), a.subParser("hashHTMLBlocks", function (e, r, t) {

        e = t.converter._dispatch("hashHTMLBlocks.before", e, r, t);

        var n = ["pre", "div", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "table", "dl", "ol", "ul", "script", "noscript", "form", "fieldset", "iframe", "math", "style", "section", "header", "footer", "nav", "article", "aside", "address", "audio", "canvas", "figure", "hgroup", "output", "video", "p"],
            s = function (e, r, a, n) {
          var s = e;
          return -1 !== a.search(/\bmarkdown\b/) && (s = a + t.converter.makeHtml(r) + n), "\n\n¨K" + (t.gHtmlBlocks.push(s) - 1) + "K\n\n";
        };

        r.backslashEscapesHTMLTags && (e = e.replace(/\\<(\/?[^>]+?)>/g, function (e, r) {
          return "&lt;" + r + "&gt;";
        }));

        for (var o = 0; o < n.length; ++o) for (var i, l = new RegExp("^ {0,3}(<" + n[o] + "\\b[^>]*>)", "im"), c = "<" + n[o] + "\\b[^>]*>", u = "</" + n[o] + ">"; -1 !== (i = a.helper.regexIndexOf(e, l));) {
          var d = a.helper.splitAtIndex(e, i),
              p = a.helper.replaceRecursiveRegExp(d[1], s, c, u, "im");
          if (p === d[1]) break;
          e = d[0].concat(p);
        }

        return e = e.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, a.subParser("hashElement")(e, r, t)), e = a.helper.replaceRecursiveRegExp(e, function (e) {
          return "\n\n¨K" + (t.gHtmlBlocks.push(e) - 1) + "K\n\n";
        }, "^ {0,3}\x3c!--", "--\x3e", "gm"), e = e.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, a.subParser("hashElement")(e, r, t)), e = t.converter._dispatch("hashHTMLBlocks.after", e, r, t);
      }), a.subParser("hashHTMLSpans", function (e, r, t) {

        function a(e) {
          return "¨C" + (t.gHtmlSpans.push(e) - 1) + "C";
        }

        return e = t.converter._dispatch("hashHTMLSpans.before", e, r, t), e = e.replace(/<[^>]+?\/>/gi, function (e) {
          return a(e);
        }), e = e.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function (e) {
          return a(e);
        }), e = e.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function (e) {
          return a(e);
        }), e = e.replace(/<[^>]+?>/gi, function (e) {
          return a(e);
        }), e = t.converter._dispatch("hashHTMLSpans.after", e, r, t);
      }), a.subParser("unhashHTMLSpans", function (e, r, t) {

        e = t.converter._dispatch("unhashHTMLSpans.before", e, r, t);

        for (var a = 0; a < t.gHtmlSpans.length; ++a) {
          for (var n = t.gHtmlSpans[a], s = 0; /¨C(\d+)C/.test(n);) {
            var o = RegExp.$1;

            if (n = n.replace("¨C" + o + "C", t.gHtmlSpans[o]), 10 === s) {
              console.error("maximum nesting of 10 spans reached!!!");
              break;
            }

            ++s;
          }

          e = e.replace("¨C" + a + "C", n);
        }

        return e = t.converter._dispatch("unhashHTMLSpans.after", e, r, t);
      }), a.subParser("hashPreCodeTags", function (e, r, t) {

        e = t.converter._dispatch("hashPreCodeTags.before", e, r, t);
        return e = a.helper.replaceRecursiveRegExp(e, function (e, n, s, o) {
          var i = s + a.subParser("encodeCode")(n, r, t) + o;
          return "\n\n¨G" + (t.ghCodeBlocks.push({
            text: e,
            codeblock: i
          }) - 1) + "G\n\n";
        }, "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim"), e = t.converter._dispatch("hashPreCodeTags.after", e, r, t);
      }), a.subParser("headers", function (e, r, t) {

        function n(e) {
          var n, s;

          if (r.customizedHeaderId) {
            var o = e.match(/\{([^{]+?)}\s*$/);
            o && o[1] && (e = o[1]);
          }

          return n = e, s = a.helper.isString(r.prefixHeaderId) ? r.prefixHeaderId : !0 === r.prefixHeaderId ? "section-" : "", r.rawPrefixHeaderId || (n = s + n), n = r.ghCompatibleHeaderId ? n.replace(/ /g, "-").replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase() : r.rawHeaderId ? n.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/¨T/g, "¨").replace(/¨D/g, "$").replace(/["']/g, "-").toLowerCase() : n.replace(/[^\w]/g, "").toLowerCase(), r.rawPrefixHeaderId && (n = s + n), t.hashLinkCounts[n] ? n = n + "-" + t.hashLinkCounts[n]++ : t.hashLinkCounts[n] = 1, n;
        }

        e = t.converter._dispatch("headers.before", e, r, t);
        var s = isNaN(parseInt(r.headerLevelStart)) ? 1 : parseInt(r.headerLevelStart),
            o = r.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm,
            i = r.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
        e = (e = e.replace(o, function (e, o) {
          var i = a.subParser("spanGamut")(o, r, t),
              l = r.noHeaderId ? "" : ' id="' + n(o) + '"',
              c = "<h" + s + l + ">" + i + "</h" + s + ">";
          return a.subParser("hashBlock")(c, r, t);
        })).replace(i, function (e, o) {
          var i = a.subParser("spanGamut")(o, r, t),
              l = r.noHeaderId ? "" : ' id="' + n(o) + '"',
              c = s + 1,
              u = "<h" + c + l + ">" + i + "</h" + c + ">";
          return a.subParser("hashBlock")(u, r, t);
        });
        var l = r.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
        return e = e.replace(l, function (e, o, i) {
          var l = i;
          r.customizedHeaderId && (l = i.replace(/\s?\{([^{]+?)}\s*$/, ""));
          var c = a.subParser("spanGamut")(l, r, t),
              u = r.noHeaderId ? "" : ' id="' + n(i) + '"',
              d = s - 1 + o.length,
              p = "<h" + d + u + ">" + c + "</h" + d + ">";
          return a.subParser("hashBlock")(p, r, t);
        }), e = t.converter._dispatch("headers.after", e, r, t);
      }), a.subParser("horizontalRule", function (e, r, t) {

        e = t.converter._dispatch("horizontalRule.before", e, r, t);
        var n = a.subParser("hashBlock")("<hr />", r, t);
        return e = e.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, n), e = e.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, n), e = e.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, n), e = t.converter._dispatch("horizontalRule.after", e, r, t);
      }), a.subParser("images", function (e, r, t) {

        function n(e, r, n, s, o, i, l, c) {
          var u = t.gUrls,
              d = t.gTitles,
              p = t.gDimensions;
          if (n = n.toLowerCase(), c || (c = ""), e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) s = "";else if ("" === s || null === s) {
            if ("" !== n && null !== n || (n = r.toLowerCase().replace(/ ?\n/g, " ")), s = "#" + n, a.helper.isUndefined(u[n])) return e;
            s = u[n], a.helper.isUndefined(d[n]) || (c = d[n]), a.helper.isUndefined(p[n]) || (o = p[n].width, i = p[n].height);
          }
          r = r.replace(/"/g, "&quot;").replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback);
          var h = '<img src="' + (s = s.replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback)) + '" alt="' + r + '"';
          return c && a.helper.isString(c) && (h += ' title="' + (c = c.replace(/"/g, "&quot;").replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback)) + '"'), o && i && (h += ' width="' + (o = "*" === o ? "auto" : o) + '"', h += ' height="' + (i = "*" === i ? "auto" : i) + '"'), h += " />";
        }

        return e = (e = t.converter._dispatch("images.before", e, r, t)).replace(/!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, n), e = e.replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, function (e, r, t, a, s, o, i, l) {
          return a = a.replace(/\s/g, ""), n(e, r, t, a, s, o, 0, l);
        }), e = e.replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, n), e = e.replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, n), e = e.replace(/!\[([^\[\]]+)]()()()()()/g, n), e = t.converter._dispatch("images.after", e, r, t);
      }), a.subParser("italicsAndBold", function (e, r, t) {

        function a(e, r, t) {
          return r + e + t;
        }

        return e = t.converter._dispatch("italicsAndBold.before", e, r, t), e = r.literalMidWordUnderscores ? (e = (e = e.replace(/\b___(\S[\s\S]*?)___\b/g, function (e, r) {
          return a(r, "<strong><em>", "</em></strong>");
        })).replace(/\b__(\S[\s\S]*?)__\b/g, function (e, r) {
          return a(r, "<strong>", "</strong>");
        })).replace(/\b_(\S[\s\S]*?)_\b/g, function (e, r) {
          return a(r, "<em>", "</em>");
        }) : (e = (e = e.replace(/___(\S[\s\S]*?)___/g, function (e, r) {
          return /\S$/.test(r) ? a(r, "<strong><em>", "</em></strong>") : e;
        })).replace(/__(\S[\s\S]*?)__/g, function (e, r) {
          return /\S$/.test(r) ? a(r, "<strong>", "</strong>") : e;
        })).replace(/_([^\s_][\s\S]*?)_/g, function (e, r) {
          return /\S$/.test(r) ? a(r, "<em>", "</em>") : e;
        }), e = r.literalMidWordAsterisks ? (e = (e = e.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function (e, r, t) {
          return a(t, r + "<strong><em>", "</em></strong>");
        })).replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function (e, r, t) {
          return a(t, r + "<strong>", "</strong>");
        })).replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function (e, r, t) {
          return a(t, r + "<em>", "</em>");
        }) : (e = (e = e.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function (e, r) {
          return /\S$/.test(r) ? a(r, "<strong><em>", "</em></strong>") : e;
        })).replace(/\*\*(\S[\s\S]*?)\*\*/g, function (e, r) {
          return /\S$/.test(r) ? a(r, "<strong>", "</strong>") : e;
        })).replace(/\*([^\s*][\s\S]*?)\*/g, function (e, r) {
          return /\S$/.test(r) ? a(r, "<em>", "</em>") : e;
        }), e = t.converter._dispatch("italicsAndBold.after", e, r, t);
      }), a.subParser("lists", function (e, r, t) {

        function n(e, n) {
          t.gListLevel++, e = e.replace(/\n{2,}$/, "\n");
          var s = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,
              o = /\n[ \t]*\n(?!¨0)/.test(e += "¨0");
          return r.disableForced4SpacesIndentedSublists && (s = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm), e = e.replace(s, function (e, n, s, i, l, c, u) {
            u = u && "" !== u.trim();
            var d = a.subParser("outdent")(l, r, t),
                p = "";
            return c && r.tasklists && (p = ' class="task-list-item" style="list-style-type: none;"', d = d.replace(/^[ \t]*\[(x|X| )?]/m, function () {
              var e = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
              return u && (e += " checked"), e += ">";
            })), d = d.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function (e) {
              return "¨A" + e;
            }), n || d.search(/\n{2,}/) > -1 ? (d = a.subParser("githubCodeBlocks")(d, r, t), d = a.subParser("blockGamut")(d, r, t)) : (d = (d = a.subParser("lists")(d, r, t)).replace(/\n$/, ""), d = (d = a.subParser("hashHTMLBlocks")(d, r, t)).replace(/\n\n+/g, "\n\n"), d = o ? a.subParser("paragraphs")(d, r, t) : a.subParser("spanGamut")(d, r, t)), d = d.replace("¨A", ""), d = "<li" + p + ">" + d + "</li>\n";
          }), e = e.replace(/¨0/g, ""), t.gListLevel--, n && (e = e.replace(/\s+$/, "")), e;
        }

        function s(e, r) {
          if ("ol" === r) {
            var t = e.match(/^ *(\d+)\./);
            if (t && "1" !== t[1]) return ' start="' + t[1] + '"';
          }

          return "";
        }

        function o(e, t, a) {
          var o = r.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm,
              i = r.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm,
              l = "ul" === t ? o : i,
              c = "";
          if (-1 !== e.search(l)) !function r(u) {
            var d = u.search(l),
                p = s(e, t);
            -1 !== d ? (c += "\n\n<" + t + p + ">\n" + n(u.slice(0, d), !!a) + "</" + t + ">\n", l = "ul" === (t = "ul" === t ? "ol" : "ul") ? o : i, r(u.slice(d))) : c += "\n\n<" + t + p + ">\n" + n(u, !!a) + "</" + t + ">\n";
          }(e);else {
            var u = s(e, t);
            c = "\n\n<" + t + u + ">\n" + n(e, !!a) + "</" + t + ">\n";
          }
          return c;
        }

        return e = t.converter._dispatch("lists.before", e, r, t), e += "¨0", e = t.gListLevel ? e.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function (e, r, t) {
          return o(r, t.search(/[*+-]/g) > -1 ? "ul" : "ol", !0);
        }) : e.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function (e, r, t, a) {
          return o(t, a.search(/[*+-]/g) > -1 ? "ul" : "ol", !1);
        }), e = e.replace(/¨0/, ""), e = t.converter._dispatch("lists.after", e, r, t);
      }), a.subParser("metadata", function (e, r, t) {

        function a(e) {
          t.metadata.raw = e, (e = (e = e.replace(/&/g, "&amp;").replace(/"/g, "&quot;")).replace(/\n {4}/g, " ")).replace(/^([\S ]+): +([\s\S]+?)$/gm, function (e, r, a) {
            return t.metadata.parsed[r] = a, "";
          });
        }

        return r.metadata ? (e = t.converter._dispatch("metadata.before", e, r, t), e = e.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function (e, r, t) {
          return a(t), "¨M";
        }), e = e.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function (e, r, n) {
          return r && (t.metadata.format = r), a(n), "¨M";
        }), e = e.replace(/¨M/g, ""), e = t.converter._dispatch("metadata.after", e, r, t)) : e;
      }), a.subParser("outdent", function (e, r, t) {

        return e = t.converter._dispatch("outdent.before", e, r, t), e = e.replace(/^(\t|[ ]{1,4})/gm, "¨0"), e = e.replace(/¨0/g, ""), e = t.converter._dispatch("outdent.after", e, r, t);
      }), a.subParser("paragraphs", function (e, r, t) {

        for (var n = (e = (e = (e = t.converter._dispatch("paragraphs.before", e, r, t)).replace(/^\n+/g, "")).replace(/\n+$/g, "")).split(/\n{2,}/g), s = [], o = n.length, i = 0; i < o; i++) {
          var l = n[i];
          l.search(/¨(K|G)(\d+)\1/g) >= 0 ? s.push(l) : l.search(/\S/) >= 0 && (l = (l = a.subParser("spanGamut")(l, r, t)).replace(/^([ \t]*)/g, "<p>"), l += "</p>", s.push(l));
        }

        for (o = s.length, i = 0; i < o; i++) {
          for (var c = "", u = s[i], d = !1; /¨(K|G)(\d+)\1/.test(u);) {
            var p = RegExp.$1,
                h = RegExp.$2;
            c = (c = "K" === p ? t.gHtmlBlocks[h] : d ? a.subParser("encodeCode")(t.ghCodeBlocks[h].text, r, t) : t.ghCodeBlocks[h].codeblock).replace(/\$/g, "$$$$"), u = u.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, c), /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(u) && (d = !0);
          }

          s[i] = u;
        }

        return e = s.join("\n"), e = e.replace(/^\n+/g, ""), e = e.replace(/\n+$/g, ""), t.converter._dispatch("paragraphs.after", e, r, t);
      }), a.subParser("runExtension", function (e, r, t, a) {

        if (e.filter) r = e.filter(r, a.converter, t);else if (e.regex) {
          var n = e.regex;
          n instanceof RegExp || (n = new RegExp(n, "g")), r = r.replace(n, e.replace);
        }
        return r;
      }), a.subParser("spanGamut", function (e, r, t) {

        return e = t.converter._dispatch("spanGamut.before", e, r, t), e = a.subParser("codeSpans")(e, r, t), e = a.subParser("escapeSpecialCharsWithinTagAttributes")(e, r, t), e = a.subParser("encodeBackslashEscapes")(e, r, t), e = a.subParser("images")(e, r, t), e = a.subParser("anchors")(e, r, t), e = a.subParser("autoLinks")(e, r, t), e = a.subParser("simplifiedAutoLinks")(e, r, t), e = a.subParser("emoji")(e, r, t), e = a.subParser("underline")(e, r, t), e = a.subParser("italicsAndBold")(e, r, t), e = a.subParser("strikethrough")(e, r, t), e = a.subParser("ellipsis")(e, r, t), e = a.subParser("hashHTMLSpans")(e, r, t), e = a.subParser("encodeAmpsAndAngles")(e, r, t), r.simpleLineBreaks ? /\n\n¨K/.test(e) || (e = e.replace(/\n+/g, "<br />\n")) : e = e.replace(/  +\n/g, "<br />\n"), e = t.converter._dispatch("spanGamut.after", e, r, t);
      }), a.subParser("strikethrough", function (e, r, t) {

        return r.strikethrough && (e = (e = t.converter._dispatch("strikethrough.before", e, r, t)).replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function (e, n) {
          return function (e) {
            return r.simplifiedAutoLink && (e = a.subParser("simplifiedAutoLinks")(e, r, t)), "<del>" + e + "</del>";
          }(n);
        }), e = t.converter._dispatch("strikethrough.after", e, r, t)), e;
      }), a.subParser("stripLinkDefinitions", function (e, r, t) {

        var n = function (e, n, s, o, i, l, c) {
          return n = n.toLowerCase(), s.match(/^data:.+?\/.+?;base64,/) ? t.gUrls[n] = s.replace(/\s/g, "") : t.gUrls[n] = a.subParser("encodeAmpsAndAngles")(s, r, t), l ? l + c : (c && (t.gTitles[n] = c.replace(/"|'/g, "&quot;")), r.parseImgDimensions && o && i && (t.gDimensions[n] = {
            width: o,
            height: i
          }), "");
        };

        return e = (e += "¨0").replace(/^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm, n), e = e.replace(/^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, n), e = e.replace(/¨0/, "");
      }), a.subParser("tables", function (e, r, t) {

        function n(e) {
          return /^:[ \t]*--*$/.test(e) ? ' style="text-align:left;"' : /^--*[ \t]*:[ \t]*$/.test(e) ? ' style="text-align:right;"' : /^:[ \t]*--*[ \t]*:$/.test(e) ? ' style="text-align:center;"' : "";
        }

        function s(e, n) {
          var s = "";
          return e = e.trim(), (r.tablesHeaderId || r.tableHeaderId) && (s = ' id="' + e.replace(/ /g, "_").toLowerCase() + '"'), e = a.subParser("spanGamut")(e, r, t), "<th" + s + n + ">" + e + "</th>\n";
        }

        function o(e, n) {
          return "<td" + n + ">" + a.subParser("spanGamut")(e, r, t) + "</td>\n";
        }

        function i(e) {
          var i,
              l = e.split("\n");

          for (i = 0; i < l.length; ++i) /^ {0,3}\|/.test(l[i]) && (l[i] = l[i].replace(/^ {0,3}\|/, "")), /\|[ \t]*$/.test(l[i]) && (l[i] = l[i].replace(/\|[ \t]*$/, "")), l[i] = a.subParser("codeSpans")(l[i], r, t);

          var c = l[0].split("|").map(function (e) {
            return e.trim();
          }),
              u = l[1].split("|").map(function (e) {
            return e.trim();
          }),
              d = [],
              p = [],
              h = [],
              _ = [];

          for (l.shift(), l.shift(), i = 0; i < l.length; ++i) "" !== l[i].trim() && d.push(l[i].split("|").map(function (e) {
            return e.trim();
          }));

          if (c.length < u.length) return e;

          for (i = 0; i < u.length; ++i) h.push(n(u[i]));

          for (i = 0; i < c.length; ++i) a.helper.isUndefined(h[i]) && (h[i] = ""), p.push(s(c[i], h[i]));

          for (i = 0; i < d.length; ++i) {
            for (var g = [], m = 0; m < p.length; ++m) a.helper.isUndefined(d[i][m]), g.push(o(d[i][m], h[m]));

            _.push(g);
          }

          return function (e, r) {
            for (var t = "<table>\n<thead>\n<tr>\n", a = e.length, n = 0; n < a; ++n) t += e[n];

            for (t += "</tr>\n</thead>\n<tbody>\n", n = 0; n < r.length; ++n) {
              t += "<tr>\n";

              for (var s = 0; s < a; ++s) t += r[n][s];

              t += "</tr>\n";
            }

            return t += "</tbody>\n</table>\n";
          }(p, _);
        }

        if (!r.tables) return e;
        return e = t.converter._dispatch("tables.before", e, r, t), e = e.replace(/\\(\|)/g, a.helper.escapeCharactersCallback), e = e.replace(/^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, i), e = e.replace(/^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm, i), e = t.converter._dispatch("tables.after", e, r, t);
      }), a.subParser("underline", function (e, r, t) {

        return r.underline ? (e = t.converter._dispatch("underline.before", e, r, t), e = r.literalMidWordUnderscores ? (e = e.replace(/\b___(\S[\s\S]*?)___\b/g, function (e, r) {
          return "<u>" + r + "</u>";
        })).replace(/\b__(\S[\s\S]*?)__\b/g, function (e, r) {
          return "<u>" + r + "</u>";
        }) : (e = e.replace(/___(\S[\s\S]*?)___/g, function (e, r) {
          return /\S$/.test(r) ? "<u>" + r + "</u>" : e;
        })).replace(/__(\S[\s\S]*?)__/g, function (e, r) {
          return /\S$/.test(r) ? "<u>" + r + "</u>" : e;
        }), e = e.replace(/(_)/g, a.helper.escapeCharactersCallback), e = t.converter._dispatch("underline.after", e, r, t)) : e;
      }), a.subParser("unescapeSpecialChars", function (e, r, t) {

        return e = t.converter._dispatch("unescapeSpecialChars.before", e, r, t), e = e.replace(/¨E(\d+)E/g, function (e, r) {
          var t = parseInt(r);
          return String.fromCharCode(t);
        }), e = t.converter._dispatch("unescapeSpecialChars.after", e, r, t);
      }), a.subParser("makeMarkdown.blockquote", function (e, r) {

        var t = "";
        if (e.hasChildNodes()) for (var n = e.childNodes, s = n.length, o = 0; o < s; ++o) {
          var i = a.subParser("makeMarkdown.node")(n[o], r);
          "" !== i && (t += i);
        }
        return t = t.trim(), t = "> " + t.split("\n").join("\n> ");
      }), a.subParser("makeMarkdown.codeBlock", function (e, r) {

        var t = e.getAttribute("language"),
            a = e.getAttribute("precodenum");
        return "```" + t + "\n" + r.preList[a] + "\n```";
      }), a.subParser("makeMarkdown.codeSpan", function (e) {

        return "`" + e.innerHTML + "`";
      }), a.subParser("makeMarkdown.emphasis", function (e, r) {

        var t = "";

        if (e.hasChildNodes()) {
          t += "*";

          for (var n = e.childNodes, s = n.length, o = 0; o < s; ++o) t += a.subParser("makeMarkdown.node")(n[o], r);

          t += "*";
        }

        return t;
      }), a.subParser("makeMarkdown.header", function (e, r, t) {

        var n = new Array(t + 1).join("#"),
            s = "";

        if (e.hasChildNodes()) {
          s = n + " ";

          for (var o = e.childNodes, i = o.length, l = 0; l < i; ++l) s += a.subParser("makeMarkdown.node")(o[l], r);
        }

        return s;
      }), a.subParser("makeMarkdown.hr", function () {

        return "---";
      }), a.subParser("makeMarkdown.image", function (e) {

        var r = "";
        return e.hasAttribute("src") && (r += "![" + e.getAttribute("alt") + "](", r += "<" + e.getAttribute("src") + ">", e.hasAttribute("width") && e.hasAttribute("height") && (r += " =" + e.getAttribute("width") + "x" + e.getAttribute("height")), e.hasAttribute("title") && (r += ' "' + e.getAttribute("title") + '"'), r += ")"), r;
      }), a.subParser("makeMarkdown.links", function (e, r) {

        var t = "";

        if (e.hasChildNodes() && e.hasAttribute("href")) {
          var n = e.childNodes,
              s = n.length;
          t = "[";

          for (var o = 0; o < s; ++o) t += a.subParser("makeMarkdown.node")(n[o], r);

          t += "](", t += "<" + e.getAttribute("href") + ">", e.hasAttribute("title") && (t += ' "' + e.getAttribute("title") + '"'), t += ")";
        }

        return t;
      }), a.subParser("makeMarkdown.list", function (e, r, t) {

        var n = "";
        if (!e.hasChildNodes()) return "";

        for (var s = e.childNodes, o = s.length, i = e.getAttribute("start") || 1, l = 0; l < o; ++l) if (void 0 !== s[l].tagName && "li" === s[l].tagName.toLowerCase()) {
          n += ("ol" === t ? i.toString() + ". " : "- ") + a.subParser("makeMarkdown.listItem")(s[l], r), ++i;
        }

        return (n += "\n\x3c!-- --\x3e\n").trim();
      }), a.subParser("makeMarkdown.listItem", function (e, r) {

        for (var t = "", n = e.childNodes, s = n.length, o = 0; o < s; ++o) t += a.subParser("makeMarkdown.node")(n[o], r);

        return /\n$/.test(t) ? t = t.split("\n").join("\n    ").replace(/^ {4}$/gm, "").replace(/\n\n+/g, "\n\n") : t += "\n", t;
      }), a.subParser("makeMarkdown.node", function (e, r, t) {

        t = t || !1;
        var n = "";
        if (3 === e.nodeType) return a.subParser("makeMarkdown.txt")(e, r);
        if (8 === e.nodeType) return "\x3c!--" + e.data + "--\x3e\n\n";
        if (1 !== e.nodeType) return "";

        switch (e.tagName.toLowerCase()) {
          case "h1":
            t || (n = a.subParser("makeMarkdown.header")(e, r, 1) + "\n\n");
            break;

          case "h2":
            t || (n = a.subParser("makeMarkdown.header")(e, r, 2) + "\n\n");
            break;

          case "h3":
            t || (n = a.subParser("makeMarkdown.header")(e, r, 3) + "\n\n");
            break;

          case "h4":
            t || (n = a.subParser("makeMarkdown.header")(e, r, 4) + "\n\n");
            break;

          case "h5":
            t || (n = a.subParser("makeMarkdown.header")(e, r, 5) + "\n\n");
            break;

          case "h6":
            t || (n = a.subParser("makeMarkdown.header")(e, r, 6) + "\n\n");
            break;

          case "p":
            t || (n = a.subParser("makeMarkdown.paragraph")(e, r) + "\n\n");
            break;

          case "blockquote":
            t || (n = a.subParser("makeMarkdown.blockquote")(e, r) + "\n\n");
            break;

          case "hr":
            t || (n = a.subParser("makeMarkdown.hr")(e, r) + "\n\n");
            break;

          case "ol":
            t || (n = a.subParser("makeMarkdown.list")(e, r, "ol") + "\n\n");
            break;

          case "ul":
            t || (n = a.subParser("makeMarkdown.list")(e, r, "ul") + "\n\n");
            break;

          case "precode":
            t || (n = a.subParser("makeMarkdown.codeBlock")(e, r) + "\n\n");
            break;

          case "pre":
            t || (n = a.subParser("makeMarkdown.pre")(e, r) + "\n\n");
            break;

          case "table":
            t || (n = a.subParser("makeMarkdown.table")(e, r) + "\n\n");
            break;

          case "code":
            n = a.subParser("makeMarkdown.codeSpan")(e, r);
            break;

          case "em":
          case "i":
            n = a.subParser("makeMarkdown.emphasis")(e, r);
            break;

          case "strong":
          case "b":
            n = a.subParser("makeMarkdown.strong")(e, r);
            break;

          case "del":
            n = a.subParser("makeMarkdown.strikethrough")(e, r);
            break;

          case "a":
            n = a.subParser("makeMarkdown.links")(e, r);
            break;

          case "img":
            n = a.subParser("makeMarkdown.image")(e, r);
            break;

          default:
            n = e.outerHTML + "\n\n";
        }

        return n;
      }), a.subParser("makeMarkdown.paragraph", function (e, r) {

        var t = "";
        if (e.hasChildNodes()) for (var n = e.childNodes, s = n.length, o = 0; o < s; ++o) t += a.subParser("makeMarkdown.node")(n[o], r);
        return t = t.trim();
      }), a.subParser("makeMarkdown.pre", function (e, r) {

        var t = e.getAttribute("prenum");
        return "<pre>" + r.preList[t] + "</pre>";
      }), a.subParser("makeMarkdown.strikethrough", function (e, r) {

        var t = "";

        if (e.hasChildNodes()) {
          t += "~~";

          for (var n = e.childNodes, s = n.length, o = 0; o < s; ++o) t += a.subParser("makeMarkdown.node")(n[o], r);

          t += "~~";
        }

        return t;
      }), a.subParser("makeMarkdown.strong", function (e, r) {

        var t = "";

        if (e.hasChildNodes()) {
          t += "**";

          for (var n = e.childNodes, s = n.length, o = 0; o < s; ++o) t += a.subParser("makeMarkdown.node")(n[o], r);

          t += "**";
        }

        return t;
      }), a.subParser("makeMarkdown.table", function (e, r) {

        var t,
            n,
            s = "",
            o = [[], []],
            i = e.querySelectorAll("thead>tr>th"),
            l = e.querySelectorAll("tbody>tr");

        for (t = 0; t < i.length; ++t) {
          var c = a.subParser("makeMarkdown.tableCell")(i[t], r),
              u = "---";

          if (i[t].hasAttribute("style")) {
            switch (i[t].getAttribute("style").toLowerCase().replace(/\s/g, "")) {
              case "text-align:left;":
                u = ":---";
                break;

              case "text-align:right;":
                u = "---:";
                break;

              case "text-align:center;":
                u = ":---:";
            }
          }

          o[0][t] = c.trim(), o[1][t] = u;
        }

        for (t = 0; t < l.length; ++t) {
          var d = o.push([]) - 1,
              p = l[t].getElementsByTagName("td");

          for (n = 0; n < i.length; ++n) {
            var h = " ";
            void 0 !== p[n] && (h = a.subParser("makeMarkdown.tableCell")(p[n], r)), o[d].push(h);
          }
        }

        var _ = 3;

        for (t = 0; t < o.length; ++t) for (n = 0; n < o[t].length; ++n) {
          var g = o[t][n].length;
          g > _ && (_ = g);
        }

        for (t = 0; t < o.length; ++t) {
          for (n = 0; n < o[t].length; ++n) 1 === t ? ":" === o[t][n].slice(-1) ? o[t][n] = a.helper.padEnd(o[t][n].slice(-1), _ - 1, "-") + ":" : o[t][n] = a.helper.padEnd(o[t][n], _, "-") : o[t][n] = a.helper.padEnd(o[t][n], _);

          s += "| " + o[t].join(" | ") + " |\n";
        }

        return s.trim();
      }), a.subParser("makeMarkdown.tableCell", function (e, r) {

        var t = "";
        if (!e.hasChildNodes()) return "";

        for (var n = e.childNodes, s = n.length, o = 0; o < s; ++o) t += a.subParser("makeMarkdown.node")(n[o], r, !0);

        return t.trim();
      }), a.subParser("makeMarkdown.txt", function (e) {

        var r = e.nodeValue;
        return r = r.replace(/ +/g, " "), r = r.replace(/¨NBSP;/g, " "), r = a.helper.unescapeHTMLEntities(r), r = r.replace(/([*_~|`])/g, "\\$1"), r = r.replace(/^(\s*)>/g, "\\$1>"), r = r.replace(/^#/gm, "\\#"), r = r.replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3"), r = r.replace(/^( {0,3}\d+)\./gm, "$1\\."), r = r.replace(/^( {0,3})([+-])/gm, "$1\\$2"), r = r.replace(/]([\s]*)\(/g, "\\]$1\\("), r = r.replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:");
      });
        module.exports ? module.exports = a : this.showdown = a;
    }).call(commonjsGlobal);
  });

  if (typeof appID !== 'undefined') {
    let update = confirm("　　3.0版本更新需要重新更换一次配置，深感抱歉，但是为了更好的体验不得不这样。\n　　如果不想更换或者不想舍弃已有的数据，可以继续使用2.4.2版本，这也是比较成熟的版本了，但是以后不会再维护。更换详情请点击确定前往文档查看");

    if (update == true) {
      location.href = 'https://artitalk.js.org';
    }
  } // emoji init


  const atEmojiQQ = {
    qq_aini: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/aini.gif',
    qq_aixin: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/aixin.gif',
    qq_aoman: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/aoman.gif',
    qq_baiyan: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/baiyan.gif',
    qq_bangbangtang: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bangbangtang.gif',
    qq_baojin: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/baojin.gif',
    qq_baoquan: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/baoquan.gif',
    qq_bishi: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bishi.gif',
    qq_bizui: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bizui.gif',
    qq_cahan: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/cahan.gif',
    qq_caidao: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/caidao.gif',
    qq_chi: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/chi.gif',
    qq_ciya: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/ciya.gif',
    qq_dabing: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/dabing.gif',
    qq_daku: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/daku.gif',
    qq_dan: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/dan.gif',
    qq_deyi: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/deyi.gif',
    qq_doge: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/doge.gif',
    qq_fadai: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/fadai.gif',
    qq_fanu: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/fanu.gif',
    qq_fendou: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/fendou.gif',
    qq_ganga: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/ganga.gif',
    qq_gouyin: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/gouyin.gif',
    qq_guzhang: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/guzhang.gif',
    qq_haixiu: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/haixiu.gif',
    qq_hanxiao: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/hanxiao.gif',
    qq_haobang: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/haobang.gif',
    qq_haqian: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/haqian.gif',
    qq_hecai: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/hecai.gif',
    qq_hexie: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/hexie.gif',
    qq_huaixiao: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/huaixiao.gif',
    qq_jie: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/jie.gif',
    qq_jingkong: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/jingkong.gif',
    qq_jingxi: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/jingxi.gif',
    qq_jingya: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/jingya.gif',
    qq_juhua: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/juhua.gif',
    qq_keai: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/keai.gif',
    qq_kelian: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/kelian.gif',
    qq_koubi: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/koubi.gif',
    qq_ku: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/ku.gif',
    qq_kuaikule: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/kuaikule.gif',
    qq_kulou: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/kulou.gif',
    qq_kun: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/kun.gif',
    qq_lanqiu: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/lanqiu.gif',
    qq_leiben: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/leiben.gif',
    qq_lenghan: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/lenghan.gif',
    qq_liuhan: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/liuhan.gif',
    qq_liulei: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/liulei.gif',
    qq_nanguo: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/nanguo.gif',
    qq_OK: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/OK.gif',
    qq_penxue: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/penxue.gif',
    qq_piezui: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/piezui.gif',
    qq_pijiu: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/pijiu.gif',
    qq_qiang: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/qiang.gif',
    qq_qiaoda: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/qiaoda.gif',
    qq_qinqin: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/qinqin.gif',
    qq_qiudale: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/qiudale.gif',
    qq_quantou: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/quantou.gif',
    qq_saorao: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/saorao.gif',
    qq_se: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/se.gif',
    qq_shengli: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shengli.gif',
    qq_shouqiang: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shouqiang.gif',
    qq_shuai: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shuai.gif',
    qq_shui: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shui.gif',
    qq_tiaopi: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/tiaopi.gif',
    qq_touxiao: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/touxiao.gif',
    qq_tu: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/tu.gif',
    qq_tuosai: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/tuosai.gif',
    qq_weiqu: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/weiqu.gif',
    qq_weixiao: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/weixiao.gif',
    qq_woshou: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/woshou.gif',
    qq_wozuimei: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/wozuimei.gif',
    qq_wunai: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/wunai.gif',
    qq_xia: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xia.gif',
    qq_xiaojiujie: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xiaojiujie.gif',
    qq_xiaoku: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xiaoku.gif',
    qq_xiaoyanger: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xiaoyanger.gif',
    qq_xieyanxiao: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xieyanxiao.gif',
    qq_xigua: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xigua.gif',
    qq_xu: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xu.gif',
    qq_yangtuo: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/yangtuo.gif',
    qq_yinxian: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/yinxian.gif',
    qq_yiwen: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/yiwen.gif',
    qq_youhengheng: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/youhengheng.gif',
    qq_youling: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/youling.gif',
    qq_yun: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/yun.gif',
    qq_zaijian: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zaijian.gif',
    qq_zhayanjian: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zhayanjian.gif',
    qq_zhemo: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zhemo.gif',
    qq_zhouma: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zhouma.gif',
    qq_zhuakuang: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zhuakuang.gif',
    qq_zuohengheng: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zuohengheng.gif'
  };
  const atEmojiTB = {
    OK: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/OK.png',
    what: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/what.png',
    不高兴: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/不高兴.png',
    乖: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/乖.png',
    你懂的: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/你懂的.png',
    便便: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/便便.png',
    勉强: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/勉强.png',
    吐: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/吐.png',
    吐舌: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/吐舌.png',
    呀咩爹: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/呀咩爹.png',
    呵呵: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/呵呵.png',
    哈哈: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/哈哈.png',
    啊: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/啊.png',
    喷: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/喷.png',
    大拇指: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/大拇指.png',
    太开心: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/太开心.png',
    太阳: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/太阳.png',
    委屈: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/委屈.png',
    小乖: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/小乖.png',
    小红脸: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/小红脸.png',
    彩虹: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/彩虹.png',
    心碎: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/心碎.png',
    怒: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/怒.png',
    惊哭: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/惊哭.png',
    惊讶: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/惊讶.png',
    懒得理: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/懒得理.png',
    手纸: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/手纸.png',
    挖鼻: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/挖鼻.png',
    捂嘴笑: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/捂嘴笑.png',
    星星月亮: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/星星月亮.png',
    汗: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/汗.png',
    沙发: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/沙发.png',
    泪: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/泪.png',
    滑稽: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/滑稽.png',
    灯泡: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/灯泡.png',
    爱心: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/爱心.png',
    犀利: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/犀利.png',
    狂汗: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/狂汗.png',
    玫瑰: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/玫瑰.png',
    疑问: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/疑问.png',
    真棒: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/真棒.png',
    睡觉: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/睡觉.png',
    礼物: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/礼物.png',
    笑尿: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/笑尿.png',
    笑眼: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/笑眼.png',
    红领巾: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/红领巾.png',
    胜利: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/胜利.png',
    花心: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/花心.png',
    茶杯: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/茶杯.png',
    药丸: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/药丸.png',
    蛋糕: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/蛋糕.png',
    蜡烛: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/蜡烛.png',
    鄙视: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/鄙视.png',
    酷: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/酷.png',
    酸爽: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/酸爽.png',
    钱币: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/钱币.png',
    阴险: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/阴险.png',
    音乐: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/音乐.png',
    香蕉: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/香蕉.png',
    黑线: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/黑线.png'
  };
  const atEmojiBB = {
    baiyan: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/baiyan.png',
    bishi: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bishi.png',
    bizui: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bizui.png',
    chan: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/chan.png',
    daku: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/daku.png',
    dalao: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/dalao.png',
    dalian: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/dalian.png',
    dianzan: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/dianzan.png',
    doge: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/doge.png',
    facai: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/facai.png',
    fadai: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/fadai.png',
    fanu: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/fanu.png',
    ganga: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/ganga.png',
    guilian: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/guilian.png',
    guzhang: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/guzhang.png',
    haixiu: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/haixiu.png',
    heirenwenhao: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/heirenwenhao.png',
    huaixiao: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/huaixiao.png',
    jingxia: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/jingxia.png',
    keai: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/keai.png',
    koubi: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/koubi.png',
    kun2: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/kun2.png',
    lengmo: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/lengmo.png',
    liubixue: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/liubixue.png',
    liuhan: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/liuhan.png',
    liulei: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/liulei.png',
    mudengkoudai: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/mudengkoudai.png',
    nanguo: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/nanguo.png',
    outu: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/outu.png',
    qinqin: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/qinqin.png',
    se: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/se.png',
    shengbing: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shengbing.png',
    shengqi: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shengqi.png',
    shuizhao: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shuizhao.png',
    sikao: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/sikao.png',
    tiaokan: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/tiaokan.png',
    tiaopi: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/tiaopi.png',
    touxiao: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/touxiao.png',
    tuxue: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/tuxue.png',
    weiqu: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/weiqu.png',
    wunai: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/wunai.png',
    xiaoku: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xiaoku.png',
    xieyanxiao: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xieyanxiao.png',
    yiwen: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/yiwen.png',
    yun: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/yun.png',
    zaijian: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zaijian.png',
    zhoumei: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zhoumei.png',
    zhuakuang: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zhuakuang.png'
  };
  let atEmojiQ = '';
  let atEmojiT = '';
  let atEmojiB = '';

  for (const key in atEmojiQQ) {
    atEmojiQ = `${atEmojiQ}<img alt='[${key}]' title='${key}' onclick='insertEmoji("[${key}]")' class='atemoji gallery-group-img' src='${atEmojiQQ[key]}'/>`;
  }

  for (const key in atEmojiTB) {
    atEmojiT = `${atEmojiT}<img alt='[${key}]' title='${key}' onclick='insertEmoji("[${key}]")' class='atemoji gallery-group-img' src='${atEmojiTB[key]}'/>`;
  }

  for (const key in atEmojiBB) {
    atEmojiB = `${atEmojiB}<img alt='[${key}]' title='${key}' onclick='insertEmoji("[${key}]")' class='atemoji gallery-group-img' src='${atEmojiBB[key]}'/>`;
  }

  function Artitalk(options) {
    return new atEvery(options);
  }

  function atEvery(option) {
    const root = this;
    root.init(option);
    return root;
  }

  atEvery.prototype.init = function (option) {
    const root = this;
    root.config = option;
    !!option && root._init();
    return root;
  };

  atEvery.prototype._init = function () {
    const root = this;

    try {
      let {
        appId,
        appKey,
        lang,
        pageSize,
        atEmoji,
        bgImg,
        motion,
        cssUrl,
        shuoPla,
        avatarPla,
        serverURL,
        color1,
        color2,
        color3
      } = root.config;
      lang = typeof lang === 'undefined' || lang === '' ? 'zh' : lang;
      bgImg = typeof bgImg === 'undefined' || bgImg === '' ? 'https://cdn.jsdelivr.net/gh/drew233/cdn/20200409110727.webp' : bgImg;

      switch (lang) {
        case 'zh':
          var text0 = '由';
          var text00 = '发表';
          var text1 = '加载更多...';
          var text2 = '预览';
          var text3 = '发布';
          var text4 = '已登录';
          var text5 = '确定';
          var text6 = '退出登录';
          var text7 = '用户';
          var text8 = '密码';
          var text9 = '登录';
          var text10 = '取消';
          var text11 = '发布说说';
          var text12 = '添加图片，视频，音乐';
          var text14 = '(上传失败，若非网络原因，请联系Artitalk开发人员)';
          var text15 = '请先登录';
          var text16 = '内容不能为空';
          var text17 = '登陆失败，请检查用户名及密码是否正确';
          var text18 = '头像url';
          var text19 = '确定删除本条说说吗？';
          var text20 = '删除成功';
          var text21 = '请拖拽图片到此处';
          var text22 = '表情';
          var text23 = '删除';
          var text24 = '如果你看到这条说说，恭喜你已经配置成功并且可以正常使用了。当你发布一个说说之后，我将会自动消失。快去探索Artitalk吧<br>欢迎加入Artitalk的QQ交流群：1104585229<br>觉得本项目不错的话可以推荐给你的好友或者去GitHub点一个star，感谢支持';
          var text25 = '上传中';
          var text26 = '图片';
          var text27 = '音乐';
          var text28 = '视频';
          var text29 = '添加';
          var text30 = '上传的图片最大支持5M，请压缩后或换一个继续上传';
          var text31 = '上传的音乐最大支持10M，请压缩后或换一个继续上传';
          var text32 = '上传的视频最大支持30M，请压缩后或换一个继续上传';
          var text33 = '图片格式错误，请不要上传其他类型的文件';
          var text34 = '音频格式错误，请不要上传其他类型的文件';
          var text35 = '视频格式错误，请不要上传其他类型的文件';
          var textup = '上传ing';
          var loadingTxT = '加载中';
          var text36 = '用户名不能为空';
          var text37 = '密码不能为空';
          var text38 = '请在下方输入框进行修改然后点击保存即可';
          var text39 = '保存';
          break;

        case 'en':
          var text0 = 'Published by';
          var text00 = '';
          var text1 = 'load more...';
          var text2 = 'Preview';
          var text3 = 'Publish';
          var text4 = 'logged';
          var text5 = 'Ok';
          var text6 = 'Sign out';
          var text7 = 'Username';
          var text8 = 'Password';
          var text9 = 'Log in';
          var text10 = 'Cancel';
          var text11 = 'Post talk';
          var text12 = 'Add pictures, videos, music';
          var text14 = '(Upload failed, if not for network reasons, please contact Artitalk developers)';
          var text15 = 'Please log in first';
          var text16 = 'Content can not be blank';
          var text17 = 'Login failed, please check if the username and password are correct';
          var text18 = 'Avatar url';
          var text19 = 'Are you sure you want to devare this article?';
          var text20 = 'Successfully devared';
          var text21 = 'Please drag and drop pictures here';
          var text22 = 'emoji';
          var text23 = 'Devare';
          var text24 = 'If you see this, congratulations, you have successfully configured and can be used normally. When you post one shuoshuo, I will disappear automatically. Quickly explore Artitalk.<br>Welcome to Artitalk’s QQ group: 1104585229<br>If you think this project is good, you can recommend it to your friends or go to GitHub to order a star.';
          var text25 = 'uploading';
          var text26 = 'image';
          var text27 = 'music';
          var text28 = 'video';
          var text29 = 'Add';
          var text30 = 'The uploaded image supports a maximum of 5M, please compress or change another one to continue uploading';
          var text31 = 'The uploaded music supports a maximum of 10M, please compress or change another one to continue uploading';
          var text32 = 'The uploaded video supports a maximum of 30M, please compress or change another one to continue uploading';
          var text33 = 'Picture format error, please do not upload other types of files';
          var text34 = 'The audio format is wrong, please do not upload other types of files';
          var text35 = 'Video format error, please do not upload other types of files';
          var textup = 'Uploading';
          var loadingTxT = 'Loading';
          var text36 = 'Username can not be empty';
          var text37 = 'Password can not be empty';
          var text38 = 'Please modify it in the input box below and click save';
          var text39 = 'save';
          break;

        case 'es':
          var text0 = 'Publicado por';
          var text00 = '';
          var text1 = 'Carga más...';
          var text2 = 'Avance';
          var text3 = 'Lanzamiento';
          var text4 = 'Registrado';
          var text5 = 'Determinar';
          var text6 = 'Desconectar';
          var text7 = 'Usuario';
          var text8 = 'Contraseña';
          var text9 = 'Iniciar sesión';
          var text10 = 'Cancelar';
          var text11 = 'Publicar charla';
          var text12 = 'Agrega fotos, videos, música';
          var text14 = '(Carga fallida, si no es por razones de red, comuníquese con los desarrolladores de Artitalk)';
          var text15 = 'Por favor ingresa primero';
          var text16 = 'El contenido no puede estar en blanco';
          var text17 = 'Error de inicio de sesión, compruebe si el nombre de usuario y la contraseña son correctos';
          var text18 = 'URL del avatar';
          var text19 = '¿Estás seguro de que deseas eliminar este artículo?';
          var text20 = 'Eliminado con éxito';
          var text21 = 'Arrastra y suelta fotos aquí';
          var text22 = 'expresión';
          var text23 = 'Eliminar';
          var text24 = 'Si ve este artículo, felicidades, se ha configurado correctamente y se puede usar normalmente. Cuando publiques un comentario, desapareceré automáticamente. Explore rápidamente Artitalk. <br> Bienvenido al grupo QQ de Artitalk: 1104585229 <br> Si cree que este proyecto es bueno, puede recomendarlo a sus amigos o ir a GitHub para pedir una estrella, gracias por su apoyo.';
          var text25 = 'cargando';
          var text26 = 'imagen';
          var text27 = 'música';
          var text28 = 'vídeo';
          var text29 = 'Añadir';
          var text30 = 'La imagen cargada admite un máximo de 5 M, comprima o cambie otra para continuar cargando';
          var text31 = 'La música cargada admite un máximo de 10 M, comprime o cambia otra para continuar cargando';
          var text32 = 'El video subido admite un máximo de 30 M, comprima o cambie otro para continuar subiendo';
          var text33 = 'Error de formato de imagen, no suba otros tipos de archivos';
          var text34 = 'El formato de audio es incorrecto, no suba otros tipos de archivos';
          var text35 = 'Error de formato de video, no suba otros tipos de archivos';
          var textup = 'Cargando';
          var loadingTxT = 'Cargando';
          var text36 = 'El nombre de usuario no puede estar vacío';
          var text37 = 'la contraseña no puede estar en blanco';
          var text38 = 'Por favor, introduzca las modificaciones en el cuadro de abajo y haga clic en guardar';
          var text39 = 'guardar';
          break;
      }

      let atEmojiDefault = '';

      for (const key in atEmoji) {
        atEmojiDefault = `${atEmojiDefault}<img alt='[${key}]' title='${key}' onclick='insertEmoji("[${key}]")' class='atemoji gallery-group-img' src='${atEmoji[key]}'/>`;
      }

      shuoPla = typeof shuoPla === 'undefined' ? '' : shuoPla;
      avatarPla = typeof avatarPla === 'undefined' ? '' : avatarPla;
      color1 = typeof color1 === 'undefined' || color1 === '' ? 'RGBA(255, 125, 73, 0.75)' : color1;
      color2 = typeof color2 === 'undefined' || color2 === '' ? '#9BCD9B' : color2;
      color3 = typeof color3 === 'undefined' || color3 === '' ? 'white' : color3;
      pageSize = typeof pageSize === 'undefined' ? '5' : pageSize;
      const apiUrl = '';

      try {
        if (serverURL !== '') {
          AV.init({
            appId,
            appKey,
            serverURL
          });
        } else {
          AV.init({
            appId,
            appKey
          });
        }
      } catch (error) {
        const err = error.toString();
        console.error(err);

        if (err.indexOf('appId is not defined') != -1) {
          console.log('appId没找到');
        } else if (err.indexOf('appKey is not defined') != -1) {
          console.log('appKey没找到');
        }
      } // emoji translate


      function translate(beforTran) {
        if (typeof beforTran === 'undefined') return;

        for (const key in atEmojiQQ) {
          const keyAt = `[${key}]`;
          const emojiAt = `<img class='atemoji gallery-group-img' src='${atEmojiQQ[key]}'/>`;

          while (beforTran.indexOf(keyAt) != -1) {
            beforTran = beforTran.replace(keyAt, emojiAt);
          }
        }

        for (const key in atEmojiTB) {
          const keyAt = `[${key}]`;
          const emojiAt = `<img class='atemoji gallery-group-img' src='${atEmojiTB[key]}'/>`;

          while (beforTran.indexOf(keyAt) != -1) {
            beforTran = beforTran.replace(keyAt, emojiAt);
          }
        }

        for (const key in atEmojiBB) {
          const keyAt = `[${key}]`;
          const emojiAt = `<img class='atemoji gallery-group-img' src='${atEmojiBB[key]}'/>`;

          while (beforTran.indexOf(keyAt) != -1) {
            beforTran = beforTran.replace(keyAt, emojiAt);
          }
        }

        for (const key in atEmojiDefault) {
          const keyAt = `[${key}]`;
          const emojiAt = `<img class='atemoji gallery-group-img' src='${atEmojiDefault[key]}'/>`;

          while (beforTran.indexOf(keyAt) != -1) {
            beforTran = beforTran.replace(keyAt, emojiAt);
          }
        }

        return beforTran;
      } // In & Out


      function fadeIn(id) {
        if (!document.getElementById(id)) return;
        const nowEle = document.getElementById(id);
        nowEle.style.display = '';
      }

      function fadeOut(id) {
        if (!document.getElementById(id)) return;
        const nowEle = document.getElementById(id);
        nowEle.style.display = 'none';
      }

      function Show() {
        fadeIn('shade');
        fadeIn('shuoshuo-modal');
      }

      function Hide() {
        fadeOut('shade');
        fadeOut('shuoshuo-modal');
      } // Insert css


      let atCss = '';

      if (!document.getElementById('add-Artitalk_Style')) {
        if (cssUrl === '' || typeof cssUrl === 'undefined') {
          atCss = `div#artitalk_main {    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);  }  #artitalk_main .shuoshuo_row {  width: 100%;  margin-top: 10px;  display: flex;  }  #artitalk_main .artitalk_child {  width: 100%;  }  #artitalk_main #shuoshuo_content {  padding: 10px;  /* min-height: 500px; */  }  #artitalk_main body.theme-dark .cbp_tmtimeline::before {  background: RGBA(255, 255, 255, 0.06);  }  #artitalk_main ul.cbp_tmtimeline {  padding: 0;  }  #artitalk_main .cbp_tmtimeline {  margin: 30px 0 0 0;  padding: 0;  list-style: none;  display: inline;  position: relative;  }  #artitalk_main .cbp_tmtimeline>li .cbp_tmtime {  display: block;  /* width: 29%; */  /* padding-right: 110px; */  max-width: 70px;  position: absolute;  }  #artitalk_main .cbp_tmtimeline>li .cbp_tmtime span {  display: block;  text-align: right;  }  #artitalk_main .cbp_tmtimeline>li .cbp_tmtime span:first-child {  font-size: 0.9em;  color: #bdd0db;  }  #artitalk_main .cbp_tmtimeline>li .cbp_tmtime span:last-child {  font-size: 1.2em;  color: #9bcd9b;  }  #artitalk_main .cbp_tmtimeline>li:nth-child(odd) .cbp_tmtime span:last-child {  color: RGBA(255, 125, 73, 0.75);  }  #artitalk_main div.cbp_tmlabel>p {  margin-bottom: 0;  }  #artitalk_main div class.cdp_tmlabel>li .cbp_tmlabel {  margin-bottom: 0;  }  #artitalk_main .cbp_tmtimeline>li .cbp_tmlabel {  margin: 0 0 45px 65px;  z-index: 1;  background: ${color2};  color: ${color3} ;  padding: 0.8em 1.2em 0.4em 1.2em;  /* font-size: 1.2em; */  font-weight: 300;  line-height: 1.4;  position: relative;  border-radius: 5px;  transition: all 0.3s ease 0s;  box-shadow: 0 1px 2px rgba(0,0,0,0.15); display: block;  }  #artitalk_main .cbp_tmlabel:hover {  /* transform: scale(1.05); */  transform: translateY(-3px);  z-index: 1;  box-shadow: 0 15px 32px rgba(0,0,0,0.15) ;  }  #artitalk_main .cbp_tmtimeline>li:nth-child(odd) .cbp_tmlabel {    background: ${color1};  }  #artitalk_main .cbp_tmtimeline>li .cbp_tmlabel:after {  right: 100%;  border: solid transparent;  z-index: -1;  content: " ";  height: 0;  width: 0;  position: absolute;  pointer-events: none;  border-right-color: ${color2};  border-width: 10px;  top: 4px;  }  #artitalk_main .cbp_tmtimeline>li:nth-child(odd) .cbp_tmlabel:after {    border-right-color: ${color1};  }  #artitalk_main p.shuoshuo_time {  margin-top: 10px;  border-top: 1px dashed #fff;  padding-top: 5px;  font-size: 12px;  }  @media screen and (max-width: 65.375em) {  #artitalk_main .cbp_tmtimeline>li .cbp_tmtime span:last-child {    font-size: 1.2em;  }  }  #artitalk_main .shuoshuo_author_img img {  border: 1px solid #ddd;  padding: 2px;  float: left;  border-radius: 64px;  transition: all 1s;  }  #artitalk_main .artitalk_avatar {  border-radius: 100% ;  -moz-border-radius: 100% ;  box-shadow: inset 0 -1px 0 3333sf;  -webkit-box-shadow: inset 0 -1px 0 3333sf;  -webkit-transition: 0.4s;  -webkit-transition: -webkit-transform 0.4s ease-out;  transition: transform 0.4s ease-out;  -moz-transition: -moz-transform 0.4s ease-out;  }  #artitalk_main .artitalk_avatar:hover {  -webkit-transform: rotateZ(360deg);  -moz-transform: rotateZ(360deg);  -o-transform: rotateZ(360deg);  -ms-transform: rotateZ(360deg);  transform: rotateZ(360deg);  }  #artitalk_main .shuoshuo_text {  width: 100%;  height: 130px;  padding: 8px 16px;  background-repeat: no-repeat;  background-position: right;  transition: all 0.35s ease-in-out 0s;  outline-style: none;  border: 1px solid #ccc;  border-radius: 6px;  resize: none;  background-color: transparent;  color: #999;  }  #artitalk_main .shuoshuo_inputs {  outline-style: none;  border: 1px solid #ccc;  padding: 8px 16px;  width: 40%;  font-size: 12px;  background-color: transparent;  color: #999;  }  #operare_artitalk .at_button,  #artitalk_main .at_button {    background-color: ${color1};  /* Green */  border: none;  margin-left: 5px;  color: ${color3};  padding: 8px 16px;  text-align: center;  text-decoration: none;  height: auto;  line-height: 20px;  display: inline-block;  font-size: 12px;  border-radius: 12px;  /* circle */  outline: none;  cursor: pointer;  }  #operare_artitalk .at_button:hover,  #artitalk_main .at_button:hover {      background-color: ${color2};  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.24), 0 8px 16px 0 rgba(0,0,0,0.19);  }  #artitalk_main #article-container ul p {  margin: 0 0 1rem;  }  #artitalk_main .power {  text-align: right;  color: #999;  margin-top: 10px;  font-size: 0.75em;  padding: 0.5em 0;  }  #artitalk_main .power a {  font-size: 0.75em;  position: relative;  cursor: pointer;  color: #1abc9c;  text-decoration: none;  display: inline-block;  }  #artitalk_main .shuoshuo_row .col.col-80 {  width: 80%;  float: left;  }  #artitalk_main .shuoshuo_row .col.col-20 {  width: 20%;  float: right;  text-align: right;  }  #artitalk_main #preview {  width: 100%;  float: left;  margin: 0.5rem 0 0;  padding: 7px;  box-shadow: 0 0 1px #f0f0f0;  }  #artitalk_main #lazy {  background: #fff;  bottom: 0;  left: 0;  position: fixed;  right: 0;  top: 0;  z-index: 9999;  }  #artitalk_main .preloader {  position: absolute;  margin-left: -55px;  margin-top: -100px;  height: 110px;  width: 110px;  left: 50%;  top: 50%;  }  #artitalk_main .preloader>svg>g>path {  stroke: #9ea1a4;  stroke-width: 0.25;  }  #artitalk_main .preloader>svg>path {  stroke: #9ea1a4;  stroke-width: 0.25;  }  #artitalk_main #cloud {  position: relative;  z-index: 2;  }  #artitalk_main #cloud path {  fill: #efefef;  }  #artitalk_main #sun {  margin-left: -10px;  margin-top: 6px;  opacity: 0;  width: 60px;  height: 60px;  position: absolute;  left: 45px;  top: 15px;  z-index: 1;  animation-name: rotate;  animation-duration: 16000ms;  animation-iteration-count: infinite;  animation-timing-function: linear;  }  #artitalk_main #sun path {  stroke-width: 0.18;  fill: #9ea1a4;  }  #artitalk_main .rain {  position: absolute;  width: 70px;  height: 70px;  margin-top: -32px;  margin-left: 19px;  }  #artitalk_main .drop {  opacity: 1;  background: #9ea1a4;  display: block;  float: left;  width: 3px;  height: 10px;  margin-left: 4px;  border-radius: 0px 0px 6px 6px;  animation-name: drop;  animation-duration: 350ms;  animation-iteration-count: infinite;  }  #artitalk_main .drop:nth-child(1) {  animation-delay: -130ms;  }  #artitalk_main .drop:nth-child(2) {  animation-delay: -240ms;  }  #artitalk_main .drop:nth-child(3) {  animation-delay: -390ms;  }  #artitalk_main .drop:nth-child(4) {  animation-delay: -525ms;  }  #artitalk_main .drop:nth-child(5) {  animation-delay: -640ms;  }  #artitalk_main .drop:nth-child(6) {  animation-delay: -790ms;  }  #artitalk_main .drop:nth-child(7) {  animation-delay: -900ms;  }  #artitalk_main .drop:nth-child(8) {  animation-delay: -1050ms;  }  #artitalk_main .drop:nth-child(9) {  animation-delay: -1130ms;  }  #artitalk_main .drop:nth-child(10) {  animation-delay: -1300ms;  }  #artitalk_main .artitalk_loading_text {  font-family: Helvetica, " Helvetica Neue ", sans-serif;  letter-spacing: 1px;  text-align: center;  margin-left: -43px;  font-weight: bold;  margin-top: 20px;  font-size: 11px;  color: #a0a0a0;  width: 200px;  }  #artitalk_main .shuoshuoimg {  cursor: pointer;  transition: all 1s;  z-index: 2;  }  #artitalk_main .shuoshuoimg:hover {  transform: scale(3.5);  }  #artitalk_main .hide,  #operare_artitalk .hide {  display: none;  }  #operare_artitalk .c1 {  position: fixed;  top: 0;  bottom: 0;  left: 0;right: 0;  background: rgba(0,0,0,0.5);  z-index: 2;  }  #operare_artitalk .c2 {  background-color: #fff;  position: fixed;  width: 400px;  height: auto;  top: 50%;  left: 50%;  z-index: 3; margin-top: -150px;  margin-left: -200px;  box-shadow: 0 15px 35px rgba(50,50,93,0.1), 0 5px 15px rgba(0,0,0,0.07);  opacity: 0.85;  border: 0;  border-radius: 10px;  }  #operare_artitalk .shuoshuo_input_log {  outline-style: none;  margin-top: 10px;  border: 1px solid #ccc;  border-radius: 6px;  padding: 8px 16px;  font-size: 12px;  background-color: transparent;  color: #999;  }  #artitalk_main .delete_right {  cursor: pointer;  width: 12px;  height: 12px;  position: absolute;  right: 12px;  }  #artitalk_main svg {  display: inline;  }  #artitalk_main .cbp_tmlabel>p,  #artitalk_main h1,  #artitalk_main h2,  #artitalk_main h3,  #artitalk_main h4,  #artitalk_main h5,  #artitalk_main h6,  #artitalk_main em {  word-wrap: break-word;  word-break: break-all;  }  #artitalk_main .shuoshuo_emoji {  border: 1px solid #ccc;  border-radius: 6px 6px 0 0;  height: 120px;  overflow: auto;  margin-top: 10px;  border-bottom: none;  }  #artitalk_main .atemoji {  max-height: 28px;  width: 28px;  display: inline;  vertical-align: middle;  }  #artitalk_main .shuoshuo_emoji>.atemoji {  cursor: pointer;  margin: 0 0 0 10px;  display: inline;  }  #artitalk_main i>.atemoji {  cursor: pointer;  margin: 0 0 0 10px;  }  #artitalk_main .shuoshuo_emoji>a {  display: inline;  }  #artitalk_main #preview>p>.atemoji {  display: inline;  }  #artitalk_main .shuoshuo_emoji>.atemoji:hover {  transform: scale(1.5);  }  #artitalk_main div#shuoshuo_emojiswitch {  height: 40px;  width: auto;  border-radius: 0 0 6px 6px;  border-collapse: collapse;  border: 1px solid #ccc;  border-top: none;  }  #artitalk_main .shuoshuo_emoji_part {  width: 25%;  cursor: pointer;  align-content: center;  text-align: center;  line-height: 40px;  }  #artitalk_main .shuoshuo_emoji_part:hover {  background-color: #ccc;  color: #fff;  }  #artitalk_main .zuiliangdezai {  background-color: #ccc;  color: #fff;  }  #artitalk_main .pingjun {  display: flex;  }  #artitalk_main #article-container img {  margin: 0 0 0 0;  }  #artitalk_main .preview_now {  display: none;  }  #artitalk_main div#loading_txt {  font-size: 20px;  }  #artitalk_main audio {  display: block;  width: 100%;  outline: none;  opacity: 0.8;  }  #artitalk_main video {  z-index: 0;  }  #artitalk_main textarea#neirong:focus {  background-position-y: 150px;  transition: all 0.35s ease-in-out 0s;  }  #artitalk_main img.atemoji {  max-height: 28px;  width: 28px;  display: inline;  vertical-align: middle;  }  #artitalk_main span.cbp_tmlabel>p {  overflow: unset;  }  #artitalk_main ul#maina>li {  list-style: none;  }  #artitalk_main div#artitalk_main {  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);  }  #artitalk_main .c2>center>p {  margin-top: 10px;  margin-bottom: 10px;  }  @-moz-keyframes rotate {  0% {    transform: rotateZ(0deg);  }  100% {    transform: rotateZ(360deg);  }  }  @-webkit-keyframes rotate {  0% {    transform: rotateZ(0deg);  }  100% {    transform: rotateZ(360deg);  }  }  @-o-keyframes rotate {  0% {    transform: rotateZ(0deg);  }  100% {    transform: rotateZ(360deg);  }  }  @keyframes rotate {  0% {    transform: rotateZ(0deg);  }  100% {    transform: rotateZ(360deg);  }  }  @-moz-keyframes drop {  50% {    height: 45px;    opacity: 0;  }  51% {    opacity: 0;  }  100% {    height: 1px;    opacity: 0;  }  }  @-webkit-keyframes drop {  50% {    height: 45px;    opacity: 0;  }  51% {    opacity: 0;  }  100% {    height: 1px;    opacity: 0;  }  }  @-o-keyframes drop {  50% {    height: 45px;    opacity: 0;  }  51% {    opacity: 0;  }  100% {    height: 1px;    opacity: 0;  }  }  @keyframes drop {  50% {    height: 45px;    opacity: 0;  }  51% {    opacity: 0;  }  100% {    height: 1px;    opacity: 0;  }  }`;
          const atStyle = document.createElement('style');
          atStyle.type = 'text/css';
          atStyle.innerHTML = atCss;
          atStyle.id = 'add-Artitalk-Style';
          document.head.appendChild(atStyle);
        } else {
          const atStyle = document.createElement('link');
          atStyle.rel = 'stylesheet';
          atStyle.href = cssUrl;
          atStyle.id = 'add-Artitalk-Style';
          document.head.appendChild(atStyle);
        }
      } // Insert html part


      let atHtml = `<div id='artitalk_part1'><div id="main" class="site-main" role="main"><div id="shuoshuo_content"><div id="ccontent"></div><div id='readButton' style=''><center><button id="readmore" class="at_button" style="margin-bottom: 15px;display: none">${text1}</button></center></div></div><div id="shuoshuo_input" class="shuoshuo_active" style="display: none;"><div id="shuoshuo_edit"><textarea class="shuoshuo_text" oninput="preview()" id="neirong" placeholder="${shuoPla}"style="background-image: url(${bgImg});z-index: 0"></textarea><span id="drag_area" class="z-index: -1;"></span></div><div id="shuoshuo_parttwo" class="shuoshuo_parttwo"><div id="shuoshuo_emoji_Tieba" class="shuoshuo_emoji" style='display: none'></div><div id="shuoshuo_emoji_BiliBili" class="shuoshuo_emoji" style='display: none'></div><div id="shuoshuo_emoji_QQ" class="shuoshuo_emoji" style='display: none'></div><div id="shuoshuo_emoji_custom" class="shuoshuo_emoji" style='display: none'></div><div id="shuoshuo_emojiswitch" class="shuoshuo_emojiswitch" style='display: none'><div id="switch_1" class="shuoshuo_emoji_part zuiliangdezai">Tieba</div><div id="switch_2" class="shuoshuo_emoji_part">BiliBili</div><div id="switch_3" class="shuoshuo_emoji_part">QQ</div><div id="switch_4" class="shuoshuo_emoji_part">Custom</div></div><div id="preview" class="preview_now"></div></div><div class="shuoshuo_submit"><div class="shuoshuo_row"><input class="artitalk_child shuoshuo_inputs" id="touxiang" value="" placeholder="${text18}"><div class="artitalk_child"><button class="at_button" id='atSave' style="float: right;">${text3}</button><button class="at_button" id='atPreview' style="float: right;">${text2}</button><button class="at_button" id='loadEmoji' style="float: right;">${text22}</button></div></div></div></div></div><div class="power"><div style="font-size: 25px;display: inline; cursor: pointer" id="pubShuo"title="${text11}"><svg t="1591347684072"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9731" width="30" height="30"  style="display: inline"><path d="M512 0C229.23 0 0 229.23 0 512s229.23 512 512 512 512-229.23 512-512S794.77 0 512 0z m0 953.62C268.49 953.62 70.38 755.51 70.38 512S268.49 70.38 512 70.38 953.62 268.49 953.62 512 755.51 953.62 512 953.62z" p-id="9732" fill="#707070"></path><path d="M771.1 726.4H514.8c-15.57 0-28.23 12.66-28.23 28.23s12.66 28.23 28.23 28.23h256.3c15.57 0 28.23-12.66 28.23-28.23s-12.67-28.23-28.23-28.23zM771.1 654.55H587.92c-15.56 0-28.23 12.66-28.23 28.23S572.35 711 587.92 711H771.1c15.57 0 28.23-12.66 28.23-28.23s-12.67-28.22-28.23-28.22zM771.1 582.69H654.22c-15.57 0-28.23 12.66-28.23 28.23s12.66 28.23 28.23 28.23H771.1c15.57 0 28.23-12.66 28.23-28.23s-12.67-28.23-28.23-28.23zM809.25 361.96c0-14.79-5.74-28.68-16.17-39.1L657.66 187.45c-10.43-10.43-24.32-16.17-39.1-16.17s-28.67 5.74-39.1 16.17L207.23 559.67c-5.06 5.06-7.88 12.06-7.72 19.21l3.61 172.49a26.32 26.32 0 0 0 25.8 25.83l172.6 3.81c0.22 0.01 0.44 0.01 0.67 0.01 6.95 0 13.76-2.82 18.66-7.73l372.22-372.22c10.43-10.43 16.18-24.32 16.18-39.11z m-53.5 1.79L391.5 727.99l-136.14-3-2.85-135.96 364.25-364.26c0.99-0.98 2.59-0.98 3.58-0.01l135.4 135.41c0.99 0.99 0.99 2.59 0.01 3.58z" p-id="9733" fill="#707070"></path></svg></div><div style="font-size: 25px;display: inline; cursor: pointer" id="switchUser" title="${text9}"><svg t="1591347848063"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12288" width="30" height="30"  style="display: inline"><path d="M515.541449 7.082899c-280.359429 0-508.458551 228.120391-508.458551 508.458551s228.120391 508.458551 508.458551 508.458551 508.458551-228.120391 508.458551-508.458551S795.900879 7.082899 515.541449 7.082899zM515.541449 981.864196c-257.132626 0-466.301477-209.190121-466.301477-466.322747 0-257.132626 209.168851-466.322747 466.301477-466.322747s466.301477 209.190121 466.301477 466.322747S772.674075 981.864196 515.541449 981.864196zM614.574414 524.177056 614.574414 524.177056c47.751075-31.96876 79.230625-86.398604 79.230625-148.187857 0-98.437405-79.804915-178.24232-178.24232-178.24232-98.437405 0-178.24232 79.804915-178.24232 178.24232 0 61.810523 31.479551 116.219097 79.251895 148.187857-100.266622 39.519598-171.244501 137.170014-171.244501 251.453545 0 0.23397 0 0.446669 0.02127 0.659369 0 0.04254-0.02127 0.10635-0.02127 0.14889 0 15.612155 12.65563 28.246516 28.267786 28.246516 15.590885 0 21.886796-12.63436 21.886796-28.246516 0-0.340319-0.08508-0.659369-0.10635-1.020958 0.10635-118.005774 102.159649-219.995264 220.207964-219.995264 118.112124 0 220.207964 102.095839 220.207964 220.207964 0 0.14889-1.467628 29.054774 21.971875 29.054774 15.505806 0 28.076356-12.57055 28.076356-28.055086 0-0.06381-0.02127-0.12762-0.02127-0.2127 0-0.25524 0.02127-0.510479 0.02127-0.786989C785.797645 661.34707 714.798496 563.696654 614.574414 524.177056zM515.541449 510.734437c-74.402343 0-134.723968-60.321625-134.723968-134.723968 0-74.423613 60.321625-134.723968 134.723968-134.723968 74.423613 0 134.723968 60.321625 134.723968 134.723968S589.943792 510.734437 515.541449 510.734437z" p-id="12289" fill="#707070"></path></svg></div><br>Powered By <a href="https://artitalk.js.org" target="_blank">Artitalk</a><br>${version}</div></div>`;
      let motionHtml = `<div id='lazy'><div class="preloader" style="opacity: 1; "><svg version="1.1" id="sun" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"y="0px" width="10px" height="10px" viewBox="0 0 10 10" enable-background="new 0 0 10 10" xml:space="preserve"style="opacity: 1; margin-left: 0px; margin-top: 0px;"><g><path fill="none"d="M6.942,3.876c-0.4-0.692-1.146-1.123-1.946-1.123c-0.392,0-0.779,0.104-1.121,0.301c-1.072,0.619-1.44,1.994-0.821,3.067C3.454,6.815,4.2,7.245,5,7.245c0.392,0,0.779-0.104,1.121-0.301C6.64,6.644,7.013,6.159,7.167,5.581C7.321,5,7.243,4.396,6.942,3.876z M6.88,5.505C6.745,6.007,6.423,6.427,5.973,6.688C5.676,6.858,5.34,6.948,5,6.948c-0.695,0-1.343-0.373-1.69-0.975C2.774,5.043,3.093,3.849,4.024,3.312C4.32,3.14,4.656,3.05,4.996,3.05c0.695,0,1.342,0.374,1.69,0.975C6.946,4.476,7.015,5,6.88,5.505z"></path><path fill="none"d="M8.759,2.828C8.718,2.757,8.626,2.732,8.556,2.774L7.345,3.473c-0.07,0.041-0.094,0.132-0.053,0.202C7.319,3.723,7.368,3.75,7.419,3.75c0.025,0,0.053-0.007,0.074-0.02l1.211-0.699C8.774,2.989,8.8,2.899,8.759,2.828z"></path><path fill="none"d="M1.238,7.171c0.027,0.047,0.077,0.074,0.128,0.074c0.025,0,0.051-0.008,0.074-0.02l1.211-0.699c0.071-0.041,0.095-0.133,0.054-0.203S2.574,6.228,2.503,6.269l-1.21,0.699C1.221,7.009,1.197,7.101,1.238,7.171z"></path><path fill="none"d="M6.396,2.726c0.052,0,0.102-0.026,0.13-0.075l0.349-0.605C6.915,1.976,6.89,1.885,6.819,1.844c-0.07-0.042-0.162-0.017-0.202,0.054L6.269,2.503C6.228,2.574,6.251,2.666,6.322,2.706C6.346,2.719,6.371,2.726,6.396,2.726z"></path><path fill="none"d="M3.472,7.347L3.123,7.952c-0.041,0.07-0.017,0.162,0.054,0.203C3.2,8.169,3.226,8.175,3.25,8.175c0.052,0,0.102-0.027,0.129-0.074l0.349-0.605c0.041-0.07,0.017-0.16-0.054-0.203C3.603,7.251,3.513,7.276,3.472,7.347z"></path><path fill="none"d="M3.601,2.726c0.025,0,0.051-0.007,0.074-0.02C3.746,2.666,3.77,2.574,3.729,2.503l-0.35-0.604C3.338,1.828,3.248,1.804,3.177,1.844C3.106,1.886,3.082,1.976,3.123,2.047l0.35,0.604C3.5,2.7,3.549,2.726,3.601,2.726z"></path><path fill="none"d="M6.321,7.292c-0.07,0.043-0.094,0.133-0.054,0.203l0.351,0.605c0.026,0.047,0.076,0.074,0.127,0.074c0.025,0,0.051-0.006,0.074-0.02c0.072-0.041,0.096-0.133,0.055-0.203l-0.35-0.605C6.483,7.276,6.393,7.253,6.321,7.292z"></path><path fill="none"d="M2.202,5.146c0.082,0,0.149-0.065,0.149-0.147S2.284,4.851,2.202,4.851H1.503c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147H2.202z"></path><path fill="none"d="M8.493,4.851H7.794c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147l0,0h0.699c0.082,0,0.148-0.065,0.148-0.147S8.575,4.851,8.493,4.851L8.493,4.851z"></path><path fill="none"d="M5.146,2.203V0.805c0-0.082-0.066-0.148-0.148-0.148c-0.082,0-0.148,0.066-0.148,0.148v1.398c0,0.082,0.066,0.149,0.148,0.149C5.08,2.352,5.146,2.285,5.146,2.203z"></path><path fill="none"d="M4.85,7.796v1.396c0,0.082,0.066,0.15,0.148,0.15c0.082,0,0.148-0.068,0.148-0.15V7.796c0-0.082-0.066-0.148-0.148-0.148C4.917,7.647,4.85,7.714,4.85,7.796z"></path><path fill="none"d="M2.651,3.473L1.44,2.774C1.369,2.732,1.279,2.757,1.238,2.828C1.197,2.899,1.221,2.989,1.292,3.031l1.21,0.699c0.023,0.013,0.049,0.02,0.074,0.02c0.051,0,0.101-0.026,0.129-0.075C2.747,3.604,2.722,3.514,2.651,3.473z"></path><path fill="none"d="M8.704,6.968L7.493,6.269c-0.07-0.041-0.162-0.016-0.201,0.055c-0.041,0.07-0.018,0.162,0.053,0.203l1.211,0.699c0.023,0.012,0.049,0.02,0.074,0.02c0.051,0,0.102-0.027,0.129-0.074C8.8,7.101,8.776,7.009,8.704,6.968z"</path></g></svg><svg version="1.1" id="cloud" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"x="0px" y="0px" width="110px" height="110px" viewBox="0 0 10 10" enable-background="new 0 0 10 10"xml:space="preserve"><path fill="none"d="M8.528,5.624H8.247c-0.085,0-0.156-0.068-0.156-0.154c0-0.694-0.563-1.257-1.257-1.257c-0.098,0-0.197,0.013-0.3,0.038C6.493,4.259,6.45,4.252,6.415,4.229C6.38,4.208,6.356,4.172,6.348,4.131C6.117,3.032,5.135,2.235,4.01,2.235c-1.252,0-2.297,0.979-2.379,2.23c-0.004,0.056-0.039,0.108-0.093,0.13C1.076,4.793,0.776,5.249,0.776,5.752c0,0.693,0.564,1.257,1.257,1.257h6.495c0.383,0,0.695-0.31,0.695-0.692S8.911,5.624,8.528,5.624z"></path></svg><div class="rain"><span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span></div><div class="artitalk_loading_text" id="loading_txt">${loadingTxT}</div></div></div>`;
      const atOpHtml = `<div id="shade" class="c1" style='display: none'></div><div id="shuoshuo-modal" class="c2" style='display: none' ><center><p>${text7}：<input type="text" class="shuoshuo_input_log" id="username"/></p><p>${text8}：<input type="password" class="shuoshuo_input_log"  id="pwd"/></p><p><input type="button" value="${text9}" class="at_button" id='login'>&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" value="${text10}"  class="at_button" id = 'celLogin'></p></center><center><div id="logw"></div></center></div><div id="userinfo" class="c2" style='display: none'><center><p><div id="status"></div></p><p><input type="button" class="at_button" value="${text5}" id="hideuser">&nbsp;&nbsp;&nbsp;&nbsp;<input id="tui" type="button" value="${text6}" class="at_button" style="display: none;" onclick="Logout();"></p></center></div><div id="shanchu" class="c2" style='display: none'><center><p>${text20}</p><p><input type="button" class="at_button" value="${text5}" id="deleteSus"></p><center></div><div id="shanchur" class="c2" style='display: none'><center><p>${text19}</p><p><div id="delete1"></div></p><center></div><div id='clickForPreview'></div>`;
      const atOp = document.createElement('div');
      atOp.id = 'operare_artitalk';
      document.body.append(atOp);
      document.getElementById('operare_artitalk').innerHTML = atOpHtml;
      motionHtml = motion === 0 ? '' : motionHtml;
      atHtml = motionHtml + atHtml;
      document.getElementById('artitalk_main').innerHTML = atHtml; // 开始加载说说

      root.seeContent(0, root.config);
      const rmButton = document.getElementById('readmore'); // readmore

      const pubButton = document.getElementById('pubShuo'); // publish shuo

      const switchLogin = document.getElementById('switchUser'); // login or exit

      const cancelLogin = document.getElementById('celLogin'); // cancel Login

      const login = document.getElementById('login'); // Login

      const hideUser = document.getElementById('hideuser');
      const loadEmoji = document.getElementById('loadEmoji'); // Loading emoji

      const switchTb = document.getElementById('switch_1'); // Tieba emoji

      const switchBB = document.getElementById('switch_2'); // BiliBili emoji

      const switchQQ = document.getElementById('switch_3'); // QQ emoji

      const switchCustom = document.getElementById('switch_4'); // custom emoji

      const beginPreview = document.getElementById('atPreview'); // preview

      const clickPre = document.getElementById('clickForPreview'); // preview

      const saveContent = document.getElementById('atSave'); // savecontent

      const deleteSus = document.getElementById('deleteSus'); // Delete successful

      let pNum = 0;

      rmButton.onclick = function () {
        pNum += 1;
        root.seeContent(pNum, root.config);
      };

      pubButton.onclick = function () {
        const currentUser = AV.User.current();

        if (currentUser) {
          if (document.getElementById('shuoshuo_input').style.display == '') {
            fadeOut('shuoshuo_input');
          } else {
            fadeIn('shuoshuo_input');
          }
        } else {
          document.getElementById('logw').innerHTML = `<center><pre><code>${text15}</code></pre></center>`;
          Show();
        }
      };

      switchLogin.onclick = function () {
        document.getElementById('logw').innerHTML = '';
        const currentUser = AV.User.current();
        fadeIn('shade');

        if (currentUser) {
          fadeIn('userinfo');
          document.getElementById('status').innerHTML = `${text4}:\t${currentUser.attributes.username}`;
          fadeIn('tui');
        } else {
          fadeIn('tui');
          fadeIn('shuoshuo-modal');
          Show();
        }
      };

      cancelLogin.onclick = function () {
        Hide();
      };

      login.onclick = function () {
        const passWord = document.getElementById('pwd').value;

        if (passWord === '') {
          document.getElementById('logw').innerHTML = '密码不能为空';
        }

        const userName = document.getElementById('username').value;

        if (userName === '') {
          document.getElementById('logw').innerHTML = '用户名不能为空';
        }

        AV.User.logIn(userName, passWord).then(loginedUser => {
          document.getElementById('ccontent').innerHTML = '';
          document.getElementById('neirong').value = '';
          fadeIn('lazy');
          root.seeContent(0, root.config);
          Hide();
        });
      };

      hideUser.onclick = function () {
        fadeOut('shade');
        fadeOut('userinfo');
      };

      loadEmoji.onclick = function () {
        document.getElementById('switch_1').classList.add('zuiliangdezai');
        document.getElementById('switch_2').classList.remove('zuiliangdezai');
        document.getElementById('switch_3').classList.remove('zuiliangdezai');
        document.getElementById('switch_4').classList.remove('zuiliangdezai');

        if (document.getElementById('shuoshuo_emojiswitch').style.display === 'none') {
          fadeIn('shuoshuo_emoji_Tieba');
          fadeIn('shuoshuo_emojiswitch');
          document.getElementById('shuoshuo_emoji_BiliBili').innerHTML = atEmojiB;
          document.getElementById('shuoshuo_emoji_Tieba').innerHTML = atEmojiT;
          document.getElementById('shuoshuo_emoji_QQ').innerHTML = atEmojiQ;
          document.getElementById('shuoshuo_emoji_custom').innerHTML = atEmojiDefault;
          document.getElementById('shuoshuo_emojiswitch').classList.add('pingjun');
        } else {
          fadeOut('shuoshuo_emoji_Tieba');
          fadeOut('shuoshuo_emoji_BiliBili');
          fadeOut('shuoshuo_emoji_custom');
          fadeOut('shuoshuo_emoji_QQ');
          fadeOut('shuoshuo_emojiswitch');
          document.getElementById('shuoshuo_emojiswitch').classList.remove('pingjun');
        }
      };

      switchTb.onclick = function () {
        switchTb.classList.add('zuiliangdezai');
        switchQQ.classList.remove('zuiliangdezai');
        switchBB.classList.remove('zuiliangdezai');
        switchCustom.classList.remove('zuiliangdezai');
        fadeIn('shuoshuo_emoji_Tieba');
        fadeOut('shuoshuo_emoji_QQ');
        fadeOut('shuoshuo_emoji_BiliBili');
        fadeOut('shuoshuo_emoji_custom');
      };

      switchQQ.onclick = function () {
        switchQQ.classList.add('zuiliangdezai');
        switchTb.classList.remove('zuiliangdezai');
        switchBB.classList.remove('zuiliangdezai');
        switchCustom.classList.remove('zuiliangdezai');
        fadeIn('shuoshuo_emoji_QQ');
        fadeOut('shuoshuo_emoji_Tieba');
        fadeOut('shuoshuo_emoji_BiliBili');
        fadeOut('shuoshuo_emoji_custom');
      };

      switchBB.onclick = function () {
        switchBB.classList.add('zuiliangdezai');
        switchQQ.classList.remove('zuiliangdezai');
        switchTb.classList.remove('zuiliangdezai');
        switchCustom.classList.remove('zuiliangdezai');
        fadeIn('shuoshuo_emoji_BiliBili');
        fadeOut('shuoshuo_emoji_QQ');
        fadeOut('shuoshuo_emoji_Tieba');
        fadeOut('shuoshuo_emoji_custom');
      };

      switchCustom.onclick = function () {
        switchCustom.classList.add('zuiliangdezai');
        switchQQ.classList.remove('zuiliangdezai');
        switchBB.classList.remove('zuiliangdezai');
        switchTb.classList.remove('zuiliangdezai');
        fadeIn('shuoshuo_emoji_custom');
        fadeOut('shuoshuo_emoji_QQ');
        fadeOut('shuoshuo_emoji_BiliBili');
        fadeOut('shuoshuo_emoji_Tieba');
      };

      beginPreview.onclick = function () {
        const preCon = document.getElementById('preview');

        if (preCon.className.indexOf('preview_now') !== -1) {
          preCon.classList.remove('preview_now');
        } else {
          preCon.classList.add('preview_now');
        }
      };

      saveContent.onclick = function () {
        const currentUser = AV.User.current();

        if (!currentUser) {
          pubButton.click();
        }

        let shuoshuoContent = document.getElementById('neirong').value;
        if (shuoshuoContent === '') throw '说说内容不能为空';
        const artitalkObject = AV.Object.extend('shuoshuo');
        const atObject = new artitalkObject();
        const shuoshuoContentMd = shuoshuoContent;
        atObject.set('atContentMd', shuoshuoContentMd);
        shuoshuoContent = translate(shuoshuoContent);
        const converte = new showdown_min.Converter();
        converte.setOption('strikethrough', 1);
        const shuoshuoContentHtml = converte.makeHtml(shuoshuoContent);
        const deFaultavatar = typeof currentUser.attributes.img === 'undefined' ? 'https://cdn.jsdelivr.net/gh/drew233/cdn/logol.png' : currentUser.attributes.img; // alert(deFaultavatar);

        const atAvatar = document.getElementById('touxiang').value === '' ? deFaultavatar : document.getElementById('touxiang').value;
        const userOs = boInfo.os;
        const starInit = 0;
        atObject.set('atContentHtml', shuoshuoContentHtml);
        atObject.set('userOs', userOs);
        atObject.set('avatar', atAvatar);
        atObject.set('atStar', starInit);
        fadeIn('lazy');
        atObject.save().then(res => {
          document.getElementById('ccontent').innerHTML = '';
          document.getElementById('neirong').value = '';
          fadeOut('preview');
          root.seeContent(0, root.config);
          fadeOut('shuoshuo_input');
        });
      };

      clickPre.onclick = function () {
        let unPre = document.getElementById('neirong').value;
        unPre = translate(unPre);
        const converter = new showdown_min.Converter();
        converter.setOption('strikethrough', 1);
        const finishPre = converter.makeHtml(unPre);
        document.getElementById('preview').innerHTML = finishPre;
      };

      deleteSus.onclick = function () {
        fadeOut('shanchu');
        fadeOut('shade');
        fadeIn('lazy');
        document.getElementById('ccontent').innerHTML = '';
        root.seeContent(0, root.config);
      };
    } catch (error) {
      console.log(error.message);
    }

    atEvery.prototype.delete = function (id) {
      function fadeOut(id) {
        if (!document.getElementById(id)) return;
        const nowEle = document.getElementById(id);
        nowEle.style.display = 'none';
      }

      function fadeIn(id) {
        if (!document.getElementById(id)) return;
        const nowEle = document.getElementById(id);
        nowEle.style.display = '';
      }

      const currentUser = AV.User.current();

      if (currentUser) {
        fadeIn('shade');
        fadeIn('shanchur');
        document.getElementById('delete1').innerHTML = `<input type="button" class="at_button" value="${text5}" id="Delete"><input type="button" class="at_button" value="${text10}" id="cancelDelete">`;
      } else {
        const pubButton = document.getElementById('pubShuo');
        pubButton.click();
        return;
      }

      const cancelDelete = document.getElementById('cancelDelete');
      const rlyDelete = document.getElementById('Delete');

      cancelDelete.onclick = function () {
        fadeOut('shade');
        fadeOut('shanchur');
      };

      rlyDelete.onclick = function () {
        // console.log(id);
        cancelDelete.click();
        fadeIn('lazy');
        const deletes = AV.Object.createWithoutData('shuoshuo', id);
        deletes.destroy().then(success => {
          fadeIn('shade');
          fadeIn('shanchu');
        }, error => {
          console.log(error.rawMessage);
        });
      };
    };
  };

  atEvery.prototype.clickStar = function (id) {
    const staredSvg = '<svg t="1593770313039" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2091" width="16" height="16" fill="red"><path d="M884.875894 423.143253 646.970506 423.143253c92.185562-340.464205-63.516616-357.853247-63.516616-357.853247-65.993017 0-52.312436 52.182476-57.3031 60.881602 0 166.502152-176.849824 296.971645-176.849824 296.971645l0 472.171899c0 46.607504 63.516616 63.393819 88.433098 63.393819l357.452111 0c33.641191 0 61.036122-88.224344 61.036122-88.224344 88.434122-300.70569 88.434122-390.177444 88.434122-390.177444C944.657442 418.179195 884.875894 423.143253 884.875894 423.143253L884.875894 423.143253 884.875894 423.143253zM884.875894 423.143253" fill="" p-id="2092"></path><path d="M251.671415 423.299819 109.214912 423.299819c-29.420053 0-29.873378 28.89612-29.873378 28.89612l29.420053 476.202703c0 30.309306 30.361495 30.309306 30.361495 30.309306L262.420223 958.707948c25.686009 0 25.458835-20.049638 25.458835-20.049638L287.879058 459.411271C287.879058 422.837284 251.671415 423.299819 251.671415 423.299819L251.671415 423.299819 251.671415 423.299819zM251.671415 423.299819" fill="" p-id="2093"></path></svg>';
    const query = new AV.Query('shuoshuo');
    query.equalTo('objectId', id);
    query.find().then(res => {
      res.forEach(atom => {
        // console.log(atom);
        const starNow = atom.attributes.atStar;
        const starFinal = starNow + 1;
        const todo = AV.Object.createWithoutData('shuoshuo', id);
        todo.set('atStar', starFinal);
        todo.save().then(() => {
          const idMiddle = `artitalk_star_svg_${id}`;
          document.getElementById(id).innerText = starFinal;
          document.getElementById(idMiddle).innerHTML = staredSvg;
        });
      });
    });
  };

  atEvery.prototype.seeContent = function (pageNum, option) {
    const root = this;
    let mid = '';

    try {
      let {
        lang,
        pageSize,
        motion,
        atEmoji,
        color1,
        color2,
        color3
      } = root.config;
      const atEmojiDefault = atEmoji;
      lang = typeof lang === 'undefined' || lang === '' ? 'zh' : lang;

      switch (lang) {
        case 'zh':
          var text0 = '由';
          var text00 = '发表';
          var text1 = '加载更多...';
          var text2 = '预览';
          var text3 = '发布';
          var text4 = '已登录';
          var text5 = '确定';
          var text6 = '退出登录';
          var text7 = '用户';
          var text8 = '密码';
          var text9 = '登录';
          var text10 = '取消';
          var text11 = '发布说说';
          var text12 = '添加图片，视频，音乐';
          var text14 = '(上传失败，若非网络原因，请联系Artitalk开发人员)';
          var text15 = '请先登录';
          var text16 = '内容不能为空';
          var text17 = '登陆失败，请检查用户名及密码是否正确';
          var text18 = '头像url';
          var text19 = '确定删除本条说说吗？';
          var text20 = '删除成功';
          var text21 = '请拖拽图片到此处';
          var text22 = '表情';
          var text23 = '删除';
          var text24 = '如果你看到这条说说，恭喜你已经配置成功并且可以正常使用了。当你发布一个说说之后，我将会自动消失。快去探索Artitalk吧<br>欢迎加入Artitalk的QQ交流群：1104585229<br>觉得本项目不错的话可以推荐给你的好友或者去GitHub点一个star，感谢支持';
          var text25 = '上传中';
          var text26 = '图片';
          var text27 = '音乐';
          var text28 = '视频';
          var text29 = '添加';
          var text30 = '上传的图片最大支持5M，请压缩后或换一个继续上传';
          var text31 = '上传的音乐最大支持10M，请压缩后或换一个继续上传';
          var text32 = '上传的视频最大支持30M，请压缩后或换一个继续上传';
          var text33 = '图片格式错误，请不要上传其他类型的文件';
          var text34 = '音频格式错误，请不要上传其他类型的文件';
          var text35 = '视频格式错误，请不要上传其他类型的文件';
          var textup = '上传ing';
          var loadingTxT = '加载中';
          var text36 = '用户名不能为空';
          var text37 = '密码不能为空';
          var text38 = '请在下方输入框进行修改然后点击保存即可';
          var text39 = '保存';
          break;

        case 'en':
          var text0 = 'Published by';
          var text00 = '';
          var text1 = 'load more...';
          var text2 = 'Preview';
          var text3 = 'Publish';
          var text4 = 'logged';
          var text5 = 'Ok';
          var text6 = 'Sign out';
          var text7 = 'Username';
          var text8 = 'Password';
          var text9 = 'Log in';
          var text10 = 'Cancel';
          var text11 = 'Post talk';
          var text12 = 'Add pictures, videos, music';
          var text14 = '(Upload failed, if not for network reasons, please contact Artitalk developers)';
          var text15 = 'Please log in first';
          var text16 = 'Content can not be blank';
          var text17 = 'Login failed, please check if the username and password are correct';
          var text18 = 'Avatar url';
          var text19 = 'Are you sure you want to devare this article?';
          var text20 = 'Successfully devared';
          var text21 = 'Please drag and drop pictures here';
          var text22 = 'emoji';
          var text23 = 'Devare';
          var text24 = 'If you see this, congratulations, you have successfully configured and can be used normally. When you post one shuoshuo, I will disappear automatically. Quickly explore Artitalk.<br>Welcome to Artitalk’s QQ group: 1104585229<br>If you think this project is good, you can recommend it to your friends or go to GitHub to order a star.';
          var text25 = 'uploading';
          var text26 = 'image';
          var text27 = 'music';
          var text28 = 'video';
          var text29 = 'Add';
          var text30 = 'The uploaded image supports a maximum of 5M, please compress or change another one to continue uploading';
          var text31 = 'The uploaded music supports a maximum of 10M, please compress or change another one to continue uploading';
          var text32 = 'The uploaded video supports a maximum of 30M, please compress or change another one to continue uploading';
          var text33 = 'Picture format error, please do not upload other types of files';
          var text34 = 'The audio format is wrong, please do not upload other types of files';
          var text35 = 'Video format error, please do not upload other types of files';
          var textup = 'Uploading';
          var loadingTxT = 'Loading';
          var text36 = 'Username can not be empty';
          var text37 = 'Password can not be empty';
          var text38 = 'Please modify it in the input box below and click save';
          var text39 = 'save';
          break;

        case 'es':
          var text0 = 'Publicado por';
          var text00 = '';
          var text1 = 'Carga más...';
          var text2 = 'Avance';
          var text3 = 'Lanzamiento';
          var text4 = 'Registrado';
          var text5 = 'Determinar';
          var text6 = 'Desconectar';
          var text7 = 'Usuario';
          var text8 = 'Contraseña';
          var text9 = 'Iniciar sesión';
          var text10 = 'Cancelar';
          var text11 = 'Publicar charla';
          var text12 = 'Agrega fotos, videos, música';
          var text14 = '(Carga fallida, si no es por razones de red, comuníquese con los desarrolladores de Artitalk)';
          var text15 = 'Por favor ingresa primero';
          var text16 = 'El contenido no puede estar en blanco';
          var text17 = 'Error de inicio de sesión, compruebe si el nombre de usuario y la contraseña son correctos';
          var text18 = 'URL del avatar';
          var text19 = '¿Estás seguro de que deseas eliminar este artículo?';
          var text20 = 'Eliminado con éxito';
          var text21 = 'Arrastra y suelta fotos aquí';
          var text22 = 'expresión';
          var text23 = 'Eliminar';
          var text24 = 'Si ve este artículo, felicidades, se ha configurado correctamente y se puede usar normalmente. Cuando publiques un comentario, desapareceré automáticamente. Explore rápidamente Artitalk. <br> Bienvenido al grupo QQ de Artitalk: 1104585229 <br> Si cree que este proyecto es bueno, puede recomendarlo a sus amigos o ir a GitHub para pedir una estrella, gracias por su apoyo.';
          var text25 = 'cargando';
          var text26 = 'imagen';
          var text27 = 'música';
          var text28 = 'vídeo';
          var text29 = 'Añadir';
          var text30 = 'La imagen cargada admite un máximo de 5 M, comprima o cambie otra para continuar cargando';
          var text31 = 'La música cargada admite un máximo de 10 M, comprime o cambia otra para continuar cargando';
          var text32 = 'El video subido admite un máximo de 30 M, comprima o cambie otro para continuar subiendo';
          var text33 = 'Error de formato de imagen, no suba otros tipos de archivos';
          var text34 = 'El formato de audio es incorrecto, no suba otros tipos de archivos';
          var text35 = 'Error de formato de video, no suba otros tipos de archivos';
          var textup = 'Cargando';
          var loadingTxT = 'Cargando';
          var text36 = 'El nombre de usuario no puede estar vacío';
          var text37 = 'la contraseña no puede estar en blanco';
          var text38 = 'Por favor, introduzca las modificaciones en el cuadro de abajo y haga clic en guardar';
          var text39 = 'guardar';
          break;
      }

      color1 = typeof color1 === 'undefined' || color1 === '' ? 'RGBA(255, 125, 73, 0.75)' : color1;
      color2 = typeof color2 === 'undefined' || color2 === '' ? '#9BCD9B' : color2;
      color3 = typeof color3 === 'undefined' || color3 === '' ? 'white' : color3;
      pageSize = typeof pageSize === 'undefined' ? '5' : pageSize;

      function fadeIn(id) {
        if (!document.getElementById(id)) return;
        const nowEle = document.getElementById(id);
        nowEle.style.display = '';
      }

      function fadeOut(id) {
        if (!document.getElementById(id)) return;
        const nowEle = document.getElementById(id);
        nowEle.style.display = 'none';
      } // console.log(option);


      fadeIn('lazy');
      const query = new AV.Query('shuoshuo');
      let shuoNum = 0;
      query.descending('createdAt');
      query.limit(pageSize);
      query.skip(pageSize * pageNum);
      query.find().then(shuoContent => {
        mid = '';
        shuoContent.forEach(atContent => {
          shuoNum += 1; // OS icon judge

          const atOs = atContent.attributes.userOs;
          let osSvg = '';

          switch (atOs) {
            case 'windows':
              osSvg = `<svg t="1591348521231"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16474" width="10" height="10"  style="display: inline"><path d="M412.224 511.904c-47.712-24.512-94.08-36.96-137.888-36.96-5.952 0-11.936 0.192-17.952 0.704-55.872 4.64-106.912 19.36-139.744 30.816-8.704 3.2-17.632 6.56-26.816 10.304l-89.824 311.392c61.696-22.816 116.288-33.952 166.272-33.952 80.832 0 139.52 30.208 188 61.312 22.976-77.92 78.048-266.08 94.496-322.336-11.936-7.296-24.064-14.56-36.512-21.312zM528.352 591.072l-90.432 314.144c26.816 15.36 117.088 64.064 186.208 64.064 55.808 0 118.24-14.304 190.848-43.808l86.368-301.984c-58.624 18.912-114.88 28.512-167.456 28.512-95.936 0-163.104-31.104-205.504-60.96zM292.832 368.8c77.12 0.8 134.144 30.208 181.408 60.512l92.768-317.344c-19.552-11.2-70.816-39.104-107.872-48.608-24.384-5.696-50.016-8.608-77.216-8.608-51.808 0.96-108.384 13.952-172.896 39.808l-88.448 310.592c64.8-24.448 120.64-36.352 172.096-36.352 0.032 0 0.128 0 0.128 0zM1024 198.112c-58.816 22.816-116.192 34.464-171.04 34.464-91.68 0-159.296-31.808-203.104-62.368l-91.936 318.24c61.76 39.712 128.288 59.872 198.112 59.872 56.96 0 115.936-13.664 175.456-40.672l-0.192-2.208 3.744-0.896 88.928-306.432z" p-id="16475" fill="${color3}"></path></svg>` + ' ';

            case 'Android':
              osSvg = `<svg t="1591349177001"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17355" width="10" height="10"  style="display: inline"><path d="M391.405714 276.004571a22.308571 22.308571 0 0 0 0-44.544c-11.995429 0-21.723429 10.276571-21.723428 22.272s9.728 22.272 21.723428 22.272z m241.152 0c11.995429 0 21.723429-10.276571 21.723429-22.272s-9.728-22.272-21.723429-22.272a22.308571 22.308571 0 0 0 0 44.544zM168.539429 381.147429a58.514286 58.514286 0 0 1 58.294857 58.294857v245.723428c0 32.585143-25.709714 58.843429-58.294857 58.843429S109.696 717.714286 109.696 685.165714v-245.723428c0-32 26.294857-58.294857 58.843429-58.294857z m605.732571 10.861714v380.562286c0 34.852571-28.013714 62.866286-62.281143 62.866285h-42.861714v129.718857c0 32.585143-26.294857 58.843429-58.843429 58.843429s-58.843429-26.294857-58.843428-58.843429v-129.718857H472.594286v129.718857c0 32.585143-26.294857 58.843429-58.843429 58.843429a58.660571 58.660571 0 0 1-58.294857-58.843429l-0.585143-129.718857H312.594286a62.683429 62.683429 0 0 1-62.866286-62.866285V392.009143h524.580571z m-132.571429-231.424c80.018286 41.142857 134.290286 119.990857 134.290286 210.870857H247.424c0-90.843429 54.272-169.728 134.838857-210.870857L341.705143 85.723429a8.338286 8.338286 0 0 1 2.852571-11.446858c3.986286-1.718857 9.142857-0.585143 11.446857 3.437715L397.147429 153.161143c34.852571-15.433143 73.728-23.990857 114.870857-23.990857s80.018286 8.557714 114.870857 23.990857l41.142857-75.446857c2.304-3.986286 7.424-5.156571 11.446857-3.437715a8.338286 8.338286 0 0 1 2.852572 11.446858zM914.267429 439.442286v245.723428c0 32.585143-26.294857 58.843429-58.843429 58.843429a58.660571 58.660571 0 0 1-58.294857-58.843429v-245.723428a58.148571 58.148571 0 0 1 58.294857-58.294857c32.585143 0 58.843429 25.709714 58.843429 58.294857z" fill="${color3}" p-id="17356"></path></svg>` + ' ';

            case 'Linux':
              osSvg = `<svg t="1591349455279"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17896" width="10" height="10"  style="display: inline"><path d="M833.828 772.167c-14.708-27.427-28.724-65.173-32.06-95.097-7.064-63.345 7.001-95.581-26.311-157.655-20.001-37.27-47.167-69.818-69.762-105.374-57.008-89.708-35.862-181.666-78.106-273.828-14.677-32.021-39.272-58.288-73.372-69.27-40.023-12.889-88.039-6.905-123.821 15.09-97.955 60.213-26.601 240.65-82.234 332.558-34.997 57.817-72.677 108.993-92.906 175.374-15.962 52.376-11.905 116.451-74.135 139.232-16.782 6.143-41.737 5.268-50.966 23.624-5.79 11.518-1.802 24.689 0.951 36.449 2.356 10.066 3.024 19.861 1.87 30.14-1.651 14.71-7.417 28.869-8.274 43.641-0.878 15.142 8.565 24.551 21.704 30.534 47.398 21.585 113.582 34.279 164.669 43.764 66.028 12.258 59.608-7.377 115.821-23.029 39.692-11.052 88.466-13.955 129.206-6.827 43.073 7.536 72.966 44.046 112.09 48.73 33.22 0 210.129-91.293 212.144-131.077 1.811-35.802-33.736-33.163-46.508-56.979zM561.696 188.612c34.429 24.892-1.788 99.81-14.799 87.114 41.625-32.641-34.982-83.122-29.425-11.704-53.249-11.693-3.247-109.731 44.224-75.41z m-4.039 117.923c1.857 28.37-64.491 48.349-85.296 56.455-79.455-0.65-53.966-82.141 7.617-88.858 11.889-1.296 76.451 13.646 77.679 32.403zM407.938 198.841c42.337-29.134 70.265 43.258 33.357 66.249 16.796-88.043-79.787-11.981-12.48 11.418-26.974 29.286-46.681-59.91-20.877-77.667z m-57.874 731.028c-38.514-10.84-181.601-28.379-200.949-63.937-0.276-0.507-0.351-2.272-0.282-4.883-0.019-0.032-0.042-0.063-0.06-0.095-0.833-1.415-0.113-8.165 1.246-16.547 1.879-19.977 5.394-46.894 6.514-49.347 12.905-28.267 12.771-23.836 21.86-26.291 5.612-3.079 13.887-7.607 27.549-19.429 37.781-32.691 49.648-51.05 71.076-37.382 8.427 2.949 16.297 11.207 25.986 25.067a570.9 570.9 0 0 1 8.53 10.204c16.954 20.727 55.205 71.093 68.786 114.074 13.447 30 13.992 58.501-30.256 68.566z m290.721-232.992c-16.92 43.195-1.196 82.899-35.488 120.646-58.579 64.48-168.292 61.287-220.377 1.598 61.991-24.918-79.397-135.334-84.198-181.037-10.461-99.563 81.484-201.457 102.457-296.773 77.359 82.013 125.198-33.75 189.934 21.718 50.436 43.215 102.409 212.603 87.712 277.829-8.345 37.034-32.364 36.425-40.04 56.019z m103.371 199.109c-159.991 95.734-70.13-147.276-65.785-178.44 11.336 103.265 74.062 18.695 110.579 7.453-17.789 5.477 57.616 96.436 56.788 86.041 3.123 39.223-63.176 61.965-101.582 84.946z" fill="${color3}" p-id="17897"></path></svg>` + ' ';

            case 'iOS':
              osSvg = `<svg t="1591349632686"  viewBox="0 0 1084 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18688" width="10" height="10"  style="display: inline"><path d="M821.235026 544.015116c-1.287001-129.729651 105.791442-191.891776 110.553344-194.980577-60.102924-88.030835-153.796561-100.12864-187.258574-101.54434-79.794032-7.979403-155.598362 46.975519-196.010178 46.975519-40.411816 0-102.831341-45.688518-168.983167-44.530218-86.872534 1.287001-167.052666 50.57912-211.840284 128.442651-90.347436 156.756662-23.166009 388.931554 64.864826 515.958505 42.985817 62.162125 94.337137 132.046252 161.647264 129.600951 64.864826-2.574001 89.317835-41.956217 167.696167-41.956217s100.38604 41.956217 169.111867 40.669216c69.755428-1.287001 114.028245-63.449125 156.756662-125.86865 49.42082-72.200729 69.755428-142.084856 70.913728-145.559758C957.14228 750.449998 822.522026 698.969977 821.235026 544.015116L821.235026 544.015116 821.235026 544.015116zM692.277575 163.449065c35.778614-43.371917 59.845524-103.474841 53.281821-163.449065-51.48002 2.059201-113.899545 34.234214-150.83646 77.477431C561.647023 115.958746 532.560811 177.21997 540.411514 235.907194 597.811737 240.411695 656.49896 206.692282 692.277575 163.449065L692.277575 163.449065 692.277575 163.449065z" p-id="18689" fill="${color3}"></path></svg>` + ' ';

            case 'Max':
              osSvg = `<svg t="1591349632686"  viewBox="0 0 1084 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18688" width="10" height="10"  style="display: inline"><path d="M821.235026 544.015116c-1.287001-129.729651 105.791442-191.891776 110.553344-194.980577-60.102924-88.030835-153.796561-100.12864-187.258574-101.54434-79.794032-7.979403-155.598362 46.975519-196.010178 46.975519-40.411816 0-102.831341-45.688518-168.983167-44.530218-86.872534 1.287001-167.052666 50.57912-211.840284 128.442651-90.347436 156.756662-23.166009 388.931554 64.864826 515.958505 42.985817 62.162125 94.337137 132.046252 161.647264 129.600951 64.864826-2.574001 89.317835-41.956217 167.696167-41.956217s100.38604 41.956217 169.111867 40.669216c69.755428-1.287001 114.028245-63.449125 156.756662-125.86865 49.42082-72.200729 69.755428-142.084856 70.913728-145.559758C957.14228 750.449998 822.522026 698.969977 821.235026 544.015116L821.235026 544.015116 821.235026 544.015116zM692.277575 163.449065c35.778614-43.371917 59.845524-103.474841 53.281821-163.449065-51.48002 2.059201-113.899545 34.234214-150.83646 77.477431C561.647023 115.958746 532.560811 177.21997 540.411514 235.907194 597.811737 240.411695 656.49896 206.692282 692.277575 163.449065L692.277575 163.449065 692.277575 163.449065z" p-id="18689" fill="${color3}"></path></svg>` + ' ';

            default:
              osSvg = `<svg t="1591349738696"  viewBox="0 0 1168 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20407" width="10" height="10"  style="display: inline"><path d="M787.333831 588.946093a75.189984 75.189984 0 0 0-75.093984 75.092984 75.189984 75.189984 0 0 0 75.093984 75.093984 75.165984 75.165984 0 0 0 75.067984-75.093984 75.165984 75.165984 0 0 0-75.067984-75.092984m0 222.841953a147.919968 147.919968 0 0 1-147.749968-147.748969c0-81.455982 66.292986-147.747968 147.749968-147.747968 81.431983 0 147.747968 66.291986 147.747968 147.747968 0 81.480982-66.315986 147.748968-147.747968 147.748969m89.452981 102.106978c0.342 0.244 1.317 0.585 2.315999 0.585h0.122l71.484985-39.496992c-1.706-4.022999-9.605998-23.478995-9.605998-43.739991a113.858976 113.858976 0 0 1 107.739977-113.613975c0.853-4.729999 5.557999-31.524993 5.557998-51.639989s-4.704999-46.88399-5.559998-51.637989a113.858976 113.858976 0 0 1-107.737977-113.565976c0-20.357996 7.923998-39.813991 9.605998-43.81299l-70.313985-39.057992-0.293-0.025a5.339999 5.339999 0 0 0-2.706 0.732 196.753958 196.753958 0 0 1-26.014994 21.819995c-21.699995 15.239997-42.153991 22.967995-60.951987 22.967995-18.919996 0-39.594991-7.874998-61.390987-23.405995a194.705958 194.705958 0 0 1-26.160994-22.283995 5.777999 5.777999 0 0 0-2.729999-0.707h-0.245l-72.824985 40.032992c1.706 4.046999 9.579998 23.479995 9.579998 43.73999A113.858976 113.858976 0 0 1 528.896886 614.350088c-0.854 4.729999-5.509999 31.524993-5.509998 51.639989s4.655999 46.90799 5.533998 51.661989a113.858976 113.858976 0 0 1 107.763977 113.589975c0 20.334996-7.972998 39.863991-9.679998 43.788991l68.973985 38.545992h0.146c1.024 0 1.95-0.365 2.317-0.585a200.849957 200.849957 0 0 1 26.428994-23.161995c22.088995-16.188997 43.079991-24.429995 62.414987-24.429995 19.552996 0 40.715991 8.387998 62.949986 24.917995 14.921997 11.068998 25.259995 22.185995 26.551995 23.575995m22.673995 108.397976c-13.774997-0.025-27.135994-5.704999-35.765993-15.213996-11.775997-12.896997-49.005989-46.44599-79.530982-46.44599-30.280993 0-68.119985 33.767993-78.993984 45.54399-8.606998 9.386998-21.869995 14.969997-35.499992 14.969997-6.483999 0-12.603997-1.243-18.186996-3.706l-0.975-0.414-92.69698-51.833988-0.926-0.683a44.46999 44.46999 0 0 1-14.920996-53.735989c0.049-0.146 8.532998-19.699996 8.532998-37.594992a98.376979 98.376979 0 0 0-98.254979-98.254978h-3.900999c-15.505997 0-28.159994-13.799997-32.182993-35.108993-0.341-1.706-7.923998-42.178991-7.923999-74.044984 0-31.913993 7.557998-72.361984 7.899999-74.117984 4.119999-21.576995 16.992996-35.449992 32.816993-35.083993h3.266999a98.400979 98.400979 0 0 0 98.279979-98.303978c0-17.846996-8.484998-37.399992-8.559998-37.619992a44.34899 44.34899 0 0 1 15.068996-53.661989l0.95-0.658 97.839979-53.759988 1.025-0.415c5.485999-2.364999 11.507998-3.534999 17.895996-3.534999 13.604997 0 26.891994 5.436999 35.595992 14.629997 11.579998 12.115997 48.17699 43.640991 77.774984 43.64099 29.354994 0 65.755986-30.914993 77.287983-42.812991 8.654998-8.996998 21.844995-14.335997 35.302992-14.335997 6.509999 0 12.653997 1.22 18.285997 3.657l0.974999 0.414 94.47698 52.516988 0.95 0.658c16.895996 11.751997 23.332995 34.889993 14.945997 53.735989-0.05 0.146-8.532998 19.699996-8.532999 37.545992a98.400979 98.400979 0 0 0 98.254979 98.279978h3.29c15.775997-0.34 28.719994 13.506997 32.817993 35.107993 0.317 1.707 7.899998 42.203991 7.899998 74.069984 0 31.889993-7.582998 72.410984-7.949998 74.117984-4.045999 21.551995-16.991996 35.424992-32.766993 35.059993h-3.291a98.400979 98.400979 0 0 0-98.254979 98.278978c0 17.846996 8.483998 37.449992 8.556999 37.619992a44.42199 44.42199 0 0 1-15.017997 53.710989l-0.927 0.683-96.133979 53.100988-0.975 0.415a44.88499 44.88499 0 0 1-17.846996 3.583999z m222.061952-705.339848a48.76199 48.76199 0 1 1-97.523979 0V121.977194c0-13.457997-10.873998-24.453995-24.307995-24.453995H121.829974c-13.262997 0-24.306995 10.970998-24.306995 24.453995v584.995874c0 13.457997 10.873998 24.453995 24.307995 24.453995h219.499953a48.76199 48.76199 0 1 1 0 97.523979H48.908989A48.76199 48.76199 0 0 1 0 780.191052V48.76121C0 21.822215 21.893995 0.00022 48.907989 0.00022h1023.706781a48.76199 48.76199 0 0 1 48.907989 48.76199v268.189942zM219.427953 975.23701c0-26.940994 21.991995-48.76199 48.981989-48.761989h194.607959a48.76199 48.76199 0 1 1 0 97.523979H268.433942a48.76199 48.76199 0 0 1-49.005989-48.76199z" p-id="20408" fill="${color3}"></path></svg>` + ' ';
          } // Avatar init


          let shuoAvatar = atContent.attributes.avatar;
          shuoAvatar = typeof shuoAvatar === 'undefined' ? 'https://cdn.jsdelivr.net/gh/drew233/cdn/logol.png' : shuoAvatar;
          const currentUser = AV.User.current();
          const hideIcon = currentUser ? '' : 'style="display: none"'; // Time process

          const timeForm = atContent.createdAt;
          const nowDate = new Date(timeForm);

          function timeFormat(time) {
            return time < 10 ? `0${time}` : time;
          }

          const resDate = `${nowDate.getFullYear()}-${timeFormat(nowDate.getMonth() + 1)}-${timeFormat(nowDate.getDate())}`;
          const resTime = `${timeFormat(nowDate.getHours())}:${timeFormat(nowDate.getMinutes())}:${timeFormat(nowDate.getSeconds())}`;
          const atHour = nowDate.getHours();
          let timeSvg = '';

          switch (timeSvg) {
            case atHour >= 0 && atHour < 5:
              timeSvg = `<svg t="1591350196611"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24683" width="10" height="10"  style="display: inline"><path d="M171.605333 622.933333a341.333333 341.333333 0 1 1 680.789334 0h150.186666a21.333333 21.333333 0 1 1 0 42.666667H21.418667a21.333333 21.333333 0 1 1 0-42.666667h150.229333z m637.994667 0a298.666667 298.666667 0 1 0-595.2 0h595.2z" fill="${color3}" p-id="24684"></path></svg>` + ' ';

            case atHour >= 5 && atHour < 6:
              timeSvg = `<svg t="1591350273094"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24973" width="10" height="10"  style="display: inline"><path d="M512 409.6c121.6 0 220.8 99.2 220.8 220.8 0 9.6-1.6 19.2-3.2 32l-6.4 36.8h152v8H145.6v-8h152l-6.4-36.8c-1.6-12.8-3.2-22.4-3.2-32 3.2-121.6 102.4-220.8 224-220.8m0-32c-139.2 0-252.8 113.6-252.8 252.8 0 12.8 1.6 24 3.2 36.8H131.2c-9.6 0-17.6 8-17.6 17.6v36.8c0 9.6 8 17.6 17.6 17.6h760c9.6 0 17.6-8 17.6-17.6v-36.8c0-9.6-8-17.6-17.6-17.6h-129.6c1.6-11.2 3.2-24 3.2-36.8 0-140.8-113.6-252.8-252.8-252.8zM817.6 329.6l6.4 6.4-57.6 57.6-6.4-6.4 57.6-57.6m0-38.4c-4.8 0-9.6 1.6-12.8 4.8l-76.8 76.8c-6.4 6.4-6.4 19.2 0 25.6l25.6 25.6c3.2 3.2 8 4.8 12.8 4.8s9.6-1.6 12.8-4.8l76.8-76.8c6.4-6.4 6.4-19.2 0-25.6l-25.6-25.6c-3.2-3.2-8-4.8-12.8-4.8zM516.8 211.2v81.6h-8v-81.6h8m12.8-32h-36.8c-9.6 0-17.6 8-17.6 17.6v108.8c0 9.6 8 17.6 17.6 17.6h36.8c9.6 0 17.6-8 17.6-17.6v-108.8c1.6-9.6-6.4-17.6-17.6-17.6zM232 828.8h560M792 844.8h-560c-9.6 0-16-6.4-16-16s6.4-16 16-16h561.6c9.6 0 16 6.4 16 16s-8 16-17.6 16zM233.6 308.8l57.6 57.6-6.4 6.4-57.6-57.6 6.4-6.4m0-36.8c-4.8 0-9.6 1.6-12.8 4.8l-25.6 25.6c-6.4 6.4-6.4 19.2 0 25.6l76.8 76.8c3.2 3.2 8 4.8 12.8 4.8s9.6-1.6 12.8-4.8l25.6-25.6c6.4-6.4 6.4-19.2 0-25.6l-76.8-76.8c-3.2-3.2-8-4.8-12.8-4.8z" fill="${color3}" p-id="24974"></path></svg>` + ' ';

            case atHour >= 6 && atHour < 8:
              timeSvg = `<svg t="1591350470149"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="25217" width="10" height="10"  style="display: inline"><path d="M574.2 236.3V96.8H454.6v139c19-2.9 38.5-4.4 58.3-4.4 20.8 0 41.3 1.7 61.3 4.9zM245.5 340.1l-114.1-78.5-67.9 98.5 113.8 78.4c17.6-36.1 40.6-69.3 68.2-98.4zM812 588.5c0-164.9-134.2-299.1-299.1-299.1-164.9 0-299.1 134.2-299.1 299.1M778.1 341l114.1-78.5L960 361l-113.8 78.4c-17.5-36.1-40.5-69.3-68.1-98.4zM911.6 746.2H113.8c-26.2 0-47.5-21.3-47.5-47.5s21.3-47.5 47.5-47.5h797.8c26.2 0 47.5 21.3 47.5 47.5 0 26.3-21.3 47.5-47.5 47.5zM766.6 882h-494c-21 0-38-17-38-38s17-38 38-38h494c21 0 38 17 38 38s-17 38-38 38z" fill="${color3}" p-id="25218"></path></svg>` + ' ';

            case atHour >= 8 && atHour < 11:
              timeSvg = `<svg t="1591350526184"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26011" width="10" height="10"  style="display: inline"><path d="M814.592 409.63l96.075-96.105-81.77-81.77-95.924 95.865a381.803 381.803 0 0 1 81.619 82.01zM881.965 572.597c2.952 18.823 4.427 38.189 4.427 57.826 0 19.606-1.505 38.972-4.427 57.825h136.011V572.597h-136.01zM569.826 259.223V124.446H454.174v134.355c18.402-2.801 37.195-4.247 56.38-4.277 20.15 0 39.936 1.627 59.272 4.699zM289.792 326.415l-94.66-94.66-81.77 81.77 94.42 94.449c22.98-31.202 50.658-58.76 82.01-81.559zM134.686 630.423c0-19.697 1.506-38.973 4.458-57.826H6.024v115.651h133.12c-2.952-18.853-4.458-38.159-4.458-57.825zM227.358 688.67h566.423c3.885-18.823 5.903-38.31 5.903-58.278 0-159.412-129.687-289.16-289.13-289.16-159.382 0-289.099 129.718-289.099 289.16 0 19.968 2.018 39.455 5.903 58.278zM902.837 779.083h-783.06c-33.249 0-60.234 26.986-60.234 60.236s26.985 60.235 60.235 60.235h783.059c33.25 0 60.235-26.986 60.235-60.235s-26.985-60.236-60.235-60.236z" p-id="26012" fill="${color3}"></path></svg>` + ' ';

            case atHour >= 11 && atHour < 13:
              timeSvg = `<svg t="1591350817881"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="29283" width="10" height="10"  style="display: inline"><path d="M512 272.965905c-135.175679 0-245.151419 109.980857-245.151419 245.152443 0 135.175679 109.976764 245.156536 245.151419 245.156536 135.176702 0 245.156536-109.98188 245.156536-245.156536 0-135.171586-109.979834-245.152443-245.156536-245.152443z m0 416.114163c-94.273107 0-170.956603-76.685543-170.956603-170.96172 0-94.2772 76.683497-170.957627 170.956603-170.957627 94.2772 0 170.962743 76.680427 170.962743 170.957627 0 94.276177-76.685543 170.96172-170.962743 170.96172zM475.28582 65.290005h73.427336v159.101601h-73.427336V65.290005z m0 746.559177h73.427336v146.859789h-73.427336V811.849182z m214.111473-529.185404L801.897529 170.163541l51.92358 51.92358-112.500237 112.500237-51.923579-51.92358zM170.167634 801.897529l103.84409-103.847159 51.92358 51.92358-103.84716 103.847159-51.92051-51.92358z m629.439736-326.611709H958.708971v73.427336H799.60737v-73.427336z m-734.317365 0h146.864906v73.427336H65.290005v-73.427336z m624.107288 266.045286l51.923579-51.92358 112.500237 112.500237-51.92358 51.923579-112.500236-112.500236zM170.162518 222.092237l51.924603-51.923579 103.84716 103.847159-51.92358 51.92358-103.848183-103.84716z m0 0" p-id="29284" fill="${color3}"></path></svg>` + ' ';

            case atHour >= 13 && atHour < 17:
              timeSvg = `<svg t="1591350596667"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27504" width="10" height="10"  style="display: inline"><path d="M166.4 712.533c-17.067-17.066-17.067-42.666 0-59.733l59.733-59.733C243.2 576 268.8 576 285.867 593.067c17.066 17.066 17.066 42.666 0 59.733l-59.734 59.733c-17.066 17.067-42.666 17.067-59.733 0z m691.2 0c-17.067 17.067-42.667 17.067-59.733 0L738.133 652.8c-17.066-17.067-17.066-42.667 0-59.733C755.2 576 780.8 576 797.867 593.067L857.6 652.8c17.067 17.067 17.067 42.667 0 59.733zM512 896c-25.6 0-42.667-17.067-42.667-42.667V768c0-25.6 17.067-42.667 42.667-42.667S554.667 742.4 554.667 768v85.333C554.667 878.933 537.6 896 512 896z m128-640H384c-25.6 0-42.667-17.067-42.667-42.667S358.4 170.667 384 170.667h256c25.6 0 42.667 17.066 42.667 42.666S665.6 256 640 256z m42.667 170.667H341.333c0 93.866 76.8 170.666 170.667 170.666s170.667-76.8 170.667-170.666z m85.333 0c0 140.8-115.2 256-256 256s-256-115.2-256-256H128c-25.6 0-42.667-17.067-42.667-42.667S102.4 341.333 128 341.333h768c25.6 0 42.667 17.067 42.667 42.667S921.6 426.667 896 426.667H768z" p-id="27505" fill="${color3}"></path></svg>` + ' ';

            case atHour >= 17 && atHour < 18:
              timeSvg = `<svg t="1591350638906"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27813" width="10" height="10"  style="display: inline"><path d="M736.946238 928.866293H246.668982c-43.317575 0-80.755232-5.869684-111.272269-17.445324-30.91408-11.726066-56.671721-27.753087-76.555583-47.635927-20.088524-20.090571-34.731012-43.647079-43.521213-70.018704-8.473999-25.419949-12.769838-52.570309-12.769838-80.696903 0-28.757974 5.669116-56.32175 16.847713-81.925894 11.04659-25.300222 26.243711-47.905056 45.169759-67.187215 19.017122-19.376303 41.549302-34.82925 66.969251-45.928029 25.605168-11.17962 53.497425-16.848737 82.903152-16.848737 41.588187 0 79.659271 10.957563 113.156176 32.568767 16.228613 10.469446 30.630624 22.576181 43.125193 36.231179 3.105734-15.261589 7.444553-30.498618 13.002128-45.62513 12.695137-34.559097 33.183773-66.134233 60.896952-93.847412 27.629267-27.630291 63.863517-50.215682 107.698885-67.128886 43.512003-16.787338 97.086176-25.299199 159.236677-25.299199 47.696302 0 89.25993 6.14393 123.531478 18.261922 34.490535 12.192693 63.806211 28.589129 87.128383 48.731888 23.38357 20.193925 42.095747 43.782156 55.615668 70.109777 13.068643 25.449625 22.843264 51.652404 29.055756 77.881788 6.088672 25.702382 10.036587 51.129494 11.734253 75.571163 1.65264 23.796986 2.490727 45.302789 2.490727 63.923892 0 30.209022-6.715959 60.043514-19.958564 88.676645-13.204743 28.55229-32.511461 54.019311-57.379849 75.691913-24.514323 21.361517-54.521754 38.871309-89.191368 52.045353-34.738176 13.20065-74.315566 19.893072-117.636211 19.893073zM214.43893 542.112832c-23.733541 0-46.115294 4.517897-66.524112 13.428847-20.594037 8.991792-38.806841 21.468964-54.134945 37.086663-15.421224 15.711843-27.825742 34.180474-36.869722 54.895261-8.91095 20.406772-13.428847 42.460044-13.428847 65.546855 0 23.719214 3.589758 46.514383 10.670013 67.753104 6.763031 20.289092 18.078751 38.464033 33.634029 54.019311 15.760962 15.759939 36.664038 28.64848 62.127989 38.307467 25.863041 9.810437 58.415434 14.784728 96.755647 14.784728h490.277256c38.334073 0 73.019037-5.79396 103.09196-17.22122 30.132274-11.449773 55.986105-26.470885 76.840063-44.642756 20.4958-17.86181 36.348859-38.727023 47.121203-62.016449 10.734482-23.208585 16.177448-47.26242 16.177448-71.493288 0-17.677615-0.804319-38.23072-2.39249-61.087286-1.543146-22.225187-5.15337-45.430702-10.730389-68.972885-5.450129-23.019273-14.075577-46.105061-25.63689-68.617797-11.106965-21.629623-26.569122-41.086767-45.956681-57.82908-19.448958-16.797571-44.352137-30.632671-74.017784-41.119513-29.879518-10.564613-66.850547-15.921621-109.887736-15.921621-57.093323 0-105.711624 7.588839-144.503115 22.555715-38.471197 14.843056-69.925582 34.31862-93.489254 57.883315-23.485901 23.485901-40.784892 50.071396-51.41909 79.018682-10.832719 29.485545-16.324804 59.313897-16.324804 88.655156a20.466124 20.466124 0 0 1-38.772049 9.15245c-13.891382-27.782763-34.630728-50.706869-61.642942-68.133773-27.15036-17.516956-56.905034-26.031886-90.964758-26.031886z" p-id="27814" fill="${color3}"></path><path d="M275.518031 465.671858c-35.294854 0-69.230758-8.18338-100.865246-24.321941-26.51898-13.440104-49.698912-31.770588-68.847017-54.456263l-31.388895-37.18797 48.532343 3.576455c4.389984 0.323365 8.849552 0.487094 13.256932 0.487093 68.686359 0 130.741693-38.017872 161.949462-99.218745 33.244148-65.309448 24.155143-143.721309-23.161512-199.74937L243.63181 17.665335l48.478107 3.517103c29.582759 2.146896 58.0583 10.119475 84.634586 23.697725 52.919257 26.963095 92.187609 72.954569 110.549815 129.494283 18.36016 56.533574 13.616112 116.824729-13.359262 169.767522-18.97926 37.250392-47.882544 68.264756-83.587743 89.689718-34.71157 20.830421-74.419943 31.840172-114.829282 31.840172z m-104.032378-73.785493a181.122127 181.122127 0 0 0 21.720697 12.977569c25.867134 13.196557 53.54552 19.875676 82.312704 19.875677 68.723198 0 130.777509-38.003546 161.946392-99.178837 22.01234-43.203988 25.883507-92.405573 10.900258-138.542356-14.984273-46.137807-47.026036-83.668585-90.221838-105.676832a182.542476 182.542476 0 0 0-23.326264-9.953699c31.791054 62.529125 32.601512 137.326669-0.188289 201.74277-19.007913 37.275975-47.915289 68.296479-83.604116 89.721441a223.364207 223.364207 0 0 1-79.539544 29.034267z" p-id="27815" fill="${color3}"></path></svg>` + ' ';

            case atHour >= 18 && atHour < 21:
              timeSvg = `<svg t="1591350675688"  viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="28653" width="10" height="10"  style="display: inline"><path d="M784.896 767.488c-291.84 0-528.384-236.544-528.384-528.384 0-81.92 19.456-159.744 52.736-228.864C132.608 95.744 10.24 275.968 10.24 485.376 10.24 777.216 246.784 1013.76 538.624 1013.76c209.408 0 390.144-122.368 475.136-299.008-69.12 33.28-146.944 52.736-228.864 52.736z m-246.272 176.128c-252.416 0-457.728-205.312-457.728-457.728 0-111.104 38.912-214.528 107.52-294.912-1.536 16.384-2.048 32.256-2.048 48.64 0 330.24 268.288 598.528 598.528 598.528 16.384 0 32.256-0.512 48.64-2.048-80.896 68.096-184.32 107.52-294.912 107.52z m127.488-633.344l65.536-32.256 65.536 32.256-9.216-75.264 49.152-55.296-70.656-14.336-34.816-66.56-34.816 66.56-70.656 14.336 49.152 55.296-9.216 75.264zM441.344 432.64l43.52-21.504 43.52 21.504-6.144-50.176 32.768-36.864-47.616-9.728-22.528-44.032-23.04 44.032-47.104 9.728 32.768 36.864-6.144 50.176z m313.344 79.872l-23.04-44.032-23.04 44.032-47.104 9.728 32.768 36.864-6.144 50.176 43.52-21.504 43.52 21.504-6.144-50.176 32.768-36.864-47.104-9.728z" p-id="28654" fill="${color3}"></path></svg>` + ' ';
          } // Content process


          const {
            id
          } = atContent;
          const shuoshuoPerContent = atContent.attributes.atContentHtml;
          const starSvg = `<svg xmlns="http://www.w3.org/2000/svg"  onclick='atEvery.prototype.clickStar("${id}")' viewBox="0 0 24 24" cursor="pointer" width="16" height="16"  fill='${color3}'><path d="M14.6 8H21a2 2 0 0 1 2 2v2.104a2 2 0 0 1-.15.762l-3.095 7.515a1 1 0 0 1-.925.619H2a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h3.482a1 1 0 0 0 .817-.423L11.752.85a.5.5 0 0 1 .632-.159l1.814.907a2.5 2.5 0 0 1 1.305 2.853L14.6 8zM7 10.588V19h11.16L21 12.104V10h-6.4a2 2 0 0 1-1.938-2.493l.903-3.548a.5.5 0 0 0-.261-.571l-.661-.33-4.71 6.672c-.25.354-.57.644-.933.858zM5 11H3v8h2v-8z"/></svg>`;
          const contengMid = `<li><span class="shuoshuo_author_img" onclick='atEvery.prototype.atEdit("${id}")'><img src="${shuoAvatar}"class="artitalk_avatar gallery-group-img" width="48" height="48"></span><span class="cbp_tmlabel" ><div ${hideIcon}id='operate${id}'  class="delete_right"><svg t="1591347978744"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14459" width="20" height="20" style="display: inline"  onclick="atEvery.prototype.delete('${id}')"  ><path d="M512 883.2A371.2 371.2 0 1 0 140.8 512 371.2 371.2 0 0 0 512 883.2z m0 64a435.2 435.2 0 1 1 435.2-435.2 435.2 435.2 0 0 1-435.2 435.2z" p-id="14460" fill="${color3}"></path><path d="M557.056 512l122.368 122.368a31.744 31.744 0 1 1-45.056 45.056L512 557.056l-122.368 122.368a31.744 31.744 0 1 1-45.056-45.056L466.944 512 344.576 389.632a31.744 31.744 0 1 1 45.056-45.056L512 466.944l122.368-122.368a31.744 31.744 0 1 1 45.056 45.056z" p-id="14461" fill="${color3}"></path></svg></div><div id='forEdit${id}'>${shuoshuoPerContent}</div><p class="shuoshuo_time">` + '<span style=""> ' + ` ${osSvg}${atOs}</span><span>&nbsp&nbsp${timeSvg}${resDate} ${resTime}` + `</span><span style='float: right'><span style='vertical-align:top;' id='artitalk_star_svg_${id}'>${starSvg}</span>&nbsp<span style='vertical-align:top;' id='${id}'>loading</span></span></p></span></li>`;
          mid += contengMid;
        });
        let originString = document.getElementById('ccontent').innerHTML;
        originString = originString === '' ? '<ul class="cbp_tmtimeline" id="maina">' : originString;
        originString = originString.replace(/(.*)<\/ul>/, '$1 ');
        originString += `${mid}</ul>`; // console.log(originString);

        if (shuoNum === 0 && pageNum === 0) {
          originString = `<ul class="cbp_tmtimeline" id="maina"><li><span class="shuoshuo_author_img"><img src="https://cdn.jsdelivr.net/gh/drew233/cdn/logol.png" class="artitalk_avatar gallery-group-img" width="48" height="48"></span><span class="cbp_tmlabel"><p>${text24}</p><p class="shuoshuo_time"><span style=""> 由Artitalk发表</span><span style="float:right;"><svg t="1591350675688"  viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="28653" width="10" height="10" style="display: inline"></svg> 2020-04-10 20:35:25</span></p></span></li></ul>`;
        }

        document.getElementById('ccontent').innerHTML = originString;
        shuoContent.forEach(atContent => {
          const {
            id
          } = atContent;
          const starQuery = new AV.Query('shuoshuo');
          starQuery.equalTo('objectId', id);
          starQuery.find().then(res => {
            res.forEach(atom => {
              const starNow = atom.attributes.atStar;
              document.getElementById(id).innerText = starNow;
            });
          });
        });
        fadeOut('lazy');

        if (shuoNum !== 0) {
          fadeIn('readmore');
        } else if (pageNum !== 0) {
          document.getElementById('readButton').innerHTML = '<center>已经到底了哦~</center>';
          document.getElementById('readButton').style.opacity = '0.5';
        }
      });

      atEvery.prototype.atEdit = function (id) {
        function fadeIn(id) {
          if (!document.getElementById(id)) return;
          const nowEle = document.getElementById(id);
          nowEle.style.display = '';
        }

        function fadeOut(id) {
          if (!document.getElementById(id)) return;
          const nowEle = document.getElementById(id);
          nowEle.style.display = 'none';
        }

        const currentuser = AV.User.current();
        if (!currentuser) return;
        fadeIn('lazy');
        const queryEdit = new AV.Query('shuoshuo');
        queryEdit.equalTo('objectId', id);
        queryEdit.find().then(res => {
          res.forEach(atom => {
            const originString = `<ul class="cbp_tmtimeline" id="maina"><li><span class="shuoshuo_author_img"><img src="https://cdn.jsdelivr.net/gh/drew233/cdn/logol.png" class="artitalk_avatar gallery-group-img" width="48" height="48"></span><span class="cbp_tmlabel"><p>${text38}</p><p class="shuoshuo_time"><span style=""> 由Artitalk发表</span><span style="float:right;"><svg t="1591350675688"  viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="28653" width="10" height="10" style="display: inline"></svg> 2020-04-10 20:35:25</span></p></span></li></ul>`;
            document.getElementById('ccontent').innerHTML = originString;
            const changeId = document.getElementById('atSave');
            changeId.id = 'atEditsaveButton';
            document.getElementById('atEditsaveButton').innerHTML = text39;
            fadeOut('readmore');
            fadeOut('touxiang');
            changeId.setAttribute('onclick', `atEvery.prototype.atEditsave("${id}")`);
            pubShuo.click();
            document.getElementById('neirong').value = atom.attributes.atContentMd;
            fadeOut('lazy');
          });
        });
      };

      atEvery.prototype.atEditsave = function (id) {
        fadeIn('lazy');

        function translate(beforTran) {
          if (typeof beforTran === 'undefined') return;

          for (const key in atEmojiQQ) {
            const keyAt = `[${key}]`;
            const emojiAt = `<img class='atemoji gallery-group-img' src='${atEmojiQQ[key]}'/>`;

            while (beforTran.indexOf(keyAt) != -1) {
              beforTran = beforTran.replace(keyAt, emojiAt);
            }
          }

          for (const key in atEmojiTB) {
            const keyAt = `[${key}]`;
            const emojiAt = `<img class='atemoji gallery-group-img' src='${atEmojiTB[key]}'/>`;

            while (beforTran.indexOf(keyAt) != -1) {
              beforTran = beforTran.replace(keyAt, emojiAt);
            }
          }

          for (const key in atEmojiBB) {
            const keyAt = `[${key}]`;
            const emojiAt = `<img class='atemoji gallery-group-img' src='${atEmojiBB[key]}'/>`;

            while (beforTran.indexOf(keyAt) != -1) {
              beforTran = beforTran.replace(keyAt, emojiAt);
            }
          }

          for (const key in atEmojiDefault) {
            const keyAt = `[${key}]`;
            const emojiAt = `<img class='atemoji gallery-group-img' src='${atEmojiDefault[key]}'/>`;

            while (beforTran.indexOf(keyAt) != -1) {
              beforTran = beforTran.replace(keyAt, emojiAt);
            }
          }

          return beforTran;
        }

        let shuoshuoContent = document.getElementById('neirong').value;
        const shuoshuoContentMd = shuoshuoContent;
        const atEditOver = AV.Object.createWithoutData('shuoshuo', id);
        atEditOver.set('atContentMd', shuoshuoContentMd);
        shuoshuoContent = translate(shuoshuoContent);

        if (shuoshuoContent === '') {
          location.reload();
          return;
        }

        const converte = new showdown_min.Converter();
        converte.setOption('strikethrough', 1);
        const shuoshuoContentHtml = converte.makeHtml(shuoshuoContent);
        atEditOver.set('atContentHtml', shuoshuoContentHtml);
        atEditOver.save().then(() => {
          document.getElementById('ccontent').innerHTML = '';
          document.getElementById('neirong').value = '';
          fadeIn('lazy');
          fadeIn('touxiang');
          fadeOut('shuoshuo_input');
          root.seeContent(0, root.config);
        });
      };
    } catch (error) {
      console.log(error);
    }
  }; // new Artitalk({

  return Artitalk;

})));
