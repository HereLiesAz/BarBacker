// Import File System module.
const fs = require('fs');
// Import Path module.
const path = require('path');
// Import execSync for running shell commands.
const { execSync } = require('child_process');

// Define color codes for console output.
const COLORS = {
  RESET: '\x1b[0m',
  RED: '\x1b[31m',
  GREEN: '\x1b[32m',
  YELLOW: '\x1b[33m',
  BLUE: '\x1b[34m',
};

// Helper function for colored logging.
function log(color, message) {
  console.log(`${color}${message}${COLORS.RESET}`);
}

// Check for required environment variables.
function checkEnv() {
  log(COLORS.BLUE, '--- Checking Environment Variables ---');
  const requiredVars = [
    'VITE_FIREBASE_API_KEY',
    'VITE_FIREBASE_APP_ID',
    'VITE_FIREBASE_AUTH_DOMAIN',
    'VITE_FIREBASE_MESSAGING_SENDER_ID',
    'VITE_FIREBASE_PROJECT_ID',
    'VITE_FIREBASE_STORAGE_BUCKET',
    'VITE_FIREBASE_VAPID_KEY'
  ];

  // In a CI environment, variables are usually in process.env.
  // Locally, they might be in a .env file.
  if (fs.existsSync('.env')) {
      log(COLORS.GREEN, '✅ .env file found.');
  } else {
      log(COLORS.YELLOW, '⚠️  No .env file found. Checking process.env...');
  }

  const missing = requiredVars.filter(v => !process.env[v]);
  if (missing.length > 0) {
    log(COLORS.RED, `❌ Missing required environment variables: ${missing.join(', ')}`);
    process.exitCode = 1;
  } else {
    log(COLORS.GREEN, '✅ All required environment variables are present.');
  }
}

// Check if node_modules is installed.
function checkDependencies() {
  log(COLORS.BLUE, '\n--- Checking Dependencies ---');
  if (fs.existsSync('node_modules')) {
    log(COLORS.GREEN, '✅ node_modules exists.');
  } else {
    log(COLORS.RED, '❌ node_modules missing. Run "npm install".');
    process.exitCode = 1;
  }
}

// Run the TypeScript compiler to check for type errors.
function runTypeCheck() {
  log(COLORS.BLUE, '\n--- Running TypeScript Check ---');
  try {
    // Run tsc in noEmit mode just to check for errors.
    execSync('npx tsc --noEmit', { stdio: 'inherit' });
    log(COLORS.GREEN, '✅ TypeScript check passed.');
  } catch (error) {
    log(COLORS.RED, '❌ TypeScript check failed.');
    // Set exit code but continue to other checks.
    process.exitCode = 1;
  }
}

// Heuristic scan for potential React anti-patterns.
function scanForAntiPatterns() {
  log(COLORS.BLUE, '\n--- Scanning for React Anti-Patterns ---');
  const srcDir = path.join(__dirname, '../src');

  // Recursively find all .ts/.tsx files.
  function walk(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      if (fs.statSync(filePath).isDirectory()) {
        walk(filePath, fileList);
      } else {
        if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
          fileList.push(filePath);
        }
      }
    });
    return fileList;
  }

  const files = walk(srcDir);
  let issuesFound = 0;

  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    const lines = content.split('\n');

    // Heuristic: Check for hooks potentially used inside conditional blocks.
    // This isn't a perfect parser, just a simple string check for obvious bad formatting.
    // e.g., if (...) { useHook() }

    lines.forEach((line, index) => {
        const trimmed = line.trim();
        // Check if line contains a hook usage.
        if (trimmed.startsWith('use') || (trimmed.includes('use') && trimmed.includes('('))) {
            // Regex to see if 'if' or 'else' appears on the same line before the hook.
            if (/if\s*\(.*\)\s*\{.*use[A-Z]/.test(line)) {
                 log(COLORS.RED, `❌ Potential Conditional Hook in ${path.relative(process.cwd(), file)}:${index + 1}`);
                 log(COLORS.YELLOW, `   Line: ${line.trim()}`);
                 issuesFound++;
            }
        }
    });
  });

  if (issuesFound === 0) {
      log(COLORS.GREEN, '✅ No obvious conditional hooks found (heuristic).');
  } else {
      process.exitCode = 1;
  }
}

// Main execution function.
function main() {
  log(COLORS.BLUE, '🔍 Starting Self-Diagnostic...');
  checkEnv();
  checkDependencies();
  runTypeCheck();
  scanForAntiPatterns();

  if (process.exitCode) {
      log(COLORS.RED, '\nDiagnostic found issues.');
  } else {
      log(COLORS.GREEN, '\nDiagnostic passed.');
  }
}

main();
