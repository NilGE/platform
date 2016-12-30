import React from 'react';
import TextFieldGroup from '../../common/TextFieldGroup';
import { addHouseSuccess, createHouse } from '../../../actions/houseActions';
import { connect } from 'react-redux';
import Multiselect from 'react-bootstrap-multiselect';
import classnames from 'classnames';


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
      list: [{value:'Within Campus Security patrol perimeter'},
      {value:'School Bus Station on site'},{value:'Free Parking'},
      {value:'Parking with additional fee'},
      {value:'Air-conditioned'},
      {value:'On-site Laundry'},
      {value:'Cable ready w/wireless internet access'},
      {value:'Stove and refrigerator included'},
      {value:'Swimming Pool'},
      {value:'Gym'}]
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

  componentDidMount() {
    window.jQuery('#input-44').fileinput({
      uploadUrl: '/file-upload-batch/2',
      maxFilePreviewSize: 10240
    });
  }

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>


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
              <label>Bedrooms <span className="required">*</span></label>
                <select className="form-control" onChange={this.onChange} value={this.state.bedroom} name="bedroom">
                  <option hidden> </option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                </select>

            </div>
            <div className="form-group col-md-6">
              <label>Bathrooms <span className="required">*</span></label>
                <select className="form-control"  onChange={this.onChange} value={this.state.bathroom} name="bathroom">
                  <option hidden> </option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                </select>
            </div>
          </div>

          <div className="row">
            <div className="form-group col-md-6">
              <div className={classnames('form-group', { 'has-error': errors.size })}>
                <label className="control-label">Size</label>
                <div className="input-group">
                  <input
                    value={this.state.size}
                    onChange={this.onChange}
                    name="size"
                    className="form-control"
                  />
                <span className="input-group-addon">ft</span>
                </div>
                {errors.size && <span className="help-block">{ errors.size }</span>}
              </div>
            </div>
            <div className="form-group col-md-6">
              <div className={classnames('form-group', { 'has-error': errors.prize })}>
                <label className="control-label">Price*</label>
                <div className="input-group">
                  <span className="input-group-addon">$</span>
                  <input
                    value={this.state.price}
                    onChange={this.onChange}
                    name="price"
                    className="form-control"
                  />
                </div>
                {errors.prize && <span className="help-block">{ errors.prize }</span>}
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="control-label">Facilities*</label>
              <Multiselect data={this.state.list} buttonWidth="100%" multiple />
          </div>

          <label className="control-label">Select File</label>
          <input id="input-44" name="input44[]" type="file" ref="fileInput" multiple className="file-loading" />
          <div id="errorBlock" className="help-block"></div>

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
