import React from 'react';

const HouseDetail = ({house}) => {
  const {price} = house;
  return (
    <div className="media">
      <div className="media-left">
        <a href="#">
          <img className="media-object" src="" alt="Placehold" />
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">{price}</h4>
        <ul>
          <li><stron>Author: </stron> {price}</li>
          <li><stron>Price: </stron> ${price}</li>
          <li><stron>Year: </stron> {price}</li>
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
