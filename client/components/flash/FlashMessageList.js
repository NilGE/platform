import React from 'react';
import FlashMessage from './FlashMessage';
import { connect } from 'react-redux';
import { deleteFlashMessage } from '../../actions/flashMessageActions';

class FlashMessageList extends React.Component {
  render() {
    const messages = this.props.messages.map(message =>
      <FlashMessage key={message.id} message={message} deleteFlashMessage={this.props.deleteFlashMessage}/>
    );
    return (
      <div>{ messages }</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.flashMessages
  };
};

FlashMessageList.propTypes = {
  messages: React.PropTypes.array.isRequired,
  deleteFlashMessage: React.PropTypes.func.isRequired
};

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessageList);
