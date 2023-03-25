import Contact from './Contact';
const ContactList = ({ handleFilter }) => (
  <ul>
    {handleFilter().map(contact => (
      <Contact
        key={contact.id}
        id={contact.id}
        name={contact.name}
        number={contact.number}
      ></Contact>
    ))}
  </ul>
);
export default ContactList;
