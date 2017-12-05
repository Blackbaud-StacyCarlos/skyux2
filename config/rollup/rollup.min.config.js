import rollupConfig from './rollup.config.js';
import uglify from 'rollup-plugin-uglify';

var minConfig = rollupConfig;

minConfig[0].output.file = '../../dist/bundles/core.umd.min.js';
minConfig[1].output.file = '../../dist/bundles/demo.umd.min.js';

minConfig[0].plugins.push(uglify());
minConfig[1].plugins.push(uglify());

export default minConfig;
