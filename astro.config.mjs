import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind';
// idc abour ssr; this seems to break easily.
// import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
    site: 'https://sigquantum.com',
    // output: 'static',
    // output: 'hybrid',
    // adapter: cloudflare({
    //     imageService: 'cloudflare'
    // }),
    redirects: {
        "/discord": {
            "status": 302,
            "destination": "https://discord.gg/bZHpPq2Kch"
        },
    },
    vite: {
        server: {
            fs: {
                allow: ['/nix/store/', './src/styles/'],
            },
        },
    },
    integrations: [tailwind()],
})
