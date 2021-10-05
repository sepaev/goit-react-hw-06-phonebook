// import PropTypes from 'prop-types';
import Form from '../Form';
import Contacts from '../Contacts';
import { TitleH1, SectionStyle } from './Section.styled';
import { Notify } from 'notiflix';
import { connect } from 'react-redux';

Notify.init({ position: 'center-top' });

function Section({ title, component, doAddContact }) {
  return (
    <SectionStyle>
      <TitleH1>{title}</TitleH1>
      {component === 'Form' && <Form />}
      {component === 'Contacts' && <Contacts />}
    </SectionStyle>
  );
}

const mapStateToProps = state => {
  return {
    // contacts: state.contacts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // doAddContact: (name, number) => dispatch(actions.addContact(name, number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Section);

// function Section({ title, component, searchFunc, deleteContact, data,  }) {

//   function parseSearchQuery(searchQuery) {
//     let searchQueryText = '';
//     let searchQueryNumber = '';
//     if (searchQuery) {
//       if (searchQuery.match(/\d+/)) {
//         searchQueryNumber = searchQuery.match(/\d+/).toString();
//         const queries = searchQuery.split(searchQueryNumber);
//         const query = queries[0] || queries[1];
//         searchQueryText = query ? query : '';
//       } else {
//         searchQueryText = searchQuery;
//       }
//     }
//     return { searchQueryText, searchQueryNumber };
//   }

//   function searchContacts() {
//     const { filter, contacts } = data;
//     const { searchQueryText, searchQueryNumber } = parseSearchQuery(filter.toString());
//     if (searchQueryText.length > 0 || searchQueryNumber.length > 0) {
//       let filtredArray = [];
//       //поиск по номеру
//       if (searchQueryNumber.length > 0) {
//         filtredArray = contacts.filter(({ number }) => {
//           const clearNumberText = doClearNumber(number);
//           return clearNumberText.includes(searchQueryNumber);
//         });
//         //комбинированый поиск
//         if (searchQueryText.length > 0) {
//           const namesArray = contacts.filter(({ name }) => name.toLowerCase().includes(searchQueryText));
//           return filtredArray.length > 0 ? filtredArray.concat(namesArray) : namesArray;
//         }
//         return filtredArray;
//       } else {
//         //Поиск по имени
//         filtredArray = contacts.filter(({ name }) => name.toLowerCase().includes(searchQueryText));
//         return filtredArray;
//       }
//     }
//     return contacts;
//   }

//   function checkForDoubleID(contacts) {
//     const idList = [];
//     const filtredList = [];
//     contacts.forEach(contact => {
//       if (idList.indexOf(contact.id) < 0) {
//         idList.push(contact.id);
//         filtredList.push(contact);
//       }
//     });
//     return filtredList;
//   }

//   const contacts = checkForDoubleID(searchContacts());

// }

// Section.propTypes = {
//   title: PropTypes.string.isRequired,
//   component: PropTypes.string.isRequired,
//   data: PropTypes.object.isRequired,
//   doAddContact: PropTypes.func,
//   searchFunc: PropTypes.func,
//   deleteContact: PropTypes.func,
// };
