import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
    site: 'https://sigquantum.com',
    output: 'static',
    // output: 'server', SSR
    // adapter: cloudflare({
    //     imageService: 'cloudflare'
    // }),
    vite: {
        server: {
            ssr: {
                noExternal: false,
            },
            fs: {
                // Allow serving files from one level up to the project root
                allow: ['/nix/store/', './src/styles/'],
            },
        },
    },
    integrations: [tailwind()],
})
