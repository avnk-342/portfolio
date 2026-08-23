import { defineConfig, resolveConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // build:{
  //   rollupOptions:{
  //     input:{
  //       main: resolve(__dirname, "index.html"),
  //       about: resolve(__dirname, "/src/pages/About.jsx")
  //     }
  //   }
  // }
  server: {
    port: 3000
  }
})
