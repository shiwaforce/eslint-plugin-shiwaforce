import { defineConfig } from 'eslint/config';
import eslintConfigShiwaforce from './index.js';

export default defineConfig({
	extends: ['shiwaforce/server'],
	plugins: { shiwaforce: eslintConfigShiwaforce }
});
