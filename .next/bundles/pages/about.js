
          window.__NEXT_REGISTER_PAGE('/about', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(570);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/jim.cummins/projects/item-graph/components/App.js";

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement("main", {
    "data-jsx": 412430643,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, children, _react2.default.createElement(_style2.default, {
    styleId: 412430643,
    css: "\n      * {\n        font-family: Menlo, Monaco, \"Lucida Console\", \"Liberation Mono\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Courier New\", monospace, serif;\n      }\n      body {\n        margin: 0;\n        padding: 25px 50px;\n      }\n      a {\n        color: #22BAD9;\n      }\n      p {\n        font-size: 14px;\n        line-height: 24px;\n      }\n      article {\n        margin: 0 auto;\n        max-width: 650px;\n      }\n      button {\n        align-items: center;\n        background-color: #22BAD9;\n        border: 0;\n        color: white;\n        display: flex;\n        padding: 5px 7px;\n      }\n      button:active {\n        background-color: #1B9DB7;\n        transition: background-color .3s\n      }\n      button:focus {\n        outline: none;\n      }\n    "
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/jim.cummins/projects/item-graph/components/App.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jim.cummins/projects/item-graph/components/App.js"); } } })();

/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(570);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(648);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jim.cummins/projects/item-graph/components/Header.js';

exports.default = function (_ref) {
  var pathname = _ref.pathname;
  return _react2.default.createElement('header', {
    'data-jsx': 2280026175,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('a', { className: pathname === '/' && 'is-active', 'data-jsx': 2280026175,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, 'Home')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('a', { className: pathname === '/about' && 'is-active', 'data-jsx': 2280026175,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'About')), _react2.default.createElement(_style2.default, {
    styleId: 2280026175,
    css: 'header[data-jsx="2280026175"] {margin-bottom: 25px;}a[data-jsx="2280026175"] {font-size: 14px;margin-right: 15px;text-decoration: none;}.is-active[data-jsx="2280026175"] {text-decoration: underline;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlnQixBQUNGLCtCQUNjLG9CQUNyQixDQUNFLDBCQUNlLGdCQUNHLG1CQUNHLHNCQUN2QixDQUNXLG1DQUNpQiwyQkFDNUIiLCJmaWxlIjoiY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ppbS5jdW1taW5zL3Byb2plY3RzL2l0ZW0tZ3JhcGgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0ICh7IHBhdGhuYW1lIH0pID0+IChcbiAgPGhlYWRlcj5cbiAgICA8TGluayBwcmVmZXRjaCBocmVmPScvJz5cbiAgICAgIDxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvJyAmJiAnaXMtYWN0aXZlJ30+SG9tZTwvYT5cbiAgICA8L0xpbms+XG5cbiAgICA8TGluayBwcmVmZXRjaCBocmVmPScvYWJvdXQnPlxuICAgICAgPGEgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy9hYm91dCcgJiYgJ2lzLWFjdGl2ZSd9PkFib3V0PC9hPlxuICAgIDwvTGluaz5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGhlYWRlciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5pcy1hY3RpdmUge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvaGVhZGVyPlxuKVxuIl19 */\n/*@ sourceURL=components/Header.js */'
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/jim.cummins/projects/item-graph/components/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jim.cummins/projects/item-graph/components/Header.js"); } } })();

/***/ }),

/***/ 667:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(653);

var _App2 = _interopRequireDefault(_App);

var _Header = __webpack_require__(654);

var _Header2 = _interopRequireDefault(_Header);

var _About = __webpack_require__(679);

var _About2 = _interopRequireDefault(_About);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jim.cummins/projects/item-graph/pages/about.js?entry';

exports.default = function (props) {
  return _react2.default.createElement(_App2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_Header2.default, { pathname: props.url.pathname, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), _react2.default.createElement(_About2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/jim.cummins/projects/item-graph/pages/about.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jim.cummins/projects/item-graph/pages/about.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/about")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(667);


/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactRemarkable = __webpack_require__(680);

var _reactRemarkable2 = _interopRequireDefault(_reactRemarkable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jim.cummins/projects/item-graph/components/About.js';

exports.default = function (props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_reactRemarkable2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, '\n\n## Vendors\n\n### Adding items\n\n1. All items added are placed in their global catalog by default.\n2. Any attributes uploaded with the item are either added as attributes pending / or optionally published immediately.\n3. Extra: We found the following pending attributes on this item, we\'d like to suggest the following additional attributes.\n4. If they have exclusion catalogs then they are asked which exclusion catalogs they want to exclude the item(s) from.\n5. If they have inclusion catalogs then they can select which to include the item(s) in.\n\n### My Global Catalog\n\n1. The global catalog is hidden by default.\n2. but if they want to share it with someone then we\'ll create an exclusion catalog for them.\n3. Offer a preview button that allows the vendor to see the result of the change.\n4. They will be able to see who\n5. They may simply never share their global catalog if they only want to add certain items.\n6. Inclusion catalogs are empty by default and you add specific items to them.\n7. Exclusion catalogs are full by default and you remove specific items from them.\n8. When creating a catalog, add all to the catalog.\n9. May archive items - can see but are deprecated (no longer available to put in a catalog)\n10. May delete items - cannot be seen by anyone but administrative staff\n11. A copy just fills in the new fields but does not commit them yet (since often a change is a variety)\n12. Every change to an item\'s attributes or attribute values is a new version of that item\n13. Version changes may either be (added information about an existing item)\n14. Did we learn more information about the same item?\n15. Was a new version of the item released?\n\nIs this a new variety of the same item?\nIs this adding new information about the same item?\n\n## Retailers\n\n1. Keep detailed notes on items\n\n'));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/jim.cummins/projects/item-graph/components/About.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jim.cummins/projects/item-graph/components/About.js"); } } })();

/***/ })

},[668]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9hYm91dC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwLmpzP2NiNzFhOGIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/Y2I3MWE4YiIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC5qcz9jYjcxYThiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWJvdXQuanM/MjYyMzUzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxtYWluPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgKiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBcIkx1Y2lkYSBDb25zb2xlXCIsIFwiTGliZXJhdGlvbiBNb25vXCIsIFwiRGVqYVZ1IFNhbnMgTW9ub1wiLCBcIkJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZSwgc2VyaWY7XG4gICAgICB9XG4gICAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAyNXB4IDUwcHg7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICMyMkJBRDk7XG4gICAgICB9XG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgIH1cbiAgICAgIGFydGljbGUge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiA2NTBweDtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMkJBRDk7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nOiA1cHggN3B4O1xuICAgICAgfVxuICAgICAgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxQjlEQjc7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzXG4gICAgICB9XG4gICAgICBidXR0b246Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9tYWluPlxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9BcHAuanMiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0ICh7IHBhdGhuYW1lIH0pID0+IChcbiAgPGhlYWRlcj5cbiAgICA8TGluayBwcmVmZXRjaCBocmVmPScvJz5cbiAgICAgIDxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvJyAmJiAnaXMtYWN0aXZlJ30+SG9tZTwvYT5cbiAgICA8L0xpbms+XG5cbiAgICA8TGluayBwcmVmZXRjaCBocmVmPScvYWJvdXQnPlxuICAgICAgPGEgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy9hYm91dCcgJiYgJ2lzLWFjdGl2ZSd9PkFib3V0PC9hPlxuICAgIDwvTGluaz5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGhlYWRlciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5pcy1hY3RpdmUge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvaGVhZGVyPlxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJpbXBvcnQgQXBwIGZyb20gJy4uL2NvbXBvbmVudHMvQXBwJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBBYm91dCBmcm9tICcuLi9jb21wb25lbnRzL0Fib3V0J1xuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IChcbiAgPEFwcD5cbiAgICA8SGVhZGVyIHBhdGhuYW1lPXtwcm9wcy51cmwucGF0aG5hbWV9IC8+XG4gICAgPEFib3V0IC8+XG4gIDwvQXBwPlxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvYWJvdXQuanM/ZW50cnkiLCJpbXBvcnQgTWFya2Rvd24gZnJvbSAncmVhY3QtcmVtYXJrYWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TWFya2Rvd24+e2BcblxuIyMgVmVuZG9yc1xuXG4jIyMgQWRkaW5nIGl0ZW1zXG5cbjEuIEFsbCBpdGVtcyBhZGRlZCBhcmUgcGxhY2VkIGluIHRoZWlyIGdsb2JhbCBjYXRhbG9nIGJ5IGRlZmF1bHQuXG4yLiBBbnkgYXR0cmlidXRlcyB1cGxvYWRlZCB3aXRoIHRoZSBpdGVtIGFyZSBlaXRoZXIgYWRkZWQgYXMgYXR0cmlidXRlcyBwZW5kaW5nIC8gb3Igb3B0aW9uYWxseSBwdWJsaXNoZWQgaW1tZWRpYXRlbHkuXG4zLiBFeHRyYTogV2UgZm91bmQgdGhlIGZvbGxvd2luZyBwZW5kaW5nIGF0dHJpYnV0ZXMgb24gdGhpcyBpdGVtLCB3ZSdkIGxpa2UgdG8gc3VnZ2VzdCB0aGUgZm9sbG93aW5nIGFkZGl0aW9uYWwgYXR0cmlidXRlcy5cbjQuIElmIHRoZXkgaGF2ZSBleGNsdXNpb24gY2F0YWxvZ3MgdGhlbiB0aGV5IGFyZSBhc2tlZCB3aGljaCBleGNsdXNpb24gY2F0YWxvZ3MgdGhleSB3YW50IHRvIGV4Y2x1ZGUgdGhlIGl0ZW0ocykgZnJvbS5cbjUuIElmIHRoZXkgaGF2ZSBpbmNsdXNpb24gY2F0YWxvZ3MgdGhlbiB0aGV5IGNhbiBzZWxlY3Qgd2hpY2ggdG8gaW5jbHVkZSB0aGUgaXRlbShzKSBpbi5cblxuIyMjIE15IEdsb2JhbCBDYXRhbG9nXG5cbjEuIFRoZSBnbG9iYWwgY2F0YWxvZyBpcyBoaWRkZW4gYnkgZGVmYXVsdC5cbjIuIGJ1dCBpZiB0aGV5IHdhbnQgdG8gc2hhcmUgaXQgd2l0aCBzb21lb25lIHRoZW4gd2UnbGwgY3JlYXRlIGFuIGV4Y2x1c2lvbiBjYXRhbG9nIGZvciB0aGVtLlxuMy4gT2ZmZXIgYSBwcmV2aWV3IGJ1dHRvbiB0aGF0IGFsbG93cyB0aGUgdmVuZG9yIHRvIHNlZSB0aGUgcmVzdWx0IG9mIHRoZSBjaGFuZ2UuXG40LiBUaGV5IHdpbGwgYmUgYWJsZSB0byBzZWUgd2hvXG41LiBUaGV5IG1heSBzaW1wbHkgbmV2ZXIgc2hhcmUgdGhlaXIgZ2xvYmFsIGNhdGFsb2cgaWYgdGhleSBvbmx5IHdhbnQgdG8gYWRkIGNlcnRhaW4gaXRlbXMuXG42LiBJbmNsdXNpb24gY2F0YWxvZ3MgYXJlIGVtcHR5IGJ5IGRlZmF1bHQgYW5kIHlvdSBhZGQgc3BlY2lmaWMgaXRlbXMgdG8gdGhlbS5cbjcuIEV4Y2x1c2lvbiBjYXRhbG9ncyBhcmUgZnVsbCBieSBkZWZhdWx0IGFuZCB5b3UgcmVtb3ZlIHNwZWNpZmljIGl0ZW1zIGZyb20gdGhlbS5cbjguIFdoZW4gY3JlYXRpbmcgYSBjYXRhbG9nLCBhZGQgYWxsIHRvIHRoZSBjYXRhbG9nLlxuOS4gTWF5IGFyY2hpdmUgaXRlbXMgLSBjYW4gc2VlIGJ1dCBhcmUgZGVwcmVjYXRlZCAobm8gbG9uZ2VyIGF2YWlsYWJsZSB0byBwdXQgaW4gYSBjYXRhbG9nKVxuMTAuIE1heSBkZWxldGUgaXRlbXMgLSBjYW5ub3QgYmUgc2VlbiBieSBhbnlvbmUgYnV0IGFkbWluaXN0cmF0aXZlIHN0YWZmXG4xMS4gQSBjb3B5IGp1c3QgZmlsbHMgaW4gdGhlIG5ldyBmaWVsZHMgYnV0IGRvZXMgbm90IGNvbW1pdCB0aGVtIHlldCAoc2luY2Ugb2Z0ZW4gYSBjaGFuZ2UgaXMgYSB2YXJpZXR5KVxuMTIuIEV2ZXJ5IGNoYW5nZSB0byBhbiBpdGVtJ3MgYXR0cmlidXRlcyBvciBhdHRyaWJ1dGUgdmFsdWVzIGlzIGEgbmV3IHZlcnNpb24gb2YgdGhhdCBpdGVtXG4xMy4gVmVyc2lvbiBjaGFuZ2VzIG1heSBlaXRoZXIgYmUgKGFkZGVkIGluZm9ybWF0aW9uIGFib3V0IGFuIGV4aXN0aW5nIGl0ZW0pXG4xNC4gRGlkIHdlIGxlYXJuIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHNhbWUgaXRlbT9cbjE1LiBXYXMgYSBuZXcgdmVyc2lvbiBvZiB0aGUgaXRlbSByZWxlYXNlZD9cblxuSXMgdGhpcyBhIG5ldyB2YXJpZXR5IG9mIHRoZSBzYW1lIGl0ZW0/XG5JcyB0aGlzIGFkZGluZyBuZXcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHNhbWUgaXRlbT9cblxuIyMgUmV0YWlsZXJzXG5cbjEuIEtlZXAgZGV0YWlsZWQgbm90ZXMgb24gaXRlbXNcblxuYH08L01hcmtkb3duPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0Fib3V0LmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7Ozs7O0FBREE7QUFBQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUFBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQUFBO0FBQUE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7OztBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        