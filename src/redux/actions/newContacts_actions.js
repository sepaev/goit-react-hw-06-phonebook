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

export const clearNewContactState = () => {
  return {
    type: types.REMOVE_NEW_CONTACT,
    payload: { newName: '', newNumber: '' },
  };
};

export const checkNewContactInState = ({ newName, newNumber }, contacts) => {
  if (!newName || !newNumber || !contacts) return { result: false, message: '' };
  if (checkNumberExists(newNumber, contacts))
    return { result: false, message: `Can't do this operation. Number ${newNumber} already exists.` };
  if (checkNameExists(newName, contacts))
    return { result: false, message: `Can't do this operation. Name ${newName} already exists.` };
  return { result: true, message: 'Well Done! Added ' + newName };
};

function checkNameExists(inputName, contacts) {
  let result = false;
  const clearName = doClearName(inputName);
  if (clearName === '') result = true;
  contacts.forEach(({ name }) => {
    if (clearName === doClearName(name)) result = true;
  });
  return result;
}

function checkNumberExists(inputNumber, contacts) {
  const clearNumber = doClearNumber(inputNumber);
  let result = false;
  if (inputNumber === '') result = true;
  contacts.forEach(({ number }) => {
    if (clearNumber === doClearNumber(number)) result = true;
  });
  return result;
}

function doClearNumber(number) {
  if (!number) return number;
  const noSpace = number.split(' ').join('');
  const noBracket = noSpace.split('(').join('').split(')').join('');
  const noSign = noBracket.split('-').join('').split('+').join('');
  return noSign;
}

function doClearName(name) {
  if (!name) return name;
  return name.split(' ').join('').toLowerCase().trim();
}
