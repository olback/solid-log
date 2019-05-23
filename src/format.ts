import { LogLevel } from './models';
import { setTheme } from 'colors';

// %d Current date. (new Date().toLocaleDateString())
// %t Current time (new Date().toLocaleTimeString())
// %v Values to log.
// %l Log level.
// %s Delimiter.

export interface IFormat {
    delimiter: string;
    format: string;
}

export interface IFormatSettings {
    format: IFormat | null;
    level: LogLevel;
    useColors?: boolean;
    path?: string;
}

const logFormat: IFormat = {
    delimiter: '\t',
    format: '%l%s[%d %t]%s%v'
}

setTheme({
    debug: ['black', 'bold'],
    info: ['white', 'bold', 'bgBlue'],
    ok: ['white', 'bold', 'bgGreen'],
    warn: ['white', 'bold', 'bgYellow'],
    error: ['white', 'bold', 'bgRed'],
    panic: ['white', 'bold', 'bgRed', 'inverse']
});

export function format(settings: IFormatSettings, type: LogLevel, values: any[]) {

    const { delimiter, format } = settings.format ? settings.format : logFormat;
    const now = new Date();

    // %s
    let retString = format.replace(/\%s/g, delimiter);

    // %d
    retString = retString.replace(/\%d/g, now.toLocaleDateString());

    // %t
    retString = retString.replace(/\%t/g, now.toLocaleTimeString());

    // %l
    retString = retString.replace(/\%l/g, (() => {

        switch (type) {

        case LogLevel.info:
            if (settings.useColors) {
                // @ts-ignore
                return '[INFO]'.info;
            } else {
                return '[INFO]';
            }
            break;

        case LogLevel.ok:
            if (settings.useColors) {
                // @ts-ignore
                return '[OK]'.ok;
            } else {
                return '[OK]';
            }
            break;

        case LogLevel.warn:
            if (settings.useColors) {
                // @ts-ignore
                return '[WARN]'.warn;
            } else {
                return '[WARN]';
            }
            break;
        case LogLevel.error:
            if (settings.useColors) {
                // @ts-ignore
                return '[ERROR]'.error;
            } else {
                return '[ERROR]';
            }
            break;
        case LogLevel.panic:
            if (settings.useColors) {
                // @ts-ignore
                return '[PANIC]'.panic;
            } else {
                return '[PANIC]';
            }
            break;
        default:
            if (settings.useColors) {
                // @ts-ignore
                return '[DEBUG]'.debug;
            } else {
                return '[DEBUG]';
            }
            break;
    }

    })());


    // %v
    retString = retString.replace(/\%v/g, (() => {

        let data: string[] = [];

        for (const v of values) {
            if (typeof v !== 'object') {
                data.push(v);
            } else {
                data.push(`${JSON.stringify(v)}`);
            }
        }

        return data.join(delimiter);

    })());

    return retString;

}
