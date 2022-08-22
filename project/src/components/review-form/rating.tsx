type RatingProps = {
  handleFieldChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

const Rating = (props: RatingProps): JSX.Element => {
  const {handleFieldChange} = props;

  const ratingArray = [
    'terribly',
    'badly',
    'not bad',
    'good',
    'perfect'
  ];

  return (
    <div className="reviews__rating-form form__rating">
      {ratingArray.map((title: string, index: number) => (
        <div key={title}>
          <input className="form__rating-input visually-hidden" name="rating" value={ratingArray.length - index} id={`${ratingArray.length - index}-stars`} type="radio" onChange={handleFieldChange}/>
          <label htmlFor={`${ratingArray.length - index}-stars`} className="reviews__rating-label form__rating-label" title={title}>
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </div>
      ))}
    </div>
  );
};

export default Rating;
