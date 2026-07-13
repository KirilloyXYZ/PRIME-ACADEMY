import { Star } from 'lucide-react'
import { reviews, type Review } from '../../data/reviews'

export function ReviewsSection() {
  const visibleReviews = reviews.filter((review) => review.consentConfirmed)

  return (
    <section className="page-section reviews-section" id="reviews">
      <div className="section-shell reviews-shell">
        <div className="reviews-head">
          <div>
            <h2>Отзывы учеников</h2>
            <p>Реальные впечатления и результаты занятий.</p>
          </div>
        </div>

        <div className="reviews-grid" aria-label="Отзывы учеников PRIME ACADEMY">
          {visibleReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ReviewCard({ review }: { review: Review }) {
  const layout = review.layout ?? 'small'
  const secondaryBadge = review.authorType === 'parent' ? 'Отзыв родителя' : review.featured ? undefined : review.result
  const showResultLine = Boolean(review.result && (review.featured || secondaryBadge !== review.result))

  return (
    <article className={`review-card review-card--${layout}${review.featured ? ' review-card--featured' : ''}`}>
      <div className="review-card__content">
        <div className="review-card__badges">
          {review.categoryLabel ? <span>{review.categoryLabel}</span> : null}
          {secondaryBadge ? <span>{secondaryBadge}</span> : null}
        </div>

        <div className="review-card__rating" aria-label="Оценка 5 из 5">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} aria-hidden="true" />
          ))}
        </div>

        <h3>{review.authorName}</h3>
        {showResultLine ? (
          <div className="review-card__metric">
            <strong>{review.result}</strong>
            {review.resultNote ? <small>{review.resultNote}</small> : null}
          </div>
        ) : null}

        <p>{review.excerpt}</p>
      </div>

      <div className="review-card__preview">
        <img src={review.originalImage} alt={review.imageAlt} loading="lazy" />
      </div>
    </article>
  )
}
