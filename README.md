# solid-log

```typescript
import * as slog from 'solid-log';

const fileLogger = new slog.FileLogger(_logLevel?: LogLevel, options?: IFileLoggerOptions);
const consoleLogger = new slog.ConsoleLogger(_logLevel?: LogLevel, options?: IConsoleLoggerOptions);

slog.add(fileLogger);
slog.add(consoleLogger);
```

Options:
```typescript
// %d Current date. (new Date().toLocaleDateString())
// %t Current time (new Date().toLocaleTimeString())
// %v Values to log.
// %l Log level.
// %s Delimiter.
export interface IFormat {
    delimiter: string; // default '\t'
    format: string; // default '%l%s[%d %t]%s%v'
}

interface IFileLoggerOptions {
    format?: IFormat;
    path?: string | null;
}

interface IConsoleLoggerOptions {
    format?: IFormat;
    useColors?: boolean;
}
```

Log methods:
```javascript
slog.debug(message);
slog.info(message);
slog.ok(message);
slog.warn(message);
slog.error(message);
slog.panic(message);
```

Log levels:
```javascript
slog.LogLevel.debug
slog.LogLevel.info
slog.LogLevel.ok
slog.LogLevel.warn // default log level
slog.LogLevel.error
slog.LogLevel.panic
```
Output from the test file:
```terminal
[DEBUG]	[5/25/2019 2:07:41 PM]	debug
[INFO]	[5/25/2019 2:07:41 PM]	info
[OK]	[5/25/2019 2:07:41 PM]	ok
[WARN]	[5/25/2019 2:07:41 PM]	warn
[ERROR]	[5/25/2019 2:07:41 PM]	error
[PANIC]	[5/25/2019 2:07:41 PM]	panic
[PANIC]	[5/25/2019 2:07:41 PM]	ReferenceError: aaaaaaa is not defined
    at Object.<anonymous> (/home/olback/Desktop/js-log-thing/dist/test.js:30:1)
    at Module._compile (internal/modules/cjs/loader.js:816:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:827:10)
    at Module.load (internal/modules/cjs/loader.js:685:32)
    at Function.Module._load (internal/modules/cjs/loader.js:620:12)
    at Function.Module.runMain (internal/modules/cjs/loader.js:877:12)
    at internal/main/run_main_module.js:21:11
[PANIC]	[5/25/2019 2:07:41 PM]	Unhandled promise rejection. Details unknown.
```

