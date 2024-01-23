import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '0px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '255 255 255',
		'--on-error': '255 255 255',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #3a2aa4
		'--color-primary-50': '225 223 241', // #e1dff1
		'--color-primary-100': '216 212 237', // #d8d4ed
		'--color-primary-200': '206 202 232', // #cecae8
		'--color-primary-300': '176 170 219', // #b0aadb
		'--color-primary-400': '117 106 191', // #756abf
		'--color-primary-500': '58 42 164', // #3a2aa4
		'--color-primary-600': '52 38 148', // #342694
		'--color-primary-700': '44 32 123', // #2c207b
		'--color-primary-800': '35 25 98', // #231962
		'--color-primary-900': '28 21 80', // #1c1550

		// secondary | #5745e4
		'--color-secondary-50': '230 227 251', // #e6e3fb
		'--color-secondary-100': '221 218 250', // #dddafa
		'--color-secondary-200': '213 209 248', // #d5d1f8
		'--color-secondary-300': '188 181 244', // #bcb5f4
		'--color-secondary-400': '137 125 236', // #897dec
		'--color-secondary-500': '87 69 228', // #5745e4
		'--color-secondary-600': '78 62 205', // #4e3ecd
		'--color-secondary-700': '65 52 171', // #4134ab
		'--color-secondary-800': '52 41 137', // #342989
		'--color-secondary-900': '43 34 112', // #2b2270

		// tertiary | #147918
		'--color-tertiary-50': '220 235 220', // #dcebdc
		'--color-tertiary-100': '208 228 209', // #d0e4d1
		'--color-tertiary-200': '196 222 197', // #c4dec5
		'--color-tertiary-300': '161 201 163', // #a1c9a3
		'--color-tertiary-400': '91 161 93', // #5ba15d
		'--color-tertiary-500': '20 121 24', // #147918
		'--color-tertiary-600': '18 109 22', // #126d16
		'--color-tertiary-700': '15 91 18', // #0f5b12
		'--color-tertiary-800': '12 73 14', // #0c490e
		'--color-tertiary-900': '10 59 12', // #0a3b0c

		// success | #48a687
		'--color-success-50': '228 242 237', // #e4f2ed
		'--color-success-100': '218 237 231', // #daede7
		'--color-success-200': '209 233 225', // #d1e9e1
		'--color-success-300': '182 219 207', // #b6dbcf
		'--color-success-400': '127 193 171', // #7fc1ab
		'--color-success-500': '72 166 135', // #48a687
		'--color-success-600': '65 149 122', // #41957a
		'--color-success-700': '54 125 101', // #367d65
		'--color-success-800': '43 100 81', // #2b6451
		'--color-success-900': '35 81 66', // #235142

		// warning | #2619f2
		'--color-warning-50': '222 221 253', // #deddfd
		'--color-warning-100': '212 209 252', // #d4d1fc
		'--color-warning-200': '201 198 252', // #c9c6fc
		'--color-warning-300': '168 163 250', // #a8a3fa
		'--color-warning-400': '103 94 246', // #675ef6
		'--color-warning-500': '38 25 242', // #2619f2
		'--color-warning-600': '34 23 218', // #2217da
		'--color-warning-700': '29 19 182', // #1d13b6
		'--color-warning-800': '23 15 145', // #170f91
		'--color-warning-900': '19 12 119', // #130c77

		// error | #b72a46
		'--color-error-50': '244 223 227', // #f4dfe3
		'--color-error-100': '241 212 218', // #f1d4da
		'--color-error-200': '237 202 209', // #edcad1
		'--color-error-300': '226 170 181', // #e2aab5
		'--color-error-400': '205 106 126', // #cd6a7e
		'--color-error-500': '183 42 70', // #b72a46
		'--color-error-600': '165 38 63', // #a5263f
		'--color-error-700': '137 32 53', // #892035
		'--color-error-800': '110 25 42', // #6e192a
		'--color-error-900': '90 21 34', // #5a1522
		// =~= Theme Surface Colors =~=
		'--color-surface-50': '',
		'--color-surface-100': '',
		'--color-surface-200': '',
		'--color-surface-300': '',
		'--color-surface-400': '',
		'--color-surface-500': '',
		'--color-surface-600': '',
		'--color-surface-700': '',
		'--color-surface-800': '',
		'--color-surface-900': ''
	}
};
