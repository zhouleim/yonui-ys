function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react';
import Menu from '../index';
var SubMenu = Menu.SubMenu;
var MenuItemGroup = Menu.ItemGroup;
import '../style';
import './demo.less';
import '../../../theme/index.less';

var Demo = /*#__PURE__*/function (_Component) {
  _inherits(Demo, _Component);

  var _super = _createSuper(Demo);

  function Demo() {
    var _this;

    _classCallCheck(this, Demo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      current: 'mail'
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      console.log('click ', e);

      _this.setState({
        current: e.key
      });
    });

    return _this;
  }

  _createClass(Demo, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(Menu, {
        onClick: this.handleClick,
        selectedKeys: [this.state.current],
        mode: "inline"
      }, /*#__PURE__*/React.createElement(Menu.Item, {
        key: "mail"
      }, "Navigation One"), /*#__PURE__*/React.createElement(Menu.Item, {
        key: "app",
        disabled: true
      }, "Navigation Two"), /*#__PURE__*/React.createElement(SubMenu, {
        title: /*#__PURE__*/React.createElement("span", null, "Navigation Three - Submenu")
      }, /*#__PURE__*/React.createElement(MenuItemGroup, {
        title: "Item 1"
      }, /*#__PURE__*/React.createElement(Menu.Item, {
        key: "setting:1"
      }, "Option 1"), /*#__PURE__*/React.createElement(Menu.Item, {
        key: "setting:2"
      }, "Option 2")), /*#__PURE__*/React.createElement(MenuItemGroup, {
        title: "Item 2"
      }, /*#__PURE__*/React.createElement(Menu.Item, {
        key: "setting:3"
      }, "Option 3"), /*#__PURE__*/React.createElement(Menu.Item, {
        key: "setting:4"
      }, "Option 4"))), /*#__PURE__*/React.createElement(Menu.Item, {
        key: "alipay"
      }, /*#__PURE__*/React.createElement("a", {
        href: "https://ant.design",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "Navigation Four - Link")));
    }
  }]);

  return Demo;
}(Component);

export { Demo as default };
//# sourceMappingURL=demo.js.map
