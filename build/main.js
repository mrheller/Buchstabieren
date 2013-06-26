var alphabet="(^_^)";
var incr = 0;
function touchtype(a)
{
	if(incr==0)
		alphabet = "";
	incr++;
	alphabet+=a;
}
function cleartype()
{
	incr==0;
	alphabet = "";
}

var requirejs, require, define;
(function ()
{
	function isFunction(a)
	{
		return ostring.call(a) ===
			"[object Function]"
	}

	function isArray(a)
	{
		return ostring.call(a) ===
			"[object Array]"
	}

	function mixin(a, b, c)
	{
		for (var d in b)!(d in empty) && (!(d in
			a) || c) && (a[d] = b[d]);
		return req
	}

	function makeError(a, b, c)
	{
		var d = new Error(b +
			"\nhttp://requirejs.org/docs/errors.html#" +
			a);
		return c && (d.originalError = c), d
	}

	function configurePackageDir(a, b, c)
	{
		var d, e, f;
		for (d = 0; f = b[d]; d++)
			f = typeof f == "string" ? {
				name: f
		}

		: f,
		e = f.location,
		c && (!e || e.indexOf("/") !== 0 && e
			.indexOf(":") === -1) && (e = c +
			"/" + (e || f.name)),
		a[f.name] = {
			name: f.name,
			location: e || f.name,
			main: (f.main || "main").replace(
				currDirRegExp, "").replace(
				jsSuffixRegExp, "")
		}
	}

	function jQueryHoldReady(a, b)
	{
		a.holdReady ? a.holdReady(b) : b ? a.readyWait +=
			1 : a.ready(!0)
	}

	function newContext(a)
	{
		function t(a)
		{
			var b, c;
			for (b = 0; c = a[b]; b++)
				if (c === ".")
					a.splice(b, 1), b -= 1;
				else if (c === "..")
				if (b !== 1 || a[2] !== ".." && a[0] !==
					"..")
					b > 0 && (a.splice(b - 1, 2), b -=
						2);
				else
					break
		}

		function u(a, b)
		{
			var c, e;
			return a && a.charAt(0) === "." && b &&
				(d.pkgs[b] ? b = [b] : (b = b.split(
				"/"),
				b = b.slice(0, b.length - 1)), a =
				b.concat(a.split("/")), t(a), e = d
				.pkgs[c = a[0]], a = a.join("/"),
				e && a === c + "/" + e.main && (a =
				c)), a
		}

		function v(a, c)
		{
			var d = a ? a.indexOf("!") : -1,
				e = null,
				f = c ? c.name : null,
				i = a,
				j, k, l;
			return d !== -1 && (e = a.substring(
				0, d), a = a.substring(d + 1, a.length)),
			e && (e = u(e, f)), a && (e ? (l =
				h[e],
				l && l.normalize ? j = l.normalize(
				a, function (a)
			{
				return u(a, f)
			}) : j = u(a, f)) : (j = u(a, f), k =
				g[j], k || (k = b.nameToUrl(j, null,
				c), g[j] = k))),
			{
				prefix: e,
				name: j,
				parentMap: c,
				url: k,
				originalName: i,
				fullName: e ? e + "!" + (j || "") : j
			}
		}

		function w()
		{
			var a = !0,
				b = d.priorityWait,
				c, e;
			if (b)
			{
				for (e = 0; c = b[e]; e++)
					if (!j[c])
					{
						a = !1;
						break
					}
				a && delete d.priorityWait
			}
			return a
		}

		function x(a, b, c)
		{
			return function ()
			{
				var d = aps.call(arguments, 0),
					e;
				return c && isFunction(e = d[d.length -
					1]) && (e.__requireJsBuild = !0),
				d.push(b), a.apply(null, d)
			}
		}

		function y(a, c)
		{
			var d = x(b.require, a, c);
			return mixin(d,
			{
				nameToUrl: x(b.nameToUrl, a),
				toUrl: x(b.toUrl, a),
				defined: x(b.requireDefined, a),
				specified: x(b.requireSpecified, a),
				isBrowser: req.isBrowser
			}), d
		}

		function z(a)
		{
			b.paused.push(a)
		}

		function A(a)
		{
			var c, e, f, g, i, j = a.callback,
				m = a.map,
				n = m.fullName,
				p = a.deps,
				s = a.listeners;
			if (j && isFunction(j))
			{
				if (d.catchError.define)
					try
					{
						e = req.execCb(n, a.callback, p,
							h[n])
				}
				catch (t)
				{
					f = t
				}
				else
					e = req.execCb(n, a.callback, p, h[
						n]);

				n && (
					a.cjsModule && a.cjsModule.exports !==
					undefined ? e = h[n] = a.cjsModule
					.exports : e === undefined && a.usingExports ?
					e = h[n] : (h[n] = e,
					q[n] && (r[n] = !0)))
			}
			else
				n && (e = h[n] = j, q[n] && (r[n] = !
					0));

			k[a.id] && (
				delete k[a.id], a.isDone = !0, b.waitCount -=
				1, b.waitCount === 0 && (l = [])),
			delete o[n], req.onResourceLoad && !
				a.placeholder && req.onResourceLoad(
				b, m, a.depArray);

			if (f)
				return g = (n ? v(n).url : "") || f
					.fileName || f.sourceURL, i = f.moduleTree,
			f = makeError("defineerror",
				'Error evaluating module "' + n +
				'" at location "' + g + '":\n' + f +
				"\nfileName:" + g +
				"\nlineNumber: " + (f.lineNumber ||
				f.line), f),
			f.moduleName = n, f.moduleTree = i,
			req.onError(f);

			for (c = 0; j = s[c]; c++)
				j(e);

			return undefined
		}

		function B(a, b)
		{
			return function (c)
			{
				a.depDone[b] || (a.depDone[b] = !0,
					a.deps[b] = c, a.depCount -= 1, a.depCount ||
					A(a))
			}
		}

		function C(a, e)
		{
			var f = e.map,
				g = f.fullName,
				i = f.name,
				k = p[a] || (p[a] = h[a]),
				l;

			if (e.loading)
				return;

			e.loading = !0,
			l = function (a)
			{
				e.callback = function ()
				{
					return a
				},
				A(e), j[e.id] = !0, c()
			},
			l.fromText = function (a, c)
			{
				var d = useInteractive;
				j[a] = !1, b.scriptCount += 1, b.fake[
					a] = !0, d && (useInteractive = !1),
				req.exec(c),
				d && (useInteractive = !0), b.completeLoad(
					a)
			}, g in h ? l(h[g]) : k.load(i, y(f.parentMap, !
				0), l, d)
		}

		function D(a)
		{
			k[a.id] || (k[a.id] = a, l.push(a),
				b.waitCount += 1)
		}

		function E(a)
		{
			this.listeners.push(a)
		}

		function F(a, b)
		{
			var c = a.fullName,
				d = a.prefix,
				e = d ? p[d] || (p[d] = h[d]) :
					null,
				g, i, k;
			return c && (g = o[c]), g || (i = !0,
				g = {
				id: (d && !e ? n+++"__p@:" : "") +
					(c || "__r@" + n++),
				map: a,
				depCount: 0,
				depDone: [],
				depCallbacks: [],
				deps: [],
				listeners: [],
				add: E
			}, f[g.id] = !0, c && (!d || p[d]) &&
				(o[c] = g)), d && !e ? (k = F(v(d), !
				0),
				k.add(function (b)
			{
				var c = v(a.originalName, a.parentMap),
					d = F(c, !0);
				g.placeholder = !0,
				d.add(function (a)
				{
					g.callback = function ()
					{
						return a
					}, A(g)
				})
			})) : i && b && (j[g.id] = !1, z(g),
				D(g)), g
		}

		function G(a, c, e, g)
		{
			var i = v(a, g),
				l = i.name,
				n = i.fullName,
				o = F(i),
				p = o.id,
				s = o.deps,
				t, u, w, x, z;

			if (n)
			{
				if (n in h || j[p] === !0 || n ===
					"jquery" && d.jQuery && d.jQuery !==
					e().fn.jquery)
					return;

				f[p] = !0, j[p] = !0, n ===
					"jquery" && e && jQueryCheck(e())
			}

			o.depArray = c, o.callback = e;

			for (t = 0; t < c.length; t++)
				u = c[t], u && (u = v(u, l ? i : g),
					w = u.fullName, x = u.prefix, c[t] =
					w,
					w === "require" ? s[t] = y(i) : w ===
					"exports" ? (s[t] = h[n] = {},
					o.usingExports = !0) : w ===
					"module" ? o.cjsModule = z = s[t] = {
					id: l,
					uri: l ? b.nameToUrl(l, null, g) : undefined,
					exports: h[n]
				} : !(w in h) || w in k || n in q && !
					(n in q && r[w]) ? (n in q && (q[w] = !
					0,
					delete h[w], m[u.url] = !1),
					o.depCount += 1, o.depCallbacks[t] =
					B(o, t), F(u, !0).add(o.depCallbacks[
					t])) : s[t] = h[w]);
			o.depCount ? D(o) : A(o)
		}

		function H(a)
		{
			G.apply(null, a)
		}

		function I(a, b)
		{
			if (a.isDone)
				return undefined;

			var c = a.map.fullName,
				d = a.depArray,
				e, f, g, i, l, m;

			if (c)
			{
				if (b[c])
					return h[c];

				b[c] = !0
			}

			if (d)
				for (e = 0; e < d.length; e++)
					f = d[e], f && (i = v(f).prefix, i &&
						(l = k[i]) && I(l, b),
						g = k[f], g && !g.isDone && j[f] &&
						(m = I(g, b), a.depCallbacks[e](m)));

			return c ? h[c] : undefined
		}

		function J()
		{
			var a = d.waitSeconds * 1e3,
				e = a && b.startTime + a < (new Date)
					.getTime(),
				f = "",
				g = !1,
				h = !1,
				k, m, n;

			if (b.pausedCount > 0)
				return undefined;

			if (d.priorityWait)
				if (w())
					c();
				else
					return undefined;

			for (k in j)
				if (!(k in empty))
				{
					g = !0;
					if (!j[k])
						if (e)
							f += k + " ";
						else
						{
							h = !0;
							break
						}
				}

			if (!g && !b.waitCount)
				return undefined;
			if (e && f)
				return m = makeError("timeout",
					"Load timeout for modules: " + f),
			m.requireType = "timeout", m.requireModules =
				f, req.onError(m);
			if (h || b.scriptCount)
				return (isBrowser || isWebWorker) && !
					checkLoadedTimeoutId && (
					checkLoadedTimeoutId = setTimeout(function ()
				{
					checkLoadedTimeoutId = 0, J()
				}, 50)), undefined;
			if (b.waitCount)
			{
				for (i = 0; n = l[i]; i++)
					I(n,
					{});

				b.paused.length && c(),
				checkLoadedDepth < 5 && (
					checkLoadedDepth += 1, J())
			}
			return checkLoadedDepth = 0, req.checkReadyState(),
			undefined
		}

		var b, c, d = {
				waitSeconds: 7,
				baseUrl: "./",
				paths: {},
				pkgs: {},
				catchError: {}
			}, e = [],
			f = {
				require: !0,
				exports: !0,
				module: !0
			}, g = {}, h = {}, j = {}, k = {}, l = [],
			m = {}, n = 0,
			o = {}, p = {}, q = {}, r = {}, s =
				0;

		return jQueryCheck = function (a)
		{
			if (!b.jQuery)
			{
				var c = a || (typeof jQuery !=
					"undefined" ? jQuery : null);
				if (c)
				{
					if (d.jQuery && c.fn.jquery !== d.jQuery)
						return;
					if ("holdReady" in c ||
						"readyWait" in c)
						b.jQuery = c, H(["jquery", [], function ()
							{
								return jQuery
							}
						]),
					b.scriptCount && (jQueryHoldReady(
						c, !0),
						b.jQueryIncremented = !0)
				}
			}
		},

		c = function ()
		{
			var a, c, f, g, h, i, k;
			s += 1, b.scriptCount <= 0 && (b.scriptCount =
				0);

			while (e.length)
			{
				i = e.shift();
				if (i[0] === null)
					return req.onError(makeError(
						"mismatch",
						"Mismatched anonymous define() module: " +
						i[i.length - 1]));
				H(i)
			}

			if (!d.priorityWait || w())
				while (b.paused.length)
				{
					h = b.paused, b.pausedCount += h.length,
					b.paused = [];

					for (g = 0; a = h[g]; g++)
						c = a.map, f = c.url, k = c.fullName,
					c.prefix ? C(c.prefix, a) : !m[f] && !
						j[k] && (req.load(b, k, f),
						m[f] = !0);

					b.startTime = (new Date).getTime(),
					b.pausedCount -= h.length
			}

			return s === 1 && J(), s -= 1,
			undefined
		},
		b = {
			contextName: a,
			config: d,
			defQueue: e,
			waiting: k,
			waitCount: 0,
			specified: f,
			loaded: j,
			urlMap: g,
			urlFetched: m,
			scriptCount: 0,
			defined: h,
			paused: [],
			pausedCount: 0,
			plugins: p,
			needFullExec: q,
			fake: {},
			fullExec: r,
			managerCallbacks: o,
			makeModuleMap: v,
			normalize: u,

			configure: function (a)
			{
				var e, f, g, h, i, j;
				a.baseUrl && a.baseUrl.charAt(a.baseUrl
					.length - 1) !== "/" && (a.baseUrl +=
					"/"),
				e = d.paths, g = d.packages, h = d.pkgs,
				mixin(d, a, !0);

				if (a.paths)
				{
					for (f in a.paths)
						f in empty || (e[f] = a.paths[f]);

					d.paths = e
				}

				i = a.packagePaths;

				if (i || a.packages)
				{
					if (i)
						for (f in i)
							f in empty ||
								configurePackageDir(h, i[f], f);

					a.packages && configurePackageDir(
						h, a.packages), d.pkgs = h
				}

				a.priority && (j = b.requireWait, b
					.requireWait = !1, b.takeGlobalQueue(),
					c(), b.require(a.priority), c(), b
					.requireWait = j,
					d.priorityWait = a.priority), (a.deps ||
					a.callback) && b.require(a.deps || [],
					a.callback)
			},

			requireDefined: function (a, b)
			{
				return v(a, b).fullName in h
			},

			requireSpecified: function (a, b)
			{
				return v(a, b).fullName in f
			},

			require: function (d, e, f)
			{
				var g, i, j;
				if (typeof d == "string")
					return isFunction(e) ? req.onError(
						makeError("requireargs",
						"Invalid require call")) : req.get ?
						req.get(b, d, e) : (g = d, f = e,
						j = v(g, f),
						i = j.fullName,
						i in h ? h[i] : req.onError(
						makeError("notloaded",
						"Module name '" + j.fullName +
						"' has not been loaded yet for context: " +
						a)));

				(d && d.length || e) && G(null, d,
					e, f);

				if (!b.requireWait)
					while (!b.scriptCount && b.paused.length)
						b.takeGlobalQueue(), c();

				return b.require
			},

			takeGlobalQueue: function ()
			{
				globalDefQueue.length && (apsp.apply(
					b.defQueue, [b.defQueue.length - 1,
						0
				].concat(globalDefQueue)),
					globalDefQueue = [])
			},

			completeLoad: function (a)
			{
				var d;
				b.takeGlobalQueue();

				while (e.length)
				{
					d = e.shift();

					if (d[0] === null)
					{
						d[0] = a;
						break
					}

					if (d[0] === a)
						break;

					H(d), d = null
				}

				d ? H(d) : H([a, [], a === "jquery" &&
						typeof jQuery != "undefined" ? function ()
					{
						return jQuery
					} : null
				]),

				jQueryCheck(), req.isAsync && (b.scriptCount -=
					1), c(),
				req.isAsync || (b.scriptCount -= 1)
			},

			toUrl: function (a, c)
			{
				var d = a.lastIndexOf("."),
					e = null;
				return d !== -1 && (e = a.substring(
					d, a.length),
					a = a.substring(0, d)), b.nameToUrl(
					a, e, c)
			},
			nameToUrl: function (a, c, d)
			{
				var e, f, g, h, i, j, k, l, m = b.config;
				a = u(a, d && d.fullName);

				if (req.jsExtRegExp.test(a))
					l = a + (c ? c : "");
				else
				{
					e = m.paths, f = m.pkgs, i = a.split(
						"/");

					for (j = i.length; j > 0; j--)
					{
						k = i.slice(0, j).join("/");

						if (e[k])
						{
							i.splice(0, j, e[k]);
							break
						}

						if (g = f[k])
						{
							a === g.name ? h = g.location +
								"/" + g.main : h = g.location,
							i.splice(0, j, h);
							break
						}
					}

					l = i.join("/") + (c || ".js"),
					l = (l.charAt(0) === "/" || l.match(
						/^\w+:/) ? "" : m.baseUrl) + l
				}

				return m.urlArgs ? l + ((l.indexOf(
					"?") === -1 ? "?" : "&") + m.urlArgs) :
					l
			}
		},

		b.jQueryCheck = jQueryCheck, b.resume =
			c, b
	}

	function getInteractiveScript()
	{
		var a, b, c;
		if (interactiveScript &&
			interactiveScript.readyState ===
			"interactive") return interactiveScript;
		a = document.getElementsByTagName(
			"script");
		for (b = a.length - 1; b > -1 && (c =
			a[b]); b--) if (c.readyState ===
				"interactive") return interactiveScript =
					c;
		return null
	}
	var version = "1.0.1",
		commentRegExp =
			/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,
		cjsRequireRegExp =
			/require\(\s*["']([^'"\s]+)["']\s*\)/g,
		currDirRegExp = /^\.\//,
		jsSuffixRegExp = /\.js$/,
		ostring = Object.prototype.toString,
		ap = Array.prototype,
		aps = ap.slice,
		apsp = ap.splice,
		isBrowser = typeof window !=
			"undefined" && !! navigator && !!
			document,
		isWebWorker = !isBrowser && typeof importScripts !=
			"undefined",
		readyRegExp = isBrowser && navigator.platform ===
			"PLAYSTATION 3" ? /^complete$/ :
			/^(complete|loaded)$/,
		defContextName = "_",
		isOpera = typeof opera != "undefined" &&
			opera.toString() ===
			"[object Opera]",
		empty = {}, contexts = {},
		globalDefQueue = [],
		interactiveScript = null,
		checkLoadedDepth = 0,
		useInteractive = !1,
		req, cfg = {}, currentlyAddingScript,
		s, head, baseElement, scripts,
		script, src, subPath, mainScript,
		dataMain, i, ctx, jQueryCheck,
		checkLoadedTimeoutId;
	if (typeof define != "undefined")
		return;
	if (typeof requirejs != "undefined")
	{
		if (isFunction(requirejs)) return;
		cfg = requirejs, requirejs =
			undefined
	}
	typeof require != "undefined" && !
		isFunction(require) && (cfg = require,
		require = undefined), req = requirejs = function (
		a, b)
	{
		var c = defContextName,
			d, e;
		return !isArray(a) && typeof a !=
			"string" && (e = a, isArray(b) ? (a =
			b, b = arguments[2]) : a = []), e &&
			e.context && (c = e.context), d =
			contexts[c] || (contexts[c] =
			newContext(c)), e && d.configure(e),
		d.require(a, b)
	}, req.config = function (a)
	{
		return req(a)
	}, require || (require = req), req.toUrl = function (
		a)
	{
		return contexts[defContextName].toUrl(
			a)
	}, req.version = version, req.jsExtRegExp =
		/^\/|:|\?|\.js$/, s = req.s = {
		contexts: contexts,
		skipAsync: {}
	}, req.isAsync = req.isBrowser =
		isBrowser, isBrowser && (head = s.head =
		document.getElementsByTagName("head")[
		0], baseElement = document.getElementsByTagName(
		"base")[0], baseElement && (head = s.head =
		baseElement.parentNode)), req.onError = function (
		a)
	{
		throw a
	}, req.load = function (a, b, c)
	{
		req.resourcesReady(!1), a.scriptCount +=
			1, req.attach(c, a, b), a.jQuery && !
			a.jQueryIncremented && (
			jQueryHoldReady(a.jQuery, !0), a.jQueryIncremented = !
			0)
	}, define = function (a, b, c)
	{
		var d, e;
		return typeof a != "string" && (c = b,
			b = a, a = null), isArray(b) || (c =
			b, b = []), !b.length && isFunction(
			c) && c.length && (c.toString().replace(
			commentRegExp, "").replace(
			cjsRequireRegExp, function (a, c)
		{
			b.push(c)
		}), b = (c.length === 1 ? ["require"] : [
				"require", "exports", "module"
		]).concat(b)), useInteractive && (d =
			currentlyAddingScript ||
			getInteractiveScript(), d && (a || (
			a = d.getAttribute(
			"data-requiremodule")), e = contexts[
			d.getAttribute("data-requirecontext")])), (
			e ? e.defQueue : globalDefQueue).push([
				a, b, c
		]), undefined
	}, define.amd = {
		multiversion: !0,
		plugins: !0,
		jQuery: !0
	}, req.exec = function (text)
	{
		return eval(text)
	}, req.execCb = function (a, b, c, d)
	{
		return b.apply(d, c)
	}, req.addScriptToDom = function (a)
	{
		currentlyAddingScript = a,
		baseElement ? head.insertBefore(a,
			baseElement) : head.appendChild(a),
		currentlyAddingScript = null
	}, req.onScriptLoad = function (a)
	{
		var b = a.currentTarget || a.srcElement,
			c, d, e;
		if (a.type === "load" || b &&
			readyRegExp.test(b.readyState))
			interactiveScript = null, c = b.getAttribute(
				"data-requirecontext"), d = b.getAttribute(
				"data-requiremodule"), e = contexts[
				c], contexts[c].completeLoad(d), b.detachEvent && !
				isOpera ? b.detachEvent(
				"onreadystatechange", req.onScriptLoad) :
				b.removeEventListener("load", req.onScriptLoad, !
				1)
	}, req.attach = function (a, b, c, d,
		e, f)
	{
		var g;
		return isBrowser ? (d = d || req.onScriptLoad,
			g = b && b.config && b.config.xhtml ?
			document.createElementNS(
			"http://www.w3.org/1999/xhtml",
			"html:script") : document.createElement(
			"script"), g.type = e ||
			"text/javascript", g.charset =
			"utf-8", g.async = !s.skipAsync[a],
			b && g.setAttribute(
			"data-requirecontext", b.contextName),
			g.setAttribute("data-requiremodule",
			c), g.attachEvent && !isOpera ? (
			useInteractive = !0, f ? g.onreadystatechange = function (
			a)
		{
			g.readyState === "loaded" && (g.onreadystatechange =
				null, g.attachEvent(
				"onreadystatechange", d), f(g))
		} : g.attachEvent(
			"onreadystatechange", d)) : g.addEventListener(
			"load", d, !1), g.src = a, f || req.addScriptToDom(
			g), g) : (isWebWorker && (
			importScripts(a), b.completeLoad(c)),
			null)
	};
	if (isBrowser)
	{
		scripts = document.getElementsByTagName(
			"script");
		for (i = scripts.length - 1; i > -1 &&
			(script = scripts[i]); i--)
		{
			head || (head = script.parentNode);
			if (dataMain = script.getAttribute(
				"data-main"))
			{
				cfg.baseUrl || (src = dataMain.split(
					"/"), mainScript = src.pop(),
					subPath = src.length ? src.join(
					"/") + "/" : "./", cfg.baseUrl =
					subPath, dataMain = mainScript.replace(
					jsSuffixRegExp, "")), cfg.deps =
					cfg.deps ? cfg.deps.concat(
					dataMain) : [dataMain];
				break
			}
		}
	}
	req.checkReadyState = function ()
	{
		var a = s.contexts,
			b;
		for (b in a) if (!(b in empty) && a[b]
				.waitCount) return;
		req.resourcesReady(!0)
	}, req.resourcesReady = function (a)
	{
		var b, c, d;
		req.resourcesDone = a;
		if (req.resourcesDone)
		{
			b = s.contexts;
			for (d in b) d in empty || (c = b[d],
					c.jQueryIncremented && (
					jQueryHoldReady(c.jQuery, !1), c.jQueryIncremented = !
					1))
		}
	}, req.pageLoaded = function ()
	{
		document.readyState !== "complete" &&
			(document.readyState = "complete")
	}, isBrowser && document.addEventListener &&
		(document.readyState || (document.readyState =
		"loading", window.addEventListener(
		"load", req.pageLoaded, !1))), req(
		cfg), req.isAsync && typeof setTimeout !=
		"undefined" && (ctx = s.contexts[cfg.context ||
		defContextName], ctx.requireWait = !0,
		setTimeout(function ()
	{
		ctx.requireWait = !1, ctx.takeGlobalQueue(),
		ctx.jQueryCheck(), ctx.scriptCount ||
			ctx.resume(), req.checkReadyState()
	}, 0))
}
)(), define("requireLib", function ()
{}),

function ()
{
	var a = ["Msxml2.XMLHTTP",
			"Microsoft.XMLHTTP",
			"Msxml2.XMLHTTP.4.0"
	],
		b =
			/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
		c =
			/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
		d = typeof location != "undefined" &&
			location.href,
		e = d && location.protocol &&
			location.protocol.replace(/\:/, ""),
		f = d && location.hostname,
		g = d && (location.port || undefined),
		h = [];
	define("text", [], function ()
	{
		var i, j, k;
		return typeof window != "undefined" &&
			window.navigator && window.document ?
			j = function (a, b)
		{
			var c = i.createXhr();
			c.open("GET", a, !0), c.onreadystatechange = function (
				a)
			{
				c.readyState === 4 && b(c.responseText)
			}, c.send(null)
		} : typeof process != "undefined" &&
			process.versions && !! process.versions
			.node ? (k = require.nodeRequire(
			"fs"), j = function (a, b)
		{
			b(k.readFileSync(a, "utf8"))
		}) : typeof Packages != "undefined" &&
			(j = function (a, b)
		{
			var c = "utf-8",
				d = new java.io.File(a),
				e = java.lang.System.getProperty(
					"line.separator"),
				f = new java.io.BufferedReader(new java
					.io.InputStreamReader(new java.io.FileInputStream(
					d), c)),
				g, h, i = "";
			try
			{
				g = new java.lang.StringBuffer, h =
					f.readLine(), h && h.length() && h
					.charAt(0) === 65279 && (h = h.substring(
					1)), g.append(h);
				while ((h = f.readLine()) !== null)
					g.append(e), g.append(h);
				i = String(g.toString())
			}
			finally
			{
				f.close()
			}
			b(i)
		}), i = {
			version: "1.0.0",
			strip: function (a)
			{
				if (a)
				{
					a = a.replace(b, "");
					var d = a.match(c);
					d && (a = d[1])
				}
				else a = "";
				return a
			},
			jsEscape: function (a)
			{
				return a.replace(/(['\\])/g, "\\$1")
					.replace(/[\f]/g, "\\f").replace(
					/[\b]/g, "\\b").replace(/[\n]/g,
					"\\n").replace(/[\t]/g, "\\t").replace(
					/[\r]/g, "\\r")
			},
			createXhr: function ()
			{
				var b, c, d;
				if (typeof XMLHttpRequest !=
					"undefined") return new XMLHttpRequest;
				for (c = 0; c < 3; c++)
				{
					d = a[c];
					try
					{
						b = new ActiveXObject(d)
					}
					catch (e)
					{}
					if (b)
					{
						a = [d];
						break
					}
				}
				if (!b) throw new Error(
						"createXhr(): XMLHttpRequest not available");
				return b
			},
			get: j,
			parseName: function (a)
			{
				var b = !1,
					c = a.indexOf("."),
					d = a.substring(0, c),
					e = a.substring(c + 1, a.length);
				return c = e.indexOf("!"), c !== -1 &&
					(b = e.substring(c + 1, e.length),
					b = b === "strip", e = e.substring(
					0, c)),
				{
					moduleName: d,
					ext: e,
					strip: b
				}
			},
			xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
			useXhr: function (a, b, c, d)
			{
				var e = i.xdRegExp.exec(a),
					f, g, h;
				return e ? (f = e[2], g = e[3], g =
					g.split(":"), h = g[1], g = g[0], (!
					f || f === b) && (!g || g === c) &&
					(!h && !g || h === d)) : !0
			},
			finishLoad: function (a, b, c, d, e)
			{
				c = b ? i.strip(c) : c, e.isBuild &&
					e.inlineText && (h[a] = c), d(c)
			},
			load: function (a, b, c, h)
			{
				var j = i.parseName(a),
					k = j.moduleName + "." + j.ext,
					l = b.toUrl(k),
					m = h && h.text && h.text.useXhr ||
						i.useXhr;
				!d || m(l, e, f, g) ? i.get(l, function (
					b)
				{
					i.finishLoad(a, j.strip, b, c, h)
				}) : b([k], function (a)
				{
					i.finishLoad(j.moduleName + "." +
						j.ext, j.strip, a, c, h)
				})
			},
			write: function (a, b, c, d)
			{
				if (b in h)
				{
					var e = i.jsEscape(h[b]);
					c.asModule(a + "!" + b,
						"define(function () { return '" +
						e + "';});\n")
				}
			},
			writeFile: function (a, b, c, d, e)
			{
				var f = i.parseName(b),
					g = f.moduleName + "." + f.ext,
					h = c.toUrl(f.moduleName + "." + f
						.ext) + ".js";
				i.load(g, c, function (b)
				{
					var c = function (a)
					{
						return d(h, a)
					};
					c.asModule = function (a, b)
					{
						return d.asModule(a, h, b)
					}, i.write(a, g, c, e)
				}, e)
			}
		}, i
	})
}
(), define(
	"text!workshop/contents.json", [],function ()
{
	return '{ "projects": [{"name": "A", "thumb": "img/thumbs/a.jpg"},{ "name": "B", "thumb": "img/thumbs/b.jpg" },{ "name": "C", "thumb": "img/thumbs/c.jpg"},{ "name": "D", "thumb": "img/thumbs/d.jpg"},{ "name": "E", "thumb": "img/thumbs/e.jpg"}, { "name": "F", "thumb": "img/thumbs/f.jpg"}, { "name": "G", "thumb": "img/thumbs/g.jpg" }, { "name": "H", "thumb": "img/thumbs/h.jpg" }, { "name": "I", "thumb": "img/thumbs/i.jpg" }, { "name": "J", "thumb": "img/thumbs/j.jpg" }, { "name": "K", "thumb": "img/thumbs/k.jpg"}, { "name": "L", "thumb": "img/thumbs/l.jpg"}, { "name": "M", "thumb": "img/thumbs/m.jpg"}, { "name": "N", "thumb": "img/thumbs/n.jpg"},{ "name": "O", "thumb": "img/thumbs/o.jpg" },{ "name": "P", "thumb": "img/thumbs/p.jpg"},{ "name": "Q", "thumb": "img/thumbs/q.jpg"},{ "name": "R", "thumb": "img/thumbs/r.jpg"}, { "name": "S", "thumb": "img/thumbs/s.jpg"}, { "name": "T", "thumb": "img/thumbs/t.jpg" }, { "name": "U", "thumb": "img/thumbs/u.jpg" }, { "name": "V", "thumb": "img/thumbs/v.jpg" }, { "name": "W", "thumb": "img/thumbs/w.jpg" }, { "name": "X", "thumb": "img/thumbs/x.jpg"}, { "name": "Y", "thumb": "img/thumbs/y.jpg"}, { "name": "Z", "thumb": "img/thumbs/z.jpg"} ]}'
}), define(
	"text!workshop/template.tool.html", [], function ()
{
	return '<article>\n\n  <div class="container">\n\n    <div class="download-links">\n      <% if (tool.max && tool.maxSize) { %>\n        <a href="<%= tool.max %>"><%= tool.filestring %>.js <span class="size"><%= tool.maxSize %></span></a>\n      <% } %>\n      <% if (tool.min && tool.minSize) { %>\n        <a href="<%= tool.min %>"><%= tool.filestring %>.min.js <span class="size"><%= tool.minSize %></span></a>\n      <% } %>\n    </div>\n\n    <figure>\n      <a href="<%= tool.example %>">\n        <img\n            src="<%= tool.thumb %>"\n            alt="<%= tool.name %>"/>\n      </a>\n    </figure>\n\n    <h3><a href="<%= tool.example %>"><%= tool.name %></a></h3>\n\n    <p><%= tool.description %></p>\n\n    <a href="<%= tool.example %>" class="button example"><%= tool.greenButton %></a>\n\n    <a href="<%= tool.source %>" class="button source">Browse Source</a>\n\n  </div>\n\n</article>'
}), define(
	"text!workshop/template.project.html", [], function ()
{
	return '  <a href="<%= project.url %>">\n    <img border="0" src="<%= project.thumb %>" alt="<%= project.name %>" />\n    <figcaption><%= project.name %></figcaption>\n  </a>\n'
}), define("domReady", [], function ()
{
	function i(a)
	{
		for (var b = 0, d; d = a[b]; b++) d(c)
	}

	function j()
	{
		var a = d,
			c = e;
		b && (a.length && (d = [], i(a)), f.resourcesDone &&
			c.length && (e = [], i(c)))
	}

	function k()
	{
		b || (b = !0, h && clearInterval(h),
			j())
	}

	function l(a)
	{
		return b ? a(c) : d.push(a), l
	}
	var a = typeof window != "undefined" &&
		window.document,
		b = !a,
		c = a ? document : null,
		d = [],
		e = [],
		f = requirejs || require || {}, g = f
			.resourcesReady,
		h;
	return "resourcesReady" in f && (f.resourcesReady = function (
		a)
	{
		g && g(a), a && j()
	}), a && (document.addEventListener ?
		(document.addEventListener(
		"DOMContentLoaded", k, !1), window.addEventListener(
		"load", k, !1)) : window.attachEvent &&
		(window.attachEvent("onload", k),
		self === self.top && (h = setInterval(function ()
	{
		try
		{
			document.body && (document.documentElement
				.doScroll("left"), k())
		}
		catch (a)
		{}
	}, 30))), document.readyState ===
		"complete" && k()), l.withResources = function (
		a)
	{
		return b && f.resourcesDone ? a(c) :
			e.push(a), l
	}, l.version = "1.0.0", l.load = function (
		a, b, c, d)
	{
		d.isBuild ? c(null) : l(c)
	}, l
}
), define(
	"dat/utils/requestAnimationFrame", [], function ()
{
	return window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame || function (
		a, b)
	{
		window.setTimeout(a, 1e3 / 60)
	}
}), define("workshop/improvedNoise", [], function ()
{
	function b(a, b)
	{
		var c = a || 362436069,
			d = b || 521288629,
			e = function ()
			{
				return c = 36969 * (c & 65535) + (c >>>
					16) & 4294967295, d = 18e3 * (d &
					65535) + (d >>> 16) & 4294967295, ((
					c & 65535) << 16 | d & 65535) &
					4294967295
			};
		this.nextDouble = function ()
		{
			var a = e() / 4294967296;
			return a < 0 ? 1 + a : a
		}, this.nextInt = e
	}

	function c(a)
	{
		function h(a, b, c, d)
		{
			var e = a & 15,
				f = e < 8 ? b : c,
				g = e < 4 ? c : e === 12 || e ===
					14 ? b : d;
			return ((e & 1) === 0 ? f : -f) + ((
				e & 2) === 0 ? g : -g)
		}

		function j(a, b, c)
		{
			return i = (a & 1) == 0 ? b : c, (a &
				2) == 0 ? -i : i
		}

		function k(a, b)
		{
			return (a & 1) === 0 ? -b : b
		}

		function l(a, b, c)
		{
			return b + a * (c - b)
		}
		var c = a !== undefined ? new b(a) :
			b.createRandomized(),
			d, e, f = new Array(512);
		for (d = 0; d < 256; ++d) f[d] = d;
		for (d = 0; d < 256; ++d)
		{
			var g = f[e = c.nextInt() & 255];
			f[e] = f[d], f[d] = g
		}
		for (d = 0; d < 256; ++d) f[d + 256] =
				f[d];
		var i;
		this.noise3d = function (a, b, c)
		{
			var d = Math.floor(a) & 255,
				e = Math.floor(b) & 255,
				g = Math.floor(c) & 255;
			a -= Math.floor(a), b -= Math.floor(
				b), c -= Math.floor(c);
			var i = (3 - 2 * a) * a * a,
				j = (3 - 2 * b) * b * b,
				k = (3 - 2 * c) * c * c,
				m = f[d] + e,
				n = f[m] + g,
				o = f[m + 1] + g,
				p = f[d + 1] + e,
				q = f[p] + g,
				r = f[p + 1] + g;
			return l(k, l(j, l(i, h(f[n], a, b,
				c), h(f[q], a - 1, b, c)), l(i, h(f[
				o], a, b - 1, c), h(f[r], a - 1, b -
				1, c))), l(j, l(i, h(f[n + 1], a, b,
				c - 1), h(f[q + 1], a - 1, b, c - 1)),
				l(i, h(f[o + 1], a, b - 1, c - 1),
				h(f[r + 1], a - 1, b - 1, c - 1))))
		};
		var m, n, o, p, q, r, s, t;
		this.noise2d = function (a, b)
		{
			return s = Math.floor(a), t = Math.floor(
				b), m = s & 255, n = t & 255, a -=
				s, b -= t, o = (3 - 2 * a) * a * a,
			r = (3 - 2 * b) * b * b, p = f[m] +
				n, q = f[m + 1] + n, l(r, l(o, j(f[
				p], a, b), j(f[q], a - 1, b)), l(o,
				j(f[p + 1], a, b - 1), j(f[q + 1],
				a - 1, b - 1)))
		}, this.noise1d = function (a)
		{
			var b = Math.floor(a) & 255;
			a -= Math.floor(a);
			var c = (3 - 2 * a) * a * a;
			return l(c, k(f[b], a), k(f[b + 1],
				a - 1))
		}
	}
	var a = function ()
	{
		function c(a)
		{
			return a * a * a * (a * (a * 6 - 15) +
				10)
		}

		function d(a, b, c)
		{
			return b + a * (c - b)
		}

		function e(a, b, c, d)
		{
			var e = a & 15,
				f = e < 8 ? b : c,
				g = e < 4 ? c : e == 12 || e == 14 ?
					b : d;
			return ((e & 1) == 0 ? f : -f) + ((e &
				2) == 0 ? g : -g)
		}
		var a = [151, 160, 137, 91, 90, 15,
				131, 13, 201, 95, 96, 53, 194, 233,
				7, 225, 140, 36, 103, 30, 69, 142,
				8, 99, 37, 240, 21, 10, 23, 190, 6,
				148, 247, 120, 234, 75, 0, 26, 197,
				62, 94, 252, 219, 203, 117, 35, 11,
				32, 57, 177, 33, 88, 237, 149, 56,
				87, 174, 20, 125, 136, 171, 168, 68,
				175, 74, 165, 71, 134, 139, 48, 27,
				166, 77, 146, 158, 231, 83, 111,
				229, 122, 60, 211, 133, 230, 220,
				105, 92, 41, 55, 46, 245, 40, 244,
				102, 143, 54, 65, 25, 63, 161, 1,
				216, 80, 73, 209, 76, 132, 187, 208,
				89, 18, 169, 200, 196, 135, 130,
				116, 188, 159, 86, 164, 100, 109,
				198, 173, 186, 3, 64, 52, 217, 226,
				250, 124, 123, 5, 202, 38, 147, 118,
				126, 255, 82, 85, 212, 207, 206, 59,
				227, 47, 16, 58, 17, 182, 189, 28,
				42, 223, 183, 170, 213, 119, 248,
				152, 2, 44, 154, 163, 70, 221, 153,
				101, 155, 167, 43, 172, 9, 129, 22,
				39, 253, 19, 98, 108, 110, 79, 113,
				224, 232, 178, 185, 112, 104, 218,
				246, 97, 228, 251, 34, 242, 193,
				238, 210, 144, 12, 191, 179, 162,
				241, 81, 51, 145, 235, 249, 14, 239,
				107, 49, 192, 214, 31, 181, 199,
				106, 157, 184, 84, 204, 176, 115,
				121, 50, 45, 127, 4, 150, 254, 138,
				236, 205, 93, 222, 114, 67, 29, 24,
				72, 243, 141, 128, 195, 78, 66, 215,
				61, 156, 180
		];
		for (var b = 0; b < 256; b++) a[256 +
				b] = a[b];
		return {
			noise: function (b, f, g)
			{
				var h = Math.floor(b),
					i = Math.floor(f),
					j = Math.floor(g),
					k = h & 255,
					l = i & 255,
					m = j & 255;
				b -= h, f -= i, g -= j;
				var n = b - 1,
					o = f - 1,
					q = g - 1,
					r = c(b),
					s = c(f),
					t = c(g),
					u = a[k] + l,
					v = a[u] + m,
					w = a[u + 1] + m,
					x = a[k + 1] + l,
					y = a[x] + m,
					z = a[x + 1] + m;
				return d(t, d(s, d(r, e(a[v], b, f,
					g), e(a[y], n, f, g)), d(r, e(a[w],
					b, o, g), e(a[z], n, o, g))), d(s,
					d(r, e(a[v + 1], b, f, q), e(a[y +
					1], n, f, g - 1)), d(r, e(a[w + 1],
					b, o, q), e(a[z + 1], n, o, q))))
			}
		}
	};
	b.createRandomized = function ()
	{
		var a = new Date;
		return new b(a / 6e4 & 4294967295, a &
			4294967295)
	};
	var d = {
		generator: undefined,
		octaves: 1,
		fallout: .5,
		seed: undefined
	}, e = new c(d.seed),
		f, g, h, i, j = d.octaves;
	return e.noise2d
}), define(
	"dat/types/ExtendableFloatArray", [], function ()
{
	var a;
	typeof Float32Array != "undefined" ? a =
		Float32Array : a = Array;
	var b, c;
	return function (d)
	{
		d = d || {}, c = {};
		for (b in d)(function (a)
			{
				c[b] = {
					get: function ()
					{
						return this[a]
					},
					set: function (b)
					{
						this[a] = b
					}
				}
			})(d[b]);
		return Object.defineProperties(a.prototype,
			c), a
	}
}), define("workshop/FizzyText", [
		"workshop/improvedNoise",
		"dat/types/ExtendableFloatArray"
], function (a, b)
{
	function f()
	{
		var a = new e(5);
		return a[0] = 0, a[1] = 0, a[2] = 0,
		a[3] = 0, a[4] = 0, a
	}
	var c = 2 * Math.PI,
		d, e = b(
		{
			x: 0,
			y: 1,
			r: 2,
			vx: 3,
			vy: 4
		});
	e.prototype.render = function (a)
	{
		a.beginPath(), a.arc(this[0], this[1],
			this[2], 0, c, !1), a.fill()
	}, e.prototype.update = function (b)
	{
		d = a(this[0] / b.noiseScale, this[1] /
			b.noiseScale) * b.noiseStrength, b.getColor(
			this[0], this[1]) > 0 ? this[2] += b
			.growthSpeed : this[2] -= b.growthSpeed,
		this[3] *= .8, this[4] *= .8, this[0] +=
			Math.cos(d) * b.speed + this[3],
		this[1] -= Math.sin(d) * b.speed +
			this[4];
		if (this[2] > b.maxSize) this[2] = b.maxSize;
		else if (this[2] < 0) return this[2] =
				0, this[0] = Math.random() * b.width,
		this[1] = b.height2 + (Math.random() *
			2 - 1) * b.fontSize2, !1;
		return !0
	};
	var g = function (a, b, d, e, g)
	{
		this.growthSpeed = .37, this.maxSize =
			8, this.noiseStrength = 10, this.speed =
			.4, this.displayOutline = !1, this.framesRendered =
			0, Object.defineProperty(this,
			"message",
		{
			get: function ()
			{
				return a
			},
			set: function (b)
			{
				a = b, t(a)
			}
		}), this.explode = function ()
		{
			var a = 30;
			for (var b in q)
			{
				var d = Math.random() * c;
				q[b][3] = Math.cos(d) * a, q[b][4] =
					Math.sin(d) * a
			}
		};
		var h = this,
			i = b,
			j = d,
			g = g || 140,
			k = this.noiseScale = 300;
		this.color0 = "#00aeff", this.color1 =
			"#0fa954", this.color2 = "#54396e",
		this.color3 = "#e61d5f";
		var l = document.createElement(
			"canvas"),
			m = l.getContext("2d"),
			n = this.domElement = document.createElement(
				"canvas"),
			o = n.getContext("2d");
		this.domElement.width = this.width =
			l.width = i, this.domElement.height =
			this.height = l.height = j;
		var p = [],
			q = [],
			r = e ? "darker" : "lighter";
		m.font = o.font = "bold " + g +
			"px Helvetica, Arial, sans-serif", o
			.globalCompositeOperation = r;
		for (var s = 0; s < 1200; s++) q.push(
				f());
		var t = function (a)
		{
			m.clearRect(0, 0, i, j), m.fillStyle =
				"#f00", m.textAlign = o.textAlign =
				"center", m.textBaseline = o.textBaseline =
				"middle", m.fillText(a, i / 2, j /
				2);
			var b = m.getImageData(0, 0, i, j);
			p = b.data
		}, u, v, w = 4,
			x, y = q.length / w,
			z = this.height2 = j / 2,
			A = this.fontSize2 = g / 2;
		this.render = function ()
		{
			h.framesRendered++, o.clearRect(0, 0,
				i, j), h.displayOutline && (o.globalCompositeOperation =
				"source-over", o.strokeStyle = e ?
				"#000" : "#fff", o.lineWidth = 2, o
				.strokeText(a, i / 2, j / 2), o.globalCompositeOperation =
				r);
			for (var b = 0; b < w; b++)
			{
				o.fillStyle = this["color" + b], x =
					y * b;
				for (v = 0; v < y; v++) u = q[v + x],
				u.update(this) && u.render(o)
			}
		}, this.getColor = function (a, b)
		{
			return p[(~~b * i + ~~a) * 4]
		}, this.message = a
	};
	return g
}), define(
	"text!dat/gui/saveDialogue.html", [], function ()
{
	return '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n      \n    </div>\n    \n  </div>\n\n</div>'
}), define("dat/utils/css",
{
	link: function (a, b)
	{
		b = b || document;
		var c = b.createElement("link");
		c.type = "text/css", c.rel =
			"stylesheet", c.setAttribute("href",
			a);
		var d = b.getElementsByTagName("head")[
			0];
		c.disable = function ()
		{
			d.removeChild(c)
		};
		var e = function ()
		{};
		return c.onLoad = function (a)
		{
			e = a
		},

		function (a)
		{
			document.styleSheets.length != a ? e() :
				setTimeout(arguments.callee, 20)
		}(document.styleSheets.length), d.appendChild(
			c), c
	},
	inject: function (a, b)
	{
		b = b || document;
		var c = b.createElement("style");
		c.type = "text/css", c.innerHTML = a;
		var d = b.getElementsByTagName("head")[
			0];
		return d.disable = function ()
		{
			d.removeChild(c)
		}, d.appendChild(c), c
	}
}), define(
	"text!dat/controllers/NumberControllerSlider.css", [], function ()
{
	return ".slider {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\n  height: 1em;\n  border-radius: 1em;\n  background-color: #eee;\n  padding: 0 0.5em;\n  overflow: hidden;\n}\n\n.slider-fg {\n  padding: 1px 0 2px 0;\n  background-color: #aaa;\n  height: 100%;\n  margin-left: -0.5em;\n  padding-right: 0.5em;\n  border-radius: 1em 0 0 1em;\n}\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border:  1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -1em;\n  margin-top: -1px;\n  height: 0.9em;\n  width: 0.9em;\n}"
}), define("dat/color/math", [], function ()
{
	var a;
	return {
		hsv_to_rgb: function (a, b, c)
		{
			var d = Math.floor(a / 60) % 6,
				e = a / 60 - Math.floor(a / 60),
				f = c * (1 - b),
				g = c * (1 - e * b),
				h = c * (1 - (1 - e) * b),
				i = [
					[c, h, f],
					[g, c, f],
					[f, c, h],
					[f, g, c],
					[h, f, c],
					[c, f, g]
				][d];
			return {
				r: i[0] * 255,
				g: i[1] * 255,
				b: i[2] * 255
			}
		},
		rgb_to_hsv: function (a, b, c)
		{
			var d = Math.min(a, b, c),
				e = Math.max(a, b, c),
				f = e - d,
				g, h;
			if (e != 0) h = f / e;
			else return {
					h: NaN,
					s: 0,
					v: 0
			};
			return a == e ? g = (b - c) / f : b ==
				e ? g = 2 + (c - a) / f : g = 4 + (
				a - b) / f, g /= 6, g < 0 && (g +=
				1),
			{
				h: g * 360,
				s: h,
				v: e / 255
			}
		},
		rgb_to_hex: function (a, b, c)
		{
			var d = this.hex_with_component(0, 2,
				a);
			return d = this.hex_with_component(d,
				1, b), d = this.hex_with_component(
				d, 0, c), d
		},
		component_from_hex: function (a, b)
		{
			return a >> b * 8 & 255
		},
		hex_with_component: function (b, c, d)
		{
			return d << (a = c * 8) | b & ~(255 <<
				a)
		}
	}
}), define("dat/utils/common", [], function ()
{
	var a = Array.prototype.forEach,
		b = Array.prototype.slice;
	return {
		BREAK: {},
		extend: function (a)
		{
			return this.each(b.call(arguments, 1), function (
				b)
			{
				for (var c in b) this.isUndefined(b[
						c]) || (a[c] = b[c])
			}, this), a
		},
		defaults: function (a)
		{
			return this.each(b.call(arguments, 1), function (
				b)
			{
				for (var c in b) this.isUndefined(a[
						c]) && (a[c] = b[c])
			}, this), a
		},
		compose: function ()
		{
			var a = b.call(arguments);
			return function ()
			{
				var c = b.call(arguments);
				for (var d = a.length - 1; d >= 0; d--)
					c = [a[d].apply(this, c)];
				return c[0]
			}
		},
		each: function (b, c, d)
		{
			if (a && b.forEach === a) b.forEach(
					c, d);
			else if (b.length === b.length + 0)
			{
				for (var e = 0, f = b.length; e < f; e++)
					if (e in b && c.call(d, b[e], e) ===
						this.BREAK) return
			}
			else for (var e in b) if (c.call(d,
						b[e], e) === this.BREAK) return
		},
		defer: function (a)
		{
			setTimeout(a, 0)
		},
		identity: function (a)
		{
			return a
		},
		toArray: function (a)
		{
			return a.toArray ? a.toArray() : b.call(
				a)
		},
		isUndefined: function (a)
		{
			return a === undefined
		},
		isNull: function (a)
		{
			return a === null
		},
		isNaN: function (a)
		{
			return a !== a
		},
		isArray: Array.isArray || function (a)
		{
			return a.constructor === Array
		},
		isObject: function (a)
		{
			return a === Object(a)
		},
		isNumber: function (a)
		{
			return a === a + 0
		},
		isString: function (a)
		{
			return a === a + ""
		},
		isBoolean: function (a)
		{
			return a === !1 || a === !0
		},
		isFunction: function (a)
		{
			return Object.prototype.toString.call(
				a) === "[object Function]"
		}
	}
}), define("dat/color/toString", [
		"dat/utils/common"
], function (a)
{
	return function (b)
	{
		if (b.a == 1 || a.isUndefined(b.a))
		{
			var c = b.hex.toString(16);
			while (c.length < 6) c = "0" + c;
			return "#" + c
		}
		return "rgba(" + Math.round(b.r) +
			"," + Math.round(b.g) + "," + Math.round(
			b.b) + "," + b.a + ")"
	}
}), define("dat/color/interpret", [
		"dat/color/toString",
		"dat/utils/common"
], function (a, b)
{
	var c, d, e = function ()
		{
			d = !1;
			var a = arguments.length > 1 ? b.toArray(
				arguments) : arguments[0];
			return b.each(f, function (e)
			{
				if (e.litmus(a)) return b.each(e.conversions, function (
						e, f)
					{
						c = e.read(a);
						if (d === !1 && c !== !1) return d =
								c, c.conversionName = f, c.conversion =
								e, b.BREAK
					}), b.BREAK
			}), d
		}, f = [
			{
				litmus: b.isString,
				conversions: {
					THREE_CHAR_HEX: {
						read: function (a)
						{
							var b = a.match(
								/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
							return b === null ? !1 : {
								space: "HEX",
								hex: parseInt("0x" + b[1].toString() +
									b[1].toString() + b[2].toString() +
									b[2].toString() + b[3].toString() +
									b[3].toString())
							}
						},
						write: a
					},
					SIX_CHAR_HEX: {
						read: function (a)
						{
							var b = a.match(
								/^#([A-F0-9]{6})$/i);
							return b === null ? !1 : {
								space: "HEX",
								hex: parseInt("0x" + b[1].toString())
							}
						},
						write: a
					},
					CSS_RGB: {
						read: function (a)
						{
							var b = a.match(
								/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
							return b === null ? !1 : {
								space: "RGB",
								r: parseFloat(b[1]),
								g: parseFloat(b[2]),
								b: parseFloat(b[3])
							}
						},
						write: a
					},
					CSS_RGBA: {
						read: function (a)
						{
							var b = a.match(
								/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
							return b === null ? !1 : {
								space: "RGB",
								r: parseFloat(b[1]),
								g: parseFloat(b[2]),
								b: parseFloat(b[3]),
								a: parseFloat(b[4])
							}
						},
						write: a
					}
				}
			},
			{
				litmus: b.isNumber,
				conversions: {
					HEX: {
						read: function (a)
						{
							return {
								space: "HEX",
								hex: a,
								conversionName: "HEX"
							}
						},
						write: function (a)
						{
							return a.hex
						}
					}
				}
			},
			{
				litmus: b.isArray,
				conversions: {
					RGB_ARRAY: {
						read: function (a)
						{
							return a.length != 3 ? !1 : {
								space: "RGB",
								r: a[0],
								g: a[1],
								b: a[2]
							}
						},
						write: function (a, b)
						{
							return b[0] = a.r, b[1] = a.g, b[
								2] = a.b, [a.r, a.g, a.b]
						}
					},
					RGBA_ARRAY: {
						read: function (a)
						{
							return a.length != 4 ? !1 : {
								space: "RGB",
								r: a[0],
								g: a[1],
								b: a[2],
								a: a[3]
							}
						},
						write: function (a, b)
						{
							return b[0] = a.r, b[1] = a.g, b[
								2] = a.b, b[3] = a.a, [a.r, a.g,
									a.b, a.a
							]
						}
					}
				}
			},
			{
				litmus: b.isObject,
				conversions: {
					RGBA_OBJ: {
						read: function (a)
						{
							return b.isNumber(a.r) && b.isNumber(
								a.g) && b.isNumber(a.b) && b.isNumber(
								a.a) ? {
								space: "RGB",
								r: a.r,
								g: a.g,
								b: a.b,
								a: a.a
							} : !1
						},
						write: function (a, b)
						{
							return b.r = a.r, b.g = a.g, b.b =
								a.b, b.a = a.a,
							{
								r: a.r,
								g: a.g,
								b: a.b,
								a: a.a
							}
						}
					},
					RGB_OBJ: {
						read: function (a)
						{
							return b.isNumber(a.r) && b.isNumber(
								a.g) && b.isNumber(a.b) ? {
								space: "RGB",
								r: a.r,
								g: a.g,
								b: a.b
							} : !1
						},
						write: function (a, b)
						{
							return b.r = a.r, b.g = a.g, b.b =
								a.b,
							{
								r: a.r,
								g: a.g,
								b: a.b
							}
						}
					},
					HSVA_OBJ: {
						read: function (a)
						{
							return b.isNumber(a.h) && b.isNumber(
								a.s) && b.isNumber(a.v) && b.isNumber(
								a.a) ? {
								space: "HSV",
								h: a.h,
								s: a.s,
								v: a.v,
								a: a.a
							} : !1
						},
						write: function (a)
						{
							return {
								h: a.h,
								s: a.s,
								v: a.v,
								a: a.a
							}
						}
					},
					HSV_OBJ: {
						read: function (a)
						{
							return b.isNumber(a.h) && b.isNumber(
								a.s) && b.isNumber(a.v) ? {
								space: "HSV",
								h: a.h,
								s: a.s,
								v: a.v
							} : !1
						},
						write: function (a)
						{
							return {
								h: a.h,
								s: a.s,
								v: a.v
							}
						}
					}
				}
			}
		];
	return e
}), define("dat/utils/css",
{
	link: function (a, b)
	{
		b = b || document;
		var c = b.createElement("link");
		c.type = "text/css", c.rel =
			"stylesheet", c.setAttribute("href",
			a);
		var d = b.getElementsByTagName("head")[
			0];
		c.disable = function ()
		{
			d.removeChild(c)
		};
		var e = function ()
		{};
		return c.onLoad = function (a)
		{
			e = a
		},

		function (a)
		{
			document.styleSheets.length != a ? e() :
				setTimeout(arguments.callee, 20)
		}(document.styleSheets.length), d.appendChild(
			c), c
	},
	inject: function (a, b)
	{
		b = b || document;
		var c = b.createElement("style");
		c.type = "text/css", c.innerHTML = a;
		var d = b.getElementsByTagName("head")[
			0];
		return d.disable = function ()
		{
			d.removeChild(c)
		}, d.appendChild(c), c
	}
}),

function ()
{
	var a = "text",
		b = "dat/utils/css",
		c = {};
	define("dat/require/css", [b, a], function (
		a, d)
	{
		return {
			load: function (b, e, f, g)
			{
				if (!g.isBuild)
				{
					a.link(e.toUrl(b)).onLoad(f);
					return
				}
				d.load(b, e, function (a)
				{
					c[b] = a, f()
				}, g)
			},
			write: function (a, e, f)
			{
				if (e in c)
				{
					var g = d.jsEscape(c[e]);
					f.asModule(a + "!" + e,
						"define(['" + b +
						"'], function(css) {" +
						"return css.inject('" + g +
						"');});\n")
				}
			}
		}
	})
}(), define(
	"dat/require/css!dat/gui/gui.css", [
		"dat/utils/css"
], function (a)
{
	return a.inject(
		".dg {		}\n  .dg ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    clear: both; }\n  .dg.ac {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 0;\n    z-index: 0; }\n  .dg:not(.ac) .main {\n    \n    overflow: hidden; }\n  .dg.main {\n    -webkit-transition: opacity 0.1s linear;\n    -o-transition: opacity 0.1s linear;\n    -moz-transition: opacity 0.1s linear;\n    transition: opacity 0.1s linear; }\n    .dg.main.taller-than-window {\n      overflow-y: auto; }\n      .dg.main.taller-than-window .close-button {\n        opacity: 1;\n        /* TODO, these are style notes */\n        margin-top: -1px;\n        border-top: 1px solid #2c2c2c; }\n    .dg.main ul.closed .close-button {\n      opacity: 0 !important; }\n    .dg.main:hover .close-button,\n    .dg.main .close-button.drag {\n      opacity: 1; }\n    .dg.main .close-button {\n      /*opacity: 0;*/\n      -webkit-transition: opacity 0.1s linear;\n      -o-transition: opacity 0.1s linear;\n      -moz-transition: opacity 0.1s linear;\n      transition: opacity 0.1s linear;\n      border: 0;\n      position: absolute;\n      line-height: 19px;\n      height: 20px;\n      /* TODO, these are style notes */\n      cursor: pointer;\n      text-align: center;\n      background-color: #000; }\n      .dg.main .close-button:hover {\n        background-color: #111; }\n  .dg.a {\n    float: right;\n    margin-right: 15px;\n    overflow-x: hidden; }\n    .dg.a.has-save ul {\n      margin-top: 27px; }\n      .dg.a.has-save ul.closed {\n        margin-top: 0; }\n    .dg.a .save-row {\n      position: fixed;\n      top: 0;\n      z-index: 1002; }\n  .dg li {\n    -webkit-transition: height 0.1s ease-out;\n    -o-transition: height 0.1s ease-out;\n    -moz-transition: height 0.1s ease-out;\n    transition: height 0.1s ease-out; }\n  .dg li:not(.folder) {\n    cursor: auto;\n    height: 27px;\n    line-height: 27px;\n    overflow: hidden;\n    padding: 0 4px 0 5px; }\n  .dg li.folder {\n    padding: 0;\n    border-left: 4px solid rgba(0, 0, 0, 0); }\n  .dg li.tinker {\n    height: 200px; }\n    .dg li.tinker textarea {\n      margin-left: -5px;\n      width: 100%;\n      height: 200px;\n      resize: none; }\n  .dg li.title {\n    cursor: pointer;\n    margin-left: -4px; }\n  .dg .closed li:not(.title),\n  .dg .closed ul li,\n  .dg .closed ul li > * {\n    height: 0;\n    overflow: hidden;\n    border: 0; }\n  .dg .cr {\n    clear: both;\n    padding-left: 3px;\n    height: 27spx; }\n  .dg .property-name {\n    cursor: default;\n    float: left;\n    clear: left;\n    width: 40%;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .dg .c {\n    float: left;\n    width: 60%; }\n  .dg .c input[type=text] {\n    border: 0;\n    margin-top: 4px;\n    padding: 3px;\n    width: 100%;\n    float: right; }\n  .dg .has-slider input[type=text] {\n    width: 30%;\n    /*display: none;*/\n    margin-left: 0; }\n  .dg .slider {\n    float: left;\n    width: 66%;\n    margin-left: -5px;\n    margin-right: 0;\n    height: 19px;\n    margin-top: 4px; }\n  .dg .slider-fg {\n    height: 100%; }\n  .dg .c input[type=checkbox] {\n    margin-top: 9px; }\n  .dg .c select {\n    margin-top: 5px; }\n  .dg .cr.function:not(.tinker),\n  .dg .cr.function:not(.tinker) .property-name,\n  .dg .cr.function:not(.tinker) *,\n  .dg .cr.boolean,\n  .dg .cr.boolean * {\n    cursor: pointer; }\n  .dg .selector {\n    display: none;\n    position: absolute;\n    margin-left: -9px;\n    margin-top: 23px;\n    z-index: 10; }\n  .dg .c:hover .selector,\n  .dg .selector.drag {\n    display: block; }\n  .dg li.save-row {\n    padding: 0; }\n    .dg li.save-row .button {\n      display: inline-block;\n      padding: 0px 6px; }\n  .dg.dialogue {\n    background-color: #222;\n    width: 460px;\n    padding: 15px;\n    font-size: 13px;\n    line-height: 15px; }\n\n/* TODO Separate style and structure */\n#dg-new-constructor {\n  padding: 10px;\n  color: #222;\n  font-family: Monaco, monospace;\n  font-size: 10px;\n  border: 0;\n  resize: none;\n  box-shadow: inset 1px 1px 1px #888;\n  word-wrap: break-word;\n  margin: 12px 0;\n  display: block;\n  width: 440px;\n  overflow-y: scroll;\n  height: 100px;\n  position: relative; }\n\n#dg-local-explain {\n  display: none;\n  font-size: 11px;\n  line-height: 17px;\n  border-radius: 3px;\n  background-color: #333;\n  padding: 8px;\n  margin-top: 10px; }\n  #dg-local-explain code {\n    font-size: 10px; }\n\n#dat-gui-save-locally {\n  display: none; }\n\n/** Main type */\n.dg {\n  color: #eee;\n  font: 11px 'Lucida Grande', sans-serif;\n  text-shadow: 0 -1px 0 #111111;\n  /** Auto place */\n  /* Controller row, <li> */\n  /** Controllers */ }\n  .dg.main {\n    /** Scrollbar */ }\n    .dg.main::-webkit-scrollbar {\n      width: 5px;\n      background: #1a1a1a; }\n    .dg.main::-webkit-scrollbar-corner {\n      height: 0;\n      display: none; }\n    .dg.main::-webkit-scrollbar-thumb {\n      border-radius: 5px;\n      background: #676767; }\n  .dg li:not(.folder) {\n    background: #1a1a1a;\n    border-bottom: 1px solid #2c2c2c; }\n  .dg li.save-row {\n    line-height: 25px;\n    background: #dad5cb;\n    border: 0; }\n    .dg li.save-row select {\n      margin-left: 5px;\n      width: 108px; }\n    .dg li.save-row .button {\n      margin-left: 5px;\n      margin-top: 1px;\n      border-radius: 2px;\n      font-size: 9px;\n      line-height: 7px;\n      padding: 4px 4px 5px 4px;\n      background: #c5bdad;\n      color: #fff;\n      text-shadow: 0 1px 0 #b0a58f;\n      box-shadow: 0 -1px 0 #b0a58f;\n      cursor: pointer; }\n      .dg li.save-row .button.gears {\n        background: #c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;\n        height: 7px;\n        width: 8px; }\n      .dg li.save-row .button:hover {\n        background-color: #bab19e;\n        box-shadow: 0 -1px 0 #b0a58f; }\n  .dg li.folder {\n    border-bottom: 0; }\n  .dg li.title {\n    padding-left: 16px;\n    background: black url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;\n    cursor: pointer;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n  .dg .closed li.title {\n    background-image: url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==); }\n  .dg .cr.boolean {\n    border-left: 3px solid #806787; }\n  .dg .cr.function {\n    border-left: 3px solid #e61d5f; }\n  .dg .cr.number {\n    border-left: 3px solid #2fa1d6; }\n    .dg .cr.number input[type=text] {\n      color: #2fa1d6; }\n  .dg .cr.string {\n    border-left: 3px solid #1ed36f; }\n    .dg .cr.string input[type=text] {\n      color: #1ed36f; }\n  .dg .cr.function:not(.tinker):hover, .dg .cr.boolean:hover {\n    background: #111; }\n  .dg .c input[type=text] {\n    background: #303030;\n    outline: none; }\n    .dg .c input[type=text]:hover {\n      background: #3c3c3c; }\n    .dg .c input[type=text]:focus {\n      background: #494949;\n      color: #fff; }\n  .dg .c .slider {\n    background: #303030;\n    cursor: ew-resize; }\n  .dg .c .slider-fg {\n    background: #2fa1d6; }\n  .dg .c .slider:hover {\n    background: #3c3c3c; }\n    .dg .c .slider:hover .slider-fg {\n      background: #44abda; }\n")
}), define("dat/dom/dom", [
		"dat/utils/common"
], function (a)
{
	function g(b)
	{
		if (b === "0" || a.isUndefined(b))
			return 0;
		var c = b.match(f);
		return a.isNull(c) ? 0 : parseFloat(c[
			1])
	}
	var b = {
		HTMLEvents: ["change"],
		MouseEvents: ["click", "mousemove",
				"mousedown", "mouseup", "mouseover"
		],
		KeyboardEvents: ["keydown"]
	}, c = {
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		}, d = {}, e = {};
	a.each(b, function (b, c)
	{
		a.each(b, function (a)
		{
			e[a] = c
		})
	});
	var f = /(-?\d+(\.\d+)?)px/,
		h = {
			makeSelectable: function (a, b)
			{
				if (a === undefined || a.style ===
					undefined) return;
				a.onselectstart = b ? function ()
				{
					return !1
				} : function ()
				{};
				var c = b ? "auto" : "none";
				return a.style.MozUserSelect = c, a
					.style.KhtmlUserSelect = c, a.style
					.webkitUserSelect = c, a.style.msUserSelect =
					c, a.unselectable = b ? "on" :
					"off", h
			},
			makeFullscreen: function (b, c, d)
			{
				return a.isUndefined(c) && (c = !0),
				a.isUndefined(d) && (d = !0), b.style
					.position = "absolute", c && (b.style
					.left = 0, b.style.right = 0), d &&
					(b.style.top = 0, b.style.bottom =
					0), h
			},
			fakeEvent: function (b, c, d, f)
			{
				d = d || {};
				var g = e[c];
				if (!g) throw new Error(
						"Event type " + c +
						" not supported.");
				var h = document.createEvent(g);
				switch (g)
				{
				case "MouseEvents":
					var i = d.x || d.clientX || 0,
						j = d.y || d.clientY || 0;
					h.initMouseEvent(c, d.bubbles || !
						1, d.cancelable || !0, window, d.clickCount ||
						1, 0, 0, i, j, !1, !1, !1, !1, 0,
						null);
					break;
				case "KeyboardEvents":
					var k = h.initKeyboardEvent || h.initKeyEvent;
					a.defaults(d,
					{
						cancelable: !0,
						ctrlKey: !1,
						altKey: !1,
						shiftKey: !1,
						metaKey: !1,
						keyCode: undefined,
						charCode: undefined
					}), k(c, d.bubbles || !1, d.cancelable,
						window, d.ctrlKey, d.altKey, d.shiftKey,
						d.metaKey, d.keyCode, d.charCode);
					break;
				default:
					h.initEvent(c, d.bubbles || !1, d.cancelable || !
						0)
				}
				a.defaults(h, f), b.dispatchEvent(h)
			},
			bind: function (a, b, e, f)
			{
				if (!a) return;
				if (b in c)
				{
					var g = e;
					b = c[b], e = function (a)
					{
						var b = a.relatedTarget,
							c = this;
						(!b || b !== c && !h.contains(c,
							b)) && g.call(this, a)
					}, d[g] = e
				}
				return a.addEventListener ? a.addEventListener(
					b, e, !! f) : a.attachEvent && a.attachEvent(
					"on" + b, e), h
			},
			makeBinding: function ()
			{
				var b = a.toArray(arguments);
				return {
					unbind: function ()
					{
						return h.unbind.apply(this, b),
						this
					},
					bind: function ()
					{
						return h.bind.apply(this, b),
						this
					},
					addTo: function (a)
					{
						return a.push(this), this
					},
					context: function (a)
					{
						var c = b[2];
						return b[2] = function ()
						{
							c.apply(a, arguments)
						}, this
					}
				}
			},
			unbind: function (b, e, f, g)
			{
				if (!b) return;
				if (e in c)
				{
					e = c[e];
					var i = d[f];
					a.isFunction(i) && (f = i, delete d[
						f])
				}
				return b.removeEventListener ? b.removeEventListener(
					e, f, !! g) : b.detachEvent && b.detachEvent(
					"on" + e, f), h
			},
			addClass: function (a, b)
			{
				if (a.className === undefined) a.className =
						b;
				else if (a.className !== b)
				{
					var c = a.className.split(/ +/);
					c.indexOf(b) == -1 && (c.push(b),
						a.className = c.join(" ").replace(
						/^\s+/, "").replace(/\s+$/, ""))
				}
				return h
			},
			removeClass: function (a, b)
			{
				if (b)
				{
					if (a.className !== undefined) if (
							a.className === b) a.removeAttribute(
								"class");
						else
						{
							var c = a.className.split(/ +/),
								d = c.indexOf(b);
							d != -1 && (c.splice(d, 1), a.className =
								c.join(" "))
						}
				}
				else a.className = undefined;
				return h
			},
			getClasses: function (a)
			{
				return a.className.split(" ")
			},
			hasClass: function (a, b)
			{
				return _.isElement(a) ? (new RegExp(
					"(?:^|\\s+)" + b + "(?:\\s+|$)")).test(
					a.className) || !1 : !1
			},
			contains: function (a, b)
			{
				var c = b.parentNode;
				while (c !== null)
				{
					if (c === a) return !0;
					c = c.parentNode
				}
				return !1
			},
			getParent: function (a)
			{
				return a.parentElement ? a.parentElement :
					a.parentNode
			},
			getRect: function (a, b)
			{
				var c;
				if (a.getBoundingClientRect) c = a.getBoundingClientRect();
				else
				{
					c = this.getOffset(a);
					var d = this.getWidth(a),
						e = this.getHeight(a)
				} if (b)
				{
					var f = getComputedStyle(a),
						h = g(f["margin-top"] || f.marginTop),
						i = g(f["margin-left"] || f.marginLeft);
					c.top -= h, c.left -= i
				}
				return _.extend(c,
				{
					right: c.left + d,
					bottom: c.top + e,
					width: d,
					height: e
				}), c
			},
			getWidth: function (a)
			{
				if (a === window) return "innerWidth" in
						window ? window.innerWidth :
						document.documentElement.offsetWidth;
				if (a === document) return Math.max(
						document.documentElement.clientWidth,
						document.body.scrollWidth,
						document.documentElement.scrollWidth,
						document.body.offsetWidth,
						document.documentElement.offsetWidth);
				var b = getComputedStyle(a);
				return g(b["border-left-width"] ||
					b.borderLeftWidth) + g(b[
					"border-right-width"] || b.borderRightWidth) +
					g(b["padding-left"] || b.paddingLeft) +
					g(b["padding-right"] || b.paddingRight) +
					g(b.width)
			},
			getHeight: function (a)
			{
				if (a === window) return "innerHeight" in
						window ? window.innerHeight :
						document.documentElement.offsetHeight;
				if (a === document) return Math.max(
						document.documentElement.clientHeight,
						document.body.scrollHeight,
						document.documentElement.scrollHeight,
						document.body.offsetHeight,
						document.documentElement.offsetHeight);
				var b = getComputedStyle(a);
				return g(b["border-top-width"] || b
					.borderTopWidth) + g(b[
					"border-bottom-width"] || b.borderBottomWidth) +
					g(b["padding-top"] || b.paddingTop) +
					g(b["padding-bottom"] || b.paddingBottom) +
					g(b.height)
			},
			getOffset: function (a)
			{
				var b = a,
					c = {
						left: 0,
						top: 0
					};
				if (a.offsetParent) do c.left += a.offsetLeft,
				c.top += a.offsetTop;
				while (a = a.offsetParent);
				return c
			},
			isActive: function (a)
			{
				return a === document.activeElement &&
					(a.type || a.href)
			}
		};
	return h
}), define("dat/controllers/Controller", [
		"dat/utils/common", "dat/dom/dom"
], function (a, b)
{
	var c = function (a, b)
	{
		this.initialValue = a[b], this.domElement =
			document.createElement("div"), this.object =
			a, this.property = b, this.__onChange =
			undefined, this.__onFinishChange =
			undefined
	};
	return a.extend(c.prototype,
	{
		onChange: function (a)
		{
			return this.__onChange = a, this
		},
		onFinishChange: function (a)
		{
			return this.__onFinishChange = a,
			this
		},
		setValue: function (a, b)
		{
			return b || (this.object[this.property] =
				a), this.__onChange && this.__onChange
				.call(this, a), this.updateDisplay(),
			this
		},
		getValue: function ()
		{
			return this.object[this.property]
		},
		updateDisplay: function ()
		{
			return this
		},
		isModified: function ()
		{
			return this.initialValue !== this.getValue()
		}
	}), c
}), define(
	"dat/controllers/StringController", [
		"dat/controllers/Controller",
		"dat/dom/dom", "dat/utils/common"
], function (a, b, c)
{
	var d = function (a, c)
	{
		function f()
		{
			e.setValue(alphabet)
		}

		function g()
		{
			e.__onFinishChange && e.__onFinishChange
				.call(e, e.getValue())
		}
		d.superclass.call(this, a, c);
		var e = this;
		this.__input = document.createElement("input"), this.__input.setAttribute("type", "text"), b.bind(this.__input,
			"keyup", f), b.bind(window,
			"mousemove", f), b.bind(this.__input,
			"blur", g), b.bind(this.__input,
			"keydown", function (a)
		{
			a.keyCode === 13 && this.blur()
		}), this.updateDisplay(), this.domElement
			.appendChild(this.__input)
	};
	return d.superclass = a, c.extend(d.prototype,
		a.prototype,
	{
		updateDisplay: function ()
		{
			return b.isActive(this.__input) || (
				this.__input.value = this.getValue()),
			d.superclass.prototype.updateDisplay
				.call(this)
		}
	}), d
}), define(
	"dat/controllers/NumberController", [
		"dat/controllers/Controller",
		"dat/utils/common"
], function (a, b)
{
	function d(a)
	{
		return a = a.toString(), a.indexOf(
			".") > -1 ? a.length - a.indexOf(".") -
			1 : 0
	}
	var c = function (a, e, f)
	{
		c.superclass.call(this, a, e), f = f || {},
		this.__min = f.min, this.__max = f.max,
		this.__step = f.step, b.isUndefined(
			this.__step) ? this.initialValue ==
			0 ? this.__impliedStep = 1 : this.__impliedStep =
			Math.pow(10, Math.floor(Math.log(
			this.initialValue) / Math.LN10)) /
			10 : this.__impliedStep = this.__step,
		this.__precision = d(this.__impliedStep)
	};
	return c.superclass = a, b.extend(c.prototype,
		a.prototype,
	{
		setValue: function (a)
		{
			return this.__min !== undefined && a <
				this.__min ? a = this.__min : this.__max !==
				undefined && a > this.__max && (a =
				this.__max), this.__step !==
				undefined && a % this.__step != 0 &&
				(a = Math.round(a / this.__step) *
				this.__step), c.superclass.prototype
				.setValue.call(this, a)
		},
		min: function (a)
		{
			return this.__min = a, this
		},
		max: function (a)
		{
			return this.__max = a, this
		},
		step: function (a)
		{
			return this.__step = this.__impliedStep =
				a, this
		}
	}), c
}), define(
	"dat/controllers/BooleanController", [
		"dat/controllers/Controller",
		"dat/dom/dom", "dat/utils/common"
], function (a, b, c)
{
	var d = function (a, c)
	{
		function f()
		{
			e.setValue(!e.__prev)
		}
		d.superclass.call(this, a, c);
		var e = this;
		this.__prev = this.getValue(), this.__checkbox =
			document.createElement("input"),
		this.__checkbox.setAttribute("type",
			"checkbox"), b.bind(this.__checkbox,
			"change", f, !1), this.domElement.appendChild(
			this.__checkbox), this.updateDisplay()
	};
	return d.superclass = a, c.extend(d.prototype,
		a.prototype,
	{
		setValue: function (a)
		{
			var b = d.superclass.prototype.setValue
				.call(this, a);
			return this.__onFinishChange && this
				.__onFinishChange.call(this, this.getValue()),
			this.__prev = this.getValue(), b
		},
		updateDisplay: function ()
		{
			return this.getValue() === !0 ? (
				this.__checkbox.setAttribute(
				"checked", "checked"), this.__checkbox
				.checked = !0) : this.__checkbox.checked = !
				1, d.superclass.prototype.updateDisplay
				.call(this)
		}
	}), d
}), define(
	"dat/controllers/FunctionController", [
		"dat/controllers/Controller",
		"dat/dom/dom", "dat/utils/common"
], function (a, b, c)
{
	var d = function (a, c, e)
	{
		d.superclass.call(this, a, c);
		var f = this;
		this.__button = document.createElement(
			"div"), this.__button.innerHTML = e ===
			undefined ? "Fire" : e, b.bind(this.__button,
			"click", function (a)
		{
			return a.preventDefault(), f.fire(), !
				1
		}), b.addClass(this.__button,
			"button"), this.domElement.appendChild(
			this.__button)
	};
	return d.superclass = a, c.extend(d.prototype,
		a.prototype,
	{
		fire: function ()
		{
			this.__onChange && this.__onChange.call(
				this), this.__onFinishChange &&
				this.__onFinishChange.call(this,
				this.getValue()), this.getValue().call(
				this.object)
		}
	}), d
}), define(
	"dat/controllers/NumberControllerBox", [
		"dat/controllers/NumberController",
		"dat/dom/dom", "dat/utils/common"
], function (a, b, c)
{
	function e(a, b)
	{
		var c = Math.pow(10, b);
		return Math.round(a * c) / c
	}
	var d = function (a, e, f)
	{
		function i()
		{
			var a = parseFloat(g.__input.value);
			c.isNaN(a) || g.setValue(a)
		}

		function j()
		{
			i(), g.__onFinishChange && g.__onFinishChange
				.call(g, g.getValue())
		}

		function k(a)
		{
			b.bind(window, "mousemove", l), b.bind(
				window, "mouseup", m), h = a.clientY
		}

		function l(a)
		{
			var b = h - a.clientY;
			g.setValue(g.getValue() + b * g.__impliedStep),
			h = a.clientY
		}

		function m()
		{
			b.unbind(window, "mousemove", l), b.unbind(
				window, "mouseup", m)
		}
		this.__truncationSuspended = !1, d.superclass
			.call(this, a, e, f);
		var g = this,
			h;
		this.__input = document.createElement(
			"input"), this.__input.setAttribute(
			"type", "text"), b.bind(this.__input,
			"change", i), b.bind(this.__input,
			"blur", j), b.bind(this.__input,
			"mousedown", k), b.bind(this.__input,
			"keydown", function (a)
		{
			a.keyCode === 13 && (g.__truncationSuspended = !
				0, j(), g.__truncationSuspended = !
				1)
		}), this.updateDisplay(), this.domElement
			.appendChild(this.__input)
	};
	return d.superclass = a, c.extend(d.prototype,
		a.prototype,
	{
		updateDisplay: function ()
		{
			return this.__input.value = this.__truncationSuspended ?
				this.getValue() : e(this.getValue(),
				this.__precision), d.superclass.prototype
				.updateDisplay.call(this)
		}
	}), d
}), define(
	"dat/controllers/NumberControllerSlider", [
		"dat/controllers/NumberController",
		"dat/dom/dom", "dat/utils/css",
		"dat/utils/common",
		"text!dat/controllers/NumberControllerSlider.css"
], function (a, b, c, d, e)
{
	function g(a, b, c, d, e)
	{
		return d + (e - d) * ((a - b) / (c -
			b))
	}
	var f = function (a, c, d, e, h, i, j)
	{
		function l(a)
		{
			b.bind(window, "mousemove", m), b.bind(
				window, "mouseup", n), m(a)
		}

		function m(a)
		{
			a.preventDefault();
			var c = b.getOffset(k.__background),
				d = b.getWidth(k.__background);
			k.__normalized = g(a.clientX, c.left,
				c.left + d, 0, 1);
			var e = k.__curve(k.__normalized);
			return k.setValue(g(e, 0, 1, k.__min,
				k.__max)), !1
		}

		function n()
		{
			b.unbind(window, "mousemove", m), b.unbind(
				window, "mouseup", n), k.__onFinishChange &&
				k.__onFinishChange.call(k, k.getValue())
		}
		f.superclass.call(this, a, c,
		{
			min: d,
			max: e,
			step: h
		});
		var k = this;
		this.__background = document.createElement(
			"div"), this.__foreground = document
			.createElement("div"), this.__curve =
			i || function (a)
		{
			return a
		}, this.__invCurve = j || function (a)
		{
			return a
		}, b.bind(this.__background,
			"mousedown", l), b.addClass(this.__background,
			"slider"), b.addClass(this.__foreground,
			"slider-fg"), this.updateDisplay(),
		this.__background.appendChild(this.__foreground),
		this.domElement.appendChild(this.__background)
	};
	return f.superclass = a, f.useDefaultStyles = function ()
	{
		c.inject(e)
	}, d.extend(f.prototype, a.prototype,
	{
		updateDisplay: function ()
		{
			var a = (this.getValue() - this.__min) /
				(this.__max - this.__min);
			return this.__foreground.style.width =
				this.__invCurve(a) * 100 + "%", f.superclass
				.prototype.updateDisplay.call(this)
		},
		curve: function (a, b)
		{
			return this.__curve = a, this.__invCurve =
				b, this
		}
	}), f
}), define(
	"dat/controllers/OptionController", [
		"dat/controllers/Controller",
		"dat/dom/dom", "dat/utils/common"
], function (a, b, c)
{
	var d = function (a, e, f)
	{
		d.superclass.call(this, a, e);
		var g = this;
		this.__select = document.createElement(
			"select");
		if (c.isArray(f))
		{
			var h = {};
			c.each(f, function (a)
			{
				h[a] = a
			}), f = h
		}
		c.each(f, function (a, b)
		{
			var c = document.createElement(
				"option");
			c.innerHTML = b, c.setAttribute(
				"value", a), g.__select.appendChild(
				c)
		}), this.updateDisplay(), b.bind(this
			.__select, "change", function ()
		{
			var a = this.options[this.selectedIndex]
				.value;
			g.setValue(a)
		}), this.domElement.appendChild(this.__select)
	};
	return d.superclass = a, c.extend(d.prototype,
		a.prototype,
	{
		setValue: function (a)
		{
			var b = d.superclass.prototype.setValue
				.call(this, a);
			return this.__onFinishChange && this
				.__onFinishChange.call(this, this.getValue()),
			b
		},
		updateDisplay: function ()
		{
			return this.__select.value = this.getValue(),
			d.superclass.prototype.updateDisplay
				.call(this)
		}
	}), d
}), define("dat/controllers/factory", [
		"dat/controllers/OptionController",
		"dat/controllers/NumberControllerBox",
		"dat/controllers/NumberControllerSlider",
		"dat/controllers/StringController",
		"dat/controllers/FunctionController",
		"dat/controllers/BooleanController",
		"dat/utils/common"
], function (a, b, c, d, e, f, g)
{
	return function (h, i)
	{
		var j = h[i];
		if (g.isArray(arguments[2]) || g.isObject(
			arguments[2])) return new a(h, i,
				arguments[2]);
		if (g.isNumber(j)) return g.isNumber(
				arguments[2]) && g.isNumber(
				arguments[3]) ? new c(h, i,
				arguments[2], arguments[3],
				arguments[4], arguments[5],
				arguments[6]) : new b(h, i,
			{
				min: arguments[2],
				max: arguments[3]
			});
		if (g.isString(j)) return new d(h, i);
		if (g.isFunction(j)) return new e(h,
				i, "");
		if (g.isBoolean(j)) return new f(h, i)
	}
}), define(
	"dat/controllers/TinkerController", [
		"dat/controllers/Controller",
		"dat/dom/dom", "dat/utils/common"
], function (Controller, dom, common)
{
	var TinkerController = function (
		object, property, text)
	{
		TinkerController.superclass.call(this,
			object, property);
		var _this = this;
		this.__textarea = document.createElement(
			"textarea"), this.__textarea.innerHTML =
			this.getValue(), dom.bind(this.__textarea,
			"keyup", function (e)
		{
			var fnc;
			try
			{
				fnc = eval("(" + this.value + ")"),
				_this.setValue(fnc)
			}
			catch (e)
			{
				throw e
			}
		}), this.domElement.appendChild(this.__textarea)
	};
	return TinkerController.superclass =
		Controller, common.extend(
		TinkerController.prototype,
		Controller.prototype,
	{}),
	TinkerController
}), define("dat/utils/utils", [], function ()
{
	var a = {
		unescape: function (a)
		{
			return ("" + a).replace(/&amp;/g,
				"&").replace(/&lt;/g, "<").replace(
				/&gt;/g, ">").replace(/&quot;/g,
				'"').replace(/&#x27;/g, "'").replace(
				/&#x2F;/g, "/")
		},
		sign: function (a)
		{
			return a < 0 ? -1 : 1
		},
		lerp: function (a, b, c)
		{
			return (b - a) * c + a
		},
		map: function (a, b, c, d, e)
		{
			return d + (e - d) * ((a - b) / (c -
				b))
		},
		cmap: function (b, c, d, e, f)
		{
			return a.clamp(e + (f - e) * (b - c) /
				(d - c), e, f)
		},
		wrap: function (a, b)
		{
			while (a < 0) a += b;
			return a % b
		},
		cap: function (b, c)
		{
			return Math.abs(b) > c ? a.sign(b) *
				c : b
		},
		dist: function (a, b, c, d)
		{
			return Math.sqrt((a - c) * (a - c) +
				(b - d) * (b - d))
		},
		clamp: function (a, b, c)
		{
			return Math.max(Math.min(a, c), b)
		},
		roundToDecimal: function (a, b)
		{
			var c = Math.pow(10, b);
			return Math.round(a * c) / c
		},
		random: function ()
		{
			if (arguments.length == 0) return Math
					.random();
			if (arguments.length == 1)
			{
				if (typeof arguments[0] == "number")
					return random() * arguments[0];
				if (typeof arguments[0] == "array")
					return arguments[0][Math.floor(
							random(arguments[0].length))]
			}
			else if (arguments.length == 2)
				return lerp(arguments[0], arguments[
					1], random())
		},
		clone: function (a)
		{
			if (a == null || typeof a !=
				"object") return a;
			var b = a.constructor();
			for (var c in a) b[c] = clone(a[c]);
			return b
		},
		bezier: function (a, b, c, d, e)
		{
			var f = 1 - e;
			return a * f * f * f + 3 * b * e * f *
				f + 3 * c * e * e * f + d * e * e *
				e
		},
		commaify: function (a, b)
		{
			b || (b = 3);
			var a = a.toString().split("").reverse()
				.join(""),
				c = "",
				d = 0;
			for (var e = 0; e < a.length; e++)
			{
				var f = a.charAt(e);
				d > b - 1 ? (d = 0, c += ",") : d++,
				c += f
			}
			return c.split("").reverse().join("")
		},
		makeUnselectable: function (a)
		{
			if (a == undefined || a.style ==
				undefined) return;
			a.onselectstart = function ()
			{
				return !1
			}, a.style.MozUserSelect = "none", a
				.style.KhtmlUserSelect = "none", a.unselectable =
				"on";
			var b = a.childNodes,
				c = b.length;
			for (var d = 0; d < c; d++) this.makeUnselectable(
					b[d])
		},
		makeSelectable: function (a)
		{
			if (a == undefined || a.style ==
				undefined) return;
			a.onselectstart = function ()
			{}, a.style
				.MozUserSelect = "auto", a.style.KhtmlUserSelect =
				"auto", a.unselectable = "off";
			var b = a.childNodes,
				c = b.length;
			for (var d = 0; d < c; d++) this.makeSelectable(
					b[d])
		},
		shuffle: function (a)
		{
			for (var b, c, d = a.length; d; b =
				parseInt(Math.random() * d), c = a[--
				d], a[d] = a[b], a[b] = c);
			return a
		}
	};
	return a
}), define("dat/color/Color", [
		"dat/color/interpret",
		"dat/color/math",
		"dat/color/toString",
		"dat/utils/common", "dat/utils/utils"
], function (a, b, c, d, e)
{
	function g(a, b, c)
	{
		Object.defineProperty(a, b,
		{
			get: function ()
			{
				return this.__state.space === "RGB" ?
					this.__state[b] : (i(this, b, c),
					this.__state[b])
			},
			set: function (a)
			{
				this.__state.space !== "RGB" && (i(
					this, b, c), this.__state.space =
					"RGB"), this.__state[b] = a
			}
		})
	}

	function h(a, b)
	{
		Object.defineProperty(a, b,
		{
			get: function ()
			{
				return this.__state.space === "HSV" ?
					this.__state[b] : (j(this), this.__state[
					b])
			},
			set: function (a)
			{
				this.__state.space !== "HSV" && (j(
					this), this.__state.space = "HSV"),
				this.__state[b] = a
			}
		})
	}

	function i(a, c, e)
	{
		if (a.__state.space === "HEX") a.__state[
				c] = b.component_from_hex(a.__state
				.hex, e);
		else if (a.__state.space === "HSV") d
				.extend(a.__state, b.hsv_to_rgb(a.__state
				.h, a.__state.s, a.__state.v));
		else throw "Corrupted color state"
	}

	function j(a)
	{
		var c = b.rgb_to_hsv(a.r, a.g, a.b);
		d.extend(a.__state,
		{
			s: c.s,
			v: c.v
		}), d.isNaN(c.h) ? d.isUndefined(a.__state
			.h) && (a.__state.h = 0) : a.__state
			.h = c.h
	}
	var f = function ()
	{
		this.__state = a.apply(this,
			arguments);
		if (this.__state === !1) throw "Failed to interpret color arguments";
		this.__state.a = this.__state.a || 1
	};
	return f.lerp_rgb = function (a, b, c)
	{
		return new f(e.lerp(a.r, b.r, c), e.lerp(
			a.g, b.g, c), e.lerp(a.b, b.b, c), e
			.lerp(a.a, b.a, c))
	}, f.lerp_hsv = function (a, b, c)
	{
		return new f(
		{
			h: e.lerp(a.h, b.h, c),
			s: e.lerp(a.s, b.s, c),
			v: e.lerp(a.v, b.v, c),
			a: e.lerp(a.a, b.a, c)
		})
	}, f.lerp = f.lerp_rgb, f.inverse = function (
		a)
	{
		return new f(255 - a.r, 255 - a.g,
			255 - a.b)
	}, f.mix = function (a)
	{
		arguments.length > 1 && (a =
			arguments);
		var b = 0,
			c = 0,
			d = 0,
			e = 0,
			g = a.length;
		for (var h = 0; h < g; h++) b += a[h]
				.r, c += a[h].g, d += a[h].b, e +=
				a[h].a;
		return b /= g, c /= g, d /= g, e /= g,
		new f(b, c, d, e)
	}, f.random = function ()
	{
		return new f(Math.random() * 255,
			Math.random() * 255, Math.random() *
			255)
	}, f.COMPONENTS = ["r", "g", "b", "h",
			"s", "v", "hex", "a"
	], d.extend(f.prototype,
	{
		set: function (a)
		{
			d.extend(this.__state, a.__state)
		},
		toString: function ()
		{
			return c(this)
		},
		toOriginal: function (a)
		{
			return this.__state.conversion.write(
				this, a)
		}
	}), g(f.prototype, "r", 2), g(f.prototype,
		"g", 1), g(f.prototype, "b", 0), h(f.prototype,
		"h"), h(f.prototype, "s"), h(f.prototype,
		"v"), Object.defineProperty(f.prototype,
		"a",
	{
		get: function ()
		{
			return this.__state.a
		},
		set: function (a)
		{
			this.__state.a = a
		}
	}), Object.defineProperty(f.prototype,
		"hex",
	{
		get: function ()
		{
			return !this.__state.space !== "HEX" &&
				(this.__state.hex = b.rgb_to_hex(
				this.r, this.g, this.b)), this.__state
				.hex
		},
		set: function (a)
		{
			this.__state.space = "HEX", this.__state
				.hex = a
		}
	}), f
}), define(
	"dat/controllers/ColorController", [
		"dat/controllers/Controller",
		"dat/dom/dom", "dat/color/Color",
		"dat/color/interpret",
		"dat/utils/common"
], function (a, b, c, d, e)
{
	function g()
	{
		this.setValue(this.__color.toOriginal(
			this.getValue()), !0)
	}

	function i(a, b, c, d)
	{
		a.style.background = "", e.each(h, function (
			e)
		{
			a.style.cssText += "background: " +
				e + "linear-gradient(" + b + ", " +
				c + " 0%, " + d + " 100%); "
		})
	}

	function j(a)
	{
		a.style.background = "", a.style.cssText +=
			"background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",
		a.style.cssText +=
			"background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",
		a.style.cssText +=
			"background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",
		a.style.cssText +=
			"background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",
		a.style.cssText +=
			"background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"
	}
	var f = function (a, h, k)
	{
		function o(a)
		{
			s(a), b.bind(window, "mousemove", s),
			b.bind(window, "mouseup", p)
		}

		function p()
		{
			b.unbind(window, "mousemove", s), b.unbind(
				window, "mouseup", p)
		}

		function q()
		{
			var a = d(this.value);
			a !== !1 ? (m.__color.__state = a, m
				.setValue(m.__color)) : this.value =
				m.__color.toString(), m.__onFinishChange(
				m.getValue())
		}

		function r()
		{
			b.unbind(window, "mousemove", t), b.unbind(
				window, "mouseup", r)
		}

		function s(a)
		{
			a.preventDefault();
			var c = b.getWidth(m.__saturation_field),
				d = b.getHeight(m.__saturation_field),
				e = b.getOffset(m.__saturation_field),
				f = (a.clientX - e.left + document.body
					.scrollLeft) / c,
				h = 1 - (a.clientY - e.top +
					document.body.scrollTop) / d;
			return h > 1 ? h = 1 : h < 0 && (h =
				0), f > 1 ? f = 1 : f < 0 && (f = 0),
			m.__color.v = h, m.__color.s = f, g
				.call(m), !1
		}

		function t(a)
		{
			a.preventDefault();
			var c = b.getHeight(m.__hue_field),
				d = b.getOffset(m.__hue_field),
				e = 1 - (a.clientY - d.top +
					document.body.scrollTop) / c;
			return e > 1 ? e = 1 : e < 0 && (e =
				0), m.__color.h = e * 360, g.call(m), !
				1
		}
		f.superclass.call(this, a, h);
		var l = this.getValue();
		k = k || {}, this.__byRef = e.isObject(
			l) || e.isArray(l), this.__color =
			new c(l), this.__temp = new c(0),
		this.__height = k.height || 100,
		this.__width = k.width || 100;
		var m = this;
		this.domElement = document.createElement(
			"div"), b.makeSelectable(this.domElement, !
			1), this.__selector = document.createElement(
			"div"), this.__selector.className =
			"selector", this.__saturation_field =
			document.createElement("div"), this.__saturation_field
			.className = "saturation-field",
		this.__field_knob = document.createElement(
			"div"), this.__field_knob.className =
			"field-knob", this.__field_knob_border =
			"2px solid ", this.__hue_knob =
			document.createElement("div"), this.__hue_knob
			.className = "hue-knob", this.__hue_field =
			document.createElement("div"), this.__hue_field
			.className = "hue-field", this.__input =
			document.createElement("input"),
		this.__input.type = "text", this.__input_textShadow =
			"0 1px 1px ", b.bind(this.__input,
			"keydown", function (a)
		{
			a.keyCode === 13 && q.call(this)
		}), b.bind(this.__input, "blur", q),
		b.bind(this.__selector, "mousedown", function (
			a)
		{
			var c = function (a)
			{
				b.removeClass(m.__selector, "drag"),
				m.__onFinishChange(m.getValue()),
				b.unbind(window, "mouseup", c)
			};
			b.addClass(this, "drag").bind(window,
				"mouseup", c)
		});
		var n = document.createElement("div");
		e.extend(this.__selector.style,
		{
			width: this.__width + 22 + "px",
			height: this.__height + 2 + "px",
			padding: "3px",
			backgroundColor: "#222",
			boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
		}), e.extend(this.__field_knob.style,
		{
			position: "absolute",
			width: "12px",
			height: "12px",
			border: this.__field_knob_border + (
				this.__color.v < .5 ? "#fff" :
				"#000"),
			boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
			borderRadius: "12px",
			zIndex: 1
		}), e.extend(this.__hue_knob.style,
		{
			position: "absolute",
			width: "15px",
			height: "2px",
			borderRight: "4px solid #fff",
			zIndex: 1
		}), e.extend(this.__saturation_field.style,
		{
			width: this.__width + "px",
			height: this.__height + "px",
			border: "1px solid #555",
			marginRight: "3px",
			display: "inline-block",
			cursor: "pointer"
		}), e.extend(n.style,
		{
			width: "100%",
			height: "100%",
			background: "none"
		}), i(n, "top", "rgba(0,0,0,0)",
			"#000"), e.extend(this.__hue_field.style,
		{
			width: "15px",
			height: this.__height + "px",
			display: "inline-block",
			border: "1px solid #555",
			cursor: "ns-resize"
		}), j(this.__hue_field), e.extend(
			this.__input.style,
		{
			outline: "none",
			textAlign: "center",
			color: "#fff",
			border: 0,
			fontWeight: "bold",
			textShadow: this.__input_textShadow + "rgba(0,0,0,0.7)"
		}), b.bind(this.__saturation_field,
			"mousedown", o), b.bind(this.__field_knob,
			"mousedown", o), b.bind(this.__hue_field,
			"mousedown", function (a)
		{
			t(a), b.bind(window, "mousemove", t),
			b.bind(window, "mouseup", r)
		}), this.__saturation_field.appendChild(
			n), this.__selector.appendChild(this
			.__field_knob), this.__selector.appendChild(
			this.__saturation_field), this.__selector
			.appendChild(this.__hue_field), this
			.__hue_field.appendChild(this.__hue_knob),
		this.domElement.appendChild(this.__input),
		this.domElement.appendChild(this.__selector),
		this.updateDisplay()
	};
	f.superclass = a, e.extend(f.prototype,
		a.prototype,
	{
		updateDisplay: function ()
		{
			var a = this.getValue();
			if (e.isUndefined(a)) return this;
			var d = new c(a);
			if (d !== !1)
			{
				var f = !1;
				e.each(c.COMPONENTS, function (a)
				{
					if (!e.isUndefined(d[a]) && !e.isUndefined(
						this.__color.__state[a]) && d[a] !==
						this.__color.__state[a]) return f = !
							0,
						{}
				}, this), f && e.extend(this.__color
					.__state, d)
			}
			e.extend(this.__temp.__state, this.__color
				.__state), this.__temp.a = 1;
			var g = this.__color.v < .5 || this.__color
				.s > .5 ? 255 : 0,
				h = 255 - g,
				j = b.getHeight(this.__field_knob) /
					2;
			e.extend(this.__field_knob.style,
			{
				marginLeft: this.__width * this.__color
					.s - j + "px",
				marginTop: Math.round(this.__height *
					(1 - this.__color.v) - j) + "px",
				backgroundColor: this.__temp.toString(),
				borderColor: "rgb(" + g + "," + g + "," + g + ")"
			}), j = b.getHeight(this.__hue_knob) /
				2 + 1;
			var k = new c(this.__color.r, this.__color
				.g, this.__color.b);
			k.s = k.v = 1, k.h = this.__color.h,
			e.extend(this.__hue_knob.style,
			{
				backgroundColor: k.toString(),
				marginTop: Math.round(this.__height *
					(1 - this.__color.h / 360) - j) + "px"
			}), this.__temp.s = 1, this.__temp.v =
				1, i(this.__saturation_field,
				"left", "#fff", this.__temp.toString()),
			e.extend(this.__input.style,
			{
				backgroundColor: this.__input.value = this
					.__color.toString(),
				color: "rgb(" + g + "," + g + "," + g + ")",
				textShadow: this.__input_textShadow + "rgba(" + h + "," + h + "," + h + ",.7)"
			})
		}
	});
	var h = ["-moz-", "-o-", "-webkit-",
			"-ms-", ""
	];
	return f
}),

function ()
{
	var a = this,
		b = a._,
		c = {}, d = Array.prototype,
		e = Object.prototype,
		f = Function.prototype,
		g = d.slice,
		h = d.unshift,
		i = e.toString,
		j = e.hasOwnProperty,
		k = d.forEach,
		l = d.map,
		m = d.reduce,
		n = d.reduceRight,
		o = d.filter,
		p = d.every,
		q = d.some,
		r = d.indexOf,
		s = d.lastIndexOf,
		t = Array.isArray,
		u = Object.keys,
		v = f.bind,
		w = function (a)
		{
			return new B(a)
		};
	typeof module != "undefined" && module
		.exports ? (module.exports = w, w._ =
		w) : a._ = w, w.VERSION = "1.1.7";
	var x = w.each = w.forEach = function (
		a, b, d)
	{
		if (a == null) return;
		if (k && a.forEach === k) a.forEach(b,
				d);
		else if (a.length === +a.length)
		{
			for (var e = 0, f = a.length; e < f; e++)
				if (e in a && b.call(d, a[e], e, a) ===
					c) return
		}
		else for (var g in a) if (j.call(a,
					g) && b.call(d, a[g], g, a) === c)
					return
	};
	w.map = function (a, b, c)
	{
		var d = [];
		return a == null ? d : l && a.map ===
			l ? a.map(b, c) : (x(a, function (a,
			e, f)
		{
			d[d.length] = b.call(c, a, e, f)
		}), d)
	}, w.reduce = w.foldl = w.inject = function (
		a, b, c, d)
	{
		var e = c !== void 0;
		a == null && (a = []);
		if (m && a.reduce === m) return d &&
				(b = w.bind(b, d)), e ? a.reduce(b,
				c) : a.reduce(b);
		x(a, function (a, f, g)
		{
			e ? c = b.call(d, c, a, f, g) : (c =
				a, e = !0)
		});
		if (!e) throw new TypeError(
				"Reduce of empty array with no initial value");
		return c
	}, w.reduceRight = w.foldr = function (
		a, b, c, d)
	{
		a == null && (a = []);
		if (n && a.reduceRight === n) return d &&
				(b = w.bind(b, d)), c !== void 0 ?
				a.reduceRight(b, c) : a.reduceRight(
				b);
		var e = (w.isArray(a) ? a.slice() : w
			.toArray(a)).reverse();
		return w.reduce(e, b, c, d)
	}, w.find = w.detect = function (a, b,
		c)
	{
		var d;
		return y(a, function (a, e, f)
		{
			if (b.call(c, a, e, f)) return d = a, !
					0
		}), d
	}, w.filter = w.select = function (a,
		b, c)
	{
		var d = [];
		return a == null ? d : o && a.filter ===
			o ? a.filter(b, c) : (x(a, function (
			a, e, f)
		{
			b.call(c, a, e, f) && (d[d.length] =
				a)
		}), d)
	}, w.reject = function (a, b, c)
	{
		var d = [];
		return a == null ? d : (x(a, function (
			a, e, f)
		{
			b.call(c, a, e, f) || (d[d.length] =
				a)
		}), d)
	}, w.every = w.all = function (a, b, d)
	{
		var e = !0;
		return a == null ? e : p && a.every ===
			p ? a.every(b, d) : (x(a, function (
			a, f, g)
		{
			if (!(e = e && b.call(d, a, f, g)))
				return c
		}), e)
	};
	var y = w.some = w.any = function (a,
		b, d)
	{
		b = b || w.identity;
		var e = !1;
		return a == null ? e : q && a.some ===
			q ? a.some(b, d) : (x(a, function (a,
			f, g)
		{
			if (e |= b.call(d, a, f, g)) return c
		}), !! e)
	};
	w.include = w.contains = function (a,
		b)
	{
		var c = !1;
		return a == null ? c : r && a.indexOf ===
			r ? a.indexOf(b) != -1 : (y(a, function (
			a)
		{
			if (c = a === b) return !0
		}), c)
	}, w.invoke = function (a, b)
	{
		var c = g.call(arguments, 2);
		return w.map(a, function (a)
		{
			return (b.call ? b || a : a[b]).apply(
				a, c)
		})
	}, w.pluck = function (a, b)
	{
		return w.map(a, function (a)
		{
			return a[b]
		})
	}, w.max = function (a, b, c)
	{
		if (!b && w.isArray(a)) return Math.max
				.apply(Math, a);
		var d = {
			computed: -Infinity
		};
		return x(a, function (a, e, f)
		{
			var g = b ? b.call(c, a, e, f) : a;
			g >= d.computed && (d = {
				value: a,
				computed: g
			})
		}), d.value
	}, w.min = function (a, b, c)
	{
		if (!b && w.isArray(a)) return Math.min
				.apply(Math, a);
		var d = {
			computed: Infinity
		};
		return x(a, function (a, e, f)
		{
			var g = b ? b.call(c, a, e, f) : a;
			g < d.computed && (d = {
				value: a,
				computed: g
			})
		}), d.value
	}, w.sortBy = function (a, b, c)
	{
		return w.pluck(w.map(a, function (a,
			d, e)
		{
			return {
				value: a,
				criteria: b.call(c, a, d, e)
			}
		}).sort(function (a, b)
		{
			var c = a.criteria,
				d = b.criteria;
			return c < d ? -1 : c > d ? 1 : 0
		}), "value")
	}, w.groupBy = function (a, b)
	{
		var c = {};
		return x(a, function (a, d)
		{
			var e = b(a, d);
			(c[e] || (c[e] = [])).push(a)
		}), c
	}, w.sortedIndex = function (a, b, c)
	{
		c || (c = w.identity);
		var d = 0,
			e = a.length;
		while (d < e)
		{
			var f = d + e >> 1;
			c(a[f]) < c(b) ? d = f + 1 : e = f
		}
		return d
	}, w.toArray = function (a)
	{
		return a ? a.toArray ? a.toArray() :
			w.isArray(a) ? g.call(a) : w.isArguments(
			a) ? g.call(a) : w.values(a) : []
	}, w.size = function (a)
	{
		return w.toArray(a).length
	}, w.first = w.head = function (a, b,
		c)
	{
		return b != null && !c ? g.call(a, 0,
			b) : a[0]
	}, w.rest = w.tail = function (a, b, c)
	{
		return g.call(a, b == null || c ? 1 :
			b)
	}, w.last = function (a)
	{
		return a[a.length - 1]
	}, w.compact = function (a)
	{
		return w.filter(a, function (a)
		{
			return !!a
		})
	}, w.flatten = function (a)
	{
		return w.reduce(a, function (a, b)
		{
			return w.isArray(b) ? a.concat(w.flatten(
				b)) : (a[a.length] = b, a)
		}, [])
	}, w.without = function (a)
	{
		return w.difference(a, g.call(
			arguments, 1))
	}, w.uniq = w.unique = function (a, b)
	{
		return w.reduce(a, function (a, c, d)
		{
			if (0 == d || (b === !0 ? w.last(a) !=
				c : !w.include(a, c))) a[a.length] =
					c;
			return a
		}, [])
	}, w.union = function ()
	{
		return w.uniq(w.flatten(arguments))
	}, w.intersection = w.intersect = function (
		a)
	{
		var b = g.call(arguments, 1);
		return w.filter(w.uniq(a), function (
			a)
		{
			return w.every(b, function (b)
			{
				return w.indexOf(b, a) >= 0
			})
		})
	}, w.difference = function (a, b)
	{
		return w.filter(a, function (a)
		{
			return !w.include(b, a)
		})
	}, w.zip = function ()
	{
		var a = g.call(arguments),
			b = w.max(w.pluck(a, "length")),
			c = new Array(b);
		for (var d = 0; d < b; d++) c[d] = w.pluck(
				a, "" + d);
		return c
	}, w.indexOf = function (a, b, c)
	{
		if (a == null) return -1;
		var d, e;
		if (c) return d = w.sortedIndex(a, b),
		a[d] === b ? d : -1;
		if (r && a.indexOf === r) return a.indexOf(
				b);
		for (d = 0, e = a.length; d < e; d++)
			if (a[d] === b) return d;
		return -1
	}, w.lastIndexOf = function (a, b)
	{
		if (a == null) return -1;
		if (s && a.lastIndexOf === s) return a
				.lastIndexOf(b);
		var c = a.length;
		while (c--) if (a[c] === b) return c;
		return -1
	}, w.range = function (a, b, c)
	{
		arguments.length <= 1 && (b = a || 0,
			a = 0), c = arguments[2] || 1;
		var d = Math.max(Math.ceil((b - a) /
			c), 0),
			e = 0,
			f = new Array(d);
		while (e < d) f[e++] = a, a += c;
		return f
	}, w.bind = function (a, b)
	{
		if (a.bind === v && v) return v.apply(
				a, g.call(arguments, 1));
		var c = g.call(arguments, 2);
		return function ()
		{
			return a.apply(b, c.concat(g.call(
				arguments)))
		}
	}, w.bindAll = function (a)
	{
		var b = g.call(arguments, 1);
		return b.length == 0 && (b = w.functions(
			a)), x(b, function (b)
		{
			a[b] = w.bind(a[b], a)
		}), a
	}, w.memoize = function (a, b)
	{
		var c = {};
		return b || (b = w.identity),

		function ()
		{
			var d = b.apply(this, arguments);
			return j.call(c, d) ? c[d] : c[d] =
				a.apply(this, arguments)
		}
	}, w.delay = function (a, b)
	{
		var c = g.call(arguments, 2);
		return setTimeout(function ()
		{
			return a.apply(a, c)
		}, b)
	}, w.defer = function (a)
	{
		return w.delay.apply(w, [a, 1].concat(
			g.call(arguments, 1)))
	};
	var z = function (a, b, c)
	{
		var d;
		return function ()
		{
			var e = this,
				f = arguments,
				g = function ()
				{
					d = null, a.apply(e, f)
				};
			c && clearTimeout(d);
			if (c || !d) d = setTimeout(g, b)
		}
	};
	w.throttle = function (a, b)
	{
		return z(a, b, !1)
	}, w.debounce = function (a, b)
	{
		return z(a, b, !0)
	}, w.once = function (a)
	{
		var b = !1,
			c;
		return function ()
		{
			return b ? c : (b = !0, c = a.apply(
				this, arguments))
		}
	}, w.wrap = function (a, b)
	{
		return function ()
		{
			var c = [a].concat(g.call(arguments));
			return b.apply(this, c)
		}
	}, w.compose = function ()
	{
		var a = g.call(arguments);
		return function ()
		{
			var b = g.call(arguments);
			for (var c = a.length - 1; c >= 0; c--)
				b = [a[c].apply(this, b)];
			return b[0]
		}
	}, w.after = function (a, b)
	{
		return function ()
		{
			if (--a < 1) return b.apply(this,
					arguments)
		}
	}, w.keys = u || function (a)
	{
		if (a !== Object(a)) throw new TypeError(
				"Invalid object");
		var b = [];
		for (var c in a) j.call(a, c) && (b[b
				.length] = c);
		return b
	}, w.values = function (a)
	{
		return w.map(a, w.identity)
	}, w.functions = w.methods = function (
		a)
	{
		var b = [];
		for (var c in a) w.isFunction(a[c]) &&
				b.push(c);
		return b.sort()
	}, w.extend = function (a)
	{
		return x(g.call(arguments, 1), function (
			b)
		{
			for (var c in b) b[c] !== void 0 &&
					(a[c] = b[c])
		}), a
	}, w.defaults = function (a)
	{
		return x(g.call(arguments, 1), function (
			b)
		{
			for (var c in b) a[c] == null && (a[
					c] = b[c])
		}), a
	}, w.clone = function (a)
	{
		return w.isArray(a) ? a.slice() : w.extend(
		{},
			a)
	}, w.tap = function (a, b)
	{
		return b(a), a
	}, w.isEqual = function (a, b)
	{
		if (a === b) return !0;
		var c = typeof a,
			d = typeof b;
		if (c != d) return !1;
		if (a == b) return !0;
		if (!a && b || a && !b) return !1;
		a._chain && (a = a._wrapped), b._chain &&
			(b = b._wrapped);
		if (a.isEqual) return a.isEqual(b);
		if (b.isEqual) return b.isEqual(a);
		if (w.isDate(a) && w.isDate(b)) return a
				.getTime() === b.getTime();
		if (w.isNaN(a) && w.isNaN(b)) return !
				1;
		if (w.isRegExp(a) && w.isRegExp(b))
			return a.source === b.source && a.global ===
				b.global && a.ignoreCase === b.ignoreCase &&
				a.multiline === b.multiline;
		if (c !== "object") return !1;
		if (a.length && a.length !== b.length)
			return !1;
		var e = w.keys(a),
			f = w.keys(b);
		if (e.length != f.length) return !1;
		for (var g in a) if (!(g in b) || !w.isEqual(
				a[g], b[g])) return !1;
		return !0
	}, w.isEmpty = function (a)
	{
		if (w.isArray(a) || w.isString(a))
			return a.length === 0;
		for (var b in a) if (j.call(a, b))
				return !1;
		return !0
	}, w.isElement = function (a)
	{
		return !!a && a.nodeType == 1
	}, w.isArray = t || function (a)
	{
		return i.call(a) === "[object Array]"
	}, w.isObject = function (a)
	{
		return a === Object(a)
	}, w.isArguments = function (a)
	{
		return !!a && !! j.call(a, "callee")
	}, w.isFunction = function (a)
	{
		return !!(a && a.constructor && a.call &&
			a.apply)
	}, w.isString = function (a)
	{
		return !!(a === "" || a && a.charCodeAt &&
			a.substr)
	}, w.isNumber = function (a)
	{
		return !!(a === 0 || a && a.toExponential &&
			a.toFixed)
	}, w.isNaN = function (a)
	{
		return a !== a
	}, w.isBoolean = function (a)
	{
		return a === !0 || a === !1
	}, w.isDate = function (a)
	{
		return !!(a && a.getTimezoneOffset &&
			a.setUTCFullYear)
	}, w.isRegExp = function (a)
	{
		return !(!(a && a.test && a.exec) || !
			a.ignoreCase && a.ignoreCase !== !1)
	}, w.isNull = function (a)
	{
		return a === null
	}, w.isUndefined = function (a)
	{
		return a === void 0
	}, w.noConflict = function ()
	{
		return a._ = b, this
	}, w.identity = function (a)
	{
		return a
	}, w.times = function (a, b, c)
	{
		for (var d = 0; d < a; d++) b.call(c,
				d)
	}, w.mixin = function (a)
	{
		x(w.functions(a), function (b)
		{
			D(b, w[b] = a[b])
		})
	};
	var A = 0;
	w.uniqueId = function (a)
	{
		var b = A++;
		return a ? a + b : b
	}, w.templateSettings = {
		evaluate: /<%([\s\S]+?)%>/g,
		interpolate: /<%=([\s\S]+?)%>/g
	}, w.template = function (a, b)
	{
		var c = w.templateSettings,
			d =
				"var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('" +
				a.replace(/\\/g, "\\\\").replace(
				/'/g, "\\'").replace(c.interpolate, function (
				a, b)
			{
				return "'," + b.replace(/\\'/g, "'") +
					",'"
			}).replace(c.evaluate || null, function (
				a, b)
			{
				return "');" + b.replace(/\\'/g,
					"'").replace(/[\r\n\t]/g, " ") +
					"__p.push('"
			}).replace(/\r/g, "\\r").replace(
				/\n/g, "\\n").replace(/\t/g, "\\t") +
				"');}return __p.join('');",
			e = new Function("obj", d);
		return b ? e(b) : e
	};
	var B = function (a)
	{
		this._wrapped = a
	};
	w.prototype = B.prototype;
	var C = function (a, b)
	{
		return b ? w(a).chain() : a
	}, D = function (a, b)
		{
			B.prototype[a] = function ()
			{
				var a = g.call(arguments);
				return h.call(a, this._wrapped), C(
					b.apply(w, a), this._chain)
			}
		};
	w.mixin(w), x(["pop", "push",
			"reverse", "shift", "sort", "splice",
			"unshift"
	], function (a)
	{
		var b = d[a];
		B.prototype[a] = function ()
		{
			return b.apply(this._wrapped,
				arguments), C(this._wrapped, this._chain)
		}
	}), x(["concat", "join", "slice"], function (
		a)
	{
		var b = d[a];
		B.prototype[a] = function ()
		{
			return C(b.apply(this._wrapped,
				arguments), this._chain)
		}
	}), B.prototype.chain = function ()
	{
		return this._chain = !0, this
	}, B.prototype.value = function ()
	{
		return this._wrapped
	}
}(), define("underscore", function ()
{}),
define("dat/dom/CenteredDiv", [
		"dat/dom/dom", "underscore"
], function (a)
{
	var b = 200,
		c = b / 1e3,
		d = function (b)
		{
			this.backgroundElement = document.createElement(
				"div"), _.extend(this.backgroundElement
				.style,
			{
				backgroundColor: "rgba(0,0,0,0.8)",
				top: 0,
				left: 0,
				display: "none",
				zIndex: "1000",
				opacity: 0,
				WebkitTransition: "opacity " + c + "s linear"
			}), a.makeFullscreen(this.backgroundElement),
			this.backgroundElement.style.position =
				"fixed", this.domElement = document
				.createElement("div"), _.extend(
				this.domElement.style,
			{
				position: "fixed",
				display: "none",
				zIndex: "1001",
				opacity: 0,
				WebkitTransition: "-webkit-transform 0.2s ease-out, opacity " + c + "s linear"
			}), this.__visible = !1, document.body
				.appendChild(this.backgroundElement),
			document.body.appendChild(this.domElement);
			var d = this;
			this.permanent = !! b, a.bind(this.backgroundElement,
				"click", function ()
			{
				d.permanent || d.hide()
			})
		};
	return d.prototype.show = function (a)
	{
		var c = this;
		return this.backgroundElement.style.display =
			"block", this.domElement.style.display =
			"block", this.domElement.style.opacity =
			0, this.domElement.style.webkitTransform =
			"scale(1.1)", this.layout(), _.defer(function ()
		{
			c.backgroundElement.style.opacity =
				1, c.domElement.style.opacity = 1,
			c.domElement.style.webkitTransform =
				"scale(1)"
		}), _.isFunction(a) && _.delay(function ()
		{
			a.call(c)
		}, b), this.__visible = !0, this
	}, d.prototype.hide = function (a)
	{
		var c = this;
		return _.delay(function ()
		{
			c.domElement.style.display = "none",
			c.backgroundElement.style.display =
				"none", _.isFunction(a) && a.call(c)
		}, b), this.backgroundElement.style.opacity =
			0, this.domElement.style.opacity = 0,
		this.domElement.style.webkitTransform =
			"scale(1.1)", this.__visible = !1,
		this
	}, d.prototype.layout = function ()
	{
		this.domElement.style.left = (a.getWidth(
			window) - a.getWidth(this.domElement)) /
			2 + "px", this.domElement.style.top =
			(a.getHeight(window) - a.getHeight(
			this.domElement)) / 2 + "px"
	}, d
}), define("dat/gui/GUI", [
		"text!dat/gui/saveDialogue.html",
		"dat/controllers/factory",
		"dat/controllers/Controller",
		"dat/controllers/BooleanController",
		"dat/controllers/FunctionController",
		"dat/controllers/NumberControllerBox",
		"dat/controllers/NumberControllerSlider",
		"dat/controllers/OptionController",
		"dat/controllers/ColorController",
		"dat/controllers/TinkerController",
		"dat/utils/requestAnimationFrame",
		"dat/dom/CenteredDiv", "dat/dom/dom",
		"dat/utils/common",
		"dat/require/css!dat/gui/gui.css"
], function (a, b, c, d, e, f, g, h, i,
	j, k, l, m, n)
{
	function A(a, d, e, f)
	{
		if (d[e] === undefined) throw new Error(
				"Object " + d +
				' has no property "' + e + '"');
		var g;
		if (f.color) g = new i(d, e);
		else if (f.tinker) g = new j(d, e);
		else
		{
			var h = [d, e].concat(f.factoryArgs);
			g = b.apply(a, h)
		}
		f.before instanceof c && (f.before =
			f.before.__li), D(a, g), m.addClass(
			g.domElement, "c");
		var k = document.createElement("span");
		m.addClass(k, "property-name"), k.innerHTML =
			g.property;
		var l = document.createElement("div");
		l.appendChild(k), l.appendChild(g.domElement);
		var n = B(a, l, f.before);
		return m.addClass(n, z.CLASS_CONTROLLER_ROW),
		m.addClass(n, typeof g.getValue()),
		f.tinker && m.addClass(n, "tinker"),
		C(a, n, g), a.__controllers.push(g),
		g
	}

	function B(a, b, c)
	{
		var d = document.createElement("li");
		return b && d.appendChild(b), c ? a.__ul
			.insertBefore(d, params.before) : a.__ul
			.appendChild(d), a.onResize(), d
	}

	function C(a, b, c)
	{
		c.__li = b, c.__gui = a, n.extend(c,
		{
			options: function (b)
			{
				if (arguments.length > 1) return c.remove(),
				A(a, c.object, c.property,
				{
					before: c.__li.nextElementSibling,
					factoryArgs: [n.toArray(arguments)]
				});
				if (n.isArray(b) || n.isObject(b))
					return c.remove(), A(a, c.object,
						c.property,
					{
						before: c.__li.nextElementSibling,
						factoryArgs: [b]
					})
			},
			name: function (a)
			{
				return c.__li.firstElementChild.firstElementChild
					.innerHTML = a, c
			},
			listen: function ()
			{
				return c.__gui.listen(c), c
			},
			remove: function ()
			{
				return c.__gui.remove(c), c
			}
		});
		if (c instanceof g)
		{
			var h = new f(c.object, c.property,
			{
				min: c.__min,
				max: c.__max,
				step: c.__step
			});
			c.attached = h, h.attached = c, n.each(
				f.prototype, function (a, b)
			{
				var d = c[b],
					e = h[b];
				c[b] = h[b] = function ()
				{
					var a = Array.prototype.slice.call(
						arguments);
					return e.apply(h, a), d.apply(c, a)
				}
			}), m.addClass(b, "has-slider"), c.domElement
				.insertBefore(h.domElement, c.domElement
				.firstElementChild)
		}
		else if (c instanceof f)
		{
			var j = function (b)
			{
				return n.isNumber(c.__min) && n.isNumber(
					c.__max) ? (c.remove(), A(a, c.object,
					c.property,
				{
					before: c.__li.nextElementSibling,
					factoryArgs: [c.__min, c.__max, c.__step]
				})) : b
			};
			c.min = n.compose(j, c.min), c.max =
				n.compose(j, c.max)
		}
		else c instanceof d ? (m.bind(b,
				"click", function ()
			{
				m.fakeEvent(c.__checkbox, "click")
			}), m.bind(c.__checkbox, "click", function (
				a)
			{
				a.stopPropagation()
			})) : c instanceof e ? (m.bind(b,
				"click", function ()
			{
				m.fakeEvent(c.__button, "click")
			}), m.bind(b, "mouseover", function ()
			{
				m.addClass(c.__button, "hover")
			}), m.bind(b, "mouseout", function ()
			{
				m.removeClass(c.__button, "hover")
			})) : c instanceof i && (m.addClass(
				b, "color"), c.updateDisplay = n.compose(function (
				a)
			{
				return b.style.borderLeftColor = c.__color
					.toString(), a
			}, c.updateDisplay), c.updateDisplay());
		c.setValue = n.compose(function (b)
		{
			return a.getRoot().__preset_select &&
				c.isModified() && M(a.getRoot(), !0),
			b
		}, c.setValue)
	}

	function D(a, b)
	{
		var c = a.getRoot(),
			d = c.__rememberedObjects.indexOf(b.object);
		if (d != -1)
		{
			var e = c.__rememberedObjectIndecesToControllers[
				d];
			e === undefined && (e = {}, c.__rememberedObjectIndecesToControllers[
				d] = e), e[b.property] = b;
			if (c.load && c.load.remembered)
			{
				var f = c.load.remembered,
					g;
				if (f[a.preset]) g = f[a.preset];
				else if (f[s]) g = f[s];
				else return; if (g[d] && g[d][b.property] !==
					undefined)
				{
					var h = g[d][b.property];
					b.initialValue = n.isObject(h) ? _
						.clone(h) : h, b.setValue(n.isObject(
						h) ? _.clone(h) : h)
				}
			}
		}
	}

	function E(a, b)
	{
		return document.location.href + "." +
			b
	}

	function F(a, b)
	{
		a.close()
		var c = a.__save_row = document.createElement(
			"li");
		m.addClass(a.domElement, "has-save"),
		b || a.__ul.insertBefore(c, a.__ul.firstChild),
		m.addClass(c, "save-row");
		var d = document.createElement("span");
		d.innerHTML = "&nbsp;", m.addClass(d,
			"button gears");
		var e = document.createElement("span");
		e.innerHTML = "Save", m.addClass(e,
			"button"), m.addClass(e, "save");
		var f = document.createElement("span");
		f.innerHTML = "New", m.addClass(f,
			"button"), m.addClass(f, "save-as");
		var g = document.createElement("span");
		g.innerHTML = "Revert", m.addClass(g,
			"button"), m.addClass(g, "revert");
		var h = a.__preset_select = document.createElement(
			"select");
		a.load && a.load.remembered ? n.each(
			a.load.remembered, function (b, c)
		{
			K(a, c, c == a.preset)
		}) : K(a, s, !1), m.bind(h, "change", function ()
		{
			for (var b = 0; b < a.__preset_select
				.length; b++) a.__preset_select[b].innerHTML =
					a.__preset_select[b].value;
			a.preset = this.value
		});
		if (b) return;
		c.appendChild(h), c.appendChild(d), c
			.appendChild(e), c.appendChild(f), c
			.appendChild(g);
		if (t)
		{
			var i = document.getElementById(
				"dg-save-locally"),
				j = document.getElementById(
					"dg-local-explain");
			i.style.display = "block";
			var k = document.getElementById(
				"dg-local-storage");
			localStorage.getItem(E(a, "isLocal")) ===
				"true" && k.setAttribute("checked",
				"checked");

			function l()
			{
				j.style.display = a.useLocalStorage ?
					"block" : "none"
			}
			l(), m.bind(k, "change", function ()
			{
				a.useLocalStorage = !a.useLocalStorage,
				l()
			})
		}
		var o = document.getElementById(
			"dg-new-constructor");
		m.bind(o, "keydown", function (a)
		{
			a.metaKey && (a.which === 67 || a.keyCode ==
				67) && u.hide()
		}), m.bind(d, "click", function ()
		{
			o.innerHTML = JSON.stringify(a.getSaveObject(),
				undefined, 2), u.show(), o.focus(),
			o.select()
		}), m.bind(e, "click", function ()
		{
			a.save()
		}), m.bind(f, "click", function ()
		{
			var b = prompt(
				"Enter a new preset name.");
			b && a.saveAs(b)
		}), m.bind(g, "click", function ()
		{
			a.revert()
		})
	}

	function G(a)
	{
		function c(c)
		{
			return c.preventDefault(), b = c.clientX,
			m.addClass(a.__closeButton, z.CLASS_DRAG),
			m.bind(window, "mousemove", d), m.bind(
				window, "mouseup", e), !1
		}

		function d(c)
		{
			return c.preventDefault(), a.width +=
				b - c.clientX, a.onResize(), b = c.clientX, !
				1
		}

		function e()
		{
			m.removeClass(a.__closeButton, z.CLASS_DRAG),
			m.unbind(window, "mousemove", d), m
				.unbind(window, "mouseup", e)
		}
		a.__resize_handle = document.createElement(
			"div"), n.extend(a.__resize_handle.style,
		{
			width: "6px",
			marginLeft: "-3px",
			height: "200px",
			cursor: "ew-resize",
			position: "absolute"
		});
		var b;
		m.bind(a.__resize_handle, "mousedown",
			c), m.bind(a.__closeButton,
			"mousedown", c), a.domElement.insertBefore(
			a.__resize_handle, a.domElement.firstElementChild)
	}

	function H(a, b)
	{
		a.domElement.style.width = b + "px",
		a.__save_row && a.autoPlace && (a.__save_row
			.style.width = b + "px"), a.__closeButton &&
			(a.__closeButton.style.width = b +
			"px")
	}

	function I(a, b)
	{
		var c = {};
		return n.each(a.__rememberedObjects, function (
			d, e)
		{
			var f = {}, g = a.__rememberedObjectIndecesToControllers[
					e];
			g || (g = {}, _.each(d, function (b,
				c)
			{
				var d = J(c, a);
				d && (g[c] = d)
			}), a.__rememberedObjectIndecesToControllers[
				e] = g), n.each(g, function (a, c)
			{
				var d = b ? a.initialValue : a.getValue();
				f[c] = n.isObject(d) ? _.clone(d) :
					d
			}), c[e] = f
		}), c
	}

	function J(a, b)
	{
		var c;
		for (var d = 0, e = b.__controllers.length; d <
			e; d++)
		{
			var f = b.__controllers[d];
			if (f.property === a)
			{
				c = f;
				break
			}
		}
		return c
	}

	function K(a, b, c)
	{
		if (!a.__preset_select) return;
		var d = document.createElement(
			"option");
		d.innerHTML = b, d.value = b, a.__preset_select
			.appendChild(d), c && (a.__preset_select
			.selectedIndex = a.__preset_select.length -
			1)
	}

	function L(a)
	{
		if (!a.__preset_select) return;
		for (var b = 0; b < a.__preset_select
			.length; b++) a.__preset_select[b].value ==
				a.preset && (a.__preset_select.selectedIndex =
				b)
	}

	function M(a, b)
	{
		if (!a.__preset_select) return;
		var c = a.__preset_select[a.__preset_select
			.selectedIndex];
		b ? c.innerHTML = c.value + "*" : c.innerHTML =
			c.value
	}

	function N(a)
	{
		a.length != 0 && k(function ()
		{
			N(a)
		}), n.each(a, function (a)
		{
			a.updateDisplay()
		})
	}
	var o = document.createElement("br");
	n.extend(o.style,
	{
		clear: "both",
		width: 0,
		height: 0,
		display: "block",
		lineHeight: 0,
		fontSize: 0,
		visibility: "hidden"
	});
	var p = "dg",
		q = 72,
		r = 20,
		s = "Default",
		t = function ()
		{
			try
			{
				return "localStorage" in window &&
					window.localStorage !== null
			}
			catch (a)
			{
				return !1
			}
		}(),
		u, v = !0,
		w, x = !1,
		y = [],
		z = function (a)
		{
			function h()
			{
				localStorage.setItem(E(b, "gui"),
					JSON.stringify(b.getSaveObject()))
			}

			function j()
			{
				var a = b.getRoot();
				a.width += 1, n.defer(function ()
				{
					a.width -= 1
				})
			}
			var b = this;
			this.domElement = document.createElement(
				"div"), this.__ul = document.createElement(
				"ul"), this.domElement.appendChild(
				this.__ul), m.addClass(this.domElement,
				p), this.__folders = {}, this.__controllers = [],
			this.__rememberedObjects = [], this
				.__rememberedObjectIndecesToControllers = [],
			this.__listening = [], a = a || {},
			a = n.defaults(a,
			{
				autoPlace: !0,
				width: z.DEFAULT_WIDTH
			}), a = n.defaults(a,
			{
				resizable: a.autoPlace,
				hideable: a.autoPlace
			}), n.isUndefined(a.load) ? a.load = {
				preset: s
			} : a.preset && (a.load.preset = a.preset),
			n.isUndefined(a.parent) && a.hideable &&
				y.push(this), a.resizable = n.isUndefined(
				a.parent) && a.resizable, a.autoPlace &&
				n.isUndefined(a.scrollable) && (a.scrollable = !
				0);
			var c = t && localStorage.getItem(E(
				this, "isLocal")) === "true";
			Object.defineProperties(this,
			{
				parent: {
					get: function ()
					{
						return a.parent
					}
				},
				scrollable: {
					get: function ()
					{
						return a.scrollable
					}
				},
				autoPlace: {
					get: function ()
					{
						return a.autoPlace
					}
				},
				preset: {
					get: function ()
					{
						return b.parent ? b.getRoot().preset :
							a.load.preset
					},
					set: function (c)
					{
						b.parent ? b.getRoot().preset = c :
							a.load.preset = c, L(this), b.revert()
					}
				},
				width: {
					get: function ()
					{
						return a.width
					},
					set: function (c)
					{
						a.width = c, H(b, c)
					}
				},
				name: {
					get: function ()
					{
						return a.name
					},
					set: function (b)
					{
						a.name = b, e && (e.innerHTML = a
							.name)
					}
				},
				closed: {
					get: function ()
					{
						return a.closed
					},
					set: function (c)
					{
						a.closed = c, a.closed ? m.addClass(
							b.__ul, z.CLASS_CLOSED) : m.removeClass(
							b.__ul, z.CLASS_CLOSED), this.onResize(),
						b.__closeButton && (b.__closeButton
							.innerHTML = c ? z.TEXT_OPEN : z
							.TEXT_CLOSED)
					}
				},
				load: {
					get: function ()
					{
						return a.load
					}
				},
				useLocalStorage: {
					get: function ()
					{
						return c
					},
					set: function (a)
					{
						t && (c = a, a ? m.bind(window,
							"unload", h) : m.unbind(window,
							"unload", h), localStorage.setItem(
							E(b, "isLocal"), a))
					}
				}
			});
			if (n.isUndefined(a.parent))
			{
				a.closed = !1, m.addClass(this.domElement,
					z.CLASS_MAIN), m.makeSelectable(
					this.domElement, !1);
				if (t && c)
				{
					b.useLocalStorage = !0;
					var d = localStorage.getItem(E(
						this, "gui"));
					d && (a.load = JSON.parse(d))
				}
				this.__closeButton = document.createElement(
					"div"), this.__closeButton.innerHTML =
					z.TEXT_CLOSED, m.addClass(this.__closeButton,
					z.CLASS_CLOSE_BUTTON), this.domElement
					.appendChild(this.__closeButton),
				m.bind(this.__closeButton, "click", function ()
				{
					b.closed ? b.open() : b.close()
				})
			}
			else
			{
				a.closed === undefined && (a.closed = !
					0);
				var e = document.createTextNode(a.name);
				m.addClass(e, "controller-name");
				var f = B(b, e),
					g = function (a)
					{
						return a.preventDefault(), b.closed ?
							b.open() : b.close(), !1
					};
				m.addClass(this.__ul, z.CLASS_CLOSED),
				m.addClass(f, "title"), m.bind(f,
					"click", g), a.closed || this.close()
			}
			a.autoPlace && (n.isUndefined(a.parent) &&
				(v && (w = document.createElement(
				"div"), w.style.zIndex = 1001, m.addClass(
				w, p), m.addClass(w, z.CLASS_AUTO_PLACE_CONTAINER),
				document.body.appendChild(w), v = !
				1), w.appendChild(this.domElement),
				m.addClass(this.domElement, z.CLASS_AUTO_PLACE)),
				this.parent || H(b, a.width)), m.bind(
				window, "resize", function ()
			{
				b.onResize()
			}), m.bind(this.__ul,
				"webkitTransitionEnd", function ()
			{
				b.onResize()
			}), m.bind(this.__ul,
				"transitionend", function ()
			{
				b.onResize()
			}), m.bind(this.__ul,
				"oTransitionEnd", function ()
			{
				b.onResize()
			}), this.onResize(), a.resizable &&
				G(this);
			var i = b.getRoot();
			a.parent || j()
		};
	return z.toggleHide = function ()
	{
		x = !x, n.each(y, function (a)
		{
			a.domElement.style.display = x ?
				"none" : "block"
		})
	}, z.CLASS_AUTO_PLACE = "a", z.CLASS_AUTO_PLACE_CONTAINER =
		"ac", z.CLASS_MAIN = "main", z.CLASS_CONTROLLER_ROW =
		"cr", z.CLASS_TOO_TALL =
		"taller-than-window", z.CLASS_CLOSED =
		"closed", z.CLASS_CLOSE_BUTTON =
		"close-button", z.CLASS_DRAG = "drag",
	z.DEFAULT_WIDTH = 245, z.TEXT_CLOSED =
		"Close Controls", z.TEXT_OPEN =
		"Open Controls", m.bind(window,
		"keydown", function (a)
	{
		document.activeElement.type !==
			"text" && (a.which === q || a.keyCode ==
			q) && z.toggleHide()
	}, !1), n.extend(z.prototype,
	{
		add: function (a, b)
		{
			return A(this, a, b,
			{
				factoryArgs: Array.prototype.slice.call(
					arguments, 2)
			})
		},
		addColor: function (a, b)
		{
			return A(this, a, b,
			{
				color: !0
			})
		},
		tinker: function (a, b)
		{
			return A(this, a, b,
			{
				tinker: !0
			})
		},
		remove: function (a)
		{
			if (!a.__li.parentNode) return this;
			this.__ul.removeChild(a.__li), this.__controllers
				.slice(this.__controllers.indexOf(a),
				1);
			var b = this;
			n.defer(function ()
			{
				b.onResize()
			})
		},
		hideController: function (a)
		{
			var b = this.__controllers.indexOf(a);
			if (b < 0) return this;
			var c = a.__li;
			return c && (c.getAttribute("height") ||
				c.setAttribute("height", m.getHeight(
				c) || 27), n.extend(c.style,
			{
				height: 0
			})), this
		},
		showController: function (a)
		{
			var b = this.__controllers.indexOf(a);
			if (b < 0) return this;
			var c = a.__li;
			return c && n.extend(c.style,
			{
				height: c.getAttribute("height") + "px"
			}), this
		},
		destroy: function ()
		{
			this.autoPlace && w.removeChild(this
				.domElement)
		},
		addFolder: function (a)
		{
			if (this.__folders[a] !== undefined)
				throw new Error(
					'You already have a folder in this GUI by the name "' +
					a + '"');
			var b = {
				name: a,
				parent: this
			};
			b.autoPlace = this.autoPlace, this.load &&
				this.load.folders && this.load.folders[
				a] && (b.closed = this.load.folders[
				a].closed, b.load = this.load.folders[
				a]);
			var c = new z(b);
			this.__folders[a] = c;
			var d = B(this, c.domElement);
			return m.addClass(d, "folder"), c
		},
		open: function ()
		{
			this.closed = !1
		},
		close: function ()
		{
			this.closed = !1
		},
		onResize: function ()
		{
			var a = this.getRoot();
			if (a.scrollable)
			{
				var b = m.getOffset(a.__ul).top,
					c = 0;
				n.each(a.__ul.childNodes, function (
					b)
				{
					if (!a.autoPlace || b !== a.__save_row)
						c += m.getHeight(b)
				}), window.innerHeight - b - r < c ?
					(m.addClass(a.domElement, z.CLASS_TOO_TALL),
					a.__ul.style.height = window.innerHeight -
					b - r + "px") : (m.removeClass(a.domElement,
					z.CLASS_TOO_TALL), a.__ul.style.height =
					"auto")
			}
			a.__resize_handle && n.defer(function ()
			{
				a.__resize_handle.style.height = a.__ul
					.offsetHeight + "px"
			}), a.__closeButton && (a.__closeButton
				.style.width = a.width + "px")
		},
		remember: function (b, c)
		{
			!c && n.isUndefined(u) && (u = new l,
				u.domElement.innerHTML = a);
			if (this.parent) throw new Error(
					"You can only call remember on a top level GUI.");
			this.__rememberedObjects.length == 0 &&
				F(this, !! c), this.__rememberedObjects
				.indexOf(b) == -1 && this.__rememberedObjects
				.push(b), this.autoPlace && H(this,
				this.width)
		},
		getRoot: function ()
		{
			var a = this;
			while (a.parent) a = a.parent;
			return a
		},
		getSaveObject: function ()
		{
			var a = this.load;
			return a.closed = this.closed, this.__rememberedObjects
				.length > 0 && (a.preset = this.preset,
				a.remembered || (a.remembered = {}),
				a.remembered[this.preset] = I(this)),
			a.folders = {}, n.each(this.__folders, function (
				b, c)
			{
				a.folders[c] = b.getSaveObject()
			}), a
		},
		save: function ()
		{
			this.load.remembered || (this.load.remembered = {}),
			this.load.remembered[this.preset] =
				I(this), M(this, !1)
		},
		saveAs: function (a)
		{
			this.load.remembered || (this.load.remembered = {},
				this.load.remembered[s] = I(this, !
				0)), this.load.remembered[a] = I(
				this), this.preset = a, K(this, a, !
				0)
		},
		revert: function (a)
		{
			n.each(this.__controllers, function (
				b)
			{
				this.getRoot().load.remembered ? D(
					a || this.getRoot(), b) : b.setValue(
					b.initialValue)
			}, this), n.each(this.__folders, function (
				a)
			{
				a.revert(a)
			}), a || M(this.getRoot(), !1)
		},
		listen: function (a)
		{
			var b = this.__listening.length == 0;
			this.__listening.push(a), b && N(
				this.__listening)
		}
	}), z
}), define("dat/google/webfont/loader", [
		"underscore"
], function ()
{
	return function (a)
	{
		window.WebFontConfig = window.WebFontConfig || {},
		_.extend(window.WebFontConfig, a);
		var b = document.createElement(
			"script");
		b.src = ("https:" == document.location
			.protocol ? "https" : "http") +
			"://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js",
		b.type = "text/javascript", b.async =
			"true";
		var c = document.getElementsByTagName(
			"script")[0];
		c.parentNode.insertBefore(b, c)
	}
}), require(
{
	paths: {
		text: "../third-party/requirejs/text",
		domReady: "../third-party/requirejs/domReady",
		underscore: "../third-party/underscore"
	}
}), require([
		"text!workshop/contents.json",
		"text!workshop/template.tool.html",
		"text!workshop/template.project.html",
		"domReady",
		"dat/utils/requestAnimationFrame",
		"workshop/FizzyText", "dat/gui/GUI",
		"dat/dom/dom", "dat/utils/utils",
		"dat/google/webfont/loader",
		"underscore"
], function (a, b, c, d, e, f, g, h, i,
	j)
{
	function k()
	{
		function o()
		{
			e(o), d.render()
		}

		function A(b)
		{
			index = i.wrap(b, Math.ceil(a.projects
				.length / 3)), console.log(b), _.extend(
				q.style,
			{
				marginLeft: -(h.getWidth(q.parentNode) +
					34) * index + "px"
			}), _.each(s, function (a, b)
			{
				b === index ? h.addClass(a,
					"active") : h.removeClass(a,
					"active")
			}), w = index
		}
		l();
		var d = new f("(^_^)", 1024, 255),
			j = new g(
			{
				autoPlace: !1,
				hideable: !0,
				resizable: !0,
				load: {
					preset: "Default",
					remembered: {
						Default: {
							0: {
								color0: "#00aeff",
								color1: "#0fa954",
								color2: "#54396e",
								color3: "#e61d5f",
								message: "(^_^)",
								speed: 0,
								growthSpeed: 1,
								maxSize: 4.2,
								displayOutline: 1
							}
						},
						Globules: {
							0: {
								color0: "#d41900",
								color1: "#245037",
								color2: "#7f4300",
								color3: "#1d87e6",
								message: "(^_^)",
								speed: 0,
								growthSpeed: 1,
								maxSize: 4.2,
								displayOutline: 1
							}
						},
						Smog: {
							0: {
								color0: "#092028",
								color1: "#010c06",
								color2: "#0f0802",
								color3: "#e1e1e1",
								message: "(^_^)",
								speed: 0,
								growthSpeed: 1,
								maxSize: 4.2,
								displayOutline: 1
							}
						}
					},
					closed: !0,
					folders: {
						Colors: {
							preset: "Default",
							closed: !0,
							folders: {}
						}
					}
				}
			});
		window.gui = j, j.remember(d);
		var k = j.addFolder("Colors");
		k.addColor(d, "color0").name("Color 1"), 
		k.addColor(d, "color1").name("Color 2"), 
		k.addColor(d, "color2").name("Color 3"), 
		k.addColor(d, "color3").name("Color 4"), 
		j.add(d, "message"), 
		j.add(d, "speed", -4, 4), 
		j.add(d, "growthSpeed", 0, 1), 
		j.add(d, "maxSize", .1, 20), 
		j.add(d, "displayOutline"), 
		j.add(d, "explode").name("Explode!");
		
		var n = document.getElementById(
			"mast").firstElementChild;
		n.insertBefore(d.domElement, n.firstElementChild),
		h.makeSelectable(document.getElementById(
			"mast"), !1), _.extend(j.domElement.style,
		{
			position: "absolute",
			right: "7px",
			paddingTop: "7px",
			zIndex: 3
		}), n.insertBefore(j.domElement, n.firstElementChild),
		o();
		var q = document.getElementById(
			"carousel");
		q.innerHTML = _.template(
			"<% _.each(projects, function(project) { %>" +
			c + "<% }); %><br class='clear'>", a);
		var r = document.getElementById(
			"dot-nav");
		r.innerHTML = m(a.projects);
		var s = r.getElementsByTagName("li"),
			t = q.parentNode.parentNode.getElementsByTagName(
				"div")[2];
		h.makeSelectable(t, !1);
		var u = t.getElementsByTagName("a")[1],
			v = t.getElementsByTagName("a")[0],
			w = 0,
			x = !1,
			y = document.getElementById(
				"about-link"),
			z = document.getElementById(
				"about-exit");
		h.bind(u, "click", function (a)
		{
			a.preventDefault(), A(w + 1)
		}).bind(v, "click", function (a)
		{
			a.preventDefault(), A(w - 1)
		}).bind(z, "click", function (a)
		{
			a.preventDefault(), h.removeClass(
				document.body, "about"), x = !1
		}).bind(y, "click", function (a)
		{
			a.preventDefault(), x ? h.removeClass(
				document.body, "about") : h.addClass(
				document.body, "about"), x = !x
		}), _.each(s, function (a)
		{
			h.bind(a, "click",

			function (a)
			{
				a.preventDefault(), A(this.innerHTML)
			})
		})
	}

	function l()
	{
		var a = document.createElement(
			"script");
		a.type = "text/javascript", a.async = !
			0, a.src =
			"https://apis.google.com/js/plusone.js";
		var b = document.getElementsByTagName(
			"script")[0];
		b.parentNode.insertBefore(a, b)
	}

	function m(a)
	{
		var b = "";
		for (var c = 0, d = Math.ceil(a.length /
				3); c < d; c++)
		{
			var e = "";
			c === 0 && (e += 'class="active"'),
			b += "<li " + e + ">" + c + "</li>"
		}
		return b
	}
	j(
	{
		google: {
			families: [
					"Terminal Dosis:300,500,700"
			]
		}
	}), a = JSON.parse(a), d(k)
}), define("main", function ()
{})