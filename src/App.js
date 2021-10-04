import { connect } from 'react-redux';
import Section from './components/Section';
import { Notify } from 'notiflix';
import * as actions from './redux/actions';
import store from './redux/store';
import { addContact } from './redux/actions';

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

function App({ contacts, filter = '', newName, newNumber, doAddContact, doDeleteContact, makeSearch }) {
  // store.dispatch(addContact('ivan', 55535536));
  return (
    <>
      <Section title='Phonebook' component='Form' data={{ contacts, filter }} doAddContact={doAddContact} />
      <hr />
      <Section
        title='Contacts'
        component='Contacts'
        data={{ contacts, filter }}
        searchFunc={makeSearch}
        deleteFunc={doDeleteContact}
      />
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
    doAddContact: (name, number) => dispatch(actions.addContact(name, number)),
    doDeleteContact: () => dispatch(actions.deleteContact),
    makeSearch: () => dispatch(actions.makeSearch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

// function AppOld() {
//   const [contacts, setContacts] = useState([]);
//   const [filter, setFilter] = useState('');

//   const makeSearch = e => {
//     const searchQuery = e.target.valuetrim().toLowerCase();
//     setFilter(searchQuery);
//   };

//   const doDeleteContact = id => {
//     if (!id) return;
//     const newArr = [];
//     let reportName;
//     contacts.forEach(contact => {
//       if (contact.id !== id) {
//         newArr.push(contact);
//       } else {
//         reportName = contact.name;
//       }
//     });
//     if (newArr.length === contacts.length) {
//       Notify.failure('Oh, no! Nothing was deleted.');
//       return;
//     }
//     setContacts(newArr);
//     Notify.info(`Contact ${reportName} was removed successfully`);
//   };

//   const doAddContact = (name, number) => {
//     // setContacts(prevState => [...prevState, { id: uuidv4(), name, number }]);
//     Notify.success('Well Done! Added ' + name);
//   };

//   useEffect(() => {
//     const storage = JSON.parse(window.localStorage.getItem('contacts'));
//     if (storage) setContacts(storage);
//   }, []);

//   useEffect(() => {
//     window.localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);
// }
