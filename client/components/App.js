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
      <div>
        <div className="col-sm-3 col-md-3">
          <form className="navbar-form form-inline" role="search">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Search" name="q" />
                <div className="input-group-btn">
                    <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                </div>
            </div>
          </form>
        </div>
        <ul className="nav navbar-nav">
          <div className="navbar-btn">
            <li><Link to="/new-product" className="btn btn-success col-md-offset-3">ADD NEW</Link></li>
          </div>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
        </ul>
      </div>
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
                <li><Link to="/about">Houses</Link></li>
                <li><Link to="/about">Cars</Link></li>
                <li><Link to="/books">Appliances</Link></li>
                <li><Link to="/user">Others</Link></li>
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
