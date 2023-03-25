import PropTypes from 'prop-types';
const Contact = ({ id, name, number, contact, deleteContact }) => (
  <>
    <li key={id}>
      {name}: {number}
      <button
        type="button"
        onClick={() => {
          deleteContact(contact);
        }}
      >
        Delete
      </button>
    </li>
  </>
);
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
export default Contact;
