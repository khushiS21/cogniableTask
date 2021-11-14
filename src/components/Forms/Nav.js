import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();
  return (
    <div className="nav-container">
      <h5 className="mb-4">Update learners info</h5>
      <ul className="nav-list">
        <Link to="/forms/general">
          <li className={location.pathname === '/forms/general' ? 'visited' : ''}>
            <div className="nav-icon" /> <p>General info</p> <img src="/next.png" alt="" />
          </li>
        </Link>
        <Link to="/forms/personal">
          <li className={location.pathname === '/forms/personal' ? 'visited' : ''}>
            <div className="nav-icon" /> <p>Personal info</p> <img src="/next.png" alt="" />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
