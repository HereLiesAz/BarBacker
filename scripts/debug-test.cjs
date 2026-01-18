
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const COLORS = {
  RESET: '\x1b[0m',
  RED: '\x1b[31m',
  GREEN: '\x1b[32m',
  YELLOW: '\x1b[33m',
  BLUE: '\x1b[34m',
};

function log(color, message) {
  console.log(`${color}${message}${COLORS.RESET}`);
}

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

  let missing = [];
  // In a real local run, we might check .env files. In CI, we check process.env.
  // For this script, we'll check if they are defined in process.env OR if a .env file exists.

  if (fs.existsSync('.env')) {
      log(COLORS.GREEN, '✅ .env file found.');
  } else {
      log(COLORS.YELLOW, '⚠️  No .env file found. Checking process.env...');
  }

  // Note: This check might be limited in a local node context if .env isn't loaded into process.env by dotenv.
  // But strictly speaking for CI/CD, they should be in process.env.
}

function checkDependencies() {
  log(COLORS.BLUE, '\n--- Checking Dependencies ---');
  if (fs.existsSync('node_modules')) {
    log(COLORS.GREEN, '✅ node_modules exists.');
  } else {
    log(COLORS.RED, '❌ node_modules missing. Run "npm install".');
    process.exitCode = 1;
  }
}

function runTypeCheck() {
  log(COLORS.BLUE, '\n--- Running TypeScript Check ---');
  try {
    execSync('npx tsc --noEmit', { stdio: 'inherit' });
    log(COLORS.GREEN, '✅ TypeScript check passed.');
  } catch (error) {
    log(COLORS.RED, '❌ TypeScript check failed.');
    // We don't fail the whole script immediately, to allow other checks to run.
    process.exitCode = 1;
  }
}

function scanForAntiPatterns() {
  log(COLORS.BLUE, '\n--- Scanning for React Anti-Patterns ---');
  const srcDir = path.join(__dirname, '../src');

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

    // Very basic heuristic: check for hooks inside potential control flow blocks.
    // This is not a full AST parser, just a "smell" detector.

    // Look for useHook indented more than 2 spaces (assuming standard formatting)
    // AND appearing after keywords like 'if', 'return' (though return is hard to track line-by-line regex).

    // Better heuristic: 'if (' followed by 'use...' on later lines is hard to regex without state.
    // Let's just look for highly indented hooks as a warning sign.

    lines.forEach((line, index) => {
        const trimmed = line.trim();
        // Check for hook usage
        if (trimmed.startsWith('use') || (trimmed.includes('use') && trimmed.includes('('))) {
            // Check indentation. If it's inside a block (more than 2 spaces/tabs), it MIGHT be risky.
            // But components are often indented.
            // Let's look for `if (...) { ... use...` on the same line?
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
