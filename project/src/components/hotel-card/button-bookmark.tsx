type ButtonType = 'cities' | 'offer';

type ButtonBookmarkProps = {
  className: string;
  buttonType: ButtonType;
}

const buttonIconSize = {
  cities: {
    width: 18,
    height: 19
  },
  offer: {
    width: 31,
    height: 33
  }
};

const ButtonBookmark = ({className, buttonType}: ButtonBookmarkProps): JSX.Element => {

  const width = buttonIconSize[buttonType].width;
  const height = buttonIconSize[buttonType].height;

  return (
    <button className={`${className} button`} type="button">
      <svg className="place-card__bookmark-icon" width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>
  );
};

export default ButtonBookmark;
