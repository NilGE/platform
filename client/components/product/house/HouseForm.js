import React from 'react';
import TextFieldGroup from '../../common/TextFieldGroup';

class HouseForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      address1: '',
      address2: '',
      bathroom: '',
      bedroom: '',
      size: '',
      facilities: '',
      price: '',
      errors: {},
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Create New Product</h1>

          <TextFieldGroup
            error={errors.address1}
            label="Address1"
            onChange={this.onChange}
            value={this.state.address1}
            field="address1"
          />

          <TextFieldGroup
            error={errors.address2}
            label="Address2"
            onChange={this.onChange}
            value={this.state.address2}
            field="address2"
          />

          <TextFieldGroup
            error={errors.bathroom}
            label="Bathroom"
            onChange={this.onChange}
            value={this.state.bathroom}
            field="bathroom"
          />

          <TextFieldGroup
            error={errors.bedroom}
            label="Bedroom"
            onChange={this.onChange}
            value={this.state.bedroom}
            field="bedroom"
          />

          <TextFieldGroup
            error={errors.size}
            label="Size"
            onChange={this.onChange}
            value={this.state.size}
            field="size"
          />

          <TextFieldGroup
            error={errors.facilities}
            label="Facilities"
            onChange={this.onChange}
            value={this.state.facilities}
            field="facilities"
          />

          <TextFieldGroup
            error={errors.price}
            label="Price"
            onChange={this.onChange}
            value={this.state.price}
            field="price"
          />

        <button type="submit" className="btn btn-primary btn-lg">Create</button>
      </form>
    );
  }
}

export default HouseForm;
