'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _App = require('../components/App');

var _App2 = _interopRequireDefault(_App);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Dock = require('../components/Dock');

var _Dock2 = _interopRequireDefault(_Dock);

var _reactRemarkable = require('react-remarkable');

var _reactRemarkable2 = _interopRequireDefault(_reactRemarkable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jim.cummins/projects/item-graph/pages/my-items.js?entry';

exports.default = function (props) {
  return _react2.default.createElement(_App2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: 3238250390,
    css: '.markdown-wrapper[data-jsx="3238250390"] {padding: 3rem 3rem 1.5rem 2rem;margin-bottom: 30vh;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL215LWl0ZW1zLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9nQixBQUNTLDBDQUNjLCtCQUNYLG9CQUNyQiIsImZpbGUiOiJwYWdlcy9teS1pdGVtcy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamltLmN1bW1pbnMvcHJvamVjdHMvaXRlbS1ncmFwaCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSAnLi4vY29tcG9uZW50cy9BcHAnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IERvY2sgZnJvbSAnLi4vY29tcG9uZW50cy9Eb2NrJ1xuaW1wb3J0IE1hcmtkb3duIGZyb20gJ3JlYWN0LXJlbWFya2FibGUnO1xuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IChcbiAgPEFwcD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAubWFya2Rvd24td3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmc6IDNyZW0gM3JlbSAxLjVyZW0gMnJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzB2aDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPEhlYWRlciBwYXRobmFtZT17cHJvcHMudXJsLnBhdGhuYW1lfSAvPlxuICAgIDxEb2NrPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJrZG93bi13cmFwcGVyXCI+XG4gICAgICAgIDxNYXJrZG93biBjbGFzc05hbWU9XCJtYXJrZG93blwiPntgXG4jIFRlc3RpbmdcbkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXG4gICAgICAgIGB9PC9NYXJrZG93bj5cbiAgICAgIDwvZGl2PlxuICAgIDwvRG9jaz5cbiAgPC9BcHA+XG4pXG4iXX0= */\n/*@ sourceURL=pages/my-items.js?entry */'
  }), _react2.default.createElement(_Header2.default, { pathname: props.url.pathname, __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement(_Dock2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement('div', { className: 'markdown-wrapper', 'data-jsx': 3238250390,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement(_reactRemarkable2.default, { className: 'markdown', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, '\n# Testing\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        '))));
};