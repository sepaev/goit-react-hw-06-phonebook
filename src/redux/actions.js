export const deleteContact = value => ({
  type: 'crud/delete',
  payload: value,
});

export const addContact = value => ({
  type: 'crud/create',
  payload: value,
});
