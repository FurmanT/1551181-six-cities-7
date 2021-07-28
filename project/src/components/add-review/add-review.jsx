import React from 'react';
import { RatingType } from '../../const';
import { sentReview } from '../../store/api-actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRoomId } from '../../store/offers-process/selector';

function AddReview({id, onSentReview}) {
  const [review, setReview] = React.useState({
    rating: 0,
    comment: '',
  });

  const handlerRatingChange = (evt) => {
    const value = evt.target.value;
    setReview({...review, rating: value});
  };

  const onHandlerSubmit = (e) => {
    e.preventDefault();
    onSentReview(id, review);
    setReview({
      rating: 0,
      comment: '',
    });
  };

  return (
    <form className="reviews__form form" onSubmit={onHandlerSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          Object.keys(RatingType).map((key) => (
            <>
              <input className="form__rating-input visually-hidden" name="rating" value={RatingType[key].value} id={`${RatingType[key].value}-stars`} type="radio" onChange={handlerRatingChange}/>
              <label htmlFor={`${RatingType[key].value}-stars`} className="reviews__rating-label form__rating-label" title={RatingType[key].title}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </>
          ))
        }
      </div>
      <textarea className="reviews__textarea form__textarea"
        id="review" name="review"
        onChange={({target}) => {
          const value = target.value;
          setReview({...review, comment: value});
        }}
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review.comment}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={(review.comment.length === 0 && review.rating === 0)}>Submit</button>
      </div>
    </form>
  );
}

AddReview.propTypes = {
  id: PropTypes.number.isRequired,
  onSentReview: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  id: getRoomId(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSentReview(id, review) {
    dispatch(sentReview(id , review));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
