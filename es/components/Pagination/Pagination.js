function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
import Pagination from 'bee-pagination';
import { findIndex } from '../../utils';
var sizeMap = {
  small: 'sm',
  large: 'lg',
  '': ''
};
var defaultProps = {
  pageSizeOptions: []
};

var PaginationAdapter = /*#__PURE__*/function (_Component) {
  _inherits(PaginationAdapter, _Component);

  var _super = _createSuper(PaginationAdapter);

  function PaginationAdapter() {
    var _this;

    _classCallCheck(this, PaginationAdapter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onPageSizeChange", function (index, pageSize) {
      if (_this.singlePage()) return;
      _this.props.onShowSizeChange && _this.props.onShowSizeChange(_this.props.current, parseInt(pageSize));
    });

    _defineProperty(_assertThisInitialized(_this), "renderPageSizeOptions", function (options) {
      return options.map(function (item) {
        return item + ' 条/页';
      });
    });

    _defineProperty(_assertThisInitialized(_this), "singlePage", function () {
      var _this$props = _this.props,
          pageSizeOptions = _this$props.pageSizeOptions,
          pageSize = _this$props.pageSize,
          total = _this$props.total;
      return !pageSizeOptions.includes(pageSize + '') && pageSize === total;
    });

    return _this;
  }

  _createClass(PaginationAdapter, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          current = _this$props2.current,
          pageSizeOptions = _this$props2.pageSizeOptions,
          pageSize = _this$props2.pageSize,
          size = _this$props2.size,
          total = _this$props2.total,
          onChange = _this$props2.onChange,
          others = _objectWithoutProperties(_this$props2, ["current", "pageSizeOptions", "pageSize", "size", "total", "onChange"]);

      var dataNum = findIndex(pageSizeOptions, pageSize + '');
      var items = Math.ceil(total / pageSize);

      if (this.singlePage()) {
        pageSizeOptions = [pageSize + ''];
        dataNum = 0;
      }

      return /*#__PURE__*/React.createElement(Pagination, _extends({
        showJump: true,
        prev: true,
        next: true,
        ellipsis: true,
        gap: true,
        boundaryLinks: true,
        maxButtons: 5,
        activePage: current,
        dataNum: dataNum,
        dataNumSelect: pageSizeOptions,
        size: sizeMap[size],
        total: isNaN(total) ? 0 : total,
        onSelect: onChange,
        onDataNumSelect: this.onPageSizeChange,
        items: items
      }, others));
    }
  }]);

  return PaginationAdapter;
}(Component);

PaginationAdapter.defaultProps = defaultProps;
export default PaginationAdapter;
//# sourceMappingURL=Pagination.js.map
