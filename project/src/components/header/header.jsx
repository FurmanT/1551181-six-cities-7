import React from 'react';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout } from '../../store/api-actions';
import { connect } from 'react-redux';
import {  getAuthorizationStatus, getUser } from '../../store/user/selector';

function Header({authorizationStatus, onLogOut, user}) {

  const onLogOutHandler = (e) =>{
    e.preventDefault();
    onLogOut();
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active"  href="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {
                ( authorizationStatus === AuthorizationStatus.NO_AUTH) ? (
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to={AppRoute.SIGN_IN}>
                      <span className="header__signout">Sign in</span>
                    </Link>
                  </li>
                ) : (
                  <>
                    <li className="header__nav-item user">
                      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                          <img className="" src={user.avatarUrl} alt={user.name} width="81" height="41"/>
                        </div>
                        <span className="header__user-name user__name">{user.email}</span>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <Link className="header__nav-link" onClick={onLogOutHandler} to={AppRoute.ROOT}>
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  </>
                )
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  authorizationStatus: PropTypes.string,
  onLogOut: PropTypes.func.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string,
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
  }),
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  user: getUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLogOut() {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

