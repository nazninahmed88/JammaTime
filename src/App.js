
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';

import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/header/Header';
import Home from './Components/Home/Home';
import ProjectDetails from './Components/ProjectDetails/ProjectDetails';
import 'animate.css';


function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Header></Header>
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path='/home'>
        <Home></Home>
      </Route>
      <Route path='/contact'>
        <Contact></Contact>
      </Route>
      
      <Route path='/projectdetails'>
      <ProjectDetails></ProjectDetails>
      </Route>

    </Switch>
    <Footer></Footer>
    </BrowserRouter>



    </div>
  );
}

export default App;
