import React from 'react';
import HouseForm from './HouseForm';

class NewHousePage extends React.Component {
  render() {
    return (
      <div className="row">
        <h1 style={{textAlign: 'center'}}>House Information</h1>
        <div className="col-md-6 col-md-offset-3">
          <HouseForm />
        </div>
      </div>
    );
  }
}

export default NewHousePage;
