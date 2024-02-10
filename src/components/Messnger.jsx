import { useState } from "react";
import ContactList from "./ContactList";
import Chat from "./Chat";

const Messenger = () => {
  const [to, setTo] = useState(contacts[0]);

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={(contact) => {
          return setTo(contact);
        } }
      />
      <Chat key={ to.id } contact={to}></Chat>
    </div>
  );

}

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
];

export default Messenger;
