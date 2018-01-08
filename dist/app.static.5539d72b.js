(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout/style");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu/style");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("typeface-roboto");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("typeface-roboto-slab");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("typeface-roboto-condensed");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("typeface-lora");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = __webpack_require__(13);

var _App = __webpack_require__(14);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(
      _reactHotLoader.AppContainer,
      null,
      _react2.default.createElement(Comp, null)
    ), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);

  // Hot Module Replacement
  if (false) {
    module.hot.accept('./App', function () {
      render(require('./App').default);
    });
  }
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _layout = __webpack_require__(2);

var _layout2 = _interopRequireDefault(_layout);

var _breadcrumb = __webpack_require__(15);

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _menu = __webpack_require__(3);

var _menu2 = _interopRequireDefault(_menu);

var _icon = __webpack_require__(16);

var _icon2 = _interopRequireDefault(_icon);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  #root {\n    min-width: 100%;\n    min-height: 100%;\n    display: flex;\n  }\n  html {\n    ', '\n  }\n'], ['\n  ', '\n  #root {\n    min-width: 100%;\n    min-height: 100%;\n    display: flex;\n  }\n  html {\n    ', '\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 120px;\n  height: 31px;\n  background: rgba(255,255,255,.2);\n  ', '\n  float: left;\n'], ['\n  width: 120px;\n  height: 31px;\n  background: rgba(255,255,255,.2);\n  ', '\n  float: left;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  height: auto;\n  background-color: #fff;\n'], ['\n  height: auto;\n  background-color: #fff;\n']);

__webpack_require__(4);

__webpack_require__(17);

__webpack_require__(5);

__webpack_require__(18);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _styledReset = __webpack_require__(19);

var _styledReset2 = _interopRequireDefault(_styledReset);

var _reactStaticRoutes = __webpack_require__(20);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _styledComponents = __webpack_require__(6);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

var _themes = __webpack_require__(28);

var _themes2 = _interopRequireDefault(_themes);

var _CensusFooter = __webpack_require__(31);

var _CensusFooter2 = _interopRequireDefault(_CensusFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(0, _styledComponents.injectGlobal)(_templateObject, _styledReset2.default, _themes2.default.font.sans.regular);

var Logo = _styledComponents2.default.div(_templateObject2, '' /* margin: 16px 28px 16px 0; */);

var SubMenu = _menu2.default.SubMenu;
var Header = _layout2.default.Header,
    Content = _layout2.default.Content,
    Footer = _layout2.default.Footer;

var MenuItemGroup = _menu2.default.ItemGroup;

var CensusHeader = (0, _styledComponents2.default)(Header)(_templateObject3);

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      current: 'mail'
      // collapsed: false,
    }, _this.handleClick = function (e) {
      console.log('click ', e);
      _this.setState({
        current: e.key
      });
    }, _this.toggle = function () {
      _this.setState({
        collapsed: !_this.state.collapsed
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactStatic.Router,
        null,
        _react2.default.createElement(
          _layout2.default,
          null,
          _react2.default.createElement(
            CensusHeader,
            null,
            _react2.default.createElement(Logo, null),
            _react2.default.createElement(
              _menu2.default,
              {
                theme: 'light',
                mode: 'horizontal',
                defaultSelectedKeys: ['1'],
                style: { lineHeight: '2em' }
              },
              _react2.default.createElement(
                _menu2.default.Item,
                { key: '1' },
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/' },
                  _react2.default.createElement(_icon2.default, { type: 'home' }),
                  'Home'
                )
              ),
              _react2.default.createElement(
                _menu2.default.Item,
                { key: '2' },
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/tutorials' },
                  _react2.default.createElement(_icon2.default, { type: 'fork' }),
                  'Tutorials'
                )
              ),
              _react2.default.createElement(
                _menu2.default.Item,
                { key: '3' },
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/blog' },
                  _react2.default.createElement(_icon2.default, { type: 'bars' }),
                  'Blog'
                )
              ),
              _react2.default.createElement(
                _menu2.default.Item,
                { key: '4' },
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/about' },
                  _react2.default.createElement(_icon2.default, { type: 'pushpin-o' }),
                  'About'
                )
              )
            )
          ),
          _react2.default.createElement(
            Content,
            { style: { padding: '0 50px' } },
            _react2.default.createElement(
              _breadcrumb2.default,
              { style: { margin: '16px 0' } },
              _react2.default.createElement(
                _breadcrumb2.default.Item,
                null,
                'Home'
              ),
              _react2.default.createElement(
                _breadcrumb2.default.Item,
                null,
                'List'
              ),
              _react2.default.createElement(
                _breadcrumb2.default.Item,
                null,
                'App'
              )
            ),
            _react2.default.createElement(_layout2.default, null)
          ),
          _react2.default.createElement(
            Footer,
            null,
            _react2.default.createElement(_CensusFooter2.default, null)
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/breadcrumb");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/breadcrumb/style");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon/style");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("styled-reset");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(21);

var _Home = __webpack_require__(22);

var _Home2 = _interopRequireDefault(_Home);

var _Tutorials = __webpack_require__(23);

var _Tutorials2 = _interopRequireDefault(_Tutorials);

var _About = __webpack_require__(24);

var _About2 = _interopRequireDefault(_About);

var _Post = __webpack_require__(25);

var _Post2 = _interopRequireDefault(_Post);

var _Blog = __webpack_require__(26);

var _Blog2 = _interopRequireDefault(_Blog);

var _ = __webpack_require__(27);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Template Imports


// Template Map
var templateMap = {
  t_0: _Home2.default,
  t_1: _Tutorials2.default,
  t_2: _About2.default,
  t_3: _Post2.default,
  t_4: _Blog2.default,
  t_5: _2.default

  // Template Tree
};var templateTree = { c: { "404": { t: "t_5" }, "/": { t: "t_0" }, "tutorials": { t: "t_1" }, "about": { t: "t_2" }, "blog": { c: { "post": { c: { 1: { t: "t_3" }, 2: { t: "t_3" }, 3: { t: "t_3" }, 4: { t: "t_3" }, 5: { t: "t_3" }, 6: { t: "t_3" }, 7: { t: "t_3" }, 8: { t: "t_3" }, 9: { t: "t_3" }, "10": { t: "t_3" }, "11": { t: "t_3" }, "12": { t: "t_3" }, "13": { t: "t_3" }, "14": { t: "t_3" }, "15": { t: "t_3" }, "16": { t: "t_3" }, "17": { t: "t_3" }, "18": { t: "t_3" }, "19": { t: "t_3" }, "20": { t: "t_3" }, "21": { t: "t_3" }, "22": { t: "t_3" }, "23": { t: "t_3" }, "24": { t: "t_3" }, "25": { t: "t_3" }, "26": { t: "t_3" }, "27": { t: "t_3" }, "28": { t: "t_3" }, "29": { t: "t_3" }, "30": { t: "t_3" }, "31": { t: "t_3" }, "32": { t: "t_3" }, "33": { t: "t_3" }, "34": { t: "t_3" }, "35": { t: "t_3" }, "36": { t: "t_3" }, "37": { t: "t_3" }, "38": { t: "t_3" }, "39": { t: "t_3" }, "40": { t: "t_3" }, "41": { t: "t_3" }, "42": { t: "t_3" }, "43": { t: "t_3" }, "44": { t: "t_3" }, "45": { t: "t_3" }, "46": { t: "t_3" }, "47": { t: "t_3" }, "48": { t: "t_3" }, "49": { t: "t_3" }, "50": { t: "t_3" }, "51": { t: "t_3" }, "52": { t: "t_3" }, "53": { t: "t_3" }, "54": { t: "t_3" }, "55": { t: "t_3" }, "56": { t: "t_3" }, "57": { t: "t_3" }, "58": { t: "t_3" }, "59": { t: "t_3" }, "60": { t: "t_3" }, "61": { t: "t_3" }, "62": { t: "t_3" }, "63": { t: "t_3" }, "64": { t: "t_3" }, "65": { t: "t_3" }, "66": { t: "t_3" }, "67": { t: "t_3" }, "68": { t: "t_3" }, "69": { t: "t_3" }, "70": { t: "t_3" }, "71": { t: "t_3" }, "72": { t: "t_3" }, "73": { t: "t_3" }, "74": { t: "t_3" }, "75": { t: "t_3" }, "76": { t: "t_3" }, "77": { t: "t_3" }, "78": { t: "t_3" }, "79": { t: "t_3" }, "80": { t: "t_3" }, "81": { t: "t_3" }, "82": { t: "t_3" }, "83": { t: "t_3" }, "84": { t: "t_3" }, "85": { t: "t_3" }, "86": { t: "t_3" }, "87": { t: "t_3" }, "88": { t: "t_3" }, "89": { t: "t_3" }, "90": { t: "t_3" }, "91": { t: "t_3" }, "92": { t: "t_3" }, "93": { t: "t_3" }, "94": { t: "t_3" }, "95": { t: "t_3" }, "96": { t: "t_3" }, "97": { t: "t_3" }, "98": { t: "t_3" }, "99": { t: "t_3" }, "100": { t: "t_3" } } } }, t: "t_4" } }

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  var parts = path === '/' ? ['/'] : path.split('/').filter(function (d) {
    return d;
  });
  var cursor = templateTree;
  try {
    parts.forEach(function (part) {
      cursor = cursor.c[part];
    });
    return templateMap[cursor.t];
  } catch (e) {
    return false;
  }
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;

      var renderProps = {
        templateMap: templateMap,
        templateTree: templateTree,
        getComponentForPath: getComponentForPath
      };
      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }
      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getComponentForPath(props.location.pathname);
          if (!Comp) {
            Comp = getComponentForPath('404');
          }
          return Comp && _react2.default.createElement(Comp, props);
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _layout = __webpack_require__(2);

var _layout2 = _interopRequireDefault(_layout);

var _menu = __webpack_require__(3);

var _menu2 = _interopRequireDefault(_menu);

__webpack_require__(4);

__webpack_require__(5);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubMenu = _menu2.default.SubMenu;
var Content = _layout2.default.Content,
    Sider = _layout2.default.Sider;

var MenuItemGroup = _menu2.default.ItemGroup;

//
// export default getSiteProps(() => (
//   <div>
//     <Card title="Welcome to" style={{ width: '100%' }} bodyStyle={{ padding: 0 }}>
//       <div className="custom-image">
//         <img alt="react-static" width="100%" src={logoImg} />
//       </div>
//     </Card>
//   </div>
// ))

var Home = function Home() {
  return _react2.default.createElement(
    _layout2.default,
    { style: { padding: '24px 0', background: '#fff' } },
    _react2.default.createElement(
      Sider,
      { width: 200, style: { background: '#fff' } },
      _react2.default.createElement(
        _menu2.default,
        {
          mode: 'inline',
          defaultSelectedKeys: ['1'],
          defaultOpenKeys: ['sub1'],
          style: { height: '100%' }
        },
        _react2.default.createElement(
          SubMenu,
          { key: 'sub1', title: _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement(Icon, { type: 'user' }),
              'subnav 1'
            ) },
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '1' },
            'option1'
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '2' },
            'option2'
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '3' },
            'option3'
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '4' },
            'option4'
          )
        ),
        _react2.default.createElement(
          SubMenu,
          { key: 'sub2', title: _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement(Icon, { type: 'laptop' }),
              'subnav 2'
            ) },
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '5' },
            'option5'
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '6' },
            'option6'
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '7' },
            'option7'
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '8' },
            'option8'
          )
        ),
        _react2.default.createElement(
          SubMenu,
          { key: 'sub3', title: _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement(Icon, { type: 'notification' }),
              'subnav 3'
            ) },
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '9' },
            'option9'
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '10' },
            'option10'
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '11' },
            'option11'
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '12' },
            'option12'
          )
        )
      )
    ),
    _react2.default.createElement(
      Content,
      { style: { padding: '0 24px', minHeight: 280 } },
      'Content'
    )
  );
};

exports.default = Home;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _layout = __webpack_require__(2);

var _layout2 = _interopRequireDefault(_layout);

var _menu = __webpack_require__(3);

var _menu2 = _interopRequireDefault(_menu);

__webpack_require__(4);

__webpack_require__(5);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubMenu = _menu2.default.SubMenu;
var Content = _layout2.default.Content,
    Sider = _layout2.default.Sider;

var MenuItemGroup = _menu2.default.ItemGroup;

var Tutorials = function Tutorials() {
  return _react2.default.createElement(
    _layout2.default,
    { style: { padding: '24px 0', background: '#fff' } },
    _react2.default.createElement(
      Sider,
      { width: 200, style: { background: '#fff' } },
      _react2.default.createElement(
        _menu2.default,
        {
          mode: 'inline',
          defaultSelectedKeys: ['1'],
          defaultOpenKeys: ['sub1'],
          style: { height: '100%' }
        },
        _react2.default.createElement(
          SubMenu,
          { key: 'sub1', title: _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement(Icon, { type: 'user' }),
              'subnav 1'
            ) },
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '1' },
            'option1'
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '2' },
            'option2'
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '3' },
            'option3'
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '4' },
            'option4'
          )
        ),
        _react2.default.createElement(
          SubMenu,
          { key: 'sub2', title: _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement(Icon, { type: 'laptop' }),
              'subnav 2'
            ) },
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '5' },
            'option5'
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '6' },
            'option6'
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '7' },
            'option7'
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '8' },
            'option8'
          )
        ),
        _react2.default.createElement(
          SubMenu,
          { key: 'sub3', title: _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement(Icon, { type: 'notification' }),
              'subnav 3'
            ) },
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '9' },
            'option9'
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '10' },
            'option10'
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '11' },
            'option11'
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '12' },
            'option12'
          )
        )
      )
    ),
    _react2.default.createElement(
      Content,
      { style: { padding: '0 24px', minHeight: 280 } },
      'Content'
    )
  );
};

exports.default = Tutorials;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Example of using paths alias via tsconfig.json to easily re-use legacy code
// Also, use TypeScript and JavaScript interchangeably.
// import aliasExample from "@myPathAlias/component";
//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'This is what we\'re all about.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'React, static sites, performance, speed. It\'s the stuff that makes us tick.'
    ),
    aliasExample
  );
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = (0, _reactStatic.getRouteProps)(function (_ref) {
  var post = _ref.post;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactStatic.Link,
      { to: '/blog/' },
      '<',
      ' Back'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h3',
      null,
      post.title
    ),
    _react2.default.createElement(
      'p',
      null,
      post.body
    )
  );
});

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = (0, _reactStatic.getRouteProps)(function (_ref) {
  var posts = _ref.posts;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'It\'s blog time.'
    ),
    _react2.default.createElement('br', null),
    'All Posts:',
    _react2.default.createElement(
      'ul',
      null,
      posts.map(function (post) {
        return _react2.default.createElement(
          'li',
          { key: post.id },
          _react2.default.createElement(
            _reactStatic.Link,
            { to: '/blog/post/' + post.id + '/' },
            post.title
          )
        );
      })
    )
  );
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      '404 - Oh no\'s! We couldn\'t find that page :('
    )
  );
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CensusTheme = undefined;

var _Census = __webpack_require__(29);

var _Census2 = _interopRequireDefault(_Census);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//consider adding switch for theming with state:
//https://stackoverflow.com/questions/39583958/conditional-export-in-es2015

exports.CensusTheme = _Census2.default;
exports.default = _Census2.default;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _polished = __webpack_require__(30);

var _styledComponents = __webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

// from reactjs.org: https://github.com/reactjs/reactjs.org/blob/1349493721cd03d7185248d37937608f15a446aa/src/css/reset.css
// html {
//   box-sizing: border-box;
//   font-family: -apple-system, BlinkMacSystemFont,
//     "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
//     "Fira Sans", "Droid Sans", "Helvetica Neue",
//     sans-serif;
//   font-weight: 400;
//   font-style: normal;
//   -webkit-font-smoothing: antialiased;
// }


// FONT MAKER


// self hosted fonts see docs for acceptable
// weights and styles: https://github.com/KyleAMathews/typefaces
var makeFont = function makeFont(font, weight, style, display) {
  return '\n    font-family: ' + font + ';\n    font-weight: ' + weight + ';\n    font-style: ' + style + ';\n    font-display: ' + display + ';\n  ';
};
// FONT VARIABLES
var sans = 'Roboto';
var slab = 'Roboto Slab';
var serif = 'Lora';
var condensed = 'Roboto Condensed';

// COLOR VARIABLES
var _inactive = '#78909C';
var _active = '#4B636E';
var _highlight = '#112E51';
var _bold = '#205493';
var _accent = '#0095A8';
var _action = '#FF7043';

// from reactjs.org: https://github.com/reactjs/reactjs.org/blob/master/src/theme.js

// const colors = {
//   lighter: '#373940', // light blue
//   dark: '#282c34', // dark blue
//   darker: '#20232a', // really dark blue
//   brand: '#61dafb', // electric blue
//   brandLight: '#bbeffd',
//   text: '#1a1a1a', // very dark grey / black substitute
//   subtle: '#6d6d6d', // light grey for text
//   subtleOnDark: '#999',
//   divider: '#ececec', // very light grey
//   note: '#ffe564', // yellow
//   error: '#ff6464', // yellow
//   white: '#ffffff',
//   black: '#000000',
// };

// SCALAR VARIABLES
var modScalar = 1.25; // from: http://www.modularscale.com/?1&em&1.25
var baseScale = '1rem';

exports.default = {
  font: {
    serif: {
      regular: makeFont(serif, 400, 'normal', 'swap'),
      italic: makeFont(serif, 400, 'italic', 'swap'),
      bold: makeFont(serif, 700, 'normal', 'swap'),
      boldItalic: makeFont(serif, 700, 'italic', 'swap')
    },
    condensed: {
      light: makeFont(condensed, 300, 'normal', 'swap'),
      lightItalic: makeFont(condensed, 300, 'italic', 'swap'),
      regular: makeFont(condensed, 400, 'normal', 'swap'),
      italic: makeFont(condensed, 400, 'italic', 'swap'),
      bold: makeFont(condensed, 700, 'normal', 'swap'),
      boldItalic: makeFont(condensed, 700, 'italic', 'swap')
    },
    slab: {
      thin: makeFont(slab, 100, 'normal', 'swap'),
      light: makeFont(slab, 300, 'normal', 'swap'),
      regular: makeFont(slab, 400, 'normal', 'swap'),
      bold: makeFont(slab, 700, 'normal', 'swap')
    },
    sans: {
      thin: makeFont(sans, 100, 'normal', 'swap'),
      thinItalic: makeFont(sans, 100, 'italic', 'swap'),
      light: makeFont(sans, 300, 'normal', 'swap'),
      lightItalic: makeFont(sans, 300, 'italic', 'swap'),
      regular: makeFont(sans, 400, 'normal', 'swap'),
      italic: makeFont(sans, 400, 'italic', 'swap'),
      medium: makeFont(sans, 500, 'normal', 'swap'),
      mediumItalic: makeFont(sans, 500, 'italic', 'swap'),
      bold: makeFont(sans, 700, 'normal', 'swap'),
      boldItalic: makeFont(sans, 700, 'italic', 'swap'),
      black: makeFont(sans, 900, 'normal', 'swap'),
      blackItalic: makeFont(sans, 900, 'italic', 'swap')
    }
  },
  color: {
    inactive: function inactive(level) {
      return (0, _polished.tint)(level / 10, _inactive);
    },
    active: function active(level) {
      return (0, _polished.tint)(level / 10, _active);
    },
    highlight: function highlight(level) {
      return (0, _polished.tint)(level / 10, _highlight);
    },
    bold: function bold(level) {
      return (0, _polished.tint)(level / 10, _bold);
    },
    accent: function accent(level) {
      return (0, _polished.tint)(level / 10, _accent);
    },
    action: function action(level) {
      return (0, _polished.tint)(level / 10, _action);
    }
  },
  size: function size(scale) {
    return (0, _polished.modularScale)(scale, baseScale, modScalar);
  }
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  text-align: center;\n'], ['\n  text-align: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width:100%;\n  background-color: yellow;\n'], ['\n  width:100%;\n  background-color: yellow;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(6);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Message = _styledComponents2.default.p(_templateObject);
var Footer = _styledComponents2.default.div(_templateObject2);

exports.default = function (props) {
  return _react2.default.createElement(
    Footer,
    null,
    _react2.default.createElement(
      Message,
      null,
      'ASS Footer'
    )
  );
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=app.static.5539d72b.js.map