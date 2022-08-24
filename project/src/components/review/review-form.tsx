import {useState} from 'react';
import { ReviewType } from '../../types/review';
import Rating from './rating';
import ReviewList from './review-list';

type ReviewFormProps = {
  review: ReviewType;
}

const ReviewForm = ({review}: ReviewFormProps): JSX.Element => {
  const [formData, setFormData] = useState({
    review: '',
    rating: '',
  });

  const handleFieldChange = (evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ReviewList review={review}/>
      <form className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <Rating handleFieldChange={handleFieldChange}/>
        <textarea onChange={handleFieldChange} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
              To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
        </div>
      </form>
    </section>
  );
};

export default ReviewForm;
