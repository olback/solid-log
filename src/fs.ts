import * as process from 'process';
import * as path from 'path';
import * as fs from 'fs';
import { LogLevel, ILogger } from './models';
import { IFormat, format, IFormatSettings } from './format';

interface IFileLoggerOptions {
    format?: IFormat;
    path?: string | null;
}

interface ISettings extends IFormatSettings {
    useColors: false;
    path: string;
}

export class FileLogger implements ILogger {

    private settings: ISettings;
    private stream: fs.WriteStream;

    constructor(public _logLevel: LogLevel = LogLevel.warn, public options: IFileLoggerOptions = {}) {

        this.settings = {
            level: _logLevel,
            format: options.format ? options.format : null,
            useColors: false,
            path: options.path ? options.path : path.join(process.cwd(), 'log.txt')
        }

        this.stream = fs.createWriteStream(this.settings.path, {
            encoding: 'utf8',
            flags: 'a'
        });

    }

    debug(v: any[]) {
        if (this._logLevel <= LogLevel.debug) {
            const data = format(this.settings, LogLevel.debug, v);
            // console.log(data);
            this.stream.write(data + '\n');
        }
    }

    info(v: any[]) {
        if (this._logLevel <= LogLevel.info) {
            const data = format(this.settings, LogLevel.info, v);
            // console.log(data);
            this.stream.write(data + '\n');
        }
    }

    ok(v: any[]) {
        if (this._logLevel <= LogLevel.ok) {
            const data = format(this.settings, LogLevel.ok, v);
            // console.log(data);
            this.stream.write(data + '\n');
        }
    }

    warn(v: any[]) {
        if (this._logLevel <= LogLevel.warn) {
            const data = format(this.settings, LogLevel.warn, v);
            // console.log(data);
            this.stream.write(data + '\n');
        }
    }

    error(v: any[]) {
        if (this._logLevel <= LogLevel.error) {
            const data = format(this.settings, LogLevel.error, v);
            // console.log(data);
            this.stream.write(data + '\n');
        }
    }

    panic(v: any[]) {
        if (this._logLevel <= LogLevel.panic) {
            const data = format(this.settings, LogLevel.panic, v);
            // console.log(data);
            this.stream.write(data + '\n');
        }
    }

    close() {
        this.stream.end();
    }

}