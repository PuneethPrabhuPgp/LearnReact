import { useRef } from "react";

const DomRef = () => {
  const firstCatRef = useRef(null);
  const secondCatRef = useRef(null);
  const thirdCatRef = useRef(null);

  const handleScrool = (ref) => {
    ref.current.scroolIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  return (
    <>
      <nav>
        <button
          onClick={() => {
            handleScrool(firstCatRef);
          }}
        >Tom</button>
        <button
        onClick={() => {
            handleScrool(secondCatRef);
          }}
        >Maru</button>
        <button
          onClick={() => {
            handleScrool(thirdCatRef);
          }}
        >Jellylorum</button>
      </nav>
      <div>
        <ul>
          <li>
            <img
              src="https://placekitten.com/g/200/200"
              alt="Tom"
              ref={firstCatRef}
            />
          </li>
          <li>
           <img
              src="https://placekitten.com/g/300/200"
              alt="Maru"
              ref={secondCatRef}
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/250/200"
              alt="Jellylorum"
              ref={thirdCatRef}
            />
          </li>
        </ul>
      </div>
    </>
  );
}

export default DomRef;
