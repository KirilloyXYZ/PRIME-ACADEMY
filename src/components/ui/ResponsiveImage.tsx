import type { CSSProperties } from 'react'
import type { ResponsiveImagePosition } from '../../content'

type ResponsiveImageProps = {
  src: string
  alt: string
  position?: ResponsiveImagePosition
  scale?: number
  loading?: 'eager' | 'lazy'
  decoding?: 'async' | 'sync' | 'auto'
  fetchPriority?: 'high' | 'low' | 'auto'
  width?: number
  height?: number
  srcSet?: string
  sizes?: string
  sources?: Array<{
    srcSet: string
    type: string
    sizes?: string
  }>
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
  decoding = 'async',
  fetchPriority,
  width,
  height,
  srcSet,
  sizes,
  sources,
  className = '',
}: ResponsiveImageProps) {
  const style: ImageStyle = {
    '--image-position-desktop': position?.desktop,
    '--image-position-tablet': position?.tablet,
    '--image-position-mobile': position?.mobile,
    '--image-scale': scale,
  }

  const image = (
    <img
      className={`responsive-image ${className}`}
      src={src}
      alt={alt}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      width={width}
      height={height}
      srcSet={srcSet}
      sizes={sizes}
      style={style}
    />
  )

  if (!sources?.length) {
    return image
  }

  return (
    <picture className="responsive-picture">
      {sources.map((source) => (
        <source key={`${source.type}-${source.srcSet}`} srcSet={source.srcSet} type={source.type} sizes={source.sizes ?? sizes} />
      ))}
      {image}
    </picture>
  )
}
