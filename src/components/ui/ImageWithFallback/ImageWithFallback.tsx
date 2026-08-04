import { useEffect, useRef, useState } from 'react'

interface ImageWithFallbackProps {
  readonly src?: string
  readonly alt: string
  readonly fallbackLabel: string
  readonly className?: string
  readonly width: number
  readonly height: number
  readonly priority?: boolean
}

export function ImageWithFallback({
  src,
  alt,
  fallbackLabel,
  className = '',
  width,
  height,
  priority = false,
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false)
  const [loading, setLoading] = useState(Boolean(src))
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const image = imageRef.current
    if (!src || !image?.complete) return

    setLoading(false)
    if (image.naturalWidth === 0) setFailed(true)
  }, [src])

  if (!src || failed) {
    return (
      <div
        aria-label={fallbackLabel}
        className={`image-fallback ${className}`.trim()}
        role="img"
      >
        <span aria-hidden="true">PG</span>
        <small>Prévia visual em preparação</small>
      </div>
    )
  }

  return (
    <span aria-busy={loading} className={`image-shell ${className}`.trim()}>
      {loading ? <span className="image-loading" role="status">Carregando imagem</span> : null}
      <img
        alt={alt}
        className={loading ? 'image-shell__image image-shell__image--loading' : 'image-shell__image'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        onError={() => {
          setLoading(false)
          setFailed(true)
        }}
        onLoad={() => setLoading(false)}
        ref={imageRef}
        src={src}
        width={width}
      />
    </span>
  )
}
