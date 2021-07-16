import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import '../../index.css';

import NotFoundPage from '../NotFoundPage';
import TodoList from '../TodoList';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={TodoList} />
      <Route exact path="/notfound" component={NotFoundPage} />
      <Redirect to="/notfound" />
    </Switch>
  </Router>
);

export default App;
