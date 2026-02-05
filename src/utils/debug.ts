// Define the interface for the diagnostic report object.
export interface DiagnosticReport {
    // The ISO string timestamp of when the report was generated.
    timestamp: string;
    // The user agent string of the browser.
    userAgent: string;
    // A dictionary checking the presence of critical environment variables.
    envCheck: Record<string, boolean>;
    // Boolean indicating if the browser reports it is online.
    online: boolean;
    // Checks for storage API availability.
    storage: {
        localStorage: boolean;
        sessionStorage: boolean;
        cookies: boolean;
    };
}

// Function to run a suite of diagnostic checks and return a report.
export const runDiagnostics = (): DiagnosticReport => {
    // Initialize the report object with basic info.
    const report: DiagnosticReport = {
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        envCheck: {},
        online: navigator.onLine,
        storage: {
            localStorage: false,
            sessionStorage: false,
            // Check if cookies are enabled in the navigator.
            cookies: navigator.cookieEnabled
        }
    };

    // Define the list of required environment variables for the app to function.
    const requiredEnv = [
        'VITE_FIREBASE_API_KEY',
        'VITE_FIREBASE_AUTH_DOMAIN',
        'VITE_FIREBASE_PROJECT_ID'
    ];

    // Iterate through the required variables and check if they exist in import.meta.env.
    requiredEnv.forEach(key => {
        // We use import.meta.env, assuming Vite is the build tool.
        report.envCheck[key] = !!import.meta.env[key];
    });

    // Check LocalStorage availability.
    try {
        // Attempt to write a test item.
        localStorage.setItem('__test__', '1');
        // Attempt to remove the test item.
        localStorage.removeItem('__test__');
        // If successful, mark as available.
        report.storage.localStorage = true;
    } catch (e) {
        // If an error occurs (e.g., quota exceeded or disabled), ignore it; default is false.
    }

    // Check SessionStorage availability.
    try {
        // Attempt to write a test item.
        sessionStorage.setItem('__test__', '1');
        // Attempt to remove the test item.
        sessionStorage.removeItem('__test__');
        // If successful, mark as available.
        report.storage.sessionStorage = true;
    } catch (e) {
        // Ignore errors; default is false.
    }

    // Return the completed report.
    return report;
};

// Function to format the diagnostic report into a human-readable string.
export const formatReport = (report: DiagnosticReport): string => {
    // Start with the header and timestamp.
    let output = `[Diagnostic Report - ${report.timestamp}]\n`;
    // Add User Agent info.
    output += `User Agent: ${report.userAgent}\n`;
    // Add Online status with an emoji.
    output += `Online: ${report.online ? '✅' : '❌'}\n\n`;

    // Add Environment Variables section.
    output += `Environment Variables:\n`;
    Object.entries(report.envCheck).forEach(([key, exists]) => {
        // Mark each variable with a check or cross based on existence.
        output += `  ${exists ? '✅' : '❌'} ${key}\n`;
    });

    // Add Storage section.
    output += `\nStorage:\n`;
    output += `  ${report.storage.localStorage ? '✅' : '❌'} LocalStorage\n`;
    output += `  ${report.storage.sessionStorage ? '✅' : '❌'} SessionStorage\n`;
    output += `  ${report.storage.cookies ? '✅' : '❌'} Cookies\n`;

    // Return the formatted string.
    return output;
};
