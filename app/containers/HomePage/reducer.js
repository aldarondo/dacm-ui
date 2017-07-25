import { fromJS } from 'immutable';

import { CHANGE_VALUE, CONTINUE_FORM, SAVE_FORM, STAGE_CREATE, STAGE_READ, STAGE_DONE } from './constants';

const initialState = fromJS({
  contact: {
    name_first: '',
    name_middle: '',
    name_last: '',
    email: '',
    ssn: '',
    dob: '',
    phone: '',
    address: '',
    apt: '',
    zip: '',
    city: '',
    state: '',
  },
  stage: STAGE_CREATE,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_VALUE: {
      const newState = state.toJS();
      newState.contact[action.attribute] = action.value;
      return fromJS(newState);
    }
    case CONTINUE_FORM:
      return state.set('stage', STAGE_READ);
    case SAVE_FORM:
      return state.set('stage', STAGE_DONE);
    default:
      return state;
  }
}

export default homeReducer;
