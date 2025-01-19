import {fileURLToPath, URL} from "url";
import {VitePWA} from "vite-plugin-pwa";
import manifest from "./manifest.js";

import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import {quasar, transformAssetUrls} from "@quasar/vite-plugin";

export default defineConfig({
    server: {
        port: 8080,
    },
    preview: {
        port: 4173,
    },
    plugins: [
        vue({
            template: {transformAssetUrls}
        }),
        VitePWA({
            manifest,
            injectManifest: {
                globPatterns: ['**/*.{js,css,html,png,jpg,jpeg,svg,eot,ttf,woff,woff2,ico}']
            },
            strategies: "injectManifest",
            srcDir: "src",
            filename: "custom-sw.js",
        }),
        quasar()
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});
