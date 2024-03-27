import Contact from "../../Contacts/Contact/Contact";
import { useSelector } from "react-redux";
import css from "../ContactList/ContactList.module.css";
import { selectNameFilter } from "../../../redux/filtersSlice";
import { contactList } from "../../../redux/contactsSlice";

export default function ContactList() {
  const filter = useSelector(selectNameFilter)
  const allContacts = useSelector(contactList)
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




// export const ContactList = ({ contacts, onDeleteContact}) => {
//   const shownContacts = useSelector(contactList);
//   const contacts = 

//   return (
//     <div className={css.card}>
//       {contacts.map((contact) => (
//         <Contact key={contact.id} {...contact} onDelete={() => onDeleteContact(contact.id)}/>
//       ))}
//     </div>
//   );
// };
