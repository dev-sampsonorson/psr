const execSync = require('child_process').execSync;

execSync(`source ./test.bat`, { stdio: [0, 1, 2] });