import globals from 'globals';
import baseConfig from './base-config.js';

export default {
	languageOptions: {
		...baseConfig.languageOptions,
		globals: {
			...globals.nodeBuiltin
		}
	},
	plugins: {
		...baseConfig.plugins
	},
	rules: {
		...baseConfig.rules
	}
};
