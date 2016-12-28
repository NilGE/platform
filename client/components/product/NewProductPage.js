import React from 'react';
import HouseForm from './house/HouseForm';
import { connect } from 'react-redux';
import * as productActions from '../../actions/productActions';

class NewProductPage extends React.Component {
  constructor(props){
    super(props);
  }

  submitNew(input){
    this.props.createNew(input);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <HouseForm submitNew={this.submitNew.bind(this)} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // You can now say this.props.books
    products: state.products
  };
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook
    createNew: product => dispatch(productActions.createNew(product))
  };
};

NewProductPage.propTypes = {
  createNew: React.PropTypes.func.isRequired,
  products: React.PropTypes.array
};


export default connect(mapStateToProps, mapDispatchToProps)(NewProductPage);
