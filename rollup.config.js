import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
	input: './index.js',
	output: {
		file: './dist/remarkable.esm.js',
		format: 'esm'
	},
	plugins: [
		nodeResolve(),
		commonjs(),
	]
}
