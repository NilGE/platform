import React from 'react';
import HouseForm from './HouseForm';

class NewHousePage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <HouseForm />
        </div>
      </div>
    );
  }
}

export default NewHousePage;
