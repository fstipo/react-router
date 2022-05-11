import React from 'react';
import {
  Link,
  matchRoutes,
  Outlet,
  //   Route,
  //   Routes,
  useLocation,
  useParams,
  useResolvedPath,
  useRoutes,
} from 'react-router-dom';
import Dashboard from './Dashboard';
import Page from './Page';
import './ReactRouter.css';

export const UserDetails = () => {
  let param = useParams();
  return <p>User {param.id} Details</p>;
};

export const NewUser = ({ title }) => {
  return (
    <div className="row">
      <div className="col">
        <p>New User</p>

        <header>
          <h2>User List:</h2>
          {[...Array(20).keys()].map((index) => (
            <div key={index}>
              <NavLink
                to={`${index}`}
                className="text-dark"
                activeClassName={'active__third '}
              >
                User {index}
              </NavLink>
            </div>
          ))}
        </header>
      </div>
      <div className="col">
        <Outlet />
      </div>
    </div>
  );
};

export const NavLink = ({
  to,
  exact,
  className,
  activeClassName,
  inactiveClassName,
  ...rest
}) => {
  const location = useLocation();
  const resolvedPath = useResolvedPath(to);

  const routeMatches = matchRoutes(routes, location);
  let isActive;

  if (exact) {
    isActive = location.pathname === resolvedPath.pathname;
  } else {
    isActive = routeMatches.some(
      (match) => match.pathname === resolvedPath.pathname
    );
  }
  const allClasses =
    className + (isActive ? ` ${activeClassName}` : ` ${inactiveClassName}`);
  return <Link to={to} className={allClasses} {...rest}></Link>;
};

const routes = [
  {
    path: '/dashboard',
    element: <Dashboard title={'Dashboard'} />,
    children: [
      { path: '', element: <p>Overview</p> },
      {
        path: 'new-user',
        element: <NewUser>New User</NewUser>,
        children: [{ path: ':id', element: <UserDetails></UserDetails> }],
      },
      { path: 'sales', element: <p>Sales</p> },
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
                to="/dashboard"
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
