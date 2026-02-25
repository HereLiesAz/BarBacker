const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../node_modules/tar/lib/path-reservations.js');

if (!fs.existsSync(targetFile)) {
    console.error(`[patch-tar] Target file not found: ${targetFile}`);
    process.exit(0); // Don't fail the build if tar isn't there (e.g. dev deps only)
}

let content = fs.readFileSync(targetFile, 'utf8');

// The original line looks like:
// return stripSlashes(join(normalize(p))).toLowerCase()

// We want to replace .toLowerCase() with .normalize('NFKD').toLocaleLowerCase('en').toLocaleUpperCase('en')
// Note: The prompt says "normalization form that matches the target filesystem's behavior (e.g., NFKD), followed by first toLocaleLowerCase('en') and then toLocaleUpperCase('en')."
// The original code already has `normalize(p)` which is imported from `./normalize-unicode.js`.
// We should check what `normalize` does. But based on the instruction: "Update path-reservations.js to use a normalization form... (e.g. NFKD)".

// Let's replace the normalization logic.
// Original: return stripSlashes(join(normalize(p))).toLowerCase()

const searchString = "return stripSlashes(join(normalize(p))).toLowerCase()";
const replacementString = "return stripSlashes(join(normalize(p))).normalize('NFKD').toLocaleLowerCase('en').toLocaleUpperCase('en')";

if (content.includes(searchString)) {
    content = content.replace(searchString, replacementString);
    fs.writeFileSync(targetFile, content, 'utf8');
    console.log('[patch-tar] Successfully patched tar/lib/path-reservations.js');
} else if (content.includes("toLocaleUpperCase('en')")) {
    console.log('[patch-tar] File already patched.');
} else {
    console.warn('[patch-tar] Could not find the string to replace in tar/lib/path-reservations.js');
    // Fallback: try to find a slightly different signature if the version differs slightly,
    // or just the .toLowerCase() part if strict match fails.
    // For now, logging warning is safer than breaking.
}
