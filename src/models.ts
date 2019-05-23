export enum LogLevel {
    off,
    debug,
    info,
    ok,
    warn,
    error,
    panic
}

export interface ILogger {
    _logLevel: LogLevel;
    // _format?: IFormat;
    options: Object;
    debug(...args: any[]): Promise<void> | void; // Always show unless logging is off
    info(...args: any[]): Promise<void> | void;
    ok(...args: any[]): Promise<void> | void;
    warn(...args: any[]): Promise<void> | void;
    error(...args: any[]): Promise<void> | void;
    panic(...args: any[]): Promise<void> | void;
    close?(): void;
}
