var xg = Object.defineProperty;
var wg = (e, t, n) =>
  t in e
    ? xg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Bo = (e, t, n) => wg(e, typeof t != "symbol" ? t + "" : t, n);
function Sg(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              e,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function Cg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Bh = { exports: {} },
  fo = {},
  Uh = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ki = Symbol.for("react.element"),
  kg = Symbol.for("react.portal"),
  Pg = Symbol.for("react.fragment"),
  jg = Symbol.for("react.strict_mode"),
  Eg = Symbol.for("react.profiler"),
  Tg = Symbol.for("react.provider"),
  bg = Symbol.for("react.context"),
  Ng = Symbol.for("react.forward_ref"),
  Mg = Symbol.for("react.suspense"),
  Rg = Symbol.for("react.memo"),
  _g = Symbol.for("react.lazy"),
  Kc = Symbol.iterator;
function Ag(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Kc && e[Kc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Hh = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  $h = Object.assign,
  Wh = {};
function mr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Wh),
    (this.updater = n || Hh);
}
mr.prototype.isReactComponent = {};
mr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
mr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Kh() {}
Kh.prototype = mr.prototype;
function iu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Wh),
    (this.updater = n || Hh);
}
var su = (iu.prototype = new Kh());
su.constructor = iu;
$h(su, mr.prototype);
su.isPureReactComponent = !0;
var Gc = Array.isArray,
  Gh = Object.prototype.hasOwnProperty,
  ou = { current: null },
  Qh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xh(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Gh.call(t, r) && !Qh.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: ki,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: ou.current,
  };
}
function Lg(e, t) {
  return {
    $$typeof: ki,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function au(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ki;
}
function Dg(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Qc = /\/+/g;
function Uo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Dg("" + e.key)
    : t.toString(36);
}
function ls(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ki:
          case kg:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + Uo(o, 0) : r),
      Gc(i)
        ? ((n = ""),
          e != null && (n = e.replace(Qc, "$&/") + "/"),
          ls(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (au(i) &&
            (i = Lg(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Qc, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Gc(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var l = r + Uo(s, a);
      o += ls(s, t, n, l, i);
    }
  else if (((l = Ag(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(s = e.next()).done; )
      (s = s.value), (l = r + Uo(s, a++)), (o += ls(s, t, n, l, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Fi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    ls(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function zg(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Pe = { current: null },
  us = { transition: null },
  Vg = {
    ReactCurrentDispatcher: Pe,
    ReactCurrentBatchConfig: us,
    ReactCurrentOwner: ou,
  };
function Yh() {
  throw Error("act(...) is not supported in production builds of React.");
}
z.Children = {
  map: Fi,
  forEach: function (e, t, n) {
    Fi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Fi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Fi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!au(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
z.Component = mr;
z.Fragment = Pg;
z.Profiler = Eg;
z.PureComponent = iu;
z.StrictMode = jg;
z.Suspense = Mg;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vg;
z.act = Yh;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = $h({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = ou.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Gh.call(t, l) &&
        !Qh.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: ki, type: e.type, key: i, ref: s, props: r, _owner: o };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: bg,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Tg, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = Xh;
z.createFactory = function (e) {
  var t = Xh.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: Ng, render: e };
};
z.isValidElement = au;
z.lazy = function (e) {
  return { $$typeof: _g, _payload: { _status: -1, _result: e }, _init: zg };
};
z.memo = function (e, t) {
  return { $$typeof: Rg, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = us.transition;
  us.transition = {};
  try {
    e();
  } finally {
    us.transition = t;
  }
};
z.unstable_act = Yh;
z.useCallback = function (e, t) {
  return Pe.current.useCallback(e, t);
};
z.useContext = function (e) {
  return Pe.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return Pe.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return Pe.current.useEffect(e, t);
};
z.useId = function () {
  return Pe.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return Pe.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return Pe.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return Pe.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return Pe.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return Pe.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return Pe.current.useRef(e);
};
z.useState = function (e) {
  return Pe.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return Pe.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return Pe.current.useTransition();
};
z.version = "18.3.1";
Uh.exports = z;
var S = Uh.exports;
const tt = Cg(S),
  Og = Sg({ __proto__: null, default: tt }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ig = S,
  Fg = Symbol.for("react.element"),
  Bg = Symbol.for("react.fragment"),
  Ug = Object.prototype.hasOwnProperty,
  Hg = Ig.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  $g = { key: !0, ref: !0, __self: !0, __source: !0 };
function Jh(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Ug.call(t, r) && !$g.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Fg,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: Hg.current,
  };
}
fo.Fragment = Bg;
fo.jsx = Jh;
fo.jsxs = Jh;
Bh.exports = fo;
var d = Bh.exports,
  Da = {},
  qh = { exports: {} },
  Ie = {},
  Zh = { exports: {} },
  ep = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, L) {
    var D = N.length;
    N.push(L);
    e: for (; 0 < D; ) {
      var J = (D - 1) >>> 1,
        oe = N[J];
      if (0 < i(oe, L)) (N[J] = L), (N[D] = oe), (D = J);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var L = N[0],
      D = N.pop();
    if (D !== L) {
      N[0] = D;
      e: for (var J = 0, oe = N.length, Oi = oe >>> 1; J < Oi; ) {
        var sn = 2 * (J + 1) - 1,
          Fo = N[sn],
          on = sn + 1,
          Ii = N[on];
        if (0 > i(Fo, D))
          on < oe && 0 > i(Ii, Fo)
            ? ((N[J] = Ii), (N[on] = D), (J = on))
            : ((N[J] = Fo), (N[sn] = D), (J = sn));
        else if (on < oe && 0 > i(Ii, D)) (N[J] = Ii), (N[on] = D), (J = on);
        else break e;
      }
    }
    return L;
  }
  function i(N, L) {
    var D = N.sortIndex - L.sortIndex;
    return D !== 0 ? D : N.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    h = 3,
    y = !1,
    v = !1,
    x = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(N) {
    for (var L = n(u); L !== null; ) {
      if (L.callback === null) r(u);
      else if (L.startTime <= N)
        r(u), (L.sortIndex = L.expirationTime), t(l, L);
      else break;
      L = n(u);
    }
  }
  function C(N) {
    if (((x = !1), g(N), !v))
      if (n(l) !== null) (v = !0), Vi(k);
      else {
        var L = n(u);
        L !== null && re(C, L.startTime - N);
      }
  }
  function k(N, L) {
    (v = !1), x && ((x = !1), m(P), (P = -1)), (y = !0);
    var D = h;
    try {
      for (
        g(L), f = n(l);
        f !== null && (!(f.expirationTime > L) || (N && !ee()));

      ) {
        var J = f.callback;
        if (typeof J == "function") {
          (f.callback = null), (h = f.priorityLevel);
          var oe = J(f.expirationTime <= L);
          (L = e.unstable_now()),
            typeof oe == "function" ? (f.callback = oe) : f === n(l) && r(l),
            g(L);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var Oi = !0;
      else {
        var sn = n(u);
        sn !== null && re(C, sn.startTime - L), (Oi = !1);
      }
      return Oi;
    } finally {
      (f = null), (h = D), (y = !1);
    }
  }
  var j = !1,
    T = null,
    P = -1,
    A = 5,
    R = -1;
  function ee() {
    return !(e.unstable_now() - R < A);
  }
  function Tt() {
    if (T !== null) {
      var N = e.unstable_now();
      R = N;
      var L = !0;
      try {
        L = T(!0, N);
      } finally {
        L ? rn() : ((j = !1), (T = null));
      }
    } else j = !1;
  }
  var rn;
  if (typeof p == "function")
    rn = function () {
      p(Tt);
    };
  else if (typeof MessageChannel < "u") {
    var xr = new MessageChannel(),
      Wc = xr.port2;
    (xr.port1.onmessage = Tt),
      (rn = function () {
        Wc.postMessage(null);
      });
  } else
    rn = function () {
      w(Tt, 0);
    };
  function Vi(N) {
    (T = N), j || ((j = !0), rn());
  }
  function re(N, L) {
    P = w(function () {
      N(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || y || ((v = !0), Vi(k));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (A = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (N) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = h;
      }
      var D = h;
      h = L;
      try {
        return N();
      } finally {
        h = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, L) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var D = h;
      h = N;
      try {
        return L();
      } finally {
        h = D;
      }
    }),
    (e.unstable_scheduleCallback = function (N, L, D) {
      var J = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? J + D : J))
          : (D = J),
        N)
      ) {
        case 1:
          var oe = -1;
          break;
        case 2:
          oe = 250;
          break;
        case 5:
          oe = 1073741823;
          break;
        case 4:
          oe = 1e4;
          break;
        default:
          oe = 5e3;
      }
      return (
        (oe = D + oe),
        (N = {
          id: c++,
          callback: L,
          priorityLevel: N,
          startTime: D,
          expirationTime: oe,
          sortIndex: -1,
        }),
        D > J
          ? ((N.sortIndex = D),
            t(u, N),
            n(l) === null &&
              N === n(u) &&
              (x ? (m(P), (P = -1)) : (x = !0), re(C, D - J)))
          : ((N.sortIndex = oe), t(l, N), v || y || ((v = !0), Vi(k))),
        N
      );
    }),
    (e.unstable_shouldYield = ee),
    (e.unstable_wrapCallback = function (N) {
      var L = h;
      return function () {
        var D = h;
        h = L;
        try {
          return N.apply(this, arguments);
        } finally {
          h = D;
        }
      };
    });
})(ep);
Zh.exports = ep;
var Wg = Zh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kg = S,
  De = Wg;
function E(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var tp = new Set(),
  Jr = {};
function Nn(e, t) {
  ir(e, t), ir(e + "Capture", t);
}
function ir(e, t) {
  for (Jr[e] = t, e = 0; e < t.length; e++) tp.add(t[e]);
}
var wt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  za = Object.prototype.hasOwnProperty,
  Gg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Xc = {},
  Yc = {};
function Qg(e) {
  return za.call(Yc, e)
    ? !0
    : za.call(Xc, e)
    ? !1
    : Gg.test(e)
    ? (Yc[e] = !0)
    : ((Xc[e] = !0), !1);
}
function Xg(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Yg(e, t, n, r) {
  if (t === null || typeof t > "u" || Xg(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function je(e, t, n, r, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    me[e] = new je(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  me[t] = new je(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  me[e] = new je(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  me[e] = new je(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    me[e] = new je(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  me[e] = new je(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  me[e] = new je(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  me[e] = new je(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  me[e] = new je(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var lu = /[\-:]([a-z])/g;
function uu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(lu, uu);
    me[t] = new je(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(lu, uu);
    me[t] = new je(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(lu, uu);
  me[t] = new je(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  me[e] = new je(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
me.xlinkHref = new je(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  me[e] = new je(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function cu(e, t, n, r) {
  var i = me.hasOwnProperty(t) ? me[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Yg(t, n, i, r) && (n = null),
    r || i === null
      ? Qg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Et = Kg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Bi = Symbol.for("react.element"),
  Dn = Symbol.for("react.portal"),
  zn = Symbol.for("react.fragment"),
  du = Symbol.for("react.strict_mode"),
  Va = Symbol.for("react.profiler"),
  np = Symbol.for("react.provider"),
  rp = Symbol.for("react.context"),
  fu = Symbol.for("react.forward_ref"),
  Oa = Symbol.for("react.suspense"),
  Ia = Symbol.for("react.suspense_list"),
  hu = Symbol.for("react.memo"),
  Rt = Symbol.for("react.lazy"),
  ip = Symbol.for("react.offscreen"),
  Jc = Symbol.iterator;
function wr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Jc && e[Jc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Q = Object.assign,
  Ho;
function Nr(e) {
  if (Ho === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ho = (t && t[1]) || "";
    }
  return (
    `
` +
    Ho +
    e
  );
}
var $o = !1;
function Wo(e, t) {
  if (!e || $o) return "";
  $o = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var l =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    ($o = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Nr(e) : "";
}
function Jg(e) {
  switch (e.tag) {
    case 5:
      return Nr(e.type);
    case 16:
      return Nr("Lazy");
    case 13:
      return Nr("Suspense");
    case 19:
      return Nr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Wo(e.type, !1)), e;
    case 11:
      return (e = Wo(e.type.render, !1)), e;
    case 1:
      return (e = Wo(e.type, !0)), e;
    default:
      return "";
  }
}
function Fa(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case zn:
      return "Fragment";
    case Dn:
      return "Portal";
    case Va:
      return "Profiler";
    case du:
      return "StrictMode";
    case Oa:
      return "Suspense";
    case Ia:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case rp:
        return (e.displayName || "Context") + ".Consumer";
      case np:
        return (e._context.displayName || "Context") + ".Provider";
      case fu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case hu:
        return (
          (t = e.displayName || null), t !== null ? t : Fa(e.type) || "Memo"
        );
      case Rt:
        (t = e._payload), (e = e._init);
        try {
          return Fa(e(t));
        } catch {}
    }
  return null;
}
function qg(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Fa(t);
    case 8:
      return t === du ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Gt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function sp(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Zg(e) {
  var t = sp(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ui(e) {
  e._valueTracker || (e._valueTracker = Zg(e));
}
function op(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = sp(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ps(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ba(e, t) {
  var n = t.checked;
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function qc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Gt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ap(e, t) {
  (t = t.checked), t != null && cu(e, "checked", t, !1);
}
function Ua(e, t) {
  ap(e, t);
  var n = Gt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ha(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ha(e, t.type, Gt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Zc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ha(e, t, n) {
  (t !== "number" || Ps(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Mr = Array.isArray;
function qn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Gt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function $a(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ed(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(E(92));
      if (Mr(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Gt(n) };
}
function lp(e, t) {
  var n = Gt(t.value),
    r = Gt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function td(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function up(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Wa(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? up(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Hi,
  cp = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Hi = Hi || document.createElement("div"),
          Hi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Hi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function qr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Vr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  ey = ["Webkit", "ms", "Moz", "O"];
Object.keys(Vr).forEach(function (e) {
  ey.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Vr[t] = Vr[e]);
  });
});
function dp(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Vr.hasOwnProperty(e) && Vr[e])
    ? ("" + t).trim()
    : t + "px";
}
function fp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = dp(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var ty = Q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ka(e, t) {
  if (t) {
    if (ty[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function Ga(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Qa = null;
function pu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Xa = null,
  Zn = null,
  er = null;
function nd(e) {
  if ((e = Ei(e))) {
    if (typeof Xa != "function") throw Error(E(280));
    var t = e.stateNode;
    t && ((t = yo(t)), Xa(e.stateNode, e.type, t));
  }
}
function hp(e) {
  Zn ? (er ? er.push(e) : (er = [e])) : (Zn = e);
}
function pp() {
  if (Zn) {
    var e = Zn,
      t = er;
    if (((er = Zn = null), nd(e), t)) for (e = 0; e < t.length; e++) nd(t[e]);
  }
}
function mp(e, t) {
  return e(t);
}
function gp() {}
var Ko = !1;
function yp(e, t, n) {
  if (Ko) return e(t, n);
  Ko = !0;
  try {
    return mp(e, t, n);
  } finally {
    (Ko = !1), (Zn !== null || er !== null) && (gp(), pp());
  }
}
function Zr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = yo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(E(231, t, typeof n));
  return n;
}
var Ya = !1;
if (wt)
  try {
    var Sr = {};
    Object.defineProperty(Sr, "passive", {
      get: function () {
        Ya = !0;
      },
    }),
      window.addEventListener("test", Sr, Sr),
      window.removeEventListener("test", Sr, Sr);
  } catch {
    Ya = !1;
  }
function ny(e, t, n, r, i, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Or = !1,
  js = null,
  Es = !1,
  Ja = null,
  ry = {
    onError: function (e) {
      (Or = !0), (js = e);
    },
  };
function iy(e, t, n, r, i, s, o, a, l) {
  (Or = !1), (js = null), ny.apply(ry, arguments);
}
function sy(e, t, n, r, i, s, o, a, l) {
  if ((iy.apply(this, arguments), Or)) {
    if (Or) {
      var u = js;
      (Or = !1), (js = null);
    } else throw Error(E(198));
    Es || ((Es = !0), (Ja = u));
  }
}
function Mn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function vp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function rd(e) {
  if (Mn(e) !== e) throw Error(E(188));
}
function oy(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Mn(e)), t === null)) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return rd(i), e;
        if (s === r) return rd(i), t;
        s = s.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (a === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (a === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function xp(e) {
  return (e = oy(e)), e !== null ? wp(e) : null;
}
function wp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = wp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Sp = De.unstable_scheduleCallback,
  id = De.unstable_cancelCallback,
  ay = De.unstable_shouldYield,
  ly = De.unstable_requestPaint,
  Z = De.unstable_now,
  uy = De.unstable_getCurrentPriorityLevel,
  mu = De.unstable_ImmediatePriority,
  Cp = De.unstable_UserBlockingPriority,
  Ts = De.unstable_NormalPriority,
  cy = De.unstable_LowPriority,
  kp = De.unstable_IdlePriority,
  ho = null,
  lt = null;
function dy(e) {
  if (lt && typeof lt.onCommitFiberRoot == "function")
    try {
      lt.onCommitFiberRoot(ho, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var nt = Math.clz32 ? Math.clz32 : py,
  fy = Math.log,
  hy = Math.LN2;
function py(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((fy(e) / hy) | 0)) | 0;
}
var $i = 64,
  Wi = 4194304;
function Rr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function bs(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = Rr(a)) : ((s &= o), s !== 0 && (r = Rr(s)));
  } else (o = n & ~i), o !== 0 ? (r = Rr(o)) : s !== 0 && (r = Rr(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - nt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function my(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function gy(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - nt(s),
      a = 1 << o,
      l = i[o];
    l === -1
      ? (!(a & n) || a & r) && (i[o] = my(a, t))
      : l <= t && (e.expiredLanes |= a),
      (s &= ~a);
  }
}
function qa(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Pp() {
  var e = $i;
  return ($i <<= 1), !($i & 4194240) && ($i = 64), e;
}
function Go(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Pi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - nt(t)),
    (e[t] = n);
}
function yy(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - nt(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function gu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - nt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var O = 0;
function jp(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ep,
  yu,
  Tp,
  bp,
  Np,
  Za = !1,
  Ki = [],
  Ot = null,
  It = null,
  Ft = null,
  ei = new Map(),
  ti = new Map(),
  At = [],
  vy =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function sd(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ot = null;
      break;
    case "dragenter":
    case "dragleave":
      It = null;
      break;
    case "mouseover":
    case "mouseout":
      Ft = null;
      break;
    case "pointerover":
    case "pointerout":
      ei.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ti.delete(t.pointerId);
  }
}
function Cr(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = Ei(t)), t !== null && yu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function xy(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Ot = Cr(Ot, e, t, n, r, i)), !0;
    case "dragenter":
      return (It = Cr(It, e, t, n, r, i)), !0;
    case "mouseover":
      return (Ft = Cr(Ft, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return ei.set(s, Cr(ei.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), ti.set(s, Cr(ti.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Mp(e) {
  var t = hn(e.target);
  if (t !== null) {
    var n = Mn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = vp(n)), t !== null)) {
          (e.blockedOn = t),
            Np(e.priority, function () {
              Tp(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function cs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = el(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Qa = r), n.target.dispatchEvent(r), (Qa = null);
    } else return (t = Ei(n)), t !== null && yu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function od(e, t, n) {
  cs(e) && n.delete(t);
}
function wy() {
  (Za = !1),
    Ot !== null && cs(Ot) && (Ot = null),
    It !== null && cs(It) && (It = null),
    Ft !== null && cs(Ft) && (Ft = null),
    ei.forEach(od),
    ti.forEach(od);
}
function kr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Za ||
      ((Za = !0),
      De.unstable_scheduleCallback(De.unstable_NormalPriority, wy)));
}
function ni(e) {
  function t(i) {
    return kr(i, e);
  }
  if (0 < Ki.length) {
    kr(Ki[0], e);
    for (var n = 1; n < Ki.length; n++) {
      var r = Ki[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ot !== null && kr(Ot, e),
      It !== null && kr(It, e),
      Ft !== null && kr(Ft, e),
      ei.forEach(t),
      ti.forEach(t),
      n = 0;
    n < At.length;
    n++
  )
    (r = At[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < At.length && ((n = At[0]), n.blockedOn === null); )
    Mp(n), n.blockedOn === null && At.shift();
}
var tr = Et.ReactCurrentBatchConfig,
  Ns = !0;
function Sy(e, t, n, r) {
  var i = O,
    s = tr.transition;
  tr.transition = null;
  try {
    (O = 1), vu(e, t, n, r);
  } finally {
    (O = i), (tr.transition = s);
  }
}
function Cy(e, t, n, r) {
  var i = O,
    s = tr.transition;
  tr.transition = null;
  try {
    (O = 4), vu(e, t, n, r);
  } finally {
    (O = i), (tr.transition = s);
  }
}
function vu(e, t, n, r) {
  if (Ns) {
    var i = el(e, t, n, r);
    if (i === null) ra(e, t, r, Ms, n), sd(e, r);
    else if (xy(i, e, t, n, r)) r.stopPropagation();
    else if ((sd(e, r), t & 4 && -1 < vy.indexOf(e))) {
      for (; i !== null; ) {
        var s = Ei(i);
        if (
          (s !== null && Ep(s),
          (s = el(e, t, n, r)),
          s === null && ra(e, t, r, Ms, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else ra(e, t, r, null, n);
  }
}
var Ms = null;
function el(e, t, n, r) {
  if (((Ms = null), (e = pu(r)), (e = hn(e)), e !== null))
    if (((t = Mn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = vp(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ms = e), null;
}
function Rp(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (uy()) {
        case mu:
          return 1;
        case Cp:
          return 4;
        case Ts:
        case cy:
          return 16;
        case kp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Dt = null,
  xu = null,
  ds = null;
function _p() {
  if (ds) return ds;
  var e,
    t = xu,
    n = t.length,
    r,
    i = "value" in Dt ? Dt.value : Dt.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (ds = i.slice(e, 1 < r ? 1 - r : void 0));
}
function fs(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Gi() {
  return !0;
}
function ad() {
  return !1;
}
function Fe(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Gi
        : ad),
      (this.isPropagationStopped = ad),
      this
    );
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Gi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Gi));
      },
      persist: function () {},
      isPersistent: Gi,
    }),
    t
  );
}
var gr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  wu = Fe(gr),
  ji = Q({}, gr, { view: 0, detail: 0 }),
  ky = Fe(ji),
  Qo,
  Xo,
  Pr,
  po = Q({}, ji, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Su,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Pr &&
            (Pr && e.type === "mousemove"
              ? ((Qo = e.screenX - Pr.screenX), (Xo = e.screenY - Pr.screenY))
              : (Xo = Qo = 0),
            (Pr = e)),
          Qo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Xo;
    },
  }),
  ld = Fe(po),
  Py = Q({}, po, { dataTransfer: 0 }),
  jy = Fe(Py),
  Ey = Q({}, ji, { relatedTarget: 0 }),
  Yo = Fe(Ey),
  Ty = Q({}, gr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  by = Fe(Ty),
  Ny = Q({}, gr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  My = Fe(Ny),
  Ry = Q({}, gr, { data: 0 }),
  ud = Fe(Ry),
  _y = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Ay = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Ly = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Dy(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ly[e]) ? !!t[e] : !1;
}
function Su() {
  return Dy;
}
var zy = Q({}, ji, {
    key: function (e) {
      if (e.key) {
        var t = _y[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = fs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Ay[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Su,
    charCode: function (e) {
      return e.type === "keypress" ? fs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? fs(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Vy = Fe(zy),
  Oy = Q({}, po, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  cd = Fe(Oy),
  Iy = Q({}, ji, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Su,
  }),
  Fy = Fe(Iy),
  By = Q({}, gr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Uy = Fe(By),
  Hy = Q({}, po, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  $y = Fe(Hy),
  Wy = [9, 13, 27, 32],
  Cu = wt && "CompositionEvent" in window,
  Ir = null;
wt && "documentMode" in document && (Ir = document.documentMode);
var Ky = wt && "TextEvent" in window && !Ir,
  Ap = wt && (!Cu || (Ir && 8 < Ir && 11 >= Ir)),
  dd = " ",
  fd = !1;
function Lp(e, t) {
  switch (e) {
    case "keyup":
      return Wy.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Dp(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Vn = !1;
function Gy(e, t) {
  switch (e) {
    case "compositionend":
      return Dp(t);
    case "keypress":
      return t.which !== 32 ? null : ((fd = !0), dd);
    case "textInput":
      return (e = t.data), e === dd && fd ? null : e;
    default:
      return null;
  }
}
function Qy(e, t) {
  if (Vn)
    return e === "compositionend" || (!Cu && Lp(e, t))
      ? ((e = _p()), (ds = xu = Dt = null), (Vn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ap && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Xy = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function hd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Xy[e.type] : t === "textarea";
}
function zp(e, t, n, r) {
  hp(r),
    (t = Rs(t, "onChange")),
    0 < t.length &&
      ((n = new wu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Fr = null,
  ri = null;
function Yy(e) {
  Gp(e, 0);
}
function mo(e) {
  var t = Fn(e);
  if (op(t)) return e;
}
function Jy(e, t) {
  if (e === "change") return t;
}
var Vp = !1;
if (wt) {
  var Jo;
  if (wt) {
    var qo = "oninput" in document;
    if (!qo) {
      var pd = document.createElement("div");
      pd.setAttribute("oninput", "return;"),
        (qo = typeof pd.oninput == "function");
    }
    Jo = qo;
  } else Jo = !1;
  Vp = Jo && (!document.documentMode || 9 < document.documentMode);
}
function md() {
  Fr && (Fr.detachEvent("onpropertychange", Op), (ri = Fr = null));
}
function Op(e) {
  if (e.propertyName === "value" && mo(ri)) {
    var t = [];
    zp(t, ri, e, pu(e)), yp(Yy, t);
  }
}
function qy(e, t, n) {
  e === "focusin"
    ? (md(), (Fr = t), (ri = n), Fr.attachEvent("onpropertychange", Op))
    : e === "focusout" && md();
}
function Zy(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return mo(ri);
}
function ev(e, t) {
  if (e === "click") return mo(t);
}
function tv(e, t) {
  if (e === "input" || e === "change") return mo(t);
}
function nv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var it = typeof Object.is == "function" ? Object.is : nv;
function ii(e, t) {
  if (it(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!za.call(t, i) || !it(e[i], t[i])) return !1;
  }
  return !0;
}
function gd(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function yd(e, t) {
  var n = gd(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = gd(n);
  }
}
function Ip(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ip(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Fp() {
  for (var e = window, t = Ps(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ps(e.document);
  }
  return t;
}
function ku(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function rv(e) {
  var t = Fp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ip(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ku(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = yd(n, s));
        var o = yd(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var iv = wt && "documentMode" in document && 11 >= document.documentMode,
  On = null,
  tl = null,
  Br = null,
  nl = !1;
function vd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  nl ||
    On == null ||
    On !== Ps(r) ||
    ((r = On),
    "selectionStart" in r && ku(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Br && ii(Br, r)) ||
      ((Br = r),
      (r = Rs(tl, "onSelect")),
      0 < r.length &&
        ((t = new wu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = On))));
}
function Qi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var In = {
    animationend: Qi("Animation", "AnimationEnd"),
    animationiteration: Qi("Animation", "AnimationIteration"),
    animationstart: Qi("Animation", "AnimationStart"),
    transitionend: Qi("Transition", "TransitionEnd"),
  },
  Zo = {},
  Bp = {};
wt &&
  ((Bp = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete In.animationend.animation,
    delete In.animationiteration.animation,
    delete In.animationstart.animation),
  "TransitionEvent" in window || delete In.transitionend.transition);
function go(e) {
  if (Zo[e]) return Zo[e];
  if (!In[e]) return e;
  var t = In[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Bp) return (Zo[e] = t[n]);
  return e;
}
var Up = go("animationend"),
  Hp = go("animationiteration"),
  $p = go("animationstart"),
  Wp = go("transitionend"),
  Kp = new Map(),
  xd =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function qt(e, t) {
  Kp.set(e, t), Nn(t, [e]);
}
for (var ea = 0; ea < xd.length; ea++) {
  var ta = xd[ea],
    sv = ta.toLowerCase(),
    ov = ta[0].toUpperCase() + ta.slice(1);
  qt(sv, "on" + ov);
}
qt(Up, "onAnimationEnd");
qt(Hp, "onAnimationIteration");
qt($p, "onAnimationStart");
qt("dblclick", "onDoubleClick");
qt("focusin", "onFocus");
qt("focusout", "onBlur");
qt(Wp, "onTransitionEnd");
ir("onMouseEnter", ["mouseout", "mouseover"]);
ir("onMouseLeave", ["mouseout", "mouseover"]);
ir("onPointerEnter", ["pointerout", "pointerover"]);
ir("onPointerLeave", ["pointerout", "pointerover"]);
Nn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Nn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Nn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Nn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Nn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Nn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var _r =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  av = new Set("cancel close invalid load scroll toggle".split(" ").concat(_r));
function wd(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), sy(r, t, void 0, e), (e.currentTarget = null);
}
function Gp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
          wd(i, a, u), (s = l);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          wd(i, a, u), (s = l);
        }
    }
  }
  if (Es) throw ((e = Ja), (Es = !1), (Ja = null), e);
}
function B(e, t) {
  var n = t[al];
  n === void 0 && (n = t[al] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Qp(t, e, 2, !1), n.add(r));
}
function na(e, t, n) {
  var r = 0;
  t && (r |= 4), Qp(n, e, r, t);
}
var Xi = "_reactListening" + Math.random().toString(36).slice(2);
function si(e) {
  if (!e[Xi]) {
    (e[Xi] = !0),
      tp.forEach(function (n) {
        n !== "selectionchange" && (av.has(n) || na(n, !1, e), na(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Xi] || ((t[Xi] = !0), na("selectionchange", !1, t));
  }
}
function Qp(e, t, n, r) {
  switch (Rp(t)) {
    case 1:
      var i = Sy;
      break;
    case 4:
      i = Cy;
      break;
    default:
      i = vu;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Ya ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function ra(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = hn(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  yp(function () {
    var u = s,
      c = pu(n),
      f = [];
    e: {
      var h = Kp.get(e);
      if (h !== void 0) {
        var y = wu,
          v = e;
        switch (e) {
          case "keypress":
            if (fs(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Vy;
            break;
          case "focusin":
            (v = "focus"), (y = Yo);
            break;
          case "focusout":
            (v = "blur"), (y = Yo);
            break;
          case "beforeblur":
          case "afterblur":
            y = Yo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = ld;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = jy;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Fy;
            break;
          case Up:
          case Hp:
          case $p:
            y = by;
            break;
          case Wp:
            y = Uy;
            break;
          case "scroll":
            y = ky;
            break;
          case "wheel":
            y = $y;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = My;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = cd;
        }
        var x = (t & 4) !== 0,
          w = !x && e === "scroll",
          m = x ? (h !== null ? h + "Capture" : null) : h;
        x = [];
        for (var p = u, g; p !== null; ) {
          g = p;
          var C = g.stateNode;
          if (
            (g.tag === 5 &&
              C !== null &&
              ((g = C),
              m !== null && ((C = Zr(p, m)), C != null && x.push(oi(p, C, g)))),
            w)
          )
            break;
          p = p.return;
        }
        0 < x.length &&
          ((h = new y(h, v, null, n, c)), f.push({ event: h, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Qa &&
            (v = n.relatedTarget || n.fromElement) &&
            (hn(v) || v[St]))
        )
          break e;
        if (
          (y || h) &&
          ((h =
            c.window === c
              ? c
              : (h = c.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          y
            ? ((v = n.relatedTarget || n.toElement),
              (y = u),
              (v = v ? hn(v) : null),
              v !== null &&
                ((w = Mn(v)), v !== w || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((y = null), (v = u)),
          y !== v)
        ) {
          if (
            ((x = ld),
            (C = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = cd),
              (C = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (w = y == null ? h : Fn(y)),
            (g = v == null ? h : Fn(v)),
            (h = new x(C, p + "leave", y, n, c)),
            (h.target = w),
            (h.relatedTarget = g),
            (C = null),
            hn(c) === u &&
              ((x = new x(m, p + "enter", v, n, c)),
              (x.target = g),
              (x.relatedTarget = w),
              (C = x)),
            (w = C),
            y && v)
          )
            t: {
              for (x = y, m = v, p = 0, g = x; g; g = Ln(g)) p++;
              for (g = 0, C = m; C; C = Ln(C)) g++;
              for (; 0 < p - g; ) (x = Ln(x)), p--;
              for (; 0 < g - p; ) (m = Ln(m)), g--;
              for (; p--; ) {
                if (x === m || (m !== null && x === m.alternate)) break t;
                (x = Ln(x)), (m = Ln(m));
              }
              x = null;
            }
          else x = null;
          y !== null && Sd(f, h, y, x, !1),
            v !== null && w !== null && Sd(f, w, v, x, !0);
        }
      }
      e: {
        if (
          ((h = u ? Fn(u) : window),
          (y = h.nodeName && h.nodeName.toLowerCase()),
          y === "select" || (y === "input" && h.type === "file"))
        )
          var k = Jy;
        else if (hd(h))
          if (Vp) k = tv;
          else {
            k = Zy;
            var j = qy;
          }
        else
          (y = h.nodeName) &&
            y.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (k = ev);
        if (k && (k = k(e, u))) {
          zp(f, k, n, c);
          break e;
        }
        j && j(e, h, u),
          e === "focusout" &&
            (j = h._wrapperState) &&
            j.controlled &&
            h.type === "number" &&
            Ha(h, "number", h.value);
      }
      switch (((j = u ? Fn(u) : window), e)) {
        case "focusin":
          (hd(j) || j.contentEditable === "true") &&
            ((On = j), (tl = u), (Br = null));
          break;
        case "focusout":
          Br = tl = On = null;
          break;
        case "mousedown":
          nl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (nl = !1), vd(f, n, c);
          break;
        case "selectionchange":
          if (iv) break;
        case "keydown":
        case "keyup":
          vd(f, n, c);
      }
      var T;
      if (Cu)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Vn
          ? Lp(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (Ap &&
          n.locale !== "ko" &&
          (Vn || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Vn && (T = _p())
            : ((Dt = c),
              (xu = "value" in Dt ? Dt.value : Dt.textContent),
              (Vn = !0))),
        (j = Rs(u, P)),
        0 < j.length &&
          ((P = new ud(P, e, null, n, c)),
          f.push({ event: P, listeners: j }),
          T ? (P.data = T) : ((T = Dp(n)), T !== null && (P.data = T)))),
        (T = Ky ? Gy(e, n) : Qy(e, n)) &&
          ((u = Rs(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new ud("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = T)));
    }
    Gp(f, t);
  });
}
function oi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Rs(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Zr(e, n)),
      s != null && r.unshift(oi(e, s, i)),
      (s = Zr(e, t)),
      s != null && r.push(oi(e, s, i))),
      (e = e.return);
  }
  return r;
}
function Ln(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Sd(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = Zr(n, s)), l != null && o.unshift(oi(n, l, a)))
        : i || ((l = Zr(n, s)), l != null && o.push(oi(n, l, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var lv = /\r\n?/g,
  uv = /\u0000|\uFFFD/g;
function Cd(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      lv,
      `
`
    )
    .replace(uv, "");
}
function Yi(e, t, n) {
  if (((t = Cd(t)), Cd(e) !== t && n)) throw Error(E(425));
}
function _s() {}
var rl = null,
  il = null;
function sl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ol = typeof setTimeout == "function" ? setTimeout : void 0,
  cv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  kd = typeof Promise == "function" ? Promise : void 0,
  dv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof kd < "u"
      ? function (e) {
          return kd.resolve(null).then(e).catch(fv);
        }
      : ol;
function fv(e) {
  setTimeout(function () {
    throw e;
  });
}
function ia(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), ni(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  ni(t);
}
function Bt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Pd(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var yr = Math.random().toString(36).slice(2),
  at = "__reactFiber$" + yr,
  ai = "__reactProps$" + yr,
  St = "__reactContainer$" + yr,
  al = "__reactEvents$" + yr,
  hv = "__reactListeners$" + yr,
  pv = "__reactHandles$" + yr;
function hn(e) {
  var t = e[at];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[St] || n[at])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Pd(e); e !== null; ) {
          if ((n = e[at])) return n;
          e = Pd(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ei(e) {
  return (
    (e = e[at] || e[St]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Fn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function yo(e) {
  return e[ai] || null;
}
var ll = [],
  Bn = -1;
function Zt(e) {
  return { current: e };
}
function U(e) {
  0 > Bn || ((e.current = ll[Bn]), (ll[Bn] = null), Bn--);
}
function F(e, t) {
  Bn++, (ll[Bn] = e.current), (e.current = t);
}
var Qt = {},
  Se = Zt(Qt),
  be = Zt(!1),
  Sn = Qt;
function sr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Qt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ne(e) {
  return (e = e.childContextTypes), e != null;
}
function As() {
  U(be), U(Se);
}
function jd(e, t, n) {
  if (Se.current !== Qt) throw Error(E(168));
  F(Se, t), F(be, n);
}
function Xp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(E(108, qg(e) || "Unknown", i));
  return Q({}, n, r);
}
function Ls(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Qt),
    (Sn = Se.current),
    F(Se, e),
    F(be, be.current),
    !0
  );
}
function Ed(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n
    ? ((e = Xp(e, t, Sn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(be),
      U(Se),
      F(Se, e))
    : U(be),
    F(be, n);
}
var ht = null,
  vo = !1,
  sa = !1;
function Yp(e) {
  ht === null ? (ht = [e]) : ht.push(e);
}
function mv(e) {
  (vo = !0), Yp(e);
}
function en() {
  if (!sa && ht !== null) {
    sa = !0;
    var e = 0,
      t = O;
    try {
      var n = ht;
      for (O = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ht = null), (vo = !1);
    } catch (i) {
      throw (ht !== null && (ht = ht.slice(e + 1)), Sp(mu, en), i);
    } finally {
      (O = t), (sa = !1);
    }
  }
  return null;
}
var Un = [],
  Hn = 0,
  Ds = null,
  zs = 0,
  He = [],
  $e = 0,
  Cn = null,
  pt = 1,
  mt = "";
function ln(e, t) {
  (Un[Hn++] = zs), (Un[Hn++] = Ds), (Ds = e), (zs = t);
}
function Jp(e, t, n) {
  (He[$e++] = pt), (He[$e++] = mt), (He[$e++] = Cn), (Cn = e);
  var r = pt;
  e = mt;
  var i = 32 - nt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - nt(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (pt = (1 << (32 - nt(t) + i)) | (n << i) | r),
      (mt = s + e);
  } else (pt = (1 << s) | (n << i) | r), (mt = e);
}
function Pu(e) {
  e.return !== null && (ln(e, 1), Jp(e, 1, 0));
}
function ju(e) {
  for (; e === Ds; )
    (Ds = Un[--Hn]), (Un[Hn] = null), (zs = Un[--Hn]), (Un[Hn] = null);
  for (; e === Cn; )
    (Cn = He[--$e]),
      (He[$e] = null),
      (mt = He[--$e]),
      (He[$e] = null),
      (pt = He[--$e]),
      (He[$e] = null);
}
var Ae = null,
  _e = null,
  $ = !1,
  Ze = null;
function qp(e, t) {
  var n = We(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Td(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ae = e), (_e = Bt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ae = e), (_e = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Cn !== null ? { id: pt, overflow: mt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = We(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ae = e),
            (_e = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ul(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function cl(e) {
  if ($) {
    var t = _e;
    if (t) {
      var n = t;
      if (!Td(e, t)) {
        if (ul(e)) throw Error(E(418));
        t = Bt(n.nextSibling);
        var r = Ae;
        t && Td(e, t)
          ? qp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (Ae = e));
      }
    } else {
      if (ul(e)) throw Error(E(418));
      (e.flags = (e.flags & -4097) | 2), ($ = !1), (Ae = e);
    }
  }
}
function bd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ae = e;
}
function Ji(e) {
  if (e !== Ae) return !1;
  if (!$) return bd(e), ($ = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !sl(e.type, e.memoizedProps))),
    t && (t = _e))
  ) {
    if (ul(e)) throw (Zp(), Error(E(418)));
    for (; t; ) qp(e, t), (t = Bt(t.nextSibling));
  }
  if ((bd(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              _e = Bt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      _e = null;
    }
  } else _e = Ae ? Bt(e.stateNode.nextSibling) : null;
  return !0;
}
function Zp() {
  for (var e = _e; e; ) e = Bt(e.nextSibling);
}
function or() {
  (_e = Ae = null), ($ = !1);
}
function Eu(e) {
  Ze === null ? (Ze = [e]) : Ze.push(e);
}
var gv = Et.ReactCurrentBatchConfig;
function jr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var a = i.refs;
            o === null ? delete a[s] : (a[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function qi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      E(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Nd(e) {
  var t = e._init;
  return t(e._payload);
}
function em(e) {
  function t(m, p) {
    if (e) {
      var g = m.deletions;
      g === null ? ((m.deletions = [p]), (m.flags |= 16)) : g.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function i(m, p) {
    return (m = Wt(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function s(m, p, g) {
    return (
      (m.index = g),
      e
        ? ((g = m.alternate),
          g !== null
            ? ((g = g.index), g < p ? ((m.flags |= 2), p) : g)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function o(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, p, g, C) {
    return p === null || p.tag !== 6
      ? ((p = fa(g, m.mode, C)), (p.return = m), p)
      : ((p = i(p, g)), (p.return = m), p);
  }
  function l(m, p, g, C) {
    var k = g.type;
    return k === zn
      ? c(m, p, g.props.children, C, g.key)
      : p !== null &&
        (p.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === Rt &&
            Nd(k) === p.type))
      ? ((C = i(p, g.props)), (C.ref = jr(m, p, g)), (C.return = m), C)
      : ((C = xs(g.type, g.key, g.props, null, m.mode, C)),
        (C.ref = jr(m, p, g)),
        (C.return = m),
        C);
  }
  function u(m, p, g, C) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== g.containerInfo ||
      p.stateNode.implementation !== g.implementation
      ? ((p = ha(g, m.mode, C)), (p.return = m), p)
      : ((p = i(p, g.children || [])), (p.return = m), p);
  }
  function c(m, p, g, C, k) {
    return p === null || p.tag !== 7
      ? ((p = vn(g, m.mode, C, k)), (p.return = m), p)
      : ((p = i(p, g)), (p.return = m), p);
  }
  function f(m, p, g) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = fa("" + p, m.mode, g)), (p.return = m), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Bi:
          return (
            (g = xs(p.type, p.key, p.props, null, m.mode, g)),
            (g.ref = jr(m, null, p)),
            (g.return = m),
            g
          );
        case Dn:
          return (p = ha(p, m.mode, g)), (p.return = m), p;
        case Rt:
          var C = p._init;
          return f(m, C(p._payload), g);
      }
      if (Mr(p) || wr(p))
        return (p = vn(p, m.mode, g, null)), (p.return = m), p;
      qi(m, p);
    }
    return null;
  }
  function h(m, p, g, C) {
    var k = p !== null ? p.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return k !== null ? null : a(m, p, "" + g, C);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Bi:
          return g.key === k ? l(m, p, g, C) : null;
        case Dn:
          return g.key === k ? u(m, p, g, C) : null;
        case Rt:
          return (k = g._init), h(m, p, k(g._payload), C);
      }
      if (Mr(g) || wr(g)) return k !== null ? null : c(m, p, g, C, null);
      qi(m, g);
    }
    return null;
  }
  function y(m, p, g, C, k) {
    if ((typeof C == "string" && C !== "") || typeof C == "number")
      return (m = m.get(g) || null), a(p, m, "" + C, k);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case Bi:
          return (m = m.get(C.key === null ? g : C.key) || null), l(p, m, C, k);
        case Dn:
          return (m = m.get(C.key === null ? g : C.key) || null), u(p, m, C, k);
        case Rt:
          var j = C._init;
          return y(m, p, g, j(C._payload), k);
      }
      if (Mr(C) || wr(C)) return (m = m.get(g) || null), c(p, m, C, k, null);
      qi(p, C);
    }
    return null;
  }
  function v(m, p, g, C) {
    for (
      var k = null, j = null, T = p, P = (p = 0), A = null;
      T !== null && P < g.length;
      P++
    ) {
      T.index > P ? ((A = T), (T = null)) : (A = T.sibling);
      var R = h(m, T, g[P], C);
      if (R === null) {
        T === null && (T = A);
        break;
      }
      e && T && R.alternate === null && t(m, T),
        (p = s(R, p, P)),
        j === null ? (k = R) : (j.sibling = R),
        (j = R),
        (T = A);
    }
    if (P === g.length) return n(m, T), $ && ln(m, P), k;
    if (T === null) {
      for (; P < g.length; P++)
        (T = f(m, g[P], C)),
          T !== null &&
            ((p = s(T, p, P)), j === null ? (k = T) : (j.sibling = T), (j = T));
      return $ && ln(m, P), k;
    }
    for (T = r(m, T); P < g.length; P++)
      (A = y(T, m, P, g[P], C)),
        A !== null &&
          (e && A.alternate !== null && T.delete(A.key === null ? P : A.key),
          (p = s(A, p, P)),
          j === null ? (k = A) : (j.sibling = A),
          (j = A));
    return (
      e &&
        T.forEach(function (ee) {
          return t(m, ee);
        }),
      $ && ln(m, P),
      k
    );
  }
  function x(m, p, g, C) {
    var k = wr(g);
    if (typeof k != "function") throw Error(E(150));
    if (((g = k.call(g)), g == null)) throw Error(E(151));
    for (
      var j = (k = null), T = p, P = (p = 0), A = null, R = g.next();
      T !== null && !R.done;
      P++, R = g.next()
    ) {
      T.index > P ? ((A = T), (T = null)) : (A = T.sibling);
      var ee = h(m, T, R.value, C);
      if (ee === null) {
        T === null && (T = A);
        break;
      }
      e && T && ee.alternate === null && t(m, T),
        (p = s(ee, p, P)),
        j === null ? (k = ee) : (j.sibling = ee),
        (j = ee),
        (T = A);
    }
    if (R.done) return n(m, T), $ && ln(m, P), k;
    if (T === null) {
      for (; !R.done; P++, R = g.next())
        (R = f(m, R.value, C)),
          R !== null &&
            ((p = s(R, p, P)), j === null ? (k = R) : (j.sibling = R), (j = R));
      return $ && ln(m, P), k;
    }
    for (T = r(m, T); !R.done; P++, R = g.next())
      (R = y(T, m, P, R.value, C)),
        R !== null &&
          (e && R.alternate !== null && T.delete(R.key === null ? P : R.key),
          (p = s(R, p, P)),
          j === null ? (k = R) : (j.sibling = R),
          (j = R));
    return (
      e &&
        T.forEach(function (Tt) {
          return t(m, Tt);
        }),
      $ && ln(m, P),
      k
    );
  }
  function w(m, p, g, C) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === zn &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case Bi:
          e: {
            for (var k = g.key, j = p; j !== null; ) {
              if (j.key === k) {
                if (((k = g.type), k === zn)) {
                  if (j.tag === 7) {
                    n(m, j.sibling),
                      (p = i(j, g.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  j.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === Rt &&
                    Nd(k) === j.type)
                ) {
                  n(m, j.sibling),
                    (p = i(j, g.props)),
                    (p.ref = jr(m, j, g)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, j);
                break;
              } else t(m, j);
              j = j.sibling;
            }
            g.type === zn
              ? ((p = vn(g.props.children, m.mode, C, g.key)),
                (p.return = m),
                (m = p))
              : ((C = xs(g.type, g.key, g.props, null, m.mode, C)),
                (C.ref = jr(m, p, g)),
                (C.return = m),
                (m = C));
          }
          return o(m);
        case Dn:
          e: {
            for (j = g.key; p !== null; ) {
              if (p.key === j)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === g.containerInfo &&
                  p.stateNode.implementation === g.implementation
                ) {
                  n(m, p.sibling),
                    (p = i(p, g.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            (p = ha(g, m.mode, C)), (p.return = m), (m = p);
          }
          return o(m);
        case Rt:
          return (j = g._init), w(m, p, j(g._payload), C);
      }
      if (Mr(g)) return v(m, p, g, C);
      if (wr(g)) return x(m, p, g, C);
      qi(m, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = i(p, g)), (p.return = m), (m = p))
          : (n(m, p), (p = fa(g, m.mode, C)), (p.return = m), (m = p)),
        o(m))
      : n(m, p);
  }
  return w;
}
var ar = em(!0),
  tm = em(!1),
  Vs = Zt(null),
  Os = null,
  $n = null,
  Tu = null;
function bu() {
  Tu = $n = Os = null;
}
function Nu(e) {
  var t = Vs.current;
  U(Vs), (e._currentValue = t);
}
function dl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function nr(e, t) {
  (Os = e),
    (Tu = $n = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Te = !0), (e.firstContext = null));
}
function Ge(e) {
  var t = e._currentValue;
  if (Tu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), $n === null)) {
      if (Os === null) throw Error(E(308));
      ($n = e), (Os.dependencies = { lanes: 0, firstContext: e });
    } else $n = $n.next = e;
  return t;
}
var pn = null;
function Mu(e) {
  pn === null ? (pn = [e]) : pn.push(e);
}
function nm(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Mu(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Ct(e, r)
  );
}
function Ct(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var _t = !1;
function Ru(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function rm(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function gt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ut(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), V & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Ct(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Mu(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Ct(e, n)
  );
}
function hs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), gu(e, n);
  }
}
function Md(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Is(e, t, n, r) {
  var i = e.updateQueue;
  _t = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), o === null ? (s = u) : (o.next = u), (o = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var f = i.baseState;
    (o = 0), (c = u = l = null), (a = s);
    do {
      var h = a.lane,
        y = a.eventTime;
      if ((r & h) === h) {
        c !== null &&
          (c = c.next =
            {
              eventTime: y,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            x = a;
          switch (((h = t), (y = n), x.tag)) {
            case 1:
              if (((v = x.payload), typeof v == "function")) {
                f = v.call(y, f, h);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = x.payload),
                (h = typeof v == "function" ? v.call(y, f, h) : v),
                h == null)
              )
                break e;
              f = Q({}, f, h);
              break e;
            case 2:
              _t = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = i.effects),
          h === null ? (i.effects = [a]) : h.push(a));
      } else
        (y = {
          eventTime: y,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = y), (l = f)) : (c = c.next = y),
          (o |= h);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (i.lastBaseUpdate = h),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (Pn |= o), (e.lanes = o), (e.memoizedState = f);
  }
}
function Rd(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(E(191, i));
        i.call(r);
      }
    }
}
var Ti = {},
  ut = Zt(Ti),
  li = Zt(Ti),
  ui = Zt(Ti);
function mn(e) {
  if (e === Ti) throw Error(E(174));
  return e;
}
function _u(e, t) {
  switch ((F(ui, t), F(li, e), F(ut, Ti), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Wa(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Wa(t, e));
  }
  U(ut), F(ut, t);
}
function lr() {
  U(ut), U(li), U(ui);
}
function im(e) {
  mn(ui.current);
  var t = mn(ut.current),
    n = Wa(t, e.type);
  t !== n && (F(li, e), F(ut, n));
}
function Au(e) {
  li.current === e && (U(ut), U(li));
}
var W = Zt(0);
function Fs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var oa = [];
function Lu() {
  for (var e = 0; e < oa.length; e++)
    oa[e]._workInProgressVersionPrimary = null;
  oa.length = 0;
}
var ps = Et.ReactCurrentDispatcher,
  aa = Et.ReactCurrentBatchConfig,
  kn = 0,
  G = null,
  ie = null,
  ae = null,
  Bs = !1,
  Ur = !1,
  ci = 0,
  yv = 0;
function ge() {
  throw Error(E(321));
}
function Du(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!it(e[n], t[n])) return !1;
  return !0;
}
function zu(e, t, n, r, i, s) {
  if (
    ((kn = s),
    (G = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ps.current = e === null || e.memoizedState === null ? Sv : Cv),
    (e = n(r, i)),
    Ur)
  ) {
    s = 0;
    do {
      if (((Ur = !1), (ci = 0), 25 <= s)) throw Error(E(301));
      (s += 1),
        (ae = ie = null),
        (t.updateQueue = null),
        (ps.current = kv),
        (e = n(r, i));
    } while (Ur);
  }
  if (
    ((ps.current = Us),
    (t = ie !== null && ie.next !== null),
    (kn = 0),
    (ae = ie = G = null),
    (Bs = !1),
    t)
  )
    throw Error(E(300));
  return e;
}
function Vu() {
  var e = ci !== 0;
  return (ci = 0), e;
}
function ot() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ae === null ? (G.memoizedState = ae = e) : (ae = ae.next = e), ae;
}
function Qe() {
  if (ie === null) {
    var e = G.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ie.next;
  var t = ae === null ? G.memoizedState : ae.next;
  if (t !== null) (ae = t), (ie = e);
  else {
    if (e === null) throw Error(E(310));
    (ie = e),
      (e = {
        memoizedState: ie.memoizedState,
        baseState: ie.baseState,
        baseQueue: ie.baseQueue,
        queue: ie.queue,
        next: null,
      }),
      ae === null ? (G.memoizedState = ae = e) : (ae = ae.next = e);
  }
  return ae;
}
function di(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function la(e) {
  var t = Qe(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = ie,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var a = (o = null),
      l = null,
      u = s;
    do {
      var c = u.lane;
      if ((kn & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (o = r)) : (l = l.next = f),
          (G.lanes |= c),
          (Pn |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? (o = r) : (l.next = a),
      it(r, t.memoizedState) || (Te = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (G.lanes |= s), (Pn |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ua(e) {
  var t = Qe(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    it(s, t.memoizedState) || (Te = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function sm() {}
function om(e, t) {
  var n = G,
    r = Qe(),
    i = t(),
    s = !it(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Te = !0)),
    (r = r.queue),
    Ou(um.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (ae !== null && ae.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      fi(9, lm.bind(null, n, r, i, t), void 0, null),
      le === null)
    )
      throw Error(E(349));
    kn & 30 || am(n, t, i);
  }
  return i;
}
function am(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function lm(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), cm(t) && dm(e);
}
function um(e, t, n) {
  return n(function () {
    cm(t) && dm(e);
  });
}
function cm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !it(e, n);
  } catch {
    return !0;
  }
}
function dm(e) {
  var t = Ct(e, 1);
  t !== null && rt(t, e, 1, -1);
}
function _d(e) {
  var t = ot();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: di,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = wv.bind(null, G, e)),
    [t.memoizedState, e]
  );
}
function fi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function fm() {
  return Qe().memoizedState;
}
function ms(e, t, n, r) {
  var i = ot();
  (G.flags |= e),
    (i.memoizedState = fi(1 | t, n, void 0, r === void 0 ? null : r));
}
function xo(e, t, n, r) {
  var i = Qe();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ie !== null) {
    var o = ie.memoizedState;
    if (((s = o.destroy), r !== null && Du(r, o.deps))) {
      i.memoizedState = fi(t, n, s, r);
      return;
    }
  }
  (G.flags |= e), (i.memoizedState = fi(1 | t, n, s, r));
}
function Ad(e, t) {
  return ms(8390656, 8, e, t);
}
function Ou(e, t) {
  return xo(2048, 8, e, t);
}
function hm(e, t) {
  return xo(4, 2, e, t);
}
function pm(e, t) {
  return xo(4, 4, e, t);
}
function mm(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function gm(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), xo(4, 4, mm.bind(null, t, e), n)
  );
}
function Iu() {}
function ym(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Du(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function vm(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Du(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function xm(e, t, n) {
  return kn & 21
    ? (it(n, t) || ((n = Pp()), (G.lanes |= n), (Pn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Te = !0)), (e.memoizedState = n));
}
function vv(e, t) {
  var n = O;
  (O = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = aa.transition;
  aa.transition = {};
  try {
    e(!1), t();
  } finally {
    (O = n), (aa.transition = r);
  }
}
function wm() {
  return Qe().memoizedState;
}
function xv(e, t, n) {
  var r = $t(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Sm(e))
  )
    Cm(t, n);
  else if (((n = nm(e, t, n, r)), n !== null)) {
    var i = ke();
    rt(n, e, r, i), km(n, t, r);
  }
}
function wv(e, t, n) {
  var r = $t(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Sm(e)) Cm(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), it(a, o))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), Mu(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = nm(e, t, i, r)),
      n !== null && ((i = ke()), rt(n, e, r, i), km(n, t, r));
  }
}
function Sm(e) {
  var t = e.alternate;
  return e === G || (t !== null && t === G);
}
function Cm(e, t) {
  Ur = Bs = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function km(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), gu(e, n);
  }
}
var Us = {
    readContext: Ge,
    useCallback: ge,
    useContext: ge,
    useEffect: ge,
    useImperativeHandle: ge,
    useInsertionEffect: ge,
    useLayoutEffect: ge,
    useMemo: ge,
    useReducer: ge,
    useRef: ge,
    useState: ge,
    useDebugValue: ge,
    useDeferredValue: ge,
    useTransition: ge,
    useMutableSource: ge,
    useSyncExternalStore: ge,
    useId: ge,
    unstable_isNewReconciler: !1,
  },
  Sv = {
    readContext: Ge,
    useCallback: function (e, t) {
      return (ot().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ge,
    useEffect: Ad,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ms(4194308, 4, mm.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ms(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ms(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ot();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = ot();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = xv.bind(null, G, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ot();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: _d,
    useDebugValue: Iu,
    useDeferredValue: function (e) {
      return (ot().memoizedState = e);
    },
    useTransition: function () {
      var e = _d(!1),
        t = e[0];
      return (e = vv.bind(null, e[1])), (ot().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = G,
        i = ot();
      if ($) {
        if (n === void 0) throw Error(E(407));
        n = n();
      } else {
        if (((n = t()), le === null)) throw Error(E(349));
        kn & 30 || am(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        Ad(um.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        fi(9, lm.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ot(),
        t = le.identifierPrefix;
      if ($) {
        var n = mt,
          r = pt;
        (n = (r & ~(1 << (32 - nt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ci++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = yv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Cv = {
    readContext: Ge,
    useCallback: ym,
    useContext: Ge,
    useEffect: Ou,
    useImperativeHandle: gm,
    useInsertionEffect: hm,
    useLayoutEffect: pm,
    useMemo: vm,
    useReducer: la,
    useRef: fm,
    useState: function () {
      return la(di);
    },
    useDebugValue: Iu,
    useDeferredValue: function (e) {
      var t = Qe();
      return xm(t, ie.memoizedState, e);
    },
    useTransition: function () {
      var e = la(di)[0],
        t = Qe().memoizedState;
      return [e, t];
    },
    useMutableSource: sm,
    useSyncExternalStore: om,
    useId: wm,
    unstable_isNewReconciler: !1,
  },
  kv = {
    readContext: Ge,
    useCallback: ym,
    useContext: Ge,
    useEffect: Ou,
    useImperativeHandle: gm,
    useInsertionEffect: hm,
    useLayoutEffect: pm,
    useMemo: vm,
    useReducer: ua,
    useRef: fm,
    useState: function () {
      return ua(di);
    },
    useDebugValue: Iu,
    useDeferredValue: function (e) {
      var t = Qe();
      return ie === null ? (t.memoizedState = e) : xm(t, ie.memoizedState, e);
    },
    useTransition: function () {
      var e = ua(di)[0],
        t = Qe().memoizedState;
      return [e, t];
    },
    useMutableSource: sm,
    useSyncExternalStore: om,
    useId: wm,
    unstable_isNewReconciler: !1,
  };
function Je(e, t) {
  if (e && e.defaultProps) {
    (t = Q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function fl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var wo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Mn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ke(),
      i = $t(e),
      s = gt(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = Ut(e, s, i)),
      t !== null && (rt(t, e, i, r), hs(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ke(),
      i = $t(e),
      s = gt(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Ut(e, s, i)),
      t !== null && (rt(t, e, i, r), hs(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ke(),
      r = $t(e),
      i = gt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Ut(e, i, r)),
      t !== null && (rt(t, e, r, n), hs(t, e, r));
  },
};
function Ld(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ii(n, r) || !ii(i, s)
      : !0
  );
}
function Pm(e, t, n) {
  var r = !1,
    i = Qt,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Ge(s))
      : ((i = Ne(t) ? Sn : Se.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? sr(e, i) : Qt)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = wo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Dd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && wo.enqueueReplaceState(t, t.state, null);
}
function hl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Ru(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = Ge(s))
    : ((s = Ne(t) ? Sn : Se.current), (i.context = sr(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (fl(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && wo.enqueueReplaceState(i, i.state, null),
      Is(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function ur(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Jg(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function ca(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function pl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Pv = typeof WeakMap == "function" ? WeakMap : Map;
function jm(e, t, n) {
  (n = gt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      $s || (($s = !0), (Pl = r)), pl(e, t);
    }),
    n
  );
}
function Em(e, t, n) {
  (n = gt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        pl(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        pl(e, t),
          typeof r != "function" &&
            (Ht === null ? (Ht = new Set([this])) : Ht.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function zd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Pv();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Ov.bind(null, e, t, n)), t.then(e, e));
}
function Vd(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Od(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = gt(-1, 1)), (t.tag = 2), Ut(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var jv = Et.ReactCurrentOwner,
  Te = !1;
function Ce(e, t, n, r) {
  t.child = e === null ? tm(t, null, n, r) : ar(t, e.child, n, r);
}
function Id(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    nr(t, i),
    (r = zu(e, t, n, r, s, i)),
    (n = Vu()),
    e !== null && !Te
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        kt(e, t, i))
      : ($ && n && Pu(t), (t.flags |= 1), Ce(e, t, r, i), t.child)
  );
}
function Fd(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Gu(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Tm(e, t, s, r, i))
      : ((e = xs(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ii), n(o, r) && e.ref === t.ref)
    )
      return kt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Wt(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Tm(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (ii(s, r) && e.ref === t.ref)
      if (((Te = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (Te = !0);
      else return (t.lanes = e.lanes), kt(e, t, i);
  }
  return ml(e, t, n, r, i);
}
function bm(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        F(Kn, Re),
        (Re |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          F(Kn, Re),
          (Re |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        F(Kn, Re),
        (Re |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      F(Kn, Re),
      (Re |= r);
  return Ce(e, t, i, n), t.child;
}
function Nm(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ml(e, t, n, r, i) {
  var s = Ne(n) ? Sn : Se.current;
  return (
    (s = sr(t, s)),
    nr(t, i),
    (n = zu(e, t, n, r, s, i)),
    (r = Vu()),
    e !== null && !Te
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        kt(e, t, i))
      : ($ && r && Pu(t), (t.flags |= 1), Ce(e, t, n, i), t.child)
  );
}
function Bd(e, t, n, r, i) {
  if (Ne(n)) {
    var s = !0;
    Ls(t);
  } else s = !1;
  if ((nr(t, i), t.stateNode === null))
    gs(e, t), Pm(t, n, r), hl(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Ge(u))
      : ((u = Ne(n) ? Sn : Se.current), (u = sr(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && Dd(t, o, r, u)),
      (_t = !1);
    var h = t.memoizedState;
    (o.state = h),
      Is(t, r, o, i),
      (l = t.memoizedState),
      a !== r || h !== l || be.current || _t
        ? (typeof c == "function" && (fl(t, n, c, r), (l = t.memoizedState)),
          (a = _t || Ld(t, n, a, r, h, l, u))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      rm(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Je(t.type, a)),
      (o.props = u),
      (f = t.pendingProps),
      (h = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Ge(l))
        : ((l = Ne(n) ? Sn : Se.current), (l = sr(t, l)));
    var y = n.getDerivedStateFromProps;
    (c =
      typeof y == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== f || h !== l) && Dd(t, o, r, l)),
      (_t = !1),
      (h = t.memoizedState),
      (o.state = h),
      Is(t, r, o, i);
    var v = t.memoizedState;
    a !== f || h !== v || be.current || _t
      ? (typeof y == "function" && (fl(t, n, y, r), (v = t.memoizedState)),
        (u = _t || Ld(t, n, u, r, h, v, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, v, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, v, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (o.props = r),
        (o.state = v),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return gl(e, t, n, r, s, i);
}
function gl(e, t, n, r, i, s) {
  Nm(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && Ed(t, n, !1), kt(e, t, s);
  (r = t.stateNode), (jv.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = ar(t, e.child, null, s)), (t.child = ar(t, null, a, s)))
      : Ce(e, t, a, s),
    (t.memoizedState = r.state),
    i && Ed(t, n, !0),
    t.child
  );
}
function Mm(e) {
  var t = e.stateNode;
  t.pendingContext
    ? jd(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && jd(e, t.context, !1),
    _u(e, t.containerInfo);
}
function Ud(e, t, n, r, i) {
  return or(), Eu(i), (t.flags |= 256), Ce(e, t, n, r), t.child;
}
var yl = { dehydrated: null, treeContext: null, retryLane: 0 };
function vl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Rm(e, t, n) {
  var r = t.pendingProps,
    i = W.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    F(W, i & 1),
    e === null)
  )
    return (
      cl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = ko(o, r, 0, null)),
              (e = vn(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = vl(n)),
              (t.memoizedState = yl),
              e)
            : Fu(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return Ev(e, t, o, r, a, i, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Wt(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = Wt(a, s)) : ((s = vn(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? vl(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = yl),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Wt(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Fu(e, t) {
  return (
    (t = ko({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Zi(e, t, n, r) {
  return (
    r !== null && Eu(r),
    ar(t, e.child, null, n),
    (e = Fu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Ev(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ca(Error(E(422)))), Zi(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = ko({ mode: "visible", children: r.children }, i, 0, null)),
        (s = vn(s, i, o, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && ar(t, e.child, null, o),
        (t.child.memoizedState = vl(o)),
        (t.memoizedState = yl),
        s);
  if (!(t.mode & 1)) return Zi(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error(E(419))), (r = ca(s, r, void 0)), Zi(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), Te || a)) {
    if (((r = le), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), Ct(e, i), rt(r, e, i, -1));
    }
    return Ku(), (r = ca(Error(E(421)))), Zi(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Iv.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (_e = Bt(i.nextSibling)),
      (Ae = t),
      ($ = !0),
      (Ze = null),
      e !== null &&
        ((He[$e++] = pt),
        (He[$e++] = mt),
        (He[$e++] = Cn),
        (pt = e.id),
        (mt = e.overflow),
        (Cn = t)),
      (t = Fu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Hd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), dl(e.return, t, n);
}
function da(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function _m(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((Ce(e, t, r.children, n), (r = W.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Hd(e, n, t);
        else if (e.tag === 19) Hd(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((F(W, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Fs(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          da(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Fs(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        da(t, !0, n, null, s);
        break;
      case "together":
        da(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function gs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function kt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Pn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Wt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Wt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Tv(e, t, n) {
  switch (t.tag) {
    case 3:
      Mm(t), or();
      break;
    case 5:
      im(t);
      break;
    case 1:
      Ne(t.type) && Ls(t);
      break;
    case 4:
      _u(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      F(Vs, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (F(W, W.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Rm(e, t, n)
          : (F(W, W.current & 1),
            (e = kt(e, t, n)),
            e !== null ? e.sibling : null);
      F(W, W.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return _m(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        F(W, W.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), bm(e, t, n);
  }
  return kt(e, t, n);
}
var Am, xl, Lm, Dm;
Am = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
xl = function () {};
Lm = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), mn(ut.current);
    var s = null;
    switch (n) {
      case "input":
        (i = Ba(e, i)), (r = Ba(e, r)), (s = []);
        break;
      case "select":
        (i = Q({}, i, { value: void 0 })),
          (r = Q({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = $a(e, i)), (r = $a(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = _s);
    }
    Ka(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Jr.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (s = s || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Jr.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && B("scroll", e),
                  s || a === l || (s = []))
                : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Dm = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Er(e, t) {
  if (!$)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ye(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function bv(e, t, n) {
  var r = t.pendingProps;
  switch ((ju(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ye(t), null;
    case 1:
      return Ne(t.type) && As(), ye(t), null;
    case 3:
      return (
        (r = t.stateNode),
        lr(),
        U(be),
        U(Se),
        Lu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ji(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ze !== null && (Tl(Ze), (Ze = null)))),
        xl(e, t),
        ye(t),
        null
      );
    case 5:
      Au(t);
      var i = mn(ui.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Lm(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return ye(t), null;
        }
        if (((e = mn(ut.current)), Ji(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[at] = t), (r[ai] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < _r.length; i++) B(_r[i], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B("error", r), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              qc(r, s), B("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                B("invalid", r);
              break;
            case "textarea":
              ed(r, s), B("invalid", r);
          }
          Ka(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Yi(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Yi(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Jr.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  B("scroll", r);
            }
          switch (n) {
            case "input":
              Ui(r), Zc(r, s, !0);
              break;
            case "textarea":
              Ui(r), td(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = _s);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = up(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[at] = t),
            (e[ai] = r),
            Am(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Ga(n, r)), n)) {
              case "dialog":
                B("cancel", e), B("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < _r.length; i++) B(_r[i], e);
                i = r;
                break;
              case "source":
                B("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                B("error", e), B("load", e), (i = r);
                break;
              case "details":
                B("toggle", e), (i = r);
                break;
              case "input":
                qc(e, r), (i = Ba(e, r)), B("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Q({}, r, { value: void 0 })),
                  B("invalid", e);
                break;
              case "textarea":
                ed(e, r), (i = $a(e, r)), B("invalid", e);
                break;
              default:
                i = r;
            }
            Ka(n, i), (a = i);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? fp(e, l)
                  : s === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && cp(e, l))
                  : s === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && qr(e, l)
                    : typeof l == "number" && qr(e, "" + l)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Jr.hasOwnProperty(s)
                      ? l != null && s === "onScroll" && B("scroll", e)
                      : l != null && cu(e, s, l, o));
              }
            switch (n) {
              case "input":
                Ui(e), Zc(e, r, !1);
                break;
              case "textarea":
                Ui(e), td(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Gt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? qn(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      qn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = _s);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ye(t), null;
    case 6:
      if (e && t.stateNode != null) Dm(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (((n = mn(ui.current)), mn(ut.current), Ji(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[at] = t),
            (s = r.nodeValue !== n) && ((e = Ae), e !== null))
          )
            switch (e.tag) {
              case 3:
                Yi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Yi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[at] = t),
            (t.stateNode = r);
      }
      return ye(t), null;
    case 13:
      if (
        (U(W),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && _e !== null && t.mode & 1 && !(t.flags & 128))
          Zp(), or(), (t.flags |= 98560), (s = !1);
        else if (((s = Ji(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(E(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(E(317));
            s[at] = t;
          } else
            or(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ye(t), (s = !1);
        } else Ze !== null && (Tl(Ze), (Ze = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || W.current & 1 ? se === 0 && (se = 3) : Ku())),
          t.updateQueue !== null && (t.flags |= 4),
          ye(t),
          null);
    case 4:
      return (
        lr(), xl(e, t), e === null && si(t.stateNode.containerInfo), ye(t), null
      );
    case 10:
      return Nu(t.type._context), ye(t), null;
    case 17:
      return Ne(t.type) && As(), ye(t), null;
    case 19:
      if ((U(W), (s = t.memoizedState), s === null)) return ye(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) Er(s, !1);
        else {
          if (se !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Fs(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Er(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return F(W, (W.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            Z() > cr &&
            ((t.flags |= 128), (r = !0), Er(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Fs(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Er(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !$)
            )
              return ye(t), null;
          } else
            2 * Z() - s.renderingStartTime > cr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Er(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = Z()),
          (t.sibling = null),
          (n = W.current),
          F(W, r ? (n & 1) | 2 : n & 1),
          t)
        : (ye(t), null);
    case 22:
    case 23:
      return (
        Wu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Re & 1073741824 && (ye(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ye(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function Nv(e, t) {
  switch ((ju(t), t.tag)) {
    case 1:
      return (
        Ne(t.type) && As(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        lr(),
        U(be),
        U(Se),
        Lu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Au(t), null;
    case 13:
      if ((U(W), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(E(340));
        or();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return U(W), null;
    case 4:
      return lr(), null;
    case 10:
      return Nu(t.type._context), null;
    case 22:
    case 23:
      return Wu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var es = !1,
  xe = !1,
  Mv = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function Wn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Y(e, t, r);
      }
    else n.current = null;
}
function wl(e, t, n) {
  try {
    n();
  } catch (r) {
    Y(e, t, r);
  }
}
var $d = !1;
function Rv(e, t) {
  if (((rl = Ns), (e = Fp()), ku(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            h = null;
          t: for (;;) {
            for (
              var y;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = o + i),
                f !== s || (r !== 0 && f.nodeType !== 3) || (l = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (y = f.firstChild) !== null;

            )
              (h = f), (f = y);
            for (;;) {
              if (f === e) break t;
              if (
                (h === n && ++u === i && (a = o),
                h === s && ++c === r && (l = o),
                (y = f.nextSibling) !== null)
              )
                break;
              (f = h), (h = f.parentNode);
            }
            f = y;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (il = { focusedElem: e, selectionRange: n }, Ns = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (M = e);
    else
      for (; M !== null; ) {
        t = M;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var x = v.memoizedProps,
                    w = v.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Je(t.type, x),
                      w
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (C) {
          Y(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (M = e);
          break;
        }
        M = t.return;
      }
  return (v = $d), ($d = !1), v;
}
function Hr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && wl(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function So(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Sl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function zm(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), zm(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[at], delete t[ai], delete t[al], delete t[hv], delete t[pv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Vm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Wd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Vm(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Cl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = _s));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Cl(e, t, n), e = e.sibling; e !== null; ) Cl(e, t, n), (e = e.sibling);
}
function kl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (kl(e, t, n), e = e.sibling; e !== null; ) kl(e, t, n), (e = e.sibling);
}
var de = null,
  qe = !1;
function bt(e, t, n) {
  for (n = n.child; n !== null; ) Om(e, t, n), (n = n.sibling);
}
function Om(e, t, n) {
  if (lt && typeof lt.onCommitFiberUnmount == "function")
    try {
      lt.onCommitFiberUnmount(ho, n);
    } catch {}
  switch (n.tag) {
    case 5:
      xe || Wn(n, t);
    case 6:
      var r = de,
        i = qe;
      (de = null),
        bt(e, t, n),
        (de = r),
        (qe = i),
        de !== null &&
          (qe
            ? ((e = de),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : de.removeChild(n.stateNode));
      break;
    case 18:
      de !== null &&
        (qe
          ? ((e = de),
            (n = n.stateNode),
            e.nodeType === 8
              ? ia(e.parentNode, n)
              : e.nodeType === 1 && ia(e, n),
            ni(e))
          : ia(de, n.stateNode));
      break;
    case 4:
      (r = de),
        (i = qe),
        (de = n.stateNode.containerInfo),
        (qe = !0),
        bt(e, t, n),
        (de = r),
        (qe = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !xe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && wl(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      bt(e, t, n);
      break;
    case 1:
      if (
        !xe &&
        (Wn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Y(n, t, a);
        }
      bt(e, t, n);
      break;
    case 21:
      bt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((xe = (r = xe) || n.memoizedState !== null), bt(e, t, n), (xe = r))
        : bt(e, t, n);
      break;
    default:
      bt(e, t, n);
  }
}
function Kd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Mv()),
      t.forEach(function (r) {
        var i = Fv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Xe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (de = a.stateNode), (qe = !1);
              break e;
            case 3:
              (de = a.stateNode.containerInfo), (qe = !0);
              break e;
            case 4:
              (de = a.stateNode.containerInfo), (qe = !0);
              break e;
          }
          a = a.return;
        }
        if (de === null) throw Error(E(160));
        Om(s, o, i), (de = null), (qe = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        Y(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Im(t, e), (t = t.sibling);
}
function Im(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Xe(t, e), st(e), r & 4)) {
        try {
          Hr(3, e, e.return), So(3, e);
        } catch (x) {
          Y(e, e.return, x);
        }
        try {
          Hr(5, e, e.return);
        } catch (x) {
          Y(e, e.return, x);
        }
      }
      break;
    case 1:
      Xe(t, e), st(e), r & 512 && n !== null && Wn(n, n.return);
      break;
    case 5:
      if (
        (Xe(t, e),
        st(e),
        r & 512 && n !== null && Wn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          qr(i, "");
        } catch (x) {
          Y(e, e.return, x);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && ap(i, s),
              Ga(a, o);
            var u = Ga(a, s);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                f = l[o + 1];
              c === "style"
                ? fp(i, f)
                : c === "dangerouslySetInnerHTML"
                ? cp(i, f)
                : c === "children"
                ? qr(i, f)
                : cu(i, c, f, u);
            }
            switch (a) {
              case "input":
                Ua(i, s);
                break;
              case "textarea":
                lp(i, s);
                break;
              case "select":
                var h = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var y = s.value;
                y != null
                  ? qn(i, !!s.multiple, y, !1)
                  : h !== !!s.multiple &&
                    (s.defaultValue != null
                      ? qn(i, !!s.multiple, s.defaultValue, !0)
                      : qn(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[ai] = s;
          } catch (x) {
            Y(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((Xe(t, e), st(e), r & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (x) {
          Y(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (Xe(t, e), st(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ni(t.containerInfo);
        } catch (x) {
          Y(e, e.return, x);
        }
      break;
    case 4:
      Xe(t, e), st(e);
      break;
    case 13:
      Xe(t, e),
        st(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Hu = Z())),
        r & 4 && Kd(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((xe = (u = xe) || c), Xe(t, e), (xe = u)) : Xe(t, e),
        st(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (M = e, c = e.child; c !== null; ) {
            for (f = M = c; M !== null; ) {
              switch (((h = M), (y = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Hr(4, h, h.return);
                  break;
                case 1:
                  Wn(h, h.return);
                  var v = h.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (x) {
                      Y(r, n, x);
                    }
                  }
                  break;
                case 5:
                  Wn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Qd(f);
                    continue;
                  }
              }
              y !== null ? ((y.return = h), (M = y)) : Qd(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = dp("display", o)));
              } catch (x) {
                Y(e, e.return, x);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (x) {
                Y(e, e.return, x);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Xe(t, e), st(e), r & 4 && Kd(e);
      break;
    case 21:
      break;
    default:
      Xe(t, e), st(e);
  }
}
function st(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Vm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (qr(i, ""), (r.flags &= -33));
          var s = Wd(e);
          kl(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = Wd(e);
          Cl(e, a, o);
          break;
        default:
          throw Error(E(161));
      }
    } catch (l) {
      Y(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function _v(e, t, n) {
  (M = e), Fm(e);
}
function Fm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var i = M,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || es;
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || xe;
        a = es;
        var u = xe;
        if (((es = o), (xe = l) && !u))
          for (M = i; M !== null; )
            (o = M),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Xd(i)
                : l !== null
                ? ((l.return = o), (M = l))
                : Xd(i);
        for (; s !== null; ) (M = s), Fm(s), (s = s.sibling);
        (M = i), (es = a), (xe = u);
      }
      Gd(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (M = s)) : Gd(e);
  }
}
function Gd(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              xe || So(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !xe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Je(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && Rd(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Rd(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && ni(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(E(163));
          }
        xe || (t.flags & 512 && Sl(t));
      } catch (h) {
        Y(t, t.return, h);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function Qd(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function Xd(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            So(4, t);
          } catch (l) {
            Y(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Y(t, i, l);
            }
          }
          var s = t.return;
          try {
            Sl(t);
          } catch (l) {
            Y(t, s, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Sl(t);
          } catch (l) {
            Y(t, o, l);
          }
      }
    } catch (l) {
      Y(t, t.return, l);
    }
    if (t === e) {
      M = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (M = a);
      break;
    }
    M = t.return;
  }
}
var Av = Math.ceil,
  Hs = Et.ReactCurrentDispatcher,
  Bu = Et.ReactCurrentOwner,
  Ke = Et.ReactCurrentBatchConfig,
  V = 0,
  le = null,
  te = null,
  pe = 0,
  Re = 0,
  Kn = Zt(0),
  se = 0,
  hi = null,
  Pn = 0,
  Co = 0,
  Uu = 0,
  $r = null,
  Ee = null,
  Hu = 0,
  cr = 1 / 0,
  ft = null,
  $s = !1,
  Pl = null,
  Ht = null,
  ts = !1,
  zt = null,
  Ws = 0,
  Wr = 0,
  jl = null,
  ys = -1,
  vs = 0;
function ke() {
  return V & 6 ? Z() : ys !== -1 ? ys : (ys = Z());
}
function $t(e) {
  return e.mode & 1
    ? V & 2 && pe !== 0
      ? pe & -pe
      : gv.transition !== null
      ? (vs === 0 && (vs = Pp()), vs)
      : ((e = O),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Rp(e.type))),
        e)
    : 1;
}
function rt(e, t, n, r) {
  if (50 < Wr) throw ((Wr = 0), (jl = null), Error(E(185)));
  Pi(e, n, r),
    (!(V & 2) || e !== le) &&
      (e === le && (!(V & 2) && (Co |= n), se === 4 && Lt(e, pe)),
      Me(e, r),
      n === 1 && V === 0 && !(t.mode & 1) && ((cr = Z() + 500), vo && en()));
}
function Me(e, t) {
  var n = e.callbackNode;
  gy(e, t);
  var r = bs(e, e === le ? pe : 0);
  if (r === 0)
    n !== null && id(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && id(n), t === 1))
      e.tag === 0 ? mv(Yd.bind(null, e)) : Yp(Yd.bind(null, e)),
        dv(function () {
          !(V & 6) && en();
        }),
        (n = null);
    else {
      switch (jp(r)) {
        case 1:
          n = mu;
          break;
        case 4:
          n = Cp;
          break;
        case 16:
          n = Ts;
          break;
        case 536870912:
          n = kp;
          break;
        default:
          n = Ts;
      }
      n = Qm(n, Bm.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Bm(e, t) {
  if (((ys = -1), (vs = 0), V & 6)) throw Error(E(327));
  var n = e.callbackNode;
  if (rr() && e.callbackNode !== n) return null;
  var r = bs(e, e === le ? pe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ks(e, r);
  else {
    t = r;
    var i = V;
    V |= 2;
    var s = Hm();
    (le !== e || pe !== t) && ((ft = null), (cr = Z() + 500), yn(e, t));
    do
      try {
        zv();
        break;
      } catch (a) {
        Um(e, a);
      }
    while (!0);
    bu(),
      (Hs.current = s),
      (V = i),
      te !== null ? (t = 0) : ((le = null), (pe = 0), (t = se));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = qa(e)), i !== 0 && ((r = i), (t = El(e, i)))), t === 1)
    )
      throw ((n = hi), yn(e, 0), Lt(e, r), Me(e, Z()), n);
    if (t === 6) Lt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Lv(i) &&
          ((t = Ks(e, r)),
          t === 2 && ((s = qa(e)), s !== 0 && ((r = s), (t = El(e, s)))),
          t === 1))
      )
        throw ((n = hi), yn(e, 0), Lt(e, r), Me(e, Z()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          un(e, Ee, ft);
          break;
        case 3:
          if (
            (Lt(e, r), (r & 130023424) === r && ((t = Hu + 500 - Z()), 10 < t))
          ) {
            if (bs(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              ke(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = ol(un.bind(null, e, Ee, ft), t);
            break;
          }
          un(e, Ee, ft);
          break;
        case 4:
          if ((Lt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - nt(r);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = Z() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Av(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ol(un.bind(null, e, Ee, ft), r);
            break;
          }
          un(e, Ee, ft);
          break;
        case 5:
          un(e, Ee, ft);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Me(e, Z()), e.callbackNode === n ? Bm.bind(null, e) : null;
}
function El(e, t) {
  var n = $r;
  return (
    e.current.memoizedState.isDehydrated && (yn(e, t).flags |= 256),
    (e = Ks(e, t)),
    e !== 2 && ((t = Ee), (Ee = n), t !== null && Tl(t)),
    e
  );
}
function Tl(e) {
  Ee === null ? (Ee = e) : Ee.push.apply(Ee, e);
}
function Lv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!it(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Lt(e, t) {
  for (
    t &= ~Uu,
      t &= ~Co,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - nt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Yd(e) {
  if (V & 6) throw Error(E(327));
  rr();
  var t = bs(e, 0);
  if (!(t & 1)) return Me(e, Z()), null;
  var n = Ks(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = qa(e);
    r !== 0 && ((t = r), (n = El(e, r)));
  }
  if (n === 1) throw ((n = hi), yn(e, 0), Lt(e, t), Me(e, Z()), n);
  if (n === 6) throw Error(E(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    un(e, Ee, ft),
    Me(e, Z()),
    null
  );
}
function $u(e, t) {
  var n = V;
  V |= 1;
  try {
    return e(t);
  } finally {
    (V = n), V === 0 && ((cr = Z() + 500), vo && en());
  }
}
function jn(e) {
  zt !== null && zt.tag === 0 && !(V & 6) && rr();
  var t = V;
  V |= 1;
  var n = Ke.transition,
    r = O;
  try {
    if (((Ke.transition = null), (O = 1), e)) return e();
  } finally {
    (O = r), (Ke.transition = n), (V = t), !(V & 6) && en();
  }
}
function Wu() {
  (Re = Kn.current), U(Kn);
}
function yn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), cv(n)), te !== null))
    for (n = te.return; n !== null; ) {
      var r = n;
      switch ((ju(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && As();
          break;
        case 3:
          lr(), U(be), U(Se), Lu();
          break;
        case 5:
          Au(r);
          break;
        case 4:
          lr();
          break;
        case 13:
          U(W);
          break;
        case 19:
          U(W);
          break;
        case 10:
          Nu(r.type._context);
          break;
        case 22:
        case 23:
          Wu();
      }
      n = n.return;
    }
  if (
    ((le = e),
    (te = e = Wt(e.current, null)),
    (pe = Re = t),
    (se = 0),
    (hi = null),
    (Uu = Co = Pn = 0),
    (Ee = $r = null),
    pn !== null)
  ) {
    for (t = 0; t < pn.length; t++)
      if (((n = pn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    pn = null;
  }
  return e;
}
function Um(e, t) {
  do {
    var n = te;
    try {
      if ((bu(), (ps.current = Us), Bs)) {
        for (var r = G.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Bs = !1;
      }
      if (
        ((kn = 0),
        (ae = ie = G = null),
        (Ur = !1),
        (ci = 0),
        (Bu.current = null),
        n === null || n.return === null)
      ) {
        (se = 1), (hi = t), (te = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          a = n,
          l = t;
        if (
          ((t = pe),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = c.alternate;
            h
              ? ((c.updateQueue = h.updateQueue),
                (c.memoizedState = h.memoizedState),
                (c.lanes = h.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var y = Vd(o);
          if (y !== null) {
            (y.flags &= -257),
              Od(y, o, a, s, t),
              y.mode & 1 && zd(s, u, t),
              (t = y),
              (l = u);
            var v = t.updateQueue;
            if (v === null) {
              var x = new Set();
              x.add(l), (t.updateQueue = x);
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              zd(s, u, t), Ku();
              break e;
            }
            l = Error(E(426));
          }
        } else if ($ && a.mode & 1) {
          var w = Vd(o);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              Od(w, o, a, s, t),
              Eu(ur(l, a));
            break e;
          }
        }
        (s = l = ur(l, a)),
          se !== 4 && (se = 2),
          $r === null ? ($r = [s]) : $r.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var m = jm(s, l, t);
              Md(s, m);
              break e;
            case 1:
              a = l;
              var p = s.type,
                g = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (Ht === null || !Ht.has(g))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var C = Em(s, a, t);
                Md(s, C);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Wm(n);
    } catch (k) {
      (t = k), te === n && n !== null && (te = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Hm() {
  var e = Hs.current;
  return (Hs.current = Us), e === null ? Us : e;
}
function Ku() {
  (se === 0 || se === 3 || se === 2) && (se = 4),
    le === null || (!(Pn & 268435455) && !(Co & 268435455)) || Lt(le, pe);
}
function Ks(e, t) {
  var n = V;
  V |= 2;
  var r = Hm();
  (le !== e || pe !== t) && ((ft = null), yn(e, t));
  do
    try {
      Dv();
      break;
    } catch (i) {
      Um(e, i);
    }
  while (!0);
  if ((bu(), (V = n), (Hs.current = r), te !== null)) throw Error(E(261));
  return (le = null), (pe = 0), se;
}
function Dv() {
  for (; te !== null; ) $m(te);
}
function zv() {
  for (; te !== null && !ay(); ) $m(te);
}
function $m(e) {
  var t = Gm(e.alternate, e, Re);
  (e.memoizedProps = e.pendingProps),
    t === null ? Wm(e) : (te = t),
    (Bu.current = null);
}
function Wm(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Nv(n, t)), n !== null)) {
        (n.flags &= 32767), (te = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (se = 6), (te = null);
        return;
      }
    } else if (((n = bv(n, t, Re)), n !== null)) {
      te = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      te = t;
      return;
    }
    te = t = e;
  } while (t !== null);
  se === 0 && (se = 5);
}
function un(e, t, n) {
  var r = O,
    i = Ke.transition;
  try {
    (Ke.transition = null), (O = 1), Vv(e, t, n, r);
  } finally {
    (Ke.transition = i), (O = r);
  }
  return null;
}
function Vv(e, t, n, r) {
  do rr();
  while (zt !== null);
  if (V & 6) throw Error(E(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(E(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (yy(e, s),
    e === le && ((te = le = null), (pe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ts ||
      ((ts = !0),
      Qm(Ts, function () {
        return rr(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Ke.transition), (Ke.transition = null);
    var o = O;
    O = 1;
    var a = V;
    (V |= 4),
      (Bu.current = null),
      Rv(e, n),
      Im(n, e),
      rv(il),
      (Ns = !!rl),
      (il = rl = null),
      (e.current = n),
      _v(n),
      ly(),
      (V = a),
      (O = o),
      (Ke.transition = s);
  } else e.current = n;
  if (
    (ts && ((ts = !1), (zt = e), (Ws = i)),
    (s = e.pendingLanes),
    s === 0 && (Ht = null),
    dy(n.stateNode),
    Me(e, Z()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if ($s) throw (($s = !1), (e = Pl), (Pl = null), e);
  return (
    Ws & 1 && e.tag !== 0 && rr(),
    (s = e.pendingLanes),
    s & 1 ? (e === jl ? Wr++ : ((Wr = 0), (jl = e))) : (Wr = 0),
    en(),
    null
  );
}
function rr() {
  if (zt !== null) {
    var e = jp(Ws),
      t = Ke.transition,
      n = O;
    try {
      if (((Ke.transition = null), (O = 16 > e ? 16 : e), zt === null))
        var r = !1;
      else {
        if (((e = zt), (zt = null), (Ws = 0), V & 6)) throw Error(E(331));
        var i = V;
        for (V |= 4, M = e.current; M !== null; ) {
          var s = M,
            o = s.child;
          if (M.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (M = u; M !== null; ) {
                  var c = M;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hr(8, c, s);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (M = f);
                  else
                    for (; M !== null; ) {
                      c = M;
                      var h = c.sibling,
                        y = c.return;
                      if ((zm(c), c === u)) {
                        M = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = y), (M = h);
                        break;
                      }
                      M = y;
                    }
                }
              }
              var v = s.alternate;
              if (v !== null) {
                var x = v.child;
                if (x !== null) {
                  v.child = null;
                  do {
                    var w = x.sibling;
                    (x.sibling = null), (x = w);
                  } while (x !== null);
                }
              }
              M = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (M = o);
          else
            e: for (; M !== null; ) {
              if (((s = M), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Hr(9, s, s.return);
                }
              var m = s.sibling;
              if (m !== null) {
                (m.return = s.return), (M = m);
                break e;
              }
              M = s.return;
            }
        }
        var p = e.current;
        for (M = p; M !== null; ) {
          o = M;
          var g = o.child;
          if (o.subtreeFlags & 2064 && g !== null) (g.return = o), (M = g);
          else
            e: for (o = p; M !== null; ) {
              if (((a = M), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      So(9, a);
                  }
                } catch (k) {
                  Y(a, a.return, k);
                }
              if (a === o) {
                M = null;
                break e;
              }
              var C = a.sibling;
              if (C !== null) {
                (C.return = a.return), (M = C);
                break e;
              }
              M = a.return;
            }
        }
        if (
          ((V = i), en(), lt && typeof lt.onPostCommitFiberRoot == "function")
        )
          try {
            lt.onPostCommitFiberRoot(ho, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (O = n), (Ke.transition = t);
    }
  }
  return !1;
}
function Jd(e, t, n) {
  (t = ur(n, t)),
    (t = jm(e, t, 1)),
    (e = Ut(e, t, 1)),
    (t = ke()),
    e !== null && (Pi(e, 1, t), Me(e, t));
}
function Y(e, t, n) {
  if (e.tag === 3) Jd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Jd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ht === null || !Ht.has(r)))
        ) {
          (e = ur(n, e)),
            (e = Em(t, e, 1)),
            (t = Ut(t, e, 1)),
            (e = ke()),
            t !== null && (Pi(t, 1, e), Me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Ov(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ke()),
    (e.pingedLanes |= e.suspendedLanes & n),
    le === e &&
      (pe & n) === n &&
      (se === 4 || (se === 3 && (pe & 130023424) === pe && 500 > Z() - Hu)
        ? yn(e, 0)
        : (Uu |= n)),
    Me(e, t);
}
function Km(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Wi), (Wi <<= 1), !(Wi & 130023424) && (Wi = 4194304))
      : (t = 1));
  var n = ke();
  (e = Ct(e, t)), e !== null && (Pi(e, t, n), Me(e, n));
}
function Iv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Km(e, n);
}
function Fv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  r !== null && r.delete(t), Km(e, n);
}
var Gm;
Gm = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || be.current) Te = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Te = !1), Tv(e, t, n);
      Te = !!(e.flags & 131072);
    }
  else (Te = !1), $ && t.flags & 1048576 && Jp(t, zs, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      gs(e, t), (e = t.pendingProps);
      var i = sr(t, Se.current);
      nr(t, n), (i = zu(null, t, r, e, i, n));
      var s = Vu();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ne(r) ? ((s = !0), Ls(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Ru(t),
            (i.updater = wo),
            (t.stateNode = i),
            (i._reactInternals = t),
            hl(t, r, e, n),
            (t = gl(null, t, r, !0, s, n)))
          : ((t.tag = 0), $ && s && Pu(t), Ce(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (gs(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Uv(r)),
          (e = Je(r, e)),
          i)
        ) {
          case 0:
            t = ml(null, t, r, e, n);
            break e;
          case 1:
            t = Bd(null, t, r, e, n);
            break e;
          case 11:
            t = Id(null, t, r, e, n);
            break e;
          case 14:
            t = Fd(null, t, r, Je(r.type, e), n);
            break e;
        }
        throw Error(E(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Je(r, i)),
        ml(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Je(r, i)),
        Bd(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Mm(t), e === null)) throw Error(E(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          rm(e, t),
          Is(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = ur(Error(E(423)), t)), (t = Ud(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = ur(Error(E(424)), t)), (t = Ud(e, t, r, n, i));
            break e;
          } else
            for (
              _e = Bt(t.stateNode.containerInfo.firstChild),
                Ae = t,
                $ = !0,
                Ze = null,
                n = tm(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((or(), r === i)) {
            t = kt(e, t, n);
            break e;
          }
          Ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        im(t),
        e === null && cl(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        sl(r, i) ? (o = null) : s !== null && sl(r, s) && (t.flags |= 32),
        Nm(e, t),
        Ce(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && cl(t), null;
    case 13:
      return Rm(e, t, n);
    case 4:
      return (
        _u(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ar(t, null, r, n)) : Ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Je(r, i)),
        Id(e, t, r, i, n)
      );
    case 7:
      return Ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          F(Vs, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (it(s.value, o)) {
            if (s.children === i.children && !be.current) {
              t = kt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      (l = gt(-1, n & -n)), (l.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      dl(s.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(E(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  dl(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        Ce(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        nr(t, n),
        (i = Ge(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Je(r, t.pendingProps)),
        (i = Je(r.type, i)),
        Fd(e, t, r, i, n)
      );
    case 15:
      return Tm(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Je(r, i)),
        gs(e, t),
        (t.tag = 1),
        Ne(r) ? ((e = !0), Ls(t)) : (e = !1),
        nr(t, n),
        Pm(t, r, i),
        hl(t, r, i, n),
        gl(null, t, r, !0, e, n)
      );
    case 19:
      return _m(e, t, n);
    case 22:
      return bm(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function Qm(e, t) {
  return Sp(e, t);
}
function Bv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function We(e, t, n, r) {
  return new Bv(e, t, n, r);
}
function Gu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Uv(e) {
  if (typeof e == "function") return Gu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === fu)) return 11;
    if (e === hu) return 14;
  }
  return 2;
}
function Wt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = We(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function xs(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) Gu(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case zn:
        return vn(n.children, i, s, t);
      case du:
        (o = 8), (i |= 8);
        break;
      case Va:
        return (
          (e = We(12, n, t, i | 2)), (e.elementType = Va), (e.lanes = s), e
        );
      case Oa:
        return (e = We(13, n, t, i)), (e.elementType = Oa), (e.lanes = s), e;
      case Ia:
        return (e = We(19, n, t, i)), (e.elementType = Ia), (e.lanes = s), e;
      case ip:
        return ko(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case np:
              o = 10;
              break e;
            case rp:
              o = 9;
              break e;
            case fu:
              o = 11;
              break e;
            case hu:
              o = 14;
              break e;
            case Rt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = We(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function vn(e, t, n, r) {
  return (e = We(7, e, r, t)), (e.lanes = n), e;
}
function ko(e, t, n, r) {
  return (
    (e = We(22, e, r, t)),
    (e.elementType = ip),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function fa(e, t, n) {
  return (e = We(6, e, null, t)), (e.lanes = n), e;
}
function ha(e, t, n) {
  return (
    (t = We(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Hv(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Go(0)),
    (this.expirationTimes = Go(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Go(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Qu(e, t, n, r, i, s, o, a, l) {
  return (
    (e = new Hv(e, t, n, a, l)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = We(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ru(s),
    e
  );
}
function $v(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Dn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Xm(e) {
  if (!e) return Qt;
  e = e._reactInternals;
  e: {
    if (Mn(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ne(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ne(n)) return Xp(e, n, t);
  }
  return t;
}
function Ym(e, t, n, r, i, s, o, a, l) {
  return (
    (e = Qu(n, r, !0, e, i, s, o, a, l)),
    (e.context = Xm(null)),
    (n = e.current),
    (r = ke()),
    (i = $t(n)),
    (s = gt(r, i)),
    (s.callback = t ?? null),
    Ut(n, s, i),
    (e.current.lanes = i),
    Pi(e, i, r),
    Me(e, r),
    e
  );
}
function Po(e, t, n, r) {
  var i = t.current,
    s = ke(),
    o = $t(i);
  return (
    (n = Xm(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = gt(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ut(i, t, o)),
    e !== null && (rt(e, i, o, s), hs(e, i, o)),
    o
  );
}
function Gs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function qd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Xu(e, t) {
  qd(e, t), (e = e.alternate) && qd(e, t);
}
var Jm =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Yu(e) {
  this._internalRoot = e;
}
jo.prototype.render = Yu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  Po(e, t, null, null);
};
jo.prototype.unmount = Yu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    jn(function () {
      Po(null, e, null, null);
    }),
      (t[St] = null);
  }
};
function jo(e) {
  this._internalRoot = e;
}
jo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = bp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < At.length && t !== 0 && t < At[n].priority; n++);
    At.splice(n, 0, e), n === 0 && Mp(e);
  }
};
function Ju(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Eo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Zd() {}
function Wv(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = Gs(o);
        s.call(u);
      };
    }
    var o = Ym(t, r, e, 0, null, !1, !1, "", Zd);
    return (
      (e._reactRootContainer = o),
      (e[St] = o.current),
      si(e.nodeType === 8 ? e.parentNode : e),
      jn(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Gs(l);
      a.call(u);
    };
  }
  var l = Qu(e, 0, !1, null, null, !1, !1, "", Zd);
  return (
    (e._reactRootContainer = l),
    (e[St] = l.current),
    si(e.nodeType === 8 ? e.parentNode : e),
    jn(function () {
      Po(t, l, n, r);
    }),
    l
  );
}
function To(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = Gs(o);
        a.call(l);
      };
    }
    Po(t, o, e, i);
  } else o = Wv(n, t, e, i, r);
  return Gs(o);
}
Ep = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Rr(t.pendingLanes);
        n !== 0 &&
          (gu(t, n | 1), Me(t, Z()), !(V & 6) && ((cr = Z() + 500), en()));
      }
      break;
    case 13:
      jn(function () {
        var r = Ct(e, 1);
        if (r !== null) {
          var i = ke();
          rt(r, e, 1, i);
        }
      }),
        Xu(e, 1);
  }
};
yu = function (e) {
  if (e.tag === 13) {
    var t = Ct(e, 134217728);
    if (t !== null) {
      var n = ke();
      rt(t, e, 134217728, n);
    }
    Xu(e, 134217728);
  }
};
Tp = function (e) {
  if (e.tag === 13) {
    var t = $t(e),
      n = Ct(e, t);
    if (n !== null) {
      var r = ke();
      rt(n, e, t, r);
    }
    Xu(e, t);
  }
};
bp = function () {
  return O;
};
Np = function (e, t) {
  var n = O;
  try {
    return (O = e), t();
  } finally {
    O = n;
  }
};
Xa = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ua(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = yo(r);
            if (!i) throw Error(E(90));
            op(r), Ua(r, i);
          }
        }
      }
      break;
    case "textarea":
      lp(e, n);
      break;
    case "select":
      (t = n.value), t != null && qn(e, !!n.multiple, t, !1);
  }
};
mp = $u;
gp = jn;
var Kv = { usingClientEntryPoint: !1, Events: [Ei, Fn, yo, hp, pp, $u] },
  Tr = {
    findFiberByHostInstance: hn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Gv = {
    bundleType: Tr.bundleType,
    version: Tr.version,
    rendererPackageName: Tr.rendererPackageName,
    rendererConfig: Tr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Et.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = xp(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Tr.findFiberByHostInstance,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20250426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ns = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ns.isDisabled && ns.supportsFiber)
    try {
      (ho = ns.inject(Gv)), (lt = ns);
    } catch {}
}
Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kv;
Ie.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ju(t)) throw Error(E(200));
  return $v(e, t, null, n);
};
Ie.createRoot = function (e, t) {
  if (!Ju(e)) throw Error(E(299));
  var n = !1,
    r = "",
    i = Jm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Qu(e, 1, !1, null, null, n, !1, r, i)),
    (e[St] = t.current),
    si(e.nodeType === 8 ? e.parentNode : e),
    new Yu(t)
  );
};
Ie.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(E(188))
      : ((e = Object.keys(e).join(",")), Error(E(268, e)));
  return (e = xp(t)), (e = e === null ? null : e.stateNode), e;
};
Ie.flushSync = function (e) {
  return jn(e);
};
Ie.hydrate = function (e, t, n) {
  if (!Eo(t)) throw Error(E(200));
  return To(null, e, t, !0, n);
};
Ie.hydrateRoot = function (e, t, n) {
  if (!Ju(e)) throw Error(E(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = Jm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Ym(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[St] = t.current),
    si(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new jo(t);
};
Ie.render = function (e, t, n) {
  if (!Eo(t)) throw Error(E(200));
  return To(null, e, t, !1, n);
};
Ie.unmountComponentAtNode = function (e) {
  if (!Eo(e)) throw Error(E(40));
  return e._reactRootContainer
    ? (jn(function () {
        To(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[St] = null);
        });
      }),
      !0)
    : !1;
};
Ie.unstable_batchedUpdates = $u;
Ie.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Eo(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return To(e, t, n, !1, r);
};
Ie.version = "18.3.1-next-f1338f8080-20250426";
function qm() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qm);
    } catch (e) {
      console.error(e);
    }
}
qm(), (qh.exports = Ie);
var Qv = qh.exports,
  ef = Qv;
(Da.createRoot = ef.createRoot), (Da.hydrateRoot = ef.hydrateRoot);
var Zm = { exports: {} },
  e0 = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bi = S;
function Xv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Yv = typeof Object.is == "function" ? Object.is : Xv,
  Jv = bi.useSyncExternalStore,
  qv = bi.useRef,
  Zv = bi.useEffect,
  e2 = bi.useMemo,
  t2 = bi.useDebugValue;
e0.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var s = qv(null);
  if (s.current === null) {
    var o = { hasValue: !1, value: null };
    s.current = o;
  } else o = s.current;
  s = e2(
    function () {
      function l(y) {
        if (!u) {
          if (((u = !0), (c = y), (y = r(y)), i !== void 0 && o.hasValue)) {
            var v = o.value;
            if (i(v, y)) return (f = v);
          }
          return (f = y);
        }
        if (((v = f), Yv(c, y))) return v;
        var x = r(y);
        return i !== void 0 && i(v, x) ? ((c = y), v) : ((c = y), (f = x));
      }
      var u = !1,
        c,
        f,
        h = n === void 0 ? null : n;
      return [
        function () {
          return l(t());
        },
        h === null
          ? void 0
          : function () {
              return l(h());
            },
      ];
    },
    [t, n, r, i]
  );
  var a = Jv(e, s[0], s[1]);
  return (
    Zv(
      function () {
        (o.hasValue = !0), (o.value = a);
      },
      [a]
    ),
    t2(a),
    a
  );
};
Zm.exports = e0;
var n2 = Zm.exports;
function r2(e) {
  e();
}
function i2() {
  let e = null,
    t = null;
  return {
    clear() {
      (e = null), (t = null);
    },
    notify() {
      r2(() => {
        let n = e;
        for (; n; ) n.callback(), (n = n.next);
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; ) n.push(r), (r = r.next);
      return n;
    },
    subscribe(n) {
      let r = !0;
      const i = (t = { callback: n, next: null, prev: t });
      return (
        i.prev ? (i.prev.next = i) : (e = i),
        function () {
          !r ||
            e === null ||
            ((r = !1),
            i.next ? (i.next.prev = i.prev) : (t = i.prev),
            i.prev ? (i.prev.next = i.next) : (e = i.next));
        }
      );
    },
  };
}
var tf = { notify() {}, get: () => [] };
function s2(e, t) {
  let n,
    r = tf,
    i = 0,
    s = !1;
  function o(x) {
    c();
    const w = r.subscribe(x);
    let m = !1;
    return () => {
      m || ((m = !0), w(), f());
    };
  }
  function a() {
    r.notify();
  }
  function l() {
    v.onStateChange && v.onStateChange();
  }
  function u() {
    return s;
  }
  function c() {
    i++, n || ((n = e.subscribe(l)), (r = i2()));
  }
  function f() {
    i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = tf));
  }
  function h() {
    s || ((s = !0), c());
  }
  function y() {
    s && ((s = !1), f());
  }
  const v = {
    addNestedSub: o,
    notifyNestedSubs: a,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: h,
    tryUnsubscribe: y,
    getListeners: () => r,
  };
  return v;
}
var o2 = () =>
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  a2 = o2(),
  l2 = () => typeof navigator < "u" && navigator.product === "ReactNative",
  u2 = l2(),
  c2 = () => (a2 || u2 ? S.useLayoutEffect : S.useEffect),
  d2 = c2(),
  pa = Symbol.for("react-redux-context"),
  ma = typeof globalThis < "u" ? globalThis : {};
function f2() {
  if (!S.createContext) return {};
  const e = ma[pa] ?? (ma[pa] = new Map());
  let t = e.get(S.createContext);
  return t || ((t = S.createContext(null)), e.set(S.createContext, t)), t;
}
var Xt = f2();
function h2(e) {
  const { children: t, context: n, serverState: r, store: i } = e,
    s = S.useMemo(() => {
      const l = s2(i);
      return {
        store: i,
        subscription: l,
        getServerState: r ? () => r : void 0,
      };
    }, [i, r]),
    o = S.useMemo(() => i.getState(), [i]);
  d2(() => {
    const { subscription: l } = s;
    return (
      (l.onStateChange = l.notifyNestedSubs),
      l.trySubscribe(),
      o !== i.getState() && l.notifyNestedSubs(),
      () => {
        l.tryUnsubscribe(), (l.onStateChange = void 0);
      }
    );
  }, [s, o]);
  const a = n || Xt;
  return S.createElement(a.Provider, { value: s }, t);
}
var p2 = h2;
function qu(e = Xt) {
  return function () {
    return S.useContext(e);
  };
}
var t0 = qu();
function n0(e = Xt) {
  const t = e === Xt ? t0 : qu(e),
    n = () => {
      const { store: r } = t();
      return r;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var m2 = n0();
function g2(e = Xt) {
  const t = e === Xt ? m2 : n0(e),
    n = () => t().dispatch;
  return Object.assign(n, { withTypes: () => n }), n;
}
var y2 = g2(),
  v2 = (e, t) => e === t;
function x2(e = Xt) {
  const t = e === Xt ? t0 : qu(e),
    n = (r, i = {}) => {
      const { equalityFn: s = v2 } =
          typeof i == "function" ? { equalityFn: i } : i,
        o = t(),
        { store: a, subscription: l, getServerState: u } = o;
      S.useRef(!0);
      const c = S.useCallback(
          {
            [r.name](h) {
              return r(h);
            },
          }[r.name],
          [r]
        ),
        f = n2.useSyncExternalStoreWithSelector(
          l.addNestedSub,
          a.getState,
          u || a.getState,
          c,
          s
        );
      return S.useDebugValue(f), f;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var w2 = x2();
/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function pi() {
  return (
    (pi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    pi.apply(this, arguments)
  );
}
var Vt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Vt || (Vt = {}));
const nf = "popstate";
function S2(e) {
  e === void 0 && (e = {});
  function t(i, s) {
    let {
      pathname: o = "/",
      search: a = "",
      hash: l = "",
    } = Rn(i.location.hash.substr(1));
    return (
      !o.startsWith("/") && !o.startsWith(".") && (o = "/" + o),
      bl(
        "",
        { pathname: o, search: a, hash: l },
        (s.state && s.state.usr) || null,
        (s.state && s.state.key) || "default"
      )
    );
  }
  function n(i, s) {
    let o = i.document.querySelector("base"),
      a = "";
    if (o && o.getAttribute("href")) {
      let l = i.location.href,
        u = l.indexOf("#");
      a = u === -1 ? l : l.slice(0, u);
    }
    return a + "#" + (typeof s == "string" ? s : Qs(s));
  }
  function r(i, s) {
    Zu(
      i.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(s) +
        ")"
    );
  }
  return k2(t, n, r, e);
}
function ne(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Zu(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function C2() {
  return Math.random().toString(36).substr(2, 8);
}
function rf(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function bl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    pi(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Rn(t) : t,
      { state: n, key: (t && t.key) || r || C2() }
    )
  );
}
function Qs(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Rn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function k2(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    o = i.history,
    a = Vt.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), o.replaceState(pi({}, o.state, { idx: u }), ""));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function f() {
    a = Vt.Pop;
    let w = c(),
      m = w == null ? null : w - u;
    (u = w), l && l({ action: a, location: x.location, delta: m });
  }
  function h(w, m) {
    a = Vt.Push;
    let p = bl(x.location, w, m);
    n(p, w), (u = c() + 1);
    let g = rf(p, u),
      C = x.createHref(p);
    try {
      o.pushState(g, "", C);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      i.location.assign(C);
    }
    s && l && l({ action: a, location: x.location, delta: 1 });
  }
  function y(w, m) {
    a = Vt.Replace;
    let p = bl(x.location, w, m);
    n(p, w), (u = c());
    let g = rf(p, u),
      C = x.createHref(p);
    o.replaceState(g, "", C),
      s && l && l({ action: a, location: x.location, delta: 0 });
  }
  function v(w) {
    let m = i.location.origin !== "null" ? i.location.origin : i.location.href,
      p = typeof w == "string" ? w : Qs(w);
    return (
      (p = p.replace(/ $/, "%20")),
      ne(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, m)
    );
  }
  let x = {
    get action() {
      return a;
    },
    get location() {
      return e(i, o);
    },
    listen(w) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(nf, f),
        (l = w),
        () => {
          i.removeEventListener(nf, f), (l = null);
        }
      );
    },
    createHref(w) {
      return t(i, w);
    },
    createURL: v,
    encodeLocation(w) {
      let m = v(w);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: h,
    replace: y,
    go(w) {
      return o.go(w);
    },
  };
  return x;
}
var sf;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(sf || (sf = {}));
function P2(e, t, n) {
  return n === void 0 && (n = "/"), j2(e, t, n);
}
function j2(e, t, n, r) {
  let i = typeof t == "string" ? Rn(t) : t,
    s = ec(i.pathname || "/", n);
  if (s == null) return null;
  let o = r0(e);
  E2(o);
  let a = null;
  for (let l = 0; a == null && l < o.length; ++l) {
    let u = O2(s);
    a = D2(o[l], u);
  }
  return a;
}
function r0(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (s, o, a) => {
    let l = {
      relativePath: a === void 0 ? s.path || "" : a,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    l.relativePath.startsWith("/") &&
      (ne(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = Kt([r, l.relativePath]),
      c = n.concat(l);
    s.children &&
      s.children.length > 0 &&
      (ne(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      r0(s.children, t, c, u)),
      !(s.path == null && !s.index) &&
        t.push({ path: u, score: A2(u, s.index), routesMeta: c });
  };
  return (
    e.forEach((s, o) => {
      var a;
      if (s.path === "" || !((a = s.path) != null && a.includes("?"))) i(s, o);
      else for (let l of i0(s.path)) i(s, o, l);
    }),
    t
  );
}
function i0(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let o = i0(r.join("/")),
    a = [];
  return (
    a.push(...o.map((l) => (l === "" ? s : [s, l].join("/")))),
    i && a.push(...o),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function E2(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : L2(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const T2 = /^:[\w-]+$/,
  b2 = 3,
  N2 = 2,
  M2 = 1,
  R2 = 10,
  _2 = -2,
  of = (e) => e === "*";
function A2(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(of) && (r += _2),
    t && (r += N2),
    n
      .filter((i) => !of(i))
      .reduce((i, s) => i + (T2.test(s) ? b2 : s === "" ? M2 : R2), r)
  );
}
function L2(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function D2(e, t, n) {
  let { routesMeta: r } = e,
    i = {},
    s = "/",
    o = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      c = s === "/" ? t : t.slice(s.length) || "/",
      f = z2(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c
      ),
      h = l.route;
    if (!f) return null;
    Object.assign(i, f.params),
      o.push({
        params: i,
        pathname: Kt([s, f.pathname]),
        pathnameBase: U2(Kt([s, f.pathnameBase])),
        route: h,
      }),
      f.pathnameBase !== "/" && (s = Kt([s, f.pathnameBase]));
  }
  return o;
}
function z2(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = V2(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let s = i[0],
    o = s.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      let { paramName: h, isOptional: y } = c;
      if (h === "*") {
        let x = a[f] || "";
        o = s.slice(0, s.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const v = a[f];
      return (
        y && !v ? (u[h] = void 0) : (u[h] = (v || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: e,
  };
}
function V2(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Zu(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function O2(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Zu(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function ec(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function I2(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Rn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : F2(n, t)) : t,
    search: H2(r),
    hash: $2(i),
  };
}
function F2(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function ga(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function B2(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function s0(e, t) {
  let n = B2(e);
  return t
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function o0(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Rn(e))
    : ((i = pi({}, e)),
      ne(
        !i.pathname || !i.pathname.includes("?"),
        ga("?", "pathname", "search", i)
      ),
      ne(
        !i.pathname || !i.pathname.includes("#"),
        ga("#", "pathname", "hash", i)
      ),
      ne(!i.search || !i.search.includes("#"), ga("#", "search", "hash", i)));
  let s = e === "" || i.pathname === "",
    o = s ? "/" : i.pathname,
    a;
  if (o == null) a = n;
  else {
    let f = t.length - 1;
    if (!r && o.startsWith("..")) {
      let h = o.split("/");
      for (; h[0] === ".."; ) h.shift(), (f -= 1);
      i.pathname = h.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let l = I2(i, a),
    u = o && o !== "/" && o.endsWith("/"),
    c = (s || o === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const Kt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  U2 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  H2 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  $2 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function W2(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const a0 = ["post", "put", "patch", "delete"];
new Set(a0);
const K2 = ["get", ...a0];
new Set(K2);
/**
 * React Router v6.28.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function mi() {
  return (
    (mi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    mi.apply(this, arguments)
  );
}
const tc = S.createContext(null),
  G2 = S.createContext(null),
  _n = S.createContext(null),
  bo = S.createContext(null),
  tn = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  l0 = S.createContext(null);
function Q2(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Ni() || ne(!1);
  let { basename: r, navigator: i } = S.useContext(_n),
    { hash: s, pathname: o, search: a } = c0(e, { relative: n }),
    l = o;
  return (
    r !== "/" && (l = o === "/" ? r : Kt([r, o])),
    i.createHref({ pathname: l, search: a, hash: s })
  );
}
function Ni() {
  return S.useContext(bo) != null;
}
function Mi() {
  return Ni() || ne(!1), S.useContext(bo).location;
}
function u0(e) {
  S.useContext(_n).static || S.useLayoutEffect(e);
}
function X2() {
  let { isDataRoute: e } = S.useContext(tn);
  return e ? cx() : Y2();
}
function Y2() {
  Ni() || ne(!1);
  let e = S.useContext(tc),
    { basename: t, future: n, navigator: r } = S.useContext(_n),
    { matches: i } = S.useContext(tn),
    { pathname: s } = Mi(),
    o = JSON.stringify(s0(i, n.v7_relativeSplatPath)),
    a = S.useRef(!1);
  return (
    u0(() => {
      a.current = !0;
    }),
    S.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let f = o0(u, JSON.parse(o), s, c.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : Kt([t, f.pathname])),
          (c.replace ? r.replace : r.push)(f, c.state, c);
      },
      [t, r, o, s, e]
    )
  );
}
const J2 = S.createContext(null);
function q2(e) {
  let t = S.useContext(tn).outlet;
  return t && S.createElement(J2.Provider, { value: e }, t);
}
function c0(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = S.useContext(_n),
    { matches: i } = S.useContext(tn),
    { pathname: s } = Mi(),
    o = JSON.stringify(s0(i, r.v7_relativeSplatPath));
  return S.useMemo(() => o0(e, JSON.parse(o), s, n === "path"), [e, o, s, n]);
}
function Z2(e, t) {
  return ex(e, t);
}
function ex(e, t, n, r) {
  Ni() || ne(!1);
  let { navigator: i } = S.useContext(_n),
    { matches: s } = S.useContext(tn),
    o = s[s.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let l = o ? o.pathnameBase : "/";
  o && o.route;
  let u = Mi(),
    c;
  if (t) {
    var f;
    let w = typeof t == "string" ? Rn(t) : t;
    l === "/" || ((f = w.pathname) != null && f.startsWith(l)) || ne(!1),
      (c = w);
  } else c = u;
  let h = c.pathname || "/",
    y = h;
  if (l !== "/") {
    let w = l.replace(/^\//, "").split("/");
    y = "/" + h.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let v = P2(e, { pathname: y }),
    x = sx(
      v &&
        v.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, a, w.params),
            pathname: Kt([
              l,
              i.encodeLocation
                ? i.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? l
                : Kt([
                    l,
                    i.encodeLocation
                      ? i.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      s,
      n,
      r
    );
  return t && x
    ? S.createElement(
        bo.Provider,
        {
          value: {
            location: mi(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: Vt.Pop,
          },
        },
        x
      )
    : x;
}
function tx() {
  let e = ux(),
    t = W2(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return S.createElement(
    S.Fragment,
    null,
    S.createElement("h2", null, "Unexpected Application Error!"),
    S.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? S.createElement("pre", { style: i }, n) : null,
    null
  );
}
const nx = S.createElement(tx, null);
class rx extends S.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? S.createElement(
          tn.Provider,
          { value: this.props.routeContext },
          S.createElement(l0.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function ix(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = S.useContext(tc);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    S.createElement(tn.Provider, { value: t }, r)
  );
}
function sx(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var s;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (s = r) != null &&
      s.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let o = e,
    a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let c = o.findIndex(
      (f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0
    );
    c >= 0 || ne(!1), (o = o.slice(0, Math.min(o.length, c + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < o.length; c++) {
      let f = o[c];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
        f.route.id)
      ) {
        let { loaderData: h, errors: y } = n,
          v =
            f.route.loader &&
            h[f.route.id] === void 0 &&
            (!y || y[f.route.id] === void 0);
        if (f.route.lazy || v) {
          (l = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((c, f, h) => {
    let y,
      v = !1,
      x = null,
      w = null;
    n &&
      ((y = a && f.route.id ? a[f.route.id] : void 0),
      (x = f.route.errorElement || nx),
      l &&
        (u < 0 && h === 0
          ? ((v = !0), (w = null))
          : u === h &&
            ((v = !0), (w = f.route.hydrateFallbackElement || null))));
    let m = t.concat(o.slice(0, h + 1)),
      p = () => {
        let g;
        return (
          y
            ? (g = x)
            : v
            ? (g = w)
            : f.route.Component
            ? (g = S.createElement(f.route.Component, null))
            : f.route.element
            ? (g = f.route.element)
            : (g = c),
          S.createElement(ix, {
            match: f,
            routeContext: { outlet: c, matches: m, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0)
      ? S.createElement(rx, {
          location: n.location,
          revalidation: n.revalidation,
          component: x,
          error: y,
          children: p(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var d0 = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(d0 || {}),
  Xs = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Xs || {});
function ox(e) {
  let t = S.useContext(tc);
  return t || ne(!1), t;
}
function ax(e) {
  let t = S.useContext(G2);
  return t || ne(!1), t;
}
function lx(e) {
  let t = S.useContext(tn);
  return t || ne(!1), t;
}
function f0(e) {
  let t = lx(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ne(!1), n.route.id;
}
function ux() {
  var e;
  let t = S.useContext(l0),
    n = ax(Xs.UseRouteError),
    r = f0(Xs.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function cx() {
  let { router: e } = ox(d0.UseNavigateStable),
    t = f0(Xs.UseNavigateStable),
    n = S.useRef(!1);
  return (
    u0(() => {
      n.current = !0;
    }),
    S.useCallback(
      function (i, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, mi({ fromRouteId: t }, s)));
      },
      [e, t]
    )
  );
}
const af = {};
function dx(e, t) {
  af[t] || ((af[t] = !0), console.warn(t));
}
const lf = (e, t, n) =>
  dx(
    e,
    "⚠️ React Router Future Flag Warning: " +
      t +
      ". " +
      ("You can use the `" + e + "` future flag to opt-in early. ") +
      ("For more information, see " + n + ".")
  );
function fx(e, t) {
  (e == null ? void 0 : e.v7_startTransition) === void 0 &&
    lf(
      "v7_startTransition",
      "React Router will begin wrapping state updates in `React.startTransition` in v7",
      "https://reactrouter.com/v6/upgrading/future#v7_starttransition"
    ),
    (e == null ? void 0 : e.v7_relativeSplatPath) === void 0 &&
      lf(
        "v7_relativeSplatPath",
        "Relative route resolution within Splat routes is changing in v7",
        "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"
      );
}
function hx(e) {
  return q2(e.context);
}
function Nt(e) {
  ne(!1);
}
function px(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Vt.Pop,
    navigator: s,
    static: o = !1,
    future: a,
  } = e;
  Ni() && ne(!1);
  let l = t.replace(/^\/*/, "/"),
    u = S.useMemo(
      () => ({
        basename: l,
        navigator: s,
        static: o,
        future: mi({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, s, o]
    );
  typeof r == "string" && (r = Rn(r));
  let {
      pathname: c = "/",
      search: f = "",
      hash: h = "",
      state: y = null,
      key: v = "default",
    } = r,
    x = S.useMemo(() => {
      let w = ec(c, l);
      return w == null
        ? null
        : {
            location: { pathname: w, search: f, hash: h, state: y, key: v },
            navigationType: i,
          };
    }, [l, c, f, h, y, v, i]);
  return x == null
    ? null
    : S.createElement(
        _n.Provider,
        { value: u },
        S.createElement(bo.Provider, { children: n, value: x })
      );
}
function mx(e) {
  let { children: t, location: n } = e;
  return Z2(Nl(t), n);
}
new Promise(() => {});
function Nl(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    S.Children.forEach(e, (r, i) => {
      if (!S.isValidElement(r)) return;
      let s = [...t, i];
      if (r.type === S.Fragment) {
        n.push.apply(n, Nl(r.props.children, s));
        return;
      }
      r.type !== Nt && ne(!1), !r.props.index || !r.props.children || ne(!1);
      let o = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = Nl(r.props.children, s)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.28.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ml() {
  return (
    (Ml = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ml.apply(this, arguments)
  );
}
function gx(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function yx(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function vx(e, t) {
  return e.button === 0 && (!t || t === "_self") && !yx(e);
}
const xx = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  wx = "6";
try {
  window.__reactRouterVersion = wx;
} catch {}
const Sx = "startTransition",
  uf = Og[Sx];
function Cx(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    s = S.useRef();
  s.current == null && (s.current = S2({ window: i, v5Compat: !0 }));
  let o = s.current,
    [a, l] = S.useState({ action: o.action, location: o.location }),
    { v7_startTransition: u } = r || {},
    c = S.useCallback(
      (f) => {
        u && uf ? uf(() => l(f)) : l(f);
      },
      [l, u]
    );
  return (
    S.useLayoutEffect(() => o.listen(c), [o, c]),
    S.useEffect(() => fx(r), [r]),
    S.createElement(px, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: o,
      future: r,
    })
  );
}
const kx =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Px = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ya = S.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: s,
        replace: o,
        state: a,
        target: l,
        to: u,
        preventScrollReset: c,
        viewTransition: f,
      } = t,
      h = gx(t, xx),
      { basename: y } = S.useContext(_n),
      v,
      x = !1;
    if (typeof u == "string" && Px.test(u) && ((v = u), kx))
      try {
        let g = new URL(window.location.href),
          C = u.startsWith("//") ? new URL(g.protocol + u) : new URL(u),
          k = ec(C.pathname, y);
        C.origin === g.origin && k != null
          ? (u = k + C.search + C.hash)
          : (x = !0);
      } catch {}
    let w = Q2(u, { relative: i }),
      m = jx(u, {
        replace: o,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: i,
        viewTransition: f,
      });
    function p(g) {
      r && r(g), g.defaultPrevented || m(g);
    }
    return S.createElement(
      "a",
      Ml({}, h, { href: v || w, onClick: x || s ? r : p, ref: n, target: l })
    );
  });
var cf;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(cf || (cf = {}));
var df;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(df || (df = {}));
function jx(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: s,
      relative: o,
      viewTransition: a,
    } = t === void 0 ? {} : t,
    l = X2(),
    u = Mi(),
    c = c0(e, { relative: o });
  return S.useCallback(
    (f) => {
      if (vx(f, n)) {
        f.preventDefault();
        let h = r !== void 0 ? r : Qs(u) === Qs(c);
        l(e, {
          replace: h,
          state: i,
          preventScrollReset: s,
          relative: o,
          viewTransition: a,
        });
      }
    },
    [u, l, c, r, i, n, e, s, o, a]
  );
}
function ce(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Ex = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  ff = Ex,
  va = () => Math.random().toString(36).substring(7).split("").join("."),
  Tx = {
    INIT: `@@redux/INIT${va()}`,
    REPLACE: `@@redux/REPLACE${va()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${va()}`,
  },
  Ys = Tx;
function nc(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function h0(e, t, n) {
  if (typeof e != "function") throw new Error(ce(2));
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(ce(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(ce(1));
    return n(h0)(e, t);
  }
  let r = e,
    i = t,
    s = new Map(),
    o = s,
    a = 0,
    l = !1;
  function u() {
    o === s &&
      ((o = new Map()),
      s.forEach((w, m) => {
        o.set(m, w);
      }));
  }
  function c() {
    if (l) throw new Error(ce(3));
    return i;
  }
  function f(w) {
    if (typeof w != "function") throw new Error(ce(4));
    if (l) throw new Error(ce(5));
    let m = !0;
    u();
    const p = a++;
    return (
      o.set(p, w),
      function () {
        if (m) {
          if (l) throw new Error(ce(6));
          (m = !1), u(), o.delete(p), (s = null);
        }
      }
    );
  }
  function h(w) {
    if (!nc(w)) throw new Error(ce(7));
    if (typeof w.type > "u") throw new Error(ce(8));
    if (typeof w.type != "string") throw new Error(ce(17));
    if (l) throw new Error(ce(9));
    try {
      (l = !0), (i = r(i, w));
    } finally {
      l = !1;
    }
    return (
      (s = o).forEach((p) => {
        p();
      }),
      w
    );
  }
  function y(w) {
    if (typeof w != "function") throw new Error(ce(10));
    (r = w), h({ type: Ys.REPLACE });
  }
  function v() {
    const w = f;
    return {
      subscribe(m) {
        if (typeof m != "object" || m === null) throw new Error(ce(11));
        function p() {
          const C = m;
          C.next && C.next(c());
        }
        return p(), { unsubscribe: w(p) };
      },
      [ff]() {
        return this;
      },
    };
  }
  return (
    h({ type: Ys.INIT }),
    { dispatch: h, subscribe: f, getState: c, replaceReducer: y, [ff]: v }
  );
}
function bx(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, { type: Ys.INIT }) > "u") throw new Error(ce(12));
    if (typeof n(void 0, { type: Ys.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(ce(13));
  });
}
function Nx(e) {
  const t = Object.keys(e),
    n = {};
  for (let s = 0; s < t.length; s++) {
    const o = t[s];
    typeof e[o] == "function" && (n[o] = e[o]);
  }
  const r = Object.keys(n);
  let i;
  try {
    bx(n);
  } catch (s) {
    i = s;
  }
  return function (o = {}, a) {
    if (i) throw i;
    let l = !1;
    const u = {};
    for (let c = 0; c < r.length; c++) {
      const f = r[c],
        h = n[f],
        y = o[f],
        v = h(y, a);
      if (typeof v > "u") throw (a && a.type, new Error(ce(14)));
      (u[f] = v), (l = l || v !== y);
    }
    return (l = l || r.length !== Object.keys(o).length), l ? u : o;
  };
}
function Js(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
    ? e[0]
    : e.reduce(
        (t, n) =>
          (...r) =>
            t(n(...r))
      );
}
function Mx(...e) {
  return (t) => (n, r) => {
    const i = t(n, r);
    let s = () => {
      throw new Error(ce(15));
    };
    const o = { getState: i.getState, dispatch: (l, ...u) => s(l, ...u) },
      a = e.map((l) => l(o));
    return (s = Js(...a)(i.dispatch)), { ...i, dispatch: s };
  };
}
function Rx(e) {
  return nc(e) && "type" in e && typeof e.type == "string";
}
var p0 = Symbol.for("immer-nothing"),
  hf = Symbol.for("immer-draftable"),
  ze = Symbol.for("immer-state");
function et(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var dr = Object.getPrototypeOf;
function En(e) {
  return !!e && !!e[ze];
}
function Pt(e) {
  var t;
  return e
    ? m0(e) ||
        Array.isArray(e) ||
        !!e[hf] ||
        !!((t = e.constructor) != null && t[hf]) ||
        Mo(e) ||
        Ro(e)
    : !1;
}
var _x = Object.prototype.constructor.toString();
function m0(e) {
  if (!e || typeof e != "object") return !1;
  const t = dr(e);
  if (t === null) return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object
    ? !0
    : typeof n == "function" && Function.toString.call(n) === _x;
}
function qs(e, t) {
  No(e) === 0
    ? Reflect.ownKeys(e).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function No(e) {
  const t = e[ze];
  return t ? t.type_ : Array.isArray(e) ? 1 : Mo(e) ? 2 : Ro(e) ? 3 : 0;
}
function Rl(e, t) {
  return No(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function g0(e, t, n) {
  const r = No(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function Ax(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Mo(e) {
  return e instanceof Map;
}
function Ro(e) {
  return e instanceof Set;
}
function cn(e) {
  return e.copy_ || e.base_;
}
function _l(e, t) {
  if (Mo(e)) return new Map(e);
  if (Ro(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const n = m0(e);
  if (t === !0 || (t === "class_only" && !n)) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[ze];
    let i = Reflect.ownKeys(r);
    for (let s = 0; s < i.length; s++) {
      const o = i[s],
        a = r[o];
      a.writable === !1 && ((a.writable = !0), (a.configurable = !0)),
        (a.get || a.set) &&
          (r[o] = {
            configurable: !0,
            writable: !0,
            enumerable: a.enumerable,
            value: e[o],
          });
    }
    return Object.create(dr(e), r);
  } else {
    const r = dr(e);
    if (r !== null && n) return { ...e };
    const i = Object.create(r);
    return Object.assign(i, e);
  }
}
function rc(e, t = !1) {
  return (
    _o(e) ||
      En(e) ||
      !Pt(e) ||
      (No(e) > 1 && (e.set = e.add = e.clear = e.delete = Lx),
      Object.freeze(e),
      t && Object.entries(e).forEach(([n, r]) => rc(r, !0))),
    e
  );
}
function Lx() {
  et(2);
}
function _o(e) {
  return Object.isFrozen(e);
}
var Dx = {};
function Tn(e) {
  const t = Dx[e];
  return t || et(0, e), t;
}
var gi;
function y0() {
  return gi;
}
function zx(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function pf(e, t) {
  t &&
    (Tn("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function Al(e) {
  Ll(e), e.drafts_.forEach(Vx), (e.drafts_ = null);
}
function Ll(e) {
  e === gi && (gi = e.parent_);
}
function mf(e) {
  return (gi = zx(gi, e));
}
function Vx(e) {
  const t = e[ze];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function gf(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[ze].modified_ && (Al(t), et(4)),
        Pt(e) && ((e = Zs(t, e)), t.parent_ || eo(t, e)),
        t.patches_ &&
          Tn("Patches").generateReplacementPatches_(
            n[ze].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = Zs(t, n, [])),
    Al(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== p0 ? e : void 0
  );
}
function Zs(e, t, n) {
  if (_o(t)) return t;
  const r = t[ze];
  if (!r) return qs(t, (i, s) => yf(e, r, t, i, s, n)), t;
  if (r.scope_ !== e) return t;
  if (!r.modified_) return eo(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
    const i = r.copy_;
    let s = i,
      o = !1;
    r.type_ === 3 && ((s = new Set(i)), i.clear(), (o = !0)),
      qs(s, (a, l) => yf(e, r, i, a, l, n, o)),
      eo(e, i, !1),
      n &&
        e.patches_ &&
        Tn("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_);
  }
  return r.copy_;
}
function yf(e, t, n, r, i, s, o) {
  if (En(i)) {
    const a =
        s && t && t.type_ !== 3 && !Rl(t.assigned_, r) ? s.concat(r) : void 0,
      l = Zs(e, i, a);
    if ((g0(n, r, l), En(l))) e.canAutoFreeze_ = !1;
    else return;
  } else o && n.add(i);
  if (Pt(i) && !_o(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    Zs(e, i),
      (!t || !t.scope_.parent_) &&
        typeof r != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(n, r) &&
        eo(e, i);
  }
}
function eo(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && rc(t, n);
}
function Ox(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : y0(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let i = r,
    s = ic;
  n && ((i = [r]), (s = yi));
  const { revoke: o, proxy: a } = Proxy.revocable(i, s);
  return (r.draft_ = a), (r.revoke_ = o), a;
}
var ic = {
    get(e, t) {
      if (t === ze) return e;
      const n = cn(e);
      if (!Rl(n, t)) return Ix(e, n, t);
      const r = n[t];
      return e.finalized_ || !Pt(r)
        ? r
        : r === xa(e.base_, t)
        ? (wa(e), (e.copy_[t] = zl(r, e)))
        : r;
    },
    has(e, t) {
      return t in cn(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(cn(e));
    },
    set(e, t, n) {
      const r = v0(cn(e), t);
      if (r != null && r.set) return r.set.call(e.draft_, n), !0;
      if (!e.modified_) {
        const i = xa(cn(e), t),
          s = i == null ? void 0 : i[ze];
        if (s && s.base_ === n)
          return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
        if (Ax(n, i) && (n !== void 0 || Rl(e.base_, t))) return !0;
        wa(e), Dl(e);
      }
      return (
        (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = n), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        xa(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), wa(e), Dl(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const n = cn(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty() {
      et(11);
    },
    getPrototypeOf(e) {
      return dr(e.base_);
    },
    setPrototypeOf() {
      et(12);
    },
  },
  yi = {};
qs(ic, (e, t) => {
  yi[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
yi.deleteProperty = function (e, t) {
  return yi.set.call(this, e, t, void 0);
};
yi.set = function (e, t, n) {
  return ic.set.call(this, e[0], t, n, e[0]);
};
function xa(e, t) {
  const n = e[ze];
  return (n ? cn(n) : e)[t];
}
function Ix(e, t, n) {
  var i;
  const r = v0(t, n);
  return r
    ? "value" in r
      ? r.value
      : (i = r.get) == null
      ? void 0
      : i.call(e.draft_)
    : void 0;
}
function v0(e, t) {
  if (!(t in e)) return;
  let n = dr(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = dr(n);
  }
}
function Dl(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && Dl(e.parent_));
}
function wa(e) {
  e.copy_ || (e.copy_ = _l(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var Fx = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, n, r) => {
        if (typeof t == "function" && typeof n != "function") {
          const s = n;
          n = t;
          const o = this;
          return function (l = s, ...u) {
            return o.produce(l, (c) => n.call(this, c, ...u));
          };
        }
        typeof n != "function" && et(6),
          r !== void 0 && typeof r != "function" && et(7);
        let i;
        if (Pt(t)) {
          const s = mf(this),
            o = zl(t, void 0);
          let a = !0;
          try {
            (i = n(o)), (a = !1);
          } finally {
            a ? Al(s) : Ll(s);
          }
          return pf(s, r), gf(i, s);
        } else if (!t || typeof t != "object") {
          if (
            ((i = n(t)),
            i === void 0 && (i = t),
            i === p0 && (i = void 0),
            this.autoFreeze_ && rc(i, !0),
            r)
          ) {
            const s = [],
              o = [];
            Tn("Patches").generateReplacementPatches_(t, i, s, o), r(s, o);
          }
          return i;
        } else et(1, t);
      }),
      (this.produceWithPatches = (t, n) => {
        if (typeof t == "function")
          return (o, ...a) => this.produceWithPatches(o, (l) => t(l, ...a));
        let r, i;
        return [
          this.produce(t, n, (o, a) => {
            (r = o), (i = a);
          }),
          r,
          i,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    Pt(e) || et(8), En(e) && (e = Bx(e));
    const t = mf(this),
      n = zl(e, void 0);
    return (n[ze].isManual_ = !0), Ll(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[ze];
    (!n || !n.isManual_) && et(9);
    const { scope_: r } = n;
    return pf(r, t), gf(void 0, r);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const i = t[n];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = Tn("Patches").applyPatches_;
    return En(e) ? r(e, t) : this.produce(e, (i) => r(i, t));
  }
};
function zl(e, t) {
  const n = Mo(e)
    ? Tn("MapSet").proxyMap_(e, t)
    : Ro(e)
    ? Tn("MapSet").proxySet_(e, t)
    : Ox(e, t);
  return (t ? t.scope_ : y0()).drafts_.push(n), n;
}
function Bx(e) {
  return En(e) || et(10, e), x0(e);
}
function x0(e) {
  if (!Pt(e) || _o(e)) return e;
  const t = e[ze];
  let n;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (n = _l(e, t.scope_.immer_.useStrictShallowCopy_));
  } else n = _l(e, !0);
  return (
    qs(n, (r, i) => {
      g0(n, r, x0(i));
    }),
    t && (t.finalized_ = !1),
    n
  );
}
var Ve = new Fx(),
  w0 = Ve.produce;
Ve.produceWithPatches.bind(Ve);
Ve.setAutoFreeze.bind(Ve);
Ve.setUseStrictShallowCopy.bind(Ve);
Ve.applyPatches.bind(Ve);
Ve.createDraft.bind(Ve);
Ve.finishDraft.bind(Ve);
function S0(e) {
  return ({ dispatch: n, getState: r }) =>
    (i) =>
    (s) =>
      typeof s == "function" ? s(n, r, e) : i(s);
}
var Ux = S0(),
  Hx = S0,
  $x =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? Js
              : Js.apply(null, arguments);
        },
  Wx = (e) => e && typeof e.match == "function";
function Kr(e, t) {
  function n(...r) {
    if (t) {
      let i = t(...r);
      if (!i) throw new Error(yt(0));
      return {
        type: e,
        payload: i.payload,
        ...("meta" in i && { meta: i.meta }),
        ...("error" in i && { error: i.error }),
      };
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = () => `${e}`),
    (n.type = e),
    (n.match = (r) => Rx(r) && r.type === e),
    n
  );
}
var C0 = class Ar extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Ar.prototype);
  }
  static get [Symbol.species]() {
    return Ar;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new Ar(...t[0].concat(this))
      : new Ar(...t.concat(this));
  }
};
function vf(e) {
  return Pt(e) ? w0(e, () => {}) : e;
}
function xf(e, t, n) {
  return e.has(t) ? e.get(t) : e.set(t, n(t)).get(t);
}
function Kx(e) {
  return typeof e == "boolean";
}
var Gx = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: i = !0,
        actionCreatorCheck: s = !0,
      } = t ?? {};
      let o = new C0();
      return n && (Kx(n) ? o.push(Ux) : o.push(Hx(n.extraArgument))), o;
    },
  Qx = "RTK_autoBatch",
  wf = (e) => (t) => {
    setTimeout(t, e);
  },
  Xx =
    (e = { type: "raf" }) =>
    (t) =>
    (...n) => {
      const r = t(...n);
      let i = !0,
        s = !1,
        o = !1;
      const a = new Set(),
        l =
          e.type === "tick"
            ? queueMicrotask
            : e.type === "raf"
            ? typeof window < "u" && window.requestAnimationFrame
              ? window.requestAnimationFrame
              : wf(10)
            : e.type === "callback"
            ? e.queueNotification
            : wf(e.timeout),
        u = () => {
          (o = !1), s && ((s = !1), a.forEach((c) => c()));
        };
      return Object.assign({}, r, {
        subscribe(c) {
          const f = () => i && c(),
            h = r.subscribe(f);
          return (
            a.add(c),
            () => {
              h(), a.delete(c);
            }
          );
        },
        dispatch(c) {
          var f;
          try {
            return (
              (i = !((f = c == null ? void 0 : c.meta) != null && f[Qx])),
              (s = !i),
              s && (o || ((o = !0), l(u))),
              r.dispatch(c)
            );
          } finally {
            i = !0;
          }
        },
      });
    },
  Yx = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {};
      let i = new C0(e);
      return r && i.push(Xx(typeof r == "object" ? r : void 0)), i;
    };
function Jx(e) {
  const t = Gx(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: i = !0,
      preloadedState: s = void 0,
      enhancers: o = void 0,
    } = e;
  let a;
  if (typeof n == "function") a = n;
  else if (nc(n)) a = Nx(n);
  else throw new Error(yt(1));
  let l;
  typeof r == "function" ? (l = r(t)) : (l = t());
  let u = Js;
  i && (u = $x({ trace: !1, ...(typeof i == "object" && i) }));
  const c = Mx(...l),
    f = Yx(c);
  let h = typeof o == "function" ? o(f) : f();
  const y = u(...h);
  return h0(a, s, y);
}
function k0(e) {
  const t = {},
    n = [];
  let r;
  const i = {
    addCase(s, o) {
      const a = typeof s == "string" ? s : s.type;
      if (!a) throw new Error(yt(28));
      if (a in t) throw new Error(yt(29));
      return (t[a] = o), i;
    },
    addMatcher(s, o) {
      return n.push({ matcher: s, reducer: o }), i;
    },
    addDefaultCase(s) {
      return (r = s), i;
    },
  };
  return e(i), [t, n, r];
}
function qx(e) {
  return typeof e == "function";
}
function Zx(e, t) {
  let [n, r, i] = k0(t),
    s;
  if (qx(e)) s = () => vf(e());
  else {
    const a = vf(e);
    s = () => a;
  }
  function o(a = s(), l) {
    let u = [
      n[l.type],
      ...r.filter(({ matcher: c }) => c(l)).map(({ reducer: c }) => c),
    ];
    return (
      u.filter((c) => !!c).length === 0 && (u = [i]),
      u.reduce((c, f) => {
        if (f)
          if (En(c)) {
            const y = f(c, l);
            return y === void 0 ? c : y;
          } else {
            if (Pt(c)) return w0(c, (h) => f(h, l));
            {
              const h = f(c, l);
              if (h === void 0) {
                if (c === null) return c;
                throw Error(
                  "A case reducer on a non-draftable value must not return undefined"
                );
              }
              return h;
            }
          }
        return c;
      }, a)
    );
  }
  return (o.getInitialState = s), o;
}
var e4 = (e, t) => (Wx(e) ? e.match(t) : e(t));
function t4(...e) {
  return (t) => e.some((n) => e4(n, t));
}
var n4 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  r4 = (e = 21) => {
    let t = "",
      n = e;
    for (; n--; ) t += n4[(Math.random() * 64) | 0];
    return t;
  },
  i4 = ["name", "message", "stack", "code"],
  Sa = class {
    constructor(e, t) {
      Bo(this, "_type");
      (this.payload = e), (this.meta = t);
    }
  },
  Sf = class {
    constructor(e, t) {
      Bo(this, "_type");
      (this.payload = e), (this.meta = t);
    }
  },
  s4 = (e) => {
    if (typeof e == "object" && e !== null) {
      const t = {};
      for (const n of i4) typeof e[n] == "string" && (t[n] = e[n]);
      return t;
    }
    return { message: String(e) };
  },
  P0 = (() => {
    function e(t, n, r) {
      const i = Kr(t + "/fulfilled", (l, u, c, f) => ({
          payload: l,
          meta: {
            ...(f || {}),
            arg: c,
            requestId: u,
            requestStatus: "fulfilled",
          },
        })),
        s = Kr(t + "/pending", (l, u, c) => ({
          payload: void 0,
          meta: {
            ...(c || {}),
            arg: u,
            requestId: l,
            requestStatus: "pending",
          },
        })),
        o = Kr(t + "/rejected", (l, u, c, f, h) => ({
          payload: f,
          error: ((r && r.serializeError) || s4)(l || "Rejected"),
          meta: {
            ...(h || {}),
            arg: c,
            requestId: u,
            rejectedWithValue: !!f,
            requestStatus: "rejected",
            aborted: (l == null ? void 0 : l.name) === "AbortError",
            condition: (l == null ? void 0 : l.name) === "ConditionError",
          },
        }));
      function a(l) {
        return (u, c, f) => {
          const h = r != null && r.idGenerator ? r.idGenerator(l) : r4(),
            y = new AbortController();
          let v, x;
          function w(p) {
            (x = p), y.abort();
          }
          const m = (async function () {
            var C, k;
            let p;
            try {
              let j =
                (C = r == null ? void 0 : r.condition) == null
                  ? void 0
                  : C.call(r, l, { getState: c, extra: f });
              if ((a4(j) && (j = await j), j === !1 || y.signal.aborted))
                throw {
                  name: "ConditionError",
                  message: "Aborted due to condition callback returning false.",
                };
              const T = new Promise((P, A) => {
                (v = () => {
                  A({ name: "AbortError", message: x || "Aborted" });
                }),
                  y.signal.addEventListener("abort", v);
              });
              u(
                s(
                  h,
                  l,
                  (k = r == null ? void 0 : r.getPendingMeta) == null
                    ? void 0
                    : k.call(
                        r,
                        { requestId: h, arg: l },
                        { getState: c, extra: f }
                      )
                )
              ),
                (p = await Promise.race([
                  T,
                  Promise.resolve(
                    n(l, {
                      dispatch: u,
                      getState: c,
                      extra: f,
                      requestId: h,
                      signal: y.signal,
                      abort: w,
                      rejectWithValue: (P, A) => new Sa(P, A),
                      fulfillWithValue: (P, A) => new Sf(P, A),
                    })
                  ).then((P) => {
                    if (P instanceof Sa) throw P;
                    return P instanceof Sf
                      ? i(P.payload, h, l, P.meta)
                      : i(P, h, l);
                  }),
                ]));
            } catch (j) {
              p =
                j instanceof Sa ? o(null, h, l, j.payload, j.meta) : o(j, h, l);
            } finally {
              v && y.signal.removeEventListener("abort", v);
            }
            return (
              (r &&
                !r.dispatchConditionRejection &&
                o.match(p) &&
                p.meta.condition) ||
                u(p),
              p
            );
          })();
          return Object.assign(m, {
            abort: w,
            requestId: h,
            arg: l,
            unwrap() {
              return m.then(o4);
            },
          });
        };
      }
      return Object.assign(a, {
        pending: s,
        rejected: o,
        fulfilled: i,
        settled: t4(o, i),
        typePrefix: t,
      });
    }
    return (e.withTypes = () => e), e;
  })();
function o4(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function a4(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var l4 = Symbol.for("rtk-slice-createasyncthunk");
function u4(e, t) {
  return `${e}/${t}`;
}
function c4({ creators: e } = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[l4];
  return function (i) {
    const { name: s, reducerPath: o = s } = i;
    if (!s) throw new Error(yt(11));
    const a =
        (typeof i.reducers == "function" ? i.reducers(h4()) : i.reducers) || {},
      l = Object.keys(a),
      u = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      c = {
        addCase(g, C) {
          const k = typeof g == "string" ? g : g.type;
          if (!k) throw new Error(yt(12));
          if (k in u.sliceCaseReducersByType) throw new Error(yt(13));
          return (u.sliceCaseReducersByType[k] = C), c;
        },
        addMatcher(g, C) {
          return u.sliceMatchers.push({ matcher: g, reducer: C }), c;
        },
        exposeAction(g, C) {
          return (u.actionCreators[g] = C), c;
        },
        exposeCaseReducer(g, C) {
          return (u.sliceCaseReducersByName[g] = C), c;
        },
      };
    l.forEach((g) => {
      const C = a[g],
        k = {
          reducerName: g,
          type: u4(s, g),
          createNotation: typeof i.reducers == "function",
        };
      m4(C) ? y4(k, C, c, t) : p4(k, C, c);
    });
    function f() {
      const [g = {}, C = [], k = void 0] =
          typeof i.extraReducers == "function"
            ? k0(i.extraReducers)
            : [i.extraReducers],
        j = { ...g, ...u.sliceCaseReducersByType };
      return Zx(i.initialState, (T) => {
        for (let P in j) T.addCase(P, j[P]);
        for (let P of u.sliceMatchers) T.addMatcher(P.matcher, P.reducer);
        for (let P of C) T.addMatcher(P.matcher, P.reducer);
        k && T.addDefaultCase(k);
      });
    }
    const h = (g) => g,
      y = new Map();
    let v;
    function x(g, C) {
      return v || (v = f()), v(g, C);
    }
    function w() {
      return v || (v = f()), v.getInitialState();
    }
    function m(g, C = !1) {
      function k(T) {
        let P = T[g];
        return typeof P > "u" && C && (P = w()), P;
      }
      function j(T = h) {
        const P = xf(y, C, () => new WeakMap());
        return xf(P, T, () => {
          const A = {};
          for (const [R, ee] of Object.entries(i.selectors ?? {}))
            A[R] = d4(ee, T, w, C);
          return A;
        });
      }
      return {
        reducerPath: g,
        getSelectors: j,
        get selectors() {
          return j(k);
        },
        selectSlice: k,
      };
    }
    const p = {
      name: s,
      reducer: x,
      actions: u.actionCreators,
      caseReducers: u.sliceCaseReducersByName,
      getInitialState: w,
      ...m(o),
      injectInto(g, { reducerPath: C, ...k } = {}) {
        const j = C ?? o;
        return (
          g.inject({ reducerPath: j, reducer: x }, k), { ...p, ...m(j, !0) }
        );
      },
    };
    return p;
  };
}
function d4(e, t, n, r) {
  function i(s, ...o) {
    let a = t(s);
    return typeof a > "u" && r && (a = n()), e(a, ...o);
  }
  return (i.unwrapped = e), i;
}
var f4 = c4();
function h4() {
  function e(t, n) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...n };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...n) {
              return t(...n);
            },
          }[t.name],
          { _reducerDefinitionType: "reducer" }
        );
      },
      preparedReducer(t, n) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: t,
          reducer: n,
        };
      },
      asyncThunk: e,
    }
  );
}
function p4({ type: e, reducerName: t, createNotation: n }, r, i) {
  let s, o;
  if ("reducer" in r) {
    if (n && !g4(r)) throw new Error(yt(17));
    (s = r.reducer), (o = r.prepare);
  } else s = r;
  i.addCase(e, s)
    .exposeCaseReducer(t, s)
    .exposeAction(t, o ? Kr(e, o) : Kr(e));
}
function m4(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function g4(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function y4({ type: e, reducerName: t }, n, r, i) {
  if (!i) throw new Error(yt(18));
  const {
      payloadCreator: s,
      fulfilled: o,
      pending: a,
      rejected: l,
      settled: u,
      options: c,
    } = n,
    f = i(e, s, c);
  r.exposeAction(t, f),
    o && r.addCase(f.fulfilled, o),
    a && r.addCase(f.pending, a),
    l && r.addCase(f.rejected, l),
    u && r.addMatcher(f.settled, u),
    r.exposeCaseReducer(t, {
      fulfilled: o || rs,
      pending: a || rs,
      rejected: l || rs,
      settled: u || rs,
    });
}
function rs() {}
function yt(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const ws = P0("projects/fetchProjects", async () => {
    const e = await fetch("https://api.github.com/users/Abhishek6827/repos");
    if (!e.ok) throw new Error("Failed to fetch projects");
    const t = await e.json(),
      n = {
        Myntra: {
          description:
            "A fully responsive e-commerce fashion website clone with modern UI/UX, product catalog, shopping cart, and user authentication features.",
          technologies: ["React", "Redux", "CSS", "JavaScript"],
          demo: "https://Abhishek6827.github.io/Myntra/",
          category: "E-commerce",
          featured: !0,
          image:
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop&crop=center",
        },
        Amazon: {
          description:
            "A comprehensive Amazon-inspired e-commerce platform with product listings, search functionality, and responsive design.",
          technologies: ["React", "JavaScript", "CSS", "HTML"],
          demo: "https://Abhishek6827.github.io/Amazon/",
          category: "E-commerce",
          featured: !0,
          image:
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop&crop=center",
        },
        Kanban_WorkBoard: {
          description:
            "A project management dashboard with task tracking, team collaboration features, and intuitive drag-and-drop interface.",
          technologies: ["React", "Redux", "Tailwind CSS", "JavaScript"],
          demo: "https://Abhishek6827.github.io/Kanban_WorkBoard/",
          category: "Productivity",
          featured: !0,
          image:
            "https://images.unsplash.com/photo-1611224923853-0139583c060f?w=500&h=300&fit=crop&crop=center",
        },
        "Bharat-Clock": {
          description:
            "A beautiful digital clock application showing Indian time zones with elegant design and smooth animations.",
          technologies: ["JavaScript", "CSS", "HTML"],
          demo: "https://Abhishek6827.github.io/Bharat-Clock/",
          category: "Utility",
          featured: !1,
          image:
            "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=500&h=300&fit=crop&crop=center",
        },
        Calculator: {
          description:
            "A modern calculator application with scientific functions, memory operations, and responsive design.",
          technologies: ["JavaScript", "CSS", "HTML"],
          demo: "https://Abhishek6827.github.io/Calculator/",
          category: "Utility",
          featured: !1,
          image:
            "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=500&h=300&fit=crop&crop=center",
        },
        Elante_Mall: {
          description:
            "A shopping mall website with store directory, event listings, and interactive mall map functionality.",
          technologies: ["React", "CSS", "JavaScript"],
          demo: "https://Abhishek6827.github.io/Elante_Mall/",
          category: "Business",
          featured: !1,
          image:
            "https://images.unsplash.com/photo-1555529902-5261145633bf?w=500&h=300&fit=crop&crop=center",
        },
        Skill_Up: {
          description:
            "An educational platform for skill development with course listings, progress tracking, and interactive learning modules.",
          technologies: ["React", "Bootstrap", "JavaScript"],
          demo: "https://Abhishek6827.github.io/Skill_Up/",
          category: "Education",
          featured: !1,
          image:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop&crop=center",
        },
        Portfolio: {
          description:
            "My personal portfolio website showcasing projects, skills, and professional information built with modern React technologies.",
          technologies: ["React", "Redux", "Tailwind CSS", "Framer Motion"],
          demo: "https://Abhishek6827.github.io/Portfolio/",
          category: "Portfolio",
          featured: !1,
          image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center",
        },
      },
      r = [
        "Myntra",
        "Amazon",
        "Kanban_WorkBoard",
        "Skill_Up",
        "Elante_Mall",
        "Bharat-Clock",
        "Calculator",
        "Portfolio",
      ],
      i = r.map((o) => t.find((a) => a.name === o)).filter(Boolean),
      s = t.filter((o) => !r.includes(o.name));
    return [...i, ...s].map((o, a) => {
      var l, u, c, f, h, y, v;
      return {
        ...o,
        id: o.id || a + 1,
        description:
          ((l = n[o.name]) == null ? void 0 : l.description) || o.description,
        technologies: ((u = n[o.name]) == null ? void 0 : u.technologies) || [],
        demo: ((c = n[o.name]) == null ? void 0 : c.demo) || null,
        category: ((f = n[o.name]) == null ? void 0 : f.category) || "Other",
        featured: ((h = n[o.name]) == null ? void 0 : h.featured) || !1,
        image:
          ((y = n[o.name]) == null ? void 0 : y.image) ||
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop&crop=center",
        stars: o.stargazers_count || 0,
        lastUpdated: o.updated_at || new Date().toISOString(),
        deployStatus: "idle",
        deployedUrl: ((v = n[o.name]) == null ? void 0 : v.demo) || null,
      };
    });
  }),
  Ca = P0("projects/deployProject", async (e, { getState: t }) => {
    const { projects: n } = t().projects,
      r = n.find((i) => i.id === e);
    if (!r) throw new Error("Project not found");
    return (
      await new Promise((i) => setTimeout(i, 3e3)),
      {
        id: e,
        deployedUrl: `https://Abhishek6827.github.io/${r.name}`,
        status: "deployed",
      }
    );
  }),
  v4 = f4({
    name: "projects",
    initialState: { projects: [], status: "idle", error: null },
    reducers: {
      updateProject: (e, t) => {
        const { id: n, updates: r } = t.payload,
          i = e.projects.find((s) => s.id === n);
        i && Object.assign(i, r);
      },
    },
    extraReducers: (e) => {
      e.addCase(ws.pending, (t) => {
        t.status = "loading";
      })
        .addCase(ws.fulfilled, (t, n) => {
          (t.status = "succeeded"), (t.projects = n.payload);
        })
        .addCase(ws.rejected, (t, n) => {
          (t.status = "failed"), (t.error = n.error.message);
        })
        .addCase(Ca.pending, (t, n) => {
          const r = t.projects.find((i) => i.id === n.meta.arg);
          r && (r.deployStatus = "deploying");
        })
        .addCase(Ca.fulfilled, (t, n) => {
          const r = t.projects.find((i) => i.id === n.payload.id);
          r &&
            ((r.deployStatus = "deployed"),
            (r.deployedUrl = n.payload.deployedUrl));
        })
        .addCase(Ca.rejected, (t, n) => {
          const r = t.projects.find((i) => i.id === n.meta.arg);
          r && ((r.deployStatus = "failed"), (r.deployError = n.error.message));
        });
    },
  }),
  x4 = v4.reducer,
  w4 = Jx({
    reducer: { projects: x4 },
    middleware: (e) =>
      e({ serializableCheck: { ignoredActions: ["persist/PERSIST"] } }),
  });
function S4(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, i) =>
      i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
  });
}
function Ao(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Vl = (e) => Array.isArray(e);
function j0(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function vi(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Cf(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function sc(e, t, n, r) {
  if (typeof t == "function") {
    const [i, s] = Cf(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, s] = Cf(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  return t;
}
function Lo(e, t, n) {
  const r = e.getProps();
  return sc(r, t, n !== void 0 ? n : r.custom, e);
}
const oc = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  ac = ["initial", ...oc],
  Le = (e) => e;
let Ol = Le;
function lc(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const fr = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  vt = (e) => e * 1e3,
  xt = (e) => e / 1e3,
  C4 = lc(() => window.ScrollTimeline !== void 0);
class k4 {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  get finished() {
    return Promise.all(
      this.animations.map((t) => ("finished" in t ? t.finished : t))
    );
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((i) =>
      C4() && i.attachTimeline ? i.attachTimeline(t) : n(i)
    );
    return () => {
      r.forEach((i, s) => {
        i && i(), this.animations[s].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class P4 extends k4 {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function uc(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const Il = 2e4;
function E0(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Il; ) (t += n), (r = e.next(t));
  return t >= Il ? 1 / 0 : t;
}
function cc(e) {
  return typeof e == "function";
}
function kf(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const dc = (e) => Array.isArray(e) && typeof e[0] == "number",
  j4 = { linearEasing: void 0 };
function E4(e, t) {
  const n = lc(e);
  return () => {
    var r;
    return (r = j4[t]) !== null && r !== void 0 ? r : n();
  };
}
const to = E4(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  T0 = (e, t, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let s = 0; s < i; s++) r += e(fr(0, i - 1, s)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function b0(e) {
  return !!(
    (typeof e == "function" && to()) ||
    !e ||
    (typeof e == "string" && (e in Fl || to())) ||
    dc(e) ||
    (Array.isArray(e) && e.every(b0))
  );
}
const Lr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Fl = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Lr([0, 0.65, 0.55, 1]),
    circOut: Lr([0.55, 0, 1, 0.45]),
    backIn: Lr([0.31, 0.01, 0.66, -0.59]),
    backOut: Lr([0.33, 1.53, 0.69, 0.99]),
  };
function N0(e, t) {
  if (e)
    return typeof e == "function" && to()
      ? T0(e, t)
      : dc(e)
      ? Lr(e)
      : Array.isArray(e)
      ? e.map((n) => N0(n, t) || Fl.easeOut)
      : Fl[e];
}
const Ye = { x: !1, y: !1 };
function M0() {
  return Ye.x || Ye.y;
}
function T4(e, t, n) {
  var r;
  if (e instanceof Element) return [e];
  if (typeof e == "string") {
    let i = document;
    const s = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(e);
    return s ? Array.from(s) : [];
  }
  return Array.from(e);
}
function R0(e, t) {
  const n = T4(e),
    r = new AbortController(),
    i = { passive: !0, ...t, signal: r.signal };
  return [n, i, () => r.abort()];
}
function Pf(e) {
  return (t) => {
    t.pointerType === "touch" || M0() || e(t);
  };
}
function b4(e, t, n = {}) {
  const [r, i, s] = R0(e, n),
    o = Pf((a) => {
      const { target: l } = a,
        u = t(a);
      if (!u || !l) return;
      const c = Pf((f) => {
        u(f), l.removeEventListener("pointerleave", c);
      });
      l.addEventListener("pointerleave", c, i);
    });
  return (
    r.forEach((a) => {
      a.addEventListener("pointerenter", o, i);
    }),
    s
  );
}
const fc = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  Dr = new WeakSet();
function jf(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function ka(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
  );
}
const N4 = (e, t) => {
    const n = e.currentTarget;
    if (!n) return;
    const r = jf(() => {
      if (Dr.has(n)) return;
      ka(n, "down");
      const i = jf(() => {
          ka(n, "up");
        }),
        s = () => ka(n, "cancel");
      n.addEventListener("keyup", i, t), n.addEventListener("blur", s, t);
    });
    n.addEventListener("keydown", r, t),
      n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
  },
  M4 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function R4(e) {
  return M4.has(e.tagName) || e.tabIndex !== -1;
}
const _0 = (e, t) => (t ? (e === t ? !0 : _0(e, t.parentElement)) : !1);
function Ef(e) {
  return fc(e) && !M0();
}
function _4(e, t, n = {}) {
  const [r, i, s] = R0(e, n),
    o = (a) => {
      const l = a.currentTarget;
      if (!Ef(a) || Dr.has(l)) return;
      Dr.add(l);
      const u = t(a),
        c = (y, v) => {
          window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", h),
            !(!Ef(y) || !Dr.has(l)) &&
              (Dr.delete(l), u && u(y, { success: v }));
        },
        f = (y) => {
          c(y, n.useGlobalTarget || _0(l, y.target));
        },
        h = (y) => {
          c(y, !1);
        };
      window.addEventListener("pointerup", f, i),
        window.addEventListener("pointercancel", h, i);
    };
  return (
    r.forEach((a) => {
      R4(a) || (a.tabIndex = 0),
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, i),
        a.addEventListener("focus", (u) => N4(u, i), i);
    }),
    s
  );
}
function A4(e) {
  return e === "x" || e === "y"
    ? Ye[e]
      ? null
      : ((Ye[e] = !0),
        () => {
          Ye[e] = !1;
        })
    : Ye.x || Ye.y
    ? null
    : ((Ye.x = Ye.y = !0),
      () => {
        Ye.x = Ye.y = !1;
      });
}
const Ri = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  An = new Set(Ri),
  L4 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  D4 = (e) => (Vl(e) ? e[e.length - 1] || 0 : e),
  z4 = { skipAnimations: !1, useManualTiming: !1 };
function V4(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1;
  const s = new WeakSet();
  let o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(u) {
    s.has(u) && (l.schedule(u), e()), u(o);
  }
  const l = {
    schedule: (u, c = !1, f = !1) => {
      const y = f && r ? t : n;
      return c && s.add(u), y.has(u) || y.add(u), u;
    },
    cancel: (u) => {
      n.delete(u), s.delete(u);
    },
    process: (u) => {
      if (((o = u), r)) {
        i = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        t.forEach(a),
        t.clear(),
        (r = !1),
        i && ((i = !1), l.process(u));
    },
  };
  return l;
}
const is = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  O4 = 40;
function A0(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = () => (n = !0),
    o = is.reduce((m, p) => ((m[p] = V4(s)), m), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: u,
      preRender: c,
      render: f,
      postRender: h,
    } = o,
    y = () => {
      const m = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(m - i.timestamp, O4), 1)),
        (i.timestamp = m),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        f.process(i),
        h.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(y));
    },
    v = () => {
      (n = !0), (r = !0), i.isProcessing || e(y);
    };
  return {
    schedule: is.reduce((m, p) => {
      const g = o[p];
      return (m[p] = (C, k = !1, j = !1) => (n || v(), g.schedule(C, k, j))), m;
    }, {}),
    cancel: (m) => {
      for (let p = 0; p < is.length; p++) o[is[p]].cancel(m);
    },
    state: i,
    steps: o,
  };
}
const {
  schedule: H,
  cancel: Yt,
  state: fe,
  steps: Pa,
} = A0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Le, !0);
let Ss;
function I4() {
  Ss = void 0;
}
const ct = {
  now: () => (
    Ss === void 0 &&
      ct.set(
        fe.isProcessing || z4.useManualTiming ? fe.timestamp : performance.now()
      ),
    Ss
  ),
  set: (e) => {
    (Ss = e), queueMicrotask(I4);
  },
};
function hc(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function pc(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class mc {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return hc(this.subscriptions, t), () => pc(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function L0(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Tf = 30,
  F4 = (e) => !isNaN(parseFloat(e));
class B4 {
  constructor(t, n = {}) {
    (this.version = "11.16.0"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const s = ct.now();
        this.updatedAt !== s && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = ct.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = F4(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new mc());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            H.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = ct.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Tf
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Tf);
    return L0(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function xi(e, t) {
  return new B4(e, t);
}
function U4(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, xi(n));
}
function H4(e, t) {
  const n = Lo(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const a = D4(s[o]);
    U4(e, o, a);
  }
}
const we = (e) => !!(e && e.getVelocity);
function $4(e) {
  return !!(we(e) && e.add);
}
function Bl(e, t) {
  const n = e.getValue("willChange");
  if ($4(n)) return n.add(t);
}
const gc = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  W4 = "framerAppearId",
  D0 = "data-" + gc(W4);
function z0(e) {
  return e.props[D0];
}
const V0 = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  K4 = 1e-7,
  G4 = 12;
function Q4(e, t, n, r, i) {
  let s,
    o,
    a = 0;
  do (o = t + (n - t) / 2), (s = V0(o, r, i) - e), s > 0 ? (n = o) : (t = o);
  while (Math.abs(s) > K4 && ++a < G4);
  return o;
}
function _i(e, t, n, r) {
  if (e === t && n === r) return Le;
  const i = (s) => Q4(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : V0(i(s), t, r));
}
const O0 = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  I0 = (e) => (t) => 1 - e(1 - t),
  F0 = _i(0.33, 1.53, 0.69, 0.99),
  yc = I0(F0),
  B0 = O0(yc),
  U0 = (e) =>
    (e *= 2) < 1 ? 0.5 * yc(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  vc = (e) => 1 - Math.sin(Math.acos(e)),
  H0 = I0(vc),
  $0 = O0(vc),
  W0 = (e) => /^0[^.\s]+$/u.test(e);
function X4(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || W0(e)
    : !0;
}
const K0 = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  G0 = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Q0 = G0("--"),
  Y4 = G0("var(--"),
  xc = (e) => (Y4(e) ? J4.test(e.split("/*")[0].trim()) : !1),
  J4 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  q4 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Z4(e) {
  const t = q4.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function X0(e, t, n = 1) {
  const [r, i] = Z4(e);
  if (!r) return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return K0(o) ? parseFloat(o) : o;
  }
  return xc(i) ? X0(i, t, n + 1) : i;
}
const jt = (e, t, n) => (n > t ? t : n < e ? e : n),
  vr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  wi = { ...vr, transform: (e) => jt(0, 1, e) },
  ss = { ...vr, default: 1 },
  Ai = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Mt = Ai("deg"),
  dt = Ai("%"),
  _ = Ai("px"),
  e3 = Ai("vh"),
  t3 = Ai("vw"),
  bf = {
    ...dt,
    parse: (e) => dt.parse(e) / 100,
    transform: (e) => dt.transform(e * 100),
  },
  n3 = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  Nf = (e) => e === vr || e === _,
  Mf = (e, t) => parseFloat(e.split(", ")[t]),
  Rf =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return Mf(i[1], t);
      {
        const s = r.match(/^matrix\((.+)\)$/u);
        return s ? Mf(s[1], e) : 0;
      }
    },
  r3 = new Set(["x", "y", "z"]),
  i3 = Ri.filter((e) => !r3.has(e));
function s3(e) {
  const t = [];
  return (
    i3.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const hr = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Rf(4, 13),
  y: Rf(5, 14),
};
hr.translateX = hr.x;
hr.translateY = hr.y;
const Y0 = (e) => (t) => t.test(e),
  o3 = { test: (e) => e === "auto", parse: (e) => e },
  J0 = [vr, _, dt, Mt, t3, e3, o3],
  _f = (e) => J0.find(Y0(e)),
  xn = new Set();
let Ul = !1,
  Hl = !1;
function q0() {
  if (Hl) {
    const e = Array.from(xn).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = s3(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([s, o]) => {
            var a;
            (a = r.getValue(s)) === null || a === void 0 || a.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Hl = !1), (Ul = !1), xn.forEach((e) => e.complete()), xn.clear();
}
function Z0() {
  xn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Hl = !0);
  });
}
function a3() {
  Z0(), q0();
}
class wc {
  constructor(t, n, r, i, s, o = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = s),
      (this.isAsync = o);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (xn.add(this), Ul || ((Ul = !0), H.read(Z0), H.resolveKeyframes(q0)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    for (let s = 0; s < t.length; s++)
      if (t[s] === null)
        if (s === 0) {
          const o = i == null ? void 0 : i.get(),
            a = t[t.length - 1];
          if (o !== void 0) t[0] = o;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), i && o === void 0 && i.set(t[0]);
        } else t[s] = t[s - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      xn.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), xn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Gr = (e) => Math.round(e * 1e5) / 1e5,
  Sc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function l3(e) {
  return e == null;
}
const u3 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Cc = (e, t) => (n) =>
    !!(
      (typeof n == "string" && u3.test(n) && n.startsWith(e)) ||
      (t && !l3(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  e1 = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, s, o, a] = r.match(Sc);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  c3 = (e) => jt(0, 255, e),
  ja = { ...vr, transform: (e) => Math.round(c3(e)) },
  gn = {
    test: Cc("rgb", "red"),
    parse: e1("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      ja.transform(e) +
      ", " +
      ja.transform(t) +
      ", " +
      ja.transform(n) +
      ", " +
      Gr(wi.transform(r)) +
      ")",
  };
function d3(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const $l = { test: Cc("#"), parse: d3, transform: gn.transform },
  Gn = {
    test: Cc("hsl", "hue"),
    parse: e1("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      dt.transform(Gr(t)) +
      ", " +
      dt.transform(Gr(n)) +
      ", " +
      Gr(wi.transform(r)) +
      ")",
  },
  ve = {
    test: (e) => gn.test(e) || $l.test(e) || Gn.test(e),
    parse: (e) =>
      gn.test(e) ? gn.parse(e) : Gn.test(e) ? Gn.parse(e) : $l.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? gn.transform(e)
        : Gn.transform(e),
  },
  f3 =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function h3(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(Sc)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(f3)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const t1 = "number",
  n1 = "color",
  p3 = "var",
  m3 = "var(",
  Af = "${}",
  g3 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Si(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let s = 0;
  const a = t
    .replace(
      g3,
      (l) => (
        ve.test(l)
          ? (r.color.push(s), i.push(n1), n.push(ve.parse(l)))
          : l.startsWith(m3)
          ? (r.var.push(s), i.push(p3), n.push(l))
          : (r.number.push(s), i.push(t1), n.push(parseFloat(l))),
        ++s,
        Af
      )
    )
    .split(Af);
  return { values: n, split: a, indexes: r, types: i };
}
function r1(e) {
  return Si(e).values;
}
function i1(e) {
  const { split: t, types: n } = Si(e),
    r = t.length;
  return (i) => {
    let s = "";
    for (let o = 0; o < r; o++)
      if (((s += t[o]), i[o] !== void 0)) {
        const a = n[o];
        a === t1
          ? (s += Gr(i[o]))
          : a === n1
          ? (s += ve.transform(i[o]))
          : (s += i[o]);
      }
    return s;
  };
}
const y3 = (e) => (typeof e == "number" ? 0 : e);
function v3(e) {
  const t = r1(e);
  return i1(e)(t.map(y3));
}
const Jt = {
    test: h3,
    parse: r1,
    createTransformer: i1,
    getAnimatableNone: v3,
  },
  x3 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function w3(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Sc) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let s = x3.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + i + ")";
}
const S3 = /\b([a-z-]*)\(.*?\)/gu,
  Wl = {
    ...Jt,
    getAnimatableNone: (e) => {
      const t = e.match(S3);
      return t ? t.map(w3).join(" ") : e;
    },
  },
  C3 = {
    borderWidth: _,
    borderTopWidth: _,
    borderRightWidth: _,
    borderBottomWidth: _,
    borderLeftWidth: _,
    borderRadius: _,
    radius: _,
    borderTopLeftRadius: _,
    borderTopRightRadius: _,
    borderBottomRightRadius: _,
    borderBottomLeftRadius: _,
    width: _,
    maxWidth: _,
    height: _,
    maxHeight: _,
    top: _,
    right: _,
    bottom: _,
    left: _,
    padding: _,
    paddingTop: _,
    paddingRight: _,
    paddingBottom: _,
    paddingLeft: _,
    margin: _,
    marginTop: _,
    marginRight: _,
    marginBottom: _,
    marginLeft: _,
    backgroundPositionX: _,
    backgroundPositionY: _,
  },
  k3 = {
    rotate: Mt,
    rotateX: Mt,
    rotateY: Mt,
    rotateZ: Mt,
    scale: ss,
    scaleX: ss,
    scaleY: ss,
    scaleZ: ss,
    skew: Mt,
    skewX: Mt,
    skewY: Mt,
    distance: _,
    translateX: _,
    translateY: _,
    translateZ: _,
    x: _,
    y: _,
    z: _,
    perspective: _,
    transformPerspective: _,
    opacity: wi,
    originX: bf,
    originY: bf,
    originZ: _,
  },
  Lf = { ...vr, transform: Math.round },
  kc = {
    ...C3,
    ...k3,
    zIndex: Lf,
    size: _,
    fillOpacity: wi,
    strokeOpacity: wi,
    numOctaves: Lf,
  },
  P3 = {
    ...kc,
    color: ve,
    backgroundColor: ve,
    outlineColor: ve,
    fill: ve,
    stroke: ve,
    borderColor: ve,
    borderTopColor: ve,
    borderRightColor: ve,
    borderBottomColor: ve,
    borderLeftColor: ve,
    filter: Wl,
    WebkitFilter: Wl,
  },
  Pc = (e) => P3[e];
function s1(e, t) {
  let n = Pc(e);
  return (
    n !== Wl && (n = Jt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const j3 = new Set(["auto", "none", "0"]);
function E3(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const s = e[r];
    typeof s == "string" && !j3.has(s) && Si(s).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (const s of t) e[s] = s1(n, i);
}
class o1 extends wc {
  constructor(t, n, r, i, s) {
    super(t, n, r, i, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && ((u = u.trim()), xc(u))) {
        const c = X0(u, n.current);
        c !== void 0 && (t[l] = c),
          l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !n3.has(r) || t.length !== 2)) return;
    const [i, s] = t,
      o = _f(i),
      a = _f(s);
    if (o !== a)
      if (Nf(o) && Nf(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) X4(t[i]) && r.push(i);
    r.length && E3(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = hr[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n || !n.current) return;
    const s = n.getValue(r);
    s && s.jump(this.measuredOrigin, !1);
    const o = i.length - 1,
      a = i[o];
    (i[o] = hr[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, u]) => {
          n.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
const Df = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (Jt.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function T3(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function b3(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const s = e[e.length - 1],
    o = Df(i, t),
    a = Df(s, t);
  return !o || !a ? !1 : T3(e) || ((n === "spring" || cc(n)) && r);
}
const N3 = (e) => e !== null;
function Do(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(N3),
    s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !s || r === void 0 ? i[s] : r;
}
const M3 = 40;
class a1 {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: o = "loop",
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = ct.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: s,
        repeatType: o,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > M3
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && a3(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = ct.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: i,
      velocity: s,
      delay: o,
      onComplete: a,
      onUpdate: l,
      isGenerator: u,
    } = this.options;
    if (!u && !b3(t, r, i, s))
      if (o) this.options.duration = 0;
      else {
        l == null || l(Do(t, this.options, n)),
          a == null || a(),
          this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    (this.options.type = "keyframes"), (this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const K = (e, t, n) => e + (t - e) * n;
function Ea(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function R3({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    s = 0,
    o = 0;
  if (!t) i = s = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = Ea(l, a, e + 1 / 3)), (s = Ea(l, a, e)), (o = Ea(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function no(e, t) {
  return (n) => (n > 0 ? t : e);
}
const Ta = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  _3 = [$l, gn, Gn],
  A3 = (e) => _3.find((t) => t.test(e));
function zf(e) {
  const t = A3(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === Gn && (n = R3(n)), n;
}
const Vf = (e, t) => {
    const n = zf(e),
      r = zf(t);
    if (!n || !r) return no(e, t);
    const i = { ...n };
    return (s) => (
      (i.red = Ta(n.red, r.red, s)),
      (i.green = Ta(n.green, r.green, s)),
      (i.blue = Ta(n.blue, r.blue, s)),
      (i.alpha = K(n.alpha, r.alpha, s)),
      gn.transform(i)
    );
  },
  L3 = (e, t) => (n) => t(e(n)),
  Li = (...e) => e.reduce(L3),
  Kl = new Set(["none", "hidden"]);
function D3(e, t) {
  return Kl.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function z3(e, t) {
  return (n) => K(e, t, n);
}
function jc(e) {
  return typeof e == "number"
    ? z3
    : typeof e == "string"
    ? xc(e)
      ? no
      : ve.test(e)
      ? Vf
      : I3
    : Array.isArray(e)
    ? l1
    : typeof e == "object"
    ? ve.test(e)
      ? Vf
      : V3
    : no;
}
function l1(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((s, o) => jc(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < r; o++) n[o] = i[o](s);
    return n;
  };
}
function V3(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = jc(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r) n[s] = r[s](i);
    return n;
  };
}
function O3(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const o = t.types[s],
      a = e.indexes[o][i[o]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[s] = l), i[o]++;
  }
  return r;
}
const I3 = (e, t) => {
  const n = Jt.createTransformer(t),
    r = Si(e),
    i = Si(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Kl.has(e) && !i.values.length) || (Kl.has(t) && !r.values.length)
      ? D3(e, t)
      : Li(l1(O3(r, i), i.values), n)
    : no(e, t);
};
function u1(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? K(e, t, n)
    : jc(e)(e, t);
}
const F3 = 5;
function c1(e, t, n) {
  const r = Math.max(t - F3, 0);
  return L0(n - e(r), t - r);
}
const X = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Of = 0.001;
function B3({
  duration: e = X.duration,
  bounce: t = X.bounce,
  velocity: n = X.velocity,
  mass: r = X.mass,
}) {
  let i,
    s,
    o = 1 - t;
  (o = jt(X.minDamping, X.maxDamping, o)),
    (e = jt(X.minDuration, X.maxDuration, xt(e))),
    o < 1
      ? ((i = (u) => {
          const c = u * o,
            f = c * e,
            h = c - n,
            y = Gl(u, o),
            v = Math.exp(-f);
          return Of - (h / y) * v;
        }),
        (s = (u) => {
          const f = u * o * e,
            h = f * n + n,
            y = Math.pow(o, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-f),
            x = Gl(Math.pow(u, 2), o);
          return ((-i(u) + Of > 0 ? -1 : 1) * ((h - y) * v)) / x;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -0.001 + c * f;
        }),
        (s = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const a = 5 / e,
    l = H3(i, s, a);
  if (((e = vt(e)), isNaN(l)))
    return { stiffness: X.stiffness, damping: X.damping, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
  }
}
const U3 = 12;
function H3(e, t, n) {
  let r = n;
  for (let i = 1; i < U3; i++) r = r - e(r) / t(r);
  return r;
}
function Gl(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const $3 = ["duration", "bounce"],
  W3 = ["stiffness", "damping", "mass"];
function If(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function K3(e) {
  let t = {
    velocity: X.velocity,
    stiffness: X.stiffness,
    damping: X.damping,
    mass: X.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!If(e, W3) && If(e, $3))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        s = 2 * jt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: X.mass, stiffness: i, damping: s };
    } else {
      const n = B3(e);
      (t = { ...t, ...n, mass: X.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function d1(e = X.visualDuration, t = X.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: i } = n;
  const s = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: s },
    {
      stiffness: l,
      damping: u,
      mass: c,
      duration: f,
      velocity: h,
      isResolvedFromDuration: y,
    } = K3({ ...n, velocity: -xt(n.velocity || 0) }),
    v = h || 0,
    x = u / (2 * Math.sqrt(l * c)),
    w = o - s,
    m = xt(Math.sqrt(l / c)),
    p = Math.abs(w) < 5;
  r || (r = p ? X.restSpeed.granular : X.restSpeed.default),
    i || (i = p ? X.restDelta.granular : X.restDelta.default);
  let g;
  if (x < 1) {
    const k = Gl(m, x);
    g = (j) => {
      const T = Math.exp(-x * m * j);
      return (
        o - T * (((v + x * m * w) / k) * Math.sin(k * j) + w * Math.cos(k * j))
      );
    };
  } else if (x === 1) g = (k) => o - Math.exp(-m * k) * (w + (v + m * w) * k);
  else {
    const k = m * Math.sqrt(x * x - 1);
    g = (j) => {
      const T = Math.exp(-x * m * j),
        P = Math.min(k * j, 300);
      return (
        o - (T * ((v + x * m * w) * Math.sinh(P) + k * w * Math.cosh(P))) / k
      );
    };
  }
  const C = {
    calculatedDuration: (y && f) || null,
    next: (k) => {
      const j = g(k);
      if (y) a.done = k >= f;
      else {
        let T = 0;
        x < 1 && (T = k === 0 ? vt(v) : c1(g, k, j));
        const P = Math.abs(T) <= r,
          A = Math.abs(o - j) <= i;
        a.done = P && A;
      }
      return (a.value = a.done ? o : j), a;
    },
    toString: () => {
      const k = Math.min(E0(C), Il),
        j = T0((T) => C.next(k * T).value, k, 30);
      return k + "ms " + j;
    },
  };
  return C;
}
function Ff({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    h = { done: !1, value: f },
    y = (P) => (a !== void 0 && P < a) || (l !== void 0 && P > l),
    v = (P) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - P) < Math.abs(l - P)
        ? a
        : l;
  let x = n * t;
  const w = f + x,
    m = o === void 0 ? w : o(w);
  m !== w && (x = m - f);
  const p = (P) => -x * Math.exp(-P / r),
    g = (P) => m + p(P),
    C = (P) => {
      const A = p(P),
        R = g(P);
      (h.done = Math.abs(A) <= u), (h.value = h.done ? m : R);
    };
  let k, j;
  const T = (P) => {
    y(h.value) &&
      ((k = P),
      (j = d1({
        keyframes: [h.value, v(h.value)],
        velocity: c1(g, P, h.value),
        damping: i,
        stiffness: s,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    T(0),
    {
      calculatedDuration: null,
      next: (P) => {
        let A = !1;
        return (
          !j && k === void 0 && ((A = !0), C(P), T(P)),
          k !== void 0 && P >= k ? j.next(P - k) : (!A && C(P), h)
        );
      },
    }
  );
}
const G3 = _i(0.42, 0, 1, 1),
  Q3 = _i(0, 0, 0.58, 1),
  f1 = _i(0.42, 0, 0.58, 1),
  X3 = (e) => Array.isArray(e) && typeof e[0] != "number",
  Bf = {
    linear: Le,
    easeIn: G3,
    easeInOut: f1,
    easeOut: Q3,
    circIn: vc,
    circInOut: $0,
    circOut: H0,
    backIn: yc,
    backInOut: B0,
    backOut: F0,
    anticipate: U0,
  },
  Uf = (e) => {
    if (dc(e)) {
      Ol(e.length === 4);
      const [t, n, r, i] = e;
      return _i(t, n, r, i);
    } else if (typeof e == "string") return Ol(Bf[e] !== void 0), Bf[e];
    return e;
  };
function Y3(e, t, n) {
  const r = [],
    i = n || u1,
    s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let a = i(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || Le : t;
      a = Li(l, a);
    }
    r.push(a);
  }
  return r;
}
function J3(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if ((Ol(s === t.length), s === 1)) return () => t[0];
  if (s === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const o = Y3(t, r, i),
    a = o.length,
    l = (u) => {
      let c = 0;
      if (a > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const f = fr(e[c], e[c + 1], u);
      return o[c](f);
    };
  return n ? (u) => l(jt(e[0], e[s - 1], u)) : l;
}
function q3(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = fr(0, t, r);
    e.push(K(n, 1, i));
  }
}
function Z3(e) {
  const t = [0];
  return q3(t, e.length - 1), t;
}
function e5(e, t) {
  return e.map((n) => n * t);
}
function t5(e, t) {
  return e.map(() => t || f1).splice(0, e.length - 1);
}
function ro({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = X3(r) ? r.map(Uf) : Uf(r),
    s = { done: !1, value: t[0] },
    o = e5(n && n.length === t.length ? n : Z3(t), e),
    a = J3(o, t, { ease: Array.isArray(i) ? i : t5(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((s.value = a(l)), (s.done = l >= e), s),
  };
}
const n5 = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => H.update(t, !0),
      stop: () => Yt(t),
      now: () => (fe.isProcessing ? fe.timestamp : ct.now()),
    };
  },
  r5 = { decay: Ff, inertia: Ff, tween: ro, keyframes: ro, spring: d1 },
  i5 = (e) => e / 100;
class Ec extends a1 {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: l } = this.options;
        l && l();
      });
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options,
      o = (i == null ? void 0 : i.KeyframeResolver) || wc,
      a = (l, u) => this.onKeyframesResolved(l, u);
    (this.resolver = new o(s, a, n, r, i)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes)
        );
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: s,
        velocity: o = 0,
      } = this.options,
      a = cc(n) ? n : r5[n] || ro;
    let l, u;
    a !== ro &&
      typeof t[0] != "number" &&
      ((l = Li(i5, u1(t[0], t[1]))), (t = [0, 100]));
    const c = a({ ...this.options, keyframes: t });
    s === "mirror" &&
      (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -o })),
      c.calculatedDuration === null && (c.calculatedDuration = E0(c));
    const { calculatedDuration: f } = c,
      h = f + i,
      y = h * (r + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: f,
      resolvedDuration: h,
      totalDuration: y,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: P } = this.options;
      return { done: !0, value: P[P.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: s,
      mirroredGenerator: o,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: f,
    } = r;
    if (this.startTime === null) return s.next(0);
    const {
      delay: h,
      repeat: y,
      repeatType: v,
      repeatDelay: x,
      onUpdate: w,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const m = this.currentTime - h * (this.speed >= 0 ? 1 : -1),
      p = this.speed >= 0 ? m < 0 : m > c;
    (this.currentTime = Math.max(m, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let g = this.currentTime,
      C = s;
    if (y) {
      const P = Math.min(this.currentTime, c) / f;
      let A = Math.floor(P),
        R = P % 1;
      !R && P >= 1 && (R = 1),
        R === 1 && A--,
        (A = Math.min(A, y + 1)),
        !!(A % 2) &&
          (v === "reverse"
            ? ((R = 1 - R), x && (R -= x / f))
            : v === "mirror" && (C = o)),
        (g = jt(0, 1, R) * f);
    }
    const k = p ? { done: !1, value: l[0] } : C.next(g);
    a && (k.value = a(k.value));
    let { done: j } = k;
    !p &&
      u !== null &&
      (j = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const T =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && j));
    return (
      T && i !== void 0 && (k.value = Do(l, this.options, i)),
      w && w(k.value),
      T && this.finish(),
      k
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? xt(t.calculatedDuration) : 0;
  }
  get time() {
    return xt(this.currentTime);
  }
  set time(t) {
    (t = vt(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = xt(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = n5, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((s) => this.tick(s))), n && n();
    const i = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = i - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = i)
      : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const s5 = new Set(["opacity", "clipPath", "filter", "transform"]);
function o5(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: a = "easeInOut",
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = N0(a, i);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: s + 1,
      direction: o === "reverse" ? "alternate" : "normal",
    })
  );
}
const a5 = lc(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  io = 10,
  l5 = 2e4;
function u5(e) {
  return cc(e.type) || e.type === "spring" || !b0(e.ease);
}
function c5(e, t) {
  const n = new Ec({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let s = 0;
  for (; !r.done && s < l5; ) (r = n.sample(s)), i.push(r.value), (s += io);
  return { times: void 0, keyframes: i, duration: s - io, ease: "linear" };
}
const h1 = { anticipate: U0, backInOut: B0, circInOut: $0 };
function d5(e) {
  return e in h1;
}
class Hf extends a1 {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options;
    (this.resolver = new o1(
      s,
      (o, a) => this.onKeyframesResolved(o, a),
      n,
      r,
      i
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: i = 300,
      times: s,
      ease: o,
      type: a,
      motionValue: l,
      name: u,
      startTime: c,
    } = this.options;
    if (!(!((r = l.owner) === null || r === void 0) && r.current)) return !1;
    if (
      (typeof o == "string" && to() && d5(o) && (o = h1[o]), u5(this.options))
    ) {
      const {
          onComplete: h,
          onUpdate: y,
          motionValue: v,
          element: x,
          ...w
        } = this.options,
        m = c5(t, w);
      (t = m.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (i = m.duration),
        (s = m.times),
        (o = m.ease),
        (a = "keyframes");
    }
    const f = o5(l.owner.current, u, t, {
      ...this.options,
      duration: i,
      times: s,
      ease: o,
    });
    return (
      (f.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? (kf(f, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (f.onfinish = () => {
            const { onComplete: h } = this.options;
            l.set(Do(t, this.options, n)),
              h && h(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: f, duration: i, times: s, type: a, ease: o, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return xt(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return xt(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = vt(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return Le;
      const { animation: r } = n;
      kf(r, t);
    }
    return Le;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: s,
      ease: o,
      times: a,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: c,
          onComplete: f,
          element: h,
          ...y
        } = this.options,
        v = new Ec({
          ...y,
          keyframes: r,
          duration: i,
          type: s,
          ease: o,
          times: a,
          isGenerator: !0,
        }),
        x = vt(this.time);
      u.setWithVelocity(v.sample(x - io).value, v.sample(x).value, io);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: s,
      damping: o,
      type: a,
    } = t;
    return (
      a5() &&
      r &&
      s5.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !i &&
      s !== "mirror" &&
      o !== 0 &&
      a !== "inertia"
    );
  }
}
const f5 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  h5 = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  p5 = { type: "keyframes", duration: 0.8 },
  m5 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  g5 = (e, { keyframes: t }) =>
    t.length > 2
      ? p5
      : An.has(e)
      ? e.startsWith("scale")
        ? h5(t[1])
        : f5
      : m5;
function y5({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: s,
  repeatType: o,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const Tc =
  (e, t, n, r = {}, i, s) =>
  (o) => {
    const a = uc(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - vt(l);
    let c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: (h) => {
        t.set(h), a.onUpdate && a.onUpdate(h);
      },
      onComplete: () => {
        o(), a.onComplete && a.onComplete();
      },
      name: e,
      motionValue: t,
      element: s ? void 0 : i,
    };
    y5(a) || (c = { ...c, ...g5(e, c) }),
      c.duration && (c.duration = vt(c.duration)),
      c.repeatDelay && (c.repeatDelay = vt(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from);
    let f = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
        ((c.duration = 0), c.delay === 0 && (f = !0)),
      f && !s && t.get() !== void 0)
    ) {
      const h = Do(c.keyframes, a);
      if (h !== void 0)
        return (
          H.update(() => {
            c.onUpdate(h), c.onComplete();
          }),
          new P4([])
        );
    }
    return !s && Hf.supports(c) ? new Hf(c) : new Ec(c);
  };
function v5({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function p1(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var s;
  let { transition: o = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (o = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const f in l) {
    const h = e.getValue(
        f,
        (s = e.latestValues[f]) !== null && s !== void 0 ? s : null
      ),
      y = l[f];
    if (y === void 0 || (c && v5(c, f))) continue;
    const v = { delay: n, ...uc(o || {}, f) };
    let x = !1;
    if (window.MotionHandoffAnimation) {
      const m = z0(e);
      if (m) {
        const p = window.MotionHandoffAnimation(m, f, H);
        p !== null && ((v.startTime = p), (x = !0));
      }
    }
    Bl(e, f),
      h.start(
        Tc(f, h, y, e.shouldReduceMotion && An.has(f) ? { type: !1 } : v, e, x)
      );
    const w = h.animation;
    w && u.push(w);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        H.update(() => {
          a && H4(e, a);
        });
      }),
    u
  );
}
function Ql(e, t, n = {}) {
  var r;
  const i = Lo(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: s = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const o = i ? () => Promise.all(p1(e, i, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: f,
              staggerDirection: h,
            } = s;
            return x5(e, t, c + u, f, h, n);
          }
        : () => Promise.resolve(),
    { when: l } = s;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [o, a] : [a, o];
    return u().then(() => c());
  } else return Promise.all([o(), a(n.delay)]);
}
function x5(e, t, n = 0, r = 0, i = 1, s) {
  const o = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(w5)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          o.push(
            Ql(u, t, { ...s, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(o)
  );
}
function w5(e, t) {
  return e.sortNodePosition(t);
}
function S5(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => Ql(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Ql(e, t, n);
  else {
    const i = typeof t == "function" ? Lo(e, t, n.custom) : t;
    r = Promise.all(p1(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const C5 = ac.length;
function m1(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? m1(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < C5; n++) {
    const r = ac[n],
      i = e.props[r];
    (vi(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const k5 = [...oc].reverse(),
  P5 = oc.length;
function j5(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => S5(e, n, r)));
}
function E5(e) {
  let t = j5(e),
    n = $f(),
    r = !0;
  const i = (l) => (u, c) => {
    var f;
    const h = Lo(
      e,
      c,
      l === "exit"
        ? (f = e.presenceContext) === null || f === void 0
          ? void 0
          : f.custom
        : void 0
    );
    if (h) {
      const { transition: y, transitionEnd: v, ...x } = h;
      u = { ...u, ...x, ...v };
    }
    return u;
  };
  function s(l) {
    t = l(e);
  }
  function o(l) {
    const { props: u } = e,
      c = m1(e.parent) || {},
      f = [],
      h = new Set();
    let y = {},
      v = 1 / 0;
    for (let w = 0; w < P5; w++) {
      const m = k5[w],
        p = n[m],
        g = u[m] !== void 0 ? u[m] : c[m],
        C = vi(g),
        k = m === l ? p.isActive : null;
      k === !1 && (v = w);
      let j = g === c[m] && g !== u[m] && C;
      if (
        (j && r && e.manuallyAnimateOnMount && (j = !1),
        (p.protectedKeys = { ...y }),
        (!p.isActive && k === null) ||
          (!g && !p.prevProp) ||
          Ao(g) ||
          typeof g == "boolean")
      )
        continue;
      const T = T5(p.prevProp, g);
      let P = T || (m === l && p.isActive && !j && C) || (w > v && C),
        A = !1;
      const R = Array.isArray(g) ? g : [g];
      let ee = R.reduce(i(m), {});
      k === !1 && (ee = {});
      const { prevResolvedValues: Tt = {} } = p,
        rn = { ...Tt, ...ee },
        xr = (re) => {
          (P = !0),
            h.has(re) && ((A = !0), h.delete(re)),
            (p.needsAnimating[re] = !0);
          const N = e.getValue(re);
          N && (N.liveStyle = !1);
        };
      for (const re in rn) {
        const N = ee[re],
          L = Tt[re];
        if (y.hasOwnProperty(re)) continue;
        let D = !1;
        Vl(N) && Vl(L) ? (D = !j0(N, L)) : (D = N !== L),
          D
            ? N != null
              ? xr(re)
              : h.add(re)
            : N !== void 0 && h.has(re)
            ? xr(re)
            : (p.protectedKeys[re] = !0);
      }
      (p.prevProp = g),
        (p.prevResolvedValues = ee),
        p.isActive && (y = { ...y, ...ee }),
        r && e.blockInitialAnimation && (P = !1),
        P &&
          (!(j && T) || A) &&
          f.push(...R.map((re) => ({ animation: re, options: { type: m } })));
    }
    if (h.size) {
      const w = {};
      h.forEach((m) => {
        const p = e.getBaseTarget(m),
          g = e.getValue(m);
        g && (g.liveStyle = !0), (w[m] = p ?? null);
      }),
        f.push({ animation: w });
    }
    let x = !!f.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (x = !1),
      (r = !1),
      x ? t(f) : Promise.resolve()
    );
  }
  function a(l, u) {
    var c;
    if (n[l].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((h) => {
        var y;
        return (y = h.animationState) === null || y === void 0
          ? void 0
          : y.setActive(l, u);
      }),
      (n[l].isActive = u);
    const f = o(l);
    for (const h in n) n[h].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      (n = $f()), (r = !0);
    },
  };
}
function T5(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !j0(t, e) : !1;
}
function an(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function $f() {
  return {
    animate: an(!0),
    whileInView: an(),
    whileHover: an(),
    whileTap: an(),
    whileDrag: an(),
    whileFocus: an(),
    exit: an(),
  };
}
class nn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class b5 extends nn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = E5(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Ao(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let N5 = 0;
class M5 extends nn {
  constructor() {
    super(...arguments), (this.id = N5++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const R5 = { animation: { Feature: b5 }, exit: { Feature: M5 } };
function Ci(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Di(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const _5 = (e) => (t) => fc(t) && e(t, Di(t));
function Qr(e, t, n, r) {
  return Ci(e, t, _5(n), r);
}
const Wf = (e, t) => Math.abs(e - t);
function A5(e, t) {
  const n = Wf(e.x, t.x),
    r = Wf(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class g1 {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = Na(this.lastMoveEventInfo, this.history),
          h = this.startEvent !== null,
          y = A5(f.offset, { x: 0, y: 0 }) >= 3;
        if (!h && !y) return;
        const { point: v } = f,
          { timestamp: x } = fe;
        this.history.push({ ...v, timestamp: x });
        const { onStart: w, onMove: m } = this.handlers;
        h ||
          (w && w(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          m && m(this.lastMoveEvent, f);
      }),
      (this.handlePointerMove = (f, h) => {
        (this.lastMoveEvent = f),
          (this.lastMoveEventInfo = ba(h, this.transformPagePoint)),
          H.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (f, h) => {
        this.end();
        const { onEnd: y, onSessionEnd: v, resumeAnimation: x } = this.handlers;
        if (
          (this.dragSnapToOrigin && x && x(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const w = Na(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : ba(h, this.transformPagePoint),
          this.history
        );
        this.startEvent && y && y(f, w), v && v(f, w);
      }),
      !fc(t))
    )
      return;
    (this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const o = Di(t),
      a = ba(o, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = fe;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, Na(a, this.history)),
      (this.removeListeners = Li(
        Qr(this.contextWindow, "pointermove", this.handlePointerMove),
        Qr(this.contextWindow, "pointerup", this.handlePointerUp),
        Qr(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Yt(this.updatePoint);
  }
}
function ba(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Kf(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Na({ point: e }, t) {
  return {
    point: e,
    delta: Kf(e, y1(t)),
    offset: Kf(e, L5(t)),
    velocity: D5(t, 0.1),
  };
}
function L5(e) {
  return e[0];
}
function y1(e) {
  return e[e.length - 1];
}
function D5(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = y1(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > vt(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const s = xt(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function Qn(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
const v1 = 1e-4,
  z5 = 1 - v1,
  V5 = 1 + v1,
  x1 = 0.01,
  O5 = 0 - x1,
  I5 = 0 + x1;
function Oe(e) {
  return e.max - e.min;
}
function F5(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Gf(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = K(t.min, t.max, e.origin)),
    (e.scale = Oe(n) / Oe(t)),
    (e.translate = K(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= z5 && e.scale <= V5) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= O5 && e.translate <= I5) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function Xr(e, t, n, r) {
  Gf(e.x, t.x, n.x, r ? r.originX : void 0),
    Gf(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Qf(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Oe(t));
}
function B5(e, t, n) {
  Qf(e.x, t.x, n.x), Qf(e.y, t.y, n.y);
}
function Xf(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Oe(t));
}
function Yr(e, t, n) {
  Xf(e.x, t.x, n.x), Xf(e.y, t.y, n.y);
}
function U5(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? K(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? K(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Yf(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function H5(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Yf(e.x, n, i), y: Yf(e.y, t, r) };
}
function Jf(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function $5(e, t) {
  return { x: Jf(e.x, t.x), y: Jf(e.y, t.y) };
}
function W5(e, t) {
  let n = 0.5;
  const r = Oe(e),
    i = Oe(t);
  return (
    i > r
      ? (n = fr(t.min, t.max - r, e.min))
      : r > i && (n = fr(e.min, e.max - i, t.min)),
    jt(0, 1, n)
  );
}
function K5(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Xl = 0.35;
function G5(e = Xl) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Xl),
    { x: qf(e, "left", "right"), y: qf(e, "top", "bottom") }
  );
}
function qf(e, t, n) {
  return { min: Zf(e, t), max: Zf(e, n) };
}
function Zf(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const eh = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Xn = () => ({ x: eh(), y: eh() }),
  th = () => ({ min: 0, max: 0 }),
  q = () => ({ x: th(), y: th() });
function Ue(e) {
  return [e("x"), e("y")];
}
function w1({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function Q5({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function X5(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Ma(e) {
  return e === void 0 || e === 1;
}
function Yl({ scale: e, scaleX: t, scaleY: n }) {
  return !Ma(e) || !Ma(t) || !Ma(n);
}
function dn(e) {
  return (
    Yl(e) ||
    S1(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function S1(e) {
  return nh(e.x) || nh(e.y);
}
function nh(e) {
  return e && e !== "0%";
}
function so(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function rh(e, t, n, r, i) {
  return i !== void 0 && (e = so(e, i, r)), so(e, n, r) + t;
}
function Jl(e, t = 0, n = 1, r, i) {
  (e.min = rh(e.min, t, n, r, i)), (e.max = rh(e.max, t, n, r, i));
}
function C1(e, { x: t, y: n }) {
  Jl(e.x, t.translate, t.scale, t.originPoint),
    Jl(e.y, n.translate, n.scale, n.originPoint);
}
const ih = 0.999999999999,
  sh = 1.0000000000001;
function Y5(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let s, o;
  for (let a = 0; a < i; a++) {
    (s = n[a]), (o = s.projectionDelta);
    const { visualElement: l } = s.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        Jn(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), C1(e, o)),
      r && dn(s.latestValues) && Jn(e, s.latestValues));
  }
  t.x < sh && t.x > ih && (t.x = 1), t.y < sh && t.y > ih && (t.y = 1);
}
function Yn(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function oh(e, t, n, r, i = 0.5) {
  const s = K(e.min, e.max, i);
  Jl(e, t, n, s, r);
}
function Jn(e, t) {
  oh(e.x, t.x, t.scaleX, t.scale, t.originX),
    oh(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function k1(e, t) {
  return w1(X5(e.getBoundingClientRect(), t));
}
function J5(e, t, n) {
  const r = k1(e, n),
    { scroll: i } = t;
  return i && (Yn(r.x, i.offset.x), Yn(r.y, i.offset.y)), r;
}
const P1 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  q5 = new WeakMap();
class Z5 {
  constructor(t) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = q()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: f } = this.getProps();
        f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Di(c).point);
      },
      s = (c, f) => {
        const { drag: h, dragPropagation: y, onDragStart: v } = this.getProps();
        if (
          h &&
          !y &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = A4(h)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Ue((w) => {
            let m = this.getAxisMotionValue(w).get() || 0;
            if (dt.test(m)) {
              const { projection: p } = this.visualElement;
              if (p && p.layout) {
                const g = p.layout.layoutBox[w];
                g && (m = Oe(g) * (parseFloat(m) / 100));
              }
            }
            this.originPoint[w] = m;
          }),
          v && H.postRender(() => v(c, f)),
          Bl(this.visualElement, "transform");
        const { animationState: x } = this.visualElement;
        x && x.setActive("whileDrag", !0);
      },
      o = (c, f) => {
        const {
          dragPropagation: h,
          dragDirectionLock: y,
          onDirectionLock: v,
          onDrag: x,
        } = this.getProps();
        if (!h && !this.openDragLock) return;
        const { offset: w } = f;
        if (y && this.currentDirection === null) {
          (this.currentDirection = ew(w)),
            this.currentDirection !== null && v && v(this.currentDirection);
          return;
        }
        this.updateAxis("x", f.point, w),
          this.updateAxis("y", f.point, w),
          this.visualElement.render(),
          x && x(c, f);
      },
      a = (c, f) => this.stop(c, f),
      l = () =>
        Ue((c) => {
          var f;
          return (
            this.getAnimationState(c) === "paused" &&
            ((f = this.getAxisMotionValue(c).animation) === null || f === void 0
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new g1(
      t,
      {
        onSessionStart: i,
        onStart: s,
        onMove: o,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: P1(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && H.postRender(() => s(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !os(t, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (o = U5(o, this.constraints[t], this.elastic[t])),
      s.set(o);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      s = this.constraints;
    n && Qn(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = H5(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = G5(r)),
      s !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Ue((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = K5(i.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Qn(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const s = J5(r, i.root, this.visualElement.getTransformPagePoint());
    let o = $5(i.layout.layoutBox, s);
    if (n) {
      const a = n(Q5(o));
      (this.hasMutatedConstraints = !!a), a && (o = w1(a));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = Ue((c) => {
        if (!os(c, n, this.currentDirection)) return;
        let f = l[c] || {};
        o && (f = { min: 0, max: 0 });
        const h = i ? 200 : 1e6,
          y = i ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: h,
            bounceDamping: y,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...f,
          };
        return this.startAxisValueAnimation(c, v);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      Bl(this.visualElement, t), r.start(Tc(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Ue((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Ue((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Ue((n) => {
      const { drag: r } = this.getProps();
      if (!os(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: a } = i.layout.layoutBox[n];
        s.set(t[n] - K(o, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Qn(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Ue((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[o] = W5({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Ue((o) => {
        if (!os(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: l, max: u } = this.constraints[o];
        a.set(K(l, u, i[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    q5.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Qr(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        Qn(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      H.read(r);
    const o = Ci(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (Ue((c) => {
              const f = this.getAxisMotionValue(c);
              f &&
                ((this.originPoint[c] += l[c].translate),
                f.set(f.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      o(), n(), s(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = Xl,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function os(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function ew(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class tw extends nn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Le),
      (this.removeListeners = Le),
      (this.controls = new Z5(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Le);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const ah = (e) => (t, n) => {
  e && H.postRender(() => e(t, n));
};
class nw extends nn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Le);
  }
  onPointerDown(t) {
    this.session = new g1(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: P1(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: ah(t),
      onStart: ah(n),
      onMove: r,
      onEnd: (s, o) => {
        delete this.session, i && H.postRender(() => i(s, o));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Qr(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const zo = S.createContext(null);
function rw() {
  const e = S.useContext(zo);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = S.useId();
  S.useEffect(() => r(i), []);
  const s = S.useCallback(() => n && n(i), [i, n]);
  return !t && n ? [!1, s] : [!0];
}
const bc = S.createContext({}),
  j1 = S.createContext({}),
  Cs = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function lh(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const br = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (_.test(e)) e = parseFloat(e);
        else return e;
      const n = lh(e, t.target.x),
        r = lh(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  iw = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Jt.parse(e);
      if (i.length > 5) return r;
      const s = Jt.createTransformer(e),
        o = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + o] /= a), (i[1 + o] /= l);
      const u = K(a, l, 0.5);
      return (
        typeof i[2 + o] == "number" && (i[2 + o] /= u),
        typeof i[3 + o] == "number" && (i[3 + o] /= u),
        s(i)
      );
    },
  },
  oo = {};
function sw(e) {
  Object.assign(oo, e);
}
const { schedule: Nc, cancel: Z8 } = A0(queueMicrotask, !1);
class ow extends S.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: s } = t;
    sw(aw),
      s &&
        (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        s.setOptions({
          ...s.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Cs.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: s,
      } = this.props,
      o = r.projection;
    return (
      o &&
        ((o.isPresent = s),
        i || t.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? o.promote()
            : o.relegate() ||
              H.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Nc.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function E1(e) {
  const [t, n] = rw(),
    r = S.useContext(bc);
  return d.jsx(ow, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: S.useContext(j1),
    isPresent: t,
    safeToRemove: n,
  });
}
const aw = {
  borderRadius: {
    ...br,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: br,
  borderTopRightRadius: br,
  borderBottomLeftRadius: br,
  borderBottomRightRadius: br,
  boxShadow: iw,
};
function lw(e, t, n) {
  const r = we(e) ? e : xi(e);
  return r.start(Tc("", r, t, n)), r.animation;
}
function uw(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const cw = (e, t) => e.depth - t.depth;
class dw {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    hc(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    pc(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(cw),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function fw(e, t) {
  const n = ct.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= t && (Yt(r), e(s - t));
    };
  return H.read(r, !0), () => Yt(r);
}
function ks(e) {
  const t = we(e) ? e.get() : e;
  return L4(t) ? t.toValue() : t;
}
const T1 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  hw = T1.length,
  uh = (e) => (typeof e == "string" ? parseFloat(e) : e),
  ch = (e) => typeof e == "number" || _.test(e);
function pw(e, t, n, r, i, s) {
  i
    ? ((e.opacity = K(0, n.opacity !== void 0 ? n.opacity : 1, mw(r))),
      (e.opacityExit = K(t.opacity !== void 0 ? t.opacity : 1, 0, gw(r))))
    : s &&
      (e.opacity = K(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let o = 0; o < hw; o++) {
    const a = `border${T1[o]}Radius`;
    let l = dh(t, a),
      u = dh(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || ch(l) === ch(u)
        ? ((e[a] = Math.max(K(uh(l), uh(u), r), 0)),
          (dt.test(u) || dt.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = K(t.rotate || 0, n.rotate || 0, r));
}
function dh(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const mw = b1(0, 0.5, H0),
  gw = b1(0.5, 0.95, Le);
function b1(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(fr(e, t, r)));
}
function fh(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Be(e, t) {
  fh(e.x, t.x), fh(e.y, t.y);
}
function hh(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function ph(e, t, n, r, i) {
  return (
    (e -= t), (e = so(e, 1 / n, r)), i !== void 0 && (e = so(e, 1 / i, r)), e
  );
}
function yw(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (
    (dt.test(t) &&
      ((t = parseFloat(t)), (t = K(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let a = K(s.min, s.max, r);
  e === s && (a -= t),
    (e.min = ph(e.min, t, n, a, i)),
    (e.max = ph(e.max, t, n, a, i));
}
function mh(e, t, [n, r, i], s, o) {
  yw(e, t[n], t[r], t[i], t.scale, s, o);
}
const vw = ["x", "scaleX", "originX"],
  xw = ["y", "scaleY", "originY"];
function gh(e, t, n, r) {
  mh(e.x, t, vw, n ? n.x : void 0, r ? r.x : void 0),
    mh(e.y, t, xw, n ? n.y : void 0, r ? r.y : void 0);
}
function yh(e) {
  return e.translate === 0 && e.scale === 1;
}
function N1(e) {
  return yh(e.x) && yh(e.y);
}
function vh(e, t) {
  return e.min === t.min && e.max === t.max;
}
function ww(e, t) {
  return vh(e.x, t.x) && vh(e.y, t.y);
}
function xh(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function M1(e, t) {
  return xh(e.x, t.x) && xh(e.y, t.y);
}
function wh(e) {
  return Oe(e.x) / Oe(e.y);
}
function Sh(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class Sw {
  constructor() {
    this.members = [];
  }
  add(t) {
    hc(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (pc(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Cw(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    s = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: f,
      rotateY: h,
      skewX: y,
      skewY: v,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      f && (r += `rotateX(${f}deg) `),
      h && (r += `rotateY(${h}deg) `),
      y && (r += `skewX(${y}deg) `),
      v && (r += `skewY(${v}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const fn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  zr = typeof window < "u" && window.MotionDebug !== void 0,
  Ra = ["", "X", "Y", "Z"],
  kw = { visibility: "hidden" },
  Ch = 1e3;
let Pw = 0;
function _a(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function R1(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = z0(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", H, !(i || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && R1(r);
}
function _1({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      (this.id = Pw++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            zr &&
              (fn.totalNodes =
                fn.resolvedTargetDeltas =
                fn.recalculatedProjection =
                  0),
            this.nodes.forEach(Tw),
            this.nodes.forEach(_w),
            this.nodes.forEach(Aw),
            this.nodes.forEach(bw),
            zr && window.MotionDebug.record(fn);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new dw());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new mc()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = uw(o)), (this.instance = o);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const h = () => (this.root.updateBlockedByResize = !1);
        e(o, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = fw(h, 250)),
            Cs.hasAnimatedSinceResize &&
              ((Cs.hasAnimatedSinceResize = !1), this.nodes.forEach(Ph));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: h,
              hasRelativeTargetChanged: y,
              layout: v,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const x =
                  this.options.transition || c.getDefaultTransition() || Ow,
                { onLayoutAnimationStart: w, onLayoutAnimationComplete: m } =
                  c.getProps(),
                p = !this.targetLayout || !M1(this.targetLayout, v) || y,
                g = !h && y;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                g ||
                (h && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, g);
                const C = { ...uc(x, "layout"), onPlay: w, onComplete: m };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((C.delay = 0), (C.type = !1)),
                  this.startAnimation(C);
              } else
                h || Ph(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = v;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Yt(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(Lw),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          R1(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(kh);
        return;
      }
      this.isUpdating || this.nodes.forEach(Mw),
        (this.isUpdating = !1),
        this.nodes.forEach(Rw),
        this.nodes.forEach(jw),
        this.nodes.forEach(Ew),
        this.clearAllSnapshots();
      const a = ct.now();
      (fe.delta = jt(0, 1e3 / 60, a - fe.timestamp)),
        (fe.timestamp = a),
        (fe.isProcessing = !0),
        Pa.update.process(fe),
        Pa.preRender.process(fe),
        Pa.render.process(fe),
        (fe.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Nc.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Nw), this.sharedNodes.forEach(Dw);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        H.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      H.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = q()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (a = !1),
        a)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !N1(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      o &&
        (a || dn(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        o && (l = this.removeTransform(l)),
        Iw(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var o;
      const { visualElement: a } = this.options;
      if (!a) return q();
      const l = a.measureViewportBox();
      if (
        !(
          ((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) ||
          this.path.some(Fw)
        )
      ) {
        const { scroll: c } = this.root;
        c && (Yn(l.x, c.offset.x), Yn(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(o) {
      var a;
      const l = q();
      if (
        (Be(l, o), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: f, options: h } = c;
        c !== this.root &&
          f &&
          h.layoutScroll &&
          (f.wasRoot && Be(l, o), Yn(l.x, f.offset.x), Yn(l.y, f.offset.y));
      }
      return l;
    }
    applyTransform(o, a = !1) {
      const l = q();
      Be(l, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Jn(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          dn(c.latestValues) && Jn(l, c.latestValues);
      }
      return dn(this.latestValues) && Jn(l, this.latestValues), l;
    }
    removeTransform(o) {
      const a = q();
      Be(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !dn(u.latestValues)) continue;
        Yl(u.latestValues) && u.updateSnapshot();
        const c = q(),
          f = u.measurePageBox();
        Be(c, f),
          gh(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return dn(this.latestValues) && gh(a, this.latestValues), a;
    }
    setTargetDelta(o) {
      (this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== fe.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          o ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: f, layoutId: h } = this.options;
      if (!(!this.layout || !(f || h))) {
        if (
          ((this.resolvedRelativeTargetAt = fe.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const y = this.getClosestProjectingParent();
          y && y.layout && this.animationProgress !== 1
            ? ((this.relativeParent = y),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = q()),
              (this.relativeTargetOrigin = q()),
              Yr(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                y.layout.layoutBox
              ),
              Be(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = q()), (this.targetWithTransforms = q())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                B5(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Be(this.target, this.layout.layoutBox),
                C1(this.target, this.targetDelta))
              : Be(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const y = this.getClosestProjectingParent();
            y &&
            !!y.resumingFrom == !!this.resumingFrom &&
            !y.options.layoutScroll &&
            y.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = y),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = q()),
                (this.relativeTargetOrigin = q()),
                Yr(this.relativeTargetOrigin, this.target, y.target),
                Be(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          zr && fn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Yl(this.parent.latestValues) ||
          S1(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var o;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === fe.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      Be(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x,
        y = this.treeScale.y;
      Y5(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = q()));
      const { target: v } = a;
      if (!v) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (hh(this.prevProjectionDelta.x, this.projectionDelta.x),
          hh(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Xr(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
        (this.treeScale.x !== h ||
          this.treeScale.y !== y ||
          !Sh(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Sh(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", v)),
        zr && fn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        o)
      ) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Xn()),
        (this.projectionDelta = Xn()),
        (this.projectionDeltaWithTransform = Xn());
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        f = Xn();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const h = q(),
        y = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        x = y !== v,
        w = this.getStack(),
        m = !w || w.members.length <= 1,
        p = !!(x && !m && this.options.crossfade === !0 && !this.path.some(Vw));
      this.animationProgress = 0;
      let g;
      (this.mixTargetDelta = (C) => {
        const k = C / 1e3;
        jh(f.x, o.x, k),
          jh(f.y, o.y, k),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Yr(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            zw(this.relativeTarget, this.relativeTargetOrigin, h, k),
            g && ww(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = q()),
            Be(g, this.relativeTarget)),
          x &&
            ((this.animationValues = c), pw(c, u, this.latestValues, k, p, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = k);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Yt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = H.update(() => {
          (Cs.hasAnimatedSinceResize = !0),
            (this.currentAnimation = lw(0, Ch, {
              ...o,
              onUpdate: (a) => {
                this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a);
              },
              onComplete: () => {
                o.onComplete && o.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Ch),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = o;
      if (!(!a || !l || !u)) {
        if (
          this !== o &&
          this.layout &&
          u &&
          A1(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || q();
          const f = Oe(this.layout.layoutBox.x);
          (l.x.min = o.target.x.min), (l.x.max = l.x.min + f);
          const h = Oe(this.layout.layoutBox.y);
          (l.y.min = o.target.y.min), (l.y.max = l.y.min + h);
        }
        Be(a, l),
          Jn(a, c),
          Xr(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new Sw()),
        this.sharedNodes.get(o).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: l } = o;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && _a("z", o, u, this.animationValues);
      for (let c = 0; c < Ra.length; c++)
        _a(`rotate${Ra[c]}`, o, u, this.animationValues),
          _a(`skew${Ra[c]}`, o, u, this.animationValues);
      o.render();
      for (const c in u)
        o.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return kw;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = ks(o == null ? void 0 : o.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const x = {};
        return (
          this.options.layoutId &&
            ((x.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (x.pointerEvents = ks(o == null ? void 0 : o.pointerEvents) || "")),
          this.hasProjected &&
            !dn(this.latestValues) &&
            ((x.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          x
        );
      }
      const h = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = Cw(
          this.projectionDeltaWithTransform,
          this.treeScale,
          h
        )),
        c && (u.transform = c(h, u.transform));
      const { x: y, y: v } = this.projectionDelta;
      (u.transformOrigin = `${y.origin * 100}% ${v.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (l =
                    (a = h.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : h.opacityExit)
          : (u.opacity =
              f === this
                ? h.opacity !== void 0
                  ? h.opacity
                  : ""
                : h.opacityExit !== void 0
                ? h.opacityExit
                : 0);
      for (const x in oo) {
        if (h[x] === void 0) continue;
        const { correct: w, applyTo: m } = oo[x],
          p = u.transform === "none" ? h[x] : w(h[x], f);
        if (m) {
          const g = m.length;
          for (let C = 0; C < g; C++) u[m[C]] = p;
        } else u[x] = p;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            f === this
              ? ks(o == null ? void 0 : o.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(kh),
        this.root.sharedNodes.clear();
    }
  };
}
function jw(e) {
  e.updateLayout();
}
function Ew(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: s } = e.options,
      o = n.source !== e.layout.source;
    s === "size"
      ? Ue((f) => {
          const h = o ? n.measuredBox[f] : n.layoutBox[f],
            y = Oe(h);
          (h.min = r[f].min), (h.max = h.min + y);
        })
      : A1(s, n.layoutBox, r) &&
        Ue((f) => {
          const h = o ? n.measuredBox[f] : n.layoutBox[f],
            y = Oe(r[f]);
          (h.max = h.min + y),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + y));
        });
    const a = Xn();
    Xr(a, r, n.layoutBox);
    const l = Xn();
    o ? Xr(l, e.applyTransform(i, !0), n.measuredBox) : Xr(l, r, n.layoutBox);
    const u = !N1(a);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: h, layout: y } = f;
        if (h && y) {
          const v = q();
          Yr(v, n.layoutBox, h.layoutBox);
          const x = q();
          Yr(x, r, y.layoutBox),
            M1(v, x) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = x),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function Tw(e) {
  zr && fn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function bw(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Nw(e) {
  e.clearSnapshot();
}
function kh(e) {
  e.clearMeasurements();
}
function Mw(e) {
  e.isLayoutDirty = !1;
}
function Rw(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Ph(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function _w(e) {
  e.resolveTargetDelta();
}
function Aw(e) {
  e.calcProjection();
}
function Lw(e) {
  e.resetSkewAndRotation();
}
function Dw(e) {
  e.removeLeadSnapshot();
}
function jh(e, t, n) {
  (e.translate = K(t.translate, 0, n)),
    (e.scale = K(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Eh(e, t, n, r) {
  (e.min = K(t.min, n.min, r)), (e.max = K(t.max, n.max, r));
}
function zw(e, t, n, r) {
  Eh(e.x, t.x, n.x, r), Eh(e.y, t.y, n.y, r);
}
function Vw(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Ow = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Th = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  bh = Th("applewebkit/") && !Th("chrome/") ? Math.round : Le;
function Nh(e) {
  (e.min = bh(e.min)), (e.max = bh(e.max));
}
function Iw(e) {
  Nh(e.x), Nh(e.y);
}
function A1(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !F5(wh(t), wh(n), 0.2))
  );
}
function Fw(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const Bw = _1({
    attachResizeListener: (e, t) => Ci(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Aa = { current: void 0 },
  L1 = _1({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Aa.current) {
        const e = new Bw({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Aa.current = e);
      }
      return Aa.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  Uw = {
    pan: { Feature: nw },
    drag: { Feature: tw, ProjectionNode: L1, MeasureLayout: E1 },
  };
function Mh(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    s = r[i];
  s && H.postRender(() => s(t, Di(t)));
}
class Hw extends nn {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = b4(
        t,
        (n) => (Mh(this.node, n, "Start"), (r) => Mh(this.node, r, "End"))
      ));
  }
  unmount() {}
}
class $w extends nn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Li(
      Ci(this.node.current, "focus", () => this.onFocus()),
      Ci(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function Rh(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    s = r[i];
  s && H.postRender(() => s(t, Di(t)));
}
class Ww extends nn {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = _4(
        t,
        (n) => (
          Rh(this.node, n, "Start"),
          (r, { success: i }) => Rh(this.node, r, i ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const ql = new WeakMap(),
  La = new WeakMap(),
  Kw = (e) => {
    const t = ql.get(e.target);
    t && t(e);
  },
  Gw = (e) => {
    e.forEach(Kw);
  };
function Qw({ root: e, ...t }) {
  const n = e || document;
  La.has(n) || La.set(n, {});
  const r = La.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(Gw, { root: e, ...t })), r[i];
}
function Xw(e, t, n) {
  const r = Qw(t);
  return (
    ql.set(e, n),
    r.observe(e),
    () => {
      ql.delete(e), r.unobserve(e);
    }
  );
}
const Yw = { some: 0, all: 1 };
class Jw extends nn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: s } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : Yw[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), s && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          h = u ? c : f;
        h && h(l);
      };
    return Xw(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(qw(t, n)) && this.startObserver();
  }
  unmount() {}
}
function qw({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Zw = {
    inView: { Feature: Jw },
    tap: { Feature: Ww },
    focus: { Feature: $w },
    hover: { Feature: Hw },
  },
  e6 = { layout: { ProjectionNode: L1, MeasureLayout: E1 } },
  Mc = S.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Vo = S.createContext({}),
  Rc = typeof window < "u",
  D1 = Rc ? S.useLayoutEffect : S.useEffect,
  z1 = S.createContext({ strict: !1 });
function t6(e, t, n, r, i) {
  var s, o;
  const { visualElement: a } = S.useContext(Vo),
    l = S.useContext(z1),
    u = S.useContext(zo),
    c = S.useContext(Mc).reducedMotion,
    f = S.useRef(null);
  (r = r || l.renderer),
    !f.current &&
      r &&
      (f.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c,
      }));
  const h = f.current,
    y = S.useContext(j1);
  h &&
    !h.projection &&
    i &&
    (h.type === "html" || h.type === "svg") &&
    n6(f.current, n, i, y);
  const v = S.useRef(!1);
  S.useInsertionEffect(() => {
    h && v.current && h.update(n, u);
  });
  const x = n[D0],
    w = S.useRef(
      !!x &&
        !(
          !((s = window.MotionHandoffIsComplete) === null || s === void 0) &&
          s.call(window, x)
        ) &&
        ((o = window.MotionHasOptimisedAnimation) === null || o === void 0
          ? void 0
          : o.call(window, x))
    );
  return (
    D1(() => {
      h &&
        ((v.current = !0),
        (window.MotionIsMounted = !0),
        h.updateFeatures(),
        Nc.render(h.render),
        w.current && h.animationState && h.animationState.animateChanges());
    }),
    S.useEffect(() => {
      h &&
        (!w.current && h.animationState && h.animationState.animateChanges(),
        w.current &&
          (queueMicrotask(() => {
            var m;
            (m = window.MotionHandoffMarkAsComplete) === null ||
              m === void 0 ||
              m.call(window, x);
          }),
          (w.current = !1)));
    }),
    h
  );
}
function n6(e, t, n, r) {
  const {
    layoutId: i,
    layout: s,
    drag: o,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : V1(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: s,
      alwaysMeasureLayout: !!o || (a && Qn(a)),
      visualElement: e,
      animationType: typeof s == "string" ? s : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: u,
    });
}
function V1(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : V1(e.parent);
}
function r6(e, t, n) {
  return S.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Qn(n) && (n.current = r));
    },
    [t]
  );
}
function Oo(e) {
  return Ao(e.animate) || ac.some((t) => vi(e[t]));
}
function O1(e) {
  return !!(Oo(e) || e.variants);
}
function i6(e, t) {
  if (Oo(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || vi(n) ? n : void 0,
      animate: vi(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function s6(e) {
  const { initial: t, animate: n } = i6(e, S.useContext(Vo));
  return S.useMemo(() => ({ initial: t, animate: n }), [_h(t), _h(n)]);
}
function _h(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Ah = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  pr = {};
for (const e in Ah) pr[e] = { isEnabled: (t) => Ah[e].some((n) => !!t[n]) };
function o6(e) {
  for (const t in e) pr[t] = { ...pr[t], ...e[t] };
}
const a6 = Symbol.for("motionComponentSymbol");
function l6({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && o6(e);
  function s(a, l) {
    let u;
    const c = { ...S.useContext(Mc), ...a, layoutId: u6(a) },
      { isStatic: f } = c,
      h = s6(a),
      y = r(a, f);
    if (!f && Rc) {
      c6();
      const v = d6(c);
      (u = v.MeasureLayout),
        (h.visualElement = t6(i, y, c, t, v.ProjectionNode));
    }
    return d.jsxs(Vo.Provider, {
      value: h,
      children: [
        u && h.visualElement
          ? d.jsx(u, { visualElement: h.visualElement, ...c })
          : null,
        n(i, a, r6(y, h.visualElement, l), y, f, h.visualElement),
      ],
    });
  }
  const o = S.forwardRef(s);
  return (o[a6] = i), o;
}
function u6({ layoutId: e }) {
  const t = S.useContext(bc).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function c6(e, t) {
  S.useContext(z1).strict;
}
function d6(e) {
  const { drag: t, layout: n } = pr;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const f6 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function _c(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(f6.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function I1(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const s in n) e.style.setProperty(s, n[s]);
}
const F1 = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function B1(e, t, n, r) {
  I1(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(F1.has(i) ? i : gc(i), t.attrs[i]);
}
function U1(e, { layout: t, layoutId: n }) {
  return (
    An.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!oo[e] || e === "opacity"))
  );
}
function Ac(e, t, n) {
  var r;
  const { style: i } = e,
    s = {};
  for (const o in i)
    (we(i[o]) ||
      (t.style && we(t.style[o])) ||
      U1(o, e) ||
      ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (s[o] = i[o]);
  return s;
}
function H1(e, t, n) {
  const r = Ac(e, t, n);
  for (const i in e)
    if (we(e[i]) || we(t[i])) {
      const s =
        Ri.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[s] = e[i];
    }
  return r;
}
function Lc(e) {
  const t = S.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
function h6(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  s
) {
  const o = { latestValues: p6(r, i, s, e), renderState: t() };
  return n && (o.mount = (a) => n(r, a, o)), o;
}
const $1 = (e) => (t, n) => {
  const r = S.useContext(Vo),
    i = S.useContext(zo),
    s = () => h6(e, t, r, i);
  return n ? s() : Lc(s);
};
function p6(e, t, n, r) {
  const i = {},
    s = r(e, {});
  for (const h in s) i[h] = ks(s[h]);
  let { initial: o, animate: a } = e;
  const l = Oo(e),
    u = O1(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const f = c ? a : o;
  if (f && typeof f != "boolean" && !Ao(f)) {
    const h = Array.isArray(f) ? f : [f];
    for (let y = 0; y < h.length; y++) {
      const v = sc(e, h[y]);
      if (v) {
        const { transitionEnd: x, transition: w, ...m } = v;
        for (const p in m) {
          let g = m[p];
          if (Array.isArray(g)) {
            const C = c ? g.length - 1 : 0;
            g = g[C];
          }
          g !== null && (i[p] = g);
        }
        for (const p in x) i[p] = x[p];
      }
    }
  }
  return i;
}
const Dc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  W1 = () => ({ ...Dc(), attrs: {} }),
  K1 = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  m6 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  g6 = Ri.length;
function y6(e, t, n) {
  let r = "",
    i = !0;
  for (let s = 0; s < g6; s++) {
    const o = Ri[s],
      a = e[o];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (o.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const u = K1(a, kc[o]);
      if (!l) {
        i = !1;
        const c = m6[o] || o;
        r += `${c}(${u}) `;
      }
      n && (t[o] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r;
}
function zc(e, t, n) {
  const { style: r, vars: i, transformOrigin: s } = e;
  let o = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (An.has(l)) {
      o = !0;
      continue;
    } else if (Q0(l)) {
      i[l] = u;
      continue;
    } else {
      const c = K1(u, kc[l]);
      l.startsWith("origin") ? ((a = !0), (s[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = y6(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = s;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
function Lh(e, t, n) {
  return typeof e == "string" ? e : _.transform(t + n * e);
}
function v6(e, t, n) {
  const r = Lh(t, e.x, e.width),
    i = Lh(n, e.y, e.height);
  return `${r} ${i}`;
}
const x6 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  w6 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function S6(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? x6 : w6;
  e[s.offset] = _.transform(-r);
  const o = _.transform(t),
    a = _.transform(n);
  e[s.array] = `${o} ${a}`;
}
function Vc(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: s,
    pathLength: o,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  f
) {
  if ((zc(e, u, f), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: h, style: y, dimensions: v } = e;
  h.transform && (v && (y.transform = h.transform), delete h.transform),
    v &&
      (i !== void 0 || s !== void 0 || y.transform) &&
      (y.transformOrigin = v6(
        v,
        i !== void 0 ? i : 0.5,
        s !== void 0 ? s : 0.5
      )),
    t !== void 0 && (h.x = t),
    n !== void 0 && (h.y = n),
    r !== void 0 && (h.scale = r),
    o !== void 0 && S6(h, o, a, l, !1);
}
const Oc = (e) => typeof e == "string" && e.toLowerCase() === "svg",
  C6 = {
    useVisualState: $1({
      scrapeMotionValuesFromProps: H1,
      createRenderState: W1,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        H.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          H.render(() => {
            Vc(n, r, Oc(t.tagName), e.transformTemplate), B1(t, n);
          });
      },
    }),
  },
  k6 = {
    useVisualState: $1({
      scrapeMotionValuesFromProps: Ac,
      createRenderState: Dc,
    }),
  };
function G1(e, t, n) {
  for (const r in t) !we(t[r]) && !U1(r, n) && (e[r] = t[r]);
}
function P6({ transformTemplate: e }, t) {
  return S.useMemo(() => {
    const n = Dc();
    return zc(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function j6(e, t) {
  const n = e.style || {},
    r = {};
  return G1(r, n, e), Object.assign(r, P6(e, t)), r;
}
function E6(e, t) {
  const n = {},
    r = j6(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const T6 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function ao(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    T6.has(e)
  );
}
let Q1 = (e) => !ao(e);
function b6(e) {
  e && (Q1 = (t) => (t.startsWith("on") ? !ao(t) : e(t)));
}
try {
  b6(require("@emotion/is-prop-valid").default);
} catch {}
function N6(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((Q1(i) ||
        (n === !0 && ao(i)) ||
        (!t && !ao(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function M6(e, t, n, r) {
  const i = S.useMemo(() => {
    const s = W1();
    return (
      Vc(s, t, Oc(r), e.transformTemplate),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [t]);
  if (e.style) {
    const s = {};
    G1(s, e.style, e), (i.style = { ...s, ...i.style });
  }
  return i;
}
function R6(e = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const l = (_c(n) ? M6 : E6)(r, s, o, n),
      u = N6(r, typeof n == "string", e),
      c = n !== S.Fragment ? { ...u, ...l, ref: i } : {},
      { children: f } = r,
      h = S.useMemo(() => (we(f) ? f.get() : f), [f]);
    return S.createElement(n, { ...c, children: h });
  };
}
function _6(e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const o = {
      ...(_c(r) ? C6 : k6),
      preloadedFeatures: e,
      useRender: R6(i),
      createVisualElement: t,
      Component: r,
    };
    return l6(o);
  };
}
const Zl = { current: null },
  X1 = { current: !1 };
function A6() {
  if (((X1.current = !0), !!Rc))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Zl.current = e.matches);
      e.addListener(t), t();
    } else Zl.current = !1;
}
function L6(e, t, n) {
  for (const r in t) {
    const i = t[r],
      s = n[r];
    if (we(i)) e.addValue(r, i);
    else if (we(s)) e.addValue(r, xi(i, { owner: e }));
    else if (s !== i)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, xi(o !== void 0 ? o : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const Dh = new WeakMap(),
  D6 = [...J0, ve, Jt],
  z6 = (e) => D6.find(Y0(e)),
  zh = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ];
class V6 {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: s,
      visualState: o,
    },
    a = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = wc),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const h = ct.now();
        this.renderScheduledAt < h &&
          ((this.renderScheduledAt = h), H.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: u } = o;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = Oo(n)),
      (this.isVariantNode = O1(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: c, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const h in f) {
      const y = f[h];
      l[h] !== void 0 && we(y) && y.set(l[h], !1);
    }
  }
  mount(t) {
    (this.current = t),
      Dh.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      X1.current || A6(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Zl.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Dh.delete(this.current),
      this.projection && this.projection.unmount(),
      Yt(this.notifyUpdate),
      Yt(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = An.has(t),
      i = n.on("change", (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && H.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      s = n.on("renderRequest", this.scheduleRender);
    let o;
    window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        i(), s(), o && o(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in pr) {
      const n = pr[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : q();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < zh.length; r++) {
      const i = zh[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const s = "on" + i,
        o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = L6(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = xi(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == "string" && (K0(i) || W0(i))
          ? (i = parseFloat(i))
          : !z6(i) && Jt.test(n) && (i = s1(t, n)),
        this.setBaseTarget(t, we(i) ? i.get() : i)),
      we(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const o = sc(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      o && (i = o[t]);
    }
    if (r && i !== void 0) return i;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !we(s)
      ? s
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new mc()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Y1 extends V6 {
  constructor() {
    super(...arguments), (this.KeyframeResolver = o1);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    we(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function O6(e) {
  return window.getComputedStyle(e);
}
class I6 extends Y1 {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = I1);
  }
  readValueFromInstance(t, n) {
    if (An.has(n)) {
      const r = Pc(n);
      return (r && r.default) || 0;
    } else {
      const r = O6(t),
        i = (Q0(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return k1(t, n);
  }
  build(t, n, r) {
    zc(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Ac(t, n, r);
  }
}
class F6 extends Y1 {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = q);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (An.has(n)) {
      const r = Pc(n);
      return (r && r.default) || 0;
    }
    return (n = F1.has(n) ? n : gc(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return H1(t, n, r);
  }
  build(t, n, r) {
    Vc(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    B1(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = Oc(t.tagName)), super.mount(t);
  }
}
const B6 = (e, t) =>
    _c(e) ? new F6(t) : new I6(t, { allowProjection: e !== S.Fragment }),
  U6 = _6({ ...R5, ...Zw, ...Uw, ...e6 }, B6),
  b = S4(U6);
class H6 extends S.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function $6({ children: e, isPresent: t }) {
  const n = S.useId(),
    r = S.useRef(null),
    i = S.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: s } = S.useContext(Mc);
  return (
    S.useInsertionEffect(() => {
      const { width: o, height: a, top: l, left: u } = i.current;
      if (t || !r.current || !o || !a) return;
      r.current.dataset.motionPopId = n;
      const c = document.createElement("style");
      return (
        s && (c.nonce = s),
        document.head.appendChild(c),
        c.sheet &&
          c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),
        () => {
          document.head.removeChild(c);
        }
      );
    }, [t]),
    d.jsx(H6, {
      isPresent: t,
      childRef: r,
      sizeRef: i,
      children: S.cloneElement(e, { ref: r }),
    })
  );
}
const W6 = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: s,
  mode: o,
}) => {
  const a = Lc(K6),
    l = S.useId(),
    u = S.useCallback(
      (f) => {
        a.set(f, !0);
        for (const h of a.values()) if (!h) return;
        r && r();
      },
      [a, r]
    ),
    c = S.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: u,
        register: (f) => (a.set(f, !1), () => a.delete(f)),
      }),
      s ? [Math.random(), u] : [n, u]
    );
  return (
    S.useMemo(() => {
      a.forEach((f, h) => a.set(h, !1));
    }, [n]),
    S.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]),
    o === "popLayout" && (e = d.jsx($6, { isPresent: n, children: e })),
    d.jsx(zo.Provider, { value: c, children: e })
  );
};
function K6() {
  return new Map();
}
const as = (e) => e.key || "";
function Vh(e) {
  const t = [];
  return (
    S.Children.forEach(e, (n) => {
      S.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const wn = ({
  children: e,
  exitBeforeEnter: t,
  custom: n,
  initial: r = !0,
  onExitComplete: i,
  presenceAffectsLayout: s = !0,
  mode: o = "sync",
}) => {
  const a = S.useMemo(() => Vh(e), [e]),
    l = a.map(as),
    u = S.useRef(!0),
    c = S.useRef(a),
    f = Lc(() => new Map()),
    [h, y] = S.useState(a),
    [v, x] = S.useState(a);
  D1(() => {
    (u.current = !1), (c.current = a);
    for (let p = 0; p < v.length; p++) {
      const g = as(v[p]);
      l.includes(g) ? f.delete(g) : f.get(g) !== !0 && f.set(g, !1);
    }
  }, [v, l.length, l.join("-")]);
  const w = [];
  if (a !== h) {
    let p = [...a];
    for (let g = 0; g < v.length; g++) {
      const C = v[g],
        k = as(C);
      l.includes(k) || (p.splice(g, 0, C), w.push(C));
    }
    o === "wait" && w.length && (p = w), x(Vh(p)), y(a);
    return;
  }
  const { forceRender: m } = S.useContext(bc);
  return d.jsx(d.Fragment, {
    children: v.map((p) => {
      const g = as(p),
        C = a === v || l.includes(g),
        k = () => {
          if (f.has(g)) f.set(g, !0);
          else return;
          let j = !0;
          f.forEach((T) => {
            T || (j = !1);
          }),
            j && (m == null || m(), x(c.current), i && i());
        };
      return d.jsx(
        W6,
        {
          isPresent: C,
          initial: !u.current || r ? void 0 : !1,
          custom: C ? void 0 : n,
          presenceAffectsLayout: s,
          mode: o,
          onExitComplete: C ? void 0 : k,
          children: p,
        },
        g
      );
    }),
  });
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const G6 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  J1 = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Q6 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const X6 = S.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: i = "",
      children: s,
      iconNode: o,
      ...a
    },
    l
  ) =>
    S.createElement(
      "svg",
      {
        ref: l,
        ...Q6,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: J1("lucide", i),
        ...a,
      },
      [
        ...o.map(([u, c]) => S.createElement(u, c)),
        ...(Array.isArray(s) ? s : [s]),
      ]
    )
);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const I = (e, t) => {
  const n = S.forwardRef(({ className: r, ...i }, s) =>
    S.createElement(X6, {
      ref: s,
      iconNode: t,
      className: J1(`lucide-${G6(e)}`, r),
      ...i,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Y6 = I("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eu = I("Award", [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv",
    },
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const q1 = I("Briefcase", [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const J6 = I("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const q6 = I("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Z6 = I("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tu = I("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const e8 = I("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Oh = I("CodeXml", [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ic = I("Code", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const t8 = I("Coffee", [
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M14 2v2", key: "6buw04" }],
  [
    "path",
    {
      d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",
      key: "pwadti",
    },
  ],
  ["path", { d: "M6 2v2", key: "colzsn" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const n8 = I("Database", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nu = I("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fc = I("Eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const r8 = I("GitBranch", [
  ["line", { x1: "6", x2: "6", y1: "3", y2: "15", key: "17qcm7" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M18 9a9 9 0 0 1-9 9", key: "n2h4wq" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const i8 = I("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  [
    "path",
    { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
  ],
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const s8 = I("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const o8 = I("House", [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const a8 = I("Lightbulb", [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb",
    },
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Io = I("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Z1 = I("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z",
    },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const l8 = I("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eg = I("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const u8 = I("Send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3",
    },
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const c8 = I("Smartphone", [
  [
    "rect",
    {
      width: "14",
      height: "20",
      x: "5",
      y: "2",
      rx: "2",
      ry: "2",
      key: "1yt0o3",
    },
  ],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ru = I("Star", [
  [
    "polygon",
    {
      points:
        "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      key: "8f66p6",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tg = I("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ng = I("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
var rg = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Ih = tt.createContext && tt.createContext(rg),
  d8 = ["attr", "size", "title"];
function f8(e, t) {
  if (e == null) return {};
  var n = h8(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function h8(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function lo() {
  return (
    (lo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    lo.apply(this, arguments)
  );
}
function Fh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function uo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Fh(Object(n), !0).forEach(function (r) {
          p8(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Fh(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function p8(e, t, n) {
  return (
    (t = m8(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function m8(e) {
  var t = g8(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function g8(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ig(e) {
  return (
    e &&
    e.map((t, n) =>
      tt.createElement(t.tag, uo({ key: n }, t.attr), ig(t.child))
    )
  );
}
function ue(e) {
  return (t) =>
    tt.createElement(y8, lo({ attr: uo({}, e.attr) }, t), ig(e.child));
}
function y8(e) {
  var t = (n) => {
    var { attr: r, size: i, title: s } = e,
      o = f8(e, d8),
      a = i || n.size || "1em",
      l;
    return (
      n.className && (l = n.className),
      e.className && (l = (l ? l + " " : "") + e.className),
      tt.createElement(
        "svg",
        lo(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: l,
            style: uo(uo({ color: e.color || n.color }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        s && tt.createElement("title", null, s),
        e.children
      )
    );
  };
  return Ih !== void 0
    ? tt.createElement(Ih.Consumer, null, (n) => t(n))
    : t(rg);
}
function sg(e) {
  return ue({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z",
        },
        child: [],
      },
    ],
  })(e);
}
function og(e) {
  return ue({
    tag: "svg",
    attr: { viewBox: "0 0 384 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z",
        },
        child: [],
      },
    ],
  })(e);
}
function v8(e) {
  return ue({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z",
        },
        child: [],
      },
    ],
  })(e);
}
function bn(e) {
  return ue({
    tag: "svg",
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
        },
        child: [],
      },
    ],
  })(e);
}
function ag(e) {
  return ue({
    tag: "svg",
    attr: { viewBox: "0 0 384 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
        },
        child: [],
      },
    ],
  })(e);
}
function Bc(e) {
  return ue({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z",
        },
        child: [],
      },
    ],
  })(e);
}
function co(e) {
  return ue({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
        },
        child: [],
      },
    ],
  })(e);
}
function x8(e) {
  return ue({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z",
        },
        child: [],
      },
    ],
  })(e);
}
function w8(e) {
  return ue({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z",
        },
        child: [],
      },
    ],
  })(e);
}
function Uc(e) {
  return ue({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z",
        },
        child: [],
      },
    ],
  })(e);
}
function S8() {
  const [e, t] = S.useState(!1),
    [n, r] = S.useState(!1),
    i = Mi();
  S.useEffect(() => {
    const a = () => {
      r(window.scrollY > 50);
    };
    return (
      window.addEventListener("scroll", a),
      () => window.removeEventListener("scroll", a)
    );
  }, []);
  const s = [
      { name: "Home", path: "/", icon: d.jsx(o8, { size: 18 }) },
      { name: "About", path: "/about", icon: d.jsx(tg, { size: 18 }) },
      { name: "Projects", path: "/projects", icon: d.jsx(Ic, { size: 18 }) },
      {
        name: "Experience",
        path: "/experience",
        icon: d.jsx(q1, { size: 18 }),
      },
      {
        name: "Certifications",
        path: "/certifications",
        icon: d.jsx(eu, { size: 18 }),
      },
      { name: "Contact", path: "/contact", icon: d.jsx(Io, { size: 18 }) },
    ],
    o = (a) => i.pathname === a;
  return d.jsx(b.header, {
    className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      n
        ? "bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800"
        : "bg-transparent"
    }`,
    initial: { y: -100 },
    animate: { y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    children: d.jsxs("nav", {
      className: "container mx-auto px-4 py-4",
      children: [
        d.jsxs("div", {
          className: "flex items-center justify-between",
          children: [
            d.jsx(b.div, {
              className:
                "text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text",
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              children: d.jsx(ya, {
                to: "/",
                className: "block",
                children: "AT",
              }),
            }),
            d.jsx("div", {
              className: "hidden md:flex items-center space-x-8",
              children: s.map((a, l) =>
                d.jsx(
                  b.div,
                  {
                    initial: { opacity: 0, y: -20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5, delay: l * 0.1 },
                    children: d.jsxs(ya, {
                      to: a.path,
                      className: `group relative flex items-center space-x-2 transition-colors duration-300 ${
                        o(a.path)
                          ? "text-blue-400"
                          : "text-gray-300 hover:text-white"
                      }`,
                      children: [
                        d.jsx(b.div, {
                          className: `transition-colors duration-300 ${
                            o(a.path)
                              ? "text-blue-400"
                              : "text-blue-400 group-hover:text-blue-300"
                          }`,
                          whileHover: { rotate: 360 },
                          transition: { duration: 0.3 },
                          children: a.icon,
                        }),
                        d.jsx("span", {
                          className: "font-medium",
                          children: a.name,
                        }),
                        o(a.path) &&
                          d.jsx(b.div, {
                            layoutId: "activeTab",
                            className:
                              "absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500",
                            initial: !1,
                            transition: {
                              type: "spring",
                              stiffness: 500,
                              damping: 30,
                            },
                          }),
                      ],
                    }),
                  },
                  a.name
                )
              ),
            }),
            d.jsxs("div", {
              className: "hidden md:flex items-center space-x-4",
              children: [
                d.jsxs(b.a, {
                  href: "https://github.com/Abhishek6827",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "group relative p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300",
                  whileHover: { scale: 1.1, rotate: 5 },
                  whileTap: { scale: 0.95 },
                  children: [
                    d.jsx(bn, {
                      size: 20,
                      className:
                        "text-gray-300 group-hover:text-white transition-colors duration-300",
                    }),
                    d.jsx(b.div, {
                      className:
                        "absolute inset-0 rounded-full border-2 border-blue-400 opacity-0 group-hover:opacity-100",
                      initial: { scale: 0.8 },
                      whileHover: { scale: 1.1 },
                      transition: { duration: 0.3 },
                    }),
                  ],
                }),
                d.jsxs(b.a, {
                  href: "https://www.linkedin.com/in/abhishek-tiwariiii",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "group relative p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300",
                  whileHover: { scale: 1.1, rotate: -5 },
                  whileTap: { scale: 0.95 },
                  children: [
                    d.jsx(co, {
                      size: 20,
                      className:
                        "text-gray-300 group-hover:text-blue-400 transition-colors duration-300",
                    }),
                    d.jsx(b.div, {
                      className:
                        "absolute inset-0 rounded-full border-2 border-blue-400 opacity-0 group-hover:opacity-100",
                      initial: { scale: 0.8 },
                      whileHover: { scale: 1.1 },
                      transition: { duration: 0.3 },
                    }),
                  ],
                }),
              ],
            }),
            d.jsx(b.button, {
              className:
                "md:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300",
              onClick: () => t(!e),
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              children: d.jsx(wn, {
                mode: "wait",
                children: e
                  ? d.jsx(
                      b.div,
                      {
                        initial: { rotate: -90, opacity: 0 },
                        animate: { rotate: 0, opacity: 1 },
                        exit: { rotate: 90, opacity: 0 },
                        transition: { duration: 0.2 },
                        children: d.jsx(ng, {
                          size: 24,
                          className: "text-white",
                        }),
                      },
                      "close"
                    )
                  : d.jsx(
                      b.div,
                      {
                        initial: { rotate: 90, opacity: 0 },
                        animate: { rotate: 0, opacity: 1 },
                        exit: { rotate: -90, opacity: 0 },
                        transition: { duration: 0.2 },
                        children: d.jsx(l8, {
                          size: 24,
                          className: "text-white",
                        }),
                      },
                      "menu"
                    ),
              }),
            }),
          ],
        }),
        d.jsx(wn, {
          children:
            e &&
            d.jsx(b.div, {
              className: "md:hidden mt-4 py-4 border-t border-gray-800",
              initial: { opacity: 0, height: 0 },
              animate: { opacity: 1, height: "auto" },
              exit: { opacity: 0, height: 0 },
              transition: { duration: 0.3 },
              children: d.jsxs("div", {
                className: "space-y-4",
                children: [
                  s.map((a, l) =>
                    d.jsx(
                      b.div,
                      {
                        initial: { opacity: 0, x: -20 },
                        animate: { opacity: 1, x: 0 },
                        transition: { duration: 0.3, delay: l * 0.1 },
                        children: d.jsxs(ya, {
                          to: a.path,
                          className: `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                            o(a.path)
                              ? "text-blue-400 bg-blue-500/10"
                              : "text-gray-300 hover:text-white hover:bg-gray-800"
                          }`,
                          onClick: () => t(!1),
                          children: [
                            d.jsx(b.div, {
                              className: "text-blue-400",
                              whileHover: { rotate: 360 },
                              transition: { duration: 0.3 },
                              children: a.icon,
                            }),
                            d.jsx("span", {
                              className: "font-medium",
                              children: a.name,
                            }),
                          ],
                        }),
                      },
                      a.name
                    )
                  ),
                  d.jsxs("div", {
                    className:
                      "flex items-center space-x-4 px-4 pt-4 border-t border-gray-800",
                    children: [
                      d.jsxs(b.a, {
                        href: "https://github.com/Abhishek6827",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300",
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        children: [
                          d.jsx(bn, { size: 20 }),
                          d.jsx("span", { children: "GitHub" }),
                        ],
                      }),
                      d.jsxs(b.a, {
                        href: "https://www.linkedin.com/in/abhishek-tiwariiii",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300",
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        children: [
                          d.jsx(co, { size: 20 }),
                          d.jsx("span", { children: "LinkedIn" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
        }),
      ],
    }),
  });
}
function lg(e) {
  return ue({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.53 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z",
        },
        child: [],
      },
    ],
  })(e);
}
function C8(e) {
  return ue({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z",
        },
        child: [],
      },
    ],
  })(e);
}
function k8(e) {
  return ue({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: { d: "M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" },
        child: [],
      },
    ],
  })(e);
}
function P8(e) {
  return ue({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z",
        },
        child: [],
      },
    ],
  })(e);
}
function j8(e) {
  return ue({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z",
        },
        child: [],
      },
    ],
  })(e);
}
function ug(e) {
  return ue({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 00-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 01-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 001.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 001.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z",
        },
        child: [],
      },
    ],
  })(e);
}
function Hc(e) {
  return ue({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z",
        },
        child: [],
      },
    ],
  })(e);
}
function E8(e) {
  return ue({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z",
        },
        child: [],
      },
    ],
  })(e);
}
function T8() {
  const e = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    t = [
      {
        name: "React",
        icon: d.jsx(Uc, { className: "text-blue-400" }),
        color: "hover:text-blue-400",
      },
      {
        name: "JavaScript",
        icon: d.jsx(Bc, { className: "text-yellow-400" }),
        color: "hover:text-yellow-400",
      },
      {
        name: "Tailwind CSS",
        icon: d.jsx(Hc, { className: "text-cyan-400" }),
        color: "hover:text-cyan-400",
      },
      {
        name: "Framer Motion",
        icon: d.jsx(k8, { className: "text-pink-400" }),
        color: "hover:text-pink-400",
      },
    ],
    n = [
      {
        icon: d.jsx(Io, { size: 16 }),
        text: "abhishektiwari6827@gmail.com",
        href: "mailto:abhishektiwari6827@gmail.com",
      },
      {
        icon: d.jsx(Z1, { size: 16 }),
        text: "Lucknow, Uttar Pradesh, India",
        href: null,
      },
      {
        icon: d.jsx(eg, { size: 16 }),
        text: "+91 7081660941",
        href: "tel:+917081660941",
      },
    ];
  return d.jsxs("footer", {
    className: "bg-gray-900 border-t border-gray-800 relative overflow-hidden",
    children: [
      d.jsxs("div", {
        className: "absolute inset-0 opacity-5",
        children: [
          d.jsx(b.div, {
            className:
              "absolute top-0 left-1/4 w-32 h-32 bg-blue-500 rounded-full blur-3xl",
            animate: { y: [0, -20, 0], x: [0, 10, 0], scale: [1, 1.1, 1] },
            transition: {
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }),
          d.jsx(b.div, {
            className:
              "absolute bottom-0 right-1/4 w-24 h-24 bg-purple-500 rounded-full blur-3xl",
            animate: { y: [0, 15, 0], x: [0, -15, 0], scale: [1, 0.9, 1] },
            transition: {
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }),
        ],
      }),
      d.jsxs("div", {
        className: "container mx-auto px-4 py-12 relative z-10",
        children: [
          d.jsxs("div", {
            className: "grid md:grid-cols-3 gap-8 mb-8",
            children: [
              d.jsxs(b.div, {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.6 },
                viewport: { once: !0 },
                children: [
                  d.jsx("h3", {
                    className:
                      "text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text",
                    children: "Abhishek Tiwari",
                  }),
                  d.jsx("p", {
                    className: "text-gray-400 mb-4 leading-relaxed",
                    children:
                      "Full-Stack Developer passionate about creating innovative web solutions. Always learning, always building, always improving.",
                  }),
                  d.jsxs("div", {
                    className: "flex space-x-4",
                    children: [
                      d.jsxs(b.a, {
                        href: "https://github.com/Abhishek6827",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "group relative p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300",
                        whileHover: { scale: 1.1, y: -2 },
                        whileTap: { scale: 0.95 },
                        children: [
                          d.jsx(bn, {
                            size: 20,
                            className:
                              "text-gray-300 group-hover:text-white transition-colors duration-300",
                          }),
                          d.jsx(b.div, {
                            className:
                              "absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20",
                            initial: { scale: 0 },
                            whileHover: { scale: 1 },
                            transition: { duration: 0.3 },
                          }),
                        ],
                      }),
                      d.jsxs(b.a, {
                        href: "https://www.linkedin.com/in/abhishek-tiwariiii",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "group relative p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300",
                        whileHover: { scale: 1.1, y: -2 },
                        whileTap: { scale: 0.95 },
                        children: [
                          d.jsx(co, {
                            size: 20,
                            className:
                              "text-gray-300 group-hover:text-blue-400 transition-colors duration-300",
                          }),
                          d.jsx(b.div, {
                            className:
                              "absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20",
                            initial: { scale: 0 },
                            whileHover: { scale: 1 },
                            transition: { duration: 0.3 },
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              d.jsxs(b.div, {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.2 },
                viewport: { once: !0 },
                children: [
                  d.jsx("h3", {
                    className: "text-xl font-semibold mb-4 text-white",
                    children: "Get In Touch",
                  }),
                  d.jsx("div", {
                    className: "space-y-3",
                    children: n.map((r, i) =>
                      d.jsxs(
                        b.div,
                        {
                          className:
                            "flex items-center space-x-3 text-gray-400",
                          whileHover: { x: 5 },
                          transition: { duration: 0.2 },
                          children: [
                            d.jsx(b.div, {
                              className: "text-blue-400",
                              whileHover: { rotate: 360 },
                              transition: { duration: 0.3 },
                              children: r.icon,
                            }),
                            r.href
                              ? d.jsx("a", {
                                  href: r.href,
                                  className:
                                    "hover:text-white transition-colors duration-300",
                                  children: r.text,
                                })
                              : d.jsx("span", { children: r.text }),
                          ],
                        },
                        i
                      )
                    ),
                  }),
                ],
              }),
              d.jsxs(b.div, {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.4 },
                viewport: { once: !0 },
                children: [
                  d.jsx("h3", {
                    className: "text-xl font-semibold mb-4 text-white",
                    children: "Built With",
                  }),
                  d.jsx("div", {
                    className: "grid grid-cols-2 gap-3",
                    children: t.map((r, i) =>
                      d.jsxs(
                        b.div,
                        {
                          className: `flex items-center space-x-2 text-gray-400 ${r.color} transition-colors duration-300 cursor-pointer`,
                          whileHover: { scale: 1.05, x: 5 },
                          whileTap: { scale: 0.95 },
                          children: [
                            d.jsx(b.div, {
                              whileHover: { rotate: 360 },
                              transition: { duration: 0.3 },
                              children: r.icon,
                            }),
                            d.jsx("span", {
                              className: "text-sm font-medium",
                              children: r.name,
                            }),
                          ],
                        },
                        r.name
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
          d.jsxs(b.div, {
            className:
              "border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between",
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            transition: { duration: 0.6, delay: 0.6 },
            viewport: { once: !0 },
            children: [
              d.jsxs("div", {
                className:
                  "flex items-center space-x-2 text-gray-400 mb-4 md:mb-0",
                children: [
                  d.jsx("span", { children: "Made with" }),
                  d.jsx(b.div, {
                    animate: { scale: [1, 1.2, 1] },
                    transition: {
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                    },
                    children: d.jsx(s8, {
                      size: 16,
                      className: "text-red-500 fill-current",
                    }),
                  }),
                  d.jsx("span", { children: "by Abhishek Tiwari" }),
                ],
              }),
              d.jsxs("div", {
                className: "flex items-center space-x-4",
                children: [
                  d.jsx("span", {
                    className: "text-gray-400 text-sm",
                    children: "© 2025 All rights reserved",
                  }),
                  d.jsx(b.button, {
                    onClick: e,
                    className:
                      "group p-2 bg-gray-800 hover:bg-blue-500 rounded-full transition-all duration-300",
                    whileHover: { scale: 1.1, y: -2 },
                    whileTap: { scale: 0.95 },
                    children: d.jsx(b.div, {
                      whileHover: { y: -2 },
                      transition: { duration: 0.2 },
                      children: d.jsx(Y6, {
                        size: 16,
                        className:
                          "text-gray-300 group-hover:text-white transition-colors duration-300",
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function b8() {
  return d.jsxs("div", {
    className:
      "min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white",
    children: [
      d.jsx(S8, {}),
      d.jsx("main", { className: "pt-20 pb-12 px-4", children: d.jsx(hx, {}) }),
      d.jsx(T8, {}),
    ],
  });
}
function N8() {
  const e = [
    {
      title: "Frontend Development",
      icon: d.jsx(i8, { className: "w-6 h-6" }),
      skills: [
        { name: "React", icon: d.jsx(Uc, {}), level: 90 },
        { name: "JavaScript", icon: d.jsx(Bc, {}), level: 85 },
        { name: "TypeScript", icon: d.jsx(E8, {}), level: 75 },
        { name: "HTML5", icon: d.jsx(ag, {}), level: 95 },
        { name: "CSS3", icon: d.jsx(og, {}), level: 90 },
        { name: "Redux", icon: d.jsx(ug, {}), level: 80 },
        { name: "Tailwind CSS", icon: d.jsx(Hc, {}), level: 85 },
        { name: "Bootstrap", icon: d.jsx(sg, {}), level: 80 },
      ],
    },
    {
      title: "Backend Development",
      icon: d.jsx(n8, { className: "w-6 h-6" }),
      skills: [
        { name: "Node.js", icon: d.jsx(x8, {}), level: 80 },
        { name: "Express.js", icon: d.jsx(C8, {}), level: 75 },
        { name: "Python", icon: d.jsx(w8, {}), level: 70 },
        { name: "Django", icon: d.jsx(lg, {}), level: 65 },
        { name: "MongoDB", icon: d.jsx(P8, {}), level: 75 },
        { name: "MySQL", icon: d.jsx(j8, {}), level: 70 },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: d.jsx(Oh, { className: "w-6 h-6" }),
      skills: [
        { name: "Git", icon: d.jsx(v8, {}), level: 85 },
        { name: "VS Code", icon: d.jsx(Oh, {}), level: 90 },
        { name: "Responsive Design", icon: d.jsx(c8, {}), level: 90 },
      ],
    },
  ];
  return d.jsx("section", {
    className: "py-20",
    children: d.jsxs("div", {
      className: "container mx-auto px-4",
      children: [
        d.jsxs(b.div, {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "text-center mb-16",
          children: [
            d.jsx("h2", {
              className:
                "text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text",
              children: "Skills & Technologies",
            }),
            d.jsx("p", {
              className: "text-gray-400 text-lg max-w-2xl mx-auto",
              children:
                "A comprehensive overview of my technical skills and the technologies I work with to bring ideas to life.",
            }),
          ],
        }),
        d.jsx("div", {
          className: "grid lg:grid-cols-3 gap-8",
          children: e.map((t, n) =>
            d.jsxs(
              b.div,
              {
                initial: { opacity: 0, y: 50 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: n * 0.2 },
                className:
                  "bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300",
                children: [
                  d.jsxs("div", {
                    className: "flex items-center mb-6",
                    children: [
                      d.jsx("div", {
                        className: "text-blue-400 mr-3",
                        children: t.icon,
                      }),
                      d.jsx("h3", {
                        className: "text-xl font-semibold text-white",
                        children: t.title,
                      }),
                    ],
                  }),
                  d.jsx("div", {
                    className: "space-y-4",
                    children: t.skills.map((r, i) =>
                      d.jsxs(
                        b.div,
                        {
                          initial: { opacity: 0, x: -20 },
                          animate: { opacity: 1, x: 0 },
                          transition: {
                            duration: 0.5,
                            delay: n * 0.2 + i * 0.1,
                          },
                          className: "group",
                          children: [
                            d.jsxs("div", {
                              className:
                                "flex items-center justify-between mb-2",
                              children: [
                                d.jsxs("div", {
                                  className: "flex items-center space-x-2",
                                  children: [
                                    d.jsx("div", {
                                      className: "text-blue-400 text-lg",
                                      children: r.icon,
                                    }),
                                    d.jsx("span", {
                                      className: "text-gray-300 font-medium",
                                      children: r.name,
                                    }),
                                  ],
                                }),
                                d.jsxs("span", {
                                  className: "text-gray-400 text-sm",
                                  children: [r.level, "%"],
                                }),
                              ],
                            }),
                            d.jsx("div", {
                              className: "w-full bg-gray-700 rounded-full h-2",
                              children: d.jsx(b.div, {
                                className:
                                  "bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full",
                                initial: { width: 0 },
                                animate: { width: `${r.level}%` },
                                transition: {
                                  duration: 1,
                                  delay: n * 0.2 + i * 0.1 + 0.5,
                                  ease: "easeOut",
                                },
                              }),
                            }),
                          ],
                        },
                        r.name
                      )
                    ),
                  }),
                ],
              },
              t.title
            )
          ),
        }),
        d.jsx(b.div, {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.8 },
          className: "mt-16 text-center",
          children: d.jsxs("div", {
            className:
              "bg-gradient-to-r from-gray-800 to-gray-700 p-8 rounded-xl shadow-lg",
            children: [
              d.jsx("h3", {
                className: "text-2xl font-bold mb-4 text-white",
                children: "Always Learning, Always Growing",
              }),
              d.jsx("p", {
                className: "text-gray-300 text-lg mb-6",
                children:
                  "Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, tools, and best practices to stay at the forefront of web development.",
              }),
              d.jsxs("div", {
                className:
                  "flex justify-center space-x-6 text-sm text-gray-400",
                children: [
                  d.jsx("span", { children: "📚 Continuous Learning" }),
                  d.jsx("span", { children: "🔧 Hands-on Practice" }),
                  d.jsx("span", { children: "🌟 Best Practices" }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function cg() {
  const e = [
    {
      title: "Full-Stack Developer Intern",
      company: "Hoping Minds",
      period: "01/2025 - 06/2025",
      responsibilities: [
        "Developed and maintained web applications using React, Redux, and Django",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Implemented responsive designs and optimized application performance",
        "Participated in code reviews and followed best practices for clean code",
      ],
      technologies: ["React", "Redux", "Django", "PostgreSQL", "JavaScript"],
    },
    {
      title: "Web Developer",
      company: "Quizario",
      period: "11/2023 - 01/2025",
      responsibilities: [
        "Built interactive quiz applications with modern web technologies",
        "Coordinated with team members to ensure project deliverables",
        "Implemented user authentication and data management features",
        "Optimized application performance and user experience",
      ],
      technologies: ["React", "JavaScript", "Bootstrap", "RESTful APIs"],
    },
  ];
  return d.jsxs("section", {
    className: "container mx-auto px-4",
    children: [
      d.jsxs("h2", {
        className:
          "text-3xl font-bold mb-8 text-center flex justify-center items-center",
        children: [
          d.jsx(q1, { className: "mr-2" }),
          " Professional Experience",
        ],
      }),
      d.jsx("div", {
        className: "space-y-8",
        children: e.map((t, n) =>
          d.jsxs(
            b.div,
            {
              className: "bg-gray-800 p-8 rounded-lg shadow-lg",
              initial: { opacity: 0, x: n % 2 === 0 ? -50 : 50 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.5, delay: n * 0.2 },
              children: [
                d.jsxs("div", {
                  className:
                    "flex flex-col md:flex-row md:justify-between md:items-start mb-4",
                  children: [
                    d.jsxs("div", {
                      children: [
                        d.jsx("h3", {
                          className:
                            "text-2xl font-semibold mb-2 text-blue-400",
                          children: t.title,
                        }),
                        d.jsx("p", {
                          className: "text-xl text-gray-300 mb-2",
                          children: t.company,
                        }),
                      ],
                    }),
                    d.jsx("span", {
                      className:
                        "bg-blue-500 bg-opacity-20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium",
                      children: t.period,
                    }),
                  ],
                }),
                d.jsx("ul", {
                  className: "list-disc list-inside space-y-2 mb-6",
                  children: t.responsibilities.map((r, i) =>
                    d.jsx("li", { className: "text-gray-300", children: r }, i)
                  ),
                }),
                d.jsx("div", {
                  className: "flex flex-wrap gap-2",
                  children: t.technologies.map((r) =>
                    d.jsx(
                      "span",
                      {
                        className:
                          "bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm",
                        children: r,
                      },
                      r
                    )
                  ),
                }),
              ],
            },
            t.title
          )
        ),
      }),
    ],
  });
}
function M8() {
  return d.jsxs("div", {
    className: "space-y-20",
    children: [d.jsx(R8, {}), d.jsx(N8, {}), d.jsx(cg, {})],
  });
}
function R8() {
  const e = [
      {
        name: "Myntra Clone",
        image:
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop&crop=center",
        demo: "https://Abhishek6827.github.io/Myntra/",
        github: "https://github.com/Abhishek6827/Myntra",
        tech: ["React", "Redux", "CSS"],
        description: "Fashion e-commerce platform with modern UI",
        color: "from-pink-500 to-rose-500",
      },
      {
        name: "Amazon Clone",
        image:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop&crop=center",
        demo: "https://Abhishek6827.github.io/Amazon/",
        github: "https://github.com/Abhishek6827/Amazon",
        tech: ["React", "JavaScript", "CSS"],
        description: "E-commerce platform with advanced features",
        color: "from-orange-500 to-amber-500",
      },
      {
        name: "Kanban_WorkBoard",
        image:
          "https://images.unsplash.com/photo-1611224923853-0139583c060f?w=500&h=300&fit=crop&crop=center",
        demo: "https://Abhishek6827.github.io/Kanban_WorkBoard/",
        github: "https://github.com/Abhishek6827/Kanban_WorkBoard",
        tech: ["React", "Redux", "Tailwind"],
        description: "Project management dashboard with collaboration tools",
        color: "from-blue-500 to-cyan-500",
      },
      {
        name: "Bharat Clock",
        image:
          "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=500&h=300&fit=crop&crop=center",
        demo: "https://Abhishek6827.github.io/Bharat-Clock/",
        github: "https://github.com/Abhishek6827/Bharat-Clock",
        tech: ["JavaScript", "CSS", "HTML"],
        description: "Beautiful digital clock with Indian time zones",
        color: "from-green-500 to-emerald-500",
      },
      {
        name: "Calculator",
        image:
          "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=500&h=300&fit=crop&crop=center",
        demo: "https://Abhishek6827.github.io/Calculator/",
        github: "https://github.com/Abhishek6827/Calculator",
        tech: ["JavaScript", "CSS", "HTML"],
        description: "Modern calculator with scientific functions",
        color: "from-purple-500 to-violet-500",
      },
    ],
    [t, n] = S.useState(0),
    [r, i] = S.useState(!0),
    [s, o] = S.useState(0),
    [a, l] = S.useState(!1),
    [u, c] = S.useState(1),
    f = 6e3;
  S.useEffect(() => {
    if (!r) return;
    const w = setInterval(() => {
      o((m) =>
        m >= 100
          ? (n((p) => {
              const g = (p + 1) % e.length;
              return c(1), g;
            }),
            0)
          : m + 100 / (f / 100)
      );
    }, 100);
    return () => clearInterval(w);
  }, [r, e.length]);
  const h = S.useCallback(
      (w) => {
        c(w > t ? 1 : -1),
          n(w),
          o(0),
          i(!1),
          l(!1),
          setTimeout(() => i(!0), 15e3);
      },
      [t]
    ),
    y = S.useCallback(() => {
      const w = t === 0 ? e.length - 1 : t - 1;
      h(w);
    }, [t, e.length, h]),
    v = S.useCallback(() => {
      const w = (t + 1) % e.length;
      h(w);
    }, [t, e.length, h]);
  S.useEffect(() => {
    const w = (m) => {
      m.key === "ArrowLeft" && y(),
        m.key === "ArrowRight" && v(),
        m.key === " " && (m.preventDefault(), i(!r));
    };
    return (
      window.addEventListener("keydown", w),
      () => window.removeEventListener("keydown", w)
    );
  }, [y, v, r]);
  const x = {
    enter: (w) => ({ x: w > 0 ? 300 : -300, opacity: 0, scale: 0.8 }),
    center: { zIndex: 1, x: 0, opacity: 1, scale: 1 },
    exit: (w) => ({ zIndex: 0, x: w < 0 ? 300 : -300, opacity: 0, scale: 0.8 }),
  };
  return d.jsxs("section", {
    className:
      "relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden",
    children: [
      d.jsxs("div", {
        className: "absolute inset-0",
        children: [
          d.jsx(b.div, {
            className:
              "absolute top-1/4 left-1/2 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen opacity-30 blur-3xl",
            initial: { scale: 0 },
            animate: {
              scale: [1, 1.3, 1.1],
              x: [-20, 20, -10],
              y: [-10, 10, -5],
            },
            transition: {
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }),
          d.jsx(b.div, {
            className:
              "absolute top-1/2 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen opacity-20 blur-3xl",
            initial: { scale: 0 },
            animate: { scale: [1.2, 0.8, 1], x: [10, -15, 5], y: [5, -10, 0] },
            transition: {
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }),
          d.jsx(b.div, {
            className:
              "absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-400 rounded-full mix-blend-screen opacity-25 blur-3xl",
            initial: { scale: 0 },
            animate: {
              scale: [0.8, 1.2, 0.9],
              x: [-5, 15, -8],
              y: [8, -12, 3],
            },
            transition: {
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }),
        ],
      }),
      d.jsx("div", {
        className: "container mx-auto px-4 relative z-10",
        children: d.jsxs("div", {
          className: "grid lg:grid-cols-2 gap-12 items-center",
          children: [
            d.jsxs(b.div, {
              initial: { opacity: 0, x: -50 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.8 },
              className: "text-center lg:text-left",
              children: [
                d.jsxs(b.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, delay: 0.2 },
                  children: [
                    d.jsx("h1", {
                      className:
                        "text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 text-transparent bg-clip-text",
                      children: "Abhishek Tiwari",
                    }),
                    d.jsx("div", {
                      className: "text-xl lg:text-2xl text-gray-300 mb-6 h-16",
                      children: d.jsx(b.p, {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { duration: 1, delay: 0.5 },
                        children:
                          "Full-Stack Developer | React Enthusiast | Problem Solver",
                      }),
                    }),
                    d.jsx(b.p, {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.8, delay: 0.8 },
                      className:
                        "text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0",
                      children:
                        "Crafting digital experiences with modern web technologies. Passionate about creating scalable solutions that make a difference.",
                    }),
                  ],
                }),
                d.jsxs(b.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, delay: 1 },
                  className: "flex justify-center lg:justify-start space-x-6",
                  children: [
                    d.jsxs(b.a, {
                      href: "https://github.com/Abhishek6827",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "group relative p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300",
                      whileHover: { scale: 1.1, y: -2 },
                      whileTap: { scale: 0.95 },
                      children: [
                        d.jsx(bn, {
                          size: 24,
                          className:
                            "text-white group-hover:text-blue-400 transition-colors",
                        }),
                        d.jsx("span", {
                          className:
                            "absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity",
                          children: "GitHub",
                        }),
                      ],
                    }),
                    d.jsxs(b.a, {
                      href: "https://www.linkedin.com/in/abhishek-tiwariiii",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "group relative p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300",
                      whileHover: { scale: 1.1, y: -2 },
                      whileTap: { scale: 0.95 },
                      children: [
                        d.jsx(co, {
                          size: 24,
                          className:
                            "text-white group-hover:text-blue-400 transition-colors",
                        }),
                        d.jsx("span", {
                          className:
                            "absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity",
                          children: "LinkedIn",
                        }),
                      ],
                    }),
                    d.jsxs(b.a, {
                      href: "mailto:abhishektiwari6827@gmail.com",
                      className:
                        "group relative p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300",
                      whileHover: { scale: 1.1, y: -2 },
                      whileTap: { scale: 0.95 },
                      children: [
                        d.jsx(Io, {
                          size: 24,
                          className:
                            "text-white group-hover:text-blue-400 transition-colors",
                        }),
                        d.jsx("span", {
                          className:
                            "absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity",
                          children: "Email",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            d.jsx(b.div, {
              initial: { opacity: 0, x: 50 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.8, delay: 0.4 },
              className: "relative",
              children: d.jsxs("div", {
                className:
                  "bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 relative overflow-hidden",
                children: [
                  d.jsxs("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [
                      d.jsx("h3", {
                        className: "text-xl font-semibold text-white",
                        children: "Featured Projects",
                      }),
                      d.jsxs("div", {
                        className: "flex items-center space-x-3",
                        children: [
                          d.jsx("div", {
                            className: "flex space-x-2",
                            children: e.map((w, m) =>
                              d.jsx(
                                "button",
                                {
                                  onClick: () => h(m),
                                  className: `relative w-2 h-2 rounded-full transition-all duration-300 ${
                                    m === t
                                      ? "bg-blue-400 w-6"
                                      : "bg-gray-600 hover:bg-gray-500"
                                  }`,
                                  children:
                                    m === t &&
                                    r &&
                                    d.jsx("div", {
                                      className:
                                        "absolute inset-0 bg-blue-300 rounded-full transition-all duration-100",
                                      style: { width: `${s}%` },
                                    }),
                                },
                                m
                              )
                            ),
                          }),
                          d.jsx("button", {
                            onClick: () => i(!r),
                            className: `text-xs px-2 py-1 rounded transition-colors ${
                              r
                                ? "bg-blue-500 text-white"
                                : "bg-gray-600 text-gray-300"
                            }`,
                            children: r ? "⏸" : "▶",
                          }),
                        ],
                      }),
                    ],
                  }),
                  d.jsx("div", {
                    className: "relative group",
                    children: d.jsx(wn, {
                      initial: !1,
                      custom: u,
                      mode: "wait",
                      children: d.jsxs(
                        b.div,
                        {
                          custom: u,
                          variants: x,
                          initial: "enter",
                          animate: "center",
                          exit: "exit",
                          transition: {
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.3 },
                            scale: { duration: 0.3 },
                          },
                          className: "relative",
                          children: [
                            d.jsxs("div", {
                              className: "relative overflow-hidden rounded-lg",
                              children: [
                                d.jsx("img", {
                                  src:
                                    e[t].image ||
                                    "/placeholder.svg?height=192&width=400&query=project showcase",
                                  alt: e[t].name,
                                  className:
                                    "w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105",
                                  loading: "lazy",
                                  onLoad: () => l(!0),
                                  onError: () => l(!1),
                                }),
                                !a &&
                                  d.jsx("div", {
                                    className:
                                      "absolute inset-0 bg-gray-700 animate-pulse flex items-center justify-center",
                                    children: d.jsx("div", {
                                      className:
                                        "w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin",
                                    }),
                                  }),
                                d.jsx("div", {
                                  className:
                                    "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                }),
                                d.jsx("button", {
                                  onClick: y,
                                  className:
                                    "absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300",
                                  children: d.jsx(q6, { size: 16 }),
                                }),
                                d.jsx("button", {
                                  onClick: v,
                                  className:
                                    "absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300",
                                  children: d.jsx(Z6, { size: 16 }),
                                }),
                                d.jsx("div", {
                                  className:
                                    "absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100",
                                  children: d.jsxs("div", {
                                    className: "flex space-x-2",
                                    children: [
                                      d.jsxs(b.a, {
                                        href: e[t].demo,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className:
                                          "flex items-center space-x-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full text-sm transition-colors",
                                        whileHover: { scale: 1.05 },
                                        whileTap: { scale: 0.95 },
                                        children: [
                                          d.jsx(Fc, { size: 14 }),
                                          d.jsx("span", {
                                            children: "Live Demo",
                                          }),
                                        ],
                                      }),
                                      d.jsxs(b.a, {
                                        href: e[t].github,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className:
                                          "flex items-center space-x-1 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-full text-sm transition-colors",
                                        whileHover: { scale: 1.05 },
                                        whileTap: { scale: 0.95 },
                                        children: [
                                          d.jsx(bn, { size: 14 }),
                                          d.jsx("span", { children: "Code" }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            d.jsxs("div", {
                              className: "mt-4",
                              children: [
                                d.jsx("h4", {
                                  className:
                                    "text-lg font-semibold text-white mb-1",
                                  children: e[t].name,
                                }),
                                d.jsx("p", {
                                  className: "text-gray-400 text-sm mb-3",
                                  children: e[t].description,
                                }),
                                d.jsx("div", {
                                  className: "flex flex-wrap gap-2",
                                  children: e[t].tech.map((w) =>
                                    d.jsx(
                                      "span",
                                      {
                                        className: `bg-gradient-to-r ${e[t].color} bg-opacity-20 text-white px-2 py-1 rounded text-xs font-medium`,
                                        children: w,
                                      },
                                      w
                                    )
                                  ),
                                }),
                              ],
                            }),
                          ],
                        },
                        t
                      ),
                    }),
                  }),
                  d.jsx("div", {
                    className: "mt-4 text-center",
                    children: d.jsx("p", {
                      className: "text-xs text-gray-500",
                      children:
                        "Use ← → keys to navigate • Space to pause/play",
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function _8() {
  const e = [
    {
      icon: d.jsx(Ic, { className: "w-6 h-6" }),
      title: "Full-Stack Development",
      description: "Experienced in both frontend and backend technologies",
    },
    {
      icon: d.jsx(a8, { className: "w-6 h-6" }),
      title: "Problem Solving",
      description: "Passionate about creating innovative solutions",
    },
    {
      icon: d.jsx(t8, { className: "w-6 h-6" }),
      title: "Continuous Learning",
      description: "Always exploring new technologies and best practices",
    },
  ];
  return d.jsxs("section", {
    className: "container mx-auto px-4",
    children: [
      d.jsxs("h2", {
        className:
          "text-3xl font-bold mb-8 text-center flex justify-center items-center",
        children: [d.jsx(tg, { className: "mr-2" }), " About Me"],
      }),
      d.jsxs("div", {
        className: "grid md:grid-cols-2 gap-8 items-center",
        children: [
          d.jsxs(b.div, {
            initial: { opacity: 0, x: -50 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.8 },
            className: "bg-gray-800 p-8 rounded-lg shadow-lg",
            children: [
              d.jsxs("p", {
                className: "text-lg leading-relaxed mb-6",
                children: [
                  "👋 Hi there! I'm",
                  " ",
                  d.jsx("span", {
                    className: "text-blue-400 font-semibold",
                    children: "Abhishek Tiwari",
                  }),
                  ", a passionate full-stack developer from Lucknow, India. With a strong foundation in modern web technologies, I love crafting digital experiences that make a difference.",
                ],
              }),
              d.jsx("p", {
                className: "text-lg leading-relaxed mb-6",
                children:
                  "🚀 My journey in software development has been driven by curiosity and a desire to solve real-world problems. From building responsive e-commerce platforms to creating interactive web applications, I enjoy every aspect of the development process.",
              }),
              d.jsx("p", {
                className: "text-lg leading-relaxed",
                children:
                  "💡 When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in writing clean, maintainable code and creating user-centric applications.",
              }),
            ],
          }),
          d.jsx(b.div, {
            initial: { opacity: 0, x: 50 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.8, delay: 0.2 },
            className: "space-y-4",
            children: e.map((t, n) =>
              d.jsxs(
                b.div,
                {
                  className:
                    "bg-gray-800 p-6 rounded-lg shadow-lg flex items-start space-x-4",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.5, delay: 0.4 + n * 0.1 },
                  children: [
                    d.jsx("div", {
                      className: "text-blue-400 mt-1",
                      children: t.icon,
                    }),
                    d.jsxs("div", {
                      children: [
                        d.jsx("h3", {
                          className: "text-xl font-semibold mb-2",
                          children: t.title,
                        }),
                        d.jsx("p", {
                          className: "text-gray-400",
                          children: t.description,
                        }),
                      ],
                    }),
                  ],
                },
                t.title
              )
            ),
          }),
        ],
      }),
      d.jsx(b.div, {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: 0.6 },
        className: "mt-12 text-center",
        children: d.jsxs("div", {
          className:
            "bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg shadow-lg",
          children: [
            d.jsx("h3", {
              className: "text-2xl font-bold mb-4",
              children: "Let's Build Something Amazing Together!",
            }),
            d.jsx("p", {
              className: "text-lg mb-6",
              children:
                "I'm always excited to work on new projects and collaborate with fellow developers. Whether it's a startup idea or an enterprise solution, let's turn your vision into reality.",
            }),
            d.jsxs("div", {
              className: "flex justify-center space-x-4",
              children: [
                d.jsx("span", {
                  className:
                    "bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium",
                  children: "🎯 Goal-Oriented",
                }),
                d.jsx("span", {
                  className:
                    "bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium",
                  children: "🤝 Team Player",
                }),
                d.jsx("span", {
                  className:
                    "bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium",
                  children: "📈 Growth Mindset",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function A8() {
  const e = y2(),
    { projects: t, status: n, error: r } = w2((p) => p.projects),
    [i, s] = S.useState(null),
    [o, a] = S.useState(null),
    [l, u] = S.useState("all"),
    [c, f] = S.useState(null),
    h = [
      {
        id: 1,
        name: "Myntra Clone",
        description:
          "A fully responsive e-commerce fashion website clone with modern UI/UX, product catalog, shopping cart, and user authentication features.",
        image:
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop&crop=center",
        demo: "https://Abhishek6827.github.io/Myntra/",
        github: "https://github.com/Abhishek6827/Myntra",
        tech: ["React", "Redux", "CSS", "JavaScript"],
        category: "E-commerce",
        featured: !0,
        stars: 12,
        lastUpdated: "2025-01-15",
      },
      {
        id: 2,
        name: "Amazon Clone",
        description:
          "A comprehensive Amazon-inspired e-commerce platform with product listings, search functionality, and responsive design.",
        image:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop&crop=center",
        demo: "https://Abhishek6827.github.io/Amazon/",
        github: "https://github.com/Abhishek6827/Amazon",
        tech: ["React", "JavaScript", "CSS", "HTML"],
        category: "E-commerce",
        featured: !0,
        stars: 8,
        lastUpdated: "2025-01-10",
      },
      {
        id: 3,
        name: "Kanban_WorkBoard",
        description:
          "A project management dashboard with task tracking, team collaboration features, and intuitive drag-and-drop interface.",
        image:
          "https://images.unsplash.com/photo-1611224923853-0139583c060f?w=500&h=300&fit=crop&crop=center",
        demo: "https://Abhishek6827.github.io/Kanban_WorkBoard/",
        github: "https://github.com/Abhishek6827/Kanban_WorkBoard",
        tech: ["React", "Redux", "Tailwind CSS", "JavaScript"],
        category: "Productivity",
        featured: !0,
        stars: 15,
        lastUpdated: "2025-02-01",
      },
      {
        id: 4,
        name: "Bharat Clock",
        description:
          "A beautiful digital clock application showing Indian time zones with elegant design and smooth animations.",
        image:
          "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=500&h=300&fit=crop&crop=center",
        demo: "https://Abhishek6827.github.io/Bharat-Clock/",
        github: "https://github.com/Abhishek6827/Bharat-Clock",
        tech: ["JavaScript", "CSS", "HTML"],
        category: "Utility",
        featured: !1,
        stars: 5,
        lastUpdated: "2023-12-20",
      },
      {
        id: 5,
        name: "Calculator",
        description:
          "A modern calculator application with scientific functions, memory operations, and responsive design.",
        image:
          "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=500&h=300&fit=crop&crop=center",
        demo: "https://Abhishek6827.github.io/Calculator/",
        github: "https://github.com/Abhishek6827/Calculator",
        tech: ["JavaScript", "CSS", "HTML"],
        category: "Utility",
        featured: !1,
        stars: 3,
        lastUpdated: "2023-11-15",
      },
      {
        id: 6,
        name: "Elante Mall",
        description:
          "A shopping mall website with store directory, event listings, and interactive mall map functionality.",
        image:
          "https://images.unsplash.com/photo-1555529902-5261145633bf?w=500&h=300&fit=crop&crop=center",
        demo: "https://Abhishek6827.github.io/Elante_Mall/",
        github: "https://github.com/Abhishek6827/Elante_Mall",
        tech: ["React", "CSS", "JavaScript"],
        category: "Business",
        featured: !1,
        stars: 7,
        lastUpdated: "2025-01-05",
      },
      {
        id: 7,
        name: "Skill Up",
        description:
          "An educational platform for skill development with course listings, progress tracking, and interactive learning modules.",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop&crop=center",
        demo: "https://Abhishek6827.github.io/Skill_Up/",
        github: "https://github.com/Abhishek6827/Skill_Up",
        tech: ["React", "Bootstrap", "JavaScript"],
        category: "Education",
        featured: !1,
        stars: 10,
        lastUpdated: "2025-01-20",
      },
    ];
  S.useEffect(() => {
    n === "idle" && e(ws());
  }, [n, e]);
  const y = [
      "all",
      "E-commerce",
      "Productivity",
      "Utility",
      "Business",
      "Education",
    ],
    v = l === "all" ? h : h.filter((p) => p.category === l),
    x = h.filter((p) => p.featured),
    w = (p) => {
      p.demo
        ? (s(p), a(null))
        : (a("Live demo is not available for this project."),
          setTimeout(() => a(null), 3e3));
    },
    m = (p) =>
      ({
        React: d.jsx(Uc, { className: "text-blue-400" }),
        Redux: d.jsx(ug, { className: "text-purple-400" }),
        JavaScript: d.jsx(Bc, { className: "text-yellow-400" }),
        CSS: d.jsx(og, { className: "text-blue-500" }),
        HTML: d.jsx(ag, { className: "text-orange-500" }),
        Bootstrap: d.jsx(sg, { className: "text-purple-500" }),
        "Tailwind CSS": d.jsx(Hc, { className: "text-cyan-400" }),
        Django: d.jsx(lg, { className: "text-green-600" }),
      }[p] || d.jsx(Ic, { className: "text-gray-400" }));
  return n === "loading"
    ? d.jsx("div", {
        className: "container mx-auto px-4 py-20",
        children: d.jsxs("div", {
          className: "flex items-center justify-center",
          children: [
            d.jsx(b.div, {
              animate: { rotate: 360 },
              transition: {
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              },
              className:
                "w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full",
            }),
            d.jsx("span", {
              className: "ml-3 text-lg",
              children: "Loading projects...",
            }),
          ],
        }),
      })
    : n === "failed"
    ? d.jsx("div", {
        className: "container mx-auto px-4 py-20",
        children: d.jsxs("div", {
          className: "text-center text-red-500",
          children: [
            d.jsx(tu, { size: 48, className: "mx-auto mb-4" }),
            d.jsxs("p", {
              className: "text-lg",
              children: ["Error loading projects: ", r],
            }),
          ],
        }),
      })
    : d.jsxs("div", {
        className: "container mx-auto px-4 py-20",
        children: [
          d.jsxs(b.div, {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className: "text-center mb-12",
            children: [
              d.jsx("h2", {
                className:
                  "text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text",
                children: "My Projects",
              }),
              d.jsx("p", {
                className: "text-gray-400 text-lg max-w-2xl mx-auto",
                children:
                  "Explore my portfolio of web applications, from e-commerce platforms to productivity tools, each built with modern technologies and best practices.",
              }),
            ],
          }),
          d.jsxs(b.section, {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.2 },
            className: "mb-16",
            children: [
              d.jsx("h3", {
                className: "text-2xl font-semibold mb-8 text-center",
                children: "Featured Projects",
              }),
              d.jsx("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: x.map((p, g) =>
                  d.jsx(
                    L8,
                    {
                      project: p,
                      index: g,
                      onDemoClick: () => w(p),
                      onHover: f,
                      isHovered: c === p.id,
                      getTechIcon: m,
                    },
                    p.id
                  )
                ),
              }),
            ],
          }),
          d.jsx(b.div, {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.4 },
            className: "flex flex-wrap justify-center gap-4 mb-12",
            children: y.map((p) =>
              d.jsx(
                "button",
                {
                  onClick: () => u(p),
                  className: `px-6 py-2 rounded-full transition-all duration-300 ${
                    l === p
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`,
                  children: p.charAt(0).toUpperCase() + p.slice(1),
                },
                p
              )
            ),
          }),
          d.jsx(b.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.6, delay: 0.6 },
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
            children: d.jsx(wn, {
              mode: "popLayout",
              children: v.map((p, g) =>
                d.jsx(
                  D8,
                  {
                    project: p,
                    index: g,
                    onDemoClick: () => w(p),
                    onHover: f,
                    isHovered: c === p.id,
                    getTechIcon: m,
                  },
                  p.id
                )
              ),
            }),
          }),
          d.jsx(wn, {
            children: i && d.jsx(z8, { project: i, onClose: () => s(null) }),
          }),
          d.jsx(wn, {
            children:
              o &&
              d.jsxs(b.div, {
                initial: { opacity: 0, y: 50, scale: 0.9 },
                animate: { opacity: 1, y: 0, scale: 1 },
                exit: { opacity: 0, y: 50, scale: 0.9 },
                className:
                  "fixed bottom-6 right-6 bg-red-500 text-white p-4 rounded-lg shadow-xl flex items-center max-w-sm z-50",
                children: [
                  d.jsx(tu, { className: "mr-3 flex-shrink-0", size: 20 }),
                  d.jsx("span", { className: "text-sm", children: o }),
                ],
              }),
          }),
        ],
      });
}
const L8 = tt.forwardRef(
    (
      {
        project: e,
        index: t,
        onDemoClick: n,
        onHover: r,
        isHovered: i,
        getTechIcon: s,
      },
      o
    ) =>
      d.jsxs(b.div, {
        ref: o,
        className:
          "group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500",
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: t * 0.1 },
        onHoverStart: () => r(e.id),
        onHoverEnd: () => r(null),
        whileHover: { y: -8, scale: 1.02 },
        children: [
          d.jsxs("div", {
            className: "relative overflow-hidden",
            children: [
              d.jsx("img", {
                src:
                  e.image ||
                  "/placeholder.svg?height=192&width=400&query=project showcase",
                alt: e.name,
                className:
                  "w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110",
              }),
              d.jsx("div", {
                className:
                  "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
              }),
              d.jsx("div", {
                className: "absolute top-4 left-4",
                children: d.jsxs("span", {
                  className:
                    "bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold flex items-center",
                  children: [
                    d.jsx(ru, { size: 12, className: "mr-1" }),
                    "Featured",
                  ],
                }),
              }),
              d.jsx("div", {
                className:
                  "absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100",
                children: d.jsxs("div", {
                  className: "flex space-x-2",
                  children: [
                    d.jsxs(b.button, {
                      onClick: n,
                      className:
                        "flex items-center space-x-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors flex-1 justify-center",
                      whileHover: { scale: 1.05 },
                      whileTap: { scale: 0.95 },
                      children: [
                        d.jsx(Fc, { size: 16 }),
                        d.jsx("span", { children: "Live Demo" }),
                      ],
                    }),
                    d.jsx(b.a, {
                      href: e.github,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "flex items-center space-x-1 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      whileHover: { scale: 1.05 },
                      whileTap: { scale: 0.95 },
                      children: d.jsx(bn, { size: 16 }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          d.jsxs("div", {
            className: "p-6",
            children: [
              d.jsxs("div", {
                className: "flex items-start justify-between mb-3",
                children: [
                  d.jsx("h3", {
                    className:
                      "text-xl font-semibold text-white group-hover:text-blue-400 transition-colors",
                    children: e.name,
                  }),
                  d.jsxs("div", {
                    className:
                      "flex items-center space-x-2 text-gray-400 text-sm",
                    children: [
                      d.jsx(ru, { size: 14 }),
                      d.jsx("span", { children: e.stars }),
                    ],
                  }),
                ],
              }),
              d.jsx("p", {
                className: "text-gray-400 text-sm mb-4 line-clamp-3",
                children: e.description,
              }),
              d.jsxs("div", {
                className: "flex flex-wrap gap-2 mb-4",
                children: [
                  e.tech.slice(0, 3).map((a) =>
                    d.jsxs(
                      "span",
                      {
                        className:
                          "flex items-center space-x-1 bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs font-medium",
                        children: [s(a), d.jsx("span", { children: a })],
                      },
                      a
                    )
                  ),
                  e.tech.length > 3 &&
                    d.jsxs("span", {
                      className:
                        "bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs",
                      children: ["+", e.tech.length - 3, " more"],
                    }),
                ],
              }),
              d.jsxs("div", {
                className:
                  "flex items-center justify-between text-xs text-gray-500",
                children: [
                  d.jsxs("span", {
                    className: "flex items-center",
                    children: [
                      d.jsx(J6, { size: 12, className: "mr-1" }),
                      new Date(e.lastUpdated).toLocaleDateString(),
                    ],
                  }),
                  d.jsxs("span", {
                    className: "flex items-center",
                    children: [
                      d.jsx(r8, { size: 12, className: "mr-1" }),
                      e.category,
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      })
  ),
  D8 = tt.forwardRef(
    (
      {
        project: e,
        index: t,
        onDemoClick: n,
        onHover: r,
        isHovered: i,
        getTechIcon: s,
      },
      o
    ) =>
      d.jsxs(b.div, {
        ref: o,
        className:
          "bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group",
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -50 },
        transition: { duration: 0.5, delay: t * 0.1 },
        onHoverStart: () => r(e.id),
        onHoverEnd: () => r(null),
        whileHover: { y: -5 },
        children: [
          d.jsxs("div", {
            className: "relative overflow-hidden",
            children: [
              d.jsx("img", {
                src:
                  e.image ||
                  "/placeholder.svg?height=160&width=400&query=project showcase",
                alt: e.name,
                className:
                  "w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105",
              }),
              d.jsx("div", {
                className:
                  "absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300",
              }),
            ],
          }),
          d.jsxs("div", {
            className: "p-6",
            children: [
              d.jsxs("div", {
                className: "flex items-start justify-between mb-2",
                children: [
                  d.jsx("h3", {
                    className:
                      "text-lg font-semibold text-white group-hover:text-blue-400 transition-colors",
                    children: e.name,
                  }),
                  d.jsxs("div", {
                    className:
                      "flex items-center space-x-1 text-gray-400 text-sm",
                    children: [
                      d.jsx(ru, { size: 12 }),
                      d.jsx("span", { children: e.stars }),
                    ],
                  }),
                ],
              }),
              d.jsx("p", {
                className: "text-gray-400 text-sm mb-4 h-12 overflow-hidden",
                children: e.description,
              }),
              d.jsx("div", {
                className: "flex flex-wrap gap-1 mb-4",
                children: e.tech.map((a) =>
                  d.jsxs(
                    "span",
                    {
                      className:
                        "flex items-center space-x-1 bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs font-medium",
                      children: [s(a), d.jsx("span", { children: a })],
                    },
                    a
                  )
                ),
              }),
              d.jsxs("div", {
                className: "flex justify-between items-center",
                children: [
                  d.jsxs(b.button, {
                    onClick: n,
                    className:
                      "flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium",
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    children: [
                      d.jsx(Fc, { size: 16 }),
                      d.jsx("span", { children: "View Demo" }),
                    ],
                  }),
                  d.jsxs(b.a, {
                    href: e.github,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "flex items-center space-x-1 text-gray-400 hover:text-white transition-colors text-sm",
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    children: [
                      d.jsx(bn, { size: 16 }),
                      d.jsx("span", { children: "Code" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      })
  );
function z8({ project: e, onClose: t }) {
  const [n, r] = S.useState(!0),
    [i, s] = S.useState(null),
    o = () => {
      r(!1);
    },
    a = () => {
      r(!1),
        s(
          "Failed to load the demo. The project might not be deployed or the URL might be incorrect."
        );
    };
  return d.jsx(b.div, {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    className:
      "fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50",
    onClick: t,
    children: d.jsxs(b.div, {
      initial: { scale: 0.9, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 0.9, opacity: 0 },
      className:
        "bg-gray-800 rounded-xl w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl",
      onClick: (l) => l.stopPropagation(),
      children: [
        d.jsxs("div", {
          className:
            "flex justify-between items-center p-6 border-b border-gray-700",
          children: [
            d.jsxs("div", {
              children: [
                d.jsx("h3", {
                  className: "text-2xl font-semibold text-white",
                  children: e.name,
                }),
                d.jsx("p", {
                  className: "text-gray-400 text-sm mt-1",
                  children: "Live Demo Preview",
                }),
              ],
            }),
            d.jsxs("div", {
              className: "flex items-center space-x-4",
              children: [
                d.jsxs(b.a, {
                  href: e.demo,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  children: [
                    d.jsx(nu, { size: 16 }),
                    d.jsx("span", { children: "Open in New Tab" }),
                  ],
                }),
                d.jsx("button", {
                  onClick: t,
                  className:
                    "text-gray-400 hover:text-white transition-colors p-2",
                  children: d.jsx(nu, { size: 24, className: "rotate-45" }),
                }),
              ],
            }),
          ],
        }),
        d.jsxs("div", {
          className: "relative",
          style: { height: "70vh" },
          children: [
            n &&
              d.jsxs("div", {
                className:
                  "absolute inset-0 flex items-center justify-center bg-gray-900",
                children: [
                  d.jsx(b.div, {
                    animate: { rotate: 360 },
                    transition: {
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    },
                    className:
                      "w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full",
                  }),
                  d.jsx("span", {
                    className: "ml-3 text-white",
                    children: "Loading demo...",
                  }),
                ],
              }),
            i &&
              d.jsxs("div", {
                className:
                  "absolute inset-0 flex flex-col items-center justify-center text-center p-8",
                children: [
                  d.jsx(tu, { className: "text-red-500 mb-4", size: 48 }),
                  d.jsx("p", {
                    className: "text-red-400 text-lg mb-4",
                    children: i,
                  }),
                  d.jsx(b.a, {
                    href: e.demo,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors",
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    children: "Open in New Tab",
                  }),
                ],
              }),
            d.jsx("iframe", {
              src: e.demo,
              title: `${e.name} Demo`,
              className: `w-full h-full border-0 ${n || i ? "hidden" : ""}`,
              onLoad: o,
              onError: a,
              allowFullScreen: !0,
            }),
          ],
        }),
      ],
    }),
  });
}
class zi {
  constructor(t = 0, n = "Network Error") {
    (this.status = t), (this.text = n);
  }
}
const V8 = () => {
    if (!(typeof localStorage > "u"))
      return {
        get: (e) => Promise.resolve(localStorage.getItem(e)),
        set: (e, t) => Promise.resolve(localStorage.setItem(e, t)),
        remove: (e) => Promise.resolve(localStorage.removeItem(e)),
      };
  },
  he = {
    origin: "https://api.emailjs.com",
    blockHeadless: !1,
    storageProvider: V8(),
  },
  $c = (e) =>
    e
      ? typeof e == "string"
        ? { publicKey: e }
        : e.toString() === "[object Object]"
        ? e
        : {}
      : {},
  O8 = (e, t = "https://api.emailjs.com") => {
    if (!e) return;
    const n = $c(e);
    (he.publicKey = n.publicKey),
      (he.blockHeadless = n.blockHeadless),
      (he.storageProvider = n.storageProvider),
      (he.blockList = n.blockList),
      (he.limitRate = n.limitRate),
      (he.origin = n.origin || t);
  },
  dg = async (e, t, n = {}) => {
    const r = await fetch(he.origin + e, {
        method: "POST",
        headers: n,
        body: t,
      }),
      i = await r.text(),
      s = new zi(r.status, i);
    if (r.ok) return s;
    throw s;
  },
  fg = (e, t, n) => {
    if (!e || typeof e != "string")
      throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
    if (!t || typeof t != "string")
      throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!n || typeof n != "string")
      throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
  },
  I8 = (e) => {
    if (e && e.toString() !== "[object Object]")
      throw "The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/";
  },
  hg = (e) => e.webdriver || !e.languages || e.languages.length === 0,
  pg = () => new zi(451, "Unavailable For Headless Browser"),
  F8 = (e, t) => {
    if (!Array.isArray(e)) throw "The BlockList list has to be an array";
    if (typeof t != "string")
      throw "The BlockList watchVariable has to be a string";
  },
  B8 = (e) => {
    var t;
    return !((t = e.list) != null && t.length) || !e.watchVariable;
  },
  U8 = (e, t) => (e instanceof FormData ? e.get(t) : e[t]),
  mg = (e, t) => {
    if (B8(e)) return !1;
    F8(e.list, e.watchVariable);
    const n = U8(t, e.watchVariable);
    return typeof n != "string" ? !1 : e.list.includes(n);
  },
  gg = () => new zi(403, "Forbidden"),
  H8 = (e, t) => {
    if (typeof e != "number" || e < 0)
      throw "The LimitRate throttle has to be a positive number";
    if (t && typeof t != "string")
      throw "The LimitRate ID has to be a non-empty string";
  },
  $8 = async (e, t, n) => {
    const r = Number((await n.get(e)) || 0);
    return t - Date.now() + r;
  },
  yg = async (e, t, n) => {
    if (!t.throttle || !n) return !1;
    H8(t.throttle, t.id);
    const r = t.id || e;
    return (await $8(r, t.throttle, n)) > 0
      ? !0
      : (await n.set(r, Date.now().toString()), !1);
  },
  vg = () => new zi(429, "Too Many Requests"),
  W8 = async (e, t, n, r) => {
    const i = $c(r),
      s = i.publicKey || he.publicKey,
      o = i.blockHeadless || he.blockHeadless,
      a = i.storageProvider || he.storageProvider,
      l = { ...he.blockList, ...i.blockList },
      u = { ...he.limitRate, ...i.limitRate };
    return o && hg(navigator)
      ? Promise.reject(pg())
      : (fg(s, e, t),
        I8(n),
        n && mg(l, n)
          ? Promise.reject(gg())
          : (await yg(location.pathname, u, a))
          ? Promise.reject(vg())
          : dg(
              "/api/v1.0/email/send",
              JSON.stringify({
                lib_version: "4.4.1",
                user_id: s,
                service_id: e,
                template_id: t,
                template_params: n,
              }),
              { "Content-type": "application/json" }
            ));
  },
  K8 = (e) => {
    if (!e || e.nodeName !== "FORM")
      throw "The 3rd parameter is expected to be the HTML form element or the style selector of the form";
  },
  G8 = (e) => (typeof e == "string" ? document.querySelector(e) : e),
  Q8 = async (e, t, n, r) => {
    const i = $c(r),
      s = i.publicKey || he.publicKey,
      o = i.blockHeadless || he.blockHeadless,
      a = he.storageProvider || i.storageProvider,
      l = { ...he.blockList, ...i.blockList },
      u = { ...he.limitRate, ...i.limitRate };
    if (o && hg(navigator)) return Promise.reject(pg());
    const c = G8(n);
    fg(s, e, t), K8(c);
    const f = new FormData(c);
    return mg(l, f)
      ? Promise.reject(gg())
      : (await yg(location.pathname, u, a))
      ? Promise.reject(vg())
      : (f.append("lib_version", "4.4.1"),
        f.append("service_id", e),
        f.append("template_id", t),
        f.append("user_id", s),
        dg("/api/v1.0/email/send-form", f));
  },
  X8 = { init: O8, send: W8, sendForm: Q8, EmailJSResponseStatus: zi },
  Y8 = () => {
    const [e, t] = S.useState(!1),
      [n, r] = S.useState(""),
      [i, s] = S.useState({ name: "", email: "", message: "" }),
      o = async (l) => {
        l.preventDefault(), t(!0);
        try {
          (
            await X8.send(
              "service_n9quflm",
              "template_aulu2tp",
              { from_name: i.name, from_email: i.email, message: i.message },
              "6-Nc8B6DHiOVw9VeT"
            )
          ).status === 200
            ? (r("Message sent successfully!"),
              s({ name: "", email: "", message: "" }))
            : r("Failed to send message. Please try again.");
        } catch (u) {
          console.error("Error sending email:", u),
            r("Failed to send message. Please try again.");
        } finally {
          t(!1), setTimeout(() => r(""), 5e3);
        }
      },
      a = [
        {
          icon: d.jsx(Z1, { size: 24 }),
          text: "Lucknow, Uttar Pradesh, India",
        },
        {
          icon: d.jsx(eg, { size: 24 }),
          text: "+91 7081660941",
          href: "tel:+917081660941",
        },
        {
          icon: d.jsx(Io, { size: 24 }),
          text: "abhishektiwari6827@gmail.com",
          href: "mailto:abhishektiwari6827@gmail.com",
        },
      ];
    return d.jsxs("div", {
      className: "container mx-auto px-4 py-20",
      children: [
        d.jsx(b.h1, {
          className: "text-4xl font-bold mb-12 text-center",
          initial: { opacity: 0, y: -50 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          children: "Get in Touch",
        }),
        d.jsxs("div", {
          className: "grid md:grid-cols-2 gap-12",
          children: [
            d.jsx("div", {
              className: "space-y-6",
              children: a.map((l, u) =>
                d.jsxs(
                  b.div,
                  {
                    className: "flex items-center space-x-4",
                    initial: { opacity: 0, x: -50 },
                    animate: { opacity: 1, x: 0 },
                    transition: { duration: 0.5, delay: u * 0.1 },
                    children: [
                      d.jsx("div", {
                        className: "bg-blue-500 p-3 rounded-full",
                        children: l.icon,
                      }),
                      d.jsx("div", {
                        children: l.href
                          ? d.jsx("a", {
                              href: l.href,
                              className:
                                "text-gray-300 hover:text-white transition-colors",
                              children: l.text,
                            })
                          : d.jsx("span", {
                              className: "text-gray-300",
                              children: l.text,
                            }),
                      }),
                    ],
                  },
                  u
                )
              ),
            }),
            d.jsxs(b.form, {
              onSubmit: o,
              className: "space-y-6",
              initial: { opacity: 0, y: 50 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5 },
              children: [
                d.jsxs("div", {
                  children: [
                    d.jsx("label", {
                      htmlFor: "name",
                      className: "block text-sm font-medium text-gray-300 mb-1",
                      children: "Name",
                    }),
                    d.jsx("input", {
                      type: "text",
                      id: "name",
                      name: "name",
                      value: i.name,
                      onChange: (l) => s({ ...i, name: l.target.value }),
                      required: !0,
                      className:
                        "w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500",
                    }),
                  ],
                }),
                d.jsxs("div", {
                  children: [
                    d.jsx("label", {
                      htmlFor: "email",
                      className: "block text-sm font-medium text-gray-300 mb-1",
                      children: "Email",
                    }),
                    d.jsx("input", {
                      type: "email",
                      id: "email",
                      name: "email",
                      value: i.email,
                      onChange: (l) => s({ ...i, email: l.target.value }),
                      required: !0,
                      className:
                        "w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500",
                    }),
                  ],
                }),
                d.jsxs("div", {
                  children: [
                    d.jsx("label", {
                      htmlFor: "message",
                      className: "block text-sm font-medium text-gray-300 mb-1",
                      children: "Message",
                    }),
                    d.jsx("textarea", {
                      id: "message",
                      name: "message",
                      value: i.message,
                      onChange: (l) => s({ ...i, message: l.target.value }),
                      required: !0,
                      rows: "4",
                      className:
                        "w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500",
                    }),
                  ],
                }),
                d.jsxs("button", {
                  type: "submit",
                  disabled: e,
                  className:
                    "w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed",
                  children: [
                    d.jsx(u8, { size: 20, className: "mr-2" }),
                    e ? "Sending..." : "Send Message",
                  ],
                }),
                n &&
                  d.jsx(b.p, {
                    className: `text-center ${
                      n.includes("successfully")
                        ? "text-green-400"
                        : "text-red-400"
                    }`,
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { duration: 0.3 },
                    children: n,
                  }),
              ],
            }),
          ],
        }),
      ],
    });
  };
function J8() {
  const [e, t] = S.useState(null),
    n = [
      {
        title: "React Developer Certification",
        issuer: "Meta",
        date: "2025",
        description:
          "Advanced React concepts including hooks, context, and performance optimization",
        status: "completed",
        skills: ["React", "JavaScript", "JSX", "Hooks"],
        certificateUrl: "./images/React.png",
      },
      {
        title: "Full Stack Web Development",
        issuer: "FreeCodeCamp",
        date: "2023",
        description:
          "Comprehensive full-stack development covering frontend and backend technologies",
        status: "completed",
        skills: ["HTML", "CSS", "JavaScript", "Node.js"],
        certificateUrl: "./images/internship.png",
      },
      {
        title: "JavaScript Algorithms and Data Structures",
        issuer: "FreeCodeCamp",
        date: "2023",
        description:
          "Advanced JavaScript programming and algorithmic problem solving",
        status: "completed",
        skills: ["JavaScript", "Algorithms", "Data Structures"],
        certificateUrl: "./images/Quizario.png",
      },
    ],
    r = [
      {
        title: "GitHub Contributions",
        description: "500+ contributions in the last year",
        icon: "🚀",
      },
      {
        title: "Projects Completed",
        description: "15+ web applications built and deployed",
        icon: "💻",
      },
      {
        title: "Technologies Mastered",
        description: "10+ programming languages and frameworks",
        icon: "⚡",
      },
      {
        title: "Problem Solving",
        description: "100+ coding challenges solved",
        icon: "🧩",
      },
    ],
    i = (o) => {
      t(o);
    },
    s = () => {
      t(null);
    };
  return d.jsxs("div", {
    className: "container mx-auto px-4 py-20",
    children: [
      d.jsxs(b.div, {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        className: "text-center mb-16",
        children: [
          d.jsxs("h2", {
            className:
              "text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text",
            children: [
              d.jsx(eu, { className: "inline-block mr-3 mb-1" }),
              "Certifications",
            ],
          }),
          d.jsx("p", {
            className: "text-gray-400 text-lg max-w-2xl mx-auto",
            children:
              "Professional certifications and achievements that validate my skills and commitment to continuous learning.",
          }),
        ],
      }),
      d.jsx("div", {
        className: "mb-16",
        children: d.jsx("div", {
          className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
          children: n.map((o, a) =>
            d.jsxs(
              b.div,
              {
                initial: { opacity: 0, y: 50 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: a * 0.1 },
                className:
                  "bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-blue-500/50",
                children: [
                  d.jsx("div", {
                    className: "flex items-start justify-between mb-4",
                    children: d.jsxs("div", {
                      className: "flex-1",
                      children: [
                        d.jsxs("div", {
                          className: "flex items-center mb-2",
                          children: [
                            d.jsx(eu, {
                              className: "text-blue-400 mr-2",
                              size: 20,
                            }),
                            d.jsx("span", {
                              className:
                                "text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded",
                              children: o.date,
                            }),
                          ],
                        }),
                        d.jsx("h4", {
                          className: "text-xl font-semibold text-white mb-2",
                          children: o.title,
                        }),
                        d.jsx("p", {
                          className: "text-blue-400 font-medium mb-3",
                          children: o.issuer,
                        }),
                      ],
                    }),
                  }),
                  d.jsx("p", {
                    className: "text-gray-300 mb-4 text-sm leading-relaxed",
                    children: o.description,
                  }),
                  d.jsx("div", {
                    className: "flex flex-wrap gap-2 mb-6",
                    children: o.skills.map((l) =>
                      d.jsx(
                        "span",
                        {
                          className:
                            "bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs font-medium",
                          children: l,
                        },
                        l
                      )
                    ),
                  }),
                  d.jsxs("button", {
                    onClick: () => i(o),
                    className:
                      "w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium",
                    children: [
                      d.jsx(nu, { size: 16 }),
                      d.jsx("span", { children: "View Certificate" }),
                    ],
                  }),
                ],
              },
              a
            )
          ),
        }),
      }),
      d.jsxs("div", {
        children: [
          d.jsxs(b.h3, {
            initial: { opacity: 0, x: -20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.6, delay: 0.4 },
            className:
              "text-2xl font-semibold mb-8 flex items-center text-white",
            children: [
              d.jsx(e8, { className: "mr-3 text-blue-400" }),
              "Key Achievements",
            ],
          }),
          d.jsx("div", {
            className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
            children: r.map((o, a) =>
              d.jsxs(
                b.div,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: 0.6 + a * 0.1 },
                  className:
                    "bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-700",
                  children: [
                    d.jsx("div", {
                      className: "text-4xl mb-4",
                      children: o.icon,
                    }),
                    d.jsx("h4", {
                      className: "text-lg font-semibold text-white mb-2",
                      children: o.title,
                    }),
                    d.jsx("p", {
                      className: "text-gray-400 text-sm",
                      children: o.description,
                    }),
                  ],
                },
                a
              )
            ),
          }),
        ],
      }),
      d.jsx(wn, {
        children:
          e &&
          d.jsx(b.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            className:
              "fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",
            onClick: s,
            children: d.jsxs(b.div, {
              initial: { scale: 0.8, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              exit: { scale: 0.8, opacity: 0 },
              className:
                "bg-gray-900 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-auto",
              onClick: (o) => o.stopPropagation(),
              children: [
                d.jsxs("div", {
                  className: "flex items-center justify-between mb-4",
                  children: [
                    d.jsx("h3", {
                      className: "text-2xl font-bold text-white",
                      children: e.title,
                    }),
                    d.jsx("button", {
                      onClick: s,
                      className:
                        "text-gray-400 hover:text-white transition-colors p-2",
                      children: d.jsx(ng, { size: 24 }),
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "mb-4",
                  children: [
                    d.jsx("p", {
                      className: "text-blue-400 font-medium mb-2",
                      children: e.issuer,
                    }),
                    d.jsx("p", {
                      className: "text-gray-300 mb-4",
                      children: e.description,
                    }),
                    d.jsx("div", {
                      className: "flex flex-wrap gap-2 mb-4",
                      children: e.skills.map((o) =>
                        d.jsx(
                          "span",
                          {
                            className:
                              "bg-blue-500/20 text-blue-400 px-3 py-1 rounded text-sm font-medium",
                            children: o,
                          },
                          o
                        )
                      ),
                    }),
                  ],
                }),
                d.jsx("div", {
                  className: "bg-gray-800 rounded-lg p-4",
                  children: d.jsx("img", {
                    src: e.certificateUrl || "/placeholder.svg",
                    alt: `${e.title} Certificate`,
                    className: "w-full h-auto rounded-lg shadow-lg",
                    loading: "eager",
                  }),
                }),
                d.jsx("div", { className: "mt-4 text-center" }),
              ],
            }),
          }),
      }),
    ],
  });
}
Da.createRoot(document.getElementById("root")).render(
  d.jsx(tt.StrictMode, {
    children: d.jsx(p2, {
      store: w4,
      children: d.jsx(Cx, {
        future: { v7_startTransition: !0, v7_relativeSplatPath: !0 },
        children: d.jsx(mx, {
          children: d.jsxs(Nt, {
            path: "/",
            element: d.jsx(b8, {}),
            children: [
              d.jsx(Nt, { index: !0, element: d.jsx(M8, {}) }),
              d.jsx(Nt, { path: "about", element: d.jsx(_8, {}) }),
              d.jsx(Nt, { path: "experience", element: d.jsx(cg, {}) }),
              d.jsx(Nt, { path: "projects", element: d.jsx(A8, {}) }),
              d.jsx(Nt, { path: "certifications", element: d.jsx(J8, {}) }),
              d.jsx(Nt, { path: "contact", element: d.jsx(Y8, {}) }),
            ],
          }),
        }),
      }),
    }),
  })
);
