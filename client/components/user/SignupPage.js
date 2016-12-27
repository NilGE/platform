import React from 'react';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { addUser } from '../../actions/userActions';
import { addFlashMessage } from '../../actions/flashMessageActions';

class SignupPage extends React.Component {
  render() {
    const { addUser, addFlashMessage } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm addUser={addUser} addFlashMessage={addFlashMessage}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: state => dispatch(addUser(state)),
    addFlashMessage: message => dispatch(addFlashMessage(message))
  };
};


SignupPage.propTypes = {
  addUser: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
