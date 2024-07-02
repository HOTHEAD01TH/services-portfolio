import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Services" component={Services} />
        <Route path="/Contact" component={Contact} />
        <Route path="/AboutUs" component={AboutUs} />
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
