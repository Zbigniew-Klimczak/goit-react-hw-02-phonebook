const Contact = ({ id, name, number }) => (
  <li key={id}>
    {name}: {number}
  </li>
);
export default Contact;
