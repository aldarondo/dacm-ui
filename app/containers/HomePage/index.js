import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { changeValue, saveForm } from './actions';
import { makeSelectContact, makeSelectStage } from './selectors';
import CreateContact from '../../components/Contact/Create';
import ReadContact from '../../components/Contact/Read';

import { STAGE_CREATE, STAGE_READ } from './constants';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { contact, onChange, onSave, stage } = this.props;

    switch (stage) {
      case STAGE_CREATE:
        return <CreateContact contact={contact} onChange={onChange} onSave={onSave} />;
      case STAGE_READ:
        return <ReadContact contact={contact} onChange={onChange} onSave={onSave} />;
      default:
        return null;
    }
  }
}

HomePage.propTypes = {
  contact: React.PropTypes.object,
  stage: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onSave: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChange: (attribute, evt) => dispatch(changeValue(attribute, evt.target.value)),
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
