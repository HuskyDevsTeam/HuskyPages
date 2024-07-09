import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base:"/HuskyPages/",
	publicDir: "public",
	server: {
		watch: {
			usePolling: true,
		},
		host: true,
		port: 3000,
	},
})
