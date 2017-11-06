/* fly.js https://github.com/wendux/fly */
!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}({0:function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports={type:function(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()},isObject:function(e,t){return t?"object"===this.type(e):e&&"object"===(void 0===e?"undefined":n(e))},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},trim:function(e){return e.replace(/(^\s*)|(\s*$)/g,"")},encode:function(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")},formatParams:function(e){var t=[];for(var r in e){var n=e[r];this.isObject(n)&&(n=JSON.stringify(n)),t.push(this.encode(r)+"="+this.encode(n))}return t.join("&")},merge:function(e,t){for(var r in t)void 0===e[r]?e[r]=t[r]:this.isObject(t[r],1)&&this.isObject(e[r],1)&&this.merge(e[r],t[r]);return e}}},5:function(e,t,r){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(0),a="undefined"!=typeof document,s=function(){function e(t){n(this,e),this.engine=t||XMLHttpRequest,this.interceptors={response:{use:function(e,t){this.handler=e,this.onerror=t}},request:{use:function(e){this.handler=e}}},this.config={method:"GET",baseURL:"",headers:{},timeout:0,withCredentials:!1}}return o(e,[{key:"request",value:function(e,t,r){var n=this,o=new this.engine,s=new Promise(function(s,u){r=r||{};var c={"Content-type":"application/x-www-form-urlencoded"};i.merge(c,n.config.headers),n.config.headers=c,i.merge(r,n.config);var f=n.interceptors.request,l=n.interceptors.response;r.body=t||r.body;var p=!1,d={reject:function(e){p=!0,u(e)},resolve:function(e){p=!0,s(e)}};if(e=i.trim(e||""),r.method=r.method.toUpperCase(),r.url=e,(!f.handler||(r=f.handler(r,d)))&&!p){e=i.trim(r.url),!e&&a&&(e=location.href);var h=i.trim(r.baseURL||"");if(0!==e.indexOf("http")){var y="/"===e[0];if(!h&&a){var m=location.pathname.split("/");m.pop(),h=location.protocol+"//"+location.host+(y?"":m.join("/"))}if("/"!==h[h.length-1]&&(h+="/"),e=h+(y?e.substr(1):e),a){var v=document.createElement("a");v.href=e,e=v.href}}var b=i.trim(r.responseType||"");try{o.timeout=r.timeout||0,"stream"!==b&&(o.responseType=b)}catch(e){}o.withCredentials=!!r.withCredentials;var g="GET"===r.method;g?(r.body&&(t=i.formatParams(r.body),e+=(-1===e.indexOf("?")?"?":"&")+t),o.open("GET",e)):o.open("POST",e),-1!==["object","array"].indexOf(i.type(r.body))&&(r.headers["Content-type"]="application/json;charset=utf-8",t=JSON.stringify(r.body));for(var w in r.headers)if("content-type"!==w.toLowerCase()||!i.isFormData(r.body)&&r.body&&!g)try{o.setRequestHeader(w,r.headers[w])}catch(e){}else delete r.headers[w];var O=function(e){return l.onerror&&(e=l.onerror(e,d)),e};o.onload=function(){if(o.status>=200&&o.status<300){var e=o.response||o.responseText;-1!==(o.getResponseHeader("Content-Type")||"").indexOf("json")&&(e=JSON.parse(e));var t={data:e,xhr:o,request:r};if(i.merge(t,o._response),l.handler&&(t=l.handler(t,d)||t),p)return;s(t)}else{var n=new Error(o.statusText);if(n.status=o.status,n=O(n)||n,p)return;u(n)}},o.onerror=function(e){var t=new Error(e.msg||"Network Error");t.status=0,t=O(t),p||u(t)},o.ontimeout=function(){var e=new Error("timeout [ "+o.timeout+"ms ]");e.status=1,e=O(e),p||u(e)},o._options=r,o.send(g?null:t)}});return s.xhr=o,s}},{key:"get",value:function(e,t,r){return this.request(e,t,r)}},{key:"post",value:function(e,t,r){return this.request(e,t,i.merge({method:"POST"},r))}},{key:"all",value:function(e){return Promise.all(e)}},{key:"spread",value:function(e){return function(t){return e.apply(null,t)}}}]),e}();!function(e,t){t()}(0,function(){window.fly=new s,window.Fly=s})}});
//# sourceMappingURL=fly.min.js.map




// base
// 实例级配置 上线时混淆配置
fly.config = {
	headers: {}, //http请求头，
	baseURL: "http://192.168.0.102:8360/api", //请求基地址
	timeout: 8000, //超时时间，为0时则无超时限制
	withCredentials: false //跨域时是否发送cookie
};

//添加请求拦截器
fly.interceptors.request.use(function(config, promise) {
	//给所有请求添加自定义header
	//config.headers["X-Tag"] = "axy";
	//可以通过promise.reject／resolve直接中止请求
	//promise.resolve("fake data")
	return config;
});

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(function(response, promise) {
		var data = response.data;
		var o = {};
		if(data.code !== 1000){
			o.err = {
				code: data.code,
				message: data.message
			}
		}
		o.data = data.data;
		//只将请求结果的data字段返回
		return o;
	},
	function(err, promise) {
		
		//发生网络错误后会走到这里
		return promise.resolve(err)
	}
);


var dal = {};

// 统一请求 适配器
function requestAdapter(type, url, params, callback){
	return fly.request(url, params, {
		method: type
	})
	.then(function(o){
		console.log(JSON.stringify(o));
		return callback(o.err, o.data);
	})
	.catch(function(err){
		console.log("[服务器错误]" + err);
	});
}
