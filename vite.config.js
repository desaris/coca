import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import injectHTML from 'vite-plugin-html-inject';
import htmlMinifier from 'vite-plugin-html-minifier';

export default defineConfig(() => {
    return {
        publicDir: './src/assets',
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
