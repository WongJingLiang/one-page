import './App.css';
import { useEffect } from 'react';
import Navbar from './component/Navbar';
import Swiperbar from './component/Swiperbar';
import Bodycontent from './component/Bodycontent';
import Footer from './component/Footer';
import {BrowserRouter as Router, Route, Switch, useLocation} from 'react-router-dom';
import About from './component/About';
import History from './component/History';
import Notfound from './component/Notfound';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">             
          <Navbar/>
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Swiperbar/>
                <Bodycontent/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/history">
                <History/>
              </Route>
              <Route path="*">
                <Notfound/>
              </Route>
            </Switch>            
          </div>
          <Footer/>         
      </div>
    </Router>
  );
}

export default App;
