import { useEffect, useRef, useState } from 'react'
import { Maximize2, X } from 'lucide-react'
import { reviews, type Review } from '../../data/reviews'

export function ReviewsSection() {
  const visibleReviews = reviews.filter((review) => review.consentConfirmed && review.showOnSite !== false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedReview, setSelectedReview] = useState<Review | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<Array<HTMLElement | null>>([])
  const openerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const track = trackRef.current

    if (!track || !('IntersectionObserver' in window)) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        const index = Number(mostVisible?.target.getAttribute('data-review-index'))

        if (Number.isFinite(index)) {
          setActiveIndex(index)
        }
      },
      {
        root: track,
        threshold: [0.4, 0.55, 0.7, 0.85],
      },
    )

    cardRefs.current.slice(0, visibleReviews.length).forEach((card) => {
      if (card) {
        observer.observe(card)
      }
    })

    return () => observer.disconnect()
  }, [visibleReviews.length])

  function openReview(review: Review, opener: HTMLElement) {
    openerRef.current = opener
    setSelectedReview(review)
  }

  function closeReview() {
    setSelectedReview(null)
    window.requestAnimationFrame(() => openerRef.current?.focus())
  }

  return (
    <section className="page-section reviews-section" id="reviews">
      <div className="section-shell reviews-shell">
        <div className="reviews-head">
          <div>
            <h2>Отзывы учеников</h2>
            <p>Результат и короткая выжимка в карточке, оригинал — по клику.</p>
          </div>
          <div className="reviews-carousel-status" aria-live="polite">
            {activeIndex + 1} / {visibleReviews.length}
          </div>
        </div>

        <div className="reviews-grid" ref={trackRef} aria-label="Отзывы учеников PRIME ACADEMY">
          {visibleReviews.map((review, index) => (
            <ReviewCard
              key={review.id}
              review={review}
              index={index}
              onOpen={openReview}
              refCallback={(element) => {
                cardRefs.current[index] = element
              }}
            />
          ))}
        </div>
      </div>

      {selectedReview ? <ReviewImageModal review={selectedReview} onClose={closeReview} /> : null}
    </section>
  )
}

type ReviewCardProps = {
  review: Review
  index: number
  onOpen: (review: Review, opener: HTMLElement) => void
  refCallback: (element: HTMLElement | null) => void
}

function ReviewCard({ review, index, onOpen, refCallback }: ReviewCardProps) {
  const tags = [review.categoryLabel, review.authorType === 'parent' ? 'Отзыв родителя' : undefined].filter(Boolean)

  return (
    <article
      className={`review-card${review.featured ? ' review-card--featured' : ''}`}
      data-review-index={index}
      ref={refCallback}
    >
      <div className="review-card__content">
        <div className="review-card__badges">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <h3>{review.authorName}</h3>

        {review.result ? (
          <div className="review-card__metric">
            <strong>{review.result}</strong>
            {review.resultNote ? <small>{review.resultNote}</small> : null}
          </div>
        ) : null}

        <p>{review.shortQuote}</p>
      </div>

      <div className="review-card__original">
        <button
          className="review-card__thumb"
          type="button"
          onClick={(event) => onOpen(review, event.currentTarget)}
          aria-label={`Открыть оригинал отзыва: ${review.authorName}`}
        >
          <img
            src={review.originalImage}
            alt={review.imageAlt}
            width={review.imageWidth}
            height={review.imageHeight}
            loading="lazy"
            decoding="async"
          />
          <Maximize2 aria-hidden="true" />
        </button>
        <div>
          <span>Оригинал отзыва</span>
          <button type="button" onClick={(event) => onOpen(review, event.currentTarget)}>
            Посмотреть
          </button>
        </div>
      </div>
    </article>
  )
}

type ReviewImageModalProps = {
  review: Review
  onClose: () => void
}

function ReviewImageModal({ review, onClose }: ReviewImageModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow
    const previousRootOverflow = document.documentElement.style.overflow
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab') {
        return
      }

      const focusable = Array.from(
        dialogRef.current?.querySelectorAll<HTMLElement>('button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])') ?? [],
      )
      const first = focusable[0]
      const last = focusable.at(-1)

      if (!first || !last) {
        event.preventDefault()
        return
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousBodyOverflow
      document.documentElement.style.overflow = previousRootOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div className="review-modal" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div
        className="review-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`review-modal-title-${review.id}`}
        ref={dialogRef}
      >
        <div className="review-modal__head">
          <div>
            <span>Оригинал отзыва</span>
            <h3 id={`review-modal-title-${review.id}`}>{review.authorName}</h3>
          </div>
          <button ref={closeButtonRef} type="button" onClick={onClose} aria-label="Закрыть оригинал отзыва">
            <X aria-hidden="true" />
          </button>
        </div>

        <div className="review-modal__image-scroll">
          <img src={review.originalImage} alt={review.imageAlt} width={review.imageWidth} height={review.imageHeight} />
        </div>
      </div>
    </div>
  )
}
