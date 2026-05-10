import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32">
          <circle
            cx="14"
            cy="15"
            r="9"
            fill="none"
            stroke="black"
            strokeWidth="3.5"
          />
          <circle cx="26" cy="24" r="4" fill="#E31E24" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
