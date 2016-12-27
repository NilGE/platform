import React  from 'react';
import {Link} from 'react-router';
import FlashMessageList from './flash/FlashMessageList';
import { connect } from 'react-redux';
import { logout } from '../actions/userActions';

class App extends React.Component {
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }
  render() {
    const { isAuthenticated } = this.props.auth;

    const userLink = (
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
      </ul>
    );

    const guestLink = (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/signup">Sign up</Link></li>
        <li><Link to="/login">Log in</Link></li>
      </ul>
    );
    return (
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">SC Market</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/books">Book</Link></li>
                <li><Link to="/user">User</Link></li>
              </ul>
              { isAuthenticated ? userLink : guestLink }
            </div>
          </div>
        </nav>
        <FlashMessageList />
        {/* Each smaller components */}
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

App.propTypes = {
  children: React.PropTypes.object.isRequired,
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired
};

export default connect(mapStateToProps, { logout })(App);
