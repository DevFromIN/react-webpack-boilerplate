import './styles.css';

const NotFoundPage = () => (
  <div className="wrapper">
    <p className="status-wrapper">
      <span className="status-code">404</span> | {' '}
      <span className="status-message">The page you are looking for is not found!</span>
    </p>
  </div>
);

export default NotFoundPage;
