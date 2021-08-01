import React, { useMemo} from 'react';
import { reviewPropTypes } from '../../prop-types';
import dayjs from 'dayjs';
import {MAX_RATING} from '../../const';

function ReviewCard({review}) {
  const {id, user, comment, date, rating } = review;

  const starts = useMemo(() => {
    if (rating) {
      return `${(Math.round(rating) * 100) / MAX_RATING}%`;
    }
  }, [rating]);

  return (
    <li className="reviews__item" key={id}>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: starts}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime= {dayjs(date).format('YY-MM-DD')} > {dayjs(date).format('MMMM YYYY')}</time>
      </div>
    </li>
  );
}

ReviewCard.propTypes = {
  review: reviewPropTypes,
};
export default ReviewCard;


