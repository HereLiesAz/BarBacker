
export interface DiagnosticReport {
    timestamp: string;
    userAgent: string;
    envCheck: Record<string, boolean>;
    online: boolean;
    storage: {
        localStorage: boolean;
        sessionStorage: boolean;
        cookies: boolean;
    };
}

export const runDiagnostics = (): DiagnosticReport => {
    const report: DiagnosticReport = {
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        envCheck: {},
        online: navigator.onLine,
        storage: {
            localStorage: false,
            sessionStorage: false,
            cookies: navigator.cookieEnabled
        }
    };

    // Check Env Vars
    const requiredEnv = [
        'VITE_FIREBASE_API_KEY',
        'VITE_FIREBASE_AUTH_DOMAIN',
        'VITE_FIREBASE_PROJECT_ID'
    ];

    requiredEnv.forEach(key => {
        // We use import.meta.env, assuming Vite
        report.envCheck[key] = !!import.meta.env[key];
    });

    // Check Storage
    try {
        localStorage.setItem('__test__', '1');
        localStorage.removeItem('__test__');
        report.storage.localStorage = true;
    } catch (e) { /* ignore */ }

    try {
        sessionStorage.setItem('__test__', '1');
        sessionStorage.removeItem('__test__');
        report.storage.sessionStorage = true;
    } catch (e) { /* ignore */ }

    return report;
};

export const formatReport = (report: DiagnosticReport): string => {
    let output = `[Diagnostic Report - ${report.timestamp}]\n`;
    output += `User Agent: ${report.userAgent}\n`;
    output += `Online: ${report.online ? '✅' : '❌'}\n\n`;

    output += `Environment Variables:\n`;
    Object.entries(report.envCheck).forEach(([key, exists]) => {
        output += `  ${exists ? '✅' : '❌'} ${key}\n`;
    });

    output += `\nStorage:\n`;
    output += `  ${report.storage.localStorage ? '✅' : '❌'} LocalStorage\n`;
    output += `  ${report.storage.sessionStorage ? '✅' : '❌'} SessionStorage\n`;
    output += `  ${report.storage.cookies ? '✅' : '❌'} Cookies\n`;

    return output;
};
