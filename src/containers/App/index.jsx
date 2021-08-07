import { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import FontFaceObserver from 'fontfaceobserver';
import '../../index.css';

import Header from 'components/nav/Header';
import NotFoundPage from '../NotFoundPage';
import TodoList from '../TodoList/Loadable';

const App = () => {
  useEffect(() => {
    const quicksandObserver = new FontFaceObserver('Quicksand');

    quicksandObserver
      .load()
      .then(() => document.body.classList.add('fontLoaded'))
      .catch(ex => console.error(ex.message));
  }, []);

  return (
    <>
      <Header />

      <main>
        <Switch>
          <Route exact path="/" component={TodoList} />
          <Route exact path="/notfound" component={NotFoundPage} />
          <Redirect to="/notfound" />
        </Switch>
      </main>
    </>
  );
};

export default App;
