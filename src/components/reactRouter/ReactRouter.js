import React from 'react';
import {
  Link,
  matchRoutes,
  //   Route,
  //   Routes,
  useLocation,
  useRoutes,
} from 'react-router-dom';
import Dashboard from './Dashboard';
import Page from './Page';
import './ReactRouter.css';

export const NavLink = ({
  to,
  exact,
  className,
  activeClassName,
  inactiveClassName,
  ...rest
}) => {
  const location = useLocation();
  const routeMatches = matchRoutes(routes, location);
  let isActive;
  if (exact) {
    isActive = location.pathname === to;
  } else {
    isActive = routeMatches.some((match) => match.pathname === to);
  }
  const allClasses =
    className + (isActive ? ` ${activeClassName}` : ` ${inactiveClassName}`);
  return <Link to={to} className={allClasses} {...rest}></Link>;
};

const routes = [
  {
    path: '/',
    element: <Dashboard title={'Dashboard'} />,
    children: [
      { path: '/', element: <p>Overview</p> },
      { path: '/new-user', element: <p>New User</p> },
      { path: '/sales', element: <p>Sales</p> },
    ],
  },
  { path: '/projects', element: <Page title={'Projects'} /> },
  { path: '/team', element: <Page title={'Team'} /> },
  { path: '/calendar', element: <Page title={'Calendar'} /> },
];

const ReactRouter = () => {
  const element = useRoutes(routes);
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
        {element}
        {/* <Routes> */}
        {/*  <Route path="/" element={<Dashboard title={'Dashboard'}></Dashboard>}>
            <Route path="/" element={<p>Overview</p>} />
            <Route path="/new-user" element={<p>New User</p>} />
            <Route path="/sales" element={<p>Sales</p>} />
          </Route>
          <Route
            path="/projects"
            element={<Page title={'Projects'}></Page>}
          ></Route>
          <Route path="/team" element={<Page title={'Team'}></Page>}></Route>
          <Route
            path="/calendar"
            element={<Page title={'Calendar'}></Page>}
          ></Route> */}
        {/* </Routes> */}
      </main>
    </div>
  );
};

export default ReactRouter;
