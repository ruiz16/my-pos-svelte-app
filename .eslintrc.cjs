/** @type { import("eslint").Linter.FlatConfig } */
module.exports = {
	root: true,
	extends: ['eslint:recommended', 'prettier'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	// rules: {
	// 	'@typescript-eslint/no-unsafe-call': 'warn',
	// 	'arrow-body-style': ['error', 'as-needed'],
	// 	'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }],
	// 	'import/prefer-default-export': 0,
	// 	'no-param-reassign': 0,
	// 	'import/extensions': 0,
	// 	'import/no-extraneous-dependencies': 0,
	// 	'import/no-mutable-exports': 0,
	// 	'import/no-named-as-default': 0,
	// 	'import/no-duplicates': 0,
	// 	'no-unused-vars': 0
	// },
	// overrides: [
	// 	{
	// 		files: ['*.svelte'],
	// 		parser: 'svelte-eslint-parser',
	// 		parserOptions: { parser: '@typescript-eslint/parser' },
	// 		rules: {
	// 			'import/no-named-as-default': 0,
	// 			'import/no-named-as-default-member': 0
	// 		}
	// 	}
	// ]
};
