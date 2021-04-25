// import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Blogs from './components/blogs'
import Contact from '../src/components/contact'
import Home from '../src/components/home'
import WhatWeDo from './components/whatwedo.js'
import WriteBlog from '../src/components/writeBlog'

//pages
import Navbarmain from './pages/navbarmain'
import Aboutus from './components/aboutus';

function App() {
  return (
    <BrowserRouter>
      <Navbarmain />
      <div>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/about"><Aboutus/></Route>
          <Route exact path="/whatwedo"><WhatWeDo /></Route>
          <Route exact path="/contact"><Contact /></Route>
          <Route exact path="/blogs"><Blogs /></Route>
          <Route exact path="/writeblog"><WriteBlog /></Route>
          <Route exact path="/github" render={() => (window.location = "https://github.com")} />

        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
