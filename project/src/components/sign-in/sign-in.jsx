import React, { useRef  } from 'react';
import PropTypes from 'prop-types';
import { login } from '../../store/api-actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Header from '../header/header';
import { getAuthorizationStatus  } from '../../store/user/selector';

function SignIn({onSubmit, authorizationStatus}) {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (parseInt(emailRef.current.value.length, 10) === 0 || parseInt(passwordRef.current.value.trim().length, 10) === 0) {
      return;
    }
    onSubmit({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return <Redirect to={AppRoute.ROOT} />;
  }

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input ref={emailRef} className="login__input form__input" type="email" name="email" id="email" placeholder="Email" required=""/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input ref={passwordRef} className="login__input form__input" type="password" name="password"  id="password" placeholder="Password" required=""/>
              </div>
              <button className="login__submit form__submit button" type="submit" onClick={handleSubmit}>Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string,
};


const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

