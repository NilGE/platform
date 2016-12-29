import React from 'react';
import TextFieldGroup from '../../common/TextFieldGroup';
import { addHouseSuccess, createHouse } from '../../../actions/houseActions';
import { connect } from 'react-redux';
import Multiselect from 'react-bootstrap-multiselect';

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
      isLoading: false,
      list: [{value:'One42341234123412343243123',selected:true},{value:'Two4124123412141241234'},{value:'Three412412341234312'},{value:'Four',label:'Four Label'}]
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

    createHouse(this.state).then(res => {
      this.props.addHouseSuccess(res.data);
      this.context.router.push('/house-detail');
    });
  }

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>House Information</h1>
          <div className="form-group">
            <label className="control-label">Facilities*</label>
              <Multiselect data={this.state.list} buttonWidth="360px" multiple />
          </div>
          <TextFieldGroup
            error={errors.address1}
            label="Address1*"
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
              <label>Bedrooms*</label>
                <select className="form-control" onChange={this.onChange} value={this.state.bedroom} name="bedroom">
                  <option hidden> </option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                </select>

            </div>
            <div className="form-group col-md-6">
              <label>Bathrooms*</label>
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

          <div className="form-group">
            <label className="control-label">Facilities*</label>
              <select id="example-getting-started" className="form-control" onChange={this.onChange}  name="bathroom" multiple="multiple">
                <option value={101}>Within Campus Security patrol perimeter </option>
                <option value={102}>Gated building w/telephone entry</option>
                <option value={103}>Free Parking</option>
                <option value={104}>Parking with additional fee</option>
                <option value={105}>School Bus Station on site</option>
                <option value={106}>24-hour security cameras</option>
                <option value={107}>Swimming pool</option>
                <option value={108}>Gym</option>
                <option value={109}>Study Room</option>
                <option value={110}>Air-conditioned</option>
                <option value={111}>On-site Laundry</option>
                <option value={112}>2-3 blocks from Campus</option>
                <option value={113}>Lots of closet space and built-in cabinets</option>
                <option value={114}>Cable ready w/wireless internet access</option>
                <option value={115}>Stove and refrigerator included</option>
              </select>
          </div>




          <TextFieldGroup
            error={errors.price}
            label="Price*"
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

const mapDispatchToProps = (dispatch) => {
  return {
    addHouseSuccess: state => dispatch(addHouseSuccess(state))
  };
};

HouseForm.propTypes = {
  addHouseSuccess: React.PropTypes.func.isRequired
};

HouseForm.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(null, mapDispatchToProps)(HouseForm);
