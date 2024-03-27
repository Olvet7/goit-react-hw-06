import ContactForm from "./conmponents/ContactForm/ContactForm";
import ContactList from "./conmponents/Contacts/ContactList/ContactList";
import SearchBox from "./conmponents/SearchBox/SearchBox";

import "./App.css";

export default function App() {
  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm />
      <ContactList />
      <SearchBox />
    </div>
  )
}
