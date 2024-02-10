import { useState } from "react";

const Chat = ({contact }) => {
  const [text, setText] = useState('');

  return (
    <section>
      <textarea value={text}
        placeholder={ "Chat to " + contact.name }
      onChange={ (e) => setText(e.target.value)}
      />
      <br />
      <button>
        Send to {contact.email}
      </button>
    </section>
  );
}

export default Chat;
