export const Mybutton = () => {
  return (
    <button onClick={ClickHandler}> I'm a button</button>
  );
}

export const ClickHandler = () => {
  alert('You clicked me');
}
