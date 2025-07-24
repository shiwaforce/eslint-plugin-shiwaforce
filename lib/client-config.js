import globals from 'globals';
import baseConfig from './base-config.js';

export default {
	languageOptions: {
		...baseConfig.languageOptions,
		globals: {
			...globals.browser,
		}
	},
	rules: {
		...baseConfig.rules,
	}

};
