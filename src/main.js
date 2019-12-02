import program from 'commander';
import chalk from 'chalk';
import { VERSION } from './utils/constants';

let actionMap = {
    init: {
        description: 'generate a new project from a template',
        usages: [
            'cn init templateName projectName'
        ]
    },
    config: {
        alias: 'cfg',
        description: 'config .cnrc',
        usages: [
            'cn config set <k> <v>',
            'cn config get <k>',
            'cn config remove <k>'
        ]
        
    },
    //other commands
}

// 流程控制
let apply = (action, ...args) => {
    //babel-env
    require(`./${action}`)(...args);
};

export default apply;

Object.keys(actionMap).forEach((action) => {
    program.command(action)
    .description(actionMap[action].description)
    .alias(actionMap[action].alias) //别名
    .action(() => {
        switch (action) {
            case 'config': 
                //配置
                apply(action, ...process.argv.slice(3));
                break;
            case 'init':
                apply(action, ...process.argv.slice(3));
                break;
            default:
                break;
        }
    });
});

function help() {
    console.log('\r\nUsage:');
    Object.keys(actionMap).forEach((action) => {
        actionMap[action].usages.forEach(usage => {
            console.log('  - ' + usage);
        });
    });
    console.log('\r');
}


program.usage('<command> [options]');
program.on('-h', help);
program.on('--help', help);
program.version(VERSION, '-V --version').parse(process.argv);

// cn 不带参数时
if (!process.argv.slice(2).length) {
    program.outputHelp(make_green);
}
function make_green(txt) {
    return chalk.green(txt); 
}