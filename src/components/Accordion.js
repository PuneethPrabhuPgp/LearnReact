import { useState } from "react";



const Accordion = () => {
  const [showIndex, setShowIndex] = useState(0);

  return (
    <div>
      <h2>Almaty, Kazakhstan</h2>
      <br />
      <Panel title="Panel 1" isShow={showIndex === 0}
        handleClick={() => {
          return setShowIndex(0);
        }}>
        Panel 1 details
      </Panel>
      <br />
      <Panel title="Panel 2"
        isShow={showIndex === 1}
        handleClick={() => {
          return setShowIndex(1);
        }}
      >
        Panel 2 details
      </Panel>
    </div>
  );
}

const Panel = ({ title, children, isShow, handleClick }) => {

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={handleClick}>
        Show
      </button>
      <br />
      {
        isShow && <p>
          {children}
        </p>
      }
    </div>
  );
}

export default Accordion;
