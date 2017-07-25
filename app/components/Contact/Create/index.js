import React from 'react';

class CreateContact extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { contact, onChange, onSave } = this.props;
    return (
      <div className="container">
        <div className="row">
          <input className="col-md-5" value={contact.get('name_first')} placeholder="First Name" onChange={onChange.bind(this, 'name_first')} />
          <input className="col-md-2" value={contact.get('name_middle')} maxLength="1" placeholder="MI" onChange={onChange.bind(this, 'name_middle')} />
          <input className="col-md-5" value={contact.get('name_last')} placeholder="Last Name" onChange={onChange.bind(this, 'name_last')} />
        </div>
        <div className="row">
          <input className="col-md-12" value={contact.get('email')} placeholder="Email Address" onChange={onChange.bind(this, 'email')} />
        </div>
        <div className="row">
          <input className="col-md-12" value={contact.get('ssn')} placeholder="Social Security Number" onChange={onChange.bind(this, 'ssn')} />
        </div>
        <div className="row">
          <input className="col-md-12" value={contact.get('dob')} placeholder="Date of Birth" onChange={onChange.bind(this, 'dob')} />
        </div>
        <div className="row">
          <input className="col-md-12" value={contact.get('phone')} placeholder="Phone Number" onChange={onChange.bind(this, 'phone')} />
        </div>
        <div className="row">
          <input className="col-md-8" value={contact.get('address')} placeholder="Home Street Address" onChange={onChange.bind(this, 'address')} />
          <input className="col-md-4" value={contact.get('apt')} placeholder="Apt Ste (Optional)" onChange={onChange.bind(this, 'apt')} />
          <input className="col-md-3" value={contact.get('zip')} placeholder="Zip Code" onChange={onChange.bind(this, 'zip')} />
          <input className="col-md-6" value={contact.get('city')} placeholder="City" onChange={onChange.bind(this, 'city')} />
          <input className="col-md-3" value={contact.get('state')} maxLength="2" placeholder="State" onChange={onChange.bind(this, 'state')} />
        </div>
        <div className="row text-center">
          <button onClick={onSave}>
            Continue
          </button>
        </div>
      </div>
    );
  }
}

CreateContact.propTypes = {
  contact: React.PropTypes.object,
  onChange: React.PropTypes.func,
  onSave: React.PropTypes.func,
};

export default CreateContact;

