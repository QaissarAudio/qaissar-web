/**
 * After `next build` with output: 'standalone', copy static assets into the standalone bundle.
 * Required for self-hosted deploy (Contabo VPS, PM2, Docker).
 */
import { cpSync, existsSync } from 'fs'
import { join } from 'path'

const root = process.cwd()
const standalone = join(root, '.next/standalone')

if (!existsSync(standalone)) {
  console.warn('[copy-standalone-assets] No .next/standalone — skip (dev or non-standalone build).')
  process.exit(0)
}

cpSync(join(root, 'public'), join(standalone, 'public'), { recursive: true })
cpSync(join(root, '.next/static'), join(standalone, '.next/static'), { recursive: true })

console.log('[copy-standalone-assets] public + .next/static copied into standalone output.')
