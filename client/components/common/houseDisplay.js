import React from 'react';
import { connect } from 'react-redux';
// import * as houseActions from '../../actions/houseActions';


class House extends React.Component{
  constructor(props){
    super(props);
  }

  // componentDidMount(){
  //   this.props.fetchHouses();
  // }

  render(){
    return(
      <div className="row">
        <div className="col-md-6">
          <h3>Houses</h3>
          <div>
          {this.props.houses.map((house) => <ul key={house._id}>
            <li>{house.address1}</li>
          </ul> )}
          </div>
        </div>
      </div>
    );
  }
}

//{this.props.houses.map((house) => <ul key={house._id}>
//   <li>{house.address1}</li>
// </ul> )}

const mapStateToProps = (state) => {
  return {
    houses: state.houses
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // This dispatch will trigger
//     // the Ajax request we setup
//     // in our actions
//     fetchHouses: () => dispatch(houseActions.fetchHouses()),
//   };
// };


House.propTypes = {
  // fetchHouses: React.PropTypes.func.isRequired,
  houses: React.PropTypes.object.isRequired
};

// Use connect to put them together  <td><Link to={`/books/${b.id}`}>View</Link></td>
// export default connect(mapStateToProps, mapDispatchToProps)(House);
// export default connect(mapStateToProps, mapDispatchToProps)(House);
export default connect(mapStateToProps, null)(House);
