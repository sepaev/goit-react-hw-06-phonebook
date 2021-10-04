import types from '../types';

export const addNewContactToState = e => {
  e.preventDefault();
  const nameRef = e.target.children[0].children[1];
  const numberRef = e.target.children[1].children[1];
  const inputName = nameRef.value.trim();
  const inputNumber = numberRef.value;

  return {
    type: types.ADD_NEW_CONTACT,
    payload: { newName: inputName, newNumber: inputNumber },
  };
};

export const checkNewContactInState = e => {
  e.preventDefault();
  const nameRef = e.target.children[0].children[1];
  const numberRef = e.target.children[1].children[1];
  const inputName = nameRef.value.trim();
  const inputNumber = numberRef.value;

  return {
    type: types.CHECK_NEW_CONTACT,
    payload: { newName: inputName, newNumber: inputNumber },
  };
};
