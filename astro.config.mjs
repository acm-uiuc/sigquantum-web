import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind';

export default defineConfig({
    vite: {
        server: {
            fs: {
                // Allow serving files from one level up to the project root
                allow: ['/nix/store/'],
            },
        },
    },

    integrations: [tailwind()],
})
