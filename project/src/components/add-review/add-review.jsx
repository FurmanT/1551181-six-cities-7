import React, {useEffect} from 'react';
import {RatingType, RESULT} from '../../const';
import {sentReview} from '../../store/api-actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {useParams} from 'react-router-dom';
import {
  getStatus
} from '../../store/review/selector';
import Icon from '../icon/icon';

function AddReview({onSentReview, statusSent}) {
  const { id } = useParams();
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
    if (review.comment.length < 50 || review.comment.length > 300) {
      return;
    }
    onSentReview(id, review);
  };

  useEffect(() => {
    if (statusSent === RESULT.SUCCESS){
      setReview({
        rating: 0,
        comment: '',
      });
    }
  }, [statusSent]);

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

        {statusSent === RESULT.ERROR && (
          <div>
            <p>Не удалось отправить отзыв</p>
            <Icon name="error" color="red" width="25" height="25" />
          </div>
        )}
        <button className="reviews__submit form__submit button" type="submit" disabled={(review.comment.length === 0 && review.rating === 0)}>Submit</button>
      </div>
    </form>
  );
}

AddReview.propTypes = {
  onSentReview: PropTypes.func.isRequired,
  statusSent: PropTypes.string.isRequired,
};


const mapStateToProps = (state) => ({
  statusSent: getStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSentReview(id, review) {
    dispatch(sentReview(id , review));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
