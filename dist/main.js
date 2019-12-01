'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _constants = require('./utils/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actionMap = {
    init: {
        description: 'generate a new project from a template',
        usages: ['luban init templateName projectName']
    },
    config: {
        alias: 'cfg',
        description: 'config .lubanrc',
        usages: ['luban config set <k> <v>', 'luban config get <k>', 'luban config remove <k>']

    }
    //other commands


    // 流程控制
};var apply = function apply(action) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    //babel-env
    require('./' + action).apply(undefined, args);
};

exports.default = apply;


(0, _keys2.default)(actionMap).forEach(function (action) {
    _commander2.default.command(action).description(actionMap[action].description).alias(actionMap[action].alias) //别名
    .action(function () {
        switch (action) {
            case 'config':
                //配置
                apply.apply(undefined, [action].concat((0, _toConsumableArray3.default)(process.argv.slice(3))));
                break;
            case 'init':
                apply.apply(undefined, [action].concat((0, _toConsumableArray3.default)(process.argv.slice(3))));
                break;
            default:
                break;
        }
    });
});

function help() {
    console.log('\r\nUsage:');
    (0, _keys2.default)(actionMap).forEach(function (action) {
        actionMap[action].usages.forEach(function (usage) {
            console.log('  - ' + usage);
        });
    });
    console.log('\r');
}

_commander2.default.usage('<command> [options]');
_commander2.default.on('-h', help);
_commander2.default.on('--help', help);
_commander2.default.version(_constants.VERSION, '-V --version').parse(process.argv);

// luban 不带参数时
if (!process.argv.slice(2).length) {
    _commander2.default.outputHelp(make_green);
}
function make_green(txt) {
    return _chalk2.default.green(txt);
}