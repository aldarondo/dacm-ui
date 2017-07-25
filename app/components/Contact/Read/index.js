import React from 'react';

class ReadContact extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { contact, onSave } = this.props;
    return (
      <div className="container">
        <h1>Preview</h1>
        <div>
          <strong>First Name:</strong> {contact.get('name_first')}
        </div>
        <div>
          <strong>MI:</strong> {contact.get('name_middle')}
        </div>
        <div>
          <strong>Last Name:</strong> {contact.get('name_last')}
        </div>
        <div>
          <strong>Email Address:</strong> {contact.get('email')}
        </div>
        <div>
          <strong>Social Security Number:</strong> {contact.get('ssn')}
        </div>
        <div>
          <strong>Date of Birth:</strong> {contact.get('dob')}
        </div>
        <div>
          <strong>Phone Number:</strong> {contact.get('phone')}
        </div>
        <div>
          <strong>Home Street Address:</strong> {contact.get('address')}
        </div>
        <div>
          <strong>Apt Ste:</strong> {contact.get('apt')}
        </div>
        <div>
          <strong>Zip Code:</strong> {contact.get('zip')}
        </div>
        <div>
          <strong>City:</strong> {contact.get('city')}
        </div>
        <div className="row text-center">
          <button onClick={onSave}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

ReadContact.propTypes = {
  contact: React.PropTypes.object,
  onSave: React.PropTypes.func,
};

export default ReadContact;

