import Contact from './Contact';
import PropTypes from 'prop-types';
const ContactList = ({ handleFilter, deleteContact }) => (
  <ul>
    {handleFilter().map(contact => (
      <Contact
        key={contact.id}
        id={contact.id}
        name={contact.name}
        number={contact.number}
        contact={contact}
        deleteContact={deleteContact}
      ></Contact>
    ))}
  </ul>
);
ContactList.propTypes = {
  handleFilter: PropTypes.func,
  deleteContact: PropTypes.func,
};
export default ContactList;
