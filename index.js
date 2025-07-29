import fs from 'fs';
import baseConfig from './lib/configs/base-config.js';
import clientConfig from './lib/configs/client-config.js';
import serverConfig from './lib/configs/server-config.js';

const pkg = JSON.parse(fs.readFileSync(new URL('./package.json', import.meta.url), 'utf8'));

export default {
	meta: {
		name: pkg.name,
		version: pkg.version
	},
	configs: {
		base: baseConfig,
		client: clientConfig,
		server: serverConfig
	}
};
