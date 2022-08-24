import { ReviewType } from '../../types/review';
import Review from './review';

type ReviewListProps = {
  review: ReviewType;
}

const ReviewList = ({review}: ReviewListProps) => (
  <ul className="reviews__list">
    <Review review={review}/>
  </ul>
);

export default ReviewList;
