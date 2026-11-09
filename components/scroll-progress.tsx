'use client'

import { useEffect, useState } from 'react'

/**
 * Fine barre de progression en haut de page qui se remplit au scroll.
 * Signale la qualité et donne un repère de navigation.
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0
    const update = () => {
      const scrollTop = window.scrollY
      const height =
        document.documentElement.scrollHeight - window.innerHeight
      const value = height > 0 ? (scrollTop / height) * 100 : 0
      setProgress(value)
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent"
    >
      <div
        className="h-full origin-left bg-primary transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
