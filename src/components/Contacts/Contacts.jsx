import { Fragment } from 'react';
import Notification from '../Notification';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeSearch } from '../../redux/actions/filter_actions';
import { deleteContact, addContact } from '../../redux/actions/contacts_actions';
import { clearNewContactState } from '../../redux/actions/newContacts_actions';
import checkNewContactInState from '../../redux/functions/checkNewContactInState';
import useFilter from '../../redux/functions/useFilter';
import { ContactsItem, ContactsList, DeleteButton, NumberSpan, SearchInput } from './Contacts.styled';

function Contacts({ contacts, searchFunc, deleteContact, message, newContact, addContact, clearNewContact, filter }) {
  const filterdContacts = useFilter(contacts, filter);
  if (newContact.name !== '' && checkNewContactInState(newContact, contacts)) {
    addContact(newContact);
    clearNewContact();
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
        {filterdContacts.length > 0 &&
          filterdContacts.map(({ id, name, number }) => (
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
      {!filterdContacts.length && <Notification message={message}></Notification>}
    </Fragment>
  );
}

const mapStateToProps = state => ({
  contacts: state.contacts,
  message: state.contacts.length ? 'Sorrry, no contacts found.' : 'Sorrry, you have no contacts yet.',
  newContact: state.newContact,
  filter: state.filter,
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
