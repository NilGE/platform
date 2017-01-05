import React from 'react';
import { connect } from 'react-redux';
import { fetchHouses, setHouse } from '../../../actions/houseActions';

class HouseListPage extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchHouses();
  }

  onClick(house) {
    this.props.setHouse(house);
    this.context.router.push('/house-detail');
  }

  render() {
    return(
      <div className="row">
        <div className="col-md-6">
          <h3>Houses</h3>
          <div>
          {this.props.houses.map((house) => <ul key={house._id}>
            <li><button onClick={this.onClick.bind(this, house)}>{house.address1}</button></li>
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
    fetchHouses: () => dispatch(fetchHouses()),
    setHouse: (house) => dispatch(setHouse(house))
  };
};


HouseListPage.propTypes = {
  houses: React.PropTypes.array.isRequired,
  fetchHouses: React.PropTypes.func.isRequired,
  setHouse: React.PropTypes.func.isRequired
};

HouseListPage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(HouseListPage);
