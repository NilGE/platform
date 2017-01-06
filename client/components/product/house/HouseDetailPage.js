import React from 'react';
import HouseDetail from './HouseDetail';
import { connect } from 'react-redux';
import { fetchHouse } from '../../../actions/houseActions';
// import isEmpty from 'lodash/isEmpty';

class HouseDetailPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.fetchHouse(this.props.params._id);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <HouseDetail house={this.props.house} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    house: state.house
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHouse: _id => dispatch(fetchHouse(_id))
  };
};

HouseDetailPage.propTypes = {
  house: React.PropTypes.object.isRequired,
  params: React.PropTypes.object.isRequired,
  fetchHouse: React.PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(HouseDetailPage);
