/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * This is our "Entry Point"
	 */
	
	'use strict';
	
	var _interopRequireWildcard = __webpack_require__(/*! babel-runtime/helpers/interop-require-wildcard */ 1)['default'];
	
	var _controllerAppcontroller = __webpack_require__(/*! controller/appcontroller */ 2);
	
	var appModule = _interopRequireWildcard(_controllerAppcontroller);
	
	var _modelContent = __webpack_require__(/*! model/content */ 41);
	
	setTimeout(function () {
	    //window.location.reload(1);
	}, 20000);
	
	var apiKey = "e5tm4EqM-icynfPTE9LjWu7mJOHm-oe4";
	var myDB = "players_score";
	var myCollection = "scoreTable";
	
	/* 
	if(localStorage.getItem("key"))
	$.ajax({
	    url: "https://api.mlab.com/api/1/databases/" + myDB + "/collections/" + myCollection + "?apiKey=" + apiKey,
	    type: "GET",
	    success: function(data) {
	        console.log(data);
	    },
	 });
	
	 if (typeof(Storage) !== "undefined") {
	    localStorage.setItem("key", data);
	    appModule.loadContent(playerData);
	} 
	 */
	appModule.loadContent(_modelContent.playerData);
	
	var acc = document.getElementsByClassName("accordian");
	appModule.showPlayerDetails(acc);

/***/ }),
/* 1 */
/*!*************************************************************!*\
  !*** ./~/babel-runtime/helpers/interop-require-wildcard.js ***!
  \*************************************************************/
/***/ (function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};
	
	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }
	
	    newObj["default"] = obj;
	    return newObj;
	  }
	};
	
	exports.__esModule = true;

/***/ }),
/* 2 */
/*!*****************************************!*\
  !*** ./src/controller/appcontroller.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _getIterator = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ 3)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.loadContent = loadContent;
	exports.showPlayerDetails = showPlayerDetails;
	
	var _modelContent = __webpack_require__(/*! ../model/content */ 41);
	
	function loadContent(contentArray) {
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = _getIterator(contentArray[0]), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var individualPlayer = _step.value;
	
	      loadTemplate(individualPlayer);
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator['return']) {
	        _iterator['return']();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	}
	
	function loadTemplate(individualPlayer) {
	  if ('content' in document.createElement('template')) {
	
	    var t = document.querySelector('#playerScore'),
	        td = t.content.querySelectorAll("td");
	
	    td[0].textContent = individualPlayer.player_name;
	    td[1].textContent = individualPlayer.out_way;
	    td[2].textContent = individualPlayer.number_balls;
	    td[3].textContent = individualPlayer.score;
	
	    // Clone the new row and insert it into the table
	    var tb = document.querySelector("tbody");
	    var clone = document.importNode(t.content, true);
	    tb.appendChild(clone);
	  }
	}
	
	function getRandomInt(min, max) {
	  min = Math.ceil(min);
	  max = Math.floor(max);
	  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
	}
	
	function showPlayerDetails(acc) {
	  for (var i = 0; i < acc.length; i++) {
	    acc[i].onclick = function () {
	      this.classList.toggle("active");
	      var playerName = this.parentElement.parentElement.firstElementChild.textContent;
	      // TODO : make request with playername/ playerID
	      var panel = this.parentElement.parentElement.nextElementSibling;
	      var avgScore = getRandomInt(0, 7);
	      panel.textContent = playerName + ' scored an average of ' + avgScore + ' runs per ball ';
	      // var panel = this.nextElementSibling;
	      if (panel.style.display === "block") {
	        panel.style.display = "none";
	      } else {
	        panel.style.display = "block";
	      }
	    };
	  }
	}

/***/ }),
/* 3 */
/*!*************************************************!*\
  !*** ./~/babel-runtime/core-js/get-iterator.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/get-iterator */ 4), __esModule: true };

/***/ }),
/* 4 */
/*!**********************************************!*\
  !*** ./~/core-js/library/fn/get-iterator.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../modules/web.dom.iterable */ 5);
	__webpack_require__(/*! ../modules/es6.string.iterator */ 33);
	module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ 36);

/***/ }),
/* 5 */
/*!*******************************************************!*\
  !*** ./~/core-js/library/modules/web.dom.iterable.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./es6.array.iterator */ 6);
	var Iterators = __webpack_require__(/*! ./$.iterators */ 9);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ }),
/* 6 */
/*!*********************************************************!*\
  !*** ./~/core-js/library/modules/es6.array.iterator.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(/*! ./$.add-to-unscopables */ 7)
	  , step             = __webpack_require__(/*! ./$.iter-step */ 8)
	  , Iterators        = __webpack_require__(/*! ./$.iterators */ 9)
	  , toIObject        = __webpack_require__(/*! ./$.to-iobject */ 10);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(/*! ./$.iter-define */ 14)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ }),
/* 7 */
/*!***********************************************************!*\
  !*** ./~/core-js/library/modules/$.add-to-unscopables.js ***!
  \***********************************************************/
/***/ (function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ }),
/* 8 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.iter-step.js ***!
  \**************************************************/
/***/ (function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ }),
/* 9 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.iterators.js ***!
  \**************************************************/
/***/ (function(module, exports) {

	module.exports = {};

/***/ }),
/* 10 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.to-iobject.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(/*! ./$.iobject */ 11)
	  , defined = __webpack_require__(/*! ./$.defined */ 13);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ }),
/* 11 */
/*!************************************************!*\
  !*** ./~/core-js/library/modules/$.iobject.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(/*! ./$.cof */ 12);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ }),
/* 12 */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/$.cof.js ***!
  \********************************************/
/***/ (function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ }),
/* 13 */
/*!************************************************!*\
  !*** ./~/core-js/library/modules/$.defined.js ***!
  \************************************************/
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ }),
/* 14 */
/*!****************************************************!*\
  !*** ./~/core-js/library/modules/$.iter-define.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(/*! ./$.library */ 15)
	  , $export        = __webpack_require__(/*! ./$.export */ 16)
	  , redefine       = __webpack_require__(/*! ./$.redefine */ 21)
	  , hide           = __webpack_require__(/*! ./$.hide */ 22)
	  , has            = __webpack_require__(/*! ./$.has */ 27)
	  , Iterators      = __webpack_require__(/*! ./$.iterators */ 9)
	  , $iterCreate    = __webpack_require__(/*! ./$.iter-create */ 28)
	  , setToStringTag = __webpack_require__(/*! ./$.set-to-string-tag */ 29)
	  , getProto       = __webpack_require__(/*! ./$ */ 23).getProto
	  , ITERATOR       = __webpack_require__(/*! ./$.wks */ 30)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ }),
/* 15 */
/*!************************************************!*\
  !*** ./~/core-js/library/modules/$.library.js ***!
  \************************************************/
/***/ (function(module, exports) {

	module.exports = true;

/***/ }),
/* 16 */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/$.export.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(/*! ./$.global */ 17)
	  , core      = __webpack_require__(/*! ./$.core */ 18)
	  , ctx       = __webpack_require__(/*! ./$.ctx */ 19)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ }),
/* 17 */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/$.global.js ***!
  \***********************************************/
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 18 */
/*!*********************************************!*\
  !*** ./~/core-js/library/modules/$.core.js ***!
  \*********************************************/
/***/ (function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 19 */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/$.ctx.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(/*! ./$.a-function */ 20);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 20 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.a-function.js ***!
  \***************************************************/
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 21 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/$.redefine.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./$.hide */ 22);

/***/ }),
/* 22 */
/*!*********************************************!*\
  !*** ./~/core-js/library/modules/$.hide.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(/*! ./$ */ 23)
	  , createDesc = __webpack_require__(/*! ./$.property-desc */ 24);
	module.exports = __webpack_require__(/*! ./$.descriptors */ 25) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ }),
/* 23 */
/*!****************************************!*\
  !*** ./~/core-js/library/modules/$.js ***!
  \****************************************/
/***/ (function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ }),
/* 24 */
/*!******************************************************!*\
  !*** ./~/core-js/library/modules/$.property-desc.js ***!
  \******************************************************/
/***/ (function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ }),
/* 25 */
/*!****************************************************!*\
  !*** ./~/core-js/library/modules/$.descriptors.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(/*! ./$.fails */ 26)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 26 */
/*!**********************************************!*\
  !*** ./~/core-js/library/modules/$.fails.js ***!
  \**********************************************/
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 27 */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/$.has.js ***!
  \********************************************/
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ }),
/* 28 */
/*!****************************************************!*\
  !*** ./~/core-js/library/modules/$.iter-create.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(/*! ./$ */ 23)
	  , descriptor     = __webpack_require__(/*! ./$.property-desc */ 24)
	  , setToStringTag = __webpack_require__(/*! ./$.set-to-string-tag */ 29)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(/*! ./$.hide */ 22)(IteratorPrototype, __webpack_require__(/*! ./$.wks */ 30)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ }),
/* 29 */
/*!**********************************************************!*\
  !*** ./~/core-js/library/modules/$.set-to-string-tag.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(/*! ./$ */ 23).setDesc
	  , has = __webpack_require__(/*! ./$.has */ 27)
	  , TAG = __webpack_require__(/*! ./$.wks */ 30)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ }),
/* 30 */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/$.wks.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(/*! ./$.shared */ 31)('wks')
	  , uid    = __webpack_require__(/*! ./$.uid */ 32)
	  , Symbol = __webpack_require__(/*! ./$.global */ 17).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ }),
/* 31 */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/$.shared.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(/*! ./$.global */ 17)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ }),
/* 32 */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/$.uid.js ***!
  \********************************************/
/***/ (function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ }),
/* 33 */
/*!**********************************************************!*\
  !*** ./~/core-js/library/modules/es6.string.iterator.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(/*! ./$.string-at */ 34)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(/*! ./$.iter-define */ 14)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ }),
/* 34 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.string-at.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(/*! ./$.to-integer */ 35)
	  , defined   = __webpack_require__(/*! ./$.defined */ 13);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ }),
/* 35 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.to-integer.js ***!
  \***************************************************/
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ }),
/* 36 */
/*!********************************************************!*\
  !*** ./~/core-js/library/modules/core.get-iterator.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(/*! ./$.an-object */ 37)
	  , get      = __webpack_require__(/*! ./core.get-iterator-method */ 39);
	module.exports = __webpack_require__(/*! ./$.core */ 18).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ }),
/* 37 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.an-object.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(/*! ./$.is-object */ 38);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ }),
/* 38 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.is-object.js ***!
  \**************************************************/
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 39 */
/*!***************************************************************!*\
  !*** ./~/core-js/library/modules/core.get-iterator-method.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(/*! ./$.classof */ 40)
	  , ITERATOR  = __webpack_require__(/*! ./$.wks */ 30)('iterator')
	  , Iterators = __webpack_require__(/*! ./$.iterators */ 9);
	module.exports = __webpack_require__(/*! ./$.core */ 18).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ }),
/* 40 */
/*!************************************************!*\
  !*** ./~/core-js/library/modules/$.classof.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(/*! ./$.cof */ 12)
	  , TAG = __webpack_require__(/*! ./$.wks */ 30)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ }),
/* 41 */
/*!******************************!*\
  !*** ./src/model/content.js ***!
  \******************************/
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var playerData = [[{
	    "id": 1,
	    "player_name": "Sélène",
	    "score": 84,
	    "number_balls": 20,
	    "out_way": "Catch"
	}, {
	    "id": 2,
	    "player_name": "Bérénice",
	    "score": 165,
	    "number_balls": 30,
	    "out_way": "Catch"
	}, {
	    "id": 3,
	    "player_name": "Lucrèce",
	    "score": 97,
	    "number_balls": 40,
	    "out_way": "Strike"
	}, {
	    "id": 4,
	    "player_name": "Agnès",
	    "score": 142,
	    "number_balls": 50,
	    "out_way": "Run Out"
	}, {
	    "id": 5,
	    "player_name": "Océanne",
	    "score": 70,
	    "number_balls": 60,
	    "out_way": "Run Out"
	}, {
	    "id": 6,
	    "player_name": "Styrbjörn",
	    "score": 107,
	    "number_balls": 70,
	    "out_way": "Run Out"
	}, {
	    "id": 7,
	    "player_name": "Illustrée",
	    "score": 29,
	    "number_balls": 80,
	    "out_way": "Run Out"
	}, {
	    "id": 8,
	    "player_name": "Marie-ève",
	    "score": 3,
	    "number_balls": 80,
	    "out_way": "Strike"
	}, {
	    "id": 9,
	    "player_name": "Sòng",
	    "score": 71,
	    "number_balls": 20,
	    "out_way": "Run Out"
	}, {
	    "id": 10,
	    "player_name": "Maëlann",
	    "score": 56,
	    "number_balls": 10,
	    "out_way": "Strike"
	}, {
	    "id": 11,
	    "player_name": "Marlène",
	    "score": 43,
	    "number_balls": 5,
	    "out_way": "Strike"
	}]];
	exports.playerData = playerData;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map