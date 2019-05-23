import { LogLevel, ILogger } from './models';
import { IFormat, format, IFormatSettings } from './format';

interface IConsoleLoggerOptions {
    format?: IFormat;
    useColors?: boolean;
}

interface ISettings extends IFormatSettings {
    useColors: boolean;
}

export class ConsoleLogger implements ILogger {

    private settings: ISettings;

    constructor(public _logLevel: LogLevel = LogLevel.warn, public options: IConsoleLoggerOptions = {}) {
        this.settings = {
            level: _logLevel,
            format: options.format ? options.format : null,
            useColors: typeof options.useColors === 'boolean' ? options.useColors : true
        }
    }

    debug(v: any[]) {
        if (this._logLevel <= LogLevel.debug) {
            const data = format(this.settings, LogLevel.debug, v);
            console.log(data);
        }
    }

    info(v: any[]) {
        if (this._logLevel <= LogLevel.info) {
            const data = format(this.settings, LogLevel.info, v);
            console.log(data);
        }
    }

    ok(v: any[]) {
        if (this._logLevel <= LogLevel.ok) {
            const data = format(this.settings, LogLevel.ok, v);
            console.log(data);
        }
    }

    warn(v: any[]) {
        if (this._logLevel <= LogLevel.warn) {
            const data = format(this.settings, LogLevel.warn, v);
            console.log(data);
        }
    }

    error(v: any[]) {
        if (this._logLevel <= LogLevel.error) {
            const data = format(this.settings, LogLevel.error, v);
            console.log(data);
        }
    }

    panic(v: any[]) {
        if (this._logLevel <= LogLevel.panic) {
            const data = format(this.settings, LogLevel.panic, v);
            console.log(data);
        }
    }

}