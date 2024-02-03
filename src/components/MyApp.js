import { Mybutton, ClickHandler } from "./MyButton"
import { user } from "./user";

let content;
let value = 'hi1';

const users = [
  {
    id: 1,
    name: 'Puneeth',
    type: 'employee'
  },
  {
    id: 2,
    name: 'Sampath',
    type: 'student'
  },
  {
    id: 3,
    name: 'Rajesh',
    type: 'Manager'
  }
];

const userListItems = users.map(user => {
  return (
    <li key={user.id}>
      {user.name}
    </li>
  );
});

content = value === 'hi' ? <span>Hi</span> : <span>Hello</span>;



export const MyApp = () => {
  function handleClick() {
    alert('You clicked me yes!');
  }

  return (
    <>
      <div>
        <h1>Welcome to my app</h1>
        <Mybutton onClick={handleClick} />
      </div>
      <h1>About</h1>
      <p>Hello there. <br /> How do you do?</p>
      <img className="avatar" src={user.imageUrl} alt={'Picture of' + user.name} width={user.imageSize} height={user.imageSize}>
      </img>
      <br />
      {content}
      <ol>
        {
          users.map(item => {
            return <li key={item.id} style={{ color: item.type === 'employee' ? 'blue' : 'Green' }}>
              {item.name}
            </li>
          })
        }
      </ol>
      <ul>
        {userListItems}
      </ul>
    </>
  );
}
