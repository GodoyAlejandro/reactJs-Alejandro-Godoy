import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  const greetings = 'Hola buenas dias, buenas tardes, buenas noches';
  return (
    <>
    <NavBar/>
    <ItemListContainer greetings={greetings}/>
    </>
  );
}

export default App;
