import Form from "./Components/Form/InputForm";
import Details from "./Components/Details/Details"
import {BrowserRouter,Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Route path='/' exact component={Form} />
        <Route path='/details/:id' component={Details} />
        <Route path='/random/:id' component={Details} />
    </BrowserRouter>
  );
}
export default App;
