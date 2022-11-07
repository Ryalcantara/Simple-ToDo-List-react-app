import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import ParentComponent from "./components/ToDo/ParentComponent";
import {FcTodoList} from "react-icons/fc"

function App() {
  return (
    <div className="App card color text-dark">
        <div className="card-header">
          <div className="d-flex justify-content-center">
        
          <FcTodoList fontSize="3em"/>
          <h1>ToDo List</h1>
          </div>
        </div>
          <div className="wrapper">

            <ParentComponent />
        </div>
    </div>
  );
}

export default App;
