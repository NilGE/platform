import React from 'react';
import TextFieldGroup from '../../common/TextFieldGroup';

class HouseForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      address1: '',
      address2: '',
      bedroom: '',
      bathroom: '',
      size: '',
      facilities: '',
      price: '',
      errors: {},
      comments: '',
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
    // Call method from parent component
    // to handle submission

    this.props.submitNew(this.state);
    // Reset form
    e.target.reset();

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

          <div className="row">
            <div className="form-group col-md-6">
              <label>Bedrooms</label>
                <select className="form-control" onChange={this.onChange} value={this.state.bedroom} name="bedroom">
                  <option hidden> </option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                </select>

            </div>
            <div className="form-group col-md-6">
              <label>Bathrooms</label>
                <select className="form-control"  onChange={this.onChange} value={this.state.bathroom} name="bathroom">
                  <option hidden> </option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                </select>
            </div>
          </div>


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

          <div className="form-group">
            <label>Comment</label>
            <textarea className="form-control" rows="5" onChange={this.onChange} value={this.state.comments} name="comments"></textarea>
          </div>

        <button type="submit" className="btn btn-primary btn-lg">Create</button>
      </form>
    );
  }
}
HouseForm.propTypes = {
  submitNew: React.PropTypes.func.isRequired
};

export default HouseForm;
