const ContactList = ({ contacts, selectedContact, onSelect}) => {
  return (
    <div>
      <section>
        <ul>
          {
            contacts.map((contact, index, arr) => {
              return <li key={contact.id}>
                <button onClick={() => {
                  onSelect(contact);
                }}>
                  {contact.name}
                </button>
                </li>
            })
          }
        </ul>
      </section>
    </div>
  );
}

export default ContactList;
