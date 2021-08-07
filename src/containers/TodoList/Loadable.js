// Asynchronously loads the TodoList
import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
