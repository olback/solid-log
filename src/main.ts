import { ILogger, LogLevel } from './models';
import { ConsoleLogger } from './console';
import { FileLogger } from './fs';

const loggers: ILogger[] = [];

export function debug(...args: any[]) {
    for (const l of loggers) {
        l.debug(args);
    }
}

export function info(...args: any[]) {
    for (const l of loggers) {
        l.info(args);
    }
}

export function ok(...args: any[]) {
    for (const l of loggers) {
        l.ok(args);
    }
}

export function warn(...args: any[]) {
    for (const l of loggers) {
        l.warn(args);
    }
}

export function error(...args: any[]) {
    for (const l of loggers) {
        l.error(args);
    }
}

export function panic(...args: any[]) {
    for (const l of loggers) {
        l.panic(args);
    }
}

export function add(logger: ILogger) {
    loggers.push(logger);
}

// Handle exeptions and stuff

process.on('unhandledRejection', (reason, _promise) => {

    // Unhandled promise rejections are deprecated. In the future, promise rejections
    // that are not handled will terminate the Node.js process with a non-zero exit code.
    panic(reason ? reason.toString() : 'Unhandled promise rejection. Details unknown.');

});

process.on('uncaughtException', err => {

    panic(err.stack);

});

export {
    ConsoleLogger,
    FileLogger,
    LogLevel
}
