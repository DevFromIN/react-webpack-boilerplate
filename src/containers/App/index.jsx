import { Redirect, Route, Switch } from 'react-router-dom';
import '../../index.css';

import NotFoundPage from '../NotFoundPage';
import TodoList from '../TodoList/Loadable';

const App = () => (
  <Switch>
    <Route exact path="/" component={TodoList} />
    <Route exact path="/notfound" component={NotFoundPage} />
    <Redirect to="/notfound" />
  </Switch>
);

export default App;
