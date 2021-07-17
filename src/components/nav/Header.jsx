import './styles.css';
import GitHubIcon from '../../images/GitHub.png';

const Header = () => (
  <header>
    <h2 className="header-title">
      React Webpack Boilerplate
    </h2>

    <a href="https://github.com/aboywithjs/react-webpack-boilerplate" target="_blank">
      <img alt="GitHub" src={GitHubIcon} width="24px" />
    </a>
  </header>
);

export default Header;
