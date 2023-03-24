import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
export class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
  }
  handleChange = evt => {
    const { name } = evt.currentTarget;
    this.setState({ [name]: evt.currentTarget.value.trim() });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    const form = evt.currentTarget;
    const id = nanoid();
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { name: name, number: number, id: id }],
    }));
    form.reset();
  };
  handleFilter = () => {
    const { contacts, filter } = this.state;
    const keyword = filter.toLowerCase();
    const filteredContacts = contacts.filter(
      contact => contact.name.toLowerCase().indexOf(keyword) > -1
    );
    return filteredContacts;
  };
  render() {
    const { filter } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm></ContactForm>
        <h2>Contacts</h2>
        <label>
          Find contacts by name
          <input
            type="text"
            name="filter"
            placeholder="Enter name"
            value={filter}
            onChange={this.handleChange}
          />
        </label>
        <ul>
          {this.handleFilter().map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
