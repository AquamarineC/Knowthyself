import react from '@vitejs/plugin-react'
import { cpSync, existsSync } from 'node:fs'
import { defineConfig } from 'vite'

function copyRootImg() {
  return {
    name: 'copy-root-img',
    closeBundle() {
      if (existsSync('img')) {
        cpSync('img', 'dist/img', { recursive: true })
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), copyRootImg()],
})
