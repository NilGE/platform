import React from 'react';
import TextFieldGroup from '../../common/TextFieldGroup';
import { createHouse } from '../../../actions/houseActions';
import { connect } from 'react-redux';
import classnames from 'classnames';
import Select from 'react-select';

class HouseForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      address1: '',
      address2: '',
      bedroom: '',
      bathroom: '',
      size: '',
      facilities: [],
      photos: [],
      price: '',
      errors: {},
      comments: '',
      isLoading: false,
      list: [{label:'Within Campus Security patrol perimeter', value:'Within Campus Security patrol perimeter'},
      {label:'School Bus Station on site',value:'School Bus Station on site'},
      {label:'Free Parking',value:'Free Parking'},
      {label:'Parking with additional fee', value:'Parking with additional fee'},
      {label:'Air-conditioned', value:'Air-conditioned'},
      {label:'On-site Laundry', value:'On-site Laundry'},
      {label:'Cable ready w/wireless internet access', value:'Cable ready w/wireless internet access'},
      {label:'Stove and refrigerator included', value:'Stove and refrigerator included'},
      {label:'Swimming Pool', value:'Swimming Pool'},
      {label:'Gym', value:'Gym'}]
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.fileLoadedHandler = this.fileLoadedHandler.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


  handleSelectChange (value) {
    this.setState({ facilities: value });
  }


  onSubmit(e) {
    e.preventDefault();
    // Call method from parent component
    // to handle submission
    this.props.createHouse(this.state).then(() => {
      this.context.router.push('/house-detail');
    });
  }


  fileLoadedHandler(e, data) {
    // console.log('fileuploaded:');
    // console.log(data);
    this.setState({photos:this.state.photos.concat([data.response.path])});
  }

  componentDidMount() {
    window.jQuery('#input-44').fileinput({
      uploadUrl: '/api/file/img/upload',
      maxFilePreviewSize: 10240
    });
    window.jQuery('#input-44').on('fileuploaded', this.fileLoadedHandler);
  }




  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>

          <TextFieldGroup
            error={errors.address1}
            label="Address1"
            onChange={this.onChange}
            value={this.state.address1}
            field="address1"
            required="*"
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
            <div className="col-md-6">
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
            <div className="col-md-6">
              <div className={classnames('form-group', { 'has-error': errors.prize })}>
                <label className="control-label">Price <span className="required">*</span></label>
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

          <div className="section form-group">
            <label className="control-label">Facilities</label>
            <Select multi simpleValue value={this.state.facilities}
             placeholder="Select your favourite(s)"
             options={this.state.list} onChange={this.handleSelectChange}
             disabled={false}
             />
          </div>

          <label className="control-label">Select File</label>
          <input id="input-44" type="file" ref="fileInput" multiple
          className="file-loading" name="photos[]"/>
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
    createHouse: state => dispatch(createHouse(state))
  };
};

HouseForm.propTypes = {
  createHouse: React.PropTypes.func.isRequired
};

HouseForm.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(null, mapDispatchToProps)(HouseForm);
