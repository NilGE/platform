import React from 'react';
import HouseDetail from './HouseDetail';
import { connect } from 'react-redux';

class HouseDetailPage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <HouseDetail house = {this.props.house} />
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

HouseDetailPage.propTypes = {
  house: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, null)(HouseDetailPage);
