import React from 'react';
import * as userActions from '../../actions/userActions';
import {connect} from 'react-redux';
import classnames from 'classnames';

class SignupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      errors: {},
      isLoading: false
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({errors: {} , isLoading: true})
    // console.log(this.state);
    this.props.addUser(this.state)
              .then(() => {},
                    (err) => { this.setState( { errors : err.response.data, isLoading: false} )})
              // .cacth(err => {console.log(err.response)})
  }

  render () {
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community</h1>

        <div className={classnames("form-group", { 'has-error': errors.username })}>
          <label className="control-label">Username</label>
          <input
            value={this.state.username}
            onChange={this.onChange}
            type="text"
            name="username"
            className="form-control"
          />
        {errors.username && <span className="help-block">{ errors.username }</span>}
        </div>

        <div className={classnames("form-group", { 'has-error': errors.email })}>
          <label className="control-label">Email</label>
          <input
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            name="email"
            className="form-control"
          />
        {errors.email && <span className="help-block">{ errors.email }</span>}
        </div>

        <div className={classnames("form-group", { 'has-error': errors.password })}>
          <label className="control-label">Password</label>
          <input
            value={this.state.password}
            onChange={this.onChange}
            type="password"
            name="password"
            className="form-control"
          />
        {errors.password && <span className="help-block">{ errors.password }</span>}
        </div>

        <div className="form-group">
          <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
      addUser: state => dispatch(userActions.addUser(state)),
    };
};


SignupForm.PropTypes = {
  addUser: React.PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
