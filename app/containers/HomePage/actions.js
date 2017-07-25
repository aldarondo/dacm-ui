import { CHANGE_VALUE, SAVE_FORM } from './constants';

export function changeValue(attribute, value) {
  return {
    type: CHANGE_VALUE,
    attribute,
    value,
  };
}

export function saveForm() {
  return {
    type: SAVE_FORM,
  };
}
