import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from './ReactRouter';

const Dashboard = () => {
  return (
    <>
      <header className="d-flex justify-content-start align-items-center gap-3">
        <h1 className="">Dashboard</h1>
        <nav>
          <ul className="d-flex gap-1 list-unstyled mt-4">
            <li className="btn btn-link text-decoration-none">
              <NavLink
                className="nav-link text-dark text-decoration-none"
                exact={true}
                to=""
                activeClassName={'active__link'}
                inactiveClassName={'inactive__link'}
              >
                Overview
              </NavLink>
            </li>
            <li className="btn btn-link text-decoration-none">
              <NavLink
                className="nav-link text-dark text-decoration-none"
                activeClassName={'active__link'}
                inactiveClassName={'inactive__link'}
                to="new-user"
              >
                New user
              </NavLink>
            </li>
            <li className="btn btn-link text-decoration-none">
              <NavLink
                className="nav-link text-dark text-decoration-none"
                activeClassName={'active__link'}
                inactiveClassName={'inactive__link'}
                to="sales"
              >
                Sales
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <section className="section__main fw-bold">
        <Outlet />
      </section>
    </>
  );
};

export default Dashboard;
