import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import injectHTML from 'vite-plugin-html-inject';
import htmlMinifier from 'vite-plugin-html-minifier';

export default defineConfig(() => {
    return {
        root: './',
        base: '/coca/',
        publicDir: './src/assets',
        build: {
            outDir: './dist',
            emptyOutDir: true,
            rollupOptions: {
                input: {
                    main: './index.html',
                    pricing: './pricing.html',
                    contact: './contact.html',
                    about: './about.html',
                    team: './team.html',
                },
            },
        },
        plugins: [
            injectHTML(),
            htmlMinifier({
                minify: true,
            }),
            ViteImageOptimizer({
                png: {
                    quality: 80,
                },
                jpeg: {
                    quality: 80,
                },
                jpg: {
                    quality: 80,
                },
            }),
        ],
    };
});
