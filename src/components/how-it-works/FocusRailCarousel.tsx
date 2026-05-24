'use client'

import * as React from 'react'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export type FocusRailItem = {
  id: string | number
  title: string
  description?: string
  imageSrc: string
  href?: string
  meta?: string
}

interface FocusRailProps {
  items: FocusRailItem[]
  initialIndex?: number
  loop?: boolean
  autoPlay?: boolean
  interval?: number
}

function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

const BASE_SPRING = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 30,
  mass: 1,
}

const TAP_SPRING = {
  type: 'spring' as const,
  stiffness: 450,
  damping: 18,
  mass: 1,
}

export function FocusRailCarousel({
  items,
  initialIndex = 0,
  loop = true,
  autoPlay = false,
  interval = 4000,
}: FocusRailProps) {
  const [active, setActive] = React.useState(initialIndex)
  const [isHovering, setIsHovering] = React.useState(false)
  const [cardW, setCardW] = React.useState(420)
  const lastWheelTime = React.useRef<number>(0)

  const count = items.length
  const activeIndex = wrap(0, count, active)
  const activeItem = items[activeIndex]

  React.useEffect(() => {
    const update = () => {
      setCardW(window.innerWidth <= 768 ? window.innerWidth * 0.78 : 420)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const handlePrev = React.useCallback(() => {
    if (!loop && active === 0) return
    setActive((p) => p - 1)
  }, [loop, active])

  const handleNext = React.useCallback(() => {
    if (!loop && active === count - 1) return
    setActive((p) => p + 1)
  }, [loop, active, count])

  const onWheel = React.useCallback(
    (e: React.WheelEvent) => {
      const now = Date.now()
      if (now - lastWheelTime.current < 400) return
      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY)
      const delta = isHorizontal ? e.deltaX : e.deltaY
      if (Math.abs(delta) > 20) {
        if (delta > 0) handleNext()
        else handlePrev()
        lastWheelTime.current = now
      }
    },
    [handleNext, handlePrev]
  )

  React.useEffect(() => {
    if (!autoPlay || isHovering) return
    const timer = setInterval(() => handleNext(), interval)
    return () => clearInterval(timer)
  }, [autoPlay, isHovering, handleNext, interval])

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrev()
    if (e.key === 'ArrowRight') handleNext()
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) =>
    Math.abs(offset) * velocity

  const onDragEnd = (
    e: MouseEvent | TouchEvent | PointerEvent,
    { offset, velocity }: PanInfo
  ) => {
    const swipe = swipePower(offset.x, velocity.x)
    if (swipe < -swipeConfidenceThreshold) handleNext()
    else if (swipe > swipeConfidenceThreshold) handlePrev()
  }

  const visibleIndices = [-2, -1, 0, 1, 2]

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        height: '560px',
        width: '100%',
        flexDirection: 'column',
        overflow: 'hidden',
        background: '#0a0a0a',
        color: 'white',
        outline: 'none',
        userSelect: 'none',
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onWheel={onWheel}
    >
      {/* Background Ambience */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={`bg-${activeItem.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ position: 'absolute', inset: 0 }}
          >
            <img
              src={activeItem.imageSrc}
              alt=""
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                filter: 'blur(40px) saturate(200%)',
              }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, #0a0a0a, rgba(10,10,10,0.5), transparent)',
            }} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Stage */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 32px',
      }}>
        {/* Rail */}
        <motion.div
          style={{
            position: 'relative',
            margin: '0 auto',
            display: 'flex',
            height: '280px',
            width: '100%',
            maxWidth: '1152px',
            alignItems: 'center',
            justifyContent: 'center',
            perspective: '1200px',
            cursor: 'grab',
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={onDragEnd}
        >
          {visibleIndices.map((offset) => {
            const absIndex = active + offset
            const index = wrap(0, count, absIndex)
            const item = items[index]
            if (!loop && (absIndex < 0 || absIndex >= count)) return null

            const isCenter = offset === 0
            const dist = Math.abs(offset)
            const xOffset = offset * (cardW + 20)
            const zOffset = -dist * 180
            const scale = isCenter ? 1 : 0.85
            const rotateY = offset * -20
            const opacity = isCenter ? 1 : Math.max(0.1, 1 - dist * 0.5)
            const blur = isCenter ? 0 : dist * 6
            const brightness = isCenter ? 1 : 0.5

            return (
              <motion.div
                key={absIndex}
                style={{
                  position: 'absolute',
                  aspectRatio: '16/10',
                  width: cardW,
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: '#1a1a1a',
                  boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                  zIndex: isCenter ? 20 : 10,
                  transformStyle: 'preserve-3d',
                  overflow: 'hidden',
                }}
                initial={false}
                animate={{
                  x: xOffset,
                  z: zOffset,
                  scale,
                  rotateY,
                  opacity,
                  filter: `blur(${blur}px) brightness(${brightness})`,
                }}
                transition={{
                  x: BASE_SPRING,
                  z: BASE_SPRING,
                  scale: TAP_SPRING,
                  rotateY: BASE_SPRING,
                  opacity: BASE_SPRING,
                  filter: BASE_SPRING,
                }}
                onClick={() => {
                  if (offset !== 0) setActive((p) => p + offset)
                }}
              >
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    pointerEvents: 'none',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, rgba(255,255,255,0.1), transparent)',
                  pointerEvents: 'none',
                }} />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Info and Controls */}
        <div style={{
          margin: '48px auto 0',
          display: 'flex',
          width: '100%',
          maxWidth: '896px',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
        }}>
          <div style={{ flex: 1, textAlign: 'center', height: '100px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                transition={{ duration: 0.3 }}
              >
                {activeItem.meta && (
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#E31E24',
                    display: 'block',
                    marginBottom: '8px',
                  }}>
                    {activeItem.meta}
                  </span>
                )}
                <h2 style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '8px',
                }}>
                  {activeItem.title}
                </h2>
                {activeItem.description && (
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.5)',
                    maxWidth: '480px',
                    margin: '0 auto',
                    lineHeight: 1.7,
                  }}>
                    {activeItem.description}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              borderRadius: '999px',
              background: 'rgba(30,30,30,0.8)',
              padding: '4px',
              border: '1px solid rgba(255,255,255,0.1)',
            }}>
              <button
                onClick={handlePrev}
                style={{
                  borderRadius: '50%',
                  padding: '12px',
                  color: 'rgba(255,255,255,0.5)',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <ChevronLeft size={20} />
              </button>
              <span style={{
                minWidth: '40px',
                textAlign: 'center',
                fontSize: '11px',
                color: 'rgba(255,255,255,0.4)',
                fontFamily: 'monospace',
              }}>
                {activeIndex + 1} / {count}
              </span>
              <button
                onClick={handleNext}
                style={{
                  borderRadius: '50%',
                  padding: '12px',
                  color: 'rgba(255,255,255,0.5)',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
