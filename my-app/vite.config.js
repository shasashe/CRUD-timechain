import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';


export default defineConfig({
	plugins: [sveltekit()],
	define: {
		'process.env.POSTGRES_URL': JSON.stringify(process.env.POSTGRES_URL),
		'process.env.POSTGRES_PRISMA_URL': JSON.stringify(process.env.POSTGRES_PRISMA_URL),
		'process.env.POSTGRES_URL_NO_SSL': JSON.stringify(process.env.POSTGRES_URL_NO_SSL),
		'process.env.POSTGRES_URL_NON_POOLING': JSON.stringify(process.env.POSTGRES_URL_NON_POOLING),
		'process.env.POSTGRES_USER': JSON.stringify(process.env.POSTGRES_USER),
		'process.env.POSTGRES_HOST': JSON.stringify(process.env.POSTGRES_HOST),
		'process.env.POSTGRES_PASSWORD': JSON.stringify(process.env.POSTGRES_PASSWORD),
		'process.env.POSTGRES_DATABASE': JSON.stringify(process.env.POSTGRES_DATABASE),
	  },
});
