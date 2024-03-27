import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/Contacts/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

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
