import { NavLink } from 'react-router-dom';

import './styles.css';
import GitHubIcon from '../../static/icons/GitHub.png';

const Header = () => (
  <header>
    <NavLink className="header-title" to="/">
      <h2>React Webpack Boilerplate</h2>
    </NavLink>

    <a
      href="https://github.com/aboywithjs/react-webpack-boilerplate"
      rel="help noreferrer"
      target="_blank"
    >
      <img alt="GitHub" src={GitHubIcon} width="24px" />
    </a>
  </header>
);

export default Header;
