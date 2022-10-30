import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import ContactForm from './phonebook/contactForm/ContactForm';

class App extends Component {
  render() {
    return (
      <>
        <ContactForm />
      </>
    );
  }
}

export default App;
