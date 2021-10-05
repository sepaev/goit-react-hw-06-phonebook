import { Fragment } from 'react';
import Notification from '../Notification';
import PropTypes from 'prop-types';
import { ContactsItem, ContactsList, DeleteButton, NumberSpan, SearchInput } from './Contacts.styled';
import { connect } from 'react-redux';
import { makeSearch } from '../../redux/actions/filter_actions';
import { deleteContact, addContact } from '../../redux/actions/contacts_actions';
import { checkNewContactInState, clearNewContactState } from '../../redux/actions/newContacts_actions';
import { Notify } from 'notiflix';

function Contacts({ contacts, searchFunc, deleteContact, message, newContact, addContact, clearNewContact }) {
  if (newContact.name !== '') {
    console.log(newContact);
    const check = checkNewContactInState(newContact, contacts);
    if (check.result) {
      addContact(newContact);
      clearNewContact();
      Notify.success(check.message);
    } else {
      if (check.message) Notify.failure(check.message);
    }
  }
  return (
    <Fragment>
      <ContactsList>
        <SearchInput
          type='text'
          name='search'
          title='Введите имя или телефон'
          placeholder='Search contact'
          onInput={searchFunc}
        />
        {contacts.map(({ id, name, number }) => (
          <ContactsItem key={id}>
            {'• ' + name + ': '}
            <NumberSpan>
              {number}
              <DeleteButton id={id} onClick={() => deleteContact(id, contacts)}>
                X
              </DeleteButton>
            </NumberSpan>
          </ContactsItem>
        ))}
      </ContactsList>
      {!contacts.length && <Notification message={message}></Notification>}
    </Fragment>
  );
}

const mapStateToProps = state => ({
  contacts: state.contacts,
  message: state.contacts.length ? 'Sorrry, no contacts found.' : 'Sorrry, you have no contacts yet.',
  newContact: state.newContact,
});
const mapDispatchToProps = dispatch => ({
  searchFunc: e => dispatch(makeSearch(e)),
  deleteContact: (id, contacts) => dispatch(deleteContact(id, contacts)),
  addContact: newContact => dispatch(addContact(newContact)),
  clearNewContact: () => dispatch(clearNewContactState()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  searchFunc: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};
