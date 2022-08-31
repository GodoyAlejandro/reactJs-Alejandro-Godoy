import ItemCountContainer from "./components/ItemCountContainer";
import ItemListContainer from "./components/itemList/ItemListContainer";
import NavBar from "./components/NavBar";
// import FetchArrayContainer from "./testComponents/FetchArrayContainer";
// import FetchContainer from "./testComponents/FetchContainer";
// import Promesas from "./testComponents/Promesas";

function App() {
  // const greetings = 'Hola buenas dias, buenas tardes, buenas noches';
  
  return (
    <>
    <NavBar/>
    <ItemCountContainer/>
    <ItemListContainer/>
    {/* <FetchContainer/> */}
    {/* <FetchArrayContainer/> */}
    {/* <Promesas/> */}
    </>
  );
}

export default App;
