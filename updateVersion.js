const fs = require('fs');
const path = require('path');

const packageJsonPath = path.resolve(__dirname, 'package.json');
const version = process.argv[2];

if (!version) {
    console.error('Please provide a version number');
    process.exit(1);
}

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
packageJson.version = version;

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

console.log(`Version updated to ${version}`);