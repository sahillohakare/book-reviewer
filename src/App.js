import Header from "./components/Header";
import Cards from "./components/Cards";
import AddBook from "./components/AddBook";
import { Routes,Route } from "react-router-dom";
function App() {
  return (
    <div className="App relative">
      <Header/>
      <Routes>
        <Route path="/" element={<Cards/>}/>
        <Route path="/addmovie" element={<AddBook/>}/>
      </Routes>
    </div>
  );
}

export default App;
