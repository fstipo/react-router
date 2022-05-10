import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './ReactRouter.css';

export const NavLink = ({
  to,
  className,
  activeClassName,
  inactiveClassName,
  ...rest
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const allClasses =
    className + (isActive ? ` ${activeClassName}` : ` ${inactiveClassName}`);
  return <Link to={to} className={allClasses} {...rest}></Link>;
};

const ReactRouter = () => {
  return (
    <div className="container mt-3">
      <header className="d-flex justify-content-start align-items-center gap-2">
        <h2 className="text-success">ReactRouter</h2>
        <nav>
          <ul className="d-flex list-unstyled pt-2 gap-2">
            <li className="btn btn-link text-decoration-none">
              <NavLink
                className="text-dark text-decoration-none fw-bold"
                activeClassName={'active'}
                inactiveClassName={'inactive'}
                to="/"
              >
                Dashboard
              </NavLink>
            </li>
            <li className="btn btn-link text-decoration-none">
              <NavLink
                className="text-dark text-decoration-none fw-bold"
                activeClassName={'active'}
                inactiveClassName={'inactive'}
                to="/projects"
              >
                Projects
              </NavLink>
            </li>
            <li className="btn btn-link text-decoration-none">
              <NavLink
                className="text-dark text-decoration-none fw-bold"
                activeClassName={'active'}
                inactiveClassName={'inactive'}
                to="/team"
              >
                Team
              </NavLink>
            </li>
            <li className="btn btn-link text-decoration-none">
              <NavLink
                className="text-dark text-decoration-none fw-bold"
                activeClassName={'active'}
                inactiveClassName={'inactive'}
                to="/calendar"
              >
                Calendar
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      <main>
        <header>
          <h1>Dashboard</h1>
        </header>
        <section className="section__main">aaaaa</section>
      </main>
    </div>
  );
};

export default ReactRouter;
