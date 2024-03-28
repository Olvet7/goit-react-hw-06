import Contact from "../../Contacts/Contact/Contact";
import { useSelector } from "react-redux";
import css from "../ContactList/ContactList.module.css";
import { selectNameFilter } from "../../../redux/filtersSlice";
import { selectContacts } from "../../../redux/contactsSlice";


export default function ContactList() {
  const filter = useSelector(selectNameFilter);
  const allContacts = useSelector(selectContacts);
  const contacts = allContacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase())
  })

  return (
    <ul className={css.card}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact contact={contact}/>
          </li>
        )
      })}
    </ul>
  )
}

