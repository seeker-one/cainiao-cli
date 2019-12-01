'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.downloadLocal = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _rc = require('./rc');

var _downloadGitRepo = require('download-git-repo');

var _downloadGitRepo2 = _interopRequireDefault(_downloadGitRepo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var downloadLocal = exports.downloadLocal = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(templateName, projectName) {
        var config, api;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _rc.getAll)();

                    case 2:
                        config = _context.sent;
                        api = config.registry + '/' + templateName;
                        return _context.abrupt('return', new _promise2.default(function (resolve, reject) {
                            console.log(api);
                            //projectName 为下载到的本地目录
                            (0, _downloadGitRepo2.default)(api, projectName, function (err) {
                                if (err) {
                                    console.log('err');
                                    reject(err);
                                }
                                resolve();
                            });
                        }));

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function downloadLocal(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();