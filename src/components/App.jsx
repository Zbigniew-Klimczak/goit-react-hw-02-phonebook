import { Component } from 'react';
import Filter from './Filter';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
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
  handleFilterChange = evt => {
    this.setState({ filter: evt.currentTarget.value.trim() });
  };

  handleFilter = () => {
    const { contacts, filter } = this.state;
    const keyword = filter.toLowerCase();
    const filteredContacts = contacts.filter(
      contact => contact.name.toLowerCase().indexOf(keyword) > -1
    );
    return filteredContacts;
  };
  handleContactsChange = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };
  deleteContact = contactToDelete => {
    const { contacts } = this.state;
    let newContacts = contacts.filter(contact => contact !== contactToDelete);
    this.setState({ contacts: newContacts });
  };
  render() {
    const { filter, contacts } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          contacts={contacts}
          handleContactsChange={this.handleContactsChange}
        ></ContactForm>
        <h2>Contacts</h2>
        <Filter
          filterValue={filter}
          onChange={this.handleFilterChange}
        ></Filter>
        <ContactList
          deleteContact={this.deleteContact}
          handleFilter={this.handleFilter}
        ></ContactList>
      </>
    );
  }
}
