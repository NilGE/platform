import React from 'react';

const HouseDetail = ({house}) => {
  return (
    <div className="media">
      <div className="media-left">
        <a href="#">
          <img className="media-object" src="" alt="Placehold" />
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">Housing Information</h4>
        <ul>
          <li><stron>Address1: </stron> {house.address1}</li>
          <li><stron>Address2: </stron> {house.address2}</li>
          <li><stron>Bedrooms: </stron> {house.bedroom}</li>
          <br/>
        </ul>
      </div>
    </div>
  );
};

HouseDetail.propTypes = {
  house: React.PropTypes.object.isRequired
};

export default HouseDetail;
