const Learn = () => {
  return (
    <section>
      <ul>
        <Item name="Puneeth" employee="MBRDI" />
        <Item name="Rajesh" employee="Ellucian" />
        <Item name="Sampath" employee="Navjoy" />
      </ul>
    </section>
  );
}

const Item = ({ name, employee }) => {
  console.log(employee);
  return (
    <li> {name} works for {'Employer ->' + employee}</li>
  );
}

export default Learn;
