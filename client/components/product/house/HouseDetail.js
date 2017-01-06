import React from 'react';

const HouseDetail = ({house}) => {
  console.log(house);
  return (
    <div className="media">
      <div className="media-left">

      {house.photos.map(photo =>
        <div key={photo}>
          <img className="media-object" src={photo.slice(photo.indexOf('/') + 1)} width="100px" alt="Placehold" />
        </div>
      )}

      </div>
      <div className="media-body">
        <h4 className="media-heading">Housing Information</h4>
        <ul>
          <li><stron>Address1: </stron> {house.address1}</li>
          <li><stron>Address2: </stron> {house.address2}</li>
          <li><stron>Bedrooms: </stron> {house.bedroom}</li>
          <li><stron>Bathrooms: </stron> {house.bathroom}</li>
          <li><stron>Size: </stron> {house.size}</li>
          <li><stron>facilities: </stron> {house.facilities}</li>
          <li><stron>price: </stron> {house.price}</li>
          <li><stron>comments: </stron> {house.comments}</li>
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
