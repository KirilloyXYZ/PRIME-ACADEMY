import type { CSSProperties } from 'react'
import type { ResponsiveImagePosition } from '../../content'

type ResponsiveImageProps = {
  src: string
  alt: string
  position?: ResponsiveImagePosition
  scale?: number
  loading?: 'eager' | 'lazy'
  className?: string
}

type ImageStyle = CSSProperties & {
  '--image-position-desktop'?: string
  '--image-position-tablet'?: string
  '--image-position-mobile'?: string
  '--image-scale'?: number
}

export function ResponsiveImage({
  src,
  alt,
  position,
  scale = 1,
  loading = 'lazy',
  className = '',
}: ResponsiveImageProps) {
  const style: ImageStyle = {
    '--image-position-desktop': position?.desktop,
    '--image-position-tablet': position?.tablet,
    '--image-position-mobile': position?.mobile,
    '--image-scale': scale,
  }

  return (
    <img className={`responsive-image ${className}`} src={src} alt={alt} loading={loading} style={style} />
  )
}
