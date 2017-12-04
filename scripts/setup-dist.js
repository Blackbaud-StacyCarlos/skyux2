/*jslint node: true */
'use strict';

const fs = require('fs-extra');
const path = require('path');

fs.ensureDirSync(
  path.resolve(
    __dirname,
    '../skyux-spa-documentation/node_modules/@blackbaud/skyux/dist'
  )
);

fs.copySync(
  path.resolve(__dirname, '../dist'),
  path.resolve(__dirname, '../skyux-spa-documentation/node_modules/@blackbaud/skyux/dist')
);
