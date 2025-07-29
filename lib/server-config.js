import globals from 'globals';
import baseConfig from './base-config.js';

export default {
	languageOptions: {
		...baseConfig.languageOptions,
		globals: {
			...globals.nodeBuiltin
		}
	},
	rules: {
		...baseConfig.rules
	}
};
