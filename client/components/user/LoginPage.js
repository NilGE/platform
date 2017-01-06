import React from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { addFlashMessage } from '../../actions/flashMessageActions';

class LoginPage extends React.Component {

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <LoginForm addFlashMessage={this.props.addFlashMessage} />
        </div>
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    addFlashMessage: message => dispatch(addFlashMessage(message))
  };
};

LoginPage.propTypes = {
  addFlashMessage: React.PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(LoginPage);
