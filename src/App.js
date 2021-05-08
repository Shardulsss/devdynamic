// import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Blogs from './components/blogs'
import Projects from './components/projects'
import Blog from './components/blog'
import Home from '../src/components/home'
import WhatWeDo from './components/whatwedo.js'
import Footer from './components/footer.js'
import AboutusRes from './components/aboutusres.js'

//pages
import Navbarmain from './pages/navbarmain'
import Aboutus from './components/aboutus';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/about"><Aboutus/></Route>
          <Route exact path="/aboutusres"><AboutusRes/></Route>
          <Route exact path="/whatwedo"><WhatWeDo /></Route>
          <Route exact path="/contact"><Footer /></Route>
          <Route exact path="/projects"><Projects /></Route>
          <Route exact path="/blogs"><Blogs /></Route>
          <Route exact path="/blogs/:slug"><Blog /></Route>
          <Route exact path="/github" render={() => (window.location = "https://github.com/Shardulsss")} />
          <Route exact path="/linkedin" render={() => (window.location = "https://www.linkedin.com/in/shardul-shetye-a4995a1a4/")} />
          <Route exact path="/insta" render={() => (window.location = "https://www.instagram.com/shetye_shardul/")} />

        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
