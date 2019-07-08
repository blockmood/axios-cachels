"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _axios = _interopRequireDefault(require("axios"));

var cacheList = {};

var request =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(config) {
    var filterURL,
        response,
        _result,
        _result2,
        _args = arguments;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            filterURL = _args.length > 1 && _args[1] !== undefined ? _args[1] : [];

            if (Array.isArray(filterURL)) {
              _context.next = 3;
              break;
            }

            throw new Error('type mast is Array');

          case 3:
            if (!Object.keys(cacheList).includes(config['url'])) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", cacheList[config['url']]);

          case 5:
            if (!(filterURL.indexOf(config['url']) > -1)) {
              _context.next = 13;
              break;
            }

            if (!(result.status == 200)) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return (0, _axios["default"])(config);

          case 9:
            _result = _context.sent;
            response = _result.data;

          case 11:
            _context.next = 17;
            break;

          case 13:
            _context.next = 15;
            return (0, _axios["default"])(config);

          case 15:
            _result2 = _context.sent;

            if (!cacheList[config['url']]) {
              cacheList[config['url']] = _result2.data;
              response = _result2.data;
            }

          case 17:
            return _context.abrupt("return", response);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function request(_x) {
    return _ref.apply(this, arguments);
  };
}();

request.interceptors = _axios["default"].interceptors;
var _default = request;
exports["default"] = _default;