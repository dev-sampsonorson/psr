const fs = require('fs')
const glob = require("glob");

function extractStyleEntries(dirPath, globPattern) {
    const STYLE_URLS_PATTERN = /styleUrls:[\s]*\[[\']?[\"]?(.\/[a-zA-Z-.]*)[\']?[\"]?\]/;
    const styleEntries = {};
    const jsToDelete = [];

    dirPath = dirPath.replace(/\\/g, "/");

    // console.log(glob.sync(__dirname));
    // console.log(dirPath, glob.sync(globPattern));

    glob.sync(globPattern).forEach((file) => {

        file = file.replace(/\\/g, "/");
        const componentPath = file.substring(0, file.lastIndexOf('/'));
        const content = fs.readFileSync(file, 'utf8');
        const match = content.toString().match(STYLE_URLS_PATTERN);

        if (match && match[1]) {
            let styleFilename, styleKey, stylePath = match[1];

            if (!/\.scss$/g.test(stylePath)) {
                console.error('ERROR: Component style path does not end in scss');
                return;
            }

            styleFilename = `${componentPath}/${stylePath.substring(stylePath.lastIndexOf('/') + 1)}`;
            styleFilename = styleFilename.replace(dirPath, '');
            styleFilename = (/^[\/]/g.test(styleFilename)) ? `.${styleFilename}` : `./${styleFilename}`;

            styleKey = styleFilename.substring(2).replace(/\.scss$/g, '');

            styleEntries[styleKey] = styleFilename;
            jsToDelete.push(`${styleKey}.js`);
        }
    });

    return { styleEntries, jsToDelete };
}

module.exports = extractStyleEntries;
