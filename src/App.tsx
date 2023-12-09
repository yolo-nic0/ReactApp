import ListGroups from "./components/ListGroups";

function App() {
  let items = ['Abebe', 'hebra', 'kida', 'yeab'];

  return (
    <>
      <ListGroups items={items} header="names"/>
    </>
  );
}

export default App;
