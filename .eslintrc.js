module.exports = {
	env: {
		es6: true,
		node: true,
		mocha: true
	},
	extends: [
		'standard',
		'plugin:chai-friendly/recommended'
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020
	},
	plugins: [
		'@typescript-eslint',
		'mocha',
		'chai-friendly'
	],
	rules: {
		'no-process-env': 'error',
		indent: ['error', 'tab'],
		'no-tabs': 'off',
		'no-console': 'error',
		'mocha/no-exclusive-tests': 'error'
	}
}
