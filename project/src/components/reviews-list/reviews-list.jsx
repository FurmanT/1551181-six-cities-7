import React from 'react';
import PropTypes from 'prop-types';
import { reviewPropTypes } from '../../prop-types';
import AddReview from '../add-review/add-review';
import ReviewCard from '../review-card/review-card';
import { AuthorizationStatus } from '../../const';
import { connect } from 'react-redux';
import { getAuthorizationStatus  } from '../../store/user/selector';

function ReviewsList({reviews, authorizationStatus}) {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review}/>
        ))}
      </ul>
      {authorizationStatus === AuthorizationStatus.AUTH && <AddReview />}
    </section>
  );
}
ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    reviewPropTypes).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export default connect(mapStateToProps, null)(ReviewsList);

