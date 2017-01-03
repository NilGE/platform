import React from 'react';
import { connect } from 'react-redux';
import { fetchHouses } from '../../../actions/houseActions';

class HouseListPage extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchHouses();
  }

  render() {
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

const mapStateToProps = (state) => {
  return {
    houses: state.houses
  };
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    fetchHouses: () => dispatch(fetchHouses())
  };
};


HouseListPage.propTypes = {
  houses: React.PropTypes.array.isRequired,
  fetchHouses: React.PropTypes.func.isRequired
};

// Use connect to put them together  <td><Link to={`/books/${b.id}`}>View</Link></td>
// export default connect(mapStateToProps, mapDispatchToProps)(House);
// export default connect(mapStateToProps, mapDispatchToProps)(House);
export default connect(mapStateToProps, mapDispatchToProps)(HouseListPage);
