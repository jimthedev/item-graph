'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDock = require('react-dock');

var _reactDock2 = _interopRequireDefault(_reactDock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jim.cummins/projects/item-graph/components/Dock.js';


var Dock = function (_React$Component) {
  (0, _inherits3.default)(Dock, _React$Component);

  function Dock(props) {
    (0, _classCallCheck3.default)(this, Dock);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Dock.__proto__ || (0, _getPrototypeOf2.default)(Dock)).call(this, props));

    _this.state = {
      isVisible: false,
      size: 380
    };
    return _this;
  }

  (0, _createClass3.default)(Dock, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', {
        'data-jsx': 1585641500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: 1585641500,
        css: '.close-wrapper[data-jsx="1585641500"] {position: absolute;background-color: #ccc;width: 100%;display:-webkit-flex; display:flex;}.close[data-jsx="1585641500"] {display: inline-block;font-size: 40px;font-weight: bold;cursor: pointer;width: 100%;padding-top: 10px;padding-right: 70px;text-align: right;color: rgba(0,0,0,0.16);background-color: #fff;}.stories-dock-button[data-jsx="1585641500"] {position: absolute;top: 25px;right: 50px;font-size: 13px;cursor: pointer;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRG9jay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhb0IsQUFDSSx1Q0FDSyxtQkFDSSx1QkFDWCxZQUNFLG1DQUNmLENBQ08sK0JBQ2dCLHNCQUNOLGdCQUNFLGtCQUNGLGdCQUVKLFlBQ00sa0JBQ0Usb0JBQ0Ysa0JBQ00sd0JBQ0QsdUJBRXhCLENBQ3FCLDZDQUNELG1CQUNULFVBQ0UsWUFDSSxnQkFDQSxnQkFDakIiLCJmaWxlIjoiY29tcG9uZW50cy9Eb2NrLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qaW0uY3VtbWlucy9wcm9qZWN0cy9pdGVtLWdyYXBoIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0RG9jayBmcm9tICdyZWFjdC1kb2NrJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2NrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNWaXNpYmxlOiBmYWxzZSxcbiAgICAgIHNpemU6IDM4MFxuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNsb3NlLXdyYXBwZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgLmNsb3NlIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDcwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwwLDAsMC4xNik7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblxuICAgICAgICB9XG4gICAgICAgIC5zdG9yaWVzLWRvY2stYnV0dG9uIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAyNXB4O1xuICAgICAgICAgIHJpZ2h0OiA1MHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3JpZXMtZG9jay1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgaXNWaXNpYmxlOiAhdGhpcy5zdGF0ZS5pc1Zpc2libGUgfSl9PlN0b3JpZXM8L2Rpdj5cbiAgICAgICAgPFJlYWN0RG9jayBwb3NpdGlvbj0ncmlnaHQnIGRpbU1vZGU9XCJub25lXCIgZmx1aWQ9e2ZhbHNlfSBzaXplPXt0aGlzLnN0YXRlLnNpemV9IG9uU2l6ZUNoYW5nZT17KHNpemUpPT57aWYoc2l6ZT4gMTEwKSB0aGlzLnNldFN0YXRlKHtzaXplfSl9fSBpc1Zpc2libGU9e3RoaXMuc3RhdGUuaXNWaXNpYmxlfT5cbiAgICAgICAgICB7LyogeW91IGNhbiBwYXNzIGEgZnVuY3Rpb24gYXMgYSBjaGlsZCBoZXJlICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xvc2Utd3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbG9zZVwiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBpc1Zpc2libGU6ICF0aGlzLnN0YXRlLmlzVmlzaWJsZSB9KX0+XG4gICAgICAgICAgICAgIHhcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L1JlYWN0RG9jaz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=components/Dock.js */'
      }), _react2.default.createElement('div', { className: 'stories-dock-button', onClick: function onClick() {
          return _this2.setState({ isVisible: !_this2.state.isVisible });
        }, 'data-jsx': 1585641500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, 'Stories'), _react2.default.createElement(_reactDock2.default, { position: 'right', dimMode: 'none', fluid: false, size: this.state.size, onSizeChange: function onSizeChange(size) {
          if (size > 110) _this2.setState({ size: size });
        }, isVisible: this.state.isVisible, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('div', { className: 'close-wrapper', 'data-jsx': 1585641500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement('div', { className: 'close', onClick: function onClick() {
          return _this2.setState({ isVisible: !_this2.state.isVisible });
        }, 'data-jsx': 1585641500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, 'x')), this.props.children));
    }
  }]);

  return Dock;
}(_react2.default.Component);

exports.default = Dock;