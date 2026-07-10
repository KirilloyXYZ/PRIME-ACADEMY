import { useState } from 'react'

type PhotoFrameProps = {
  src: string
  alt: string
  name: string
  note: string
  className?: string
  imagePosition?: string
  loading?: 'eager' | 'lazy'
}

export function PhotoFrame({
  src,
  alt,
  name,
  note,
  className = '',
  imagePosition = 'center',
  loading = 'lazy',
}: PhotoFrameProps) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`photo-frame ${className}`}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading={loading}
          style={{ objectPosition: imagePosition }}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="photo-frame__fallback" aria-label={alt}>
          <span>{name}</span>
          <small>{note}</small>
        </div>
      )}
    </div>
  )
}
