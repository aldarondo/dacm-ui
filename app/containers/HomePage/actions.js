import { CHANGE_VALUE, CONTINUE_FORM, SAVE_FORM } from './constants';

export function changeValue(attribute, value) {
  return {
    type: CHANGE_VALUE,
    attribute,
    value,
  };
}

export function continueForm() {
  return {
    type: CONTINUE_FORM,
  };
}

export function saveForm() {
  return {
    type: SAVE_FORM,
  };
}
