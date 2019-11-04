const path = require('path');
const paths = require('../config/paths');
const spawn = require('react-dev-utils/crossSpawn');
const fs = require('fs');

const eslint = require(path.join(paths.ownNodeModules, '.bin/eslint'));

function getConfig() {
  const ownConfigName = ['.eslintrc.js', '.eslintrc', 'eslintrc.json'].find(
    function(name) {
      console.log(path.resolve('../../'));
      fs.existsSync(`${paths.appPath}/${name}`);
    }
  );

  return ownConfigName
    ? `${paths.appPath}/${config}`
    : require.resolve('eslint-config-react-app');
}

console.log('===========================================');
console.log(getConfig());
console.log('===========================================');

// spawn.sync(
//   'node',
//   eslint,
//   [`${paths.appSrc}`, '--config', getConfig()]
// );
