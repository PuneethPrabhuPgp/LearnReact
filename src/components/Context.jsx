import { createContext, useContext } from "react";

const Context = () => {
  return (
    <Section>
      <Heading >Level 1</Heading>
      <Section>
        <Heading >Level 2</Heading>
        <Heading >Level 3</Heading>
        <Heading >Level 4</Heading>
      </Section>
      <Heading >Level 2</Heading>
      <Heading >Level 3</Heading>
    </Section>
  );
}

const Section = ({ children }) => {
  const level = useContext(LevelContext);
  return <section>
    <LevelContext.Provider value={level + 2}>
      {children}
    </LevelContext.Provider>
  </section>
}

const Heading = ({ children }) => {
  const level = useContext(LevelContext);

  switch (level) {
    case 1:
      return <h1>{children} </h1>;
    case 2:
      return <h2>{children} </h2>;
    case 3:
      return <h3>{children} </h3>;
    case 4:
      return <h4>{children} </h4>;
    case 5:
      return <h5>{children} </h5>;
    case 6:
      return <h6>{children} </h6>;
    default:
      throw Error('Unknown level :' + level);
  }
}

const LevelContext = createContext(1);

export default Context;
