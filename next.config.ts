import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Self-hosted build (Contabo VPS, Docker, PM2) — smaller deploy artifact
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/products/qaissar-wall-speaker',
        destination: '/products/qaissar-ws-pro',
        permanent: true,
      },
    ]
  },
}

export default withPayload(nextConfig)
