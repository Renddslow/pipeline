const fs = require('fs/promises');
const path = require('path');
const makeDir = require('make-dir');

// compile content

// copy contents of static to public
const copyStatic = () => {
  return fs.cp(path.join(__dirname, 'static'), path.join(__dirname, 'public'), {
    recursive: true,
  });
};

(async () => {
  await makeDir(path.join(process.cwd(), 'public'));
  await copyStatic();
})();
