import React from 'react';
import {connect} from 'react-redux';
import * as userActions from '../../actions/userActions';

class User extends React.Component {
  componentDidMount(){
    this.props.fetchUsers();
  }
  render() {
    return (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>User Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {this.props.users.map(user => <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr> )}
            </tbody>
          </table>
        </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.users
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(userActions.fetchUsers()),
  };
};
User.propTypes = {
  fetchUsers: React.PropTypes.func.isRequired,
  users: React.PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
