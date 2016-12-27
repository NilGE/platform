import React from 'react';
import HouseForm from './house/HouseForm';

class NewProductPage extends React.Component {

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

export default NewProductPage;
