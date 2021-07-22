"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./GenericModal.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GenericModal(_ref) {
  let {
    isOpen,
    headerText,
    bodyText,
    primaryButtonText,
    secondaryButtonText,
    primaryButtonClick,
    secondaryButtonClick
  } = _ref;

  const handleOnPrimaryButtnClick = () => {
    primaryButtonClick();
    secondaryButtonClick();
  };

  if (isOpen === false) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-background"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "header-text"
  }, headerText), /*#__PURE__*/_react.default.createElement("div", {
    className: "x-modal",
    onClick: secondaryButtonClick
  }, "\xD7")), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, bodyText), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "secondary-button buttonGeneral",
    onClick: handleOnPrimaryButtnClick
  }, primaryButtonText), /*#__PURE__*/_react.default.createElement("div", {
    className: "primary-button buttonGeneral",
    onClick: secondaryButtonClick
  }, secondaryButtonText))));
}

var _default = GenericModal;
exports.default = _default;