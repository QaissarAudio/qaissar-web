import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
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
