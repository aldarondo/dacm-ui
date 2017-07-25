import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { changeValue, continueForm, saveForm } from './actions';
import { makeSelectContact, makeSelectStage } from './selectors';
import CreateContact from '../../components/Contact/Create';
import ReadContact from '../../components/Contact/Read';

import { STAGE_CREATE, STAGE_READ, STAGE_DONE } from './constants';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { contact, onChange, onContinue, onSave, stage } = this.props;

    switch (stage) {
      case STAGE_CREATE:
        return <CreateContact contact={contact} onChange={onChange} onSave={onContinue} />;
      case STAGE_READ:
        return <ReadContact contact={contact} onChange={onChange} onSave={onSave} />;
      case STAGE_DONE:
      default:
        return (
          <div className="container"><h1>Thank you for submitting!</h1></div>
        );
    }
  }
}

HomePage.propTypes = {
  contact: React.PropTypes.object,
  stage: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onContinue: React.PropTypes.func,
  onSave: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChange: (attribute, evt) => dispatch(changeValue(attribute, evt.target.value)),
    onContinue: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(continueForm());
    },
    onSave: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(saveForm());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  contact: makeSelectContact(),
  stage: makeSelectStage(),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
