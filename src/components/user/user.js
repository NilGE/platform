import React, {PropTypes} from 'react';
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
                  <th>
                    <td>User</td>
                    <td></td>
                  </th>
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

const mapStateToProps = (state, ownProps) => {
    return {
      users: state.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      fetchUsers: () => dispatch(userActions.fetchUsers()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
