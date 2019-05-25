import * as log from './main';

log.add(
    new log.ConsoleLogger(
        log.LogLevel.debug,
        {
            useColors: true,
            format: {
                delimiter: '\t',
                format: '%l%s[%d %t]%s%v'
            }
        }
    )
);

log.add(new log.FileLogger(log.LogLevel.debug));

// @ts-ignore
const _p = new Promise((_resolve, reject) => {
    reject(new Error('fdsd'));
}).then(v => console.log(v));

// @ts-ignore
const _p2 = new Promise((_resolve, reject) => {
    reject('fdsfsdfds');
}).then(v => console.log(v));

// @ts-ignore
const _p3 = new Promise((_resolve, reject) => {
    reject();
}).then(v => console.log(v));

log.debug('debug');
log.info('info');
log.ok('ok');
log.warn('warn');
log.error('error');
log.panic('panic');

// @ts-ignore
aaaaaaa();
