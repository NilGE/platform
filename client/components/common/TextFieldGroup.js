import React from 'react';
import classnames from 'classnames';

const TextFieldGroup = ({ field, value, label, error, type, onChange, required }) => {
  return (
    <div className={classnames('form-group', { 'has-error': error })}>
      <label className="control-label">{label} <span className="required">{required}</span></label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        name={field}
        className="form-control"
      />

      {error && <span className="help-block">{ error }</span>}
    </div>
  );
};

TextFieldGroup.propTypes = {
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string,
  label: React.PropTypes.string,
  error: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  required: React.PropTypes.string
};

TextFieldGroup.defaultProps = {
  type: 'text'
};

export default TextFieldGroup;
