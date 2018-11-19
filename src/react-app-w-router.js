import React from 'react';
import ReactDOM  from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

const mountNode = document.getElementById('app');

const App = () => (
  <Router>
    <div>

      <ul>
        <li><Link to="/">Link to: /</Link></li>
        <li><Link to="/page1">Link to: /page1</Link></li>
        <li><Link to="/page2">Link to: /page2</Link></li>
        <li><Link to="/does/not/exist">Link to: /does/not/exist</Link></li>
      </ul>
      <button onClick={()=>{location.reload();}}>reload page</button>

      <Switch>
        <Route exact path="/"      component={()=>(<h2>home</h2>)} />
        <Route exact path="/page1" component={()=>(<h2>page1</h2>)} />
        <Route exact path="/page2" component={()=>(<h2>page2</h2>)} />
        <Route                     component={()=>(<h2>no match</h2>)} />
      </Switch>

      <Route path="/" component={(props) =><div>{`props.location.pathname: ${props.location.pathname}`}</div>} />

    </div>
  </Router>
);

ReactDOM.render( <App/>, mountNode );

