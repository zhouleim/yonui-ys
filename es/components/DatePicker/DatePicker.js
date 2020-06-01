function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

import React, { Component } from 'react';
import DatePicker from 'bee-datepicker';
import moment from 'moment';

var DatePickerAdapter = /*#__PURE__*/function (_Component) {
  _inherits(DatePickerAdapter, _Component);

  var _super = _createSuper(DatePickerAdapter);

  function DatePickerAdapter(props) {
    var _this;

    _classCallCheck(this, DatePickerAdapter);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onChangeEventAdapter", function (time) {
      var _this$props = _this.props,
          format = _this$props.format,
          onChange = _this$props.onChange;
      var timeString = null;

      if (time !== null) {
        timeString = time.format(format);
      }

      onChange && onChange(time, timeString);
    });

    _defineProperty(_assertThisInitialized(_this), "renderIcon", function () {
      return /*#__PURE__*/React.createElement("i", {
        className: "anticon anticon-star-o"
      });
    });

    var locale = window.cb && cb.lang && cb.lang.langType ? cb.lang.langType.substring(0, 2) : 'zh';
    moment.locale(locale); // 设置为英文

    var _locale = window.cb && cb.lang ? cb.lang.lang : 'zh_CN';

    _this.locale = require('bee-datepicker/build/locale/' + _locale + '.js');
    return _this;
  }

  _createClass(DatePickerAdapter, [{
    key: "render",
    value: function render() {
      var dateTimeType = this.props.dateTimeType; // 支持首选项中的所有格式

      var dateFormats = window.cb && cb.format.getDefaultDateFormats(dateTimeType);

      var a2tProps = _objectSpread(_objectSpread({}, this.props), {}, {
        onChange: this.onChangeEventAdapter,
        // 未指定则传 undefined 使用默认值
        locale: this.locale,
        renderIcon: this.renderIcon,
        format: dateFormats,
        enterKeyDown: false
      });

      return /*#__PURE__*/React.createElement(DatePicker, _extends({
        showToday: false
      }, a2tProps));
    }
  }]);

  return DatePickerAdapter;
}(Component);

DatePickerAdapter.YearPicker = DatePicker.YearPicker;
export default DatePickerAdapter;
//# sourceMappingURL=DatePicker.js.map