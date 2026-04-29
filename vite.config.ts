import Babel from '@rolldown/plugin-babel'
import TailwindCSS from '@tailwindcss/vite'
import React, { reactCompilerPreset } from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
    base: '/nkboothroyd.github.io/',
    plugins: [
        React(),
        Babel({ presets: [reactCompilerPreset()] }),
        TailwindCSS(),
    ],
})
