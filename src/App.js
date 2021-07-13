
import './App.css';
import Header from './components/Header components/Header';
import SimpleBottomNavigation from './components/MainNav';
import{ BrowserRouter, Route, Switch  } from "react-router-dom"
import { Container } from '@material-ui/core';
import Trending from './Pages/Trending/Tending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';


function App() {
  return (
    // BrowserRouter is the router implementation for HTML5 browsers
    // Switch returns only the first matching route rather than all matching routes.
    // Route is the conditionally shown component based on matching a path to a URL.
    //The container centers your content horizontally. It's the most basic layout element.(Material UI)
    <BrowserRouter>
    <Header />
    <div className="app">
      <Container>
      <Switch>
            <Route path="/" component={Trending} exact/>
            <Route path="/movies" component={Movies}/>
            <Route path="/series" component={Series}/>
            <Route path="/search" component={Search}/>
      </Switch>
      </Container>
    </div>
    
    <SimpleBottomNavigation />
    </BrowserRouter>
  );
};

export default App;
