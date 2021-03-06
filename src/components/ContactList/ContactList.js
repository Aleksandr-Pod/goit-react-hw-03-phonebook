import { ContactItem } from "../ContactItem/ContactItem";
import PropTypes from 'prop-types';

export function ContactList({ contacts, onDelete }) {

    return (
        <>
            {contacts.map((contact, idx) => (
                <ContactItem key={contact.id} contact={contact} idx={idx} onDelete={onDelete}/>
            ))}
        </>
    )
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func
}
