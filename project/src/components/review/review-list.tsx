import { ReviewType } from '../../types/review';
import Review from './review';

type ReviewListProps = {
  reviews: ReviewType[];
}

const ReviewList = ({reviews}: ReviewListProps) => (
  <ul className="reviews__list">
    {reviews.map((review) => (<Review key={review.id} review={review}/>))}
  </ul>
);

export default ReviewList;
