import { connect } from 'react-redux';
import Section from './components/Section';
import { Notify } from 'notiflix';
import { addContact, deleteContact } from './redux/actions/contacts_actions.js';
import { makeSearch } from './redux/actions/filter_actions.js';
// //state model
// const STATE_MODEL = {
//   contacts: [],
//   filter: '',
//   newContact: {
//     newName: '',
//     newNumber: '',
//   },
// };

Notify.init({ position: 'center-top' });

function App() {
  return (
    <>
      <Section title='Phonebook' component='Form' />
      <hr />
      <Section title='Contacts' component='Contacts' />
    </>
  );
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
    filter: state.filter,
    newName: state.newContact.newName,
    newNumber: state.newContact.newNumber,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    doAddContact: (name, number) => dispatch(addContact(name, number)),
    doDeleteContact: () => dispatch(deleteContact),
    makeSearch: () => dispatch(makeSearch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
